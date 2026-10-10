<script setup lang="ts">
/**
 * XDropdownMenu 下拉菜单：点击触发器展开的操作菜单。
 * 支持子菜单（children）、字段映射（labelKey / valueKey / descriptionKey）、
 * 过滤搜索（filter / filterFields）、checkbox 选中态、portal 与 arrow。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, nextTick, ref } from 'vue'
import { ChevronDown } from '@lucide/vue'
import { DropdownMenuPortal, DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import type { AvatarProps } from '@/components/kit/XAvatar.vue'
import XButton from '@/components/kit/XButton.vue'
import XIcon from '@/components/kit/XIcon.vue'
import XDropdownMenuItems from './XDropdownMenuItems.vue'

type IconName = NonNullable<InstanceType<typeof XIcon>['$props']['name']>

export type MenuSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type MenuColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
export type MenuKbdSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type MenuAvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

/** 菜单图标：XIcon 名称或自定义组件 */
export type MenuIcon = IconName | Component

/** 菜单项头像：复用 XAvatar 属性（尺寸由菜单 size 决定） */
export type MenuAvatar = Omit<AvatarProps, 'size' | 'ui' | 'as' | 'class' | 'style'>

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface DropdownMenuUi {
  content?: string
  input?: string
  empty?: string
  viewport?: string
  arrow?: string
  group?: string
  label?: string
  separator?: string
  item?: string
  itemLeadingIcon?: string
  itemLeadingAvatar?: string
  itemLeadingAvatarSize?: MenuAvatarSize
  itemTrailing?: string
  itemTrailingIcon?: string
  itemTrailingKbds?: string
  itemTrailingKbdsSize?: MenuKbdSize
  itemWrapper?: string
  itemLabel?: string
  itemDescription?: string
  itemLabelExternalIcon?: string
}

export interface DropdownMenuItemData {
  /** 菜单项唯一标识（可用 valueKey 指定其他字段） */
  key?: string
  /** 菜单项标题（可用 labelKey 指定其他字段） */
  label?: string
  /** 菜单项说明文字（可用 descriptionKey 指定其他字段） */
  description?: string
  /** 快捷键数组 */
  kbds?: string[]
  /** 快捷键（单条简写，等价于 kbds: [shortcut]） */
  shortcut?: string
  /** 项类型：label 分组标题 / separator 分隔线 / checkbox 勾选项 */
  type?: 'label' | 'separator' | 'item' | 'checkbox'
  /** 是否禁用 */
  disabled?: boolean
  /** checkbox 选中态 */
  checked?: boolean
  /** 加载态：前置图标显示旋转的 loadingIcon */
  loading?: boolean
  /** 前置图标 */
  icon?: MenuIcon
  /** 前置头像 */
  avatar?: MenuAvatar
  /** 项语义色 */
  color?: MenuColor
  /** 链接目标，为 _blank 时标签后显示 externalIcon */
  target?: string
  /** 子菜单项 */
  children?: DropdownMenuItemData[]
  /** 子菜单受控展开状态 */
  open?: boolean
  /** 子菜单默认展开状态 */
  defaultOpen?: boolean
  /** 选中回调 */
  onSelect?: (item: DropdownMenuItemData) => void
  /** checkbox 选中态变化回调 */
  onUpdateChecked?: (checked: boolean) => void
  class?: HTMLAttributes['class']
  [key: string]: any
}

const props = withDefaults(defineProps<{
  /** 菜单项数组，二维数组时按行分组 */
  items?: DropdownMenuItemData[] | DropdownMenuItemData[][]
  /** 尺寸 */
  size?: MenuSize
  /** 是否打开（支持 v-model:open） */
  open?: boolean
  /** 默认打开状态（非受控） */
  defaultOpen?: boolean
  /** 模态：打开时锁定页面滚动与指针交互 */
  modal?: boolean
  /** 选择后关闭菜单 */
  closeOnSelect?: boolean
  /** 触发按钮文字 */
  triggerLabel?: string
  /** 菜单项标题字段 */
  labelKey?: string
  /** 菜单项值字段 */
  valueKey?: string
  /** 菜单项说明字段 */
  descriptionKey?: string
  /** checkbox 选中态图标 */
  checkedIcon?: MenuIcon
  /** 加载图标 */
  loadingIcon?: MenuIcon
  /** 外链图标，false 时隐藏 */
  externalIcon?: boolean | MenuIcon
  /** 顶部过滤搜索框，对象可配置占位文字 */
  filter?: boolean | { placeholder?: string }
  /** 过滤时匹配的字段，默认 [labelKey] */
  filterFields?: string[]
  /** 忽略过滤（适合自定义过滤场景） */
  ignoreFilter?: boolean
  /** 浮层定位配置 */
  content?: { align?: 'start' | 'center' | 'end'; side?: 'top' | 'right' | 'bottom' | 'left'; alignOffset?: number; sideOffset?: number }
  /** 浮层是否渲染到 body，可为选择器或指定容器元素 */
  portal?: boolean | string | HTMLElement
  /** 是否显示指向触发器的箭头 */
  arrow?: boolean
  /** 是否禁用触发按钮 */
  disabled?: boolean
  /** 主题插槽类名 */
  ui?: DropdownMenuUi
  class?: HTMLAttributes['class']
}>(), {
  items: () => [],
  size: 'md',
  open: undefined,
  defaultOpen: false,
  modal: true,
  closeOnSelect: true,
  triggerLabel: '操作',
  labelKey: 'label',
  valueKey: 'key',
  descriptionKey: 'description',
  checkedIcon: 'check',
  loadingIcon: 'loader-circle',
  externalIcon: true,
  filter: false,
  ignoreFilter: false,
  portal: true,
  arrow: false,
  disabled: false,
})

