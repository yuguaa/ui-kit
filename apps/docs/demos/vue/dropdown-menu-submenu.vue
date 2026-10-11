<script setup lang="ts">
import XButton from '@/components/kit/XButton.vue'
import XDropdownMenu from '@/components/kit/XDropdownMenu.vue'
import XIcon from '@/components/kit/XIcon.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <XDropdownMenu
      :items="[
        {
          key: 'edit',
          label: '编辑',
          icon: 'pen',
          children: [
            { key: 'cut', label: '剪切', shortcut: '⌘ X' },
            { key: 'copy', label: '复制', shortcut: '⌘ C' },
            { key: 'paste', label: '粘贴', shortcut: '⌘ V' },
          ],
        },
        { key: 'favorite', label: '收藏', icon: 'star' },
        { type: 'separator' },
        { type: 'checkbox', key: 'sync', label: '自动同步', checked: true },
        { type: 'checkbox', key: 'compress', label: '压缩图片', checked: false },
      ]"
    >
      <template #default="{ open }">
        <XButton variant="outline" color="neutral">
          子菜单与勾选
          <template #trailing>
            <XIcon :name="open ? 'chevron-up' : 'chevron-down'" class="size-4" />
          </template>
        </XButton>
      </template>
    </XDropdownMenu>
    <XDropdownMenu
      :items="[
        { key: 'loading', label: '同步中…', loading: true },
        { key: 'done', label: '同步完成', loadingIcon: 'circle-check' },
      ]"
    >
      <template #default="{ open }">
        <XButton variant="outline" color="neutral">
          查看状态
          <template #trailing>
            <XIcon :name="open ? 'chevron-up' : 'chevron-down'" class="size-4" />
          </template>
        </XButton>
      </template>
    </XDropdownMenu>
  </div>
</template>
