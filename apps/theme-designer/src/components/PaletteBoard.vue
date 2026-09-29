<script setup lang="ts">
import type { ColorName } from '@ui-kit/shared/colors'
import { ref } from 'vue'
import { roleLabels } from '@/lib/theme'

const props = defineProps<{
  palettes: Record<ColorName, string[]>
}>()

/** 记录已复制的色块（"primary-3" 形态），用于展示复制反馈 */
const copiedKey = ref<string | null>(null)

async function copyHex(name: ColorName, level: number) {
  const hex = props.palettes[name][level - 1]
  await navigator.clipboard.writeText(hex)
  copiedKey.value = `${name}-${level}`
  setTimeout(() => {
    if (copiedKey.value === `${name}-${level}`) copiedKey.value = null
  }, 1200)
}
</script>

<template>
  <section class="rounded-xl border border-neutral-200 bg-white p-5">
    <h2 class="text-sm font-semibold text-neutral-900">色阶 Palette</h2>
    <p class="mt-1 text-xs text-neutral-500">10 级色阶，第 6 级为主色 seed，点击色块复制色值</p>

    <div class="mt-4 flex flex-col gap-4">
      <div v-for="name in Object.keys(palettes) as ColorName[]" :key="name" class="flex items-center gap-3">
        <span class="w-18 shrink-0 text-xs font-medium text-neutral-600">{{ name }}</span>
        <div class="grid flex-1 grid-cols-10 gap-1">
          <button
            v-for="(hex, index) in palettes[name]"
            :key="index"
            type="button"
            :title="`${name}-${index + 1} ${hex}`"
            class="group relative h-9 cursor-pointer rounded-md border border-black/5 outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-neutral-400"
            :class="roleLabels[index + 1] != null && 'ring-1 ring-black/15'"
            :style="{ backgroundColor: hex }"
            @click="copyHex(name, index + 1)"
          >
            <span
              v-if="roleLabels[index + 1] != null"
              class="absolute -top-1.5 left-1/2 -translate-x-1/2 rounded-sm bg-black/70 px-1 text-[9px] leading-4 whitespace-nowrap text-white"
            >
              {{ roleLabels[index + 1] }}
            </span>
            <span
              v-if="copiedKey === `${name}-${index + 1}`"
              class="absolute inset-0 grid place-items-center rounded-md bg-black/40 text-[10px] text-white"
            >
              已复制
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
