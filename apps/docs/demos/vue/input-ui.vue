<script setup lang="ts">
import XInput from '@/components/kit/XInput.vue'
import XIcon from '@/components/kit/XIcon.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <XInput
      placeholder="自定义 root 与 base"
      class="w-56"
      :ui="{ root: 'rounded-lg', base: 'bg-primary/10 ring-primary/20 text-primary' }"
    />
    <XInput
      placeholder="自定义 leading / trailing"
      class="w-56"
      :ui="{ leading: 'text-primary', trailing: 'text-success' }"
    >
      <template #leading><XIcon name="user" size="sm" /></template>
      <template #trailing><XIcon name="check" size="sm" /></template>
    </XInput>
    <XInput
      placeholder="左侧头像"
      class="w-56"
      :avatar="{ text: '阿' }"
      :ui="{ leadingAvatar: 'ring-2 ring-primary/20', leadingAvatarSize: 'sm' }"
    />
  </div>
</template>
