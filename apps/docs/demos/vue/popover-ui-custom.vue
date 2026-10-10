<script setup lang="ts">
import XPopover from '@/components/kit/XPopover.vue'
import XButton from '@/components/kit/XButton.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XPopover :dismissible="false">
      <XButton variant="outline" color="neutral">禁止外部关闭</XButton>
      <template #content>
        <div class="p-4 text-sm">
          <p>dismissible 为 false 时，点击外部或按 Esc 不会关闭，改为发射 close:prevent。</p>
        </div>
      </template>
    </XPopover>

    <XPopover :ui="{ content: 'rounded-xl border border-primary/20 bg-primary/10', arrow: 'fill-primary/10 stroke-primary/20' }">
      <XButton variant="outline" color="neutral">定制气泡</XButton>
      <template #content>
        <div class="p-4 text-sm">
          <p>ui 属性按主题插槽键（content / arrow）覆盖类名。</p>
        </div>
      </template>
    </XPopover>
  </div>
</template>
