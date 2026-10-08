<script setup lang="ts">
/**
 * XInputDate 日期选择：输入框 + popover 日历。
 * 支持最小/最大日期、底部自定义内容与日期区间（range）。
 */
import type { DateValue } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { computed, ref, shallowRef, watch } from 'vue'
import { parseDate } from '@internationalized/date'
import { CalendarIcon } from '@lucide/vue'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  /** 绑定日期（yyyy-MM-dd，range 时为 [开始, 结束]） */
  modelValue?: string | string[]
  /** 日期区间选择 */
  range?: boolean
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
  'update:modelValue': [value: string | string[]]
  /** 日期变化回调 */
  change: [value: string | string[]]
}>()

const open = ref(false)
/** range 模式下传给日历的选中数组（含区间内所有日期，日期对象无需深层响应） */
const rangeDraft = shallowRef<DateValue[]>([])

const calendarValue = computed(() => {
  if (typeof props.modelValue !== 'string' || !props.modelValue) return undefined
  try {
    return parseDate(props.modelValue)
  } catch {
    return undefined
  }
})

const displayText = computed(() => {
  if (!props.range) return props.modelValue as string
  const pair = Array.isArray(props.modelValue) ? props.modelValue : []
  if (pair[0] == null) return ''
  return pair[1] != null ? `${pair[0]} → ${pair[1]}` : pair[0]
})

function formatDateValue(date: DateValue): string {
  return `${String(date.year).padStart(4, '0')}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`
}

/** 生成 [from, to] 闭区间内的全部日期，用于日历中间日期高亮 */
function buildDayRange(from: DateValue, to: DateValue): DateValue[] {
  const days: DateValue[] = []
  let cursor = from
  while (cursor.compare(to) <= 0) {
    days.push(cursor)
    cursor = cursor.add({ days: 1 })
  }
  return days
}

function parseRange(pair: string[]): DateValue[] {
  if (pair.length < 2 || !pair[0] || !pair[1]) return []
  try {
    const start = parseDate(pair[0]!)
    const end = parseDate(pair[1]!)
    return start.compare(end) <= 0 ? buildDayRange(start, end) : buildDayRange(end, start)
  } catch {
    return []
  }
}

/* 外部绑定值回流到日历选中数组 */
watch(() => props.modelValue, (value) => {
  if (!props.range) return
  rangeDraft.value = Array.isArray(value) ? parseRange(value) : []
}, { immediate: true })

function onSelect(date: DateValue | undefined) {
  if (!date) return
  const next = formatDateValue(date)
  emit('update:modelValue', next)
  emit('change', next)
  open.value = false
}

function onRangeSelect(next: DateValue | DateValue[] | undefined) {
  const values = Array.isArray(next) ? next : next ? [next] : []
  /* 本次点击的日期 = 日历回传数组中相对 rangeDraft 新增的一项 */
  const clicked = values.find((v) => !rangeDraft.value.some((d) => d.compare(v) === 0))
  if (!clicked) return

  if (rangeDraft.value.length === 1) {
    /* 已选开始，本次点击确定结束并补全区间 */
    const start = rangeDraft.value[0]!.compare(clicked) <= 0 ? rangeDraft.value[0]! : clicked
    const end = rangeDraft.value[0]!.compare(clicked) <= 0 ? clicked : rangeDraft.value[0]!
    rangeDraft.value = buildDayRange(start, end)
    const pair = [formatDateValue(start), formatDateValue(end)]
    emit('update:modelValue', pair)
    emit('change', pair)
    open.value = false
    return
  }
  /* 首次点击或已有完整区间时重新开始 */
  rangeDraft.value = [clicked]
}

function onCalendarSelect(next: DateValue | DateValue[] | undefined) {
  if (props.range) {
    onRangeSelect(next)
    return
  }
  onSelect(next as DateValue | undefined)
}
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child :disabled="disabled">
      <button type="button" :class="cn('w-full cursor-pointer', props.class)">
        <span class="relative flex w-full items-center">
          <Input :model-value="displayText" :placeholder="placeholder" class="h-9 pl-9 text-left" readonly />
          <CalendarIcon class="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
        </span>
      </button>
    </PopoverTrigger>
    <PopoverContent align="start" :class="cn('flex w-auto flex-col p-0')">
      <Calendar
        :model-value="range ? rangeDraft : calendarValue"
        :multiple="range"
        :prevent-deselect="range"
        :min-value="min ? parseDate(min) : undefined"
        :max-value="max ? parseDate(max) : undefined"
        class="p-2"
        @update:model-value="onCalendarSelect($event as DateValue | DateValue[] | undefined)"
      />
      <div v-if="$slots.footer" class="border-t border-border p-2">
        <slot name="footer" />
      </div>
    </PopoverContent>
  </Popover>
</template>
