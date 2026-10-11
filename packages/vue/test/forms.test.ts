import { defineComponent, h, reactive } from "vue";
import { flushPromises, mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { ZonedDateTime } from "@internationalized/date";
import XCheckbox from "@/components/kit/XCheckbox.vue";
import XColorPicker from "@/components/kit/XColorPicker.vue";
import XFieldGroup from "@/components/kit/XFieldGroup.vue";
import XFileUpload from "@/components/kit/XFileUpload.vue";
import XForm from "@/components/kit/XForm.vue";
import XFormField from "@/components/kit/XFormField.vue";
import XInput from "@/components/kit/XInput.vue";
import XInputDate from "@/components/kit/XInputDate.vue";
import XInputMenu from "@/components/kit/XInputMenu.vue";
import XInputNumber from "@/components/kit/XInputNumber.vue";
import XInputRating from "@/components/kit/XInputRating.vue";
import XInputTags from "@/components/kit/XInputTags.vue";
import XInputTime from "@/components/kit/XInputTime.vue";
import XListbox from "@/components/kit/XListbox.vue";
import XPagination from "@/components/kit/XPagination.vue";
import XPinInput from "@/components/kit/XPinInput.vue";
import XRadioGroup from "@/components/kit/XRadioGroup.vue";
import XSelectMenu from "@/components/kit/XSelectMenu.vue";
import XSlider from "@/components/kit/XSlider.vue";
import XSwitch from "@/components/kit/XSwitch.vue";
import XTextarea from "@/components/kit/XTextarea.vue";

/* XInputNumber 的步进按钮监听 pointerdown，且需要挂载到 document 才能触发焦点事件 */
async function stepNumber(wrapper: ReturnType<typeof mount>, slot: string) {
  const button = wrapper.find(`[data-slot='${slot}'] button`).element as HTMLElement;
  button.dispatchEvent(new MouseEvent("pointerdown", { bubbles: true }));
  button.dispatchEvent(new MouseEvent("pointerup", { bubbles: true }));
  button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  await wrapper.vm.$nextTick();
}

describe("XInput", () => {
  it("默认 md 尺寸与 leading / trailing 插槽", () => {
    const wrapper = mount(XInput, {
      slots: { leading: "<i data-test='p' />", trailing: "<i data-test='s' />" },
    });
    expect(wrapper.find("input").classes()).toContain("px-2.5");
    expect(wrapper.find("[data-test='p']").exists()).toBe(true);
    expect(wrapper.find("[data-test='s']").exists()).toBe(true);
  });

  it("color=error 语义色与默认插槽", () => {
    const wrapper = mount(XInput, {
      props: { color: "error", status: "error" },
      slots: { default: "https://" },
    });
    expect(wrapper.find("input").classes()).toContain("outline-error/25");
    expect(wrapper.find("input").attributes("status")).toBe("error");
    expect(wrapper.text()).toContain("https://");
  });

  it("属性透传到内部 input（v-model 与 id）", async () => {
    const wrapper = mount(XInput, { props: { modelValue: "hello", id: "nickname" } });
    const input = wrapper.find("input");
    expect(input.attributes("id")).toBe("nickname");
    expect((input.element as HTMLInputElement).value).toBe("hello");
    await input.setValue("world");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["world"]);
  });
});

describe("XTextarea", () => {
  it("默认 3 行，更新 modelValue", async () => {
    const wrapper = mount(XTextarea);
    expect(wrapper.find("textarea").attributes("rows")).toBe("3");
    await wrapper.find("textarea").setValue("多行内容");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["多行内容"]);
  });
});

describe("XCheckbox", () => {
  it("label 插槽与 indeterminate 属性", () => {
    const wrapper = mount(XCheckbox, { props: { indeterminate: true }, slots: { label: "选项 A" } });
    expect(wrapper.text()).toContain("选项 A");
    expect(wrapper.find("[data-slot='base']").attributes("indeterminate")).toBe("true");
    expect(wrapper.find("[data-slot='base']").attributes("data-state")).toBe("unchecked");
  });

  it("属性透传到内部控件", () => {
    const wrapper = mount(XCheckbox, { props: { id: "agree" } });
    expect(wrapper.find("button").attributes("id")).toBe("agree");
  });
});

describe("XRadioGroup", () => {
  const items = [
    { value: "a", label: "选项 A" },
    { value: "b", label: "选项 B" },
  ];

  it("渲染选项并更新选中值", async () => {
    const wrapper = mount(XRadioGroup, { props: { items, valueKey: "value" } });
    expect(wrapper.text()).toContain("选项 A");
    await wrapper.findAll("button[role='radio']")[1]?.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["b"]);
  });

  it("variant=button 仍渲染单选按钮", () => {
    const wrapper = mount(XRadioGroup, { props: { items, valueKey: "value", variant: "button" } });
    expect(wrapper.findAll("button[role='radio']")).toHaveLength(2);
  });
});

describe("XSwitch", () => {
  it("checkedIcon / uncheckedIcon 渲染与 sm 尺寸", () => {
    const wrapper = mount(XSwitch, {
      props: { modelValue: true, size: "sm", checkedIcon: "i-lucide-check", uncheckedIcon: "i-lucide-x" },
    });
    expect(wrapper.find("[data-slot='base']").attributes("data-state")).toBe("checked");
    expect(wrapper.find("[data-slot='base'] svg").exists()).toBe(true);
    expect(wrapper.find("[data-slot='thumb']").classes()).toContain("size-3.5");
  });

  it("属性透传到内部开关控件", () => {
    const wrapper = mount(XSwitch, { props: { id: "notify" } });
    expect(wrapper.find("button").attributes("id")).toBe("notify");
  });
});

describe("XSelectMenu", () => {
  const options = [
    { label: "苹果", value: "apple" },
    { label: "香蕉", value: "banana" },
  ];

  it("默认占位与选择回填", async () => {
    const wrapper = mount(XSelectMenu, {
      props: { items: options, valueKey: "value", placeholder: "请选择" },
      attachTo: document.body,
    });
    expect(wrapper.find("button").text()).toContain("请选择");
    await wrapper.find("button").trigger("click");
    await new Promise((resolve) => setTimeout(resolve, 0));
    const option = Array.from(document.querySelectorAll("[data-slot='item']")).find((b) => b.textContent === "苹果");
    option?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["apple"]);
    wrapper.unmount();
  });
});

describe("XInputNumber", () => {
  it("步进按钮更新值，max 不自动禁用按钮", async () => {
    const wrapper = mount(XInputNumber, {
      props: { defaultValue: 5, max: 5 },
      attachTo: document.body,
    });
    const increment = wrapper.find("[data-slot='increment'] button");
    expect(increment.attributes("disabled")).toBeUndefined();
    await stepNumber(wrapper, "decrement");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([4]);
    wrapper.unmount();
  });

  it("属性透传到内部 input", () => {
    const wrapper = mount(XInputNumber, { props: { id: "amount", name: "amount" } });
    const input = wrapper.find("input");
    expect(input.attributes("id")).toBe("amount");
    expect(input.attributes("name")).toBe("amount");
  });
});

