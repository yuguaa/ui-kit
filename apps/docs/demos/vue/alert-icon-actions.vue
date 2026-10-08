<script setup lang="ts">
import XAlert from '@/components/kit/XAlert.vue'
import XButton from '@/components/kit/XButton.vue'
import XIcon from '@/components/kit/XIcon.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <XAlert type="warning" message="自定义图标" description="icon 插槽覆盖默认的类型图标。" show-icon>
      <template #icon><XIcon name="bell" size="sm" /></template>
    </XAlert>
    <XAlert type="error" message="自定义图标优先" description="传入 icon 插槽后无需 show-icon 也会显示。">
      <template #icon><XIcon name="trash" size="sm" /></template>
    </XAlert>
    <XAlert type="info" message="操作区" description="actions 插槽位于标题与描述下方。">
      <template #actions>
        <XButton size="sm" variant="soft" color="info">查看详情</XButton>
        <XButton size="sm" variant="ghost" color="neutral">忽略</XButton>
      </template>
    </XAlert>
  </div>
</template>
