"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "cn"

import { Spinner } from "@/components/ui/spinner"

export interface SnapshotCardProps {
  href: string
  /** iframe 加载地址，指向同一应用内的快照预览路由 */
  src: string
  title: string
  description?: string
  /** 快照的设计宽度，缩放基准 */
  baseWidth?: number
  height?: number
  className?: string
}

/**
 * 复刻快照卡片
 * 展示形式与 /components 的组件卡片一致：卡片内实时预览 + 底部说明
 * 预览用 iframe 隔离加载（浏览器原生懒加载），并按容器宽度等比缩放
 */
export function SnapshotCard({
  href,
  src,
  title,
  description,
  baseWidth = 1280,
  height = 260,
  className,
}: SnapshotCardProps) {
  const frameRef = React.useRef<HTMLDivElement>(null)
  const [scale, setScale] = React.useState(0)

  // 按容器实际宽度等比缩放，保持快照在卡片内的排版比例
  React.useEffect(() => {
    const node = frameRef.current
    if (!node) return
    const update = () => setScale(node.clientWidth / baseWidth)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(node)
    return () => observer.disconnect()
  }, [baseWidth])

  return (
    <Link
      href={href}
      prefetch={false}
      className={cn(
        "group/card bg-site-background border-site-border/80 hover:ring-site-foreground/10 relative flex flex-col overflow-hidden rounded-[16px] border p-0.5 shadow-sm shadow-black/5 transition-all hover:shadow-lg",
        className,
      )}
    >
      <div
        ref={frameRef}
        className="border-site-border site-rounded-xl relative overflow-hidden border"
        style={{ height }}
      >
        {scale > 0 ? (
          <iframe
            src={src}
            title={title}
            loading="lazy"
            tabIndex={-1}
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 border-0"
            style={{
              width: baseWidth,
              height: height / scale,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Spinner className="text-site-muted-foreground/30 size-4" />
          </div>
        )}
      </div>
      <div className="flex-row items-center gap-3 px-3 py-2">
        <h3 className="text-site-foreground truncate text-sm font-medium tracking-tight">{title}</h3>
        {description ? (
          <p className="text-site-muted-foreground mt-0.5 truncate text-xs">{description}</p>
        ) : null}
      </div>
    </Link>
  )
}
