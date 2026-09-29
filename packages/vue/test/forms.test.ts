import { defineComponent } from "vue";
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
});

describe("XInputTags", () => {
  it("回车添加、关闭移除", async () => {
    const wrapper = mount(XInputTags);
    const input = wrapper.find("input");
    await input.setValue("Vue");
    await input.trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([["Vue"]]);
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
