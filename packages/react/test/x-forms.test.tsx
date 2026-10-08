import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { XCheckbox } from "@/components/kit/x-checkbox";
import { XColorPicker } from "@/components/kit/x-color-picker";
import { XFieldGroup } from "@/components/kit/x-field-group";
import { XFileUpload } from "@/components/kit/x-file-upload";
import { XForm } from "@/components/kit/x-form";
import { XFormField } from "@/components/kit/x-form-field";
import { XInput } from "@/components/kit/x-input";
import { XInputDate } from "@/components/kit/x-input-date";
import { XInputMenu } from "@/components/kit/x-input-menu";
import { XInputNumber } from "@/components/kit/x-input-number";
import { XInputRating } from "@/components/kit/x-input-rating";
import { XInputTags } from "@/components/kit/x-input-tags";
import { XInputTime } from "@/components/kit/x-input-time";
import { XListbox } from "@/components/kit/x-listbox";
import { XPagination } from "@/components/kit/x-pagination";
import { XPinInput } from "@/components/kit/x-pin-input";
import { XRadioGroup } from "@/components/kit/x-radio-group";
import { XSelectMenu } from "@/components/kit/x-select-menu";
import { XSlider } from "@/components/kit/x-slider";
import { XSwitch } from "@/components/kit/x-switch";
import { XTextarea } from "@/components/kit/x-textarea";

