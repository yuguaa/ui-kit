<script setup lang="ts">
import { ref } from 'vue'
import { Minus, Plus } from '@lucide/vue'
import XInputNumber from '@/components/kit/XInputNumber.vue'

const value = ref(5)
</script>

<template>
  <div class="flex w-full flex-wrap items-center gap-8">
    <XInputNumber v-model="value" placeholder="自定义按钮内容">
      <template #increment><Plus class="size-4" /></template>
      <template #decrement><Minus class="size-4" /></template>
    </XInputNumber>
    <XInputNumber placeholder="加号禁用" increment-disabled />
    <XInputNumber placeholder="减号禁用" decrement-disabled />
    <XInputNumber placeholder="仅加号" :decrement="false" />
  </div>
</template>
