<script setup lang="ts">
import XAvatar from '@/components/kit/XAvatar.vue'
import XAvatarGroup from '@/components/kit/XAvatarGroup.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-8">
    <XAvatarGroup color="primary" :max="4">
      <XAvatar text="A" />
      <XAvatar text="B" />
      <XAvatar text="C" color="error" />
      <XAvatar text="D" />
      <XAvatar text="E" />
    </XAvatarGroup>
    <XAvatarGroup color="success" :max="3">
      <XAvatar text="A" />
      <XAvatar text="B" />
      <XAvatar text="C" />
      <XAvatar text="D" />
    </XAvatarGroup>
  </div>
</template>
