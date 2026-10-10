<script setup lang="ts">
/**
 * XSelectMenu 选择菜单：触发按钮 + 弹出选项列表（基于 reka-ui Combobox）。
 * mode 区分 combobox（菜单内搜索）与 listbox（纯列表）；
 * items 支持字符串、对象与二维分组数组，labelKey / valueKey / descriptionKey 映射字段；
 * 选项可带 type: 'label' | 'separator' 渲染分组标题与分隔线。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, onMounted, onScopeDispose, ref, toRaw, useAttrs, useSlots } from 'vue'
import { createReusableTemplate } from '@vueuse/core'
import {
  ComboboxAnchor,
  ComboboxArrow,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxPortal,
  ComboboxRoot,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxVirtualizer,
  FocusScope,
} from 'reka-ui'
import XAvatar from '@/components/kit/XAvatar.vue'
import XIcon from '@/components/kit/XIcon.vue'
import { cn } from '@/lib/utils'
import { compare, filterGroups, getDisplayValue, getField, isEmpty } from '@/lib/kit/menu-utils'

type IconName = 'check' | 'x' | 'chevron-down' | 'search' | 'loader-circle'
/** 图标：XIcon 名称或自定义组件 */
export type SelectMenuIcon = IconName | Component

export type SelectMenuSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type SelectMenuColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
export type SelectMenuVariant = 'outline' | 'soft' | 'subtle' | 'ghost' | 'none'
/** 选中值类型：单选为原始值，多选为数组 */
export type SelectMenuValue = string | number | boolean | null | Array<string | number | boolean> | undefined

/** 菜单内搜索框配置 */
export interface SelectMenuSearchInput {
  placeholder?: string
  disabled?: boolean
}

/** 浮层定位配置 */
export interface SelectMenuContentOptions {
  position?: 'popper' | 'inline'
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'right' | 'bottom' | 'left'
  alignOffset?: number
  sideOffset?: number
}

export interface SelectMenuItemData {
  label?: string
  description?: string
  icon?: SelectMenuIcon
  avatar?: Record<string, any>
  /** 项类型：label 分组标题 / separator 分隔线 / item 选项 */
  type?: 'label' | 'separator' | 'item'
  disabled?: boolean
  onSelect?: (e: Event) => void
  class?: HTMLAttributes['class']
  ui?: Record<string, string | undefined>
  [key: string]: any
}

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface SelectMenuUi {
  base?: string
  leading?: string
  leadingIcon?: string
  leadingAvatar?: string
  leadingAvatarSize?: string
  trailing?: string
  trailingIcon?: string
  trailingClear?: string
  value?: string
  placeholder?: string
  content?: string
  focusScope?: string
  input?: string
  viewport?: string
  group?: string
  empty?: string
  label?: string
  separator?: string
  item?: string
  itemLeadingIcon?: string
  itemLeadingAvatar?: string
  itemLeadingAvatarSize?: string
  itemWrapper?: string
  itemLabel?: string
  itemDescription?: string
  itemTrailing?: string
  itemTrailingIcon?: string
  arrow?: string
}

