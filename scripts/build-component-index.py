# 从组件源码提取还原所需的元数据：slot 与组件、默认类名、variant 类名
import glob
import json
import os
import re

ROOTS = [
    "registry/bases/base/ui",
    "registry/bases/radix/ui",
    "registry-neui/bases/base/neui",
    "registry-neui/bases/radix/neui",
]


def literals_in(text):
    """提取字符串字面量里的类名 token"""
    tokens = set()
    for a, b in re.findall(r'"([^"\n]*)"|\'([^\'\n]*)\'', text):
        for token in (a or b).split():
            if token:
                tokens.add(token)
    return tokens


def export_names(src):
    names = set(re.findall(r"export\s+(?:function|const)\s+([A-Z][A-Za-z0-9_]*)", src))
    for block in re.findall(r"export\s*\{([^}]*)\}", src, re.S):
        for part in block.split(","):
            part = part.strip().split(" as ")[-1].strip()
            if re.fullmatch(r"[A-Z][A-Za-z0-9_]*", part):
                names.add(part)
    return names


def find_cva(src):
    """返回 {cva 变量名: {'classes': set, 'variants': {组: {值: set}}}}"""
    out = {}
    for m in re.finditer(r"const\s+([A-Za-z0-9_]+)\s*=\s*cva\(", src):
        name = m.group(1)
        # 取到匹配的右括号
        depth = 0
        i = m.end() - 1
        while i < len(src):
            if src[i] == "(":
                depth += 1
            elif src[i] == ")":
                depth -= 1
                if depth == 0:
                    break
            i += 1
        body = src[m.end():i]
        info = {"classes": literals_in(body), "variants": {}}
        # 变体组：形如 variant: { ... }
        for gm in re.finditer(r"(\w+)\s*:\s*\{", body):
            group = gm.group(1)
            if group in ("variants", "defaultVariants", "compoundVariants"):
                continue
            start = gm.end()
            depth = 1
            j = start
            while j < len(body) and depth:
                if body[j] == "{":
                    depth += 1
                elif body[j] == "}":
                    depth -= 1
                j += 1
            seg = body[start:j - 1]
            values = {}
            for vm in re.finditer(r"(\w+)\s*:\s*(\[[\s\S]*?\]|\"[^\"\n]*\")", seg):
                values[vm.group(1)] = sorted(literals_in(vm.group(2)))
            if values:
                info["variants"][group] = values
        out[name] = info
    return out


def find_defs(src):
    """返回 [(名称, 起始位置)]，只取顶层定义（行首、无缩进）"""
    defs = []
    for m in re.finditer(r"^(?:export\s+)?function\s+([A-Z][A-Za-z0-9_]*)\s*\(", src, re.M):
        defs.append((m.group(1), m.start()))
    for m in re.finditer(r"^(?:export\s+)?const\s+([A-Z][A-Za-z0-9_]*)\s*[:=]", src, re.M):
        defs.append((m.group(1), m.start()))
    defs.sort(key=lambda x: x[1])
    return defs


def owner_for(src, defs, pos, slot, exports):
    """只有 slot 名对应的 PascalCase 名确实被导出时，才认定它属于该组件"""
    pascal = "".join(p.capitalize() for p in re.split(r"[-_]", slot))
    if pascal in exports:
        return pascal
    for name in exports:
        if name.lower() == pascal.lower():
            return name
    return None


def main():
    index = {"slots": {}, "variants": {}}
    files = []
    for root in ROOTS:
        files += glob.glob(os.path.join(root, "**", "*.tsx"), recursive=True)

    for path in files:
        src = open(path, encoding="utf-8", errors="ignore").read()
        rel = os.path.relpath(path)
        base = "base" if "/base/" in rel else "radix"
        kind = "ui" if "/ui/" in rel else "neui"
        exports = export_names(src)
        defs = find_defs(src)
        cvas = find_cva(src)

        for cva_name, info in cvas.items():
            index["variants"].setdefault(cva_name, info["variants"])

        for m in re.finditer(r'data-slot=["\']([a-z0-9-]+)["\']', src):
            slot = m.group(1)
            owner = owner_for(src, defs, m.start(), slot, exports)
            # 组件函数体（到下一个定义为止）
            body_start = next((at for n, at in defs if n == owner), m.start())
            body_end = len(src)
            for n, at in defs:
                if at > body_start:
                    body_end = at
                    break
            body = src[body_start:body_end]

            default_classes = set(literals_in(body))
            used_variants = {}
            for cva_name, info in cvas.items():
                if re.search(rf"\b{cva_name}\s*\(", body):
                    default_classes |= info["classes"]
                    used_variants.update(info["variants"])

            entry = index["slots"].setdefault(slot, [])
            record = {
                "file": rel,
                "base": base,
                "kind": kind,
                "component": owner if owner in exports else None,
                "defaultClasses": sorted(default_classes),
                "variants": used_variants,
            }
            if not any(
                r["file"] == rel and r["component"] == record["component"] for r in entry
            ):
                entry.append(record)

    index["meta"] = {"files": len(files), "slots": len(index["slots"])}
    json.dump(index, open(".component-index.json", "w"), ensure_ascii=False, indent=1)
    print("扫描文件:", len(files), "| slot 数:", len(index["slots"]))
    for slot in ["frame", "frame-panel", "card", "badge", "button", "item", "table-cell", "icon-tile"]:
        entries = index["slots"].get(slot, [])
        first = entries[0] if entries else {}
        print(
            f"  {slot:14s} -> {str(first.get('component')):18s} 默认类名 {len(first.get('defaultClasses', [])):3d} 变体组 {list(first.get('variants', {}).keys())}"
        )


if __name__ == "__main__":
    main()
