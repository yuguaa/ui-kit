import { useRef, useState } from "react";
import type { ReactNode } from "react";

import { XAccordion } from "@/components/kit/x-accordion";
import { XAlert } from "@/components/kit/x-alert";
import { XAvatar } from "@/components/kit/x-avatar";
import { XAvatarGroup } from "@/components/kit/x-avatar-group";
import { XBadge } from "@/components/kit/x-badge";
import { XBreadcrumb } from "@/components/kit/x-breadcrumb";
import { XButton } from "@/components/kit/x-button";
import { XButtonGroup } from "@/components/kit/x-button-group";
import { XCard } from "@/components/kit/x-card";
import { XCarousel } from "@/components/kit/x-carousel";
import { XCheckbox } from "@/components/kit/x-checkbox";
import { XChip } from "@/components/kit/x-chip";
import { XCollapsible } from "@/components/kit/x-collapsible";
import { XColorPicker } from "@/components/kit/x-color-picker";
import { XCommandPalette } from "@/components/kit/x-command-palette";
import { XContainer } from "@/components/kit/x-container";
import { XContextMenu } from "@/components/kit/x-context-menu";
import { XDrawer } from "@/components/kit/x-drawer";
import { XDropdownMenu } from "@/components/kit/x-dropdown-menu";
import { XFieldGroup } from "@/components/kit/x-field-group";
import { XFileUpload, type XFileUploadFiles } from "@/components/kit/x-file-upload";
import { XForm, useXForm } from "@/components/kit/x-form";
import { XFormField } from "@/components/kit/x-form-field";
import { XIcon } from "@/components/kit/x-icon";
import { XInput } from "@/components/kit/x-input";
import { XInputDate } from "@/components/kit/x-input-date";
import { XInputMenu } from "@/components/kit/x-input-menu";
import { XInputNumber } from "@/components/kit/x-input-number";
import { XInputRating } from "@/components/kit/x-input-rating";
import { XInputTags } from "@/components/kit/x-input-tags";
import { XInputTime } from "@/components/kit/x-input-time";
import { XKbd } from "@/components/kit/x-kbd";
import { XLink } from "@/components/kit/x-link";
import { XListbox } from "@/components/kit/x-listbox";
import { XModal } from "@/components/kit/x-modal";
import { XNavigationMenu } from "@/components/kit/x-navigation-menu";
import { XPagination } from "@/components/kit/x-pagination";
import { XPinInput } from "@/components/kit/x-pin-input";
import { XPopover } from "@/components/kit/x-popover";
import { XProgress } from "@/components/kit/x-progress";
import { XRadioGroup, type XRadioGroupValue } from "@/components/kit/x-radio-group";
import { XScrollArea } from "@/components/kit/x-scroll-area";
import { XSelectMenu } from "@/components/kit/x-select-menu";
import { XSeparator } from "@/components/kit/x-separator";
import { XSkeleton } from "@/components/kit/x-skeleton";
import { XSlideover } from "@/components/kit/x-slideover";
import { XSlider } from "@/components/kit/x-slider";
import { XSplitter } from "@/components/kit/x-splitter";
import { XStepper, type XStepperApi } from "@/components/kit/x-stepper";
import { XSwitch } from "@/components/kit/x-switch";
import { XTable } from "@/components/kit/x-table";
import { XTabs } from "@/components/kit/x-tabs";
import { XTextarea } from "@/components/kit/x-textarea";
import { XToast, XToaster, toast } from "@/components/kit/x-toast";
import { XTooltip } from "@/components/kit/x-tooltip";

/* 卡片外壳：组件名标题 + 示例内容 */
function Card({ name, wide = false, children }: { name: string; wide?: boolean; children: ReactNode }) {
  return (
    <div className={`rounded-xl border border-default bg-default p-4 ${wide ? "md:col-span-2" : ""}`}>
      <h3 className="mb-3 text-sm font-semibold text-highlighted">{name}</h3>
      {children}
    </div>
  );
}

/* 分组容器：分组标题 + 双列卡片网格 */
function Section({ title, count, children }: { title: string; count: number; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 flex items-baseline gap-2 text-lg font-semibold text-highlighted">
        {title}
        <span className="text-xs font-normal text-dimmed">{count} 个</span>
      </h2>
      <div className="grid gap-4 md:grid-cols-2">{children}</div>
    </section>
  );
}

