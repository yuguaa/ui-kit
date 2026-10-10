<script setup lang="ts">
import { ref } from 'vue'
import { RefreshCw } from '@lucide/vue'
import XSwitch from '@/components/kit/XSwitch.vue'

const checked = ref(true)
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <XSwitch v-model="checked" loading label="同步设置" />
    <XSwitch :loading-icon="RefreshCw" loading label="自定义加载图标" />
    <XSwitch v-model="checked" label="开启通知" description="开启后接收邮件提醒" />
    <XSwitch required label="必选项" />
  </div>
</template>
