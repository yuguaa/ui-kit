import { XIcon, type XIconName, type XIconSize } from "@/components/kit/x-icon";

const names: XIconName[] = [
  "dashboard",
  "settings",
  "user",
  "search",
  "bell",
  "star",
  "plus",
  "check",
  "trash",
  "copy",
];
const sizes: XIconSize[] = ["xs", "sm", "md", "lg", "xl"];

export default function IconBasic() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">内置图标集合</span>
        <div className="flex flex-wrap items-center gap-4">
          {names.map((name) => (
            <XIcon key={name} name={name} size="lg" />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">五档尺寸</span>
        <div className="flex flex-wrap items-center gap-4">
          {sizes.map((size) => (
            <XIcon key={size} name="star" size={size} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">自定义颜色</span>
        <div className="flex flex-wrap items-center gap-4">
          <XIcon name="circle-check" size="lg" color="#52c41a" />
          <XIcon name="circle-alert" size="lg" color="#faad14" />
          <XIcon name="info" size="lg" color="#1677ff" />
        </div>
      </div>
    </div>
  );
}
