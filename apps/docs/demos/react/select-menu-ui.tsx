import { useState } from "react"
import { Sparkles } from "lucide-react"
import { XSelectMenu } from "@/components/kit/x-select-menu"

const plans = [
  { label: "基础版", value: "basic", description: "适合个人项目" },
  { label: "专业版", value: "pro", description: "适合小团队" },
  { label: "旗舰版", value: "ultimate", description: "适合大企业" },
]

const countries = [
  { label: "中国", value: "cn", alias: "CN" },
  { label: "美国", value: "us", alias: "US" },
  { label: "日本", value: "jp", alias: "JP" },
]

export default function SelectMenuUi() {
  const [plan, setPlan] = useState("pro")
  const [country, setCountry] = useState("cn")

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <XSelectMenu
          options={plans}
          selectedIcon="star"
          clearable
          clearIcon="trash"
          value={plan}
          onChange={setPlan}
          className="w-48"
        />
        <XSelectMenu
          options={countries}
          showSearch
          filterFields={["alias"]}
          placeholder="按别名搜索"
          value={country}
          onChange={setCountry}
          className="w-48"
        />
        <XSelectMenu
          options={plans}
          value={plan}
          onChange={setPlan}
          ui={{
            base: "ring-primary-5 text-primary-6",
            item: "rounded-lg",
            itemDescription: "text-primary-5",
            itemTrailingIcon: "text-success-6",
          }}
          className="w-48"
        />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <XSelectMenu options={plans} leading={<Sparkles className="size-4 text-warning-6" />} className="w-48" />
        <XSelectMenu
          options={plans}
          className="w-48"
          option={({ option }) => (
            <button
              type="button"
              className="rounded-md bg-primary-1 px-2 py-1.5 text-left text-sm text-primary-7"
            >
              自定义：{option.label}
            </button>
          )}
        />
        <XSelectMenu options={[]} empty={<span className="text-error-6">自定义空提示</span>} className="w-48" />
      </div>
    </div>
  )
}