/* 布局：button / button-group / badge / chip / avatar / avatar-group / card / container / icon / kbd / separator / skeleton */
function LayoutSection() {
  return (
    <Section title="布局 Layout" count={12}>
      <Card name="XButton">
        <div className="flex flex-wrap items-center gap-3">
          <XButton>主要按钮</XButton>
          <XButton variant="outline" color="neutral">
            次要按钮
          </XButton>
          <XButton variant="soft" color="success">
            保存
          </XButton>
          <XButton variant="subtle" color="error">
            删除
          </XButton>
          <XButton variant="link" color="info">
            链接按钮
          </XButton>
          <XButton loading>提交中</XButton>
        </div>
      </Card>

      <Card name="XButtonGroup">
        <div className="flex flex-col gap-3">
          <XButtonGroup>
            <XButton variant="outline" color="neutral">左</XButton>
            <XButton variant="outline" color="neutral">中</XButton>
            <XButton variant="outline" color="neutral">右</XButton>
          </XButtonGroup>
          <XButtonGroup orientation="vertical" className="w-28">
            <XButton variant="outline" color="neutral" block>编辑</XButton>
            <XButton variant="outline" color="error" block>删除</XButton>
          </XButtonGroup>
        </div>
      </Card>

      <Card name="XBadge">
        <div className="flex flex-wrap items-center gap-8">
          <XBadge label="新功能" />
          <XBadge color="success" label="在线" />
          <XBadge count={5}>消息</XBadge>
          <XBadge color="warning" dot>通知</XBadge>
        </div>
      </Card>

      <ChipCard />
      <AvatarCard />
      <AvatarGroupCard />

      <Card name="XCard" wide>
        <div className="grid gap-4 sm:grid-cols-2">
          <XCard
            title="卡片标题"
            description="卡片内容区域，用于承载标题、操作区以及主体信息。"
            extra={<XButton size="sm" variant="ghost">更多</XButton>}
          >
            这是卡片的主体内容。
          </XCard>
          <XCard bordered={false} hoverable size="small" title="无边框卡片" cover={<div className="h-16 bg-gradient-to-r from-primary/10 to-primary/20" />}>
            悬浮试试。
          </XCard>
        </div>
      </Card>

      <Card name="XContainer" wide>
        <XContainer size="md" className="rounded-lg border border-dashed border-default py-4 text-center text-sm text-dimmed">
          内容被居中约束在容器内（md = 1024px）
        </XContainer>
      </Card>

      <Card name="XIcon">
        <div className="flex flex-wrap items-center gap-4">
          {(["house", "user", "search", "bell", "star", "plus", "check", "trash"] as const).map((name) => (
            <XIcon key={name} name={name} size="lg" />
          ))}
          <XIcon name="circle-check" size="lg" color="#52c41a" />
          <XIcon name="circle-alert" size="lg" color="#faad14" />
        </div>
      </Card>

      <Card name="XKbd">
        <div className="flex flex-wrap items-center gap-3">
          <XKbd variant="outline" value="Ctrl" />
          <XKbd variant="outline" value="K" />
          <XKbd variant="solid" color="neutral" value="↵" />
        </div>
      </Card>

      <Card name="XSeparator">
        <div className="flex w-full flex-col gap-3">
          <XSeparator />
          <XSeparator type="dashed" color="primary" />
          <div className="flex h-6 items-center gap-3 text-sm">
            <span>内容 A</span>
            <XSeparator orientation="vertical" />
            <span>内容 B</span>
          </div>
        </div>
      </Card>

      <SkeletonCard />
    </Section>
  );
}

function ChipCard() {
  const [show, setShow] = useState(true);

  return (
    <Card name="XChip">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <XChip standalone text="primary" />
          <XChip standalone color="success" text="success" />
          <XChip standalone color="warning" text="warning" />
          <XChip standalone color="error" closable text="error" />
        </div>
        <div className="flex items-center gap-3">
          <XButton size="xs" variant="soft" color="neutral" onClick={() => setShow(!show)}>
            {show ? "隐藏" : "显示"}角标
          </XButton>
          <XChip standalone show={show} color="primary" text="5" />
        </div>
      </div>
    </Card>
  );
}

