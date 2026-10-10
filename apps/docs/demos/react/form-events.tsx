import { useState } from "react";
import { XButton, XForm, XFormField, XInput, useXForm } from "@/components/kit";

export default function FormEvents() {
  const [submitted, setSubmitted] = useState("");
  const [failedCount, setFailedCount] = useState(0);
  const [Form, formApi] = useXForm({
    defaultValues: { nickname: "" },
    rules: { nickname: [{ required: true, message: "昵称不能为空" }] },
  });

  return (
    <div className="flex w-full flex-col gap-4">
      <Form
        onSubmit={(values) => setSubmitted(JSON.stringify(values))}
        onError={(errors) => setFailedCount(Object.keys(errors).length)}
      >
        <XFormField name="nickname" label="昵称" required>
          <XInput
            placeholder="请输入昵称"
            value={(formApi.values.nickname as string) ?? ""}
            onChange={(event) => formApi.setValue("nickname", event.target.value)}
          />
        </XFormField>
        <XButton type="submit" className="w-fit">提交</XButton>
      </Form>
      <p className="text-sm text-muted-foreground">onSubmit：{submitted || "尚未提交"}</p>
      <p className="text-sm text-muted-foreground">
        onError：{failedCount > 0 ? `校验失败，共 ${failedCount} 个错误` : "无校验错误"}
      </p>
    </div>
  );
}
