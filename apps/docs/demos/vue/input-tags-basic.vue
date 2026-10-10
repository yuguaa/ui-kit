<script setup lang="ts">
import { ref } from 'vue'
import XInputTags from '@/components/kit/XInputTags.vue'

const tags = ref(['Vue', 'Nuxt'])
</script>

<template>
  <div class="flex w-full flex-wrap items-center gap-4">
    <XInputTags v-model="tags" class="w-80" />
    <span class="text-sm text-muted-foreground">当前标签：{{ tags.join('、') }}</span>
  </div>
</template>
