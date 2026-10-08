import { XListbox } from "@/components/kit/x-listbox"

const items = [
  { key: "a", label: "选项 A" },
  { key: "b", label: "选项 B" },
  { key: "c", label: "选项 C" },
]

export default function ListboxLoading() {
  return <XListbox items={items} loading />
}
