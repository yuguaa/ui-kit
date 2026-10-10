import { XForm, XFormField, XInput, useXForm } from "@/components/kit";

export default function FormUiCustom() {
  const [Form] = useXForm({ defaultValues: { name: "" } });

  return (
    <Form
      ui={{ root: "rounded-xl border border-dashed border-primary-5 bg-primary-1/50 p-4 gap-2" }}
      className="w-full"
    >
      <XFormField name="name" label="姓名">
        <XInput placeholder="请输入姓名" />
      </XFormField>
    </Form>
  );
}
