<script setup lang="ts">
import { ref } from 'vue'
import { XTabs } from '@/components/kit'

const tabKey = ref('members')
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <XTabs
      v-model="tabKey"
      color="success"
      variant="pill"
      :items="[
        {
          value: 'members',
          label: '成员',
          icon: 'folder-open',
          badge: 8,
          slot: 'detail',
        },
        {
          value: 'settings',
          label: '设置',
          avatar: { text: '设' },
          slot: 'detail',
        },
      ]"
      :ui="{
        trigger: 'gap-2',
        leadingIcon: 'text-success',
        label: 'font-semibold',
        content: 'bg-elevated p-4',
      }"
    >
      <template #detail="{ item }">
        <p class="text-sm">{{ item.label }} 面板:通过 slot 字段分发的自定义内容。</p>
      </template>
    </XTabs>
  </div>
</template>
