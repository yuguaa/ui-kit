<script setup lang="ts">
/**
 * XInputMenu 输入菜单：输入框与下拉菜单组合。
 * 输入关键字过滤 items，选中后回填输入框并触发 select。
 */
import type { HTMLAttributes } from 'vue'
import { computed, ref } from 'vue'
import { Search, X } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Popover, PopoverAnchor, PopoverContent } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

/* 属性透传到内部输入框，避免落到 Popover 包装层 */
defineOptions({ inheritAttrs: false })

export interface InputMenuItem {
  label: string
  value: string
}

const props = withDefaults(defineProps<{
  /** 菜单项数组 */
  items: InputMenuItem[]
  /** 是否可搜索 */
  searchable?: boolean
  /** 占位文字 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 有选中项时显示清空按钮 */
  clearable?: boolean
  /** 关键字不存在时允许回车创建新选项 */
  createItem?: boolean
  class?: HTMLAttributes['class']
}>(), {
  searchable: true,
  placeholder: '搜索并选择…',
  clearable: false,
  createItem: false,
})

const emit = defineEmits<{
  /** 选中回调 */
  select: [item: InputMenuItem]
  /** 创建新选项回调 */
  create: [value: string]
}>()

const open = ref(false)
const keyword = ref('')
const selectedLabel = ref('')

const filtered = computed(() =>
  props.searchable && keyword.value
    ? props.items.filter((item) => item.label.toLowerCase().includes(keyword.value.toLowerCase()))
    : props.items,
)

/* 关键字非空且与候选项不完全同名时允许创建 */
const canCreate = computed(() => {
  if (!props.createItem) return false
  const term = keyword.value.trim()
  if (!term) return false
  return !props.items.some(
    (item) => item.label.toLowerCase() === term.toLowerCase() || item.value.toLowerCase() === term.toLowerCase(),
  )
})

/* 有选中项且未禁用时展示清空按钮 */
const showClear = computed(() => props.clearable && !props.disabled && selectedLabel.value !== '')

function handleSelect(item: InputMenuItem) {
  selectedLabel.value = item.label
  keyword.value = ''
  open.value = false
  emit('select', item)
}

/** 以当前关键字创建新选项并选中 */
function handleCreate() {
  const value = keyword.value.trim()
  if (!value) return
  selectedLabel.value = value
  keyword.value = ''
  open.value = false
  emit('select', { label: value, value })
  emit('create', value)
}

/** 回车时若满足创建条件则创建新选项 */
function onEnter() {
  if (!canCreate.value) return
  handleCreate()
}

/** 清空已选中的项，恢复为初始空值 */
function handleClear() {
  selectedLabel.value = ''
  keyword.value = ''
}

const displayValue = computed(() => (props.searchable ? (open.value ? keyword.value : selectedLabel.value) : selectedLabel.value))

function onFocus() {
  keyword.value = ''
  open.value = true
}
</script>

<template>
  <Popover v-model:open="open">
    <PopoverAnchor as-child>
      <span :class="cn('block w-full', props.class)">
        <span class="relative flex w-full items-center">
          <slot name="leading">
            <Search class="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
          </slot>
          <Input
            v-bind="$attrs"
            :model-value="displayValue"
            :placeholder="placeholder"
            :disabled="disabled"
            class="h-9 pl-9"
            :class="showClear && 'pr-8'"
            @update:model-value="keyword = String($event)"
            @focus="onFocus"
            @keydown.enter.prevent="onEnter"
          />
          <Button
            v-if="showClear"
            type="button"
            variant="ghost"
            size="icon-xs"
            aria-label="清空"
            class="absolute right-2 top-1/2 size-4 -translate-y-1/2 rounded-full text-muted-foreground opacity-70 hover:bg-transparent hover:opacity-100 [&_svg]:size-3.5"
            @mousedown.prevent
            @click="handleClear"
          >
            <X />
          </Button>
        </span>
      </span>
    </PopoverAnchor>
    <PopoverContent align="start" :class="cn('flex min-w-40 flex-col gap-0.5 p-1')">
      <div v-if="filtered.length === 0 && !canCreate" class="px-2 py-4 text-center text-sm text-muted-foreground">
        无匹配选项
      </div>
      <template v-for="item in filtered" :key="item.value">
        <slot name="item" :item="item">
          <button
            type="button"
            class="rounded-md px-2 py-1.5 text-left text-sm outline-none hover:bg-muted focus-visible:bg-muted"
            @click="handleSelect(item)"
          >
            {{ item.label }}
          </button>
        </slot>
      </template>
      <button
        v-if="canCreate"
        type="button"
        class="rounded-md px-2 py-1.5 text-left text-sm outline-none hover:bg-muted focus-visible:bg-muted"
        @click="handleCreate"
      >
        创建 "{{ keyword }}"
      </button>
    </PopoverContent>
  </Popover>
</template>
