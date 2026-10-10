<script setup lang="ts">
import XCollapsible from '@/components/kit/XCollapsible.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-5">
    <XCollapsible
      default-open
      :ui="{ root: 'gap-2 rounded-lg border border-border p-3', content: 'rounded-md bg-primary/10 p-3 text-primary' }"
    >
      <template #content>ui.root 覆盖根容器，ui.content 覆盖内容区，可注入任意 Tailwind 类名。</template>
    </XCollapsible>

    <XCollapsible
      as="section"
      default-open
      :unmount-on-hide="false"
      :ui="{ content: 'text-success/75' }"
    >
      <template #content>as="section" 渲染为 section 根元素；unmountOnHide=false 时关闭后内容保留在 DOM 中。</template>
    </XCollapsible>
  </div>
</template>
