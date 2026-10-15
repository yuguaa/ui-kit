#!/usr/bin/env bash
# 从 neui.io 抓取全部 block 分类下的 block 名称清单与模板清单
set -u

OUT=".neui-catalog"
mkdir -p "$OUT/blocks"

# 76 个 block 分类 URL（从 /blocks 总览页提取）
cat > "$OUT/categories.txt" <<'EOF'
ai-agents/agent-activity
ai-agents/ai-chat
application/app-shell
application/auth
application/card
application/dashboard
application/dialog
application/empty-state
application/event-calendar
application/flow
application/form
application/gantt
application/kanban-board
application/list
application/navbar
application/onboarding
application/profile
application/rich-text-editor
application/schedule
application/settings
application/sheet
application/stats
application/timeline
application/whiteboard
application/wizard
chart/area-chart
chart/bar-chart
chart/composed-chart
chart/line-chart
chart/pie-chart
chart/radial-chart
chart/sankey-chart
chart/slope-chart
chart/sparkline
chart/status-tracker
data-grid/advanced
data-grid/base
data-grid/columns
data-grid/drag-drop
data-grid/editing
data-grid/expansion
data-grid/filtering
data-grid/grouping
data-grid/virtualization
ecommerce/category-card
ecommerce/checkout
ecommerce/comparison
ecommerce/coupon
ecommerce/filter-sidebar
ecommerce/product-card
ecommerce/product-detail
ecommerce/product-grid
ecommerce/receipt
ecommerce/review
ecommerce/shop-hero
ecommerce/shopping-cart
ecommerce/wishlist
marketing/blog
marketing/compare
marketing/contact
marketing/cta
marketing/faq
marketing/hero
marketing/how-it-works
marketing/pricing
solutions/agents
solutions/ai-ops
solutions/analytics
solutions/billing
solutions/bookings
solutions/crm
solutions/dev-ops
solutions/digital-twin
solutions/files
solutions/inventory
solutions/users
EOF

while IFS= read -r cat; do
  safe=$(echo "$cat" | tr '/' '_')
  curl -s "https://neui.io/blocks/$cat" -o "$OUT/blocks/$safe.html"
  count=$(grep -oE "\"/blocks/$cat/[a-z0-9-]+\"" "$OUT/blocks/$safe.html" | sort -u | wc -l | tr -d ' ')
  echo "$cat: $count blocks"
done < "$OUT/categories.txt"
