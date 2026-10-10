import { useState } from "react";
import { XPagination } from "@/components/kit";

export default function PaginationBasic() {
  const [page, setPage] = useState(5);

  return (
    <div className="flex w-full flex-wrap items-center gap-4">
      <XPagination page={page} total={200} itemsPerPage={10} showEdges onPageChange={setPage} />
      <span className="text-xs text-muted-foreground">当前第 {page} 页</span>
    </div>
  );
}
