import { useState } from "react"
import { XListbox } from "@/components/kit/x-listbox"

const items = [
  { key: "zh", label: "简体中文" },
  { key: "en", label: "English" },
  { key: "ja", label: "日本語" },
  { key: "ko", label: "한국어" },
]

export default function ListboxBasic() {
  const [selected, setSelected] = useState<string[]>(["zh"])
  const [multipleSelected, setMultipleSelected] = useState<string[]>(["en", "ja"])

  const toggleMultiple = (key: string) => {
    setMultipleSelected((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key],
    )
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <div>
        <p className="mb-2 text-sm font-medium">单选</p>
        <XListbox items={items} selected={selected} onSelect={(key) => setSelected([key])} />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">多选</p>
        <XListbox
          items={items}
          selected={multipleSelected}
          multiple
          onSelect={toggleMultiple}
        />
      </div>
    </div>
  )
}
