<script setup lang="ts">
import { ref } from 'vue'
import ReactPreviewHost from './ReactPreviewHost.vue'
/* 走包的统一出口导入：类型检查使用已生成的声明，避免把包内源码拉进本应用的类型程序 */
import {
  useToast,
  XAccordion,
  XAlert,
  XAvatar,
  XAvatarGroup,
  XBadge,
  XBreadcrumb,
  XButton,
  XButtonGroup,
  XCard,
  XCarousel,
  XCheckbox,
  XChip,
  XCollapsible,
  XColorPicker,
  XCommandPalette,
  XContainer,
  XContextMenu,
  XDrawer,
  XDropdownMenu,
  XFieldGroup,
  XFileUpload,
  XForm,
  XFormField,
  XIcon,
  XInput,
  XInputDate,
  XInputMenu,
  XInputNumber,
  XInputRating,
  XInputTags,
  XInputTime,
  XKbd,
  XLink,
  XListbox,
  XModal,
  XNavigationMenu,
  XPagination,
  XPinInput,
  XPopover,
  XProgress,
  XRadioGroup,
  XScrollArea,
  XSelectMenu,
  XSeparator,
  XSkeleton,
  XSlideover,
  XSlider,
  XSplitter,
  XStepper,
  XSwitch,
  XTable,
  XTabs,
  XTextarea,
  XToaster,
  XTooltip,
} from '@ui-kit/vue/src/components/kit'

defineProps<{
  vars: Record<string, string>
  dark?: boolean
}>()

/** 预览框架版本切换：Vue 组件与 React 组件展示相同集合 */
const framework = ref<'vue' | 'react'>('vue')

const { show: showToast } = useToast()

/* ---------------- 表单状态 ---------------- */
const username = ref('')
const email = ref('')
const bio = ref('')
const agree = ref(true)
const notify = ref(true)
const plan = ref('standard')
const volume = ref(45)
const amount = ref(3)
const tags = ref<string[]>(['设计', '前端'])
const date = ref('2025-06-15')
const time = ref('14:30')
const rating = ref(4)
const color = ref('#1677ff')
const pin = ref('')
const city = ref('hangzhou')

const radioOptions = [
  { value: 'free', label: '免费版' },
  { value: 'standard', label: '标准版' },
  { value: 'enterprise', label: '企业版' },
]
const cityOptions = [
  { label: '杭州', value: 'hangzhou' },
  { label: '成都', value: 'chengdu' },
  { label: '北京', value: 'beijing' },
]
const menuOptions = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '西瓜', value: 'watermelon' },
]

/* ---------------- 导航与数据 ---------------- */
const tabItems = [
  { value: 'overview', label: '概览' },
  { value: 'detail', label: '明细' },
  { value: 'setting', label: '设置' },
]
const navItems = [
  { key: 'dashboard', label: '工作台' },
  { key: 'orders', label: '订单' },
  { key: 'users', label: '用户' },
]
const breadcrumbItems = [
  { title: '首页', href: '/' },
  { title: '订单管理', href: '/orders' },
  { title: '订单详情' },
]
const page = ref(3)
const progressValue = ref(60)
const step = ref(1)
const stepItems = [
  { title: '填写信息', description: '基础资料' },
  { title: '确认提交', description: '核对内容' },
  { title: '完成', description: '等待审核' },
]
const commandGroups = [
  {
    label: '文件',
    commands: [
      { label: '新建文件', shortcut: '⌘N' },
      { label: '打开文件', shortcut: '⌘O' },
    ],
  },
  {
    label: '编辑',
    commands: [{ label: '查找', shortcut: '⌘F' }],
  },
]
const menuItems = [
  { key: 'edit', label: '编辑', description: '修改当前内容', shortcut: '⌘E' },
  { key: 'copy', label: '复制链接', shortcut: '⌘C' },
  { key: 'delete', label: '删除', description: '不可恢复', shortcut: '⌘⌫' },
]

