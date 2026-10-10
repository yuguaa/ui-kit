<script setup lang="ts">
import XAccordion from '@/components/kit/XAccordion.vue'
import XIcon from '@/components/kit/XIcon.vue'

const items = [
  {
    name: '字段映射',
    id: 'mapping',
    icon: 'star',
    content: 'labelKey 指定标题字段，valueKey 指定唯一值字段，均支持点路径。',
  },
  {
    name: '插槽与图标',
    id: 'slots',
    trailingIcon: 'chevron-right',
    content: 'leading / trailing 插槽替换两侧图标，body 插槽接收 { item, index, open }。',
  },
]
</script>

<template>
  <XAccordion
    :items="items"
    label-key="name"
    value-key="id"
    default-value="slots"
    class="w-full"
  >
    <template #leading="{ open }">
      <XIcon :name="open ? 'chevron-down' : 'star'" />
    </template>
    <template #body="{ item, open }">
      <span v-if="open" class="font-medium text-primary">展开中：</span>{{ item.content }}
    </template>
  </XAccordion>
</template>
