import { XDropdownMenu } from "@/components/kit";

const items = [
  { name: "新建文件", desc: "创建空白文件" },
  { name: "打开文件", desc: "从磁盘选择文件" },
  { name: "保存全部", desc: "保存所有修改" },
  { name: "导出为 PDF", desc: "导出当前文档" },
];

export default function DropdownMenuFilterDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <XDropdownMenu
        filter
        labelKey="name"
        descriptionKey="desc"
        filterFields={["name", "desc"]}
        items={items}
      />
      <XDropdownMenu
        arrow
        externalIcon
        ui={{ content: "border border-primary-3", item: "rounded-none", itemLeadingIcon: "text-info-6" }}
        items={[
          { key: "site", label: "访问官网", icon: "globe", target: "_blank" },
          { key: "repo", label: "查看仓库", icon: "github", target: "_blank" },
          { type: "separator" },
          { key: "custom", label: "自定义项", icon: "palette" },
        ]}
      />
    </div>
  );
}
