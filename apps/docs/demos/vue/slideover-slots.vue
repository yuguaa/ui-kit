<script setup lang="ts">
import { ref } from 'vue'
import { Info } from '@lucide/vue'
import XSlideover from '@/components/kit/XSlideover.vue'
import XButton from '@/components/kit/XButton.vue'

const slotsOpen = ref(false)
const contentOpen = ref(false)
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XButton variant="soft" @click="slotsOpen = true">插槽组合</XButton>
    <XButton variant="soft" @click="contentOpen = true">content 插槽</XButton>
  </div>

  <XSlideover v-model:open="slotsOpen" title="插槽组合" description="header / actions / body / footer / close 插槽自由组合。">
    <template #header>
      <div class="flex items-center gap-2">
        <Info class="size-4 text-info" />
        <span class="font-semibold">自定义头部</span>
      </div>
    </template>
    <template #actions>
      <XButton variant="ghost" color="neutral" size="sm">更多</XButton>
    </template>
    <template #body>
      <p>正文内容由 body 插槽提供。</p>
    </template>
    <template #footer>
      <XButton color="neutral" variant="ghost" @click="slotsOpen = false">取消</XButton>
      <XButton @click="slotsOpen = false">确认</XButton>
    </template>
  </XSlideover>

  <XSlideover v-model:open="contentOpen" title="content 插槽" description="content 替换默认结构，标题转为隐藏标题。">
    <template #content>
      <div class="p-4 sm:p-6">
        <p>content 插槽接管整个面板内容，header / body / footer 默认结构不再渲染。</p>
      </div>
    </template>
  </XSlideover>
</template>
