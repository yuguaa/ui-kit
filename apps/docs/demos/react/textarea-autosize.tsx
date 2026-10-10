import { useState } from "react";
import { XTextarea } from "@/components/kit/x-textarea";

export default function TextareaAutosizeDemo() {
  const [content, setContent] = useState("");
  const [delayed, setDelayed] = useState("");

  return (
    <div className="flex flex-wrap items-start gap-4">
      <XTextarea
        value={content}
        onChange={(event) => setContent(event.target.value)}
        autoresize
        placeholder="输入后高度自动调整"
        className="w-72"
      />
      <XTextarea
        value={delayed}
        onChange={(event) => setDelayed(event.target.value)}
        autoresize
        autoresizeDelay={300}
        placeholder="挂载后延迟 300ms 调整"
        className="w-72"
      />
    </div>
  );
}
