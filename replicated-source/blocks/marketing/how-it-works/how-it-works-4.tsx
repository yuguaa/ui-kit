import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import { Kbd } from "@/registry/bases/base/ui/kbd"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="bg-background lg:px-8 px-4 py-12 sm:px-6 text-foreground w-full" aria-labelledby="how-it-works-4-title">
        <div className="@container max-w-7xl mx-auto w-full">
          <Card className="gap-0 overflow-hidden p-0 w-full" size="default">
            <div className="border-b flex flex-col gap-6 items-center p-6">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-6 outline-none px-2 py-0.75 relative rounded-full text-sm transition-shadow">
                {"How It Works"}
              </Badge>
              <h2 className="@2xl:text-4xl font-semibold text-3xl text-balance text-center text-foreground" id="how-it-works-4-title">
                {"From Idea to UI"}
              </h2>
              <p className="max-w-[40rem] text-center text-muted-foreground text-pretty text-sm">
                {"Pick the right pieces, add them with the shadcn CLI, fit them to your app, and ship with less guesswork from the first step onward."}
              </p>
            </div>
            <style dangerouslySetInnerHTML={{ __html: "\n@keyframes hiw4-grow {\n  0%, 54% { transform: scaleY(1) }\n  66% { transform: scaleY(0.3) }\n  100% { transform: scaleY(1) }\n}\n/* Opacity only: moving text inside a scaled canvas lands on fractional device\n   pixels and shimmers. A dip reads as a refresh either way. */\n@keyframes hiw4-rise {\n  0%, 60% { opacity: 1 }\n  72% { opacity: 0.35 }\n  100% { opacity: 1 }\n}\n/* The scale property, not transform: radix carries the bar's value in an inline\n   transform, and scale composes with it instead of replacing it. */\n@keyframes hiw4-fill {\n  0%, 52% { scale: 1 1 }\n  64% { scale: 0.1 1 }\n  100% { scale: 1 1 }\n}\n@keyframes hiw4-blink {\n  0%, 100% { opacity: 1 }\n  50% { opacity: 0.4 }\n}\n@keyframes hiw4-draw {\n  0%, 50% { stroke-dashoffset: 0 }\n  62% { stroke-dashoffset: 1200 }\n  100% { stroke-dashoffset: 0 }\n}\n/* Activating a tab mounts its panel fresh, so this replays on every switch,\n   which is what gives the self-advancing bar something to land on. */\n@keyframes hiw4-enter {\n  from { opacity: 0; transform: translateY(8px) }\n  to { opacity: 1; transform: translateY(0) }\n}\n/* No scale: it would resample every glyph on the way in. The lift keeps its own\n   layer, so the text is rasterised once and carried by the compositor. */\n.hiw4-enter {\n  animation: hiw4-enter 0.45s cubic-bezier(0.22, 1, 0.36, 1) var(--hiw4-delay, 0s) both;\n  will-change: opacity, transform;\n}\n.hiw4-grow,\n.hiw4-rise,\n.hiw4-draw,\n.hiw4-track [data-slot=\"progress-indicator\"] {\n  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);\n  animation-iteration-count: infinite;\n  animation-fill-mode: both;\n  animation-delay: var(--hiw4-delay, 0s);\n}\n.hiw4-grow { animation-name: hiw4-grow; animation-duration: 11.3s; }\n/* Promoted for the whole cycle: a text node off opacity 1 swaps antialiasing\n   mode, which reads as the glyphs changing weight. */\n.hiw4-rise {\n  animation-name: hiw4-rise;\n  animation-duration: 13.7s;\n  will-change: opacity;\n}\n.hiw4-draw { animation-name: hiw4-draw; animation-duration: 16.3s; }\n.hiw4-track [data-slot=\"progress-indicator\"] {\n  transform-origin: left center;\n  animation-name: hiw4-fill;\n  animation-duration: 10.1s;\n}\n.hiw4-blink {\n  animation: hiw4-blink 3.7s ease-in-out var(--hiw4-delay, 0s) infinite;\n  will-change: opacity;\n}\n@media (prefers-reduced-motion: reduce) {\n  .hiw4-grow,\n  .hiw4-rise,\n  .hiw4-draw,\n  .hiw4-blink,\n  .hiw4-enter,\n  .hiw4-track [data-slot=\"progress-indicator\"] {\n    animation: none;\n  }\n}\n" }} />
            <Tabs className="gap-0 w-full" data-orientation="horizontal" activationDirection="right">
              <TabsList className="@2xl:grid-cols-2 @3xl:grid-cols-4 border-b gap-0 grid! grid-cols-1 h-auto! items-stretch! p-0! rounded-none w-full" data-orientation="horizontal" activationDirection="right" role="tablist" variant="line">
                <TabsTrigger className="@2xl:[&:nth-child(-n+2)]:border-t-0 @2xl:[&:nth-child(odd)]:border-r! @3xl:[&:nth-child(2)]:border-r! @3xl:border-t-0! after:hidden border-b-0 border-border! border-l-0 border-r-0 border-t cursor-pointer data-active:bg-muted! first:border-t-0 flex-none h-auto! hover:bg-muted/50 justify-start p-3 rounded-none text-start transition-colors w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_0_" extracted="1">
                  <span className="flex gap-2.5 items-start px-3 py-2.5 w-full">
                    <IconTile className="bg-primary/5 border-0 self-start" variant="frame" size="default">
                      <span className="font-medium tabular-nums text-base text-foreground">
                        {"1"}
                      </span>
                    </IconTile>
                    <span className="flex flex-1 flex-col gap-px min-w-0 text-sm">
                      <span className="font-medium text-foreground">
                        {"Set Up NeUI"}
                      </span>
                      <span className="font-normal text-muted-foreground text-wrap">
                        {"Add the @neui registry and pick the style for your stack."}
                      </span>
                    </span>
                  </span>
                </TabsTrigger>
                <TabsTrigger className="@2xl:[&:nth-child(-n+2)]:border-t-0 @2xl:[&:nth-child(odd)]:border-r! @3xl:[&:nth-child(2)]:border-r! @3xl:border-t-0! after:hidden border-b-0 border-border! border-l-0 border-r-0 border-t cursor-pointer data-active:bg-muted! first:border-t-0 flex-none h-auto! hover:bg-muted/50 justify-start p-3 rounded-none text-start transition-colors w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1_">
                  <span className="flex gap-2.5 items-start px-3 py-2.5 w-full">
                    <IconTile className="bg-primary/5 border-0 self-start" variant="frame" size="default">
                      <span className="font-medium tabular-nums text-base text-foreground">
                        {"2"}
                      </span>
                    </IconTile>
                    <span className="flex flex-1 flex-col gap-px min-w-0 text-sm">
                      <span className="font-medium text-foreground">
                        {"Pick Your UI"}
                      </span>
                      <span className="font-normal text-muted-foreground text-wrap">
                        {"Browse parts and blocks for the right UI fit."}
                      </span>
                    </span>
                  </span>
                </TabsTrigger>
                <TabsTrigger className="@2xl:[&:nth-child(-n+2)]:border-t-0 @2xl:[&:nth-child(odd)]:border-r! @3xl:[&:nth-child(2)]:border-r! @3xl:border-t-0! after:hidden border-b-0 border-border! border-l-0 border-r-0 border-t cursor-pointer data-active:bg-muted! first:border-t-0 flex-none h-auto! hover:bg-muted/50 justify-start p-3 rounded-none text-start transition-colors w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_2_">
                  <span className="flex gap-2.5 items-start px-3 py-2.5 w-full">
                    <IconTile className="bg-primary/5 border-0 self-start" variant="frame" size="default">
                      <span className="font-medium tabular-nums text-base text-foreground">
                        {"3"}
                      </span>
                    </IconTile>
                    <span className="flex flex-1 flex-col gap-px min-w-0 text-sm">
                      <span className="font-medium text-foreground">
                        {"Add with CLI"}
                      </span>
                      <span className="font-normal text-muted-foreground text-wrap">
                        {"Run the shadcn command to add each item and its files."}
                      </span>
                    </span>
                  </span>
                </TabsTrigger>
                <TabsTrigger className="@2xl:[&:nth-child(-n+2)]:border-t-0 @2xl:[&:nth-child(odd)]:border-r! @3xl:[&:nth-child(2)]:border-r! @3xl:border-t-0! after:hidden border-b-0 border-border! border-l-0 border-r-0 border-t cursor-pointer data-active:bg-muted! first:border-t-0 flex-none h-auto! hover:bg-muted/50 justify-start p-3 rounded-none text-start transition-colors w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_3_" data-active="" compositeItemActive="" aria-controls="base-ui-_r_8_">
                  <span className="flex gap-2.5 items-start px-3 py-2.5 w-full">
                    <IconTile className="bg-primary/5 border-0 self-start" variant="frame" size="default">
                      <span className="font-medium tabular-nums text-base text-foreground">
                        {"4"}
                      </span>
                    </IconTile>
                    <span className="flex flex-1 flex-col gap-px min-w-0 text-sm">
                      <span className="font-medium text-foreground">
                        {"Fit and Ship"}
                      </span>
                      <span className="font-normal text-muted-foreground text-wrap">
                        {"Link real data, match your theme, check the API, and ship."}
                      </span>
                    </span>
                  </span>
                </TabsTrigger>
              </TabsList>
              <div className="@container w-full">
                <div className="aspect-[20/9] overflow-clip relative">
                  <div className="absolute aspect-[16/10] inset-x-0 top-0">
                    <svg className="absolute inset-0 pointer-events-none size-full" aria-hidden="true" viewBox="0 0 1200 900" preserveAspectRatio="none">
                      <defs>
                        <radialgradient id="_r_4_-sweep">
                          <stop offset="0%" stopColor="white" stopOpacity="0.55"></stop>
                          <stop offset="55%" stopColor="white" stopOpacity="0.16"></stop>
                          <stop offset="100%" stopColor="white" stopOpacity="0"></stop>
                        </radialgradient>
                      </defs>
                      <image href="https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?rect=0,1953,4433,3325&w=1200&q=60&auto=format" x="0" y="0" width="1200" height="900" preserveAspectRatio="none" style={{transformBox: "fill-box", transformOrigin: "50% 50%", transform: "translateX(8.30426px) translateY(-5.86951px) scale(1.05783) rotate(-0.259128deg)"}}></image>
                      <ellipse cx="0" cy="324" rx="430" ry="300" opacity="0" fill="url(#_r_4_-sweep)" style={{transform: "translateX(1560px)", transformOrigin: "50% 50%", transformBox: "fill-box"}}></ellipse>
                    </svg>
                    <div className="-bottom-[4cqw] absolute bg-white/10 inset-x-[5cqw] ring-1 ring-inset ring-white/25 rounded-[calc(var(--radius)*1.5)] top-[5cqw]" aria-hidden="true"></div>
                    <div className="absolute inset-0">
                      <div className="absolute h-[1060px] left-[6.25cqw] origin-top-left top-[6.25cqw] w-[1400px]" style={{transform: "scale(calc(100cqw / 1600px))"}}>
                        <Card className="[--card-spacing:--spacing(1.5)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 gap-0 overflow-hidden px-1.5 ring-1 ring-neutral-900/10 shadow-2xl size-full text-neutral-900" size="default">
                          <Card className="[--card-spacing:0px] bg-white border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-50 flex-1 gap-0 min-h-0 overflow-hidden relative ring-0 shadow-none text-neutral-900" size="default">
                            <div className="contents" aria-hidden="true">
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
                                    {"NeUI Pro"}
                                    <svg className="dark:text-neutral-500 lucide lucide-chevrons-up-down text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
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
                                    {"Registry"}
                                    <svg className="dark:text-neutral-500 lucide lucide-chevrons-up-down text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
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
                                    {"Live"}
                                    <svg className="dark:text-neutral-500 lucide lucide-chevrons-up-down text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </span>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-5 ms-auto outline-none px-2 py-0.5 relative rounded-full text-neutral-600 text-xs transition-shadow">
                                  <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                  </svg>
                                  {"System"}
                                  <span className="dark:text-emerald-400 text-emerald-600">
                                    {"Normal"}
                                  </span>
                                </Badge>
                              </div>
                            </div>
                            <div className="flex flex-1 min-h-0">
                              <div className="contents" aria-hidden="true">
                                <div className="bg-neutral-50 border-neutral-200 border-r dark:bg-neutral-950 dark:border-neutral-800 flex flex-col gap-1.5 p-2 pb-[168px] shrink-0 w-56">
                                  <Item className="bg-white border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-500 gap-2 px-2 py-1.5 text-neutral-400 text-sm" variant="outline" size="xs">
                                    <svg className="lucide lucide-search size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                                      <path d="m21 21-4.34-4.34"></path>
                                      <circle cx="11" cy="11" r="8"></circle>
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
                                      <Item className="border-transparent dark:text-neutral-400 gap-2 px-2 py-1.5 text-neutral-600 text-sm" variant="default" size="xs">
                                        <svg className="lucide lucide-layout-dashboard size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                                          <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                                          <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                                          <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                                          <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                                        </svg>
                                        {"Overview"}
                                      </Item>
                                    </div>
                                    <div className="contents">
                                      <Item className="border-transparent dark:text-neutral-400 gap-2 px-2 py-1.5 text-neutral-600 text-sm" variant="default" size="xs">
                                        <svg className="lucide lucide-layers size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                                          <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                                          <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                                          <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                                        </svg>
                                        {"Blocks"}
                                        <svg className="dark:text-neutral-500 lucide lucide-chevron-down ms-auto text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                          <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                      </Item>
                                      <div className="border-l border-neutral-200 dark:border-neutral-800 flex flex-col gap-0.5 ms-4 ps-1">
                                        <Item className="border-transparent dark:text-neutral-400 px-2 py-1.5 text-neutral-500 text-sm" variant="default" size="xs">
                                          {"Marketing"}
                                        </Item>
                                        <Item className="border-transparent dark:text-neutral-400 px-2 py-1.5 text-neutral-500 text-sm" variant="default" size="xs">
                                          {"Application"}
                                        </Item>
                                        <Item className="border-transparent dark:text-neutral-400 px-2 py-1.5 text-neutral-500 text-sm" variant="default" size="xs">
                                          {"Ecommerce"}
                                        </Item>
                                      </div>
                                    </div>
                                    <div className="contents">
                                      <Item className="border-transparent dark:text-neutral-400 gap-2 px-2 py-1.5 text-neutral-600 text-sm" variant="default" size="xs">
                                        <svg className="lucide lucide-puzzle size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PuzzleIcon" tabler="IconPuzzle" hugeicons="PuzzleIcon" phosphor="PuzzlePieceIcon" remixicon="RiPuzzleLine" aria-hidden="true">
                                          <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
                                        </svg>
                                        {"Components"}
                                        <svg className="dark:text-neutral-500 lucide lucide-chevron-right ms-auto text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                          <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                      </Item>
                                    </div>
                                    <div className="contents">
                                      <Item className="border-transparent dark:text-neutral-400 gap-2 px-2 py-1.5 text-neutral-600 text-sm" variant="default" size="xs">
                                        <svg className="lucide lucide-layout-template size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutTemplateIcon" tabler="IconTemplate" hugeicons="DashboardSquare01Icon" phosphor="SquaresFourIcon" remixicon="RiLayout2Line" aria-hidden="true">
                                          <rect width="18" height="7" x="3" y="3" rx="1"></rect>
                                          <rect width="9" height="7" x="3" y="14" rx="1"></rect>
                                          <rect width="5" height="7" x="16" y="14" rx="1"></rect>
                                        </svg>
                                        {"Templates"}
                                        <svg className="dark:text-neutral-500 lucide lucide-chevron-right ms-auto text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                          <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                      </Item>
                                    </div>
                                    <div className="contents">
                                      <Item className="border-transparent dark:text-neutral-400 gap-2 px-2 py-1.5 text-neutral-600 text-sm" variant="default" size="xs">
                                        <svg className="lucide lucide-chart-column size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                                          <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                          <path d="M18 17V9"></path>
                                          <path d="M13 17V5"></path>
                                          <path d="M8 17v-3"></path>
                                        </svg>
                                        {"Analytics"}
                                      </Item>
                                    </div>
                                    <div className="contents">
                                      <Item className="bg-neutral-100 border-transparent dark:bg-neutral-800 dark:text-neutral-50 font-medium gap-2 px-2 py-1.5 text-neutral-900 text-sm" variant="default" size="xs">
                                        <svg className="lucide lucide-settings size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                                          <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                                          <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                        {"Settings"}
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
                                      <span className="bg-[radial-gradient(120%_90%_at_12%_18%,var(--color-orange-400)_0%,transparent_46%),radial-gradient(120%_120%_at_88%_8%,var(--color-fuchsia-500)_0%,transparent_55%),linear-gradient(160deg,var(--color-violet-600)_0%,var(--color-sky-400)_58%,var(--color-cyan-400)_100%)] block h-20 overflow-hidden relative w-full" aria-hidden="true">
                                        <svg className="absolute inset-0 size-full" viewBox="0 0 96 34" preserveAspectRatio="none" aria-hidden="true">
                                          <defs>
                                            <lineargradient id="hiw4-wave" x1="0" y1="0" x2="0" y2="1">
                                              <stop offset="0%" stopColor="white" stopOpacity="0.5"></stop>
                                              <stop offset="100%" stopColor="white" stopOpacity="0.05"></stop>
                                            </lineargradient>
                                          </defs>
                                          <path d="M0 26 C 18 26 26 12 48 12 C 70 12 78 22 96 22 L96 34 L0 34 Z" fill="url(#hiw4-wave)"></path>
                                        </svg>
                                      </span>
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
                              </div>
                              <div className="bg-neutral-50 dark:bg-neutral-950 flex flex-1 flex-col min-w-0">
                                <TabsContent className="m-0 min-h-0" data-orientation="horizontal" activationDirection="right" aria-labelledby="base-ui-_r_3_" id="base-ui-_r_8_" role="tabpanel" tabIndex="-1" index="0" aria-label="Fit and Ship preview">
                                  <div className="dark:text-neutral-50 flex flex-col gap-4 h-full min-h-0 overflow-clip p-4 relative text-neutral-900" aria-hidden="true">
                                    <div className="flex gap-3 items-center justify-between shrink-0">
                                      <div className="flex flex-col gap-1">
                                        <span className="font-semibold leading-none text-base tracking-tight">
                                          {"Integrations"}
                                        </span>
                                        <span className="dark:text-neutral-400 text-neutral-500 text-sm">
                                          {"Link your data sources and go live."}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="auto-rows-[12rem] gap-3.5 grid grid-cols-3 shrink-0">
                                      <Card className="[--card-spacing:0px] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 gap-0 hiw4-enter overflow-hidden ring-1 ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hiw4-delay": "0s"}}>
                                        <div className="flex flex-1 flex-col gap-3 p-4">
                                          <div className="flex gap-3 items-start justify-between">
                                            <IconTile className="bg-neutral-100 border-white dark:bg-neutral-800 dark:border-neutral-900" variant="elevated" size="default">
                                              <svg className="size-6" viewBox="0 0 2447.6 2452.5">
                                                <g clipRule="evenodd" fillRule="evenodd">
                                                  <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                                                  <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                                                  <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                                                  <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                                                </g>
                                              </svg>
                                            </IconTile>
                                            <svg className="dark:text-neutral-500 lucide lucide-external-link size-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                              <path d="M15 3h6v6"></path>
                                              <path d="M10 14 21 3"></path>
                                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            </svg>
                                          </div>
                                          <p className="dark:text-neutral-400 text-neutral-500 text-sm">
                                            {"Releases, on-call alerts, and approvals in your channels."}
                                          </p>
                                        </div>
                                        <div className="border-neutral-100 border-t dark:border-neutral-800 flex gap-2 items-center justify-between px-3 py-2.5">
                                          <span className="dark:text-neutral-300 font-medium text-neutral-600 text-sm">
                                            {"Disconnect"}
                                          </span>
                                          <span className="bg-neutral-900 dark:bg-white h-5 hiw4-blink inline-flex items-center relative rounded-full shrink-0 w-9" aria-hidden="true" style={{"--hiw4-delay": "0s"}}>
                                            <span className="absolute bg-white dark:bg-neutral-900 rounded-full shadow-sm size-4 translate-x-[18px]"></span>
                                          </span>
                                        </div>
                                      </Card>
                                      <Card className="[--card-spacing:0px] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 gap-0 hiw4-enter overflow-hidden ring-1 ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hiw4-delay": "0.06s"}}>
                                        <div className="flex flex-1 flex-col gap-3 p-4">
                                          <div className="flex gap-3 items-start justify-between">
                                            <IconTile className="bg-neutral-100 border-white dark:bg-neutral-800 dark:border-neutral-900" variant="elevated" size="default">
                                              <svg className="size-6" fill="none" viewBox="100 100 312 312">
                                                <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                                              </svg>
                                            </IconTile>
                                            <svg className="dark:text-neutral-500 lucide lucide-external-link size-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                              <path d="M15 3h6v6"></path>
                                              <path d="M10 14 21 3"></path>
                                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            </svg>
                                          </div>
                                          <p className="dark:text-neutral-400 text-neutral-500 text-sm">
                                            {"Charges, retries, and payouts across connected tools."}
                                          </p>
                                        </div>
                                        <div className="border-neutral-100 border-t dark:border-neutral-800 flex gap-2 items-center justify-between px-3 py-2.5">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-neutral-900 border border-transparent dark:bg-white dark:text-neutral-900 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-2 py-1 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                                            <svg className="lucide lucide-plug-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" aria-hidden="true">
                                              <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                                              <path d="m2 22 3-3"></path>
                                              <path d="M7.5 13.5 10 11"></path>
                                              <path d="M10.5 16.5 13 14"></path>
                                              <path d="m18 3-4 4h6l-4 4"></path>
                                            </svg>
                                            {"Connect"}
                                          </Badge>
                                          <span className="bg-neutral-200 dark:bg-neutral-700 h-5 inline-flex items-center relative rounded-full shrink-0 w-9" aria-hidden="true" style={{"--hiw4-delay": "-0.6s"}}>
                                            <span className="absolute bg-white dark:bg-neutral-900 rounded-full shadow-sm size-4 translate-x-0.5"></span>
                                          </span>
                                        </div>
                                      </Card>
                                      <Card className="[--card-spacing:0px] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 gap-0 hiw4-enter overflow-hidden ring-1 ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hiw4-delay": "0.12s"}}>
                                        <div className="flex flex-1 flex-col gap-3 p-4">
                                          <div className="flex gap-3 items-start justify-between">
                                            <IconTile className="bg-neutral-100 border-white dark:bg-neutral-800 dark:border-neutral-900" variant="elevated" size="default">
                                              <svg className="size-6" viewBox="0 0 109 113" fill="none">
                                                <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint0_linear)"></path>
                                                <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint1_linear)" fillOpacity="0.2"></path>
                                                <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"></path>
                                                <defs>
                                                  <lineargradient id="supabase-paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#249361"></stop>
                                                    <stop offset="1" stopColor="#3ECF8E"></stop>
                                                  </lineargradient>
                                                  <lineargradient id="supabase-paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
                                                    <stop></stop>
                                                    <stop offset="1" stopOpacity="0"></stop>
                                                  </lineargradient>
                                                </defs>
                                              </svg>
                                            </IconTile>
                                            <svg className="dark:text-neutral-500 lucide lucide-external-link size-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                              <path d="M15 3h6v6"></path>
                                              <path d="M10 14 21 3"></path>
                                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            </svg>
                                          </div>
                                          <p className="dark:text-neutral-400 text-neutral-500 text-sm">
                                            {"Database and auth events for live dashboards."}
                                          </p>
                                        </div>
                                        <div className="border-neutral-100 border-t dark:border-neutral-800 flex gap-2 items-center justify-between px-3 py-2.5">
                                          <span className="dark:text-neutral-300 font-medium text-neutral-600 text-sm">
                                            {"Disconnect"}
                                          </span>
                                          <span className="bg-neutral-900 dark:bg-white h-5 hiw4-blink inline-flex items-center relative rounded-full shrink-0 w-9" aria-hidden="true" style={{"--hiw4-delay": "-1.2s"}}>
                                            <span className="absolute bg-white dark:bg-neutral-900 rounded-full shadow-sm size-4 translate-x-[18px]"></span>
                                          </span>
                                        </div>
                                      </Card>
                                      <Card className="[--card-spacing:0px] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 gap-0 hiw4-enter overflow-hidden ring-1 ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hiw4-delay": "0.18s"}}>
                                        <div className="flex flex-1 flex-col gap-3 p-4">
                                          <div className="flex gap-3 items-start justify-between">
                                            <IconTile className="bg-neutral-100 border-white dark:bg-neutral-800 dark:border-neutral-900" variant="elevated" size="default">
                                              <svg className="size-6" viewBox="0 0 228 120">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M204 48C192.817 48 183.42 40.3514 180.756 30H153.248C147.382 30 142.376 34.241 141.412 40.0272L140.425 45.9456C139.489 51.5648 136.646 56.4554 132.626 60C136.646 63.5446 139.489 68.4352 140.425 74.0544L141.412 79.9728C142.376 85.759 147.382 90 153.248 90H156.756C159.42 79.6486 168.817 72 180 72C193.255 72 204 82.7452 204 96C204 109.255 193.255 120 180 120C168.817 120 159.42 112.351 156.756 102H153.248C141.516 102 131.504 93.5181 129.575 81.9456L128.588 76.0272C127.624 70.241 122.618 66 116.752 66H107.244C104.58 76.3514 95.183 84 84 84C72.817 84 63.4204 76.3514 60.7561 66H47.2439C44.5796 76.3514 35.183 84 24 84C10.7452 84 0 73.2548 0 60C0 46.7452 10.7452 36 24 36C35.183 36 44.5796 43.6486 47.2439 54H60.7561C63.4204 43.6486 72.817 36 84 36C95.183 36 104.58 43.6486 107.244 54H116.752C122.618 54 127.624 49.759 128.588 43.9728L129.575 38.0544C131.504 26.4819 141.516 18 153.248 18L180.756 18C183.42 7.64864 192.817 0 204 0C217.255 0 228 10.7452 228 24C228 37.2548 217.255 48 204 48ZM204 36C210.627 36 216 30.6274 216 24C216 17.3726 210.627 12 204 12C197.373 12 192 17.3726 192 24C192 30.6274 197.373 36 204 36ZM24 72C30.6274 72 36 66.6274 36 60C36 53.3726 30.6274 48 24 48C17.3726 48 12 53.3726 12 60C12 66.6274 17.3726 72 24 72ZM96 60C96 66.6274 90.6274 72 84 72C77.3726 72 72 66.6274 72 60C72 53.3726 77.3726 48 84 48C90.6274 48 96 53.3726 96 60ZM192 96C192 102.627 186.627 108 180 108C173.373 108 168 102.627 168 96C168 89.3726 173.373 84 180 84C186.627 84 192 89.3726 192 96Z" fill="#ea4b71"></path>
                                              </svg>
                                            </IconTile>
                                            <svg className="dark:text-neutral-500 lucide lucide-external-link size-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                              <path d="M15 3h6v6"></path>
                                              <path d="M10 14 21 3"></path>
                                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            </svg>
                                          </div>
                                          <p className="dark:text-neutral-400 text-neutral-500 text-sm">
                                            {"Automation runs: successes and failures in one place."}
                                          </p>
                                        </div>
                                        <div className="border-neutral-100 border-t dark:border-neutral-800 flex gap-2 items-center justify-between px-3 py-2.5">
                                          <span className="dark:text-neutral-300 font-medium text-neutral-600 text-sm">
                                            {"Disconnect"}
                                          </span>
                                          <span className="bg-neutral-900 dark:bg-white h-5 hiw4-blink inline-flex items-center relative rounded-full shrink-0 w-9" aria-hidden="true" style={{"--hiw4-delay": "-1.7999999999999998s"}}>
                                            <span className="absolute bg-white dark:bg-neutral-900 rounded-full shadow-sm size-4 translate-x-[18px]"></span>
                                          </span>
                                        </div>
                                      </Card>
                                      <Card className="[--card-spacing:0px] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 gap-0 hiw4-enter overflow-hidden ring-1 ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hiw4-delay": "0.24s"}}>
                                        <div className="flex flex-1 flex-col gap-3 p-4">
                                          <div className="flex gap-3 items-start justify-between">
                                            <IconTile className="bg-neutral-100 border-white dark:bg-neutral-800 dark:border-neutral-900" variant="elevated" size="default">
                                              <svg className="size-6" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                                                <defs>
                                                  <lineargradient id="_r_9_" x1="23.666%" x2="76.334%" y1="95.6118%" y2="4.3882%">
                                                    <stop offset=".00006%" stopColor="#0845BF"></stop>
                                                    <stop offset="19.11%" stopColor="#0950DE"></stop>
                                                    <stop offset="38.23%" stopColor="#0B59F6"></stop>
                                                    <stop offset="50%" stopColor="#0B5CFF"></stop>
                                                    <stop offset="67.32%" stopColor="#0E5EFE"></stop>
                                                    <stop offset="77.74%" stopColor="#1665FC"></stop>
                                                    <stop offset="86.33%" stopColor="#246FF9"></stop>
                                                    <stop offset="93.88%" stopColor="#387FF4"></stop>
                                                    <stop offset="100%" stopColor="#4F90EE"></stop>
                                                  </lineargradient>
                                                </defs>
                                                <path fill="url(#_r_9_)" d="M256 128c0 13.568-1.024 27.136-3.328 40.192-6.912 43.264-41.216 77.568-84.48 84.48C155.136 254.976 141.568 256 128 256c-13.568 0-27.136-1.024-40.192-3.328-43.264-6.912-77.568-41.216-84.48-84.48C1.024 155.136 0 141.568 0 128c0-13.568 1.024-27.136 3.328-40.192 6.912-43.264 41.216-77.568 84.48-84.48C100.864 1.024 114.432 0 128 0c13.568 0 27.136 1.024 40.192 3.328 43.264 6.912 77.568 41.216 84.48 84.48C254.976 100.864 256 114.432 256 128Z"></path>
                                                <path fill="#FFF" d="M204.032 207.872H75.008c-8.448 0-16.64-4.608-20.48-12.032-4.608-8.704-2.816-19.2 4.096-26.112l89.856-89.856H83.968c-17.664 0-32-14.336-32-32h118.784c8.448 0 16.64 4.608 20.48 12.032 4.608 8.704 2.816 19.2-4.096 26.112l-89.6 90.112h74.496c17.664 0 32 14.08 32 31.744Z"></path>
                                              </svg>
                                            </IconTile>
                                            <svg className="dark:text-neutral-500 lucide lucide-external-link size-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                              <path d="M15 3h6v6"></path>
                                              <path d="M10 14 21 3"></path>
                                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            </svg>
                                          </div>
                                          <p className="dark:text-neutral-400 text-neutral-500 text-sm">
                                            {"Recordings, attendance, and follow-ups synced."}
                                          </p>
                                        </div>
                                        <div className="border-neutral-100 border-t dark:border-neutral-800 flex gap-2 items-center justify-between px-3 py-2.5">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-neutral-900 border border-transparent dark:bg-white dark:text-neutral-900 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-2 py-1 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                                            <svg className="lucide lucide-plug-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" aria-hidden="true">
                                              <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                                              <path d="m2 22 3-3"></path>
                                              <path d="M7.5 13.5 10 11"></path>
                                              <path d="M10.5 16.5 13 14"></path>
                                              <path d="m18 3-4 4h6l-4 4"></path>
                                            </svg>
                                            {"Connect"}
                                          </Badge>
                                          <span className="bg-neutral-200 dark:bg-neutral-700 h-5 inline-flex items-center relative rounded-full shrink-0 w-9" aria-hidden="true" style={{"--hiw4-delay": "-2.4s"}}>
                                            <span className="absolute bg-white dark:bg-neutral-900 rounded-full shadow-sm size-4 translate-x-0.5"></span>
                                          </span>
                                        </div>
                                      </Card>
                                      <Card className="[--card-spacing:0px] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 gap-0 hiw4-enter overflow-hidden ring-1 ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hiw4-delay": "0.3s"}}>
                                        <div className="flex flex-1 flex-col gap-3 p-4">
                                          <div className="flex gap-3 items-start justify-between">
                                            <IconTile className="bg-neutral-100 border-white dark:bg-neutral-800 dark:border-neutral-900" variant="elevated" size="default">
                                              <svg className="size-6" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                                                <path fill="#625DF5" d="M256 113.765h-74.858l64.83-37.43-14.237-24.667-64.83 37.43 37.421-64.825-24.667-14.246-37.421 64.826V0h-28.476v74.86L76.326 10.027 51.667 24.266 89.096 89.09 24.265 51.668l-14.238 24.66 64.83 37.43H0v28.477h74.85l-64.823 37.43 14.238 24.667 64.824-37.423-37.43 64.825 24.667 14.239 37.429-64.832V256h28.476v-74.853l37.422 64.826 24.665-14.239-37.428-64.832 64.83 37.43 14.24-24.667-64.825-37.423h74.85v-28.477H256ZM128 166.73c-21.472 0-38.876-17.403-38.876-38.876 0-21.472 17.404-38.876 38.876-38.876 21.472 0 38.875 17.404 38.875 38.876 0 21.473-17.403 38.876-38.875 38.876Z"></path>
                                              </svg>
                                            </IconTile>
                                            <svg className="dark:text-neutral-500 lucide lucide-external-link size-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                              <path d="M15 3h6v6"></path>
                                              <path d="M10 14 21 3"></path>
                                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            </svg>
                                          </div>
                                          <p className="dark:text-neutral-400 text-neutral-500 text-sm">
                                            {"Async walkthroughs and feedback in one queue."}
                                          </p>
                                        </div>
                                        <div className="border-neutral-100 border-t dark:border-neutral-800 flex gap-2 items-center justify-between px-3 py-2.5">
                                          <span className="dark:text-neutral-300 font-medium text-neutral-600 text-sm">
                                            {"Disconnect"}
                                          </span>
                                          <span className="bg-neutral-900 dark:bg-white h-5 hiw4-blink inline-flex items-center relative rounded-full shrink-0 w-9" aria-hidden="true" style={{"--hiw4-delay": "-3s"}}>
                                            <span className="absolute bg-white dark:bg-neutral-900 rounded-full shadow-sm size-4 translate-x-[18px]"></span>
                                          </span>
                                        </div>
                                      </Card>
                                      <Card className="[--card-spacing:0px] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 gap-0 hiw4-enter overflow-hidden ring-1 ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hiw4-delay": "0.36s"}}>
                                        <div className="flex flex-1 flex-col gap-3 p-4">
                                          <div className="flex gap-3 items-start justify-between">
                                            <IconTile className="bg-neutral-100 border-white dark:bg-neutral-800 dark:border-neutral-900" variant="elevated" size="default">
                                              <svg className="size-6" viewBox="0 0 256 199" preserveAspectRatio="xMidYMid">
                                                <path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z" fill="#5865F2"></path>
                                              </svg>
                                            </IconTile>
                                            <svg className="dark:text-neutral-500 lucide lucide-external-link size-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                              <path d="M15 3h6v6"></path>
                                              <path d="M10 14 21 3"></path>
                                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            </svg>
                                          </div>
                                          <p className="dark:text-neutral-400 text-neutral-500 text-sm">
                                            {"Community signals and mod flags to internal channels."}
                                          </p>
                                        </div>
                                        <div className="border-neutral-100 border-t dark:border-neutral-800 flex gap-2 items-center justify-between px-3 py-2.5">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-neutral-900 border border-transparent dark:bg-white dark:text-neutral-900 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-2 py-1 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                                            <svg className="lucide lucide-plug-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" aria-hidden="true">
                                              <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                                              <path d="m2 22 3-3"></path>
                                              <path d="M7.5 13.5 10 11"></path>
                                              <path d="M10.5 16.5 13 14"></path>
                                              <path d="m18 3-4 4h6l-4 4"></path>
                                            </svg>
                                            {"Connect"}
                                          </Badge>
                                          <span className="bg-neutral-200 dark:bg-neutral-700 h-5 inline-flex items-center relative rounded-full shrink-0 w-9" aria-hidden="true" style={{"--hiw4-delay": "-3.5999999999999996s"}}>
                                            <span className="absolute bg-white dark:bg-neutral-900 rounded-full shadow-sm size-4 translate-x-0.5"></span>
                                          </span>
                                        </div>
                                      </Card>
                                      <Card className="[--card-spacing:0px] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 gap-0 hiw4-enter overflow-hidden ring-1 ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hiw4-delay": "0.42s"}}>
                                        <div className="flex flex-1 flex-col gap-3 p-4">
                                          <div className="flex gap-3 items-start justify-between">
                                            <IconTile className="bg-neutral-100 border-white dark:bg-neutral-800 dark:border-neutral-900" variant="elevated" size="default">
                                              <svg className="size-6" viewBox="0 0 296 298" fill="none">
                                                <mask id="gemini-a" width="296" height="298" x="0" y="0" maskUnits="userSpaceOnUse" style={{maskType: "alpha"}}>
                                                  <path fill="#3186FF" d="M141.201 4.886c2.282-6.17 11.042-6.071 13.184.148l5.985 17.37a184.004 184.004 0 0 0 111.257 113.049l19.304 6.997c6.143 2.227 6.156 10.91.02 13.155l-19.35 7.082a184.001 184.001 0 0 0-109.495 109.385l-7.573 20.629c-2.241 6.105-10.869 6.121-13.133.025l-7.908-21.296a184 184 0 0 0-109.02-108.658l-19.698-7.239c-6.102-2.243-6.118-10.867-.025-13.132l20.083-7.467A183.998 183.998 0 0 0 133.291 26.28l7.91-21.394Z"></path>
                                                </mask>
                                                <g mask="url(#gemini-a)">
                                                  <g filter="url(#gemini-b)">
                                                    <ellipse cx="163" cy="149" fill="#3689FF" rx="196" ry="159"></ellipse>
                                                  </g>
                                                  <g filter="url(#gemini-c)">
                                                    <ellipse cx="33.5" cy="142.5" fill="#F6C013" rx="68.5" ry="72.5"></ellipse>
                                                  </g>
                                                  <g filter="url(#gemini-d)">
                                                    <ellipse cx="19.5" cy="148.5" fill="#F6C013" rx="68.5" ry="72.5"></ellipse>
                                                  </g>
                                                  <g filter="url(#gemini-e)">
                                                    <path fill="#FA4340" d="M194 10.5C172 82.5 65.5 134.333 22.5 135L144-66l50 76.5Z"></path>
                                                  </g>
                                                  <g filter="url(#gemini-f)">
                                                    <path fill="#FA4340" d="M190.5-12.5C168.5 59.5 62 111.333 19 112L140.5-89l50 76.5Z"></path>
                                                  </g>
                                                  <g filter="url(#gemini-g)">
                                                    <path fill="#14BB69" d="M194.5 279.5C172.5 207.5 66 155.667 23 155l121.5 201 50-76.5Z"></path>
                                                  </g>
                                                  <g filter="url(#gemini-h)">
                                                    <path fill="#14BB69" d="M196.5 320.5C174.5 248.5 68 196.667 25 196l121.5 201 50-76.5Z"></path>
                                                  </g>
                                                </g>
                                                <defs>
                                                  <filter id="gemini-b" width="464" height="390" x="-69" y="-46" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                                    <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                                    <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                                    <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="18"></fegaussianblur>
                                                  </filter>
                                                  <filter id="gemini-c" width="265" height="273" x="-99" y="6" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                                    <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                                    <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                                    <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                                  </filter>
                                                  <filter id="gemini-d" width="265" height="273" x="-113" y="12" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                                    <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                                    <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                                    <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                                  </filter>
                                                  <filter id="gemini-e" width="299.5" height="329" x="-41.5" y="-130" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                                    <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                                    <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                                    <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                                  </filter>
                                                  <filter id="gemini-f" width="299.5" height="329" x="-45" y="-153" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                                    <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                                    <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                                    <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                                  </filter>
                                                  <filter id="gemini-g" width="299.5" height="329" x="-41" y="91" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                                    <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                                    <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                                    <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                                  </filter>
                                                  <filter id="gemini-h" width="299.5" height="329" x="-39" y="132" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                                    <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                                    <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                                    <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                                  </filter>
                                                </defs>
                                              </svg>
                                            </IconTile>
                                            <svg className="dark:text-neutral-500 lucide lucide-external-link size-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                              <path d="M15 3h6v6"></path>
                                              <path d="M10 14 21 3"></path>
                                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            </svg>
                                          </div>
                                          <p className="dark:text-neutral-400 text-neutral-500 text-sm">
                                            {"AI for documents and content workflows."}
                                          </p>
                                        </div>
                                        <div className="border-neutral-100 border-t dark:border-neutral-800 flex gap-2 items-center justify-between px-3 py-2.5">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-neutral-900 border border-transparent dark:bg-white dark:text-neutral-900 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-2 py-1 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                                            <svg className="lucide lucide-plug-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" aria-hidden="true">
                                              <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                                              <path d="m2 22 3-3"></path>
                                              <path d="M7.5 13.5 10 11"></path>
                                              <path d="M10.5 16.5 13 14"></path>
                                              <path d="m18 3-4 4h6l-4 4"></path>
                                            </svg>
                                            {"Connect"}
                                          </Badge>
                                          <span className="bg-neutral-200 dark:bg-neutral-700 h-5 inline-flex items-center relative rounded-full shrink-0 w-9" aria-hidden="true" style={{"--hiw4-delay": "-4.2s"}}>
                                            <span className="absolute bg-white dark:bg-neutral-900 rounded-full shadow-sm size-4 translate-x-0.5"></span>
                                          </span>
                                        </div>
                                      </Card>
                                      <Card className="[--card-spacing:0px] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 gap-0 hiw4-enter overflow-hidden ring-1 ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hiw4-delay": "0.48s"}}>
                                        <div className="flex flex-1 flex-col gap-3 p-4">
                                          <div className="flex gap-3 items-start justify-between">
                                            <IconTile className="bg-neutral-100 border-white dark:bg-neutral-800 dark:border-neutral-900" variant="elevated" size="default">
                                              <svg className="size-6" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                                                <path d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128 70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007 7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276 3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289-34.406-21.148-86.853-27.273-127.548-14.92-5.278 1.594-10.852-1.38-12.454-6.649-1.59-5.278 1.386-10.842 6.655-12.446 46.485-14.106 104.275-7.273 143.787 17.007 4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z" fill="#1ED760"></path>
                                              </svg>
                                            </IconTile>
                                            <svg className="dark:text-neutral-500 lucide lucide-external-link size-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                              <path d="M15 3h6v6"></path>
                                              <path d="M10 14 21 3"></path>
                                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            </svg>
                                          </div>
                                          <p className="dark:text-neutral-400 text-neutral-500 text-sm">
                                            {"Playlists and listening data for workspace apps."}
                                          </p>
                                        </div>
                                        <div className="border-neutral-100 border-t dark:border-neutral-800 flex gap-2 items-center justify-between px-3 py-2.5">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-neutral-900 border border-transparent dark:bg-white dark:text-neutral-900 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-2 py-1 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                                            <svg className="lucide lucide-plug-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" aria-hidden="true">
                                              <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                                              <path d="m2 22 3-3"></path>
                                              <path d="M7.5 13.5 10 11"></path>
                                              <path d="M10.5 16.5 13 14"></path>
                                              <path d="m18 3-4 4h6l-4 4"></path>
                                            </svg>
                                            {"Connect"}
                                          </Badge>
                                          <span className="bg-neutral-200 dark:bg-neutral-700 h-5 inline-flex items-center relative rounded-full shrink-0 w-9" aria-hidden="true" style={{"--hiw4-delay": "-4.8s"}}>
                                            <span className="absolute bg-white dark:bg-neutral-900 rounded-full shadow-sm size-4 translate-x-0.5"></span>
                                          </span>
                                        </div>
                                      </Card>
                                      <Card className="[--card-spacing:0px] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 gap-0 hiw4-enter overflow-hidden ring-1 ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hiw4-delay": "0.48s"}}>
                                        <div className="flex flex-1 flex-col gap-3 p-4">
                                          <div className="flex gap-3 items-start justify-between">
                                            <IconTile className="bg-neutral-100 border-white dark:bg-neutral-800 dark:border-neutral-900" variant="elevated" size="default">
                                              <svg className="size-6" viewBox="0 0 512 512" fill="none">
                                                <g clipPath="url(#clip0_5072_3766)">
                                                  <path d="M390.736 121.264H121.264V390.736H390.736V121.264Z" fill="white"></path>
                                                  <path d="M390.736 512L512 390.736L451.368 380.392L390.736 390.736L379.67 446.196L390.736 512Z" fill="#EA4335"></path>
                                                  <path d="M0 390.736V471.578C0 493.912 18.088 512 40.42 512H121.264L133.714 451.368L121.264 390.736L55.198 380.392L0 390.736Z" fill="#188038"></path>
                                                  <path d="M512 121.264V40.42C512 18.088 493.912 0 471.58 0H390.736C383.36 30.072 379.671 52.2027 379.67 66.392C379.67 80.58 383.359 98.8707 390.736 121.264C417.556 128.944 437.767 132.784 451.368 132.784C464.969 132.784 485.18 128.945 512 121.264Z" fill="#1967D2"></path>
                                                  <path d="M512 121.264H390.736V390.736H512V121.264Z" fill="#FBBC04"></path>
                                                  <path d="M390.736 390.736H121.264V512H390.736V390.736Z" fill="#34A853"></path>
                                                  <path d="M390.736 0H40.422C18.088 0 0 18.088 0 40.42V390.736H121.264V121.264H390.736V0Z" fill="#4285F4"></path>
                                                  <path d="M176.54 330.308C166.468 323.504 159.494 313.568 155.688 300.428L179.066 290.796C181.186 298.88 184.891 305.145 190.182 309.592C195.436 314.038 201.836 316.228 209.314 316.228C216.959 316.228 223.527 313.903 229.018 309.254C234.51 304.606 237.272 298.678 237.272 291.504C237.272 284.16 234.375 278.164 228.582 273.516C222.788 268.868 215.512 266.544 206.822 266.544H193.314V243.404H205.44C212.917 243.404 219.216 241.382 224.336 237.338C229.456 233.298 232.016 227.772 232.016 220.732C232.016 214.468 229.726 209.482 225.146 205.744C220.566 202.004 214.77 200.118 207.73 200.118C200.858 200.118 195.402 201.938 191.36 205.608C187.319 209.289 184.282 213.937 182.534 219.116L159.394 209.482C162.458 200.792 168.084 193.112 176.336 186.476C184.588 179.84 195.132 176.506 207.932 176.506C217.398 176.506 225.92 178.326 233.466 181.996C241.01 185.668 246.938 190.754 251.216 197.222C255.496 203.722 257.616 210.998 257.616 219.082C257.616 227.334 255.63 234.308 251.656 240.034C247.682 245.76 242.796 250.138 237.002 253.204V254.584C244.483 257.669 250.982 262.735 255.798 269.238C260.682 275.806 263.142 283.654 263.142 292.818C263.142 301.978 260.816 310.164 256.168 317.338C251.52 324.514 245.088 330.172 236.934 334.282C228.75 338.392 219.554 340.482 209.348 340.482C197.524 340.514 186.612 337.112 176.54 330.308ZM320.132 214.298L294.466 232.858L281.632 213.39L327.678 180.176H345.328V336.842H320.132V214.298Z" fill="#4285F4"></path>
                                                </g>
                                                <defs>
                                                  <clippath id="clip0_5072_3766">
                                                    <rect width="512" height="512" fill="white"></rect>
                                                  </clippath>
                                                </defs>
                                              </svg>
                                            </IconTile>
                                            <svg className="dark:text-neutral-500 lucide lucide-external-link size-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                              <path d="M15 3h6v6"></path>
                                              <path d="M10 14 21 3"></path>
                                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            </svg>
                                          </div>
                                          <p className="dark:text-neutral-400 text-neutral-500 text-sm">
                                            {"Shift schedules and reminders synced across crews."}
                                          </p>
                                        </div>
                                        <div className="border-neutral-100 border-t dark:border-neutral-800 flex gap-2 items-center justify-between px-3 py-2.5">
                                          <span className="dark:text-neutral-300 font-medium text-neutral-600 text-sm">
                                            {"Disconnect"}
                                          </span>
                                          <span className="bg-neutral-900 dark:bg-white h-5 hiw4-blink inline-flex items-center relative rounded-full shrink-0 w-9" aria-hidden="true" style={{"--hiw4-delay": "-5.3999999999999995s"}}>
                                            <span className="absolute bg-white dark:bg-neutral-900 rounded-full shadow-sm size-4 translate-x-[18px]"></span>
                                          </span>
                                        </div>
                                      </Card>
                                      <Card className="[--card-spacing:0px] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 gap-0 hiw4-enter overflow-hidden ring-1 ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hiw4-delay": "0.48s"}}>
                                        <div className="flex flex-1 flex-col gap-3 p-4">
                                          <div className="flex gap-3 items-start justify-between">
                                            <IconTile className="bg-neutral-100 border-white dark:bg-neutral-800 dark:border-neutral-900" variant="elevated" size="default">
                                              <svg className="size-6" viewBox="0 0 256 228">
                                                <path fill="#1E8E3E" d="M78.8 0 0 136.4l39.4 68.2 78.8-136.4L78.8 0Z"></path>
                                                <path fill="#FABB05" d="M78.8 0h98.4L256 136.4h-78.8L98.4 0H78.8Z"></path>
                                                <path fill="#4285F4" d="M39.4 204.6h157.2L256 136.4H98.4L39.4 204.6Z"></path>
                                                <path fill="#34A853" d="M0 136.4h98.4l-59 68.2L0 136.4Z"></path>
                                                <path fill="#1967D2" d="M177.2 136.4H256l-59.4 68.2-19.4-68.2Z"></path>
                                              </svg>
                                            </IconTile>
                                            <svg className="dark:text-neutral-500 lucide lucide-external-link size-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                              <path d="M15 3h6v6"></path>
                                              <path d="M10 14 21 3"></path>
                                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            </svg>
                                          </div>
                                          <p className="dark:text-neutral-400 text-neutral-500 text-sm">
                                            {"Docs and assets shared to every project."}
                                          </p>
                                        </div>
                                        <div className="border-neutral-100 border-t dark:border-neutral-800 flex gap-2 items-center justify-between px-3 py-2.5">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-neutral-900 border border-transparent dark:bg-white dark:text-neutral-900 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-2 py-1 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                                            <svg className="lucide lucide-plug-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" aria-hidden="true">
                                              <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                                              <path d="m2 22 3-3"></path>
                                              <path d="M7.5 13.5 10 11"></path>
                                              <path d="M10.5 16.5 13 14"></path>
                                              <path d="m18 3-4 4h6l-4 4"></path>
                                            </svg>
                                            {"Connect"}
                                          </Badge>
                                          <span className="bg-neutral-200 dark:bg-neutral-700 h-5 inline-flex items-center relative rounded-full shrink-0 w-9" aria-hidden="true" style={{"--hiw4-delay": "-6s"}}>
                                            <span className="absolute bg-white dark:bg-neutral-900 rounded-full shadow-sm size-4 translate-x-0.5"></span>
                                          </span>
                                        </div>
                                      </Card>
                                      <Card className="[--card-spacing:0px] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 gap-0 hiw4-enter overflow-hidden ring-1 ring-neutral-900/8 text-neutral-900" size="sm" style={{"--hiw4-delay": "0.48s"}}>
                                        <div className="flex flex-1 flex-col gap-3 p-4">
                                          <div className="flex gap-3 items-start justify-between">
                                            <IconTile className="bg-neutral-100 border-white dark:bg-neutral-800 dark:border-neutral-900" variant="elevated" size="default">
                                              <svg className="size-6" viewBox="0 0 622 512" fill="none">
                                                <g clipPath="url(#googlemeet-clip0)">
                                                  <path d="M351.419 255.568L411.978 324.79L493.418 376.827L507.584 256.005L493.418 137.908L410.418 183.621L351.419 255.568Z" fill="#00832D"></path>
                                                  <path d="M0.00283051 365.583V468.541C0.00283051 492.049 19.0851 511.136 42.5983 511.136H145.556L166.876 433.344L145.556 365.583L74.9198 344.263L0.00283051 365.583Z" fill="#0066DA"></path>
                                                  <path d="M145.556 -7.62939e-06L0.00283051 145.554L74.9247 166.822L145.556 145.554L166.488 78.7145L145.556 -7.62939e-06Z" fill="#E94235"></path>
                                                  <path d="M0.00526047 365.629H145.556V145.551H0.00526047V365.629Z" fill="#2684FC"></path>
                                                  <path d="M586.398 61.6293L493.416 137.91V376.827L586.782 453.404C600.758 464.352 621.204 454.374 621.204 436.607V78.0861C621.204 60.1224 600.271 50.193 586.396 61.6317" fill="#00AC47"></path>
                                                  <path d="M351.419 255.568V365.583H145.556V511.136H450.825C474.338 511.136 493.418 492.049 493.418 468.541V376.827L351.419 255.568Z" fill="#00AC47"></path>
                                                  <path d="M450.825 -7.62939e-06H145.556V145.554H351.419V255.568L493.42 137.905V42.5979C493.42 19.0847 474.338 0.00241891 450.825 0.00241891" fill="#FFBA00"></path>
                                                </g>
                                                <defs>
                                                  <clippath id="googlemeet-clip0">
                                                    <rect width="621.2" height="512" fill="white"></rect>
                                                  </clippath>
                                                </defs>
                                              </svg>
                                            </IconTile>
                                            <svg className="dark:text-neutral-500 lucide lucide-external-link size-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                              <path d="M15 3h6v6"></path>
                                              <path d="M10 14 21 3"></path>
                                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            </svg>
                                          </div>
                                          <p className="dark:text-neutral-400 text-neutral-500 text-sm">
                                            {"Standups and reviews with auto notes."}
                                          </p>
                                        </div>
                                        <div className="border-neutral-100 border-t dark:border-neutral-800 flex gap-2 items-center justify-between px-3 py-2.5">
                                          <span className="dark:text-neutral-300 font-medium text-neutral-600 text-sm">
                                            {"Disconnect"}
                                          </span>
                                          <span className="bg-neutral-900 dark:bg-white h-5 hiw4-blink inline-flex items-center relative rounded-full shrink-0 w-9" aria-hidden="true" style={{"--hiw4-delay": "-6.6s"}}>
                                            <span className="absolute bg-white dark:bg-neutral-900 rounded-full shadow-sm size-4 translate-x-[18px]"></span>
                                          </span>
                                        </div>
                                      </Card>
                                    </div>
                                  </div>
                                </TabsContent>
                              </div>
                            </div>
                          </Card>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs>
          </Card>
        </div>
      </section>
    </div>
  )
}
