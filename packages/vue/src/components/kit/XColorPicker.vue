<script setup lang="ts">
/**
 * XColorPicker 颜色选择：预设色板 + 原生取色器。
 */
import type { HTMLAttributes } from 'vue'
import { Check } from '@lucide/vue'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  /** 绑定颜色 */
  modelValue?: string
  /** 预设色板 */
  presets?: string[]
  /** 是否禁用 */
  disabled?: boolean
  class?: HTMLAttributes['class']
}>(), {
  modelValue: '#1677ff',
  presets: () => [
    '#1677ff',
    '#00DC82',
    '#ff4d4f',
    '#faad14',
    '#722ed1',
    '#13c2c2',
    '#eb2f96',
    '#f5f5f5',
    '#1f1f1f',
  ],
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  /** 颜色变化回调 */
  change: [value: string]
}>()

function update(color: string) {
  emit('update:modelValue', color)
  emit('change', color)
}
</script>

<template>
  <Popover>
    <PopoverTrigger as-child :disabled="disabled">
      <button
        type="button"
        aria-label="选择颜色"
        :class="cn(
          'inline-flex size-9 items-center justify-center rounded-lg border border-input transition-colors outline-none',
          'focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50',
          'disabled:pointer-events-none disabled:opacity-50',
          props.class,
        )"
      >
        <span class="size-5 rounded-md border border-black/10" :style="{ backgroundColor: modelValue }" />
      </button>
    </PopoverTrigger>
    <PopoverContent align="start" :class="cn('flex w-fit flex-col gap-3 p-3')">
      <label class="flex cursor-pointer items-center gap-2 text-sm">
        自定义
        <input
          type="color"
          :value="modelValue"
          class="size-6 cursor-pointer appearance-none rounded border-0 bg-transparent p-0 [&::-webkit-color-swatch]:rounded [&::-webkit-color-swatch]:border-0"
          @input="update(($event.target as HTMLInputElement).value)"
        />
      </label>
      <div class="grid grid-cols-5 gap-1.5">
        <button
          v-for="preset in presets"
          :key="preset"
          type="button"
          :aria-label="preset"
          class="inline-flex size-6 items-center justify-center rounded-md border border-black/10 outline-none transition-colors hover:border-primary-5"
          :style="{ backgroundColor: preset }"
          @click="update(preset)"
        >
          <Check v-if="modelValue.toLowerCase() === preset.toLowerCase()" class="size-3.5 text-white drop-shadow" />
        </button>
      </div>
    </PopoverContent>
  </Popover>
</template>
