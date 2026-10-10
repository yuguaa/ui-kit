import { XAvatar } from "@/components/kit";

export default function AvatarUi() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <XAvatar
        text="A"
        ui={{ root: "ring-2 ring-primary/20", fallback: "bg-primary/10 text-primary" }}
      />
      <XAvatar src="https://i.pravatar.cc/64" alt="头像" ui={{ image: "grayscale" }} />
      <XAvatar text="B" chip ui={{ fallback: "italic" }} />
    </div>
  );
}
