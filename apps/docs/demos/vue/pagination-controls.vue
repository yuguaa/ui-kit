<script setup lang="ts">
import { ref } from 'vue'
import { XPagination } from '@/components/kit'

const page = ref(5)
</script>

<template>
  <div class="flex w-full flex-wrap items-center gap-6">
    <XPagination
      v-model:page="page"
      :total="200"
      :items-per-page="10"
      first-icon="chevron-down"
      prev-icon="chevron-down"
      next-icon="chevron-right"
      last-icon="chevron-right"
      color="neutral"
      variant="ghost"
      size="sm"
    />
    <XPagination
      v-model:page="page"
      :total="200"
      :items-per-page="10"
      color="primary"
      variant="soft"
      active-color="success"
      active-variant="solid"
    />
  </div>
</template>
