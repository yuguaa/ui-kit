import { useState } from "react";
import { XBreadcrumb } from "@/components/kit/x-breadcrumb";
import { XButton } from "@/components/kit/x-button";
import { XCommandPalette } from "@/components/kit/x-command-palette";
import { XLink } from "@/components/kit/x-link";
import { XNavigationMenu } from "@/components/kit/x-navigation-menu";
import { XPagination } from "@/components/kit/x-pagination";
import { XStepper } from "@/components/kit/x-stepper";
import { XTabs } from "@/components/kit/x-tabs";

export default function NavigationBasic() {
  const [page, setPage] = useState(3);
  const [paletteOpen, setPaletteOpen] = useState(false);
  return (
    <div className="flex w-full flex-col gap-5">
      <XBreadcrumb items={[{ title: "首页", href: "/" }, { title: "组件" }, { title: "导航" }, { title: "面包屑" }]} />
      <div className="flex flex-wrap items-center gap-6">
        <XLink to="/docs">文档</XLink>
        <XLink to="/examples">示例</XLink>
        <XLink to="/disabled" disabled>禁用</XLink>
      </div>
      <XTabs
        items={[
          { key: "doc", label: "文档", content: "当前选中：文档。这里是标签页对应的内容区域。" },
          { key: "example", label: "示例", content: "这里是示例面板的内容。" },
          { key: "api", label: "API", content: "这里是 API 面板的内容。" },
        ]}
      />
      <XNavigationMenu
        mode="horizontal"
        items={[
          { key: "dashboard", label: "仪表盘" },
          { key: "docs", label: "文档" },
          { key: "user", label: "用户" },
          { key: "settings", label: "设置" },
        ]}
      />
      <div className="flex flex-wrap items-center gap-6">
        <XPagination current={page} total={100} pageSize={10} onChange={setPage} />
        <XStepper current={1} items={[{ title: "完成" }, { title: "进行中" }, { title: "待处理" }]} />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <XButton variant="soft" color="info" onClick={() => setPaletteOpen(true)}>打开命令面板</XButton>
        <XCommandPalette
          open={paletteOpen}
          onOpenChange={setPaletteOpen}
          groups={[
            {
              label: "操作",
              commands: [
                { label: "新建文档", shortcut: "⌘ N" },
                { label: "添加用户", shortcut: "⌘ U" },
                { label: "打开设置", shortcut: "⌘ ," },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}
