<script setup lang="ts">
/**
 * XNavigationMenu 导航菜单：为页面提供功能导航。
 * 垂直模式使用手风琴展开子菜单，collapsed 折叠为仅图标并用
 * popover / tooltip 展示子菜单与标签；水平模式使用 reka
 * NavigationMenu 原语悬浮展开内容面板。
 * 支持字段映射（labelKey / valueKey）、highlight 指示线与 ui 主题插槽。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, reactive, ref } from 'vue'
import { createReusableTemplate } from '@vueuse/core'
import {
  HoverCardContent,
  HoverCardPortal,
  HoverCardRoot,
  HoverCardTrigger,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
  Primitive,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from 'reka-ui'
import XAvatar from '@/components/kit/XAvatar.vue'
import XBadge from '@/components/kit/XBadge.vue'
import XChip from '@/components/kit/XChip.vue'
import XIcon from '@/components/kit/XIcon.vue'
import { cn } from '@/lib/utils'
import type { MenuColor, MenuIcon } from './XDropdownMenu.vue'
import type { AvatarSize } from './XAvatarGroupContext'

type NavigationMenuOrientation = 'horizontal' | 'vertical'
type NavigationMenuMode = 'vertical' | 'horizontal' | 'inline'
type NavigationMenuVariant = 'pill' | 'link'
type NavigationMenuType = 'single' | 'multiple'
type NavigationMenuContentOrientation = 'horizontal' | 'vertical'
type BadgeSize = NonNullable<InstanceType<typeof XBadge>['$props']['size']>
type ChipSize = NonNullable<InstanceType<typeof XChip>['$props']['size']>

/** 折叠态 tooltip 配置 */
export interface NavigationMenuTooltipOptions {
  /** 显示延迟（毫秒） */
  delayDuration?: number
  /** 浮层定位 */
  content?: { side?: 'top' | 'right' | 'bottom' | 'left'; sideOffset?: number }
}

/** 折叠态 popover 配置 */
export interface NavigationMenuPopoverOptions {
  /** 触发方式 */
  mode?: 'hover' | 'click'
  /** 浮层定位 */
  content?: {
    side?: 'top' | 'right' | 'bottom' | 'left'
    align?: 'start' | 'center' | 'end'
    alignOffset?: number
    sideOffset?: number
  }
}

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface NavigationMenuUi {
  root?: string
  list?: string
  label?: string
  item?: string
  link?: string
  linkLeadingIcon?: string
  linkLeadingAvatar?: string
  linkLeadingAvatarSize?: AvatarSize
  linkLeadingChipSize?: ChipSize
  linkTrailing?: string
  linkTrailingBadge?: string
  linkTrailingBadgeSize?: BadgeSize
  linkTrailingIcon?: string
  linkLabel?: string
  linkLabelExternalIcon?: string
  childList?: string
  childLabel?: string
  childItem?: string
  childLink?: string
  childLinkWrapper?: string
  childLinkIcon?: string
  childLinkLabel?: string
  childLinkLabelExternalIcon?: string
  childLinkDescription?: string
  separator?: string
  viewportWrapper?: string
  viewport?: string
  content?: string
  indicator?: string
  arrow?: string
}

export interface NavigationMenuItemData {
  /** 菜单项唯一标识（可用 valueKey 指定其他字段） */
  key?: string
  /** 菜单项标题（可用 labelKey 指定其他字段） */
  label?: string
  /** 前置图标 */
  icon?: MenuIcon
  /** 前置头像 */
  avatar?: Record<string, any>
  /** 尾部徽标 */
  badge?: string | number | Record<string, any>
  /** 图标外包裹 chip */
  chip?: boolean | Record<string, any>
  /** 折叠时用 tooltip 显示标签 */
  tooltip?: boolean | NavigationMenuTooltipOptions
  /** 折叠时用 popover 展示子菜单 */
  popover?: boolean | NavigationMenuPopoverOptions
  /** 尾部图标（无子菜单时也可显示） */
  trailingIcon?: MenuIcon
  /** 项类型：label 分组标题（仅垂直方向）/ trigger 强制可折叠 / link 链接 */
  type?: 'label' | 'trigger' | 'link'
  /** 子菜单项 */
  children?: NavigationMenuItemData[]
  /** 子项说明（水平方向子菜单中显示） */
  description?: string
  /** 链接目标，为 _blank 时标签后显示 externalIcon */
  target?: string
  /** 默认展开（垂直手风琴） */
  defaultOpen?: boolean
  /** 受控展开（垂直手风琴） */
  open?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 选中回调 */
  onSelect?: (item: NavigationMenuItemData) => void
  class?: HTMLAttributes['class']
  [key: string]: any
}

/** 语义色文字：选中项与图标（link 变体） */
const navColorTextClasses: Record<MenuColor, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary-foreground',
  neutral: 'text-foreground',
  success: 'text-success',
  info: 'text-info',
  warning: 'text-warning',
  error: 'text-error',
}

