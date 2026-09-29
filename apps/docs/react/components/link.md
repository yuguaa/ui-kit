---
title: Link 链接
description: 页面内或跨页面的超链接，支持前后图标与激活态
---

# Link 链接

页面内或跨页面的超链接。

<script setup>
import NavigationBasic from '@demos/react/navigation-basic'
import navigationBasicRaw from '@demos/react/navigation-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="导航组件全景：链接、面包屑、标签页、导航菜单、分页、步骤条与命令面板" :code="navigationBasicRaw">
  <ReactDemo :component="NavigationBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-link
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| to | string | - | 链接地址 |
| color | primary · secondary · neutral | primary | 颜色 |
| active | boolean | false | 激活态 |
| disabled | boolean | false | 是否禁用 |
| leading / trailing | ReactNode | - | 前置 / 后置图标 |
