import { useState } from "react";
import { XTable } from "@/components/kit";

const columns = [
  { accessorKey: "name", header: "姓名" },
  { accessorKey: "age", header: "年龄" },
  { accessorKey: "city", header: "城市" },
];

const data = [
  { key: "1", name: "张三", age: 32, city: "杭州" },
  { key: "2", name: "李四", age: 28, city: "成都" },
  { key: "3", name: "王五", age: 45, city: "北京" },
  { key: "4", name: "赵六", age: 24, city: "上海" },
];

export default function TableBasic() {
  /* 受控列筛选：城市包含「州」的行 */
  const [columnFilters, setColumnFilters] = useState([{ id: "city", value: "州" }]);

  return (
    <div className="flex w-full flex-col gap-3">
      <XTable
        columns={columns}
        data={data}
        caption="员工花名册"
        columnFiltersOptions={{
          enableColumnFilters: true,
          state: { columnFilters },
          onColumnFiltersChange: setColumnFilters,
        }}
        sticky
      />
      <span className="text-xs text-muted-foreground">当前筛选：城市包含「{columnFilters[0]?.value}」</span>
    </div>
  );
}
