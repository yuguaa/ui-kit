import { useState } from "react"
import { XListbox } from "@/components/kit/x-listbox"

const items = [
  { key: "ts", label: "TypeScript" },
  { key: "vue", label: "Vue.js" },
  { key: "react", label: "React" },
  { key: "nuxt", label: "Nuxt" },
  { key: "svelte", label: "Svelte" },
]

export default function ListboxFilterable() {
  const [selected, setSelected] = useState<string[]>([])
  const [customSelected, setCustomSelected] = useState<string[]>([])

  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <div>
        <p className="mb-2 text-sm font-medium">搜索过滤</p>
        <XListbox
          items={items}
          valueKey="key"
          multiple
          filter
          value={selected}
          onValueChange={(value) => setSelected(Array.isArray(value) ? value.map(String) : [])}
        />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">自定义占位</p>
        <XListbox
          items={items}
          valueKey="key"
          multiple
          filter={{ placeholder: "输入框架名称" }}
          value={customSelected}
          onValueChange={(value) => setCustomSelected(Array.isArray(value) ? value.map(String) : [])}
        />
      </div>
    </div>
  )
}
