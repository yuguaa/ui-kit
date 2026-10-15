# 把 HTML 快照还原为组件源码：data-slot 映射组件、剥离默认类名、生成 import
import json
import re
import sys
from bs4 import BeautifulSoup, Comment, NavigableString, Tag

from importlib import import_module

jsx_tools = import_module("snapshot-html-to-jsx")

INDEX = json.load(open(".component-index.json"))
SLOTS = INDEX["slots"]
VARIANTS = INDEX.get("variants", {})

# 优先使用 base 版实现，其次 radix
PREFERRED_BASE = "base"


def pick_entry(slot):
    entries = SLOTS.get(slot)
    if not entries:
        return None
    for entry in entries:
        if entry.get("base") == PREFERRED_BASE and entry.get("component"):
            return entry
    for entry in entries:
        if entry.get("component"):
            return entry
    return None


def import_path(file):
    """registry 文件路径 -> 导入路径"""
    rel = file.replace("\\", "/")
    return "@/" + rel[: -len(".tsx")]


def build_slot_table():
    table = {}
    for slot in SLOTS:
        entry = pick_entry(slot)
        if entry:
            table[slot] = entry
    return table


SLOT_TABLE = build_slot_table()

# 子组件在 DOM 里单独出现时，需要补上它依赖的父容器（Root/Provider）
# 否则渲染会报「必须在 Xxx.Root 内使用」
PARENT_WRAPPER = {
    "tooltip-trigger": "tooltip",
    "tooltip-content": "tooltip",
    "dropdown-menu-trigger": "dropdown-menu",
    "dropdown-menu-content": "dropdown-menu",
    "dropdown-menu-sub-content": "dropdown-menu",
    "popover-trigger": "popover",
    "popover-content": "popover",
    "dialog-trigger": "dialog",
    "dialog-content": "dialog",
    "sheet-trigger": "sheet",
    "sheet-content": "sheet",
    "hover-card-trigger": "hover-card",
    "hover-card-content": "hover-card",
    "collapsible-trigger": "collapsible",
    "select-trigger": "select",
    "select-content": "select",
    "context-menu-trigger": "context-menu",
    "context-menu-content": "context-menu",
    "menubar-trigger": "menubar",
    "alert-dialog-trigger": "alert-dialog",
    "alert-dialog-content": "alert-dialog",
    "navigation-menu-trigger": "navigation-menu",
}


def parent_entry(slot):
    """查父容器组件的索引条目"""
    entry = SLOT_TABLE.get(slot)
    if entry and entry.get("component"):
        return entry
    # 有些父容器的 slot 名与文件不同，按文件查找
    for value in SLOTS.values():
        for item in value:
            if item["file"].endswith(f"/{slot}.tsx") and item.get("component"):
                return item
    return None


def infer_variants(entry, leftover):
    """从剩余类名推断变体 props（值全部命中才算）"""
    props = {}
    for group, values in (entry.get("variants") or {}).items():
        for value, tokens in values.items():
            if not tokens:
                continue
            if set(tokens) <= leftover:
                props[group if group != "variantName" else "variant"] = value
                leftover -= set(tokens)
                break
    return props, leftover


