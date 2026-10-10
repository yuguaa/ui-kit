import { XInputRating } from "@/components/kit/x-input-rating";

export default function InputRatingColors() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-6">
        <XInputRating value={3} color="primary" />
        <XInputRating value={3} color="success" />
        <XInputRating value={3} color="warning" />
        <XInputRating value={3} color="error" />
      </div>
      <div className="flex flex-wrap items-center gap-6">
        <XInputRating value={3} />
        <XInputRating value={3} orientation="vertical" />
      </div>
    </div>
  );
}
