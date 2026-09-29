<script setup lang="ts">
import XAvatar from '@/components/kit/XAvatar.vue'
import XAvatarGroup from '@/components/kit/XAvatarGroup.vue'
import XBadge from '@/components/kit/XBadge.vue'
import XButton from '@/components/kit/XButton.vue'
import XButtonGroup from '@/components/kit/XButtonGroup.vue'
import XCard from '@/components/kit/XCard.vue'
import XChip from '@/components/kit/XChip.vue'
import XContainer from '@/components/kit/XContainer.vue'
import XIcon from '@/components/kit/XIcon.vue'
import XKbd from '@/components/kit/XKbd.vue'
import XSeparator from '@/components/kit/XSeparator.vue'
import XSkeleton from '@/components/kit/XSkeleton.vue'
import XCheckbox from '@/components/kit/XCheckbox.vue'
import XColorPicker from '@/components/kit/XColorPicker.vue'
import XFieldGroup from '@/components/kit/XFieldGroup.vue'
import XFileUpload from '@/components/kit/XFileUpload.vue'
import XForm from '@/components/kit/XForm.vue'
import XFormField from '@/components/kit/XFormField.vue'
import XInput from '@/components/kit/XInput.vue'
import XInputDate from '@/components/kit/XInputDate.vue'
import XInputMenu from '@/components/kit/XInputMenu.vue'
import XInputNumber from '@/components/kit/XInputNumber.vue'
import XInputRating from '@/components/kit/XInputRating.vue'
import XInputTags from '@/components/kit/XInputTags.vue'
import XInputTime from '@/components/kit/XInputTime.vue'
import XPinInput from '@/components/kit/XPinInput.vue'
import XRadioGroup from '@/components/kit/XRadioGroup.vue'
import XSelectMenu from '@/components/kit/XSelectMenu.vue'
import XSlider from '@/components/kit/XSlider.vue'
import XSwitch from '@/components/kit/XSwitch.vue'
import XTextarea from '@/components/kit/XTextarea.vue'
import XAccordion from '@/components/kit/XAccordion.vue'
import XAlert from '@/components/kit/XAlert.vue'
import XBreadcrumb from '@/components/kit/XBreadcrumb.vue'
import XCarousel from '@/components/kit/XCarousel.vue'
import XCollapsible from '@/components/kit/XCollapsible.vue'
import XCommandPalette from '@/components/kit/XCommandPalette.vue'
import XContextMenu from '@/components/kit/XContextMenu.vue'
import XDropdownMenu from '@/components/kit/XDropdownMenu.vue'
import XLink from '@/components/kit/XLink.vue'
import XListbox from '@/components/kit/XListbox.vue'
import XNavigationMenu from '@/components/kit/XNavigationMenu.vue'
import XPagination from '@/components/kit/XPagination.vue'
import XPopover from '@/components/kit/XPopover.vue'
import XProgress from '@/components/kit/XProgress.vue'
import XScrollArea from '@/components/kit/XScrollArea.vue'
import XSplitter from '@/components/kit/XSplitter.vue'
import XStepper from '@/components/kit/XStepper.vue'
import XTable from '@/components/kit/XTable.vue'
import XTabs from '@/components/kit/XTabs.vue'
import { useToast } from '@/components/kit/XToast'
import { useXModal } from '@/components/kit/useXModal'
import XToaster from '@/components/kit/XToaster.vue'
import XTooltip from '@/components/kit/XTooltip.vue'
import { ref } from 'vue'
const email = ref('')
const date = ref('2025-06-15')
const time = ref('14:30')
const color = ref('#00DC82')
const count = ref(5)
const volume = ref(50)
const rating = ref(4)
const tags = ref(['Vue', 'Nuxt'])
const agree = ref(true)
const city = ref('a')
const city2 = ref('sh')
const notify = ref(true)
const pin = ref('1234')
const toastApi = useToast()

/* vben 风格：hook 先行，调用即得 [组件, api] */
const [HookModal, hookModalApi] = useXModal({ title: 'hook 对话框', description: '由 useXModal 创建的实例' })

function onSubmit(values: Record<string, unknown>) {
  console.log('submit', values)
}
</script>

