<script setup lang="ts">
import XAlert from '@/components/kit/XAlert.vue'
import XAvatar from '@/components/kit/XAvatar.vue'
import XButton from '@/components/kit/XButton.vue'
import XIcon from '@/components/kit/XIcon.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <XAlert color="info" icon="info" title="图标与头像" description="icon 指定图标名，avatar 传入头像配置。" />
    <XAlert color="primary" title="头像提示">
      <template #leading>
        <XAvatar text="A" color="primary" />
      </template>
    </XAlert>
    <XAlert color="warning" title="自定义操作区" description="actions 插槽位于标题与描述下方。">
      <template #leading>
        <XIcon name="bell" />
      </template>
      <template #actions>
        <XButton size="sm" variant="soft" color="warning">立即处理</XButton>
        <XButton size="sm" variant="ghost" color="neutral">忽略</XButton>
      </template>
    </XAlert>
    <XAlert
      color="info"
      title="actions 按钮列表"
      description="actions 数组整体透传给 XButton，缺省 xs 尺寸。"
      :actions="[
        { label: '查看详情', variant: 'soft', color: 'info' },
        { label: '忽略', variant: 'ghost', color: 'neutral' },
      ]"
    />
  </div>
</template>
