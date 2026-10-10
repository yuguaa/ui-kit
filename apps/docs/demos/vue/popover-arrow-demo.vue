<script setup lang="ts">
import XPopover from '@/components/kit/XPopover.vue'
import XButton from '@/components/kit/XButton.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XPopover arrow>
      <XButton variant="outline" color="neutral">悬停带箭头</XButton>
      <template #content>
        <div class="p-4 text-sm">
          <p>arrow 显示指向触发元素的箭头。</p>
        </div>
      </template>
    </XPopover>

    <XPopover mode="hover" arrow>
      <XButton variant="outline" color="neutral">点击带箭头</XButton>
      <template #content>
        <div class="p-4 text-sm">
          <p>箭头随浮层定位自动指向触发器。</p>
        </div>
      </template>
    </XPopover>
  </div>
</template>
