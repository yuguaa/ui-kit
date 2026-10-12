import type { MarkdownEnv, MarkdownRenderer } from "vitepress";

import crypto from "node:crypto";
import { readdirSync, statSync } from "node:fs";
import { extname, join } from "node:path";

/**
 * vben 文档架子移植：`<DemoPreview dir="demos/vue/xxx" title="..." description="..." />`
 * 在 md 中自动扫描 demo 目录（index.vue 为主文件），生成组件导入与代码 tabs。
 * 也支持单文件 `file="demos/vue/button-basic.vue"` 形态。
 */
const rawPathRegexp =
  /^(.+?(?:\.([\da-z]+))?)(#[\w-]+)?(?: ?{(\d+(?:[,-]\d+)*)? ?(\S+)?})? ?(?:\[(.+)])?$/;

function rawPathToToken(rawPath: string) {
  const [, filepath = "", extension = "", region = "", lines = "", lang = "", rawTitle = ""] =
    (rawPathRegexp.exec(rawPath) || []).slice(1);
  const title = rawTitle || filepath.split("/").pop() || "";
  return { extension, filepath, lang, lines, region, title };
}

export const demoPreviewPlugin = (md: MarkdownRenderer) => {
  md.core.ruler.after("inline", "demo-preview", (state) => {
    const insertComponentImport = (importString: string) => {
      const index = state.tokens.findIndex(
        (i) => i.type === "html_block" && i.content.match(/<script setup>/g),
      );
      if (index === -1) {
        const importComponent = new state.Token("html_block", "", 0);
        importComponent.content = `<script setup>\n${importString}\n</script>\n`;
        state.tokens.splice(0, 0, importComponent);
      } else {
        const content = state.tokens[index].content;
        state.tokens[index].content = content.replace("</script>", `${importString}\n</script>`);
      }
    };

    const regex = /<DemoPreview\b[^>]*>/g;
    state.src = state.src.replaceAll(regex, (match) => {
      const dirMatch = match.match(/\sdir="([^"]+)"/);
      const fileMatch = match.match(/\sfile="([^"]+)"/);
      const titleMatch = match.match(/\stitle="([^"]+)"/);
      const descMatch = match.match(/\sdescription="([^"]+)"/);
      const reactFlag = /\sreact\b/.test(match);
      const title = titleMatch?.[1] ?? "";
      const description = descMatch?.[1] ?? "";

      let files: Array<{ path: string; filename: string }> = [];
      let importPath = "";

      if (dirMatch?.[1]) {
        const dir = dirMatch[1];
        const componentDir = join(process.cwd(), dir).replaceAll("\\", "/");
        let children: string[] = [];
        try {
          children = (readdirSync(componentDir) ?? []).filter((f) => !statSync(join(componentDir, f)).isDirectory());
        } catch {
          children = [];
        }
        if (!children.includes("index.vue")) return "";
        children = children.toSorted((a, b) => {
          if (a === "index.vue") return -1;
          if (b === "index.vue") return 1;
          return a.localeCompare(b);
        });
        files = children.map((filename) => ({ path: `${componentDir}/${filename}`, filename }));
        importPath = `${componentDir}/index.vue`;
      } else if (fileMatch?.[1]) {
        const file = fileMatch[1];
        const resolved = join(process.cwd(), file).replaceAll("\\", "/");
        files = [{ path: resolved, filename: file.split("/").pop() ?? file }];
        importPath = resolved.replace(/\.vue$/, ".vue");
      } else {
        return "";
      }

      const uniqueWord = generateContentHash(files.map((f) => f.path).join(","));
      const ComponentName = `DemoComponent_${uniqueWord}`;
      insertComponentImport(`import ${ComponentName} from '${importPath}'`);

      const index = state.tokens.findIndex((i) => i.content === match);
      if (!state.tokens[index]) return "";

      state.tokens[index].content =
        `<DemoPreview files="${encodeURIComponent(JSON.stringify(files.map((f) => f.filename)))}"` +
        `${title ? ` title="${title}"` : ""}${description ? ` description="${description}"` : ""}>` +
        `${reactFlag ? `<ReactDemo :component="${ComponentName}" />` : `<${ComponentName}/>`}`;

      const tokenArray: Array<ReturnType<typeof new.state.Token>> = [];
      files.forEach((file) => {
        const slotName = file.filename;
        const templateStart = new state.Token("html_inline", "", 0);
        templateStart.content = `<template #${slotName}>`;
        tokenArray.push(templateStart);

        const { extension, lang, lines, title: rawTitle } = rawPathToToken(file.path);
        const token = new state.Token("fence", "code", 0);
        token.info = `${lang || extension}${lines ? ` {${lines}}` : ""}${rawTitle ? ` [${rawTitle}]` : ""}`.trim();
        token.meta = { src: file.path };
        token.markup = "```";
        token.content = "";
        tokenArray.push(token);

        const templateEnd = new state.Token("html_inline", "", 0);
        templateEnd.content = "</template>";
        tokenArray.push(templateEnd);
      });
      const endTag = new state.Token("html_inline", "", 0);
      endTag.content = "</DemoPreview>";
      tokenArray.push(endTag);

      state.tokens.splice(index + 1, 0, ...tokenArray);
      return "";
    });
  });
};

function generateContentHash(input: string, length = 10): string {
  const hash = crypto.createHash("sha256").update(input).digest("hex");
  return Number.parseInt(hash, 16).toString(36).slice(0, length);
}

export function rawPathTokenHelper(rawPath: string) {
  return rawPathToToken(rawPath);
}
