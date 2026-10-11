<script setup lang="ts">
import XButton from '@/components/kit/XButton.vue'
import XDropdownMenu from '@/components/kit/XDropdownMenu.vue'
import XIcon from '@/components/kit/XIcon.vue'
</script>

<template>
  <XDropdownMenu
    :items="[
      { key: 'new', label: '新建文件', description: '创建空白文件', shortcut: '⌘ N' },
      { key: 'open', label: '打开文件', description: '从磁盘选择文件', shortcut: '⌘ O' },
      { type: 'separator' },
      { key: 'delete', label: '删除文件', description: '移动到废纸篓', shortcut: '⌘ ⌫', color: 'error' },
    ]"
  >
    <template #default="{ open }">
      <XButton variant="outline" color="neutral">
        打开菜单
        <template #trailing>
          <XIcon :name="open ? 'chevron-up' : 'chevron-down'" class="size-4" />
        </template>
      </XButton>
    </template>
  </XDropdownMenu>
</template>
