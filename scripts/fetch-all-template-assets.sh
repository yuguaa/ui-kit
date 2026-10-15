#!/usr/bin/env bash
# 下载全部模板的编译样式与字体到 public/template-assets/{slug}/
set -u
cd "$(dirname "$0")/.."

fetch() { python3 scripts/fetch-template-assets.py "$@"; }

fetch atlas-admin \
  "https://atlas-admin.reui.io/_next/static/chunks/3xvdzqqzf8dzn.css?dpl=dpl_Fc4mvuYSmxKep7Rgr41a4Lhk4M5H" \
  "https://atlas-admin.reui.io/_next/static/chunks/2qkpuhpr0je66.css?dpl=dpl_Fc4mvuYSmxKep7Rgr41a4Lhk4M5H"

fetch flowly-app \
  "https://flowly-app.reui.io/_next/static/immutable/chunks/1bckx1hhmdn7_.css" \
  "https://flowly-app.reui.io/_next/static/immutable/chunks/3jm5zk7xvzxqt.css" \
  "https://flowly-app.reui.io/_next/static/immutable/chunks/3ocbmb7g7s8x5.css"

fetch lucent-devops \
  "https://lucent-devops.reui.io/assets/styles-CvVX4ROb.css"

fetch flux-agentops \
  "https://flux-agentops.reui.io/_next/static/immutable/chunks/3_6-xm9v8esdd.css" \
  "https://flux-agentops.reui.io/_next/static/immutable/chunks/0_k3hmytf9635.css"

fetch tempo-tasks \
  "https://tempo-tasks.reui.io/assets/styles-P46HZ13_.css"

fetch limelight-landing \
  "https://limelight-landing.reui.io/_next/static/immutable/chunks/29_1jy4e0h239.css" \
  "https://limelight-landing.reui.io/_next/static/immutable/chunks/2a-mmfhwlt4q9.css"

fetch overture-waitlist \
  "https://overture-waitlist.reui.io/_next/static/chunks/0rbr--uj5hai-.css?dpl=dpl_Wa5qTAUSNbVCev9b6u4eT2Azqs4r"

fetch cohort-hr \
  "https://cohort-hr.reui.io/build/assets/app-Dn3AhViU.css"

fetch echo-chat \
  "https://echo-chat.reui.io/_next/static/immutable/chunks/36ba06wj9cd00.css" \
  "https://echo-chat.reui.io/_next/static/immutable/chunks/2aen6vt7483pf.css"

fetch filebox-drive \
  "https://filebox-drive.reui.io/build/assets/app-C9cA4o2E.css"

fetch filespace-drive \
  "https://filespace-drive.reui.io/_next/static/chunks/10szjpuv6qs48.css?dpl=dpl_9Tjn1eipmsUf6cBX7CKg4wEqyuTW" \
  "https://filespace-drive.reui.io/_next/static/chunks/0gji-45iq6sdl.css?dpl=dpl_9Tjn1eipmsUf6cBX7CKg4wEqyuTW"

fetch miro-clinic \
  "https://miro-clinic.reui.io/assets/index-DgZrhCvu.css"

fetch pulse-helpdesk \
  "https://pulse-helpdesk.reui.io/assets/index-CPdxSsFf.css"

fetch roster-hr \
  "https://roster-hr.reui.io/assets/index-DPaLKMRZ.css"

fetch verve-crm \
  "https://verve-crm.reui.io/_next/static/chunks/2buag5-tohg34.css?dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH" \
  "https://verve-crm.reui.io/_next/static/chunks/1nklf8vflp_ec.css?dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH"

fetch manifest-commerce \
  "https://manifest-commerce.reui.io/build/assets/app-DQost0Ch.css"

fetch surge-commerce \
  "https://surge-commerce.reui.io/assets/styles-DGXHp40F.css"
