import { XContainer } from "@/components/kit/x-container";

export default function ContainerBasic() {
  return (
    <XContainer size="md" className="rounded-lg border border-dashed border-border py-4 text-center text-sm text-muted-foreground">
      内容被居中约束在容器内（md = 1024px）
    </XContainer>
  );
}
