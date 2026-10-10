import { XCarousel } from "@/components/kit/x-carousel";

const slides = [
  { key: "1", text: "第一张", height: "h-24" },
  { key: "2", text: "第二张", height: "h-32" },
  { key: "3", text: "第三张", height: "h-24" },
];

export default function CarouselPlugins() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground text-sm">fade 淡入淡出切换，autoHeight 容器高度跟随当前项</span>
        <XCarousel items={slides} fade autoHeight>
          {({ item }) => (
            <div className={`flex items-center justify-center rounded-lg bg-primary/10 text-primary ${item.height}`}>
              {String(item.text)}
            </div>
          )}
        </XCarousel>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground text-sm">autoScroll 连续滚动，wheelGestures 滚轮切换</span>
        <XCarousel items={slides} autoScroll={{ speed: 1 }} arrows={false} wheelGestures>
          {({ item }) => (
            <div className={`flex items-center justify-center rounded-lg bg-info/10 text-info ${item.height}`}>
              {String(item.text)}
            </div>
          )}
        </XCarousel>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground text-sm">classNames 给轮播项加状态类名：进入视口的项变淡，当前吸附项高亮</span>
        <XCarousel items={slides} classNames={{ inView: "opacity-60", snapped: "opacity-100 ring-2 ring-primary-5" }}>
          {({ item }) => (
            <div className={`flex items-center justify-center rounded-lg bg-success/10 text-success ${item.height}`}>
              {String(item.text)}
            </div>
          )}
        </XCarousel>
      </div>
    </div>
  );
}
