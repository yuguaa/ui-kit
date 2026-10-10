import { XInputRating } from "@/components/kit/x-input-rating";

export default function InputRatingSizes() {
  return (
    <>
      <div className="flex flex-wrap items-center gap-6">
        <XInputRating value={3} size="xs" />
        <XInputRating value={3} size="sm" />
        <XInputRating value={3} size="md" />
        <XInputRating value={3} size="lg" />
        <XInputRating value={3} size="xl" />
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-6">
        <XInputRating value={3.5} allowHalf readonly />
        <XInputRating value={3} disabled />
      </div>
    </>
  );
}
