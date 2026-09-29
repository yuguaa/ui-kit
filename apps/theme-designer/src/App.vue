<script setup lang="ts">
import { computed, ref } from 'vue'
import CssVarOutput from '@/components/CssVarOutput.vue'
import ComponentPreview from '@/components/ComponentPreview.vue'
import PaletteBoard from '@/components/PaletteBoard.vue'
import { buildPalettes, buildThemeVars, hexColorPattern, presetSeeds } from '@/lib/theme'

/** 主色 seed，输入仅接受合法 hex，非法输入保持上次有效值 */
const seed = ref('#1677ff')
const hexInput = ref(seed.value)
const previewDark = ref(false)

const palettes = computed(() => buildPalettes(seed.value))
const themeVars = computed(() => buildThemeVars(seed.value))

function applySeed(next: string) {
  if (hexColorPattern.test(next)) {
    seed.value = next.toLowerCase()
    hexInput.value = next.toLowerCase()
  }
}

function onHexInput() {
  applySeed(hexInput.value)
}
</script>

<template>
  <div class="min-h-dvh bg-neutral-50 text-neutral-900">
    <div class="mx-auto max-w-6xl px-6 py-10">
      <!-- 标题与主色输入 -->
      <header class="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h1 class="text-2xl font-semibold tracking-tight">主题设计器</h1>
          <p class="mt-2 text-sm text-neutral-500">
            以单一主色 seed 派生全部语义色阶（Ant Design 色彩算法），实时预览组件效果并导出 CSS 变量
          </p>
        </div>
        <div class="flex items-center gap-3">
          <label class="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2">
            <input
              v-model="hexInput"
              type="text"
              spellcheck="false"
              class="w-20 bg-transparent font-mono text-sm outline-none"
              @change="onHexInput"
            />
            <input
              :value="seed"
              type="color"
              title="选择主色"
              class="h-6 w-6 cursor-pointer rounded border-0 bg-transparent p-0"
              @input="applySeed(($event.target as HTMLInputElement).value)"
            />
          </label>
          <div class="flex items-center gap-1.5">
            <button
              v-for="preset in presetSeeds"
              :key="preset"
              type="button"
              :title="preset"
              class="size-6 cursor-pointer rounded-full border border-black/10 outline-none transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-neutral-400"
              :class="seed === preset && 'ring-2 ring-neutral-500 ring-offset-1'"
              :style="{ backgroundColor: preset }"
              @click="applySeed(preset)"
            />
          </div>
        </div>
      </header>

      <!-- 色阶板 -->
      <main class="mt-8">
        <PaletteBoard :palettes="palettes" />

        <div class="mt-6 grid gap-6 lg:grid-cols-2">
          <ComponentPreview :vars="themeVars" :dark="previewDark" />
          <div class="flex flex-col gap-6">
            <div class="flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-5">
              <div>
                <h2 class="text-sm font-semibold">预览主题</h2>
                <p class="mt-1 text-xs text-neutral-500">切换预览区域的亮色 / 暗色</p>
              </div>
              <button
                type="button"
                role="switch"
                :aria-checked="previewDark"
                class="relative h-5 w-9 cursor-pointer rounded-full transition-colors"
                :class="previewDark ? 'bg-neutral-900' : 'bg-neutral-300'"
                @click="previewDark = !previewDark"
              >
                <span
                  class="absolute top-0.5 size-4 rounded-full bg-white transition-transform"
                  :class="previewDark ? 'left-4.5' : 'left-0.5'"
                />
              </button>
            </div>
            <CssVarOutput :vars="themeVars" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
