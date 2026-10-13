<script setup lang="ts">
import { ref } from 'vue'
import XAvatar from '@/components/kit/XAvatar.vue'
import XButton from '@/components/kit/XButton.vue'
import XChip from '@/components/kit/XChip.vue'

const show = ref(true)
</script>

<template>
  <!-- 角标形态：挂在头像/图标上的小圆点（Nuxt 4.11 语义） -->
  <div class="flex flex-wrap items-center gap-4">
    <div class="relative inline-flex">
      <XAvatar src="https://github.com/nuxt-ui.png" alt="avatar" />
      <XChip />
    </div>
    <div class="relative inline-flex">
      <XAvatar src="https://github.com/nuxt-ui.png" alt="avatar" />
      <XChip color="success" position="bottom-right" />
    </div>
    <div class="relative inline-flex">
      <XAvatar src="https://github.com/nuxt-ui.png" alt="avatar" />
      <XChip color="error" position="bottom-left" size="xl" />
    </div>
  </div>

  <!-- 标签形态：standalone + 大尺寸 -->
  <div class="mt-6 flex flex-wrap items-center gap-3">
    <XChip standalone size="3xl" text="primary" />
    <XChip standalone color="success" size="3xl" text="success" />
    <XChip standalone color="warning" size="3xl" text="warning" />
    <XChip standalone color="error" size="3xl" text="error" />
    <XChip standalone color="neutral" size="3xl" text="neutral" />
  </div>

  <!-- show 显隐控制 -->
  <div class="mt-6 flex items-center gap-3">
    <XButton size="sm" variant="soft" color="neutral" @click="show = !show">
      {{ show ? '隐藏' : '显示' }}角标
    </XButton>
    <XChip v-model:show="show" standalone color="primary" size="3xl" text="5" />
  </div>
</template>
