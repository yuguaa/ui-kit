import { Heart } from "lucide-react";
import { XInputRating } from "@/components/kit/x-input-rating";

export default function InputRatingCustom() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-6">
        <XInputRating value={3} icon="star" emptyIcon="star" color="warning" />
        <XInputRating value={4} icon={Heart} emptyIcon={Heart} color="error" />
      </div>
      <div className="flex flex-wrap items-center gap-6">
        <XInputRating
          value={3}
          color="primary"
          ui={{ root: "gap-2", indicator: "fill-error text-error" }}
        />
        <XInputRating value={2} item={({ index }) => (
          <span className="flex size-6 items-center justify-center rounded-lg bg-muted text-xs">{index + 1}</span>
        )} />
      </div>
    </div>
  );
}
