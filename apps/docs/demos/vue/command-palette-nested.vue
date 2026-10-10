<script setup lang="ts">
import { ref } from 'vue'
import XButton from '@/components/kit/XButton.vue'
import XCommandPalette from '@/components/kit/XCommandPalette.vue'

const open = ref(false)
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XButton variant="soft" color="info" @click="open = true">打开命令面板</XButton>
    <XCommandPalette
      v-model:open="open"
      placeholder="搜索命令…"
      :groups="[
        {
          id: 'theme',
          label: '主题',
          items: [
            { key: 'light', label: '浅色模式', icon: 'sun' },
            { key: 'dark', label: '深色模式', icon: 'moon' },
          ],
        },
        {
          id: 'lang',
          label: '语言',
          placeholder: '选择语言…',
          items: [
            {
              key: 'zh',
              label: '中文',
              children: [
                { key: 'zh-cn', label: '简体中文' },
                { key: 'zh-tw', label: '繁体中文' },
              ],
            },
            { key: 'en', label: 'English' },
          ],
        },
      ]"
    >
      <template #footer>
        <div class="flex items-center justify-between px-2 py-1 text-xs text-muted-foreground">
          <span>↑↓ 浏览 · Enter 执行 · Esc 关闭</span>
        </div>
      </template>
    </XCommandPalette>
  </div>
</template>