/** 语义色选中背景（pill 变体） */
const navActivePillClasses: Record<MenuColor, string> = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary text-secondary-foreground',
  neutral: 'bg-muted text-foreground',
  success: 'bg-success/10 text-success',
  info: 'bg-info/10 text-info',
  warning: 'bg-warning/10 text-warning',
  error: 'bg-error/10 text-error',
}

/** 语义色指示线 */
const navHighlightLineClasses: Record<MenuColor, string> = {
  primary: 'after:bg-primary',
  secondary: 'after:bg-secondary',
  neutral: 'after:bg-inverted',
  success: 'after:bg-success',
  info: 'after:bg-info',
  warning: 'after:bg-warning',
  error: 'after:bg-error',
}

/** 把受控值统一转为数组 */
function toValueList(value: string | string[] | undefined): string[] {
  if (value == null) return []
  return Array.isArray(value) ? value : [value]
}

const props = withDefaults(defineProps<{
  /** 菜单项数组，二维数组时渲染多列表并以分隔线隔开 */
  items: NavigationMenuItemData[] | NavigationMenuItemData[][]
  /** 当前选中的 key（或 valueKey 字段值），用于高亮当前项 */
  selectedKeys?: string[]
  /** 受控值：水平方向为打开的面板项值，垂直方向为展开的手风琴项值 */
  value?: string | string[]
  /** 非受控初始值 */
  defaultValue?: string | string[]
  /** 垂直方向手风琴展开模式：single 单开，multiple 多开 */
  type?: NavigationMenuType
  /** 垂直方向手风琴是否可关闭已展开项 */
  collapsible?: boolean
  /** 根级禁用（垂直方向手风琴） */
  disabled?: boolean
  /** 菜单模式（kit 既有属性，inline 等同垂直手风琴） */
  mode?: NavigationMenuMode
  /** 排列方向 */
  orientation?: NavigationMenuOrientation
  /** 语义色：选中项文字颜色 */
  color?: MenuColor
  /** 预设样式 */
  variant?: NavigationMenuVariant
  /** 垂直方向折叠为仅图标，子菜单用 popover / 标签用 tooltip 展示 */
  collapsed?: boolean
  /** 折叠时显示标签提示 */
  tooltip?: boolean | NavigationMenuTooltipOptions
  /** 折叠时子菜单用 popover 展示 */
  popover?: boolean | NavigationMenuPopoverOptions
  /** 选中项显示指示线 */
  highlight?: boolean
  /** 指示线颜色 */
  highlightColor?: MenuColor
  /** 子菜单展开图标 */
  trailingIcon?: MenuIcon
  /** 外链图标，false 时隐藏 */
  externalIcon?: boolean | MenuIcon
  /** 水平方向显示指示箭头 */
  arrow?: boolean
  /** 水平方向内容面板配置 */
  content?: { align?: 'start' | 'center' | 'end'; alignOffset?: number }
  /** 内容面板排列方向（仅水平模式） */
  contentOrientation?: NavigationMenuContentOrientation
  /** 菜单项标题字段 */
  labelKey?: string
  /** 菜单项值字段 */
  valueKey?: string
  /** 菜单主题（kit 既有属性，dark 为深色底） */
  theme?: 'light' | 'dark'
  /** 渲染为指定元素或组件（根容器） */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: NavigationMenuUi
  class?: HTMLAttributes['class']
}>(), {
  selectedKeys: () => [],
  value: undefined,
  defaultValue: undefined,
  type: 'multiple',
  collapsible: true,
  disabled: false,
  mode: 'vertical',
  orientation: undefined,
  color: 'primary',
  variant: 'pill',
  collapsed: false,
  tooltip: false,
  popover: false,
  highlight: false,
  highlightColor: 'primary',
  trailingIcon: 'chevron-down',
  externalIcon: true,
  arrow: false,
  contentOrientation: 'horizontal',
  labelKey: 'label',
  valueKey: 'key',
  theme: 'light',
})

defineOptions({ name: 'XNavigationMenu', inheritAttrs: false })

const emit = defineEmits<{
  /** 点击菜单项的回调 */
  click: [item: NavigationMenuItemData]
  /** 选中菜单项的回调 */
  select: [item: NavigationMenuItemData]
  /** 展开值变化回调 */
  valueChange: [value: string | string[] | undefined]
}>()

const resolvedOrientation = computed<NavigationMenuOrientation>(
  () => props.orientation ?? (props.mode === 'horizontal' ? 'horizontal' : 'vertical'),
)
const isHorizontal = computed(() => resolvedOrientation.value === 'horizontal')
const isCollapsed = computed(() => !isHorizontal.value && props.collapsed)

/* 垂直手风琴非受控展开项：受控值存在时由 value 驱动 */
const innerOpenKeys = ref<Set<string>>(new Set(toValueList(props.defaultValue)))
/* 水平模式浮层非受控值：子项选择后关闭 */
const innerOpenValue = ref<string | null>(typeof props.defaultValue === 'string' ? props.defaultValue : null)
/* 折叠 popover 受控开合（item-content 插槽 close 回调） */
const popoverOpenStates = reactive(new Map<string, boolean>())

