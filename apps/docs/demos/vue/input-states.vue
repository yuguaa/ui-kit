<script setup lang="ts">
import XInput from '@/components/kit/XInput.vue'
</script>

<template>
  <div class="flex w-full flex-wrap items-center gap-4">
    <XInput status="error" placeholder="错误状态（error）" class="w-56" />
    <XInput status="warning" placeholder="警告状态（warning）" class="w-56" />
    <XInput disabled placeholder="禁用状态" class="w-56" />
  </div>
</template>
