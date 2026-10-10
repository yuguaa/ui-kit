import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { XCheckbox } from "@/components/kit/x-checkbox";
import { XColorPicker } from "@/components/kit/x-color-picker";
import { XFieldGroup } from "@/components/kit/x-field-group";
import { XFileUpload } from "@/components/kit/x-file-upload";
import { useXForm, XForm } from "@/components/kit/x-form";
import { useXFormFieldContext, XFormField } from "@/components/kit/x-form-field";
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
    expect(screen.getByPlaceholderText("请输入")).toHaveClass("h-8");
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
    expect(screen.getByRole("switch")).toHaveClass("h-3.5");
  });
});

describe("XSelectMenu", () => {
  const options = [
    { label: "苹果", value: "apple" },
    { label: "香蕉", value: "banana" },
  ];

  it("默认显示占位文字", () => {
    render(<XSelectMenu items={options} placeholder="请选择" />);
    expect(screen.getByRole("combobox")).toHaveTextContent("请选择");
  });

  it("选择选项后回填", async () => {
    render(<XSelectMenu items={options} />);
    await userEvent.click(screen.getByRole("combobox"));
    await userEvent.click(await screen.findByText("苹果"));
    expect(screen.getByRole("combobox")).toHaveTextContent("苹果");
  });

  it("搜索过滤", async () => {
    render(<XSelectMenu items={options} searchInput />);
    await userEvent.click(screen.getByRole("combobox"));
    await userEvent.type(await screen.findByPlaceholderText("输入关键字搜索"), "香");
    expect(screen.getByText("香蕉")).toBeInTheDocument();
    expect(screen.queryByText("苹果")).not.toBeInTheDocument();
  });

  it("clear 清空按钮位于触发按钮外部并可清空", async () => {
    render(<XSelectMenu items={options} defaultValue="apple" clear />);
    const trigger = screen.getByRole("combobox");
    const clearButton = document.querySelector("[data-slot='trailingClear']");
    expect(clearButton).not.toBeNull();
    /* 清空按钮不能嵌套在 combobox 按钮内部 */
    expect(trigger.querySelector("[data-slot='trailingClear']")).toBeNull();
    expect(trigger.contains(clearButton)).toBe(false);
    await userEvent.click(clearButton as HTMLElement);
    await waitFor(() => {
      expect(document.querySelector("[data-slot='trailingClear']")).toBeNull();
    });
    expect(trigger).toHaveTextContent("");
  });

  it("选中项带勾选图标与选中底色", async () => {
    render(<XSelectMenu items={options} valueKey="value" defaultValue="apple" />);
    await userEvent.click(screen.getByRole("combobox"));
    await waitFor(() => {
      expect(document.querySelectorAll("[data-slot=item]").length).toBeGreaterThan(0);
    });
    const item = [...document.querySelectorAll("[data-slot=item]")].find((entry) => entry.textContent?.includes("苹果")) as HTMLElement;
    expect(item.getAttribute("aria-selected")).toBe("true");
    expect(item.getAttribute("data-selected")).not.toBeNull();
    expect(item.querySelector("[data-slot=itemTrailingIcon]")).not.toBeNull();
  });
});

