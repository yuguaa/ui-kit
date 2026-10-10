<script setup lang="ts">
import XCard from '@/components/kit/XCard.vue'
import XButton from '@/components/kit/XButton.vue'
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <XCard>
      <template #header>
        <div class="flex items-center justify-between gap-2">
          <div class="flex min-w-0 flex-col gap-0.5">
            <div class="text-base font-medium leading-snug">header 插槽</div>
            <p class="mt-1 text-sm text-muted-foreground">整体替换默认的标题与描述区域</p>
          </div>
          <XButton size="sm" variant="soft" color="neutral">更多</XButton>
        </div>
      </template>
      这是卡片的主体内容。
      <template #footer>
        <div class="flex w-full justify-end gap-2">
          <XButton size="sm" variant="outline" color="neutral">取消</XButton>
          <XButton size="sm">确定</XButton>
        </div>
      </template>
    </XCard>
    <XCard title="title / description 插槽" description="单独替换标题或描述内容">
      <template #title>
        <span class="flex items-center gap-1.5">
          <span class="size-2 rounded-full bg-success-6" />
          自定义标题节点
        </span>
      </template>
      <template #description>描述同样可以通过同名插槽覆盖。</template>
      主体内容保持不变。
    </XCard>
  </div>
</template>
