import { XIcon } from "@/components/kit/x-icon";
import { XLink } from "@/components/kit/x-link";

export default function LinkIcons() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <XLink to="/docs" leading={<XIcon name="book" size="sm" />}>
        文档
      </XLink>
      <XLink to="/examples" trailing={<XIcon name="chevron-right" size="sm" />}>
        示例
      </XLink>
    </div>
  );
}
