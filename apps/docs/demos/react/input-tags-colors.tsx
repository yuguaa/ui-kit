import { XInputTags } from "@/components/kit/x-input-tags";

export default function InputTagsColors() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <XInputTags value={["Nuxt"]} size="sm" className="w-64" />
        <XInputTags value={["Nuxt"]} size="md" className="w-64" />
        <XInputTags value={["Nuxt"]} size="lg" className="w-64" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <XInputTags value={["Nuxt"]} color="success" variant="soft" className="w-64" />
        <XInputTags value={["Nuxt"]} color="warning" variant="subtle" className="w-64" />
        <XInputTags value={["Nuxt"]} color="error" highlight className="w-64" />
      </div>
    </div>
  );
}
