import { XPinInput, type XPinInputColor, type XPinInputVariant } from "@/components/kit";

const variants: XPinInputVariant[] = ["outline", "soft", "subtle", "ghost", "none"];
const colors: XPinInputColor[] = ["primary", "secondary", "neutral", "success", "info", "warning", "error"];

export default function PinInputVariants() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-wrap items-center gap-4">
        {variants.map((variant) => (
          <div key={variant} className="flex flex-col items-center gap-1.5">
            <XPinInput variant={variant} length={4} />
            <span className="text-xs text-muted-foreground">{variant}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        {colors.map((color) => (
          <div key={color} className="flex flex-col items-center gap-1.5">
            <XPinInput color={color} length={3} />
            <span className="text-xs text-muted-foreground">{color}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
