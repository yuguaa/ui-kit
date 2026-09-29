<script setup lang="ts">
import { ref } from 'vue'
import XSwitch from '@/components/kit/XSwitch.vue'

const enabled = ref(true)
const checkedText = ref(false)
const small = ref(true)
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center gap-6">
      <XSwitch v-model="enabled" label="开启通知" />
      <XSwitch v-model="checkedText" label="显示文字">
        <template #checkedChildren>开</template>
        <template #unCheckedChildren>关</template>
      </XSwitch>
      <XSwitch disabled label="禁用状态" />
    </div>
    <div class="flex flex-wrap items-center gap-6">
      <XSwitch v-model="small" size="sm" label="小尺寸" />
    </div>
  </div>
</template>
