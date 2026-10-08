import { XCarousel } from "@/components/kit/x-carousel";

const items = [
  { key: "1", content: <div className="flex h-24 items-center justify-center rounded-lg bg-primary-1 text-primary-7">Slide 1</div> },
  { key: "2", content: <div className="flex h-24 items-center justify-center rounded-lg bg-primary-1 text-primary-7">Slide 2</div> },
  { key: "3", content: <div className="flex h-24 items-center justify-center rounded-lg bg-primary-1 text-primary-7">Slide 3</div> },
];

export default function CarouselDots() {
  return <XCarousel items={items} arrows={false} dots autoplay interval={2000} />;
}
