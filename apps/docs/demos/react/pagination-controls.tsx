import { useState } from "react";
import { XPagination } from "@/components/kit/x-pagination";

export default function PaginationControls() {
  const [page, setPage] = useState(5);
  return (
    <div className="flex w-full flex-wrap items-center gap-4">
      <XPagination current={page} total={200} pageSize={10} showControls onChange={setPage} />
    </div>
  );
}
