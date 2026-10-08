import { useEffect, useState } from "react";
import { XFileUpload, type XFileUploadFile } from "@/components/kit/x-file-upload";

/* 受控文件列表：包含上传中、失败、完成三种状态 */
const initialFiles: XFileUploadFile[] = [
  { name: "设计规范.pdf", size: 2048000, status: "uploading", progress: 46 },
  { name: "原型截图.png", size: 524288, status: "error" },
  { name: "需求文档.docx", size: 131072, status: "done" },
];

export default function UploadControlled() {
  const [files, setFiles] = useState<XFileUploadFile[]>(initialFiles);

  /* 模拟上传进度：uploading 项每 300ms 前进 10%，到 100% 转为完成 */
  useEffect(() => {
    const timer = setInterval(() => {
      setFiles((prev) => {
        if (!prev.some((item) => item.status === "uploading")) return prev;
        return prev.map((item) => {
          if (item.status !== "uploading") return item;
          const progress = Math.min(100, (item.progress ?? 0) + 10);
          return {
            ...item,
            progress,
            status: progress >= 100 ? ("done" as const) : "uploading",
          };
        });
      });
    }, 300);
    return () => clearInterval(timer);
  }, []);

  /* 新上传的文件进入 uploading 状态，由上面的定时器推进 */
  function handleUpload(list: XFileUploadFile[]) {
    setFiles((prev) => [
      ...prev,
      ...list.map((item) => ({
        ...item,
        status: "uploading" as const,
        progress: 0,
      })),
    ]);
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <XFileUpload
        files={files}
        onFilesChange={setFiles}
        multiple
        upload={handleUpload}
        className="w-full"
      />
      <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-xs">
        {JSON.stringify(files, null, 2)}
      </pre>
    </div>
  );
}
