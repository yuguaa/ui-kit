<script setup lang="ts">
/**
 * Vue 组件总览页：55 个主组件按分组渲染最小可用示例。
 * 组件经 @/ 别名直连 packages/vue/src 源码，token 主题见 src/theme.css。
 * 每个示例的交互状态（v-model 等）在页面内局部管理，互不影响。
 */
import { ref } from 'vue'
import { getLocalTimeZone, parseTime, today } from '@internationalized/date'
import { parseStringToDateValue } from 'reka-ui/date'
import {
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
} from '@/components/kit'
import { useXForm } from '@/components/kit/useXForm'
/* toast 渲染走 reka 链路：XToaster + useToast().add()（lib/nuxt 版 hook） */
import { useToast } from '@/lib/nuxt/composables/useToast'

/* 深色模式：切换 html 的 dark 类，暗色 token 在 theme.css 的 .dark 块中定义 */
const dark = ref(false)
function toggleDark() {
  dark.value = !dark.value
  document.documentElement.classList.toggle('dark', dark.value)
}

/* 各示例的局部交互状态 */
const inputValue = ref('')
const textareaValue = ref('')
const checked = ref(true)
const plan = ref('standard')
const switchOn = ref(true)
const count = ref(5)
const rating = ref(3)
const tags = ref(['Vue', 'Nuxt'])
const date = ref(parseStringToDateValue('2025-06-15', today(getLocalTimeZone())))
const time = ref(parseTime('14:30'))
const color = ref('#1677ff')
const pin = ref('')
const file = ref<File | null>(null)
const selectedFruit = ref('apple')
const selectedCities = ref(['bj'])
const inputMenuLast = ref('')
const listboxSelected = ref('zh')
const sliderValue = ref(50)
const sliderRange = ref([30, 70])
const tabKey = ref('a')
const page = ref(5)
const stepKey = ref('basic')
const stepperRef = ref<{ next: () => void; prev: () => void } | null>(null)
const paletteOpen = ref(false)
const modalOpen = ref(false)
const drawerOpen = ref(false)
const slideoverOpen = ref(false)
const alertOpen = ref(true)
const progressValue = ref(45)
const skeletonLoading = ref(true)
const submitted = ref('')

/* toast 通知（reka 链路，XToaster 负责渲染） */
const toastApi = useToast()
function showToast() {
  toastApi.add({ title: '操作成功', description: '数据已保存。', color: 'success', icon: 'circle-check' })
}

/* XForm 示例：useXForm 返回表单组件与表单 API */
const [DemoForm, formApi] = useXForm({
  defaultValues: { username: '' },
  rules: {
    username: [{ required: true, message: '用户名不能为空' }],
  },
})
function onFormSubmit(values: Record<string, unknown>) {
  submitted.value = JSON.stringify(values)
}

