import { XAlert, type XAlertColor } from "@/components/kit/x-alert";

const colors: XAlertColor[] = ["primary", "secondary", "neutral", "success", "info", "warning", "error"];

export default function AlertTypes() {
  return (
    <div className="flex w-full flex-col gap-3">
      {colors.map((color) => (
        <XAlert
          key={color}
          color={color}
          variant="soft"
          title={`${color} 提示`}
          description="color 属性提供七种语义色，type 仍可作为 color 的回退。"
        />
      ))}
    </div>
  );
}
