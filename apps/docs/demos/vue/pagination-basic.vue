<script setup lang="ts">
import { ref } from 'vue'
import { XPagination } from '@/components/kit'

const page = ref(5)
</script>

<template>
  <div class="flex w-full flex-wrap items-center gap-4">
    <XPagination v-model:page="page" :total="200" :items-per-page="10" show-edges />
    <span class="text-xs text-muted-foreground">当前第 {{ page }} 页</span>
  </div>
</template>
