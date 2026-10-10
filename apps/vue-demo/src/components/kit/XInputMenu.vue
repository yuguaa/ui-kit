<script setup lang="ts">
/**
 * XInputMenu 输入菜单：输入框 + 弹出建议列表（基于 reka-ui Combobox / Autocomplete）。
 * mode 区分 combobox（输入框即搜索）、autocomplete（自由文本）与 listbox（输入框只读，搜索框在菜单内）；
 * items 支持字符串、对象与二维分组数组，labelKey / valueKey / descriptionKey 映射字段。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, onMounted, onScopeDispose, ref, toRaw, useAttrs, useSlots } from 'vue'
import { createReusableTemplate } from '@vueuse/core'
import {
  AutocompleteRoot,
  ComboboxAnchor,
  ComboboxArrow,
  ComboboxCancel,
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
  ComboboxVirtualizer,
  Primitive,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
  TagsInputRoot,
} from 'reka-ui'
import XAvatar from '@/components/kit/XAvatar.vue'
import XIcon from '@/components/kit/XIcon.vue'
import { cn } from '@/lib/utils'
import { compare, filterGroups, getDisplayValue, getField, isEmpty, looseToNumber } from '@/lib/kit/menu-utils'

type IconName = 'check' | 'x' | 'chevron-down' | 'search' | 'loader-circle'
/** 图标：XIcon 名称或自定义组件 */
export type InputMenuIcon = IconName | Component

export type InputMenuSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type InputMenuColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
export type InputMenuVariant = 'outline' | 'soft' | 'subtle' | 'ghost' | 'none'

/** 菜单内搜索框配置 */
export interface InputMenuSearchInput {
  placeholder?: string
  disabled?: boolean
}

/** 浮层定位配置 */
export interface InputMenuContentOptions {
  position?: 'popper' | 'inline'
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'right' | 'bottom' | 'left'
  alignOffset?: number
  sideOffset?: number
}

