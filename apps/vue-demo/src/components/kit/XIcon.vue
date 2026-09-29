<script setup lang="ts">
/**
 * XIcon 图标：名称驱动的矢量图标，内置常用图标集合与五档尺寸。
 */
import type { HTMLAttributes } from 'vue'
import {
  Bell,
  Check,
  ChevronDown,
  ChevronRight,
  CircleAlert,
  CircleCheck,
  Copy,
  ExternalLink,
  Info,
  LayoutDashboard,
  LoaderCircle,
  Menu,
  Plus,
  Search,
  Settings,
  Star,
  Trash,
  User,
  X,
} from '@lucide/vue'
import { cn } from '@/lib/utils'

const iconMap = {
  bell: Bell,
  check: Check,
  'chevron-down': ChevronDown,
  'chevron-right': ChevronRight,
  'circle-alert': CircleAlert,
  'circle-check': CircleCheck,
  copy: Copy,
  dashboard: LayoutDashboard,
  'external-link': ExternalLink,
  info: Info,
  'loader-circle': LoaderCircle,
  menu: Menu,
  plus: Plus,
  search: Search,
  settings: Settings,
  star: Star,
  trash: Trash,
  user: User,
  x: X,
} as const

type IconName = keyof typeof iconMap
type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const props = withDefaults(defineProps<{
  /** 图标名 */
  name: IconName
  /** 尺寸 */
  size?: IconSize
  /** 颜色 */
  color?: string
  class?: HTMLAttributes['class']
}>(), {
  size: 'md',
})

const sizeClasses: Record<IconSize, string> = {
  xs: 'size-3',
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
  xl: 'size-7',
}
</script>

<template>
  <component
    :is="iconMap[name]"
    :class="cn(sizeClasses[size], props.class)"
    :style="color ? { color } : undefined"
  />
</template>
