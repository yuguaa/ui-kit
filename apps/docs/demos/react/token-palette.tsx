import { useState } from "react";

/**
 * 语义色色板可视化：六种语义色 50~950 十一级色块 + 中性色 token 对照。
 */
const colors = ["primary", "secondary", "success", "info", "warning", "error"] as const;
const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

const semantic = [
  { name: "text-default", light: "#404040", dark: "#e5e5e5", usage: "正文文字" },
  { name: "text-muted", light: "#737373", dark: "#a3a3a3", usage: "次要文字" },
  { name: "text-dimmed", light: "#a3a3a3", dark: "#a3a3a3", usage: "占位/禁用文字" },
  { name: "bg-default", light: "#ffffff", dark: "#171717", usage: "面板/浮层背景" },
  { name: "bg-elevated", light: "#f5f5f5", dark: "#262626", usage: "悬浮/高亮背景" },
  { name: "bg-inverted", light: "#171717", dark: "#ffffff", usage: "反色背景" },
  { name: "border-default", light: "#e5e5e5", dark: "#262626", usage: "边框/分隔" },
];

export default function TokenPalette() {
  return (
    <div className="flex flex-col gap-8">
      {colors.map((color) => (
        <div key={color} className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-highlighted">{color}</span>
          <div className="flex flex-wrap gap-1">
            {steps.map((step) => (
              <div
                key={step}
                className={`size-10 rounded-md ring-1 ring-inset ring-border bg-${color}-${step}`}
                title={`bg-${color}-${step}`}
              />
            ))}
          </div>
          <div className="text-xs text-dimmed">
            无后缀取 500 级（bg-{color} = bg-{color}-500）；/10 soft、/15 hover、/25 subtle 描边、/75 solid hover
          </div>
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-highlighted">中性色 token（前缀分离）</span>
        <div className="flex flex-wrap gap-3">
          {semantic.map((t) => (
            <div key={t.name} className="flex items-center gap-2 rounded-md border border-border p-2">
              <span className="size-6 rounded" style={{ backgroundColor: t.light }} />
              <span className="size-6 rounded" style={{ backgroundColor: t.dark }} />
              <span className="flex flex-col">
                <span className="text-xs font-mono">{t.name}</span>
                <span className="text-xs text-dimmed">{t.usage}（左亮右暗）</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
