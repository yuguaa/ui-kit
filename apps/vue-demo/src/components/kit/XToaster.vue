<script setup lang="ts">
/**
 * XToaster 消息通知容器：挂载在应用根部。
 * 搭配 XToast.ts 的 useToast().show / .dismiss 使用。
 */
import { Toaster } from '@/components/ui/sonner'

defineOptions({ name: 'XToaster' })
</script>

<template>
  <Toaster position="top-right" />
</template>
