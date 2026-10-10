<script setup lang="ts">
import { ref } from 'vue'
import XInputRating from '@/components/kit/XInputRating.vue'

const rating = ref(3)
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <XInputRating v-model="rating" />
    <span class="text-sm text-muted-foreground">当前评分：{{ rating }}</span>
  </div>
</template>
