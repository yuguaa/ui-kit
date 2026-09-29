import { useState } from "react";
import { XSelectMenu } from "@/components/kit/x-select-menu";

const options = [
  { label: "苹果", value: "apple" },
  { label: "香蕉", value: "banana" },
  { label: "橙子", value: "orange" },
];
const cityOptions = [
  { label: "北京", value: "bj" },
  { label: "上海", value: "sh" },
  { label: "广州", value: "gz" },
];

export default function SelectMenuBasic() {
  const [selected, setSelected] = useState("apple");
  const [cities, setCities] = useState<string[]>(["bj"]);

  return (
    <div className="flex w-full flex-wrap items-center gap-4">
      <XSelectMenu value={selected} options={options} onChange={setSelected} className="w-48" />
      <XSelectMenu value={selected} showSearch placeholder="可搜索" options={options} onChange={setSelected} className="w-48" />
      <XSelectMenu value={cities} multiple placeholder="多选" options={cityOptions} onChange={setCities} className="w-48" />
      <XSelectMenu placeholder="禁用" disabled options={options} className="w-48" />
    </div>
  );
}
