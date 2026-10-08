<script setup lang="ts">
import { XCheckbox } from '@/components/kit'
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <XCheckbox size="sm" checked label="sm 小号" />
    <XCheckbox size="md" checked label="md 中号" />
    <XCheckbox size="lg" checked label="lg 大号" />
  </div>
</template>
