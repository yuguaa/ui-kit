<script setup lang="ts">
import { ref } from 'vue'
import XTextarea from '@/components/kit/XTextarea.vue'

/* 预置超过上限行数的内容，直接展示高度受限与内部滚动 */
const LONG_TEXT = [
  '第一行：组件补齐阶段',
  '第二行：maxRows 限制自动高度',
  '第三行：超出后内容在控件内部滚动',
  '第四行：行高由计算样式换算',
  '第五行：这是上限内的最后一行',
  '第六行：从这一行开始需要滚动查看',
  '第七行：继续输入还会保持上限高度',
].join('\n')

const content = ref(LONG_TEXT)
const limited = ref(LONG_TEXT)
</script>

<template>
  <div class="flex flex-wrap items-start gap-4">
    <XTextarea v-model="content" autosize :max-rows="5" placeholder="自动高度上限 5 行" class="w-72" />
    <XTextarea
      v-model="limited"
      autosize
      :max-rows="5"
      show-count
      placeholder="上限 5 行 + 字数统计"
      class="w-72"
    />
  </div>
</template>