<template>
  <XContainer size="lg" class="flex flex-col gap-10 py-10">
    <header>
      <h1 class="text-3xl font-semibold">ui-kit · Vue</h1>
      <p class="text-muted-foreground">shadcn-vue 原子组件二次封装 · 内置变体语义 · Framer Motion 动效</p>
    </header>

    <section class="flex flex-col gap-4">
      <h2 class="text-lg font-semibold">按钮 Button</h2>
      <div class="flex flex-wrap items-center gap-3">
        <XButton color="primary">主要按钮</XButton>
        <XButton variant="soft" color="success">保存</XButton>
        <XButton variant="outline" color="warning">警告</XButton>
        <XButton variant="ghost" color="error">删除</XButton>
        <XButton variant="subtle" color="info">更多</XButton>
        <XButton variant="link" color="primary">链接按钮</XButton>
        <XButton variant="solid" color="neutral" loading>提交中</XButton>
        <XButton size="xs" variant="soft">xs</XButton>
        <XButton size="sm">sm</XButton>
        <XButton size="lg">lg</XButton>
        <XButton size="xl">xl</XButton>
        <XButton>
          <template #leading><XIcon name="plus" size="sm" /></template>
          新建
        </XButton>
        <XButton>
          展开
          <template #trailing><XIcon name="chevron-down" size="sm" /></template>
        </XButton>
      </div>
      <XButtonGroup>
        <XButton variant="outline">左</XButton>
        <XButton variant="outline">中</XButton>
        <XButton variant="outline">右</XButton>
      </XButtonGroup>
    </section>

    <section class="flex flex-col gap-4">
      <h2 class="text-lg font-semibold">徽标 Badge</h2>
      <div class="flex items-center gap-8">
        <XBadge :count="5">消息</XBadge>
        <XBadge color="error" :count="120">订单</XBadge>
        <XBadge color="warning" dot>通知</XBadge>
        <XBadge color="success">在线</XBadge>
        <XBadge color="info" size="xl">1,024</XBadge>
      </div>
    </section>

    <section class="flex flex-col gap-4">
      <h2 class="text-lg font-semibold">芯片 Chip</h2>
      <div class="flex items-center gap-3">
        <XChip color="primary">Primary</XChip>
        <XChip color="success">Success</XChip>
        <XChip color="warning">Warning</XChip>
        <XChip color="error" closable>Error</XChip>
        <XChip color="info"><template #icon><XIcon name="info" size="sm" /></template>Info</XChip>
      </div>
    </section>

    <section class="flex flex-col gap-4">
      <h2 class="text-lg font-semibold">头像 Avatar</h2>
      <div class="flex items-center gap-6">
        <XAvatar>U</XAvatar>
        <XAvatar shape="square" size="lg">A</XAvatar>
        <XAvatar size="xl"><template #icon><XIcon name="user" size="lg" /></template></XAvatar>
        <XAvatarGroup :max="4">
          <XAvatar>A</XAvatar>
          <XAvatar>B</XAvatar>
          <XAvatar>C</XAvatar>
          <XAvatar>D</XAvatar>
          <XAvatar>E</XAvatar>
        </XAvatarGroup>
      </div>
    </section>

    <section class="flex flex-col gap-4">
      <h2 class="text-lg font-semibold">卡片 Card</h2>
      <div class="grid grid-cols-2 gap-4">
        <XCard title="卡片标题" description="卡片内容区域，用于承载标题、操作区以及主体信息。">
          <template #extra><XButton size="sm" variant="ghost">更多</XButton></template>
          这是卡片的主体内容。
        </XCard>
        <XCard :bordered="false" hoverable size="small" title="无边框卡片">
          <template #cover><div class="h-24 bg-gradient-to-r from-primary-1 to-primary-3" /></template>
          悬浮试试。
        </XCard>
      </div>
    </section>

    <section class="flex flex-col gap-4">
      <h2 class="text-lg font-semibold">基础组件</h2>
      <div class="flex items-center gap-6">
        <XIcon name="dashboard" size="lg" />
        <XIcon name="settings" size="md" />
        <XIcon name="star" color="#faad14" />
        <XKbd value="⌘" />
        <XKbd value="K" />
        <XKbd size="lg" value="Ctrl" />
        <span class="flex items-center gap-2">
          <XBadge :count="2">搜索</XBadge>
          <XSeparator orientation="vertical" class="h-6" />
          <span class="text-sm text-muted-foreground">分隔线右侧</span>
        </span>
      </div>
      <div class="flex flex-col gap-3">
        <XSkeleton variant="text" class="w-1/2" />
        <XSkeleton variant="rect" class="h-20 w-full" />
        <XSkeleton variant="circle" />
      </div>
    </section>

    <section class="flex flex-col gap-4">
      <h2 class="text-lg font-semibold">表单 Forms</h2>
      <XForm :rules="{ email: [{ required: true, message: '邮箱不能为空' }] }" @submit="onSubmit">
        <XFieldGroup>
          <XFormField name="email" label="邮箱" required class="flex-1">
            <XInput v-model="email" placeholder="you@example.com" />
          </XFormField>
          <XButton type="submit" variant="soft">提交</XButton>
        </XFieldGroup>
      </XForm>
      <div class="flex flex-wrap items-center gap-4">
        <XInput size="sm" placeholder="Input（sm）" class="w-40" />
        <XInput placeholder="带前缀图标（搜索）" class="w-56">
          <template #prefix><XIcon name="search" size="sm" /></template>
        </XInput>
        <XInput status="error" placeholder="错误状态（error）" class="w-56" />
        <XInput class="w-56">
          <template #addonBefore>https://</template>
          <template #addonAfter>.com</template>
        </XInput>
        <XTextarea placeholder="请输入多行文本…" class="w-full" />
      </div>
      <div class="flex flex-wrap items-center gap-6">
        <XSelectMenu
          show-search
          :options="[{ label: '苹果', value: 'apple' }, { label: '香蕉', value: 'banana' }, { label: '橙子', value: 'orange' }]"
          class="w-48"
        />
        <XInputMenu :items="[{ label: '上海', value: 'sh' }, { label: '北京', value: 'bj' }]" class="w-48" />
        <XInputDate v-model="date" class="w-44" />
        <XInputTime v-model="time" class="w-32" />
        <XColorPicker v-model="color" />
      </div>
      <div class="flex flex-wrap items-center gap-6">
        <XInputNumber v-model="count" :min="1" :max="10" />
        <XSlider v-model="volume" class="w-56" />
        <XInputRating v-model="rating" allow-half />
        <XInputTags v-model="tags" placeholder="输入后回车添加…" class="w-80" />
      </div>
      <div class="flex flex-wrap items-center gap-6">
        <XCheckbox v-model="agree" indeterminate>
          <template #label>多选框 Checkbox</template>
        </XCheckbox>
        <XRadioGroup
          v-model="city"
          :options="[{ value: 'a', label: '选项 A' }, { value: 'b', label: '选项 B' }, { value: 'c', label: '选项 C' }]"
        />
        <XRadioGroup
          v-model="city2"
          variant="button"
          :options="[{ value: 'sh', label: '上海' }, { value: 'bj', label: '北京' }, { value: 'gz', label: '广州' }]"
        />
        <XSwitch v-model="notify" label="开启通知">
          <template #checkedChildren>开</template>
          <template #unCheckedChildren>关</template>
        </XSwitch>
        <XPinInput v-model="pin" :length="6" />
      </div>
      <XFileUpload class="w-full" />
    </section>

    <section class="flex flex-col gap-4">
      <h2 class="text-lg font-semibold">导航 Navigation</h2>
      <XBreadcrumb :items="[{ title: '首页', href: '/' }, { title: '组件' }, { title: '面包屑' }]" />
      <div class="flex flex-wrap items-center gap-6">
        <XLink to="/docs">文档</XLink>
        <XLink to="/examples">示例</XLink>
        <XLink to="/disabled" disabled>禁用</XLink>
        <XTooltip title="这是一段提示文字">
          <XButton variant="outline" color="neutral">悬浮查看提示</XButton>
        </XTooltip>
        <XDropdownMenu
          :items="[
            { key: 'rename', label: '重命名' },
            { key: 'share', label: '分享' },
            { key: 'sep', separator: true },
            { key: 'delete', label: '删除' },
          ]"
        />
      </div>
      <XTabs
        :items="[{ key: 'doc', label: '文档' }, { key: 'example', label: '示例' }, { key: 'api', label: 'API' }]"
      >
        <template #content="{ item }">
          <p>当前选中：{{ item.label }}。这里是标签页对应的内容区域。</p>
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
        <XStepper :current="1" :items="[{ title: '完成' }, { title: '进行中' }, { title: '待处理' }]" />
        <XPagination :current="1" :total="100" :page-size="10" show-size-changer />
      </div>
      <XCommandPalette
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
    </section>

    <section class="flex flex-col gap-4">
      <h2 class="text-lg font-semibold">浮层 Overlays</h2>
      <div class="flex flex-wrap items-center gap-3">
        <XPopover trigger="click" title="气泡标题">
          <template #trigger><XButton variant="outline" color="neutral">打开气泡</XButton></template>
          <template #content>这是一段气泡说明文字。</template>
        </XPopover>
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
        <XButton variant="soft" color="info" @click="hookModalApi.open()">
          hook 打开对话框
        </XButton>
        <HookModal>这是 hook 方式创建的内容。</HookModal>
      </div>
    </section>

    <section class="flex flex-col gap-4">
      <h2 class="text-lg font-semibold">内容 Content</h2>
      <div class="flex flex-col gap-3">
        <XAlert type="success" message="成功提示" description="操作已成功完成。" show-icon />
        <XAlert type="info" message="信息提示" description="这是一条普通的信息说明。" show-icon />
        <XAlert type="warning" message="警告提示" description="操作存在风险，请谨慎处理。" show-icon closable />
        <XAlert type="error" message="错误提示" description="操作失败，请稍后重试。" show-icon />
      </div>
      <div class="flex flex-wrap items-center gap-6">
        <XProgress :percent="30" class="w-64" />
        <XProgress :percent="70" status="success" class="w-64" />
        <XProgress :percent="45" status="exception" class="w-64" />
        <XProgress :percent="75" type="circle" />
      </div>
      <XAccordion :items="[{ title: '什么是 Nuxt UI？' }, { title: '如何安装？' }]">
        <template #content="{ index }">
          <p v-if="index === 0">基于 Tailwind 与 Reka UI 的 Vue 组件库，提供完整的 props、slots 与 API。</p>
          <p v-else>通过 shadcn-vue CLI 添加组件。</p>
        </template>
      </XAccordion>
      <XCollapsible>
        <template #content>这里是折叠的内容区域，展开后显示。</template>
      </XCollapsible>
      <div class="grid grid-cols-2 gap-4">
        <XListbox :items="[{ key: 'a', label: '选项 A' }, { key: 'b', label: '选项 B' }, { key: 'c', label: '选项 C' }]" :selected="['a']" />
        <XScrollArea :height="120">
          <div v-for="i in 6" :key="i" class="py-1 text-sm">滚动内容第 {{ i }} 行</div>
        </XScrollArea>
      </div>
      <XCarousel :items="[{ key: '1' }, { key: '2' }, { key: '3' }]" autoplay>
        <template #item="{ item }">
          <div class="flex h-32 items-center justify-center rounded-lg bg-primary-1 text-primary-7">Slide {{ item.key }}</div>
        </template>
      </XCarousel>
      <XSplitter class="h-40">
        <template #first><div class="flex h-full items-center justify-center text-sm">左面板</div></template>
        <template #second><div class="flex h-full items-center justify-center text-sm">右面板</div></template>
      </XSplitter>
      <XTable
        :columns="[
          { key: 'name', title: '名称' },
          { key: 'age', title: '年龄' },
          { key: 'address', title: '地址' },
          { key: 'status', title: '状态' },
        ]"
        :data-source="[
          { key: '1', name: '张三', age: 28, address: '北京市朝阳区望京街道', status: '已完成' },
          { key: '2', name: '李四', age: 32, address: '上海市浦东新区张江镇', status: '进行中' },
          { key: '3', name: '王五', age: 24, address: '广州市天河区珠江新城', status: '已失败' },
        ]"
        :pagination="{ pageSize: 10 }"
      />
    </section>
    <XToaster />
  </XContainer>
</template>