const props = withDefaults(defineProps<{
  /** 选项数据源，二维数组时按行分组 */
  items?: SelectMenuItemData[] | SelectMenuItemData[][]
  /** 选中值（支持 v-model） */
  modelValue?: string | number | boolean | null | Array<string | number | boolean>
  /** 非受控初始值 */
  defaultValue?: string | number | boolean | null | Array<string | number | boolean>
  /** 受控打开状态 */
  open?: boolean
  /** 初始打开状态 */
  defaultOpen?: boolean
  /** 受控搜索词（支持 v-model:search-term） */
  searchTerm?: string
  /** 底层模式：combobox 菜单内可搜索，listbox 纯列表 */
  mode?: 'combobox' | 'listbox'
  /** 菜单内搜索框：true 或 { placeholder, disabled } */
  searchInput?: boolean | SelectMenuSearchInput
  /** 组件颜色 */
  color?: SelectMenuColor
  /** 预设样式 */
  variant?: SelectMenuVariant
  /** 尺寸 */
  size?: SelectMenuSize
  /** 是否必填 */
  required?: boolean
  /** 占位提示文字 */
  placeholder?: string
  /** 展开图标 */
  trailingIcon?: SelectMenuIcon
  /** 选中态图标 */
  selectedIcon?: SelectMenuIcon
  /** 有选中项时显示清空按钮 */
  clear?: boolean
  /** 清空按钮图标 */
  clearIcon?: SelectMenuIcon
  /** 浮层定位配置 */
  content?: SelectMenuContentOptions
  /** 是否显示指向触发器的箭头 */
  arrow?: boolean
  /** 浮层是否渲染到 body，可为指定容器元素 */
  portal?: boolean | HTMLElement
  /** 虚拟滚动：true 或 { overscan, estimateSize } */
  virtualize?: boolean | { overscan?: number, estimateSize?: number }
  /** 选项值字段 */
  valueKey?: string
  /** 选项标签字段 */
  labelKey?: string
  /** 选项说明字段 */
  descriptionKey?: string
  /** 多选模式 */
  multiple?: boolean
  /** 高亮：始终显示颜色描边，类似聚焦态 */
  highlight?: boolean
  /** 保持移动端字号在所有断点一致 */
  fixed?: boolean
  /** 允许创建新选项：true / 'always' / { position, when } */
  createItem?: boolean | 'always' | { position?: 'top' | 'bottom', when?: 'empty' | 'always' }
  /** 过滤字段，默认 [labelKey] */
  filterFields?: string[]
  /** 忽略内置过滤（适合自定义过滤场景） */
  ignoreFilter?: boolean
  /** 是否自动聚焦 */
  autofocus?: boolean
  /** 自动聚焦延时（毫秒） */
  autofocusDelay?: number
  /** 指针悬停时高亮选项 */
  highlightOnHover?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 触发器 id */
  id?: string
  /** 表单字段名 */
  name?: string
  /** 前置图标 */
  icon?: SelectMenuIcon
  /** 前置头像 */
  avatar?: Record<string, any>
  /** 加载态 */
  loading?: boolean
  /** 渲染为指定元素或组件（触发按钮） */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: SelectMenuUi
  class?: HTMLAttributes['class']
}>(), {
  items: () => [],
  /* 显式 undefined：避免 Vue 对含 Boolean 的联合类型属性做 false 兜底 */
  modelValue: undefined,
  defaultValue: undefined,
  open: undefined,
  searchTerm: undefined,
  mode: 'combobox',
  searchInput: true,
  color: 'primary',
  variant: 'outline',
  size: 'md',
  required: false,
  labelKey: 'label',
  descriptionKey: 'description',
  multiple: false,
  highlight: false,
  fixed: false,
  createItem: false,
  ignoreFilter: false,
  autofocus: false,
  autofocusDelay: 0,
  highlightOnHover: true,
  disabled: false,
  loading: false,
  clear: false,
  clearIcon: 'x',
  arrow: false,
  portal: true,
  virtualize: false,
  trailingIcon: 'chevron-down',
  selectedIcon: 'check',
})

defineOptions({ name: 'XSelectMenu', inheritAttrs: false })

const attrs = useAttrs()
const slots = useSlots()

/** 选中值、打开状态、搜索词：受控属性优先，非受控使用内部状态 */
const innerValue = ref<string | number | boolean | null | Array<string | number | boolean> | undefined>(props.defaultValue)
const innerOpen = ref<boolean>(props.defaultOpen ?? false)
const innerSearchTerm = ref<string>(props.searchTerm ?? '')

