import { XLink } from "@/components/kit/x-link";

export default function LinkBasic() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <XLink to="/docs">主色链接</XLink>
      <XLink to="/examples" color="secondary">次级链接</XLink>
      <XLink to="/about" color="neutral">中性链接</XLink>
    </div>
  );
}
