import { describe, expect, it } from "vitest";
import { kitMotion, motionTokens } from "../src/motion";
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
  it("三档动效：fast 120ms、base 200ms、slow 300ms spring", () => {
    expect(motionTokens.fast).toEqual({ duration: 0.12, ease: "easeOut" });
    expect(motionTokens.base).toEqual({ duration: 0.2, ease: "easeInOut" });
    expect(motionTokens.slow).toEqual({ duration: 0.3, type: "spring" });
  });

  it("kitMotion 为 registry 分发的纯常量版本", () => {
    expect(kitMotion.tokens.base.duration).toBe(0.2);
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
