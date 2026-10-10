<script setup lang="ts">
/**
 * XContextMenu 右键菜单：在触发区域右键唤出的上下文菜单。
 * reka ContextMenu 不支持受控 open，open prop 为 true 时通过在触发区域
 * 派发 contextmenu 事件打开菜单。
 * 支持子菜单（children）、字段映射（labelKey / valueKey / descriptionKey）、
 * checkbox 选中态与 portal 渲染配置。
 */
import type { HTMLAttributes } from 'vue'
import { computed, ref, useTemplateRef, watch } from 'vue'
import { ContextMenuPortal, ContextMenuRoot, ContextMenuTrigger } from 'reka-ui'
import type { AvatarProps } from '@/components/kit/XAvatar.vue'
import XContextMenuItems from './XContextMenuItems.vue'
import type { MenuColor, MenuIcon, MenuSize, MenuAvatarSize, MenuKbdSize } from './XDropdownMenu.vue'

/** 菜单项头像：复用 XAvatar 属性（尺寸由菜单 size 决定） */
export type ContextMenuAvatar = Omit<AvatarProps, 'size' | 'ui' | 'as' | 'class' | 'style'>

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface ContextMenuUi {
  content?: string
  viewport?: string
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

export interface ContextMenuItemData {
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
  avatar?: ContextMenuAvatar
  /** 项语义色 */
  color?: MenuColor
  /** 链接目标，为 _blank 时标签后显示 externalIcon */
  target?: string
  /** 子菜单项 */
  children?: ContextMenuItemData[]
  /** 子菜单受控展开状态 */
  open?: boolean
  /** 子菜单默认展开状态 */
  defaultOpen?: boolean
  /** 选中回调 */
  onSelect?: (item: ContextMenuItemData) => void
  /** checkbox 选中态变化回调 */
  onUpdateChecked?: (checked: boolean) => void
  class?: HTMLAttributes['class']
  [key: string]: any
}

const props = withDefaults(defineProps<{
  /** 菜单项数组，二维数组时按行分组 */
  items?: ContextMenuItemData[] | ContextMenuItemData[][]
  /** 尺寸 */
  size?: MenuSize
  /** 是否打开（为 true 时在触发区域派发 contextmenu 事件打开） */
  open?: boolean
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
  /** 浮层定位配置 */
  content?: { align?: 'start' | 'center' | 'end'; side?: 'top' | 'right' | 'bottom' | 'left'; alignOffset?: number; sideOffset?: number }
  /** 浮层是否渲染到 body，可为选择器或指定容器元素 */
  portal?: boolean | string | HTMLElement
  /** 模态：打开时锁定页面滚动与指针交互 */
  modal?: boolean
  /** 是否禁用触发区域 */
  disabled?: boolean
  /** 主题插槽类名 */
  ui?: ContextMenuUi
  class?: HTMLAttributes['class']
}>(), {
  items: () => [],
  size: 'md',
  open: undefined,
  labelKey: 'label',
  valueKey: 'key',
  descriptionKey: 'description',
  checkedIcon: 'check',
  loadingIcon: 'loader-circle',
  externalIcon: true,
  portal: true,
  modal: true,
  disabled: false,
})

defineOptions({ name: 'XContextMenu' })

const emit = defineEmits<{
  /** 打开状态变化回调 */
  'update:open': [open: boolean]
  /** 选中菜单项回调 */
  select: [item: ContextMenuItemData]
}>()

const innerOpen = ref(false)
const wrapperRef = useTemplateRef<HTMLElement>('wrapperRef')

/* open prop 为 true 时在触发区域派发 contextmenu 事件打开菜单 */
watch(
  [() => props.open, wrapperRef],
  ([value]) => {
    const trigger = wrapperRef.value?.querySelector('[data-slot=context-menu-trigger]')
    if (value && trigger) {
      trigger.dispatchEvent(new MouseEvent('contextmenu', { bubbles: true, cancelable: true }))
    }
  },
  { immediate: true },
)

const portalTarget = computed(() => (typeof props.portal === 'string' || (typeof HTMLElement !== 'undefined' && props.portal instanceof HTMLElement) ? props.portal : undefined))

const itemsProps = computed(() => ({
  items: props.items,
  size: props.size,
  labelKey: props.labelKey,
  valueKey: props.valueKey,
  descriptionKey: props.descriptionKey,
  checkedIcon: props.checkedIcon,
  loadingIcon: props.loadingIcon,
  externalIcon: props.externalIcon,
  content: props.content,
  portal: props.portal,
  ui: props.ui,
}))

function onOpenChange(next: boolean) {
  innerOpen.value = next
  emit('update:open', next)
}

function handleSelect(item: ContextMenuItemData) {
  emit('select', item)
}
</script>

<template>
  <ContextMenuRoot :modal="modal" @update:open="onOpenChange">
    <span ref="wrapperRef" class="contents">
      <ContextMenuTrigger :disabled="disabled" data-slot="context-menu-trigger" :class="props.class">
        <slot />
      </ContextMenuTrigger>
    </span>

    <XContextMenuItems v-if="portal === false" v-bind="itemsProps" @select="handleSelect">
      <template v-if="$slots.item" #item="slotData"><slot name="item" v-bind="slotData ?? {}" /></template>
      <template v-if="$slots['item-leading']" #item-leading="slotData"><slot name="item-leading" v-bind="slotData ?? {}" /></template>
      <template v-if="$slots['item-label']" #item-label="slotData"><slot name="item-label" v-bind="slotData ?? {}" /></template>
      <template v-if="$slots['item-description']" #item-description="slotData"><slot name="item-description" v-bind="slotData ?? {}" /></template>
      <template v-if="$slots['item-trailing']" #item-trailing="slotData"><slot name="item-trailing" v-bind="slotData ?? {}" /></template>
      <template v-if="$slots['content-top']" #content-top="slotData"><slot name="content-top" v-bind="slotData ?? {}" /></template>
      <template v-if="$slots['content-bottom']" #content-bottom="slotData"><slot name="content-bottom" v-bind="slotData ?? {}" /></template>
    </XContextMenuItems>
    <ContextMenuPortal v-else :to="portalTarget">
      <XContextMenuItems v-bind="itemsProps" @select="handleSelect">
        <template v-if="$slots.item" #item="slotData"><slot name="item" v-bind="slotData ?? {}" /></template>
        <template v-if="$slots['item-leading']" #item-leading="slotData"><slot name="item-leading" v-bind="slotData ?? {}" /></template>
        <template v-if="$slots['item-label']" #item-label="slotData"><slot name="item-label" v-bind="slotData ?? {}" /></template>
        <template v-if="$slots['item-description']" #item-description="slotData"><slot name="item-description" v-bind="slotData ?? {}" /></template>
        <template v-if="$slots['item-trailing']" #item-trailing="slotData"><slot name="item-trailing" v-bind="slotData ?? {}" /></template>
        <template v-if="$slots['content-top']" #content-top="slotData"><slot name="content-top" v-bind="slotData ?? {}" /></template>
        <template v-if="$slots['content-bottom']" #content-bottom="slotData"><slot name="content-bottom" v-bind="slotData ?? {}" /></template>
      </XContextMenuItems>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
