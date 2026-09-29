/**
 * XTabs 标签页：在同一区域内切换不同视图或内容分组。
 */
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

export interface XTabsProps {
  /** 标签项数组 */
  items: XTabItem[]
  /** 当前激活的标签 key */
  activeKey?: string
  /** 初始激活的标签 key（默认首项） */
  defaultActiveKey?: string
  /** 标签样式 */
  type?: "line" | "card"
  /** 隐藏时是否销毁内容 */
  destroyOnHide?: boolean
  /** 切换激活标签的回调 */
  onChange?: (key: string) => void
  className?: string
}

export function XTabs({
  items,
  activeKey,
  defaultActiveKey,
  type = "line",
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
      onValueChange={(key) => {
        if (activeKey == null) setInnerKey(key)
        onChange?.(key)
      }}
      className={cn("flex flex-col gap-3", className)}
    >
      <TabsList variant={type === "line" ? "line" : "default"}>
        {items.map((item) => (
          <TabsTrigger key={item.key} value={item.key} disabled={item.disabled}>
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
