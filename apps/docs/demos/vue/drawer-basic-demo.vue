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
  <XDrawer v-model:open="rightOpen" title="右侧抽屉">
    <template #content>抽屉内容区域，用于展示详情或表单。</template>
  </XDrawer>
  <XDrawer v-model:open="leftOpen" title="左侧抽屉" side="left">
    <template #content>左侧抽屉内容。</template>
  </XDrawer>
</template>
