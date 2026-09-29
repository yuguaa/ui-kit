<script setup lang="ts">
/**
 * XInputMenu 输入菜单：输入框与下拉菜单组合。
 * 输入关键字过滤 items，选中后回填输入框并触发 select。
 */
import type { HTMLAttributes } from 'vue'
import { computed, ref } from 'vue'
import { Search } from '@lucide/vue'
import { Input } from '@/components/ui/input'
import { Popover, PopoverAnchor, PopoverContent } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

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
  class?: HTMLAttributes['class']
}>(), {
  searchable: true,
  placeholder: '搜索并选择…',
})

const emit = defineEmits<{
  /** 选中回调 */
  select: [item: InputMenuItem]
}>()

const open = ref(false)
const keyword = ref('')
const selectedLabel = ref('')

const filtered = computed(() =>
  props.searchable && keyword.value
    ? props.items.filter((item) => item.label.toLowerCase().includes(keyword.value.toLowerCase()))
    : props.items,
)

function handleSelect(item: InputMenuItem) {
  selectedLabel.value = item.label
  keyword.value = ''
  open.value = false
  emit('select', item)
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
            :model-value="displayValue"
            :placeholder="placeholder"
            :disabled="disabled"
            class="h-9 pl-9"
            @update:model-value="keyword = String($event)"
            @focus="onFocus"
          />
        </span>
      </span>
    </PopoverAnchor>
    <PopoverContent align="start" :class="cn('flex min-w-40 flex-col gap-0.5 p-1')">
      <div v-if="filtered.length === 0" class="px-2 py-4 text-center text-sm text-muted-foreground">
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
    </PopoverContent>
  </Popover>
</template>
