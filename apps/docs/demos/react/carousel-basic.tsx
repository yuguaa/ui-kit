import { XCarousel } from "@/components/kit/x-carousel";

const items = [{ key: "1" }, { key: "2" }, { key: "3" }, { key: "4" }];

export default function CarouselBasic() {
  return (
    <XCarousel items={items}>
      {({ item }) => (
        <div className="flex h-24 items-center justify-center rounded-lg bg-primary/10 text-primary">
          Slide {item.key}
        </div>
      )}
    </XCarousel>
  );
}