/** 垂直手风琴项是否展开 */
function isItemOpen(key: string): boolean {
  return props.value != null ? toValueList(props.value).includes(key) : innerOpenKeys.value.has(key)
}

/** 手风琴项开合：受控值由调用方维护，非受控值组件内部维护 */
function toggleItem(key: string) {
  const current = props.value != null ? toValueList(props.value) : [...innerOpenKeys.value]
  const next = current.includes(key)
    ? props.collapsible
      ? current.filter((k) => k !== key)
      : current
    : props.type === 'single'
      ? [key]
      : [...current, key]
  if (props.value == null) innerOpenKeys.value = new Set(next)
  emit('valueChange', (props.value != null ? Array.isArray(props.value) : props.type === 'multiple') ? next : next[0])
}

/** 水平浮层开合 */
function changeOpenValue(next: string | null) {
  if (props.value == null) innerOpenValue.value = next
  emit('valueChange', next ?? undefined)
}

const openValue = computed(() => (typeof props.value === 'string' ? props.value : innerOpenValue.value))

/** 水平模式浮层受控值桥接 */
const openValueModel = computed({
  get: () => openValue.value ?? undefined,
  set: (next: string | undefined) => changeOpenValue(next ?? null),
})

const tooltipOptions = computed<NavigationMenuTooltipOptions>(() => (typeof props.tooltip === 'object' ? props.tooltip : {}))
const popoverOptions = computed<NavigationMenuPopoverOptions>(() => (typeof props.popover === 'object' ? props.popover : {}))

/** 分组：平铺数组视为单组 */
const lists = computed<NavigationMenuItemData[][]>(() => {
  if (!props.items.length) return []
  return Array.isArray(props.items[0]) ? (props.items as NavigationMenuItemData[][]) : [props.items as NavigationMenuItemData[]]
})

/* 外链图标名：externalIcon 为字符串时取之，true 时用默认名 */
const externalIconValue = computed(() => {
  if (props.externalIcon === false) return undefined
  if (typeof props.externalIcon === 'string') return props.externalIcon
  return 'external-link' as const
})

/** 按点分路径读取字段（支持嵌套对象） */
function getField(item: NavigationMenuItemData, key: string): unknown {
  return key.split('.').reduce((acc: any, part) => (acc == null ? acc : acc[part]), item)
}

function itemValueOf(item: NavigationMenuItemData, index: number, level: number, listIndex: number): string {
  const prefix = lists.value.length > 1 ? `group-${listIndex}-` : ''
  return String(getField(item, props.valueKey) ?? (level > 0 ? `${prefix}item-${level}-${index}` : `${prefix}item-${index}`))
}

function itemLabelOf(item: NavigationMenuItemData): string {
  return String(getField(item, props.labelKey) ?? '')
}

function childKeyOf(child: NavigationMenuItemData, childIndex: number): string {
  return String(getField(child, props.valueKey) ?? `child-${childIndex}`)
}

function isSelected(itemKey: string): boolean {
  return props.selectedKeys.includes(itemKey)
}

function handleSelect(item: NavigationMenuItemData) {
  item.onSelect?.(item)
  emit('click', item)
  emit('select', item)
}

/** 水平面板子项选择：选中后关闭浮层 */
function handleChildSelect(child: NavigationMenuItemData) {
  handleSelect(child)
  changeOpenValue(null)
}

/** 折叠 popover 受控开合 */
function setPopoverOpen(itemKey: string, open: boolean) {
  popoverOpenStates.set(itemKey, open)
}

function popoverOpenOf(itemKey: string): boolean {
  return popoverOpenStates.get(itemKey) ?? false
}

/** 项级 tooltip 配置覆盖根级配置 */
function tooltipOptionsOf(item: NavigationMenuItemData): NavigationMenuTooltipOptions {
  if (typeof item.tooltip !== 'object' || item.tooltip == null) return tooltipOptions.value
  return {
    ...tooltipOptions.value,
    ...item.tooltip,
    content: { ...tooltipOptions.value.content, ...item.tooltip.content },
  }
}

/** 项级 popover 配置覆盖根级配置 */
function popoverOptionsOf(item: NavigationMenuItemData): NavigationMenuPopoverOptions {
  if (typeof item.popover !== 'object' || item.popover == null) return popoverOptions.value
  return {
    ...popoverOptions.value,
    ...item.popover,
    content: { ...popoverOptions.value.content, ...item.popover.content },
  }
}

