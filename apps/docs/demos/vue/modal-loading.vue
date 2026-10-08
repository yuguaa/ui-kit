<script setup lang="ts">
import { useXModal } from '@/components/kit/useXModal'
import XButton from '@/components/kit/XButton.vue'

/** 确定时锁定对话框，等异步操作结束后再解锁并关闭 */
const [Modal, modalApi] = useXModal({
  title: '提交确认',
  description: '确定按钮进入加载态时，遮罩、关闭按钮与取消按钮都会失效。',
  onOk: () => {
    modalApi.lock()
    setTimeout(() => {
      modalApi.unlock()
      modalApi.close()
    }, 1200)
  },
})
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XButton variant="soft" @click="modalApi.open()">打开对话框</XButton>
  </div>
  <Modal>
    <p>点击「确定」后对话框会被锁定，1.2 秒后自动关闭。</p>
  </Modal>
</template>
