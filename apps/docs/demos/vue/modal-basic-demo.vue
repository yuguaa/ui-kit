<script setup lang="ts">
import { ref } from 'vue'
import XModal from '@/components/kit/XModal.vue'
import XButton from '@/components/kit/XButton.vue'

const open = ref(false)
const confirmText = ref('')
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XButton variant="soft" @click="open = true">打开对话框</XButton>
    <span v-if="confirmText" class="text-sm text-muted-foreground">{{ confirmText }}</span>
  </div>
  <XModal
    v-model:open="open"
    title="对话框标题"
    description="这是对话框的辅助说明文字。"
    ok-text="确认"
    cancel-text="取消"
    @ok="confirmText = '已点击确认'"
    @cancel="confirmText = '已点击取消'"
  >
    这是对话框的正文内容，用于说明本次操作的含义，用户可以阅读后在底部确认或取消。
  </XModal>
</template>
