import { XInputRating } from "@/components/kit/x-input-rating";

export default function InputRatingSizesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <XInputRating value={3} size="sm" />
      <XInputRating value={3} size="md" />
      <XInputRating value={3} size="lg" />
    </div>
  );
}
