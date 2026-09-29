import * as React from "react"
import { Check } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const defaultPresets = [
  "#1677ff",
  "#00DC82",
  "#ff4d4f",
  "#faad14",
  "#722ed1",
  "#13c2c2",
  "#eb2f96",
  "#f5f5f5",
  "#1f1f1f",
]

export interface XColorPickerProps {
  /** 绑定颜色 */
  value?: string
  /** 默认颜色 */
  defaultValue?: string
  /** 预设色板 */
  presets?: string[]
  /** 是否禁用 */
  disabled?: boolean
  /** 颜色变化回调 */
  onChange?: (color: string) => void
  className?: string
}

export function XColorPicker({
  value,
  defaultValue = "#1677ff",
  presets = defaultPresets,
  disabled = false,
  onChange,
  className,
}: XColorPickerProps) {
  const [innerValue, setInnerValue] = React.useState(defaultValue)
  const current = value ?? innerValue

  const update = (color: string) => {
    if (value == null) setInnerValue(color)
    onChange?.(color)
  }

  return (
    <Popover>
      <PopoverTrigger
        disabled={disabled}
        render={
          <button
            type="button"
            aria-label="选择颜色"
            className={cn(
              "inline-flex size-9 items-center justify-center rounded-lg border border-input transition-colors outline-none",
              "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
              "disabled:pointer-events-none disabled:opacity-50",
              className,
            )}
          >
            <span className="size-5 rounded-md border border-black/10" style={{ backgroundColor: current }} />
          </button>
        }
      />
      <PopoverContent align="start" className="flex w-fit flex-col gap-3 p-3">
        <label className="flex cursor-pointer items-center gap-2 text-sm">
          自定义
          <input
            type="color"
            value={current}
            onChange={(event) => update(event.target.value)}
            className="size-6 cursor-pointer appearance-none rounded border-0 bg-transparent p-0 [&::-webkit-color-swatch]:rounded [&::-webkit-color-swatch]:border-0"
          />
        </label>
        <div className="grid grid-cols-5 gap-1.5">
          {presets.map((preset) => (
            <button
              key={preset}
              type="button"
              aria-label={preset}
              onClick={() => update(preset)}
              className="inline-flex size-6 items-center justify-center rounded-md border border-black/10 outline-none transition-transform hover:scale-110"
              style={{ backgroundColor: preset }}
            >
              {current.toLowerCase() === preset.toLowerCase() && (
                <Check className="size-3.5 text-white drop-shadow" />
              )}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
