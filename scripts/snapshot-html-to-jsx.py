# HTML 快照转 JSX：属性改写、自闭合标签、样式对象序列化
import json
import re
from bs4 import BeautifulSoup, Comment, NavigableString, Tag

VOID_TAGS = {
    "area", "base", "br", "col", "embed", "hr", "img", "input",
    "link", "meta", "param", "source", "track", "wbr",
}

# HTML 属性名 -> JSX 属性名
ATTR_RENAME = {
    "class": "className",
    "for": "htmlFor",
    "accept-charset": "acceptCharset",
    "http-equiv": "httpEquiv",
    "tabindex": "tabIndex",
    "readonly": "readOnly",
    "maxlength": "maxLength",
    "minlength": "minLength",
    "autocomplete": "autoComplete",
    "autofocus": "autoFocus",
    "colspan": "colSpan",
    "rowspan": "rowSpan",
    "contenteditable": "contentEditable",
    "spellcheck": "spellCheck",
    "srcset": "srcSet",
    "crossorigin": "crossOrigin",
    "allowfullscreen": "allowFullScreen",
    "referrerpolicy": "referrerPolicy",
    # SVG：浏览器会把标签属性名小写化，还原时需要恢复驼峰
    "viewbox": "viewBox",
    "preserveaspectratio": "preserveAspectRatio",
    "fill-rule": "fillRule",
    "clip-rule": "clipRule",
    "stroke-width": "strokeWidth",
    "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin",
    "stroke-dasharray": "strokeDasharray",
    "stroke-dashoffset": "strokeDashoffset",
    "stroke-miterlimit": "strokeMiterlimit",
    "stroke-opacity": "strokeOpacity",
    "fill-opacity": "fillOpacity",
    "clip-path": "clipPath",
    "stop-color": "stopColor",
    "stop-opacity": "stopOpacity",
    "text-anchor": "textAnchor",
    "dominant-baseline": "dominantBaseline",
    "font-weight": "fontWeight",
    "font-size": "fontSize",
    "font-family": "fontFamily",
    "gradientunits": "gradientUnits",
    "gradienttransform": "gradientTransform",
    "patternunits": "patternUnits",
    "patterncontentunits": "patternContentUnits",
    "maskunits": "maskUnits",
    "marker-width": "markerWidth",
    "marker-height": "markerHeight",
    "markerunits": "markerUnits",
    "refx": "refX",
    "refy": "refY",
    "xlink:href": "xlinkHref",
    "xml:space": "xmlSpace",
    "enable-background": "enableBackground",
    "flood-color": "floodColor",
    "flood-opacity": "floodOpacity",
    "lighting-color": "lightingColor",
    "basefrequency": "baseFrequency",
    "numoctaves": "numOctaves",
    "specularconstant": "specularConstant",
    "specularexponent": "specularExponent",
    "stddeviation": "stdDeviation",
    "surfacescale": "surfaceScale",
    "textlength": "textLength",
    "lengthadjust": "lengthAdjust",
    "startoffset": "startOffset",
    "attributename": "attributeName",
    "attributetype": "attributeType",
    "repeatcount": "repeatCount",
    "repeatdur": "repeatDur",
    "calcmode": "calcMode",
    "keypoints": "keyPoints",
    "keysplines": "keySplines",
    "keytimes": "keyTimes",
    "viewtarget": "viewTarget",
}

# 文本节点里这些字符必须转义
TEXT_ESCAPES = {
    "{": "&#123;",
    "}": "&#125;",
    "<": "&lt;",
    ">": "&gt;",
}

# 保留为字符串的属性（其余数值型属性尽量保持原样）
BOOLEAN_ATTRS = {
    "disabled", "checked", "readonly", "required", "hidden", "multiple",
    "selected", "autofocus", "defaultopen", "open", "loop", "muted",
    "controls", "autoplay", "playsinline", "nomodule", "async", "defer",
}

# 快照里的运行时痕迹，还原为源码时不需要
DROP_ATTRS = {
    "data-scroll-behavior", "data-radix-scroll-area-viewport",
}


def css_to_object(css):
    """把内联样式文本解析为键值对"""
    out = {}
    for decl in css.split(";"):
        decl = decl.strip()
        if not decl or ":" not in decl:
            continue
        prop, _, value = decl.partition(":")
        prop = prop.strip()
        value = value.strip()
        if not prop:
            continue
        # kebab-case -> camelCase，保留自定义属性
        if prop.startswith("--"):
            key = f'"{prop}"'
        else:
            parts = prop.split("-")
            key = parts[0] + "".join(p.capitalize() for p in parts[1:])
        out[key] = value
    return out


def format_style(obj):
    if not obj:
        return ""
    items = ", ".join(f"{k}: {json.dumps(v, ensure_ascii=False)}" for k, v in obj.items())
    return "{{" + items + "}}"


# SVG 与表单里按数值处理的属性
NUMERIC_ATTRS = {
    "width", "height", "x", "y", "x1", "y1", "x2", "y2", "cx", "cy", "r", "rx", "ry",
    "strokeWidth", "strokeDasharray", "strokeDashoffset", "strokeMiterlimit",
    "tabIndex", "cols", "rows", "size", "max", "min", "step", "span",
    "offset", "stopOpacity", "fillOpacity", "strokeOpacity", "opacity",
}


def format_attr(name, value):
    if name in DROP_ATTRS:
        return None
    jsx_name = ATTR_RENAME.get(name, name)

    if name == "style":
        obj = css_to_object(value)
        if not obj:
            return None
        return f"style={format_style(obj)}"

    if name in BOOLEAN_ATTRS and value == "":
        return jsx_name

    # 数值属性用数字字面量，避免类型不匹配（百分比、auto 等保持字符串）
    if jsx_name in NUMERIC_ATTRS and re.fullmatch(r"-?\d+(\.\d+)?", value or ""):
        return f"{jsx_name}={{{value}}}"

    # 含引号或换行的值不能用双引号包裹，改用表达式形式
    if '"' in value or "\n" in value:
        return f"{jsx_name}={{{json.dumps(value, ensure_ascii=False)}}}"

    return f"{jsx_name}={json.dumps(value, ensure_ascii=False)}"


def render(node, indent=0):
    pad = "  " * indent

    if isinstance(node, Comment):
        return ""

    if isinstance(node, NavigableString):
        text = str(node).strip()
        if not text:
            return ""
        for char, escaped in TEXT_ESCAPES.items():
            text = text.replace(char, escaped)
        return pad + text

    if not isinstance(node, Tag):
        return ""

    attrs = []
    for name, value in node.attrs.items():
        if isinstance(value, list):
            value = " ".join(value)
        rendered = format_attr(name, value)
        if rendered:
            attrs.append(rendered)

    attr_text = (" " + " ".join(attrs)) if attrs else ""
    tag = node.name

    if tag in VOID_TAGS:
        return f"{pad}<{tag}{attr_text} />"

    children = [render(child, indent + 1) for child in node.children]
    children = [c for c in children if c]

    if not children:
        return f"{pad}<{tag}{attr_text}></{tag}>"

    inner = "\n".join(children)
    return f"{pad}<{tag}{attr_text}>\n{inner}\n{pad}</{tag}>"


def convert(html):
    soup = BeautifulSoup(html, "lxml")
    body = soup.body if soup.body else soup
    parts = [render(child, 0) for child in body.children]
    return "\n".join(p for p in parts if p)
