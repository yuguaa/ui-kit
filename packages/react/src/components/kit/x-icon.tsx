/**
 * XIcon 图标：名称驱动的矢量图标，内置常用图标集合与五档尺寸。
 * mode="svg"（默认）渲染 lucide SVG；mode="css" 输出 Iconify CSS 类名（i-lucide-*），
 * 配合 UnoCSS / Iconify 环境使用；customize 在 svg 渲染后修改图标元素。
 */
import * as React from "react"
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
  Code,
  type LucideProps,
} from "lucide-react"
import { cn } from "@/lib/utils"

const iconMap = {
  "arrow-left": ArrowLeft,
  bell: Bell,
  book: Book,
  "chart-bar": ChartBar,
  "chart-line": ChartLine,
  check: Check,
  "chevron-down": ChevronDown,
  "chevron-right": ChevronRight,
  "circle-alert": CircleAlert,
  "circle-check": CircleCheck,
  "clipboard-paste": ClipboardPaste,
  copy: Copy,
  "corner-down-right": CornerDownRight,
  dashboard: LayoutDashboard,
  download: Download,
  "external-link": ExternalLink,
  "file-plus": FilePlus,
  "file-text": FileText,
  figma: Frame,
  folder: Folder,
  "folder-open": FolderOpen,
  "form-input": FormInput,
  gauge: Gauge,
  github: Code,
  globe: Globe,
  house: House,
  info: Info,
  "layout-dashboard": LayoutDashboard,
  "loader-circle": LoaderCircle,
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

export type XIconName = keyof typeof iconMap
export type XIconSize = "xs" | "sm" | "md" | "lg" | "xl"
export type XIconMode = "svg" | "css"

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface XIconUi {
  root?: string
}

const iconSizeClasses: Record<XIconSize, string> = {
  xs: "size-3",
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
  xl: "size-7",
}

export interface XIconProps extends Omit<LucideProps, "size"> {
  /** 图标名 */
  name: XIconName
  /** 尺寸 */
  size?: XIconSize
  /** 颜色 */
  color?: string
  /** 渲染模式：svg 渲染 lucide 图标，css 输出 Iconify CSS 类名 */
  mode?: XIconMode
  /** svg 渲染后修改图标元素的回调 */
  customize?: ((svg: SVGSVGElement) => void) | null
  /** 主题插槽类名 */
  ui?: XIconUi
}

export function XIcon({ name, size = "md", color, mode = "svg", customize, ui, className, ...props }: XIconProps) {
  /** svg 渲染后调用 customize 修改图标元素 */
  const svgRef = React.useRef<SVGSVGElement>(null)
  React.useEffect(() => {
    if (svgRef.current && customize) customize(svgRef.current)
  }, [customize])

  if (mode === "css") {
    return (
      <span className={cn(`i-lucide-${name}`, ui?.root, className)} style={color ? { color } : undefined} aria-hidden="true" />
    )
  }

  const Comp = iconMap[name]
  if (!Comp) return null
  return <Comp ref={svgRef} style={color ? { color } : undefined} className={cn(iconSizeClasses[size], ui?.root, className)} {...props} />
}
