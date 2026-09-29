import { XKbd, type XKbdVariant } from "@/components/kit";

const variants: XKbdVariant[] = ["solid", "outline", "soft", "subtle"];

export default function KbdVariants() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        {variants.map((variant) => (
          <XKbd key={variant} variant={variant} color="primary" value="K" />
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <XKbd variant="outline" value="Ctrl" />
        <XKbd variant="outline" value="K" />
        <XKbd variant="solid" color="neutral" value="↵" />
      </div>
    </div>
  );
}
