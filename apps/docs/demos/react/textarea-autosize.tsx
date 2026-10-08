import { useState } from "react";
import { XTextarea } from "@/components/kit/x-textarea";

export default function TextareaAutosizeDemo() {
  const [content, setContent] = useState("");
  const [limited, setLimited] = useState("");

  return (
    <div className="flex flex-wrap items-start gap-4">
      <XTextarea
        value={content}
        onChange={(event) => setContent(event.target.value)}
        autosize
        placeholder="输入后高度自动调整"
        className="w-72"
      />
      <XTextarea
        value={limited}
        onChange={(event) => setLimited(event.target.value)}
        autosize
        showCount
        maxLength={30}
        placeholder="自动高度 + 字数统计"
        className="w-72"
      />
    </div>
  );
}
