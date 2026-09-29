<script setup lang="ts">
import XIcon from '@/components/kit/XIcon.vue'
import XKbd from '@/components/kit/XKbd.vue'
import XSeparator from '@/components/kit/XSeparator.vue'
import XSkeleton from '@/components/kit/XSkeleton.vue'
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-wrap items-center gap-6">
      <XIcon name="dashboard" size="lg" />
      <XIcon name="settings" size="md" />
      <XIcon name="star" color="#faad14" />
      <XIcon name="bell" size="sm" />
      <XKbd value="⌘" />
      <XKbd value="K" />
      <XKbd size="lg" value="Ctrl" />
      <span class="flex items-center gap-2 text-sm text-muted-foreground">
        左侧
        <XSeparator orientation="vertical" class="h-5" />
        右侧
      </span>
    </div>
    <XSeparator />
    <div class="flex flex-col gap-3">
      <XSkeleton variant="text" class="w-1/2" />
      <XSkeleton variant="rect" class="h-16 w-full" />
      <XSkeleton variant="circle" />
    </div>
  </div>
</template>
