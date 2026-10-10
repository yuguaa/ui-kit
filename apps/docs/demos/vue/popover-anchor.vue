<script setup lang="ts">
import XPopover from '@/components/kit/XPopover.vue'
import XButton from '@/components/kit/XButton.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <div class="flex items-center gap-2">
      <span class="text-sm text-muted-foreground">锚点：</span>
      <XPopover>
        <XButton variant="outline" color="neutral">打开</XButton>
        <template #anchor>
          <span class="rounded-md bg-primary-1 px-2 py-1 text-sm text-primary-7">定位锚点</span>
        </template>
        <template #content>
          <div class="p-4 text-sm">
            <p>anchor 插槽指定定位参考元素，浮层相对它而不是触发器定位。</p>
          </div>
        </template>
      </XPopover>
    </div>
  </div>
</template>
