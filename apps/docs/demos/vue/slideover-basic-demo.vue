<script setup lang="ts">
import { ref } from 'vue'
import XSlideover from '@/components/kit/XSlideover.vue'
import XButton from '@/components/kit/XButton.vue'
import XLink from '@/components/kit/XLink.vue'

const open = ref(false)
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XButton variant="soft" @click="open = true">打开侧滑面板</XButton>
  </div>
  <XSlideover v-model:open="open" title="侧滑面板">
    <template #content>
      <div class="flex flex-col gap-2">
        <XLink to="/">首页</XLink>
        <XLink to="/about">关于</XLink>
        <XLink to="/contact">联系</XLink>
      </div>
    </template>
  </XSlideover>
</template>
