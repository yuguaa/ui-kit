import { XButton, type XButtonSize } from "@/components/kit/x-button";

const sizes: XButtonSize[] = ["xs", "sm", "md", "lg", "xl"];

export default function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {sizes.map((size) => (
        <XButton key={size} size={size}>{size}</XButton>
      ))}
    </div>
  );
}
