<script setup lang="ts">
import { ref } from 'vue'
import XListbox from '@/components/kit/XListbox.vue'

const current = ref('pro')

const groups = [
  [
    { key: 'g1', type: 'label', label: '套餐' },
    { id: 'basic', name: '基础版', note: '适合个人' },
    { id: 'pro', name: '专业版', note: '适合团队' },
  ],
  [
    { key: 's1', type: 'separator' },
    { id: 'ultimate', name: '旗舰版', note: '适合企业', icon: 'star' },
  ],
]
</script>

<template>
  <div class="flex w-full flex-wrap items-start gap-6">
    <div>
      <p class="mb-2 text-sm font-medium">字段映射与分组</p>
      <XListbox
        v-model="current"
        :items="groups"
        label-key="name"
        value-key="id"
        description-key="note"
        selected-icon="star"
        class="w-64"
      />
    </div>
    <div>
      <p class="mb-2 text-sm font-medium">ui 插槽自定义</p>
      <XListbox
        v-model="current"
        :items="groups"
        label-key="name"
        value-key="id"
        description-key="note"
        size="sm"
        class="w-64"
        :ui="{
          root: 'rounded-lg ring-1 ring-primary/20',
          item: 'rounded-md',
          itemDescription: 'text-primary/50',
          itemTrailingIcon: 'text-success',
        }"
        @select="current = $event"
      />
    </div>
  </div>
</template>
