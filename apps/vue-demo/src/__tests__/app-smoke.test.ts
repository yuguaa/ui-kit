import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import App from "../App.vue";

describe("App smoke", () => {
  it("渲染全部组件区块", () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain("ui-kit · Vue");
    expect(wrapper.text()).toContain("表单 Forms");
    expect(wrapper.text()).toContain("主要按钮");
    expect(wrapper.text()).toContain("99+");
    expect(wrapper.text()).toContain("拖拽文件到此处，或点击上传");
  });
});
