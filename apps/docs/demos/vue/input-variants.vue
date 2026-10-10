<script setup lang="ts">
import XInput from '@/components/kit/XInput.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap items-center gap-4">
      <XInput variant="outline" placeholder="outline" class="w-40" />
      <XInput variant="soft" placeholder="soft" class="w-40" />
      <XInput variant="subtle" placeholder="subtle" class="w-40" />
      <XInput variant="ghost" placeholder="ghost" class="w-40" />
      <XInput variant="none" placeholder="none" class="w-40" />
    </div>
    <div class="flex flex-wrap items-center gap-4">
      <XInput color="primary" placeholder="primary" class="w-40" />
      <XInput color="success" placeholder="success" class="w-40" />
      <XInput color="warning" placeholder="warning" class="w-40" />
      <XInput color="error" placeholder="error" class="w-40" />
    </div>
    <div class="flex flex-wrap items-center gap-4">
      <XInput highlight color="warning" placeholder="highlight" class="w-40" />
      <XInput :fixed="false" placeholder="fixed=false" class="w-48" />
    </div>
  </div>
</template>
