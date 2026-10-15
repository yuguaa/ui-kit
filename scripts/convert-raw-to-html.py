#!/usr/bin/env python3
# 将 .replicated-raw 下的浏览器提取结果转换为 replicated/blocks/{category}/{slug}.html
import json
import os
from pathlib import Path

catalog = json.loads(Path("blocks/blocks-catalog.json").read_text())
slug_to_category = {b["slug"]: b["category"] for b in catalog["blocks"]}

raw_dir = Path(".replicated-raw")
out_dir = Path("replicated/blocks")

converted = 0
missing_html = 0
skipped = 0

for f in sorted(raw_dir.glob("*.json")):
    try:
        data = json.loads(f.read_text())
    except Exception:
        skipped += 1
        continue

    # 提取 HTML 内容
    html_content = None
    if isinstance(data, dict):
        r = data.get("result")
        if isinstance(r, str):
            html_content = r
    elif isinstance(data, list):
        # batch 结果：找 eval 步骤
        for step in data:
            cmd = step.get("command", [])
            if cmd and cmd[0] == "eval":
                r = step.get("result", {})
                if isinstance(r, dict):
                    inner = r.get("result")
                    if isinstance(inner, str):
                        html_content = inner

    if not html_content or len(html_content) < 500:
        skipped += 1
        continue

    # 从文件名推断 slug：{category}_{slug}.json -> slug 是最后一段
    stem = f.stem
    parts = stem.split("_")
    slug = parts[-1] if len(parts) > 1 else stem

    # 用 catalog 校正分类
    category = slug_to_category.get(slug)
    if not category:
        # 尝试匹配文件名里的完整路径形式
        for b in catalog["blocks"]:
            if stem == (b["category"] + "_" + b["slug"]).replace("/", "_"):
                category = b["category"]
                slug = b["slug"]
                break
    if not category:
        skipped += 1
        continue

    target = out_dir / category / f"{slug}.html"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(html_content)
    converted += 1

print(f"转换: {converted} | 跳过: {skipped}")

# 核对 catalog 完整性
missing = []
for b in catalog["blocks"]:
    p = out_dir / b["category"] / f"{b['slug']}.html"
    if not p.exists():
        missing.append(f"{b['category']}/{b['slug']}")
print(f"catalog 缺失: {len(missing)}")
for m in missing:
    print("MISSING:", m)
