import { useState } from "react";
import { XButton } from "@/components/kit/x-button";
import { XFieldGroup } from "@/components/kit/x-field-group";
import { useXForm } from "@/components/kit/x-form";
import { XFormField } from "@/components/kit/x-form-field";
import { XInput } from "@/components/kit/x-input";

export default function FormBasic() {
  const [submitted, setSubmitted] = useState("");
  const [Form, formApi] = useXForm({
    defaultValues: { email: "", username: "" },
    rules: {
      email: [{ required: true, message: "邮箱不能为空" }],
      username: [{ required: true, message: "用户名不能为空" }],
    },
  });

  return (
    <div className="flex w-full flex-col gap-4">
      <Form onSubmit={(values) => setSubmitted(JSON.stringify(values))}>
        <XFieldGroup>
          <XFormField name="username" label="用户名" required className="flex-1">
            <XInput
              placeholder="请输入用户名"
              value={(formApi.values.username as string) ?? ""}
              onChange={(event) => formApi.setValue("username", event.target.value)}
            />
          </XFormField>
          <XFormField name="email" label="邮箱" required className="flex-1">
            <XInput
              placeholder="you@example.com"
              value={(formApi.values.email as string) ?? ""}
              onChange={(event) => formApi.setValue("email", event.target.value)}
            />
          </XFormField>
        </XFieldGroup>
        <XFormField label="公司（选填）" description="非必填字段">
          <XInput placeholder="公司名称" />
        </XFormField>
        <div className="flex items-center gap-3">
          <XButton type="submit" variant="solid">提交</XButton>
          <XButton type="button" variant="outline" onClick={() => formApi.reset()}>重置</XButton>
        </div>
      </Form>
      {submitted && <p className="text-sm text-success-7">提交数据：{submitted}</p>}
    </div>
  );
}
