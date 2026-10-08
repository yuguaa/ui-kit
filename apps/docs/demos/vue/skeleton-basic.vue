<script setup lang="ts">
import { ref } from 'vue'
import { XButton, XSkeleton } from '@/components/kit'

const loading = ref(true)
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div class="flex flex-col gap-3">
      <span class="text-sm text-muted-foreground">形状：text / circle / rect</span>
      <XSkeleton variant="text" width="60%" />
      <XSkeleton variant="text" width="40%" />
      <div class="flex items-center gap-3">
        <XSkeleton variant="circle" />
        <XSkeleton variant="rect" width="12rem" height="2.5rem" />
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <span class="text-sm text-muted-foreground">loading 切换：为 false 时渲染默认插槽中的真实内容</span>
      <XSkeleton :loading="loading" variant="rect" height="2.5rem">
        <div class="flex h-10 items-center rounded-md bg-primary-1 px-3 text-sm text-primary-7">
          内容已就绪
        </div>
      </XSkeleton>
    </div>

    <XButton size="sm" variant="soft" @click="loading = !loading">
      切换 loading（当前：{{ loading }}）
    </XButton>
  </div>
</template>
