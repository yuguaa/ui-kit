<script setup lang="ts">
import XAlert from '@/components/kit/XAlert.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <XAlert variant="solid" type="info" message="solid 变体" description="实心背景，用于强提示。" show-icon />
    <XAlert variant="outline" type="warning" message="outline 变体" description="描边样式，背景透明。" show-icon />
    <XAlert variant="subtle" type="error" message="subtle 变体" description="浅底加描边，弱化边界。" show-icon />
  </div>
</template>
