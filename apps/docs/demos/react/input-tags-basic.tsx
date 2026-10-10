import { useState } from "react";
import { XInputTags } from "@/components/kit/x-input-tags";

export default function InputTagsBasic() {
  const [tags, setTags] = useState(["Vue", "Nuxt"]);
  return (
    <div className="flex w-full flex-wrap items-center gap-4">
      <XInputTags value={tags} onChange={setTags} className="w-80" />
      <span className="text-sm text-muted-foreground">当前标签：{tags.join("、")}</span>
    </div>
  );
}