function AvatarCard() {
  return (
    <Card name="XAvatar">
      <div className="flex flex-wrap items-center gap-4">
        <XAvatar>U</XAvatar>
        <XAvatar shape="square" size="lg">A</XAvatar>
        <XAvatar size="xs">B</XAvatar>
        <XAvatar size="xl" icon={<XIcon name="user" size="lg" />} />
      </div>
    </Card>
  );
}

function AvatarGroupCard() {
  return (
    <Card name="XAvatarGroup">
      <XAvatarGroup max={4}>
        <XAvatar text="A" />
        <XAvatar text="B" />
        <XAvatar text="C" />
        <XAvatar text="D" />
        <XAvatar text="E" />
      </XAvatarGroup>
    </Card>
  );
}

function SkeletonCard() {
  const [loading, setLoading] = useState(true);

  return (
    <Card name="XSkeleton">
      <div className="flex flex-col gap-3">
        <XSkeleton variant="text" width="60%" />
        <div className="flex items-center gap-3">
          <XSkeleton variant="circle" />
          <XSkeleton variant="rect" width="10rem" height="2rem" />
        </div>
        <XSkeleton loading={loading} variant="rect" height="2.5rem">
          <div className="flex h-10 items-center justify-center rounded-md bg-primary/10 text-sm text-primary">内容已就绪</div>
        </XSkeleton>
        <XButton size="sm" variant="soft" color="neutral" onClick={() => setLoading(!loading)}>
          切换 loading（当前：{String(loading)}）
        </XButton>
      </div>
    </Card>
  );
}

/* 表单：input / textarea / checkbox / radio-group / switch / input-number / input-rating / input-tags / input-date / input-time / color-picker / pin-input / file-upload / form / form-field / field-group / select-menu / input-menu / listbox / slider */
function FormsSection() {
  return (
    <Section title="表单 Forms" count={20}>
      <InputCard />
      <TextareaCard />
      <CheckboxCard />
      <RadioGroupCard />
      <SwitchCard />
      <InputNumberCard />
      <InputRatingCard />
      <InputTagsCard />
      <InputDateCard />
      <InputTimeCard />
      <ColorPickerCard />
      <PinInputCard />
      <FileUploadCard />
      <FormCard />
      <FormFieldCard />
      <FieldGroupCard />
      <SelectMenuCard />
      <InputMenuCard />
      <ListboxCard />
      <SliderCard />
    </Section>
  );
}

function InputCard() {
  const [value, setValue] = useState("");

  return (
    <Card name="XInput">
      <div className="flex flex-col gap-3">
        <XInput value={value} onChange={(event) => setValue(event.target.value)} placeholder="请输入内容（受控）" />
        <XInput placeholder="搜索" leading={<XIcon name="search" size="sm" />} />
        <XInput size="sm" placeholder="小尺寸输入框" />
        <span className="text-xs text-dimmed">输入内容：{value || "空"}</span>
      </div>
    </Card>
  );
}

function TextareaCard() {
  return (
    <Card name="XTextarea">
      <div className="flex flex-col gap-3">
        <XTextarea placeholder="Textarea（md）" />
        <XTextarea size="sm" placeholder="Textarea（sm）" />
      </div>
    </Card>
  );
}

function CheckboxCard() {
  const [checked, setChecked] = useState(true);

  return (
    <Card name="XCheckbox">
      <div className="flex flex-wrap items-center gap-6">
        <XCheckbox checked={checked} onCheckedChange={setChecked} label="多选框" />
        <XCheckbox indeterminate label="半选状态" />
        <XCheckbox disabled label="禁用状态" />
      </div>
    </Card>
  );
}

function RadioGroupCard() {
  const [plan, setPlan] = useState<XRadioGroupValue>("standard");
  const plans = [
    { value: "basic", label: "基础版", description: "个人使用" },
    { value: "standard", label: "标准版", description: "小团队推荐" },
    { value: "pro", label: "专业版", description: "企业级功能" },
  ];

  return (
    <Card name="XRadioGroup">
      <XRadioGroup value={plan} onValueChange={setPlan} options={plans} legend="订阅方案" orientation="horizontal" />
    </Card>
  );
}

