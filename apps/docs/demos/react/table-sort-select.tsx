import { useState } from "react";
import { XButton } from "@/components/kit";
import { XTable } from "@/components/kit";

const columns = [
  {
    accessorKey: "name",
    header: ({ column }: { column: { toggleSorting: () => void } }) => (
      <button type="button" className="inline-flex items-center gap-1" onClick={() => column.toggleSorting()}>
        姓名
      </button>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "age",
    header: ({ column }: { column: { toggleSorting: () => void } }) => (
      <button type="button" className="inline-flex items-center gap-1" onClick={() => column.toggleSorting()}>
        年龄
      </button>
    ),
    enableSorting: true,
  },
  { accessorKey: "city", header: "城市" },
  { accessorKey: "actions", header: "操作", cell: () => "···" },
];

const data = [
  { key: "1", name: "张三", age: 32, city: "杭州" },
  { key: "2", name: "李四", age: 28, city: "成都" },
  { key: "3", name: "王五", age: 45, city: "北京" },
  { key: "4", name: "赵六", age: 24, city: "上海" },
  { key: "5", name: "孙七", age: 37, city: "广州" },
  { key: "6", name: "周八", age: 29, city: "深圳" },
];

export default function TableSortSelect() {
  /* 固定列：姓名在左，操作在右 */
  const [columnPinning, setColumnPinning] = useState({ left: ["name"], right: ["actions"] });
  /* 行选择状态（索引 → 是否选中） */
  const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="max-h-64 overflow-hidden rounded-md border">
        <XTable
          columns={columns}
          data={data}
          sortingOptions={{ enableSorting: true }}
          columnPinningOptions={{
            enableColumnPinning: true,
            state: { columnPinning },
            onColumnPinningChange: setColumnPinning,
          }}
          rowSelectionOptions={{
            enableRowSelection: true,
            state: { rowSelection },
            onRowSelectionChange: setRowSelection,
          }}
          sticky
        />
      </div>
      <div className="flex items-center gap-2">
        <XButton size="xs" variant="outline" color="neutral" onClick={() => setColumnPinning({})}>
          取消固定
        </XButton>
        <span className="text-xs text-muted-foreground">已选 {Object.keys(rowSelection).length} 行</span>
      </div>
    </div>
  );
}
