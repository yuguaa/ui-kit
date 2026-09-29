import { XProgress } from "@/components/kit/x-progress";

export default function ProgressLine() {
  return (
    <div className="flex w-full flex-col gap-4">
      <XProgress percent={30} />
      <XProgress percent={70} status="success" />
      <XProgress percent={45} status="exception" />
      <XProgress percent={60} status="active" />
    </div>
  );
}
