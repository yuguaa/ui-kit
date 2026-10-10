import { XCarousel } from "@/components/kit/x-carousel";

const items = [{ key: "1" }, { key: "2" }, { key: "3" }];

export default function CarouselUi() {
  return (
    <XCarousel
      items={items}
      dots
      prev={{ label: "后退", variant: "soft", color: "success" }}
      next={{ label: "前进", variant: "soft", color: "success" }}
      prevIcon="star"
      nextIcon="star"
      ui={{
        root: "rounded-lg ring-1 ring-inset ring-border p-6",
        item: "overflow-hidden rounded-lg",
        dot: "bg-success-5",
      }}
    >
      {({ item }) => (
        <div className="flex h-24 items-center justify-center rounded-lg bg-primary-1 text-primary-7">
          Slide {item.key}
        </div>
      )}
    </XCarousel>
  );
}
