import { useState } from "react";
import { XProgress } from "@/components/kit/x-progress";

export default function ProgressBasic() {
  const [value, setValue] = useState(45);
  return (
    <div className="flex w-full flex-col gap-5">
      <XProgress value={value} />
      <XProgress value={value} status color="success" />
      <XProgress value={100} status color="info" statusContent={({ percent }) => <span className="text-info">已完成 {percent}%</span>} />
      <XProgress value={60} ui={{ base: "h-3", indicator: "bg-gradient-to-r from-primary to-info" }} />
      <button className="w-fit" type="button" onClick={() => setValue((v) => (v + 15) % 100)}>
        更新进度
      </button>
    </div>
  );
}
