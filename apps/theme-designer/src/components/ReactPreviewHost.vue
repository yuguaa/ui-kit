<script setup lang="ts">
/**
 * React 预览挂载桥：在 Vue 组件中通过 react-dom 挂载 ReactPreview，
 * vars 或 dark 变化时重新渲染 React 组件树。
 */
import { createElement } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { ReactPreview } from './ReactPreview'

const props = defineProps<{
  vars: Record<string, string>
  dark?: boolean
}>()

const container = ref<HTMLDivElement>()
let root: Root | undefined

function render() {
  root?.render(createElement(ReactPreview, { vars: props.vars, dark: !!props.dark }))
}

onMounted(() => {
  if (!container.value) return
  root = createRoot(container.value)
  render()
})

watch(() => [props.vars, props.dark], render, { deep: true })

onBeforeUnmount(() => {
  root?.unmount()
  root = undefined
})
</script>

<template>
  <div ref="container" />
</template>