describe("XInputMenu", () => {
  const items = [
    { label: "上海", value: "sh" },
    { label: "北京", value: "bj" },
  ];

  it("选中后回填并触发 onValueChange", async () => {
    const onValueChange = vi.fn();
    render(<XInputMenu items={items} onValueChange={onValueChange} />);
    await userEvent.click(screen.getByRole("combobox"));
    await userEvent.click(screen.getByText("上海"));
    expect(screen.getByRole("combobox")).toHaveValue("上海");
    expect(onValueChange).toHaveBeenCalledWith({ label: "上海", value: "sh" });
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

  it("maxLength 限制单个标签长度", async () => {
    render(<XInputTags maxLength={3} />);
    await userEvent.type(screen.getByRole("textbox"), "Vueee{Enter}");
    expect(screen.getByText("Vue")).toBeInTheDocument();
    expect(screen.queryByText("Vueee")).not.toBeInTheDocument();
  });

  it("highlight 高亮描边", () => {
    render(<XInputTags highlight color="success" />);
    expect(screen.getByRole("textbox").closest("[data-slot='root']")).toHaveClass("ring-success-6");
  });

  it("ui 插槽类名", () => {
    render(
      <XInputTags
        defaultValue={["Nuxt"]}
        ui={{
          root: "custom-root",
          base: "custom-base",
          item: "custom-item",
          itemText: "custom-itemText",
          itemDelete: "custom-itemDelete",
          itemDeleteIcon: "custom-deleteIcon",
          input: "custom-input",
        }}
      />,
    );
    expect(screen.getByRole("textbox").closest("[data-slot='root']")).toHaveClass("custom-root", "custom-base");
    expect(document.querySelector("[data-slot='item']")).toHaveClass("custom-item");
    expect(document.querySelector("[data-slot='itemText']")).toHaveClass("custom-itemText");
    expect(document.querySelector("[data-slot='itemDelete']")).toHaveClass("custom-itemDelete");
    expect(document.querySelector("[data-slot='itemDeleteIcon']")).toHaveClass("custom-deleteIcon");
    expect(document.querySelector("[data-slot='input']")).toHaveClass("custom-input");
  });

  it("autofocus 挂载后聚焦输入框", async () => {
    render(<XInputTags autofocus autofocusDelay={5} />);
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(document.activeElement).toBe(screen.getByRole("textbox"));
  });

  it("leading / tag 自定义渲染", () => {
    render(
      <XInputTags
        defaultValue={["Nuxt"]}
        leading={<i className="custom-leading">L</i>}
        tag={({ tag, index }) => (
          <em key={index} className="custom-tag">
            {tag}
          </em>
        )}
      />,
    );
    expect(document.querySelector("[data-slot='leading'] .custom-leading")).toBeInTheDocument();
    expect(document.querySelector(".custom-tag")).toHaveTextContent("Nuxt");
    expect(document.querySelector("[data-slot='item']")).not.toBeInTheDocument();
  });

  it("render 替换根元素", () => {
    render(<XInputTags render={<section data-testid="root-el" />} />);
    expect(screen.getByTestId("root-el")).toHaveAttribute("data-slot", "root");
  });
});

describe("XInputRating", () => {
  it("点击第三颗星评分为 3", async () => {
    const onChange = vi.fn();
    render(<XInputRating onChange={onChange} />);
    await userEvent.click(screen.getByRole("button", { name: "3 星" }));
    expect(onChange).toHaveBeenCalledWith(3);
  });

  it("orientation 控制排列方向", () => {
    render(<XInputRating orientation="vertical" />);
    expect(screen.getByRole("radiogroup")).toHaveClass("flex-col");
  });

  it("color 控制填充星颜色", () => {
    render(<XInputRating value={3} color="success" />);
    expect(document.querySelector("[data-slot='indicator']")).toHaveClass("fill-success-6");
  });

  it("ui 插槽类名", () => {
    render(
      <XInputRating
        value={2}
        ui={{ root: "custom-root", item: "custom-item", indicator: "custom-indicator", icon: "custom-icon", emptyIcon: "custom-emptyIcon" }}
      />,
    );
    expect(screen.getByRole("radiogroup")).toHaveClass("custom-root");
    expect(screen.getByRole("button", { name: "1 星" })).toHaveClass("custom-item");
    expect(document.querySelector("[data-slot='indicator']")).toHaveClass("custom-indicator");
    expect(document.querySelector("[data-slot='icon']")).toHaveClass("custom-icon");
    expect(document.querySelector("[data-slot='emptyIcon']")).toHaveClass("custom-emptyIcon");
  });
});

describe("XColorPicker", () => {
  it("渲染色板与色相轨道结构", () => {
    const { container } = render(<XColorPicker />);
    expect(container.querySelector("[data-slot='root']")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='picker']")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='selector']")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='selectorBackground']")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='track']")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='trackThumb']")).toBeInTheDocument();
  });

  it("默认白色输入，圆点背景与位置正确", () => {
    const { container } = render(<XColorPicker />);
    const thumb = container.querySelector("[data-slot='selectorThumb']") as HTMLElement;
    expect(thumb.style.backgroundColor).toBe("rgb(255, 255, 255)");
    expect(thumb.style.left).toBe("0%");
    expect(thumb.style.top).toBe("0%");
  });

  it("size 控制色板尺寸，ui 插槽类名生效", () => {
    const { container } = render(<XColorPicker size="lg" ui={{ picker: "gap-8", selector: "custom-selector" }} />);
    expect(container.querySelector("[data-slot='selector']")).toHaveClass("w-44");
    expect(container.querySelector("[data-slot='picker']")).toHaveClass("gap-8");
    expect(container.querySelector("[data-slot='selector']")).toHaveClass("custom-selector");
  });

  it("ui 插槽其余键作用到对应元素", () => {
    const { container } = render(
      <XColorPicker
        ui={{
          root: "ui-root",
          selectorBackground: "ui-background",
          selectorThumb: "ui-thumb",
          track: "ui-track",
          trackThumb: "ui-track-thumb",
        }}
      />,
    );
    expect(container.querySelector("[data-slot='root']")).toHaveClass("ui-root");
    expect(container.querySelector("[data-slot='selectorBackground']")).toHaveClass("ui-background");
    expect(container.querySelector("[data-slot='selectorThumb']")).toHaveClass("ui-thumb");
    expect(container.querySelector("[data-slot='track']")).toHaveClass("ui-track");
    expect(container.querySelector("[data-slot='trackThumb']")).toHaveClass("ui-track-thumb");
  });

  it("未声明属性透传到根元素", () => {
    const { container } = render(<XColorPicker data-testid="picker-root" />);
    expect(container.querySelector("[data-slot='root']")).toHaveAttribute("data-testid", "picker-root");
  });

  it("disabled 标记 data-disabled", () => {
    const { container } = render(<XColorPicker disabled />);
    expect(container.querySelector("[data-slot='root']")).toHaveAttribute("data-disabled", "true");
    expect(container.querySelector("[data-slot='selectorThumb']")).toHaveAttribute("data-disabled", "true");
  });

  it("value 传入颜色后圆点位置同步", () => {
    const { container } = render(<XColorPicker value="#00C16A" />);
    const thumb = container.querySelector("[data-slot='selectorThumb']") as HTMLElement;
    expect(thumb.style.backgroundColor).toBe("rgb(0, 193, 106)");
    expect(thumb.style.left).toBe("100%");
  });
});

