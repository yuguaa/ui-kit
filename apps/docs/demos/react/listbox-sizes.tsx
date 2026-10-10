import { useState } from "react"
import { XListbox } from "@/components/kit/x-listbox"

const items = [
  { key: "zh", label: "简体中文" },
  { key: "en", label: "English" },
  { key: "ja", label: "日本語" },
]

const sizes = ["xs", "sm", "md", "lg", "xl"] as const

export default function ListboxSizes() {
  const [selected, setSelected] = useState<Record<string, string[]>>({
    xs: ["zh"],
    sm: [],
    md: [],
    lg: [],
    xl: [],
  })

  return (
    <div className="flex w-full flex-wrap items-start gap-4">
      {sizes.map((size) => (
        <div key={size} className="w-32">
          <p className="mb-2 text-sm font-medium">{size}</p>
          <XListbox
            items={items}
            valueKey="key"
            size={size}
            value={selected[size]}
            onValueChange={(value) =>
              setSelected((prev) => ({ ...prev, [size]: Array.isArray(value) ? value.map(String) : [String(value)] }))
            }
          />
        </div>
      ))}
    </div>
  )
}