const listItems = [
  { value: 'a', label: '待处理' },
  { value: 'b', label: '处理中' },
  { value: 'c', label: '已完成' },
]
const listSelected = ref(['a'])

const tableColumns = [
  { accessorKey: 'name', header: '名称' },
  { accessorKey: 'status', header: '状态' },
  { accessorKey: 'amount', header: '金额' },
]
const tableRows = [
  { name: '订单 A', status: '已完成', amount: '¥1,280' },
  { name: '订单 B', status: '处理中', amount: '¥560' },
  { name: '订单 C', status: '待支付', amount: '¥2,340' },
]
const accordionItems = [{ title: '什么是设计 token' }, { title: '如何自定义主色' }, { title: '支持暗色模式吗' }]
const carouselItems = [{ key: '1' }, { key: '2' }, { key: '3' }]

/* ---------------- 浮层状态 ---------------- */
const modalOpen = ref(false)
const drawerOpen = ref(false)
const slideoverOpen = ref(false)
const paletteOpen = ref(false)
</script>

<template>
  <section class="rounded-xl border border-neutral-200 bg-white p-5">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-sm font-semibold text-neutral-900">组件预览</h2>
        <p class="mt-1 text-xs text-neutral-500">全部组件使用生成的 CSS 变量实时渲染</p>
      </div>
      <div class="flex items-center gap-2">
        <div class="flex rounded-lg bg-neutral-100 p-0.5">
          <button
            v-for="fw in (['vue', 'react'] as const)"
            :key="fw"
            type="button"
            class="cursor-pointer rounded-md px-2.5 py-1 text-xs font-medium transition-colors"
            :class="framework === fw ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-700'"
            @click="framework = fw"
          >
            {{ fw === 'vue' ? 'Vue 版' : 'React 版' }}
          </button>
        </div>
        <span
          class="rounded-md px-2 py-1 text-[10px] font-medium"
          :class="dark ? 'bg-black text-white' : 'bg-neutral-100 text-neutral-600'"
        >
          {{ dark ? '暗色' : '亮色' }}
        </span>
      </div>
    </div>

    <!-- Vue 面板 -->
    <div
      v-if="framework === 'vue'"
      :style="vars"
      class="bg-background text-foreground mt-4 flex flex-col gap-6 rounded-lg border border-border p-4 transition-colors"
      :class="dark ? 'dark' : ''"
    >
      <!-- 布局与展示 -->
      <div class="flex flex-col gap-3">
        <span class="text-muted-foreground text-xs font-medium">布局与展示</span>

        <div class="flex flex-wrap items-center gap-2">
          <XButton color="primary">主要按钮</XButton>
          <XButton variant="soft" color="success">次要按钮</XButton>
          <XButton variant="outline" color="warning">描边按钮</XButton>
          <XButton variant="ghost" color="error">幽灵按钮</XButton>
          <XButton variant="subtle" color="info">轻强调</XButton>
          <XButton variant="link" color="neutral">链接按钮</XButton>
          <XButton square variant="soft" aria-label="设置"><XIcon name="settings" /></XButton>
          <XButton loading>加载中</XButton>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <XButtonGroup>
            <XButton variant="outline" color="neutral">左</XButton>
            <XButton variant="outline" color="neutral">中</XButton>
            <XButton variant="outline" color="neutral">右</XButton>
          </XButtonGroup>
          <XBadge :count="12" color="primary" />
          <XBadge :count="5" color="success" />
          <XBadge :count="8" color="warning" />
          <XBadge square size="sm" :count="3" color="error" />
          <XChip color="primary">标签</XChip>
          <XChip color="success" closable>可关闭</XChip>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <XAvatar text="张" color="primary" />
          <XAvatar text="李" color="info" />
          <XAvatar text="王" color="warning" />
          <XAvatar shape="square" text="方" color="success" />
          <XAvatarGroup color="neutral">
            <XAvatar text="A" />
            <XAvatar text="B" />
            <XAvatar text="C" />
            <XAvatar text="D" />
            <XAvatar text="E" />
          </XAvatarGroup>
          <XIcon name="star" size="lg" color="#faad14" />
          <XKbd value="⌘" />
          <XKbd value="K" />
        </div>

        <XCard title="卡片标题" description="悬浮时边框高亮、阴影加深。" hoverable>
          <div class="flex flex-wrap items-center gap-3">
            <XSeparator label="带标签分割线" class="w-64" />
            <XSkeleton variant="text" class="w-32" />
            <XSkeleton variant="circle" />
          </div>
        </XCard>

        <XContainer size="md" class="border-border rounded-lg border border-dashed p-3">
          <span class="text-muted-foreground text-xs">Container 限制内容最大宽度</span>
        </XContainer>
      </div>

      <!-- 表单 -->
      <div class="flex flex-col gap-3">
        <span class="text-muted-foreground text-xs font-medium">表单</span>

        <XForm class="flex flex-col gap-4">
          <XFieldGroup>
            <XFormField name="username" label="用户名" hint="用于登录">
              <XInput v-model="username" placeholder="请输入用户名" clearable />
            </XFormField>
            <XFormField name="email" label="邮箱" required>
              <XInput v-model="email" placeholder="you@example.com" />
            </XFormField>
          </XFieldGroup>

          <XFormField name="bio" label="简介">
            <XTextarea v-model="bio" show-count :max-length="120" placeholder="介绍一下自己" />
          </XFormField>

          <div class="flex flex-wrap items-center gap-4">
            <XCheckbox v-model="agree">
              <template #label>同意协议</template>
              <template #description>已阅读并同意服务条款</template>
            </XCheckbox>
            <XSwitch v-model="notify" label="开启通知">
              <template #description>接收邮件提醒</template>
            </XSwitch>
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <XSelectMenu v-model="city" :items="cityOptions" clear class="w-40" />
            <XInputMenu :items="menuOptions" search-input create-item placeholder="搜索水果" class="w-44" />
            <XInputNumber v-model="amount" :min="0" :max="10" />
            <XInputDate v-model="date" class="w-40" />
            <XInputTime v-model="time" class="w-32" />
            <XColorPicker v-model="color" />
            <XInputRating v-model="rating" />
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <XSlider v-model="volume" tooltip class="w-48" />
            <XInputTags v-model="tags" class="w-56" />
            <XPinInput v-model="pin" :length="4" />
          </div>

          <XRadioGroup v-model="plan" :items="radioOptions" />

          <XFileUpload accept=".pdf,.docx" multiple label="选择一个文件或拖拽到这里" class="w-full" />
        </XForm>
      </div>

      <!-- 导航 -->
      <div class="flex flex-col gap-3">
        <span class="text-muted-foreground text-xs font-medium">导航</span>

        <div class="flex flex-wrap items-center gap-4">
          <XLink to="/docs" active>文档链接</XLink>
          <XLink to="/about" color="neutral">普通链接</XLink>
          <XPagination :page="page" :total="120" :items-per-page="10" show-controls />
        </div>

        <XBreadcrumb :items="breadcrumbItems" separator-icon="›" />

        <XTabs :items="tabItems" variant="link" content>
          <template #content="{ item }">
            <p class="text-muted-foreground text-sm">{{ item.label }}面板内容</p>
          </template>
        </XTabs>

        <XNavigationMenu :items="navItems" mode="horizontal" :selected-keys="['orders']" />

        <XStepper v-model="step" :items="stepItems" orientation="horizontal" />

        <div class="flex flex-wrap items-center gap-3">
          <XButton variant="outline" size="sm" @click="paletteOpen = true">打开命令面板</XButton>
          <XCommandPalette v-model:open="paletteOpen" :groups="commandGroups" />
        </div>
      </div>

      <!-- 浮层 -->
      <div class="flex flex-col gap-3">
        <span class="text-muted-foreground text-xs font-medium">浮层</span>

        <div class="flex flex-wrap items-center gap-3">
          <XButton variant="soft" size="sm" @click="modalOpen = true">对话框</XButton>
          <XModal v-model:open="modalOpen" title="对话框标题" description="语义色随主色体系同步生成。">
            对话框正文内容。
          </XModal>

          <XButton variant="soft" size="sm" @click="drawerOpen = true">抽屉</XButton>
          <XDrawer v-model:open="drawerOpen" title="抽屉标题">
            <template #content>抽屉内容。</template>
          </XDrawer>

          <XButton variant="soft" size="sm" @click="slideoverOpen = true">侧滑</XButton>
          <XSlideover v-model:open="slideoverOpen" title="侧滑面板">
            <template #content>侧滑内容。</template>
          </XSlideover>

          <XTooltip text="文字提示">
            <XButton variant="outline" size="sm">悬浮查看提示</XButton>
          </XTooltip>

          <XPopover arrow>
            <XButton variant="outline" size="sm">带箭头的浮层</XButton>
            <template #content>气泡内容随主题色变化。</template>
          </XPopover>

          <XDropdownMenu :items="menuItems" trigger-label="下拉菜单" />

          <XContextMenu :items="menuItems">
            <span class="border-border text-muted-foreground rounded-md border border-dashed px-3 py-1.5 text-xs">
              在此处右键打开菜单
            </span>
          </XContextMenu>

          <XButton
            variant="soft"
            size="sm"
            @click="showToast({ title: '操作成功', description: '语义色随主色同步生成。', color: 'success' })"
          >
            消息通知
          </XButton>
          <XToaster />
        </div>
      </div>

      <!-- 内容 -->
      <div class="flex flex-col gap-3">
        <span class="text-muted-foreground text-xs font-medium">内容</span>

        <div class="flex flex-wrap items-center gap-6">
          <XProgress v-model="progressValue" status class="w-56" />
          <XProgress :model-value="80" inverted class="w-56" />
          <XProgress :model-value="3" :max="8" status class="w-56" />
        </div>

        <div class="flex flex-wrap items-start gap-6">
          <XAlert
            type="warning"
            message="警告提示"
            description="主色变化时语义色同步更新。"
            show-icon
            class="w-80"
          />
          <XListbox v-model="listSelected" :items="listItems" multiple filter class="w-56" />
        </div>

        <XAccordion :items="accordionItems" class="w-full">
          <template #content="{ item }">
            <p class="text-muted-foreground text-sm">{{ item.title }}的答案内容。</p>
          </template>
        </XAccordion>

        <XCollapsible default-open>
          <template #content>折叠区域内容,点击标题可展开或收起。</template>
        </XCollapsible>

        <div class="grid gap-4 lg:grid-cols-2">
          <XCarousel :items="carouselItems" dots class="h-28">
            <template #item="{ item }">
              <div class="bg-primary/10 text-primary flex h-24 items-center justify-center rounded-md text-sm">
                轮播项 {{ item.key }}
              </div>
            </template>
          </XCarousel>

          <XScrollArea :height="120" class="border-border rounded-md border">
            <div class="flex flex-col gap-2 p-3">
              <span v-for="index in 12" :key="index" class="text-muted-foreground text-sm">滚动内容第 {{ index }} 行</span>
            </div>
          </XScrollArea>
        </div>

        <XSplitter collapsible class="h-32">
          <template #first>
            <div class="text-muted-foreground flex h-full items-center justify-center text-sm">左面板</div>
          </template>
          <template #second>
            <div class="text-muted-foreground flex h-full items-center justify-center text-sm">右面板</div>
          </template>
        </XSplitter>

        <XTable :columns="tableColumns" :data="tableRows" />
      </div>
    </div>

    <!-- React 面板 -->
    <div v-else class="mt-4">
      <ReactPreviewHost :vars="vars" :dark="dark" />
    </div>
  </section>
</template>
