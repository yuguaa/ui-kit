import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export interface XTabItem {
  /** 标签 key */
  key: string
  /** 标签标题 */
  label: React.ReactNode
  /** 面板内容 */
  content?: React.ReactNode
  /** 是否禁用 */
  disabled?: boolean
}

export type XTabsOrientation = "horizontal" | "vertical"
export type XTabsSize = "sm" | "md" | "lg"

export interface XTabsProps {
  /** 标签项数组 */
  items: XTabItem[]
  /** 当前激活的标签 key */
  activeKey?: string
  /** 初始激活的标签 key（默认首项） */
  defaultActiveKey?: string
  /** 标签样式 */
  type?: "line" | "card"
  /** 标签排列方向 */
  orientation?: XTabsOrientation
  /** 标签尺寸 */
  size?: XTabsSize
  /** 隐藏时是否销毁内容 */
  destroyOnHide?: boolean
  /** 切换激活标签的回调 */
  onChange?: (key: string) => void
  className?: string
}

/** 横向时各尺寸的列表高度 */
const listSizeClasses: Record<XTabsSize, string> = {
  sm: "group-data-horizontal/tabs:h-7!",
  md: "",
  lg: "group-data-horizontal/tabs:h-10!",
}

/** 各尺寸下触发器的内边距与字号 */
const triggerSizeClasses: Record<XTabsSize, string> = {
  sm: "px-2.5! py-1! text-xs!",
  md: "",
  lg: "px-3! py-1.5! text-base! gap-2!",
}

export function XTabs({
  items,
  activeKey,
  defaultActiveKey,
  type = "line",
  orientation = "horizontal",
  size = "md",
  destroyOnHide = false,
  onChange,
  className,
}: XTabsProps) {
  const [innerKey, setInnerKey] = React.useState(defaultActiveKey ?? items[0]?.key ?? "")
  const currentKey = activeKey ?? innerKey

  return (
    <Tabs
      value={currentKey}
      defaultValue={defaultActiveKey ?? items[0]?.key}
      orientation={orientation}
      onValueChange={(key) => {
        if (activeKey == null) setInnerKey(key)
        onChange?.(key)
      }}
      className={cn(
        "flex gap-3",
        orientation === "vertical"
          ? "flex-row data-[orientation=vertical]:items-start"
          : "flex-col",
        className,
      )}
    >
      <TabsList
        variant={type === "line" ? "line" : "default"}
        className={listSizeClasses[size]}
      >
        {items.map((item) => (
          <TabsTrigger
            key={item.key}
            value={item.key}
            disabled={item.disabled}
            className={triggerSizeClasses[size]}
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((item) =>
        destroyOnHide && item.key !== currentKey ? null : (
          <TabsContent key={item.key} value={item.key}>
            {item.content}
          </TabsContent>
        ),
      )}
    </Tabs>
  )
}
