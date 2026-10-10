<script setup lang="ts">
import { XAvatar, XIcon } from '@/components/kit'
</script>

<template>
  <div class="flex flex-wrap items-center gap-8">
    <XAvatar src="https://i.pravatar.cc/64" alt="菠萝吹雪" />
    <XAvatar text="张三" />
    <XAvatar alt="李 四 五" />
    <!-- icon 属性传图标名 -->
    <XAvatar icon="user" />
    <!-- icon 插槽传自定义图标 -->
    <XAvatar>
      <template #icon><XIcon name="settings" /></template>
    </XAvatar>
  </div>
</template>
