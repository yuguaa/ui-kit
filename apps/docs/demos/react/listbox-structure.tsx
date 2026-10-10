import { useState } from "react"
import { XListbox } from "@/components/kit/x-listbox"

const groups = [
  [
    { key: "g1", type: "label" as const, label: "套餐" },
    { id: "basic", name: "基础版", note: "适合个人" },
    { id: "pro", name: "专业版", note: "适合团队" },
  ],
  [
    { key: "s1", type: "separator" as const },
    { id: "ultimate", name: "旗舰版", note: "适合企业", icon: "star" },
  ],
]

export default function ListboxStructure() {
  const [current, setCurrent] = useState("pro")

  return (
    <div className="flex w-full flex-wrap items-start gap-6">
      <div>
        <p className="mb-2 text-sm font-medium">字段映射与分组</p>
        <XListbox
          items={groups}
          labelKey="name"
          valueKey="id"
          descriptionKey="note"
          value={current}
          selectedIcon="star"
          onValueChange={(value) => setCurrent(String(value))}
          className="w-64"
        />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">ui 插槽自定义</p>
        <XListbox
          items={groups}
          labelKey="name"
          valueKey="id"
          descriptionKey="note"
          value={current}
          size="sm"
          onValueChange={(value) => setCurrent(String(value))}
          ui={{
            root: "rounded-lg ring-1 ring-primary/20",
            item: "rounded-md",
            itemDescription: "text-primary/50",
            itemTrailingIcon: "text-success",
          }}
          className="w-64"
        />
      </div>
    </div>
  )
}
