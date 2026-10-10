import { XForm, XFormField, XInput } from "@/components/kit";

export default function FormFieldSlots() {
  return (
    <XForm className="flex w-full flex-col gap-4">
      <XFormField
        name="username"
        label="用户名"
        hint="必填"
        description="用户名将作为登录账号"
        help="仅支持中英文与数字"
      >
        <XInput placeholder="请输入用户名" />
      </XFormField>
      <XFormField
        name="email"
        label={<span className="text-primary-6">邮箱地址</span>}
        hint="8-20 位"
        description={<span className="text-info-6">用于接收订单通知</span>}
        help={<span className="text-neutral-5">不会公开显示</span>}
      >
        <XInput placeholder="you@example.com" />
      </XFormField>
    </XForm>
  );
}
