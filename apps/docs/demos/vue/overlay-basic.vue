<script setup lang="ts">
import { ref } from 'vue'
import XModal from '@/components/kit/XModal.vue'
import XDrawer from '@/components/kit/XDrawer.vue'
import XSlideover from '@/components/kit/XSlideover.vue'
import XTooltip from '@/components/kit/XTooltip.vue'
import XPopover from '@/components/kit/XPopover.vue'
import XContextMenu from '@/components/kit/XContextMenu.vue'
import XDropdownMenu from '@/components/kit/XDropdownMenu.vue'
import XButton from '@/components/kit/XButton.vue'
import XLink from '@/components/kit/XLink.vue'
import XToaster from '@/components/kit/XToaster.vue'
import { useToast } from '@/components/kit/XToast'

const modalOpen = ref(false)
const drawerOpen = ref(false)
const slideoverOpen = ref(false)
const toastApi = useToast()
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap items-center gap-3">
      <XButton variant="soft" @click="modalOpen = true">对话框</XButton>
      <XButton variant="soft" @click="drawerOpen = true">抽屉</XButton>
      <XButton variant="soft" @click="slideoverOpen = true">侧滑</XButton>
      <XTooltip title="这是一段提示文字">
        <XButton variant="outline" color="neutral">悬浮查看提示</XButton>
      </XTooltip>
      <XPopover trigger="click" title="气泡标题" content="这是一段气泡说明文字。">
        <XButton variant="outline" color="neutral">打开气泡</XButton>
      </XPopover>
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
      <XButton variant="soft" color="success" @click="toastApi.show({ title: '操作成功', description: '数据已保存。', color: 'success' })">
        成功通知
      </XButton>
      <XButton variant="soft" color="error" @click="toastApi.show({ title: '操作失败', description: '请稍后重试。', color: 'error' })">
        失败通知
      </XButton>
    </div>
    <XModal v-model:open="modalOpen" title="对话框标题" description="这是对话框的正文内容。">
      这是对话框的正文内容，用于说明本次操作的含义，用户可以阅读后在底部确认或取消。
    </XModal>
    <XDrawer v-model:open="drawerOpen" title="抽屉标题">
      <template #content>抽屉内容区域，用于展示详情或表单。</template>
    </XDrawer>
    <XSlideover v-model:open="slideoverOpen" title="侧滑面板">
      <template #content>
        <div class="flex flex-col gap-2">
          <XLink to="/">首页</XLink>
          <XLink to="/about">关于</XLink>
          <XLink to="/contact">联系</XLink>
        </div>
      </template>
    </XSlideover>
    <XToaster />
  </div>
</template>
