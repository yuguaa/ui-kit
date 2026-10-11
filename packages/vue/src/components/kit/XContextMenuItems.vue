<script setup lang="ts">
/**
 * XContextMenuItems 右键菜单内容（内部组件）：
 * 渲染浮层、分组与菜单项，子菜单递归复用自身。
 */
import type { HTMLAttributes } from 'vue'
import { computed, reactive, useSlots, type Component } from 'vue'
import { createReusableTemplate } from '@vueuse/core'
import {
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from 'reka-ui'
import XAvatar from '@/components/kit/XAvatar.vue'
import XIcon from '@/components/kit/XIcon.vue'
import XKbd from '@/components/kit/XKbd.vue'
import { cn } from '@/lib/utils'
/** 菜单项数据模型（本地类型定义，宽松承载任意 item 字段） */
interface MenuItemData {
  type?: string
  label?: string
  description?: string
  icon?: string | Component
  avatar?: Record<string, any>
  color?: MenuColor
  checked?: boolean
  loading?: boolean
  target?: string
  kbds?: any[]
  shortcut?: string
  children?: MenuItemData[]
  onSelect?: (item: MenuItemData) => void
  onUpdateChecked?: (checked: boolean) => void
  [key: string]: any
}

type MenuSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type MenuColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type MenuIcon = string | Component
type ContextMenuUi = Record<string, any>

interface ContextMenuItemData extends MenuItemData {}

type KbdSize = NonNullable<InstanceType<typeof XKbd>['$props']['size']>
type AvatarSize = NonNullable<InstanceType<typeof XAvatar>['$props']['size']>

/** 项尺寸：内边距与字号随 size 变化 */
const sizeItemClasses: Record<MenuSize, string> = {
  xs: 'p-1 text-xs gap-1',
  sm: 'p-1.5 text-xs gap-1.5',
  md: 'p-1.5 text-sm gap-1.5',
  lg: 'p-2 text-sm gap-2',
  xl: 'p-2 text-base gap-2',
}

/** 分组标签尺寸 */
const sizeLabelClasses: Record<MenuSize, string> = {
  xs: 'p-1 text-xs gap-1',
  sm: 'p-1.5 text-xs gap-1.5',
  md: 'p-1.5 text-sm gap-1.5',
  lg: 'p-2 text-sm gap-2',
  xl: 'p-2 text-base gap-2',
}

/** 图标尺寸 */
const sizeIconClasses: Record<MenuSize, string> = {
  xs: 'size-4',
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-5',
  xl: 'size-6',
}

/** 头像尺寸映射 */
const sizeAvatarMap: Record<MenuSize, AvatarSize> = {
  xs: 'xs',
  sm: 'xs',
  md: 'sm',
  lg: 'sm',
  xl: 'md',
}

/** 快捷键尺寸映射 */
const sizeKbdMap: Record<MenuSize, KbdSize> = {
  xs: 'sm',
  sm: 'sm',
  md: 'md',
  lg: 'md',
  xl: 'lg',
}

/** 快捷键容器间距 */
const sizeKbdsGapClasses: Record<MenuSize, string> = {
  xs: 'gap-0.5',
  sm: 'gap-0.5',
  md: 'gap-0.5',
  lg: 'gap-1',
  xl: 'gap-1',
}

/** 项语义色：标题与前置图标 */
const menuItemColorClasses: Record<MenuColor, { item: string; icon: string }> = {
  primary: { item: 'text-primary', icon: 'text-primary/75' },
  secondary: { item: 'text-secondary-foreground', icon: 'text-muted-foreground' },
  neutral: { item: 'text-foreground', icon: 'text-muted-foreground' },
  success: { item: 'text-success', icon: 'text-success/75' },
  info: { item: 'text-info', icon: 'text-info/75' },
  warning: { item: 'text-warning', icon: 'text-warning/75' },
  error: { item: 'text-error', icon: 'text-error/75' },
}

const props = withDefaults(defineProps<{
  items?: ContextMenuItemData[] | ContextMenuItemData[][]
  size?: MenuSize
  sub?: boolean
  labelKey?: string
  valueKey?: string
  descriptionKey?: string
  checkedIcon?: MenuIcon
  loadingIcon?: MenuIcon
  externalIcon?: boolean | MenuIcon
  content?: { align?: 'start' | 'center' | 'end'; side?: 'top' | 'right' | 'bottom' | 'left'; alignOffset?: number; sideOffset?: number }
  portal?: boolean | string | HTMLElement
  ui?: ContextMenuUi
  class?: HTMLAttributes['class']
}>(), {
  items: () => [],
  size: 'md',
  sub: false,
  labelKey: 'label',
  valueKey: 'key',
  descriptionKey: 'description',
  checkedIcon: 'check',
  loadingIcon: 'loader-circle',
  externalIcon: true,
  portal: true,
})

const emit = defineEmits<{
  /** 选中菜单项回调 */
  select: [item: ContextMenuItemData]
}>()

const slots = useSlots()

/** 菜单项插槽作用域：透传给递归子菜单时提供完整类型 */
defineSlots<{
  item?: (props: { item: ContextMenuItemData; index: number; active: boolean }) => any
  'item-leading'?: (props: { item: ContextMenuItemData; index: number; active: boolean }) => any
  'item-label'?: (props: { item: ContextMenuItemData; index: number; active: boolean }) => any
  'item-description'?: (props: { item: ContextMenuItemData; index: number; active: boolean }) => any
  'item-trailing'?: (props: { item: ContextMenuItemData; index: number; active: boolean }) => any
  'content-top'?: (props: { sub: boolean }) => any
  'content-bottom'?: (props: { sub: boolean }) => any
}>()

/* checkbox 非受控选中态缓存 */
const checkedStates = reactive(new Map<string, boolean>())

const contentOptions = computed(() => ({
  align: props.content?.align ?? 'start',
  side: props.content?.side ?? 'right',
  alignOffset: props.content?.alignOffset ?? 0,
  sideOffset: props.content?.sideOffset ?? 0,
}))

const portalTarget = computed(() => (typeof props.portal === 'string' || (typeof HTMLElement !== 'undefined' && props.portal instanceof HTMLElement) ? props.portal : undefined))

/** 分组：平铺数组视为单组 */
const groups = computed<ContextMenuItemData[][]>(() => {
  if (!props.items.length) return []
  return Array.isArray(props.items[0]) ? (props.items as ContextMenuItemData[][]) : [props.items as ContextMenuItemData[]]
})

/** 按点分路径读取字段（支持嵌套对象） */
function getField(item: ContextMenuItemData, key: string): unknown {
  return key.split('.').reduce((acc: any, part) => (acc == null ? acc : acc[part]), item)
}

function itemValueOf(item: ContextMenuItemData, index: number): string {
  if (item.type === 'label' || item.type === 'separator') return `${item.type}-${index}`
  return String(getField(item, props.valueKey) ?? index)
}

function getChecked(item: ContextMenuItemData, itemKey: string): boolean {
  if (item.checked != null) return item.checked
  return checkedStates.get(itemKey) ?? false
}

function labelOf(item: ContextMenuItemData): string {
  return String(getField(item, props.labelKey) ?? '')
}

function descriptionOf(item: ContextMenuItemData): unknown {
  return getField(item, props.descriptionKey)
}

function kbdValuesOf(item: ContextMenuItemData): any[] {
  if (item.kbds?.length) return item.kbds
  return item.shortcut ? [item.shortcut] : []
}

function colorClassesOf(item: ContextMenuItemData) {
  return item.color != null ? menuItemColorClasses[item.color as MenuColor] : undefined
}

function handleSelect(item: ContextMenuItemData) {
  item.onSelect?.(item)
  emit('select', item)
}

function onCheckboxSelect(event: Event, item: ContextMenuItemData, itemKey: string) {
  event.preventDefault()
  const next = !getChecked(item, itemKey)
  if (item.checked == null) checkedStates.set(itemKey, next)
  item.onUpdateChecked?.(next)
}

/* 外链图标名：externalIcon 为字符串时取之，true 时用默认名 */
const externalIconName = computed(() => {
  if (typeof props.externalIcon === 'string') return props.externalIcon
  if (props.externalIcon === true || props.externalIcon == null) return 'external-link' as const
  return undefined
})

/* 复用模板：菜单项内容（leading / wrapper / trailing） */
const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate<{ item: ContextMenuItemData; index: number }>({
  props: {
    item: { type: Object, required: true },
    index: { type: Number, required: true },
  },
})
</script>

<template>
  <DefineItemTemplate v-slot="{ item, index }">
    <slot v-if="slots.item" name="item" :item="item" :index="index" :active="false" />
    <template v-else>
      <template v-if="slots['item-leading']">
        <slot name="item-leading" :item="item" :index="index" :active="false" />
      </template>
      <template v-else-if="item.loading">
        <XIcon
          v-if="typeof loadingIcon === 'string'"
          :name="loadingIcon"
          data-slot="itemLeadingIcon"
          :class="cn('shrink-0 animate-spin', sizeIconClasses[size], colorClassesOf(item)?.icon, props.ui?.itemLeadingIcon)"
          aria-hidden="true"
        />
        <component
          :is="loadingIcon"
          v-else-if="loadingIcon"
          data-slot="itemLeadingIcon"
          :class="cn('shrink-0 animate-spin', sizeIconClasses[size], colorClassesOf(item)?.icon, props.ui?.itemLeadingIcon)"
          aria-hidden="true"
        />
      </template>
      <template v-else-if="item.icon">
        <XIcon
          v-if="typeof item.icon === 'string'"
          :name="item.icon"
          data-slot="itemLeadingIcon"
          :class="cn('shrink-0', sizeIconClasses[size], colorClassesOf(item)?.icon, props.ui?.itemLeadingIcon)"
          aria-hidden="true"
        />
        <component
          :is="item.icon"
          v-else
          data-slot="itemLeadingIcon"
          :class="cn('shrink-0', sizeIconClasses[size], colorClassesOf(item)?.icon, props.ui?.itemLeadingIcon)"
          aria-hidden="true"
        />
      </template>
      <XAvatar
        v-else-if="item.avatar"
        v-bind="item.avatar"
        :size="(props.ui?.itemLeadingAvatarSize as AvatarSize) ?? sizeAvatarMap[size]"
        data-slot="itemLeadingAvatar"
        :class="cn('shrink-0', props.ui?.itemLeadingAvatar)"
      />

      <span
        v-if="labelOf(item) !== '' || descriptionOf(item) != null || slots['item-label'] || slots['item-description']"
        data-slot="itemWrapper"
        :class="cn('flex min-w-0 flex-1 flex-col text-start', props.ui?.itemWrapper)"
      >
        <span
          v-if="labelOf(item) !== '' || slots['item-label']"
          data-slot="itemLabel"
          :class="cn('truncate', colorClassesOf(item)?.item, props.ui?.itemLabel)"
        >
          <slot name="item-label" :item="item" :index="index" :active="false">{{ labelOf(item) }}</slot>
          <XIcon
            v-if="item.target === '_blank' && externalIcon !== false && externalIconName"
            :name="externalIconName"
            data-slot="itemLabelExternalIcon"
            :class="cn('inline-block size-3 align-top text-muted-foreground', props.ui?.itemLabelExternalIcon)"
            aria-hidden="true"
          />
          <component
            :is="externalIcon"
            v-else-if="item.target === '_blank' && externalIcon !== false"
            data-slot="itemLabelExternalIcon"
            :class="cn('inline-block size-3 align-top text-muted-foreground', props.ui?.itemLabelExternalIcon)"
            aria-hidden="true"
          />
        </span>
        <span
          v-if="descriptionOf(item) != null || slots['item-description']"
          data-slot="itemDescription"
          :class="cn('truncate text-xs text-muted-foreground', props.ui?.itemDescription)"
        >
          <slot name="item-description" :item="item" :index="index" :active="false">{{ descriptionOf(item) }}</slot>
        </span>
      </span>

      <span data-slot="itemTrailing" :class="cn('ms-auto inline-flex items-center gap-1.5', props.ui?.itemTrailing)">
        <slot name="item-trailing" :item="item" :index="index" :active="false">
          <XIcon
            v-if="item.children?.length"
            name="chevron-right"
            data-slot="itemTrailingIcon"
            :class="cn('shrink-0', sizeIconClasses[size], props.ui?.itemTrailingIcon)"
            aria-hidden="true"
          />
          <span
            v-else-if="kbdValuesOf(item).length"
            data-slot="itemTrailingKbds"
            :class="cn('inline-flex items-center shrink-0', sizeKbdsGapClasses[size], props.ui?.itemTrailingKbds)"
          >
            <XKbd v-for="(kbd, kbdIndex) in kbdValuesOf(item)" :key="kbdIndex" :size="(props.ui?.itemTrailingKbdsSize as KbdSize) ?? sizeKbdMap[size]">
              {{ kbd }}
            </XKbd>
          </span>
          <XIcon
            v-else-if="item.checked === true && typeof checkedIcon === 'string'"
            :name="checkedIcon"
            data-slot="itemTrailingIcon"
            :class="cn('shrink-0', sizeIconClasses[size], props.ui?.itemTrailingIcon)"
            aria-hidden="true"
          />
          <component
            :is="checkedIcon"
            v-else-if="item.checked === true"
            data-slot="itemTrailingIcon"
            :class="cn('shrink-0', sizeIconClasses[size], props.ui?.itemTrailingIcon)"
            aria-hidden="true"
          />
        </slot>
      </span>
    </template>
  </DefineItemTemplate>

  <component
    :is="sub ? ContextMenuSubContent : ContextMenuContent"
    data-slot="content"
    :align="sub ? 'start' : contentOptions.align"
    :side="sub ? 'right' : contentOptions.side"
    :align-offset="sub ? -3 : contentOptions.alignOffset"
    :side-offset="sub ? 0 : contentOptions.sideOffset"
    :class="cn(
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 bg-popover text-popover-foreground min-w-36 rounded-md p-1 shadow-lg ring-1 ring-border duration-100 z-50 overflow-x-hidden overflow-y-auto outline-none',
      props.ui?.content,
      props.class,
    )"
  >
    <slot name="content-top" :sub="sub" />

    <div
      role="presentation"
      data-slot="viewport"
      :class="cn('relative divide-y divide-border scroll-py-1 overflow-y-auto flex-1', props.ui?.viewport)"
    >
      <ContextMenuGroup
        v-for="(group, groupIndex) in groups"
        :key="`group-${groupIndex}`"
        data-slot="group"
        :class="cn('p-1 isolate', props.ui?.group)"
      >
        <template v-for="(item, index) in group" :key="`${groupIndex}-${index}`">
          <ContextMenuLabel
            v-if="item.type === 'label'"
            data-slot="label"
            :class="cn(
              'w-full flex items-center font-semibold text-muted-foreground',
              sizeLabelClasses[size],
              props.ui?.label,
              item.class,
            )"
          >
            <slot v-if="slots.item" name="item" :item="item" :index="index" :active="false" />
            <template v-else>{{ labelOf(item) }}</template>
          </ContextMenuLabel>

          <ContextMenuSeparator
            v-else-if="item.type === 'separator'"
            data-slot="separator"
            :class="cn('-mx-1 my-1 h-px bg-border', props.ui?.separator, item.class)"
          />

          <ContextMenuSub v-else-if="item.children?.length" :open="item.open" :default-open="item.defaultOpen">
            <ContextMenuSubTrigger
              as="button"
              type="button"
              :disabled="item.disabled"
              data-slot="item"
              :class="cn(
                'group relative w-full flex items-start select-none outline-none rounded-md',
                'data-highlighted:bg-muted data-disabled:cursor-not-allowed data-disabled:opacity-75',
                sizeItemClasses[size],
                colorClassesOf(item)?.item ?? 'text-foreground',
                props.ui?.item,
                item.class,
              )"
            >
              <ReuseItemTemplate :item="item" :index="index" />
            </ContextMenuSubTrigger>

            <XContextMenuItems
              v-if="portal === false"
              sub
              :items="item.children"
              :size="size"
              :label-key="labelKey"
              :value-key="valueKey"
              :description-key="descriptionKey"
              :checked-icon="checkedIcon"
              :loading-icon="loadingIcon"
              :external-icon="externalIcon"
              :portal="portal"
              :ui="ui"
              @select="handleSelect"
            >
              <template #item="slotData"><slot name="item" v-bind="slotData ?? {}" /></template>
              <template #item-leading="slotData"><slot name="item-leading" v-bind="slotData ?? {}" /></template>
              <template #item-label="slotData"><slot name="item-label" v-bind="slotData ?? {}" /></template>
              <template #item-description="slotData"><slot name="item-description" v-bind="slotData ?? {}" /></template>
              <template #item-trailing="slotData"><slot name="item-trailing" v-bind="slotData ?? {}" /></template>
            </XContextMenuItems>
            <ContextMenuPortal v-else :to="portalTarget">
              <XContextMenuItems
                sub
                :items="item.children"
                :size="size"
                :label-key="labelKey"
                :value-key="valueKey"
                :description-key="descriptionKey"
                :checked-icon="checkedIcon"
                :loading-icon="loadingIcon"
                :external-icon="externalIcon"
                :portal="portal"
                :ui="ui"
                @select="handleSelect"
              >
                <template #item="slotData"><slot name="item" v-bind="slotData ?? {}" /></template>
                <template #item-leading="slotData"><slot name="item-leading" v-bind="slotData ?? {}" /></template>
                <template #item-label="slotData"><slot name="item-label" v-bind="slotData ?? {}" /></template>
                <template #item-description="slotData"><slot name="item-description" v-bind="slotData ?? {}" /></template>
                <template #item-trailing="slotData"><slot name="item-trailing" v-bind="slotData ?? {}" /></template>
              </XContextMenuItems>
            </ContextMenuPortal>
          </ContextMenuSub>

          <ContextMenuItem
            v-else-if="item.type === 'checkbox'"
            :disabled="item.disabled"
            data-slot="item"
            :class="cn(
              'group relative w-full flex items-start select-none outline-none rounded-md',
              'data-highlighted:bg-muted data-disabled:cursor-not-allowed data-disabled:opacity-75',
              sizeItemClasses[size],
              colorClassesOf(item)?.item ?? 'text-foreground',
              props.ui?.item,
              item.class,
            )"
            @select="onCheckboxSelect($event, item, itemValueOf(item, index))"
          >
            <ReuseItemTemplate :item="{ ...item, checked: getChecked(item, itemValueOf(item, index)) }" :index="index" />
          </ContextMenuItem>

          <ContextMenuItem
            v-else
            :disabled="item.disabled"
            data-slot="item"
            :class="cn(
              'group relative w-full flex items-start select-none outline-none rounded-md',
              'data-highlighted:bg-muted data-disabled:cursor-not-allowed data-disabled:opacity-75',
              sizeItemClasses[size],
              colorClassesOf(item)?.item ?? 'text-foreground',
              props.ui?.item,
              item.class,
            )"
            @select="handleSelect(item)"
          >
            <ReuseItemTemplate :item="item" :index="index" />
          </ContextMenuItem>
        </template>
      </ContextMenuGroup>
    </div>

    <slot name="content-bottom" :sub="sub" />
  </component>
</template>
