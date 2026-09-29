import { XButton } from "@/components/kit";

export default function ButtonVariants() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <XButton>solid</XButton>
      <XButton variant="outline">outline</XButton>
      <XButton variant="soft">soft</XButton>
      <XButton variant="ghost">ghost</XButton>
      <XButton variant="subtle">subtle</XButton>
      <XButton variant="link">link</XButton>
    </div>
  );
}
