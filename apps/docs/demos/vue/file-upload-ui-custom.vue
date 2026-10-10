<script setup lang="ts">
import { XFileUpload } from '@/components/kit'
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div class="flex flex-col gap-1.5">
      <span class="text-sm text-muted-foreground">拖拽区圆角与背景自定义</span>
      <XFileUpload
        label="拖拽文件到此处"
        :ui="{ base: 'rounded-2xl bg-primary-1/40', wrapper: 'py-6', label: 'text-primary-7' }"
      />
    </div>
    <div class="flex flex-col gap-1.5">
      <span class="text-sm text-muted-foreground">highlight 常驻描边 + 颜色强调</span>
      <XFileUpload label="拖拽文件到此处" highlight color="success" />
    </div>
  </div>
</template>
