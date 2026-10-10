import { XAvatar } from "@/components/kit";

export default function AvatarUi() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <XAvatar
        text="A"
        ui={{ root: "ring-2 ring-primary-3", fallback: "bg-primary-1 text-primary-6" }}
      />
      <XAvatar src="https://i.pravatar.cc/64" alt="头像" ui={{ image: "grayscale" }} />
      <XAvatar text="B" chip ui={{ fallback: "italic" }} />
    </div>
  );
}
