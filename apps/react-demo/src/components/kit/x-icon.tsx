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
  type LucideProps,
} from "lucide-react"
import { cn } from "@/lib/utils"

const iconMap = {
  bell: Bell,
  check: Check,
  "chevron-down": ChevronDown,
  "chevron-right": ChevronRight,
  "circle-alert": CircleAlert,
  "circle-check": CircleCheck,
  copy: Copy,
  dashboard: LayoutDashboard,
  "external-link": ExternalLink,
  info: Info,
  "loader-circle": LoaderCircle,
  menu: Menu,
  plus: Plus,
  search: Search,
  settings: Settings,
  star: Star,
  trash: Trash,
  user: User,
  x: X,
} as const

export type XIconName = keyof typeof iconMap
export type XIconSize = "xs" | "sm" | "md" | "lg" | "xl"

const iconSizeClasses: Record<XIconSize, string> = {
  xs: "size-3",
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
  xl: "size-7",
}

export interface XIconProps extends LucideProps {
  /** 图标名 */
  name: XIconName
  /** 尺寸 */
  size?: XIconSize
  /** 颜色 */
  color?: string
}

export function XIcon({ name, size = "md", color, className, ...props }: XIconProps) {
  const Comp = iconMap[name]
  if (!Comp) return null
  return <Comp style={color ? { color } : undefined} className={cn(iconSizeClasses[size], className)} {...props} />
}
