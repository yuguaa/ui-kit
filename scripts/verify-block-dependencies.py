#!/usr/bin/env python3
# 抽样验证 block 的依赖组件全部存在于本地组件资产中
import json
import re
import subprocess
from pathlib import Path

SAMPLES = [
    "application/dashboard/dashboard-1",
    "solutions/billing/solution-billing-6",
    "ecommerce/checkout/checkout-1",
    "data-grid/base/data-grid-base-1",
    "marketing/cta/cta-1",
    "solutions/users/solution-users-1",
    "ai-agents/ai-chat/ai-chat-1",
    "application/gantt/gantt-1",
]

catalog = json.loads(Path("components/components-catalog.json").read_text())
local_names = {e["name"] for e in catalog["bases"]["base"]}
local_radix = {e["name"] for e in catalog["bases"]["radix"]}

# 复杂组件实现与 hooks 位于 registry-reui/bases/{base}/reui/ 与 hooks/ 目录
for base, target in [("base", local_names), ("radix", local_radix)]:
    reui_dir = Path(f"registry-reui/bases/{base}/reui")
    for p in reui_dir.glob("*.tsx"):
        target.add(p.stem)
    for d in reui_dir.iterdir():
        if d.is_dir():
            target.add(d.name)
    for p in Path(f"registry-reui/bases/{base}/hooks").glob("*.ts"):
        if p.stem != "_registry":
            target.add(p.stem)

# 本地组件名映射：registry 依赖使用 "@reui/xxx" 前缀与裸名
def resolves(name: str) -> tuple:
    if name.startswith("@reui/"):
        bare = name[len("@reui/"):]
    else:
        bare = name
    return bare in local_names, bare in local_radix

missing_total = 0
for sample in SAMPLES:
    url = f"https://reui.io/blocks/{sample}"
    html = subprocess.run(
        ["curl", "-s", url], capture_output=True, text=True, timeout=60
    ).stdout
    m = re.search(r'\\"registryDependencies\\":\[([^\]]*)\]', html)
    if not m:
        print(f"{sample}: 未找到依赖数据")
        continue
    deps = json.loads("[" + m.group(1).replace('\\"', '"') + "]")
    missing = [d for d in deps if not resolves(d)[0]]
    if missing:
        missing_total += len(missing)
        print(f"{sample}: {len(deps)} 个依赖，本地缺失: {missing}")
    else:
        print(f"{sample}: {len(deps)} 个依赖全部在本地 ✓")

print()
print("抽样验证完成" if missing_total == 0 else f"存在 {missing_total} 个缺失依赖")
