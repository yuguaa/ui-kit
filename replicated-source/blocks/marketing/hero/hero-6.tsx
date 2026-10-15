import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Avatar,
  AvatarFallback,
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
      <section className="bg-background flex items-center lg:px-8 min-h-svh overflow-hidden px-4 py-12 relative sm:px-6 w-full" aria-labelledby="hero-6-title">
        <div className="gap-8 grid grid-cols-1 items-center lg:grid-cols-2 lg:max-w-7xl max-w-xl mx-auto relative w-full">
          <div className="@container flex flex-col gap-6 items-start justify-center">
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-7 min-w-6 outline-none px-2 py-0.75 relative rounded-full text-foreground text-sm transition-shadow">
              <svg className="shrink-0 size-3.5" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.33333 0.538463H4.66667C2.38672 0.538463 0.538463 2.38672 0.538463 4.66667V9.33333C0.538463 11.6133 2.38672 13.4615 4.66667 13.4615H9.33333C11.6133 13.4615 13.4615 11.6133 13.4615 9.33333V4.66667C13.4615 2.38672 11.6133 0.538463 9.33333 0.538463ZM4.66667 0C2.08934 0 0 2.08934 0 4.66667V9.33333C0 11.9107 2.08934 14 4.66667 14H9.33333C11.9107 14 14 11.9107 14 9.33333V4.66667C14 2.08934 11.9107 0 9.33333 0H4.66667Z" fill="currentColor" opacity="0.2"></path>
                <g transform="translate(3.5238 3.5)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 4.46307V0.657716C0 0.294471 0.294471 0 0.657708 0C1.02097 0 1.31544 0.294471 1.31544 0.657716V4.46307C1.31544 5.13768 1.86229 5.68457 2.5369 5.68457H4.41613C5.09069 5.68457 5.63759 5.13768 5.63759 4.46307V2.60267C5.63759 2.23944 5.93205 1.94498 6.29531 1.94498C6.65854 1.94498 6.953 2.23944 6.953 2.60267V4.46307C6.953 5.8642 5.81721 6.99999 4.41613 6.99999H2.5369C1.13581 6.99999 0 5.8642 0 4.46307Z" fill="currentColor"></path>
                </g>
                <g transform="translate(9.1616 3.5)">
                  <path d="M0.65772 1.31544C1.02097 1.31544 1.31544 1.02097 1.31544 0.65772C1.31544 0.294471 1.02097 0 0.65772 0C0.294471 0 0 0.294471 0 0.65772C0 1.02097 0.294471 1.31544 0.65772 1.31544Z" fill="currentColor"></path>
                </g>
              </svg>
              {"Meet 485+ Blocks in NeUI Pro"}
              <svg className="lucide lucide-arrow-right size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Badge>
            <h1 className="@md:text-5xl @xl:leading-none @xl:text-6xl font-semibold leading-tight text-4xl text-foreground tracking-tight" id="hero-6-title">
              <span className="@xl:block">
                {"Modern shadcn/ui"}
              </span>
              <span className="@xl:block text-muted-foreground">
                {"made for MCP"}
              </span>
            </h1>
            <p className="leading-6 text-base text-muted-foreground">
              {"A design-led shadcn/ui platform with production-ready blocks, MCP tools, reusable patterns, and a curated registry for building polished interfaces faster."}
            </p>
            <div className="flex flex-wrap gap-2 items-center">
              <Button href="#" role="button" tabIndex="0">
                {"Buy Now"}
              </Button>
              <Button href="#" role="button" tabIndex="0">
                {"Explore"}
              </Button>
            </div>
          </div>
          <div className="@container w-full">
            <div className="aspect-[8/5] border border-input/30 overflow-hidden relative rounded-xl">
              <img className="absolute inset-0 object-cover pointer-events-none size-full" alt="" aria-hidden="true" width="1600" height="1000" decoding="async" fetchpriority="high" src="https://images.unsplash.com/photo-1563952532281-c445dca44510?w=1600&h=1000&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1.25&q=70&auto=format" />
              <div className="-bottom-[4cqw] -right-[4cqw] absolute bg-white/25 dark:bg-white/15 left-[6.25cqw] rounded-md top-[6.25cqw]" aria-hidden="true"></div>
              <div className="absolute h-[1024px] left-[7.5cqw] origin-top-left top-[7.5cqw] w-[1820px]" style={{transform: "scale(calc(100cqw / 1600px))"}}>
                <Card className="[--card-spacing:--spacing(1.5)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 gap-0 px-1.5 ring-neutral-900/10 shadow-2xl size-full text-neutral-900" size="default" role="img" aria-label="Edge security console showing signal risk, threat vectors, network flow, cluster load and the active threat queue">
                  <style dangerouslySetInnerHTML={{ __html: "\n/* Each loop settles early and then holds, so what reads is a console that has\n   just refreshed rather than a banner mid-cycle. */\n@keyframes hero6-grow {\n  0% { transform: scaleY(0.55) }\n  46%, 100% { transform: scaleY(1) }\n}\n@keyframes hero6-rise {\n  0% { opacity: 0.55; transform: translateY(2px) }\n  18%, 100% { opacity: 1; transform: translateY(0) }\n}\n@keyframes hero6-fill {\n  0% { transform: scaleX(0.12) }\n  40%, 100% { transform: scaleX(1) }\n}\n@keyframes hero6-scan {\n  0% { opacity: 0; transform: translateX(0) }\n  12%, 72% { opacity: 1 }\n  100% { opacity: 0; transform: translateX(380px) }\n}\n@keyframes hero6-blink {\n  0%, 100% { opacity: 1 }\n  50% { opacity: 0.45 }\n}\n\n/* The delay is a custom property, never an inline `animation` shorthand: a\n   shorthand would outrank the reduced-motion rule at the bottom. */\n.hero6-grow,\n.hero6-rise,\n.hero6-track [data-slot=\"progress-indicator\"] {\n  animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);\n  animation-iteration-count: infinite;\n  animation-fill-mode: both;\n  animation-delay: var(--hero6-delay, 0s);\n}\n\n.hero6-grow { animation-name: hero6-grow; animation-duration: 11.3s; }\n.hero6-rise { animation-name: hero6-rise; animation-duration: 13.7s; }\n\n/* The primitive owns the indicator node, so the fill is reached through its\n   data-slot instead of a class on the element itself. */\n.hero6-track [data-slot=\"progress-indicator\"] {\n  transform-origin: left center;\n  animation-name: hero6-fill;\n  animation-duration: 10.1s;\n}\n\n.hero6-blink {\n  animation: hero6-blink 3.7s ease-in-out var(--hero6-delay, 0s) infinite;\n}\n\n.hero6-scan {\n  opacity: 0;\n  animation: hero6-scan 15.5s linear var(--hero6-delay, -5.5s) infinite;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .hero6-grow,\n  .hero6-rise,\n  .hero6-blink,\n  .hero6-scan,\n  .hero6-track [data-slot=\"progress-indicator\"] {\n    animation: none;\n  }\n  .hero6-scan { opacity: 0; }\n}\n" }} />
                  <Card className="[--card-spacing:0px] bg-white border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-50 flex-1 flex-row gap-0 min-h-0 ring-0 shadow-none text-neutral-900" size="default">
                    <div className="bg-neutral-50 border-neutral-200 border-r dark:bg-neutral-950 dark:border-neutral-800 flex flex-col gap-2 p-2 shrink-0 w-64">
                      <div className="flex gap-2 items-center px-2 py-1.5">
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
                        <span className="font-semibold text-sm">
                          {"NeUI"}
                        </span>
                        <svg className="dark:text-neutral-500 lucide lucide-panel-left ms-auto size-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine" aria-hidden="true">
                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                          <path d="M9 3v18"></path>
                        </svg>
                      </div>
                      <Item className="bg-white border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-500 px-2 py-1.5 text-neutral-400" variant="outline" size="xs">
                        <svg className="lucide lucide-search size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                          <path d="m21 21-4.34-4.34"></path>
                          <circle cx="11" cy="11" r="8"></circle>
                        </svg>
                        {"Search..."}
                        <Kbd className="bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-500 ms-auto px-1.5 text-neutral-400">
                          {"⌘K"}
                        </Kbd>
                      </Item>
                      <div className="dark:text-neutral-500 font-medium pt-1.5 px-2 text-neutral-400 text-xs">
                        {"Platform"}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <div className="contents">
                          <Item className="bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-50 font-medium px-2 py-1.5 text-neutral-900" variant="default" size="xs">
                            <svg className="lucide lucide-layout-dashboard size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                              <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                              <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                              <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                              <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                            </svg>
                            <span className="truncate">
                              {"Overview"}
                            </span>
                          </Item>
                        </div>
                        <div className="contents">
                          <Item className="dark:text-neutral-400 px-2 py-1.5 text-neutral-600" variant="default" size="xs">
                            <svg className="lucide lucide-users size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                            </svg>
                            <span className="truncate">
                              {"Customers"}
                            </span>
                            <svg className="dark:text-neutral-500 lucide lucide-chevron-right ms-auto rotate-90 size-3.5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                              <path d="m9 18 6-6-6-6"></path>
                            </svg>
                          </Item>
                          <Item className="dark:text-neutral-400 pe-2 ps-8 py-1.5 text-neutral-500" variant="default" size="xs">
                            <span className="truncate">
                              {"Segments"}
                            </span>
                          </Item>
                          <Item className="dark:text-neutral-400 pe-2 ps-8 py-1.5 text-neutral-500" variant="default" size="xs">
                            <span className="truncate">
                              {"Accounts"}
                            </span>
                          </Item>
                          <Item className="dark:text-neutral-400 pe-2 ps-8 py-1.5 text-neutral-500" variant="default" size="xs">
                            <span className="truncate">
                              {"Health Scores"}
                            </span>
                          </Item>
                        </div>
                        <div className="contents">
                          <Item className="dark:text-neutral-400 px-2 py-1.5 text-neutral-600" variant="default" size="xs">
                            <svg className="lucide lucide-layers size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                              <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                              <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                              <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                            </svg>
                            <span className="truncate">
                              {"Subscriptions"}
                            </span>
                            <svg className="dark:text-neutral-500 lucide lucide-chevron-right ms-auto size-3.5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                              <path d="m9 18 6-6-6-6"></path>
                            </svg>
                          </Item>
                        </div>
                        <div className="contents">
                          <Item className="dark:text-neutral-400 px-2 py-1.5 text-neutral-600" variant="default" size="xs">
                            <svg className="lucide lucide-wallet size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WalletIcon" tabler="IconWallet" hugeicons="Wallet01Icon" phosphor="WalletIcon" remixicon="RiWallet3Line" aria-hidden="true">
                              <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                              <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                            </svg>
                            <span className="truncate">
                              {"Revenue"}
                            </span>
                            <span className="bg-emerald-500 ms-auto rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                          </Item>
                        </div>
                        <div className="contents">
                          <Item className="dark:text-neutral-400 px-2 py-1.5 text-neutral-600" variant="default" size="xs">
                            <svg className="lucide lucide-zap size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                            </svg>
                            <span className="truncate">
                              {"Automation"}
                            </span>
                          </Item>
                        </div>
                        <div className="contents">
                          <Item className="dark:text-neutral-400 px-2 py-1.5 text-neutral-600" variant="default" size="xs">
                            <svg className="lucide lucide-life-buoy size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LifeBuoyIcon" tabler="IconLifebuoy" hugeicons="LifebuoyIcon" phosphor="LifebuoyIcon" remixicon="RiLifebuoyLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="m4.93 4.93 4.24 4.24"></path>
                              <path d="m14.83 9.17 4.24-4.24"></path>
                              <path d="m14.83 14.83 4.24 4.24"></path>
                              <path d="m9.17 14.83-4.24 4.24"></path>
                              <circle cx="12" cy="12" r="4"></circle>
                            </svg>
                            <span className="truncate">
                              {"Support"}
                            </span>
                          </Item>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col min-w-0">
                      <div className="border-b border-neutral-200 dark:border-neutral-800 flex gap-2 h-10 items-center px-3 shrink-0">
                        <svg className="dark:text-neutral-500 lucide lucide-share-2 lucide-share2 size-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Share2Icon" tabler="IconShare" hugeicons="Share08Icon" phosphor="ShareNetworkIcon" remixicon="RiShareLine" aria-hidden="true">
                          <circle cx="18" cy="5" r="3"></circle>
                          <circle cx="6" cy="12" r="3"></circle>
                          <circle cx="18" cy="19" r="3"></circle>
                          <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                          <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                        </svg>
                        <span className="dark:text-neutral-400 text-neutral-500 text-sm">
                          {"Workspace"}
                        </span>
                        <svg className="dark:text-neutral-600 lucide lucide-chevron-right size-3.5 text-neutral-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                        <span className="dark:text-neutral-400 flex gap-1.5 items-center text-neutral-500 text-sm">
                          <Avatar className="size-5" size="default">
                            <AvatarFallback className="bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-200 text-[9px] text-neutral-600">
                              {"EO"}
                            </AvatarFallback>
                          </Avatar>
                          {"@edge-ops"}
                        </span>
                        <svg className="dark:text-neutral-600 lucide lucide-chevron-right size-3.5 text-neutral-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                        <span className="font-medium text-sm">
                          {"Projects"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-6 ms-auto outline-none px-2 py-0.75 relative rounded-full text-neutral-600 text-xs transition-shadow">
                          <svg className="dark:text-rose-400 lucide lucide-activity size-3 text-rose-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                          </svg>
                          {"Live"}
                        </Badge>
                      </div>
                      <div className="bg-neutral-50 dark:bg-neutral-950 flex flex-1 flex-col gap-4 min-h-0 p-4">
                        <div className="gap-4 grid grid-cols-4 shrink-0">
                          <Card className="[--card-spacing:--spacing(4)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 h-[168px] ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hero6-delay": "0s"}}>
                            <CardContent className="flex flex-1 flex-col gap-3 justify-between min-h-0">
                              <div className="flex flex-col gap-0.5">
                                <span className="font-semibold text-base truncate">
                                  {"Signal Risk"}
                                </span>
                                <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                  {"Threat Index"}
                                </span>
                              </div>
                              <div className="flex gap-2 items-end justify-between">
                                <span className="font-semibold hero6-rise leading-none tabular-nums text-3xl tracking-tight truncate">
                                  {"Elevated"}
                                </span>
                                <span className="block h-[34px] hero6-grow origin-bottom shrink-0 w-[104px]" aria-hidden="true" style={{"--hero6-delay": "0s"}}>
                                  <svg className="size-full" viewBox="0 0 100 34" preserveAspectRatio="none">
                                    <path className="stroke-rose-500" d="M0.00 21.08 L11.11 16.32 L22.22 22.44 L33.33 13.26 L44.44 19.04 L55.56 10.20 L66.67 17.68 L77.78 6.12 L88.89 14.28 L100.00 8.84" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                  </svg>
                                </span>
                              </div>
                              <div className="flex gap-2 items-center">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-rose-50 border border-rose-200 dark:bg-rose-500/15 dark:border-rose-500/25 dark:text-rose-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-6 outline-none px-2 py-0.75 relative rounded-full text-rose-700 text-sm transition-shadow">
                                  {"+12.5%"}
                                </Badge>
                                <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                  {"5 cases"}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                          <Card className="[--card-spacing:--spacing(4)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 h-[168px] ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hero6-delay": "-0.9s"}}>
                            <CardContent className="flex flex-1 flex-col gap-3 justify-between min-h-0">
                              <div className="flex flex-col gap-0.5">
                                <span className="font-semibold text-base truncate">
                                  {"Mesh Uptime"}
                                </span>
                                <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                  {"Service Health"}
                                </span>
                              </div>
                              <div className="flex gap-2 items-end justify-between">
                                <span className="font-semibold hero6-rise leading-none tabular-nums text-3xl tracking-tight truncate">
                                  {"99.98%"}
                                </span>
                                <span className="block h-[34px] hero6-grow origin-bottom shrink-0 w-[104px]" aria-hidden="true" style={{"--hero6-delay": "-0.9s"}}>
                                  <svg className="size-full" viewBox="0 0 100 34" preserveAspectRatio="none">
                                    <path className="stroke-emerald-500" d="M0.00 12.92 L11.11 14.28 L22.22 11.56 L33.33 13.60 L44.44 9.86 L55.56 12.24 L66.67 8.16 L77.78 10.20 L88.89 6.80 L100.00 4.76" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                  </svg>
                                </span>
                              </div>
                              <div className="flex gap-2 items-center">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/15 dark:border-emerald-500/25 dark:text-emerald-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-6 outline-none px-2 py-0.75 relative rounded-full text-emerald-700 text-sm transition-shadow">
                                  {"+0.2%"}
                                </Badge>
                                <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                  {"38 zones"}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                          <Card className="[--card-spacing:--spacing(4)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 h-[168px] ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hero6-delay": "-1.8s"}}>
                            <CardContent className="flex flex-1 flex-col gap-3 justify-between min-h-0">
                              <div className="flex flex-col gap-0.5">
                                <span className="font-semibold text-base truncate">
                                  {"Edge Traffic"}
                                </span>
                                <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                  {"Scrubbed Load"}
                                </span>
                              </div>
                              <div className="flex gap-2 items-end justify-between">
                                <span className="font-semibold hero6-rise leading-none tabular-nums text-3xl tracking-tight truncate">
                                  {"4.8 GB/s"}
                                </span>
                                <span className="block h-[34px] hero6-grow origin-bottom shrink-0 w-[104px]" aria-hidden="true" style={{"--hero6-delay": "-1.8s"}}>
                                  <svg className="size-full" viewBox="0 0 100 34" preserveAspectRatio="none">
                                    <path className="stroke-amber-500" d="M0.00 10.20 L11.11 12.24 L22.22 8.84 L33.33 15.30 L44.44 10.88 L55.56 17.00 L66.67 12.92 L77.78 18.36 L88.89 14.28 L100.00 19.04" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                  </svg>
                                </span>
                              </div>
                              <div className="flex gap-2 items-center">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-neutral-50 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-6 outline-none px-2 py-0.75 relative rounded-full text-neutral-600 text-sm transition-shadow">
                                  {"-3.1%"}
                                </Badge>
                                <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                  {"clean flow"}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                          <Card className="[--card-spacing:--spacing(4)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 h-[168px] ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hero6-delay": "-2.7s"}}>
                            <CardContent className="flex flex-1 flex-col gap-3 justify-between min-h-0">
                              <div className="flex flex-col gap-0.5">
                                <span className="font-semibold text-base truncate">
                                  {"Session Trace"}
                                </span>
                                <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                  {"Global Edge"}
                                </span>
                              </div>
                              <div className="flex gap-2 items-end justify-between">
                                <span className="font-semibold hero6-rise leading-none tabular-nums text-3xl tracking-tight truncate">
                                  {"18.4K"}
                                </span>
                                <span className="block h-[34px] hero6-grow origin-bottom shrink-0 w-[104px]" aria-hidden="true" style={{"--hero6-delay": "-2.7s"}}>
                                  <svg className="size-full" viewBox="0 0 100 34" preserveAspectRatio="none">
                                    <path className="stroke-sky-500" d="M0.00 19.04 L11.11 17.00 L22.22 18.36 L33.33 14.28 L44.44 16.32 L55.56 12.24 L66.67 13.60 L77.78 9.52 L88.89 10.88 L100.00 7.48" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                  </svg>
                                </span>
                              </div>
                              <div className="flex gap-2 items-center">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/15 dark:border-emerald-500/25 dark:text-emerald-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-6 outline-none px-2 py-0.75 relative rounded-full text-emerald-700 text-sm transition-shadow">
                                  {"+6.4%"}
                                </Badge>
                                <span className="dark:text-neutral-400 text-neutral-500 text-sm truncate">
                                  {"9 regions"}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        <div className="gap-4 grid grid-cols-2 h-[370px] shrink-0">
                          <Card className="[--card-spacing:--spacing(4)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 min-h-0 ring-neutral-900/8 text-neutral-900" size="sm">
                            <CardHeader>
                              <CardTitle className="font-semibold leading-none text-base">
                                {"Threat Vectors"}
                              </CardTitle>
                              <CardDescription className="dark:text-neutral-400 text-neutral-500 text-sm">
                                {"Blocked Signals"}
                              </CardDescription>
                              <CardAction className="flex gap-3 items-center">
                                <span className="dark:text-neutral-400 flex gap-1.5 items-center text-neutral-500 text-sm">
                                  <span className="bg-sky-400 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                  {"Blocked"}
                                </span>
                                <span className="dark:text-neutral-400 flex gap-1.5 items-center text-neutral-500 text-sm">
                                  <span className="bg-indigo-300 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                  {"Watched"}
                                </span>
                              </CardAction>
                            </CardHeader>
                            <CardContent className="flex flex-1 flex-col gap-2 min-h-0">
                              <div className="flex flex-1 gap-2 items-end min-h-0">
                                <div className="flex flex-1 flex-col gap-2 h-full items-center justify-end min-w-0">
                                  <div className="flex flex-1 gap-1 items-end justify-center min-h-0 w-full">
                                    <span className="bg-sky-400 hero6-grow origin-bottom rounded-t-full w-7" aria-hidden="true" style={{height: "56%", "--hero6-delay": "-3.8s"}}></span>
                                    <span className="bg-[repeating-linear-gradient(45deg,var(--color-indigo-400)_0px,var(--color-indigo-400)_2px,transparent_2px,transparent_6px)] hero6-grow origin-bottom rounded-t-full w-7" aria-hidden="true" style={{height: "40%", "--hero6-delay": "-3.8299999999999996s"}}></span>
                                  </div>
                                  <span className="dark:text-neutral-500 text-neutral-400 text-xs truncate">
                                    {"Bot"}
                                  </span>
                                </div>
                                <div className="flex flex-1 flex-col gap-2 h-full items-center justify-end min-w-0">
                                  <div className="flex flex-1 gap-1 items-end justify-center min-h-0 w-full">
                                    <span className="bg-sky-400 hero6-grow origin-bottom rounded-t-full w-7" aria-hidden="true" style={{height: "88%", "--hero6-delay": "-3.86s"}}></span>
                                    <span className="bg-[repeating-linear-gradient(45deg,var(--color-indigo-400)_0px,var(--color-indigo-400)_2px,transparent_2px,transparent_6px)] hero6-grow origin-bottom rounded-t-full w-7" aria-hidden="true" style={{height: "62%", "--hero6-delay": "-3.8899999999999997s"}}></span>
                                  </div>
                                  <span className="dark:text-neutral-500 text-neutral-400 text-xs truncate">
                                    {"Phish"}
                                  </span>
                                </div>
                                <div className="flex flex-1 flex-col gap-2 h-full items-center justify-end min-w-0">
                                  <div className="flex flex-1 gap-1 items-end justify-center min-h-0 w-full">
                                    <span className="bg-sky-400 hero6-grow origin-bottom rounded-t-full w-7" aria-hidden="true" style={{height: "51%", "--hero6-delay": "-3.92s"}}></span>
                                    <span className="bg-[repeating-linear-gradient(45deg,var(--color-indigo-400)_0px,var(--color-indigo-400)_2px,transparent_2px,transparent_6px)] hero6-grow origin-bottom rounded-t-full w-7" aria-hidden="true" style={{height: "34%", "--hero6-delay": "-3.9499999999999997s"}}></span>
                                  </div>
                                  <span className="dark:text-neutral-500 text-neutral-400 text-xs truncate">
                                    {"DDoS"}
                                  </span>
                                </div>
                                <div className="flex flex-1 flex-col gap-2 h-full items-center justify-end min-w-0">
                                  <div className="flex flex-1 gap-1 items-end justify-center min-h-0 w-full">
                                    <span className="bg-sky-400 hero6-grow origin-bottom rounded-t-full w-7" aria-hidden="true" style={{height: "46%", "--hero6-delay": "-3.98s"}}></span>
                                    <span className="bg-[repeating-linear-gradient(45deg,var(--color-indigo-400)_0px,var(--color-indigo-400)_2px,transparent_2px,transparent_6px)] hero6-grow origin-bottom rounded-t-full w-7" aria-hidden="true" style={{height: "30%", "--hero6-delay": "-4.01s"}}></span>
                                  </div>
                                  <span className="dark:text-neutral-500 text-neutral-400 text-xs truncate">
                                    {"Inject"}
                                  </span>
                                </div>
                                <div className="flex flex-1 flex-col gap-2 h-full items-center justify-end min-w-0">
                                  <div className="flex flex-1 gap-1 items-end justify-center min-h-0 w-full">
                                    <span className="bg-sky-400 hero6-grow origin-bottom rounded-t-full w-7" aria-hidden="true" style={{height: "92%", "--hero6-delay": "-4.04s"}}></span>
                                    <span className="bg-[repeating-linear-gradient(45deg,var(--color-indigo-400)_0px,var(--color-indigo-400)_2px,transparent_2px,transparent_6px)] hero6-grow origin-bottom rounded-t-full w-7" aria-hidden="true" style={{height: "71%", "--hero6-delay": "-4.07s"}}></span>
                                  </div>
                                  <span className="dark:text-neutral-500 text-neutral-400 text-xs truncate">
                                    {"Auth"}
                                  </span>
                                </div>
                                <div className="flex flex-1 flex-col gap-2 h-full items-center justify-end min-w-0">
                                  <div className="flex flex-1 gap-1 items-end justify-center min-h-0 w-full">
                                    <span className="bg-sky-400 hero6-grow origin-bottom rounded-t-full w-7" aria-hidden="true" style={{height: "72%", "--hero6-delay": "-4.1s"}}></span>
                                    <span className="bg-[repeating-linear-gradient(45deg,var(--color-indigo-400)_0px,var(--color-indigo-400)_2px,transparent_2px,transparent_6px)] hero6-grow origin-bottom rounded-t-full w-7" aria-hidden="true" style={{height: "49%", "--hero6-delay": "-4.13s"}}></span>
                                  </div>
                                  <span className="dark:text-neutral-500 text-neutral-400 text-xs truncate">
                                    {"Probe"}
                                  </span>
                                </div>
                                <div className="flex flex-1 flex-col gap-2 h-full items-center justify-end min-w-0">
                                  <div className="flex flex-1 gap-1 items-end justify-center min-h-0 w-full">
                                    <span className="bg-sky-400 hero6-grow origin-bottom rounded-t-full w-7" aria-hidden="true" style={{height: "66%", "--hero6-delay": "-4.16s"}}></span>
                                    <span className="bg-[repeating-linear-gradient(45deg,var(--color-indigo-400)_0px,var(--color-indigo-400)_2px,transparent_2px,transparent_6px)] hero6-grow origin-bottom rounded-t-full w-7" aria-hidden="true" style={{height: "45%", "--hero6-delay": "-4.19s"}}></span>
                                  </div>
                                  <span className="dark:text-neutral-500 text-neutral-400 text-xs truncate">
                                    {"Exfil"}
                                  </span>
                                </div>
                                <div className="flex flex-1 flex-col gap-2 h-full items-center justify-end min-w-0">
                                  <div className="flex flex-1 gap-1 items-end justify-center min-h-0 w-full">
                                    <span className="bg-sky-400 hero6-grow origin-bottom rounded-t-full w-7" aria-hidden="true" style={{height: "57%", "--hero6-delay": "-4.22s"}}></span>
                                    <span className="bg-[repeating-linear-gradient(45deg,var(--color-indigo-400)_0px,var(--color-indigo-400)_2px,transparent_2px,transparent_6px)] hero6-grow origin-bottom rounded-t-full w-7" aria-hidden="true" style={{height: "38%", "--hero6-delay": "-4.25s"}}></span>
                                  </div>
                                  <span className="dark:text-neutral-500 text-neutral-400 text-xs truncate">
                                    {"Recon"}
                                  </span>
                                </div>
                                <div className="flex flex-1 flex-col gap-2 h-full items-center justify-end min-w-0">
                                  <div className="flex flex-1 gap-1 items-end justify-center min-h-0 w-full">
                                    <span className="bg-sky-400 hero6-grow origin-bottom rounded-t-full w-7" aria-hidden="true" style={{height: "27%", "--hero6-delay": "-4.279999999999999s"}}></span>
                                    <span className="bg-[repeating-linear-gradient(45deg,var(--color-indigo-400)_0px,var(--color-indigo-400)_2px,transparent_2px,transparent_6px)] hero6-grow origin-bottom rounded-t-full w-7" aria-hidden="true" style={{height: "18%", "--hero6-delay": "-4.31s"}}></span>
                                  </div>
                                  <span className="dark:text-neutral-500 text-neutral-400 text-xs truncate">
                                    {"DNS"}
                                  </span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                          <Card className="[--card-spacing:--spacing(4)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 min-h-0 ring-neutral-900/8 text-neutral-900" size="sm">
                            <CardHeader>
                              <CardTitle className="font-semibold leading-none text-base">
                                {"Network Flow"}
                              </CardTitle>
                              <CardDescription className="dark:text-neutral-400 text-neutral-500 text-sm">
                                {"API and webhooks"}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-1 flex-col gap-2 min-h-0">
                              <div className="flex gap-3 items-center shrink-0">
                                <span className="dark:text-neutral-400 flex gap-1.5 items-center text-neutral-500 text-sm">
                                  <span className="bg-amber-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                  {"API"}
                                </span>
                                <span className="dark:text-neutral-400 flex gap-1.5 items-center text-neutral-500 text-sm">
                                  <span className="bg-emerald-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                  {"Hooks"}
                                </span>
                              </div>
                              <svg className="flex-1 min-h-0 w-full" viewBox="0 0 300 120" preserveAspectRatio="none" aria-hidden="true">
                                <defs>
                                  <lineargradient className="text-amber-500" id="_r_0_-api" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.22"></stop>
                                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.02"></stop>
                                  </lineargradient>
                                  <lineargradient className="text-emerald-500" id="_r_0_-hook" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.2"></stop>
                                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.02"></stop>
                                  </lineargradient>
                                </defs>
                                <path d="M0 58 C 26 53 40 22 68 19 C 96 16 110 44 138 41 C 166 38 180 12 208 10 C 236 8 258 22 300 15 L300 120 L0 120 Z" fill="url(#_r_0_-api)"></path>
                                <path d="M0 88 C 26 85 40 68 68 65 C 96 62 110 79 138 76 C 166 73 180 52 208 49 C 236 46 258 60 300 53 L300 120 L0 120 Z" fill="url(#_r_0_-hook)"></path>
                                <path className="stroke-amber-500" d="M0 58 C 26 53 40 22 68 19 C 96 16 110 44 138 41 C 166 38 180 12 208 10 C 236 8 258 22 300 15" fill="none" strokeWidth="1.5" strokeLinecap="round" vector-effect="non-scaling-stroke"></path>
                                <path className="stroke-emerald-500" d="M0 88 C 26 85 40 68 68 65 C 96 62 110 79 138 76 C 166 73 180 52 208 49 C 236 46 258 60 300 53" fill="none" strokeWidth="1.5" strokeLinecap="round" vector-effect="non-scaling-stroke"></path>
                                <g className="hero6-scan">
                                  <rect className="fill-sky-500/40" x="0" y="0" width="1" height="120"></rect>
                                </g>
                                <line className="dark:stroke-neutral-700 stroke-neutral-200" x1="0" y1="119.5" x2="300" y2="119.5" strokeWidth="1" vector-effect="non-scaling-stroke"></line>
                              </svg>
                              <div className="dark:text-neutral-500 flex items-center justify-between shrink-0 text-neutral-400 text-xs">
                                <span>
                                  {"Feb"}
                                </span>
                                <span>
                                  {"Mar"}
                                </span>
                                <span>
                                  {"Apr"}
                                </span>
                                <span>
                                  {"May"}
                                </span>
                                <span>
                                  {"Jun"}
                                </span>
                                <span>
                                  {"Jul"}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        <div className="flex gap-4 h-[370px] shrink-0">
                          <Card className="[--card-spacing:--spacing(4)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 flex-2 min-h-0 ring-neutral-900/8 text-neutral-900" size="sm">
                            <CardHeader>
                              <CardTitle className="font-semibold leading-none text-base">
                                {"Cluster Load"}
                              </CardTitle>
                              <CardDescription className="dark:text-neutral-400 flex gap-3 items-center text-neutral-500 text-sm">
                                <span className="dark:text-neutral-400 flex gap-1.5 items-center text-neutral-500 text-sm">
                                  <span className="bg-neutral-300 dark:bg-neutral-600 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                  {"Normal"}
                                </span>
                                <span className="dark:text-neutral-400 flex gap-1.5 items-center text-neutral-500 text-sm">
                                  <span className="bg-amber-400 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                  {"Warn"}
                                </span>
                                <span className="dark:text-neutral-400 flex gap-1.5 items-center text-neutral-500 text-sm">
                                  <span className="bg-rose-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                  {"Critical"}
                                </span>
                              </CardDescription>
                              <CardAction className="flex gap-2 items-center">
                                <span className="dark:text-neutral-400 text-neutral-500 text-sm">
                                  {"46 Nodes"}
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-amber-50 border border-amber-200 dark:bg-amber-500/15 dark:border-amber-500/25 dark:text-amber-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-amber-700 text-xs transition-shadow">
                                  {"3 Warn"}
                                </Badge>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-rose-50 border border-rose-200 dark:bg-rose-500/15 dark:border-rose-500/25 dark:text-rose-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-rose-700 text-xs transition-shadow">
                                  {"2 Critical"}
                                </Badge>
                              </CardAction>
                            </CardHeader>
                            <CardContent className="flex flex-1 gap-1 items-end min-h-0">
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "44%", "--hero6-delay": "-7.6s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "52%", "--hero6-delay": "-7.63s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "39%", "--hero6-delay": "-7.659999999999999s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "58%", "--hero6-delay": "-7.6899999999999995s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "46%", "--hero6-delay": "-7.72s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "63%", "--hero6-delay": "-7.75s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "41%", "--hero6-delay": "-7.779999999999999s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "55%", "--hero6-delay": "-7.81s"}}></span>
                              <span className="bg-rose-500 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "92%", "--hero6-delay": "-7.84s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "48%", "--hero6-delay": "-7.869999999999999s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "61%", "--hero6-delay": "-7.8999999999999995s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "43%", "--hero6-delay": "-7.93s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "57%", "--hero6-delay": "-7.96s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "40%", "--hero6-delay": "-7.989999999999999s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "50%", "--hero6-delay": "-8.02s"}}></span>
                              <span className="bg-amber-400 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "76%", "--hero6-delay": "-8.049999999999999s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "45%", "--hero6-delay": "-8.08s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "59%", "--hero6-delay": "-8.11s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "38%", "--hero6-delay": "-8.14s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "54%", "--hero6-delay": "-8.17s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "47%", "--hero6-delay": "-8.2s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "62%", "--hero6-delay": "-8.23s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "42%", "--hero6-delay": "-8.26s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "56%", "--hero6-delay": "-8.29s"}}></span>
                              <span className="bg-rose-500 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "96%", "--hero6-delay": "-8.32s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "49%", "--hero6-delay": "-8.35s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "60%", "--hero6-delay": "-8.379999999999999s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "44%", "--hero6-delay": "-8.41s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "53%", "--hero6-delay": "-8.44s"}}></span>
                              <span className="bg-amber-400 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "81%", "--hero6-delay": "-8.469999999999999s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "39%", "--hero6-delay": "-8.5s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "51%", "--hero6-delay": "-8.53s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "46%", "--hero6-delay": "-8.559999999999999s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "64%", "--hero6-delay": "-8.59s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "41%", "--hero6-delay": "-8.62s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "58%", "--hero6-delay": "-8.65s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "43%", "--hero6-delay": "-8.68s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "55%", "--hero6-delay": "-8.709999999999999s"}}></span>
                              <span className="bg-amber-400 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "74%", "--hero6-delay": "-8.74s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "48%", "--hero6-delay": "-8.77s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "61%", "--hero6-delay": "-8.799999999999999s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "40%", "--hero6-delay": "-8.83s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "52%", "--hero6-delay": "-8.86s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "45%", "--hero6-delay": "-8.89s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "57%", "--hero6-delay": "-8.92s"}}></span>
                              <span className="bg-neutral-300 dark:bg-neutral-600 flex-1 hero6-grow min-w-0 origin-bottom rounded-t-full" aria-hidden="true" style={{height: "42%", "--hero6-delay": "-8.95s"}}></span>
                            </CardContent>
                          </Card>
                          <Card className="[--card-spacing:--spacing(4)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 flex-1 min-h-0 ring-neutral-900/8 text-neutral-900" size="sm">
                            <CardHeader>
                              <CardTitle className="font-semibold leading-none text-base">
                                {"Active Lanes"}
                              </CardTitle>
                              <CardDescription className="dark:text-neutral-400 text-neutral-500 text-sm">
                                {"Threat Queue"}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-1 flex-col gap-3 min-h-0">
                              <div className="flex flex-col gap-1.5" style={{"--hero6-delay": "0s"}}>
                                <div className="flex gap-2 items-center">
                                  <span className="bg-rose-500 hero6-blink rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                  <span className="font-medium tabular-nums text-sm">
                                    {"[00]"}
                                  </span>
                                  <span className="font-medium text-sm truncate">
                                    {"API Flood"}
                                  </span>
                                </div>
                                <Progress className="[&_[data-slot=progress-indicator]]:bg-rose-500 [&_[data-slot=progress-track]]:bg-neutral-200 [&_[data-slot=progress-track]]:h-1.5 dark:[&_[data-slot=progress-track]]:bg-neutral-800 gap-0 hero6-track w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="72" aria-valuetext="72%" role="progressbar" aria-label="API Flood mitigation">
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "72%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                                <span className="dark:text-neutral-500 text-neutral-400 text-xs truncate">
                                  {"Edge WAF · Mitigating"}
                                </span>
                              </div>
                              <div className="flex flex-col gap-1.5" style={{"--hero6-delay": "-1.3s"}}>
                                <div className="flex gap-2 items-center">
                                  <span className="bg-amber-400 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                  <span className="font-medium tabular-nums text-sm">
                                    {"[01]"}
                                  </span>
                                  <span className="font-medium text-sm truncate">
                                    {"Mail Spoof"}
                                  </span>
                                </div>
                                <Progress className="[&_[data-slot=progress-indicator]]:bg-amber-400 [&_[data-slot=progress-track]]:bg-neutral-200 [&_[data-slot=progress-track]]:h-1.5 dark:[&_[data-slot=progress-track]]:bg-neutral-800 gap-0 hero6-track w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="46" aria-valuetext="46%" role="progressbar" aria-label="Mail Spoof mitigation">
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "46%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                                <span className="dark:text-neutral-500 text-neutral-400 text-xs truncate">
                                  {"Mail Relay · Reviewing"}
                                </span>
                              </div>
                              <div className="flex flex-col gap-1.5" style={{"--hero6-delay": "-2.6s"}}>
                                <div className="flex gap-2 items-center">
                                  <span className="bg-emerald-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                  <span className="font-medium tabular-nums text-sm">
                                    {"[02]"}
                                  </span>
                                  <span className="font-medium text-sm truncate">
                                    {"Port Sweep"}
                                  </span>
                                </div>
                                <Progress className="[&_[data-slot=progress-indicator]]:bg-emerald-500 [&_[data-slot=progress-track]]:bg-neutral-200 [&_[data-slot=progress-track]]:h-1.5 dark:[&_[data-slot=progress-track]]:bg-neutral-800 gap-0 hero6-track w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="94" aria-valuetext="94%" role="progressbar" aria-label="Port Sweep mitigation">
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "94%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                                <span className="dark:text-neutral-500 text-neutral-400 text-xs truncate">
                                  {"Core Switch · Contained"}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
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
