import { XCarousel } from "@/components/kit/x-carousel";

const items = [
  { key: "1", content: <div className="flex h-24 items-center justify-center rounded-lg bg-info/10 text-info">Slide 1</div> },
  { key: "2", content: <div className="flex h-24 items-center justify-center rounded-lg bg-info/10 text-info">Slide 2</div> },
  { key: "3", content: <div className="flex h-24 items-center justify-center rounded-lg bg-info/10 text-info">Slide 3</div> },
];

export default function CarouselVertical() {
  return <XCarousel items={items} orientation="vertical" />;
}
