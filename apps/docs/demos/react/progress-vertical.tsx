import { XProgress } from "@/components/kit/x-progress";

export default function ProgressVertical() {
  return (
    <div className="flex h-44 w-full items-start gap-10">
      <div className="flex h-full w-12 flex-col">
        <XProgress value={70} orientation="vertical" status className="h-full" />
      </div>
      <div className="flex h-full w-12 flex-col">
        <XProgress value={30} orientation="vertical" status inverted color="success" className="h-full" />
      </div>
    </div>
  );
}
