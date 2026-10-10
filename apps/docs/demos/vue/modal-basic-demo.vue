<script setup lang="ts">
import { ref } from 'vue'
import XModal from '@/components/kit/XModal.vue'
import XButton from '@/components/kit/XButton.vue'

const open = ref(false)
const result = ref('')
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XButton variant="soft" @click="open = true">打开对话框</XButton>
    <span v-if="result" class="text-sm text-muted-foreground">{{ result }}</span>
  </div>

  <XModal v-model:open="open" title="对话框标题" description="这是对话框的辅助说明文字。">
    <template #body>
      <p>这是对话框的正文内容，用于说明本次操作的含义，用户可以阅读后在底部确认或取消。</p>
    </template>
    <template #footer>
      <XButton color="neutral" variant="ghost" @click="open = false">取消</XButton>
      <XButton @click="result = '已确认'; open = false">确认</XButton>
    </template>
  </XModal>
</template>
