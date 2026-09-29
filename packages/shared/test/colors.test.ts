import { describe, expect, it } from "vitest";
import { colorSeeds, generateAllPalettes, generatePalette, paletteRoles, palettesToCssVars } from "../src/colors";

describe("generatePalette", () => {
  it("primary 色阶与原型一致（#1677ff 为种子）", () => {
    const scale = generatePalette(colorSeeds.primary);
    expect(scale).toEqual([
      "#e6f4ff",
      "#bae0ff",
      "#91caff",
      "#69b1ff",
      "#4096ff",
      "#1677ff",
      "#0958d9",
      "#003eb3",
      "#002c8c",
      "#001d66",
    ]);
  });

  it("色阶角色位置：seed 位于第 6 级，hover 第 5 级，active 第 7 级，浅色底第 1 级", () => {
    const scale = generatePalette("#1677ff");
    expect(scale[paletteRoles.seed - 1]).toBe("#1677ff");
    expect(scale[paletteRoles.hover - 1]).toBe("#4096ff");
    expect(scale[paletteRoles.active - 1]).toBe("#0958d9");
    expect(scale[paletteRoles.lightBackground - 1]).toBe("#e6f4ff");
  });

  it("更换主色 seed 时整条色阶随之派生", () => {
    const scale = generatePalette("#722ed1");
    expect(scale[5]).toBe("#722ed1");
    expect(scale).toHaveLength(10);
  });

  it("dark 主题生成反转色阶：索引 0 最暗，索引 9 最亮", () => {
    const light = generatePalette("#1f1f1f");
    const dark = generatePalette("#1f1f1f", "dark");
    expect(dark).toEqual([
      "#111111",
      "#0f0f0f",
      "#171717",
      "#191919",
      "#1b1b1b",
      "#1d1d1d",
      "#292929",
      "#363636",
      "#444444",
      "#515151",
    ]);
    expect(dark[0]).not.toBe(light[0]);
  });
});

describe("generateAllPalettes / palettesToCssVars", () => {
  it("覆盖全部语义色并生成 --color 变量", () => {
    const palettes = generateAllPalettes();
    expect(Object.keys(palettes)).toEqual(["primary", "success", "warning", "error", "info", "neutral"]);
    const vars = palettesToCssVars(palettes);
    expect(vars["--primary-6"]).toBe("#1677ff");
    expect(vars["--error-6"]).toBe("#ff4d4f");
    expect(Object.keys(vars)).toHaveLength(60);
  });

  it("dark 主题下全部语义色生成反转色阶", () => {
    const palettes = generateAllPalettes(undefined, "dark");
    expect(palettes.primary[0]).toBe("#111a2c");
    expect(palettes.neutral[0]).toBe("#111111");
  });
});
