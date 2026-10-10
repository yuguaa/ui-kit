<script setup lang="ts">
/**
 * XCollapsible 折叠：点击触发内容展开或收起。
 * trigger 插槽为触发器（默认渲染「展开详情」按钮），content 插槽为折叠内容。
 * 关闭时默认卸载内容（unmountOnHide，与 Nuxt UI 行为一致）。
 */
import type { Component, HTMLAttributes } from 'vue'
import { ref } from 'vue'
import { ChevronDown } from '@lucide/vue'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { cn } from '@/lib/utils'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface CollapsibleUi {
  root?: string
  content?: string
}

const props = withDefaults(defineProps<{
  /** 是否展开 */
  open?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 默认展开 */
  defaultOpen?: boolean
  /** 隐藏时是否卸载内容 */
  unmountOnHide?: boolean
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: CollapsibleUi
  class?: HTMLAttributes['class']
}>(), {
  open: undefined,
  defaultOpen: false,
  disabled: false,
  unmountOnHide: true,
  as: 'div',
})

const emit = defineEmits<{
  /** 展开状态变化回调 */
  'update:open': [open: boolean]
}>()

const innerOpen = ref(props.defaultOpen)

function onOpenChange(next: boolean) {
  if (props.open == null) innerOpen.value = next
  emit('update:open', next)
}

/** 切换展开状态 */
function toggle() {
  onOpenChange(!(props.open ?? innerOpen.value))
}

defineExpose({ toggle })
</script>

<template>
  <Collapsible
    :as="as"
    :open="open ?? innerOpen"
    :disabled="disabled"
    :unmount-on-hide="unmountOnHide"
    :class="cn('flex flex-col gap-1', ui?.root, props.class)"
    @update:open="onOpenChange"
  >
    <CollapsibleTrigger as-child>
      <slot name="trigger">
        <button type="button" class="inline-flex w-fit cursor-pointer items-center gap-1 text-sm font-medium outline-none hover:underline">
          展开详情
          <ChevronDown :class="cn('size-4 transition-transform', (open ?? innerOpen) && 'rotate-180')" />
        </button>
      </slot>
    </CollapsibleTrigger>
    <CollapsibleContent :class="cn('text-sm text-muted-foreground', ui?.content)">
      <slot name="content" />
    </CollapsibleContent>
  </Collapsible>
</template>
