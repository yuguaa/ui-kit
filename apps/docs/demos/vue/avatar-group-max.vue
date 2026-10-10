<script setup lang="ts">
import { XAvatar, XAvatarGroup } from '@/components/kit'
</script>

<template>
  <div class="flex flex-wrap items-center gap-8">
    <XAvatarGroup :max="3">
      <XAvatar text="A" />
      <XAvatar text="B" />
      <XAvatar text="C" />
      <XAvatar text="D" />
      <XAvatar text="E" />
    </XAvatarGroup>
    <XAvatarGroup :max="2" color="primary">
      <XAvatar text="A" />
      <XAvatar text="B" />
      <XAvatar text="C" />
      <template #plus>
        <XAvatar text="更多" />
      </template>
    </XAvatarGroup>
  </div>
</template>