/* 各示例的展示数据 */
const plans = [
  { value: 'basic', label: '基础版', description: '个人使用' },
  { value: 'standard', label: '标准版', description: '小团队推荐' },
  { value: 'pro', label: '专业版', description: '企业级功能' },
]
const fruitOptions = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
]
const cityOptions = [
  { label: '北京', value: 'bj' },
  { label: '上海', value: 'sh' },
  { label: '广州', value: 'gz' },
]
const listboxItems = [
  { key: 'zh', label: '简体中文' },
  { key: 'en', label: 'English' },
  { key: 'ja', label: '日本語' },
]
const breadcrumbItems = [
  { title: '首页', href: '/' },
  { title: '组件', href: '/components' },
  { title: '面包屑' },
]
const tabsItems = [
  { value: 'a', label: '标签一', content: 'pill 标签一的内容。' },
  { value: 'b', label: '标签二', content: 'pill 标签二的内容。' },
  { value: 'c', label: '标签三', content: 'pill 标签三的内容。' },
]
const navItems = [
  { key: 'dashboard', label: '仪表盘', icon: 'layout-dashboard' },
  { key: 'analytics', label: '数据分析', icon: 'chart-line' },
  { type: 'label', label: '工作区' },
  {
    key: 'projects',
    label: '项目',
    icon: 'folder',
    children: [
      { key: 'project-a', label: '项目 A' },
      { key: 'project-b', label: '项目 B' },
    ],
  },
  { key: 'settings', label: '设置', icon: 'settings' },
]
const stepperItems = [
  { value: 'basic', title: '基础信息', description: '填写姓名与联系方式', content: '这里是基础信息表单。' },
  { value: 'payment', title: '支付方式', description: '选择支付渠道', content: '这里是支付方式选择。' },
  { value: 'confirm', title: '确认提交', description: '核对并提交订单', content: '这里是订单确认面板。' },
]
const paletteGroups = [
  {
    id: 'ops',
    label: '操作',
    items: [
      { name: '新建文档', hint: '创建空白文档', kbds: ['⌘', 'N'] },
      { name: '添加用户', hint: '邀请团队成员', kbds: ['⌘', 'U'] },
    ],
  },
  {
    id: 'nav',
    label: '导航',
    items: [
      { name: '前往仪表盘', icon: 'layout-dashboard' },
      { name: '前往设置', icon: 'settings' },
    ],
  },
]
const dropdownItems = [
  { type: 'label', label: '文件操作' },
  { key: 'new', label: '新建文件', icon: 'file-plus' },
  { key: 'open', label: '打开文件', icon: 'folder-open' },
  { key: 'sep', type: 'separator' },
  { key: 'delete', label: '删除', icon: 'trash', color: 'error' },
]
const contextMenuItems = [
  { type: 'label', label: '编辑操作' },
  { key: 'copy', label: '复制', icon: 'copy' },
  { key: 'paste', label: '粘贴', icon: 'clipboard-paste' },
  { key: 'sep', type: 'separator' },
  { key: 'delete', label: '删除', icon: 'trash', color: 'error' },
]
const tableColumns = [
  { accessorKey: 'name', header: '姓名' },
  { accessorKey: 'age', header: '年龄' },
  { accessorKey: 'city', header: '城市' },
]
const tableData = [
  { key: '1', name: '张三', age: 32, city: '杭州' },
  { key: '2', name: '李四', age: 28, city: '成都' },
  { key: '3', name: '王五', age: 45, city: '北京' },
]
const accordionItems = [
  { label: '什么是 ui-kit？', content: '基于 Tailwind 与 Reka UI 的组件库。' },
  { label: '如何安装？', content: '通过 shadcn CLI 添加组件即可使用。' },
]
const scrollItems = Array.from({ length: 12 }, (_, index) => ({ id: index, text: `滚动内容第 ${index + 1} 行` }))
const carouselItems = [{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }]
const splitterItems = [
  { id: 'left', defaultSize: 30, minSize: 15 },
  { id: 'center', defaultSize: 40, minSize: 20 },
  { id: 'right', minSize: 20 },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-default bg-background/80 backdrop-blur">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <div>
        <h1 class="text-lg font-semibold">ui-kit Vue 组件总览</h1>
        <p class="text-sm text-muted-foreground">55 个主组件 · 脱离 VitePress 的纯组件环境</p>
      </div>
      <XButton variant="outline" color="neutral" size="sm" @click="toggleDark">
        <template #leading><XIcon :name="dark ? 'sun' : 'moon'" size="sm" /></template>
        {{ dark ? '浅色模式' : '深色模式' }}
      </XButton>
    </div>
  </header>

  <main class="mx-auto max-w-7xl px-6 py-8">
    <!-- 布局 Layout -->
    <section class="mb-10">
      <h2 class="mb-1 text-xl font-semibold">布局 Layout</h2>
      <p class="mb-4 text-sm text-muted-foreground">基础布局与装饰类组件</p>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XButton</h3>
          <div class="flex flex-wrap items-center gap-3">
            <XButton color="primary">主要按钮</XButton>
            <XButton variant="outline" color="primary">次要按钮</XButton>
            <XButton variant="soft" color="success">保存</XButton>
            <XButton variant="ghost" color="warning">警告</XButton>
            <XButton variant="link" color="info">链接按钮</XButton>
          </div>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XButtonGroup</h3>
          <XButtonGroup>
            <XButton variant="outline" color="neutral">上一页</XButton>
            <XButton variant="outline" color="neutral">1</XButton>
            <XButton variant="outline" color="neutral">2</XButton>
            <XButton variant="outline" color="neutral">下一页</XButton>
          </XButtonGroup>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XBadge</h3>
          <div class="flex flex-wrap items-center gap-6">
            <XBadge label="新功能" />
            <XBadge color="success" :count="5">消息</XBadge>
            <XBadge color="warning" dot>通知</XBadge>
          </div>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XChip</h3>
          <div class="flex flex-wrap items-center gap-3">
            <div class="relative inline-flex">
              <XAvatar src="https://github.com/nuxt-ui.png" alt="avatar" />
              <XChip />
            </div>
            <XChip standalone size="3xl" text="primary" />
            <XChip standalone color="success" size="3xl" text="success" />
            <XChip standalone color="error" closable size="3xl" text="error" />
          </div>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XAvatar</h3>
          <div class="flex flex-wrap items-center gap-4">
            <XAvatar>U</XAvatar>
            <XAvatar size="lg">A</XAvatar>
            <XAvatar size="xl">
              <template #icon><XIcon name="user" size="lg" /></template>
            </XAvatar>
          </div>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XAvatarGroup</h3>
          <XAvatarGroup :max="3">
            <XAvatar text="A" />
            <XAvatar text="B" />
            <XAvatar text="C" />
            <XAvatar text="D" />
            <XAvatar text="E" />
          </XAvatarGroup>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XCard</h3>
          <XCard title="卡片标题" description="卡片内容区域，用于承载标题与主体信息。">
            这是卡片的主体内容。
          </XCard>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XContainer</h3>
          <XContainer size="md" class="rounded-lg border border-dashed border-default py-4 text-center text-sm text-muted-foreground">
            内容被居中约束在容器内（md = 1024px）
          </XContainer>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XIcon</h3>
          <div class="flex flex-wrap items-center gap-4">
            <XIcon name="dashboard" size="lg" />
            <XIcon name="settings" size="lg" />
            <XIcon name="user" size="lg" />
            <XIcon name="search" size="lg" />
            <XIcon name="bell" size="lg" />
            <XIcon name="star" size="lg" />
          </div>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XKbd</h3>
          <div class="flex flex-wrap items-center gap-2">
            <XKbd value="⌘" />
            <XKbd value="K" />
            <XKbd color="primary" value="Enter" />
          </div>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XSeparator</h3>
          <div class="flex flex-col gap-3">
            <XSeparator />
            <XSeparator type="dashed" color="primary" />
            <div class="flex h-6 items-center gap-3 text-sm">
              <span>内容 A</span>
              <XSeparator orientation="vertical" />
              <span>内容 B</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XSkeleton</h3>
          <XSkeleton variant="text" width="60%" />
          <XSkeleton variant="text" width="40%" />
          <div class="flex items-center gap-2">
            <XSkeleton variant="circle" />
            <XSkeleton variant="rect" width="10rem" height="2rem" />
          </div>
          <XButton size="xs" variant="soft" color="neutral" @click="skeletonLoading = !skeletonLoading">
            切换 loading（当前：{{ skeletonLoading }}）
          </XButton>
          <XSkeleton :loading="skeletonLoading" variant="rect" height="2.5rem">
            <div class="flex h-10 items-center rounded-md bg-primary/10 px-3 text-sm text-primary">内容已就绪</div>
          </XSkeleton>
        </div>
      </div>
    </section>

    <!-- 表单 Forms -->
    <section class="mb-10">
      <h2 class="mb-1 text-xl font-semibold">表单 Forms</h2>
      <p class="mb-4 text-sm text-muted-foreground">输入与数据收集类组件</p>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XInput</h3>
          <div class="flex flex-wrap items-center gap-3">
            <XInput v-model="inputValue" placeholder="输入内容" class="w-56" />
            <span class="text-sm text-muted-foreground">值：{{ inputValue || '—' }}</span>
          </div>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XTextarea</h3>
          <XTextarea v-model="textareaValue" placeholder="多行文本" class="w-72" />
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XCheckbox</h3>
          <div class="flex flex-wrap items-center gap-6">
            <XCheckbox v-model="checked" label="多选框 Checkbox" />
            <XCheckbox disabled label="禁用状态" />
          </div>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XRadioGroup</h3>
          <XRadioGroup v-model="plan" :options="plans" legend="订阅方案" />
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XSwitch</h3>
          <div class="flex flex-wrap items-center gap-6">
            <XSwitch v-model="switchOn" label="开启通知" />
            <XSwitch disabled label="禁用状态" />
          </div>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XInputNumber</h3>
          <XInputNumber v-model="count" :min="1" :max="10" placeholder="数量" />
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XInputRating</h3>
          <div class="flex flex-wrap items-center gap-4">
            <XInputRating v-model="rating" />
            <span class="text-sm text-muted-foreground">当前评分：{{ rating }}</span>
          </div>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XInputTags</h3>
          <div class="flex flex-wrap items-center gap-3">
            <XInputTags v-model="tags" class="w-72" />
            <span class="text-sm text-muted-foreground">当前标签：{{ tags.join('、') }}</span>
          </div>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XInputDate</h3>
          <XInputDate v-model="date" class="w-56" />
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XInputTime</h3>
          <XInputTime v-model="time" class="w-40" />
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XColorPicker</h3>
          <XColorPicker v-model="color" />
          <p class="text-sm text-muted-foreground">当前值：{{ color }}</p>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XPinInput</h3>
          <XPinInput v-model="pin" />
          <p class="text-sm text-muted-foreground">当前值：{{ pin || '空' }}</p>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XFileUpload</h3>
          <XFileUpload v-model="file" label="拖拽文件到此处，或点击上传" description="支持任意格式，单文件" />
          <p v-if="file" class="text-sm text-muted-foreground">已选择：{{ file.name }}</p>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5 xl:col-span-2">
          <h3 class="text-sm font-medium text-muted-foreground">XForm</h3>
          <DemoForm :on-submit="onFormSubmit">
            <XFieldGroup>
              <XFormField name="username" label="用户名" required class="flex-1">
                <XInput placeholder="请输入用户名" @update:model-value="formApi.setValue('username', $event)" />
              </XFormField>
            </XFieldGroup>
            <div class="mt-3 flex items-center gap-2">
              <XButton type="submit" variant="solid" size="sm">提交</XButton>
              <XButton type="button" variant="outline" size="sm" @click="formApi.reset()">重置</XButton>
            </div>
          </DemoForm>
          <p v-if="submitted" class="text-sm text-muted-foreground">提交数据：{{ submitted }}</p>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XFormField</h3>
          <XForm :rules="{ password: [{ required: true, message: '密码不能为空' }] }" class="flex flex-col gap-4">
            <XFormField name="password" label="密码" hint="8-20 位，含大小写字母与数字" required>
              <XInput placeholder="请输入密码" type="password" />
            </XFormField>
          </XForm>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XFieldGroup</h3>
          <XForm class="gap-2">
            <XFieldGroup>
              <XFormField name="province" label="省份" class="flex-1">
                <XInput placeholder="省份" />
              </XFormField>
              <XFormField name="city" label="城市" class="flex-1">
                <XInput placeholder="城市" />
              </XFormField>
            </XFieldGroup>
          </XForm>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XSelectMenu</h3>
          <div class="flex flex-wrap items-center gap-4">
            <XSelectMenu v-model="selectedFruit" :items="fruitOptions" value-key="value" class="w-48" />
            <XSelectMenu v-model="selectedCities" multiple placeholder="多选" :items="cityOptions" value-key="value" class="w-48" />
          </div>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XInputMenu</h3>
          <div class="flex flex-wrap items-center gap-3">
            <XInputMenu :items="cityOptions" class="w-56" @select="inputMenuLast = $event.label" />
            <span class="text-sm text-muted-foreground">最近选择：{{ inputMenuLast || '—' }}</span>
          </div>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XListbox</h3>
          <XListbox v-model="listboxSelected" :items="listboxItems" value-key="key" />
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XSlider</h3>
          <div class="flex flex-col gap-6">
            <XSlider v-model="sliderValue" size="sm" />
            <XSlider v-model="sliderRange" />
          </div>
        </div>
      </div>
    </section>

    <!-- 导航 Navigation -->
    <section class="mb-10">
      <h2 class="mb-1 text-xl font-semibold">导航 Navigation</h2>
      <p class="mb-4 text-sm text-muted-foreground">页面跳转与路径引导类组件</p>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XLink</h3>
          <div class="flex flex-wrap items-center gap-6">
            <XLink to="/components/button">主色链接</XLink>
            <XLink to="/components/badge" color="secondary">次级链接</XLink>
            <XLink to="/components/card" color="neutral">中性链接</XLink>
          </div>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XBreadcrumb</h3>
          <XBreadcrumb :items="breadcrumbItems" />
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XTabs</h3>
          <XTabs v-model="tabKey" variant="pill" :items="tabsItems" />
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XNavigationMenu</h3>
          <XNavigationMenu :items="navItems" :selected-keys="['dashboard']" class="w-56" />
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XPagination</h3>
          <div class="flex flex-wrap items-center gap-3">
            <XPagination v-model:page="page" :total="200" :items-per-page="10" show-edges />
            <span class="text-xs text-muted-foreground">当前第 {{ page }} 页</span>
          </div>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XStepper</h3>
          <XStepper ref="stepperRef" v-model="stepKey" :items="stepperItems" size="md" />
          <div class="flex items-center gap-2">
            <XButton size="xs" variant="outline" color="neutral" @click="stepperRef?.prev()">上一步</XButton>
            <XButton size="xs" @click="stepperRef?.next()">下一步</XButton>
          </div>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XCommandPalette</h3>
          <XButton variant="soft" color="info" @click="paletteOpen = true">打开命令面板</XButton>
          <XCommandPalette v-model:open="paletteOpen" close label-key="name" description-key="hint" :groups="paletteGroups" />
        </div>
      </div>
    </section>

    <!-- 浮层 Overlays -->
    <section class="mb-10">
      <h2 class="mb-1 text-xl font-semibold">浮层 Overlays</h2>
      <p class="mb-4 text-sm text-muted-foreground">弹出层与轻量反馈类组件</p>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XModal</h3>
          <XButton variant="soft" @click="modalOpen = true">打开对话框</XButton>
          <XModal v-model:open="modalOpen" title="对话框标题" description="这是对话框的辅助说明文字。">
            <template #body>
              <p>这是对话框的正文内容，用于说明本次操作的含义。</p>
            </template>
            <template #footer>
              <XButton color="neutral" variant="ghost" @click="modalOpen = false">取消</XButton>
              <XButton @click="modalOpen = false">确认</XButton>
            </template>
          </XModal>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XDrawer</h3>
          <XButton variant="soft" @click="drawerOpen = true">打开抽屉</XButton>
          <XDrawer v-model:open="drawerOpen" title="右侧抽屉" description="direction 为 right 时从右侧滑出。">
            <template #body>抽屉内容区域，用于展示详情或表单。</template>
            <template #footer>
              <XButton @click="drawerOpen = false">关闭</XButton>
            </template>
          </XDrawer>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XSlideover</h3>
          <XButton variant="soft" @click="slideoverOpen = true">打开侧滑面板</XButton>
          <XSlideover v-model:open="slideoverOpen" title="侧滑面板" description="side 为 right 时从右侧滑入。">
            <template #body>侧滑面板内容区域。</template>
            <template #footer>
              <XButton @click="slideoverOpen = false">关闭</XButton>
            </template>
          </XSlideover>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XTooltip</h3>
          <div class="flex flex-wrap items-center gap-3">
            <XTooltip text="基础提示">
              <XButton variant="outline" color="neutral">悬停查看</XButton>
            </XTooltip>
            <XTooltip text="带箭头提示" arrow>
              <XButton variant="outline" color="neutral">带箭头</XButton>
            </XTooltip>
          </div>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XPopover</h3>
          <XPopover>
            <XButton variant="outline" color="neutral">点击触发</XButton>
            <template #content>
              <div class="p-4 text-sm">
                <p class="font-semibold">气泡标题</p>
                <p class="mt-1 text-muted-foreground">默认 mode 为 click，点击触发元素显示。</p>
              </div>
            </template>
          </XPopover>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XContextMenu</h3>
          <XContextMenu :items="contextMenuItems">
            <span class="rounded-lg border border-dashed border-default px-6 py-3 text-sm text-muted-foreground">
              在此区域右键
            </span>
          </XContextMenu>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XDropdownMenu</h3>
          <XDropdownMenu :items="dropdownItems">
            <template #default="{ open }">
              <XButton variant="outline" color="neutral">
                打开菜单
                <template #trailing>
                  <XIcon :name="open ? 'chevron-up' : 'chevron-down'" class="size-4" />
                </template>
              </XButton>
            </template>
          </XDropdownMenu>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XToast</h3>
          <XButton variant="soft" color="success" @click="showToast">显示通知</XButton>
          <XToaster />
        </div>
      </div>
    </section>

    <!-- 内容 Content -->
    <section class="mb-10">
      <h2 class="mb-1 text-xl font-semibold">内容 Content</h2>
      <p class="mb-4 text-sm text-muted-foreground">数据展示与内容组织类组件</p>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5 xl:col-span-2">
          <h3 class="text-sm font-medium text-muted-foreground">XTable</h3>
          <XTable :columns="tableColumns" :data="tableData" />
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XAlert</h3>
          <XAlert v-model:open="alertOpen" color="warning" close title="磁盘空间不足" description="点击右侧关闭按钮隐藏。" />
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XProgress</h3>
          <div class="flex flex-col gap-4">
            <XProgress v-model="progressValue" />
            <XProgress :model-value="100" status color="success" />
          </div>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XAccordion</h3>
          <XAccordion :items="accordionItems" default-value="0" />
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XCollapsible</h3>
          <XCollapsible>
            <template #content>点击「展开详情」展开的内容区域，再次点击收起。</template>
          </XCollapsible>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XScrollArea</h3>
          <XScrollArea :items="scrollItems" class="h-[140px] rounded-md border border-default p-3">
            <template #default="{ item }">
              <div class="py-1 text-sm">{{ item.text }}</div>
            </template>
          </XScrollArea>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5">
          <h3 class="text-sm font-medium text-muted-foreground">XCarousel</h3>
          <XCarousel :items="carouselItems">
            <template #default="{ item }">
              <div class="flex h-24 items-center justify-center rounded-lg bg-primary/10 text-primary">
                Slide {{ item.key }}
              </div>
            </template>
          </XCarousel>
        </div>

        <div class="flex flex-col gap-3 rounded-lg border border-default bg-default p-5 xl:col-span-2">
          <h3 class="text-sm font-medium text-muted-foreground">XSplitter</h3>
          <div class="h-64">
            <XSplitter :items="splitterItems" class="h-full">
              <template #panel-0="{ item }">
                <div class="flex h-full items-center justify-center text-sm">左侧面板（{{ item.id }}）</div>
              </template>
              <template #panel-1="{ item }">
                <div class="flex h-full items-center justify-center text-sm">中间面板（{{ item.id }}）</div>
              </template>
              <template #panel-2="{ item }">
                <div class="flex h-full items-center justify-center text-sm">右侧面板（{{ item.id }}）</div>
              </template>
            </XSplitter>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
