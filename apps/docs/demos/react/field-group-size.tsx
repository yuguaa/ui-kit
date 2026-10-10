import { XFieldGroup, XForm, XFormField, XInput, type XFieldGroupSize } from "@/components/kit";

const sizes: XFieldGroupSize[] = ["xs", "sm", "md", "lg", "xl"];

export default function FieldGroupSize() {
  return (
    <div className="flex w-full flex-col gap-6">
      {sizes.map((size) => (
        <div key={size} className="flex flex-col gap-2">
          <span className="text-sm text-muted-foreground">size="{size}"</span>
          <XForm className="gap-0">
            <XFieldGroup size={size}>
              <XFormField label="姓氏" className="flex-1">
                <XInput placeholder="姓氏" />
              </XFormField>
              <XFormField label="名字" className="flex-1">
                <XInput placeholder="名字" />
              </XFormField>
            </XFieldGroup>
          </XForm>
        </div>
      ))}
    </div>
  );
}