function SwitchCard() {
  const [enabled, setEnabled] = useState(true);

  return (
    <Card name="XSwitch">
      <div className="flex flex-wrap items-center gap-6">
        <XSwitch checked={enabled} onCheckedChange={setEnabled} label="开启通知" />
        <XSwitch checkedChildren="开" unCheckedChildren="关" label="显示文字" />
        <XSwitch disabled label="禁用状态" />
      </div>
    </Card>
  );
}

function InputNumberCard() {
  const [count, setCount] = useState(5);

  return (
    <Card name="XInputNumber">
      <div className="flex flex-wrap items-center gap-4">
        <XInputNumber value={count} onChange={setCount} min={1} max={10} />
        <XInputNumber step={5} placeholder="步长 5" />
        <span className="text-sm text-dimmed">当前值：{count}</span>
      </div>
    </Card>
  );
}

function InputRatingCard() {
  const [rating, setRating] = useState(3);

  return (
    <Card name="XInputRating">
      <div className="flex items-center gap-4">
        <XInputRating value={rating} onChange={setRating} />
        <span className="text-sm text-dimmed">当前评分：{rating}</span>
      </div>
    </Card>
  );
}

function InputTagsCard() {
  return (
    <Card name="XInputTags">
      <div className="flex flex-col gap-3">
        <XInputTags defaultValue={["Vue", "Nuxt"]} />
      </div>
    </Card>
  );
}

function InputDateCard() {
  const [date, setDate] = useState("2025-06-15");

  return (
    <Card name="XInputDate">
      <div className="flex flex-wrap items-center gap-4">
        <XInputDate value={date} onChange={(next) => setDate(next as string)} />
        <span className="text-xs text-dimmed">当前日期：{date}</span>
      </div>
    </Card>
  );
}

function InputTimeCard() {
  const [time, setTime] = useState("14:30");

  return (
    <Card name="XInputTime">
      <div className="flex flex-wrap items-center gap-4">
        <XInputTime value={time} onChange={(next) => setTime(next as string)} />
        <span className="text-xs text-dimmed">当前时间：{time}</span>
      </div>
    </Card>
  );
}

function ColorPickerCard() {
  const [color, setColor] = useState("#1677ff");

  return (
    <Card name="XColorPicker">
      <div className="flex flex-col gap-3">
        <XColorPicker value={color} onChange={setColor} />
        <p className="text-xs text-dimmed">当前值：{color}</p>
      </div>
    </Card>
  );
}

function PinInputCard() {
  const [pin, setPin] = useState("");

  return (
    <Card name="XPinInput">
      <div className="flex flex-col gap-3">
        <XPinInput value={pin} onChange={setPin} />
        <p className="text-xs text-dimmed">当前值：{pin || "空"}</p>
      </div>
    </Card>
  );
}

function FileUploadCard() {
  const [file, setFile] = useState<XFileUploadFiles>(null);

  return (
    <Card name="XFileUpload">
      <div className="flex flex-col gap-3">
        <XFileUpload
          value={file}
          onChange={setFile}
          label="拖拽文件到此处，或点击上传"
          description="支持任意格式，单文件"
        />
        {file && !Array.isArray(file) && <p className="text-xs text-dimmed">已选择：{file.name}</p>}
      </div>
    </Card>
  );
}

function FormCard() {
  const [submitted, setSubmitted] = useState("");
  const [Form, formApi] = useXForm({
    defaultValues: { email: "" },
    rules: {
      email: [{ required: true, message: "邮箱不能为空" }],
    },
  });

  return (
    <Card name="XForm">
      <div className="flex flex-col gap-3">
        <Form onSubmit={(values) => setSubmitted(JSON.stringify(values))}>
          <XFormField name="email" label="邮箱" required>
            <XInput
              placeholder="you@example.com"
              value={(formApi.values.email as string) ?? ""}
              onChange={(event) => formApi.setValue("email", event.target.value)}
            />
          </XFormField>
          <div className="flex items-center gap-3">
            <XButton type="submit" size="sm">提交</XButton>
            <XButton type="button" size="sm" variant="outline" color="neutral" onClick={() => formApi.reset()}>
              重置
            </XButton>
          </div>
        </Form>
        {submitted && <p className="text-xs text-success/75">提交数据：{submitted}</p>}
      </div>
    </Card>
  );
}

