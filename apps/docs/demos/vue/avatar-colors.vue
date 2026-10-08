<script setup lang="ts">
import XAvatar from '@/components/kit/XAvatar.vue'
import XIcon from '@/components/kit/XIcon.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-8">
    <XAvatar text="P" />
    <XAvatar text="A" color="primary" />
    <XAvatar text="S" color="success" />
    <XAvatar text="W" color="warning" />
    <XAvatar text="I" color="info" />
    <XAvatar text="E" color="error" />
    <XAvatar color="error">
      <template #icon><XIcon name="user" size="lg" /></template>
    </XAvatar>
  </div>
</template>
