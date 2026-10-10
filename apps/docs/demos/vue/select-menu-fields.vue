<script setup lang="ts">
import { ref } from 'vue'
import XSelectMenu from '@/components/kit/XSelectMenu.vue'

const member = ref('u1')

const members = [
  { id: 'u1', name: '张三', role: '前端工程师' },
  { id: 'u2', name: '李四', role: '设计师' },
  { id: 'u3', name: '王五', role: '产品经理' },
]

const grouped = [
  { type: 'label', label: '水果' },
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { type: 'separator' },
  { label: '北京', value: 'bj' },
  { label: '上海', value: 'sh' },
]
</script>

<template>
  <div class="flex w-full flex-wrap items-center gap-4">
    <XSelectMenu
      v-model="member"
      :options="members"
      label-key="name"
      value-key="id"
      description-key="role"
      placeholder="选择成员"
      class="w-52"
    />
    <XSelectMenu :options="grouped" placeholder="分组选项" class="w-48" />
    <XSelectMenu :options="grouped" mode="listbox" placeholder="listbox 模式" class="w-48" />
  </div>
</template>
