<script setup lang="ts">
import { computed, ref } from 'vue'
import XAvatar from '@/components/kit/XAvatar.vue'
import XBadge from '@/components/kit/XBadge.vue'
import XBreadcrumb from '@/components/kit/XBreadcrumb.vue'
import XButton from '@/components/kit/XButton.vue'
import XCard from '@/components/kit/XCard.vue'
import XDropdownMenu from '@/components/kit/XDropdownMenu.vue'
import XIcon from '@/components/kit/XIcon.vue'
import XInput from '@/components/kit/XInput.vue'
import XKbd from '@/components/kit/XKbd.vue'
import XModal from '@/components/kit/XModal.vue'

/* 侧边栏折叠状态：展开 232px，折叠为 56px 图标栏 */
const collapsed = ref(false)

const workspaces = [
  { label: 'Acme 工作区', icon: 'building', desc: '企业版计划' },
  { label: '个人空间', icon: 'house', desc: '免费计划' },
  { label: '客户演示区', icon: 'users', desc: '演示计划' },
]
const currentWorkspace = ref(workspaces[0])

const navGroups = [
  {
    label: '总览',
    items: [
      { label: '仪表盘', icon: 'gauge', badge: undefined },
      { label: '实时活动', icon: 'chart-line', live: true },
      { label: '报表', icon: 'chart-bar', badge: undefined },
    ],
  },
  {
    label: '管理',
    items: [
      { label: '项目', icon: 'folder', count: 8 },
      { label: '成员', icon: 'users', badge: undefined },
      { label: '设置', icon: 'settings', badge: undefined },
    ],
  },
]

const breadcrumbs = [
  { title: '工作区' },
  { title: '仪表盘' },
]

/* 统计卡片数据 */
const stats = [
  { label: '本月收入', value: '¥ 128,430', trend: '+12.5%', icon: 'trending-up', tone: 'text-success bg-success/10' },
  { label: '活跃用户', value: '8,649', trend: '+3.2%', icon: 'users', tone: 'text-info bg-info/10' },
  { label: '待处理工单', value: '42', trend: '-8.1%', icon: 'inbox', tone: 'text-warning bg-warning/10' },
]

/* 最近活动 */
const activities = [
  { name: '张伟', action: '创建了项目「官网改版」', time: '2 分钟前', avatar: 'Z' },
  { name: '李娜', action: '邀请 3 位新成员', time: '18 分钟前', avatar: 'L' },
  { name: '王强', action: '提交了季度报表', time: '1 小时前', avatar: 'W' },
]

/* command-k 搜索对话框 */
const searchOpen = ref(false)
const searchTerm = ref('')
const commands = [
  { label: '前往仪表盘', icon: 'gauge', group: '页面' },
  { label: '新建项目', icon: 'folder-plus', group: '操作' },
  { label: '邀请成员', icon: 'user-plus', group: '操作' },
  { label: '打开报表', icon: 'chart-bar', group: '页面' },
  { label: '工作区设置', icon: 'settings', group: '页面' },
]
const filteredCommands = computed(() =>
  commands.filter((command) => command.label.includes(searchTerm.value)),
)

const selectedNav = ref('仪表盘')

function onKeydown(event: KeyboardEvent) {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault()
    searchOpen.value = true
  }
}
</script>

