<script setup lang="ts">
import { XCheckbox } from '@/components/kit'
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <span class="text-muted-foreground text-sm">ui 按主题插槽覆盖类名</span>
    <div class="flex flex-wrap items-center gap-6">
      <XCheckbox
        checked
        label="自定义外观"
        description="说明文字"
        :ui="{
          root: 'gap-4',
          base: 'rounded-full ring-2 ring-warning',
          indicator: 'bg-warning',
          label: 'italic text-error',
          description: 'text-xs',
        }"
      />
      <XCheckbox
        checked
        variant="card"
        label="卡片自定义"
        :ui="{ root: 'bg-primary/10 border-primary/20', indicator: 'bg-info' }"
      />
    </div>
  </div>
</template>
