import { XButton } from "@/components/kit/x-button";
import { useXModal } from "@/components/kit/x-modal";

export default function ModalHook() {
  const [Modal, modalApi] = useXModal({
    title: "hook 用法",
    description: "调用即得 [Modal, modalApi]，通过 api 控制打开与关闭。",
  });

  return (
    <div className="flex flex-wrap items-center gap-3">
      <XButton variant="soft" onClick={() => modalApi.open()}>打开对话框</XButton>
      <XButton
        variant="outline"
        onClick={() => {
          modalApi.setState({ title: "动态标题", description: "setState 更新标题与说明。" });
          modalApi.open();
        }}
      >
        打开并更新标题
      </XButton>
      <Modal>hook 模式不需要 open 状态，直接用 api 控制。</Modal>
    </div>
  );
}
