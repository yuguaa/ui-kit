<script setup lang="ts">
/**
 * XCommandPalette 命令面板：全局命令搜索与快捷操作面板。
 * 基于 shadcn-vue command（reka Listbox）+ dialog，快捷键以 Kbd 形式展示。
 * 支持字段映射（labelKey / valueKey / descriptionKey）、子命令导航（children / back）、
 * 关闭按钮（close）与 ui 主题插槽。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, defineComponent, h, ref, shallowRef, watch } from 'vue'
import { ListboxFilter } from 'reka-ui'
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList, useCommand } from '@/components/ui/command'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import XAvatar from '@/components/kit/XAvatar.vue'
import XButton from '@/components/kit/XButton.vue'
import XChip from '@/components/kit/XChip.vue'
import XIcon from '@/components/kit/XIcon.vue'
import XKbd from '@/components/kit/XKbd.vue'
import { cn } from '@/lib/utils'
import type { AvatarProps } from '@/components/kit/XAvatar.vue'
import type { MenuIcon, MenuSize } from './XDropdownMenu.vue'

type XButtonProps = InstanceType<typeof XButton>['$props']
type XChipProps = InstanceType<typeof XChip>['$props']
type KbdSize = NonNullable<InstanceType<typeof XKbd>['$props']['size']>
type AvatarSize = NonNullable<InstanceType<typeof XAvatar>['$props']['size']>
type ChipSize = NonNullable<XChipProps['size']>

/** 命令项头像：复用 XAvatar 属性（尺寸由面板 size 决定） */
export type CommandAvatar = Omit<AvatarProps, 'size' | 'ui' | 'as' | 'class' | 'style'>

/** 命令项 chip：包住图标的语义色块 */
export interface CommandChip {
  text?: string
  color?: NonNullable<XChipProps['color']>
  size?: ChipSize
}

export interface CommandGroupItem {
  /** 命令唯一标识（可用 valueKey 指定其他字段） */
  key?: string
  /** 命令标题（可用 labelKey 指定其他字段） */
  label?: string
  /** 命令说明（可用 descriptionKey 指定其他字段） */
  description?: string
  /** 标签前缀 */
  prefix?: string
  /** 标签后缀 */
  suffix?: string
  /** 快捷键数组 */
  kbds?: string[]
  /** 快捷键（单条简写，等价于 kbds: [shortcut]） */
  shortcut?: string
  /** 前置图标 */
  icon?: MenuIcon
  /** 前置头像 */
  avatar?: CommandAvatar
  /** 前置 chip，包住 icon 显示 */
  chip?: boolean | CommandChip
  /** 激活态背景 */
  active?: boolean
  /** 加载态：图标显示为旋转的 loadingIcon */
  loading?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 子命令：选中后进入子层导航 */
  children?: CommandGroupItem[]
  /** 子层输入框占位文字 */
  placeholder?: string
  /** 执行回调 */
  onSelect?: () => void
  class?: HTMLAttributes['class']
  [key: string]: any
}

export interface CommandGroupData {
  /** 分组唯一标识 */
  id?: string
  /** 分组标题 */
  label?: string
  /** 命令数组 */
  items?: CommandGroupItem[]
  /** 命令数组（kit 既有字段，与 items 等价） */
  commands?: CommandGroupItem[]
  /** 项高亮时显示的尾部图标 */
  highlightedIcon?: MenuIcon
  /** 子层输入框占位文字 */
  placeholder?: string
}

