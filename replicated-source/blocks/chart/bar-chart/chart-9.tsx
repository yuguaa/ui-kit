import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Frame className="@container max-w-5xl w-full" spacing="default">
        <header className="flex flex-row flex-wrap gap-3 items-center justify-between min-w-0 px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-0.5 min-w-0">
            <div className="font-semibold text-sm">
              {"Capital Inflows"}
            </div>
            <div className="text-muted-foreground text-sm truncate">
              {"Net new capital by year across 6 funds"}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <ButtonGroup role="group" aria-label="Data scope">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Year range: All Years, 2021 to 2026" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false" extracted="1">
                <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                  <path d="M3 10h18"></path>
                </svg>
                {"All Years"}
                <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Fund shown: All funds" aria-haspopup="menu" id="base-ui-_r_8_" aria-expanded="false">
                <span className="flex items-center justify-center size-4">
                  <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--primary)"}}></span>
                </span>
                {"All Funds"}
                <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </ButtonGroup>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_d_" aria-expanded="false">
              <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                <path d="M14 17H5"></path>
                <path d="M19 7h-9"></path>
                <circle cx={17} cy={17} r={3}></circle>
                <circle cx={7} cy={7} r={3}></circle>
              </svg>
              {"Display"}
              <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <ButtonGroup role="group" aria-label="Chart actions">
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Refresh inflows" aria-busy="false" id="base-ui-_r_g_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More actions" aria-haspopup="menu" id="base-ui-_r_l_" baseUiTooltipTrigger="" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx={12} cy={12} r={1}></circle>
                  <circle cx={19} cy={12} r={1}></circle>
                  <circle cx={5} cy={12} r={1}></circle>
                </svg>
              </TooltipTrigger>
              </Tooltip>
            </ButtonGroup>
          </div>
        </header>
        <FramePanel>
          <dl className="@3xl:-my-(--frame-panel-py) @3xl:gap-0 @3xl:grid-cols-4 gap-x-6 gap-y-5 grid grid-cols-2">
            <div className="@3xl:not-first:border-s @3xl:not-first:ps-6 @3xl:not-last:pe-6 @3xl:py-(--frame-panel-py) flex flex-col gap-2 min-w-0">
              <dt className="text-muted-foreground text-sm">
                {"2025 Inflows"}
              </dt>
              <dd className="flex flex-col gap-2 min-w-0">
                <span className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                  {"$14.3M"}
                </span>
                <span className="flex gap-1.5 h-6 items-center min-w-0 text-muted-foreground text-xs">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    <span className="tabular-nums">
                      {"+22.1%"}
                    </span>
                  </Badge>
                  <span className="truncate">
                    {"vs 2024"}
                  </span>
                </span>
              </dd>
            </div>
            <div className="@3xl:not-first:border-s @3xl:not-first:ps-6 @3xl:not-last:pe-6 @3xl:py-(--frame-panel-py) flex flex-col gap-2 min-w-0">
              <dt className="text-muted-foreground text-sm">
                {"Top Fund"}
              </dt>
              <dd className="flex flex-col gap-2 min-w-0">
                <span className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                  {"55.3%"}
                </span>
                <span className="flex gap-1.5 h-6 items-center min-w-0 text-muted-foreground text-xs">
                  <IconTile variant="outline" size="xs">
                    <svg aria-hidden="true" viewBox="0 0 339.43 295.27">
                      <path d="m62.15 1.45-61.89 130a2.52 2.52 0 0 0 .54 2.94l167.15 160.17a2.55 2.55 0 0 0 3.53 0L338.63 134.4a2.52 2.52 0 0 0 .54-2.94l-61.89-130A2.5 2.5 0 0 0 275 0H64.45a2.5 2.5 0 0 0-2.3 1.45Z" style={{fill: "rgb(80, 175, 149)", fillRule: "evenodd"}}></path>
                      <path d="M191.19 144.8c-1.2.09-7.4.46-21.23.46-11 0-18.81-.33-21.55-.46-42.51-1.87-74.24-9.27-74.24-18.13s31.73-16.25 74.24-18.15v28.91c2.78.2 10.74.67 21.74.67 13.2 0 19.81-.55 21-.66v-28.9c42.42 1.89 74.08 9.29 74.08 18.13s-31.65 16.24-74.08 18.12Zm0-39.25V79.68h59.2V40.23H89.21v39.45h59.19v25.86c-48.11 2.21-84.29 11.74-84.29 23.16s36.18 20.94 84.29 23.16v82.9h42.78v-82.93c48-2.21 84.12-11.73 84.12-23.14s-36.09-20.93-84.12-23.15Zm0 0Z" style={{fill: "rgb(255, 255, 255)", fillRule: "evenodd"}}></path>
                    </svg>
                  </IconTile>
                  <span className="truncate">
                    {"WaveMark Capital"}
                  </span>
                </span>
              </dd>
            </div>
            <div className="@3xl:not-first:border-s @3xl:not-first:ps-6 @3xl:not-last:pe-6 @3xl:py-(--frame-panel-py) flex flex-col gap-2 min-w-0">
              <dt className="text-muted-foreground text-sm">
                {"2026 Run-rate"}
              </dt>
              <dd className="flex flex-col gap-2 min-w-0">
                <span className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                  {"$15.9M"}
                </span>
                <span className="flex gap-1.5 h-6 items-center min-w-0 text-muted-foreground text-xs">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    <span className="tabular-nums">
                      {"+10.7%"}
                    </span>
                  </Badge>
                  <span className="truncate">
                    {"vs 2025"}
                  </span>
                </span>
              </dd>
            </div>
            <div className="@3xl:not-first:border-s @3xl:not-first:ps-6 @3xl:not-last:pe-6 @3xl:py-(--frame-panel-py) flex flex-col gap-2 min-w-0">
              <dt className="text-muted-foreground text-sm">
                {"Yearly Growth"}
              </dt>
              <dd className="flex flex-col gap-2 min-w-0">
                <span className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                  {"+17.2%"}
                </span>
                <span className="flex gap-1.5 h-6 items-center min-w-0 text-muted-foreground text-xs">
                  <span className="truncate">
                    {"Compounded since 2021"}
                  </span>
                </span>
              </dd>
            </div>
          </dl>
        </FramePanel>
        <FramePanel>
          <div className="flex flex-col gap-2 min-w-0">
            <style dangerouslySetInnerHTML={{ __html: "\n@keyframes c9-rise { from { transform: translateY(0) scaleY(0); } }\n@keyframes c9-lift { from { transform: translateY(100%); } }\n[data-c9-rise] { animation: c9-rise 700ms cubic-bezier(0.22, 1, 0.36, 1) backwards; }\n[data-c9-lift] { animation: c9-lift 700ms cubic-bezier(0.22, 1, 0.36, 1) backwards; }\n@media (prefers-reduced-motion: reduce) {\n  [data-c9-rise], [data-c9-lift] { animation: none; }\n}\n" }} />
            <div className="@3xl:[--depth:--spacing(3.5)] @3xl:[--prism-w:--spacing(20)] @3xl:h-88 [--depth:--spacing(2.5)] [--prism-w:--spacing(14)] flex h-72 min-w-0 relative">
              <div className="relative shrink-0 w-11" aria-hidden="true">
                <div className="absolute bottom-10 inset-x-0 top-10">
                  <span className="absolute right-3 tabular-nums text-muted-foreground text-xs translate-y-1/2" style={{bottom: "0%"}}>
                    {"$0"}
                  </span>
                  <span className="absolute right-3 tabular-nums text-muted-foreground text-xs translate-y-1/2" style={{bottom: "25%"}}>
                    {"$5M"}
                  </span>
                  <span className="absolute right-3 tabular-nums text-muted-foreground text-xs translate-y-1/2" style={{bottom: "50%"}}>
                    {"$10M"}
                  </span>
                  <span className="absolute right-3 tabular-nums text-muted-foreground text-xs translate-y-1/2" style={{bottom: "75%"}}>
                    {"$15M"}
                  </span>
                  <span className="absolute right-3 tabular-nums text-muted-foreground text-xs translate-y-1/2" style={{bottom: "100%"}}>
                    {"$20M"}
                  </span>
                </div>
              </div>
              <div className="flex-1 min-w-0 overflow-clip relative">
                <div className="absolute bottom-10 inset-x-0 pointer-events-none top-10" aria-hidden="true">
                  <span className="absolute border-border/60 border-t inset-x-0" style={{bottom: "25%"}}></span>
                  <span className="absolute border-border/60 border-t inset-x-0" style={{bottom: "50%"}}></span>
                  <span className="absolute border-border/60 border-t inset-x-0" style={{bottom: "75%"}}></span>
                  <span className="absolute border-border/60 border-t inset-x-0" style={{bottom: "100%"}}></span>
                </div>
                <div className="absolute bottom-8 h-2 left-0 pointer-events-none right-(--depth)" aria-hidden="true">
                  <div className="absolute bg-border inset-0"></div>
                  <div className="-skew-x-45 absolute bg-muted bottom-full h-(--depth) left-0 origin-bottom w-full"></div>
                  <div className="-skew-y-45 absolute bg-input inset-y-0 left-full origin-bottom-left w-(--depth)"></div>
                </div>
                <div className="@lg:gap-4 flex gap-2 h-full min-w-0 relative" role="radiogroup" aria-label="Inflows by year">
                  <button className="cursor-pointer flex flex-1 flex-col focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/50 group/year h-full items-center min-w-0 outline-none pt-10" id="_r_o_-2021" type="button" role="radio" aria-checked="false" aria-label="2021: $7.6M, first year on record" tabIndex={-1}>
                    <span className="flex-1 max-w-[calc(var(--prism-w)+var(--depth))] pr-(--depth) relative w-full">
                      <span className="block duration-200 h-full motion-reduce:transition-none opacity-45 relative transition-opacity">
                        <span className="absolute inset-0 pointer-events-none" aria-hidden="true">
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-teal-500)", "--layer-shade": "color-mix(in oklab, var(--color-teal-500) 72%, black)", animationDelay: "0ms", transform: "translateY(0%) scaleY(0.193105)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-amber-400)", "--layer-shade": "color-mix(in oklab, var(--color-amber-400) 72%, black)", animationDelay: "0ms", transform: "translateY(-19.3105%) scaleY(0.07563)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-violet-500)", "--layer-shade": "color-mix(in oklab, var(--color-violet-500) 72%, black)", animationDelay: "0ms", transform: "translateY(-26.8735%) scaleY(0.042115)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-sky-500)", "--layer-shade": "color-mix(in oklab, var(--color-sky-500) 72%, black)", animationDelay: "0ms", transform: "translateY(-31.085%) scaleY(0.03492)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-rose-400)", "--layer-shade": "color-mix(in oklab, var(--color-rose-400) 72%, black)", animationDelay: "0ms", transform: "translateY(-34.577%) scaleY(0.020135)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-slate-400)", "--layer-shade": "color-mix(in oklab, var(--color-slate-400) 72%, black)", animationDelay: "0ms", transform: "translateY(-36.5905%) scaleY(0.014325)"}}></span>
                          <span className="-skew-y-45 absolute inset-y-0 left-full origin-bottom-left w-(--depth)">
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-teal-500)", "--layer-shade": "color-mix(in oklab, var(--color-teal-500) 72%, black)", animationDelay: "0ms", transform: "translateY(0%) scaleY(0.193105)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-amber-400)", "--layer-shade": "color-mix(in oklab, var(--color-amber-400) 72%, black)", animationDelay: "0ms", transform: "translateY(-19.3105%) scaleY(0.07563)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-violet-500)", "--layer-shade": "color-mix(in oklab, var(--color-violet-500) 72%, black)", animationDelay: "0ms", transform: "translateY(-26.8735%) scaleY(0.042115)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-sky-500)", "--layer-shade": "color-mix(in oklab, var(--color-sky-500) 72%, black)", animationDelay: "0ms", transform: "translateY(-31.085%) scaleY(0.03492)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-rose-400)", "--layer-shade": "color-mix(in oklab, var(--color-rose-400) 72%, black)", animationDelay: "0ms", transform: "translateY(-34.577%) scaleY(0.020135)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-slate-400)", "--layer-shade": "color-mix(in oklab, var(--color-slate-400) 72%, black)", animationDelay: "0ms", transform: "translateY(-36.5905%) scaleY(0.014325)"}}></span>
                          </span>
                          <span className="absolute duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] inset-0 motion-reduce:transition-none transition-transform" data-c9-lift="" style={{"--cap": "color-mix(in oklab, var(--color-slate-400) 35%, var(--background))", animationDelay: "0ms", transform: "translateY(61.977%)"}}>
                            <span className="-skew-x-45 absolute bg-(--cap) bottom-full h-(--depth) left-0 origin-bottom w-full"></span>
                            <span className="@3xl:block absolute bottom-[calc(100%+var(--depth)+--spacing(1))] font-medium hidden left-0 tabular-nums text-center text-foreground text-xs w-[calc(100%+var(--depth))] whitespace-nowrap">
                              {"$7.6M"}
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="h-2 shrink-0"></span>
                    <span className="@3xl:flex-row @3xl:gap-1 @3xl:justify-center flex flex-col h-8 items-center leading-4 max-w-[calc(var(--prism-w)+var(--depth))] pr-(--depth) shrink-0 tabular-nums text-xs w-full">
                      <span className="group-hover/year:text-foreground text-muted-foreground transition-colors">
                        {"2021"}
                      </span>
                    </span>
                  </button>
                  <button className="cursor-pointer flex flex-1 flex-col focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/50 group/year h-full items-center min-w-0 outline-none pt-10" id="_r_o_-2022" type="button" role="radio" aria-checked="false" aria-label="2022: $6.7M, down 11.9% on 2021" tabIndex={-1}>
                    <span className="flex-1 max-w-[calc(var(--prism-w)+var(--depth))] pr-(--depth) relative w-full">
                      <span className="block duration-200 h-full motion-reduce:transition-none opacity-45 relative transition-opacity">
                        <span className="absolute inset-0 pointer-events-none" aria-hidden="true">
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-teal-500)", "--layer-shade": "color-mix(in oklab, var(--color-teal-500) 72%, black)", animationDelay: "70ms", transform: "translateY(0%) scaleY(0.16074)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-amber-400)", "--layer-shade": "color-mix(in oklab, var(--color-amber-400) 72%, black)", animationDelay: "70ms", transform: "translateY(-16.074%) scaleY(0.06991)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-violet-500)", "--layer-shade": "color-mix(in oklab, var(--color-violet-500) 72%, black)", animationDelay: "70ms", transform: "translateY(-23.065%) scaleY(0.035095)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-sky-500)", "--layer-shade": "color-mix(in oklab, var(--color-sky-500) 72%, black)", animationDelay: "70ms", transform: "translateY(-26.5745%) scaleY(0.030615)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-rose-400)", "--layer-shade": "color-mix(in oklab, var(--color-rose-400) 72%, black)", animationDelay: "70ms", transform: "translateY(-29.636%) scaleY(0.022755)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-slate-400)", "--layer-shade": "color-mix(in oklab, var(--color-slate-400) 72%, black)", animationDelay: "70ms", transform: "translateY(-31.9115%) scaleY(0.015935)"}}></span>
                          <span className="-skew-y-45 absolute inset-y-0 left-full origin-bottom-left w-(--depth)">
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-teal-500)", "--layer-shade": "color-mix(in oklab, var(--color-teal-500) 72%, black)", animationDelay: "70ms", transform: "translateY(0%) scaleY(0.16074)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-amber-400)", "--layer-shade": "color-mix(in oklab, var(--color-amber-400) 72%, black)", animationDelay: "70ms", transform: "translateY(-16.074%) scaleY(0.06991)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-violet-500)", "--layer-shade": "color-mix(in oklab, var(--color-violet-500) 72%, black)", animationDelay: "70ms", transform: "translateY(-23.065%) scaleY(0.035095)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-sky-500)", "--layer-shade": "color-mix(in oklab, var(--color-sky-500) 72%, black)", animationDelay: "70ms", transform: "translateY(-26.5745%) scaleY(0.030615)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-rose-400)", "--layer-shade": "color-mix(in oklab, var(--color-rose-400) 72%, black)", animationDelay: "70ms", transform: "translateY(-29.636%) scaleY(0.022755)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-slate-400)", "--layer-shade": "color-mix(in oklab, var(--color-slate-400) 72%, black)", animationDelay: "70ms", transform: "translateY(-31.9115%) scaleY(0.015935)"}}></span>
                          </span>
                          <span className="absolute duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] inset-0 motion-reduce:transition-none transition-transform" data-c9-lift="" style={{"--cap": "color-mix(in oklab, var(--color-slate-400) 35%, var(--background))", animationDelay: "70ms", transform: "translateY(66.495%)"}}>
                            <span className="-skew-x-45 absolute bg-(--cap) bottom-full h-(--depth) left-0 origin-bottom w-full"></span>
                            <span className="@3xl:block absolute bottom-[calc(100%+var(--depth)+--spacing(1))] font-medium hidden left-0 tabular-nums text-center text-foreground text-xs w-[calc(100%+var(--depth))] whitespace-nowrap">
                              {"$6.7M"}
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="h-2 shrink-0"></span>
                    <span className="@3xl:flex-row @3xl:gap-1 @3xl:justify-center flex flex-col h-8 items-center leading-4 max-w-[calc(var(--prism-w)+var(--depth))] pr-(--depth) shrink-0 tabular-nums text-xs w-full">
                      <span className="group-hover/year:text-foreground text-muted-foreground transition-colors">
                        {"2022"}
                      </span>
                    </span>
                  </button>
                  <button className="cursor-pointer flex flex-1 flex-col focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/50 group/year h-full items-center min-w-0 outline-none pt-10" id="_r_o_-2023" type="button" role="radio" aria-checked="false" aria-label="2023: $9.1M, up 35.8% on 2022" tabIndex={-1}>
                    <span className="flex-1 max-w-[calc(var(--prism-w)+var(--depth))] pr-(--depth) relative w-full">
                      <span className="block duration-200 h-full motion-reduce:transition-none opacity-45 relative transition-opacity">
                        <span className="absolute inset-0 pointer-events-none" aria-hidden="true">
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-teal-500)", "--layer-shade": "color-mix(in oklab, var(--color-teal-500) 72%, black)", animationDelay: "140ms", transform: "translateY(0%) scaleY(0.235265)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-amber-400)", "--layer-shade": "color-mix(in oklab, var(--color-amber-400) 72%, black)", animationDelay: "140ms", transform: "translateY(-23.5265%) scaleY(0.092345)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-violet-500)", "--layer-shade": "color-mix(in oklab, var(--color-violet-500) 72%, black)", animationDelay: "140ms", transform: "translateY(-32.761%) scaleY(0.04773)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-sky-500)", "--layer-shade": "color-mix(in oklab, var(--color-sky-500) 72%, black)", animationDelay: "140ms", transform: "translateY(-37.534%) scaleY(0.03679)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-rose-400)", "--layer-shade": "color-mix(in oklab, var(--color-rose-400) 72%, black)", animationDelay: "140ms", transform: "translateY(-41.213%) scaleY(0.02531)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-slate-400)", "--layer-shade": "color-mix(in oklab, var(--color-slate-400) 72%, black)", animationDelay: "140ms", transform: "translateY(-43.744%) scaleY(0.017645)"}}></span>
                          <span className="-skew-y-45 absolute inset-y-0 left-full origin-bottom-left w-(--depth)">
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-teal-500)", "--layer-shade": "color-mix(in oklab, var(--color-teal-500) 72%, black)", animationDelay: "140ms", transform: "translateY(0%) scaleY(0.235265)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-amber-400)", "--layer-shade": "color-mix(in oklab, var(--color-amber-400) 72%, black)", animationDelay: "140ms", transform: "translateY(-23.5265%) scaleY(0.092345)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-violet-500)", "--layer-shade": "color-mix(in oklab, var(--color-violet-500) 72%, black)", animationDelay: "140ms", transform: "translateY(-32.761%) scaleY(0.04773)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-sky-500)", "--layer-shade": "color-mix(in oklab, var(--color-sky-500) 72%, black)", animationDelay: "140ms", transform: "translateY(-37.534%) scaleY(0.03679)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-rose-400)", "--layer-shade": "color-mix(in oklab, var(--color-rose-400) 72%, black)", animationDelay: "140ms", transform: "translateY(-41.213%) scaleY(0.02531)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-slate-400)", "--layer-shade": "color-mix(in oklab, var(--color-slate-400) 72%, black)", animationDelay: "140ms", transform: "translateY(-43.744%) scaleY(0.017645)"}}></span>
                          </span>
                          <span className="absolute duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] inset-0 motion-reduce:transition-none transition-transform" data-c9-lift="" style={{"--cap": "color-mix(in oklab, var(--color-slate-400) 35%, var(--background))", animationDelay: "140ms", transform: "translateY(54.4915%)"}}>
                            <span className="-skew-x-45 absolute bg-(--cap) bottom-full h-(--depth) left-0 origin-bottom w-full"></span>
                            <span className="@3xl:block absolute bottom-[calc(100%+var(--depth)+--spacing(1))] font-medium hidden left-0 tabular-nums text-center text-foreground text-xs w-[calc(100%+var(--depth))] whitespace-nowrap">
                              {"$9.1M"}
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="h-2 shrink-0"></span>
                    <span className="@3xl:flex-row @3xl:gap-1 @3xl:justify-center flex flex-col h-8 items-center leading-4 max-w-[calc(var(--prism-w)+var(--depth))] pr-(--depth) shrink-0 tabular-nums text-xs w-full">
                      <span className="group-hover/year:text-foreground text-muted-foreground transition-colors">
                        {"2023"}
                      </span>
                    </span>
                  </button>
                  <button className="cursor-pointer flex flex-1 flex-col focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/50 group/year h-full items-center min-w-0 outline-none pt-10" id="_r_o_-2024" type="button" role="radio" aria-checked="false" aria-label="2024: $11.7M, up 29.0% on 2023" tabIndex={-1}>
                    <span className="flex-1 max-w-[calc(var(--prism-w)+var(--depth))] pr-(--depth) relative w-full">
                      <span className="block duration-200 h-full motion-reduce:transition-none opacity-45 relative transition-opacity">
                        <span className="absolute inset-0 pointer-events-none" aria-hidden="true">
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-teal-500)", "--layer-shade": "color-mix(in oklab, var(--color-teal-500) 72%, black)", animationDelay: "210ms", transform: "translateY(0%) scaleY(0.315945)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-amber-400)", "--layer-shade": "color-mix(in oklab, var(--color-amber-400) 72%, black)", animationDelay: "210ms", transform: "translateY(-31.5945%) scaleY(0.12687)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-violet-500)", "--layer-shade": "color-mix(in oklab, var(--color-violet-500) 72%, black)", animationDelay: "210ms", transform: "translateY(-44.2815%) scaleY(0.05541)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-sky-500)", "--layer-shade": "color-mix(in oklab, var(--color-sky-500) 72%, black)", animationDelay: "210ms", transform: "translateY(-49.8225%) scaleY(0.040835)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-rose-400)", "--layer-shade": "color-mix(in oklab, var(--color-rose-400) 72%, black)", animationDelay: "210ms", transform: "translateY(-53.906%) scaleY(0.02859)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-slate-400)", "--layer-shade": "color-mix(in oklab, var(--color-slate-400) 72%, black)", animationDelay: "210ms", transform: "translateY(-56.765%) scaleY(0.01948)"}}></span>
                          <span className="-skew-y-45 absolute inset-y-0 left-full origin-bottom-left w-(--depth)">
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-teal-500)", "--layer-shade": "color-mix(in oklab, var(--color-teal-500) 72%, black)", animationDelay: "210ms", transform: "translateY(0%) scaleY(0.315945)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-amber-400)", "--layer-shade": "color-mix(in oklab, var(--color-amber-400) 72%, black)", animationDelay: "210ms", transform: "translateY(-31.5945%) scaleY(0.12687)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-violet-500)", "--layer-shade": "color-mix(in oklab, var(--color-violet-500) 72%, black)", animationDelay: "210ms", transform: "translateY(-44.2815%) scaleY(0.05541)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-sky-500)", "--layer-shade": "color-mix(in oklab, var(--color-sky-500) 72%, black)", animationDelay: "210ms", transform: "translateY(-49.8225%) scaleY(0.040835)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-rose-400)", "--layer-shade": "color-mix(in oklab, var(--color-rose-400) 72%, black)", animationDelay: "210ms", transform: "translateY(-53.906%) scaleY(0.02859)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-slate-400)", "--layer-shade": "color-mix(in oklab, var(--color-slate-400) 72%, black)", animationDelay: "210ms", transform: "translateY(-56.765%) scaleY(0.01948)"}}></span>
                          </span>
                          <span className="absolute duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] inset-0 motion-reduce:transition-none transition-transform" data-c9-lift="" style={{"--cap": "color-mix(in oklab, var(--color-slate-400) 35%, var(--background))", animationDelay: "210ms", transform: "translateY(41.287%)"}}>
                            <span className="-skew-x-45 absolute bg-(--cap) bottom-full h-(--depth) left-0 origin-bottom w-full"></span>
                            <span className="@3xl:block absolute bottom-[calc(100%+var(--depth)+--spacing(1))] font-medium hidden left-0 tabular-nums text-center text-foreground text-xs w-[calc(100%+var(--depth))] whitespace-nowrap">
                              {"$11.7M"}
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="h-2 shrink-0"></span>
                    <span className="@3xl:flex-row @3xl:gap-1 @3xl:justify-center flex flex-col h-8 items-center leading-4 max-w-[calc(var(--prism-w)+var(--depth))] pr-(--depth) shrink-0 tabular-nums text-xs w-full">
                      <span className="group-hover/year:text-foreground text-muted-foreground transition-colors">
                        {"2024"}
                      </span>
                    </span>
                  </button>
                  <button className="cursor-pointer flex flex-1 flex-col focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/50 group/year h-full items-center min-w-0 outline-none pt-10" id="_r_o_-2025" type="button" role="radio" aria-checked="true" aria-label="2025: $14.3M, up 22.1% on 2024" tabIndex={0}>
                    <span className="flex-1 max-w-[calc(var(--prism-w)+var(--depth))] pr-(--depth) relative w-full">
                      <span className="block duration-200 h-full motion-reduce:transition-none opacity-100 relative transition-opacity">
                        <span className="absolute inset-0 pointer-events-none" aria-hidden="true">
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-teal-500)", "--layer-shade": "color-mix(in oklab, var(--color-teal-500) 72%, black)", animationDelay: "280ms", transform: "translateY(0%) scaleY(0.39642)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-amber-400)", "--layer-shade": "color-mix(in oklab, var(--color-amber-400) 72%, black)", animationDelay: "280ms", transform: "translateY(-39.642%) scaleY(0.160745)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-violet-500)", "--layer-shade": "color-mix(in oklab, var(--color-violet-500) 72%, black)", animationDelay: "280ms", transform: "translateY(-55.7165%) scaleY(0.062315)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-sky-500)", "--layer-shade": "color-mix(in oklab, var(--color-sky-500) 72%, black)", animationDelay: "280ms", transform: "translateY(-61.948%) scaleY(0.0446225)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-rose-400)", "--layer-shade": "color-mix(in oklab, var(--color-rose-400) 72%, black)", animationDelay: "280ms", transform: "translateY(-66.4103%) scaleY(0.03171)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-slate-400)", "--layer-shade": "color-mix(in oklab, var(--color-slate-400) 72%, black)", animationDelay: "280ms", transform: "translateY(-69.5813%) scaleY(0.0209487)"}}></span>
                          <span className="-skew-y-45 absolute inset-y-0 left-full origin-bottom-left w-(--depth)">
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-teal-500)", "--layer-shade": "color-mix(in oklab, var(--color-teal-500) 72%, black)", animationDelay: "280ms", transform: "translateY(0%) scaleY(0.39642)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-amber-400)", "--layer-shade": "color-mix(in oklab, var(--color-amber-400) 72%, black)", animationDelay: "280ms", transform: "translateY(-39.642%) scaleY(0.160745)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-violet-500)", "--layer-shade": "color-mix(in oklab, var(--color-violet-500) 72%, black)", animationDelay: "280ms", transform: "translateY(-55.7165%) scaleY(0.062315)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-sky-500)", "--layer-shade": "color-mix(in oklab, var(--color-sky-500) 72%, black)", animationDelay: "280ms", transform: "translateY(-61.948%) scaleY(0.0446225)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-rose-400)", "--layer-shade": "color-mix(in oklab, var(--color-rose-400) 72%, black)", animationDelay: "280ms", transform: "translateY(-66.4103%) scaleY(0.03171)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-slate-400)", "--layer-shade": "color-mix(in oklab, var(--color-slate-400) 72%, black)", animationDelay: "280ms", transform: "translateY(-69.5813%) scaleY(0.0209487)"}}></span>
                          </span>
                          <span className="absolute duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] inset-0 motion-reduce:transition-none transition-transform" data-c9-lift="" style={{"--cap": "color-mix(in oklab, var(--color-slate-400) 35%, var(--background))", animationDelay: "280ms", transform: "translateY(28.3239%)"}}>
                            <span className="-skew-x-45 absolute bg-(--cap) bottom-full h-(--depth) left-0 origin-bottom w-full"></span>
                            <span className="absolute bottom-[calc(100%+var(--depth)+--spacing(1))] font-medium left-0 tabular-nums text-center text-foreground text-xs w-[calc(100%+var(--depth))] whitespace-nowrap">
                              {"$14.3M"}
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="h-2 shrink-0"></span>
                    <span className="@3xl:flex-row @3xl:gap-1 @3xl:justify-center flex flex-col h-8 items-center leading-4 max-w-[calc(var(--prism-w)+var(--depth))] pr-(--depth) shrink-0 tabular-nums text-xs w-full">
                      <span className="font-medium text-foreground transition-colors">
                        {"2025"}
                      </span>
                    </span>
                  </button>
                  <button className="cursor-pointer flex flex-1 flex-col focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/50 group/year h-full items-center min-w-0 outline-none pt-10" id="_r_o_-2026" type="button" role="radio" aria-checked="false" aria-label="2026 to date: $11.9M, run-rate $15.9M, up 10.7% on 2025" tabIndex={-1}>
                    <span className="flex-1 max-w-[calc(var(--prism-w)+var(--depth))] pr-(--depth) relative w-full">
                      <span className="block duration-200 h-full motion-reduce:transition-none opacity-45 relative transition-opacity">
                        <span className="absolute inset-0 pointer-events-none" aria-hidden="true">
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-teal-500)", "--layer-shade": "color-mix(in oklab, var(--color-teal-500) 72%, black)", animationDelay: "350ms", transform: "translateY(0%) scaleY(0.330915)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-amber-400)", "--layer-shade": "color-mix(in oklab, var(--color-amber-400) 72%, black)", animationDelay: "350ms", transform: "translateY(-33.0915%) scaleY(0.134415)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-violet-500)", "--layer-shade": "color-mix(in oklab, var(--color-violet-500) 72%, black)", animationDelay: "350ms", transform: "translateY(-46.533%) scaleY(0.05523)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-sky-500)", "--layer-shade": "color-mix(in oklab, var(--color-sky-500) 72%, black)", animationDelay: "350ms", transform: "translateY(-52.056%) scaleY(0.02906)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-rose-400)", "--layer-shade": "color-mix(in oklab, var(--color-rose-400) 72%, black)", animationDelay: "350ms", transform: "translateY(-54.962%) scaleY(0.02647)"}}></span>
                          <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer) inset-0 motion-reduce:transition-none origin-bottom to-(--layer)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-slate-400)", "--layer-shade": "color-mix(in oklab, var(--color-slate-400) 72%, black)", animationDelay: "350ms", transform: "translateY(-57.609%) scaleY(0.01889)"}}></span>
                          <span className="-skew-y-45 absolute inset-y-0 left-full origin-bottom-left w-(--depth)">
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-teal-500)", "--layer-shade": "color-mix(in oklab, var(--color-teal-500) 72%, black)", animationDelay: "350ms", transform: "translateY(0%) scaleY(0.330915)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-amber-400)", "--layer-shade": "color-mix(in oklab, var(--color-amber-400) 72%, black)", animationDelay: "350ms", transform: "translateY(-33.0915%) scaleY(0.134415)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-violet-500)", "--layer-shade": "color-mix(in oklab, var(--color-violet-500) 72%, black)", animationDelay: "350ms", transform: "translateY(-46.533%) scaleY(0.05523)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-sky-500)", "--layer-shade": "color-mix(in oklab, var(--color-sky-500) 72%, black)", animationDelay: "350ms", transform: "translateY(-52.056%) scaleY(0.02906)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-rose-400)", "--layer-shade": "color-mix(in oklab, var(--color-rose-400) 72%, black)", animationDelay: "350ms", transform: "translateY(-54.962%) scaleY(0.02647)"}}></span>
                            <span className="absolute bg-linear-to-t duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] from-(--layer-shade) inset-0 motion-reduce:transition-none origin-bottom to-(--layer-shade)/65 transition-transform" data-c9-rise="" style={{"--layer": "var(--color-slate-400)", "--layer-shade": "color-mix(in oklab, var(--color-slate-400) 72%, black)", animationDelay: "350ms", transform: "translateY(-57.609%) scaleY(0.01889)"}}></span>
                          </span>
                          <span className="absolute duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] inset-0 motion-reduce:transition-none transition-transform" data-c9-lift="" style={{"--cap": "color-mix(in oklab, var(--color-slate-400) 35%, var(--background))", animationDelay: "350ms", transform: "translateY(40.502%)"}}>
                            <span className="-skew-x-45 absolute bg-(--cap) bottom-full h-(--depth) left-0 origin-bottom w-full"></span>
                          </span>
                        </span>
                        <span className="absolute inset-0 pointer-events-none" aria-hidden="true">
                          <span className="absolute bg-(--layer)/8 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] inset-0 motion-reduce:transition-none origin-bottom transition-transform" data-c9-rise="" style={{"--layer": "var(--foreground)", "--layer-shade": "color-mix(in oklab, var(--foreground) 72%, black)", animationDelay: "350ms", transform: "translateY(-59.498%) scaleY(0.198327)", backgroundImage: "linear-gradient(to bottom right, transparent 42%, color-mix(in oklab, var(--foreground) 40%, transparent) 42% 58%, transparent 58%)", backgroundSize: "6px 30.2531px"}}></span>
                          <span className="-skew-y-45 absolute inset-y-0 left-full origin-bottom-left w-(--depth)">
                            <span className="absolute bg-(--layer)/16 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] inset-0 motion-reduce:transition-none origin-bottom transition-transform" data-c9-rise="" style={{"--layer": "var(--foreground)", "--layer-shade": "color-mix(in oklab, var(--foreground) 72%, black)", animationDelay: "350ms", transform: "translateY(-59.498%) scaleY(0.198327)"}}></span>
                          </span>
                          <span className="absolute duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] inset-0 motion-reduce:transition-none transition-transform" data-c9-lift="" style={{"--cap": "var(--foreground)", animationDelay: "350ms", transform: "translateY(20.6693%)"}}>
                            <span className="-skew-x-45 absolute bg-(--cap)/14 bottom-full h-(--depth) left-0 origin-bottom w-full"></span>
                            <span className="@3xl:block absolute bottom-[calc(100%+var(--depth)+--spacing(1))] font-medium hidden left-0 tabular-nums text-center text-foreground text-xs w-[calc(100%+var(--depth))] whitespace-nowrap">
                              {"$15.9M"}
                              <span className="font-normal text-muted-foreground">
                                {"est."}
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="h-2 shrink-0"></span>
                    <span className="@3xl:flex-row @3xl:gap-1 @3xl:justify-center flex flex-col h-8 items-center leading-4 max-w-[calc(var(--prism-w)+var(--depth))] pr-(--depth) shrink-0 tabular-nums text-xs w-full">
                      <span className="group-hover/year:text-foreground text-muted-foreground transition-colors">
                        {"2026"}
                      </span>
                      <span className="text-muted-foreground">
                        {"YTD"}
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="@3xl:flex @3xl:justify-center grid justify-items-center min-w-0 ps-11">
              <ToggleGroup className="@3xl:flex @3xl:flex-wrap @3xl:justify-center grid grid-cols-2" data-orientation="horizontal" aria-orientation="horizontal" role="group" size="sm" spacing="1" aria-label="Isolate a fund" style={{"--gap": "1"}}>
                <ToggleGroupItem className="@3xl:justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-start outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex={0} aria-pressed="false" variant="default" size="sm" spacing="1">
                  <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-teal-500)"}}></span>
                  {"WaveMark Capital"}
                </ToggleGroupItem>
                <ToggleGroupItem className="@3xl:justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-start outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="default" size="sm" spacing="1">
                  <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-amber-400)"}}></span>
                  {"Envato Finances"}
                </ToggleGroupItem>
                <ToggleGroupItem className="@3xl:justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-start outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="default" size="sm" spacing="1">
                  <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-violet-500)"}}></span>
                  {"QBridge Tech"}
                </ToggleGroupItem>
                <ToggleGroupItem className="@3xl:justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-start outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="default" size="sm" spacing="1">
                  <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-sky-500)"}}></span>
                  {"Neon Liquidity"}
                </ToggleGroupItem>
                <ToggleGroupItem className="@3xl:justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-start outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="default" size="sm" spacing="1">
                  <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-rose-400)"}}></span>
                  {"Stripe Treasury"}
                </ToggleGroupItem>
                <ToggleGroupItem className="@3xl:justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-start outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="default" size="sm" spacing="1">
                  <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-slate-400)"}}></span>
                  {"ETH Reserve Pool"}
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </FramePanel>
        <footer className="flex flex-row flex-wrap gap-(--frame-panel-footer-gap) gap-x-4 gap-y-1 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) text-xs">
          <span className="flex gap-1.5 items-center text-muted-foreground">
            {"USD"}
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            {"Demo figures, unaudited"}
          </span>
          <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground">
            {"Booked through Sep 30, 2026"}
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            {"Synced 2h ago"}
          </span>
        </footer>
      </Frame>
    </div>
  )
}
