import { XButton } from "@/components/kit/x-button";
import { useXModal } from "@/components/kit/x-modal";

export default function ModalLoading() {
  /** 确定时锁定对话框，等异步操作结束后再解锁并关闭 */
  const [Modal, modalApi] = useXModal({
    title: "提交确认",
    description: "确定按钮进入加载态时，遮罩、关闭按钮与取消按钮都会失效。",
    onOk: () => {
      modalApi.lock();
      setTimeout(() => {
        modalApi.unlock();
        modalApi.close();
      }, 1200);
    },
  });

  return (
    <div className="flex flex-wrap items-center gap-3">
      <XButton variant="soft" onClick={() => modalApi.open()}>
        打开对话框
      </XButton>
      <Modal>
        <p>点击「确定」后对话框会被锁定，1.2 秒后自动关闭。</p>
      </Modal>
    </div>
  );
}