/** 子层导航历史条目（仅保存展示所需的字段） */
export type PaletteHistoryEntry = CommandGroupData

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface CommandPaletteUi {
  root?: string
  input?: string
  close?: string
  back?: string
  content?: string
  footer?: string
  viewport?: string
  group?: string
  empty?: string
  label?: string
  item?: string
  itemLeadingIcon?: string
  itemLeadingAvatar?: string
  itemLeadingAvatarSize?: AvatarSize
  itemLeadingChip?: string
  itemLeadingChipSize?: ChipSize
  itemTrailing?: string
  itemTrailingIcon?: string
  itemTrailingHighlightedIcon?: string
  itemTrailingKbds?: string
  itemTrailingKbdsSize?: KbdSize
  itemWrapper?: string
  itemLabel?: string
  itemLabelBase?: string
  itemLabelPrefix?: string
  itemLabelSuffix?: string
  itemDescription?: string
}

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
  xs: 'p-1 text-[10px] gap-1',
  sm: 'p-1.5 text-[10px] gap-1.5',
  md: 'p-1.5 text-xs gap-1.5',
  lg: 'p-2 text-xs gap-2',
  xl: 'p-2 text-sm gap-2',
}

/** 空态留白 */
const sizeEmptyClasses: Record<MenuSize, string> = {
  xs: 'py-3 text-xs',
  sm: 'py-4 text-xs',
  md: 'py-6 text-sm',
  lg: 'py-7 text-sm',
  xl: 'py-8 text-base',
}

