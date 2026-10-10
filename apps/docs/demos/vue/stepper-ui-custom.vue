<script setup lang="ts">
import { ref } from 'vue'
import { XStepper } from '@/components/kit'

const items = [
  { value: 'basic', title: '基础信息', description: '填写基础资料', content: '基础信息表单' },
  { value: 'confirm', title: '确认提交', description: '核对并提交', content: '确认提交面板' },
]

const stepKey = ref('basic')
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <XStepper
      v-model="stepKey"
      :items="items"
      :ui="{
        trigger: 'border-2 border-primary/20',
        title: 'text-primary',
        description: 'text-primary/50',
        content: 'rounded-md bg-elevated p-4',
      }"
    >
      <template #indicator="{ item }">
        <span v-if="item.value === 'basic'">★</span>
        <span v-else>✓</span>
      </template>
      <template #title="{ item }">步骤:{{ item.title }}</template>
      <template #description="{ item }">说明:{{ item.description }}</template>
      <template #content="{ item }">内容面板:{{ item.content }}</template>
    </XStepper>
  </div>
</template>
