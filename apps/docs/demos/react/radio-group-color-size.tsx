import { XRadioGroup } from "@/components/kit/x-radio-group";

const options = [
  { value: "a", label: "选项 A" },
  { value: "b", label: "选项 B" },
];

export default function RadioGroupColorSizeDemo() {
  return (
    <div className="flex w-full flex-wrap items-start gap-8">
      <XRadioGroup options={options} value="a" color="success" legend="success" />
      <XRadioGroup options={options} value="a" color="error" legend="error" />
      <XRadioGroup options={options} value="a" size="sm" legend="sm" />
      <XRadioGroup options={options} value="a" size="xl" legend="xl" />
      <XRadioGroup options={options} value="a" color="info" highlight legend="highlight" />
    </div>
  );
}
