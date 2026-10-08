import { XScrollArea } from "@/components/kit/x-scroll-area";

const cells = Array.from({ length: 30 }, (_, index) => index + 1);

export default function ScrollAreaBoth() {
  return (
    <XScrollArea height={160} orientation="both">
      <div className="grid w-max grid-cols-5 gap-2">
        {cells.map((cell) => (
          <div
            key={cell}
            className="flex h-16 w-28 items-center justify-center rounded-md bg-info-1 text-sm text-info-7"
          >
            格 {cell}
          </div>
        ))}
      </div>
    </XScrollArea>
  );
}
