import { useState } from "react";
import { XButton, XSkeleton, XTable } from "@/components/kit";

const columns = [
  { accessorKey: "name", header: "姓名" },
  { accessorKey: "age", header: "年龄" },
  { accessorKey: "city", header: "城市" },
];

const rows = [
  { key: "1", name: "张三", age: 32, city: "杭州" },
  { key: "2", name: "李四", age: 28, city: "成都" },
];

export default function TableUiCustom() {
  /* 加载态数据为空，展示 loadingSlot；切换后展示有数据状态 */
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<typeof rows>([]);

  function toggleLoading() {
    const next = !loading;
    setLoading(next);
    setData(next ? [] : rows);
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <XTable
        columns={columns}
        data={data}
        loading={loading}
        caption="ui 插槽自定义示例"
        loadingSlot={
          <div className="flex flex-col gap-2">
            {[0, 1, 2].map((index) => (
              <XSkeleton key={index} variant="text" className="h-4" />
            ))}
          </div>
        }
        ui={{
          root: "rounded-lg border shadow-xs",
          thead: "bg-primary/10",
          th: "text-primary",
          td: "text-default",
          loading: "py-10",
        }}
      />

      <XTable
        columns={columns}
        data={[]}
        emptySlot={<p className="text-error">一行数据都没有</p>}
        ui={{ empty: "py-10 text-base" }}
      />

      <XButton size="xs" variant="outline" color="neutral" onClick={toggleLoading}>
        {loading ? "加载数据" : "重新加载"}
      </XButton>
    </div>
  );
}
