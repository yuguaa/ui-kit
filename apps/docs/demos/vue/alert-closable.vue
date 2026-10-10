<script setup lang="ts">
import { ref } from 'vue'
import XAlert from '@/components/kit/XAlert.vue'
import XButton from '@/components/kit/XButton.vue'

const open = ref(true)
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <XAlert
      v-if="open"
      v-model:open="open"
      color="error"
      close
      title="发布失败"
      description="点击右侧关闭按钮隐藏，close 受 open 模型控制。"
    />
    <XAlert
      color="info"
      close-icon="x"
      :close="{ variant: 'soft', color: 'info', size: 'sm', label: '知道了' }"
      title="可配置的关闭按钮"
      description="close 传对象整体透传给关闭按钮，close-icon 更换图标。"
    />
    <XAlert
      close
      color="neutral"
      variant="outline"
      title="自定义关闭按钮"
      description="close 插槽替换默认的关闭按钮。"
    >
      <template #close>
        <XButton size="xs" variant="ghost" color="neutral">知道了</XButton>
      </template>
    </XAlert>
  </div>
</template>
