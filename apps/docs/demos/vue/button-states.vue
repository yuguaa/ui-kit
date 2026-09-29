<script setup lang="ts">
import XButton from '@/components/kit/XButton.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XButton loading>加载中</XButton>
    <XButton disabled>禁用</XButton>
    <XButton variant="outline" disabled>禁用</XButton>
    <XButton variant="soft" disabled>禁用</XButton>
    <XButton variant="link" disabled>禁用</XButton>
  </div>
</template>
