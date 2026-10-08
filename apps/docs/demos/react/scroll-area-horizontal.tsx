import { XScrollArea } from "@/components/kit/x-scroll-area";

const cards = Array.from({ length: 10 }, (_, index) => index + 1);

export default function ScrollAreaHorizontal() {
  return (
    <XScrollArea height={96} orientation="horizontal">
      {cards.map((card) => (
        <div
          key={card}
          className="flex h-20 w-40 shrink-0 items-center justify-center rounded-lg bg-primary-1 text-sm text-primary-7"
        >
          卡片 {card}
        </div>
      ))}
    </XScrollArea>
  );
}
