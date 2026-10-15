import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Frame className="@container max-w-5xl w-full" spacing="default">
        <header className="flex flex-row flex-wrap gap-3 items-center justify-between min-w-0 px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-0.5 min-w-0">
            <div className="flex gap-2 items-center min-w-0">
              <div className="font-semibold text-sm truncate">
                {"Revenue Flow"}
              </div>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                {"Q3 FY26"}
              </Badge>
            </div>
            <div className="text-muted-foreground text-sm truncate">
              {"Where each dollar of Fieldline revenue goes"}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Select>
            <SelectTrigger className="w-32" type="button" tabIndex="0" id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Quarter" extracted="1">
              <SelectValue>
                {"Q3 FY2026"}
              </SelectValue>
              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
                {"▼"}
              </svg>
            </SelectTrigger>
            </Select>
            <input id="base-ui-_r_0_-hidden-input" tabIndex="-1" aria-hidden="true" value="q3-fy26" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Chart options" aria-haspopup="menu" id="base-ui-_r_6_" aria-expanded="false">
              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </header>
        <FramePanel>
          <style dangerouslySetInnerHTML={{ __html: "\n@keyframes c48-roll { from { transform: translateY(0); } }\n.c48-roll { animation: c48-roll 900ms cubic-bezier(0.22, 1, 0.36, 1) var(--c48-delay, 0ms) backwards; }\n@media (prefers-reduced-motion: reduce) { .c48-roll { animation: none; } }\nhtml[data-demo=\"frozen\"] .c48-roll { animation: none; }\n" }} />
          <dl className="@2xl:grid-cols-4 gap-x-6 gap-y-4 grid grid-cols-2">
            <div className="@2xl:not-first:border-s @2xl:not-first:ps-6 flex flex-col gap-1.5 min-w-0">
              <dt className="flex font-medium gap-1.5 items-center text-muted-foreground text-xs">
                <span className="bg-primary rounded-full shrink-0 size-2" aria-hidden="true"></span>
                {"Revenue"}
              </dt>
              <dd className="flex flex-col gap-1.5 min-w-0">
                <span className="font-semibold inline-flex leading-none tabular-nums text-xl tracking-tight">
                  <span className="sr-only">
                    {"$649M"}
                  </span>
                  <span className="inline-flex" aria-hidden="true">
                    <span>
                      {"$"}
                    </span>
                    <span className="h-[1em] inline-block overflow-hidden">
                      <span className="c48-roll duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col motion-reduce:transition-none transition-transform" style={{transform: "translateY(-60%)", "--c48-delay": "40ms"}}>
                        <span className="h-[1em]">
                          {"0"}
                        </span>
                        <span className="h-[1em]">
                          {"1"}
                        </span>
                        <span className="h-[1em]">
                          {"2"}
                        </span>
                        <span className="h-[1em]">
                          {"3"}
                        </span>
                        <span className="h-[1em]">
                          {"4"}
                        </span>
                        <span className="h-[1em]">
                          {"5"}
                        </span>
                        <span className="h-[1em]">
                          {"6"}
                        </span>
                        <span className="h-[1em]">
                          {"7"}
                        </span>
                        <span className="h-[1em]">
                          {"8"}
                        </span>
                        <span className="h-[1em]">
                          {"9"}
                        </span>
                      </span>
                    </span>
                    <span className="h-[1em] inline-block overflow-hidden">
                      <span className="c48-roll duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col motion-reduce:transition-none transition-transform" style={{transform: "translateY(-40%)", "--c48-delay": "80ms"}}>
                        <span className="h-[1em]">
                          {"0"}
                        </span>
                        <span className="h-[1em]">
                          {"1"}
                        </span>
                        <span className="h-[1em]">
                          {"2"}
                        </span>
                        <span className="h-[1em]">
                          {"3"}
                        </span>
                        <span className="h-[1em]">
                          {"4"}
                        </span>
                        <span className="h-[1em]">
                          {"5"}
                        </span>
                        <span className="h-[1em]">
                          {"6"}
                        </span>
                        <span className="h-[1em]">
                          {"7"}
                        </span>
                        <span className="h-[1em]">
                          {"8"}
                        </span>
                        <span className="h-[1em]">
                          {"9"}
                        </span>
                      </span>
                    </span>
                    <span className="h-[1em] inline-block overflow-hidden">
                      <span className="c48-roll duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col motion-reduce:transition-none transition-transform" style={{transform: "translateY(-90%)", "--c48-delay": "120ms"}}>
                        <span className="h-[1em]">
                          {"0"}
                        </span>
                        <span className="h-[1em]">
                          {"1"}
                        </span>
                        <span className="h-[1em]">
                          {"2"}
                        </span>
                        <span className="h-[1em]">
                          {"3"}
                        </span>
                        <span className="h-[1em]">
                          {"4"}
                        </span>
                        <span className="h-[1em]">
                          {"5"}
                        </span>
                        <span className="h-[1em]">
                          {"6"}
                        </span>
                        <span className="h-[1em]">
                          {"7"}
                        </span>
                        <span className="h-[1em]">
                          {"8"}
                        </span>
                        <span className="h-[1em]">
                          {"9"}
                        </span>
                      </span>
                    </span>
                    <span>
                      {"M"}
                    </span>
                  </span>
                </span>
                <span className="flex gap-1.5 items-center min-w-0">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    <span className="tabular-nums">
                      {"+8.9%"}
                    </span>
                  </Badge>
                  <span className="@3xl:inline hidden text-muted-foreground text-xs truncate">
                    {"vs Q2 FY26"}
                  </span>
                </span>
              </dd>
            </div>
            <div className="@2xl:not-first:border-s @2xl:not-first:ps-6 flex flex-col gap-1.5 min-w-0">
              <dt className="flex font-medium gap-1.5 items-center text-muted-foreground text-xs">
                <span className="bg-success rounded-full shrink-0 size-2" aria-hidden="true"></span>
                {"Gross Margin"}
              </dt>
              <dd className="flex flex-col gap-1.5 min-w-0">
                <span className="font-semibold inline-flex leading-none tabular-nums text-xl tracking-tight">
                  <span className="sr-only">
                    {"73.0%"}
                  </span>
                  <span className="inline-flex" aria-hidden="true">
                    <span className="h-[1em] inline-block overflow-hidden">
                      <span className="c48-roll duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col motion-reduce:transition-none transition-transform" style={{transform: "translateY(-70%)", "--c48-delay": "0ms"}}>
                        <span className="h-[1em]">
                          {"0"}
                        </span>
                        <span className="h-[1em]">
                          {"1"}
                        </span>
                        <span className="h-[1em]">
                          {"2"}
                        </span>
                        <span className="h-[1em]">
                          {"3"}
                        </span>
                        <span className="h-[1em]">
                          {"4"}
                        </span>
                        <span className="h-[1em]">
                          {"5"}
                        </span>
                        <span className="h-[1em]">
                          {"6"}
                        </span>
                        <span className="h-[1em]">
                          {"7"}
                        </span>
                        <span className="h-[1em]">
                          {"8"}
                        </span>
                        <span className="h-[1em]">
                          {"9"}
                        </span>
                      </span>
                    </span>
                    <span className="h-[1em] inline-block overflow-hidden">
                      <span className="c48-roll duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col motion-reduce:transition-none transition-transform" style={{transform: "translateY(-30%)", "--c48-delay": "40ms"}}>
                        <span className="h-[1em]">
                          {"0"}
                        </span>
                        <span className="h-[1em]">
                          {"1"}
                        </span>
                        <span className="h-[1em]">
                          {"2"}
                        </span>
                        <span className="h-[1em]">
                          {"3"}
                        </span>
                        <span className="h-[1em]">
                          {"4"}
                        </span>
                        <span className="h-[1em]">
                          {"5"}
                        </span>
                        <span className="h-[1em]">
                          {"6"}
                        </span>
                        <span className="h-[1em]">
                          {"7"}
                        </span>
                        <span className="h-[1em]">
                          {"8"}
                        </span>
                        <span className="h-[1em]">
                          {"9"}
                        </span>
                      </span>
                    </span>
                    <span>
                      {"."}
                    </span>
                    <span className="h-[1em] inline-block overflow-hidden">
                      <span className="c48-roll duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col motion-reduce:transition-none transition-transform" style={{transform: "translateY(0%)", "--c48-delay": "120ms"}}>
                        <span className="h-[1em]">
                          {"0"}
                        </span>
                        <span className="h-[1em]">
                          {"1"}
                        </span>
                        <span className="h-[1em]">
                          {"2"}
                        </span>
                        <span className="h-[1em]">
                          {"3"}
                        </span>
                        <span className="h-[1em]">
                          {"4"}
                        </span>
                        <span className="h-[1em]">
                          {"5"}
                        </span>
                        <span className="h-[1em]">
                          {"6"}
                        </span>
                        <span className="h-[1em]">
                          {"7"}
                        </span>
                        <span className="h-[1em]">
                          {"8"}
                        </span>
                        <span className="h-[1em]">
                          {"9"}
                        </span>
                      </span>
                    </span>
                    <span>
                      {"%"}
                    </span>
                  </span>
                </span>
                <span className="flex gap-1.5 items-center min-w-0">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                      <path d="M16 17h6v-6"></path>
                      <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                    </svg>
                    <span className="tabular-nums">
                      {"-0.5 pts"}
                    </span>
                  </Badge>
                  <span className="@3xl:inline hidden text-muted-foreground text-xs truncate">
                    {"vs Q2 FY26"}
                  </span>
                </span>
              </dd>
            </div>
            <div className="@2xl:not-first:border-s @2xl:not-first:ps-6 flex flex-col gap-1.5 min-w-0">
              <dt className="flex font-medium gap-1.5 items-center text-muted-foreground text-xs">
                <span className="bg-success rounded-full shrink-0 size-2" aria-hidden="true"></span>
                {"Operating Margin"}
              </dt>
              <dd className="flex flex-col gap-1.5 min-w-0">
                <span className="font-semibold inline-flex leading-none tabular-nums text-xl tracking-tight">
                  <span className="sr-only">
                    {"21.9%"}
                  </span>
                  <span className="inline-flex" aria-hidden="true">
                    <span className="h-[1em] inline-block overflow-hidden">
                      <span className="c48-roll duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col motion-reduce:transition-none transition-transform" style={{transform: "translateY(-20%)", "--c48-delay": "0ms"}}>
                        <span className="h-[1em]">
                          {"0"}
                        </span>
                        <span className="h-[1em]">
                          {"1"}
                        </span>
                        <span className="h-[1em]">
                          {"2"}
                        </span>
                        <span className="h-[1em]">
                          {"3"}
                        </span>
                        <span className="h-[1em]">
                          {"4"}
                        </span>
                        <span className="h-[1em]">
                          {"5"}
                        </span>
                        <span className="h-[1em]">
                          {"6"}
                        </span>
                        <span className="h-[1em]">
                          {"7"}
                        </span>
                        <span className="h-[1em]">
                          {"8"}
                        </span>
                        <span className="h-[1em]">
                          {"9"}
                        </span>
                      </span>
                    </span>
                    <span className="h-[1em] inline-block overflow-hidden">
                      <span className="c48-roll duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col motion-reduce:transition-none transition-transform" style={{transform: "translateY(-10%)", "--c48-delay": "40ms"}}>
                        <span className="h-[1em]">
                          {"0"}
                        </span>
                        <span className="h-[1em]">
                          {"1"}
                        </span>
                        <span className="h-[1em]">
                          {"2"}
                        </span>
                        <span className="h-[1em]">
                          {"3"}
                        </span>
                        <span className="h-[1em]">
                          {"4"}
                        </span>
                        <span className="h-[1em]">
                          {"5"}
                        </span>
                        <span className="h-[1em]">
                          {"6"}
                        </span>
                        <span className="h-[1em]">
                          {"7"}
                        </span>
                        <span className="h-[1em]">
                          {"8"}
                        </span>
                        <span className="h-[1em]">
                          {"9"}
                        </span>
                      </span>
                    </span>
                    <span>
                      {"."}
                    </span>
                    <span className="h-[1em] inline-block overflow-hidden">
                      <span className="c48-roll duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col motion-reduce:transition-none transition-transform" style={{transform: "translateY(-90%)", "--c48-delay": "120ms"}}>
                        <span className="h-[1em]">
                          {"0"}
                        </span>
                        <span className="h-[1em]">
                          {"1"}
                        </span>
                        <span className="h-[1em]">
                          {"2"}
                        </span>
                        <span className="h-[1em]">
                          {"3"}
                        </span>
                        <span className="h-[1em]">
                          {"4"}
                        </span>
                        <span className="h-[1em]">
                          {"5"}
                        </span>
                        <span className="h-[1em]">
                          {"6"}
                        </span>
                        <span className="h-[1em]">
                          {"7"}
                        </span>
                        <span className="h-[1em]">
                          {"8"}
                        </span>
                        <span className="h-[1em]">
                          {"9"}
                        </span>
                      </span>
                    </span>
                    <span>
                      {"%"}
                    </span>
                  </span>
                </span>
                <span className="flex gap-1.5 items-center min-w-0">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                      <path d="M16 17h6v-6"></path>
                      <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                    </svg>
                    <span className="tabular-nums">
                      {"-0.9 pts"}
                    </span>
                  </Badge>
                  <span className="@3xl:inline hidden text-muted-foreground text-xs truncate">
                    {"vs Q2 FY26"}
                  </span>
                </span>
              </dd>
            </div>
            <div className="@2xl:not-first:border-s @2xl:not-first:ps-6 flex flex-col gap-1.5 min-w-0">
              <dt className="flex font-medium gap-1.5 items-center text-muted-foreground text-xs">
                <span className="bg-success rounded-full shrink-0 size-2" aria-hidden="true"></span>
                {"Net Income"}
              </dt>
              <dd className="flex flex-col gap-1.5 min-w-0">
                <span className="font-semibold inline-flex leading-none tabular-nums text-xl tracking-tight">
                  <span className="sr-only">
                    {"$111M"}
                  </span>
                  <span className="inline-flex" aria-hidden="true">
                    <span>
                      {"$"}
                    </span>
                    <span className="h-[1em] inline-block overflow-hidden">
                      <span className="c48-roll duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col motion-reduce:transition-none transition-transform" style={{transform: "translateY(-10%)", "--c48-delay": "40ms"}}>
                        <span className="h-[1em]">
                          {"0"}
                        </span>
                        <span className="h-[1em]">
                          {"1"}
                        </span>
                        <span className="h-[1em]">
                          {"2"}
                        </span>
                        <span className="h-[1em]">
                          {"3"}
                        </span>
                        <span className="h-[1em]">
                          {"4"}
                        </span>
                        <span className="h-[1em]">
                          {"5"}
                        </span>
                        <span className="h-[1em]">
                          {"6"}
                        </span>
                        <span className="h-[1em]">
                          {"7"}
                        </span>
                        <span className="h-[1em]">
                          {"8"}
                        </span>
                        <span className="h-[1em]">
                          {"9"}
                        </span>
                      </span>
                    </span>
                    <span className="h-[1em] inline-block overflow-hidden">
                      <span className="c48-roll duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col motion-reduce:transition-none transition-transform" style={{transform: "translateY(-10%)", "--c48-delay": "80ms"}}>
                        <span className="h-[1em]">
                          {"0"}
                        </span>
                        <span className="h-[1em]">
                          {"1"}
                        </span>
                        <span className="h-[1em]">
                          {"2"}
                        </span>
                        <span className="h-[1em]">
                          {"3"}
                        </span>
                        <span className="h-[1em]">
                          {"4"}
                        </span>
                        <span className="h-[1em]">
                          {"5"}
                        </span>
                        <span className="h-[1em]">
                          {"6"}
                        </span>
                        <span className="h-[1em]">
                          {"7"}
                        </span>
                        <span className="h-[1em]">
                          {"8"}
                        </span>
                        <span className="h-[1em]">
                          {"9"}
                        </span>
                      </span>
                    </span>
                    <span className="h-[1em] inline-block overflow-hidden">
                      <span className="c48-roll duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col motion-reduce:transition-none transition-transform" style={{transform: "translateY(-10%)", "--c48-delay": "120ms"}}>
                        <span className="h-[1em]">
                          {"0"}
                        </span>
                        <span className="h-[1em]">
                          {"1"}
                        </span>
                        <span className="h-[1em]">
                          {"2"}
                        </span>
                        <span className="h-[1em]">
                          {"3"}
                        </span>
                        <span className="h-[1em]">
                          {"4"}
                        </span>
                        <span className="h-[1em]">
                          {"5"}
                        </span>
                        <span className="h-[1em]">
                          {"6"}
                        </span>
                        <span className="h-[1em]">
                          {"7"}
                        </span>
                        <span className="h-[1em]">
                          {"8"}
                        </span>
                        <span className="h-[1em]">
                          {"9"}
                        </span>
                      </span>
                    </span>
                    <span>
                      {"M"}
                    </span>
                  </span>
                </span>
                <span className="flex gap-1.5 items-center min-w-0">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    <span className="tabular-nums">
                      {"+3.7%"}
                    </span>
                  </Badge>
                  <span className="@3xl:inline hidden text-muted-foreground text-xs truncate">
                    {"vs Q2 FY26"}
                  </span>
                </span>
              </dd>
            </div>
          </dl>
        </FramePanel>
        <FramePanel className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2 items-center justify-between min-w-0">
            <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Highlight flows" style={{"--gap": "0"}}>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="sm" spacing="0">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"All"}
                </span>
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="0">
                <span className="bg-primary rounded-full shrink-0 size-2" aria-hidden="true"></span>
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Revenue"}
                </span>
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="0">
                <span className="bg-destructive rounded-full shrink-0 size-2" aria-hidden="true"></span>
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Costs"}
                </span>
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="0">
                <span className="bg-success rounded-full shrink-0 size-2" aria-hidden="true"></span>
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Profit"}
                </span>
              </ToggleGroupItem>
            </ToggleGroup>
            <span className="@lg:inline hidden text-muted-foreground text-xs">
              {"Click a node to trace its flow"}
            </span>
          </div>
          <div className="-mx-1 overflow-x-auto px-1">
            <div className="min-w-3xl overflow-hidden relative">
              <style dangerouslySetInnerHTML={{ __html: "\n@keyframes c48-wipe { from { transform: translateX(0); } to { transform: translateX(100%); } }\n@keyframes c48-ants { to { stroke-dashoffset: -4; } }\n.c48-wipe { animation: c48-wipe 1300ms cubic-bezier(0.65, 0, 0.35, 1) 100ms both; }\n.c48-ants { animation: c48-ants 800ms linear infinite; }\n@media (prefers-reduced-motion: reduce) {\n  .c48-wipe { display: none; }\n  .c48-ants { animation: none; }\n}\nhtml[data-demo=\"frozen\"] .c48-wipe { display: none; }\nhtml[data-demo=\"frozen\"] .c48-ants { animation: none; }\n" }} />
              <ChartContainer>
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-96 justify-center text-xs w-full" data-chart="chart-_r_d_" role="img" aria-label="Income statement flow from $649M revenue to $111M net income">
                <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_d_] {\n  --color-revenue: var(--primary);\n  --color-cost: var(--destructive);\n  --color-profit: var(--success);\n}\n\n\n.dark [data-chart=chart-_r_d_] {\n  --color-revenue: var(--primary);\n  --color-cost: var(--destructive);\n  --color-profit: var(--success);\n}\n" }} />
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width="990" height="384" style={{position: "relative", cursor: "default", width: "990px", height: "384px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" width="990" height="384" viewBox="0 0 990 384">
                        <title></title>
                        <desc></desc>
                        <g className="recharts-layer recharts-sankey-links">
                          <g className="recharts-layer">
                            <g>
                              <defs>
                                <lineargradient id="rc-link-0" gradientUnits="userSpaceOnUse" x1="122" x2="292" y1="0" y2="0">
                                  <stop offset="0%" stopColor="var(--color-revenue)"></stop>
                                  <stop offset="100%" stopColor="var(--color-revenue)"></stop>
                                </lineargradient>
                              </defs>
                              <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity" opacity="0.26">
                                <path className="cursor-pointer" fill="none" stroke="url(#rc-link-0)" d="M122,116.45608628659477 C215.5,116.45608628659477 198.5,139.8330882414281 292,139.8330882414281" strokeWidth="208.9121725731895"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g>
                              <defs>
                                <lineargradient id="rc-link-1" gradientUnits="userSpaceOnUse" x1="122" x2="292" y1="0" y2="0">
                                  <stop offset="0%" stopColor="var(--color-revenue)"></stop>
                                  <stop offset="100%" stopColor="var(--color-revenue)"></stop>
                                </lineargradient>
                              </defs>
                              <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity" opacity="0.26">
                                <path className="cursor-pointer" fill="none" stroke="url(#rc-link-1)" d="M122,284.2773497688752 C215.5,284.2773497688752 198.5,279.65435172370854 292,279.65435172370854" strokeWidth="70.73035439137134"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g>
                              <defs>
                                <lineargradient id="rc-link-2" gradientUnits="userSpaceOnUse" x1="122" x2="292" y1="0" y2="0">
                                  <stop offset="0%" stopColor="var(--color-revenue)"></stop>
                                  <stop offset="100%" stopColor="var(--color-revenue)"></stop>
                                </lineargradient>
                              </defs>
                              <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity" opacity="0.26">
                                <path className="cursor-pointer" fill="none" stroke="url(#rc-link-2)" d="M122,359.8212634822805 C215.5,359.8212634822805 198.5,327.1982654371138 292,327.1982654371138" strokeWidth="24.357473035439135"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g>
                              <defs>
                                <lineargradient id="rc-link-3" gradientUnits="userSpaceOnUse" x1="302" x2="472" y1="0" y2="0">
                                  <stop offset="0%" stopColor="var(--color-revenue)"></stop>
                                  <stop offset="100%" stopColor="var(--color-profit)"></stop>
                                </lineargradient>
                              </defs>
                              <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity" opacity="0.26">
                                <path className="cursor-pointer" fill="none" stroke="url(#rc-link-3)" d="M302,146.3908694432771 C395.5,146.3908694432771 378.5,151.01386748844376 472,151.01386748844376" strokeWidth="222.0277349768875"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g>
                              <defs>
                                <lineargradient id="rc-link-4" gradientUnits="userSpaceOnUse" x1="302" x2="472" y1="0" y2="0">
                                  <stop offset="0%" stopColor="var(--color-revenue)"></stop>
                                  <stop offset="100%" stopColor="var(--color-cost)"></stop>
                                </lineargradient>
                              </defs>
                              <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity" opacity="0.26">
                                <path className="cursor-pointer" fill="none" stroke="url(#rc-link-4)" d="M302,298.3908694432771 C395.5,298.3908694432771 378.5,331.0138674884438 472,331.0138674884438" strokeWidth="81.97226502311247"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g>
                              <defs>
                                <lineargradient id="rc-link-5" gradientUnits="userSpaceOnUse" x1="482" x2="652" y1="0" y2="0">
                                  <stop offset="0%" stopColor="var(--color-profit)"></stop>
                                  <stop offset="100%" stopColor="var(--color-profit)"></stop>
                                </lineargradient>
                              </defs>
                              <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity" opacity="0.26">
                                <path className="cursor-pointer" fill="none" stroke="url(#rc-link-5)" d="M482,73.25731895223421 C575.5,73.25731895223421 558.5,155.22958397534669 652,155.22958397534669" strokeWidth="66.51463790446842"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g>
                              <defs>
                                <lineargradient id="rc-link-6" gradientUnits="userSpaceOnUse" x1="482" x2="652" y1="0" y2="0">
                                  <stop offset="0%" stopColor="var(--color-profit)"></stop>
                                  <stop offset="100%" stopColor="var(--color-cost)"></stop>
                                </lineargradient>
                              </defs>
                              <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity" opacity="0.26">
                                <path className="cursor-pointer" fill="none" stroke="url(#rc-link-6)" d="M482,184.27118644067798 C575.5,184.27118644067798 558.5,294.24345146379045 652,294.24345146379045" strokeWidth="155.5130970724191"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g>
                              <defs>
                                <lineargradient id="rc-link-7" gradientUnits="userSpaceOnUse" x1="662" x2="832" y1="0" y2="0">
                                  <stop offset="0%" stopColor="var(--color-profit)"></stop>
                                  <stop offset="100%" stopColor="var(--color-profit)"></stop>
                                </lineargradient>
                              </defs>
                              <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity" opacity="0.26">
                                <path className="cursor-pointer" fill="none" stroke="url(#rc-link-7)" d="M662,147.96918335901387 C755.5,147.96918335901387 738.5,63.96918335901387 832,63.96918335901387" strokeWidth="51.99383667180277"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g>
                              <defs>
                                <lineargradient id="rc-link-8" gradientUnits="userSpaceOnUse" x1="662" x2="832" y1="0" y2="0">
                                  <stop offset="0%" stopColor="var(--color-profit)"></stop>
                                  <stop offset="100%" stopColor="var(--color-cost)"></stop>
                                </lineargradient>
                              </defs>
                              <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity" opacity="0.26">
                                <path className="cursor-pointer" fill="none" stroke="url(#rc-link-8)" d="M662,181.22650231124808 C755.5,181.22650231124808 738.5,125.22650231124808 832,125.22650231124808" strokeWidth="14.520801232665638"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g>
                              <defs>
                                <lineargradient id="rc-link-9" gradientUnits="userSpaceOnUse" x1="662" x2="832" y1="0" y2="0">
                                  <stop offset="0%" stopColor="var(--color-cost)"></stop>
                                  <stop offset="100%" stopColor="var(--color-cost)"></stop>
                                </lineargradient>
                              </defs>
                              <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity" opacity="0.26">
                                <path className="cursor-pointer" fill="none" stroke="url(#rc-link-9)" d="M662,247.63636363636363 C755.5,247.63636363636363 738.5,191.63636363636363 832,191.63636363636363" strokeWidth="62.29892141756548"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g>
                              <defs>
                                <lineargradient id="rc-link-10" gradientUnits="userSpaceOnUse" x1="662" x2="832" y1="0" y2="0">
                                  <stop offset="0%" stopColor="var(--color-cost)"></stop>
                                  <stop offset="100%" stopColor="var(--color-cost)"></stop>
                                </lineargradient>
                              </defs>
                              <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity" opacity="0.26">
                                <path className="cursor-pointer" fill="none" stroke="url(#rc-link-10)" d="M662,313.6825885978428 C755.5,313.6825885978428 738.5,285.6825885978428 832,285.6825885978428" strokeWidth="69.79352850539291"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g>
                              <defs>
                                <lineargradient id="rc-link-11" gradientUnits="userSpaceOnUse" x1="662" x2="832" y1="0" y2="0">
                                  <stop offset="0%" stopColor="var(--color-cost)"></stop>
                                  <stop offset="100%" stopColor="var(--color-cost)"></stop>
                                </lineargradient>
                              </defs>
                              <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity" opacity="0.26">
                                <path className="cursor-pointer" fill="none" stroke="url(#rc-link-11)" d="M662,360.28967642526965 C755.5,360.28967642526965 738.5,360.28967642526965 832,360.28967642526965" strokeWidth="23.42064714946071"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-layer recharts-sankey-nodes">
                          <g className="recharts-layer">
                            <g className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <g style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <rect x="112" y="12.000000000000014" width="10" height="208.9121725731895" rx="1.5" fill="var(--color-revenue)" style={{transformBox: "fill-box", transform: "none", transformOrigin: "50% 0% 0px"}}></rect>
                              </g>
                              <g opacity="1" style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <text className="pointer-events-none text-xs" x="104" y="109.45608628659477" textAnchor="end" dominantBaseline="middle" stroke="var(--frame-panel-bg, var(--background))" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                  <tspan className="fill-foreground font-medium">
                                    {"Subscriptions"}
                                  </tspan>
                                  <tspan className="tabular-nums" x="104" dy="15">
                                    <tspan className="fill-foreground">
                                      {"$446M"}
                                    </tspan>
                                    <tspan className="fill-muted-foreground" dx="5">
                                      {"69%"}
                                    </tspan>
                                  </tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <g style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <rect x="112" y="248.91217257318954" width="10" height="70.73035439137134" rx="1.5" fill="var(--color-revenue)" style={{transformBox: "fill-box", transform: "none", transformOrigin: "50% 0% 0px"}}></rect>
                              </g>
                              <g opacity="1" style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <text className="pointer-events-none text-xs" x="104" y="277.2773497688752" textAnchor="end" dominantBaseline="middle" stroke="var(--frame-panel-bg, var(--background))" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                  <tspan className="fill-foreground font-medium">
                                    {"Usage"}
                                  </tspan>
                                  <tspan className="tabular-nums" x="104" dy="15">
                                    <tspan className="fill-foreground">
                                      {"$151M"}
                                    </tspan>
                                    <tspan className="fill-muted-foreground" dx="5">
                                      {"23%"}
                                    </tspan>
                                  </tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <g style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <rect x="112" y="347.6425269645609" width="10" height="24.357473035439135" rx="1.5" fill="var(--color-revenue)" style={{transformBox: "fill-box", transform: "none", transformOrigin: "50% 0% 0px"}}></rect>
                              </g>
                              <g opacity="1" style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <text className="pointer-events-none text-xs" x="104" y="352.8212634822805" textAnchor="end" dominantBaseline="middle" stroke="var(--frame-panel-bg, var(--background))" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                  <tspan className="fill-foreground font-medium">
                                    {"Services"}
                                  </tspan>
                                  <tspan className="tabular-nums" x="104" dy="15">
                                    <tspan className="fill-foreground">
                                      {"$52M"}
                                    </tspan>
                                    <tspan className="fill-muted-foreground" dx="5">
                                      {"8%"}
                                    </tspan>
                                  </tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <g style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <rect x="292" y="35.377001954833354" width="10" height="304" rx="1.5" fill="var(--color-revenue)" style={{transformBox: "fill-box", transform: "none", transformOrigin: "50% 0% 0px"}}></rect>
                              </g>
                              <g opacity="1" style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <text className="pointer-events-none text-xs" x="310" y="180.37700195483336" textAnchor="start" dominantBaseline="middle" stroke="var(--frame-panel-bg, var(--background))" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                  <tspan className="fill-foreground font-medium">
                                    {"Revenue"}
                                  </tspan>
                                  <tspan className="tabular-nums" x="310" dy="15">
                                    <tspan className="fill-foreground">
                                      {"$649M"}
                                    </tspan>
                                  </tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <g style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <rect x="472" y="40.00000000000001" width="10" height="222.0277349768875" rx="1.5" fill="var(--color-profit)" style={{transformBox: "fill-box", transform: "none", transformOrigin: "50% 0% 0px"}}></rect>
                              </g>
                              <g opacity="1" style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <text className="pointer-events-none text-xs" x="490" y="144.01386748844376" textAnchor="start" dominantBaseline="middle" stroke="var(--frame-panel-bg, var(--background))" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                  <tspan className="fill-foreground font-medium">
                                    {"Gross Profit"}
                                  </tspan>
                                  <tspan className="tabular-nums" x="490" dy="15">
                                    <tspan className="fill-foreground">
                                      {"$474M"}
                                    </tspan>
                                    <tspan className="fill-muted-foreground" dx="5">
                                      {"73%"}
                                    </tspan>
                                  </tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <g style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <rect x="472" y="290.02773497688753" width="10" height="81.97226502311247" rx="1.5" fill="var(--color-cost)" style={{transformBox: "fill-box", transform: "none", transformOrigin: "50% 0% 0px"}}></rect>
                              </g>
                              <g opacity="1" style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <text className="pointer-events-none text-xs" x="490" y="324.0138674884438" textAnchor="start" dominantBaseline="middle" stroke="var(--frame-panel-bg, var(--background))" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                  <tspan className="fill-foreground font-medium">
                                    {"Cost of Revenue"}
                                  </tspan>
                                  <tspan className="tabular-nums" x="490" dy="15">
                                    <tspan className="fill-foreground">
                                      {"$175M"}
                                    </tspan>
                                    <tspan className="fill-muted-foreground" dx="5">
                                      {"27%"}
                                    </tspan>
                                  </tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <g style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <rect x="652" y="121.97226502311248" width="10" height="66.51463790446842" rx="1.5" fill="var(--color-profit)" style={{transformBox: "fill-box", transform: "none", transformOrigin: "50% 0% 0px"}}></rect>
                              </g>
                              <g opacity="1" style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <text className="pointer-events-none text-xs" x="670" y="148.22958397534669" textAnchor="start" dominantBaseline="middle" stroke="var(--frame-panel-bg, var(--background))" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                  <tspan className="fill-foreground font-medium">
                                    {"Operating Income"}
                                  </tspan>
                                  <tspan className="tabular-nums" x="670" dy="15">
                                    <tspan className="fill-foreground">
                                      {"$142M"}
                                    </tspan>
                                    <tspan className="fill-muted-foreground" dx="5">
                                      {"22%"}
                                    </tspan>
                                  </tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <g style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <rect x="652" y="216.4869029275809" width="10" height="155.5130970724191" rx="1.5" fill="var(--color-cost)" style={{transformBox: "fill-box", transform: "none", transformOrigin: "50% 0% 0px"}}></rect>
                              </g>
                              <g opacity="1" style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <text className="pointer-events-none text-xs" x="670" y="287.24345146379045" textAnchor="start" dominantBaseline="middle" stroke="var(--frame-panel-bg, var(--background))" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                  <tspan className="fill-foreground font-medium">
                                    {"Operating Expenses"}
                                  </tspan>
                                  <tspan className="tabular-nums" x="670" dy="15">
                                    <tspan className="fill-foreground">
                                      {"$332M"}
                                    </tspan>
                                    <tspan className="fill-muted-foreground" dx="5">
                                      {"51%"}
                                    </tspan>
                                  </tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <g style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <rect x="832" y="37.972265023112485" width="10" height="51.99383667180277" rx="1.5" fill="var(--color-profit)" style={{transformBox: "fill-box", transform: "none", transformOrigin: "50% 0% 0px"}}></rect>
                              </g>
                              <g opacity="1" style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <text className="pointer-events-none text-xs" x="850" y="56.96918335901387" textAnchor="start" dominantBaseline="middle" stroke="var(--frame-panel-bg, var(--background))" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                  <tspan className="fill-foreground font-medium">
                                    {"Net Income"}
                                  </tspan>
                                  <tspan className="tabular-nums" x="850" dy="15">
                                    <tspan className="fill-foreground">
                                      {"$111M"}
                                    </tspan>
                                    <tspan className="fill-muted-foreground" dx="5">
                                      {"17%"}
                                    </tspan>
                                  </tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <g style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <rect x="832" y="117.96610169491527" width="10" height="14.520801232665638" rx="1.5" fill="var(--color-cost)" style={{transformBox: "fill-box", transform: "none", transformOrigin: "50% 0% 0px"}}></rect>
                              </g>
                              <g opacity="1" style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <text className="pointer-events-none text-xs" x="850" y="118.22650231124808" textAnchor="start" dominantBaseline="middle" stroke="var(--frame-panel-bg, var(--background))" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                  <tspan className="fill-foreground font-medium">
                                    {"Income Tax"}
                                  </tspan>
                                  <tspan className="tabular-nums" x="850" dy="15">
                                    <tspan className="fill-foreground">
                                      {"$31M"}
                                    </tspan>
                                    <tspan className="fill-muted-foreground" dx="5">
                                      {"5%"}
                                    </tspan>
                                  </tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <g style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <rect x="832" y="160.4869029275809" width="10" height="62.29892141756548" rx="1.5" fill="var(--color-cost)" style={{transformBox: "fill-box", transform: "none", transformOrigin: "50% 0% 0px"}}></rect>
                              </g>
                              <g opacity="1" style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <text className="pointer-events-none text-xs" x="850" y="184.63636363636363" textAnchor="start" dominantBaseline="middle" stroke="var(--frame-panel-bg, var(--background))" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                  <tspan className="fill-foreground font-medium">
                                    {"R&D"}
                                  </tspan>
                                  <tspan className="tabular-nums" x="850" dy="15">
                                    <tspan className="fill-foreground">
                                      {"$133M"}
                                    </tspan>
                                    <tspan className="fill-muted-foreground" dx="5">
                                      {"20%"}
                                    </tspan>
                                  </tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <g style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <rect x="832" y="250.78582434514635" width="10" height="69.79352850539291" rx="1.5" fill="var(--color-cost)" style={{transformBox: "fill-box", transform: "none", transformOrigin: "50% 0% 0px"}}></rect>
                              </g>
                              <g opacity="1" style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <text className="pointer-events-none text-xs" x="850" y="278.6825885978428" textAnchor="start" dominantBaseline="middle" stroke="var(--frame-panel-bg, var(--background))" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                  <tspan className="fill-foreground font-medium">
                                    {"Sales & Marketing"}
                                  </tspan>
                                  <tspan className="tabular-nums" x="850" dy="15">
                                    <tspan className="fill-foreground">
                                      {"$149M"}
                                    </tspan>
                                    <tspan className="fill-muted-foreground" dx="5">
                                      {"23%"}
                                    </tspan>
                                  </tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <g style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <rect x="832" y="348.5793528505393" width="10" height="23.42064714946071" rx="1.5" fill="var(--color-cost)" style={{transformBox: "fill-box", transform: "none", transformOrigin: "50% 0% 0px"}}></rect>
                              </g>
                              <g opacity="1" style={{transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box"}}>
                                <text className="pointer-events-none text-xs" x="850" y="353.28967642526965" textAnchor="start" dominantBaseline="middle" stroke="var(--frame-panel-bg, var(--background))" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                  <tspan className="fill-foreground font-medium">
                                    {"G&A"}
                                  </tspan>
                                  <tspan className="tabular-nums" x="850" dy="15">
                                    <tspan className="fill-foreground">
                                      {"$50M"}
                                    </tspan>
                                    <tspan className="fill-muted-foreground" dx="5">
                                      {"8%"}
                                    </tspan>
                                  </tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              </ChartContainer>
              <div className="-left-32 absolute c48-wipe inset-y-0 pointer-events-none w-[calc(100%+8rem)]" aria-hidden="true" style={{background: "linear-gradient(to right, transparent, var(--frame-panel-bg, var(--background)) 8rem)"}}></div>
            </div>
          </div>
          <ul className="sr-only">
            <li>
              {"Subscriptions to Revenue: $446M"}
            </li>
            <li>
              {"Usage to Revenue: $151M"}
            </li>
            <li>
              {"Services to Revenue: $52M"}
            </li>
            <li>
              {"Revenue to Gross Profit: $474M"}
            </li>
            <li>
              {"Revenue to Cost of Revenue: $175M"}
            </li>
            <li>
              {"Gross Profit to Operating Income: $142M"}
            </li>
            <li>
              {"Gross Profit to Operating Expenses: $332M"}
            </li>
            <li>
              {"Operating Income to Net Income: $111M"}
            </li>
            <li>
              {"Operating Income to Income Tax: $31M"}
            </li>
            <li>
              {"Operating Expenses to R&D: $133M"}
            </li>
            <li>
              {"Operating Expenses to Sales & Marketing: $149M"}
            </li>
            <li>
              {"Operating Expenses to G&A: $50M"}
            </li>
          </ul>
        </FramePanel>
        <footer className="flex flex-row flex-wrap gap-(--frame-panel-footer-gap) gap-x-4 gap-y-1 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) text-xs">
          <span className="flex gap-1.5 items-center text-muted-foreground">
            {"USD millions"}
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            {"Demo figures, unaudited"}
          </span>
          <span className="tabular-nums text-muted-foreground">
            {"Updated Oct 9, 2026"}
          </span>
        </footer>
      </Frame>
    </div>
  )
}
