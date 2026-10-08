import { useState } from "react";
import { XIcon } from "@/components/kit/x-icon";
import { XInput } from "@/components/kit/x-input";

export default function InputClearableDemo() {
  const [keyword, setKeyword] = useState("React");
  const [domain, setDomain] = useState("nuxt");
  const [site, setSite] = useState("vuejs");
  const [clearedCount, setClearedCount] = useState(0);

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <XInput
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          clearable
          placeholder="输入后出现清空按钮"
          className="w-64"
        />
        <XInput
          value={domain}
          onChange={(event) => setDomain(event.target.value)}
          onClear={() => setClearedCount((count) => count + 1)}
          clearable
          placeholder="带前后缀图标"
          prefix={<XIcon name="search" size="sm" />}
          suffix={<XIcon name="chevron-down" size="sm" />}
          className="w-64"
        />
        <XInput
          value={site}
          onChange={(event) => setSite(event.target.value)}
          clearable
          placeholder="域名"
          addonAfter=".com"
          className="w-72"
        />
      </div>
      <p className="text-sm text-muted-foreground">已清空 {clearedCount} 次</p>
    </div>
  );
}
