<script setup lang="ts">
/**
 * XInputTime 时间选择：输入框 + popover 时间列表。
 * 支持 12/24 小时制、分钟步长与时间区间（range）。
 */
import type { HTMLAttributes } from 'vue'
import { computed, ref, watch } from 'vue'
import { Check, Clock } from '@lucide/vue'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  /** 绑定时间（HH:mm，range 时为 [开始, 结束]） */
  modelValue?: string | string[]
  /** 时间区间选择 */
  range?: boolean
  /** 12 小时制 */
  hour12?: boolean
  /** 步长（分钟） */
  step?: number
  /** 是否禁用 */
  disabled?: boolean
  class?: HTMLAttributes['class']
}>(), {
  modelValue: '',
  step: 1,
})

const emit = defineEmits<{
  'update:modelValue': [value: string | string[]]
  /** 时间变化回调 */
  change: [value: string | string[]]
}>()

const open = ref(false)
/** range 模式下已点选的开始时间，空表示等待首次点击 */
const draftStart = ref('')

watch(open, (next) => {
  if (next) draftStart.value = ''
})

function buildTimeOptions(): string[] {
  const options: string[] = []
  const totalMinutes = props.hour12 ? 12 * 60 : 24 * 60
  for (let minutes = 0; minutes < totalMinutes; minutes += props.step) {
    const hour = Math.floor(minutes / 60)
    const minute = minutes % 60
    options.push(`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`)
  }
  return options
}

const timeOptions = computed(() => buildTimeOptions())

const displayText = computed(() => {
  if (!props.range) return props.modelValue as string
  const pair = Array.isArray(props.modelValue) ? props.modelValue : []
  if (pair[0] == null) return ''
  return pair[1] != null ? `${pair[0]} → ${pair[1]}` : pair[0]
})

function isActive(time: string): boolean {
  if (!props.range) return props.modelValue === time
  return time === draftStart.value || (Array.isArray(props.modelValue) && props.modelValue.includes(time))
}

function handleSelect(time: string) {
  if (!props.range) {
    emit('update:modelValue', time)
    emit('change', time)
    open.value = false
    return
  }
  if (!draftStart.value) {
    /* 第一次点击：记录开始，等待结束 */
    draftStart.value = time
    return
  }
  /* 第二次点击：完成区间（自动排序） */
  const pair = draftStart.value <= time ? [draftStart.value, time] : [time, draftStart.value]
  draftStart.value = ''
  emit('update:modelValue', pair)
  emit('change', pair)
  open.value = false
}
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child :disabled="disabled">
      <button type="button" :class="cn('w-full cursor-pointer', props.class)">
        <span class="relative flex w-full items-center">
          <Input :model-value="displayText" placeholder="选择时间" class="h-9 pl-9 text-left" readonly />
          <Clock class="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
        </span>
      </button>
    </PopoverTrigger>
    <PopoverContent align="start" :class="cn('flex min-w-32 flex-col p-0')">
      <div v-if="range" class="border-b border-border px-3 py-1.5 text-xs text-muted-foreground">
        {{ draftStart ? `${draftStart} → 选择结束时间` : '选择开始时间' }}
      </div>
      <div class="flex max-h-60 flex-col gap-0.5 overflow-auto p-1">
        <button
          v-for="time in timeOptions"
          :key="time"
          type="button"
          :class="cn(
            'flex items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none',
            'hover:bg-muted focus-visible:bg-muted',
            isActive(time) && 'bg-primary-1 text-primary-7 hover:bg-primary-2',
          )"
          @click="handleSelect(time)"
        >
          {{ time }}
          <Check v-if="isActive(time)" class="size-4" />
        </button>
      </div>
    </PopoverContent>
  </Popover>
</template>
