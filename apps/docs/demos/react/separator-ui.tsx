import { XSeparator } from "@/components/kit";

export default function SeparatorUi() {
  return (
    <div className="flex w-full flex-col gap-6">
      <XSeparator
        label="自定义外观"
        ui={{
          border: "border-dashed border-info-6",
          container: "text-info-6",
          label: "text-base",
        }}
      />
      <XSeparator avatar={{ text: "A" }} ui={{ avatarSize: "lg" }} />
      <XSeparator icon="star" ui={{ icon: "text-warning-6", border: "border-warning-6" }} />
    </div>
  );
}