defineOptions({ name: 'XDropdownMenu' })

const emit = defineEmits<{
  /** 打开状态变化回调 */
  'update:open': [open: boolean]
  /** 选中菜单项回调 */
  select: [item: DropdownMenuItemData]
}>()

const innerOpen = ref(props.defaultOpen)

/* 子菜单在 RTL 布局下应使用反向箭头，本仓库仅支持 LTR */
const portalTarget = computed(() => (typeof props.portal === 'string' || (typeof HTMLElement !== 'undefined' && props.portal instanceof HTMLElement) ? props.portal : undefined))

const itemsProps = computed(() => ({
  items: props.items,
  size: props.size,
  closeOnSelect: props.closeOnSelect,
  labelKey: props.labelKey,
  valueKey: props.valueKey,
  descriptionKey: props.descriptionKey,
  checkedIcon: props.checkedIcon,
  loadingIcon: props.loadingIcon,
  externalIcon: props.externalIcon,
  filter: props.filter,
  filterFields: props.filterFields,
  ignoreFilter: props.ignoreFilter,
  content: props.content,
  portal: props.portal,
  arrow: props.arrow,
  ui: props.ui,
}))

function onOpenChange(next: boolean) {
  if (props.open == null) innerOpen.value = next
  emit('update:open', next)
}

function handleSelect(item: DropdownMenuItemData) {
  emit('select', item)
  if (!props.closeOnSelect) {
    /* 菜单内部选择后自动关闭，需要保持打开时在关闭后重新打开 */
    void nextTick(() => onOpenChange(true))
  }
}
</script>

<template>
  <DropdownMenuRoot :open="open ?? innerOpen" :modal="modal" @update:open="onOpenChange">
    <DropdownMenuTrigger as-child :disabled="disabled" :class="props.class">
      <slot name="trigger">
        <XButton variant="outline" color="neutral">
          {{ triggerLabel }}
          <ChevronDown class="size-4" />
        </XButton>
      </slot>
    </DropdownMenuTrigger>

    <XDropdownMenuItems v-if="portal === false" v-bind="itemsProps" @select="handleSelect">
      <template v-if="$slots.item" #item="slotData"><slot name="item" v-bind="slotData ?? {}" /></template>
      <template v-if="$slots['item-leading']" #item-leading="slotData"><slot name="item-leading" v-bind="slotData ?? {}" /></template>
      <template v-if="$slots['item-label']" #item-label="slotData"><slot name="item-label" v-bind="slotData ?? {}" /></template>
      <template v-if="$slots['item-description']" #item-description="slotData"><slot name="item-description" v-bind="slotData ?? {}" /></template>
      <template v-if="$slots['item-trailing']" #item-trailing="slotData"><slot name="item-trailing" v-bind="slotData ?? {}" /></template>
      <template v-if="$slots.empty" #empty="slotData"><slot name="empty" v-bind="slotData ?? {}" /></template>
      <template v-if="$slots['content-top']" #content-top="slotData"><slot name="content-top" v-bind="slotData ?? {}" /></template>
      <template v-if="$slots['content-bottom']" #content-bottom="slotData"><slot name="content-bottom" v-bind="slotData ?? {}" /></template>
    </XDropdownMenuItems>
    <DropdownMenuPortal v-else :to="portalTarget">
      <XDropdownMenuItems v-bind="itemsProps" @select="handleSelect">
        <template v-if="$slots.item" #item="slotData"><slot name="item" v-bind="slotData ?? {}" /></template>
        <template v-if="$slots['item-leading']" #item-leading="slotData"><slot name="item-leading" v-bind="slotData ?? {}" /></template>
        <template v-if="$slots['item-label']" #item-label="slotData"><slot name="item-label" v-bind="slotData ?? {}" /></template>
        <template v-if="$slots['item-description']" #item-description="slotData"><slot name="item-description" v-bind="slotData ?? {}" /></template>
        <template v-if="$slots['item-trailing']" #item-trailing="slotData"><slot name="item-trailing" v-bind="slotData ?? {}" /></template>
        <template v-if="$slots.empty" #empty="slotData"><slot name="empty" v-bind="slotData ?? {}" /></template>
        <template v-if="$slots['content-top']" #content-top="slotData"><slot name="content-top" v-bind="slotData ?? {}" /></template>
        <template v-if="$slots['content-bottom']" #content-bottom="slotData"><slot name="content-bottom" v-bind="slotData ?? {}" /></template>
      </XDropdownMenuItems>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
