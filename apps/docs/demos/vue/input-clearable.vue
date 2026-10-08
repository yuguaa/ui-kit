<script setup lang="ts">
import { ref } from 'vue'
import XInput from '@/components/kit/XInput.vue'
import XIcon from '@/components/kit/XIcon.vue'

const keyword = ref('Vue')
const domain = ref('nuxt')
const site = ref('vuejs')
const clearedCount = ref(0)
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap items-center gap-4">
      <XInput v-model="keyword" clearable placeholder="输入后出现清空按钮" class="w-64" />
      <XInput
        v-model="domain"
        clearable
        placeholder="带前后缀图标"
        class="w-64"
        @clear="clearedCount++"
      >
        <template #prefix><XIcon name="search" size="sm" /></template>
        <template #suffix><XIcon name="chevron-down" size="sm" /></template>
      </XInput>
      <XInput v-model="site" clearable placeholder="域名" addon-after=".com" class="w-72" />
    </div>
    <p class="text-sm text-muted-foreground">已清空 {{ clearedCount }} 次</p>
  </div>
</template>
