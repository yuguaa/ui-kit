<script setup lang="ts">
/**
 * XIcon 图标：名称驱动的矢量图标，内置常用图标集合与五档尺寸。
 * mode=svg（默认）渲染 lucide SVG；mode=css 输出 Iconify CSS 类名（i-lucide-*），
 * 配合 UnoCSS / Iconify 环境使用；customize 在 svg 渲染后修改图标元素。
 */
import type { HTMLAttributes } from 'vue'
import { onMounted, ref } from 'vue'
import {
  ArrowLeft,
  Bell,
  Book,
  ChartBar,
  ChartLine,
  Check,
  ChevronDown,
  ChevronRight,
  CircleAlert,
  CircleCheck,
  ClipboardPaste,
  Code,
  Copy,
  CornerDownRight,
  Download,
  ExternalLink,
  FilePlus,
  FileText,
  Folder,
  FolderOpen,
  FormInput,
  Frame,
  Gauge,
  Globe,
  House,
  Info,
  LayoutDashboard,
  LoaderCircle,
  Menu,
  Moon,
  Package,
  Palette,
  Pen,
  Plus,
  Search,
  Settings,
  Star,
  Sun,
  Trash,
  User,
  Users,
  X,
} from '@lucide/vue'
import { cn } from '@/lib/utils'

const iconMap = {
  'arrow-left': ArrowLeft,
  bell: Bell,
  book: Book,
  'chart-bar': ChartBar,
  'chart-line': ChartLine,
  check: Check,
  'chevron-down': ChevronDown,
  'chevron-right': ChevronRight,
  'circle-alert': CircleAlert,
  'circle-check': CircleCheck,
  'clipboard-paste': ClipboardPaste,
  copy: Copy,
  'corner-down-right': CornerDownRight,
  dashboard: LayoutDashboard,
  download: Download,
  'external-link': ExternalLink,
  'file-plus': FilePlus,
  'file-text': FileText,
  figma: Frame,
  folder: Folder,
  'folder-open': FolderOpen,
  'form-input': FormInput,
  gauge: Gauge,
  github: Code,
  globe: Globe,
  house: House,
  info: Info,
  'layout-dashboard': LayoutDashboard,
  'loader-circle': LoaderCircle,
  menu: Menu,
  moon: Moon,
  package: Package,
  palette: Palette,
  pen: Pen,
  plus: Plus,
  search: Search,
  settings: Settings,
  star: Star,
  sun: Sun,
  trash: Trash,
  user: User,
  users: Users,
  x: X,
} as const

export type IconName = keyof typeof iconMap
type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type IconMode = 'svg' | 'css'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface IconUi {
  root?: string
}

const props = withDefaults(defineProps<{
  /** 图标名 */
  name: IconName
  /** 尺寸 */
  size?: IconSize
  /** 颜色 */
  color?: string
  /** 渲染模式：svg 渲染 lucide 图标，css 输出 Iconify CSS 类名 */
  mode?: IconMode
  /** svg 渲染后修改图标元素的回调 */
  customize?: ((svg: SVGSVGElement) => void) | null
  /** 主题插槽类名 */
  ui?: IconUi
  class?: HTMLAttributes['class']
}>(), {
  size: 'md',
  mode: 'svg',
  customize: null,
})

defineOptions({ name: 'XIcon' })

/** 动态组件 ref 拿到的是组件实例，取 $el 得到 svg 元素 */
const svgRef = ref<{ $el?: SVGSVGElement } | SVGSVGElement | null>(null)

onMounted(() => {
  if (typeof props.customize !== 'function') return
  const el = svgRef.value && '$el' in svgRef.value ? svgRef.value.$el : svgRef.value
  if (el) props.customize(el as SVGSVGElement)
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
  <span
    v-if="mode === 'css'"
    :class="cn(`i-lucide-${name}`, ui?.root, props.class)"
    :style="color ? { color } : undefined"
    aria-hidden="true"
  />
  <component
    v-else
    :is="iconMap[name]"
    ref="svgRef"
    :class="cn(sizeClasses[size], ui?.root, props.class)"
    :style="color ? { color } : undefined"
    aria-hidden="true"
  />
</template>
