<script setup lang="ts">
import { computed, ref } from 'vue'
import { formatVarsText } from '@/lib/theme'

const props = defineProps<{
  vars: Record<string, string>
}>()

const copied = ref(false)
const varsText = computed(() => formatVarsText(props.vars))

async function copyVars() {
  await navigator.clipboard.writeText(varsText.value)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 1200)
}
</script>

<template>
  <section class="rounded-xl border border-neutral-200 bg-white p-5">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-sm font-semibold text-neutral-900">CSS 变量</h2>
        <p class="mt-1 text-xs text-neutral-500">注入消费者项目 @theme，即可驱动全部组件</p>
      </div>
      <button
        type="button"
        class="cursor-pointer rounded-lg bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-neutral-700"
        @click="copyVars"
      >
        {{ copied ? '已复制' : '复制全部' }}
      </button>
    </div>
    <textarea
      :value="varsText"
      readonly
      spellcheck="false"
      class="mt-3 h-64 w-full resize-none rounded-lg border border-neutral-200 bg-neutral-50 p-3 font-mono text-xs leading-5 text-neutral-700 outline-none"
    />
  </section>
</template>
