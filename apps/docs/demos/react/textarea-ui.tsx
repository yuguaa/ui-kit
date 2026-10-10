import { XTextarea } from "@/components/kit/x-textarea";

export default function TextareaUi() {
  return (
    <div className="flex w-full flex-col gap-4">
      <XTextarea
        placeholder="自定义 base 类名"
        className="w-72"
        ui={{ base: "bg-primary-1 ring-primary-3 text-primary-7" }}
      />
    </div>
  );
}
