<script setup lang="ts">
import XCollapsible from '@/components/kit/XCollapsible.vue'
import XButton from '@/components/kit/XButton.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-5">
    <XCollapsible>
      <template #content>点击「展开详情」展开的内容区域，再次点击收起。关闭后内容默认卸载。</template>
    </XCollapsible>

    <XCollapsible default-open>
      <template #trigger>
        <XButton size="sm" variant="soft" color="neutral">自定义触发器（默认展开）</XButton>
      </template>
      <template #content>defaultOpen 让初始状态为展开。</template>
    </XCollapsible>

    <XCollapsible disabled>
      <template #content>disabled 时触发器不可交互。</template>
    </XCollapsible>
  </div>
</template>