describe("XInputTags", () => {
  it("回车添加、关闭移除", async () => {
    const wrapper = mount(XInputTags);
    const input = wrapper.find("input");
    await input.setValue("Vue");
    await input.trigger("keydown", { key: "Enter" });
    expect(wrapper.find("[data-slot='itemText']").text()).toBe("Vue");
    await wrapper.find("[data-slot='itemDelete']").trigger("click");
    expect(wrapper.find("[data-slot='item']").exists()).toBe(false);
  });

  it("属性透传到内部 input", () => {
    const wrapper = mount(XInputTags, { props: { id: "tags", name: "tags" } });
    expect(wrapper.find("input").attributes("id")).toBe("tags");
  });

  it("maxLength 限制输入框字符数", async () => {
    const wrapper = mount(XInputTags, { props: { maxLength: 3 } });
    const input = wrapper.find("input");
    expect(input.attributes("maxlength")).toBe("3");
    await input.setValue("Vueee");
    await input.trigger("keydown", { key: "Enter" });
    expect(wrapper.find("[data-slot='itemText']").text()).toBe("Vueee");
  });

  it("highlight 高亮描边", () => {
    const wrapper = mount(XInputTags, { props: { highlight: true, color: "success" } });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("ring-success");
  });

  it("ui 插槽类名", async () => {
    const wrapper = mount(XInputTags, {
      props: {
        ui: { root: "custom-root", item: "custom-item", itemText: "custom-itemText", itemDelete: "custom-itemDelete", itemDeleteIcon: "custom-deleteIcon", input: "custom-input" },
      },
    });
    await wrapper.find("input").setValue("Nuxt");
    await wrapper.find("input").trigger("keydown", { key: "Enter" });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.find("[data-slot='item']").classes()).toContain("custom-item");
    expect(wrapper.find("[data-slot='itemText']").classes()).toContain("custom-itemText");
    expect(wrapper.find("[data-slot='itemDelete']").classes()).toContain("custom-itemDelete");
    expect(wrapper.find("[data-slot='itemDeleteIcon']").classes()).toContain("custom-deleteIcon");
    expect(wrapper.find("[data-slot='input']").classes()).toContain("custom-input");
  });

  it("deleteIcon 自定义删除图标", async () => {
    const wrapper = mount(XInputTags, { props: { deleteIcon: "trash" } });
    await wrapper.find("input").setValue("Nuxt");
    await wrapper.find("input").trigger("keydown", { key: "Enter" });
    expect(wrapper.find("[data-slot='itemDeleteIcon']").exists()).toBe(true);
  });

  it("leading / item-text 插槽", async () => {
    const wrapper = mount(XInputTags, {
      props: {},
      slots: {
        leading: "<i class='custom-leading'>L</i>",
        "item-text": "<em class='custom-tag'>自定义</em>",
      },
    });
    expect(wrapper.find("[data-slot='leading'] .custom-leading").exists()).toBe(true);
    await wrapper.find("input").setValue("Nuxt");
    await wrapper.find("input").trigger("keydown", { key: "Enter" });
    expect(wrapper.find("[data-slot='itemText'] .custom-tag").text()).toBe("自定义");
  });

  it("as 替换根元素", () => {
    const wrapper = mount(XInputTags, { props: { as: "section" } });
    expect(wrapper.find("section[data-slot='root']").exists()).toBe(true);
  });

  it("autofocus 挂载后聚焦输入框", async () => {
    const wrapper = mount(XInputTags, { props: { autofocus: true, autofocusDelay: 5 }, attachTo: document.body });
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(document.activeElement).toBe(wrapper.find("input").element);
    wrapper.unmount();
  });
});

describe("XInputRating", () => {
  it("点击第三颗星触发 change", async () => {
    const wrapper = mount(XInputRating);
    await wrapper.findAll("button")[2]?.trigger("click");
    expect(wrapper.emitted("change")?.length).toBe(1);
    const radios = wrapper.findAll("button[role='radio']");
    expect(radios[2]!.attributes("aria-checked")).toBe("true");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });
});

