#!/usr/bin/env python3
import json
from pathlib import Path

templates = [
    ("atlas-admin", "Atlas", "Atlas - Next.js Admin Dashboard Template with User Management", "Dashboard"),
    ("flowly-app", "Flowly", "Next.js Workflow Automation Template with AI Agent Builder", "Dashboard"),
    ("flux-agentops", "Flux", "Next.js AI Agent Console Template with Runs and Approvals", "Dashboard"),
    ("lucent-devops", "Lucent", "TanStack Start DevOps and SRE Console Template", "Dashboard"),
    ("tempo-tasks", "Tempo", "TanStack Start Task Management Template with Kanban", "Dashboard"),
    ("limelight-landing", "Limelight", "Limelight - Next.js SaaS Marketing Site Template, Product Tour", "Landing"),
    ("overture-waitlist", "Overture", "Overture - Next.js Waitlist Template with Email Signup API", "Landing"),
    ("cohort-hr", "Cohort", "Cohort - Laravel Inertia HR Template, Time Off and Approvals", "SaaS"),
    ("echo-chat", "Echo", "Echo - Next.js AI Chat Template with Artifacts and Projects", "SaaS"),
    ("filebox-drive", "Filebox", "Filebox - Laravel Inertia Drive and File Manager Template", "SaaS"),
    ("filespace-drive", "Filespace", "Filespace - Next.js Cloud Storage and File Manager Template", "SaaS"),
    ("miro-clinic", "Miro", "React Dental Practice Management Template with Chair Board", "SaaS"),
    ("pulse-helpdesk", "Pulse", "TanStack Start Help Desk Template with SLA Board", "SaaS"),
    ("roster-hr", "Roster", "React HR Template with Directory and Timesheets", "SaaS"),
    ("verve-crm", "Verve", "Next.js CRM Template with Deal Board and Quotes", "SaaS"),
    ("manifest-commerce", "Manifest", "Manifest - Laravel Inertia Commerce Admin with Eloquent Backend", "E-commerce"),
    ("surge-commerce", "Surge", "TanStack Start Commerce Admin Template with Inventory", "E-commerce"),
]

catalog = {
    "templates": [
        {"slug": s, "name": n, "metaTitle": t, "category": c,
         "url": f"https://reui.io/templates/{s}", "accessTier": "ultimate"}
        for s, n, t, c in templates
    ],
    "counts_by_category": {},
    "total": len(templates),
}
for t in catalog["templates"]:
    k = t["category"]
    catalog["counts_by_category"][k] = catalog["counts_by_category"].get(k, 0) + 1

out = Path("templates/templates-catalog.json")
out.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + "\n")
print(f"templates: {catalog['total']} 个，写入 {out}")
