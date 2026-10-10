import { useState } from "react";
import { XRadioGroup } from "@/components/kit/x-radio-group";

const roles = [
  { id: "admin", name: "管理员", desc: "全部权限" },
  { id: "member", name: "成员", desc: "基础权限" },
];

export default function RadioGroupFieldMappingDemo() {
  const [role, setRole] = useState("admin");

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground text-sm">字段映射:valueKey / labelKey / descriptionKey</span>
        <XRadioGroup
          value={role}
          onValueChange={setRole}
          options={roles}
          valueKey="id"
          labelKey="name"
          descriptionKey="desc"
          legend="成员角色"
        />
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground text-sm">label / description 插槽自定义渲染</span>
        <XRadioGroup
          value={role}
          onValueChange={setRole}
          options={roles}
          valueKey="id"
          labelKey="name"
          legend="自定义插槽"
          label={(option) => <span className="font-bold">{String(option.name)}</span>}
          description={(option) => <span className="italic">{String(option.desc)}</span>}
        />
      </div>
    </div>
  );
}
