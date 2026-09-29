<script setup lang="ts">
/**
 * XCollapsible 折叠：点击触发内容展开或收起。
 */
import type { HTMLAttributes } from 'vue'
import { ref } from 'vue'
import { ChevronDown } from '@lucide/vue'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  /** 是否展开 */
  open?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 默认展开 */
  defaultOpen?: boolean
  class?: HTMLAttributes['class']
}>(), {
  open: undefined,
  defaultOpen: false,
  disabled: false,
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
    :open="open ?? innerOpen"
    :disabled="disabled"
    :class="cn('flex flex-col gap-1', props.class)"
    @update:open="onOpenChange"
  >
    <CollapsibleTrigger as-child>
      <slot name="trigger">
        <button type="button" class="inline-flex w-fit items-center gap-1 text-sm font-medium outline-none hover:underline">
          展开详情
          <ChevronDown :class="cn('size-4 transition-transform', (open ?? innerOpen) && 'rotate-180')" />
        </button>
      </slot>
    </CollapsibleTrigger>
    <CollapsibleContent class="text-sm text-muted-foreground">
      <slot name="content" />
    </CollapsibleContent>
  </Collapsible>
</template>
