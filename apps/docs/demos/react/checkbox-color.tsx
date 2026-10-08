import { XCheckbox } from "@/components/kit/x-checkbox";

const colors = ["primary", "secondary", "neutral", "success", "info", "warning", "error"] as const;

export default function CheckboxColorDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      {colors.map((color) => (
        <XCheckbox key={color} color={color} checked label={color} />
      ))}
      <XCheckbox color="warning" indeterminate label="indeterminate" />
    </div>
  );
}
