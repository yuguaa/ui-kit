<script setup lang="ts">
import { ref } from 'vue'
import XDrawer from '@/components/kit/XDrawer.vue'
import XButton from '@/components/kit/XButton.vue'

const opens = ref({
  top: false,
  right: false,
  bottom: false,
  left: false,
})
const insetOpen = ref(false)
const plainOpen = ref(false)

const labels: Record<'top' | 'right' | 'bottom' | 'left', string> = {
  top: '顶部抽屉',
  right: '右侧内嵌抽屉',
  bottom: '底部抽屉',
  left: '左侧内嵌抽屉',
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XButton v-for="(label, side) in labels" :key="side" variant="soft" @click="opens[side as 'top' | 'right' | 'bottom' | 'left'] = true">
      {{ label }}
    </XButton>
    <XButton variant="outline" @click="insetOpen = true">内嵌 + 关闭按钮</XButton>
    <XButton variant="outline" @click="plainOpen = true">无把手</XButton>
  </div>

  <XDrawer
    v-for="(label, side) in labels"
    :key="side"
    v-model:open="opens[side as 'top' | 'right' | 'bottom' | 'left']"
    :title="label"
    :direction="side"
    :inset="side === 'right' || side === 'left'"
  >
    <template #body>
      <p class="text-sm text-muted-foreground">{{ label }}：direction 控制滑出方向，inset 与屏幕边缘保留间距。</p>
    </template>
  </XDrawer>

  <XDrawer
    v-model:open="insetOpen"
    title="内嵌抽屉"
    description="inset 让面板与边缘保留间距，close 显示右上角关闭按钮。"
    direction="right"
    inset
    close
  >
    <template #body>
      <p class="text-sm text-muted-foreground">content 内文案。</p>
    </template>
  </XDrawer>

  <XDrawer v-model:open="plainOpen" title="无把手抽屉" :handle="false">
    <template #body>
      <p class="text-sm text-muted-foreground">handle 为 false 时隐藏拖拽把手。</p>
    </template>
  </XDrawer>
</template>
