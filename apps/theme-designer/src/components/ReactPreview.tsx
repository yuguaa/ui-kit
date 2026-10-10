import * as React from 'react'
import {
  toast,
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
} from '@ui-kit/react/src/components/kit'

export interface ReactPreviewProps {
  vars: Record<string, string>
  dark: boolean
}

/* ---------------- 静态演示数据 ---------------- */
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
const tabItems = [
  { value: 'overview', label: '概览', content: <p className="text-muted-foreground text-sm">概览面板内容</p> },
  { value: 'detail', label: '明细', content: <p className="text-muted-foreground text-sm">明细面板内容</p> },
  { value: 'setting', label: '设置', content: <p className="text-muted-foreground text-sm">设置面板内容</p> },
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
  { label: '编辑', commands: [{ label: '查找', shortcut: '⌘F' }] },
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
const accordionItems = [
  { title: '什么是设计 token', content: <p className="text-muted-foreground text-sm">设计 token 的答案内容。</p> },
  { title: '如何自定义主色', content: <p className="text-muted-foreground text-sm">自定义主色的答案内容。</p> },
  { title: '支持暗色模式吗', content: <p className="text-muted-foreground text-sm">暗色模式的答案内容。</p> },
]
const carouselItems = [
  { key: '1', content: <div className="bg-primary-1 text-primary-7 flex h-24 items-center justify-center rounded-md text-sm">轮播项 1</div> },
  { key: '2', content: <div className="bg-primary-1 text-primary-7 flex h-24 items-center justify-center rounded-md text-sm">轮播项 2</div> },
  { key: '3', content: <div className="bg-primary-1 text-primary-7 flex h-24 items-center justify-center rounded-md text-sm">轮播项 3</div> },
]

/** React 版组件预览：与 Vue 面板展示相同的全量组件集合，颜色由注入的色阶变量驱动 */
export function ReactPreview({ vars, dark }: ReactPreviewProps) {
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [bio, setBio] = React.useState('')
  const [agree, setAgree] = React.useState(true)
  const [notify, setNotify] = React.useState(true)
  const [plan, setPlan] = React.useState('standard')
  const [volume, setVolume] = React.useState([45])
  const [amount, setAmount] = React.useState(3)
  const [tags, setTags] = React.useState<string[]>(['设计', '前端'])
  const [date, setDate] = React.useState('2025-06-15')
  const [time, setTime] = React.useState('14:30')
  const [rating, setRating] = React.useState(4)
  const [color, setColor] = React.useState('#1677ff')
  const [pin, setPin] = React.useState('')
  const [city, setCity] = React.useState('hangzhou')
  const [page, setPage] = React.useState(3)
  const [modalOpen, setModalOpen] = React.useState(false)
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [slideoverOpen, setSlideoverOpen] = React.useState(false)
  const [paletteOpen, setPaletteOpen] = React.useState(false)

  return (
    <div
      style={vars as React.CSSProperties}
      className={`bg-background text-foreground flex flex-col gap-6 rounded-lg border border-border p-4 ${dark ? 'dark' : ''}`}
    >
      {/* 布局与展示 */}
      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground text-xs font-medium">布局与展示</span>

        <div className="flex flex-wrap items-center gap-2">
          <XButton color="primary">主要按钮</XButton>
          <XButton variant="soft" color="success">次要按钮</XButton>
          <XButton variant="outline" color="warning">描边按钮</XButton>
          <XButton variant="ghost" color="error">幽灵按钮</XButton>
          <XButton variant="subtle" color="info">轻强调</XButton>
          <XButton variant="link" color="neutral">链接按钮</XButton>
          <XButton square variant="soft" aria-label="设置"><XIcon name="settings" /></XButton>
          <XButton loading>加载中</XButton>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <XButtonGroup>
            <XButton variant="outline" color="neutral">左</XButton>
            <XButton variant="outline" color="neutral">中</XButton>
            <XButton variant="outline" color="neutral">右</XButton>
          </XButtonGroup>
          <XBadge count={12} color="primary" />
          <XBadge count={5} color="success" />
          <XBadge count={8} color="warning" />
          <XBadge square size="sm" count={3} color="error" />
          <XChip color="primary">标签</XChip>
          <XChip color="success" closable>可关闭</XChip>
        </div>

        <div className="flex flex-wrap items-center gap-3">
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
          <div className="flex flex-wrap items-center gap-3">
            <XSeparator label="带标签分割线" className="w-64" />
            <XSkeleton variant="text" className="w-32" />
            <XSkeleton variant="circle" />
          </div>
        </XCard>

        <XContainer size="md" className="border-border rounded-lg border border-dashed p-3">
          <span className="text-muted-foreground text-xs">Container 限制内容最大宽度</span>
        </XContainer>
      </div>

      {/* 表单 */}
      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground text-xs font-medium">表单</span>

        <XForm className="flex flex-col gap-4">
          <XFieldGroup>
            <XFormField name="username" label="用户名" hint="用于登录">
              <XInput value={username} onChange={(event) => setUsername(event.target.value)} placeholder="请输入用户名" clearable />
            </XFormField>
            <XFormField name="email" label="邮箱" required>
              <XInput value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" />
            </XFormField>
          </XFieldGroup>

          <XFormField name="bio" label="简介">
            <XTextarea
              value={bio}
              onChange={(event) => setBio(event.target.value)}
              showCount
              maxLength={120}
              placeholder="介绍一下自己"
            />
          </XFormField>

          <div className="flex flex-wrap items-center gap-4">
            <XCheckbox checked={agree} onCheckedChange={setAgree} label="同意协议" description="已阅读并同意服务条款" />
            <XSwitch checked={notify} onCheckedChange={setNotify} label="开启通知" description="接收邮件提醒" />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <XSelectMenu items={cityOptions} value={city} onChange={(next) => setCity(String(next))} clear className="w-40" />
            <XInputMenu items={menuOptions} searchInput createItem placeholder="搜索水果" className="w-44" />
            <XInputNumber value={amount} min={0} max={10} onChange={setAmount} />
            <XInputDate value={date} onChange={(next) => setDate(String(next))} className="w-40" />
            <XInputTime value={time} onChange={(next) => setTime(String(next))} className="w-32" />
            <XColorPicker value={color} onChange={setColor} />
            <XInputRating value={rating} onChange={setRating} />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <XSlider value={volume} onChange={(next) => setVolume([next])} tooltip className="w-48" />
            <XInputTags value={tags} onAdd={(tag) => setTags((prev) => [...prev, tag])} onRemove={(index) => setTags((prev) => prev.filter((_, i) => i !== index))} className="w-56" />
            <XPinInput value={pin} onChange={setPin} length={4} />
          </div>

          <XRadioGroup options={radioOptions} value={plan} onValueChange={setPlan} />

          <XFileUpload accept=".pdf,.docx" multiple label="选择一个文件或拖拽到这里" className="w-full" />
        </XForm>
      </div>

      {/* 导航 */}
      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground text-xs font-medium">导航</span>

        <div className="flex flex-wrap items-center gap-4">
          <XLink to="/docs" active>文档链接</XLink>
          <XLink to="/about" color="neutral">普通链接</XLink>
          <XPagination page={page} total={120} itemsPerPage={10} onPageChange={setPage} />
        </div>

        <XBreadcrumb items={breadcrumbItems} separatorIcon="›" />

        <XTabs items={tabItems} variant="link" />

        <XNavigationMenu items={navItems} mode="horizontal" selectedKeys={['orders']} />

        <XStepper items={stepItems} defaultValue={1} orientation="horizontal" />

        <div className="flex flex-wrap items-center gap-3">
          <XButton variant="outline" size="sm" onClick={() => setPaletteOpen(true)}>打开命令面板</XButton>
          <XCommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} groups={commandGroups} />
        </div>
      </div>

      {/* 浮层 */}
      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground text-xs font-medium">浮层</span>

        <div className="flex flex-wrap items-center gap-3">
          <XButton variant="soft" size="sm" onClick={() => setModalOpen(true)}>对话框</XButton>
          <XModal
            open={modalOpen}
            onOpenChange={setModalOpen}
            title="对话框标题"
            description="语义色随主色体系同步生成。"
          >
            对话框正文内容。
          </XModal>

          <XButton variant="soft" size="sm" onClick={() => setDrawerOpen(true)}>抽屉</XButton>
          <XDrawer open={drawerOpen} onOpenChange={setDrawerOpen} title="抽屉标题">
            抽屉内容。
          </XDrawer>

          <XButton variant="soft" size="sm" onClick={() => setSlideoverOpen(true)}>侧滑</XButton>
          <XSlideover open={slideoverOpen} onOpenChange={setSlideoverOpen} title="侧滑面板">
            侧滑内容。
          </XSlideover>

          <XTooltip text="文字提示">
            <XButton variant="outline" size="sm">悬浮查看提示</XButton>
          </XTooltip>

          <XPopover mode="click" content="气泡内容随主题色变化。" arrow>
            <XButton variant="outline" size="sm">带箭头的浮层</XButton>
          </XPopover>

          <XDropdownMenu items={menuItems} triggerLabel="下拉菜单" />

          <XContextMenu items={menuItems}>
            <span className="border-border text-muted-foreground rounded-md border border-dashed px-3 py-1.5 text-xs">
              在此处右键打开菜单
            </span>
          </XContextMenu>

          <XButton
            variant="soft"
            size="sm"
            onClick={() => toast.show({ title: '操作成功', description: '语义色随主色同步生成。', color: 'success' })}
          >
            消息通知
          </XButton>
          <XToaster />
        </div>
      </div>

      {/* 内容 */}
      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground text-xs font-medium">内容</span>

        <div className="flex flex-wrap items-center gap-6">
          <XProgress value={60} status className="w-56" />
          <XProgress value={80} inverted className="w-56" />
          <XProgress value={3} max={8} status className="w-56" />
        </div>

        <div className="flex flex-wrap items-start gap-6">
          <XAlert
            type="warning"
            message="警告提示"
            description="主色变化时语义色同步更新。"
            showIcon
            className="w-80"
          />
          <XListbox
            items={listItems}
            defaultValue={['a']}
            multiple
            filter
            valueKey="value"
            className="w-56"
          />
        </div>

        <XAccordion items={accordionItems} className="w-full" />

        <XCollapsible defaultOpen>
          折叠区域内容,点击标题可展开或收起。
        </XCollapsible>

        <div className="grid gap-4 lg:grid-cols-2">
          <XCarousel items={carouselItems} dots className="h-28" />

          <XScrollArea height={120} className="border-border rounded-md border">
            <div className="flex flex-col gap-2 p-3">
              {Array.from({ length: 12 }, (_, index) => (
                <span key={index} className="text-muted-foreground text-sm">滚动内容第 {index + 1} 行</span>
              ))}
            </div>
          </XScrollArea>
        </div>

        <XSplitter collapsible className="h-32" first={<div className="text-muted-foreground flex h-full items-center justify-center text-sm">左面板</div>} second={<div className="text-muted-foreground flex h-full items-center justify-center text-sm">右面板</div>} />

        <XTable columns={tableColumns} data={tableRows} />
      </div>
    </div>
  )
}
