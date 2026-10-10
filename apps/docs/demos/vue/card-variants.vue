<script setup lang="ts">
import XCard from '@/components/kit/XCard.vue'
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <XCard variant="outline" title="outline 描边卡片" description="默认变体：浅底 + 描边 + 分割线">
      描边卡片适合页面中的常规内容分区。
    </XCard>
    <XCard variant="solid" title="solid 反色卡片" description="深色底 + 反色文字">
      反色卡片适合强调区块，标题继承反色。
    </XCard>
    <XCard variant="soft" title="soft 轻底卡片" description="浅灰底 + 分割线，无描边">
      轻底卡片适合嵌入同色页面背景。
    </XCard>
  </div>
</template>
