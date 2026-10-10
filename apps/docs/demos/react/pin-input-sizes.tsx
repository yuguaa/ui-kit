import { XPinInput, type XPinInputSize } from "@/components/kit";

const sizes: XPinInputSize[] = ["xs", "sm", "md", "lg", "xl"];

export default function PinInputSizes() {
  return (
    <div className="flex w-full flex-wrap items-center gap-4">
      {sizes.map((size) => (
        <div key={size} className="flex flex-col items-center gap-1.5">
          <XPinInput size={size} length={4} />
          <span className="text-xs text-muted-foreground">{size}</span>
        </div>
      ))}
    </div>
  );
}
