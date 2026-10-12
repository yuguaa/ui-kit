<script setup lang="ts">
/**
 * vben 文档架子移植：DemoPreview 组件。
 * not-prose 隔离 VitePress 排版样式；ClientOnly 避免 SSR 挂载组件；代码区 tabs 展示 demo 文件。
 */
import { computed } from "vue";

import PreviewGroup from "./preview-group.vue";

interface Props {
  files?: string;
  title?: string;
  description?: string;
}

const props = withDefaults(defineProps<Props>(), { files: "() => []", title: "", description: "" });

const parsedFiles = computed(() => {
  try {
    return JSON.parse(decodeURIComponent(props.files ?? ""));
  } catch {
    return [];
  }
});
</script>

<template>
  <div class="demo-block">
    <div class="demo-block__body not-prose">
      <ClientOnly>
        <slot v-if="parsedFiles.length > 0"></slot>
        <div v-else class="text-sm text-destructive">预览目录不存在，请检查 dir / file 参数。</div>
      </ClientOnly>
    </div>
    <div class="demo-block__footer">
      <div class="demo-block__meta">
        <span v-if="title" class="demo-block__title">{{ title }}</span>
        <span v-if="description" class="demo-block__desc">{{ description }}</span>
      </div>
      <PreviewGroup v-if="parsedFiles.length > 0" :files="parsedFiles" class="shrink-0">
        <template v-for="file in parsedFiles" :key="file" #[file]>
          <slot :name="file"></slot>
        </template>
      </PreviewGroup>
    </div>
  </div>
</template>
