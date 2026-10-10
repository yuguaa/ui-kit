<script setup lang="ts">
import { XForm, XFormField, XInput } from '@/components/kit'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

/** 展示标签 */
function labelOf(size: string) {
  return `size="${size}"`
}
</script>

<template>
  <XForm class="flex w-full flex-col gap-4">
    <XFormField
      v-for="size in sizes"
      :key="size"
      :size="size"
      :label="labelOf(size)"
    >
      <XInput placeholder="请输入内容" />
    </XFormField>
  </XForm>
</template>
