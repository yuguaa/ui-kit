import { useState } from "react";
import { XTextarea } from "@/components/kit/x-textarea";

export default function TextareaShowCountDemo() {
  const [content, setContent] = useState("");
  const [limited, setLimited] = useState("");

  return (
    <div className="flex flex-wrap items-start gap-4">
      <XTextarea
        value={content}
        onChange={(event) => setContent(event.target.value)}
        showCount
        placeholder="只显示当前字数"
        className="w-72"
      />
      <XTextarea
        value={limited}
        onChange={(event) => setLimited(event.target.value)}
        showCount
        maxLength={20}
        placeholder="最多输入 20 字"
        className="w-72"
      />
    </div>
  );
}
