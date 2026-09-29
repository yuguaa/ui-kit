import { describe, expect, it } from "vitest";
import { kitMotion, motionDurations, overlayMotions } from "../src/motion";
import { fontSizeScale, radiusScale, shadowScale, spacingScale, tokensToCssVars } from "../src/tokens";
import {
  buttonVariantStyles,
  cardSizes,
  colorVariants,
  sizeVariants,
  skeletonVariants,
} from "../src/variants";

describe("tokens", () => {
  it("字体阶梯为 12 → 38 七档", () => {
    expect(Object.values(fontSizeScale)).toEqual([12, 14, 16, 20, 24, 30, 38]);
  });

  it("圆角为 6 / 8 / 12 / 9999", () => {
    expect(radiusScale).toEqual({ sm: "6px", md: "8px", lg: "12px", pill: "9999px" });
  });

  it("间距为 4 → 48 七档", () => {
    expect(Object.values(spacingScale)).toEqual([4, 8, 12, 16, 24, 32, 48]);
  });

  it("tokensToCssVars 输出 --font-size / --radius / --shadow 变量", () => {
    const vars = tokensToCssVars();
    expect(vars["--font-size-3xl"]).toBe("38px");
    expect(vars["--radius-md"]).toBe("8px");
    expect(vars["--shadow-lg"]).toBe("0 8px 24px 0 rgb(0 0 0 / 0.15)");
  });
});

describe("motion", () => {
  it("弹层 100ms、对话框与控制件 200ms（Nuxt UI 模式）", () => {
    expect(motionDurations.overlay).toBe(100);
    expect(motionDurations.dialog).toBe(200);
    expect(motionDurations.control).toBe(200);
  });

  it("弹层出入场为 scale 0.95 + 淡入淡出，无位移动画", () => {
    expect(overlayMotions.enter).toBe("animate-[scale-in_100ms_ease-out]");
    expect(overlayMotions.exit).toBe("animate-[scale-out_100ms_ease-out]");
  });

  it("kitMotion 为 registry 分发的纯常量版本", () => {
    expect(kitMotion.durations.dialog).toBe(200);
    expect(kitMotion.overlay.enter).toBe("animate-[scale-in_100ms_ease-out]");
  });
});

describe("variants", () => {
  it("语义色七种、尺寸五档、按钮样式六种", () => {
    expect(colorVariants).toEqual(["primary", "secondary", "neutral", "success", "info", "warning", "error"]);
    expect(sizeVariants).toEqual(["xs", "sm", "md", "lg", "xl"]);
    expect(buttonVariantStyles).toEqual(["solid", "outline", "soft", "ghost", "subtle", "link"]);
  });

  it("卡片与骨架屏变体", () => {
    expect(cardSizes).toEqual(["default", "small"]);
    expect(skeletonVariants).toEqual(["text", "circle", "rect"]);
  });
});
