<script setup lang="ts">
import XButton from '@/components/kit/XButton.vue'
import XToaster from '@/components/kit/XToaster.vue'
import { useToast } from '@/components/kit/XToast'

const toastApi = useToast()
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XButton
      variant="soft"
      color="error"
      @click="toastApi.show({
        title: '确认删除',
        description: '该操作将永久删除此项目。',
        color: 'error',
        action: { label: '删除', onClick: () => toastApi.show({ title: '项目已删除', color: 'success' }) },
        cancel: { label: '取消', onClick: () => toastApi.show({ title: '已取消删除' }) },
      })"
    >
      带操作按钮的通知
    </XButton>
  </div>
  <XToaster />
</template>
