import { XButton, type XButtonColor } from "@/components/kit";

const colors: XButtonColor[] = ["primary", "secondary", "neutral", "success", "info", "warning", "error"];

export default function ButtonColors() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {colors.map((color) => (
        <XButton key={color} color={color}>{color}</XButton>
      ))}
    </div>
  );
}
