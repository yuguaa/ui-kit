import { Search, Tag as TagIcon } from "lucide-react";
import { XInputTags } from "@/components/kit/x-input-tags";

export default function InputTagsCustom() {
  return (
    <div className="flex w-full flex-col gap-4">
      <XInputTags
        value={["Nuxt"]}
        className="w-80"
        leading={<Search className="size-4 text-muted-foreground" />}
      />
      <XInputTags
        value={["Nuxt"]}
        className="w-80"
        tag={({ tag, index }) => (
          <span
            key={index}
            className="inline-flex items-center gap-1 rounded-xs bg-success/10 px-1.5 py-0.5 text-xs font-medium text-success ring-1 ring-inset ring-success/20"
          >
            <TagIcon className="size-3" />
            {tag}
          </span>
        )}
      />
      <XInputTags
        value={["Nuxt"]}
        className="w-80"
        ui={{
          base: "rounded-xl border border-dashed",
          item: "bg-primary/10 text-primary ring-primary/20",
          itemDeleteIcon: "text-error",
        }}
      />
    </div>
  );
}
