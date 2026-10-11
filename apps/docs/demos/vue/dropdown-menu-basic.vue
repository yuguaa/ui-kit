<script setup lang="ts">
import XButton from '@/components/kit/XButton.vue'
import XDropdownMenu from '@/components/kit/XDropdownMenu.vue'
import XIcon from '@/components/kit/XIcon.vue'
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
    <XDropdownMenu
      size="sm"
      :items="[
        { key: 'undo', label: '撤销', shortcut: '⌘ Z' },
        { key: 'redo', label: '重做', shortcut: '⌘ ⇧ Z' },
      ]"
    >
      <template #default="{ open }">
        <XButton size="sm" variant="outline" color="neutral">
          小尺寸菜单
          <template #trailing>
            <XIcon :name="open ? 'chevron-up' : 'chevron-down'" class="size-4" />
          </template>
        </XButton>
      </template>
    </XDropdownMenu>
  </div>
</template>
