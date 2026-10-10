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

export default function SelectMenuBasic() {
  const [selected, setSelected] = useState("apple")
  const [city, setCity] = useState<string[]>(["bj"])
  const [cleared, setCleared] = useState("apple")

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <XSelectMenu items={options} value={selected} onChange={setSelected} className="w-48" />
        <XSelectMenu items={options} searchInput placeholder="可搜索" value={selected} onChange={setSelected} className="w-48" />
        <XSelectMenu items={cityOptions} multiple placeholder="多选" value={city} onChange={setCity} className="w-48" />
        <XSelectMenu items={options} placeholder="禁用" disabled className="w-48" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <XSelectMenu items={options} clear value={cleared} onChange={setCleared} className="w-48" />
        <XSelectMenu items={cityOptions} multiple clear placeholder="多选可清空" value={city} onChange={setCity} className="w-48" />
      </div>
    </div>
  )
}
