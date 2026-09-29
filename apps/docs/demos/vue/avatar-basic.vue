<script setup lang="ts">
import XAvatar from '@/components/kit/XAvatar.vue'
import XAvatarGroup from '@/components/kit/XAvatarGroup.vue'
import XIcon from '@/components/kit/XIcon.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-8">
    <XAvatar>U</XAvatar>
    <XAvatar shape="square" size="lg">A</XAvatar>
    <XAvatar size="xs">B</XAvatar>
    <XAvatar size="xl">
      <template #icon><XIcon name="user" size="lg" /></template>
    </XAvatar>
    <XAvatarGroup :max="4">
      <XAvatar>A</XAvatar>
      <XAvatar>B</XAvatar>
      <XAvatar>C</XAvatar>
      <XAvatar>D</XAvatar>
      <XAvatar>E</XAvatar>
    </XAvatarGroup>
  </div>
</template>
