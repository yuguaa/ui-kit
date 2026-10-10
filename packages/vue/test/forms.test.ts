import { defineComponent, h } from "vue";
import { flushPromises, mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
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
import { useXForm } from "@/components/kit/useXForm";

describe("XInput", () => {
  it("默认 md 尺寸与插槽", () => {
    const wrapper = mount(XInput, {
      slots: { prefix: "<i data-test='p' />", suffix: "<i data-test='s' />" },
    });
    expect(wrapper.find("input").classes()).toContain("h-8");
    expect(wrapper.find("[data-test='p']").exists()).toBe(true);
    expect(wrapper.find("[data-test='s']").exists()).toBe(true);
  });

  it("error 状态与 addon 插槽", () => {
    const wrapper = mount(XInput, {
      props: { status: "error" },
      slots: { addonBefore: "https://", addonAfter: ".com" },
    });
    expect(wrapper.find("input").classes()).toContain("border-error-6");
    expect(wrapper.text()).toContain("https://");
    expect(wrapper.text()).toContain(".com");
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
  it("label 插槽与 indeterminate", () => {
    const wrapper = mount(XCheckbox, { props: { indeterminate: true }, slots: { label: "选项 A" } });
    expect(wrapper.text()).toContain("选项 A");
    expect(wrapper.find("[data-state='indeterminate']").exists()).toBe(true);
  });

  it("属性透传到内部控件", () => {
    const wrapper = mount(XCheckbox, { props: { id: "agree" } });
    expect(wrapper.find("button").attributes("id")).toBe("agree");
  });
});

describe("XRadioGroup", () => {
  const options = [
    { value: "a", label: "选项 A" },
    { value: "b", label: "选项 B" },
  ];

  it("渲染选项并更新选中值", async () => {
    const wrapper = mount(XRadioGroup, { props: { options } });
    expect(wrapper.text()).toContain("选项 A");
    await wrapper.findAll("button[role='radio']")[1]?.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["b"]);
  });

  it("按钮样式", () => {
    const wrapper = mount(XRadioGroup, { props: { options, variant: "button" } });
    expect(wrapper.findAll("button[role='radio']")).toHaveLength(2);
  });
});

describe("XSwitch", () => {
  it("选中插槽与尺寸", () => {
    const wrapper = mount(XSwitch, {
      props: { modelValue: true, size: "small" },
      slots: { checkedChildren: "开", unCheckedChildren: "关" },
    });
    expect(wrapper.text()).toContain("开");
    expect(wrapper.find("[data-slot='base']").classes()).toContain("h-3.5");
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
  it("加号步进与 max 限制", async () => {
    const wrapper = mount(XInputNumber, { props: { modelValue: 5, max: 5 } });
    expect(wrapper.find("[aria-label='increment']").attributes("disabled")).toBeDefined();
    await wrapper.find("[aria-label='decrement']").trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([4]);
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
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([["Vue"]]);
  });

  it("属性透传到内部 input", () => {
    const wrapper = mount(XInputTags, { props: { id: "tags", name: "tags" } });
    expect(wrapper.find("input").attributes("id")).toBe("tags");
  });

  it("maxLength 限制单个标签长度", async () => {
    const wrapper = mount(XInputTags, { props: { maxLength: 3 } });
    const input = wrapper.find("input");
    await input.setValue("Vueee");
    await input.trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([["Vue"]]);
  });

  it("highlight 高亮描边", () => {
    const wrapper = mount(XInputTags, { props: { highlight: true, color: "success" } });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("ring-success-6");
  });

  it("ui 插槽类名", () => {
    const wrapper = mount(XInputTags, {
      props: {
        modelValue: ["Nuxt"],
        ui: { root: "custom-root", item: "custom-item", itemText: "custom-itemText", itemDelete: "custom-itemDelete", itemDeleteIcon: "custom-deleteIcon", input: "custom-input" },
      },
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.find("[data-slot='item']").classes()).toContain("custom-item");
    expect(wrapper.find("[data-slot='itemText']").classes()).toContain("custom-itemText");
    expect(wrapper.find("[data-slot='itemDelete']").classes()).toContain("custom-itemDelete");
    expect(wrapper.find("[data-slot='itemDeleteIcon']").classes()).toContain("custom-deleteIcon");
    expect(wrapper.find("[data-slot='input']").classes()).toContain("custom-input");
  });

  it("deleteIcon 自定义删除图标", () => {
    const wrapper = mount(XInputTags, { props: { modelValue: ["Nuxt"], deleteIcon: "trash" } });
    expect(wrapper.find("[data-slot='itemDeleteIcon']").exists()).toBe(true);
  });

  it("leading / tag 插槽", () => {
    const wrapper = mount(XInputTags, {
      props: { modelValue: ["Nuxt"] },
      slots: {
        leading: "<i class='custom-leading'>L</i>",
        tag: "<em class='custom-tag'>{{ tag }}</em>",
      },
    });
    expect(wrapper.find("[data-slot='leading'] .custom-leading").exists()).toBe(true);
    expect(wrapper.find(".custom-tag").text()).toBe("Nuxt");
    expect(wrapper.find("[data-slot='item']").exists()).toBe(false);
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
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([3]);
    const changeEvent = wrapper.emitted("change")?.[0]?.[0] as Event;
    expect((changeEvent.target as HTMLInputElement).value).toBe(3);
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
    expect(wrapper.findAll("[data-slot='input-otp-slot']")).toHaveLength(5);
    // 卸载以清理组件内部的同步定时器
    wrapper.unmount();

    const six = mount(XPinInput, { props: { length: 6 } });
    expect(six.findAll("[data-slot='input-otp-slot']")).toHaveLength(6);
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
    expect(wrapper.findAll("[data-slot='pin-input-separator']")).toHaveLength(2);
    wrapper.unmount();
  });

  it("as 渲染为指定元素", () => {
    const wrapper = mount(XPinInput, { props: { as: "section" } });
    expect(wrapper.find("[data-slot='root']").element.tagName).toBe("SECTION");
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
    const slot = wrapper.find("[data-slot='input-otp-slot']");
    expect(slot.classes()).toContain("custom-base");
    expect(slot.classes()).toContain("size-9");
    expect(slot.classes()).toContain("ring-1");
    wrapper.unmount();
  });
});

describe("XInputDate / XInputTime", () => {
  it("显示绑定值", () => {
    const date = mount(XInputDate, { props: { modelValue: "2025-06-15" } });
    expect(date.find("input").element.value).toBe("2025-06-15");
    const time = mount(XInputTime, { props: { modelValue: "14:30" } });
    expect(time.find("input").element.value).toBe("14:30");
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
    expect(input.classes()).toContain("sr-only");
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
    const removeButtons = wrapper.findAll("button[aria-label^='移除文件']");
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

  it("未声明属性透传到 file input", () => {
    const wrapper = mount(XFileUpload, { attrs: { "data-testid": "upload-input", form: "my-form" } });
    const input = wrapper.find("input[type='file']");
    expect(input.attributes("data-testid")).toBe("upload-input");
    expect(input.attributes("form")).toBe("my-form");
  });
});

describe("XForm / XFormField", () => {
  const FormFixture = defineComponent({
    components: { XForm, XFormField, XInput },
    props: {
      rules: { type: Object, default: () => ({}) },
      defaultValues: { type: Object, default: () => ({}) },
    },
    template: `
      <XForm :rules="rules" :default-values="defaultValues">
        <XFormField name="email" label="邮箱" required>
          <XInput placeholder="邮箱" />
        </XFormField>
        <button type="submit">提交</button>
      </XForm>
    `,
  });

  it("校验失败时 XFormField 展示错误信息", async () => {
    const wrapper = mount(FormFixture, {
      props: { rules: { email: [{ required: true, message: "邮箱不能为空" }] } },
    });
    await wrapper.find("form").trigger("submit");
    expect(wrapper.text()).toContain("邮箱不能为空");
    expect(wrapper.find("[role=alert]").exists()).toBe(true);
  });

  it("校验通过触发 submit 事件", async () => {
    const wrapper = mount(FormFixture, {
      props: {
        defaultValues: { email: "you@example.com" },
        rules: { email: [{ required: true }] },
      },
    });
    await wrapper.find("form").trigger("submit");
    const form = wrapper.findComponent(XForm);
    expect(form.emitted("submit")?.[0]).toEqual([{ email: "you@example.com" }]);
  });

  it("useXForm setValue 后提交载荷为最新数据", async () => {
    const [Form, formApi] = useXForm({
      defaultValues: { email: "" },
      rules: { email: [{ required: true, message: "邮箱不能为空" }] },
    });
    const wrapper = mount(Form, {
      slots: {
        default: () =>
          h("div", [
            h(XInput, {
              placeholder: "邮箱",
              "onUpdate:modelValue": (value: string | number) => formApi.setValue("email", value),
            }),
            h("button", { type: "submit" }, "提交"),
          ]),
      },
    });
    await wrapper.find("input").setValue("you@example.com");
    await wrapper.find("form").trigger("submit");
    const form = wrapper.findComponent(XForm);
    expect(form.emitted("submit")?.[0]).toEqual([{ email: "you@example.com" }]);
  });

  it("XFormField 展示标签与必填标记", () => {
    const wrapper = mount(FormFixture);
    expect(wrapper.text()).toContain("邮箱");
    expect(wrapper.text()).toContain("*");
  });
});

describe("XFieldGroup", () => {
  it("默认同行排列", () => {
    const wrapper = mount(XFieldGroup, { slots: { default: "<input /><input />" } });
    expect(wrapper.classes()).toContain("flex");
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
  it("有值时点击清空会清空值与触发 clear", async () => {
    const wrapper = mount(XInput, { props: { modelValue: "初始值", clearable: true } });
    await wrapper.find("[aria-label='清空']").trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([""]);
    expect(wrapper.emitted("clear")).toBeTruthy();
  });

  it("无值时、禁用时不显示清空按钮", () => {
    expect(mount(XInput, { props: { clearable: true } }).find("[aria-label='清空']").exists()).toBe(false);
    const disabled = mount(XInput, { props: { modelValue: "值", clearable: true, disabled: true } });
    expect(disabled.find("[aria-label='清空']").exists()).toBe(false);
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

  it("单选清空触发 clear 与 undefined", async () => {
    const wrapper = mount(XSelectMenu, {
      props: { items: options, valueKey: "value", modelValue: "apple", clear: true },
    });
    await wrapper.find("[aria-label='清空']").trigger("click");
    expect(wrapper.emitted("clear")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([undefined]);
  });

  it("多选清空为空数组", async () => {
    const wrapper = mount(XSelectMenu, {
      props: { items: options, valueKey: "value", modelValue: ["apple"], multiple: true, clear: true },
    });
    await wrapper.find("[aria-label='清空']").trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([[]]);
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
  it("loading 时禁用开关并标记 aria-busy", () => {
    const wrapper = mount(XSwitch, { props: { loading: true, label: "通知" } });
    const control = wrapper.find("[data-slot='base']");
    expect(control.attributes("disabled")).toBeDefined();
    expect(control.attributes("aria-busy")).toBe("true");
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
    expect(wrapper.find("[data-slot='indicator']").classes()).toContain("bg-success-6");
  });

  it("size 控制控件尺寸", () => {
    const wrapper = mount(XCheckbox, { props: { size: "lg" } });
    expect(wrapper.find("[data-slot='base']").classes()).toContain("size-5");
  });
});

describe("XTextarea 字数统计", () => {
  it("showCount 显示当前长度与上限", async () => {
    const wrapper = mount(XTextarea, { props: { showCount: true, maxLength: 10, modelValue: "一二" } });
    expect(wrapper.text()).toContain("2 / 10");
    await wrapper.find("textarea").setValue("一二三");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["一二三"]);
  });

  it("未设置 maxLength 时只显示当前长度", () => {
    const wrapper = mount(XTextarea, { props: { showCount: true, modelValue: "abc" } });
    expect(wrapper.text()).toContain("3");
  });

  it("autosize + maxRows 设置最大高度", () => {
    const wrapper = mount(XTextarea, { props: { autosize: true, maxRows: 4 } });
    const textarea = wrapper.find("textarea");
    expect(textarea.classes()).toContain("overflow-auto");
    expect((textarea.element as HTMLTextAreaElement).style.maxHeight).toBe("4lh");
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
    const removeButtons = wrapper.findAll("button[aria-label^='移除文件']");
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
  it("range 时两个输入框由分隔图标分隔", () => {
    const wrapper = mount(XInputDate, { props: { range: true, modelValue: ["2025-06-15", "2025-06-20"] } });
    const inputs = wrapper.findAll("input");
    expect(inputs).toHaveLength(2);
    expect((inputs[0]!.element as HTMLInputElement).value).toBe("2025-06-15");
    expect((inputs[1]!.element as HTMLInputElement).value).toBe("2025-06-20");
    expect(wrapper.find("[data-slot='separatorIcon']").exists()).toBe(true);
  });

  it("非 range 时保持单值", () => {
    const wrapper = mount(XInputDate, { props: { modelValue: "2025-06-15" } });
    expect((wrapper.find("input").element as HTMLInputElement).value).toBe("2025-06-15");
  });

  it("时间区间两个输入框由分隔图标分隔", () => {
    const wrapper = mount(XInputTime, { props: { range: true, modelValue: ["09:00", "18:00"] } });
    const inputs = wrapper.findAll("input");
    expect(inputs).toHaveLength(2);
    expect((inputs[0]!.element as HTMLInputElement).value).toBe("09:00");
    expect((inputs[1]!.element as HTMLInputElement).value).toBe("18:00");
    expect(wrapper.find("[data-slot='separatorIcon']").exists()).toBe(true);
  });

  it("separator 插槽自定义区间分隔内容", () => {
    const wrapper = mount(XInputDate, {
      props: { range: true, modelValue: ["2025-06-15", "2025-06-20"] },
      slots: { separator: "<i class='custom-separator'>sep</i>" },
    });
    expect(wrapper.find(".custom-separator").exists()).toBe(true);
  });

  it("leading / trailing 插槽", () => {
    const wrapper = mount(XInputTime, {
      props: { modelValue: "14:30" },
      slots: { leading: "<i class='custom-leading'>L</i>", trailing: "<i class='custom-trailing'>T</i>" },
    });
    expect(wrapper.find(".custom-leading").exists()).toBe(true);
    expect(wrapper.find(".custom-trailing").exists()).toBe(true);
  });

  it("size / color / highlight 作用于输入容器", () => {
    const wrapper = mount(XInputDate, {
      props: { size: "lg", color: "success", variant: "soft", highlight: true },
    });
    const base = wrapper.find("[data-slot='base']");
    expect(base.classes()).toContain("h-9");
    expect(base.classes()).toContain("ring-success-6");
  });

  it("ui 插槽类名", () => {
    const wrapper = mount(XInputDate, {
      props: {
        range: true,
        modelValue: ["2025-06-15", "2025-06-20"],
        ui: { root: "custom-root", base: "custom-base", leading: "custom-leading", leadingIcon: "custom-leadingIcon", separatorIcon: "custom-separatorIcon" },
      },
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.find("[data-slot='base']").classes()).toContain("custom-base");
    expect(wrapper.find("[data-slot='leading']").classes()).toContain("custom-leading");
    expect(wrapper.find("[data-slot='leadingIcon']").classes()).toContain("custom-leadingIcon");
    expect(wrapper.find("[data-slot='separatorIcon']").classes()).toContain("custom-separatorIcon");
  });

  it("XInputTime ui 插槽类名", () => {
    const wrapper = mount(XInputTime, {
      props: {
        range: true,
        modelValue: ["09:00", "18:00"],
        ui: { root: "custom-root", base: "custom-base", leading: "custom-leading", leadingIcon: "custom-leadingIcon", separatorIcon: "custom-separatorIcon", trailing: "custom-trailing" },
      },
      slots: { trailing: "<i class='slot-trailing'>T</i>" },
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.find("[data-slot='base']").classes()).toContain("custom-base");
    expect(wrapper.find("[data-slot='leading']").classes()).toContain("custom-leading");
    expect(wrapper.find("[data-slot='leadingIcon']").classes()).toContain("custom-leadingIcon");
    expect(wrapper.find("[data-slot='separatorIcon']").classes()).toContain("custom-separatorIcon");
    expect(wrapper.find("[data-slot='trailing']").classes()).toContain("custom-trailing");
    expect(wrapper.find("[data-slot='trailing'] .slot-trailing").exists()).toBe(true);
  });

  it("autofocus 挂载后聚焦显示输入框", async () => {
    const wrapper = mount(XInputTime, { props: { autofocus: true, autofocusDelay: 5 }, attachTo: document.body });
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(document.activeElement).toBe(wrapper.find("input").element);
    wrapper.unmount();
  });

  it("as 替换触发按钮元素", () => {
    const wrapper = mount(XInputDate, { props: { modelValue: "2025-06-15", as: "section" } });
    expect(wrapper.find("section[data-slot='root']").exists()).toBe(true);
    expect(wrapper.find("button[data-slot='root']").exists()).toBe(false);
  });
});

describe("XSlider 数值提示与方向", () => {
  /** 等待浮层内容渲染到 body（reka Presence 状态机异步推进） */
  async function waitForBodyText(text: string): Promise<boolean> {
    for (let i = 0; i < 20; i++) {
      if (document.body.textContent?.includes(text)) return true;
      await new Promise((resolve) => setTimeout(resolve, 10));
    }
    return false;
  }

  it("tooltip 显示当前值", async () => {
    mount(XSlider, { props: { tooltip: { open: true }, modelValue: 40 } });
    expect(await waitForBodyText("40")).toBe(true);
  });

  it("vertical 时根容器纵向布局", async () => {
    const wrapper = mount(XSlider, { props: { tooltip: { open: true }, orientation: "vertical", modelValue: 30 } });
    expect(wrapper.find("[data-orientation='vertical']").exists()).toBe(true);
    expect(await waitForBodyText("30")).toBe(true);
  });
});

describe("XInputRating 只读与尺寸", () => {
  it("readonly 时标记 aria-readonly 且点击不触发 change", async () => {
    const wrapper = mount(XInputRating, { props: { readonly: true, modelValue: 3 } });
    const group = wrapper.find("[aria-label='rating']");
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
    expect(wrapper.find("[aria-label='rating']").classes()).toContain("flex-col");
  });

  it("color 控制填充星颜色", () => {
    const wrapper = mount(XInputRating, { props: { modelValue: 3, color: "success" } });
    expect(wrapper.find("[data-slot='indicator']").classes()).toContain("fill-success-6");
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
    expect(wrapper.find("section[aria-label='rating']").exists()).toBe(true);
  });

  it("ui 插槽类名", () => {
    const wrapper = mount(XInputRating, {
      props: {
        modelValue: 2,
        ui: { root: "custom-root", item: "custom-item", indicator: "custom-indicator", icon: "custom-icon", emptyIcon: "custom-emptyIcon" },
      },
    });
    expect(wrapper.find("[aria-label='rating']").classes()).toContain("custom-root");
    expect(wrapper.find("button").classes()).toContain("custom-item");
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
    await wrapper.find("[aria-label='First Page']").trigger("click");
    expect(wrapper.emitted("update:page")?.[0]).toEqual([1]);
    await wrapper.find("[aria-label='Last Page']").trigger("click");
    expect(wrapper.emitted("update:page")?.[1]).toEqual([10]);
  });
});

describe("XInput Nuxt 语义", () => {
  it("leading / trailing 插槽与内边距", () => {
    const wrapper = mount(XInput, {
      slots: { leading: "<i data-test='lead' />", trailing: "<i data-test='trail' />" },
    });
    expect(wrapper.find("[data-slot='leading']").find("[data-test='lead']").exists()).toBe(true);
    expect(wrapper.find("[data-slot='trailing']").find("[data-test='trail']").exists()).toBe(true);
    expect(wrapper.find("input").classes()).toContain("pl-9");
    expect(wrapper.find("input").classes()).toContain("pr-9");
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

  it("avatar 渲染前置头像并应用 ui 类名", () => {
    const wrapper = mount(XInput, {
      props: {
        avatar: { text: "阿" },
        ui: { leadingAvatar: "custom-avatar", leadingAvatarSize: "lg" },
      },
    });
    const avatar = wrapper.find("[data-slot='leadingAvatar']");
    expect(avatar.exists()).toBe(true);
    expect(avatar.classes()).toContain("custom-avatar");
    expect(avatar.classes()).toContain("size-10");
  });

  it("highlight 与 variant / size 变体", () => {
    const wrapper = mount(XInput, {
      props: { highlight: true, color: "success", variant: "soft", size: "xs" },
    });
    expect(wrapper.find("input").classes()).toContain("ring-success-6");
    expect(wrapper.find("input").classes()).toContain("bg-muted/50");
    expect(wrapper.find("input").classes()).toContain("h-6");
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
    expect(wrapper.find("textarea").classes()).toContain("ring-error-6");
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
    expect(wrapper.find("input").classes()).toContain("h-7");
  });

  it("vertical 步进按钮纵向堆叠", () => {
    const wrapper = mount(XInputNumber, { props: { orientation: "vertical" } });
    expect(wrapper.find("[aria-label='increment']").classes()).toContain("top-0");
    expect(wrapper.find("[aria-label='decrement']").classes()).toContain("bottom-0");
  });

  it("incrementDisabled / decrementDisabled 独立禁用", () => {
    const wrapper = mount(XInputNumber, {
      props: { incrementDisabled: true, decrementDisabled: true },
    });
    expect(wrapper.find("[aria-label='increment']").attributes("disabled")).toBeDefined();
    expect(wrapper.find("[aria-label='decrement']").attributes("disabled")).toBeDefined();
  });

  it("increment 关闭与 decrement 插槽", () => {
    const wrapper = mount(XInputNumber, {
      props: { increment: false },
      slots: { decrement: "<i data-test='dec-custom' />" },
    });
    expect(wrapper.find("[aria-label='increment']").exists()).toBe(false);
    expect(wrapper.find("[data-test='dec-custom']").exists()).toBe(true);
  });

  it("ui base 类名与 as 根元素", () => {
    const wrapper = mount(XInputNumber, { props: { ui: { base: "custom-base" }, as: "section" } });
    expect(wrapper.find("input").classes()).toContain("custom-base");
    expect(wrapper.find("section").exists()).toBe(true);
  });
});

describe("XForm schema 校验", () => {
  /** 标准 schema 形状（zod v4 / valibot v1 均实现该协议） */
  const schema = {
    "~standard": {
      validate: async (value: Record<string, unknown>) => {
        const issues: Array<{ path?: string[]; message: string }> = [];
        if (!value.email) issues.push({ path: ["email"], message: "schema: 邮箱不能为空" });
        return issues.length ? { issues } : { value };
      },
    },
  };

  const SchemaFixture = defineComponent({
    components: { XForm, XFormField, XInput },
    props: {
      schema: { type: Object, default: () => ({}) },
      defaultValues: { type: Object, default: () => ({}) },
    },
    template: `
      <XForm :schema="schema" :default-values="defaultValues">
        <XFormField name="email" label="邮箱">
          <XInput placeholder="邮箱" />
        </XFormField>
        <button type="submit">提交</button>
      </XForm>
    `,
  });

  it("校验失败时展示 schema 错误并触发 error 事件", async () => {
    const wrapper = mount(SchemaFixture, { props: { schema } });
    await wrapper.find("form").trigger("submit");
    await flushPromises();
    const form = wrapper.findComponent(XForm);
    expect(wrapper.find("[role=alert]").text()).toContain("schema: 邮箱不能为空");
    expect(form.emitted("error")?.[0]).toEqual([{ email: "schema: 邮箱不能为空" }]);
  });

  it("校验通过时触发 submit 事件", async () => {
    const wrapper = mount(SchemaFixture, {
      props: { schema, defaultValues: { email: "you@example.com" } },
    });
    await wrapper.find("form").trigger("submit");
    await flushPromises();
    const form = wrapper.findComponent(XForm);
    expect(form.emitted("submit")?.[0]).toEqual([{ email: "you@example.com" }]);
  });

  it("rules 与 schema 叠加校验", async () => {
    const wrapper = mount(SchemaFixture, { props: { schema } });
    wrapper.unmount();
    const Host = defineComponent({
      components: { XForm, XFormField, XInput },
      template: `
        <XForm :schema="schema" :rules="{ email: [{ required: true, message: 'rules: 邮箱不能为空' }] }">
          <button type="submit">提交</button>
        </XForm>
      `,
      setup() {
        return { schema };
      },
    });
    const host = mount(Host);
    await host.find("form").trigger("submit");
    await flushPromises();
    const form = host.findComponent(XForm);
    expect(form.emitted("error")?.[0]).toEqual([{ email: "rules: 邮箱不能为空" }]);
  });
});

describe("XForm ui 插槽", () => {
  it("ui.root 应用到表单根元素", () => {
    const wrapper = mount(XForm, { props: { ui: { root: "custom-root" } } });
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
      <XForm>
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

  it("validateOnInputDelay 默认 300，eagerValidation / size 透传给字段", () => {
    const defaults = mount(XForm, {
      slots: {
        default: () => h(XFormField, { name: "email" }, () => h(XInput)),
      },
    });
    expect(defaults.findComponent(XFormField).props("validateOnInputDelay")).toBe(300);

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
    expect(wrapper.find("[role=alert]").exists()).toBe(false);
    await wrapper.setProps({ error: "自定义错误" });
    expect(wrapper.find("[role=alert]").text()).toContain("自定义错误");
    expect(wrapper.find("[data-slot=help]").exists()).toBe(false);
  });

  it("errorPattern 匹配数组字段错误名（tags.0）", async () => {
    const Host = defineComponent({
      components: { XForm, XFormField, XInput },
      setup() {
        const rules = {
          "tags.0": [{ required: true, message: "标签不能为空" }],
        };
        return { rules };
      },
      template: `
        <XForm :rules="rules">
          <XFormField name="tags" label="标签" :error-pattern="/^tags\\./" >
            <XInput />
          </XFormField>
          <button type="submit">提交</button>
        </XForm>
      `,
    });
    const wrapper = mount(Host);
    await wrapper.find("form").trigger("submit");
    expect(wrapper.find("[role=alert]").text()).toContain("标签不能为空");
  });

  it("error=false 关闭错误显示，error=true 配合 error 插槽渲染", async () => {
    const wrapper = mount(FieldFixture, { props: { error: false } });
    expect(wrapper.find("[role=alert]").exists()).toBe(false);
    const SlotHost = defineComponent({
      components: { XForm, XFormField, XInput },
      template: `
        <XForm>
          <XFormField error name="email">
            <template #error>插槽错误内容</template>
            <XInput />
          </XFormField>
        </XForm>
      `,
    });
    const slotWrapper = mount(SlotHost);
    expect(slotWrapper.find("[role=alert]").text()).toContain("插槽错误内容");
  });

  it("as 渲染为指定元素", () => {
    const Host = defineComponent({
      components: { XForm, XFormField, XInput },
      template: `
        <XForm>
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

  it("inline=false 等价 vertical（旧属性兼容）", () => {
    const wrapper = mount(XFieldGroup, {
      props: { inline: false },
      slots: { default: "<input />" },
    });
    expect(wrapper.attributes("data-orientation")).toBe("vertical");
  });

  it("orientation 优先于 inline", () => {
    const wrapper = mount(XFieldGroup, {
      props: { inline: true, orientation: "vertical" },
      slots: { default: "<input />" },
    });
    expect(wrapper.attributes("data-orientation")).toBe("vertical");
  });

  it("size 控制间距与 ui.root 类名", () => {
    const wrapper = mount(XFieldGroup, {
      props: { size: "xl", ui: { root: "custom-root" } },
      slots: { default: "<input />" },
    });
    expect(wrapper.classes()).toContain("gap-5");
    expect(wrapper.classes()).toContain("custom-root");
  });

  it("as 渲染为指定元素", () => {
    const wrapper = mount(XFieldGroup, {
      props: { as: "section" },
      slots: { default: "<input />" },
    });
    expect(wrapper.find("section").exists()).toBe(true);
  });
});