<template>
  <div
    class="app-shell-demo relative w-full overflow-hidden rounded-xl border border-border bg-background p-3 text-foreground"
    tabindex="0"
    @keydown="onKeydown"
  >
    <div class="flex h-[520px] w-full gap-3">
      <!-- 浮动侧边栏：可折叠为图标栏 -->
      <aside
        class="flex shrink-0 flex-col gap-1 rounded-xl border border-border bg-muted/30 p-2 transition-[width] duration-200 ease-out"
        :class="collapsed ? 'w-14' : 'w-[232px]'"
      >
        <!-- 工作区切换器 -->
        <XDropdownMenu
          :items="workspaces"
          label-key="label"
          description-key="desc"
          :ui="{
            leadingIcon: 'size-4 text-muted-foreground',
            item: 'px-2 py-1.5',
          }"
          :class="[
            'mb-1 flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium transition-colors hover:bg-muted/60 justify-start',
            collapsed && 'justify-center px-1',
          ]"
        >
          <template #leading>
            <XIcon :name="currentWorkspace.icon" class="size-4 shrink-0 text-primary" />
          </template>
          <template v-if="!collapsed" #trailing>
            <XIcon name="chevrons-up-down" class="size-3.5 text-muted-foreground" />
          </template>
        </XDropdownMenu>

        <!-- 导航分组 -->
        <nav class="flex flex-1 flex-col gap-2 overflow-y-auto">
          <div v-for="group in navGroups" :key="group.label" class="flex flex-col gap-0.5">
            <span v-if="!collapsed" class="px-2 pb-1 pt-2 text-xs font-medium tracking-wide text-muted-foreground">
              {{ group.label }}
            </span>
            <button
              v-for="item in group.items"
              :key="item.label"
              type="button"
              class="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors"
              :class="[
                selectedNav === item.label ? 'bg-primary/10 font-medium text-primary' : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground',
                collapsed && 'justify-center px-1',
              ]"
              :title="collapsed ? item.label : undefined"
              @click="selectedNav = item.label"
            >
              <XIcon :name="item.icon" class="size-4 shrink-0" />
              <template v-if="!collapsed">
                <span class="flex-1 truncate text-left">{{ item.label }}</span>
                <!-- live status pulse：绿色状态脉冲点 -->
                <span v-if="item.live" class="flex items-center gap-1">
                  <span class="relative flex size-1.5">
                    <span class="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75" />
                    <span class="relative inline-flex size-1.5 rounded-full bg-success" />
                  </span>
                </span>
                <XBadge v-else-if="item.count" :count="item.count" size="xs" color="neutral" />
              </template>
            </button>
          </div>
        </nav>

        <!-- 折叠按钮 -->
        <button
          type="button"
          class="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
          :class="collapsed && 'justify-center px-1'"
          @click="collapsed = !collapsed"
        >
          <XIcon name="panel-left-close" class="size-4 shrink-0" />
          <span v-if="!collapsed">收起侧边栏</span>
        </button>

        <!-- 用户菜单 -->
        <XDropdownMenu
          :items="[
            { label: '个人资料', icon: 'user' },
            { label: '账户设置', icon: 'settings' },
            { type: 'separator' },
            { label: '退出登录', icon: 'log-out', color: 'error' },
          ]"
          label-key="label"
          :class="[
            'flex w-full items-center gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-muted/60',
            collapsed && 'justify-center px-1',
          ]"
        >
          <XAvatar src="https://github.com/nuxt-ui.png" alt="用户头像" size="xs" />
          <span v-if="!collapsed" class="flex flex-1 flex-col items-start">
            <span class="text-sm font-medium">菠萝吹雪</span>
            <span class="text-xs text-muted-foreground">admin@acme.cn</span>
          </span>
        </XDropdownMenu>
      </aside>

      <!-- 主区域 -->
      <div class="flex min-w-0 flex-1 flex-col gap-3">
        <!-- 头部：面包屑 + 搜索 + 通知 -->
        <header class="flex items-center gap-3 rounded-xl border border-border bg-muted/30 px-3 py-2">
          <XBreadcrumb :items="breadcrumbs" :ui="{ link: 'text-sm px-1.5 py-0.5 rounded-md hover:bg-muted/60' }" />
          <div class="ml-auto flex items-center gap-2">
            <XButton
              variant="outline"
              color="neutral"
              class="w-56 justify-between text-muted-foreground"
              @click="searchOpen = true"
            >
              <span class="flex items-center gap-2">
                <XIcon name="search" class="size-4" />
                搜索命令…
              </span>
              <span class="flex items-center gap-1">
                <XKbd value="⌘" variant="outline" size="xs" />
                <XKbd value="K" variant="outline" size="xs" />
              </span>
            </XButton>
            <XButton variant="ghost" color="neutral" square>
              <XIcon name="bell" class="size-4" />
            </XButton>
          </div>
        </header>

        <!-- 统计卡片 -->
        <div class="grid grid-cols-3 gap-3">
          <XCard v-for="stat in stats" :key="stat.label" size="small">
            <div class="flex items-center gap-3">
              <span class="flex size-9 items-center justify-center rounded-lg" :class="stat.tone">
                <XIcon :name="stat.icon" class="size-4.5" />
              </span>
              <div class="flex flex-col">
                <span class="text-xs text-muted-foreground">{{ stat.label }}</span>
                <span class="text-lg font-semibold">{{ stat.value }}</span>
              </div>
              <span class="ml-auto text-xs font-medium" :class="stat.trend.startsWith('+') ? 'text-success' : 'text-info'">
                {{ stat.trend }}
              </span>
            </div>
          </XCard>
        </div>

        <!-- 最近活动 -->
        <XCard title="最近活动" size="small" class="flex-1">
          <div class="flex flex-col divide-y divide-border">
            <div v-for="activity in activities" :key="activity.name" class="flex items-center gap-3 py-2.5">
              <XAvatar :text="activity.avatar" size="xs" color="primary" />
              <span class="text-sm">
                <span class="font-medium">{{ activity.name }}</span>
                <span class="text-muted-foreground">{{ activity.action }}</span>
              </span>
              <span class="ml-auto text-xs text-muted-foreground">{{ activity.time }}</span>
            </div>
          </div>
        </XCard>
      </div>
    </div>

    <!-- command-k 搜索对话框 -->
    <XModal v-model:open="searchOpen" :title="null" :description="null" :close="false" :ui="{ content: 'sm:max-w-md gap-0 p-0' }">
      <template #body>
        <div class="flex flex-col">
          <div class="flex items-center gap-2 border-b border-border px-3 py-2.5">
            <XIcon name="search" class="size-4 text-muted-foreground" />
            <XInput
              v-model="searchTerm"
              variant="none"
              autofocus
              placeholder="搜索页面或执行操作…"
              class="flex-1 border-0 px-0 text-sm shadow-none focus:ring-0"
              :ui="{ base: 'border-0 shadow-none' }"
            />
            <XKbd value="Esc" variant="outline" size="xs" />
          </div>
          <div class="flex max-h-64 flex-col gap-0.5 overflow-y-auto p-1.5">
            <button
              v-for="command in filteredCommands"
              :key="command.label"
              type="button"
              class="flex items-center gap-2.5 rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-muted/60"
              @click="searchOpen = false"
            >
              <XIcon :name="command.icon" class="size-4 text-muted-foreground" />
              {{ command.label }}
              <span class="ml-auto text-xs text-muted-foreground">{{ command.group }}</span>
            </button>
            <span v-if="!filteredCommands.length" class="px-2 py-4 text-center text-sm text-muted-foreground">
              没有匹配的命令
            </span>
          </div>
        </div>
      </template>
    </XModal>
  </div>
</template>
