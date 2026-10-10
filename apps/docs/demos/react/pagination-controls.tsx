import { useState } from "react";
import { XPagination } from "@/components/kit";

export default function PaginationControls() {
  const [page, setPage] = useState(5);

  return (
    <div className="flex w-full flex-wrap items-center gap-6">
      <XPagination
        page={page}
        total={200}
        itemsPerPage={10}
        firstIcon="chevron-down"
        prevIcon="chevron-down"
        nextIcon="chevron-right"
        lastIcon="chevron-right"
        color="neutral"
        variant="ghost"
        size="sm"
        onPageChange={setPage}
      />
      <XPagination
        page={page}
        total={200}
        itemsPerPage={10}
        color="primary"
        variant="soft"
        activeColor="success"
        activeVariant="solid"
        onPageChange={setPage}
      />
    </div>
  );
}
