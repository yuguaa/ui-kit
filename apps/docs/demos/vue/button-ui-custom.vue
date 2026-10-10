<script setup lang="ts">
import { ref } from 'vue'
import { XButton } from '@/components/kit'

const active = ref<'day' | 'week'>('day')
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div class="flex flex-col gap-3">
      <span class="text-muted-foreground text-sm">label 属性与 ui 插槽自定义类名</span>
      <div class="flex flex-wrap items-center gap-3">
        <XButton label="保存" />
        <XButton
          label="自定义外观"
          :ui="{ base: 'rounded-full px-5 shadow-md', label: 'tracking-wide' }"
        />
        <XButton
          variant="soft"
          color="info"
          :ui="{ base: 'ring-2 ring-info/20', label: 'italic' }"
        >
          带描边与斜体
        </XButton>
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <span class="text-muted-foreground text-sm">active 配合 activeColor / activeVariant 表示选中态</span>
      <div class="flex flex-wrap items-center gap-2">
        <XButton
          v-for="item in (['day', 'week'] as const)"
          :key="item"
          :active="active === item"
          active-variant="soft"
          active-color="primary"
          variant="outline"
          color="neutral"
          @click="active = item"
        >
          {{ item === 'day' ? '按天' : '按周' }}
        </XButton>
      </div>
    </div>
  </div>
</template>