function FormFieldCard() {
  return (
    <Card name="XFormField">
      <XForm className="flex flex-col gap-4">
        <XFormField name="password" label="密码" hint="8-20 位，含大小写字母与数字" required>
          <XInput placeholder="请输入密码" type="password" />
        </XFormField>
        <XFormField name="phone" label="手机号" hint="用于接收订单通知">
          <XInput placeholder="请输入手机号" />
        </XFormField>
      </XForm>
    </Card>
  );
}

function FieldGroupCard() {
  return (
    <Card name="XFieldGroup">
      <XForm className="gap-2">
        <XFieldGroup>
          <XFormField name="province" label="省份" className="flex-1">
            <XInput placeholder="省份" />
          </XFormField>
          <XFormField name="city" label="城市" className="flex-1">
            <XInput placeholder="城市" />
          </XFormField>
        </XFieldGroup>
      </XForm>
    </Card>
  );
}

function SelectMenuCard() {
  const [selected, setSelected] = useState("apple");
  const options = [
    { label: "苹果", value: "apple" },
    { label: "香蕉", value: "banana" },
    { label: "橙子", value: "orange" },
  ];

  return (
    <Card name="XSelectMenu">
      <div className="flex flex-col gap-3">
        <XSelectMenu items={options} valueKey="value" value={selected} onValueChange={(value) => setSelected(String(value))} />
        <XSelectMenu items={options} valueKey="value" searchInput placeholder="可搜索" value={selected} onValueChange={(value) => setSelected(String(value))} />
        <span className="text-xs text-dimmed">当前选择：{selected}</span>
      </div>
    </Card>
  );
}

function InputMenuCard() {
  const [selected, setSelected] = useState("");
  const cities = [
    { label: "上海", value: "sh" },
    { label: "北京", value: "bj" },
    { label: "广州", value: "gz" },
  ];

  return (
    <Card name="XInputMenu">
      <div className="flex flex-col gap-3">
        <XInputMenu items={cities} valueKey="value" value={selected} onValueChange={(value) => setSelected(String(value))} />
        <span className="text-xs text-dimmed">当前选择：{selected || "—"}</span>
      </div>
    </Card>
  );
}

function ListboxCard() {
  const [selected, setSelected] = useState("zh");
  const languages = [
    { key: "zh", label: "简体中文" },
    { key: "en", label: "English" },
    { key: "ja", label: "日本語" },
  ];

  return (
    <Card name="XListbox">
      <XListbox items={languages} valueKey="key" value={selected} onValueChange={(value) => setSelected(String(value))} />
    </Card>
  );
}

function SliderCard() {
  const [value, setValue] = useState(50);

  return (
    <Card name="XSlider">
      <div className="flex flex-col gap-4">
        <XSlider value={value} onValueChange={(next) => setValue(next as number)} />
        <XSlider value={value} onValueChange={(next) => setValue(next as number)} size="lg" />
        <span className="text-xs text-dimmed">当前值：{value}</span>
      </div>
    </Card>
  );
}

/* 导航：link / breadcrumb / tabs / navigation-menu / pagination / stepper / command-palette */
function NavigationSection() {
  return (
    <Section title="导航 Navigation" count={7}>
      <Card name="XLink">
        <div className="flex flex-wrap items-center gap-6">
          <XLink to="/docs">主色链接</XLink>
          <XLink to="/examples" color="secondary">次级链接</XLink>
          <XLink to="/about" color="neutral">中性链接</XLink>
        </div>
      </Card>

      <Card name="XBreadcrumb">
        <XBreadcrumb
          items={[
            { title: "首页", href: "/" },
            { title: "组件", href: "/components" },
            { title: "面包屑" },
          ]}
        />
      </Card>

      <TabsCard />

      <Card name="XNavigationMenu" wide>
        <XNavigationMenu
          orientation="horizontal"
          arrow
          items={[
            { key: "home", label: "首页", icon: "house" },
            {
              key: "products",
              label: "产品",
              icon: "package",
              children: [
                { key: "editor", label: "编辑器", icon: "pen", description: "富文本编辑组件" },
                { key: "charts", label: "图表库", icon: "chart-bar", description: "数据可视化图表" },
              ],
            },
            {
              key: "docs",
              label: "文档",
              children: [
                { key: "guide", label: "使用指南", description: "快速上手教程" },
                { key: "api", label: "API 参考", description: "全部组件属性" },
              ],
            },
            { key: "blog", label: "博客", target: "_blank" },
          ]}
        />
      </Card>

      <PaginationCard />
      <StepperCard />
      <CommandPaletteCard />
    </Section>
  );
}

