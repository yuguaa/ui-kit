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
      <section className="bg-background flex items-center lg:px-20 px-4 py-12 sm:px-6 w-full" aria-labelledby="hero-14-title">
        <div className="flex flex-col gap-8 max-w-7xl mx-auto w-full">
          <div className="flex flex-wrap gap-8 items-end">
            <div className="@container flex flex-1 flex-col gap-4 items-start min-w-72">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-7 hover:bg-accent min-w-5 outline-none px-2 py-0.5 relative rounded-full text-foreground text-sm transition-colors" href="#">
                <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                Explore 495+ NeUI Blocks
                <svg className="lucide lucide-arrow-up-right size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </Badge>
              <h1 className="@2xl:text-6xl @lg:text-5xl @sm:text-4xl font-semibold leading-[1.05] text-3xl text-foreground tracking-tight" id="hero-14-title">
                <span className="block">
                  Design-ready shadcn
                </span>
                <span className="block text-muted-foreground">
                  MCP native
                </span>
              </h1>
            </div>
            <div className="flex flex-1 flex-col gap-4 items-start max-w-md min-w-72">
              <p className="leading-6 text-base text-muted-foreground">
                Build faster with production-ready blocks, MCP support, and a curated shadcn registry.
              </p>
              <div className="flex flex-wrap gap-2 items-center">
                <Button href="#" role="button" tabIndex="0">
                  Buy Now
                </Button>
                <Button href="#" role="button" tabIndex="0">
                  Explore
                </Button>
              </div>
            </div>
          </div>
          <div className="@container aspect-[16/10] border border-neutral-200/30 overflow-hidden relative rounded-2xl w-full">
            <img className="absolute inset-0 object-cover pointer-events-none size-full" alt="" aria-hidden="true" width="1600" height="1335" decoding="async" src="https://images.unsplash.com/photo-1651065567117-ac52c1a62e21?auto=format&fit=crop&crop=top&w=1600&h=1335&q=80" />
            <div className="-bottom-[4cqw] absolute bg-white/10 dark:bg-white/5 dark:ring-white/10 inset-x-[5cqw] ring-1 ring-inset ring-white/25 rounded-md top-[5cqw]" aria-hidden="true"></div>
            <div className="absolute inset-0">
              <div className="absolute h-[1060px] left-[6.25cqw] origin-top-left top-[6.25cqw] w-[1400px]" style={{transform: "scale(calc(100cqw / 1600px))"}}>
                <Card className="[--card-spacing:--spacing(1.5)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 gap-0 overflow-hidden px-1.5 ring-neutral-900/10 shadow-2xl size-full text-neutral-900" size="default" role="img" aria-label="Crew coverage console showing open gaps, coverage review by crew lead, the action queue and supply against forecast">
                  <style>{`
@keyframes hero14-grow {
  0%, 54% { transform: scaleY(1) }
  66% { transform: scaleY(0.3) }
  100% { transform: scaleY(1) }
}
@keyframes hero14-rise {
  0%, 60% { opacity: 1; transform: translateY(0) }
  72% { opacity: 0.4; transform: translateY(4px) }
  100% { opacity: 1; transform: translateY(0) }
}
@keyframes hero14-fill {
  0%, 52% { transform: scaleX(1) }
  64% { transform: scaleX(0.1) }
  100% { transform: scaleX(1) }
}
@keyframes hero14-blink {
  0%, 100% { opacity: 1 }
  50% { opacity: 0.4 }
}
@keyframes hero14-draw {
  0%, 50% { stroke-dashoffset: 0 }
  62% { stroke-dashoffset: 1200 }
  100% { stroke-dashoffset: 0 }
}
/* The specular pass over the whole shot. Off-canvas for most of the cycle, so
   what registers is an occasional glint rather than a shimmer. */
@keyframes hero14-sweep {
  0%, 62% { opacity: 0; transform: translateX(-60%) skewX(-12deg) }
  70% { opacity: 1 }
  100% { opacity: 0; transform: translateX(560%) skewX(-12deg) }
}

/* Set \`--hero14-delay\` per element to stagger siblings; keep it a custom property,
   because an inline \`animation\` shorthand would outrank the reduced-motion rule. */
.hero14-grow,
.hero14-rise,
.hero14-draw,
.hero14-track [data-slot="progress-indicator"] {
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  animation-delay: var(--hero14-delay, 0s);
}

.hero14-grow { animation-name: hero14-grow; animation-duration: 11.3s; }
.hero14-rise { animation-name: hero14-rise; animation-duration: 13.7s; }
.hero14-draw { animation-name: hero14-draw; animation-duration: 16.3s; }

/* The primitive owns the indicator node, so the fill is reached through its
   data-slot instead of a class on the element itself. */
.hero14-track [data-slot="progress-indicator"] {
  transform-origin: left center;
  animation-name: hero14-fill;
  animation-duration: 10.1s;
}

.hero14-blink {
  animation: hero14-blink 3.7s ease-in-out var(--hero14-delay, 0s) infinite;
}

.hero14-sweep {
  opacity: 0;
  animation: hero14-sweep 9.7s ease-in-out var(--hero14-delay, 0s) infinite;
}

@media (prefers-reduced-motion: reduce) {
  .hero14-grow,
  .hero14-rise,
  .hero14-draw,
  .hero14-blink,
  .hero14-sweep,
  .hero14-track [data-slot="progress-indicator"] {
    animation: none;
  }
  .hero14-sweep { opacity: 0; }
}
`}</style>
                  <Card className="[--card-spacing:0px] bg-white border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-50 flex-1 gap-0 min-h-0 overflow-hidden relative ring-0 shadow-none text-neutral-900" size="default">
                    <div className="border-b border-neutral-200 dark:border-neutral-800 flex gap-2 h-9 items-center px-2.5 shrink-0">
                      <IconTile className="bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 text-white" variant="solid" size="xs">
                        <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path fillRule="evenodd" clipRule="evenodd" d="M9.33333 0.538463H4.66667C2.38672 0.538463 0.538463 2.38672 0.538463 4.66667V9.33333C0.538463 11.6133 2.38672 13.4615 4.66667 13.4615H9.33333C11.6133 13.4615 13.4615 11.6133 13.4615 9.33333V4.66667C13.4615 2.38672 11.6133 0.538463 9.33333 0.538463ZM4.66667 0C2.08934 0 0 2.08934 0 4.66667V9.33333C0 11.9107 2.08934 14 4.66667 14H9.33333C11.9107 14 14 11.9107 14 9.33333V4.66667C14 2.08934 11.9107 0 9.33333 0H4.66667Z" fill="currentColor" opacity="0.2"></path>
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
                          Acme Inc
                          <svg className="dark:text-neutral-500 lucide lucide-chevrons-up-down size-3.5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path>
                          </svg>
                        </span>
                      </div>
                      <div className="contents">
                        <span className="dark:text-neutral-600 text-neutral-300" aria-hidden="true">
                          /
                        </span>
                        <span className="flex font-medium gap-1.5 items-center text-sm">
                          Web App
                          <svg className="dark:text-neutral-500 lucide lucide-chevrons-up-down size-3.5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path>
                          </svg>
                        </span>
                      </div>
                      <div className="contents">
                        <span className="dark:text-neutral-600 text-neutral-300" aria-hidden="true">
                          /
                        </span>
                        <span className="flex font-medium gap-1.5 items-center text-sm">
                          Production
                          <svg className="dark:text-neutral-500 lucide lucide-chevrons-up-down size-3.5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path>
                          </svg>
                        </span>
                      </div>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-5 ms-auto outline-none px-2 py-0.5 relative rounded-full text-neutral-600 text-xs transition-shadow">
                        <svg className="lucide lucide-activity size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                          <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                        </svg>
                        System
                        <span className="dark:text-emerald-400 text-emerald-600">
                          Normal
                        </span>
                      </Badge>
                    </div>
                    <div className="flex flex-1 min-h-0">
                      <div className="bg-neutral-50 border-neutral-200 border-r dark:bg-neutral-950 dark:border-neutral-800 flex flex-col gap-1.5 p-2 pb-[168px] shrink-0 w-56">
                        <Item className="bg-white border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-500 gap-2 px-2 py-1.5 text-neutral-400 text-sm" variant="outline" size="xs">
                          <svg className="lucide lucide-search size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                            <path d="m21 21-4.34-4.34"></path>
                            <circle cx="11" cy="11" r="8"></circle>
                          </svg>
                          Search...
                          <Kbd className="bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-500 h-5 min-w-5 ms-auto px-1.5 text-neutral-400 text-xs">
                            ⌘K
                          </Kbd>
                        </Item>
                        <div className="dark:text-neutral-500 font-medium pt-1.5 px-2 text-neutral-400 text-xs">
                          Platform
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <div className="contents">
                            <Item className="bg-neutral-100 border-transparent dark:bg-neutral-800 dark:text-neutral-50 font-medium gap-2 px-2 py-1.5 text-neutral-900 text-sm" variant="default" size="xs">
                              <svg className="lucide lucide-layout-dashboard size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                                <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                                <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                                <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                                <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                              </svg>
                              Overview
                            </Item>
                          </div>
                          <div className="contents">
                            <Item className="border-transparent dark:text-neutral-400 gap-2 px-2 py-1.5 text-neutral-600 text-sm" variant="default" size="xs">
                              <svg className="lucide lucide-users size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                              </svg>
                              Users
                              <svg className="dark:text-neutral-500 lucide lucide-chevron-down ms-auto size-3.5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                            </Item>
                            <div className="border-l border-neutral-200 dark:border-neutral-800 flex flex-col gap-0.5 ms-4 ps-1">
                              <Item className="border-transparent dark:text-neutral-400 px-2 py-1.5 text-neutral-500 text-sm" variant="default" size="xs">
                                All Users
                              </Item>
                              <Item className="border-transparent dark:text-neutral-400 px-2 py-1.5 text-neutral-500 text-sm" variant="default" size="xs">
                                Invitations
                              </Item>
                              <Item className="border-transparent dark:text-neutral-400 px-2 py-1.5 text-neutral-500 text-sm" variant="default" size="xs">
                                Roles
                              </Item>
                            </div>
                          </div>
                          <div className="contents">
                            <Item className="border-transparent dark:text-neutral-400 gap-2 px-2 py-1.5 text-neutral-600 text-sm" variant="default" size="xs">
                              <svg className="lucide lucide-building-2 lucide-building2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                                <path d="M10 12h4"></path>
                                <path d="M10 8h4"></path>
                                <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                                <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                              </svg>
                              Organizations
                              <svg className="dark:text-neutral-500 lucide lucide-chevron-right ms-auto size-3.5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                            </Item>
                          </div>
                          <div className="contents">
                            <Item className="border-transparent dark:text-neutral-400 gap-2 px-2 py-1.5 text-neutral-600 text-sm" variant="default" size="xs">
                              <svg className="lucide lucide-shield-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                              Security
                              <svg className="dark:text-neutral-500 lucide lucide-chevron-right ms-auto size-3.5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                            </Item>
                          </div>
                          <div className="contents">
                            <Item className="border-transparent dark:text-neutral-400 gap-2 px-2 py-1.5 text-neutral-600 text-sm" variant="default" size="xs">
                              <svg className="lucide lucide-webhook size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WebhookIcon" tabler="IconWebhook" hugeicons="WebhookIcon" phosphor="WebhooksLogoIcon" remixicon="RiWebhookLine" aria-hidden="true">
                                <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                                <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                                <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                              </svg>
                              Webhooks
                            </Item>
                          </div>
                          <div className="contents">
                            <Item className="border-transparent dark:text-neutral-400 gap-2 px-2 py-1.5 text-neutral-600 text-sm" variant="default" size="xs">
                              <svg className="lucide lucide-key-round size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                              </svg>
                              API Keys
                            </Item>
                          </div>
                        </div>
                        <Card className="[--card-spacing:--spacing(2.5)] bg-white border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 dark:ring-white/10 dark:text-neutral-50 gap-2 mt-auto ring-0 ring-neutral-900/8 shadow-sm text-neutral-900" size="sm">
                          <CardContent className="flex flex-col gap-2">
                            <span className="font-semibold text-sm">
                              Multi-theme support is here
                            </span>
                            <span className="dark:text-neutral-400 leading-5 text-neutral-500 text-sm">
                              Switch between Vega, Nova, Maia, Lyra, and Mira themes.
                            </span>
                            <span className="bg-[radial-gradient(120%_90%_at_12%_18%,var(--color-orange-400)_0%,transparent_46%),radial-gradient(120%_120%_at_88%_8%,var(--color-fuchsia-500)_0%,transparent_55%),linear-gradient(160deg,var(--color-violet-600)_0%,var(--color-sky-400)_58%,var(--color-cyan-400)_100%)] block h-20 w-full" aria-hidden="true"></span>
                            <div className="dark:text-neutral-400 flex items-center justify-between text-neutral-500 text-xs">
                              <span>
                                Read more
                              </span>
                              <span>
                                Dismiss
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="bg-neutral-50 dark:bg-neutral-950 flex flex-1 flex-col gap-4 min-w-0 p-4">
                        <div className="gap-3 grid grid-cols-5 h-[132px] shrink-0">
                          <Card className="[--card-spacing:--spacing(3.5)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hero14-delay": "0s"}}>
                            <CardContent className="flex flex-col gap-2 h-full justify-between">
                              <div className="flex gap-2 items-center min-w-0">
                                <IconTile className="text-amber-500" variant="soft" size="sm">
                                  <svg className="lucide lucide-calendar-clock size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                    <path d="M16 14v2.2l1.6 1"></path>
                                    <path d="M16 2v4"></path>
                                    <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                    <path d="M3 10h5"></path>
                                    <path d="M8 2v4"></path>
                                    <circle cx="16" cy="16" r="6"></circle>
                                  </svg>
                                </IconTile>
                                <span className="font-semibold text-base truncate">
                                  Open Gaps
                                </span>
                              </div>
                              <div className="flex gap-2 items-end justify-between">
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-semibold hero14-rise leading-none tabular-nums text-3xl tracking-tight truncate">
                                    11
                                  </span>
                                  <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                    before kickoff
                                  </span>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-amber-50 border border-amber-200 dark:bg-amber-500/15 dark:border-amber-500/25 dark:text-amber-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-amber-700 text-xs transition-shadow">
                                  <svg className="lucide lucide-trending-down size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                                    <path d="M16 17h6v-6"></path>
                                    <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                  </svg>
                                  -4%
                                </Badge>
                              </div>
                            </CardContent>
                          </Card>
                          <Card className="[--card-spacing:--spacing(3.5)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hero14-delay": "-1.7s"}}>
                            <CardContent className="flex flex-col gap-2 h-full justify-between">
                              <div className="flex gap-2 items-center min-w-0">
                                <IconTile className="text-emerald-500" variant="soft" size="sm">
                                  <svg className="lucide lucide-users size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                  </svg>
                                </IconTile>
                                <span className="font-semibold text-base truncate">
                                  Standby Pool
                                </span>
                              </div>
                              <div className="flex gap-2 items-end justify-between">
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-semibold hero14-rise leading-none tabular-nums text-3xl tracking-tight truncate">
                                    24
                                  </span>
                                  <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                    ready workers
                                  </span>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/15 dark:border-emerald-500/25 dark:text-emerald-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-emerald-700 text-xs transition-shadow">
                                  <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                    <path d="M16 7h6v6"></path>
                                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                  </svg>
                                  +7
                                </Badge>
                              </div>
                            </CardContent>
                          </Card>
                          <Card className="[--card-spacing:--spacing(3.5)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hero14-delay": "-3.4s"}}>
                            <CardContent className="flex flex-col gap-2 h-full justify-between">
                              <div className="flex gap-2 items-center min-w-0">
                                <IconTile className="text-rose-500" variant="soft" size="sm">
                                  <svg className="lucide lucide-triangle-alert size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                    <path d="M12 9v4"></path>
                                    <path d="M12 17h.01"></path>
                                  </svg>
                                </IconTile>
                                <span className="font-semibold text-base truncate">
                                  Swap Risk
                                </span>
                              </div>
                              <div className="flex gap-2 items-end justify-between">
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-semibold hero14-rise leading-none tabular-nums text-3xl tracking-tight truncate">
                                    8%
                                  </span>
                                  <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                    open requests
                                  </span>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-rose-50 border border-rose-200 dark:bg-rose-500/15 dark:border-rose-500/25 dark:text-rose-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-rose-700 text-xs transition-shadow">
                                  <svg className="lucide lucide-trending-down size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                                    <path d="M16 17h6v-6"></path>
                                    <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                  </svg>
                                  -2%
                                </Badge>
                              </div>
                            </CardContent>
                          </Card>
                          <Card className="[--card-spacing:--spacing(3.5)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hero14-delay": "-5.1s"}}>
                            <CardContent className="flex flex-col gap-2 h-full justify-between">
                              <div className="flex gap-2 items-center min-w-0">
                                <IconTile className="text-violet-500" variant="soft" size="sm">
                                  <svg className="lucide lucide-shield-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                  </svg>
                                </IconTile>
                                <span className="font-semibold text-base truncate">
                                  Check Score
                                </span>
                              </div>
                              <div className="flex gap-2 items-end justify-between">
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-semibold hero14-rise leading-none tabular-nums text-3xl tracking-tight truncate">
                                    4.8
                                  </span>
                                  <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                    site average
                                  </span>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-violet-50 border border-violet-200 dark:bg-violet-500/15 dark:border-violet-500/25 dark:text-violet-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-violet-700 text-xs transition-shadow">
                                  <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                    <path d="M16 7h6v6"></path>
                                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                  </svg>
                                  +0.3
                                </Badge>
                              </div>
                            </CardContent>
                          </Card>
                          <Card className="[--card-spacing:--spacing(3.5)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hero14-delay": "-6.8s"}}>
                            <CardContent className="flex flex-col gap-2 h-full justify-between">
                              <div className="flex gap-2 items-center min-w-0">
                                <IconTile className="text-neutral-500" variant="soft" size="sm">
                                  <svg className="lucide lucide-activity size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                  </svg>
                                </IconTile>
                                <span className="font-semibold text-base truncate">
                                  Crew Tenure
                                </span>
                              </div>
                              <div className="flex gap-2 items-end justify-between">
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-semibold hero14-rise leading-none tabular-nums text-3xl tracking-tight truncate">
                                    146d
                                  </span>
                                  <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                    rolling median
                                  </span>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-neutral-50 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-neutral-600 text-xs transition-shadow">
                                  <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                    <path d="M16 7h6v6"></path>
                                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                  </svg>
                                  +6d
                                </Badge>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        <div className="flex gap-4 h-[450px] shrink-0">
                          <Card className="[--card-spacing:--spacing(4)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 flex-[1.55] min-h-0 ring-neutral-900/8 text-neutral-900" size="sm">
                            <CardHeader>
                              <CardTitle className="leading-none text-base">
                                Coverage Review
                              </CardTitle>
                              <CardDescription className="dark:text-neutral-400 text-neutral-500 text-sm">
                                Crew health by district
                              </CardDescription>
                              <CardAction>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-violet-50 border border-violet-200 dark:bg-violet-500/15 dark:border-violet-500/25 dark:text-violet-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-violet-700 text-xs transition-shadow">
                                  6 crews
                                </Badge>
                              </CardAction>
                            </CardHeader>
                            <CardContent className="border border-neutral-200 dark:border-neutral-800 flex flex-1 flex-col min-h-0 overflow-hidden">
                              <div className="border-b border-neutral-200 dark:border-neutral-800 font-medium gap-3 grid grid-cols-[1.7fr_2fr_0.6fr_0.8fr_0.9fr] items-center px-3 py-2 shrink-0 text-sm">
                                <span>
                                  Crew Lead
                                </span>
                                <span>
                                  Coverage
                                </span>
                                <span>
                                  Relief
                                </span>
                                <span>
                                  Handoffs
                                </span>
                                <span>
                                  Status
                                </span>
                              </div>
                              <div className="flex flex-1 flex-col min-h-0">
                                <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex-1 gap-3 grid grid-cols-[1.7fr_2fr_0.6fr_0.8fr_0.9fr] items-center last:border-b-0 px-3" style={{"--hero14-delay": "0s"}}>
                                  <div className="flex gap-2.5 items-center min-w-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-medium text-sm truncate">
                                        Mira Stone
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        Harbor lead
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-1.5 min-w-0">
                                    <div className="flex gap-2 items-baseline justify-between">
                                      <span className="font-semibold tabular-nums text-sm">
                                        94%
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        Adds two closers
                                      </span>
                                    </div>
                                    <Progress className="[&_[data-slot=progress-indicator]]:bg-emerald-500 [&_[data-slot=progress-track]]:bg-neutral-200 [&_[data-slot=progress-track]]:h-1.5 dark:[&_[data-slot=progress-track]]:bg-neutral-800 gap-0 hero14-track w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="94" aria-valuetext="94%" role="progressbar" aria-label="Mira Stone coverage">
                                      <ProgressTrack progressing="">
                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "94%"}}></ProgressIndicator>
                                      </ProgressTrack>
                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                        x
                                      </span>
                                    </Progress>
                                  </div>
                                  <span className="tabular-nums text-sm">
                                    6h
                                  </span>
                                  <span className="tabular-nums text-sm">
                                    2
                                  </span>
                                  <span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/15 dark:border-emerald-500/25 dark:text-emerald-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-emerald-700 text-xs transition-shadow">
                                      Stable
                                    </Badge>
                                  </span>
                                </div>
                                <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex-1 gap-3 grid grid-cols-[1.7fr_2fr_0.6fr_0.8fr_0.9fr] items-center last:border-b-0 px-3" style={{"--hero14-delay": "-0.9s"}}>
                                  <div className="flex gap-2.5 items-center min-w-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-medium text-sm truncate">
                                        Leo Grant
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        Dispatch owner
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-1.5 min-w-0">
                                    <div className="flex gap-2 items-baseline justify-between">
                                      <span className="font-semibold tabular-nums text-sm">
                                        81%
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        Driver window tight
                                      </span>
                                    </div>
                                    <Progress className="[&_[data-slot=progress-indicator]]:bg-amber-400 [&_[data-slot=progress-track]]:bg-neutral-200 [&_[data-slot=progress-track]]:h-1.5 dark:[&_[data-slot=progress-track]]:bg-neutral-800 gap-0 hero14-track w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="81" aria-valuetext="81%" role="progressbar" aria-label="Leo Grant coverage">
                                      <ProgressTrack progressing="">
                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "81%"}}></ProgressIndicator>
                                      </ProgressTrack>
                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                        x
                                      </span>
                                    </Progress>
                                  </div>
                                  <span className="tabular-nums text-sm">
                                    3h
                                  </span>
                                  <span className="tabular-nums text-sm">
                                    5
                                  </span>
                                  <span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-amber-50 border border-amber-200 dark:bg-amber-500/15 dark:border-amber-500/25 dark:text-amber-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-amber-700 text-xs transition-shadow">
                                      Watch
                                    </Badge>
                                  </span>
                                </div>
                                <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex-1 gap-3 grid grid-cols-[1.7fr_2fr_0.6fr_0.8fr_0.9fr] items-center last:border-b-0 px-3" style={{"--hero14-delay": "-1.8s"}}>
                                  <div className="flex gap-2.5 items-center min-w-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-medium text-sm truncate">
                                        Nora Vale
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        Inventory coach
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-1.5 min-w-0">
                                    <div className="flex gap-2 items-baseline justify-between">
                                      <span className="font-semibold tabular-nums text-sm">
                                        72%
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        Cycle count open
                                      </span>
                                    </div>
                                    <Progress className="[&_[data-slot=progress-indicator]]:bg-rose-500 [&_[data-slot=progress-track]]:bg-neutral-200 [&_[data-slot=progress-track]]:h-1.5 dark:[&_[data-slot=progress-track]]:bg-neutral-800 gap-0 hero14-track w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="72" aria-valuetext="72%" role="progressbar" aria-label="Nora Vale coverage">
                                      <ProgressTrack progressing="">
                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "72%"}}></ProgressIndicator>
                                      </ProgressTrack>
                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                        x
                                      </span>
                                    </Progress>
                                  </div>
                                  <span className="tabular-nums text-sm">
                                    2h
                                  </span>
                                  <span className="tabular-nums text-sm">
                                    6
                                  </span>
                                  <span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-rose-50 border border-rose-200 dark:bg-rose-500/15 dark:border-rose-500/25 dark:text-rose-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-rose-700 text-xs transition-shadow">
                                      Critical
                                    </Badge>
                                  </span>
                                </div>
                                <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex-1 gap-3 grid grid-cols-[1.7fr_2fr_0.6fr_0.8fr_0.9fr] items-center last:border-b-0 px-3" style={{"--hero14-delay": "-2.7s"}}>
                                  <div className="flex gap-2.5 items-center min-w-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-medium text-sm truncate">
                                        Theo Park
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        Ramp lead
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-1.5 min-w-0">
                                    <div className="flex gap-2 items-baseline justify-between">
                                      <span className="font-semibold tabular-nums text-sm">
                                        89%
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        Training overlap
                                      </span>
                                    </div>
                                    <Progress className="[&_[data-slot=progress-indicator]]:bg-emerald-500 [&_[data-slot=progress-track]]:bg-neutral-200 [&_[data-slot=progress-track]]:h-1.5 dark:[&_[data-slot=progress-track]]:bg-neutral-800 gap-0 hero14-track w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="89" aria-valuetext="89%" role="progressbar" aria-label="Theo Park coverage">
                                      <ProgressTrack progressing="">
                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "89%"}}></ProgressIndicator>
                                      </ProgressTrack>
                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                        x
                                      </span>
                                    </Progress>
                                  </div>
                                  <span className="tabular-nums text-sm">
                                    5h
                                  </span>
                                  <span className="tabular-nums text-sm">
                                    3
                                  </span>
                                  <span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/15 dark:border-emerald-500/25 dark:text-emerald-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-emerald-700 text-xs transition-shadow">
                                      Stable
                                    </Badge>
                                  </span>
                                </div>
                                <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex-1 gap-3 grid grid-cols-[1.7fr_2fr_0.6fr_0.8fr_0.9fr] items-center last:border-b-0 px-3" style={{"--hero14-delay": "-3.6s"}}>
                                  <div className="flex gap-2.5 items-center min-w-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-medium text-sm truncate">
                                        Sana Qureshi
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        Uptown floater
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-1.5 min-w-0">
                                    <div className="flex gap-2 items-baseline justify-between">
                                      <span className="font-semibold tabular-nums text-sm">
                                        78%
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        Awaiting confirm
                                      </span>
                                    </div>
                                    <Progress className="[&_[data-slot=progress-indicator]]:bg-violet-500 [&_[data-slot=progress-track]]:bg-neutral-200 [&_[data-slot=progress-track]]:h-1.5 dark:[&_[data-slot=progress-track]]:bg-neutral-800 gap-0 hero14-track w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="78" aria-valuetext="78%" role="progressbar" aria-label="Sana Qureshi coverage">
                                      <ProgressTrack progressing="">
                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "78%"}}></ProgressIndicator>
                                      </ProgressTrack>
                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                        x
                                      </span>
                                    </Progress>
                                  </div>
                                  <span className="tabular-nums text-sm">
                                    4h
                                  </span>
                                  <span className="tabular-nums text-sm">
                                    4
                                  </span>
                                  <span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-violet-50 border border-violet-200 dark:bg-violet-500/15 dark:border-violet-500/25 dark:text-violet-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-violet-700 text-xs transition-shadow">
                                      Pending
                                    </Badge>
                                  </span>
                                </div>
                                <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex-1 gap-3 grid grid-cols-[1.7fr_2fr_0.6fr_0.8fr_0.9fr] items-center last:border-b-0 px-3" style={{"--hero14-delay": "-4.5s"}}>
                                  <div className="flex gap-2.5 items-center min-w-0">
                                    <Avatar className="size-8" size="default">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-medium text-sm truncate">
                                        Alex Johnson
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        Harbor stock
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-1.5 min-w-0">
                                    <div className="flex gap-2 items-baseline justify-between">
                                      <span className="font-semibold tabular-nums text-sm">
                                        91%
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                        Backfill locked
                                      </span>
                                    </div>
                                    <Progress className="[&_[data-slot=progress-indicator]]:bg-emerald-500 [&_[data-slot=progress-track]]:bg-neutral-200 [&_[data-slot=progress-track]]:h-1.5 dark:[&_[data-slot=progress-track]]:bg-neutral-800 gap-0 hero14-track w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="91" aria-valuetext="91%" role="progressbar" aria-label="Alex Johnson coverage">
                                      <ProgressTrack progressing="">
                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "91%"}}></ProgressIndicator>
                                      </ProgressTrack>
                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                        x
                                      </span>
                                    </Progress>
                                  </div>
                                  <span className="tabular-nums text-sm">
                                    7h
                                  </span>
                                  <span className="tabular-nums text-sm">
                                    1
                                  </span>
                                  <span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/15 dark:border-emerald-500/25 dark:text-emerald-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-emerald-700 text-xs transition-shadow">
                                      Stable
                                    </Badge>
                                  </span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                          <Card className="[--card-spacing:--spacing(4)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 flex-1 min-h-0 ring-neutral-900/8 text-neutral-900" size="sm">
                            <CardHeader>
                              <CardTitle className="leading-none text-base">
                                Action Queue
                              </CardTitle>
                              <CardDescription className="dark:text-neutral-400 text-neutral-500 text-sm">
                                Issues before cutoff
                              </CardDescription>
                              <CardAction>
                                <svg className="dark:text-neutral-500 lucide lucide-ellipsis size-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </CardAction>
                            </CardHeader>
                            <CardContent className="border border-neutral-200 dark:border-neutral-800 flex flex-1 flex-col min-h-0 overflow-hidden">
                              <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex flex-1 gap-2.5 items-center last:border-b-0 min-w-0 px-3">
                                <IconTile className="bg-neutral-50 border-neutral-200 dark:bg-neutral-800/50 dark:border-neutral-800 hero14-blink text-amber-500" variant="outline" size="default">
                                  <svg className="lucide lucide-refresh-cw size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                                    <path d="M21 3v5h-5"></path>
                                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                                    <path d="M8 16H3v5"></path>
                                  </svg>
                                </IconTile>
                                <div className="flex flex-1 flex-col min-w-0">
                                  <span className="font-medium text-sm truncate">
                                    3 swap approvals
                                  </span>
                                  <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                    before 2 PM
                                  </span>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-neutral-700 text-xs transition-shadow">
                                  Review
                                </Badge>
                              </div>
                              <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex flex-1 gap-2.5 items-center last:border-b-0 min-w-0 px-3">
                                <IconTile className="bg-neutral-50 border-neutral-200 dark:bg-neutral-800/50 dark:border-neutral-800 text-violet-500" variant="outline" size="default">
                                  <svg className="lucide lucide-mail size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                  </svg>
                                </IconTile>
                                <div className="flex flex-1 flex-col min-w-0">
                                  <span className="font-medium text-sm truncate">
                                    6 standby invites
                                  </span>
                                  <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                    north route
                                  </span>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-neutral-700 text-xs transition-shadow">
                                  Invite
                                </Badge>
                              </div>
                              <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex flex-1 gap-2.5 items-center last:border-b-0 min-w-0 px-3">
                                <IconTile className="bg-neutral-50 border-neutral-200 dark:bg-neutral-800/50 dark:border-neutral-800 text-rose-500" variant="outline" size="default">
                                  <svg className="lucide lucide-map-pin size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                  </svg>
                                </IconTile>
                                <div className="flex flex-1 flex-col min-w-0">
                                  <span className="font-medium text-sm truncate">
                                    1 lead missing
                                  </span>
                                  <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                    Uptown close
                                  </span>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-neutral-700 text-xs transition-shadow">
                                  Assign
                                </Badge>
                              </div>
                              <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex flex-1 gap-2.5 items-center last:border-b-0 min-w-0 px-3">
                                <IconTile className="bg-neutral-50 border-neutral-200 dark:bg-neutral-800/50 dark:border-neutral-800 text-emerald-500" variant="outline" size="default">
                                  <svg className="lucide lucide-link size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                  </svg>
                                </IconTile>
                                <div className="flex flex-1 flex-col min-w-0">
                                  <span className="font-medium text-sm truncate">
                                    Timecard sync
                                  </span>
                                  <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                    after approvals
                                  </span>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-neutral-700 text-xs transition-shadow">
                                  Sync
                                </Badge>
                              </div>
                              <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex flex-1 gap-2.5 items-center last:border-b-0 min-w-0 px-3">
                                <IconTile className="bg-neutral-50 border-neutral-200 dark:bg-neutral-800/50 dark:border-neutral-800 text-amber-500" variant="outline" size="default">
                                  <svg className="lucide lucide-calendar-clock size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                    <path d="M16 14v2.2l1.6 1"></path>
                                    <path d="M16 2v4"></path>
                                    <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                    <path d="M3 10h5"></path>
                                    <path d="M8 2v4"></path>
                                    <circle cx="16" cy="16" r="6"></circle>
                                  </svg>
                                </IconTile>
                                <div className="flex flex-1 flex-col min-w-0">
                                  <span className="font-medium text-sm truncate">
                                    2 route gaps
                                  </span>
                                  <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                    airport noon
                                  </span>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-neutral-700 text-xs transition-shadow">
                                  Fill
                                </Badge>
                              </div>
                              <div className="border-b border-neutral-100 dark:border-neutral-800/70 flex flex-1 gap-2.5 items-center last:border-b-0 min-w-0 px-3">
                                <IconTile className="bg-neutral-50 border-neutral-200 dark:bg-neutral-800/50 dark:border-neutral-800 text-emerald-500" variant="outline" size="default">
                                  <svg className="lucide lucide-shield-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                  </svg>
                                </IconTile>
                                <div className="flex flex-1 flex-col min-w-0">
                                  <span className="font-medium text-sm truncate">
                                    Break audit
                                  </span>
                                  <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                    two sites
                                  </span>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-neutral-700 text-xs transition-shadow">
                                  Check
                                </Badge>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        <Card className="[--card-spacing:--spacing(4)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 flex-1 min-h-0 ring-neutral-900/8 text-neutral-900" size="sm">
                          <CardHeader>
                            <CardTitle className="leading-none text-base">
                              Demand Mix
                            </CardTitle>
                            <CardDescription className="dark:text-neutral-400 text-neutral-500 text-sm">
                              Coverage supply against forecast
                            </CardDescription>
                            <CardAction className="flex gap-2 items-center">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-neutral-50 border border-neutral-200 dark:bg-neutral-800/50 dark:border-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-2 h-6 h-auto! min-w-6 outline-none px-2.5 py-1.5 relative rounded-full text-sm transition-shadow">
                                <span className="bg-teal-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                                <span className="dark:text-neutral-400 text-neutral-500 text-sm">
                                  Supply
                                </span>
                                <span className="font-semibold ms-2 tabular-nums text-sm">
                                  3,294
                                </span>
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-neutral-50 border border-neutral-200 dark:bg-neutral-800/50 dark:border-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-2 h-6 h-auto! min-w-6 outline-none px-2.5 py-1.5 relative rounded-full text-sm transition-shadow">
                                <span className="bg-rose-500 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                                <span className="dark:text-neutral-400 text-neutral-500 text-sm">
                                  Forecast
                                </span>
                                <span className="font-semibold ms-2 tabular-nums text-sm">
                                  3,043
                                </span>
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-neutral-50 border border-neutral-200 dark:bg-neutral-800/50 dark:border-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-2 h-6 h-auto! min-w-6 outline-none px-2.5 py-1.5 relative rounded-full text-sm transition-shadow">
                                <span className="bg-emerald-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                                <span className="dark:text-neutral-400 text-neutral-500 text-sm">
                                  Gap
                                </span>
                                <span className="dark:text-emerald-400 font-semibold ms-2 tabular-nums text-emerald-600 text-sm">
                                  +251
                                </span>
                              </Badge>
                            </CardAction>
                          </CardHeader>
                          <CardContent className="flex flex-1 flex-col gap-3 min-h-0">
                            <div className="flex items-center justify-between shrink-0">
                              <div className="flex gap-4 items-center">
                                <span className="dark:text-neutral-400 flex gap-1.5 items-center text-neutral-500 text-sm">
                                  <span className="bg-teal-400 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                  Scheduled
                                </span>
                                <span className="dark:text-neutral-400 flex gap-1.5 items-center text-neutral-500 text-sm">
                                  <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                  Standby
                                </span>
                                <span className="dark:text-neutral-400 flex gap-1.5 items-center text-neutral-500 text-sm">
                                  <span className="bg-rose-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                  Forecast
                                </span>
                              </div>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-violet-50 border border-violet-200 dark:bg-violet-500/15 dark:border-violet-500/25 dark:text-violet-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-violet-700 text-xs transition-shadow">
                                21 day view
                              </Badge>
                            </div>
                            <div className="flex-1 min-h-0 relative">
                              <div className="absolute border-dashed border-neutral-200 border-t dark:border-neutral-700 inset-x-0 top-0" aria-hidden="true"></div>
                              <div className="flex gap-1.5 h-full items-end">
                                <div className="flex flex-1 flex-col h-full hero14-grow justify-end min-w-0 origin-bottom" style={{"--hero14-delay": "0s"}}>
                                  <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "18.7135%"}}></span>
                                  <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "72.5146%"}}></span>
                                </div>
                                <div className="flex flex-1 flex-col h-full hero14-grow justify-end min-w-0 origin-bottom" style={{"--hero14-delay": "-0.16s"}}>
                                  <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "16.3743%"}}></span>
                                  <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "76.0234%"}}></span>
                                </div>
                                <div className="flex flex-1 flex-col h-full hero14-grow justify-end min-w-0 origin-bottom" style={{"--hero14-delay": "-0.32s"}}>
                                  <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "12.2807%"}}></span>
                                  <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "80.117%"}}></span>
                                </div>
                                <div className="flex flex-1 flex-col h-full hero14-grow justify-end min-w-0 origin-bottom" style={{"--hero14-delay": "-0.48s"}}>
                                  <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "22.2222%"}}></span>
                                  <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "67.2515%"}}></span>
                                </div>
                                <div className="flex flex-1 flex-col h-full hero14-grow justify-end min-w-0 origin-bottom" style={{"--hero14-delay": "-0.64s"}}>
                                  <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "11.1111%"}}></span>
                                  <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "86.5497%"}}></span>
                                </div>
                                <div className="flex flex-1 flex-col h-full hero14-grow justify-end min-w-0 origin-bottom" style={{"--hero14-delay": "-0.8s"}}>
                                  <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "25.731%"}}></span>
                                  <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "59.6491%"}}></span>
                                </div>
                                <div className="flex flex-1 flex-col h-full hero14-grow justify-end min-w-0 origin-bottom" style={{"--hero14-delay": "-0.96s"}}>
                                  <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "23.9766%"}}></span>
                                  <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "54.9708%"}}></span>
                                </div>
                                <div className="flex flex-1 flex-col h-full hero14-grow justify-end min-w-0 origin-bottom" style={{"--hero14-delay": "-1.12s"}}>
                                  <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "15.2047%"}}></span>
                                  <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "77.7778%"}}></span>
                                </div>
                                <div className="flex flex-1 flex-col h-full hero14-grow justify-end min-w-0 origin-bottom" style={{"--hero14-delay": "-1.28s"}}>
                                  <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "12.8655%"}}></span>
                                  <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "83.0409%"}}></span>
                                </div>
                                <div className="flex flex-1 flex-col h-full hero14-grow justify-end min-w-0 origin-bottom" style={{"--hero14-delay": "-1.44s"}}>
                                  <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "9.94152%"}}></span>
                                  <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "87.7193%"}}></span>
                                </div>
                                <div className="flex flex-1 flex-col h-full hero14-grow justify-end min-w-0 origin-bottom" style={{"--hero14-delay": "-1.6s"}}>
                                  <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "19.883%"}}></span>
                                  <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "74.269%"}}></span>
                                </div>
                                <div className="flex flex-1 flex-col h-full hero14-grow justify-end min-w-0 origin-bottom" style={{"--hero14-delay": "-1.76s"}}>
                                  <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "22.807%"}}></span>
                                  <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "69.5906%"}}></span>
                                </div>
                                <div className="flex flex-1 flex-col h-full hero14-grow justify-end min-w-0 origin-bottom" style={{"--hero14-delay": "-1.92s"}}>
                                  <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "26.9006%"}}></span>
                                  <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "61.4035%"}}></span>
                                </div>
                                <div className="flex flex-1 flex-col h-full hero14-grow justify-end min-w-0 origin-bottom" style={{"--hero14-delay": "-2.08s"}}>
                                  <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "25.1462%"}}></span>
                                  <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "56.7251%"}}></span>
                                </div>
                                <div className="flex flex-1 flex-col h-full hero14-grow justify-end min-w-0 origin-bottom" style={{"--hero14-delay": "-2.24s"}}>
                                  <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "14.0351%"}}></span>
                                  <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "81.2865%"}}></span>
                                </div>
                                <div className="flex flex-1 flex-col h-full hero14-grow justify-end min-w-0 origin-bottom" style={{"--hero14-delay": "-2.4s"}}>
                                  <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "10.5263%"}}></span>
                                  <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "89.4737%"}}></span>
                                </div>
                                <div className="flex flex-1 flex-col h-full hero14-grow justify-end min-w-0 origin-bottom" style={{"--hero14-delay": "-2.56s"}}>
                                  <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "8.18713%"}}></span>
                                  <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "91.8129%"}}></span>
                                </div>
                                <div className="flex flex-1 flex-col h-full hero14-grow justify-end min-w-0 origin-bottom" style={{"--hero14-delay": "-2.72s"}}>
                                  <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "18.1287%"}}></span>
                                  <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "77.7778%"}}></span>
                                </div>
                                <div className="flex flex-1 flex-col h-full hero14-grow justify-end min-w-0 origin-bottom" style={{"--hero14-delay": "-2.88s"}}>
                                  <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "21.0526%"}}></span>
                                  <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "70.7602%"}}></span>
                                </div>
                                <div className="flex flex-1 flex-col h-full hero14-grow justify-end min-w-0 origin-bottom" style={{"--hero14-delay": "-3.04s"}}>
                                  <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "24.5614%"}}></span>
                                  <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "63.7427%"}}></span>
                                </div>
                                <div className="flex flex-1 flex-col h-full hero14-grow justify-end min-w-0 origin-bottom" style={{"--hero14-delay": "-3.2s"}}>
                                  <span className="bg-[repeating-linear-gradient(45deg,var(--color-teal-400)_0px,var(--color-teal-400)_2px,transparent_2px,transparent_6px)] rounded-t-full w-full" aria-hidden="true" style={{height: "26.3158%"}}></span>
                                  <span className="bg-teal-400 w-full" aria-hidden="true" style={{height: "57.8947%"}}></span>
                                </div>
                              </div>
                              <svg className="absolute inset-0 pointer-events-none size-full" viewBox="0 0 300 100" preserveAspectRatio="none" aria-hidden="true">
                                <path className="hero14-draw stroke-rose-500" d="M0.00 18.13 L15.00 13.45 L30.00 11.70 L45.00 16.37 L60.00 8.19 L75.00 23.39 L90.00 29.82 L105.00 14.62 L120.00 9.94 L135.00 6.43 L150.00 12.87 L165.00 15.79 L180.00 20.47 L195.00 27.49 L210.00 12.87 L225.00 5.85 L240.00 2.34 L255.00 11.11 L270.00 14.62 L285.00 19.30 L300.00 25.73" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1200" vector-effect="non-scaling-stroke"></path>
                              </svg>
                            </div>
                            <div className="dark:text-neutral-500 flex items-center justify-between shrink-0 text-neutral-400 text-xs">
                              <span>
                                Mar 1
                              </span>
                              <span>
                                Mar 7
                              </span>
                              <span>
                                Mar 14
                              </span>
                              <span>
                                Mar 21
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                    <span className="-left-1/4 absolute bg-linear-to-r dark:via-white/10 from-transparent hero14-sweep inset-y-0 pointer-events-none to-transparent via-white/40 w-1/6" aria-hidden="true"></span>
                  </Card>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
