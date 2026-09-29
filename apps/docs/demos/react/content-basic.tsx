import { XAccordion } from "@/components/kit/x-accordion";
import { XAlert } from "@/components/kit/x-alert";
import { XCarousel } from "@/components/kit/x-carousel";
import { XChip } from "@/components/kit/x-chip";
import { XCollapsible } from "@/components/kit/x-collapsible";
import { XListbox } from "@/components/kit/x-listbox";
import { XProgress } from "@/components/kit/x-progress";
import { XScrollArea } from "@/components/kit/x-scroll-area";
import { XSplitter } from "@/components/kit/x-splitter";
import { XTable, type XTableColumn } from "@/components/kit/x-table";

const statusColor: Record<string, "success" | "warning" | "error"> = {
  已完成: "success",
  进行中: "warning",
  已失败: "error",
};

interface Row extends Record<string, unknown> {
  key: string;
  name: string;
  age: number;
  address: string;
  status: string;
}

const columns: XTableColumn<Row>[] = [
  { key: "name", title: "名称" },
  { key: "age", title: "年龄" },
  { key: "address", title: "地址" },
  {
    key: "status",
    title: "状态",
    render: (value, record) => <XChip color={statusColor[String(record.status)]} size="sm">{String(value)}</XChip>,
  },
];

const dataSource: Row[] = [
  { key: "1", name: "张三", age: 28, address: "北京市朝阳区望京街道", status: "已完成" },
  { key: "2", name: "李四", age: 32, address: "上海市浦东新区张江镇", status: "进行中" },
  { key: "3", name: "王五", age: 24, address: "广州市天河区珠江新城", status: "已失败" },
];

export default function ContentBasic() {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="flex flex-col gap-3">
        <XAlert type="success" message="成功提示" description="操作已成功完成。" showIcon />
        <XAlert type="info" message="信息提示" description="这是一条普通的信息说明。" showIcon closable />
        <XAlert type="warning" message="警告提示" description="操作存在风险，请谨慎处理。" showIcon />
        <XAlert type="error" message="错误提示" description="操作失败，请稍后重试。" showIcon />
      </div>
      <div className="flex flex-wrap items-center gap-6">
        <XProgress percent={30} className="w-48" />
        <XProgress percent={70} status="success" className="w-48" />
        <XProgress percent={45} status="exception" className="w-48" />
        <XProgress percent={75} type="circle" />
      </div>
      <XAccordion
        items={[
          { title: "什么是 Nuxt UI？", content: "基于 Tailwind 与 Reka UI 的 Vue 组件库，提供完整的 props、slots 与 API。" },
          { title: "如何安装？", content: "通过 shadcn-vue CLI 添加组件。" },
        ]}
      />
      <XCollapsible trigger="展开详情">这里是折叠的内容区域，展开后显示。</XCollapsible>
      <div className="grid grid-cols-2 gap-4">
        <XListbox items={[{ key: "a", label: "选项 A" }, { key: "b", label: "选项 B" }, { key: "c", label: "选项 C" }]} selected={["a"]} />
        <XScrollArea height={100}>
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="py-1 text-sm">滚动内容第 {i + 1} 行</div>
          ))}
        </XScrollArea>
      </div>
      <XCarousel
        items={[
          { key: "1", content: <div className="flex h-24 items-center justify-center rounded-lg bg-primary-1 text-primary-7">Slide 1</div> },
          { key: "2", content: <div className="flex h-24 items-center justify-center rounded-lg bg-info-1 text-info-7">Slide 2</div> },
          { key: "3", content: <div className="flex h-24 items-center justify-center rounded-lg bg-success-1 text-success-7">Slide 3</div> },
        ]}
      />
      <XSplitter
        className="h-32"
        first={<div className="flex h-full items-center justify-center text-sm">左面板</div>}
        second={<div className="flex h-full items-center justify-center text-sm">右面板</div>}
      />
      <XTable columns={columns} dataSource={dataSource} />
    </div>
  );
}
