import { XFieldGroup, XForm, XFormField, XInput } from "@/components/kit";

export default function FieldGroupOrientation() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">horizontal（默认）：字段同行排列</span>
        <XForm className="gap-2">
          <XFieldGroup>
            <XFormField name="province" label="省份" className="flex-1">
              <XInput placeholder="省份" />
            </XFormField>
            <XFormField name="city" label="城市" className="flex-1">
              <XInput placeholder="城市" />
            </XFormField>
          </XFieldGroup>
        </XForm>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">vertical：字段纵向堆叠（等价于旧属性 inline=false）</span>
        <XForm className="gap-2">
          <XFieldGroup orientation="vertical">
            <XFormField name="street" label="街道">
              <XInput placeholder="街道" />
            </XFormField>
            <XFormField name="building" label="楼栋">
              <XInput placeholder="楼栋" />
            </XFormField>
          </XFieldGroup>
        </XForm>
      </div>
    </div>
  );
}
