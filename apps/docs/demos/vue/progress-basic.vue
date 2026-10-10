<script setup lang="ts">
import { ref } from 'vue'
import XProgress from '@/components/kit/XProgress.vue'

const value = ref(45)
</script>

<template>
  <div class="flex w-full flex-col gap-5">
    <XProgress v-model="value" />
    <XProgress v-model="value" status color="success" />
    <XProgress :model-value="100" status color="info">
      <template #status="{ percent }">
        <span class="text-info">已完成 {{ percent }}%</span>
      </template>
    </XProgress>
    <XProgress
      :model-value="60"
      :ui="{ base: 'h-3', indicator: 'bg-gradient-to-r from-primary to-info' }"
    />
  </div>
</template>