const model = computed<SelectMenuValue>({
  get: () => (props.modelValue !== undefined ? props.modelValue : innerValue.value),
  set: (value) => {
    const changed = toRaw(model.value) !== toRaw(value)
    if (props.modelValue === undefined) innerValue.value = value
    if (changed) {
      emit('change', new Event('change'))
      if (props.multiple) searchTerm.value = ''
    }
    emit('update:modelValue', value)
  },
})
const open = computed<boolean>({
  get: () => (props.open !== undefined ? props.open : innerOpen.value),
  set: (value) => onOpenChange(value),
})
const searchTerm = computed<string>({
  get: () => (props.searchTerm !== undefined ? props.searchTerm : innerSearchTerm.value),
  set: (value) => {
    if (props.searchTerm === undefined) innerSearchTerm.value = value
    emit('update:searchTerm', value)
  },
})

const emit = defineEmits<{
  /** 值变化回调 */
  change: [event: Event]
  /** 关闭菜单时回调 */
  blur: [event: FocusEvent]
  /** 打开菜单时回调 */
  focus: [event: FocusEvent]
  /** 创建新选项时回调 */
  create: [value: string]
  /** 清空回调 */
  clear: []
  /** 高亮项变化回调 */
  highlight: [payload: { ref: HTMLElement, value: unknown } | undefined]
  /** 值变化回调 */
  'update:modelValue': [value: SelectMenuValue]
  /** 打开状态变化回调 */
  'update:open': [value: boolean]
  /** 搜索词变化回调 */
  'update:searchTerm': [value: string]
}>()

/* 单选使用 v-model，多选由父级传入数组 */
const labelField = computed(() => props.labelKey || 'label')
const descriptionField = computed(() => props.descriptionKey || 'description')

/** 分组：平铺数组视为单组 */
const groups = computed<SelectMenuItemData[][]>(() => {
  if (!props.items?.length) return []
  return Array.isArray(props.items[0])
    ? (props.items as SelectMenuItemData[][])
    : [props.items as SelectMenuItemData[]]
})
const flatItems = computed(() => groups.value.flatMap((group) => group))

function isStructural(item: SelectMenuItemData): boolean {
  return !!item?.type && ['label', 'separator'].includes(item.type)
}

/** 过滤：ignoreFilter 或空关键字时保持原样 */
const filteredGroups = computed(() => {
  if (props.ignoreFilter || !searchTerm.value) return groups.value

  const fields = Array.isArray(props.filterFields) ? props.filterFields : [labelField.value]
  return filterGroups(groups.value, searchTerm.value, { fields, isStructural })
})
const filteredItems = computed(() => filteredGroups.value.flatMap((group) => group))

function itemValue(item: SelectMenuItemData): any {
  return props.valueKey ? getField(item, props.valueKey) : item
}

/** 创建项：按 createItem 配置决定是否出现 */
const createItemValue = computed(() => {
  if (!props.createItem || !searchTerm.value) return false

  const candidate = props.valueKey ? { [props.valueKey]: searchTerm.value } : searchTerm.value
  const exists = filteredItems.value.some((item) => compare(item, candidate, props.valueKey))

  if (props.createItem === 'always' || (typeof props.createItem === 'object' && props.createItem.when === 'always')) {
    return !exists
  }
  return filteredItems.value.length === 0
})
const createItemPosition = computed(() =>
  typeof props.createItem === 'object' ? (props.createItem.position ?? 'bottom') : 'bottom',
)

/** 选中值列表 */
const selectedValues = computed<unknown[]>(() => {
  if (props.multiple) return Array.isArray(model.value) ? model.value : []
  return isEmpty(model.value) ? [] : [model.value]
})

/** 触发器显示文本：多选时逗号拼接 */
const displayValue = computed(() => {
  if (props.multiple && Array.isArray(model.value)) {
    return (
      model.value
        .map((value) => getDisplayValue(flatItems.value, value, { labelKey: labelField.value, valueKey: props.valueKey }))
        .filter((value): value is string => value != null && value !== '')
        .join(', ') || undefined
    )
  }
  return getDisplayValue(flatItems.value, model.value, { labelKey: labelField.value, valueKey: props.valueKey })
})

