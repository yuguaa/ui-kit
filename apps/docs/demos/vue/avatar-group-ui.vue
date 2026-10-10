<script setup lang="ts">
import { XAvatar, XAvatarGroup } from '@/components/kit'
</script>

<template>
  <div class="flex flex-wrap items-center gap-8">
    <XAvatarGroup :ui="{ base: 'ring-primary/20' }">
      <XAvatar text="A" />
      <XAvatar text="B" />
    </XAvatarGroup>
    <XAvatarGroup :ui="{ root: 'gap-1', base: 'ring-0' }">
      <XAvatar text="A" />
      <XAvatar text="B" />
      <XAvatar text="C" />
    </XAvatarGroup>
  </div>
</template>
