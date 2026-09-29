<script setup lang="ts">
/**
 * XCommandPalette 命令面板：全局命令搜索与快捷操作面板。
 * 基于 shadcn-vue command + dialog，快捷键以 Kbd 形式展示。
 */
import type { HTMLAttributes } from 'vue'
import { ref } from 'vue'
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import XKbd from '@/components/kit/XKbd.vue'
import { cn } from '@/lib/utils'

export interface CommandGroupItem {
  /** 分组标题 */
  label: string
  /** 命令数组 */
  commands: { label: string; shortcut?: string; disabled?: boolean }[]
}

const props = withDefaults(defineProps<{
  /** 是否打开 */
  open?: boolean
  /** 命令分组数组 */
  groups: CommandGroupItem[]
  /** 是否可搜索 */
  searchable?: boolean
  /** 选择后关闭 */
  closeOnSelect?: boolean
  class?: HTMLAttributes['class']
}>(), {
  open: undefined,
  searchable: true,
  closeOnSelect: true,
})

const emit = defineEmits<{
  /** 打开状态变化回调 */
  'update:open': [open: boolean]
  /** 命令执行回调 */
  select: [command: { label: string; shortcut?: string; disabled?: boolean }]
}>()

const innerOpen = ref(false)

function setOpen(next: boolean) {
  if (props.open == null) innerOpen.value = next
  emit('update:open', next)
}

function handleSelect(command: { label: string; shortcut?: string; disabled?: boolean }) {
  emit('select', command)
  if (props.closeOnSelect) setOpen(false)
}

/** 打开面板 */
function openPanel() {
  setOpen(true)
}

/** 关闭面板 */
function closePanel() {
  setOpen(false)
}

/** 切换开关 */
function togglePanel() {
  setOpen(!(props.open ?? innerOpen.value))
}

defineExpose({ open: openPanel, close: closePanel, toggle: togglePanel })
</script>

<template>
  <CommandDialog
    :open="open ?? innerOpen"
    :class="cn('p-0', props.class)"
    @update:open="setOpen"
  >
    <CommandInput v-if="searchable" placeholder="搜索命令…" />
    <CommandList>
      <CommandEmpty>
        <slot name="empty">无匹配命令</slot>
      </CommandEmpty>
      <CommandGroup v-for="group in groups" :key="group.label" :heading="group.label">
        <CommandItem
          v-for="command in group.commands"
          :key="command.label"
          :disabled="command.disabled"
          :value="command.label"
          @select="handleSelect(command)"
        >
          <span class="flex-1">{{ command.label }}</span>
          <XKbd v-if="command.shortcut" size="sm" :value="command.shortcut" />
        </CommandItem>
      </CommandGroup>
    </CommandList>
    <div v-if="$slots.footer" class="border-t border-border p-2">
      <slot name="footer" />
    </div>
  </CommandDialog>
</template>
