<script setup lang="ts">
import { XButton, XButtonGroup, XIcon } from '@/components/kit'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XButton>
      <template #leading><XIcon name="plus" size="sm" /></template>
      新建
    </XButton>
    <XButton>
      展开
      <template #trailing><XIcon name="chevron-down" size="sm" /></template>
    </XButton>
    <XButton variant="outline" size="sm" aria-label="设置">
      <XIcon name="settings" size="sm" />
    </XButton>
    <XButtonGroup>
      <XButton variant="outline">左</XButton>
      <XButton variant="outline">中</XButton>
      <XButton variant="outline">右</XButton>
    </XButtonGroup>
  </div>
</template>
