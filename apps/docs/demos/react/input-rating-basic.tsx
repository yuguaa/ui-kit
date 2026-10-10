import { useState } from "react";
import { XInputRating } from "@/components/kit/x-input-rating";

export default function InputRatingBasic() {
  const [rating, setRating] = useState(3);
  return (
    <div className="flex flex-wrap items-center gap-6">
      <XInputRating value={rating} onChange={setRating} />
      <span className="text-sm text-muted-foreground">当前评分：{rating}</span>
    </div>
  );
}
