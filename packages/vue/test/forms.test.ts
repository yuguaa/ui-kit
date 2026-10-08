import { defineComponent, h } from "vue";
import { mount } from "@vue/test-utils";
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

describe("XInput", () => {
  it("默认 md 尺寸与插槽", () => {
    const wrapper = mount(XInput, {
      slots: { prefix: "<i data-test='p' />", suffix: "<i data-test='s' />" },
    });
    expect(wrapper.find("input").classes()).toContain("h-9");
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
    expect(wrapper.find("[data-slot='switch']").attributes("data-size")).toBe("sm");
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
    const wrapper = mount(XSelectMenu, { props: { options }, attachTo: document.body });
    expect(wrapper.find("button").text()).toContain("请选择");
    await wrapper.find("button").trigger("click");
    const option = Array.from(document.querySelectorAll("button")).find((b) => b.textContent === "苹果");
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
});

describe("XInputRating", () => {
  it("点击第三颗星触发 change", async () => {
    const wrapper = mount(XInputRating);
    await wrapper.findAll("button")[2]?.trigger("click");
    expect(wrapper.emitted("change")?.[0]).toEqual([3]);
  });
});

describe("XColorPicker", () => {
  it("点击预设色板触发 change", async () => {
    const wrapper = mount(XColorPicker, { attachTo: document.body });
    await wrapper.find("[aria-label='选择颜色']").trigger("click");
    const preset = document.querySelector("[aria-label='#00DC82']");
    preset?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("change")?.[0]).toEqual(["#00DC82"]);
    wrapper.unmount();
  });
});

describe("XPinInput", () => {
  it("渲染 length 个输入槽", () => {
    const wrapper = mount(XPinInput, { props: { length: 6 } });
    expect(wrapper.findAll("[data-slot='input-otp-slot']")).toHaveLength(6);
    // 卸载以清理组件内部的同步定时器
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
  it("渲染滑块并触发 change", async () => {
    const wrapper = mount(XSlider, { props: { modelValue: 50 } });
    expect(wrapper.find("[data-slot='slider']").exists()).toBe(true);
  });
});

describe("XFileUpload", () => {
  it("默认提示文案", () => {
    const wrapper = mount(XFileUpload);
    expect(wrapper.text()).toContain("拖拽文件到此处，或点击上传");
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

  it("filterable 按 label 过滤", async () => {
    const wrapper = mount(XListbox, { props: { items, filterable: true } });
    await wrapper.find("input").setValue("香蕉");
    expect(wrapper.text()).toContain("香蕉");
    expect(wrapper.text()).not.toContain("苹果");
  });

  it("无匹配时显示 emptyText，loading 显示加载提示", () => {
    const empty = mount(XListbox, { props: { items: [], filterable: true, emptyText: "没有结果" } });
    expect(empty.text()).toContain("没有结果");
    const loading = mount(XListbox, { props: { items, loading: true } });
    expect(loading.text()).toContain("加载中…");
  });
});

describe("XSelectMenu clearable", () => {
  const options = [
    { label: "苹果", value: "apple" },
    { label: "香蕉", value: "banana" },
  ];

  it("单选清空为空字符串", async () => {
    const wrapper = mount(XSelectMenu, { props: { options, modelValue: "apple", clearable: true } });
    await wrapper.find("[aria-label='清空']").trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([""]);
  });

  it("多选清空为空数组", async () => {
    const wrapper = mount(XSelectMenu, {
      props: { options, modelValue: ["apple"], multiple: true, clearable: true },
    });
    await wrapper.find("[aria-label='清空']").trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([[]]);
  });
});

describe("XInputMenu createItem", () => {
  const items = [{ label: "苹果", value: "apple" }];

  it("关键字不存在时回车创建新选项", async () => {
    const wrapper = mount(XInputMenu, { props: { items, createItem: true } });
    await wrapper.find("input").setValue("西瓜");
    await wrapper.find("input").trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("create")?.[0]).toEqual(["西瓜"]);
    expect(wrapper.emitted("select")?.[0]).toEqual([{ label: "西瓜", value: "西瓜" }]);
  });

  it("候选项同名时不触发创建", async () => {
    const wrapper = mount(XInputMenu, { props: { items, createItem: true } });
    await wrapper.find("input").setValue("苹果");
    await wrapper.find("input").trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("create")).toBeFalsy();
  });
});

describe("XSwitch 加载态与说明文字", () => {
  it("loading 时禁用开关并标记 aria-busy", () => {
    const wrapper = mount(XSwitch, { props: { loading: true, label: "通知" } });
    const control = wrapper.find("[data-slot='switch']");
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
      props: { label: "协议", color: "success" },
      slots: { description: "已阅读并同意" },
    });
    expect(wrapper.text()).toContain("已阅读并同意");
    expect(wrapper.find("[data-slot='checkbox']").classes()).toContain("data-[state=checked]:bg-success-6");
  });

  it("size 控制控件尺寸", () => {
    const wrapper = mount(XCheckbox, { props: { size: "lg" } });
    expect(wrapper.find("[data-slot='checkbox']").classes()).toContain("size-5");
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

describe("XFileUpload 受控列表与进度", () => {
  it("受控 files 渲染状态与进度，移除时回调", async () => {
    const file = { name: "报告.pdf", size: 2048, status: "uploading" as const, progress: 40 };
    const wrapper = mount(XFileUpload, { props: { files: [file] } });
    expect(wrapper.text()).toContain("报告.pdf");
    expect(wrapper.text()).toContain("40%");
    await wrapper.find("[aria-label='移除文件']").trigger("click");
    expect(wrapper.emitted("remove")?.[0]).toEqual([file, 0]);
    expect(wrapper.emitted("update:files")?.[0]).toEqual([[]]);
  });
});

describe("XInputDate / XInputTime 区间模式", () => {
  it("range 时展示开始与结束", () => {
    const wrapper = mount(XInputDate, { props: { range: true, modelValue: ["2025-06-15", "2025-06-20"] } });
    expect((wrapper.find("input").element as HTMLInputElement).value).toBe("2025-06-15 → 2025-06-20");
  });

  it("非 range 时保持单值", () => {
    const wrapper = mount(XInputDate, { props: { modelValue: "2025-06-15" } });
    expect((wrapper.find("input").element as HTMLInputElement).value).toBe("2025-06-15");
  });

  it("时间区间展示开始与结束", () => {
    const wrapper = mount(XInputTime, { props: { range: true, modelValue: ["09:00", "18:00"] } });
    expect((wrapper.find("input").element as HTMLInputElement).value).toBe("09:00 → 18:00");
  });
});

describe("XSlider 数值提示与方向", () => {
  it("tooltip 显示当前值", () => {
    const wrapper = mount(XSlider, { props: { tooltip: true, modelValue: 40 } });
    expect(wrapper.text()).toContain("40");
  });

  it("vertical 时根容器纵向布局", () => {
    const wrapper = mount(XSlider, { props: { tooltip: true, orientation: "vertical", modelValue: 30 } });
    expect(wrapper.find("[data-orientation='vertical']").exists()).toBe(true);
    expect(wrapper.text()).toContain("30");
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
});

describe("XPagination 首页末页", () => {
  it("showControls 渲染首页与末页按钮", async () => {
    const wrapper = mount(XPagination, {
      props: { current: 3, total: 100, pageSize: 10, showControls: true },
    });
    await wrapper.find("[aria-label='首页']").trigger("click");
    expect(wrapper.emitted("change")?.[0]).toEqual([1, 10]);
    await wrapper.find("[aria-label='末页']").trigger("click");
    expect(wrapper.emitted("change")?.[1]).toEqual([10, 10]);
  });
});