describe("XPinInput", () => {
  it("默认渲染 5 个输入槽，length 控制槽数", () => {
    const { container, unmount } = render(<XPinInput />);
    expect(container.querySelectorAll("[data-slot='input-otp-slot']")).toHaveLength(5);
    unmount();

    const six = render(<XPinInput length={6} />);
    expect(six.container.querySelectorAll("[data-slot='input-otp-slot']")).toHaveLength(6);
    six.unmount();
  });

  it("separator 分组与 separatorSlot 自定义内容", () => {
    const { container } = render(
      <XPinInput length={6} separator={3} separatorSlot={() => <i data-testid="sep" />} />,
    );
    expect(container.querySelectorAll("[data-testid='sep']")).toHaveLength(1);
  });

  it("separator 数组在指定位置之后插入", () => {
    const { container } = render(<XPinInput length={6} separator={[3, 4]} />);
    expect(container.querySelectorAll("[data-slot='pin-input-separator']")).toHaveLength(2);
  });

  it("render 替换根元素", () => {
    const { container } = render(<XPinInput render={<section />} />);
    expect(container.querySelector("section[data-slot='root']")).toBeInTheDocument();
  });

  it("未声明属性透传到根元素", () => {
    const { container } = render(<XPinInput aria-label="验证码" data-testid="pin-root" />);
    expect(container.querySelector("[data-slot='root']")).toHaveAttribute("aria-label", "验证码");
    expect(container.querySelector("[data-slot='root']")).toHaveAttribute("data-testid", "pin-root");
  });

  it("size / highlight 与 ui 插槽类名", () => {
    const { container } = render(
      <XPinInput size="lg" highlight ui={{ root: "custom-root", base: "custom-base" }} />,
    );
    expect(container.querySelector("[data-slot='root']")).toHaveClass("custom-root");
    const slot = container.querySelector("[data-slot='input-otp-slot']");
    expect(slot).toHaveClass("custom-base");
    expect(slot).toHaveClass("size-9");
    expect(slot).toHaveClass("ring-1");
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
    render(<XSlider defaultValue={50} />);
    expect(screen.getByRole("slider").closest("[data-slot='root']")).toBeInTheDocument();
  });
});

