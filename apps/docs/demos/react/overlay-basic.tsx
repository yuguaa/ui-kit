import { useState } from "react";
import { XButton } from "@/components/kit/x-button";
import { XContextMenu } from "@/components/kit/x-context-menu";
import { XDrawer } from "@/components/kit/x-drawer";
import { XDropdownMenu } from "@/components/kit/x-dropdown-menu";
import { XLink } from "@/components/kit/x-link";
import { XModal } from "@/components/kit/x-modal";
import { XPopover } from "@/components/kit/x-popover";
import { XSlideover } from "@/components/kit/x-slideover";
import { toast, XToaster } from "@/components/kit/x-toast";
import { XTooltip } from "@/components/kit/x-tooltip";

export default function OverlayBasic() {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [slideoverOpen, setSlideoverOpen] = useState(false);
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <XButton variant="soft" onClick={() => setModalOpen(true)}>对话框</XButton>
        <XButton variant="soft" onClick={() => setDrawerOpen(true)}>抽屉</XButton>
        <XButton variant="soft" onClick={() => setSlideoverOpen(true)}>侧滑</XButton>
        <XTooltip title="这是一段提示文字">
          <XButton variant="outline" color="neutral">悬浮查看提示</XButton>
        </XTooltip>
        <XPopover trigger="click" title="气泡标题" content="这是一段气泡说明文字。">
          <XButton variant="outline" color="neutral">打开气泡</XButton>
        </XPopover>
        <XDropdownMenu
          items={[
            { key: "rename", label: "重命名" },
            { key: "share", label: "分享" },
            { key: "sep", separator: true },
            { key: "delete", label: "删除" },
          ]}
        />
        <XContextMenu
          items={[
            { key: "edit", label: "编辑" },
            { key: "copy", label: "复制" },
            { key: "delete", label: "删除" },
          ]}
        >
          <span className="rounded-lg border border-dashed border-border px-6 py-3 text-sm text-muted-foreground">
            在此区域右键
          </span>
        </XContextMenu>
        <XButton variant="soft" color="success" onClick={() => toast.show({ title: "操作成功", description: "数据已保存。", color: "success" })}>
          成功通知
        </XButton>
        <XButton variant="soft" color="error" onClick={() => toast.show({ title: "操作失败", description: "请稍后重试。", color: "error" })}>
          失败通知
        </XButton>
      </div>
      <XModal open={modalOpen} onOpenChange={setModalOpen} title="对话框标题" description="这是对话框的正文内容。">
        这是对话框的正文内容，用于说明本次操作的含义，用户可以阅读后在底部确认或取消。
      </XModal>
      <XDrawer open={drawerOpen} onOpenChange={setDrawerOpen} title="抽屉标题">
        抽屉内容区域，用于展示详情或表单。
      </XDrawer>
      <XSlideover open={slideoverOpen} onOpenChange={setSlideoverOpen} title="侧滑面板">
        <div className="flex flex-col gap-2">
          <XLink to="/">首页</XLink>
          <XLink to="/about">关于</XLink>
          <XLink to="/contact">联系</XLink>
        </div>
      </XSlideover>
      <XToaster />
    </div>
  );
}
