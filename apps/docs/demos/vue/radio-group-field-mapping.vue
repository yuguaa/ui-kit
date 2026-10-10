<script setup lang="ts">
import { ref } from 'vue'
import XRadioGroup from '@/components/kit/XRadioGroup.vue'

const role = ref('admin')

const roles = [
  { id: 'admin', name: '管理员', desc: '全部权限' },
  { id: 'member', name: '成员', desc: '基础权限' },
]
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div class="flex flex-col gap-3">
      <span class="text-muted-foreground text-sm">字段映射:valueKey / labelKey / descriptionKey</span>
      <XRadioGroup
        v-model="role"
        :options="roles"
        value-key="id"
        label-key="name"
        description-key="desc"
        legend="成员角色"
      />
    </div>

    <div class="flex flex-col gap-3">
      <span class="text-muted-foreground text-sm">label / description 插槽自定义渲染</span>
      <XRadioGroup
        v-model="role"
        :options="roles"
        value-key="id"
        label-key="name"
        legend="自定义插槽"
      >
        <template #label="{ item }">
          <span class="font-bold">{{ item.name }}</span>
        </template>
        <template #description="{ item }">
          <span class="italic">{{ item.desc }}</span>
        </template>
      </XRadioGroup>
    </div>
  </div>
</template>
