import { useState } from "react";
import { XInputDate } from "@/components/kit/x-input-date";
import { XInputMenu } from "@/components/kit/x-input-menu";
import { XInputNumber } from "@/components/kit/x-input-number";
import { XInputRating } from "@/components/kit/x-input-rating";
import { XInputTags } from "@/components/kit/x-input-tags";
import { XInputTime } from "@/components/kit/x-input-time";
import { XSelectMenu } from "@/components/kit/x-select-menu";
import { XSlider } from "@/components/kit/x-slider";

export default function SelectBasic() {
  const [selected, setSelected] = useState<string | string[]>("apple");
  const [count, setCount] = useState(5);
  const [rating, setRating] = useState(4);
  const [tags, setTags] = useState(["Vue", "Nuxt"]);
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <XSelectMenu
          showSearch
          value={selected}
          onChange={setSelected}
          options={[
            { label: "苹果", value: "apple" },
            { label: "香蕉", value: "banana" },
            { label: "橙子", value: "orange" },
          ]}
          className="w-48"
        />
        <XInputMenu items={[{ label: "上海", value: "sh" }, { label: "北京", value: "bj" }]} className="w-48" />
        <XInputDate defaultValue="2025-06-15" className="w-44" />
        <XInputTime defaultValue="14:30" className="w-32" />
      </div>
      <div className="flex flex-wrap items-center gap-6">
        <XInputNumber value={count} min={1} max={10} onChange={setCount} />
        <XSlider defaultValue={[50]} className="w-48" />
        <XInputRating value={rating} allowHalf onChange={setRating} />
        <XInputTags value={tags} onChange={setTags} placeholder="输入后回车添加…" className="w-72" />
      </div>
    </div>
  );
}
