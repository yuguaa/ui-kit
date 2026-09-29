import { XAvatar } from '@/components/kit/x-avatar'
import { XAvatarGroup } from '@/components/kit/x-avatar-group'
import { XBadge } from '@/components/kit/x-badge'
import { XButton } from '@/components/kit/x-button'
import { XButtonGroup } from '@/components/kit/x-button-group'
import { XCard } from '@/components/kit/x-card'
import { XChip } from '@/components/kit/x-chip'
import { XContainer } from '@/components/kit/x-container'
import { XIcon } from '@/components/kit/x-icon'
import { XKbd } from '@/components/kit/x-kbd'
import { XSeparator } from '@/components/kit/x-separator'
import { XSkeleton } from '@/components/kit/x-skeleton'
import { XCheckbox } from '@/components/kit/x-checkbox'
import { XColorPicker } from '@/components/kit/x-color-picker'
import { XFieldGroup } from '@/components/kit/x-field-group'
import { XFileUpload } from '@/components/kit/x-file-upload'
import { XForm, useXFormContext } from '@/components/kit/x-form'
import { XFormField } from '@/components/kit/x-form-field'
import { XInput } from '@/components/kit/x-input'
import { XInputDate } from '@/components/kit/x-input-date'
import { XInputMenu } from '@/components/kit/x-input-menu'
import { XInputNumber } from '@/components/kit/x-input-number'
import { XInputRating } from '@/components/kit/x-input-rating'
import { XInputTags } from '@/components/kit/x-input-tags'
import { XInputTime } from '@/components/kit/x-input-time'
import { XPinInput } from '@/components/kit/x-pin-input'
import { XRadioGroup } from '@/components/kit/x-radio-group'
import { XSelectMenu } from '@/components/kit/x-select-menu'
import { XSlider } from '@/components/kit/x-slider'
import { XSwitch } from '@/components/kit/x-switch'
import { XTextarea } from '@/components/kit/x-textarea'
import { XAccordion } from '@/components/kit/x-accordion'
import { XAlert } from '@/components/kit/x-alert'
import { XBreadcrumb } from '@/components/kit/x-breadcrumb'
import { XCarousel } from '@/components/kit/x-carousel'
import { XCollapsible } from '@/components/kit/x-collapsible'
import { XCommandPalette } from '@/components/kit/x-command-palette'
import { XContextMenu } from '@/components/kit/x-context-menu'
import { XDrawer } from '@/components/kit/x-drawer'
import { XDropdownMenu } from '@/components/kit/x-dropdown-menu'
import { XLink } from '@/components/kit/x-link'
import { XListbox } from '@/components/kit/x-listbox'
import { XModal, useXModal } from '@/components/kit/x-modal'
import { XNavigationMenu } from '@/components/kit/x-navigation-menu'
import { XPagination } from '@/components/kit/x-pagination'
import { XPopover } from '@/components/kit/x-popover'
import { XProgress } from '@/components/kit/x-progress'
import { XScrollArea } from '@/components/kit/x-scroll-area'
import { XSlideover } from '@/components/kit/x-slideover'
import { XSplitter } from '@/components/kit/x-splitter'
import { XStepper } from '@/components/kit/x-stepper'
import { XTable } from '@/components/kit/x-table'
import { XTabs } from '@/components/kit/x-tabs'
import { toast, XToaster } from '@/components/kit/x-toast'
import { XTooltip } from '@/components/kit/x-tooltip'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      {children}
    </section>
  )
}