/** 清空按钮：有选中项且未禁用时展示 */
const showClear = computed(() => !!props.clear && !props.disabled && selectedValues.value.length > 0)

/** 菜单内搜索框：combobox 模式按 searchInput 渲染 */
const showSearchInput = computed(() => props.mode === 'combobox' && props.searchInput !== false)
const searchInputPlaceholder = computed(() =>
  typeof props.searchInput === 'object' ? (props.searchInput.placeholder ?? '输入关键字搜索') : '输入关键字搜索',
)

/** 前置区域：icon / avatar / leading 插槽占位 */
const showLeading = computed(() => !!props.icon || !!props.avatar || !!slots.leading)

function onOpenChange(value: boolean) {
  if (props.open === undefined) innerOpen.value = value
  emit('update:open', value)
  if (value) emit('focus', new FocusEvent('focus'))
  else emit('blur', new FocusEvent('blur'))
  if (!value) {
    /* 关闭动画结束后再清空搜索词，避免收起过程中选项闪动 */
    blurTimer = setTimeout(() => {
      if (!open.value) searchTerm.value = ''
    }, 100)
  } else {
    clearTimeout(blurTimer)
  }
}

function onClear() {
  if (props.disabled) return
  model.value = props.multiple ? [] : undefined
  emit('clear')
}

/** 触发器键盘：上下键直接展开菜单（触发器是焦点元素） */
function onTriggerKeydown(event: KeyboardEvent) {
  if (open.value) return
  event.preventDefault()
  ;(event.currentTarget as HTMLElement).click()
}

function onCreate(event: Event) {
  event.preventDefault()
  event.stopPropagation()
  emit('create', searchTerm.value)
}

function onSelect(event: Event, item: SelectMenuItemData) {
  if (!item || typeof item !== 'object') return
  if (item.disabled) {
    event.preventDefault()
    return
  }
  item.onSelect?.(event)
}

function onHighlight(payload: { ref: HTMLElement, value: unknown } | undefined) {
  emit('highlight', payload)
}

const triggerRef = ref<HTMLElement>()

function autoFocus() {
  if (props.autofocus) (triggerRef.value as any)?.$el?.focus?.({ focusVisible: true })
}

let autofocusTimer: ReturnType<typeof setTimeout> | undefined
let blurTimer: ReturnType<typeof setTimeout> | undefined

onMounted(() => {
  autofocusTimer = setTimeout(autoFocus, props.autofocusDelay)
})

onScopeDispose(() => {
  clearTimeout(autofocusTimer)
  clearTimeout(blurTimer)
})

/** 尺寸映射：base / item / label / empty / 图标 / 左右内边距 */
const sizeClasses: Record<SelectMenuSize, { base: string, leading: string, trailing: string, item: string, label: string, empty: string, icon: string }> = {
  xs: { base: 'h-6 text-sm', leading: 'ps-2', trailing: 'pe-2', item: 'p-1 text-xs gap-1', label: 'p-1 text-[10px] gap-1', empty: 'p-2 text-xs', icon: 'size-4' },
  sm: { base: 'h-7 text-sm', leading: 'ps-2.5', trailing: 'pe-2.5', item: 'p-1.5 text-xs gap-1.5', label: 'p-1.5 text-[10px] gap-1.5', empty: 'p-2.5 text-xs', icon: 'size-4' },
  md: { base: 'h-8 text-base', leading: 'ps-3', trailing: 'pe-3', item: 'p-1.5 text-sm gap-1.5', label: 'p-1.5 text-xs gap-1.5', empty: 'p-2.5 text-sm', icon: 'size-5' },
  lg: { base: 'h-9 text-base', leading: 'ps-3', trailing: 'pe-3', item: 'p-2 text-sm gap-2', label: 'p-2 text-xs gap-2', empty: 'p-3 text-sm', icon: 'size-5' },
  xl: { base: 'h-11 text-base', leading: 'ps-3.5', trailing: 'pe-3.5', item: 'p-2 text-base gap-2', label: 'p-2 text-sm gap-2', empty: 'p-3 text-base', icon: 'size-6' },
}

