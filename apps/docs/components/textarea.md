---
title: Textarea 多行文本
description: 用于输入多行文本内容
---

# Textarea 多行文本

用于输入多行文本内容，支持尺寸、颜色、自动高度与字数统计。

<script setup>
import TextareaBasic from '@demos/vue/textarea-basic.vue'
import textareaBasicRaw from '@demos/vue/textarea-basic.vue.code.txt?raw'
import TextareaShowCount from '@demos/vue/textarea-showcount.vue'
import textareaShowCountRaw from '@demos/vue/textarea-showcount.vue.code.txt?raw'
import TextareaAutosize from '@demos/vue/textarea-autosize.vue'
import textareaAutosizeRaw from '@demos/vue/textarea-autosize.vue.code.txt?raw'
import TextareaMaxRows from '@demos/vue/textarea-maxrows.vue'
import textareaMaxRowsRaw from '@demos/vue/textarea-maxrows.vue.code.txt?raw'
import TextareaColors from '@demos/vue/textarea-colors.vue'
import textareaColorsRaw from '@demos/vue/textarea-colors.vue.code.txt?raw'
import TextareaUi from '@demos/vue/textarea-ui.vue'
import textareaUiRaw from '@demos/vue/textarea-ui.vue.code.txt?raw'
</script>

## 基础用法

size 支持 xs / sm / md / lg / xl 五档；rows 控制默认行数。

<DemoBlock title="尺寸与禁用" description="size / placeholder / disabled" :code="textareaBasicRaw">
  <TextareaBasic />
</DemoBlock>

## 字数统计

showCount 在右下角显示字数统计；配合 maxLength 时显示「当前长度 / 最大长度」。

<DemoBlock title="当前字数与上限" description="showCount / maxLength" :code="textareaShowCountRaw">
  <TextareaShowCount />
</DemoBlock>

## 自动高度

autoresize 让高度随内容增长，autoresizeDelay 控制挂载后首次调整的延迟。

<DemoBlock title="高度随内容增长" description="autoresize / autoresizeDelay" :code="textareaAutosizeRaw">
  <TextareaAutosize />
</DemoBlock>

## 高度上限

maxrows 给自动高度加上行数上限，内容超过上限后高度保持不变，在控件内部滚动。

<DemoBlock title="超出上限内部滚动" description="autoresize / maxrows" :code="textareaMaxRowsRaw">
  <TextareaMaxRows />
</DemoBlock>

## 颜色与高亮

color 控制聚焦描边颜色；highlight 始终显示颜色描边，类似聚焦态。

<DemoBlock title="颜色与高亮" description="color / highlight" :code="textareaColorsRaw">
  <TextareaColors />
</DemoBlock>

## ui 插槽自定义

<DemoBlock title="主题插槽类名" description="ui 的 base 键" :code="textareaUiRaw">
  <TextareaUi />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-textarea
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | xs · sm · md · lg · xl | md | 控件尺寸 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 组件颜色（聚焦描边与高亮） |
| highlight | boolean | false | 始终显示颜色描边，类似聚焦态 |
| fixed | boolean | true | 保持移动端字号在所有断点一致 |
| rows | number | 3 | 行数 |
| placeholder | string | - | 占位文字 |
| disabled | boolean | false | 是否禁用 |
| required | boolean | false | 是否必填 |
| autoresize | boolean | false | 自动调整高度 |
| autoresizeDelay | number | 0 | 自动调整高度的延迟（毫秒） |
| maxrows | number | 0 | 自动调整高度的行数上限，超出后内容在控件内部滚动 |
| autosize | boolean | false | 自动调整高度（等价 autoresize，CSS 实现） |
| maxRows | number | - | 自动调整高度的行数上限（等价 maxrows，CSS 实现） |
| status | error · warning | - | 校验状态 |
| maxLength | number | - | 最大输入长度 |
| showCount | boolean | false | 右下角显示字数统计，设置 maxLength 时显示「当前长度 / 最大长度」 |
| as | string · Component | div | 渲染为指定元素或组件 |
| ui | TextareaUi | - | 主题插槽类名 |

**方法**（ref 调用）：focus() · blur() · autoResize()

## ui 插槽

| 键 | 说明 |
| --- | --- |
| base | 多行文本框 |

## 动效

- focus：outline 加粗过渡（transition-colors）
- 无位移动画
