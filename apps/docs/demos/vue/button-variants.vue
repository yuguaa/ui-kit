<script setup lang="ts">
import { XButton } from '@/components/kit'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XButton>solid</XButton>
    <XButton variant="outline">outline</XButton>
    <XButton variant="soft">soft</XButton>
    <XButton variant="ghost">ghost</XButton>
    <XButton variant="subtle">subtle</XButton>
    <XButton variant="link">link</XButton>
  </div>
</template>
