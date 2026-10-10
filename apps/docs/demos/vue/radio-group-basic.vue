<script setup lang="ts">
import { ref } from 'vue'
import XRadioGroup from '@/components/kit/XRadioGroup.vue'

const plan = ref('standard')

const plans = [
  { value: 'basic', label: '基础版', description: '个人使用' },
  { value: 'standard', label: '标准版', description: '小团队推荐' },
  { value: 'pro', label: '专业版', description: '企业级功能' },
]
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <XRadioGroup v-model="plan" :options="plans" legend="订阅方案" />
    <XRadioGroup v-model="plan" :options="plans" legend="横向排列" orientation="horizontal" />
  </div>
</template>