function TabsCard() {
  const [key, setKey] = useState<string | number>("a");

  return (
    <Card name="XTabs">
      <XTabs
        value={key}
        onValueChange={setKey}
        variant="pill"
        items={[
          { value: "a", label: "标签一", content: "标签一的内容。" },
          { value: "b", label: "标签二", content: "标签二的内容。" },
          { value: "c", label: "标签三", content: "标签三的内容。" },
        ]}
      />
    </Card>
  );
}

function PaginationCard() {
  const [page, setPage] = useState(5);

  return (
    <Card name="XPagination">
      <div className="flex flex-wrap items-center gap-4">
        <XPagination page={page} total={200} itemsPerPage={10} showEdges onPageChange={setPage} />
        <span className="text-xs text-dimmed">当前第 {page} 页</span>
      </div>
    </Card>
  );
}

function StepperCard() {
  const [stepKey, setStepKey] = useState<string | number>("basic");
  const stepperRef = useRef<XStepperApi>(null);
  const steps = [
    { value: "basic", title: "基础信息", content: "这里是基础信息表单。" },
    { value: "payment", title: "支付方式", content: "这里是支付方式选择。" },
    { value: "confirm", title: "确认提交", content: "这里是订单确认面板。" },
  ];

  return (
    <Card name="XStepper">
      <div className="flex flex-col gap-3">
        <XStepper ref={stepperRef} value={stepKey} onValueChange={setStepKey} items={steps} color="success" size="md" />
        <div className="flex items-center gap-2">
          <XButton size="xs" variant="outline" color="neutral" onClick={() => stepperRef.current?.prev()}>
            上一步
          </XButton>
          <XButton size="xs" onClick={() => stepperRef.current?.next()}>
            下一步
          </XButton>
        </div>
      </div>
    </Card>
  );
}

function CommandPaletteCard() {
  const [open, setOpen] = useState(false);
  const commands = [
    { name: "新建文档", hint: "创建空白文档", kbds: ["⌘", "N"] },
    { name: "添加用户", hint: "邀请团队成员", kbds: ["⌘", "U"] },
    { name: "打开设置", hint: "修改应用偏好", kbds: ["⌘", ","] },
  ];

  return (
    <Card name="XCommandPalette">
      <div className="flex flex-wrap items-center gap-3">
        <XButton variant="soft" color="info" onClick={() => setOpen(true)}>
          打开命令面板
        </XButton>
        <XCommandPalette
          open={open}
          onOpenChange={setOpen}
          close
          labelKey="name"
          descriptionKey="hint"
          groups={[{ id: "ops", label: "操作", items: commands }]}
        />
      </div>
    </Card>
  );
}

/* 浮层：modal / drawer / slideover / tooltip / popover / context-menu / dropdown-menu / toast */
function OverlaysSection() {
  return (
    <Section title="浮层 Overlays" count={8}>
      <ModalCard />
      <DrawerCard />
      <SlideoverCard />

      <Card name="XTooltip">
        <div className="flex flex-wrap items-center gap-3">
          <XTooltip text="基础提示">
            <XButton variant="outline" color="neutral">悬停查看</XButton>
          </XTooltip>
          <XTooltip text="带箭头提示" arrow>
            <XButton variant="outline" color="neutral">带箭头</XButton>
          </XTooltip>
        </div>
      </Card>

      <Card name="XPopover">
        <div className="flex flex-wrap items-center gap-3">
          <XPopover mode="click" content="点击触发的气泡说明文字。">
            <XButton variant="outline" color="neutral">点击查看</XButton>
          </XPopover>
          <XPopover mode="hover" content="悬停即显示气泡。">
            <XButton variant="outline" color="neutral">悬停查看</XButton>
          </XPopover>
        </div>
      </Card>

      <Card name="XContextMenu">
        <XContextMenu
          items={[
            { type: "label", label: "编辑操作" },
            { key: "copy", label: "复制", icon: "copy" },
            { key: "paste", label: "粘贴", icon: "clipboard-paste" },
            { key: "sep", type: "separator" },
            { key: "delete", label: "删除", icon: "trash", color: "error" },
          ]}
        >
          <span className="rounded-lg border border-dashed border-default px-6 py-3 text-sm text-dimmed">在此区域右键</span>
        </XContextMenu>
      </Card>

      <Card name="XDropdownMenu">
        <XDropdownMenu
          items={[
            { key: "new", label: "新建文件", icon: "file-plus" },
            { key: "open", label: "打开文件", icon: "folder-open" },
            { key: "sep", type: "separator" },
            { key: "delete", label: "删除", icon: "trash", color: "error" },
          ]}
        />
      </Card>

      <ToastCard />
    </Section>
  );
}

