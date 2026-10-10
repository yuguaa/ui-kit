<script setup lang="ts">
import { ref } from 'vue'
import { Info } from '@lucide/vue'
import XModal from '@/components/kit/XModal.vue'
import XButton from '@/components/kit/XButton.vue'

const slotsOpen = ref(false)
const contentOpen = ref(false)
const closeSlotOpen = ref(false)
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XButton variant="soft" @click="slotsOpen = true">插槽组合</XButton>
    <XButton variant="soft" @click="contentOpen = true">content 插槽</XButton>
    <XButton variant="soft" @click="closeSlotOpen = true">自定义关闭按钮</XButton>
  </div>

  <XModal v-model:open="slotsOpen" title="插槽组合" description="header / actions / body / footer 插槽自由组合。">
    <template #header>
      <div class="flex items-center gap-2">
        <Info class="size-4 text-info-6" />
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
  </XModal>

  <XModal v-model:open="contentOpen" title="content 插槽" description="content 替换默认结构，标题转为隐藏标题。">
    <template #content>
      <div class="p-4 sm:p-6">
        <p>content 插槽接管整个面板内容，header / body / footer 默认结构不再渲染。</p>
      </div>
    </template>
  </XModal>

  <XModal v-model:open="closeSlotOpen" title="自定义关闭按钮" :close="false">
    <template #close>
      <XButton variant="soft" color="error" size="sm" @click="closeSlotOpen = false">关闭</XButton>
    </template>
    <template #body>
      <p>close 插槽替换默认关闭按钮。</p>
    </template>
  </XModal>
</template>
