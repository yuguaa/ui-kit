import { useState } from "react"
import { MapPin } from "lucide-react"
import { XInputMenu } from "@/components/kit/x-input-menu"

const cities = [
  { name: "上海", id: "sh" },
  { name: "北京", id: "bj", note: "首都" },
  { name: "广州", id: "gz" },
]

const food = [
  { label: "苹果", value: "apple", alias: "水果" },
  { label: "香蕉", value: "banana", alias: "水果" },
  { label: "西兰花", value: "broccoli", alias: "蔬菜" },
]

export default function InputMenuUi() {
  const [last, setLast] = useState("")

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <XInputMenu
          items={cities}
          labelKey="name"
          valueKey="id"
          descriptionKey="note"
          selectedIcon="star"
          clearable
          clearIcon="trash"
          placeholder="选择城市"
          leading={<MapPin className="size-4 text-primary-6" />}
          onSelect={(item) => setLast(String(item.name ?? ""))}
          className="w-56"
        />
        <XInputMenu items={food} filterFields={["alias"]} placeholder="输入品类过滤" className="w-56" />
        <XInputMenu
          items={cities}
          labelKey="name"
          valueKey="id"
          ui={{ root: "rounded-md ring-1 ring-primary-2", base: "ring-primary-4", item: "rounded-lg", itemLabel: "font-medium" }}
          className="w-56"
        />
      </div>
      <p className="text-sm text-muted-foreground">最近选择：{last || "—"}</p>
    </div>
  )
}