def render_node(node, indent, used):
    pad = "  " * indent

    if isinstance(node, Comment):
        return ""

    if isinstance(node, NavigableString):
        text = str(node).strip()
        if not text:
            return ""
        for char, escaped in jsx_tools.TEXT_ESCAPES.items():
            text = text.replace(char, escaped)
        return pad + text

    if not isinstance(node, Tag):
        return ""

    # 样式表内容原样保留，用模板字符串包裹（内部的反引号与 ${ 需要转义）
    if node.name in ("style", "script"):
        raw = "".join(str(c) for c in node.children)
        if not raw.strip():
            return ""
        escaped = raw.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
        return f"{pad}<{node.name}>{{`{escaped}`}}</{node.name}>"

    slot = node.get("data-slot")
    entry = SLOT_TABLE.get(slot) if slot else None
    component = entry.get("component") if entry else None

    classes = node.get("class") or []
    if isinstance(classes, str):
        classes = classes.split()
    class_set = set(classes)

    props = []
    if component:
        default_classes = set(entry.get("defaultClasses") or [])
        leftover = class_set - default_classes
        variant_props, leftover = infer_variants(entry, leftover)
        for key, value in variant_props.items():
            props.append(f'{key}="{value}"')
        if leftover:
            props.append("className=" + json.dumps(" ".join(sorted(leftover)), ensure_ascii=False))
        used.add(component)
        tag = component
    else:
        tag = node.name
        if class_set:
            props.append("className=" + json.dumps(" ".join(sorted(class_set)), ensure_ascii=False))

    for name, value in node.attrs.items():
        if name in ("class", "data-slot"):
            continue
        if isinstance(value, list):
            value = " ".join(value)
        # 组件元素上的 data-xxx 来自同名 prop（如 data-variant），还原为 prop
        if component and name.startswith("data-") and re.fullmatch(r"data-[a-z][a-z0-9-]*", name):
            prop = name[5:]
            if prop not in ("state", "open", "closed", "active", "orientation", "side", "align"):
                camel = prop.split("-")[0] + "".join(p.capitalize() for p in prop.split("-")[1:])
                props.append(f'{camel}="{value}"')
                continue
        rendered = jsx_tools.format_attr(name, value)
        if rendered:
            props.append(rendered)

    attr_text = (" " + " ".join(props)) if props else ""

    if tag in jsx_tools.VOID_TAGS:
        return f"{pad}<{tag}{attr_text} />"

    children = [render_node(child, indent + 1, used) for child in node.children]
    children = [c for c in children if c]
    if not children:
        return f"{pad}<{tag}{attr_text}></{tag}>"
    inner = "\n".join(children)
    node_jsx = f"{pad}<{tag}{attr_text}>\n{inner}\n{pad}</{tag}>"

    # 子组件单独出现时补上父容器
    if slot in PARENT_WRAPPER:
        entry_parent = parent_entry(PARENT_WRAPPER[slot])
        if entry_parent and entry_parent.get("component"):
            parent_name = entry_parent["component"]
            used.add(parent_name)
            return f"{pad}<{parent_name}>\n{node_jsx}\n{pad}</{parent_name}>"

    return node_jsx


def convert(html, component_name="Pattern"):
    soup = BeautifulSoup(html, "lxml")
    body = soup.body if soup.body else soup
    used = set()
    parts = [render_node(child, 2, used) for child in body.children]
    parts = [p for p in parts if p]
    # JSX 只允许一个根元素，多个顶层节点用 Fragment 聚起来
    if len(parts) > 1:
        body_jsx = "  <>\n" + "\n".join(parts) + "\n  </>"
    else:
        body_jsx = "\n".join(parts)

    # 按文件归组 import
    by_file = {}
    for name in used:
        for slot, entry in SLOT_TABLE.items():
            if entry.get("component") == name:
                by_file.setdefault(entry["file"], set()).add(name)
                break

    imports = []
    for file in sorted(by_file):
        names = sorted(by_file[file])
        path = import_path(file)
        if len(names) == 1:
            imports.append(f'import {{ {names[0]} }} from "{path}"')
        else:
            joined = ",\n".join(f"  {n}" for n in names)
            imports.append(f"import {{\n{joined},\n}} from \"{path}\"")

    head = "\n".join(imports)
    return (
        (head + "\n\n" if head else "")
        + f"export function {component_name}() {{\n  return (\n{body_jsx}\n  )\n}}\n"
    )


if __name__ == "__main__":
    src_file = sys.argv[1]
    out_file = sys.argv[2] if len(sys.argv) > 2 else None
    html = open(src_file, encoding="utf-8").read()
    code = convert(html)
    if out_file:
        open(out_file, "w", encoding="utf-8").write(code)
        print("已写入", out_file, len(code), "字符")
    else:
        print(code[:3000])


def batch(kind):
    """批量还原：kind 为 blocks 或 templates"""
    import os

    root = os.path.join("replicated", kind)
    out_root = os.path.join("replicated-source", kind)
    count = 0
    failed = []
    for dirpath, _dirnames, filenames in os.walk(root):
        for name in filenames:
            if not name.endswith(".html"):
                continue
            src = os.path.join(dirpath, name)
            rel = os.path.relpath(src, root)
            target = os.path.join(out_root, rel[: -len(".html")] + ".tsx")
            os.makedirs(os.path.dirname(target), exist_ok=True)
            try:
                code = convert(open(src, encoding="utf-8").read())
                open(target, "w", encoding="utf-8").write(code)
                count += 1
            except Exception as exc:
                failed.append((src, str(exc)))
    print(f"{kind}: 生成 {count} 个文件，失败 {len(failed)}")
    for path, err in failed[:5]:
        print("  失败:", path, err)
