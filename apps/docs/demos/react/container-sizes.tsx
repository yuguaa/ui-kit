import { XContainer } from "@/components/kit/x-container";

const sizeWidths = { xs: 640, sm: 768, md: 1024, lg: 1280, xl: 1536 } as const;

export default function ContainerSizes() {
  return (
    <div className="flex w-full flex-col gap-4">
      {(Object.keys(sizeWidths) as (keyof typeof sizeWidths)[]).map((size) => (
        <XContainer
          key={size}
          size={size}
          className="rounded-lg border border-dashed border-border py-2 text-center text-sm text-muted-foreground"
        >
          {size}：{sizeWidths[size]}px
        </XContainer>
      ))}
      <XContainer
        render={<section />}
        size="md"
        ui={{ base: "rounded-lg bg-primary-1 px-4 py-3 text-center text-sm text-primary-7" }}
      >
        render 渲染为 section，ui.base 注入自定义类名
      </XContainer>
    </div>
  );
}
