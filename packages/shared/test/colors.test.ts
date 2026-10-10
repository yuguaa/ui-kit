import { colorPalettes, colorSeeds, getShade, neutralPalette, palettesToCssVars, shadeSteps, tailwindPalettes } from "../src/colors";

describe("色板定义", () => {
  it("每个语义色包含 50~950 十一级", () => {
    for (const scale of Object.values(colorPalettes)) {
      expect(scale).toHaveLength(11);
    }
    expect(shadeSteps).toEqual([50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]);
  });

  it("primary 为 Tailwind green 色板（Nuxt UI 默认主色）", () => {
    expect(colorPalettes.primary[5]).toBe("#22c55e");
    expect(colorPalettes.primary[0]).toBe("#f0fdf4");
    expect(getShade("primary", 500)).toBe("#22c55e");
  });

  it("语义色与 Nuxt UI 默认一致", () => {
    expect(colorSeeds.success).toBe("#22c55e");
    expect(colorSeeds.info).toBe("#3b82f6");
    expect(colorSeeds.warning).toBe("#f59e0b");
    expect(colorSeeds.error).toBe("#ef4444");
  });

  it("neutralPalette 与 colorPalettes.neutral 一致", () => {
    expect(neutralPalette).toEqual(colorPalettes.neutral);
  });

  it("tailwindPalettes 提供主题设计器的主色候选", () => {
    expect(tailwindPalettes.green).toBeDefined();
    expect(tailwindPalettes.blue[5]).toBe("#3b82f6");
    expect(tailwindPalettes.indigo[5]).toBe("#6366f1");
  });
});

describe("palettesToCssVars", () => {
  it("生成裸变量与 --color-* 别名（键不带 -- 前缀）", () => {
    const vars = palettesToCssVars(colorPalettes);
    expect(vars["primary-500"]).toBe("#22c55e");
    expect(vars["color-primary-500"]).toBe("var(--primary-500)");
    expect(vars["color-primary"]).toBe("var(--primary-500)");
    expect(vars["error-500"]).toBe("#ef4444");
    expect(vars["neutral-50"]).toBe("#fafafa");
  });
});
