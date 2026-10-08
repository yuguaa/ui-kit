<script setup lang="ts">
import { ref } from 'vue'
import XSwitch from '@/components/kit/XSwitch.vue'

const checked = ref(true)
const small = ref(false)
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <XSwitch v-model="checked" loading label="同步设置" />
    <XSwitch v-model="small" size="sm" loading label="自动保存">
      <template #description>数据同步中，暂时无法切换</template>
    </XSwitch>
  </div>
</template>
