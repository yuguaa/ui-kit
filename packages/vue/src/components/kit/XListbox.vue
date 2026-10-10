<script setup lang="ts">
/**
 * XListbox 列表选择：可选中项的列表（基于 reka-ui Listbox）。
 * items 支持字符串、对象与二维分组数组，labelKey / valueKey / descriptionKey 映射字段；
 * filter 开启顶部搜索框，按 filterFields 过滤；选项可带 type: 'label' | 'separator'。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, onMounted, onScopeDispose, ref, toRaw, useSlots } from 'vue'
import {
  ListboxContent,
  ListboxFilter,
  ListboxGroup,
  ListboxGroupLabel,
  ListboxItem,
  ListboxItemIndicator,
  ListboxRoot,
  ListboxVirtualizer,
} from 'reka-ui'
import XAvatar from '@/components/kit/XAvatar.vue'
import XIcon from '@/components/kit/XIcon.vue'
import { cn } from '@/lib/utils'
import { filterGroups, getField, looseToNumber } from '@/lib/kit/menu-utils'

type IconName = 'check' | 'x' | 'chevron-down' | 'search' | 'loader-circle'
/** 图标：XIcon 名称或自定义组件 */
export type ListboxIcon = IconName | Component

export type ListboxSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ListboxColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'

/** 顶部过滤搜索框配置 */
export interface ListboxFilterOptions {
  placeholder?: string
  disabled?: boolean
}

