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
        orientation: 'horizontal',
        actions: [{ label: '删除', variant: 'solid', color: 'error' }],
        action: { label: '归档', onClick: () => toastApi.show({ title: '项目已归档', color: 'success' }) },
        cancel: { label: '取消', onClick: () => toastApi.show({ title: '已取消删除' }) },
      })"
    >
      横向布局与操作按钮
    </XButton>
    <XButton
      variant="soft"
      color="neutral"
      @click="toastApi.show({
        title: '可关闭通知',
        description: 'close 显示关闭按钮，closeIcon 更换图标。',
        color: 'neutral',
        closeIcon: 'x',
      })"
    >
      关闭按钮
    </XButton>
  </div>
  <XToaster />
</template>
