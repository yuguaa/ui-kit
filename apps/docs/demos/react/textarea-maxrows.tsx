import { useState } from "react";
import { XTextarea } from "@/components/kit/x-textarea";

/* 预置超过上限行数的内容，直接展示高度受限与内部滚动 */
const LONG_TEXT = [
  "第一行：组件补齐阶段",
  "第二行：maxRows 限制自动高度",
  "第三行：超出后内容在控件内部滚动",
  "第四行：行高由计算样式换算",
  "第五行：这是上限内的最后一行",
  "第六行：从这一行开始需要滚动查看",
  "第七行：继续输入还会保持上限高度",
].join("\n");

export default function TextareaMaxRowsDemo() {
  const [content, setContent] = useState(LONG_TEXT);
  const [limited, setLimited] = useState(LONG_TEXT);

  return (
    <div className="flex flex-wrap items-start gap-4">
      <XTextarea
        value={content}
        onChange={(event) => setContent(event.target.value)}
        autosize
        maxRows={5}
        placeholder="自动高度上限 5 行"
        className="w-72"
      />
      <XTextarea
        value={limited}
        onChange={(event) => setLimited(event.target.value)}
        autosize
        maxRows={5}
        showCount
        placeholder="上限 5 行 + 字数统计"
        className="w-72"
      />
    </div>
  );
}