/** 变体映射 */
const variantClasses: Record<SelectMenuVariant, string> = {
  outline: 'bg-transparent ring-1 ring-inset ring-input hover:bg-muted/50',
  soft: 'bg-muted/50 hover:bg-muted',
  subtle: 'bg-muted ring-1 ring-inset ring-input',
  ghost: 'bg-transparent hover:bg-muted',
  none: 'bg-transparent',
}

/** 颜色映射：聚焦描边 */
const colorClasses: Record<SelectMenuColor, string> = {
  primary: 'focus-visible:ring-2 focus-visible:ring-primary-5',
  secondary: 'focus-visible:ring-2 focus-visible:ring-secondary',
  neutral: 'focus-visible:ring-2 focus-visible:ring-foreground',
  success: 'focus-visible:ring-2 focus-visible:ring-success-5',
  info: 'focus-visible:ring-2 focus-visible:ring-info-5',
  warning: 'focus-visible:ring-2 focus-visible:ring-warning-5',
  error: 'focus-visible:ring-2 focus-visible:ring-error-5',
}

/** 高亮描边颜色 */
const highlightClasses: Record<SelectMenuColor, string> = {
  primary: 'ring-primary-5',
  secondary: 'ring-secondary',
  neutral: 'ring-foreground/30',
  success: 'ring-success-5',
  info: 'ring-info-5',
  warning: 'ring-warning-5',
  error: 'ring-error-5',
}

const currentSize = computed(() => sizeClasses[props.size])

const virtualizerProps = computed(() => (typeof props.virtualize === 'object' ? props.virtualize : {}))

function isIconName(icon: SelectMenuIcon | undefined): icon is IconName {
  return typeof icon === 'string'
}

/** 图标：字符串走 XIcon，组件直接渲染 */
function renderIconClass(className?: string): string {
  return cn('shrink-0', className)
}

/* item 模板复用：虚拟滚动与普通列表共用同一份渲染 */
const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate<{ item: SelectMenuItemData, index: number }>()
</script>

