import { useState } from "react"
import { XInputMenu } from "@/components/kit/x-input-menu"

const items = [
  { label: "上海", value: "sh", description: "直辖市" },
  { label: "北京", value: "bj", description: "首都" },
  { label: "广州", value: "gz", description: "省会" },
  { label: "深圳", value: "sz", description: "特区" },
]

export default function InputMenuListbox() {
  const [last, setLast] = useState("")

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <XInputMenu
          items={items}
          mode="listbox"
          searchInput
          placeholder="点击选择城市"
          onSelect={(item) => setLast(item.description ?? "")}
          className="w-56"
        />
        <XInputMenu
          items={items}
          mode="listbox"
          searchInput={{ placeholder: "输入城市名过滤" }}
          onSelect={(item) => setLast(item.description ?? "")}
          searchInputSlot={({ keyword, onInput }) => (
            <input
              value={keyword}
              placeholder="自定义搜索框"
              onChange={(event) => onInput(event.target.value)}
              className="h-8 w-full rounded-md px-2 text-sm ring-1 ring-inset ring-input focus-visible:ring-2 focus-visible:ring-ring"
            />
          )}
          className="w-56"
        />
      </div>
      <p className="text-sm text-muted-foreground">最近选择：{last || "—"}</p>
    </div>
  )
}
