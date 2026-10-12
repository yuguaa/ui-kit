<script setup lang="ts">
/**
 * vben 文档架子移植：代码 tabs 组。
 * 展开后显示 demo 各文件的源码，点击复制。样式复用 DemoBlock 的 footer 风格。
 */
import { computed, ref } from "vue";

interface Props {
  files: string[];
}

const props = withDefaults(defineProps<Props>(), { files: () => [] });

const open = ref(false);
const currentFile = ref(props.files[0] ?? "");

const tabs = computed(() => props.files.map((file) => ({ label: file })));

const toggleOpen = () => {
  open.value = !open.value;
};
</script>

<template>
  <div class="w-full">
    <button type="button" class="demo-block__action" @click="toggleOpen">
      {{ open ? "收起代码" : "展开代码" }}
    </button>
    <div v-if="open" class="demo-block__code mt-2">
      <div class="flex items-center gap-1 border-b border-border px-2">
        <button
          v-for="tab in tabs"
          :key="tab.label"
          type="button"
          class="rounded-t-md px-3 py-1.5 text-sm"
          :class="currentFile === tab.label ? 'bg-muted font-medium text-foreground' : 'text-muted-foreground hover:text-foreground'"
          @click="currentFile = tab.label"
        >
          {{ tab.label }}
        </button>
      </div>
      <div class="overflow-x-auto p-4">
        <slot :name="currentFile"></slot>
      </div>
    </div>
  </div>
</template>