<template>
  <DefineItemTemplate v-slot="{ item, index }">
    <slot name="item" :item="item" :index="index" :ui="ui">
      <ComboboxItem
        :value="itemValue(item)"
        :disabled="item?.disabled"
        :text-value="String(getField(item, labelField) ?? '')"
        data-slot="item"
        :class="cn(
          'relative flex w-full cursor-default items-start rounded-md outline-none select-none',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-75',
          'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
          currentSize.item,
          item.class,
          ui?.item,
          item.ui?.item,
        )"
        @select="onSelect($event, item)"
      >
        <slot name="item-leading" :item="item" :index="index" :ui="ui">
          <XIcon
            v-if="isIconName(item?.icon) && item.icon"
            :name="item.icon"
            data-slot="itemLeadingIcon"
            :class="cn('shrink-0 text-muted-foreground', currentSize.icon, ui?.itemLeadingIcon, item.ui?.itemLeadingIcon)"
            aria-hidden="true"
          />
          <component
            v-else-if="item?.icon"
            :is="item.icon"
            data-slot="itemLeadingIcon"
            :class="cn(currentSize.icon, ui?.itemLeadingIcon, item.ui?.itemLeadingIcon)"
            aria-hidden="true"
          />
          <XAvatar
            v-else-if="item?.avatar"
            v-bind="item.avatar"
            data-slot="itemLeadingAvatar"
            :class="cn('shrink-0', ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar)"
          />
        </slot>

        <span data-slot="itemWrapper" :class="cn('flex min-w-0 flex-1 flex-col', ui?.itemWrapper, item.ui?.itemWrapper)">
          <span data-slot="itemLabel" :class="cn('truncate', ui?.itemLabel, item.ui?.itemLabel)">
            <slot name="item-label" :item="item" :index="index">{{ getField(item, labelField) ?? item }}</slot>
          </span>
          <span
            v-if="getField(item, descriptionField) || slots['item-description']"
            data-slot="itemDescription"
            :class="cn('truncate text-muted-foreground', ui?.itemDescription, item.ui?.itemDescription)"
          >
            <slot name="item-description" :item="item" :index="index">{{ getField(item, descriptionField) }}</slot>
          </span>
        </span>

        <span data-slot="itemTrailing" :class="cn('ms-auto inline-flex items-center gap-1.5', ui?.itemTrailing, item.ui?.itemTrailing)">
          <slot name="item-trailing" :item="item" :index="index" :ui="ui" />
          <ComboboxItemIndicator as-child>
            <XIcon
              v-if="isIconName(selectedIcon)"
              :name="selectedIcon"
              data-slot="itemTrailingIcon"
              :class="cn('shrink-0', currentSize.icon, ui?.itemTrailingIcon, item.ui?.itemTrailingIcon)"
              aria-hidden="true"
            />
            <component
              :is="selectedIcon"
              v-else
              data-slot="itemTrailingIcon"
              :class="cn(currentSize.icon, ui?.itemTrailingIcon, item.ui?.itemTrailingIcon)"
              aria-hidden="true"
            />
          </ComboboxItemIndicator>
        </span>
      </ComboboxItem>
    </slot>
  </DefineItemTemplate>

  <ComboboxRoot
    v-slot="{ modelValue, open: slotOpen }"
    v-model="model as unknown as string | number | Array<string | number> | undefined"
    v-model:open="open"
    :disabled="disabled"
    :multiple="multiple"
    :required="required"
    :name="name"
    :highlight-on-hover="highlightOnHover"
    as-child
    ignore-filter
    @highlight="onHighlight"
  >
    <div class="relative">
      <ComboboxAnchor as-child>
      <ComboboxTrigger
        :id="id"
        ref="triggerRef"
        :as="as ?? 'button'"
        data-slot="base"
        tabindex="0"
        v-bind="attrs"
        :class="cn(
          'group relative flex w-full min-w-40 cursor-pointer items-center gap-2 rounded-md px-3 outline-none',
          'transition-[box-shadow,color] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-75',
          currentSize.base,
          variantClasses[variant],
          colorClasses[color],
          highlight && cn('ring-2 ring-inset', highlightClasses[color]),
          ui?.base,
          props.class,
        )"
        @keydown.down="onTriggerKeydown"
        @keydown.up="onTriggerKeydown"
      >
        <span
          v-if="showLeading"
          data-slot="leading"
          :class="cn('absolute inset-y-0 start-0 flex items-center', currentSize.leading, ui?.leading)"
        >
          <slot name="leading" :model-value="modelValue" :open="slotOpen" :ui="ui">
            <XIcon
              v-if="isIconName(icon) && icon"
              :name="icon"
              data-slot="leadingIcon"
              :class="renderIconClass(cn('text-muted-foreground', currentSize.icon, ui?.leadingIcon))"
              aria-hidden="true"
            />
            <component
              :is="icon"
              v-else-if="icon"
              data-slot="leadingIcon"
              :class="renderIconClass(cn(currentSize.icon, ui?.leadingIcon))"
              aria-hidden="true"
            />
            <XAvatar
              v-else-if="avatar"
              v-bind="avatar"
              data-slot="leadingAvatar"
              :class="cn('shrink-0', ui?.leadingAvatar)"
            />
          </slot>
        </span>

        <slot :model-value="modelValue" :open="slotOpen" :ui="ui">
          <span
            v-if="displayValue != null"
            data-slot="value"
            :class="cn('truncate', ui?.value)"
          >
            {{ displayValue }}
          </span>
          <span
            v-else
            data-slot="placeholder"
            :class="cn('truncate text-muted-foreground', ui?.placeholder)"
          >
            {{ placeholder ?? '&nbsp;' }}
          </span>
        </slot>

        <span
          v-if="!!slots.trailing || !!trailingIcon || loading"
          data-slot="trailing"
          :class="cn('ms-auto flex shrink-0 items-center gap-1.5', ui?.trailing)"
        >
          <slot name="trailing" :model-value="modelValue" :open="slotOpen" :ui="ui">
            <XIcon
              v-if="loading"
              name="loader-circle"
              data-slot="trailingIcon"
              :class="cn('animate-spin text-muted-foreground', currentSize.icon, ui?.trailingIcon)"
              aria-hidden="true"
            />
            <XIcon
              v-else-if="isIconName(trailingIcon)"
              :name="trailingIcon"
              data-slot="trailingIcon"
              :class="cn('shrink-0 text-muted-foreground transition-transform', slotOpen && 'rotate-180', currentSize.icon, ui?.trailingIcon)"
              aria-hidden="true"
            />
            <component
              :is="trailingIcon"
              v-else
              data-slot="trailingIcon"
              :class="cn('shrink-0 text-muted-foreground transition-transform', slotOpen && 'rotate-180', currentSize.icon, ui?.trailingIcon)"
              aria-hidden="true"
            />
          </slot>
        </span>
      </ComboboxTrigger>
    </ComboboxAnchor>

    <button
      v-if="showClear && !slots.trailing"
      type="button"
      tabindex="-1"
      aria-label="清空"
      data-slot="trailingClear"
      :class="cn('absolute inset-y-0 end-0 flex items-center', currentSize.trailing, 'text-muted-foreground opacity-70 hover:opacity-100', ui?.trailingClear)"
      @click="onClear"
    >
      <XIcon
        v-if="isIconName(clearIcon)"
        :name="clearIcon"
        class="size-3.5"
        aria-hidden="true"
      />
      <component :is="clearIcon" v-else class="size-3.5" aria-hidden="true" />
    </button>
    </div>

    <ComboboxPortal :disabled="portal === false" :to="typeof portal === 'object' ? portal : undefined">
      <ComboboxContent
        data-slot="content"
        :position="content?.position ?? 'popper'"
        :align="content?.align ?? 'start'"
        :side="content?.side ?? 'bottom'"
        :align-offset="content?.alignOffset"
        :side-offset="content?.sideOffset ?? 8"
        :class="cn(
          'z-50 flex w-[var(--reka-combobox-trigger-width)] min-w-40 flex-col overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md outline-none',
          ui?.content,
        )"
      >
        <FocusScope trapped data-slot="focusScope" :class="cn('flex min-h-0 flex-col', ui?.focusScope)">
          <slot name="content-top" />

          <ComboboxInput
            v-if="showSearchInput"
            v-model="searchTerm"
            :display-value="() => searchTerm"
            :placeholder="searchInputPlaceholder"
            :disabled="disabled || (typeof searchInput === 'object' && searchInput.disabled)"
            data-slot="input"
            :class="cn('h-9 w-full border-0 border-b bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground', ui?.input)"
          />

          <ComboboxEmpty
            v-if="!createItemValue"
            data-slot="empty"
            :class="cn('text-center text-muted-foreground', currentSize.empty, ui?.empty)"
          >
            <slot name="empty" :search-term="searchTerm">无匹配选项</slot>
          </ComboboxEmpty>

          <div data-slot="viewport" :class="cn('relative max-h-60 flex-1 overflow-y-auto scroll-py-1', ui?.viewport)">
            <template v-if="virtualize">
              <ComboboxGroup v-if="createItemValue && createItemPosition === 'top'" data-slot="group" :class="cn('p-1', ui?.group)">
                <ComboboxItem :value="searchTerm" data-slot="item" :class="cn('relative flex w-full items-start rounded-md', currentSize.item, ui?.item)" @select="onCreate">
                  <span data-slot="itemLabel" :class="cn('truncate', ui?.itemLabel)">
                    <slot name="create-item-label" :item="searchTerm">创建 "{{ searchTerm }}"</slot>
                  </span>
                </ComboboxItem>
              </ComboboxGroup>

              <ComboboxVirtualizer
                v-slot="{ option: item, virtualItem }"
                :options="filteredItems as any[]"
                :text-content="(item: SelectMenuItemData) => String(getField(item, labelField) ?? '')"
                v-bind="virtualizerProps"
              >
                <ReuseItemTemplate :item="item" :index="virtualItem.index" />
              </ComboboxVirtualizer>

              <ComboboxGroup v-if="createItemValue && createItemPosition === 'bottom'" data-slot="group" :class="cn('p-1', ui?.group)">
                <ComboboxItem :value="searchTerm" data-slot="item" :class="cn('relative flex w-full items-start rounded-md', currentSize.item, ui?.item)" @select="onCreate">
                  <span data-slot="itemLabel" :class="cn('truncate', ui?.itemLabel)">
                    <slot name="create-item-label" :item="searchTerm">创建 "{{ searchTerm }}"</slot>
                  </span>
                </ComboboxItem>
              </ComboboxGroup>
            </template>

            <template v-else>
              <ComboboxGroup v-if="createItemValue && createItemPosition === 'top'" data-slot="group" :class="cn('p-1', ui?.group)">
                <ComboboxItem :value="searchTerm" data-slot="item" :class="cn('relative flex w-full items-start rounded-md', currentSize.item, ui?.item)" @select="onCreate">
                  <span data-slot="itemLabel" :class="cn('truncate', ui?.itemLabel)">
                    <slot name="create-item-label" :item="searchTerm">创建 "{{ searchTerm }}"</slot>
                  </span>
                </ComboboxItem>
              </ComboboxGroup>

              <ComboboxGroup
                v-for="(group, groupIndex) in filteredGroups"
                :key="`group-${groupIndex}`"
                data-slot="group"
                :class="cn('p-1', ui?.group)"
              >
                <template v-for="(item, index) in group" :key="`group-${groupIndex}-${index}`">
                  <ComboboxLabel
                    v-if="item?.type === 'label'"
                    data-slot="label"
                    :class="cn('font-semibold text-foreground', currentSize.label, item.class, ui?.label, item.ui?.label)"
                  >
                    {{ getField(item, labelField) }}
                  </ComboboxLabel>
                  <ComboboxSeparator
                    v-else-if="item?.type === 'separator'"
                    data-slot="separator"
                    :class="cn('-mx-1 my-1 h-px bg-border', item.class, ui?.separator, item.ui?.separator)"
                  />
                  <ReuseItemTemplate v-else :item="item" :index="index" />
                </template>
              </ComboboxGroup>

              <ComboboxGroup v-if="createItemValue && createItemPosition === 'bottom'" data-slot="group" :class="cn('p-1', ui?.group)">
                <ComboboxItem :value="searchTerm" data-slot="item" :class="cn('relative flex w-full items-start rounded-md', currentSize.item, ui?.item)" @select="onCreate">
                  <span data-slot="itemLabel" :class="cn('truncate', ui?.itemLabel)">
                    <slot name="create-item-label" :item="searchTerm">创建 "{{ searchTerm }}"</slot>
                  </span>
                </ComboboxItem>
              </ComboboxGroup>
            </template>
          </div>

          <slot name="content-bottom" />

          <ComboboxArrow v-if="arrow" data-slot="arrow" :class="cn('fill-popover stroke-border', ui?.arrow)" />
        </FocusScope>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
