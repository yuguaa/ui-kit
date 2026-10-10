<script setup lang="ts">
import { ref } from 'vue'
import XButton from '@/components/kit/XButton.vue'
import XChip from '@/components/kit/XChip.vue'
import XIcon from '@/components/kit/XIcon.vue'

const show = ref(true)
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XChip standalone text="primary" />
    <XChip standalone color="success" text="success" />
    <XChip standalone color="warning" text="warning" />
    <XChip standalone color="error" closable text="error" />
    <XChip standalone color="info">
      <template #content>
        <XIcon name="info" size="sm" />
        info
      </template>
    </XChip>
    <XChip standalone color="neutral" size="sm" text="small" />
  </div>

  <div class="mt-6 flex items-center gap-3">
    <XButton size="sm" variant="soft" color="neutral" @click="show = !show">
      {{ show ? '隐藏' : '显示' }}角标
    </XButton>
    <XChip v-model:show="show" standalone color="primary" text="5" />
  </div>
</template>
