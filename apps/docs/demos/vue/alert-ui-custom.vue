<script setup lang="ts">
import XAlert from '@/components/kit/XAlert.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <XAlert
      color="primary"
      icon="info"
      title="ui 插槽自定义"
      description="ui 键按主题插槽覆盖类名：root 圆角与阴影，title 加宽字距。"
      :ui="{ root: 'rounded-2xl shadow-md', title: 'tracking-wide' }"
    />
    <XAlert
      as="section"
      color="neutral"
      variant="outline"
      title="as 渲染为 section"
      description="as 可渲染为任意元素或组件。"
    />
  </div>
</template>