describe("XFileUpload", () => {
  it("默认渲染上传区域与隐藏的 file input", () => {
    const { container } = render(<XFileUpload />);
    expect(container.querySelector("[data-slot='root']")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='base']")).toHaveAttribute("role", "button");
    const input = container.querySelector("input[type='file']") as HTMLInputElement;
    expect(input).toHaveClass("sr-only");
    expect(input.accept).toBe("*");
  });

  it("选择文件触发 onChange", () => {
    const onChange = vi.fn();
    const { container } = render(<XFileUpload onChange={onChange} fileImage={false} />);
    const input = container.querySelector("input[type='file']") as HTMLInputElement;
    const file = new File(["hello"], "hello.txt", { type: "text/plain" });
    fireEvent.change(input, { target: { files: [file] } });
    expect(onChange).toHaveBeenCalledWith(file);
  });

  it("value 渲染文件列表，移除后清空模型", async () => {
    const onChange = vi.fn();
    const file = new File(["hello"], "hello.txt", { type: "text/plain" });
    render(<XFileUpload value={file} fileImage={false} layout="list" onChange={onChange} />);
    expect(screen.getByText("hello.txt")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: /移除文件/ }));
    expect(onChange).toHaveBeenCalledWith(null);
  });

  it("multiple 时文件呈网格布局", () => {
    const a = new File(["a"], "a.txt", { type: "text/plain" });
    const b = new File(["b"], "b.txt", { type: "text/plain" });
    const { container } = render(<XFileUpload multiple value={[a, b]} fileImage={false} />);
    expect(screen.getByText("a.txt")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='file']")).toHaveClass("aspect-square");
    expect(container.querySelector("[data-slot='files']")).toHaveClass("grid");
  });

  it("ui 插槽类名作用到各元素", () => {
    const { container } = render(
      <XFileUpload ui={{ root: "custom-root", base: "custom-base", wrapper: "custom-wrapper" }} />,
    );
    expect(container.querySelector("[data-slot='root']")).toHaveClass("custom-root");
    expect(container.querySelector("[data-slot='base']")).toHaveClass("custom-base");
    expect(container.querySelector("[data-slot='wrapper']")).toHaveClass("custom-wrapper");
  });

  it("children 函数可拿到 open 与 removeFile", () => {
    render(
      <XFileUpload fileImage={false}>
        {({ open }) => (
          <button type="button" onClick={() => open()}>
            自定义触发
          </button>
        )}
      </XFileUpload>,
    );
    expect(screen.getByRole("button", { name: "自定义触发" })).toBeInTheDocument();
  });

  it("file 插槽自定义文件项渲染", () => {
    const file = new File(["hello"], "hello.txt", { type: "text/plain" });
    render(
      <XFileUpload value={file} fileImage={false} file={() => <i data-testid="custom-file" />} />,
    );
    expect(screen.getByTestId("custom-file")).toBeInTheDocument();
  });

  it("label 与 description 支持节点", () => {
    render(
      <XFileUpload
        label={<b data-testid="label-node">附件</b>}
        description={<i data-testid="desc-node">说明</i>}
      />,
    );
    expect(screen.getByTestId("label-node")).toBeInTheDocument();
    expect(screen.getByTestId("desc-node")).toBeInTheDocument();
  });

  it("children 覆盖内容时 file input 仍然渲染", () => {
    const { container } = render(<XFileUpload>{() => <div data-testid="custom" />}</XFileUpload>);
    expect(screen.getByTestId("custom")).toBeInTheDocument();
    expect(container.querySelector("input[type='file']")).toBeInTheDocument();
  });

  it("required 透传到 file input，preview 为 false 时不渲染文件列表", () => {
    const file = new File(["hello"], "hello.txt", { type: "text/plain" });
    const { container } = render(
      <XFileUpload value={file} preview={false} required fileImage={false} />,
    );
    expect(container.querySelector("input[type='file']")).toHaveAttribute("required");
    expect(container.querySelector("[data-slot='files']")).toBeNull();
  });

  it("multiple 已有文件时隐藏上传区内容", () => {
    const file = new File(["hello"], "hello.txt", { type: "text/plain" });
    const { container } = render(<XFileUpload multiple value={[file]} fileImage={false} />);
    expect(container.querySelector("[data-slot='wrapper']")).toBeNull();
  });

  it("single + grid 时 files 容器不带网格布局", () => {
    const file = new File(["hello"], "hello.txt", { type: "text/plain" });
    const { container } = render(<XFileUpload value={file} fileImage={false} />);
    expect(container.querySelector("[data-slot='files']")).not.toHaveClass("grid");
  });

  it("未声明属性透传到 file input", () => {
    const { container } = render(<XFileUpload data-testid="upload-input" form="my-form" formAction="/upload" />);
    const input = container.querySelector("input[type='file']");
    expect(input).toHaveAttribute("data-testid", "upload-input");
    expect(input).toHaveAttribute("form", "my-form");
    expect(input).toHaveAttribute("formaction", "/upload");
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

  it("useXForm setValue 后提交载荷为最新数据", async () => {
    const onSubmit = vi.fn();
    function Host() {
      const [Form, formApi] = useXForm({
        defaultValues: { email: "" },
        rules: { email: [{ required: true, message: "邮箱不能为空" }] },
      });
      return (
        <Form onSubmit={onSubmit}>
          <XInput
            placeholder="邮箱"
            value={(formApi.values.email as string) ?? ""}
            onChange={(event) => formApi.setValue("email", event.target.value)}
          />
          <button type="submit">提交</button>
        </Form>
      );
    }
    render(<Host />);
    const input = screen.getByPlaceholderText("邮箱");
    await userEvent.click(input);
    fireEvent.change(input, { target: { value: "you@example.com" } });
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
    const group = screen.getAllByRole("textbox")[0]?.parentElement?.parentElement;
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

  it("filter 按 label 过滤", async () => {
    render(<XListbox items={items} filter />);
    await userEvent.type(screen.getByPlaceholderText("搜索…"), "香蕉");
    expect(screen.getByText("香蕉")).toBeInTheDocument();
    expect(screen.queryByText("苹果")).not.toBeInTheDocument();
  });

  it("无匹配时显示 empty 内容，loading 时显示加载提示", () => {
    const { rerender } = render(<XListbox items={items} filter empty={() => "没有结果"} />);
    expect(screen.getByText("苹果")).toBeInTheDocument();
    rerender(<XListbox items={[]} filter empty={() => "没有结果"} />);
    expect(screen.getByText("没有结果")).toBeInTheDocument();
    rerender(<XListbox items={items} loading />);
    expect(document.querySelector("[data-slot='loading']")).not.toBeNull();
  });
});

describe("XSelectMenu clearable", () => {
  const options = [
    { label: "苹果", value: "apple" },
    { label: "香蕉", value: "banana" },
  ];

  it("有选中项时清空为单选的空值", async () => {
    const onValueChange = vi.fn();
    render(<XSelectMenu items={options} value="apple" clear onValueChange={onValueChange} />);
    await userEvent.click(screen.getByRole("button", { name: "清空" }));
    expect(onValueChange).toHaveBeenCalledWith(undefined);
  });

  it("多选时清空为空数组", async () => {
    const onValueChange = vi.fn();
    render(<XSelectMenu items={options} multiple value={["apple"]} clear onValueChange={onValueChange} />);
    await userEvent.click(screen.getByRole("button", { name: "清空" }));
    expect(onValueChange).toHaveBeenCalledWith([]);
  });
});

describe("XInputMenu createItem", () => {
  const items = [{ label: "苹果", value: "apple" }];

  it("关键字不存在时回车创建新选项", async () => {
    const onCreate = vi.fn();
    render(<XInputMenu items={items} createItem onCreate={onCreate} />);
    await userEvent.type(await screen.findByRole("combobox"), "西瓜");
    /* 等关键字状态落到创建行上再回车，避免输入与回车竞争 */
    expect(await screen.findByText('创建 "西瓜"')).toBeInTheDocument();
    await userEvent.keyboard("{ArrowDown}{Enter}");
    expect(onCreate).toHaveBeenCalledWith("西瓜");
  });

  it("候选项同名时不触发创建", async () => {
    const onCreate = vi.fn();
    render(<XInputMenu items={items} createItem onCreate={onCreate} />);
    await userEvent.type(await screen.findByRole("combobox"), "苹果");
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
    const { container } = render(<XCheckbox checked label="协议" description="已阅读并同意" color="success" />);
    expect(screen.getByText("已阅读并同意")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='indicator']")).toHaveClass(
      "bg-success-6",
    );
  });

  it("size 控制控件尺寸", () => {
    const { container } = render(<XCheckbox size="lg" aria-label="选项" />);
    expect(container.querySelector("[data-slot='base']")).toHaveClass("size-5");
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

describe("XFileUpload 多文件与删除", () => {
  it("multiple 模型渲染多个文件，删除指定索引", async () => {
    const onChange = vi.fn();
    const a = new File(["a"], "a.txt", { type: "text/plain" });
    const b = new File(["b"], "b.txt", { type: "text/plain" });
    render(<XFileUpload multiple value={[a, b]} fileImage={false} onChange={onChange} />);
    const buttons = screen.getAllByRole("button", { name: /移除文件/ });
    await userEvent.click(buttons[0]!);
    expect(onChange).toHaveBeenCalledWith([b]);
  });
});

describe("XInputDate / XInputTime 区间模式", () => {
  it("range 时两个输入框由分隔图标分隔", () => {
    render(<XInputDate range value={["2025-06-15", "2025-06-20"]} />);
    expect(screen.getByDisplayValue("2025-06-15")).toBeInTheDocument();
    expect(screen.getByDisplayValue("2025-06-20")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='separatorIcon']")).toBeInTheDocument();
  });

  it("非 range 时展示单值", () => {
    render(<XInputDate value="2025-06-15" />);
    expect(screen.getByDisplayValue("2025-06-15")).toBeInTheDocument();
  });

  it("时间区间两个输入框由分隔图标分隔", () => {
    render(<XInputTime range value={["09:00", "18:00"]} />);
    expect(screen.getByDisplayValue("09:00")).toBeInTheDocument();
    expect(screen.getByDisplayValue("18:00")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='separatorIcon']")).toBeInTheDocument();
  });

  it("leading / separator / trailing 内容", () => {
    render(
      <XInputTime
        value="14:30"
        leading={<i className="custom-leading">L</i>}
        trailing={<i className="custom-trailing">T</i>}
      />,
    );
    expect(document.querySelector(".custom-leading")).toBeInTheDocument();
    expect(document.querySelector(".custom-trailing")).toBeInTheDocument();
    render(<XInputDate range value={["2025-06-15", "2025-06-20"]} separator={<i className="custom-separator">sep</i>} />);
    expect(document.querySelector(".custom-separator")).toBeInTheDocument();
  });

  it("size / color / highlight 作用于输入容器", () => {
    render(<XInputDate size="lg" color="success" variant="soft" highlight />);
    expect(document.querySelector("[data-slot='base']")).toHaveClass("h-9", "ring-success-6");
  });

  it("ui 插槽类名", () => {
    render(
      <XInputDate
        range
        value={["2025-06-15", "2025-06-20"]}
        ui={{ root: "custom-root", base: "custom-base", leading: "custom-leading", leadingIcon: "custom-leadingIcon", separatorIcon: "custom-separatorIcon" }}
      />,
    );
    expect(document.querySelector(".custom-root")).toHaveClass("custom-root");
    expect(document.querySelector("[data-slot='base']")).toHaveClass("custom-base");
    expect(document.querySelector("[data-slot='leading']")).toHaveClass("custom-leading");
    expect(document.querySelector("[data-slot='leadingIcon']")).toHaveClass("custom-leadingIcon");
    expect(document.querySelector("[data-slot='separatorIcon']")).toHaveClass("custom-separatorIcon");
  });

  it("XInputTime ui 插槽类名", () => {
    render(
      <XInputTime
        range
        value={["09:00", "18:00"]}
        trailing={<i className="slot-trailing">T</i>}
        ui={{ root: "custom-root", base: "custom-base", leading: "custom-leading", leadingIcon: "custom-leadingIcon", separatorIcon: "custom-separatorIcon", trailing: "custom-trailing" }}
      />,
    );
    expect(document.querySelector("[data-slot='root']")).toHaveClass("custom-root");
    expect(document.querySelector("[data-slot='base']")).toHaveClass("custom-base");
    expect(document.querySelector("[data-slot='leading']")).toHaveClass("custom-leading");
    expect(document.querySelector("[data-slot='leadingIcon']")).toHaveClass("custom-leadingIcon");
    expect(document.querySelector("[data-slot='separatorIcon']")).toHaveClass("custom-separatorIcon");
    expect(document.querySelector("[data-slot='trailing']")).toHaveClass("custom-trailing");
    expect(document.querySelector("[data-slot='trailing'] .slot-trailing")).toBeInTheDocument();
  });

  it("render 替换触发按钮元素", () => {
    render(<XInputDate value="2025-06-15" render={<section data-testid="root-el" />} />);
    expect(screen.getByTestId("root-el")).toHaveAttribute("data-slot", "root");
    expect(screen.getByTestId("root-el").querySelector("[data-slot='base']")).toBeInTheDocument();
  });
});

describe("XSlider 数值提示与方向", () => {
  it("tooltip 显示当前值", async () => {
    render(<XSlider tooltip={{ open: true }} value={40} />);
    expect(await screen.findByText("40")).toBeInTheDocument();
  });

  it("vertical 时根容器纵向布局", async () => {
    const { container } = render(<XSlider tooltip={{ open: true }} orientation="vertical" value={30} />);
    expect(container.querySelector("[data-orientation='vertical']")).toBeInTheDocument();
    expect(await screen.findByText("30")).toBeInTheDocument();
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

  it("icon / emptyIcon 自定义图标组件", () => {
    const Filled = (props: React.ComponentProps<"span">) => (
      <span {...props} className={[props.className, "filled-icon"].filter(Boolean).join(" ")} />
    );
    const Empty = (props: React.ComponentProps<"span">) => (
      <span {...props} className={[props.className, "empty-icon"].filter(Boolean).join(" ")} />
    );
    render(<XInputRating value={1} icon={Filled} emptyIcon={Empty} />);
    expect(document.querySelector("[data-slot='icon']")).toHaveClass("filled-icon");
    expect(document.querySelector("[data-slot='emptyIcon']")).toHaveClass("empty-icon");
  });

  it("render 替换根元素", () => {
    render(<XInputRating value={1} render={<section data-testid="root-el" />} />);
    expect(screen.getByTestId("root-el")).toHaveAttribute("data-slot", "root");
  });
});

describe("XPagination 首页末页", () => {
  it("showControls 渲染首页与末页按钮", async () => {
    const onPageChange = vi.fn();
    render(
      <XPagination page={3} total={100} itemsPerPage={10} showControls onPageChange={onPageChange} />,
    );
    await userEvent.click(screen.getByRole("button", { name: "首页" }));
    expect(onPageChange).toHaveBeenCalledWith(1);
    await userEvent.click(screen.getByRole("button", { name: "末页" }));
    expect(onPageChange).toHaveBeenCalledWith(10);
  });
});

describe("XInput Nuxt 语义", () => {
  it("leading / trailing 渲染在对应插槽并补足内边距", () => {
    render(<XInput leading={<span data-testid="lead" />} trailing={<span data-testid="trail" />} />);
    expect(document.querySelector("[data-slot=leading]")).toContainElement(screen.getByTestId("lead"));
    expect(document.querySelector("[data-slot=trailing]")).toContainElement(screen.getByTestId("trail"));
    expect(screen.getByRole("textbox")).toHaveClass("pl-9", "pr-9");
  });

  it("ui 插槽类名应用到对应元素", () => {
    render(
      <XInput
        ui={{ root: "custom-root", base: "custom-base", leading: "custom-leading", trailing: "custom-trailing" }}
        leading={<span />}
        trailing={<span />}
      />,
    );
    expect(document.querySelector("[data-slot=root]")).toHaveClass("custom-root");
    expect(screen.getByRole("textbox")).toHaveClass("custom-base");
    expect(document.querySelector("[data-slot=leading]")).toHaveClass("custom-leading");
    expect(document.querySelector("[data-slot=trailing]")).toHaveClass("custom-trailing");
  });

  it("avatar 渲染前置头像并应用 ui 类名", () => {
    render(
      <XInput avatar={{ text: "阿" }} ui={{ leadingAvatar: "custom-avatar", leadingAvatarSize: "lg" }} />,
    );
    const avatar = document.querySelector("[data-slot=leadingAvatar]");
    expect(avatar).toHaveClass("custom-avatar", "size-10");
  });

  it("highlight 显示颜色描边", () => {
    render(<XInput highlight color="success" />);
    expect(screen.getByRole("textbox")).toHaveClass("ring-success-6");
  });

  it("variant 与 size 变体类", () => {
    render(<XInput variant="soft" size="xs" />);
    expect(screen.getByRole("textbox")).toHaveClass("bg-muted/50", "h-6");
  });

  it("fixed=false 桌面端缩小字号", () => {
    render(<XInput fixed={false} />);
    expect(screen.getByRole("textbox")).toHaveClass("md:text-sm");
  });

  it("render 渲染根元素", () => {
    render(<XInput render={<section data-testid="root-el" />} placeholder="x" />);
    expect(screen.getByTestId("root-el")).toBeInTheDocument();
  });
});

describe("XTextarea Nuxt 语义", () => {
  it("autoresize 添加 resize-none 且支持延迟", () => {
    render(<XTextarea autoresize autoresizeDelay={10} />);
    expect(screen.getByRole("textbox")).toHaveClass("resize-none");
  });

  it("ui base 与 highlight / size 类", () => {
    render(<XTextarea ui={{ base: "custom-base" }} highlight color="error" size="lg" />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveClass("custom-base", "ring-error-6", "px-3");
  });

  it("render 渲染根元素", () => {
    render(<XTextarea render={<section data-testid="root-el" />} />);
    expect(screen.getByTestId("root-el")).toBeInTheDocument();
  });
});

describe("XInputNumber Nuxt 语义", () => {
  it("placeholder 与 size 变体", () => {
    render(<XInputNumber placeholder="数量" size="sm" />);
    expect(screen.getByPlaceholderText("数量")).toHaveClass("h-7");
  });

  it("vertical 步进按钮纵向堆叠", () => {
    render(<XInputNumber orientation="vertical" />);
    expect(screen.getByRole("button", { name: "increment" })).toHaveClass("top-0");
    expect(screen.getByRole("button", { name: "decrement" })).toHaveClass("bottom-0");
  });

  it("incrementDisabled / decrementDisabled 独立禁用", () => {
    render(<XInputNumber incrementDisabled decrementDisabled />);
    expect(screen.getByRole("button", { name: "increment" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "decrement" })).toBeDisabled();
  });

  it("increment / decrement 自定义内容", () => {
    render(
      <XInputNumber
        increment={<span data-testid="inc-custom" />}
        decrement={<span data-testid="dec-custom" />}
      />,
    );
    expect(screen.getByTestId("inc-custom")).toBeInTheDocument();
    expect(screen.getByTestId("dec-custom")).toBeInTheDocument();
  });

  it("increment={false} 隐藏加号按钮", () => {
    render(<XInputNumber increment={false} />);
    expect(screen.queryByRole("button", { name: "increment" })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "decrement" })).toBeInTheDocument();
  });

  it("ui base 类名与 render 根元素", () => {
    render(<XInputNumber ui={{ base: "custom-base" }} />);
    expect(screen.getByRole("spinbutton")).toHaveClass("custom-base");
  });

  it("render 渲染根元素", () => {
    render(<XInputNumber render={<section data-testid="root-el" />} />);
    expect(screen.getByTestId("root-el")).toBeInTheDocument();
  });
});

describe("XForm schema 校验", () => {
  /** 标准 schema 形状（zod v4 / valibot v1 均实现该协议） */
  const schema = {
    "~standard": {
      validate: async (value: unknown) => {
        const form = value as Record<string, unknown>;
        const issues: Array<{ path?: string[]; message: string }> = [];
        if (!form.email) issues.push({ path: ["email"], message: "schema: 邮箱不能为空" });
        return issues.length ? { issues } : { value: form };
      },
    },
  };

  it("校验失败时展示 schema 错误并触发 onError", async () => {
    const onError = vi.fn();
    render(
      <XForm schema={schema} onError={onError}>
        <XFormField name="email" label="邮箱">
          <XInput placeholder="邮箱" />
        </XFormField>
        <button type="submit">提交</button>
      </XForm>,
    );
    await userEvent.click(screen.getByRole("button", { name: "提交" }));
    expect(await screen.findByRole("alert")).toHaveTextContent("schema: 邮箱不能为空");
    expect(onError).toHaveBeenCalledWith({ email: "schema: 邮箱不能为空" });
  });

  it("校验通过时触发 onSubmit", async () => {
    const onSubmit = vi.fn();
    render(
      <XForm schema={schema} defaultValues={{ email: "you@example.com" }} onSubmit={onSubmit}>
        <button type="submit">提交</button>
      </XForm>,
    );
    await userEvent.click(screen.getByRole("button", { name: "提交" }));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({ email: "you@example.com" }));
  });
});

describe("XForm ui 插槽", () => {
  it("ui.root 应用到表单根元素", () => {
    const { container } = render(<XForm ui={{ root: "custom-root" }} />);
    expect(container.querySelector("form")).toHaveClass("custom-root");
  });
});

describe("XFormField Nuxt 语义", () => {
  it("ui 键类名应用到对应元素", async () => {
    const { container, rerender } = render(
      <XForm>
        <XFormField
          label="邮箱"
          description="说明文字"
          hint="提示"
          help="帮助文案"
          ui={{
            root: "r", wrapper: "w", labelWrapper: "lw", label: "l", container: "c",
            description: "d", error: "e", hint: "h", help: "hp",
          }}
        >
          <XInput />
        </XFormField>
      </XForm>,
    );
    expect(container.querySelector("[data-slot=root]")).toHaveClass("r");
    expect(container.querySelector("[data-slot=wrapper]")).toHaveClass("w");
    expect(container.querySelector("[data-slot=labelWrapper]")).toHaveClass("lw");
    expect(container.querySelector("[data-slot=label]")).toHaveClass("l");
    expect(container.querySelector("[data-slot=description]")).toHaveClass("d");
    expect(container.querySelector("[data-slot=hint]")).toHaveClass("h");
    expect(container.querySelector("[data-slot=help]")).toHaveClass("hp");
    const root = container.querySelector("[data-slot=root]") as HTMLElement;
    expect(root.children[1]?.className).toContain("c");

    rerender(
      <XForm>
        <XFormField error="错误信息" label="邮箱" ui={{ error: "e" }}>
          <XInput />
        </XFormField>
      </XForm>,
    );
    expect(container.querySelector("[data-slot=error]")).toHaveClass("e");
  });

  it("error 传入 ReactNode 时渲染自定义内容", () => {
    render(
      <XForm>
        <XFormField label="邮箱" error={<em data-testid="custom-error">自定义错误</em>}>
          <XInput />
        </XFormField>
      </XForm>,
    );
    expect(screen.getByRole("alert")).toContainElement(screen.getByTestId("custom-error"));
  });

  it("validateOnInputDelay / eagerValidation 透传给字段内的控件", () => {
    function Probe() {
      const context = useXFormFieldContext();
      return (
        <span data-testid="probe">
          {String(context?.validateOnInputDelay)}-{String(context?.eagerValidation)}-{String(context?.size)}-{String(context?.name)}
        </span>
      );
    }
    render(
      <XForm>
        <XFormField name="email" size="lg" eagerValidation validateOnInputDelay={500}>
          <Probe />
        </XFormField>
      </XForm>,
    );
    expect(screen.getByTestId("probe")).toHaveTextContent("500-true-lg-email");
  });

  it("horizontal 排列时根节点横向布局", () => {
    const { container } = render(
      <XForm>
        <XFormField orientation="horizontal" label="邮箱">
          <XInput />
        </XFormField>
      </XForm>,
    );
    const root = container.querySelector("[data-slot=root]");
    expect(root).toHaveAttribute("data-orientation", "horizontal");
    expect(root).toHaveClass("flex");
  });

  it("size 控制根节点字号", () => {
    const { container } = render(
      <XForm>
        <XFormField size="xl" label="邮箱">
          <XInput />
        </XFormField>
      </XForm>,
    );
    expect(container.querySelector("[data-slot=root]")).toHaveClass("text-base");
  });

  it("无错误时显示 help，有错误时显示 error", () => {
    const { container, rerender } = render(
      <XForm>
        <XFormField help="帮助文案" label="邮箱">
          <XInput />
        </XFormField>
      </XForm>,
    );
    expect(container.querySelector("[data-slot=help]")).toHaveTextContent("帮助文案");
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    rerender(
      <XForm>
        <XFormField error="自定义错误" help="帮助文案" label="邮箱">
          <XInput />
        </XFormField>
      </XForm>,
    );
    expect(screen.getByRole("alert")).toHaveTextContent("自定义错误");
    expect(container.querySelector("[data-slot=help]")).not.toBeInTheDocument();
  });

  it("errorPattern 匹配数组字段错误名（tags.0）", async () => {
    render(
      <XForm rules={{ "tags.0": [{ required: true, message: "标签不能为空" }] }}>
        <XFormField name="tags" label="标签" errorPattern={/^tags\./}>
          <XInput />
        </XFormField>
        <button type="submit">提交</button>
      </XForm>,
    );
    await userEvent.click(screen.getByRole("button", { name: "提交" }));
    expect(screen.getByRole("alert")).toHaveTextContent("标签不能为空");
  });

  it("error=true 只标记错误态，不渲染错误内容", () => {
    render(
      <XForm>
        <XFormField label="邮箱" error help="帮助文案">
          <XInput />
        </XFormField>
      </XForm>,
    );
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(screen.getByText("帮助文案")).toBeInTheDocument();
  });

  it("error=false 关闭错误显示", () => {
    render(
      <XForm>
        <XFormField error={false} label="邮箱">
          <XInput />
        </XFormField>
      </XForm>,
    );
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("render 渲染根元素", () => {
    render(
      <XForm>
        <XFormField render={<section data-testid="root-el" />} label="邮箱">
          <XInput />
        </XFormField>
      </XForm>,
    );
    expect(screen.getByTestId("root-el")).toBeInTheDocument();
  });
});

describe("XFieldGroup Nuxt 语义", () => {
  it("orientation=vertical 纵向堆叠", () => {
    const { container } = render(
      <XFieldGroup orientation="vertical">
        <XInput />
        <XInput />
      </XFieldGroup>,
    );
    const group = container.querySelector("[data-slot=root]");
    expect(group).toHaveAttribute("data-orientation", "vertical");
    expect(group).toHaveClass("flex", "flex-col");
  });

  it("inline=false 等价 vertical（旧属性兼容）", () => {
    const { container } = render(
      <XFieldGroup inline={false}>
        <XInput />
      </XFieldGroup>,
    );
    expect(container.querySelector("[data-slot=root]")).toHaveAttribute("data-orientation", "vertical");
  });

  it("orientation 优先于 inline", () => {
    const { container } = render(
      <XFieldGroup inline orientation="vertical">
        <XInput />
      </XFieldGroup>,
    );
    expect(container.querySelector("[data-slot=root]")).toHaveAttribute("data-orientation", "vertical");
  });

  it("size 控制间距与 ui.root 类名", () => {
    const { container } = render(
      <XFieldGroup size="xl" ui={{ root: "custom-root" }}>
        <XInput />
      </XFieldGroup>,
    );
    expect(container.querySelector("[data-slot=root]")).toHaveClass("gap-5", "custom-root");
  });

  it("render 渲染根元素", () => {
    render(
      <XFieldGroup render={<section data-testid="root-el" />}>
        <XInput />
      </XFieldGroup>,
    );
    expect(screen.getByTestId("root-el")).toBeInTheDocument();
  });
});
