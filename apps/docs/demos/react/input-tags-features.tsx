import { XInputTags } from "@/components/kit/x-input-tags";

export default function InputTagsFeatures() {
  return (
    <div className="flex w-full flex-wrap items-center gap-4">
      <XInputTags value={["Vue", "Nuxt"]} max={2} className="w-64" />
      <XInputTags value={["Nuxt"]} maxLength={4} placeholder="标签最多 4 个字符" className="w-64" />
      <XInputTags value={["Nuxt"]} deleteIcon="trash" className="w-64" />
    </div>
  );
}
