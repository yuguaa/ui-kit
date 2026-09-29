<script setup lang="ts">
import XDropdownMenu from '@/components/kit/XDropdownMenu.vue'
import XContextMenu from '@/components/kit/XContextMenu.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <XDropdownMenu
      :items="[
        { key: 'rename', label: '重命名' },
        { key: 'share', label: '分享' },
        { key: 'sep', separator: true },
        { key: 'delete', label: '删除' },
      ]"
    />
    <XContextMenu
      :items="[{ key: 'edit', label: '编辑' }, { key: 'copy', label: '复制' }, { key: 'delete', label: '删除' }]"
    >
      <span class="rounded-lg border border-dashed border-border px-6 py-3 text-sm text-muted-foreground">
        在此区域右键
      </span>
    </XContextMenu>
  </div>
</template>
