<script setup lang="ts">
import { computed, ref } from 'vue'
import CssVarOutput from '@/components/CssVarOutput.vue'
import ComponentPreview from '@/components/ComponentPreview.vue'
import PaletteBoard from '@/components/PaletteBoard.vue'
import { tailwindPalettes } from '@ui-kit/shared/colors'
import { buildPalettes, buildThemeVars, presetColorNames } from '@/lib/theme'

/** 主色（Tailwind 色名），与 Nuxt UI 主题色选择一致 */
const primaryName = ref('green')
const previewDark = ref(false)

const palettes = computed(() => buildPalettes(primaryName.value))
/** 导出变量始终为亮色方向色阶，不随预览切换变化 */
const exportVars = computed(() => buildThemeVars(primaryName.value))
/** 预览变量与导出相同（色板为固定 Tailwind 色板，不随亮暗反转） */
const previewVars = computed(() => buildThemeVars(primaryName.value))

function applyPreset(next: string) {
  if (next in tailwindPalettes) {
    primaryName.value = next
  }
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
            以 Tailwind 色板为主色（Nuxt UI 主题色选择），实时预览组件效果并导出 CSS 变量
          </p>
        </div>
        <div class="flex items-center gap-1.5">
          <button
            v-for="preset in presetColorNames"
            :key="preset"
            type="button"
            :title="preset"
            class="size-6 cursor-pointer rounded-full border border-black/10 outline-none transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-neutral-400"
            :class="primaryName === preset && 'ring-2 ring-neutral-500 ring-offset-1'"
            :style="{ backgroundColor: tailwindPalettes[preset]?.[5] ?? '#22c55e' }"
            @click="applyPreset(preset)"
          />
        </div>
      </header>

      <!-- 色阶板 -->
      <main class="mt-8">
        <PaletteBoard :palettes="palettes" />

        <div class="mt-6 grid gap-6 lg:grid-cols-2">
          <ComponentPreview :vars="previewVars" :dark="previewDark" />
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
            <CssVarOutput :vars="exportVars" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