export interface InputMenuItemData {
  label?: string
  description?: string
  icon?: InputMenuIcon
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
export interface InputMenuUi {
  root?: string
  base?: string
  leading?: string
  leadingIcon?: string
  leadingAvatar?: string
  leadingAvatarSize?: string
  trailing?: string
  trailingIcon?: string
  trailingClear?: string
  content?: string
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
  tagsInput?: string
  tagsItem?: string
  tagsItemText?: string
  tagsItemDelete?: string
  tagsItemDeleteIcon?: string
  arrow?: string
}

const props = withDefaults(defineProps<{
  /** 建议项数据源，二维数组时按行分组 */
  items?: InputMenuItemData[] | InputMenuItemData[][]
  /** 选中值（支持 v-model；autocomplete 模式下为输入文本） */
  modelValue?: string | number | boolean | null | Array<string | number | boolean>
  /** 非受控初始值 */
  defaultValue?: string | number | boolean | null | Array<string | number | boolean>
  /** 底层模式：combobox 输入框即搜索，autocomplete 自由文本，listbox 输入框只读、搜索框在菜单内 */
  mode?: 'combobox' | 'autocomplete' | 'listbox'
  /** 菜单内搜索框：true 或 { placeholder, disabled }（listbox 模式） */
  searchInput?: boolean | InputMenuSearchInput
  /** 组件颜色 */
  color?: InputMenuColor
  /** 预设样式 */
  variant?: InputMenuVariant
  /** 尺寸 */
  size?: InputMenuSize
  /** 原生输入框类型 */
  type?: string
  /** 是否必填 */
  required?: boolean
  /** 占位提示文字 */
  placeholder?: string
  /** 展开图标 */
  trailingIcon?: InputMenuIcon
  /** 选中态图标 */
  selectedIcon?: InputMenuIcon
  /** 删除标签图标（multiple 模式） */
  deleteIcon?: InputMenuIcon
  /** 有选中项时显示清空按钮 */
  clear?: boolean
  /** 清空按钮图标 */
  clearIcon?: InputMenuIcon
  /** 浮层定位配置 */
  content?: InputMenuContentOptions
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
  /** 受控打开状态 */
  open?: boolean
  /** 初始打开状态 */
  defaultOpen?: boolean
  /** 点击输入框打开菜单 */
  openOnClick?: boolean
  /** 聚焦输入框打开菜单 */
  openOnFocus?: boolean
  /** 指针悬停时高亮选项 */
  highlightOnHover?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 输入框 id */
  id?: string
  /** 表单字段名 */
  name?: string
  /** 前置图标 */
  icon?: InputMenuIcon
  /** 前置头像 */
  avatar?: Record<string, any>
  /** 加载态 */
  loading?: boolean
  /** 加载图标 */
  loadingIcon?: InputMenuIcon
  /** 渲染为指定元素或组件（根容器） */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: InputMenuUi
  class?: HTMLAttributes['class']
}>(), {
  items: () => [],
  /* 显式 undefined：避免 Vue 对含 Boolean 的联合类型属性做 false 兜底 */
  modelValue: undefined,
  defaultValue: undefined,
  open: undefined,
  mode: 'combobox',
  searchInput: true,
  color: 'primary',
  variant: 'outline',
  size: 'md',
  type: 'text',
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
  openOnClick: true,
  openOnFocus: false,
  highlightOnHover: true,
  disabled: false,
  loading: false,
  clear: false,
  clearIcon: 'x',
  deleteIcon: 'x',
  arrow: false,
  portal: true,
  virtualize: false,
  trailingIcon: 'chevron-down',
  selectedIcon: 'check',
  loadingIcon: 'loader-circle',
})

defineOptions({ name: 'XInputMenu', inheritAttrs: false })

const attrs = useAttrs()
const slots = useSlots()

const emit = defineEmits<{
  /** 值变化回调 */
  change: [event: Event]
  /** 输入框失焦回调 */
  blur: [event: FocusEvent]
  /** 输入框聚焦回调 */
  focus: [event: FocusEvent]
  /** 创建新选项时回调 */
  create: [value: string]
  /** 清空回调 */
  clear: []
  /** 删除标签回调（multiple 模式） */
  'remove-tag': [value: unknown]
  /** 高亮项变化回调 */
  highlight: [payload: { ref: HTMLElement, value: unknown } | undefined]
  /** 值变化回调 */
  'update:modelValue': [value: string | number | boolean | null | Array<string | number | boolean> | undefined]
  /** 打开状态变化回调 */
  'update:open': [value: boolean]
}>()

/** 非受控值：未传 modelValue 时使用 defaultValue 并在内部维护 */
const innerValue = ref<string | number | boolean | null | Array<string | number | boolean> | undefined>(props.defaultValue)
const currentValue = computed(() => (props.modelValue !== undefined ? props.modelValue : innerValue.value))

/** 打开状态与输入文本 */
const innerOpen = ref(props.defaultOpen ?? false)
const openModel = computed<boolean>({
  get: () => (props.open !== undefined ? props.open : innerOpen.value),
  set: (value: boolean) => {
    if (props.open === undefined) innerOpen.value = value
  },
})
const searchTerm = ref('')

/** 输入文本：autocomplete 模式下输入即写入值 */
function onSearchTermUpdate(value: string) {
  searchTerm.value = value
  if (isAutocomplete.value) updateValue(value)
}

const labelField = computed(() => props.labelKey || 'label')
const descriptionField = computed(() => props.descriptionKey || 'description')

const isAutocomplete = computed(() => props.mode === 'autocomplete')
const isListbox = computed(() => props.mode === 'listbox')
const RootComponent = computed(() => (isAutocomplete.value ? AutocompleteRoot : ComboboxRoot))

/** 分组：平铺数组视为单组 */
const groups = computed<InputMenuItemData[][]>(() => {
  if (!props.items?.length) return []
  return Array.isArray(props.items[0])
    ? (props.items as InputMenuItemData[][])
    : [props.items as InputMenuItemData[]]
})
const flatItems = computed(() => groups.value.flatMap((group) => group))

function isStructural(item: InputMenuItemData): boolean {
  return !!item?.type && ['label', 'separator'].includes(item.type)
}

/** 过滤：ignoreFilter 或空关键字时保持原样 */
const filteredGroups = computed(() => {
  if (props.ignoreFilter || !searchTerm.value) return groups.value

  const fields = Array.isArray(props.filterFields) ? props.filterFields : [labelField.value]
  return filterGroups(groups.value, searchTerm.value, { fields, isStructural })
})
const filteredItems = computed(() => filteredGroups.value.flatMap((group) => group))

function itemValue(item: InputMenuItemData): any {
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

const selectedValues = computed<unknown[]>(() => {
  if (props.multiple) return Array.isArray(currentValue.value) ? currentValue.value : []
  return isEmpty(currentValue.value) ? [] : [currentValue.value]
})

/** 输入框显示文本：多选时逗号拼接 */
const displayValue = computed(() => {
  if (isAutocomplete.value) return String(currentValue.value ?? '')
  if (props.multiple && Array.isArray(currentValue.value)) {
    return currentValue.value
      .map((value) => getDisplayValue(flatItems.value, value, { labelKey: labelField.value, valueKey: props.valueKey }))
      .filter((value): value is string => value != null && value !== '')
      .join(', ')
  }
  return getDisplayValue(flatItems.value, currentValue.value, { labelKey: labelField.value, valueKey: props.valueKey }) ?? ''
})

function displayValueFor(value: unknown): string {
  if (value == null) return ''
  return getDisplayValue(flatItems.value, value, { labelKey: labelField.value, valueKey: props.valueKey }) ?? ''
}

/** 清空按钮：有选中项且未禁用时展示 */
const showClear = computed(() => !!props.clear && !props.disabled && selectedValues.value.length > 0)

/** 菜单内搜索框：listbox 模式按 searchInput 渲染 */
const showSearchInput = computed(() => isListbox.value && props.searchInput !== false)
const searchInputPlaceholder = computed(() =>
  typeof props.searchInput === 'object' ? (props.searchInput.placeholder ?? '输入关键字搜索') : '输入关键字搜索',
)

const showLeading = computed(() => !!props.icon || !!props.avatar || !!slots.leading)

const virtualizerProps = computed(() => (typeof props.virtualize === 'object' ? props.virtualize : {}))

function updateValue(value: string | number | boolean | null | Array<string | number | boolean> | undefined) {
  if (toRaw(currentValue.value) === value) return

  let next = value
  if (typeof next === 'string') next = next.trim()
  next = looseToNumber(next) as typeof value

  if (props.modelValue === undefined) innerValue.value = next
  emit('update:modelValue', next)
  emit('change', new Event('change'))
}

/** 根组件值变化：autocomplete 写入输入文本，其余写入选中值 */
function onUpdateModel(value: any) {
  if (isAutocomplete.value) {
    searchTerm.value = String(value ?? '')
    if (props.modelValue === undefined) innerValue.value = searchTerm.value
    emit('update:modelValue', searchTerm.value)
    emit('change', new Event('change'))
    return
  }
  updateValue(value)
}

function onOpenChange(value: boolean) {
  openModel.value = value
  emit('update:open', value)
  if (value) emit('focus', new FocusEvent('focus'))
  else emit('blur', new FocusEvent('blur'))
  if (!value && !isAutocomplete.value) searchTerm.value = ''
}

function onBlur(event: FocusEvent) {
  emit('blur', event)
}

function onFocus(event: FocusEvent) {
  emit('focus', event)
}

function onClear() {
  if (props.disabled) return
  searchTerm.value = ''
  updateValue(props.multiple ? [] : undefined)
  emit('clear')
}

/** 删除标签：从多选值中移除 */
function onRemoveTag(value: unknown) {
  if (!props.multiple) return
  const next = selectedValues.value.filter((item) => !compare(item, value, props.valueKey))
  updateValue(next as any)
  emit('remove-tag', value)
}

function onCreate(event: Event) {
  event.preventDefault()
  event.stopPropagation()
  emit('create', searchTerm.value)
}

function onSelect(event: Event, item: InputMenuItemData) {
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

const inputRef = ref<HTMLInputElement>()

function autoFocus() {
  if (props.autofocus) inputRef.value?.focus?.()
}

let autofocusTimer: ReturnType<typeof setTimeout> | undefined

onMounted(() => {
  autofocusTimer = setTimeout(autoFocus, props.autofocusDelay)
})

onScopeDispose(() => clearTimeout(autofocusTimer))

/** 尺寸映射：base / item / label / empty / 图标 / 左右内边距 */
const sizeClasses: Record<InputMenuSize, { base: string, leading: string, trailing: string, item: string, label: string, empty: string, icon: string }> = {
  xs: { base: 'h-7 text-xs', leading: 'ps-2', trailing: 'pe-2', item: 'p-1 text-xs gap-1', label: 'p-1 text-[10px] gap-1', empty: 'p-2 text-xs', icon: 'size-4' },
  sm: { base: 'h-8 text-sm', leading: 'ps-2.5', trailing: 'pe-2.5', item: 'p-1.5 text-xs gap-1.5', label: 'p-1.5 text-[10px] gap-1.5', empty: 'p-2.5 text-xs', icon: 'size-4' },
  md: { base: 'h-9 text-sm', leading: 'ps-3', trailing: 'pe-3', item: 'p-1.5 text-sm gap-1.5', label: 'p-1.5 text-xs gap-1.5', empty: 'p-2.5 text-sm', icon: 'size-5' },
  lg: { base: 'h-10 text-base', leading: 'ps-3', trailing: 'pe-3', item: 'p-2 text-sm gap-2', label: 'p-2 text-xs gap-2', empty: 'p-3 text-sm', icon: 'size-5' },
  xl: { base: 'h-11 text-base', leading: 'ps-3.5', trailing: 'pe-3.5', item: 'p-2 text-base gap-2', label: 'p-2 text-sm gap-2', empty: 'p-3 text-base', icon: 'size-6' },
}

/** 变体映射 */
const variantClasses: Record<InputMenuVariant, string> = {
  outline: 'bg-transparent ring-1 ring-inset ring-input',
  soft: 'bg-muted/50 hover:bg-muted',
  subtle: 'bg-muted ring-1 ring-inset ring-input',
  ghost: 'bg-transparent hover:bg-muted',
  none: 'bg-transparent',
}

/** 颜色映射：聚焦描边 */
const colorClasses: Record<InputMenuColor, string> = {
  primary: 'focus-within:ring-2 focus-within:ring-primary-5',
  secondary: 'focus-within:ring-2 focus-within:ring-secondary',
  neutral: 'focus-within:ring-2 focus-within:ring-foreground',
  success: 'focus-within:ring-2 focus-within:ring-success-5',
  info: 'focus-within:ring-2 focus-within:ring-info-5',
  warning: 'focus-within:ring-2 focus-within:ring-warning-5',
  error: 'focus-within:ring-2 focus-within:ring-error-5',
}

/** 高亮描边颜色 */
const highlightClasses: Record<InputMenuColor, string> = {
  primary: 'ring-primary-5',
  secondary: 'ring-secondary',
  neutral: 'ring-foreground/30',
  success: 'ring-success-5',
  info: 'ring-info-5',
  warning: 'ring-warning-5',
  error: 'ring-error-5',
}

const currentSize = computed(() => sizeClasses[props.size])

/** 根组件属性：autocomplete 以输入文本为值，其余以选中值为值 */
const rootProps = computed(() => {
  if (isAutocomplete.value) {
    return {
      modelValue: searchTerm.value,
      open: openModel.value,
      disabled: props.disabled,
      name: props.name,
      required: props.required,
      openOnClick: props.openOnClick,
      openOnFocus: props.openOnFocus,
      highlightOnHover: props.highlightOnHover,
      ignoreFilter: true,
    }
  }
  return {
    modelValue: currentValue.value,
    open: openModel.value,
    disabled: props.disabled,
    multiple: props.multiple,
    name: props.name,
    required: props.required,
    openOnClick: props.openOnClick,
    openOnFocus: props.openOnFocus,
    highlightOnHover: props.highlightOnHover,
    ignoreFilter: true,
  }
})

function isIconName(icon: InputMenuIcon | undefined): icon is IconName {
  return typeof icon === 'string'
}

/* item 模板复用：虚拟滚动与普通列表共用同一份渲染 */
const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate<{ item: InputMenuItemData, index: number }>()
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
          <ComboboxItemIndicator v-if="!isAutocomplete" as-child>
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

  <component
    :is="RootComponent"
    v-bind="rootProps"
    @update:model-value="onUpdateModel"
    @update:open="onOpenChange"
    @highlight="onHighlight"
  >
    <ComboboxAnchor :as-child="!multiple" :class="cn('relative flex w-full items-center rounded-md px-0', ui?.root)">
      <TagsInputRoot
        v-if="multiple"
        v-slot="{ modelValue: tags }"
        :model-value="(selectedValues as string[])"
        :disabled="disabled"
        :required="required"
        delimiter=""
        as-child
        @blur="onBlur"
        @focus="onFocus"
        @remove-tag="onRemoveTag($event)"
      >
        <Primitive
          :as="as ?? 'span'"
          data-slot="root"
          :class="cn(
            'flex w-full min-h-0 cursor-text flex-wrap items-center gap-1 rounded-md px-2 py-1',
            'ring-1 ring-inset ring-input transition-[box-shadow,color]',
            colorClasses[color],
            highlight && cn('ring-2', highlightClasses[color]),
            variantClasses[variant],
            ui?.root,
            props.class,
          )"
        >
          <TagsInputItem
            v-for="(item, index) in tags"
            :key="index"
            :value="item"
            data-slot="tagsItem"
            :class="cn('inline-flex items-center gap-1 rounded-sm bg-elevated px-1.5 py-0.5 text-xs font-medium text-foreground ring-1 ring-inset ring-border', ui?.tagsItem)"
          >
            <TagsInputItemText data-slot="tagsItemText" :class="cn('truncate', ui?.tagsItemText)">
              <slot name="tags-item-text" :item="item" :index="index">{{ displayValueFor(item) }}</slot>
            </TagsInputItemText>
            <TagsInputItemDelete
              data-slot="tagsItemDelete"
              :disabled="disabled"
              :class="cn('inline-flex items-center rounded-xs text-muted-foreground hover:text-foreground disabled:pointer-events-none', ui?.tagsItemDelete)"
            >
              <slot name="tags-item-delete" :item="item" :index="index" :ui="ui">
                <XIcon
                  v-if="isIconName(deleteIcon)"
                  :name="deleteIcon"
                  data-slot="tagsItemDeleteIcon"
                  :class="cn('shrink-0', ui?.tagsItemDeleteIcon)"
                  aria-hidden="true"
                />
                <component :is="deleteIcon" v-else data-slot="tagsItemDeleteIcon" :class="cn(ui?.tagsItemDeleteIcon)" aria-hidden="true" />
              </slot>
            </TagsInputItemDelete>
          </TagsInputItem>

          <ComboboxInput
            :model-value="searchTerm"
            :display-value="() => searchTerm"
            data-slot="tagsInput"
            :class="cn('min-w-12 flex-1 border-0 bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed', ui?.base, ui?.tagsInput)"
            @update:model-value="onSearchTermUpdate"
          />
        </Primitive>
      </TagsInputRoot>

      <Primitive
        v-else
        :as="as ?? 'span'"
        data-slot="root"
        :class="cn(
          'relative flex w-full items-center rounded-md',
          'ring-1 ring-inset ring-input transition-[box-shadow,color]',
          'disabled:cursor-not-allowed disabled:opacity-75',
          colorClasses[color],
          highlight && cn('ring-2', highlightClasses[color]),
          variantClasses[variant],
          ui?.root,
          props.class,
        )"
      >
        <span
          v-if="showLeading"
          data-slot="leading"
          :class="cn('absolute inset-y-0 start-0 flex items-center', currentSize.leading, ui?.leading)"
        >
          <slot name="leading" :model-value="currentValue" :open="openModel" :ui="ui">
            <XIcon
              v-if="isIconName(icon) && icon"
              :name="icon"
              data-slot="leadingIcon"
              :class="cn('shrink-0 text-muted-foreground', currentSize.icon, ui?.leadingIcon)"
              aria-hidden="true"
            />
            <component
              :is="icon"
              v-else-if="icon"
              data-slot="leadingIcon"
              :class="cn(currentSize.icon, ui?.leadingIcon)"
              aria-hidden="true"
            />
            <XAvatar v-else-if="avatar" v-bind="avatar" data-slot="leadingAvatar" :class="cn('shrink-0', ui?.leadingAvatar)" />
          </slot>
        </span>

