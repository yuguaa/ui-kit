<script setup lang="ts">
/**
 * DemoBlock：lobe-ui 风格交互 demo 容器。
 * 画布区渲染组件，底部栏提供展开代码与复制按钮。
 */
import { computed, ref } from "vue";

const props = defineProps<{
  /** demo 标题 */
  title?: string;
  /** demo 说明 */
  description?: string;
  /** 展示的代码文本 */
  code?: string;
  /** 背景类型 */
  background?: "plain" | "checker";
}>();

const expanded = ref(false);
const copied = ref(false);

const codeText = computed(() => props.code ?? "");
const firstLine = computed(() => codeText.value.split("\n")[0] ?? "");

function toggleExpand() {
  expanded.value = !expanded.value;
}

async function copyCode() {
  try {
    await navigator.clipboard.writeText(codeText.value);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch {
    /* 剪贴板不可用时静默失败 */
  }
}
</script>

<template>
  <div class="demo-block">
    <div class="demo-block__body" :class="{ 'demo-block__body--checker': background === 'checker' }">
      <slot />
    </div>
    <div class="demo-block__footer">
      <div class="demo-block__meta">
        <span v-if="title" class="demo-block__title">{{ title }}</span>
        <span v-if="description" class="demo-block__desc">{{ description }}</span>
      </div>
      <div class="demo-block__actions">
        <button type="button" class="demo-block__action" @click="toggleExpand">
          {{ expanded ? "收起代码" : "展开代码" }}
        </button>
        <button type="button" class="demo-block__action" @click="copyCode">
          {{ copied ? "已复制" : "复制代码" }}
        </button>
      </div>
    </div>
    <div v-if="expanded && code" class="demo-block__code">
      <div v-html="''" style="display: none"></div>
      <pre><code>{{ code }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.demo-block {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  margin: 16px 0;
}

.demo-block__body {
  padding: 32px 24px;
  background: var(--vp-c-bg-soft);
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

.demo-block__body--checker {
  background-image:
    linear-gradient(45deg, var(--vp-c-bg) 25%, transparent 25%),
    linear-gradient(-45deg, var(--vp-c-bg) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--vp-c-bg) 75%),
    linear-gradient(-45deg, transparent 75%, var(--vp-c-bg) 75%);
  background-size: 16px 16px;
  background-position: 0 0, 0 8px, 8px -8px, -8px 0;
}

.demo-block__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 16px;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
}

.demo-block__meta {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.demo-block__title {
  font-weight: 500;
  font-size: 14px;
}

.demo-block__desc {
  color: var(--vp-c-text-2);
  font-size: 13px;
}

.demo-block__actions {
  display: flex;
  gap: 4px;
  flex-shrink: 0;
}

.demo-block__action {
  border: 0;
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 12px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
}

.demo-block__action:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
}

.demo-block__code {
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-code-block-bg);
  overflow: auto;
  max-height: 420px;
}

.demo-block__code pre {
  margin: 0;
  padding: 16px;
  font-size: 13px;
  line-height: 1.6;
}

.demo-block__code code {
  font-family: var(--vp-font-family-mono);
}
</style>
