<script setup lang="ts">
import XInput from '@/components/kit/XInput.vue'
import XIcon from '@/components/kit/XIcon.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap items-center gap-4">
      <XInput placeholder="Input（md）" class="w-56" />
      <XInput size="sm" placeholder="Input（sm）" class="w-40" />
    </div>
    <div class="flex flex-wrap items-center gap-4">
      <XInput placeholder="带前缀图标（搜索）" class="w-56">
        <template #prefix><XIcon name="search" size="sm" /></template>
      </XInput>
      <XInput placeholder="带后缀图标" class="w-56">
        <template #suffix><XIcon name="chevron-down" size="sm" /></template>
      </XInput>
    </div>
  </div>
</template>
