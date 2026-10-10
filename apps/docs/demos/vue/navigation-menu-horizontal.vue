<script setup lang="ts">
import XNavigationMenu from '@/components/kit/XNavigationMenu.vue'
</script>

<template>
  <XNavigationMenu
    orientation="horizontal"
    arrow
    :items="[
      { key: 'home', label: '首页', icon: 'house' },
      {
        key: 'products',
        label: '产品',
        icon: 'package',
        children: [
          { key: 'editor', label: '编辑器', icon: 'pen', description: '富文本编辑组件' },
          { key: 'charts', label: '图表库', icon: 'chart-bar', description: '数据可视化图表' },
          { key: 'forms', label: '表单套件', icon: 'form-input', description: '表单与校验' },
        ],
      },
      {
        key: 'docs',
        label: '文档',
        children: [
          { key: 'guide', label: '使用指南', description: '快速上手教程' },
          { key: 'api', label: 'API 参考', description: '全部组件属性' },
        ],
      },
      { key: 'blog', label: '博客', target: '_blank' },
    ]"
  />
</template>
