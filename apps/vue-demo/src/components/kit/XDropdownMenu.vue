<script setup lang="ts">
/**
 * XDropdownMenu 下拉菜单：点击按钮展开的操作菜单。
 */
import type { HTMLAttributes } from 'vue'
import { nextTick, ref } from 'vue'
import { ChevronDown } from '@lucide/vue'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import XButton from '@/components/kit/XButton.vue'
import { cn } from '@/lib/utils'

export interface DropdownMenuItemData {
  /** 菜单项 key */
  key: string
  /** 菜单项标题 */
  label?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否分隔线 */
  separator?: boolean
}

const props = withDefaults(defineProps<{
  /** 菜单项数组 */
  items: DropdownMenuItemData[]
  /** 是否打开 */
  open?: boolean
  /** 选择后关闭 */
  closeOnSelect?: boolean
  /** 触发按钮文字 */
  triggerLabel?: string
  class?: HTMLAttributes['class']
}>(), {
  open: undefined,
  closeOnSelect: true,
  triggerLabel: '操作',
})

const emit = defineEmits<{
  /** 打开状态变化回调 */
  'update:open': [open: boolean]
  /** 选中回调 */
  select: [item: DropdownMenuItemData]
}>()

const innerOpen = ref(false)

function onOpenChange(next: boolean) {
  if (props.open == null) innerOpen.value = next
  emit('update:open', next)
}

function handleSelect(item: DropdownMenuItemData) {
  emit('select', item)
  if (!props.closeOnSelect) {
    /* 菜单内部选择后自动关闭，需要保持打开时在关闭后重新打开 */
    void nextTick(() => onOpenChange(true))
  }
}
</script>

<template>
  <DropdownMenu :open="open ?? innerOpen" @update:open="onOpenChange">
    <DropdownMenuTrigger as-child>
      <slot name="trigger">
        <XButton variant="outline" color="neutral">
          {{ triggerLabel }}
          <ChevronDown class="size-4" />
        </XButton>
      </slot>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start" :class="cn('w-44 p-1', props.class)">
      <template v-for="item in items" :key="item.key">
        <DropdownMenuSeparator v-if="item.separator" />
        <DropdownMenuItem
          v-else
          :disabled="item.disabled"
          class="gap-2"
          @select="handleSelect(item)"
        >
          <slot name="item" :item="item">{{ item.label }}</slot>
        </DropdownMenuItem>
      </template>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
