<script setup lang="ts">
import { ref } from 'vue'
import XSlideover from '@/components/kit/XSlideover.vue'
import XButton from '@/components/kit/XButton.vue'

const opens = ref({ top: false, right: false, bottom: false, left: false })
const insetOpen = ref(false)
const plainOpen = ref(false)

const labels: Record<'top' | 'right' | 'bottom' | 'left', string> = {
  top: '顶部',
  right: '右侧',
  bottom: '底部',
  left: '左侧',
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XButton v-for="(label, side) in labels" :key="side" variant="soft" @click="opens[side as 'top' | 'right' | 'bottom' | 'left'] = true">
      {{ label }}滑入
    </XButton>
    <XButton variant="outline" @click="insetOpen = true">内嵌面板</XButton>
    <XButton variant="outline" @click="plainOpen = true">无遮罩</XButton>
  </div>

  <XSlideover
    v-for="(label, side) in labels"
    :key="side"
    v-model:open="opens[side as 'top' | 'right' | 'bottom' | 'left']"
    :title="`${label}滑入`"
    :side="side"
  >
    <template #body>
      <p class="text-sm text-muted-foreground">side 控制滑入方向。</p>
    </template>
  </XSlideover>

  <XSlideover
    v-model:open="insetOpen"
    title="内嵌面板"
    description="inset 让面板与屏幕边缘保留间距。"
    side="right"
    inset
  >
    <template #body>
      <p class="text-sm text-muted-foreground">面板四角圆角并保留边距。</p>
    </template>
  </XSlideover>

  <XSlideover v-model:open="plainOpen" title="无遮罩面板" :overlay="false" :close="false">
    <template #body>
      <p class="text-sm text-muted-foreground">overlay 为 false 时隐藏遮罩，close 为 false 时隐藏关闭按钮。</p>
    </template>
  </XSlideover>
</template>
