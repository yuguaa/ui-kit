<script setup lang="ts">
import { ref } from 'vue'
import { XColorPicker } from '@/components/kit'

const color = ref('#00C16A')
const formats = ['hex', 'rgb', 'hsl', 'cmyk', 'lab'] as const
const active = ref<'hex' | 'rgb' | 'hsl' | 'cmyk' | 'lab'>('hex')
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap items-center gap-2">
      <button
        v-for="format in formats"
        :key="format"
        type="button"
        class="rounded-md px-3 py-1 text-sm outline-none transition-colors"
        :class="active === format ? 'bg-primary-1 text-primary-7' : 'text-muted-foreground hover:bg-muted'"
        @click="active = format"
      >
        {{ format }}
      </button>
    </div>
    <XColorPicker v-model="color" :format="active" />
    <p class="text-sm text-muted-foreground">
      输出：<code class="rounded bg-muted px-1.5 py-0.5">{{ color }}</code>
    </p>
  </div>
</template>
