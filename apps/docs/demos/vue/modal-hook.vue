<script setup lang="ts">
import { useXModal } from '@/components/kit/useXModal'
import XButton from '@/components/kit/XButton.vue'

const [Modal, modalApi] = useXModal({
  title: 'hook 用法',
  description: '调用即得 [Modal, modalApi]，通过 api 控制打开与关闭。',
  onOk: () => modalApi.close(),
})

function openWithState() {
  modalApi.setState({ title: '动态标题', description: 'setState 更新标题与说明。' })
  modalApi.open()
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XButton variant="soft" @click="modalApi.open()">打开对话框</XButton>
    <XButton variant="outline" @click="openWithState">打开并更新标题</XButton>
  </div>
  <Modal>hook 模式不需要 v-model，直接用 api 控制。</Modal>
</template>