function ModalCard() {
  const [open, setOpen] = useState(false);

  return (
    <Card name="XModal">
      <div className="flex flex-wrap items-center gap-3">
        <XButton variant="soft" onClick={() => setOpen(true)}>打开对话框</XButton>
        <XModal
          open={open}
          onOpenChange={setOpen}
          title="对话框标题"
          description="这是对话框的辅助说明文字。"
          body={<p>这是对话框的正文内容，用户可以阅读后在底部确认或取消。</p>}
          footer={
            <>
              <XButton color="neutral" variant="ghost" onClick={() => setOpen(false)}>取消</XButton>
              <XButton onClick={() => setOpen(false)}>确认</XButton>
            </>
          }
        />
      </div>
    </Card>
  );
}

function DrawerCard() {
  const [open, setOpen] = useState(false);

  return (
    <Card name="XDrawer">
      <div className="flex flex-wrap items-center gap-3">
        <XButton variant="soft" onClick={() => setOpen(true)}>打开抽屉</XButton>
        <XDrawer
          open={open}
          onOpenChange={setOpen}
          title="抽屉标题"
          description="direction 为 right 时从右侧滑出。"
          body={<p>抽屉内容区域，用于展示详情或表单。</p>}
          footer={<XButton onClick={() => setOpen(false)}>关闭</XButton>}
        />
      </div>
    </Card>
  );
}

function SlideoverCard() {
  const [open, setOpen] = useState(false);

  return (
    <Card name="XSlideover">
      <div className="flex flex-wrap items-center gap-3">
        <XButton variant="soft" onClick={() => setOpen(true)}>打开侧滑面板</XButton>
        <XSlideover
          open={open}
          onOpenChange={setOpen}
          title="侧滑面板"
          description="side 为 right 时从右侧滑入。"
          body={
            <div className="flex flex-col gap-2">
              <XLink to="/">首页</XLink>
              <XLink to="/about">关于</XLink>
              <XLink to="/contact">联系</XLink>
            </div>
          }
          footer={<XButton onClick={() => setOpen(false)}>关闭</XButton>}
        />
      </div>
    </Card>
  );
}

function ToastCard() {
  return (
    <Card name="XToast">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <XButton
            variant="soft"
            color="success"
            onClick={() => toast.show({ title: "操作成功", description: "数据已保存。", color: "success", icon: "circle-check" })}
          >
            成功通知
          </XButton>
          <XButton
            variant="soft"
            color="error"
            onClick={() => toast.show({ title: "操作失败", description: "请稍后重试。", color: "error", icon: "circle-alert" })}
          >
            失败通知
          </XButton>
        </div>
        <XToast title="静态展示" description="XToast 组件静态渲染示例。" color="primary" icon="info" />
        <XToaster />
      </div>
    </Card>
  );
}

/* 内容：table / alert / progress / accordion / collapsible / scroll-area / carousel / splitter */
function ContentSection() {
  return (
    <Section title="内容 Content" count={8}>
      <TableCard />
      <AlertCard />
      <ProgressCard />
      <AccordionCard />
      <CollapsibleCard />
      <ScrollAreaCard />
      <CarouselCard />
      <SplitterCard />
    </Section>
  );
}

function TableCard() {
  const columns = [
    { accessorKey: "name", header: "姓名" },
    { accessorKey: "age", header: "年龄" },
    { accessorKey: "city", header: "城市" },
  ];
  const data = [
    { key: "1", name: "张三", age: 32, city: "杭州" },
    { key: "2", name: "李四", age: 28, city: "成都" },
    { key: "3", name: "王五", age: 45, city: "北京" },
    { key: "4", name: "赵六", age: 24, city: "上海" },
  ];

  return (
    <Card name="XTable" wide>
      <XTable columns={columns} data={data} caption="员工花名册" sticky />
    </Card>
  );
}

