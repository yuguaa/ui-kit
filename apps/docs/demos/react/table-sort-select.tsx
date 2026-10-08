import { useState } from "react";
import { XTable } from "@/components/kit";

const columns = [
  { key: "name", title: "姓名", sortable: true },
  { key: "age", title: "年龄", sortable: true, align: "right" as const },
  { key: "city", title: "城市" },
];

const dataSource = [
  { key: "1", name: "张三", age: 32, city: "杭州" },
  { key: "2", name: "李四", age: 28, city: "成都" },
  { key: "3", name: "王五", age: 45, city: "北京" },
  { key: "4", name: "赵六", age: 24, city: "上海" },
  { key: "5", name: "孙七", age: 37, city: "广州" },
  { key: "6", name: "周八", age: 29, city: "深圳" },
];

export default function TableSortSelect() {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div className="flex w-full flex-col gap-3">
      <XTable
        columns={columns}
        dataSource={dataSource}
        rowSelection
        selectedRowKeys={selected}
        sticky
        maxHeight={240}
        pagination={{ pageSize: 4 }}
        onSelectionChange={setSelected}
      />
      <span className="text-xs text-muted-foreground">
        已选 {selected.length} 行：{selected.join(", ") || "—"}
      </span>
    </div>
  );
}
