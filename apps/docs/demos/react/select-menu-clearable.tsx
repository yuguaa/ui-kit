import { useState } from "react"
import { XSelectMenu } from "@/components/kit/x-select-menu"

const options = [
  { label: "苹果", value: "apple" },
  { label: "香蕉", value: "banana" },
  { label: "橙子", value: "orange" },
]
const cityOptions = [
  { label: "北京", value: "bj" },
  { label: "上海", value: "sh" },
  { label: "广州", value: "gz" },
]

export default function SelectMenuClearable() {
  const [selected, setSelected] = useState("apple")
  const [cities, setCities] = useState<string[]>(["bj"])

  return (
    <div className="flex w-full flex-wrap items-center gap-4">
      <XSelectMenu valueKey="value" items={options} value={selected} onChange={setSelected} clear className="w-48" />
      <XSelectMenu valueKey="value" items={cityOptions} value={cities} onChange={setCities} multiple clear placeholder="多选可清空" className="w-48" />
    </div>
  )
}
