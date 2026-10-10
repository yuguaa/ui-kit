<script setup lang="ts">
import XLink from '@/components/kit/XLink.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-5">
    <div class="flex flex-wrap items-center gap-6">
      <XLink to="/docs" active>激活链接</XLink>
      <XLink to="/examples" inactive-class="italic tracking-wide">非激活附加类名</XLink>
      <XLink to="/disabled" disabled>禁用链接</XLink>
    </div>
    <div class="flex flex-wrap items-center gap-6">
      <XLink to="/docs" :ui="{ base: 'rounded-full px-3 py-1 bg-primary-1' }">
        ui.base 自定义外观
      </XLink>
      <XLink as="button">as 渲染为按钮</XLink>
    </div>
  </div>
</template>