/** 链接样式：基础 + 选中/悬停 + 变体 + 指示线 */
function linkClasses(item: NavigationMenuItemData, active: boolean, _level: number): string {
  return cn(
    'group relative w-full flex items-center gap-1.5 rounded-md text-sm font-medium outline-none',
    'focus-visible:outline-none focus-visible:before:outline-3 before:absolute before:z-[-1] before:rounded-md',
    isHorizontal.value ? 'px-2.5 py-1.5 before:inset-x-px before:inset-y-0' : 'px-2.5 py-1.5 before:inset-y-px before:inset-x-0',
    isCollapsed.value && 'px-1.5',
    item.disabled
      ? 'cursor-not-allowed opacity-75'
      : 'hover:text-highlighted hover:before:bg-muted/50 transition-colors before:transition-colors',
    active && props.variant === 'pill' && navActivePillClasses[props.color],
    active && props.variant === 'link' && navColorTextClasses[props.color],
    !active && 'text-muted-foreground',
    props.ui?.link,
    item.class,
  )
}

/** 指示线：垂直在左侧，水平在底部 */
function highlightClasses(active: boolean, level: number): string {
  if (!props.highlight || !active) return ''
  if (isHorizontal.value) {
    return cn(
      'after:absolute after:-bottom-2 after:inset-x-2.5 after:block after:h-px after:rounded-full',
      navHighlightLineClasses[props.highlightColor],
    )
  }
  if (level > 0) {
    return cn(
      'after:absolute after:-start-1.5 after:inset-y-0.5 after:block after:w-px after:rounded-full',
      navHighlightLineClasses[props.highlightColor],
    )
  }
  return ''
}

/** 复用模板：链接内容（前置 + 标签 + 尾部） */
const [DefineLinkContent, ReuseLinkContent] = createReusableTemplate<{
  item: NavigationMenuItemData
  index: number
  active: boolean
  open: boolean
  showTrailingChevron: boolean
}>({
  props: {
    item: { type: Object, required: true },
    index: { type: Number, required: true },
    active: { type: Boolean, default: false },
    open: { type: Boolean, default: false },
    showTrailingChevron: { type: Boolean, default: false },
  },
})

/** 复用模板：子菜单列表（水平内容面板与折叠 popover 共用） */
const [DefineChildList, ReuseChildList] = createReusableTemplate<{
  item: NavigationMenuItemData
  inPopover: boolean
}>({
  props: {
    item: { type: Object, required: true },
    inPopover: { type: Boolean, default: false },
  },
})

/** 复用模板：垂直模式菜单项（递归渲染嵌套子级） */
const [DefineVerticalItems, ReuseVerticalItems] = createReusableTemplate<{
  items: NavigationMenuItemData[]
  level: number
  listIndex: number
}>({
  props: {
    items: { type: Array, required: true },
    level: { type: Number, default: 0 },
    listIndex: { type: Number, default: 0 },
  },
})
</script>

