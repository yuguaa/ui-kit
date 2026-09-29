<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
  defaultValue?: string | number
  modelValue?: string | number
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <textarea
    v-model="modelValue"
    data-slot="textarea"
    :class="cn('ring-input dark:bg-input/30 focus-visible:ring-ring aria-invalid:ring-destructive/50 dark:aria-invalid:ring-destructive/40 disabled:bg-input/50 dark:disabled:bg-input/80 rounded-md bg-transparent px-2.5 py-2 text-base transition-[box-shadow,color] focus-visible:ring-2 aria-invalid:ring-2 md:text-sm flex field-sizing-content min-h-16 w-full outline-none ring-1 ring-inset placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50', props.class)"
  />
</template>
