import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Kbd } from "@/registry/bases/base/ui/kbd"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="bg-background flex items-center lg:px-8 min-h-svh overflow-hidden px-4 py-12 relative sm:px-6 w-full" aria-labelledby="hero-7-title">
        <div className="gap-8 grid grid-cols-1 items-center lg:grid-cols-2 lg:max-w-7xl max-w-xl mx-auto w-full">
          <div className="w-full">
            <div className="@container w-full">
              <div className="aspect-8/5 border border-input/30 dark:border-input/20 overflow-hidden relative rounded-xl">
                <img className="absolute inset-0 object-cover pointer-events-none size-full" alt="" aria-hidden="true" width={1600} height={1335} decoding="async" fetchpriority="high" src="https://images.unsplash.com/photo-1651065567117-ac52c1a62e21?auto=format&fit=crop&crop=top&w=1600&h=1335&q=80" />
                <div className="-bottom-[4cqw] absolute bg-white/10 dark:bg-white/5 dark:ring-white/3 inset-x-[5cqw] ring-1 ring-inset ring-white/25 rounded-md top-[5cqw]" aria-hidden="true"></div>
                <div className="absolute inset-0">
                  <div className="absolute h-[1060px] left-[6.25cqw] origin-top-left top-[6.25cqw] w-[1400px]" style={{transform: "scale(calc(100cqw / 1600px))"}}>
                    <Card className="[--card-spacing:--spacing(1.5)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 gap-0 overflow-hidden px-1.5 ring-neutral-900/10 shadow-2xl size-full text-neutral-900" size="default" role="img" aria-label="Crew coverage console showing open gaps, coverage review by crew lead, the action queue and supply against forecast">
                      <style dangerouslySetInnerHTML={{ __html: "\n@keyframes hero7-grow {\n  0%, 54% { transform: scaleY(1) }\n  66% { transform: scaleY(0.3) }\n  100% { transform: scaleY(1) }\n}\n@keyframes hero7-rise {\n  0%, 60% { opacity: 1; transform: translateY(0) }\n  72% { opacity: 0.4; transform: translateY(4px) }\n  100% { opacity: 1; transform: translateY(0) }\n}\n@keyframes hero7-fill {\n  0%, 52% { transform: scaleX(1) }\n  64% { transform: scaleX(0.1) }\n  100% { transform: scaleX(1) }\n}\n@keyframes hero7-blink {\n  0%, 100% { opacity: 1 }\n  50% { opacity: 0.4 }\n}\n@keyframes hero7-draw {\n  0%, 50% { stroke-dashoffset: 0 }\n  62% { stroke-dashoffset: 1200 }\n  100% { stroke-dashoffset: 0 }\n}\n/* The specular pass over the whole shot. Off-canvas for most of the cycle, so\n   what registers is an occasional glint rather than a shimmer. */\n@keyframes hero7-sweep {\n  0%, 62% { opacity: 0; transform: translateX(-60%) skewX(-12deg) }\n  70% { opacity: 1 }\n  100% { opacity: 0; transform: translateX(560%) skewX(-12deg) }\n}\n\n/* Set `--hero7-delay` per element to stagger siblings; keep it a custom property,\n   because an inline `animation` shorthand would outrank the reduced-motion rule. */\n.hero7-grow,\n.hero7-rise,\n.hero7-draw,\n.hero7-track [data-slot=\"progress-indicator\"] {\n  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);\n  animation-iteration-count: infinite;\n  animation-fill-mode: both;\n  animation-delay: var(--hero7-delay, 0s);\n}\n\n.hero7-grow { animation-name: hero7-grow; animation-duration: 11.3s; }\n.hero7-rise { animation-name: hero7-rise; animation-duration: 13.7s; }\n.hero7-draw { animation-name: hero7-draw; animation-duration: 16.3s; }\n\n/* The primitive owns the indicator node, so the fill is reached through its\n   data-slot instead of a class on the element itself. */\n.hero7-track [data-slot=\"progress-indicator\"] {\n  transform-origin: left center;\n  animation-name: hero7-fill;\n  animation-duration: 10.1s;\n}\n\n.hero7-blink {\n  animation: hero7-blink 3.7s ease-in-out var(--hero7-delay, 0s) infinite;\n}\n\n.hero7-sweep {\n  opacity: 0;\n  animation: hero7-sweep 9.7s ease-in-out var(--hero7-delay, 0s) infinite;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .hero7-grow,\n  .hero7-rise,\n  .hero7-draw,\n  .hero7-blink,\n  .hero7-sweep,\n  .hero7-track [data-slot=\"progress-indicator\"] {\n    animation: none;\n  }\n  .hero7-sweep { opacity: 0; }\n}\n" }} />
                      <Card className="[--card-spacing:0px] bg-white border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-50 flex-1 gap-0 min-h-0 overflow-hidden relative ring-0 shadow-none text-neutral-900" size="default">
                        <div className="border-b border-neutral-200 dark:border-neutral-800 flex gap-2 h-9 items-center px-2.5 shrink-0">
                          <IconTile className="bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 text-white" variant="solid" size="xs">
                            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
                              <path fillRule="evenodd" clipRule="evenodd" d="M9.33333 0.538463H4.66667C2.38672 0.538463 0.538463 2.38672 0.538463 4.66667V9.33333C0.538463 11.6133 2.38672 13.4615 4.66667 13.4615H9.33333C11.6133 13.4615 13.4615 11.6133 13.4615 9.33333V4.66667C13.4615 2.38672 11.6133 0.538463 9.33333 0.538463ZM4.66667 0C2.08934 0 0 2.08934 0 4.66667V9.33333C0 11.9107 2.08934 14 4.66667 14H9.33333C11.9107 14 14 11.9107 14 9.33333V4.66667C14 2.08934 11.9107 0 9.33333 0H4.66667Z" fill="currentColor" opacity={0.2}></path>
                              <g transform="translate(3.5238 3.5)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 4.46307V0.657716C0 0.294471 0.294471 0 0.657708 0C1.02097 0 1.31544 0.294471 1.31544 0.657716V4.46307C1.31544 5.13768 1.86229 5.68457 2.5369 5.68457H4.41613C5.09069 5.68457 5.63759 5.13768 5.63759 4.46307V2.60267C5.63759 2.23944 5.93205 1.94498 6.29531 1.94498C6.65854 1.94498 6.953 2.23944 6.953 2.60267V4.46307C6.953 5.8642 5.81721 6.99999 4.41613 6.99999H2.5369C1.13581 6.99999 0 5.8642 0 4.46307Z" fill="currentColor"></path>
                              </g>
                              <g transform="translate(9.1616 3.5)">
                                <path d="M0.65772 1.31544C1.02097 1.31544 1.31544 1.02097 1.31544 0.65772C1.31544 0.294471 1.02097 0 0.65772 0C0.294471 0 0 0.294471 0 0.65772C0 1.02097 0.294471 1.31544 0.65772 1.31544Z" fill="currentColor"></path>
                              </g>
                            </svg>
                          </IconTile>
                          <div className="contents">
                            <span className="flex font-medium gap-1.5 items-center text-sm">
                              <span className="bg-violet-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                              {"Acme Inc"}
                              <svg className="dark:text-neutral-500 lucide lucide-chevrons-up-down size-3.5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                <path d="m7 15 5 5 5-5"></path>
                                <path d="m7 9 5-5 5 5"></path>
                              </svg>
                            </span>
                          </div>
                          <div className="contents">
                            <span className="dark:text-neutral-600 text-neutral-300" aria-hidden="true">
                              {"/"}
                            </span>
                            <span className="flex font-medium gap-1.5 items-center text-sm">
                              {"Web App"}
                              <svg className="dark:text-neutral-500 lucide lucide-chevrons-up-down size-3.5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                <path d="m7 15 5 5 5-5"></path>
                                <path d="m7 9 5-5 5 5"></path>
                              </svg>
                            </span>
                          </div>
                          <div className="contents">
                            <span className="dark:text-neutral-600 text-neutral-300" aria-hidden="true">
                              {"/"}
                            </span>
                            <span className="flex font-medium gap-1.5 items-center text-sm">
                              {"Production"}
                              <svg className="dark:text-neutral-500 lucide lucide-chevrons-up-down size-3.5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                <path d="m7 15 5 5 5-5"></path>
                                <path d="m7 9 5-5 5 5"></path>
                              </svg>
                            </span>
                          </div>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-5 ms-auto outline-none px-2 py-0.5 relative rounded-full text-neutral-600 text-xs transition-shadow">
                            <svg className="lucide lucide-activity size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                            </svg>
                            {"System"}
                            <span className="dark:text-emerald-400 text-emerald-600">
                              {"Normal"}
                            </span>
                          </Badge>
                        </div>
                        <div className="flex flex-1 min-h-0">
                          <div className="bg-neutral-50 border-neutral-200 border-r dark:bg-neutral-950 dark:border-neutral-800 flex flex-col gap-1.5 p-2 pb-[168px] shrink-0 w-56">
                            <Item className="bg-white border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-500 gap-2 px-2 py-1.5 text-neutral-400 text-sm" variant="outline" size="xs">
                              <svg className="lucide lucide-search size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                                <path d="m21 21-4.34-4.34"></path>
                                <circle cx={11} cy={11} r={8}></circle>
                              </svg>
                              {"Search..."}
                              <Kbd className="bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-500 h-5 min-w-5 ms-auto px-1.5 text-neutral-400 text-xs">
                                {"⌘K"}
                              </Kbd>
                            </Item>
                            <div className="dark:text-neutral-500 font-medium pt-1.5 px-2 text-neutral-400 text-xs">
                              {"Platform"}
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <div className="contents">
                                <Item className="bg-neutral-100 border-transparent dark:bg-neutral-800 dark:text-neutral-50 font-medium gap-2 px-2 py-1.5 text-neutral-900 text-sm" variant="default" size="xs">
                                  <svg className="lucide lucide-layout-dashboard size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                                    <rect width={7} height={9} x={3} y={3} rx={1}></rect>
                                    <rect width={7} height={5} x={14} y={3} rx={1}></rect>
                                    <rect width={7} height={9} x={14} y={12} rx={1}></rect>
                                    <rect width={7} height={5} x={3} y={16} rx={1}></rect>
                                  </svg>
                                  {"Overview"}
                                </Item>
                              </div>
                              <div className="contents">
                                <Item className="border-transparent dark:text-neutral-400 gap-2 px-2 py-1.5 text-neutral-600 text-sm" variant="default" size="xs">
                                  <svg className="lucide lucide-users size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <circle cx={9} cy={7} r={4}></circle>
                                  </svg>
                                  {"Users"}
                                  <svg className="dark:text-neutral-500 lucide lucide-chevron-down ms-auto size-3.5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                    <path d="m6 9 6 6 6-6"></path>
                                  </svg>
                                </Item>
                                <div className="border-l border-neutral-200 dark:border-neutral-800 flex flex-col gap-0.5 ms-4 ps-1">
                                  <Item className="border-transparent dark:text-neutral-400 px-2 py-1.5 text-neutral-500 text-sm" variant="default" size="xs">
                                    {"All Users"}
                                  </Item>
                                  <Item className="border-transparent dark:text-neutral-400 px-2 py-1.5 text-neutral-500 text-sm" variant="default" size="xs">
                                    {"Invitations"}
                                  </Item>
                                  <Item className="border-transparent dark:text-neutral-400 px-2 py-1.5 text-neutral-500 text-sm" variant="default" size="xs">
                                    {"Roles"}
                                  </Item>
                                </div>
                              </div>
                              <div className="contents">
                                <Item className="border-transparent dark:text-neutral-400 gap-2 px-2 py-1.5 text-neutral-600 text-sm" variant="default" size="xs">
                                  <svg className="lucide lucide-building-2 lucide-building2 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                                    <path d="M10 12h4"></path>
                                    <path d="M10 8h4"></path>
                                    <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                    <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                                    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                                  </svg>
                                  {"Organizations"}
                                  <svg className="dark:text-neutral-500 lucide lucide-chevron-right ms-auto size-3.5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </Item>
                              </div>
                              <div className="contents">
                                <Item className="border-transparent dark:text-neutral-400 gap-2 px-2 py-1.5 text-neutral-600 text-sm" variant="default" size="xs">
                                  <svg className="lucide lucide-shield-check size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                  </svg>
                                  {"Security"}
                                  <svg className="dark:text-neutral-500 lucide lucide-chevron-right ms-auto size-3.5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </Item>
                              </div>
                              <div className="contents">
                                <Item className="border-transparent dark:text-neutral-400 gap-2 px-2 py-1.5 text-neutral-600 text-sm" variant="default" size="xs">
                                  <svg className="lucide lucide-webhook size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="WebhookIcon" tabler="IconWebhook" hugeicons="WebhookIcon" phosphor="WebhooksLogoIcon" remixicon="RiWebhookLine" aria-hidden="true">
                                    <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                                    <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                                    <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                                  </svg>
                                  {"Webhooks"}
                                </Item>
                              </div>
                              <div className="contents">
                                <Item className="border-transparent dark:text-neutral-400 gap-2 px-2 py-1.5 text-neutral-600 text-sm" variant="default" size="xs">
                                  <svg className="lucide lucide-key-round size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                                    <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                    <circle cx={16.5} cy={7.5} r=".5" fill="currentColor"></circle>
                                  </svg>
                                  {"API Keys"}
                                </Item>
                              </div>
                            </div>
                            <Card className="[--card-spacing:--spacing(2.5)] bg-white border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 dark:ring-white/10 dark:text-neutral-50 gap-2 mt-auto ring-0 ring-neutral-900/8 shadow-sm text-neutral-900" size="sm">
                              <CardContent className="flex flex-col gap-2">
                                <span className="font-semibold text-sm">
                                  {"Multi-theme support is here"}
                                </span>
                                <span className="dark:text-neutral-400 leading-5 text-neutral-500 text-sm">
                                  {"Switch between Vega, Nova, Maia, Lyra, and Mira themes."}
                                </span>
                                <span className="bg-[radial-gradient(120%_90%_at_12%_18%,var(--color-orange-400)_0%,transparent_46%),radial-gradient(120%_120%_at_88%_8%,var(--color-fuchsia-500)_0%,transparent_55%),linear-gradient(160deg,var(--color-violet-600)_0%,var(--color-sky-400)_58%,var(--color-cyan-400)_100%)] block h-20 w-full" aria-hidden="true"></span>
                                <div className="dark:text-neutral-400 flex items-center justify-between text-neutral-500 text-xs">
                                  <span>
                                    {"Read more"}
                                  </span>
                                  <span>
                                    {"Dismiss"}
                                  </span>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                          <div className="bg-neutral-50 dark:bg-neutral-950 flex flex-1 flex-col gap-4 min-w-0 p-4">
                            <div className="gap-3 grid grid-cols-5 h-[132px] shrink-0">
                              <Card className="[--card-spacing:--spacing(3.5)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hero7-delay": "0s"}}>
                                <CardContent className="flex flex-col gap-2 h-full justify-between">
                                  <div className="flex gap-2 items-center min-w-0">
                                    <IconTile className="text-amber-500" variant="soft" size="sm">
                                      <svg className="lucide lucide-calendar-clock size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx={16} cy={16} r={6}></circle>
                                      </svg>
                                    </IconTile>
                                    <span className="font-semibold text-base truncate">
                                      {"Open Gaps"}
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-end justify-between">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="font-semibold hero7-rise leading-none tabular-nums text-3xl tracking-tight truncate">
                                        {"11"}
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        {"before kickoff"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-amber-50 border border-amber-200 dark:bg-amber-500/15 dark:border-amber-500/25 dark:text-amber-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-amber-700 text-xs transition-shadow">
                                      <svg className="lucide lucide-trending-down size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                                        <path d="M16 17h6v-6"></path>
                                        <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                      </svg>
                                      {"-4%"}
                                    </Badge>
                                  </div>
                                </CardContent>
                              </Card>
                              <Card className="[--card-spacing:--spacing(3.5)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hero7-delay": "-1.7s"}}>
                                <CardContent className="flex flex-col gap-2 h-full justify-between">
                                  <div className="flex gap-2 items-center min-w-0">
                                    <IconTile className="text-emerald-500" variant="soft" size="sm">
                                      <svg className="lucide lucide-users size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <circle cx={9} cy={7} r={4}></circle>
                                      </svg>
                                    </IconTile>
                                    <span className="font-semibold text-base truncate">
                                      {"Standby Pool"}
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-end justify-between">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="font-semibold hero7-rise leading-none tabular-nums text-3xl tracking-tight truncate">
                                        {"24"}
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        {"ready workers"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/15 dark:border-emerald-500/25 dark:text-emerald-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-emerald-700 text-xs transition-shadow">
                                      <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                        <path d="M16 7h6v6"></path>
                                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                      </svg>
                                      {"+7"}
                                    </Badge>
                                  </div>
                                </CardContent>
                              </Card>
                              <Card className="[--card-spacing:--spacing(3.5)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hero7-delay": "-3.4s"}}>
                                <CardContent className="flex flex-col gap-2 h-full justify-between">
                                  <div className="flex gap-2 items-center min-w-0">
                                    <IconTile className="text-rose-500" variant="soft" size="sm">
                                      <svg className="lucide lucide-triangle-alert size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                        <path d="M12 9v4"></path>
                                        <path d="M12 17h.01"></path>
                                      </svg>
                                    </IconTile>
                                    <span className="font-semibold text-base truncate">
                                      {"Swap Risk"}
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-end justify-between">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="font-semibold hero7-rise leading-none tabular-nums text-3xl tracking-tight truncate">
                                        {"8%"}
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        {"open requests"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-rose-50 border border-rose-200 dark:bg-rose-500/15 dark:border-rose-500/25 dark:text-rose-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-rose-700 text-xs transition-shadow">
                                      <svg className="lucide lucide-trending-down size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                                        <path d="M16 17h6v-6"></path>
                                        <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                      </svg>
                                      {"-2%"}
                                    </Badge>
                                  </div>
                                </CardContent>
                              </Card>
                              <Card className="[--card-spacing:--spacing(3.5)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hero7-delay": "-5.1s"}}>
                                <CardContent className="flex flex-col gap-2 h-full justify-between">
                                  <div className="flex gap-2 items-center min-w-0">
                                    <IconTile className="text-violet-500" variant="soft" size="sm">
                                      <svg className="lucide lucide-shield-check size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                        <path d="m9 12 2 2 4-4"></path>
                                      </svg>
                                    </IconTile>
                                    <span className="font-semibold text-base truncate">
                                      {"Check Score"}
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-end justify-between">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="font-semibold hero7-rise leading-none tabular-nums text-3xl tracking-tight truncate">
                                        {"4.8"}
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        {"site average"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-violet-50 border border-violet-200 dark:bg-violet-500/15 dark:border-violet-500/25 dark:text-violet-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-violet-700 text-xs transition-shadow">
                                      <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                        <path d="M16 7h6v6"></path>
                                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                      </svg>
                                      {"+0.3"}
                                    </Badge>
                                  </div>
                                </CardContent>
                              </Card>
                              <Card className="[--card-spacing:--spacing(3.5)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hero7-delay": "-6.8s"}}>
                                <CardContent className="flex flex-col gap-2 h-full justify-between">
                                  <div className="flex gap-2 items-center min-w-0">
                                    <IconTile className="text-neutral-500" variant="soft" size="sm">
                                      <svg className="lucide lucide-activity size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                      </svg>
                                    </IconTile>
                                    <span className="font-semibold text-base truncate">
                                      {"Crew Tenure"}
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-end justify-between">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="font-semibold hero7-rise leading-none tabular-nums text-3xl tracking-tight truncate">
                                        {"146d"}
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        {"rolling median"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-neutral-50 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-neutral-600 text-xs transition-shadow">
                                      <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                        <path d="M16 7h6v6"></path>
                                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                      </svg>
                                      {"+6d"}
                                    </Badge>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                            <div className="flex gap-4 h-[450px] shrink-0">
                              <Card className="[--card-spacing:--spacing(4)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 flex-[1.55] min-h-0 ring-neutral-900/8 text-neutral-900" size="sm">
                                <CardHeader>
                                  <CardTitle className="leading-none text-base">
                                    {"Coverage Review"}
                                  </CardTitle>
                                  <CardDescription className="dark:text-neutral-400 text-neutral-500 text-sm">
                                    {"Crew health by district"}
                                  </CardDescription>
                                  <CardAction>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-violet-50 border border-violet-200 dark:bg-violet-500/15 dark:border-violet-500/25 dark:text-violet-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-violet-700 text-xs transition-shadow">
                                      {"6 crews"}
                                    </Badge>
                                  </CardAction>
                                </CardHeader>
                                <CardContent className="border border-neutral-200 dark:border-neutral-800 flex flex-1 flex-col min-h-0 overflow-hidden">
                                  <div className="border-b border-neutral-200 dark:border-neutral-800 font-medium gap-3 grid grid-cols-[1.7fr_2fr_0.6fr_0.8fr_0.9fr] items-center px-3 py-2 shrink-0 text-sm">
                                    <span>
                                      {"Crew Lead"}
                                    </span>
                                    <span>
                                      {"Coverage"}
                                    </span>
                                    <span>
                                      {"Relief"}
                                    </span>
                                    <span>
                                      {"Handoffs"}
                                    </span>
                                    <span>
                                      {"Status"}
                                    </span>
                                  </div>
                                  <div className="flex flex-1 flex-col min-h-0">
                                    <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex-1 gap-3 grid grid-cols-[1.7fr_2fr_0.6fr_0.8fr_0.9fr] items-center last:border-b-0 px-3" style={{"--hero7-delay": "0s"}}>
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <Avatar className="size-8" size="default">
                                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <div className="flex flex-col min-w-0">
                                          <span className="font-medium text-sm truncate">
                                            {"Mira Stone"}
                                          </span>
                                          <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                            {"Harbor lead"}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-1.5 min-w-0">
                                        <div className="flex gap-2 items-baseline justify-between">
                                          <span className="font-semibold tabular-nums text-sm">
                                            {"94%"}
                                          </span>
                                          <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                            {"Adds two closers"}
                                          </span>
                                        </div>
                                        <Progress className="[&_[data-slot=progress-indicator]]:bg-emerald-500 [&_[data-slot=progress-track]]:bg-neutral-200 [&_[data-slot=progress-track]]:h-1.5 dark:[&_[data-slot=progress-track]]:bg-neutral-800 gap-0 hero7-track w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="94" aria-valuetext="94%" role="progressbar" aria-label="Mira Stone coverage">
                                          <ProgressTrack progressing="">
                                            <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "94%"}}></ProgressIndicator>
                                          </ProgressTrack>
                                          <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                            {"x"}
                                          </span>
                                        </Progress>
                                      </div>
                                      <span className="tabular-nums text-sm">
                                        {"6h"}
                                      </span>
                                      <span className="tabular-nums text-sm">
                                        {"2"}
                                      </span>
                                      <span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/15 dark:border-emerald-500/25 dark:text-emerald-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-emerald-700 text-xs transition-shadow">
                                          {"Stable"}
                                        </Badge>
                                      </span>
                                    </div>
                                    <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex-1 gap-3 grid grid-cols-[1.7fr_2fr_0.6fr_0.8fr_0.9fr] items-center last:border-b-0 px-3" style={{"--hero7-delay": "-0.9s"}}>
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <Avatar className="size-8" size="default">
                                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <div className="flex flex-col min-w-0">
                                          <span className="font-medium text-sm truncate">
                                            {"Leo Grant"}
                                          </span>
                                          <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                            {"Dispatch owner"}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-1.5 min-w-0">
                                        <div className="flex gap-2 items-baseline justify-between">
                                          <span className="font-semibold tabular-nums text-sm">
                                            {"81%"}
                                          </span>
                                          <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                            {"Driver window tight"}
                                          </span>
                                        </div>
                                        <Progress className="[&_[data-slot=progress-indicator]]:bg-amber-400 [&_[data-slot=progress-track]]:bg-neutral-200 [&_[data-slot=progress-track]]:h-1.5 dark:[&_[data-slot=progress-track]]:bg-neutral-800 gap-0 hero7-track w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="81" aria-valuetext="81%" role="progressbar" aria-label="Leo Grant coverage">
                                          <ProgressTrack progressing="">
                                            <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "81%"}}></ProgressIndicator>
                                          </ProgressTrack>
                                          <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                            {"x"}
                                          </span>
                                        </Progress>
                                      </div>
                                      <span className="tabular-nums text-sm">
                                        {"3h"}
                                      </span>
                                      <span className="tabular-nums text-sm">
                                        {"5"}
                                      </span>
                                      <span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-amber-50 border border-amber-200 dark:bg-amber-500/15 dark:border-amber-500/25 dark:text-amber-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-amber-700 text-xs transition-shadow">
                                          {"Watch"}
                                        </Badge>
                                      </span>
                                    </div>
                                    <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex-1 gap-3 grid grid-cols-[1.7fr_2fr_0.6fr_0.8fr_0.9fr] items-center last:border-b-0 px-3" style={{"--hero7-delay": "-1.8s"}}>
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <Avatar className="size-8" size="default">
                                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <div className="flex flex-col min-w-0">
                                          <span className="font-medium text-sm truncate">
                                            {"Nora Vale"}
                                          </span>
                                          <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                            {"Inventory coach"}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-1.5 min-w-0">
                                        <div className="flex gap-2 items-baseline justify-between">
                                          <span className="font-semibold tabular-nums text-sm">
                                            {"72%"}
                                          </span>
                                          <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                            {"Cycle count open"}
                                          </span>
                                        </div>
                                        <Progress className="[&_[data-slot=progress-indicator]]:bg-rose-500 [&_[data-slot=progress-track]]:bg-neutral-200 [&_[data-slot=progress-track]]:h-1.5 dark:[&_[data-slot=progress-track]]:bg-neutral-800 gap-0 hero7-track w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="72" aria-valuetext="72%" role="progressbar" aria-label="Nora Vale coverage">
                                          <ProgressTrack progressing="">
                                            <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "72%"}}></ProgressIndicator>
                                          </ProgressTrack>
                                          <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                            {"x"}
                                          </span>
                                        </Progress>
                                      </div>
                                      <span className="tabular-nums text-sm">
                                        {"2h"}
                                      </span>
                                      <span className="tabular-nums text-sm">
                                        {"6"}
                                      </span>
                                      <span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-rose-50 border border-rose-200 dark:bg-rose-500/15 dark:border-rose-500/25 dark:text-rose-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-rose-700 text-xs transition-shadow">
                                          {"Critical"}
                                        </Badge>
                                      </span>
                                    </div>
                                    <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex-1 gap-3 grid grid-cols-[1.7fr_2fr_0.6fr_0.8fr_0.9fr] items-center last:border-b-0 px-3" style={{"--hero7-delay": "-2.7s"}}>
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <Avatar className="size-8" size="default">
                                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <div className="flex flex-col min-w-0">
                                          <span className="font-medium text-sm truncate">
                                            {"Theo Park"}
                                          </span>
                                          <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                            {"Ramp lead"}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-1.5 min-w-0">
                                        <div className="flex gap-2 items-baseline justify-between">
                                          <span className="font-semibold tabular-nums text-sm">
                                            {"89%"}
                                          </span>
                                          <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                            {"Training overlap"}
                                          </span>
                                        </div>
                                        <Progress className="[&_[data-slot=progress-indicator]]:bg-emerald-500 [&_[data-slot=progress-track]]:bg-neutral-200 [&_[data-slot=progress-track]]:h-1.5 dark:[&_[data-slot=progress-track]]:bg-neutral-800 gap-0 hero7-track w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="89" aria-valuetext="89%" role="progressbar" aria-label="Theo Park coverage">
                                          <ProgressTrack progressing="">
                                            <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "89%"}}></ProgressIndicator>
                                          </ProgressTrack>
                                          <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                            {"x"}
                                          </span>
                                        </Progress>
                                      </div>
                                      <span className="tabular-nums text-sm">
                                        {"5h"}
                                      </span>
                                      <span className="tabular-nums text-sm">
                                        {"3"}
                                      </span>
                                      <span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/15 dark:border-emerald-500/25 dark:text-emerald-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-emerald-700 text-xs transition-shadow">
                                          {"Stable"}
                                        </Badge>
                                      </span>
                                    </div>
                                    <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex-1 gap-3 grid grid-cols-[1.7fr_2fr_0.6fr_0.8fr_0.9fr] items-center last:border-b-0 px-3" style={{"--hero7-delay": "-3.6s"}}>
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <Avatar className="size-8" size="default">
                                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <div className="flex flex-col min-w-0">
                                          <span className="font-medium text-sm truncate">
                                            {"Sana Qureshi"}
                                          </span>
                                          <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                            {"Uptown floater"}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-1.5 min-w-0">
                                        <div className="flex gap-2 items-baseline justify-between">
                                          <span className="font-semibold tabular-nums text-sm">
                                            {"78%"}
                                          </span>
                                          <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                            {"Awaiting confirm"}
                                          </span>
                                        </div>
                                        <Progress className="[&_[data-slot=progress-indicator]]:bg-violet-500 [&_[data-slot=progress-track]]:bg-neutral-200 [&_[data-slot=progress-track]]:h-1.5 dark:[&_[data-slot=progress-track]]:bg-neutral-800 gap-0 hero7-track w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="78" aria-valuetext="78%" role="progressbar" aria-label="Sana Qureshi coverage">
                                          <ProgressTrack progressing="">
                                            <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "78%"}}></ProgressIndicator>
                                          </ProgressTrack>
                                          <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                            {"x"}
                                          </span>
                                        </Progress>
                                      </div>
                                      <span className="tabular-nums text-sm">
                                        {"4h"}
                                      </span>
                                      <span className="tabular-nums text-sm">
                                        {"4"}
                                      </span>
                                      <span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-violet-50 border border-violet-200 dark:bg-violet-500/15 dark:border-violet-500/25 dark:text-violet-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-violet-700 text-xs transition-shadow">
                                          {"Pending"}
                                        </Badge>
                                      </span>
                                    </div>
                                    <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex-1 gap-3 grid grid-cols-[1.7fr_2fr_0.6fr_0.8fr_0.9fr] items-center last:border-b-0 px-3" style={{"--hero7-delay": "-4.5s"}}>
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <Avatar className="size-8" size="default">
                                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <div className="flex flex-col min-w-0">
                                          <span className="font-medium text-sm truncate">
                                            {"Alex Johnson"}
                                          </span>
                                          <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                            {"Harbor stock"}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-1.5 min-w-0">
                                        <div className="flex gap-2 items-baseline justify-between">
                                          <span className="font-semibold tabular-nums text-sm">
                                            {"91%"}
                                          </span>
                                          <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                            {"Backfill locked"}
                                          </span>
                                        </div>
                                        <Progress className="[&_[data-slot=progress-indicator]]:bg-emerald-500 [&_[data-slot=progress-track]]:bg-neutral-200 [&_[data-slot=progress-track]]:h-1.5 dark:[&_[data-slot=progress-track]]:bg-neutral-800 gap-0 hero7-track w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="91" aria-valuetext="91%" role="progressbar" aria-label="Alex Johnson coverage">
                                          <ProgressTrack progressing="">
                                            <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "91%"}}></ProgressIndicator>
                                          </ProgressTrack>
                                          <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                            {"x"}
                                          </span>
                                        </Progress>
                                      </div>
                                      <span className="tabular-nums text-sm">
                                        {"7h"}
                                      </span>
                                      <span className="tabular-nums text-sm">
                                        {"1"}
                                      </span>
                                      <span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/15 dark:border-emerald-500/25 dark:text-emerald-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-emerald-700 text-xs transition-shadow">
                                          {"Stable"}
                                        </Badge>
                                      </span>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                              <Card className="[--card-spacing:--spacing(4)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 flex-1 min-h-0 ring-neutral-900/8 text-neutral-900" size="sm">
                                <CardHeader>
                                  <CardTitle className="leading-none text-base">
                                    {"Action Queue"}
                                  </CardTitle>
                                  <CardDescription className="dark:text-neutral-400 text-neutral-500 text-sm">
                                    {"Issues before cutoff"}
                                  </CardDescription>
                                  <CardAction>
                                    <svg className="dark:text-neutral-500 lucide lucide-ellipsis size-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </CardAction>
                                </CardHeader>
                                <CardContent className="border border-neutral-200 dark:border-neutral-800 flex flex-1 flex-col min-h-0 overflow-hidden">
                                  <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex flex-1 gap-2.5 items-center last:border-b-0 min-w-0 px-3">
                                    <IconTile className="bg-neutral-50 border-neutral-200 dark:bg-neutral-800/50 dark:border-neutral-800 hero7-blink text-amber-500" variant="outline" size="default">
                                      <svg className="lucide lucide-refresh-cw size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                                        <path d="M21 3v5h-5"></path>
                                        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                                        <path d="M8 16H3v5"></path>
                                      </svg>
                                    </IconTile>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-sm truncate">
                                        {"3 swap approvals"}
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        {"before 2 PM"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-neutral-700 text-xs transition-shadow">
                                      {"Review"}
                                    </Badge>
                                  </div>
                                  <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex flex-1 gap-2.5 items-center last:border-b-0 min-w-0 px-3">
                                    <IconTile className="bg-neutral-50 border-neutral-200 dark:bg-neutral-800/50 dark:border-neutral-800 text-violet-500" variant="outline" size="default">
                                      <svg className="lucide lucide-mail size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                        <rect x={2} y={4} width={20} height={16} rx={2}></rect>
                                      </svg>
                                    </IconTile>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-sm truncate">
                                        {"6 standby invites"}
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        {"north route"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-neutral-700 text-xs transition-shadow">
                                      {"Invite"}
                                    </Badge>
                                  </div>
                                  <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex flex-1 gap-2.5 items-center last:border-b-0 min-w-0 px-3">
                                    <IconTile className="bg-neutral-50 border-neutral-200 dark:bg-neutral-800/50 dark:border-neutral-800 text-rose-500" variant="outline" size="default">
                                      <svg className="lucide lucide-map-pin size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx={12} cy={10} r={3}></circle>
                                      </svg>
                                    </IconTile>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-sm truncate">
                                        {"1 lead missing"}
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        {"Uptown close"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-neutral-700 text-xs transition-shadow">
                                      {"Assign"}
                                    </Badge>
                                  </div>
                                  <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex flex-1 gap-2.5 items-center last:border-b-0 min-w-0 px-3">
                                    <IconTile className="bg-neutral-50 border-neutral-200 dark:bg-neutral-800/50 dark:border-neutral-800 text-emerald-500" variant="outline" size="default">
                                      <svg className="lucide lucide-link size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                      </svg>
                                    </IconTile>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-sm truncate">
                                        {"Timecard sync"}
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        {"after approvals"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-neutral-700 text-xs transition-shadow">
                                      {"Sync"}
                                    </Badge>
                                  </div>
                                  <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex flex-1 gap-2.5 items-center last:border-b-0 min-w-0 px-3">
                                    <IconTile className="bg-neutral-50 border-neutral-200 dark:bg-neutral-800/50 dark:border-neutral-800 text-amber-500" variant="outline" size="default">
                                      <svg className="lucide lucide-calendar-clock size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx={16} cy={16} r={6}></circle>
                                      </svg>
                                    </IconTile>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-sm truncate">
                                        {"2 route gaps"}
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        {"airport noon"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-neutral-700 text-xs transition-shadow">
                                      {"Fill"}
                                    </Badge>
                                  </div>
                                  <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex flex-1 gap-2.5 items-center last:border-b-0 min-w-0 px-3">
                                    <IconTile className="bg-neutral-50 border-neutral-200 dark:bg-neutral-800/50 dark:border-neutral-800 text-emerald-500" variant="outline" size="default">
                                      <svg className="lucide lucide-shield-check size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                        <path d="m9 12 2 2 4-4"></path>
                                      </svg>
                                    </IconTile>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-sm truncate">
                                        {"Break audit"}
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        {"two sites"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-neutral-700 text-xs transition-shadow">
                                      {"Check"}
                                    </Badge>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                            <Card className="[--card-spacing:--spacing(4)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 flex-1 min-h-0 ring-neutral-900/8 text-neutral-900" size="sm">
                              <CardHeader>
                                <CardTitle className="leading-none text-base">
                                  {"Demand Mix"}
                                </CardTitle>
                                <CardDescription className="dark:text-neutral-400 text-neutral-500 text-sm">
                                  {"Coverage supply against forecast"}
                                </CardDescription>
                                <CardAction className="flex gap-2 items-center">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-neutral-50 border border-neutral-200 dark:bg-neutral-800/50 dark:border-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-2 h-6 h-auto! min-w-6 outline-none px-2.5 py-1.5 relative rounded-full text-sm transition-shadow">
                                    <span className="bg-teal-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                                    <span className="dark:text-neutral-400 text-neutral-500 text-sm">
                                      {"Supply"}
                                    </span>
                                    <span className="font-semibold ms-2 tabular-nums text-sm">
                                      {"3,294"}
                                    </span>
                                  </Badge>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-neutral-50 border border-neutral-200 dark:bg-neutral-800/50 dark:border-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-2 h-6 h-auto! min-w-6 outline-none px-2.5 py-1.5 relative rounded-full text-sm transition-shadow">
                                    <span className="bg-rose-500 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                                    <span className="dark:text-neutral-400 text-neutral-500 text-sm">
                                      {"Forecast"}
                                    </span>
                                    <span className="font-semibold ms-2 tabular-nums text-sm">
                                      {"3,043"}
                                    </span>
                                  </Badge>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-neutral-50 border border-neutral-200 dark:bg-neutral-800/50 dark:border-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-2 h-6 h-auto! min-w-6 outline-none px-2.5 py-1.5 relative rounded-full text-sm transition-shadow">
                                    <span className="bg-emerald-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                                    <span className="dark:text-neutral-400 text-neutral-500 text-sm">
                                      {"Gap"}
                                    </span>
                                    <span className="dark:text-emerald-400 font-semibold ms-2 tabular-nums text-emerald-600 text-sm">
                                      {"+251"}
                                    </span>
                                  </Badge>
                                </CardAction>
                              </CardHeader>
                              <CardContent className="flex flex-1 flex-col gap-3 min-h-0">
                                <div className="flex items-center justify-between shrink-0">
                                  <div className="flex gap-4 items-center">
                                    <span className="dark:text-neutral-400 flex gap-1.5 items-center text-neutral-500 text-sm">
                                      <span className="bg-teal-400 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                      {"Scheduled"}
                                    </span>
                                    <span className="dark:text-neutral-400 flex gap-1.5 items-center text-neutral-500 text-sm">
                                      <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                      {"Standby"}
                                    </span>
                                    <span className="dark:text-neutral-400 flex gap-1.5 items-center text-neutral-500 text-sm">
                                      <span className="bg-rose-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                      {"Forecast"}
                                    </span>
                                  </div>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-violet-50 border border-violet-200 dark:bg-violet-500/15 dark:border-violet-500/25 dark:text-violet-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-violet-700 text-xs transition-shadow">
                                    {"21 day view"}
                                  </Badge>
                                </div>
                                <div className="flex-1 min-h-0 relative">
                                  <div className="absolute border-dashed border-neutral-200 border-t dark:border-neutral-700 inset-x-0 top-0" aria-hidden="true"></div>
                                  <div className="flex gap-1.5 h-full items-end">
                                    <div className="flex flex-1 flex-col h-full hero7-grow justify-end min-w-0 origin-bottom" style={{"--hero7-delay": "0s"}}>
                                      <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "18.7135%"}}></span>
                                      <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "72.5146%"}}></span>
                                    </div>
                                    <div className="flex flex-1 flex-col h-full hero7-grow justify-end min-w-0 origin-bottom" style={{"--hero7-delay": "-0.16s"}}>
                                      <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "16.3743%"}}></span>
                                      <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "76.0234%"}}></span>
                                    </div>
                                    <div className="flex flex-1 flex-col h-full hero7-grow justify-end min-w-0 origin-bottom" style={{"--hero7-delay": "-0.32s"}}>
                                      <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "12.2807%"}}></span>
                                      <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "80.117%"}}></span>
                                    </div>
                                    <div className="flex flex-1 flex-col h-full hero7-grow justify-end min-w-0 origin-bottom" style={{"--hero7-delay": "-0.48s"}}>
                                      <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "22.2222%"}}></span>
                                      <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "67.2515%"}}></span>
                                    </div>
                                    <div className="flex flex-1 flex-col h-full hero7-grow justify-end min-w-0 origin-bottom" style={{"--hero7-delay": "-0.64s"}}>
                                      <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "11.1111%"}}></span>
                                      <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "86.5497%"}}></span>
                                    </div>
                                    <div className="flex flex-1 flex-col h-full hero7-grow justify-end min-w-0 origin-bottom" style={{"--hero7-delay": "-0.8s"}}>
                                      <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "25.731%"}}></span>
                                      <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "59.6491%"}}></span>
                                    </div>
                                    <div className="flex flex-1 flex-col h-full hero7-grow justify-end min-w-0 origin-bottom" style={{"--hero7-delay": "-0.96s"}}>
                                      <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "23.9766%"}}></span>
                                      <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "54.9708%"}}></span>
                                    </div>
                                    <div className="flex flex-1 flex-col h-full hero7-grow justify-end min-w-0 origin-bottom" style={{"--hero7-delay": "-1.12s"}}>
                                      <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "15.2047%"}}></span>
                                      <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "77.7778%"}}></span>
                                    </div>
                                    <div className="flex flex-1 flex-col h-full hero7-grow justify-end min-w-0 origin-bottom" style={{"--hero7-delay": "-1.28s"}}>
                                      <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "12.8655%"}}></span>
                                      <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "83.0409%"}}></span>
                                    </div>
                                    <div className="flex flex-1 flex-col h-full hero7-grow justify-end min-w-0 origin-bottom" style={{"--hero7-delay": "-1.44s"}}>
                                      <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "9.94152%"}}></span>
                                      <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "87.7193%"}}></span>
                                    </div>
                                    <div className="flex flex-1 flex-col h-full hero7-grow justify-end min-w-0 origin-bottom" style={{"--hero7-delay": "-1.6s"}}>
                                      <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "19.883%"}}></span>
                                      <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "74.269%"}}></span>
                                    </div>
                                    <div className="flex flex-1 flex-col h-full hero7-grow justify-end min-w-0 origin-bottom" style={{"--hero7-delay": "-1.76s"}}>
                                      <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "22.807%"}}></span>
                                      <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "69.5906%"}}></span>
                                    </div>
                                    <div className="flex flex-1 flex-col h-full hero7-grow justify-end min-w-0 origin-bottom" style={{"--hero7-delay": "-1.92s"}}>
                                      <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "26.9006%"}}></span>
                                      <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "61.4035%"}}></span>
                                    </div>
                                    <div className="flex flex-1 flex-col h-full hero7-grow justify-end min-w-0 origin-bottom" style={{"--hero7-delay": "-2.08s"}}>
                                      <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "25.1462%"}}></span>
                                      <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "56.7251%"}}></span>
                                    </div>
                                    <div className="flex flex-1 flex-col h-full hero7-grow justify-end min-w-0 origin-bottom" style={{"--hero7-delay": "-2.24s"}}>
                                      <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "14.0351%"}}></span>
                                      <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "81.2865%"}}></span>
                                    </div>
                                    <div className="flex flex-1 flex-col h-full hero7-grow justify-end min-w-0 origin-bottom" style={{"--hero7-delay": "-2.4s"}}>
                                      <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "10.5263%"}}></span>
                                      <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "89.4737%"}}></span>
                                    </div>
                                    <div className="flex flex-1 flex-col h-full hero7-grow justify-end min-w-0 origin-bottom" style={{"--hero7-delay": "-2.56s"}}>
                                      <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "8.18713%"}}></span>
                                      <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "91.8129%"}}></span>
                                    </div>
                                    <div className="flex flex-1 flex-col h-full hero7-grow justify-end min-w-0 origin-bottom" style={{"--hero7-delay": "-2.72s"}}>
                                      <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "18.1287%"}}></span>
                                      <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "77.7778%"}}></span>
                                    </div>
                                    <div className="flex flex-1 flex-col h-full hero7-grow justify-end min-w-0 origin-bottom" style={{"--hero7-delay": "-2.88s"}}>
                                      <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "21.0526%"}}></span>
                                      <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "70.7602%"}}></span>
                                    </div>
                                    <div className="flex flex-1 flex-col h-full hero7-grow justify-end min-w-0 origin-bottom" style={{"--hero7-delay": "-3.04s"}}>
                                      <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "24.5614%"}}></span>
                                      <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "63.7427%"}}></span>
                                    </div>
                                    <div className="flex flex-1 flex-col h-full hero7-grow justify-end min-w-0 origin-bottom" style={{"--hero7-delay": "-3.2s"}}>
                                      <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "26.3158%"}}></span>
                                      <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "57.8947%"}}></span>
                                    </div>
                                  </div>
                                  <svg className="absolute inset-0 pointer-events-none size-full" viewBox="0 0 300 100" preserveAspectRatio="none" aria-hidden="true">
                                    <path className="hero7-draw stroke-rose-500" d="M0.00 18.13 L15.00 13.45 L30.00 11.70 L45.00 16.37 L60.00 8.19 L75.00 23.39 L90.00 29.82 L105.00 14.62 L120.00 9.94 L135.00 6.43 L150.00 12.87 L165.00 15.79 L180.00 20.47 L195.00 27.49 L210.00 12.87 L225.00 5.85 L240.00 2.34 L255.00 11.11 L270.00 14.62 L285.00 19.30 L300.00 25.73" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={1200} vector-effect="non-scaling-stroke"></path>
                                  </svg>
                                </div>
                                <div className="dark:text-neutral-500 flex items-center justify-between shrink-0 text-neutral-400 text-xs">
                                  <span>
                                    {"Mar 1"}
                                  </span>
                                  <span>
                                    {"Mar 7"}
                                  </span>
                                  <span>
                                    {"Mar 14"}
                                  </span>
                                  <span>
                                    {"Mar 21"}
                                  </span>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                        <span className="-left-1/4 absolute bg-linear-to-r dark:via-white/10 from-transparent hero7-sweep inset-y-0 pointer-events-none to-transparent via-white/40 w-1/6" aria-hidden="true"></span>
                      </Card>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="@container flex flex-col gap-6 items-start justify-center min-w-72">
            <div>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-7 min-w-6 outline-none px-2 py-0.75 relative rounded-full text-foreground text-sm transition-shadow">
                <svg className="shrink-0 size-3.5" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <defs>
                    <lineargradient id="_r_0_-deep" x1={5.66263} y1={0.896875} x2={1.7193} y2={12.546} gradientUnits="userSpaceOnUse">
                      <stop stopColor="#114A8B"></stop>
                      <stop offset={1} stopColor="#0669BC"></stop>
                    </lineargradient>
                    <lineargradient id="_r_0_-shade" x1={6.89265} y1={6.32626} x2={5.9812} y2={6.63397} gradientUnits="userSpaceOnUse">
                      <stop stopOpacity={0.3}></stop>
                      <stop offset={0.07} stopOpacity={0.2}></stop>
                      <stop offset={0.32} stopOpacity={0.1}></stop>
                      <stop offset={0.62} stopOpacity={0.05}></stop>
                      <stop offset={1} stopOpacity={0}></stop>
                    </lineargradient>
                    <lineargradient id="_r_0_-sky" x1={2.06937} y1={0.557084} x2={6.39771} y2={12.0896} gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3CCBF4"></stop>
                      <stop offset={1} stopColor="#2892DF"></stop>
                    </lineargradient>
                  </defs>
                  <g transform="translate(0.5838 0.9534)">
                    <path d="M4.27867 0H8.07617L4.1343 11.6812C4.09342 11.8011 4.01599 11.9051 3.91292 11.9786C3.80985 12.0521 3.68631 12.0914 3.55971 12.091H0.605129C0.509077 12.0913 0.414358 12.0686 0.32884 12.0248C0.243323 11.9811 0.169475 11.9176 0.113429 11.8396C0.0573843 11.7616 0.0207599 11.6713 0.00659819 11.5763C-0.00756352 11.4813 0.00114621 11.3843 0.032004 11.2933L3.70409 0.414167C3.74447 0.293801 3.82168 0.189182 3.9248 0.115117C4.02791 0.0410512 4.15171 0.00128941 4.27867 0.00145837V0Z" fill="url(#_r_0_-deep)"></path>
                  </g>
                  <g transform="translate(4.0782 8.7878)">
                    <path d="M6.30011 0H0.278648C0.222664 0 0.167972 0.0168283 0.121705 0.0483511C0.0754389 0.079874 0.0397453 0.124607 0.0192793 0.176717C-0.00118677 0.228827 -0.00547534 0.285894 0.00697312 0.340477C0.0194216 0.39506 0.0480292 0.444625 0.089065 0.482709L3.95802 4.09354C4.07061 4.19926 4.21921 4.25817 4.37365 4.25833H7.78323L6.30011 0Z" fill="#0078D4"></path>
                  </g>
                  <g transform="translate(0.5838 0.9534)">
                    <path d="M4.27786 0.00000781986C4.14959 -0.000646443 4.02447 0.0397701 3.92082 0.115343C3.81717 0.190916 3.74043 0.297679 3.70182 0.420008L0.03557 11.2846C0.00276016 11.3759 -0.00756193 11.4738 0.00547802 11.5699C0.018518 11.666 0.0545359 11.7576 0.110481 11.8369C0.166426 11.9162 0.240651 11.9808 0.326869 12.0253C0.413086 12.0698 0.508757 12.0928 0.605778 12.0925H3.63765C3.75031 12.0721 3.85555 12.0223 3.94265 11.948C4.02976 11.8737 4.0956 11.7776 4.13349 11.6696L4.86557 9.51417L7.47744 11.9496C7.58711 12.0401 7.72462 12.0901 7.86682 12.091H11.2633L9.77286 7.83417H5.42994L8.08849 0.00146619L4.27786 0.00000781986Z" fill="url(#_r_0_-shade)"></path>
                  </g>
                  <g transform="translate(4.907 0.9534)">
                    <path d="M4.80521 0.411251C4.76485 0.291273 4.6878 0.187017 4.58495 0.113219C4.48211 0.0394206 4.35867 -0.000185003 4.23208 0.000000649718H0C0.126531 0.0000343944 0.249869 0.0397254 0.352673 0.113493C0.455476 0.18726 0.532574 0.291393 0.573125 0.411251L4.24521 11.2933C4.27601 11.3844 4.28469 11.4814 4.27052 11.5765C4.25635 11.6716 4.21974 11.7619 4.16373 11.84C4.10772 11.9181 4.03391 11.9817 3.94842 12.0256C3.86292 12.0696 3.7682 12.0925 3.67208 12.0925H7.90417C8.00028 12.0925 8.095 12.0696 8.1805 12.0256C8.26599 11.9817 8.3398 11.9181 8.39581 11.84C8.45183 11.7619 8.48843 11.6716 8.5026 11.5765C8.51677 11.4814 8.50809 11.3844 8.47729 11.2933L4.80521 0.411251Z" fill="url(#_r_0_-sky)"></path>
                  </g>
                </svg>
                {"Powered by Azure"}
              </Badge>
            </div>
            <h1 className="@md:text-5xl @xl:leading-none font-semibold leading-tight text-4xl text-foreground tracking-tight" id="hero-7-title">
              <span className="@md:block">
                {"Modern cloud stack"}
              </span>
              <span className="@md:block text-muted-foreground">
                {"built for scale"}
              </span>
            </h1>
            <p className="leading-6 text-base text-muted-foreground">
              {"A unified platform for deploying, monitoring, and managing cloud infrastructure across Azure environments with secure automation and real-time visibility for modern engineering teams worldwide."}
            </p>
            <div className="w-full" aria-live="polite">
              <form className="flex flex-wrap gap-2 items-center w-full">
                <InputGroup className="w-60" role="group">
                  <InputGroupAddon role="group" data-align="inline-start">
                    {"@"}
                  </InputGroupAddon>
                  <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="hero-7-email" placeholder="Email" aria-label="Email" autoComplete="email" required type="email" value="" />
                </InputGroup>
                <Button type="submit" tabIndex={0} extracted="1">
                  {"Join"}
                  <svg className="lucide lucide-arrow-right size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </form>
            </div>
            <ul className="flex flex-col gap-3 items-start">
              <li className="flex gap-2 items-center text-base text-muted-foreground">
                <svg className="lucide lucide-circle-check shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                  <circle cx={12} cy={12} r={10}></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                {"Azure native"}
              </li>
              <li className="flex gap-2 items-center text-base text-muted-foreground">
                <svg className="lucide lucide-circle-check shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                  <circle cx={12} cy={12} r={10}></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                {"Enterprise ready"}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