export interface ListboxItemData {
  label?: string
  description?: string
  icon?: ListboxIcon
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
export interface ListboxUi {
  root?: string
  input?: string
  content?: string
  group?: string
  label?: string
  separator?: string
  empty?: string
  loading?: string
  loadingIcon?: string
  item?: string
  itemLeadingIcon?: string
  itemLeadingAvatar?: string
  itemLeadingAvatarSize?: string
  itemWrapper?: string
  itemLabel?: string
  itemDescription?: string
  itemTrailing?: string
  itemTrailingIcon?: string
}

const props = withDefaults(defineProps<{
  /** 列表项数组，二维数组时按行分组 */
  items?: ListboxItemData[] | ListboxItemData[][]
  /** 选中值（支持 v-model） */
  modelValue?: string | number | Array<string | number>
  /** 非受控初始值 */
  defaultValue?: string | number | Array<string | number>
  /** 是否多选 */
  multiple?: boolean
  /** 组件颜色 */
  color?: ListboxColor
  /** 尺寸 */
  size?: ListboxSize
  /** 选项值字段 */
  valueKey?: string
  /** 选项标签字段 */
  labelKey?: string
  /** 选项说明字段 */
  descriptionKey?: string
  /** 加载态 */
  loading?: boolean
  /** 加载图标 */
  loadingIcon?: ListboxIcon
  /** 顶部过滤搜索框：true 或 { placeholder, disabled } */
  filter?: boolean | ListboxFilterOptions
  /** 过滤字段，默认 [labelKey] */
  filterFields?: string[]
  /** 忽略内置过滤（适合自定义过滤场景） */
  ignoreFilter?: boolean
  /** 选中态图标 */
  selectedIcon?: ListboxIcon
  /** 虚拟滚动：true 或 { overscan, estimateSize } */
  virtualize?: boolean | { overscan?: number, estimateSize?: number }
  /** 高亮：始终显示颜色描边，类似聚焦态 */
  highlight?: boolean
  /** 是否自动聚焦 */
  autofocus?: boolean
  /** 自动聚焦延时（毫秒） */
  autofocusDelay?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 是否必填 */
  required?: boolean
  /** 表单字段名 */
  name?: string
  /** 组件 id */
  id?: string
  /** 列表朝向 */
  orientation?: 'horizontal' | 'vertical'
  /** 指针悬停时高亮选项 */
  highlightOnHover?: boolean
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: ListboxUi
  class?: HTMLAttributes['class']
}>(), {
  items: () => [],
  /* 显式 undefined：避免 Vue 对含 Boolean 的联合类型属性做 false 兜底 */
  modelValue: undefined,
  defaultValue: undefined,
  multiple: false,
  color: 'primary',
  size: 'md',
  labelKey: 'label',
  descriptionKey: 'description',
  loading: false,
  loadingIcon: 'loader-circle',
  filter: false,
  ignoreFilter: false,
  selectedIcon: 'check',
  virtualize: false,
  highlight: false,
  autofocus: false,
  autofocusDelay: 0,
  disabled: false,
  required: false,
  orientation: 'vertical',
  highlightOnHover: true,
})

defineOptions({ name: 'XListbox', inheritAttrs: false })

const slots = useSlots()

const emit = defineEmits<{
  /** 值变化回调 */
  change: [event: Event]
  /** 内部值变化回调 */
  'update:modelValue': [value: string | number | Array<string | number> | undefined]
  /** 焦点进入回调 */
  entryFocus: [event: Event]
  /** 高亮项变化回调 */
  highlight: [payload: { ref: HTMLElement, value: unknown } | undefined]
  /** 焦点离开回调 */
  leave: [event: Event]
}>()

/** 非受控值：未传 modelValue 时使用 defaultValue 并在内部维护 */
const innerValue = ref(props.defaultValue)
const currentValue = computed(() =>
  props.modelValue !== undefined ? props.modelValue : innerValue.value,
)

const labelField = computed(() => props.labelKey || 'label')
const descriptionField = computed(() => props.descriptionKey || 'description')

function updateValue(value: unknown) {
  if (toRaw(props.modelValue) === value) return

  let next = value as string | number | Array<string | number> | undefined
  if (typeof next === 'string') next = next.trim()
  next = looseToNumber(next) as typeof next

  if (props.modelValue === undefined) innerValue.value = next
  emit('update:modelValue', next)
  emit('change', new Event('change'))
}

/** 分组：平铺数组视为单组 */
const groups = computed<ListboxItemData[][]>(() => {
  if (!props.items?.length) return []
  return Array.isArray(props.items[0])
    ? (props.items as ListboxItemData[][])
    : [props.items as ListboxItemData[]]
})

function isStructural(item: ListboxItemData): boolean {
  return !!item?.type && ['label', 'separator'].includes(item.type)
}

const keyword = ref('')

/** 过滤：ignoreFilter 或空关键字时保持原样 */
const filteredGroups = computed(() => {
  if (props.ignoreFilter || !keyword.value) return groups.value

  const fields = Array.isArray(props.filterFields) ? props.filterFields : [labelField.value]
  return filterGroups(groups.value, keyword.value, { fields, isStructural })
})
const filteredItems = computed(() => filteredGroups.value.flatMap((group) => group))

function itemValue(item: ListboxItemData): any {
  return props.valueKey ? getField(item, props.valueKey) : item
}

function onSelect(event: Event, item: ListboxItemData) {
  if (item?.disabled) {
    event.preventDefault()
    return
  }
  item?.onSelect?.(event)
}

const rootRef = ref<HTMLElement>()

function autoFocus() {
  if (!props.autofocus) return
  const input = (rootRef.value as any)?.$el?.querySelector?.('input')
  input?.focus?.()
}

let autofocusTimer: ReturnType<typeof setTimeout> | undefined

onMounted(() => {
  autofocusTimer = setTimeout(autoFocus, props.autofocusDelay)
})

onScopeDispose(() => clearTimeout(autofocusTimer))

/** 尺寸映射：item / label / empty / loading / 图标 */
const sizeClasses: Record<ListboxSize, { item: string, label: string, empty: string, loading: string, icon: string }> = {
  xs: { item: 'p-1 text-xs gap-1', label: 'p-1 text-[10px] gap-1', empty: 'py-3 text-xs', loading: 'py-3', icon: 'size-4' },
  sm: { item: 'p-1.5 text-xs gap-1.5', label: 'p-1.5 text-[10px] gap-1.5', empty: 'py-4 text-xs', loading: 'py-4', icon: 'size-4' },
  md: { item: 'p-1.5 text-sm gap-1.5', label: 'p-1.5 text-xs gap-1.5', empty: 'py-6 text-sm', loading: 'py-6', icon: 'size-5' },
  lg: { item: 'p-2 text-sm gap-2', label: 'p-2 text-xs gap-2', empty: 'py-7 text-sm', loading: 'py-7', icon: 'size-5' },
  xl: { item: 'p-2 text-base gap-2', label: 'p-2 text-sm gap-2', empty: 'py-8 text-base', loading: 'py-8', icon: 'size-6' },
}

const currentSize = computed(() => sizeClasses[props.size])

/** 高亮描边颜色 */
const highlightClasses: Record<ListboxColor, string> = {
  primary: 'ring-primary-5',
  secondary: 'ring-secondary',
  neutral: 'ring-foreground/30',
  success: 'ring-success-5',
  info: 'ring-info-5',
  warning: 'ring-warning-5',
  error: 'ring-error-5',
}

function isIconName(icon: ListboxIcon | undefined): icon is IconName {
  return typeof icon === 'string'
}

const virtualizerProps = computed(() => (typeof props.virtualize === 'object' ? props.virtualize : {}))
const showFilter = computed(() => props.filter !== false)
const filterPlaceholder = computed(() => (typeof props.filter === 'object' ? props.filter.placeholder : undefined))
const filterDisabled = computed(() => (typeof props.filter === 'object' ? !!props.filter.disabled : false))

/* 分组或平铺渲染：filter 开启时用 ListboxFilter 驱动搜索 */
const listboxProps = computed(() => ({
  modelValue: currentValue.value,
  multiple: props.multiple,
  disabled: props.disabled,
  required: props.required,
  name: props.name,
  orientation: props.orientation,
  highlightOnHover: props.highlightOnHover,
  as: props.as ?? 'div',
  id: props.id,
}))
</script>

<template>
  <ListboxRoot
    ref="rootRef"
    v-bind="{ ...(listboxProps as Record<string, unknown>), ...$attrs }"
    ignore-filter
    data-slot="root"
    :class="cn(
      'flex flex-col min-h-0 min-w-0 overflow-hidden rounded-lg ring-1 ring-inset ring-input',
      props.disabled && 'cursor-not-allowed opacity-75',
      highlight && cn('ring-2', highlightClasses[color]),
      ui?.root,
      props.class,
    )"
    @update:model-value="(value) => updateValue(value as string | number | boolean | Array<string | number | boolean> | undefined)"
    @entry-focus="emit('entryFocus', $event)"
    @highlight="emit('highlight', $event)"
    @leave="emit('leave', $event)"
  >
    <ListboxFilter v-if="showFilter" v-model="keyword" as-child>
      <input
        :placeholder="filterPlaceholder ?? '搜索…'"
        :disabled="disabled || filterDisabled || loading"
        data-slot="input"
        :class="cn('w-full border-0 border-b bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed', ui?.input)"
      />
    </ListboxFilter>

    <ListboxContent
      data-slot="content"
      :class="cn('relative max-h-60 flex-1 overflow-y-auto scroll-py-1 focus:outline-none', ui?.content)"
    >
      <div v-if="loading" data-slot="loading" :class="cn('flex items-center justify-center text-muted-foreground', currentSize.loading, ui?.loading)">
        <slot name="loading">
          <XIcon
            v-if="isIconName(loadingIcon)"
            :name="loadingIcon"
            data-slot="loadingIcon"
            :class="cn('animate-spin shrink-0', currentSize.icon, ui?.loadingIcon)"
            aria-hidden="true"
          />
          <component
            :is="loadingIcon"
            v-else
            data-slot="loadingIcon"
            :class="cn('animate-spin shrink-0', currentSize.icon, ui?.loadingIcon)"
            aria-hidden="true"
          />
        </slot>
      </div>

      <div v-else-if="!filteredItems.length" data-slot="empty" :class="cn('text-center text-muted-foreground', currentSize.empty, ui?.empty)">
        <slot name="empty" :search-term="keyword">暂无匹配项</slot>
      </div>

      <ListboxVirtualizer
        v-else-if="virtualize"
        v-slot="{ option: item, virtualItem }"
        :options="filteredItems as any[]"
        :text-content="(item: ListboxItemData) => String(getField(item, labelField) ?? '')"
        v-bind="virtualizerProps"
      >
        <ListboxGroup data-slot="group" :class="cn('p-1 isolate', ui?.group)">
          <ListboxItem
            :value="itemValue(item)"
            :disabled="item?.disabled"
            data-slot="item"
            :class="cn(
              'group relative flex w-full cursor-default items-start rounded-md outline-none select-none',
              'data-[disabled]:pointer-events-none data-[disabled]:opacity-75',
              'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
              'aria-selected:bg-accent aria-selected:text-accent-foreground',
              currentSize.item,
              item?.class,
              ui?.item,
              item?.ui?.item,
            )"
            @select="onSelect($event, item)"
          >
            <slot name="item" :item="item" :index="virtualItem.index" :ui="ui">
              <slot name="item-leading" :item="item" :index="virtualItem.index" :ui="ui">
                <XIcon
                  v-if="isIconName(item?.icon) && item.icon"
                  :name="item.icon"
                  data-slot="itemLeadingIcon"
                  :class="cn('shrink-0 text-muted-foreground', currentSize.icon, ui?.itemLeadingIcon, item?.ui?.itemLeadingIcon)"
                  aria-hidden="true"
                />
                <component
                  v-else-if="item?.icon"
                  :is="item.icon"
                  data-slot="itemLeadingIcon"
                  :class="cn(currentSize.icon, ui?.itemLeadingIcon, item?.ui?.itemLeadingIcon)"
                  aria-hidden="true"
                />
                <XAvatar
                  v-else-if="item?.avatar"
                  v-bind="item.avatar"
                  data-slot="itemLeadingAvatar"
                  :class="cn('shrink-0', ui?.itemLeadingAvatar, item?.ui?.itemLeadingAvatar)"
                />
              </slot>

              <span
                v-if="getField(item, labelField) || getField(item, descriptionField) || slots['item-label'] || slots['item-description']"
                data-slot="itemWrapper"
                :class="cn('flex min-w-0 flex-1 flex-col', ui?.itemWrapper, item?.ui?.itemWrapper)"
              >
                <span v-if="getField(item, labelField) || slots['item-label']" data-slot="itemLabel" :class="cn('truncate', ui?.itemLabel, item?.ui?.itemLabel)">
                  <slot name="item-label" :item="item" :index="virtualItem.index">{{ getField(item, labelField) }}</slot>
                </span>
                <span
                  v-if="getField(item, descriptionField) || slots['item-description']"
                  data-slot="itemDescription"
                  :class="cn('truncate text-muted-foreground', ui?.itemDescription, item?.ui?.itemDescription)"
                >
                  <slot name="item-description" :item="item" :index="virtualItem.index">{{ getField(item, descriptionField) }}</slot>
                </span>
              </span>

              <span data-slot="itemTrailing" :class="cn('ms-auto inline-flex items-center gap-1.5', ui?.itemTrailing, item?.ui?.itemTrailing)">
                <slot name="item-trailing" :item="item" :index="virtualItem.index" :ui="ui" />
                <ListboxItemIndicator as-child>
                  <XIcon
                    v-if="isIconName(selectedIcon)"
                    :name="selectedIcon"
                    data-slot="itemTrailingIcon"
                    :class="cn('shrink-0', currentSize.icon, ui?.itemTrailingIcon, item?.ui?.itemTrailingIcon)"
                    aria-hidden="true"
                  />
                  <component
                    :is="selectedIcon"
                    v-else
                    data-slot="itemTrailingIcon"
                    :class="cn(currentSize.icon, ui?.itemTrailingIcon, item?.ui?.itemTrailingIcon)"
                    aria-hidden="true"
                  />
                </ListboxItemIndicator>
              </span>
            </slot>
          </ListboxItem>
        </ListboxGroup>
      </ListboxVirtualizer>

      <template v-else>
        <ListboxGroup
          v-for="(group, groupIndex) in filteredGroups"
          :key="`group-${groupIndex}`"
          data-slot="group"
          :class="cn('p-1 isolate', ui?.group)"
        >
          <template v-for="(item, index) in group" :key="`group-${groupIndex}-${index}`">
            <ListboxGroupLabel
              v-if="item?.type === 'label'"
              data-slot="label"
              :class="cn('font-semibold text-foreground', currentSize.label, item.class, ui?.label, item.ui?.label)"
            >
              {{ getField(item, labelField) }}
            </ListboxGroupLabel>
            <div
              v-else-if="item?.type === 'separator'"
              role="separator"
              data-slot="separator"
              :class="cn('-mx-1 my-1 h-px bg-border', item.class, ui?.separator, item.ui?.separator)"
            />
            <ListboxItem
              v-else
              :value="itemValue(item)"
              :disabled="item?.disabled"
              :text-value="String(getField(item, labelField) ?? '')"
              data-slot="item"
              :class="cn(
                'group relative flex w-full cursor-default items-start rounded-md outline-none select-none',
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
              <slot name="item" :item="item" :index="index" :ui="ui">
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

                <span
                  v-if="getField(item, labelField) || getField(item, descriptionField) || slots['item-label'] || slots['item-description']"
                  data-slot="itemWrapper"
                  :class="cn('flex min-w-0 flex-1 flex-col', ui?.itemWrapper, item.ui?.itemWrapper)"
                >
                  <span v-if="getField(item, labelField) || slots['item-label']" data-slot="itemLabel" :class="cn('truncate', ui?.itemLabel, item.ui?.itemLabel)">
                    <slot name="item-label" :item="item" :index="index">{{ getField(item, labelField) }}</slot>
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
                  <ListboxItemIndicator as-child>
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
                  </ListboxItemIndicator>
                </span>
              </slot>
            </ListboxItem>
          </template>
        </ListboxGroup>
      </template>
    </ListboxContent>
  </ListboxRoot>
</template>
