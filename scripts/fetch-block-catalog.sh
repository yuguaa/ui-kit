#!/usr/bin/env bash
# 抓取 reui.io 全部 block 分类页，提取每个 block 的 URL 与名称，生成结构化目录
set -u

OUT=".catalog-tmp"
mkdir -p "$OUT/pages"

grep '^## ' blocks/BLOCKS-MANIFEST.md | sed 's/^## //' > "$OUT/categories.txt"
echo "分类数: $(wc -l < "$OUT/categories.txt")"

cat "$OUT/categories.txt" | xargs -P 8 -I {} bash -c '
  cat="$1"
  safe=$(echo "$cat" | tr "/" "_")
  curl -s "https://reui.io/blocks/$cat" -o ".catalog-tmp/pages/$safe.html"
' _ {}
