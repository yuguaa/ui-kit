<script setup lang="ts">
import XAccordion from '@/components/kit/XAccordion.vue'

const items = [
  { label: '自定义外观', icon: 'star', content: 'ui 按主题插槽注入类名，覆盖每一层元素的外观。' },
]
</script>

<template>
  <XAccordion
    :items="items"
    default-value="0"
    class="w-full"
    :ui="{
      root: 'rounded-lg border border-border px-4',
      item: 'border-dashed',
      header: 'bg-muted rounded-md',
      trigger: 'text-primary font-semibold',
      leadingIcon: 'text-warning',
      label: 'tracking-wide',
      trailingIcon: 'text-info',
      content: 'text-neutral-6',
      body: 'italic',
    }"
  />
</template>
