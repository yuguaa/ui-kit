<script setup lang="ts">
import { ref } from 'vue'
import XAlert from '@/components/kit/XAlert.vue'
import XAvatar from '@/components/kit/XAvatar.vue'

const open = ref(true)
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <XAlert color="success" icon="circle-check" title="部署完成" description="生产环境已更新到最新版本。" />
    <XAlert
      v-if="open"
      v-model:open="open"
      color="warning"
      close
      title="磁盘空间不足"
      description="点击右侧关闭按钮隐藏，close 受 open 模型控制。"
    >
      <template #leading>
        <XAvatar text="W" color="warning" />
      </template>
    </XAlert>
  </div>
</template>
