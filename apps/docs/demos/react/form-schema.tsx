import { useState } from "react";
import { XButton, XFieldGroup, XFormField, XInput, useXForm } from "@/components/kit";

/** 标准 schema（zod v4 / valibot v1 的对象可直接传入，这里手写协议形状演示） */
const schema = {
  "~standard": {
    validate: async (value: unknown) => {
      const form = value as Record<string, unknown>;
      const issues: Array<{ path?: string[]; message: string }> = [];
      if (!form.email) issues.push({ path: ["email"], message: "邮箱不能为空" });
      if (typeof form.username === "string" && form.username.length < 2) {
        issues.push({ path: ["username"], message: "用户名至少 2 个字符" });
      }
      return issues.length ? { issues } : { value: form };
    },
  },
};

export default function FormSchema() {
  const [submitted, setSubmitted] = useState("");
  const [Form, formApi] = useXForm({
    defaultValues: { username: "", email: "" },
  });

  return (
    <div className="flex w-full flex-col gap-4">
      <Form schema={schema} onSubmit={(values) => setSubmitted(JSON.stringify(values))}>
        <XFormField name="username" label="用户名" required>
          <XInput
            placeholder="请输入用户名"
            value={(formApi.values.username as string) ?? ""}
            onChange={(event) => formApi.setValue("username", event.target.value)}
          />
        </XFormField>
        <XFormField name="email" label="邮箱" required>
          <XInput
            placeholder="you@example.com"
            value={(formApi.values.email as string) ?? ""}
            onChange={(event) => formApi.setValue("email", event.target.value)}
          />
        </XFormField>
        <div className="flex items-center gap-3">
          <XButton type="submit">提交</XButton>
          <XButton type="button" variant="outline" onClick={() => formApi.reset()}>重置</XButton>
        </div>
      </Form>
      {submitted && <p className="text-sm text-success-7">提交数据：{submitted}</p>}
    </div>
  );
}