function AlertCard() {
  const [open, setOpen] = useState(true);

  return (
    <Card name="XAlert">
      <div className="flex flex-col gap-3">
        <XAlert color="success" icon="circle-check" title="部署完成" description="生产环境已更新到最新版本。" />
        {open && (
          <XAlert open={open} onOpenChange={setOpen} color="warning" close title="磁盘空间不足" description="点击右侧关闭按钮隐藏。" />
        )}
      </div>
    </Card>
  );
}

function ProgressCard() {
  const [value, setValue] = useState(45);

  return (
    <Card name="XProgress">
      <div className="flex flex-col gap-3">
        <XProgress value={value} />
        <XProgress value={value} status color="success" />
        <XButton size="sm" variant="soft" color="neutral" onClick={() => setValue((current) => (current + 15) % 100)}>
          更新进度
        </XButton>
      </div>
    </Card>
  );
}

function AccordionCard() {
  return (
    <Card name="XAccordion">
      <XAccordion
        items={[
          { label: "什么是 ui-kit？", content: "基于 Tailwind 与 Base UI 的组件库，提供完整的属性与 API。" },
          { label: "如何安装？", content: "通过 CLI 添加组件即可使用。" },
          { label: "支持哪些框架？", content: "同时支持 Vue 3 与 React。", disabled: true },
        ]}
        defaultValue={["0"]}
        className="w-full"
      />
    </Card>
  );
}

function CollapsibleCard() {
  return (
    <Card name="XCollapsible">
      <div className="flex flex-col gap-3">
        <XCollapsible defaultOpen trigger={<XButton size="sm" variant="soft" color="neutral">展开详情（默认展开）</XButton>}>
          点击触发器可收起或展开的内容区域。
        </XCollapsible>
        <XCollapsible>点击「展开详情」展开的内容区域，再次点击收起。</XCollapsible>
      </div>
    </Card>
  );
}

function ScrollAreaCard() {
  const rows = Array.from({ length: 12 }, (_, index) => ({ id: index, text: `滚动内容第 ${index + 1} 行` }));

  return (
    <Card name="XScrollArea">
      <XScrollArea items={rows} height={160} className="w-full rounded-lg border border-default p-3">
        {({ item }) => <div className="py-1 text-sm">{String(item.text)}</div>}
      </XScrollArea>
    </Card>
  );
}

function CarouselCard() {
  const slides = [{ key: "1" }, { key: "2" }, { key: "3" }, { key: "4" }];

  return (
    <Card name="XCarousel">
      <XCarousel items={slides}>
        {({ item }) => (
          <div className="flex h-24 items-center justify-center rounded-lg bg-primary/10 text-sm text-primary">Slide {item.key}</div>
        )}
      </XCarousel>
    </Card>
  );
}

function SplitterCard() {
  return (
    <Card name="XSplitter" wide>
      <div className="h-64 w-full">
        <XSplitter
          items={[
            {
              id: "left",
              defaultSize: 30,
              minSize: 15,
              content: <div className="flex h-full items-center justify-center p-4 text-sm">左侧面板</div>,
            },
            {
              id: "right",
              minSize: 20,
              content: <div className="flex h-full items-center justify-center p-4 text-sm">右侧面板</div>,
            },
          ]}
          className="h-full"
        />
      </div>
    </Card>
  );
}

/* 页面入口：顶部栏（含深色模式切换）+ 五个分组 */
export default function App() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDark(document.documentElement.classList.contains("dark"));
  };

  return (
    <div className="min-h-screen bg-background text-default">
      <header className="sticky top-0 z-40 border-b border-default bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div>
            <h1 className="text-lg font-semibold text-highlighted">组件总览</h1>
            <p className="text-sm text-dimmed">全部 55 个组件的最小可用展示</p>
          </div>
          <XButton variant="outline" color="neutral" onClick={toggleDark} leading={<XIcon name={dark ? "sun" : "moon"} size="sm" />}>
            {dark ? "浅色模式" : "深色模式"}
          </XButton>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-8">
        <LayoutSection />
        <FormsSection />
        <NavigationSection />
        <OverlaysSection />
        <ContentSection />
      </main>
    </div>
  );
}
