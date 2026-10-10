import { XForm, XFormField, XInput, type XFormFieldSize } from "@/components/kit";

const sizes: XFormFieldSize[] = ["xs", "sm", "md", "lg", "xl"];

export default function FormFieldSize() {
  return (
    <XForm className="flex w-full flex-col gap-4">
      {sizes.map((size) => (
        <XFormField key={size} size={size} label={`size="${size}"`}>
          <XInput placeholder="请输入内容" />
        </XFormField>
      ))}
    </XForm>
  );
}
