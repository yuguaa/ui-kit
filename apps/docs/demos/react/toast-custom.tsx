import { XButton } from "@/components/kit"
import { XToaster, toast } from "@/components/kit/x-toast"

/** 自定义标题节点（等价 title 插槽） */
function EmojiTitle({ text }: { text: string }) {
  return <span className="font-bold">🔥 {text}</span>
}

export default function ToastCustom() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <XButton
        variant="soft"
        color="primary"
        onClick={() =>
          toast.show({
            title: "普通标题",
            description: "avatar 显示头像，progress 显示剩余时长进度条。",
            avatar: { src: "https://github.com/nuxt-ui.png", alt: "NU" },
            progress: { color: "success" },
            duration: 8000,
          })
        }
      >
        头像与进度条
      </XButton>
      <XButton
        variant="soft"
        color="primary"
        onClick={() =>
          toast.show({
            title: <EmojiTitle text="自定义标题" />,
            description: "ui 插槽类名定制各区域样式。",
            ui: { root: "ring-4 ring-primary/20", title: "text-base", description: "text-xs" },
            duration: 8000,
          })
        }
      >
        ui 插槽与自定义标题
      </XButton>
      <XToaster />
    </div>
  )
}
