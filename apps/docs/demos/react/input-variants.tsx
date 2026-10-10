import { XInput } from "@/components/kit/x-input";

export default function InputVariants() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <XInput variant="outline" placeholder="outline" className="w-40" />
        <XInput variant="soft" placeholder="soft" className="w-40" />
        <XInput variant="subtle" placeholder="subtle" className="w-40" />
        <XInput variant="ghost" placeholder="ghost" className="w-40" />
        <XInput variant="none" placeholder="none" className="w-40" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <XInput color="primary" placeholder="primary" className="w-40" />
        <XInput color="success" placeholder="success" className="w-40" />
        <XInput color="warning" placeholder="warning" className="w-40" />
        <XInput color="error" placeholder="error" className="w-40" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <XInput highlight color="warning" placeholder="highlight" className="w-40" />
        <XInput fixed={false} placeholder="fixed=false" className="w-48" />
      </div>
    </div>
  );
}
