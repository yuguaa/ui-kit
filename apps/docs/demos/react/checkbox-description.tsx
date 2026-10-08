import { XCheckbox } from "@/components/kit/x-checkbox";

export default function CheckboxDescriptionDemo() {
  return (
    <div className="flex flex-col items-start gap-6">
      <XCheckbox label="接收产品动态" description="订阅产品更新、新功能与使用技巧" />
      <XCheckbox label="接收每周精选" color="success" description="每周一封邮件，汇总热门内容" />
    </div>
  );
}
