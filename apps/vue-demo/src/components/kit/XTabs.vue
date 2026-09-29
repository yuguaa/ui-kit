<script setup lang="ts">
/**
 * XTabs 标签页：在同一区域内切换不同视图或内容分组。
 */
import type { HTMLAttributes } from 'vue'
import { computed, ref } from 'vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

export interface TabItem {
  /** 标签 key */
  key: string
  /** 标签标题 */
  label: string
  /** 是否禁用 */
  disabled?: boolean
}

const props = withDefaults(defineProps<{
  /** 标签项数组 */
  items: TabItem[]
  /** 当前激活的标签 key */
  activeKey?: string
  /** 初始激活的标签 key（默认首项） */
  defaultActiveKey?: string
  /** 标签样式 */
  type?: 'line' | 'card'
  /** 隐藏时是否销毁内容 */
  destroyOnHide?: boolean
  class?: HTMLAttributes['class']
}>(), {
  type: 'line',
  destroyOnHide: false,
})

const emit = defineEmits<{
  /** 切换激活标签的回调 */
  change: [key: string]
}>()

const innerKey = ref(props.defaultActiveKey ?? props.items[0]?.key ?? '')

function onChange(key: string | number) {
  const resolved = String(key)
  innerKey.value = resolved
  emit('change', resolved)
}

const currentKey = computed(() => props.activeKey ?? innerKey.value)
</script>

<template>
  <Tabs
    :model-value="currentKey"
    :class="cn('flex flex-col gap-3', props.class)"
    @update:model-value="onChange"
  >
    <TabsList :variant="type === 'line' ? 'line' : 'default'">
      <TabsTrigger v-for="item in items" :key="item.key" :value="item.key" :disabled="item.disabled">
        <slot name="tab" :item="item">{{ item.label }}</slot>
      </TabsTrigger>
    </TabsList>
    <template v-for="item in items" :key="item.key">
      <TabsContent v-if="!destroyOnHide || item.key === currentKey" :value="item.key">
        <slot name="content" :item="item" />
      </TabsContent>
    </template>
  </Tabs>
</template>