        <ComboboxInput
          :id="id"
          ref="inputRef"
          v-bind="attrs"
          :display-value="() => (isAutocomplete || isListbox ? '' : displayValue ?? '')"
          :type="type"
          :placeholder="placeholder"
          :required="required"
          :readonly="isListbox"
          :disabled="disabled"
          :class="cn(
            'w-full border-0 bg-transparent outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed',
            'px-3',
            showLeading && currentSize.leading,
            (showClear || trailingIcon || loading || slots.trailing) && currentSize.trailing,
            currentSize.base,
            ui?.base,
          )"
          @blur="onBlur"
          @focus="onFocus"
          @change.stop
          @update:model-value="onSearchTermUpdate"
        />

        <span
          v-if="showClear || slots.trailing || trailingIcon || loading"
          data-slot="trailing"
          :class="cn('absolute inset-y-0 end-0 flex items-center', currentSize.trailing, ui?.trailing)"
        >
          <slot name="trailing" :model-value="currentValue" :open="openModel" :ui="ui">
            <XIcon
              v-if="loading"
              name="loader-circle"
              data-slot="trailingIcon"
              :class="cn('animate-spin shrink-0 text-muted-foreground', currentSize.icon, ui?.trailingIcon)"
              aria-hidden="true"
            />
            <ComboboxCancel v-else-if="showClear" as-child>
              <button
                type="button"
                tabindex="-1"
                aria-label="清空"
                data-slot="trailingClear"
                :class="cn('flex size-4 items-center justify-center rounded-full p-0 text-muted-foreground opacity-70 hover:opacity-100', ui?.trailingClear)"
                @click.stop="onClear"
              >
                <XIcon
                  v-if="isIconName(clearIcon)"
                  :name="clearIcon"
                  class="size-3.5"
                  aria-hidden="true"
                />
                <component :is="clearIcon" v-else class="size-3.5" aria-hidden="true" />
              </button>
            </ComboboxCancel>
            <XIcon
              v-else-if="isIconName(trailingIcon)"
              :name="trailingIcon"
              data-slot="trailingIcon"
              :class="cn('shrink-0 text-muted-foreground transition-transform', openModel && 'rotate-180', currentSize.icon, ui?.trailingIcon)"
              aria-hidden="true"
            />
            <component
              :is="trailingIcon"
              v-else
              data-slot="trailingIcon"
              :class="cn('shrink-0 text-muted-foreground transition-transform', openModel && 'rotate-180', currentSize.icon, ui?.trailingIcon)"
              aria-hidden="true"
            />
          </slot>
        </span>
      </Primitive>
    </ComboboxAnchor>

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
        @focus-outside.prevent
      >
        <slot name="content-top" />

        <span v-if="showSearchInput" class="block p-1">
          <slot name="search-input" :keyword="searchTerm" :on-input="(value: string) => (searchTerm = value)">
            <input
              :value="searchTerm"
              :placeholder="searchInputPlaceholder"
              :disabled="disabled || (typeof searchInput === 'object' && searchInput.disabled)"
              data-slot="input"
              :class="cn('h-8 w-full rounded-sm border-0 bg-muted/50 px-2 text-sm outline-none placeholder:text-muted-foreground', ui?.input)"
              @input="onSearchTermUpdate(($event.target as HTMLInputElement).value)"
            />
          </slot>
        </span>

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
              :text-content="(item: InputMenuItemData) => String(getField(item, labelField) ?? '')"
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
      </ComboboxContent>
    </ComboboxPortal>
  </component>
</template>
