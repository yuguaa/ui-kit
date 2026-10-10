<script setup lang="ts">
import { XPinInput } from '@/components/kit'
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-col gap-1.5">
      <span class="text-xs text-muted-foreground">root 间距与 base 圆角自定义</span>
      <XPinInput
        :length="4"
        :ui="{ root: 'gap-2.5', base: 'rounded-full', separator: 'text-primary' }"
      />
    </div>
    <div class="flex flex-col gap-1.5">
      <span class="text-xs text-muted-foreground">base 描边加粗</span>
      <XPinInput :length="4" variant="outline" :ui="{ base: 'ring-2' }" />
    </div>
  </div>
</template>
