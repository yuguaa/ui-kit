<script setup lang="ts">
/**
 * XInputTime 时间选择：输入框 + popover 时间列表。
 * 支持 12/24 小时制与分钟步长。
 */
import type { HTMLAttributes } from 'vue'
import { computed, ref } from 'vue'
import { Check, Clock } from '@lucide/vue'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  /** 绑定时间（HH:mm） */
  modelValue?: string
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
  'update:modelValue': [value: string]
  /** 时间变化回调 */
  change: [value: string]
}>()

const open = ref(false)

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

function handleSelect(time: string) {
  emit('update:modelValue', time)
  emit('change', time)
  open.value = false
}
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child :disabled="disabled">
      <button type="button" :class="cn('w-full', props.class)">
        <span class="relative flex w-full items-center">
          <Input :model-value="modelValue" placeholder="选择时间" class="h-9 pl-9 text-left" readonly />
          <Clock class="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
        </span>
      </button>
    </PopoverTrigger>
    <PopoverContent align="start" :class="cn('flex min-w-32 flex-col p-0')">
      <div class="flex max-h-60 flex-col gap-0.5 overflow-auto p-1">
        <button
          v-for="time in timeOptions"
          :key="time"
          type="button"
          :class="cn(
            'flex items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none',
            'hover:bg-muted focus-visible:bg-muted',
            modelValue === time && 'bg-primary-1 text-primary-7 hover:bg-primary-2',
          )"
          @click="handleSelect(time)"
        >
          {{ time }}
          <Check v-if="modelValue === time" class="size-4" />
        </button>
      </div>
    </PopoverContent>
  </Popover>
</template>
