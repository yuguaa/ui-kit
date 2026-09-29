<script setup lang="ts">
/**
 * XSelectMenu 选择菜单：popover + 可搜索选项列表。
 * 支持多选与空状态插槽，选项为 { label, value } 结构。
 */
import type { HTMLAttributes } from 'vue'
import { computed, ref } from 'vue'
import { Check, ChevronDown, Search } from '@lucide/vue'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

export interface SelectOption {
  label: string
  value: string
}

const props = withDefaults(defineProps<{
  /** 选项数据源 */
  options: SelectOption[]
  /** 多选模式 */
  multiple?: boolean
  /** 是否支持搜索 */
  showSearch?: boolean
  /** 占位提示文字 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  class?: HTMLAttributes['class']
}>(), {
  multiple: false,
  showSearch: false,
  placeholder: '请选择',
})

const model = defineModel<string | string[]>({ default: '' })

const emit = defineEmits<{
  /** 选中回调 */
  select: [value: string | string[]]
}>()

const open = ref(false)
const keyword = ref('')

const selected = computed(() => (Array.isArray(model.value) ? model.value : model.value ? [model.value] : []))

const filtered = computed(() =>
  props.showSearch && keyword.value
    ? props.options.filter((option) => option.label.toLowerCase().includes(keyword.value.toLowerCase()))
    : props.options,
)

const selectedLabels = computed(() =>
  props.options.filter((option) => selected.value.includes(option.value)).map((option) => option.label),
)

function handleSelect(optionValue: string) {
  let next: string | string[]
  if (props.multiple) {
    const set = new Set(selected.value)
    if (set.has(optionValue)) set.delete(optionValue)
    else set.add(optionValue)
    next = [...set]
  } else {
    next = optionValue
    open.value = false
  }
  model.value = next
  emit('select', next)
}
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child :disabled="disabled">
      <button
        type="button"
        :class="cn(
          'flex h-9 w-full min-w-40 items-center justify-between gap-2 rounded-lg border border-input bg-transparent px-3 text-sm transition-colors outline-none',
          'focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50',
          'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          open && 'border-ring ring-3 ring-ring/50',
          props.class,
        )"
      >
        <span :class="cn('truncate', selectedLabels.length === 0 && 'text-muted-foreground')">
          {{ selectedLabels.length > 0 ? selectedLabels.join(', ') : placeholder }}
        </span>
        <ChevronDown class="size-4 shrink-0 opacity-50" />
      </button>
    </PopoverTrigger>
    <PopoverContent align="start" :class="cn('flex min-w-40 flex-col gap-1 p-1')">
      <span v-if="showSearch" class="relative flex items-center px-1 pb-1">
        <Search class="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
        <Input v-model="keyword" placeholder="输入关键字搜索" class="h-8 pl-9" />
      </span>
      <div class="flex max-h-60 flex-col gap-0.5 overflow-auto">
        <slot v-if="filtered.length === 0" name="empty">
          <div class="px-2 py-4 text-center text-sm text-muted-foreground">无匹配选项</div>
        </slot>
        <template v-for="option in filtered" :key="option.value">
          <slot name="option" :option="option">
            <button
              type="button"
              :class="cn(
                'flex items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none',
                'hover:bg-muted focus-visible:bg-muted',
                selected.includes(option.value) && 'bg-primary-1 text-primary-7 hover:bg-primary-2',
              )"
              @click="handleSelect(option.value)"
            >
              <span class="truncate">{{ option.label }}</span>
              <Check v-if="selected.includes(option.value)" class="size-4 shrink-0" />
            </button>
          </slot>
        </template>
      </div>
    </PopoverContent>
  </Popover>
</template>
