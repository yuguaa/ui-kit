<script setup lang="ts">
/**
 * XContextMenu 右键菜单：在指定区域右键唤出的上下文菜单。
 * reka ContextMenu 不支持受控 open，open prop 为 true 时通过在触发区域
 * 派发 contextmenu 事件打开菜单。
 */
import type { HTMLAttributes } from 'vue'
import { computed, ref, useTemplateRef, useSlots, watch } from 'vue'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from '@/components/ui/context-menu'
import XKbd from '@/components/kit/XKbd.vue'

export interface ContextMenuItemData {
  /** 菜单项 key */
  key: string
  /** 菜单项标题 */
  label: string
  /** 菜单项说明文字 */
  description?: string
  /** 菜单项快捷键 */
  shortcut?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否分隔线 */
  separator?: boolean
}

const props = withDefaults(defineProps<{
  /** 菜单项数组 */
  items: ContextMenuItemData[]
  /** 是否打开 */
  open?: boolean
  class?: HTMLAttributes['class']
}>(), {
  open: undefined,
})

const emit = defineEmits<{
  /** 打开状态变化回调 */
  'update:open': [open: boolean]
  /** 选中菜单项回调 */
  select: [item: ContextMenuItemData]
}>()

const innerOpen = ref(false)
const wrapperRef = useTemplateRef<HTMLElement>('wrapperRef')
const slots = useSlots()

/* item 插槽存在时由用户完全自定义菜单项内容 */
const hasItemSlot = computed(() => Boolean(slots.item))

/* open prop 为 true 时在触发区域派发 contextmenu 事件打开菜单 */
watch(
  [() => props.open, wrapperRef],
  ([value]) => {
    const trigger = wrapperRef.value?.querySelector('[data-slot=context-menu-trigger]')
    if (value && trigger) {
      trigger.dispatchEvent(new MouseEvent('contextmenu', { bubbles: true, cancelable: true }))
    }
  },
  { immediate: true },
)

function onOpenChange(next: boolean) {
  innerOpen.value = next
  emit('update:open', next)
}
</script>

<template>
  <ContextMenu @update:open="onOpenChange">
    <span ref="wrapperRef" class="contents">
      <ContextMenuTrigger>
        <slot />
      </ContextMenuTrigger>
    </span>
    <ContextMenuContent class="w-44 p-1">
      <template v-for="item in items" :key="item.key">
        <ContextMenuSeparator v-if="item.separator" />
        <ContextMenuItem
          v-else
          :disabled="item.disabled"
          class="gap-2"
          @select="emit('select', item)"
        >
          <template v-if="hasItemSlot">
            <slot name="item" :item="item" />
          </template>
          <template v-else>
            <span class="flex min-w-0 flex-1 flex-col gap-0.5">
              <span>{{ item.label }}</span>
              <span v-if="item.description" class="text-xs text-muted-foreground">{{ item.description }}</span>
            </span>
            <XKbd v-if="item.shortcut" size="sm">{{ item.shortcut }}</XKbd>
          </template>
        </ContextMenuItem>
      </template>
    </ContextMenuContent>
  </ContextMenu>
</template>
