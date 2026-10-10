import { useState } from "react"
import { XSelectMenu } from "@/components/kit/x-select-menu"

const members = [
  { id: "u1", name: "张三", role: "前端工程师" },
  { id: "u2", name: "李四", role: "设计师" },
  { id: "u3", name: "王五", role: "产品经理" },
]

const grouped = [
  { type: "label" as const, label: "水果", value: "g1" },
  { label: "苹果", value: "apple" },
  { label: "香蕉", value: "banana" },
  { type: "separator" as const, value: "s1" },
  { label: "北京", value: "bj" },
  { label: "上海", value: "sh" },
]

export default function SelectMenuFields() {
  const [member, setMember] = useState("u1")

  return (
    <div className="flex w-full flex-wrap items-center gap-4">
      <XSelectMenu
        items={members}
        labelKey="name"
        valueKey="id"
        descriptionKey="role"
        placeholder="选择成员"
        value={member}
        onChange={setMember}
        className="w-52"
      />
      <XSelectMenu items={grouped} placeholder="分组选项" className="w-48" />
      <XSelectMenu items={grouped} mode="listbox" placeholder="listbox 模式" className="w-48" />
    </div>
  )
}
