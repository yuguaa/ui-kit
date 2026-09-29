/**
 * 文档站主题：lobe-ui 风格定制。
 * 注册 DemoBlock / ReactDemo 全局组件，并引入组件运行所需的 Tailwind 与设计 token。
 */
import DefaultTheme from "vitepress/theme";
import DemoBlock from "./components/DemoBlock.vue";
import ReactDemo from "./components/ReactDemo.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("DemoBlock", DemoBlock);
    app.component("ReactDemo", ReactDemo);
  },
};
