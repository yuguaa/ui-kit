import { XTextarea } from "@/components/kit/x-textarea";

export default function TextareaBasic() {
  return (
    <div className="flex w-full flex-wrap items-start gap-4">
      <XTextarea placeholder="Textarea（md）" className="w-72" />
      <XTextarea size="sm" placeholder="Textarea（sm）" className="w-56" />
      <XTextarea size="lg" placeholder="Textarea（lg）" className="w-72" />
      <XTextarea disabled placeholder="禁用状态" className="w-72" />
    </div>
  );
}
