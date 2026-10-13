<script setup lang="ts">
import XAvatar from '@/components/kit/XAvatar.vue'
import XChip from '@/components/kit/XChip.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-10">
    <div class="relative inline-flex">
      <XAvatar text="A" color="primary" />
      <XChip color="error" size="lg" text="3" />
    </div>
    <div class="relative inline-flex">
      <XAvatar text="B" color="success" size="lg" />
      <XChip color="success" position="bottom-right" size="lg" text="5" />
    </div>
    <div class="relative inline-flex">
      <XAvatar text="C" color="warning" size="lg" />
      <XChip color="primary" position="bottom-left" size="lg" text="99+" inset />
    </div>
    <div class="relative inline-flex">
      <XAvatar text="D" color="neutral" size="xl" />
      <XChip color="info" position="top-left" size="lg" text="8" />
    </div>
  </div>
</template>
