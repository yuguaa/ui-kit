<script setup lang="ts">
import { ref } from 'vue'
import XLink from '@/components/kit/XLink.vue'
import XBreadcrumb from '@/components/kit/XBreadcrumb.vue'
import XTabs from '@/components/kit/XTabs.vue'
import XNavigationMenu from '@/components/kit/XNavigationMenu.vue'
import XPagination from '@/components/kit/XPagination.vue'
import XStepper from '@/components/kit/XStepper.vue'
import XCommandPalette from '@/components/kit/XCommandPalette.vue'
import XButton from '@/components/kit/XButton.vue'

const tabKey = ref('doc')
const page = ref(3)
const paletteOpen = ref(false)
</script>

<template>
  <div class="flex w-full flex-col gap-5">
    <XBreadcrumb :items="[{ title: '首页', href: '/' }, { title: '组件' }, { title: '导航' }, { title: '面包屑' }]" />
    <div class="flex flex-wrap items-center gap-6">
      <XLink to="/docs">文档</XLink>
      <XLink to="/examples">示例</XLink>
      <XLink to="/disabled" disabled>禁用</XLink>
    </div>
    <XTabs
      v-model="tabKey"
      :items="[{ key: 'doc', label: '文档' }, { key: 'example', label: '示例' }, { key: 'api', label: 'API' }]"
    >
      <template #content="{ item }">
        <p class="py-2 text-sm">当前选中：{{ item.label }}。这里是标签页对应的内容区域。</p>
      </template>
    </XTabs>
    <XNavigationMenu
      mode="horizontal"
      :items="[
        { key: 'dashboard', label: '仪表盘' },
        { key: 'docs', label: '文档' },
        { key: 'user', label: '用户' },
        { key: 'settings', label: '设置' },
      ]"
    />
    <div class="flex flex-wrap items-center gap-6">
      <XPagination v-model:current="page" :total="100" :page-size="10" />
      <XStepper :current="1" :items="[{ title: '完成' }, { title: '进行中' }, { title: '待处理' }]" />
    </div>
    <div class="flex flex-wrap items-center gap-3">
      <XButton variant="soft" color="info" @click="paletteOpen = true">打开命令面板</XButton>
      <XCommandPalette
        v-model:open="paletteOpen"
        :groups="[
          {
            label: '操作',
            commands: [
              { label: '新建文档', shortcut: '⌘ N' },
              { label: '添加用户', shortcut: '⌘ U' },
              { label: '打开设置', shortcut: '⌘ ,' },
            ],
          },
        ]"
      />
    </div>
  </div>
</template>
