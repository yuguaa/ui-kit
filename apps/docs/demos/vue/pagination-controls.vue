<script setup lang="ts">
import { ref } from 'vue'
import XPagination from '@/components/kit/XPagination.vue'

const page = ref(5)
</script>

<template>
  <div class="flex w-full flex-wrap items-center gap-4">
    <XPagination v-model:current="page" :total="200" :page-size="10" show-controls />
  </div>
</template>
