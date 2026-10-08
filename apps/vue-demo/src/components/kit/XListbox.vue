<script setup lang="ts">
/**
 * XListbox 列表：可选中项的列表选择组件。
 * filterable 开启顶部搜索框，按 label 文本过滤；loading 显示加载提示并禁止交互。
 */
import type { HTMLAttributes } from 'vue'
import { computed, ref } from 'vue'
import { Check, LoaderCircle, Search } from '@lucide/vue'
import { createReusableTemplate } from '@vueuse/core'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export interface ListItemData {
  /** 列表项 key */
  key: string
  /** 列表项标题 */
  label: string
  /** 是否禁用 */
  disabled?: boolean
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  /** 列表项数组 */
  items: ListItemData[]
  /** 选中项 */
  selected?: string[]
  /** 是否多选 */
  multiple?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否显示搜索框 */
  filterable?: boolean
  /** 加载态：显示加载提示并禁止交互 */
  loading?: boolean
  /** 搜索框占位文字 */
  searchPlaceholder?: string
  /** 过滤结果为空时的提示文字 */
  emptyText?: string
  class?: HTMLAttributes['class']
}>(), {
  selected: () => [],
  multiple: false,
  disabled: false,
  filterable: false,
  loading: false,
  searchPlaceholder: '搜索…',
  emptyText: '暂无匹配项',
})

const emit = defineEmits<{
  /** 选中回调 */
  select: [key: string]
}>()

const keyword = ref('')

/** 按 label 文本过滤列表项，大小写不敏感 */
const filteredItems = computed(() => {
  if (!keyword.value) return props.items
  const term = keyword.value.toLowerCase()
  return props.items.filter((item) => item.label.toLowerCase().includes(term))
})

const listRole = computed(() => (props.multiple ? 'group' : 'listbox'))

function handleSelect(key: string) {
  if (props.disabled || props.loading) return
  emit('select', key)
}

const [DefineListboxContent, ReuseListboxContent] = createReusableTemplate()
</script>

<template>
  <DefineListboxContent>
    <li
      v-if="loading"
      class="flex items-center justify-center gap-2 px-2 py-4 text-sm text-muted-foreground"
    >
      <LoaderCircle class="size-4 animate-spin" aria-hidden="true" />
      加载中…
    </li>
    <li
      v-else-if="filteredItems.length === 0"
      class="px-2 py-4 text-center text-sm text-muted-foreground"
    >
      {{ emptyText }}
    </li>
    <template v-else>
      <li v-for="item in filteredItems" :key="item.key">
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
    </template>
  </DefineListboxContent>

  <div v-if="filterable" :class="cn('flex w-full flex-col', props.class)">
    <div class="px-1 pb-1">
      <div class="relative">
        <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          :model-value="keyword"
          :placeholder="searchPlaceholder"
          :disabled="disabled || loading"
          class="h-9 pl-9"
          @update:model-value="keyword = String($event)"
        />
      </div>
    </div>
    <ul
      v-bind="$attrs"
      :role="listRole"
      :class="cn('flex w-full flex-col gap-0.5 p-1', (disabled || loading) && 'pointer-events-none opacity-50')"
    >
      <ReuseListboxContent />
    </ul>
  </div>
  <ul
    v-else
    v-bind="$attrs"
    :role="listRole"
    :class="cn('flex w-full flex-col gap-0.5 p-1', (disabled || loading) && 'pointer-events-none opacity-50', props.class)"
  >
    <ReuseListboxContent />
  </ul>
</template>
