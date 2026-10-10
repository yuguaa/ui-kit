<script setup lang="ts">
import { ref } from 'vue'
import XButton from '@/components/kit/XButton.vue'
import XCommandPalette from '@/components/kit/XCommandPalette.vue'

const open = ref(false)

const commands = [
  { name: '新建文档', hint: '创建空白文档', kbds: ['⌘', 'N'] },
  { name: '添加用户', hint: '邀请团队成员', kbds: ['⌘', 'U'] },
  { name: '打开设置', hint: '修改应用偏好', kbds: ['⌘', ','] },
]
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XButton variant="soft" color="info" @click="open = true">打开命令面板</XButton>
    <XCommandPalette
      v-model:open="open"
      close
      label-key="name"
      description-key="hint"
      :groups="[
        { id: 'ops', label: '操作', items: commands },
        {
          id: 'nav',
          label: '导航',
          items: [
            { name: '前往仪表盘', icon: 'layout-dashboard', onSelect: () => (open = false) },
            { name: '前往设置', icon: 'settings' },
          ],
        },
      ]"
    />
  </div>
</template>
