<script setup lang="ts">
import { BadgeCheck } from '@lucide/vue'
import XTooltip from '@/components/kit/XTooltip.vue'
import XButton from '@/components/kit/XButton.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XTooltip>
      <XButton variant="outline" color="neutral">自定义内容</XButton>
      <template #content>
        <span class="flex items-center gap-1.5">
          <BadgeCheck class="size-4 text-success" />
          content 插槽替换默认内容
        </span>
      </template>
    </XTooltip>

    <XTooltip
      text="主题定制"
      :ui="{ content: 'h-7 rounded-md border border-primary/20 bg-primary/10 text-primary', text: 'font-medium' }"
    >
      <XButton variant="outline" color="neutral">定制气泡</XButton>
    </XTooltip>
  </div>
</template>
