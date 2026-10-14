#!/usr/bin/env python3
# 从 registry-reui/_meta 提取组件目录（名称、分类、类型、文件数），生成 components-catalog.json
import json
from pathlib import Path

META = Path("registry-reui/_meta/components/bases")

catalog = {"bases": {}, "summary": {}}

for base in ["base", "radix"]:
    base_dir = META / base
    entries = []
    for f in sorted(base_dir.glob("*.json")):
        if f.name.startswith(("name-index", "seo")):
            continue
        try:
            data = json.loads(f.read_text())
        except Exception:
            continue
        for item in data.get("items", []):
            entries.append({
                "name": item.get("name"),
                "title": item.get("title"),
                "type": item.get("type"),
                "categories": item.get("categories", []),
                "registryDependencies": item.get("registryDependencies", []),
                "dependencies": item.get("dependencies", []),
                "fileCount": len(item.get("files", [])),
            })
    catalog["bases"][base] = entries
    catalog["summary"][base] = {
        "totalItems": len(entries),
        "byType": {},
    }
    for e in entries:
        t = e["type"]
        catalog["summary"][base]["byType"][t] = catalog["summary"][base]["byType"].get(t, 0) + 1

out = Path("components/components-catalog.json")
out.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + "\n")
print(json.dumps(catalog["summary"], ensure_ascii=False, indent=2))
print("写入", out)
