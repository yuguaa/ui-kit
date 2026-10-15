"use client"

import * as React from "react"

import { cn } from "cn"
import { CopyRegistry } from "@/components/copy-registry"
import { Spinner } from "@/components/ui/spinner"
import { SnapshotViewCode } from "@/components/replicated/snapshot-code-sheet"

export interface SnapshotCardProps {
  /** iframe 加载地址，指向同一应用内的快照预览路由 */
  src: string
  /** 源码端地址，供查看代码面板使用 */
  codeSrc: string
  /** registry 名称，供复制安装命令使用 */
  registryName: string
  title: string
  /** 卡片底部左侧的标识标签（开发模式显示） */
  nameLabel?: string
  /** 源码文件在面板里显示的名字 */
  codeFile?: string
  description?: string
  /** 快照的设计宽度，缩放基准 */
  baseWidth?: number
  height?: number
  className?: string
}

/**
 * 快照卡片
 * 展示形式与 components 的组件卡片一致：卡片内实时预览 + 底部信息与操作
 * 预览用 iframe 隔离加载（浏览器原生懒加载），并按容器宽度等比缩放
 */
export function SnapshotCard({
  src,
  codeSrc,
  registryName,
  title,
  nameLabel,
  codeFile,
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
    <div
      className={cn(
        "border-site-border/80 bg-site-background relative flex flex-col overflow-hidden rounded-[16px] border p-0.5 shadow-sm shadow-black/5 transition-shadow hover:shadow-lg",
        className,
      )}
    >
      <div
        className="border-site-border site-rounded-xl relative block overflow-hidden border"
        style={{ height }}
      >
        <div ref={frameRef} className="absolute inset-0">
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
      </div>

      <div className="flex items-center gap-3 px-3 py-2">
        <div className="min-w-0 flex-1">
          <h3 className="text-site-foreground truncate text-sm font-medium tracking-tight">
            {title}
          </h3>
          {description ? (
            <p className="text-site-muted-foreground truncate text-xs">{description}</p>
          ) : null}
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          {process.env.NODE_ENV === "development" && nameLabel ? (
            <div
              className="bg-site-muted/50 text-site-muted-foreground hover:bg-site-muted hover:text-site-foreground site-rounded-md flex h-7 items-center gap-1.5 px-2 text-[10px] font-medium transition-all select-all"
              title="区块标识"
            >
              {nameLabel}
            </div>
          ) : null}
          <CopyRegistry value={registryName} />
          <SnapshotViewCode
            src={codeSrc}
            title={codeFile ?? `${nameLabel ?? title}.tsx`}
            registryName={registryName}
          />
        </div>
      </div>
    </div>
  )
}
