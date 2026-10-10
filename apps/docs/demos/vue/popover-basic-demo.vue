<script setup lang="ts">
import XPopover from '@/components/kit/XPopover.vue'
import XButton from '@/components/kit/XButton.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XPopover>
      <XButton variant="outline" color="neutral">点击触发</XButton>
      <template #content>
        <div class="p-4 text-sm">
          <p class="font-semibold">气泡标题</p>
          <p class="mt-1 text-muted-foreground">默认 mode 为 click，点击触发元素显示。</p>
        </div>
      </template>
    </XPopover>

    <XPopover mode="hover" :open-delay="100">
      <XButton variant="outline" color="neutral">悬停触发</XButton>
      <template #content>
        <div class="p-4 text-sm">
          <p>mode 为 hover 时悬停触发，openDelay / closeDelay 控制延迟。</p>
        </div>
      </template>
    </XPopover>

    <XPopover>
      <XButton variant="outline" color="neutral">函数内容</XButton>
      <template #content="{ close }">
        <div class="flex items-center gap-2 p-4 text-sm">
          <span>content 插槽接收 close 方法。</span>
          <XButton variant="soft" size="sm" @click="close">关闭</XButton>
        </div>
      </template>
    </XPopover>
  </div>
</template>
