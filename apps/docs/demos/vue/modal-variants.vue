<script setup lang="ts">
import { ref } from 'vue'
import { Trash } from '@lucide/vue'
import XModal from '@/components/kit/XModal.vue'
import XButton from '@/components/kit/XButton.vue'

const fullscreenOpen = ref(false)
const scrollableOpen = ref(false)
const lockedOpen = ref(false)
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XButton variant="soft" @click="fullscreenOpen = true">全屏对话框</XButton>
    <XButton variant="soft" @click="scrollableOpen = true">滚动遮罩</XButton>
    <XButton variant="soft" @click="lockedOpen = true">禁止外部关闭</XButton>
  </div>

  <XModal v-model:open="fullscreenOpen" title="全屏对话框" description="fullscreen 让内容占满整个屏幕。" fullscreen>
    <template #body>
      <p>全屏模式适合承载复杂表单或详情页。</p>
    </template>
  </XModal>

  <XModal
    v-model:open="scrollableOpen"
    title="滚动遮罩模式"
    description="scrollable 让内容随遮罩滚动并居中显示。"
    scrollable
  >
    <template #body>
      <p v-for="index in 12" :key="index" class="text-sm text-muted-foreground">
        这是第 {{ index }} 行说明文字，用于演示滚动遮罩。
      </p>
    </template>
  </XModal>

  <XModal
    v-model:open="lockedOpen"
    title="锁定对话框"
    description="dismissible 为 false 时，点击外部或按 Esc 不会关闭，改为发射 close:prevent。"
    :dismissible="false"
    :close="{ color: 'error' }"
    :close-icon="Trash"
  >
    <template #body>
      <p>只能通过右上角关闭按钮关闭。</p>
    </template>
  </XModal>
</template>
