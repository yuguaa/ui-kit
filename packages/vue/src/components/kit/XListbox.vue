<script setup lang="ts">
/**
 * XListbox 列表：可选中项的列表选择组件。
 */
import type { HTMLAttributes } from 'vue'
import { Check } from '@lucide/vue'
import { cn } from '@/lib/utils'

export interface ListItemData {
  /** 列表项 key */
  key: string
  /** 列表项标题 */
  label: string
  /** 是否禁用 */
  disabled?: boolean
}

const props = withDefaults(defineProps<{
  /** 列表项数组 */
  items: ListItemData[]
  /** 选中项 */
  selected?: string[]
  /** 是否多选 */
  multiple?: boolean
  /** 是否禁用 */
  disabled?: boolean
  class?: HTMLAttributes['class']
}>(), {
  selected: () => [],
  multiple: false,
  disabled: false,
})

const emit = defineEmits<{
  /** 选中回调 */
  select: [key: string]
}>()

function handleSelect(key: string) {
  if (props.disabled) return
  emit('select', key)
}
</script>

<template>
  <ul
    :role="multiple ? 'group' : 'listbox'"
    :class="cn('flex w-full flex-col gap-0.5 p-1', disabled && 'pointer-events-none opacity-50', props.class)"
  >
    <li v-for="item in items" :key="item.key">
      <button
        type="button"
        :role="multiple ? 'checkbox' : 'option'"
        :aria-selected="selected.includes(item.key)"
        :aria-checked="multiple ? selected.includes(item.key) : undefined"
        :disabled="item.disabled"
        :class="cn(
          'flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none transition-colors',
          'hover:bg-muted focus-visible:bg-muted disabled:pointer-events-none disabled:opacity-50',
          selected.includes(item.key) && 'bg-primary-1 text-primary-7 hover:bg-primary-2',
        )"
        @click="handleSelect(item.key)"
      >
        <slot name="item" :item="item">
          <span class="flex-1 truncate">{{ item.label }}</span>
        </slot>
        <Check v-if="selected.includes(item.key)" class="size-4 shrink-0" />
      </button>
    </li>
  </ul>
</template>
