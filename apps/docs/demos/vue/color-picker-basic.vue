<script setup lang="ts">
import { ref } from 'vue'
import { XColorPicker } from '@/components/kit'

const color = ref('#1677ff')
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <XColorPicker v-model="color" />
    <p class="text-sm text-muted-foreground">
      当前值：<code class="rounded bg-muted px-1.5 py-0.5">{{ color }}</code>
    </p>
  </div>
</template>
