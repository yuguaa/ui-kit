<script setup lang="ts">
import { ref } from 'vue'
import XSlideover from '@/components/kit/XSlideover.vue'
import XButton from '@/components/kit/XButton.vue'

const open = ref(false)
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XButton variant="soft" @click="open = true">打开定制面板</XButton>
  </div>

  <XSlideover
    v-model:open="open"
    title="主题定制"
    description="ui 属性按主题插槽键覆盖类名。"
    :ui="{
      overlay: 'bg-primary-900/40',
      content: 'rounded-2xl border border-primary/20',
      header: 'bg-primary/10 border-b border-primary/20',
      title: 'text-primary',
      description: 'text-primary/75',
      body: 'text-sm leading-6',
    }"
  >
    <template #body>
      <p>content / header / title / description / body / overlay 等键都可单独覆盖。</p>
    </template>
    <template #footer>
      <XButton @click="open = false">知道了</XButton>
    </template>
  </XSlideover>
</template>
