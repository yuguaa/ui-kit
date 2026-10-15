"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Spinner } from "@/components/ui/spinner"
import { CopyButton } from "@/components/copy-button"

/**
 * 快照源码面板
 * 与 components 的源码面板形式一致：标题 + 复制按钮 + 可横向滚动的代码区
 */
export function SnapshotCodeSheetContent({
  src,
  title,
  language = "html",
}: {
  src: string
  title: string
  language?: string
}) {
  const [code, setCode] = React.useState<string | null>(null)
  const [failed, setFailed] = React.useState(false)

  React.useEffect(() => {
    let active = true
    fetch(src)
      .then((response) => (response.ok ? response.text() : Promise.reject(response.status)))
      .then((text) => {
        if (active) setCode(text)
      })
      .catch(() => {
        if (active) setFailed(true)
      })
    return () => {
      active = false
    }
  }, [src])

  return (
    <SheetContent
      overlay={false}
      className="bg-site-sidebar flex flex-col gap-0 duration-200 data-ending-style:translate-x-8 data-ending-style:opacity-0 data-starting-style:translate-x-8 data-starting-style:opacity-0 sm:max-w-2xl [&_button.ring-offset-site-background]:hidden"
    >
      <SheetHeader className="border-site-border border-b px-6 py-4">
        <SheetTitle>Code</SheetTitle>
      </SheetHeader>
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden px-6 py-6">
        <div className="mb-3 flex items-center justify-between gap-3 px-1">
          <h2 className="text-site-foreground truncate font-mono text-sm font-medium">{title}</h2>
          {code ? <CopyButton value={code} /> : null}
        </div>
        <div className="bg-site-code border-site-border site-rounded-lg relative flex min-h-0 flex-1 flex-col overflow-hidden border shadow-sm shadow-black/5">
          <ScrollArea className="min-h-0 flex-1">
            {code !== null ? (
              <pre
                data-language={language}
                className="text-site-foreground min-w-max p-4 font-mono text-xs leading-relaxed whitespace-pre"
              >
                <code>{code}</code>
              </pre>
            ) : failed ? (
              <p className="text-site-muted-foreground p-4 text-sm">源码加载失败</p>
            ) : (
              <div className="flex items-center justify-center p-10">
                <Spinner className="text-site-muted-foreground/40 size-4" />
              </div>
            )}
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </SheetContent>
  )
}

/** 卡片的查看代码按钮 + 源码面板 */
export function SnapshotViewCode({ src, title }: { src: string; title: string }) {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="h-7 text-xs" size="sm" variant="outline">
          View code
        </Button>
      </SheetTrigger>
      {open ? <SnapshotCodeSheetContent src={src} title={title} /> : null}
    </Sheet>
  )
}

/** 卡片的复制源码按钮 */
export function SnapshotCopyCode({ src }: { src: string }) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <Button
      className="h-7 text-xs"
      size="sm"
      variant="outline"
      onClick={() => {
        fetch(src)
          .then((response) => response.text())
          .then((text) => {
            navigator.clipboard.writeText(text)
            setCopied(true)
          })
      }}
    >
      {copied ? (
        <CheckIcon className="mr-1.5 size-3" />
      ) : (
        <CopyIcon className="mr-1.5 size-3" />
      )}
      {copied ? "Copied" : "Copy"}
    </Button>
  )
}
