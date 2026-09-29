import { XAlert } from "@/components/kit/x-alert";

export default function AlertClosable() {
  return (
    <div className="flex w-full flex-col gap-3">
      <XAlert message="可关闭提示" description="点击右侧关闭按钮隐藏提示。" showIcon closable />
      <XAlert type="warning" message="带关闭回调" description="关闭时触发 onClose 回调。" closable onClose={() => {}} />
    </div>
  );
}
