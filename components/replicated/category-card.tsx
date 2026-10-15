"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { Spinner } from "@/components/ui/spinner"

export interface CategoryCardProps {
  href: string
  label: string
  count: number
  /** 预览图基础路径，不含 -light/-dark 与扩展名 */
  imageBase: string
  unit?: string
}

/**
 * 分类卡片
 * 展示形式与 /components 的分类卡片一致：截图预览 + 标题 + 计数
 */
export function CategoryCard({ href, label, count, imageBase, unit = "blocks" }: CategoryCardProps) {
  const [loaded, setLoaded] = React.useState(false)

  const resolveFromElement = React.useCallback((img: HTMLImageElement | null) => {
    if (img?.complete && img.naturalWidth > 0) setLoaded(true)
  }, [])

  return (
    <Link
      href={href}
      prefetch={false}
      className="group/thumbnail bg-site-muted/50 dark:bg-site-background border-site-border/60 site-rounded-xl flex flex-col border p-0.5 shadow-sm shadow-black/5"
    >
      <div className="bg-site-background border-site-border/60 site-rounded-xl relative overflow-hidden border">
        {!loaded ? (
          <div className="bg-site-muted/40 absolute inset-0 flex items-center justify-center">
            <Spinner className="text-site-muted-foreground/50 size-5" />
          </div>
        ) : null}
        <Image
          ref={resolveFromElement}
          src={`${imageBase}-light.png`}
          alt={label}
          width={600}
          height={400}
          className="w-full object-cover transition-all duration-300 dark:hidden"
          onLoad={() => setLoaded(true)}
          onError={(e) => {
            setLoaded(true)
            e.currentTarget.src = "/screenshots/components/default-light.png"
          }}
        />
        <Image
          ref={resolveFromElement}
          src={`${imageBase}-dark.png`}
          alt={label}
          width={600}
          height={400}
          className="hidden w-full object-cover transition-all duration-300 dark:block"
          onLoad={() => setLoaded(true)}
          onError={(e) => {
            setLoaded(true)
            e.currentTarget.src = "/screenshots/components/default-dark.png"
          }}
        />
      </div>
      <div className="flex items-center justify-between gap-px px-3 py-2.5">
        <h3 className="text-site-foreground text-base font-medium tracking-tight">{label}</h3>
        <span className="text-site-muted-foreground text-xs font-normal">
          {count} {count === 1 ? unit.replace(/s$/, "") : unit}
        </span>
      </div>
    </Link>
  )
}
