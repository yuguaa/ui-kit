import { XForm, XFormField, XInput } from "@/components/kit";

export default function FormFieldOrientation() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">vertical（默认）：标签在上，控件在下</span>
        <XForm className="gap-2">
          <XFormField label="邮箱" description="用于接收通知">
            <XInput placeholder="you@example.com" />
          </XFormField>
        </XForm>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">horizontal：标签与控件同一行</span>
        <XForm className="gap-2">
          <XFormField orientation="horizontal" label="邮箱" description="用于接收通知">
            <XInput placeholder="you@example.com" className="max-w-64" />
          </XFormField>
        </XForm>
      </div>
    </div>
  );
}
