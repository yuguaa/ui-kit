import { XProgress } from "@/components/kit/x-progress";

export default function ProgressIndeterminate() {
  return (
    <div className="flex w-full flex-col gap-5">
      <XProgress animation="carousel" />
      <XProgress animation="carousel-inverse" />
      <XProgress animation="swing" />
      <XProgress animation="elastic" />
    </div>
  );
}
