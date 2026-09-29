import { XAlert } from "@/components/kit/x-alert";

export default function AlertTypes() {
  return (
    <div className="flex w-full flex-col gap-3">
      <XAlert type="success" message="成功提示" description="操作已成功完成。" showIcon />
      <XAlert type="info" message="信息提示" description="这是一条普通的信息说明。" showIcon />
      <XAlert type="warning" message="警告提示" description="操作存在风险，请谨慎处理。" showIcon />
      <XAlert type="error" message="错误提示" description="操作失败，请稍后重试。" showIcon />
    </div>
  );
}