export default function App() {
  return (
    <XContainer size="lg" className="flex flex-col gap-10 py-10">
      <header>
        <h1 className="text-3xl font-semibold">ui-kit · React</h1>
        <p className="text-muted-foreground">shadcn 原子组件二次封装 · 内置变体语义 · Framer Motion 动效</p>
      </header>

      <Section title="按钮 Button">
        <div className="flex flex-wrap items-center gap-3">
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
          <XButton leading={<XIcon name="plus" size="sm" />}>新建</XButton>
          <XButton trailing={<XIcon name="chevron-down" size="sm" />}>展开</XButton>
        </div>
        <XButtonGroup>
          <XButton variant="outline">左</XButton>
          <XButton variant="outline">中</XButton>
          <XButton variant="outline">右</XButton>
        </XButtonGroup>
      </Section>

      <Section title="徽标 Badge">
        <div className="flex items-center gap-8">
          <XBadge count={5}>消息</XBadge>
          <XBadge color="error" count={120}>订单</XBadge>
          <XBadge color="warning" dot>通知</XBadge>
          <XBadge color="success">在线</XBadge>
          <XBadge color="info" size="xl">1,024</XBadge>
        </div>
      </Section>

      <Section title="芯片 Chip">
        <div className="flex items-center gap-3">
          <XChip color="primary">Primary</XChip>
          <XChip color="success">Success</XChip>
          <XChip color="warning">Warning</XChip>
          <XChip color="error" closable>Error</XChip>
          <XChip color="info" icon={<XIcon name="info" size="sm" />}>Info</XChip>
        </div>
      </Section>

      <Section title="头像 Avatar">
        <div className="flex items-center gap-6">
          <XAvatar>U</XAvatar>
          <XAvatar shape="square" size="lg">A</XAvatar>
          <XAvatar size="xl" icon={<XIcon name="user" size="lg" />} />
          <XAvatarGroup max={4}>
            <XAvatar>A</XAvatar>
            <XAvatar>B</XAvatar>
            <XAvatar>C</XAvatar>
            <XAvatar>D</XAvatar>
            <XAvatar>E</XAvatar>
          </XAvatarGroup>
        </div>
      </Section>

      <Section title="卡片 Card">
        <div className="grid grid-cols-2 gap-4">
          <XCard title="卡片标题" description="卡片内容区域，用于承载标题、操作区以及主体信息。" extra={<XButton size="sm" variant="ghost">更多</XButton>}>
            这是卡片的主体内容。
          </XCard>
          <XCard bordered={false} hoverable size="small" title="无边框卡片" cover={<div className="h-24 bg-gradient-to-r from-primary-1 to-primary-3" />}>
            悬浮试试。
          </XCard>
        </div>
      </Section>

      <Section title="基础组件">
        <div className="flex items-center gap-6">
          <XIcon name="dashboard" size="lg" />
          <XIcon name="settings" size="md" />
          <XIcon name="star" color="#faad14" />
          <XKbd value="⌘" />
          <XKbd value="K" />
          <XKbd size="lg" value="Ctrl" />
          <span className="flex items-center gap-2">
            <XBadge count={2}>搜索</XBadge>
            <XSeparator orientation="vertical" className="h-6" />
            <span className="text-sm text-muted-foreground">分隔线右侧</span>
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <XSkeleton variant="text" className="w-1/2" />
          <XSkeleton variant="rect" className="h-20 w-full" />
          <XSkeleton variant="circle" />
        </div>
      </Section>

      <Section title="表单 Forms">
        <DemoForm />
        <div className="flex flex-wrap items-center gap-4">
          <XInput size="sm" placeholder="Input（sm）" className="w-40" />
          <XInput placeholder="带前缀图标（搜索）" prefix={<XIcon name="search" size="sm" />} className="w-56" />
          <XInput status="error" placeholder="错误状态（error）" className="w-56" />
          <XInput addonBefore="https://" addonAfter=".com" className="w-56" />
          <XTextarea placeholder="请输入多行文本…" className="w-full" />
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <XSelectMenu
            showSearch
            options={[{ label: '苹果', value: 'apple' }, { label: '香蕉', value: 'banana' }, { label: '橙子', value: 'orange' }]}
            className="w-48"
          />
          <XInputMenu items={[{ label: '上海', value: 'sh' }, { label: '北京', value: 'bj' }]} className="w-48" />
          <XInputDate defaultValue="2025-06-15" className="w-44" />
          <XInputTime defaultValue="14:30" className="w-32" />
          <XColorPicker defaultValue="#00DC82" />
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <XInputNumber defaultValue={5} min={1} max={10} />
          <XSlider defaultValue={[50]} className="w-56" />
          <XInputRating defaultValue={4} allowHalf />
          <XInputTags defaultValue={['Vue', 'Nuxt']} placeholder="输入后回车添加…" className="w-80" />
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <XCheckbox label="多选框 Checkbox" defaultChecked />
          <XCheckbox indeterminate label="半选状态" />
          <XRadioGroup options={[{ value: 'a', label: '选项 A' }, { value: 'b', label: '选项 B' }, { value: 'c', label: '选项 C' }]} />
          <XRadioGroup variant="button" options={[{ value: 'sh', label: '上海' }, { value: 'bj', label: '北京' }, { value: 'gz', label: '广州' }]} />
          <XSwitch checked checkedChildren="开" unCheckedChildren="关" label="开启通知" />
          <XPinInput defaultValue="1234" length={6} />
        </div>
        <XFileUpload className="w-full" />
      </Section>

      <Section title="导航 Navigation">
        <XBreadcrumb items={[{ title: '首页', href: '/' }, { title: '组件' }, { title: '面包屑' }]} />
        <div className="flex flex-wrap items-center gap-6">
          <XLink to="/docs">文档</XLink>
          <XLink to="/examples">示例</XLink>
          <XLink to="/disabled" disabled>禁用</XLink>
          <XTooltip title="这是一段提示文字">
            <XButton variant="outline" color="neutral">悬浮查看提示</XButton>
          </XTooltip>
          <XDropdownMenu
            items={[{ key: 'rename', label: '重命名' }, { key: 'share', label: '分享' }, { key: 'delete', label: '删除', separator: true }]}
          />
        </div>
        <XTabs
          items={[
            { key: 'doc', label: '文档', content: '当前选中：文档。这里是标签页对应的内容区域。' },
            { key: 'example', label: '示例', content: '这里是示例面板的内容。' },
            { key: 'api', label: 'API', content: '这里是 API 面板的内容。' },
          ]}
        />
        <XNavigationMenu
          mode="horizontal"
          items={[
            { key: 'dashboard', label: '仪表盘' },
            { key: 'docs', label: '文档' },
            { key: 'user', label: '用户' },
            { key: 'settings', label: '设置' },
          ]}
        />
        <div className="flex flex-wrap items-center gap-6">
          <XStepper current={1} items={[{ title: '完成' }, { title: '进行中' }, { title: '待处理' }]} />
          <XPagination current={1} total={100} pageSize={10} showSizeChanger />
        </div>
        <XCommandPalette
          groups={[
            {
              label: '操作',
              commands: [
                { label: '新建文档', shortcut: '⌘ N' },
                { label: '添加用户', shortcut: '⌘ U' },
                { label: '打开设置', shortcut: '⌘ ,' },
              ],
            },
          ]}
        />
      </Section>

      <Section title="浮层 Overlays">
        <div className="flex flex-wrap items-center gap-3">
          <XModal open={false} title="对话框标题" description="这是对话框的正文内容。">
            <p>这是对话框的正文内容，用于说明本次操作的含义。</p>
          </XModal>
          <XDrawer open={false} title="抽屉标题">抽屉内容区域</XDrawer>
          <XSlideover open={false} title="侧滑面板">
            <div className="flex flex-col gap-2">
              <XLink to="/">首页</XLink>
              <XLink to="/about">关于</XLink>
              <XLink to="/contact">联系</XLink>
            </div>
          </XSlideover>
          <XPopover trigger="click" title="气泡标题" content="这是一段气泡说明文字。">
            <XButton variant="outline" color="neutral">打开气泡</XButton>
          </XPopover>
          <XContextMenu
            items={[{ key: 'edit', label: '编辑' }, { key: 'copy', label: '复制' }, { key: 'delete', label: '删除' }]}
          >
            <span className="rounded-lg border border-dashed border-border px-6 py-3 text-sm text-muted-foreground">
              在此区域右键
            </span>
          </XContextMenu>
          <XButton variant="soft" color="success" onClick={() => toast.show({ title: '操作成功', description: '数据已保存。', color: 'success' })}>
            成功通知
          </XButton>
          <XButton variant="soft" color="error" onClick={() => toast.show({ title: '操作失败', description: '请稍后重试。', color: 'error' })}>
            失败通知
          </XButton>
          <HookDemo />
        </div>
      </Section>

      <Section title="内容 Content">
        <div className="flex flex-col gap-3">
          <XAlert type="success" message="成功提示" description="操作已成功完成。" showIcon />
          <XAlert type="info" message="信息提示" description="这是一条普通的信息说明。" showIcon />
          <XAlert type="warning" message="警告提示" description="操作存在风险，请谨慎处理。" showIcon closable />
          <XAlert type="error" message="错误提示" description="操作失败，请稍后重试。" showIcon />
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <XProgress percent={30} className="w-64" />
          <XProgress percent={70} status="success" className="w-64" />
          <XProgress percent={45} status="exception" className="w-64" />
          <XProgress percent={75} type="circle" />
        </div>
        <XAccordion
          items={[
            { title: '什么是 Nuxt UI？', content: '基于 Tailwind 与 Reka UI 的 Vue 组件库，提供完整的 props、slots 与 API。' },
            { title: '如何安装？', content: '通过 shadcn-vue CLI 添加组件。' },
          ]}
        />
        <XCollapsible trigger="展开详情">这里是折叠的内容区域，展开后显示。</XCollapsible>
        <div className="grid grid-cols-2 gap-4">
          <XListbox
            items={[{ key: 'a', label: '选项 A' }, { key: 'b', label: '选项 B' }, { key: 'c', label: '选项 C' }]}
            selected={['a']}
          />
          <XScrollArea height={120}>
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="py-1 text-sm">滚动内容第 {i + 1} 行</div>
            ))}
          </XScrollArea>
        </div>
        <XCarousel
          items={[
            { key: '1', content: <div className="flex h-32 items-center justify-center rounded-lg bg-primary-1 text-primary-7">Slide 1</div> },
            { key: '2', content: <div className="flex h-32 items-center justify-center rounded-lg bg-info-1 text-info-7">Slide 2</div> },
            { key: '3', content: <div className="flex h-32 items-center justify-center rounded-lg bg-success-1 text-success-7">Slide 3</div> },
          ]}
          autoplay
        />
        <XSplitter
          className="h-40"
          first={<div className="flex h-full items-center justify-center text-sm">左面板</div>}
          second={<div className="flex h-full items-center justify-center text-sm">右面板</div>}
        />
        <XTable
          columns={[
            { key: 'name', title: '名称' },
            { key: 'age', title: '年龄' },
            { key: 'address', title: '地址' },
            { key: 'status', title: '状态' },
          ]}
          dataSource={[
            { key: '1', name: '张三', age: 28, address: '北京市朝阳区望京街道', status: '已完成' },
            { key: '2', name: '李四', age: 32, address: '上海市浦东新区张江镇', status: '进行中' },
            { key: '3', name: '王五', age: 24, address: '广州市天河区珠江新城', status: '已失败' },
          ]}
          pagination={{ pageSize: 10 }}
        />
      </Section>
      <XToaster />
    </XContainer>
  )
}

function DemoForm() {
  return (
    <XForm
      rules={{ email: [{ required: true, message: '邮箱不能为空' }] }}
      onSubmit={(values) => console.log('submit', values)}
    >
      <EmailField />
    </XForm>
  )
}

function HookDemo() {
  /* vben 风格：hook 先行，调用即得 [组件, api] */
  const [Modal, modalApi] = useXModal({ title: 'hook 对话框', description: '由 useXModal 创建的实例' })
  return (
    <>
      <XButton variant="soft" color="info" onClick={() => modalApi.open()}>
        hook 打开对话框
      </XButton>
      <Modal>这是 hook 方式创建的内容。</Modal>
    </>
  )
}

function EmailField() {
  const form = useXFormContext()
  return (
    <XFieldGroup>
      <XFormField name="email" label="邮箱" required className="flex-1">
        <XInput
          placeholder="you@example.com"
          value={(form.values.email as string) ?? ''}
          onChange={(event) => form.setValue('email', event.target.value)}
        />
      </XFormField>
      <XButton type="submit" variant="soft">提交</XButton>
    </XFieldGroup>
  )
}
