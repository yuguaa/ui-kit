<script setup lang="ts">
/**
 * ReactDemo：在 VitePress 页面中原生挂载 React 组件。
 * 页面内 import React 组件（vite 的 @vitejs/plugin-react 负责编译），
 * 挂载后由容器 createRoot 渲染，卸载时清理。
 */
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import * as React from "react";
import { createRoot, type Root } from "react-dom/client";

const props = defineProps<{
  /** React 组件 */
  component: React.ComponentType;
}>();

const container = ref<HTMLDivElement>();
let root: Root | null = null;

function mount() {
  if (!container.value) return;
  root = createRoot(container.value);
  root.render(React.createElement(props.component));
}

onMounted(mount);

watch(
  () => props.component,
  () => {
    root?.render(React.createElement(props.component));
  },
);

onBeforeUnmount(() => {
  root?.unmount();
  root = null;
});
</script>

<template>
  <div ref="container" class="react-demo"></div>
</template>

<style scoped>
.react-demo {
  display: contents;
}
</style>
