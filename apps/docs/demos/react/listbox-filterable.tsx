import { useState } from "react"
import { XListbox } from "@/components/kit/x-listbox"

const items = [
  { key: "ts", label: "TypeScript" },
  { key: "vue", label: "Vue.js" },
  { key: "react", label: "React" },
  { key: "nuxt", label: "Nuxt" },
  { key: "svelte", label: "Svelte" },
]

function toggle(list: string[], key: string) {
  return list.includes(key) ? list.filter((item) => item !== key) : [...list, key]
}

export default function ListboxFilterable() {
  const [selected, setSelected] = useState<string[]>([])
  const [customSelected, setCustomSelected] = useState<string[]>([])

  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <div>
        <p className="mb-2 text-sm font-medium">搜索过滤</p>
        <XListbox
          items={items}
          selected={selected}
          multiple
          filterable
          onSelect={(key) => setSelected((prev) => toggle(prev, key))}
        />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">自定义占位与空提示</p>
        <XListbox
          items={items}
          selected={customSelected}
          multiple
          filterable
          searchPlaceholder="输入框架名称"
          emptyText="没有匹配的框架"
          onSelect={(key) => setCustomSelected((prev) => toggle(prev, key))}
        />
      </div>
    </div>
  )
}
