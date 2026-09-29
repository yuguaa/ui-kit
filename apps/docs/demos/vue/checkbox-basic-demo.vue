<script setup lang="ts">
import { ref } from 'vue'
import XCheckbox from '@/components/kit/XCheckbox.vue'

const checked = ref(true)
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <XCheckbox v-model="checked" label="多选框 Checkbox" />
    <XCheckbox indeterminate label="半选状态" />
    <XCheckbox disabled label="禁用状态" />
    <XCheckbox disabled checked label="禁用选中" />
  </div>
</template>
