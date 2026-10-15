#!/usr/bin/env python3
"""下载模板站点的编译 CSS 与字体资源到 public/template-assets/{slug}/

站点 CSS 里的字体引用有三种形式，全部改写为本地 ./media/ 相对路径：
- ../media/xxx.woff2（Next.js 打包）
- /build/assets/xxx.woff2（Laravel Vite 打包）
- /assets/xxx.woff2（Vite 打包）
"""
import re
import sys
import subprocess
from pathlib import Path


def fetch(url, out):
    result = subprocess.run(["curl", "-sfL", url, "-o", out, "-m", "60"], capture_output=True)
    if result.returncode != 0 or not Path(out).exists() or Path(out).stat().st_size == 0:
        raise SystemExit(f"资源下载失败: {url}")


def resolve(url, css_dir):
    """把 CSS 中的资源引用解析为绝对地址"""
    if url.startswith(("http://", "https://")):
        return url
    if url.startswith("/"):
        return css_dir.split("/", 3)[0] + "//" + css_dir.split("/", 3)[2] + url
    parts = css_dir.split("/")
    for seg in url.split("/"):
        if seg == "..":
            parts.pop()
        elif seg not in (".", ""):
            parts.append(seg)
    return "/".join(parts)


def main(slug, css_urls):
    dest = Path(f"public/template-assets/{slug}")
    (dest / "media").mkdir(parents=True, exist_ok=True)

    chunks = []
    for i, css_url in enumerate(css_urls):
        tmp = dest / f".chunk{i}.css"
        fetch(css_url, tmp)
        chunks.append(tmp.read_text(encoding="utf-8"))
    css = "\n".join(chunks)
    for tmp in dest.glob(".chunk*.css"):
        tmp.unlink()

    css_dir = css_urls[0].split("?")[0].rsplit("/", 1)[0]
    downloaded = 0
    for raw in sorted(set(re.findall(r"url\(([^)]+)\)", css))):
        ref = raw.strip().strip("\"'")
        if ref.startswith("data:"):
            continue
        absolute = resolve(ref, css_dir).split("?")[0]
        name = absolute.rsplit("/", 1)[-1]
        if not name:
            continue
        fetch(absolute, dest / "media" / name)
        css = css.replace(raw, f"./media/{name}")
        downloaded += 1

    (dest / "app.css").write_text(css, encoding="utf-8")
    print(f"{slug}: css={len(css)} 字体={downloaded}")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2:])
