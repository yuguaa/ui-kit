<script setup lang="ts">
import { ref } from 'vue'
import XInputNumber from '@/components/kit/XInputNumber.vue'

const count = ref(5)
</script>

<template>
  <div class="flex w-full flex-wrap items-center gap-4">
    <XInputNumber v-model="count" :min="1" :max="10" placeholder="数量" />
    <XInputNumber :step="5" placeholder="步长 5" />
    <XInputNumber disabled placeholder="禁用状态" />
  </div>
</template>