describe("XInput", () => {
  it("默认 md 尺寸", () => {
    render(<XInput placeholder="请输入" />);
    expect(screen.getByPlaceholderText("请输入")).toHaveClass("h-9");
  });

  it("error 状态边框", () => {
    render(<XInput status="error" />);
    expect(screen.getByRole("textbox")).toHaveClass("border-error-6");
  });

  it("前缀与后缀图标", () => {
    render(<XInput prefix={<span data-testid="prefix" />} suffix={<span data-testid="suffix" />} />);
    expect(screen.getByTestId("prefix")).toBeInTheDocument();
    expect(screen.getByTestId("suffix")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveClass("pl-9", "pr-9");
  });

  it("前后置标签 addon", () => {
    render(<XInput addonBefore="https://" addonAfter=".com" />);
    expect(screen.getByText("https://")).toBeInTheDocument();
    expect(screen.getByText(".com")).toBeInTheDocument();
  });
});

describe("XTextarea", () => {
  it("默认 3 行", () => {
    render(<XTextarea />);
    expect(screen.getByRole("textbox")).toHaveAttribute("rows", "3");
  });

  it("warning 状态", () => {
    render(<XTextarea status="warning" />);
    expect(screen.getByRole("textbox")).toHaveClass("border-warning-6");
  });
});

describe("XCheckbox", () => {
  it("label 渲染", () => {
    render(<XCheckbox label="选项 A" />);
    expect(screen.getByText("选项 A")).toBeInTheDocument();
  });

  it("indeterminate 状态", () => {
    render(<XCheckbox indeterminate />);
    expect(screen.getByRole("checkbox")).toHaveAttribute("data-indeterminate");
  });
});

describe("XRadioGroup", () => {
  const options = [
    { value: "a", label: "选项 A" },
    { value: "b", label: "选项 B" },
  ];

  it("渲染选项", () => {
    render(<XRadioGroup options={options} />);
    expect(screen.getByText("选项 A")).toBeInTheDocument();
    expect(screen.getByText("选项 B")).toBeInTheDocument();
    expect(screen.getAllByRole("radio")).toHaveLength(2);
  });

  it("按钮样式渲染", () => {
    render(<XRadioGroup variant="button" options={options} />);
    expect(screen.getAllByRole("radio")).toHaveLength(2);
  });
});

describe("XSwitch", () => {
  it("选中时显示 checkedChildren", () => {
    render(<XSwitch checked checkedChildren="开" unCheckedChildren="关" />);
    expect(screen.getByText("开")).toBeInTheDocument();
  });

  it("small 尺寸", () => {
    render(<XSwitch size="small" />);
    expect(screen.getByRole("switch")).toHaveAttribute("data-size", "sm");
  });
});

describe("XSelectMenu", () => {
  const options = [
    { label: "苹果", value: "apple" },
    { label: "香蕉", value: "banana" },
  ];

  it("默认显示占位文字", () => {
    render(<XSelectMenu options={options} />);
    expect(screen.getByRole("button")).toHaveTextContent("请选择");
  });

  it("选择选项后回填", async () => {
    render(<XSelectMenu options={options} />);
    await userEvent.click(screen.getByRole("button"));
    await userEvent.click(screen.getByText("苹果"));
    expect(screen.getByRole("button")).toHaveTextContent("苹果");
  });

  it("搜索过滤", async () => {
    render(<XSelectMenu options={options} showSearch />);
    await userEvent.click(screen.getByRole("button"));
    await userEvent.type(screen.getByPlaceholderText("输入关键字搜索"), "香");
    expect(screen.getByText("香蕉")).toBeInTheDocument();
    expect(screen.queryByText("苹果")).not.toBeInTheDocument();
  });
});

describe("XInputMenu", () => {
  const items = [
    { label: "上海", value: "sh" },
    { label: "北京", value: "bj" },
  ];

  it("选中后回填并触发 onSelect", async () => {
    const onSelect = vi.fn();
    render(<XInputMenu items={items} onSelect={onSelect} />);
    await userEvent.click(screen.getByRole("textbox"));
    await userEvent.click(screen.getByText("上海"));
    expect(screen.getByRole("textbox")).toHaveValue("上海");
    expect(onSelect).toHaveBeenCalledWith({ label: "上海", value: "sh" });
  });
});

describe("XInputNumber", () => {
  it("点击加号步进", async () => {
    render(<XInputNumber defaultValue={5} />);
    await userEvent.click(screen.getByRole("button", { name: "increment" }));
    expect(screen.getByRole("spinbutton")).toHaveValue(6);
  });

  it("达到 max 后加号禁用", () => {
    render(<XInputNumber value={10} max={10} />);
    expect(screen.getByRole("button", { name: "increment" })).toBeDisabled();
  });
});

describe("XInputTags", () => {
  it("回车添加标签", async () => {
    render(<XInputTags placeholder="输入后回车添加…" />);
    await userEvent.type(screen.getByPlaceholderText("输入后回车添加…"), "Vue{Enter}");
    expect(screen.getByText("Vue")).toBeInTheDocument();
  });

  it("点击关闭移除标签", async () => {
    render(<XInputTags defaultValue={["Nuxt"]} />);
    await userEvent.click(screen.getByRole("button", { name: "close" }));
    expect(screen.queryByText("Nuxt")).not.toBeInTheDocument();
  });
});

describe("XInputRating", () => {
  it("点击第三颗星评分为 3", async () => {
    const onChange = vi.fn();
    render(<XInputRating onChange={onChange} />);
    await userEvent.click(screen.getByRole("button", { name: "3 星" }));
    expect(onChange).toHaveBeenCalledWith(3);
  });
});

describe("XColorPicker", () => {
  it("点击预设色板触发 onChange", async () => {
    const onChange = vi.fn();
    render(<XColorPicker onChange={onChange} />);
    await userEvent.click(screen.getByRole("button", { name: "选择颜色" }));
    await userEvent.click(screen.getByRole("button", { name: "#00DC82" }));
    expect(onChange).toHaveBeenCalledWith("#00DC82");
  });
});

describe("XPinInput", () => {
  it("渲染 6 个输入槽", () => {
    const { container } = render(<XPinInput />);
    expect(container.querySelectorAll("[data-slot='input-otp-slot']")).toHaveLength(6);
  });
});

describe("XInputDate", () => {
  it("显示绑定日期", () => {
    render(<XInputDate value="2025-06-15" />);
    expect(screen.getByDisplayValue("2025-06-15")).toBeInTheDocument();
  });
});

describe("XInputTime", () => {
  it("显示绑定时间", () => {
    render(<XInputTime value="14:30" />);
    expect(screen.getByDisplayValue("14:30")).toBeInTheDocument();
  });
});

describe("XSlider", () => {
  it("渲染滑块", () => {
    render(<XSlider defaultValue={[50]} />);
    expect(screen.getByRole("group").closest("[data-slot=slider]")).toBeInTheDocument();
  });
});

describe("XFileUpload", () => {
  it("默认提示文案", () => {
    render(<XFileUpload />);
    expect(screen.getByText("拖拽文件到此处，或点击上传")).toBeInTheDocument();
  });
});


describe("XForm / XFormField", () => {
  it("校验失败时 XFormField 展示错误信息", async () => {
    const onError = vi.fn();
    render(
      <XForm
        rules={{ email: [{ required: true, message: "邮箱不能为空" }] }}
        onError={onError}
      >
        <XFormField name="email" label="邮箱">
          <XInput data-testid="email-input" placeholder="邮箱" />
        </XFormField>
        <button type="submit">提交</button>
      </XForm>,
    );
    await userEvent.click(screen.getByRole("button", { name: "提交" }));
    expect(onError).toHaveBeenCalledWith({ email: "邮箱不能为空" });
    expect(screen.getByRole("alert")).toHaveTextContent("邮箱不能为空");
  });

  it("校验通过触发 onSubmit", async () => {
    const onSubmit = vi.fn();
    render(
      <XForm
        defaultValues={{ email: "you@example.com" }}
        rules={{ email: [{ required: true, message: "邮箱不能为空" }] }}
        onSubmit={onSubmit}
      >
        <button type="submit">提交</button>
      </XForm>,
    );
    await userEvent.click(screen.getByRole("button", { name: "提交" }));
    expect(onSubmit).toHaveBeenCalledWith({ email: "you@example.com" });
  });

  it("XFormField 展示描述与必填标记", () => {
    render(
      <XForm>
        <XFormField label="用户名" description="请输入用户名" required>
          <XInput />
        </XFormField>
      </XForm>,
    );
    expect(screen.getByText("用户名")).toBeInTheDocument();
    expect(screen.getByText("请输入用户名")).toBeInTheDocument();
    expect(screen.getByText("*")).toBeInTheDocument();
  });
});

describe("XFieldGroup", () => {
  it("默认同行排列", () => {
    render(
      <XFieldGroup>
        <XInput />
        <XInput />
      </XFieldGroup>,
    );
    const group = screen.getAllByRole("textbox")[0]?.parentElement;
    expect(group).toHaveClass("flex");
  });
});

describe("XFormField hint", () => {
  it("渲染标签右侧的提示文案", () => {
    render(
      <XForm>
        <XFormField name="password" label="密码" hint="8-20 位，含大小写字母">
          <XInput />
        </XFormField>
      </XForm>,
    );
    expect(screen.getByText("8-20 位，含大小写字母")).toBeInTheDocument();
  });
});

describe("XInput clearable", () => {
  it("有值时显示清空按钮，点击后清空并触发 onClear", async () => {
    const onClear = vi.fn();
    render(<XInput defaultValue="初始值" clearable onClear={onClear} />);
    await userEvent.click(screen.getByRole("button", { name: "清空" }));
    expect(screen.getByRole("textbox")).toHaveValue("");
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it("无值时、禁用时不显示清空按钮", () => {
    const { rerender } = render(<XInput clearable />);
    expect(screen.queryByRole("button", { name: "清空" })).not.toBeInTheDocument();
    rerender(<XInput defaultValue="值" clearable disabled />);
    expect(screen.queryByRole("button", { name: "清空" })).not.toBeInTheDocument();
  });
});

describe("XListbox 搜索与加载", () => {
  const items = [
    { key: "a", label: "苹果" },
    { key: "b", label: "香蕉" },
  ];

  it("filterable 按 label 过滤", async () => {
    render(<XListbox items={items} filterable />);
    await userEvent.type(screen.getByPlaceholderText("搜索…"), "香蕉");
    expect(screen.getByText("香蕉")).toBeInTheDocument();
    expect(screen.queryByText("苹果")).not.toBeInTheDocument();
  });

  it("无匹配时显示 emptyText，loading 时显示加载提示", () => {
    const { rerender } = render(<XListbox items={items} filterable emptyText="没有结果" />);
    expect(screen.getByText("苹果")).toBeInTheDocument();
    rerender(<XListbox items={[]} filterable emptyText="没有结果" />);
    expect(screen.getByText("没有结果")).toBeInTheDocument();
    rerender(<XListbox items={items} loading />);
    expect(screen.getByText("加载中…")).toBeInTheDocument();
  });
});

describe("XSelectMenu clearable", () => {
  const options = [
    { label: "苹果", value: "apple" },
    { label: "香蕉", value: "banana" },
  ];

  it("有选中项时清空为单选的空值", async () => {
    const onChange = vi.fn();
    render(<XSelectMenu options={options} value="apple" clearable onChange={onChange} />);
    await userEvent.click(screen.getByRole("button", { name: "清空" }));
    expect(onChange).toHaveBeenCalledWith("");
  });

  it("多选时清空为空数组", async () => {
    const onChange = vi.fn();
    render(<XSelectMenu options={options} multiple value={["apple"]} clearable onChange={onChange} />);
    await userEvent.click(screen.getByRole("button", { name: "清空" }));
    expect(onChange).toHaveBeenCalledWith([]);
  });
});

describe("XInputMenu createItem", () => {
  const items = [{ label: "苹果", value: "apple" }];

  it("关键字不存在时回车创建新选项", async () => {
    const onCreate = vi.fn();
    const onSelect = vi.fn();
    render(<XInputMenu items={items} createItem onCreate={onCreate} onSelect={onSelect} />);
    await userEvent.type(screen.getByRole("textbox"), "西瓜");
    /* 等关键字状态落到创建行上再回车，避免输入与回车竞争 */
    expect(await screen.findByText('创建 "西瓜"')).toBeInTheDocument();
    await userEvent.keyboard("{Enter}");
    expect(onCreate).toHaveBeenCalledWith("西瓜");
    expect(onSelect).toHaveBeenCalledWith({ label: "西瓜", value: "西瓜" });
  });

  it("候选项同名时不触发创建", async () => {
    const onCreate = vi.fn();
    render(<XInputMenu items={items} createItem onCreate={onCreate} />);
    await userEvent.type(screen.getByRole("textbox"), "苹果");
    await userEvent.keyboard("{Enter}");
    expect(onCreate).not.toHaveBeenCalled();
  });
});

describe("XSwitch 加载态与说明文字", () => {
  it("loading 时阻止交互并标记 aria-busy", () => {
    render(<XSwitch loading label="通知" />);
    const control = screen.getByRole("switch");
    expect(control).toHaveAttribute("aria-disabled", "true");
    expect(control).toHaveAttribute("aria-busy", "true");
    expect(screen.getByText("通知")).toBeInTheDocument();
  });

  it("渲染 description 说明文字", () => {
    render(<XSwitch label="通知" description="开启后接收邮件提醒" />);
    expect(screen.getByText("开启后接收邮件提醒")).toBeInTheDocument();
  });
});

describe("XCheckbox 说明、语义色与尺寸", () => {
  it("渲染 description 与语义色类", () => {
    const { container } = render(<XCheckbox label="协议" description="已阅读并同意" color="success" />);
    expect(screen.getByText("已阅读并同意")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='checkbox']")).toHaveClass(
      "data-checked:bg-success-6",
    );
  });

  it("size 控制控件尺寸", () => {
    const { container } = render(<XCheckbox size="lg" aria-label="选项" />);
    expect(container.querySelector("[data-slot='checkbox']")).toHaveClass("size-5");
  });
});

describe("XTextarea 字数统计", () => {
  it("showCount 显示当前长度与上限", async () => {
    render(<XTextarea showCount maxLength={10} defaultValue="一二" />);
    expect(screen.getByText("2 / 10")).toBeInTheDocument();
    await userEvent.type(screen.getByRole("textbox"), "三");
    expect(screen.getByText("3 / 10")).toBeInTheDocument();
  });

  it("未设置 maxLength 时只显示当前长度", () => {
    render(<XTextarea showCount defaultValue="abc" />);
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("autosize + maxRows 设置最大高度", () => {
    render(<XTextarea autosize maxRows={4} />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveClass("overflow-auto");
    expect(textarea.style.maxHeight).not.toBe("");
  });
});

describe("XFileUpload 受控列表与进度", () => {
  it("受控 files 渲染状态与进度，移除时回调", async () => {
    const onRemove = vi.fn();
    const onFilesChange = vi.fn();
    render(
      <XFileUpload
        files={[{ name: "报告.pdf", size: 2048, status: "uploading", progress: 40 }]}
        onRemove={onRemove}
        onFilesChange={onFilesChange}
      />,
    );
    expect(screen.getByText("报告.pdf")).toBeInTheDocument();
    expect(screen.getByText("40%")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "移除文件" }));
    expect(onRemove).toHaveBeenCalledWith({ name: "报告.pdf", size: 2048, status: "uploading", progress: 40 }, 0);
    expect(onFilesChange).toHaveBeenCalledWith([]);
  });
});

describe("XInputDate / XInputTime 区间模式", () => {
  it("range 时展示开始与结束", () => {
    render(<XInputDate range value={["2025-06-15", "2025-06-20"]} />);
    expect(screen.getByDisplayValue("2025-06-15 → 2025-06-20")).toBeInTheDocument();
  });

  it("非 range 时展示单值", () => {
    render(<XInputDate value="2025-06-15" />);
    expect(screen.getByDisplayValue("2025-06-15")).toBeInTheDocument();
  });

  it("时间区间展示开始与结束", () => {
    render(<XInputTime range value={["09:00", "18:00"]} />);
    expect(screen.getByDisplayValue("09:00 → 18:00")).toBeInTheDocument();
  });
});

describe("XSlider 数值提示与方向", () => {
  it("tooltip 显示当前值", () => {
    render(<XSlider tooltip value={[40]} />);
    expect(screen.getByText("40")).toBeInTheDocument();
  });

  it("vertical 时根容器纵向布局", () => {
    const { container } = render(<XSlider tooltip orientation="vertical" value={[30]} />);
    expect(container.querySelector("[data-orientation='vertical']")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
  });
});

describe("XInputRating 只读与尺寸", () => {
  it("readonly 时标记 aria-readonly 且点击不触发 change", async () => {
    const onChange = vi.fn();
    render(<XInputRating readonly value={3} onChange={onChange} />);
    const group = screen.getByRole("radiogroup", { name: "rating" });
    expect(group).toHaveAttribute("aria-readonly", "true");
    await userEvent.click(screen.getByRole("button", { name: "5 星" }));
    expect(onChange).not.toHaveBeenCalled();
  });

  it("size 控制星星尺寸", () => {
    const { container } = render(<XInputRating size="lg" />);
    expect(container.querySelector("button svg")).toHaveClass("size-6");
  });
});

describe("XPagination 首页末页", () => {
  it("showControls 渲染首页与末页按钮", async () => {
    const onChange = vi.fn();
    render(<XPagination current={3} total={100} pageSize={10} showControls onChange={onChange} />);
    await userEvent.click(screen.getByRole("button", { name: "首页" }));
    expect(onChange).toHaveBeenCalledWith(1, 10);
    await userEvent.click(screen.getByRole("button", { name: "末页" }));
    expect(onChange).toHaveBeenCalledWith(10, 10);
  });
});
