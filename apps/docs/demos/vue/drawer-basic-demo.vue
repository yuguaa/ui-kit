<script setup lang="ts">
import { ref } from 'vue'
import XDrawer from '@/components/kit/XDrawer.vue'
import XButton from '@/components/kit/XButton.vue'

const rightOpen = ref(false)
const leftOpen = ref(false)
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XButton variant="soft" @click="rightOpen = true">右侧抽屉</XButton>
    <XButton variant="soft" @click="leftOpen = true">左侧抽屉</XButton>
  </div>

  <XDrawer v-model:open="rightOpen" title="右侧抽屉" description="direction 为 right 时从右侧滑出。">
    <template #body>抽屉内容区域，用于展示详情或表单。</template>
    <template #footer>
      <XButton @click="rightOpen = false">关闭</XButton>
    </template>
  </XDrawer>

  <XDrawer v-model:open="leftOpen" title="左侧抽屉" description="direction 为 left 时从左侧滑出。" direction="left">
    <template #body>左侧抽屉内容。</template>
    <template #footer>
      <XButton @click="leftOpen = false">关闭</XButton>
    </template>
  </XDrawer>
</template>
