import { XInputRating } from "@/components/kit/x-input-rating";

export default function InputRatingReadonlyDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <XInputRating value={3.5} allowHalf readonly />
      <XInputRating value={4} readonly />
    </div>
  );
}
