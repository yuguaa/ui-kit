<script setup lang="ts">
import { XCheckbox } from '@/components/kit'
</script>

<template>
  <div class="flex flex-col items-start gap-6">
    <XCheckbox label="接收产品动态">
      <template #description>订阅产品更新、新功能与使用技巧</template>
    </XCheckbox>
    <XCheckbox label="接收每周精选" color="success">
      <template #description>每周一封邮件，汇总热门内容</template>
    </XCheckbox>
  </div>
</template>