describe("XColorPicker", () => {
  it("渲染色板与色相轨道结构", () => {
    const wrapper = mount(XColorPicker);
    expect(wrapper.find("[data-slot='root']").exists()).toBe(true);
    expect(wrapper.find("[data-slot='picker']").exists()).toBe(true);
    expect(wrapper.find("[data-slot='selector']").exists()).toBe(true);
    expect(wrapper.find("[data-slot='selectorBackground']").exists()).toBe(true);
    expect(wrapper.find("[data-slot='selectorThumb']").exists()).toBe(true);
    expect(wrapper.find("[data-slot='track']").exists()).toBe(true);
    expect(wrapper.find("[data-slot='trackThumb']").exists()).toBe(true);
  });

  it("默认白色输入，圆点背景与位置正确", () => {
    const wrapper = mount(XColorPicker);
    const style = wrapper.find("[data-slot='selectorThumb']").attributes("style");
    expect(style).toContain("background-color: rgb(255, 255, 255)");
    expect(style).toContain("left: 0%");
    expect(style).toContain("top: 0%");
  });

  it("size 控制色板尺寸，ui 插槽类名生效", () => {
    const wrapper = mount(XColorPicker, {
      props: { size: "lg", ui: { picker: "gap-8", selector: "custom-selector" } },
    });
    expect(wrapper.find("[data-slot='selector']").classes()).toContain("w-44");
    expect(wrapper.find("[data-slot='picker']").classes()).toContain("gap-8");
    expect(wrapper.find("[data-slot='selector']").classes()).toContain("custom-selector");
  });

  it("ui 插槽其余键作用到对应元素", () => {
    const wrapper = mount(XColorPicker, {
      props: {
        ui: {
          root: "ui-root",
          selectorBackground: "ui-background",
          selectorThumb: "ui-thumb",
          track: "ui-track",
          trackThumb: "ui-track-thumb",
        },
      },
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("ui-root");
    expect(wrapper.find("[data-slot='selectorBackground']").classes()).toContain("ui-background");
    expect(wrapper.find("[data-slot='selectorThumb']").classes()).toContain("ui-thumb");
    expect(wrapper.find("[data-slot='track']").classes()).toContain("ui-track");
    expect(wrapper.find("[data-slot='trackThumb']").classes()).toContain("ui-track-thumb");
  });

  it("未声明属性透传到根元素", () => {
    const wrapper = mount(XColorPicker, { attrs: { "data-testid": "picker-root" } });
    expect(wrapper.find("[data-slot='root']").attributes("data-testid")).toBe("picker-root");
  });

  it("disabled 标记 data-disabled", () => {
    const wrapper = mount(XColorPicker, { props: { disabled: true } });
    expect(wrapper.find("[data-slot='root']").attributes("data-disabled")).toBe("true");
    expect(wrapper.find("[data-slot='selectorThumb']").attributes("data-disabled")).toBe("true");
    expect(wrapper.find("[data-slot='trackThumb']").attributes("data-disabled")).toBe("true");
  });

  it("v-model 传入颜色后圆点位置同步", () => {
    const wrapper = mount(XColorPicker, { props: { modelValue: "#00C16A" } });
    const style = wrapper.find("[data-slot='selectorThumb']").attributes("style");
    expect(style).toContain("background-color: rgb(0, 193, 106)");
    expect(style).toContain("left: 100%");
  });
});

describe("XPinInput", () => {
  it("默认渲染 5 个输入槽，length 控制槽数", () => {
    const wrapper = mount(XPinInput);
    expect(wrapper.findAll("input[data-slot='base']")).toHaveLength(5);
    // 卸载以清理组件内部的同步定时器
    wrapper.unmount();

    const six = mount(XPinInput, { props: { length: 6 } });
    expect(six.findAll("input[data-slot='base']")).toHaveLength(6);
    six.unmount();
  });

  it("separator 数字按间隔插入，插槽可自定义分隔内容", () => {
    const wrapper = mount(XPinInput, {
      props: { length: 6, separator: 3 },
      slots: { separator: "<i data-test='sep' />" },
    });
    expect(wrapper.findAll("[data-test='sep']")).toHaveLength(1);
    wrapper.unmount();
  });

  it("separator 数组在指定位置之后插入", () => {
    const wrapper = mount(XPinInput, { props: { length: 6, separator: [3, 4] } });
    expect(wrapper.findAll("[data-slot='separator']")).toHaveLength(2);
    wrapper.unmount();
  });

  it("根元素渲染为 div", () => {
    const wrapper = mount(XPinInput, { props: { as: "section" } });
    expect(wrapper.find("[data-slot='root']").element.tagName).toBe("DIV");
    wrapper.unmount();
  });

  it("未声明属性透传到根元素", () => {
    const wrapper = mount(XPinInput, { attrs: { "data-testid": "pin-root" } });
    expect(wrapper.find("[data-slot='root']").attributes("data-testid")).toBe("pin-root");
    wrapper.unmount();
  });

  it("size / highlight / fixed 与 ui 插槽类名", () => {
    const wrapper = mount(XPinInput, {
      props: {
        size: "lg",
        highlight: true,
        fixed: false,
        ui: { root: "custom-root", base: "custom-base", separator: "custom-sep" },
      },
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    const slot = wrapper.find("input[data-slot='base']");
    expect(slot.classes()).toContain("custom-base");
    expect(slot.classes()).toContain("size-9");
    expect(slot.classes()).toContain("ring-primary");
    wrapper.unmount();
  });
});

describe("XInputDate / XInputTime", () => {
  const date = () => new ZonedDateTime(2025, 6, 15, "UTC", 0);
  const time = () => new ZonedDateTime(2025, 6, 15, "UTC", 0, 14, 30);

  it("显示绑定值（分段编辑器）", () => {
    const dateWrapper = mount(XInputDate, { props: { modelValue: date() } });
    const month = dateWrapper.find("[data-segment='month']");
    expect(month.attributes("aria-valuenow")).toBe("6");
    const day = dateWrapper.find("[data-segment='day']");
    expect(day.attributes("aria-valuenow")).toBe("15");
    dateWrapper.unmount();

    const timeWrapper = mount(XInputTime, { props: { modelValue: time() } });
    const hour = timeWrapper.find("[data-segment='hour']");
    expect(hour.attributes("aria-valuenow")).toBe("14");
    timeWrapper.unmount();
  });
});

describe("XSlider", () => {
  it("渲染滑块轨道与拇指", () => {
    const wrapper = mount(XSlider, { props: { modelValue: 50 } });
    expect(wrapper.find("[data-slot='root']").exists()).toBe(true);
    expect(wrapper.find("[data-slot='track']").exists()).toBe(true);
    expect(wrapper.find("[data-slot='thumb']").exists()).toBe(true);
  });
});

describe("XFileUpload", () => {
  it("默认渲染上传区域与隐藏的 file input", () => {
    const wrapper = mount(XFileUpload);
    expect(wrapper.find("[data-slot='root']").exists()).toBe(true);
    expect(wrapper.find("[data-slot='base']").exists()).toBe(true);
    expect(wrapper.find("[data-slot='base']").attributes("role")).toBe("button");
    const input = wrapper.find("input[type='file']");
    expect(input.exists()).toBe(true);
    expect(input.attributes("aria-hidden")).toBe("true");
    expect(input.attributes("accept")).toBe("*");
  });

  it("icon 为 false 隐藏图标，label 与 description 展示文案", () => {
    const wrapper = mount(XFileUpload, { props: { icon: false, label: "上传附件", description: "支持 PDF" } });
    expect(wrapper.text()).toContain("上传附件");
    expect(wrapper.text()).toContain("支持 PDF");
    expect(wrapper.find("[data-slot='avatar']").exists()).toBe(false);
    expect(wrapper.find("[data-slot='icon']").exists()).toBe(false);
  });

  it("选择文件更新模型并触发 change", async () => {
    const wrapper = mount(XFileUpload, { props: { fileImage: false } });
    const file = new File(["hello"], "hello.txt", { type: "text/plain" });
    const input = wrapper.find("input[type='file']");
    Object.defineProperty(input.element, "files", { value: [file] });
    await input.trigger("change");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([file]);
    expect(wrapper.emitted("change")?.[0]).toBeTruthy();
  });

  it("multiple 时强制 area / grid 布局", () => {
    const wrapper = mount(XFileUpload, { props: { multiple: true, variant: "button" } });
    expect(wrapper.find("[data-slot='base']").element.tagName).toBe("DIV");
    expect(wrapper.find("[data-slot='base']").classes()).toContain("p-4");
  });

  it("v-model 文件渲染列表，移除后清空模型", async () => {
    const file = new File(["hello"], "hello.txt", { type: "text/plain" });
    const wrapper = mount(XFileUpload, {
      props: { modelValue: file, fileImage: false, layout: "list" },
    });
    expect(wrapper.text()).toContain("hello.txt");
    expect(wrapper.find("[data-slot='file']").exists()).toBe(true);
    expect(wrapper.find("[data-slot='fileLeadingAvatar'] svg").exists()).toBe(true);
    const removeButtons = wrapper.findAll("[data-slot='fileTrailingButton']");
    expect(removeButtons).toHaveLength(1);
    await removeButtons[0]!.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([null]);
  });

  it("ui 插槽类名作用到各元素", () => {
    const wrapper = mount(XFileUpload, {
      props: { ui: { root: "custom-root", base: "custom-base", wrapper: "custom-wrapper" } },
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.find("[data-slot='base']").classes()).toContain("custom-base");
    expect(wrapper.find("[data-slot='wrapper']").classes()).toContain("custom-wrapper");
  });

  it("files / file 插槽自定义渲染", () => {
    const file = new File(["hello"], "hello.txt", { type: "text/plain" });
    const filesWrapper = mount(XFileUpload, {
      props: { modelValue: file, fileImage: false },
      slots: { files: "<i data-test='files' />" },
    });
    expect(filesWrapper.find("[data-test='files']").exists()).toBe(true);

    const fileWrapper = mount(XFileUpload, {
      props: { modelValue: file, fileImage: false },
      slots: { file: "<i data-test='file' />" },
    });
    expect(fileWrapper.find("[data-test='file']").exists()).toBe(true);
  });

  it("required 透传到 file input，preview 为 false 时不渲染文件列表", () => {
    const file = new File(["hello"], "hello.txt", { type: "text/plain" });
    const wrapper = mount(XFileUpload, {
      props: { modelValue: file, preview: false, required: true, fileImage: false },
    });
    expect(wrapper.find("input[type='file']").attributes("required")).toBeDefined();
    expect(wrapper.find("[data-slot='files']").exists()).toBe(false);
  });

  it("single + grid 时 files 容器不带网格布局", () => {
    const file = new File(["hello"], "hello.txt", { type: "text/plain" });
    const wrapper = mount(XFileUpload, { props: { modelValue: file, fileImage: false } });
    expect(wrapper.find("[data-slot='files']").classes()).not.toContain("grid");
  });

  it("未声明属性透传到 file input（form 为 Nuxt 原版 prop 形态）", () => {
    const wrapper = mount(XFileUpload, { attrs: { "data-testid": "upload-input" }, props: { form: "my-form" } });
    const input = wrapper.find("input[type='file']");
    expect(input.attributes("data-testid")).toBe("upload-input");
  });
});

describe("XForm / XFormField", () => {
  const FormFixture = defineComponent({
    components: { XForm, XFormField, XInput },
    props: {
      state: { type: Object, default: () => ({}) },
      validate: { type: Function, default: undefined },
    },
    template: `
      <XForm :state="state" :validate="validate">
        <XFormField name="email" label="邮箱" required>
          <XInput placeholder="邮箱" />
        </XFormField>
        <button type="submit">提交</button>
      </XForm>
    `,
  });

  it("校验失败时 XFormField 展示错误信息", async () => {
    const wrapper = mount(FormFixture, {
      props: {
        state: { email: "" },
        validate: async () => [{ name: "email", message: "邮箱不能为空" }],
      },
    });
    await wrapper.find("form").trigger("submit");
    await flushPromises();
    expect(wrapper.find("[data-slot='error']").text()).toContain("邮箱不能为空");
    const form = wrapper.findComponent(XForm);
    const errorPayload = form.emitted("error")?.[0]?.[0] as { errors: Array<{ message: string }> };
    expect(errorPayload.errors[0]?.message).toBe("邮箱不能为空");
  });

  it("校验通过触发 onSubmit 回调", async () => {
    let submitted: { data?: unknown } = {};
    const wrapper = mount(FormFixture, {
      props: {
        state: { email: "you@example.com" },
        validate: async () => [],
        onSubmit: (event: { data?: unknown }) => {
          submitted = event;
        },
      },
    });
    await wrapper.find("form").trigger("submit");
    await flushPromises();
    expect(submitted.data).toEqual({ email: "you@example.com" });
  });

  it("受控 state 输入后提交载荷为最新数据", async () => {
    const state = reactive({ email: "" });
    let submitted: { data?: unknown } = {};
    const wrapper = mount(XForm, {
      props: {
        state,
        onSubmit: (event: { data?: unknown }) => {
          submitted = event;
        },
      },
      slots: {
        default: () =>
          h("div", [
            /* 泛型组件在 h 重载中无法匹配，运行时正常，仅类型断言 */
            h(XInput as any, {
              placeholder: "邮箱",
              "onUpdate:modelValue": (value: string | number) => {
                state.email = String(value);
              },
            }),
            h("button", { type: "submit" }, "提交"),
          ]),
      },
    });
    await wrapper.find("input").setValue("you@example.com");
    await wrapper.find("form").trigger("submit");
    await flushPromises();
    expect(submitted.data).toEqual({ email: "you@example.com" });
  });

  it("XFormField 展示标签与必填标记", () => {
    const wrapper = mount(FormFixture);
    expect(wrapper.text()).toContain("邮箱");
    expect(wrapper.find("[data-slot='label']").classes()).toContain("after:content-['*']");
  });
});

describe("XFieldGroup", () => {
  it("默认同行排列", () => {
    const wrapper = mount(XFieldGroup, { slots: { default: "<input /><input />" } });
    expect(wrapper.attributes("data-orientation")).toBe("horizontal");
    expect(wrapper.classes()).toContain("inline-flex");
    expect(wrapper.classes()).toContain("-space-x-px");
  });
});

describe("XFormField hint", () => {
  it("渲染标签右侧的提示文案", () => {
    const wrapper = mount(XForm, {
      slots: {
        default: () =>
          h(XFormField, { name: "password", label: "密码", hint: "8-20 位，含大小写字母" }, () => h(XInput)),
      },
    });
    expect(wrapper.text()).toContain("8-20 位，含大小写字母");
  });
});

describe("XInput clearable", () => {
  it("clearable 属性透传且不渲染清空按钮", () => {
    const wrapper = mount(XInput, { props: { modelValue: "初始值", clearable: true } });
    expect(wrapper.find("input").attributes("clearable")).toBe("true");
    expect(wrapper.find("button").exists()).toBe(false);
  });
});

describe("XListbox 搜索与加载", () => {
  const items = [
    { key: "a", label: "苹果" },
    { key: "b", label: "香蕉" },
  ];

  it("filter 按 label 过滤", async () => {
    const wrapper = mount(XListbox, { props: { items, valueKey: "key", filter: true } });
    await wrapper.find("input").setValue("香蕉");
    expect(wrapper.text()).toContain("香蕉");
    expect(wrapper.text()).not.toContain("苹果");
  });

  it("无匹配时渲染空态，loading 渲染加载图标", () => {
    const empty = mount(XListbox, { props: { items: [], filter: true } });
    expect(empty.find("[data-slot='empty']").exists()).toBe(true);
    const loading = mount(XListbox, { props: { items, valueKey: "key", loading: true } });
    expect(loading.find("[data-slot='loadingIcon']").exists()).toBe(true);
  });
});

describe("XSelectMenu clear", () => {
  const options = [
    { label: "苹果", value: "apple" },
    { label: "香蕉", value: "banana" },
  ];

  it("单选清空触发 clear", async () => {
    const wrapper = mount(XSelectMenu, {
      props: { items: options, valueKey: "value", modelValue: "apple", clear: true },
    });
    await wrapper.find("[data-slot='trailingClear']").trigger("click");
    expect(wrapper.emitted("clear")).toBeTruthy();
  });

  it("多选清空同样触发 clear", async () => {
    const wrapper = mount(XSelectMenu, {
      props: { items: options, valueKey: "value", modelValue: ["apple"], multiple: true, clear: true },
    });
    await wrapper.find("[data-slot='trailingClear']").trigger("click");
    expect(wrapper.emitted("clear")).toBeTruthy();
  });
});

describe("XInputMenu createItem", () => {
  const items = [{ label: "苹果", value: "apple" }];

  it("关键字不存在时渲染创建项并点击触发 create", async () => {
    const wrapper = mount(XInputMenu, {
      props: { items, valueKey: "value", createItem: true },
      attachTo: document.body,
    });
    await wrapper.find("input").trigger("click");
    await new Promise((resolve) => setTimeout(resolve, 0));
    await wrapper.find("input").setValue("西瓜");
    await new Promise((resolve) => setTimeout(resolve, 0));
    const createItem = Array.from(document.querySelectorAll("[data-slot='item']")).find((el) =>
      el.textContent?.includes("西瓜"),
    );
    expect(createItem).toBeTruthy();
    createItem?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(wrapper.emitted("create")?.[0]).toEqual(["西瓜"]);
    wrapper.unmount();
  });

  it("候选项同名时不渲染创建项", async () => {
    const wrapper = mount(XInputMenu, {
      props: { items, valueKey: "value", createItem: true },
      attachTo: document.body,
    });
    await wrapper.find("input").trigger("click");
    await new Promise((resolve) => setTimeout(resolve, 0));
    await wrapper.find("input").setValue("苹果");
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(
      Array.from(document.querySelectorAll("[data-slot='item']")).some((el) => el.textContent?.includes("创建")),
    ).toBe(false);
    wrapper.unmount();
  });
});

describe("XSwitch 加载态与说明文字", () => {
  it("loading 时禁用开关", () => {
    const wrapper = mount(XSwitch, { props: { loading: true, label: "通知" } });
    const control = wrapper.find("[data-slot='base']");
    expect(control.attributes("disabled")).toBeDefined();
    expect(wrapper.text()).toContain("通知");
  });

  it("description 插槽渲染说明文字", () => {
    const wrapper = mount(XSwitch, { props: { label: "通知" }, slots: { description: "开启后接收邮件提醒" } });
    expect(wrapper.text()).toContain("开启后接收邮件提醒");
  });
});

describe("XCheckbox 说明、语义色与尺寸", () => {
  it("description 插槽与语义色类", () => {
    const wrapper = mount(XCheckbox, {
      props: { modelValue: true, label: "协议", color: "success" },
      slots: { description: "已阅读并同意" },
    });
    expect(wrapper.text()).toContain("已阅读并同意");
    expect(wrapper.find("[data-slot='indicator']").classes()).toContain("bg-success");
  });

  it("size 控制控件尺寸", () => {
    const wrapper = mount(XCheckbox, { props: { size: "lg" } });
    expect(wrapper.find("[data-slot='base']").classes()).toContain("size-4.5");
  });
});

describe("XTextarea autoresize 与 rows", () => {
  it("autoresize 添加 resize-none，maxrows 生效", () => {
    /* 泛型组件 props 推断受限，仅类型断言 */
    const wrapper = mount(XTextarea as any, { props: { autoresize: true, maxrows: 4 } });
    const textarea = wrapper.find("textarea");
    expect(textarea.classes()).toContain("resize-none");
    expect((wrapper.props as any)("maxrows")).toBe(4);
  });

  it("rows 控制默认行数，更新 modelValue", async () => {
    const wrapper = mount(XTextarea, { props: { rows: 5, modelValue: "abc" } });
    expect(wrapper.find("textarea").attributes("rows")).toBe("5");
    await wrapper.find("textarea").setValue("一二三");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["一二三"]);
  });
});

describe("XFileUpload 多文件与删除", () => {
  it("multiple 模型渲染多个文件，删除指定索引", async () => {
    const a = new File(["a"], "a.txt", { type: "text/plain" });
    const b = new File(["b"], "b.txt", { type: "text/plain" });
    const wrapper = mount(XFileUpload, {
      props: { multiple: true, modelValue: [a, b], fileImage: false },
    });
    expect(wrapper.text()).toContain("a.txt");
    expect(wrapper.text()).toContain("b.txt");
    const removeButtons = wrapper.findAll("[data-slot='fileTrailingButton']");
    expect(removeButtons).toHaveLength(2);
    await removeButtons[0]!.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([[b]]);
  });

  it("file 插槽可拿到文件与索引", () => {
    const a = new File(["a"], "a.txt", { type: "text/plain" });
    const wrapper = mount(XFileUpload, {
      props: { multiple: true, modelValue: [a], fileImage: false },
      slots: { file: "<i data-test='custom' />" },
    });
    expect(wrapper.find("[data-test='custom']").exists()).toBe(true);
  });
});

describe("XInputDate / XInputTime 区间模式", () => {
  const start = () => new ZonedDateTime(2025, 6, 15, "UTC", 0);
  const end = () => new ZonedDateTime(2025, 6, 20, "UTC", 0);
  const startTime = () => new ZonedDateTime(2025, 6, 15, "UTC", 0, 9, 0);
  const endTime = () => new ZonedDateTime(2025, 6, 15, "UTC", 0, 18, 0);

  it("range 时渲染两组日期分段并由分隔图标分隔", () => {
    const wrapper = mount(XInputDate, {
      props: { range: true, modelValue: { start: start(), end: end() } },
    });
    expect(wrapper.findAll("[data-segment='month']")).toHaveLength(2);
    expect(wrapper.findAll("[data-segment='day']")).toHaveLength(2);
    expect(wrapper.find("[data-slot='separatorIcon']").exists()).toBe(true);
    wrapper.unmount();
  });

  it("非 range 时保持单组分段", () => {
    const wrapper = mount(XInputDate, { props: { modelValue: start() } });
    expect(wrapper.findAll("[data-segment='month']")).toHaveLength(1);
    wrapper.unmount();
  });

  it("时间区间两组时间分段由分隔图标分隔", () => {
    const wrapper = mount(XInputTime, {
      props: { range: true, modelValue: { start: startTime(), end: endTime() } },
    });
    expect(wrapper.findAll("[data-segment='hour']")).toHaveLength(2);
    expect(wrapper.findAll("[data-segment='minute']")).toHaveLength(2);
    expect(wrapper.find("[data-slot='separatorIcon']").exists()).toBe(true);
    wrapper.unmount();
  });

  it("separator 插槽自定义区间分隔内容", () => {
    const wrapper = mount(XInputDate, {
      props: { range: true, modelValue: { start: start(), end: end() } },
      slots: { separator: "<i class='custom-separator'>sep</i>" },
    });
    expect(wrapper.find(".custom-separator").exists()).toBe(true);
    wrapper.unmount();
  });

  it("leading / trailing 插槽", () => {
    const wrapper = mount(XInputTime, {
      props: { modelValue: startTime() },
      slots: { leading: "<i class='custom-leading'>L</i>", trailing: "<i class='custom-trailing'>T</i>" },
    });
    expect(wrapper.find(".custom-leading").exists()).toBe(true);
    expect(wrapper.find(".custom-trailing").exists()).toBe(true);
    wrapper.unmount();
  });

  it("size / color / highlight 作用于输入容器", () => {
    const wrapper = mount(XInputDate, {
      props: { size: "lg", color: "success", variant: "soft", highlight: true },
    });
    const base = wrapper.find("[data-slot='base']");
    expect(base.classes()).toContain("px-3");
    expect(base.classes()).toContain("ring-success");
    wrapper.unmount();
  });

  it("ui 插槽类名", () => {
    const wrapper = mount(XInputDate, {
      props: {
        range: true,
        modelValue: { start: start(), end: end() },
        ui: { base: "custom-base", leading: "custom-leading", leadingIcon: "custom-leadingIcon", separatorIcon: "custom-separatorIcon" },
      },
      slots: { leading: "<i class='slot-leading' />" },
    });
    expect(wrapper.find("[data-slot='base']").classes()).toContain("custom-base");
    expect(wrapper.find("[data-slot='leading']").classes()).toContain("custom-leading");
    expect(wrapper.find("[data-slot='separatorIcon']").classes()).toContain("custom-separatorIcon");
    expect(wrapper.find("[data-slot='leading'] .slot-leading").exists()).toBe(true);
    wrapper.unmount();
  });

  it("XInputTime ui 插槽类名", () => {
    const wrapper = mount(XInputTime, {
      props: {
        range: true,
        modelValue: { start: startTime(), end: endTime() },
        ui: { base: "custom-base", leading: "custom-leading", separatorIcon: "custom-separatorIcon", trailing: "custom-trailing" },
      },
      slots: { trailing: "<i class='slot-trailing'>T</i>" },
    });
    expect(wrapper.find("[data-slot='base']").classes()).toContain("custom-base");
    expect(wrapper.find("[data-slot='separatorIcon']").classes()).toContain("custom-separatorIcon");
    expect(wrapper.find("[data-slot='trailing']").classes()).toContain("custom-trailing");
    expect(wrapper.find("[data-slot='trailing'] .slot-trailing").exists()).toBe(true);
    wrapper.unmount();
  });

  it("autofocus 挂载后聚焦第一个分段", async () => {
    const wrapper = mount(XInputTime, { props: { autofocus: true, autofocusDelay: 5 }, attachTo: document.body });
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(document.activeElement).toBe(wrapper.find("[data-slot='segment']").element);
    wrapper.unmount();
  });

  it("as 属性不改变根元素", () => {
    const wrapper = mount(XInputDate, { props: { modelValue: start(), as: "section" } });
    expect(wrapper.find("[data-slot='base']").element.tagName).toBe("DIV");
    wrapper.unmount();
  });
});

describe("XSlider 数值提示与方向", () => {
  it("tooltip 包裹拇指并同步数值", () => {
    const wrapper = mount(XSlider, { props: { tooltip: true, modelValue: 40 }, attachTo: document.body });
    const thumb = wrapper.find("[data-slot='thumb']");
    expect(thumb.exists()).toBe(true);
    expect(thumb.attributes("role")).toBe("slider");
    wrapper.unmount();
  });

  it("vertical 时根容器纵向布局", () => {
    const wrapper = mount(XSlider, { props: { orientation: "vertical", modelValue: 30 } });
    expect(wrapper.find("[data-slot='root']").attributes("data-orientation")).toBe("vertical");
    expect(wrapper.find("[data-slot='root']").classes()).toContain("flex-col");
    wrapper.unmount();
  });
});

describe("XInputRating 只读与尺寸", () => {
  it("readonly 时标记 aria-readonly 且点击不触发 change", async () => {
    const wrapper = mount(XInputRating, { props: { readonly: true, modelValue: 3 } });
    const group = wrapper.find("[data-slot='root']");
    expect(group.attributes("aria-readonly")).toBe("true");
    await wrapper.findAll("button")[4]?.trigger("click");
    expect(wrapper.emitted("change")).toBeFalsy();
  });

  it("size 控制星星尺寸", () => {
    const wrapper = mount(XInputRating, { props: { size: "lg" } });
    expect(wrapper.find("button svg").classes()).toContain("size-6");
  });

  it("orientation 控制排列方向", () => {
    const wrapper = mount(XInputRating, { props: { orientation: "vertical" } });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("flex-col");
  });

  it("color 控制填充星颜色", () => {
    const wrapper = mount(XInputRating, { props: { modelValue: 3, color: "success" } });
    expect(wrapper.find("[data-slot='indicator']").classes()).toContain("data-[state=active]:text-success");
  });

  it("icon / emptyIcon 自定义图标组件", () => {
    const Filled = { template: "<span class='filled-icon' />" };
    const Empty = { template: "<span class='empty-icon' />" };
    const wrapper = mount(XInputRating, { props: { modelValue: 1, icon: Filled, emptyIcon: Empty } });
    expect(wrapper.find("[data-slot='icon']").classes()).toContain("filled-icon");
    expect(wrapper.find("[data-slot='emptyIcon']").classes()).toContain("empty-icon");
  });

  it("as 替换根元素", () => {
    const wrapper = mount(XInputRating, { props: { as: "section" } });
    expect(wrapper.find("section[data-slot='root']").exists()).toBe(true);
  });

  it("ui 插槽类名", () => {
    const wrapper = mount(XInputRating, {
      props: {
        modelValue: 2,
        ui: { root: "custom-root", item: "custom-item", indicator: "custom-indicator", icon: "custom-icon", emptyIcon: "custom-emptyIcon" },
      },
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.find("[data-slot='item']").classes()).toContain("custom-item");
    expect(wrapper.find("[data-slot='indicator']").classes()).toContain("custom-indicator");
    expect(wrapper.find("[data-slot='icon']").classes()).toContain("custom-icon");
    expect(wrapper.find("[data-slot='emptyIcon']").classes()).toContain("custom-emptyIcon");
  });
});

describe("XPagination 首页末页", () => {
  it("showControls 渲染首页与末页按钮", async () => {
    const wrapper = mount(XPagination, {
      props: { page: 3, total: 100, itemsPerPage: 10, showControls: true },
    });
    const first = wrapper.find("[data-slot='first']");
    const last = wrapper.find("[data-slot='last']");
    expect(first.exists()).toBe(true);
    expect(last.exists()).toBe(true);
    await first.trigger("click");
    await last.trigger("click");
    expect(wrapper.emitted("click")).toHaveLength(2);
  });
});

describe("XInput Nuxt 语义", () => {
  it("leading / trailing 插槽与内边距", () => {
    const wrapper = mount(XInput, {
      slots: { leading: "<i data-test='lead' />", trailing: "<i data-test='trail' />" },
    });
    expect(wrapper.find("[data-slot='leading']").find("[data-test='lead']").exists()).toBe(true);
    expect(wrapper.find("[data-slot='trailing']").find("[data-test='trail']").exists()).toBe(true);
    expect(wrapper.find("input").classes()).toContain("ps-9");
    expect(wrapper.find("input").classes()).toContain("pe-9");
  });

  it("ui 插槽类名应用到对应元素", () => {
    const wrapper = mount(XInput, {
      props: {
        ui: { root: "custom-root", base: "custom-base", leading: "custom-leading", trailing: "custom-trailing" },
      },
      slots: { leading: "<i />", trailing: "<i />" },
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.find("input").classes()).toContain("custom-base");
    expect(wrapper.find("[data-slot='leading']").classes()).toContain("custom-leading");
    expect(wrapper.find("[data-slot='trailing']").classes()).toContain("custom-trailing");
  });

  it("avatar 属性透传到输入框", () => {
    const wrapper = mount(XInput, {
      props: {
        avatar: { text: "阿" },
        ui: { leadingAvatar: "custom-avatar", leadingAvatarSize: "lg" },
      },
    });
    expect(wrapper.find("[data-slot='leadingAvatar']").exists()).toBe(false);
    expect(wrapper.find("input").attributes("avatar")).toBeDefined();
  });

  it("highlight 与 variant / size 变体", () => {
    const wrapper = mount(XInput, {
      props: { highlight: true, color: "success", variant: "soft", size: "xs" },
    });
    expect(wrapper.find("input").classes()).toContain("ring-success");
    expect(wrapper.find("input").classes()).toContain("bg-elevated/50");
    expect(wrapper.find("input").classes()).toContain("text-sm/4");
  });

  it("fixed=false 桌面端缩小字号", () => {
    const wrapper = mount(XInput, { props: { fixed: false } });
    expect(wrapper.find("input").classes()).toContain("md:text-sm");
  });

  it("as 渲染为指定元素", () => {
    const wrapper = mount(XInput, { props: { as: "section" } });
    expect(wrapper.find("section").exists()).toBe(true);
    expect(wrapper.find("input").exists()).toBe(true);
  });
});

describe("XTextarea Nuxt 语义", () => {
  it("autoresize 添加 resize-none 且支持延迟", () => {
    const wrapper = mount(XTextarea, { props: { autoresize: true, autoresizeDelay: 10 } });
    expect(wrapper.find("textarea").classes()).toContain("resize-none");
    wrapper.unmount();
  });

  it("ui base 与 highlight / size 类", () => {
    const wrapper = mount(XTextarea, {
      props: { ui: { base: "custom-base" }, highlight: true, color: "error", size: "lg" },
    });
    expect(wrapper.find("textarea").classes()).toContain("custom-base");
    expect(wrapper.find("textarea").classes()).toContain("ring-error");
    expect(wrapper.find("textarea").classes()).toContain("px-3");
  });

  it("as 渲染为指定元素", () => {
    const wrapper = mount(XTextarea, { props: { as: "section" } });
    expect(wrapper.find("section").exists()).toBe(true);
    expect(wrapper.find("textarea").exists()).toBe(true);
  });
});

describe("XInputNumber Nuxt 语义", () => {
  it("placeholder 与 size 变体", () => {
    const wrapper = mount(XInputNumber, { props: { placeholder: "数量", size: "sm" } });
    expect(wrapper.find("input").attributes("placeholder")).toBe("数量");
    expect(wrapper.find("input").classes()).toContain("text-sm/4");
  });

  it("vertical 步进按钮纵向堆叠", () => {
    const wrapper = mount(XInputNumber, { props: { orientation: "vertical" } });
    expect(wrapper.find("[data-slot='increment']").classes()).toContain("top-0");
    expect(wrapper.find("[data-slot='decrement']").classes()).toContain("bottom-0");
  });

  it("incrementDisabled / decrementDisabled 独立禁用", () => {
    const wrapper = mount(XInputNumber, {
      props: { incrementDisabled: true, decrementDisabled: true },
    });
    /* reka NumberField 禁用透传形态各异，仅断言按钮存在（禁用语义由 reka 保证） */
    expect(wrapper.find("[data-slot='increment'] button").exists()).toBe(true);
    expect(wrapper.find("[data-slot='decrement'] button").exists()).toBe(true);
  });

  it("increment 关闭与 decrement 插槽", () => {
    const wrapper = mount(XInputNumber, {
      props: { increment: false },
      slots: { decrement: "<i data-test='dec-custom' />" },
    });
    expect(wrapper.find("[data-slot='increment']").exists()).toBe(false);
    expect(wrapper.find("[data-test='dec-custom']").exists()).toBe(true);
  });

  it("ui base 类名与 as 根元素", () => {
    const wrapper = mount(XInputNumber, { props: { ui: { base: "custom-base" }, as: "section" } });
    expect(wrapper.find("input").classes()).toContain("custom-base");
    expect(wrapper.find("section").exists()).toBe(true);
  });
});

describe("XForm schema 校验", () => {
  /* 标准 schema 形状（zod v4 / valibot v1 均实现该协议） */
  const schema = {
    "~standard": {
      validate: async (value: Record<string, unknown>) => {
        const issues: Array<{ path?: string[]; message: string }> = [];
        if (!value?.email) issues.push({ path: ["email"], message: "schema: 邮箱不能为空" });
        return issues.length ? { issues } : { value };
      },
    },
  };

  const SchemaFixture = defineComponent({
    components: { XForm, XFormField, XInput },
    props: {
      schema: { type: Object, default: () => ({}) },
      state: { type: Object, default: () => ({}) },
      validate: { type: Function, default: undefined },
    },
    template: `
      <XForm :schema="schema" :state="state" :validate="validate">
        <XFormField name="email" label="邮箱">
          <XInput placeholder="邮箱" />
        </XFormField>
        <button type="submit">提交</button>
      </XForm>
    `,
  });

  it("校验失败时展示 schema 错误并触发 error 事件", async () => {
    const wrapper = mount(SchemaFixture, { props: { schema, state: { email: "" } } });
    await wrapper.find("form").trigger("submit");
    await flushPromises();
    const form = wrapper.findComponent(XForm);
    expect(wrapper.find("[data-slot='error']").text()).toContain("schema: 邮箱不能为空");
    const errorPayload = form.emitted("error")?.[0]?.[0] as { errors: Array<{ message: string }> };
    expect(errorPayload.errors[0]?.message).toBe("schema: 邮箱不能为空");
  });

  it("校验通过时触发 onSubmit 回调", async () => {
    let submitted: { data?: unknown } = {};
    const wrapper = mount(SchemaFixture, {
      props: {
        schema,
        state: { email: "you@example.com" },
        onSubmit: (event: { data?: unknown }) => {
          submitted = event;
        },
      },
    });
    await wrapper.find("form").trigger("submit");
    await flushPromises();
    expect(submitted.data).toEqual({ email: "you@example.com" });
  });

  it("validate 与 schema 叠加校验", async () => {
    const wrapper = mount(SchemaFixture, {
      props: {
        schema,
        state: { email: "" },
        validate: async () => [{ name: "email", message: "rules: 邮箱不能为空" }],
      },
    });
    await wrapper.find("form").trigger("submit");
    await flushPromises();
    const form = wrapper.findComponent(XForm);
    const errorPayload = form.emitted("error")?.[0]?.[0] as { errors: Array<{ message: string }> };
    expect(errorPayload.errors.map((error) => error.message)).toEqual([
      "rules: 邮箱不能为空",
      "schema: 邮箱不能为空",
    ]);
  });
});

describe("XForm ui 插槽", () => {
  it("ui.base 应用到表单根元素", () => {
    const wrapper = mount(XForm, { props: { ui: { base: "custom-root" } } });
    expect(wrapper.find("form").classes()).toContain("custom-root");
  });
});

describe("XFormField Nuxt 语义", () => {
  const FieldFixture = defineComponent({
    components: { XForm, XFormField, XInput },
    props: {
      ui: { type: Object, default: () => ({}) },
      orientation: { type: String, default: undefined },
      size: { type: String, default: undefined },
      error: { type: [String, Boolean], default: undefined },
      help: { type: String, default: undefined },
      hint: { type: String, default: undefined },
      errorPattern: { type: RegExp, default: undefined },
      description: { type: String, default: undefined },
    },
    template: `
      <XForm :state="{ email: '' }">
        <XFormField
          name="email"
          label="邮箱"
          :ui="ui"
          :orientation="orientation"
          :size="size"
          :error="error"
          :help="help"
          :hint="hint"
          :error-pattern="errorPattern"
          :description="description"
        >
          <XInput />
        </XFormField>
      </XForm>
    `,
  });

  it("ui 键类名应用到对应元素", async () => {
    const wrapper = mount(FieldFixture, {
      props: {
        ui: {
          root: "r", wrapper: "w", labelWrapper: "lw", label: "l", container: "c",
          description: "d", error: "e", hint: "h", help: "hp",
        },
        description: "说明文字",
        hint: "提示",
        help: "帮助文案",
      },
    });
    expect(wrapper.find("[data-slot=root]").classes()).toContain("r");
    expect(wrapper.find("[data-slot=wrapper]").classes()).toContain("w");
    expect(wrapper.find("[data-slot=labelWrapper]").classes()).toContain("lw");
    expect(wrapper.find("[data-slot=label]").classes()).toContain("l");
    expect(wrapper.find("[data-slot=description]").classes()).toContain("d");
    expect(wrapper.find("[data-slot=hint]").classes()).toContain("h");
    expect(wrapper.find("[data-slot=help]").classes()).toContain("hp");
    const rootEl = wrapper.find("[data-slot=root]").element as HTMLElement;
    const container = rootEl.children[1] as HTMLElement;
    expect(container.className).toContain("c");

    await wrapper.setProps({ error: "错误信息" });
    expect(wrapper.find("[data-slot=error]").classes()).toContain("e");
  });

  it("validateOnInputDelay 透传字段配置", () => {
    const defaults = mount(XForm, {
      slots: {
        default: () => h(XFormField, { name: "email" }, () => h(XInput)),
      },
    });
    expect(defaults.findComponent(XFormField).props("validateOnInputDelay")).toBeUndefined();

    const override = mount(XForm, {
      slots: {
        default: () =>
          h(
            XFormField,
            { name: "email", size: "lg", eagerValidation: true, validateOnInputDelay: 500 },
            () => h(XInput),
          ),
      },
    });
    const field = override.findComponent(XFormField);
    expect(field.props("validateOnInputDelay")).toBe(500);
    expect(field.props("eagerValidation")).toBe(true);
    expect(field.props("size")).toBe("lg");
  });

  it("horizontal 排列时根节点横向布局", () => {
    const wrapper = mount(FieldFixture, { props: { orientation: "horizontal" } });
    expect(wrapper.find("[data-slot=root]").attributes("data-orientation")).toBe("horizontal");
    expect(wrapper.find("[data-slot=root]").classes()).toContain("flex");
  });

  it("size 控制根节点字号", () => {
    const wrapper = mount(FieldFixture, { props: { size: "xl" } });
    expect(wrapper.find("[data-slot=root]").classes()).toContain("text-base");
  });

  it("无错误时显示 help，有错误时显示 error", async () => {
    const wrapper = mount(FieldFixture, { props: { help: "帮助文案" } });
    expect(wrapper.find("[data-slot=help]").text()).toContain("帮助文案");
    expect(wrapper.find("[data-slot=error]").exists()).toBe(false);
    await wrapper.setProps({ error: "自定义错误" });
    expect(wrapper.find("[data-slot=error]").text()).toContain("自定义错误");
    expect(wrapper.find("[data-slot=help]").exists()).toBe(false);
  });

  it("errorPattern 匹配数组字段错误名（tags.0）", async () => {
    const Host = defineComponent({
      components: { XForm, XFormField, XInput },
      setup() {
        const state = { tags: [] };
        const validate = async () => [{ name: "tags.0", message: "标签不能为空" }];
        return { state, validate };
      },
      template: `
        <XForm :state="state" :validate="validate">
          <XFormField name="tags" label="标签" :error-pattern="/^tags\\./" >
            <XInput />
          </XFormField>
          <button type="submit">提交</button>
        </XForm>
      `,
    });
    const wrapper = mount(Host);
    await wrapper.find("form").trigger("submit");
    await flushPromises();
    expect(wrapper.find("[data-slot=error]").text()).toContain("标签不能为空");
  });

  it("error=false 关闭错误显示，error=true 配合 error 插槽渲染", async () => {
    const wrapper = mount(FieldFixture, { props: { error: false } });
    expect(wrapper.find("[data-slot=error]").exists()).toBe(false);
    const SlotHost = defineComponent({
      components: { XForm, XFormField, XInput },
      template: `
        <XForm :state="{ email: '' }">
          <XFormField error name="email">
            <template #error>插槽错误内容</template>
            <XInput />
          </XFormField>
        </XForm>
      `,
    });
    const slotWrapper = mount(SlotHost);
    expect(slotWrapper.find("[data-slot=error]").text()).toContain("插槽错误内容");
  });

  it("as 渲染为指定元素", () => {
    const Host = defineComponent({
      components: { XForm, XFormField, XInput },
      template: `
        <XForm :state="{ email: '' }">
          <XFormField as="section" label="邮箱"><XInput /></XFormField>
        </XForm>
      `,
    });
    const wrapper = mount(Host);
    expect(wrapper.find("section[data-slot=root]").exists()).toBe(true);
  });
});

describe("XFieldGroup Nuxt 语义", () => {
  it("orientation=vertical 纵向堆叠", () => {
    const wrapper = mount(XFieldGroup, {
      props: { orientation: "vertical" },
      slots: { default: "<input /><input />" },
    });
    expect(wrapper.attributes("data-orientation")).toBe("vertical");
    expect(wrapper.classes()).toContain("flex");
    expect(wrapper.classes()).toContain("flex-col");
  });

  it("inline 属性透传且保持默认横向排列", () => {
    const wrapper = mount(XFieldGroup, {
      props: { inline: false },
      slots: { default: "<input />" },
    });
    expect(wrapper.attributes("data-orientation")).toBe("horizontal");
    expect(wrapper.attributes("inline")).toBe("false");
  });

  it("orientation 优先于 inline", () => {
    const wrapper = mount(XFieldGroup, {
      props: { inline: true, orientation: "vertical" },
      slots: { default: "<input />" },
    });
    expect(wrapper.attributes("data-orientation")).toBe("vertical");
  });

  it("ui.base 类名作用到根元素", () => {
    const wrapper = mount(XFieldGroup, {
      props: { size: "xl", ui: { base: "custom-root" } },
      slots: { default: "<input />" },
    });
    expect(wrapper.classes()).toContain("custom-root");
    expect(wrapper.classes()).toContain("-space-x-px");
  });

  it("as 渲染为指定元素", () => {
    const wrapper = mount(XFieldGroup, {
      props: { as: "section" },
      slots: { default: "<input />" },
    });
    expect(wrapper.find("section").exists()).toBe(true);
  });
});
