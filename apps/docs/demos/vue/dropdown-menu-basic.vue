<script setup lang="ts">
import XDropdownMenu from '@/components/kit/XDropdownMenu.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <XDropdownMenu
      :items="[
        { type: 'label', label: '文件操作' },
        { key: 'new', label: '新建文件', icon: 'file-plus' },
        { key: 'open', label: '打开文件', icon: 'folder-open' },
        { key: 'sep', type: 'separator' },
        { key: 'delete', label: '删除', icon: 'trash', color: 'error' },
      ]"
    />
    <XDropdownMenu
      size="sm"
      :items="[
        { key: 'undo', label: '撤销', shortcut: '⌘ Z' },
        { key: 'redo', label: '重做', shortcut: '⌘ ⇧ Z' },
      ]"
    />
  </div>
</template>
