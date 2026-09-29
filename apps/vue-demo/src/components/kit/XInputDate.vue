<script setup lang="ts">
/**
 * XInputDate 日期选择：输入框 + popover 日历。
 * 支持最小/最大日期与底部自定义内容。
 */
import type { HTMLAttributes } from 'vue'
import { computed, ref } from 'vue'
import { parseDate } from '@internationalized/date'
import { CalendarIcon } from '@lucide/vue'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  /** 绑定日期（yyyy-MM-dd） */
  modelValue?: string
  /** 最小日期 */
  min?: string
  /** 最大日期 */
  max?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 占位文字 */
  placeholder?: string
  class?: HTMLAttributes['class']
}>(), {
  modelValue: '',
  placeholder: '选择日期',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  /** 日期变化回调 */
  change: [value: string]
}>()

const open = ref(false)

const calendarValue = computed(() => {
  if (!props.modelValue) return undefined
  try {
    return parseDate(props.modelValue)
  } catch {
    return undefined
  }
})

function onSelect(date: { year: number; month: number; day: number } | undefined) {
  if (!date) return
  const next = `${String(date.year).padStart(4, '0')}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`
  emit('update:modelValue', next)
  emit('change', next)
  open.value = false
}
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child :disabled="disabled">
      <button type="button" :class="cn('w-full', props.class)">
        <span class="relative flex w-full items-center">
          <Input :model-value="modelValue" :placeholder="placeholder" class="h-9 pl-9 text-left" readonly />
          <CalendarIcon class="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
        </span>
      </button>
    </PopoverTrigger>
    <PopoverContent align="start" :class="cn('flex w-auto flex-col p-0')">
      <Calendar
        :model-value="calendarValue"
        :min-value="min ? parseDate(min) : undefined"
        :max-value="max ? parseDate(max) : undefined"
        class="p-2"
        @update:model-value="onSelect($event)"
      />
      <div v-if="$slots.footer" class="border-t border-border p-2">
        <slot name="footer" />
      </div>
    </PopoverContent>
  </Popover>
</template>