<template>
  <DefineLinkContent v-slot="{ item, index, active, showTrailingChevron }">
    <slot v-if="$slots.item" name="item" :item="item" :index="index" :active="active" />
    <template v-else>
      <template v-if="$slots['item-leading']">
        <slot name="item-leading" :item="item" :index="index" :active="active" />
      </template>
      <template v-else-if="item.avatar">
        <XAvatar
          v-bind="item.avatar"
          :size="props.ui?.linkLeadingAvatarSize ?? 'sm'"
          data-slot="linkLeadingAvatar"
          :class="cn('shrink-0', props.ui?.linkLeadingAvatar)"
        />
      </template>
      <XChip
        v-else-if="item.icon && item.chip"
        inset
        standalone
        :size="props.ui?.linkLeadingChipSize ?? 'sm'"
        v-bind="typeof item.chip === 'object' ? item.chip : {}"
        data-slot="linkLeadingChip"
      >
        <XIcon
          v-if="typeof item.icon === 'string'"
          :name="item.icon"
          data-slot="linkLeadingIcon"
          :class="cn('shrink-0 size-5', props.ui?.linkLeadingIcon)"
          aria-hidden="true"
        />
        <component
          :is="item.icon"
          v-else
          data-slot="linkLeadingIcon"
          :class="cn('shrink-0 size-5', props.ui?.linkLeadingIcon)"
          aria-hidden="true"
        />
      </XChip>
      <XIcon
        v-else-if="item.icon && typeof item.icon === 'string'"
        :name="item.icon"
        data-slot="linkLeadingIcon"
        :class="cn('shrink-0 size-5', props.ui?.linkLeadingIcon)"
        aria-hidden="true"
      />
      <component
        :is="item.icon"
        v-else-if="item.icon"
        data-slot="linkLeadingIcon"
        :class="cn('shrink-0 size-5', props.ui?.linkLeadingIcon)"
        aria-hidden="true"
      />

      <span
        v-if="itemLabelOf(item) !== '' || $slots['item-label']"
        data-slot="linkLabel"
        :class="cn('truncate', isCollapsed && 'hidden', props.ui?.linkLabel)"
      >
        <slot name="item-label" :item="item" :index="index" :active="active">{{ itemLabelOf(item) }}</slot>
        <XIcon
          v-if="item.target === '_blank' && typeof externalIconValue === 'string'"
          :name="externalIconValue"
          data-slot="linkLabelExternalIcon"
          :class="cn('inline-block size-3 align-top text-muted-foreground', props.ui?.linkLabelExternalIcon)"
          aria-hidden="true"
        />
        <component
          :is="externalIconValue"
          v-else-if="item.target === '_blank' && externalIconValue"
          data-slot="linkLabelExternalIcon"
          :class="cn('inline-block size-3 align-top text-muted-foreground', props.ui?.linkLabelExternalIcon)"
          aria-hidden="true"
        />
      </span>

      <span
        v-if="item.badge != null || (showTrailingChevron && item.children?.length) || item.trailingIcon || $slots['item-trailing']"
        data-slot="linkTrailing"
        :class="cn('ms-auto inline-flex items-center gap-1.5', isCollapsed && 'hidden', props.ui?.linkTrailing)"
      >
        <slot name="item-trailing" :item="item" :index="index" :active="active">
          <XBadge
            v-if="item.badge != null"
            color="neutral"
            variant="outline"
            :size="props.ui?.linkTrailingBadgeSize ?? 'sm'"
            v-bind="(typeof item.badge === 'string' || typeof item.badge === 'number') ? { label: item.badge } : item.badge"
            data-slot="linkTrailingBadge"
            :class="cn('shrink-0', props.ui?.linkTrailingBadge)"
          />
          <XIcon
            v-if="showTrailingChevron && item.children?.length && typeof trailingIcon === 'string'"
            :name="trailingIcon"
            data-slot="linkTrailingIcon"
            :class="cn(
              'size-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180',
              props.ui?.linkTrailingIcon,
            )"
            aria-hidden="true"
          />
          <component
            :is="trailingIcon"
            v-else-if="showTrailingChevron && item.children?.length"
            data-slot="linkTrailingIcon"
            :class="cn(
              'size-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180',
              props.ui?.linkTrailingIcon,
            )"
            aria-hidden="true"
          />
          <XIcon
            v-else-if="item.trailingIcon && typeof item.trailingIcon === 'string'"
            :name="item.trailingIcon"
            data-slot="linkTrailingIcon"
            :class="cn('size-5 shrink-0', props.ui?.linkTrailingIcon)"
            aria-hidden="true"
          />
          <component
            :is="item.trailingIcon"
            v-else-if="item.trailingIcon"
            data-slot="linkTrailingIcon"
            :class="cn('size-5 shrink-0', props.ui?.linkTrailingIcon)"
            aria-hidden="true"
          />
        </slot>
      </span>
    </template>
  </DefineLinkContent>

  <DefineChildList v-slot="{ item, inPopover }">
    <ul data-slot="childList" :class="cn(inPopover ? 'isolate' : contentOrientation === 'horizontal' ? 'grid grid-cols-2 gap-2 p-2' : 'gap-1 p-2', props.ui?.childList)">
      <li
        v-if="inPopover"
        data-slot="childLabel"
        :class="cn('px-1.5 py-0.5 text-xs text-muted-foreground', props.ui?.childLabel)"
      >
        {{ itemLabelOf(item) }}
      </li>
      <li
        v-for="(child, childIndex) in item.children"
        :key="childIndex"
        data-slot="childItem"
        :class="cn(props.ui?.childItem, child.class)"
      >
        <template v-if="inPopover">
          <button
            type="button"
            :disabled="child.disabled"
            data-slot="childLink"
            :class="cn(
              'group relative flex size-full items-start gap-1.5 rounded-md p-1.5 text-start text-sm outline-none',
              'hover:bg-muted focus-visible:bg-muted disabled:pointer-events-none disabled:opacity-75',
              isSelected(childKeyOf(child, childIndex)) && 'text-primary',
              props.ui?.childLink,
            )"
            @click="handleSelect(child)"
          >
            <XIcon
              v-if="child.icon && typeof child.icon === 'string'"
              :name="child.icon"
              data-slot="childLinkIcon"
              :class="cn('shrink-0', props.ui?.childLinkIcon)"
              aria-hidden="true"
            />
            <component
              :is="child.icon"
              v-else-if="child.icon"
              data-slot="childLinkIcon"
              :class="cn('shrink-0', props.ui?.childLinkIcon)"
              aria-hidden="true"
            />
            <span data-slot="childLinkLabel" :class="cn('truncate', props.ui?.childLinkLabel)">
              {{ itemLabelOf(child) }}
              <XIcon
                v-if="child.target === '_blank' && typeof externalIconValue === 'string'"
                :name="externalIconValue"
                data-slot="childLinkLabelExternalIcon"
                :class="cn('inline-block size-3 align-top text-muted-foreground', props.ui?.childLinkLabelExternalIcon)"
                aria-hidden="true"
              />
            </span>
          </button>
        </template>

        <NavigationMenuLink
          v-else
          data-slot="childLink"
          :disabled="child.disabled"
          :class="cn(
            'group relative flex size-full items-start gap-2 rounded-md px-3 py-2 text-start text-sm outline-none',
            'hover:bg-muted focus-visible:bg-muted disabled:pointer-events-none disabled:opacity-75',
            isSelected(childKeyOf(child, childIndex)) && 'text-primary',
            props.ui?.childLink,
          )"
          @select="handleChildSelect(child)"
        >
          <XIcon
            v-if="child.icon && typeof child.icon === 'string'"
            :name="child.icon"
            data-slot="childLinkIcon"
            :class="cn('shrink-0', props.ui?.childLinkIcon)"
            aria-hidden="true"
          />
          <component
            :is="child.icon"
            v-else-if="child.icon"
            data-slot="childLinkIcon"
            :class="cn('shrink-0', props.ui?.childLinkIcon)"
            aria-hidden="true"
          />
          <div data-slot="childLinkWrapper" :class="cn('min-w-0', props.ui?.childLinkWrapper)">
            <p data-slot="childLinkLabel" :class="cn('truncate font-medium', props.ui?.childLinkLabel)">
              {{ itemLabelOf(child) }}
              <XIcon
                v-if="child.target === '_blank' && typeof externalIconValue === 'string'"
                :name="externalIconValue"
                data-slot="childLinkLabelExternalIcon"
                :class="cn('inline-block size-3 align-top text-muted-foreground', props.ui?.childLinkLabelExternalIcon)"
                aria-hidden="true"
              />
            </p>
            <p
              v-if="child.description != null"
              data-slot="childLinkDescription"
              :class="cn('text-muted-foreground', props.ui?.childLinkDescription)"
            >
              {{ child.description }}
            </p>
          </div>
        </NavigationMenuLink>
      </li>
    </ul>
  </DefineChildList>

  <DefineVerticalItems v-slot="{ items, level, listIndex }">
    <template v-for="(item, index) in items" :key="itemValueOf(item, index, level, listIndex)">
      <li
        v-if="!isHorizontal && item.type === 'label' && !isCollapsed"
        data-slot="label"
        :class="cn(
          'w-full flex items-center gap-1.5 font-semibold text-xs/5 text-muted-foreground px-2.5 py-1.5',
          props.ui?.label,
          item.class,
        )"
      >
        <ReuseLinkContent :item="item" :index="index" :active="false" :open="false" :show-trailing-chevron="false" />
      </li>

      <li
        v-else-if="(item.children?.length ?? 0) > 0 && !isCollapsed"
        data-slot="item"
        :class="cn('min-w-0', props.ui?.item)"
      >
        <button
          type="button"
          :disabled="item.disabled || disabled"
          :aria-expanded="item.open ?? isItemOpen(itemValueOf(item, index, level, listIndex))"
          data-slot="link"
          :class="cn(
            linkClasses(item, isSelected(itemValueOf(item, index, level, listIndex)), level),
            highlightClasses(isSelected(itemValueOf(item, index, level, listIndex)), level),
          )"
          @click="toggleItem(itemValueOf(item, index, level, listIndex))"
        >
          <ReuseLinkContent
            :item="item"
            :index="index"
            :active="isSelected(itemValueOf(item, index, level, listIndex))"
            :open="item.open ?? isItemOpen(itemValueOf(item, index, level, listIndex))"
            :show-trailing-chevron="true"
          />
        </button>

        <div
          v-if="item.open ?? isItemOpen(itemValueOf(item, index, level, listIndex))"
          data-slot="content"
          :class="cn('overflow-hidden', props.ui?.content)"
        >
          <ul
            data-slot="childList"
            :class="cn('ms-5 border-s border-border ps-1.5', props.ui?.childList)"
          >
            <ReuseVerticalItems :items="item.children ?? []" :level="level + 1" :list-index="listIndex" />
          </ul>
        </div>
      </li>

      <li
        v-else-if="(item.children?.length ?? 0) > 0 && isCollapsed && (popover || item.popover)"
        data-slot="item"
        :class="cn('min-w-0', props.ui?.item)"
      >
        <template v-if="popoverOptionsOf(item).mode === 'click'">
          <PopoverRoot
            :open="popoverOpenOf(itemValueOf(item, index, level, listIndex))"
            @update:open="(next: boolean) => setPopoverOpen(itemValueOf(item, index, level, listIndex), next)"
          >
            <PopoverTrigger as-child>
              <button
                type="button"
                data-slot="link"
                :class="cn(
                  linkClasses(item, isSelected(itemValueOf(item, index, level, listIndex)), level),
                  highlightClasses(isSelected(itemValueOf(item, index, level, listIndex)), level),
                )"
              >
                <ReuseLinkContent
                  :item="item"
                  :index="index"
                  :active="isSelected(itemValueOf(item, index, level, listIndex))"
                  :open="false"
                  :show-trailing-chevron="true"
                />
              </button>
            </PopoverTrigger>
            <PopoverPortal>
              <PopoverContent
                :side="popoverOptionsOf(item).content?.side ?? 'right'"
                :align="popoverOptionsOf(item).content?.align ?? 'start'"
                :align-offset="popoverOptionsOf(item).content?.alignOffset ?? 0"
                :side-offset="popoverOptionsOf(item).content?.sideOffset ?? 2"
                data-slot="content"
                :class="cn(
                  'min-h-6 rounded-md bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-border outline-none',
                  'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
                  props.ui?.content,
                )"
              >
                <slot
                  name="item-content"
                  :item="item"
                  :index="index"
                  :active="isSelected(itemValueOf(item, index, level, listIndex))"
                  :ui="props.ui"
                  :close="() => setPopoverOpen(itemValueOf(item, index, level, listIndex), false)"
                >
                  <ReuseChildList :item="item" :in-popover="true" />
                </slot>
              </PopoverContent>
            </PopoverPortal>
          </PopoverRoot>
        </template>

        <HoverCardRoot
          v-else
          :open="popoverOpenOf(itemValueOf(item, index, level, listIndex))"
          :open-delay="0"
          :close-delay="0"
          @update:open="(next: boolean) => setPopoverOpen(itemValueOf(item, index, level, listIndex), next)"
        >
          <HoverCardTrigger as-child>
            <button
              type="button"
              data-slot="link"
              :class="cn(
                linkClasses(item, isSelected(itemValueOf(item, index, level, listIndex)), level),
                highlightClasses(isSelected(itemValueOf(item, index, level, listIndex)), level),
              )"
            >
              <ReuseLinkContent
                :item="item"
                :index="index"
                :active="isSelected(itemValueOf(item, index, level, listIndex))"
                :open="false"
                :show-trailing-chevron="true"
              />
            </button>
          </HoverCardTrigger>
          <HoverCardPortal>
            <HoverCardContent
              :side="popoverOptionsOf(item).content?.side ?? 'right'"
              :align="popoverOptionsOf(item).content?.align ?? 'start'"
              :align-offset="popoverOptionsOf(item).content?.alignOffset ?? 0"
              :side-offset="popoverOptionsOf(item).content?.sideOffset ?? 2"
              data-slot="content"
              :class="cn(
                'min-h-6 rounded-md bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-border outline-none',
                'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
                props.ui?.content,
              )"
            >
              <slot
                name="item-content"
                :item="item"
                :index="index"
                :active="isSelected(itemValueOf(item, index, level, listIndex))"
                :ui="props.ui"
                :close="() => setPopoverOpen(itemValueOf(item, index, level, listIndex), false)"
              >
                <ReuseChildList :item="item" :in-popover="true" />
              </slot>
            </HoverCardContent>
          </HoverCardPortal>
        </HoverCardRoot>
      </li>

      <li v-else data-slot="item" :class="cn('min-w-0', props.ui?.item)">
        <button
          v-if="!isCollapsed || !(tooltip || item.tooltip)"
          type="button"
          :disabled="item.disabled || disabled"
          data-slot="link"
          :class="cn(
            linkClasses(item, isSelected(itemValueOf(item, index, level, listIndex)), level),
            highlightClasses(isSelected(itemValueOf(item, index, level, listIndex)), level),
          )"
          @click="handleSelect(item)"
        >
          <ReuseLinkContent
            :item="item"
            :index="index"
            :active="isSelected(itemValueOf(item, index, level, listIndex))"
            :open="false"
            :show-trailing-chevron="false"
          />
        </button>

        <TooltipProvider
          v-else
          :delay-duration="tooltipOptionsOf(item).delayDuration ?? 0"
        >
          <TooltipRoot>
            <TooltipTrigger as-child>
              <button
                type="button"
                :disabled="item.disabled || disabled"
                data-slot="link"
                :class="cn(
                  linkClasses(item, isSelected(itemValueOf(item, index, level, listIndex)), level),
                  highlightClasses(isSelected(itemValueOf(item, index, level, listIndex)), level),
                )"
                @click="handleSelect(item)"
              >
                <ReuseLinkContent
                  :item="item"
                  :index="index"
                  :active="isSelected(itemValueOf(item, index, level, listIndex))"
                  :open="false"
                  :show-trailing-chevron="false"
                />
              </button>
            </TooltipTrigger>
            <TooltipPortal>
              <TooltipContent
                :side="tooltipOptionsOf(item).content?.side ?? 'right'"
                :side-offset="tooltipOptionsOf(item).content?.sideOffset ?? 8"
                :class="cn(
                  'flex items-center gap-1 rounded-sm bg-background px-2.5 py-1 text-xs text-foreground shadow-sm ring-1 ring-border outline-none',
                  'data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
                )"
              >
                {{ itemLabelOf(item) }}
              </TooltipContent>
            </TooltipPortal>
          </TooltipRoot>
        </TooltipProvider>
      </li>
    </template>
  </DefineVerticalItems>

  <Primitive
    :as="as ?? 'nav'"
    data-slot="root"
    v-bind="$attrs"
    :class="cn(
      'relative flex gap-1.5',
      isHorizontal ? 'items-center justify-between' : 'flex-col',
      theme === 'dark' && 'bg-foreground p-2 text-background',
      props.ui?.root,
      props.class,
    )"
  >
    <template v-for="(list, listIndex) in lists" :key="`list-${listIndex}`">
      <div
        v-if="!isHorizontal && listIndex > 0"
        data-slot="separator"
        role="separator"
        :class="cn('h-px bg-border', props.ui?.separator)"
      />

      <NavigationMenuRoot
        v-if="isHorizontal"
        v-model:model-value="openValueModel"
        orientation="horizontal"
        :class="cn('contents', props.ui?.root)"
      >
        <slot name="list-leading" />

        <NavigationMenuList data-slot="list" :class="cn('isolate flex min-w-0 items-center', props.ui?.list)">
          <template v-for="(item, index) in list" :key="itemValueOf(item, index, 0, listIndex)">
            <NavigationMenuItem
              :value="itemValueOf(item, index, 0, listIndex)"
              data-slot="item"
              :class="cn('relative min-w-0 py-2', props.ui?.item)"
            >
              <template v-if="(item.children?.length ?? 0) > 0">
                <NavigationMenuTrigger
                  data-slot="link"
                  :disabled="item.disabled"
                  :class="cn(
                    linkClasses(item, isSelected(itemValueOf(item, index, 0, listIndex)), 0),
                    highlightClasses(isSelected(itemValueOf(item, index, 0, listIndex)), 0),
                  )"
                >
                  <ReuseLinkContent
                    :item="item"
                    :index="index"
                    :active="isSelected(itemValueOf(item, index, 0, listIndex))"
                    :open="false"
                    :show-trailing-chevron="true"
                  />
                </NavigationMenuTrigger>

                <NavigationMenuIndicator
                  v-if="arrow"
                  data-slot="indicator"
                  :class="cn(
                    'absolute bottom-0 z-10 flex h-2.5 items-end justify-center overflow-hidden opacity-0',
                    'data-[state=visible]:animate-in data-[state=visible]:fade-in data-[state=visible]:opacity-100 data-[state=hidden]:animate-out data-[state=hidden]:fade-out',
                    props.ui?.indicator,
                  )"
                >
                  <div
                    data-slot="arrow"
                    :class="cn('relative top-[50%] size-2.5 rotate-45 rounded-xs border border-border bg-popover', props.ui?.arrow)"
                  />
                </NavigationMenuIndicator>

                <NavigationMenuContent
                  data-slot="content"
                  :class="cn(
                    'absolute top-0 start-0 w-full max-h-[70vh] overflow-y-auto',
                    contentOrientation === 'vertical' && 'w-60',
                    props.ui?.content,
                  )"
                >
                  <slot
                    name="item-content"
                    :item="item"
                    :index="index"
                    :active="isSelected(itemValueOf(item, index, 0, listIndex))"
                    :ui="props.ui"
                    :close="() => changeOpenValue(null)"
                  >
                    <ReuseChildList :item="item" :in-popover="false" />
                  </slot>
                </NavigationMenuContent>
              </template>

              <NavigationMenuLink
                v-else
                data-slot="link"
                :disabled="item.disabled"
                :class="cn(
                  linkClasses(item, isSelected(itemValueOf(item, index, 0, listIndex)), 0),
                  highlightClasses(isSelected(itemValueOf(item, index, 0, listIndex)), 0),
                )"
                @select="handleSelect(item)"
              >
                <ReuseLinkContent
                  :item="item"
                  :index="index"
                  :active="isSelected(itemValueOf(item, index, 0, listIndex))"
                  :open="false"
                  :show-trailing-chevron="false"
                />
              </NavigationMenuLink>
            </NavigationMenuItem>
          </template>
        </NavigationMenuList>

        <slot name="list-trailing" />

        <div
          v-if="arrow"
          data-slot="viewportWrapper"
          :class="cn('contents', props.ui?.viewportWrapper)"
        >
          <NavigationMenuViewport
            data-slot="viewport"
            :class="cn(
              'relative w-full overflow-hidden rounded-md bg-popover shadow-lg ring-1 ring-border outline-none',
              'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
              props.ui?.viewport,
            )"
          />
        </div>

        <NavigationMenuViewport
          v-else
          data-slot="viewport"
          :class="cn(
            'relative w-full overflow-hidden rounded-md bg-popover shadow-lg ring-1 ring-border outline-none',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
            props.ui?.viewport,
          )"
        />
      </NavigationMenuRoot>

      <template v-else>
        <slot name="list-leading" />
        <ul data-slot="list" :class="cn('isolate min-w-0', props.ui?.list)">
          <ReuseVerticalItems :items="list" :level="0" :list-index="listIndex" />
        </ul>
        <slot name="list-trailing" />
      </template>
    </template>
  </Primitive>
</template>
