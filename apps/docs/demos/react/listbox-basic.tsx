import { useState } from "react"
import { XListbox } from "@/components/kit/x-listbox"

const items = [
  { key: "zh", label: "简体中文" },
  { key: "en", label: "English" },
  { key: "ja", label: "日本語" },
  { key: "ko", label: "한국어" },
]

export default function ListboxBasic() {
  const [selected, setSelected] = useState("zh")
  const [multipleSelected, setMultipleSelected] = useState<string[]>(["en", "ja"])

  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <div>
        <p className="mb-2 text-sm font-medium">单选</p>
        <XListbox items={items} valueKey="key" value={selected} onValueChange={(value) => setSelected(String(value))} />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">多选</p>
        <XListbox items={items} valueKey="key" multiple value={multipleSelected} onValueChange={(value) => setMultipleSelected(Array.isArray(value) ? value.map(String) : [])} />
      </div>
    </div>
  )
}
