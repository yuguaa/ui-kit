#!/usr/bin/env python3
import json
import re
import html
from pathlib import Path

PAGES = Path(".catalog-tmp/pages")
CATEGORIES = [l.strip() for l in Path(".catalog-tmp/categories.txt").read_text().splitlines() if l.strip()]

catalog = {"blocks": [], "counts_by_group": {}, "counts_by_category": {}}

# 分类页中 block 卡片链接形如：
# href="/blocks/{cat}/{slug}"><span ...>Block 名称</span>
for cat in CATEGORIES:
    safe = cat.replace("/", "_")
    text = (PAGES / f"{safe}.html").read_text(errors="ignore")
    group = cat.split("/")[0]
    items = re.findall(
        r'href="(/blocks/%s/([a-z0-9-]+))"[^>]*><span[^>]*>([^<]{2,90})</span>' % re.escape(cat),
        text,
    )
    seen = {}
    for url, slug, name in items:
        name = html.unescape(name).strip()
        if slug in seen:
            continue
        seen[slug] = name
    entries = [
        {"slug": slug, "name": name, "category": cat, "group": group,
         "url": f"https://neui.io/blocks/{cat}/{slug}"}
        for slug, name in sorted(seen.items())
    ]
    catalog["blocks"].extend(entries)
    catalog["counts_by_category"][cat] = len(entries)
    catalog["counts_by_group"][group] = catalog["counts_by_group"].get(group, 0) + len(entries)

catalog["total"] = len(catalog["blocks"])
catalog["total_categories"] = len(CATEGORIES)

out = Path("blocks/blocks-catalog.json")
out.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + "\n")
print(f"blocks: {catalog['total']} 个，分类 {catalog['total_categories']} 个，写入 {out}")
