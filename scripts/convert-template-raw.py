#!/usr/bin/env python3
"""将 .replicated-raw-templates 下的浏览器提取结果转换为 replicated/templates/{slug}/{page}.html

原始结果有两种形态：
- result 为字符串：单页，页面名取自文件名（root -> index）
- result 为字典：{站点路径: HTML}，页面名由路径转换而来
"""
import json
import re
import sys
from pathlib import Path

RAW = Path(".replicated-raw-templates")
OUT = Path("replicated/templates")
URL_MARK = re.compile(r"<!--URL:[^>]*-->")
# React suspense 占位注释与空占位节点，保留会在宿主页面触发 hydration 冲突
REACT_PLACEHOLDER = re.compile(r"<!--\$[^>]*-->")
EMPTY_HIDDEN = re.compile(r'<div hidden=""></div>')


def page_name(route: str) -> str:
    """站点路径转平坦文件名：/ -> index，/tasks/my -> tasks_my"""
    name = re.sub(r"[^A-Za-z0-9]+", "_", route.strip("/")).strip("_")
    return name or "index"


def is_html(value) -> bool:
    return isinstance(value, str) and len(value) > 200 and value.lstrip().startswith("<")


def clean(html: str) -> str:
    html = URL_MARK.sub("", html)
    html = REACT_PLACEHOLDER.sub("", html)
    return EMPTY_HIDDEN.sub("", html)


def collect(payload):
    """返回 {页面名: HTML}"""
    result = payload.get("result") if isinstance(payload, dict) else None
    pages = {}

    if isinstance(result, dict):
        for route, html in result.items():
            if not is_html(html):
                print(f"    跳过 {route}（{str(html)[:30]}）")
                continue
            pages[page_name(route)] = clean(html)
    elif is_html(result):
        pages["index"] = clean(result)

    return pages


def main(slug=None):
    targets = [slug] if slug else sorted(p.name for p in RAW.iterdir() if p.is_dir())
    total = 0
    for name in targets:
        src = RAW / name
        if not src.is_dir():
            continue
        dst = OUT / name
        for f in sorted(src.glob("*.json")):
            try:
                payload = json.loads(f.read_text(encoding="utf-8"))
            except Exception as exc:
                print(f"    解析失败 {name}/{f.name}: {exc}")
                continue
            pages = collect(payload)
            if not pages:
                print(f"    无可用页面 {name}/{f.name}")
                continue
            dst.mkdir(parents=True, exist_ok=True)
            for page, html in pages.items():
                (dst / f"{page}.html").write_text(html, encoding="utf-8")
                total += 1
        print(f"{name}: {len(list(dst.glob('*.html')))} 页")
    print(f"合计写入 {total} 个页面")


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else None)
