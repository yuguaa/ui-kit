<script setup lang="ts">
import XButton from '@/components/kit/XButton.vue'
import XToaster from '@/components/kit/XToaster.vue'
import { useToast } from '@/components/kit/XToast'

const toastApi = useToast()
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XButton variant="soft" color="success" @click="toastApi.show({ title: '操作成功', description: '数据已保存。', color: 'success' })">
      成功通知
    </XButton>
    <XButton variant="soft" color="warning" @click="toastApi.show({ title: '请注意', description: '操作存在风险。', color: 'warning' })">
      警告通知
    </XButton>
    <XButton variant="soft" color="error" @click="toastApi.show({ title: '操作失败', description: '请稍后重试。', color: 'error' })">
      失败通知
    </XButton>
  </div>
  <XToaster />
</template>
