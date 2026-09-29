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
