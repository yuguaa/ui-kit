<script setup lang="ts">
/**
 * XNavigationMenu 导航菜单：为页面提供功能导航。
 * 支持垂直、水平与内嵌模式，子菜单使用 DropdownMenu 展开。
 */
import type { HTMLAttributes } from 'vue'
import { ref } from 'vue'
import { ChevronDown } from '@lucide/vue'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

export interface NavigationMenuItem {
  /** 菜单项 key */
  key: string
  /** 菜单项标题 */
  label: string
  /** 子菜单项 */
  children?: NavigationMenuItem[]
  /** 是否禁用 */
  disabled?: boolean
}

const props = withDefaults(defineProps<{
  /** 菜单项数组 */
  items: NavigationMenuItem[]
  /** 当前选中的 key */
  selectedKeys?: string[]
  /** 菜单模式 */
  mode?: 'vertical' | 'horizontal' | 'inline'
  /** 菜单主题 */
  theme?: 'light' | 'dark'
  class?: HTMLAttributes['class']
}>(), {
  selectedKeys: () => [],
  mode: 'vertical',
  theme: 'light',
})

const emit = defineEmits<{
  /** 点击菜单项的回调 */
  click: [item: NavigationMenuItem]
  /** 选中菜单项的回调 */
  select: [item: NavigationMenuItem]
}>()

const openKey = ref<string | null>(null)

function handleSelect(item: NavigationMenuItem) {
  emit('click', item)
  emit('select', item)
}
</script>

<template>
  <nav
    :class="cn(
      'flex gap-1',
      mode === 'horizontal' ? 'flex-row items-center' : 'w-52 flex-col',
      theme === 'dark' && 'bg-neutral-9 p-2 text-white',
      props.class,
    )"
  >
    <template v-for="item in items" :key="item.key">
      <!-- 内嵌模式：子菜单直接展开在下方 -->
      <div v-if="item.children?.length && mode === 'inline'" class="flex flex-col gap-0.5">
        <button
          type="button"
          :class="cn('flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-sm outline-none hover:bg-muted')"
          @click="openKey = openKey === item.key ? null : item.key"
        >
          <slot name="item" :item="item" />
          <span class="flex-1 truncate">{{ item.label }}</span>
          <ChevronDown :class="cn('size-4 transition-transform', openKey === item.key && 'rotate-180')" />
        </button>
        <div v-if="openKey === item.key" class="flex flex-col gap-0.5">
          <button
            v-for="child in item.children"
            :key="child.key"
            type="button"
            :disabled="child.disabled"
            :class="cn(
              'flex w-full items-center gap-2 rounded-md py-1.5 pr-3 pl-8 text-left text-sm outline-none',
              'hover:bg-muted focus-visible:bg-muted disabled:pointer-events-none disabled:opacity-50',
              selectedKeys.includes(child.key) && (theme === 'light' ? 'bg-primary-1 text-primary-7' : 'bg-white/10 text-white'),
            )"
            @click="handleSelect(child)"
          >
            {{ child.label }}
          </button>
        </div>
      </div>
      <!-- 子菜单：DropdownMenu 展开 -->
      <DropdownMenu v-else-if="item.children?.length" @update:open="openKey = $event ? item.key : null">
        <DropdownMenuTrigger as-child>
          <button
            type="button"
            :class="cn(
              'flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-sm outline-none',
              'hover:bg-muted focus-visible:bg-muted',
              selectedKeys.includes(item.key) && (theme === 'light' ? 'bg-primary-1 text-primary-7' : 'bg-white/10 text-white'),
            )"
          >
            <slot name="item" :item="item" />
            <span class="flex-1 truncate">{{ item.label }}</span>
            <ChevronDown :class="cn('size-4 transition-transform', openKey === item.key && 'rotate-180')" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem
            v-for="child in item.children"
            :key="child.key"
            :disabled="child.disabled"
            :class="cn(selectedKeys.includes(child.key) && 'bg-primary-1 text-primary-7')"
            @select="handleSelect(child)"
          >
            {{ child.label }}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <!-- 叶子菜单项 -->
      <button
        v-else
        type="button"
        :disabled="item.disabled"
        :class="cn(
          'flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-sm outline-none transition-colors',
          'hover:bg-muted focus-visible:bg-muted disabled:pointer-events-none disabled:opacity-50',
          selectedKeys.includes(item.key) && (theme === 'light' ? 'bg-primary-1 text-primary-7' : 'bg-white/10 text-white'),
        )"
        @click="handleSelect(item)"
      >
        <slot name="item" :item="item" />
        <span class="flex-1 truncate">{{ item.label }}</span>
      </button>
    </template>
  </nav>
</template>
