<script setup lang="ts">
import { XPinInput } from '@/components/kit'
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-col gap-1.5">
      <span class="text-xs text-muted-foreground">separator=3 每隔 3 位插入分隔符</span>
      <XPinInput :length="6" :separator="3" />
    </div>
    <div class="flex flex-col gap-1.5">
      <span class="text-xs text-muted-foreground">separator=[2, 4] 在第 2、4 位之后插入</span>
      <XPinInput :length="6" :separator="[2, 4]" />
    </div>
    <div class="flex flex-col gap-1.5">
      <span class="text-xs text-muted-foreground">separator 插槽自定义分隔内容</span>
      <XPinInput :length="6" :separator="3">
        <template #separator="{ index }">
          <span class="mx-1 text-xs text-primary-6">{{ index + 1 }}</span>
        </template>
      </XPinInput>
    </div>
  </div>
</template>
