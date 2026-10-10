<script setup lang="ts">
import { ref } from 'vue'
import { XPinInput } from '@/components/kit'

const value = ref('')
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <XPinInput v-model="value" />
    <p class="text-sm text-muted-foreground">
      当前值：<code class="rounded bg-muted px-1.5 py-0.5">{{ value || '空' }}</code>
    </p>
  </div>
</template>
