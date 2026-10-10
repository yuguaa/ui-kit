import { useState } from "react";
import { XPagination } from "@/components/kit";

export default function PaginationUiCustom() {
  const [page, setPage] = useState(3);

  return (
    <div className="flex w-full flex-col gap-6">
      <XPagination
        page={page}
        total={100}
        itemsPerPage={10}
        onPageChange={setPage}
        ui={{
          root: "rounded-lg bg-elevated p-2",
          list: "gap-2",
          item: "ring-1 ring-inset ring-border",
          label: "font-bold",
          ellipsis: "opacity-40",
        }}
      />
      <XPagination
        page={page}
        total={100}
        itemsPerPage={10}
        onPageChange={setPage}
        itemSlot={({ item, page: current }) => (
          <button
            type="button"
            className={`rounded-md px-3 py-1.5 text-sm ${item.type === "page" && item.value === current ? "bg-primary text-background" : "text-muted-foreground"}`}
          >
            第 {item.type === "page" ? item.value : "…"} 页
          </button>
        )}
      />
    </div>
  );
}