/** 输入框高度 */
const sizeInputClasses: Record<MenuSize, string> = {
  xs: 'h-10',
  sm: 'h-11',
  md: 'h-12',
  lg: 'h-13',
  xl: 'h-14',
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

/** chip 尺寸映射 */
const sizeChipMap: Record<MenuSize, ChipSize> = {
  xs: 'sm',
  sm: 'sm',
  md: 'md',
  lg: 'md',
  xl: 'lg',
}

/** 快捷键尺寸映射 */
const sizeKbdMap: Record<MenuSize, KbdSize> = {
  xs: 'sm',
  sm: 'sm',
  md: 'md',
  lg: 'md',
  xl: 'lg',
}

const props = withDefaults(defineProps<{
  /** 是否打开（支持 v-model:open） */
  open?: boolean
  /** 命令分组数组 */
  groups?: CommandGroupData[]
  /** 尺寸 */
  size?: MenuSize
  /** 是否可搜索（kit 既有属性，等价于 input !== false） */
  searchable?: boolean
  /** 是否显示输入框，对象可配置占位文字 */
  input?: boolean | { placeholder?: string }
  /** 输入框占位文字 */
  placeholder?: string
  /** 挂载后自动聚焦输入框 */
  autofocus?: boolean
  /** 输入框前置图标，false 时隐藏 */
  icon?: MenuIcon | false
  /** 输入框尾部图标 */
  trailingIcon?: MenuIcon
  /** 输入框加载态 */
  loading?: boolean
  /** 加载图标 */
  loadingIcon?: MenuIcon
  /** 子命令项尾部的进入图标 */
  childrenIcon?: MenuIcon
  /** 选中项图标 */
  selectedIcon?: MenuIcon
  /** 显示返回按钮（子命令层级），对象可透传 XButton 属性 */
  back?: boolean | Pick<XButtonProps, 'size' | 'color' | 'variant'>
  /** 返回按钮图标 */
  backIcon?: MenuIcon
  /** 渲染为指定元素或组件（面板根） */
  as?: string | Component
  /** 显示关闭按钮，对象可透传 XButton 属性 */
  close?: boolean | Pick<XButtonProps, 'size' | 'color' | 'variant'>
  /** 关闭按钮图标 */
  closeIcon?: MenuIcon
  /** 命令标题字段 */
  labelKey?: string
  /** 命令值字段 */
  valueKey?: string
  /** 命令说明字段 */
  descriptionKey?: string
  /** 选择后关闭面板 */
  closeOnSelect?: boolean
  /** 主题插槽类名 */
  ui?: CommandPaletteUi
  class?: HTMLAttributes['class']
}>(), {
  open: undefined,
  groups: () => [],
  size: 'md',
  searchable: true,
  input: true,
  placeholder: '搜索命令…',
  autofocus: true,
  icon: 'search',
  loading: false,
  loadingIcon: 'loader-circle',
  childrenIcon: 'chevron-right',
  selectedIcon: 'check',
  back: true,
  backIcon: 'arrow-left',
  close: false,
  closeIcon: 'x',
  labelKey: 'label',
  valueKey: 'key',
  descriptionKey: 'description',
  closeOnSelect: true,
})

defineOptions({ name: 'XCommandPalette', inheritAttrs: false })

const emit = defineEmits<{
  /** 打开状态变化回调 */
  'update:open': [open: boolean]
  /** 命令执行回调 */
  select: [item: CommandGroupItem]
}>()

const innerOpen = ref(false)
/* 导航历史只整体替换，用 shallowRef 避免递归类型深度展开 */
const history = shallowRef<CommandGroupData[]>([])

/* Command 的过滤状态由其内部 context 提供，通过内部组件桥接输入值 */
const searchRef = ref('')

const PaletteFilter = defineComponent({
  name: 'XCommandPaletteFilter',
  setup(_, { attrs }) {
    const { filterState } = useCommand()
    watch(
      searchRef,
      (value) => {
        filterState.search = value
      },
      { immediate: true },
    )
    return () =>
      h(
        ListboxFilter,
        {
          modelValue: searchRef.value,
          'onUpdate:modelValue': (value: string) => {
            searchRef.value = value
          },
          ...attrs,
        } as never,
      )
  },
})

const showInput = computed(() => props.input !== false && props.searchable)

/* 当前导航层：无历史时显示顶层分组 */
function currentGroupValue(): CommandGroupData | undefined {
  if (history.value.length === 0) return undefined
  return history.value[history.value.length - 1]
}

function visibleGroupsValue(): CommandGroupData[] {
  const current = currentGroupValue()
  if (current == null) return props.groups
  return [current]
}

function currentPlaceholderValue(): string {
  return currentGroupValue()?.placeholder ?? props.placeholder
}

function setOpen(next: boolean) {
  if (props.open == null) innerOpen.value = next
  emit('update:open', next)
}

function itemValueOf(item: CommandGroupItem, index: number): string {
  return String(getField(item, props.valueKey) ?? index)
}

function itemLabelOf(item: CommandGroupItem): string {
  return String(getField(item, props.labelKey) ?? '')
}

function descriptionOf(item: CommandGroupItem): unknown {
  return getField(item, props.descriptionKey)
}

function kbdValuesOf(item: CommandGroupItem): string[] {
  if (item.kbds?.length) return item.kbds
  return item.shortcut ? [item.shortcut] : []
}

/** cmdk-vue 按 value 文本过滤，拼接全部可检索字段 */
function searchValueOf(item: CommandGroupItem, index: number): string {
  return [itemLabelOf(item), String(descriptionOf(item) ?? ''), String(item.suffix ?? ''), String(item.prefix ?? '')]
    .filter(Boolean)
    .join(' ') || itemValueOf(item, index)
}

function goBack() {
  history.value = history.value.slice(0, -1)
  searchRef.value = ''
}

function handleSelect(item: CommandGroupItem) {
  if (item.children?.length) {
    const nextGroup: CommandGroupData = {
      id: itemValueOf(item, history.value.length),
      label: itemLabelOf(item),
      items: item.children,
      placeholder: item.placeholder,
    }
    history.value = [...history.value, nextGroup]
    searchRef.value = ''
    return
  }
  item.onSelect?.()
  emit('select', item)
  if (props.closeOnSelect) setOpen(false)
}

/** 按点分路径读取字段（支持嵌套对象） */
function getField(item: CommandGroupItem, key: string): unknown {
  return key.split('.').reduce((acc: any, part) => (acc == null ? acc : acc[part]), item)
}

/** 打开面板 */
function openPanel() {
  setOpen(true)
}

/** 关闭面板 */
function closePanel() {
  setOpen(false)
}

/** 切换开关 */
function togglePanel() {
  setOpen(!(props.open ?? innerOpen.value))
}

defineExpose({ open: openPanel, close: closePanel, toggle: togglePanel })
</script>

<template>
  <Dialog :open="open ?? innerOpen" @update:open="setOpen">
    <DialogContent :class="cn('top-1/3 translate-y-0 overflow-hidden rounded-xl! p-0', props.class)">
      <DialogHeader class="sr-only">
        <DialogTitle>Command Palette</DialogTitle>
        <DialogDescription>Search for a command to run...</DialogDescription>
      </DialogHeader>

      <Command :as="as" data-slot="root" :class="cn(props.ui?.root)">
        <div v-if="showInput" class="flex items-center gap-0.5 border-b border-border p-1">
          <div class="relative flex min-w-0 flex-1 items-center gap-1 rounded-lg bg-muted/30 px-2 ring-1 ring-inset ring-border">
            <template v-if="history.length && back !== false">
              <slot name="back" :ui="ui">
                <span data-slot="back" :class="cn('shrink-0', props.ui?.back)">
                  <XButton
                    :size="size"
                    color="neutral"
                    variant="link"
                    square
                    aria-label="返回"
                    v-bind="typeof back === 'object' ? back : {}"
                    @click="goBack"
                  >
                    <XIcon v-if="typeof backIcon === 'string'" :name="backIcon" size="sm" aria-hidden="true" />
                    <component :is="backIcon" v-else-if="backIcon" class="size-4" aria-hidden="true" />
                  </XButton>
                </span>
              </slot>
            </template>
            <XIcon
              v-if="icon !== false && typeof icon === 'string'"
              :name="icon"
              class="pointer-events-none size-4 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <component
              :is="icon"
              v-else-if="icon !== false && icon"
              class="pointer-events-none size-4 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <PaletteFilter
              :autofocus="autofocus"
              :placeholder="currentPlaceholderValue()"
              data-slot="input"
              :class="cn(
                sizeInputClasses[size],
                'w-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:opacity-50',
                props.ui?.input,
              )"
            />
            <XIcon
              v-if="loading && typeof loadingIcon === 'string'"
              :name="loadingIcon"
              class="pointer-events-none size-4 shrink-0 animate-spin text-muted-foreground"
              aria-hidden="true"
            />
            <component
              :is="loadingIcon"
              v-else-if="loading && loadingIcon"
              class="pointer-events-none size-4 shrink-0 animate-spin text-muted-foreground"
              aria-hidden="true"
            />
            <XIcon
              v-else-if="trailingIcon && typeof trailingIcon === 'string'"
              :name="trailingIcon"
              data-slot="trailingIcon"
              class="pointer-events-none size-4 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <component
              :is="trailingIcon"
              v-else-if="trailingIcon"
              data-slot="trailingIcon"
              class="pointer-events-none size-4 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <span v-if="close !== false" data-slot="close" :class="cn('shrink-0', props.ui?.close)">
              <slot name="close" :ui="ui">
                <XButton
                  size="sm"
                  color="neutral"
                  variant="ghost"
                  square
                  aria-label="关闭"
                  v-bind="typeof close === 'object' ? close : {}"
                  @click="setOpen(false)"
                >
                  <XIcon v-if="typeof closeIcon === 'string'" :name="closeIcon" size="sm" aria-hidden="true" />
                  <component :is="closeIcon" v-else-if="closeIcon" class="size-4" aria-hidden="true" />
                </XButton>
              </slot>
            </span>
          </div>
        </div>

        <CommandList data-slot="content" :class="cn(props.ui?.content)">
          <div data-slot="viewport" :class="cn(props.ui?.viewport)">
            <CommandEmpty data-slot="empty" :class="cn(sizeEmptyClasses[size], props.ui?.empty)">
              <slot name="empty">无匹配命令</slot>
            </CommandEmpty>

            <CommandGroup
              v-for="(group, groupIndex) in visibleGroupsValue()"
              :key="group.id ?? group.label ?? `group-${groupIndex}`"
              data-slot="group"
              :class="cn('p-1', props.ui?.group)"
            >
              <div
                v-if="group.label != null"
                data-slot="label"
                :class="cn('font-semibold text-muted-foreground', sizeLabelClasses[size], props.ui?.label)"
              >
                <slot name="group-label" :group="group" :label="String(group.label)" :ui="ui">{{ group.label }}</slot>
              </div>

              <CommandItem
                v-for="(item, index) in (group.items ?? group.commands ?? [])"
                :key="itemValueOf(item, index)"
                :value="searchValueOf(item, index)"
                :disabled="item.disabled"
                data-slot="item"
                :class="cn(sizeItemClasses[size], item.active && 'bg-muted', props.ui?.item, item.class)"
                @select="handleSelect(item)"
              >
                <slot v-if="$slots.item" name="item" :item="item" :index="index" :ui="ui" />
                <template v-else>
                  <template v-if="$slots['item-leading']">
                    <slot name="item-leading" :item="item" :index="index" :ui="ui" />
                  </template>
                  <XIcon
                    v-else-if="item.loading && typeof loadingIcon === 'string'"
                    :name="loadingIcon"
                    data-slot="itemLeadingIcon"
                    :class="cn('shrink-0 animate-spin', sizeIconClasses[size], props.ui?.itemLeadingIcon)"
                    aria-hidden="true"
                  />
                  <component
                    :is="loadingIcon"
                    v-else-if="item.loading"
                    data-slot="itemLeadingIcon"
                    :class="cn('shrink-0 animate-spin', sizeIconClasses[size], props.ui?.itemLeadingIcon)"
                    aria-hidden="true"
                  />
                  <XChip
                    v-else-if="item.icon && item.chip"
                  inset
                  standalone
                  :size="(props.ui?.itemLeadingChipSize as ChipSize) ?? sizeChipMap[size]"
                  v-bind="typeof item.chip === 'object' ? item.chip : {}"
                  data-slot="itemLeadingChip"
                  :class="cn('shrink-0', props.ui?.itemLeadingChip)"
                >
                  <XIcon
                    v-if="typeof item.icon === 'string'"
                    :name="item.icon"
                    :class="cn('shrink-0', sizeIconClasses[size], props.ui?.itemLeadingIcon)"
                    aria-hidden="true"
                  />
                  <component :is="item.icon" v-else :class="cn('shrink-0', sizeIconClasses[size], props.ui?.itemLeadingIcon)" aria-hidden="true" />
                </XChip>
                <XIcon
                  v-else-if="item.icon && typeof item.icon === 'string'"
                  :name="item.icon"
                  data-slot="itemLeadingIcon"
                  :class="cn('shrink-0 text-muted-foreground', sizeIconClasses[size], props.ui?.itemLeadingIcon)"
                  aria-hidden="true"
                />
                <component
                  :is="item.icon"
                  v-else-if="item.icon"
                  data-slot="itemLeadingIcon"
                  :class="cn('shrink-0 text-muted-foreground', sizeIconClasses[size], props.ui?.itemLeadingIcon)"
                  aria-hidden="true"
                />
                <XAvatar
                  v-else-if="item.avatar"
                  v-bind="item.avatar"
                  :size="(props.ui?.itemLeadingAvatarSize as AvatarSize) ?? sizeAvatarMap[size]"
                  data-slot="itemLeadingAvatar"
                  :class="cn('shrink-0', props.ui?.itemLeadingAvatar)"
                />

                <span
                  v-if="itemLabelOf(item) !== '' || descriptionOf(item) != null || item.prefix != null || item.suffix != null || $slots['item-label'] || $slots['item-description']"
                  data-slot="itemWrapper"
                  :class="cn('flex min-w-0 flex-1 flex-col text-start', props.ui?.itemWrapper)"
                >
                  <span data-slot="itemLabel" :class="cn('flex min-w-0 items-baseline gap-1', props.ui?.itemLabel)">
                    <slot v-if="$slots['item-label']" name="item-label" :item="item" :index="index" :ui="ui" />
                    <template v-else>
                      <span v-if="item.prefix != null" data-slot="itemLabelPrefix" :class="cn('text-muted-foreground', props.ui?.itemLabelPrefix)">
                        {{ item.prefix }}
                      </span>
                      <span data-slot="itemLabelBase" :class="cn('truncate', props.ui?.itemLabelBase)">
                        {{ itemLabelOf(item) }}
                      </span>
                      <span v-if="item.suffix != null" data-slot="itemLabelSuffix" :class="cn('text-muted-foreground', props.ui?.itemLabelSuffix)">
                        {{ item.suffix }}
                      </span>
                    </template>
                  </span>
                  <slot v-if="$slots['item-description']" name="item-description" :item="item" :index="index" :ui="ui" />
                  <span
                    v-else-if="descriptionOf(item) != null"
                    data-slot="itemDescription"
                    :class="cn('truncate text-xs text-muted-foreground', props.ui?.itemDescription)"
                  >
                    {{ descriptionOf(item) }}
                  </span>
                </span>

                <span data-slot="itemTrailing" :class="cn('ms-auto inline-flex items-center gap-1.5', props.ui?.itemTrailing)">
                  <slot v-if="$slots['item-trailing']" name="item-trailing" :item="item" :index="index" :ui="ui" />
                  <template v-else>
                    <XIcon
                      v-if="item.children?.length && typeof childrenIcon === 'string'"
                      :name="childrenIcon"
                      data-slot="itemTrailingIcon"
                      :class="cn('shrink-0', sizeIconClasses[size], props.ui?.itemTrailingIcon)"
                      aria-hidden="true"
                    />
                    <component
                      :is="childrenIcon"
                      v-else-if="item.children?.length"
                      data-slot="itemTrailingIcon"
                      :class="cn('shrink-0', sizeIconClasses[size], props.ui?.itemTrailingIcon)"
                      aria-hidden="true"
                    />
                    <span
                      v-else-if="kbdValuesOf(item).length"
                      data-slot="itemTrailingKbds"
                      :class="cn('inline-flex items-center shrink-0', props.ui?.itemTrailingKbds)"
                    >
                      <XKbd v-for="(kbd, kbdIndex) in kbdValuesOf(item)" :key="kbdIndex" :size="(props.ui?.itemTrailingKbdsSize as KbdSize) ?? sizeKbdMap[size]">
                        {{ kbd }}
                      </XKbd>
                    </span>
                    <XIcon
                      v-else-if="group.highlightedIcon && typeof group.highlightedIcon === 'string'"
                      :name="group.highlightedIcon"
                      data-slot="itemTrailingHighlightedIcon"
                      :class="cn(
                        'shrink-0 hidden text-muted-foreground group-data-[highlighted]:inline-flex',
                        sizeIconClasses[size],
                        props.ui?.itemTrailingHighlightedIcon,
                      )"
                      aria-hidden="true"
                    />
                    <component
                      :is="group.highlightedIcon"
                      v-else-if="group.highlightedIcon"
                      data-slot="itemTrailingHighlightedIcon"
                      :class="cn(
                        'shrink-0 hidden text-muted-foreground group-data-[highlighted]:inline-flex',
                        sizeIconClasses[size],
                        props.ui?.itemTrailingHighlightedIcon,
                      )"
                      aria-hidden="true"
                    />
                  </template>
                  <XIcon
                    v-if="item.active === true && typeof selectedIcon === 'string'"
                    :name="selectedIcon"
                    data-slot="itemTrailingIcon"
                    :class="cn('shrink-0', sizeIconClasses[size], props.ui?.itemTrailingIcon)"
                    aria-hidden="true"
                  />
                  <component
                    :is="selectedIcon"
                    v-else-if="item.active === true"
                    data-slot="itemTrailingIcon"
                    :class="cn('shrink-0', sizeIconClasses[size], props.ui?.itemTrailingIcon)"
                    aria-hidden="true"
                  />
                </span>
                </template>
              </CommandItem>
            </CommandGroup>
          </div>
        </CommandList>

        <div v-if="$slots.footer" data-slot="footer" :class="cn('border-t border-border p-1', props.ui?.footer)">
          <slot name="footer" />
        </div>
      </Command>
    </DialogContent>
  </Dialog>
</template>
