import { XButton } from "@/components/kit/x-button";
import { XCard } from "@/components/kit/x-card";

export default function CardUi() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <XCard
        title="ui 插槽自定义"
        description="root / header / title / description / body / footer"
        bordered={false}
        ui={{
          root: "rounded-xl bg-primary/10",
          header: "border-b border-primary/20",
          title: "text-primary",
          description: "text-primary/75",
          body: "bg-primary/10",
          footer: "border-t border-primary/20 bg-primary/10",
        }}
        footer={<XButton size="sm" variant="soft">了解 ui 插槽</XButton>}
      >
        每个分区元素都可以通过 ui 键注入类名。
      </XCard>
      <XCard
        variant="solid"
        title="变体与 ui 叠加"
        ui={{ root: "rounded-2xl divide-y divide-white/20" }}
      >
        变体内部样式与 ui 类名通过 cn 合并，可叠加使用。
      </XCard>
    </div>
  );
}
