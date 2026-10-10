<script setup lang="ts">
import { ref } from 'vue'
import XSwitch from '@/components/kit/XSwitch.vue'

const on = ref(true)
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <span class="text-muted-foreground text-sm">ui 按主题插槽覆盖类名</span>
    <div class="flex flex-wrap items-center gap-6">
      <XSwitch
        v-model="on"
        label="自定义外观"
        description="说明文字"
        :ui="{
          base: 'data-[state=checked]:bg-warning-6',
          thumb: 'bg-warning-1',
          label: 'italic text-error-6',
          description: 'text-xs',
        }"
      />
      <XSwitch
        v-model="on"
        label="圆角轨道"
        :ui="{ base: 'rounded-full ring-2 ring-info-3', thumb: 'bg-info-1' }"
      />
    </div>
  </div>
</template>
