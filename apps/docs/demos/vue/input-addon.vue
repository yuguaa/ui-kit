<script setup lang="ts">
import XInput from '@/components/kit/XInput.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <XInput placeholder="网址" class="w-72">
      <template #addonBefore>https://</template>
      <template #addonAfter>.com</template>
    </XInput>
    <XInput placeholder="搜索" class="w-72">
      <template #addonAfter>搜索</template>
    </XInput>
  </div>
</template>
