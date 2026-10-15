import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import { Filters } from "@/registry-neui/bases/base/neui/filters/filters"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="min-h-svh w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Audit Log"}
      </h1>
      <div className="bg-background flex flex-col min-h-svh w-full">
        <div className="max-w-[1320px] md:p-4 mx-auto p-3 w-full">
          <div className="@container flex flex-col gap-4 w-full">
            <div className="flex flex-wrap gap-3 items-center justify-between">
              <div className="flex flex-col gap-0.5 min-w-0">
                <h2 className="font-semibold leading-tight text-foreground text-lg tracking-tight">
                  {"Audit Log"}
                </h2>
                <p className="text-muted-foreground text-sm">
                  {"Every change to production, secrets and access"}
                </p>
              </div>
              <div className="flex gap-2 items-center shrink-0">
                <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" spacing="0" aria-label="Time range" style={{"--gap": "0"}}>
                  <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none tabular-nums whitespace-nowrap" type="button" aria-disabled="false" tabIndex={0} aria-pressed="false" variant="outline" size="default" spacing="0" title="Last hour" extracted="1">
                    {"1h"}
                  </ToggleGroupItem>
                  <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none tabular-nums whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="outline" size="default" spacing="0" title="Last 24 hours">
                    {"24h"}
                  </ToggleGroupItem>
                  <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none tabular-nums whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex={-1} aria-pressed="true" variant="outline" size="default" spacing="0" title="Last 7 days">
                    {"7d"}
                  </ToggleGroupItem>
                  <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none tabular-nums whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="outline" size="default" spacing="0" title="Last 30 days">
                    {"30d"}
                  </ToggleGroupItem>
                </ToggleGroup>
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-default disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_7_" aria-expanded="false">
                  <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                    <path d="M12 15V3"></path>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <path d="m7 10 5 5 5-5"></path>
                  </svg>
                  {"Export"}
                  <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </div>
            </div>
            <div className="@4xl:grid-cols-5 gap-4 grid grid-cols-1 items-stretch">
              <div className="@4xl:col-span-3 min-w-0">
                <Frame className="h-full min-w-0" spacing="default">
                  <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="basis-40 flex flex-col gap-px grow min-w-0">
                      <div className="font-semibold text-sm">
                        {"Event Volume"}
                      </div>
                      <div className="text-muted-foreground text-xs truncate">
                        {"6-hour buckets, UTC"}
                      </div>
                    </div>
                    <ToggleGroup className="flex-wrap" multiple="" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="2" aria-label="Outcomes in the chart" style={{"--gap": "2"}}>
                      <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:bg-card aria-pressed:text-foreground cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] gap-1.5 group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex={0} aria-pressed="true" variant="outline" size="sm" spacing="2" aria-label="Success, 59 events">
                        <span className="bg-success rounded-full shrink-0 size-2" aria-hidden="true"></span>
                        {"Success"}
                        <span className="tabular-nums">
                          {"59"}
                        </span>
                      </ToggleGroupItem>
                      <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:bg-card aria-pressed:text-foreground cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] gap-1.5 group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex={-1} aria-pressed="true" variant="outline" size="sm" spacing="2" aria-label="Denied, 4 events">
                        <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                        {"Denied"}
                        <span className="tabular-nums">
                          {"4"}
                        </span>
                      </ToggleGroupItem>
                      <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:bg-card aria-pressed:text-foreground cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] gap-1.5 group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex={-1} aria-pressed="true" variant="outline" size="sm" spacing="2" aria-label="Failed, 2 events">
                        <span className="bg-destructive rounded-full shrink-0 size-2" aria-hidden="true"></span>
                        {"Failed"}
                        <span className="tabular-nums">
                          {"2"}
                        </span>
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </header>
                  <FramePanel className="flex flex-1 flex-col gap-4 min-h-0">
                    <div className="flex gap-3 items-start justify-between min-w-0">
                      <div className="min-w-0" aria-live="polite" aria-atomic="true">
                        <div className="@xl:flex-row @xl:gap-3 @xl:items-baseline flex flex-col gap-1 min-w-0">
                          <div className="flex gap-1.5 items-baseline shrink-0">
                            <span className="font-semibold tabular-nums text-2xl tracking-tight">
                              {"65"}
                            </span>
                            <span className="text-muted-foreground text-sm">
                              {"events"}
                            </span>
                          </div>
                          <div className="@xl:flex-nowrap @xl:min-h-0 @xl:overflow-hidden @xl:whitespace-nowrap content-start flex flex-wrap gap-x-1.5 gap-y-1 items-center min-h-9 min-w-0 tabular-nums text-muted-foreground text-xs">
                            <span className="gap-1 inline-flex items-center">
                              <svg className="lucide lucide-trending-up size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                <path d="M16 7h6v6"></path>
                                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                              </svg>
                              {"+25% vs prior 7d"}
                            </span>
                            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                            <span>
                              {"6.2% denied"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 mt-auto relative">
                      <ChartContainer>
                      <div className="@4xl:h-62 [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart cursor-pointer flex h-48 has-[.recharts-surface:focus-visible]:ring-[3px] has-[.recharts-surface:focus-visible]:ring-ring/50 justify-center min-w-0 select-none text-xs touch-pan-y w-full" data-chart="chart-_r_d_" role="group" aria-label="Events per bucket: Success, Denied, and Failed. Arrow keys move, Enter selects, Shift+Enter extends, Escape clears.">
                        <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_d_] {\n  --color-success: var(--success);\n  --color-denied: var(--warning);\n  --color-failed: var(--destructive);\n}\n\n\n.dark [data-chart=chart-_r_d_] {\n  --color-success: var(--success);\n  --color-denied: var(--warning);\n  --color-failed: var(--destructive);\n}\n" }} />
                        <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                          <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                            <div className="recharts-wrapper" width={708} height={248} style={{position: "relative", cursor: "default", width: "708px", height: "248px"}}>
                              <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                              <svg className="recharts-surface" role="application" tabIndex={0} width={708} height={248} viewBox="0 0 708 248" style={{width: "100%", height: "100%", display: "block"}}>
                                <title></title>
                                <desc></desc>
                                <g className="recharts-zIndex-layer_-100" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_-50" tabIndex={-1}>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={28.331} y={28} width={12} height={190} radius="4" d={"M 28.331,32\n            A 4,4,0,0,1,32.331,28\n            L 36.331,28\n            A 4,4,0,0,1,40.331,32\n            L 40.331,214\n            A 4,4,0,0,1,36.331,218\n            L 32.331,218\n            A 4,4,0,0,1,28.331,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={49.9862} y={28} width={12} height={190} radius="4" d={"M 49.9862,32\n            A 4,4,0,0,1,53.9862,28\n            L 57.9862,28\n            A 4,4,0,0,1,61.9862,32\n            L 61.9862,214\n            A 4,4,0,0,1,57.9862,218\n            L 53.9862,218\n            A 4,4,0,0,1,49.9862,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={71.6414} y={28} width={12} height={190} radius="4" d={"M 71.6414,32\n            A 4,4,0,0,1,75.6414,28\n            L 79.6414,28\n            A 4,4,0,0,1,83.6414,32\n            L 83.6414,214\n            A 4,4,0,0,1,79.6414,218\n            L 75.6414,218\n            A 4,4,0,0,1,71.6414,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={93.2966} y={28} width={12} height={190} radius="4" d={"M 93.2966,32\n            A 4,4,0,0,1,97.2966,28\n            L 101.2966,28\n            A 4,4,0,0,1,105.2966,32\n            L 105.2966,214\n            A 4,4,0,0,1,101.2966,218\n            L 97.2966,218\n            A 4,4,0,0,1,93.2966,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={114.9517} y={28} width={12} height={190} radius="4" d={"M 114.9517,32\n            A 4,4,0,0,1,118.9517,28\n            L 122.9517,28\n            A 4,4,0,0,1,126.9517,32\n            L 126.9517,214\n            A 4,4,0,0,1,122.9517,218\n            L 118.9517,218\n            A 4,4,0,0,1,114.9517,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={136.6069} y={28} width={12} height={190} radius="4" d={"M 136.6069,32\n            A 4,4,0,0,1,140.6069,28\n            L 144.6069,28\n            A 4,4,0,0,1,148.6069,32\n            L 148.6069,214\n            A 4,4,0,0,1,144.6069,218\n            L 140.6069,218\n            A 4,4,0,0,1,136.6069,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={158.2621} y={28} width={12} height={190} radius="4" d={"M 158.2621,32\n            A 4,4,0,0,1,162.2621,28\n            L 166.2621,28\n            A 4,4,0,0,1,170.2621,32\n            L 170.2621,214\n            A 4,4,0,0,1,166.2621,218\n            L 162.2621,218\n            A 4,4,0,0,1,158.2621,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={179.9172} y={28} width={12} height={190} radius="4" d={"M 179.9172,32\n            A 4,4,0,0,1,183.9172,28\n            L 187.9172,28\n            A 4,4,0,0,1,191.9172,32\n            L 191.9172,214\n            A 4,4,0,0,1,187.9172,218\n            L 183.9172,218\n            A 4,4,0,0,1,179.9172,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={201.5724} y={28} width={12} height={190} radius="4" d={"M 201.5724,32\n            A 4,4,0,0,1,205.5724,28\n            L 209.5724,28\n            A 4,4,0,0,1,213.5724,32\n            L 213.5724,214\n            A 4,4,0,0,1,209.5724,218\n            L 205.5724,218\n            A 4,4,0,0,1,201.5724,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={223.2276} y={28} width={12} height={190} radius="4" d={"M 223.2276,32\n            A 4,4,0,0,1,227.2276,28\n            L 231.2276,28\n            A 4,4,0,0,1,235.2276,32\n            L 235.2276,214\n            A 4,4,0,0,1,231.2276,218\n            L 227.2276,218\n            A 4,4,0,0,1,223.2276,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={244.8828} y={28} width={12} height={190} radius="4" d={"M 244.8828,32\n            A 4,4,0,0,1,248.8828,28\n            L 252.8828,28\n            A 4,4,0,0,1,256.8828,32\n            L 256.8828,214\n            A 4,4,0,0,1,252.8828,218\n            L 248.8828,218\n            A 4,4,0,0,1,244.8828,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={266.5379} y={28} width={12} height={190} radius="4" d={"M 266.5379,32\n            A 4,4,0,0,1,270.5379,28\n            L 274.5379,28\n            A 4,4,0,0,1,278.5379,32\n            L 278.5379,214\n            A 4,4,0,0,1,274.5379,218\n            L 270.5379,218\n            A 4,4,0,0,1,266.5379,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={288.1931} y={28} width={12} height={190} radius="4" d={"M 288.1931,32\n            A 4,4,0,0,1,292.1931,28\n            L 296.1931,28\n            A 4,4,0,0,1,300.1931,32\n            L 300.1931,214\n            A 4,4,0,0,1,296.1931,218\n            L 292.1931,218\n            A 4,4,0,0,1,288.1931,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={309.8483} y={28} width={12} height={190} radius="4" d={"M 309.8483,32\n            A 4,4,0,0,1,313.8483,28\n            L 317.8483,28\n            A 4,4,0,0,1,321.8483,32\n            L 321.8483,214\n            A 4,4,0,0,1,317.8483,218\n            L 313.8483,218\n            A 4,4,0,0,1,309.8483,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={331.5034} y={28} width={12} height={190} radius="4" d={"M 331.5034,32\n            A 4,4,0,0,1,335.5034,28\n            L 339.5034,28\n            A 4,4,0,0,1,343.5034,32\n            L 343.5034,214\n            A 4,4,0,0,1,339.5034,218\n            L 335.5034,218\n            A 4,4,0,0,1,331.5034,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={353.1586} y={28} width={12} height={190} radius="4" d={"M 353.1586,32\n            A 4,4,0,0,1,357.1586,28\n            L 361.1586,28\n            A 4,4,0,0,1,365.1586,32\n            L 365.1586,214\n            A 4,4,0,0,1,361.1586,218\n            L 357.1586,218\n            A 4,4,0,0,1,353.1586,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={374.8138} y={28} width={12} height={190} radius="4" d={"M 374.8138,32\n            A 4,4,0,0,1,378.8138,28\n            L 382.8138,28\n            A 4,4,0,0,1,386.8138,32\n            L 386.8138,214\n            A 4,4,0,0,1,382.8138,218\n            L 378.8138,218\n            A 4,4,0,0,1,374.8138,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={396.469} y={28} width={12} height={190} radius="4" d={"M 396.469,32\n            A 4,4,0,0,1,400.469,28\n            L 404.469,28\n            A 4,4,0,0,1,408.469,32\n            L 408.469,214\n            A 4,4,0,0,1,404.469,218\n            L 400.469,218\n            A 4,4,0,0,1,396.469,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={418.1241} y={28} width={12} height={190} radius="4" d={"M 418.1241,32\n            A 4,4,0,0,1,422.1241,28\n            L 426.1241,28\n            A 4,4,0,0,1,430.1241,32\n            L 430.1241,214\n            A 4,4,0,0,1,426.1241,218\n            L 422.1241,218\n            A 4,4,0,0,1,418.1241,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={439.7793} y={28} width={12} height={190} radius="4" d={"M 439.7793,32\n            A 4,4,0,0,1,443.7793,28\n            L 447.7793,28\n            A 4,4,0,0,1,451.7793,32\n            L 451.7793,214\n            A 4,4,0,0,1,447.7793,218\n            L 443.7793,218\n            A 4,4,0,0,1,439.7793,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={461.4345} y={28} width={12} height={190} radius="4" d={"M 461.4345,32\n            A 4,4,0,0,1,465.4345,28\n            L 469.4345,28\n            A 4,4,0,0,1,473.4345,32\n            L 473.4345,214\n            A 4,4,0,0,1,469.4345,218\n            L 465.4345,218\n            A 4,4,0,0,1,461.4345,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={483.0897} y={28} width={12} height={190} radius="4" d={"M 483.0897,32\n            A 4,4,0,0,1,487.0897,28\n            L 491.0897,28\n            A 4,4,0,0,1,495.0897,32\n            L 495.0897,214\n            A 4,4,0,0,1,491.0897,218\n            L 487.0897,218\n            A 4,4,0,0,1,483.0897,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={504.7448} y={28} width={12} height={190} radius="4" d={"M 504.7448,32\n            A 4,4,0,0,1,508.7448,28\n            L 512.7448,28\n            A 4,4,0,0,1,516.7448,32\n            L 516.7448,214\n            A 4,4,0,0,1,512.7448,218\n            L 508.7448,218\n            A 4,4,0,0,1,504.7448,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={526.4} y={28} width={12} height={190} radius="4" d={"M 526.4,32\n            A 4,4,0,0,1,530.4,28\n            L 534.4,28\n            A 4,4,0,0,1,538.4,32\n            L 538.4,214\n            A 4,4,0,0,1,534.4,218\n            L 530.4,218\n            A 4,4,0,0,1,526.4,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={548.0552} y={28} width={12} height={190} radius="4" d={"M 548.0552,32\n            A 4,4,0,0,1,552.0552,28\n            L 556.0552,28\n            A 4,4,0,0,1,560.0552,32\n            L 560.0552,214\n            A 4,4,0,0,1,556.0552,218\n            L 552.0552,218\n            A 4,4,0,0,1,548.0552,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={569.7103} y={28} width={12} height={190} radius="4" d={"M 569.7103,32\n            A 4,4,0,0,1,573.7103,28\n            L 577.7103,28\n            A 4,4,0,0,1,581.7103,32\n            L 581.7103,214\n            A 4,4,0,0,1,577.7103,218\n            L 573.7103,218\n            A 4,4,0,0,1,569.7103,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={591.3655} y={28} width={12} height={190} radius="4" d={"M 591.3655,32\n            A 4,4,0,0,1,595.3655,28\n            L 599.3655,28\n            A 4,4,0,0,1,603.3655,32\n            L 603.3655,214\n            A 4,4,0,0,1,599.3655,218\n            L 595.3655,218\n            A 4,4,0,0,1,591.3655,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={613.0207} y={28} width={12} height={190} radius="4" d={"M 613.0207,32\n            A 4,4,0,0,1,617.0207,28\n            L 621.0207,28\n            A 4,4,0,0,1,625.0207,32\n            L 625.0207,214\n            A 4,4,0,0,1,621.0207,218\n            L 617.0207,218\n            A 4,4,0,0,1,613.0207,214 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="fill-muted recharts-rectangle" x={634.6759} y={28} width={12} height={190} radius="4" d={"M 634.6759,32\n            A 4,4,0,0,1,638.6759,28\n            L 642.6759,28\n            A 4,4,0,0,1,646.6759,32\n            L 646.6759,214\n            A 4,4,0,0,1,642.6759,218\n            L 638.6759,218\n            A 4,4,0,0,1,634.6759,214 Z"}></path>
                                  </g>
                                </g>
                                <defs>
                                  <clippath id="recharts1-clip">
                                    <rect x={24} y={28} height={190} width={628}></rect>
                                  </clippath>
                                </defs>
                                <defs>
                                  <pattern id="hatch-_r_9_-success" width={6} height={6} patternUnits="userSpaceOnUse" patterntransform="rotate(45)">
                                    <rect width={6} height={6} style={{fill: "color-mix(in oklab, var(--success) 22%, var(--card))"}}></rect>
                                    <line x1={1} x2={1} y2={6} strokeWidth={2} style={{stroke: "color-mix(in oklab, var(--success) 52%, var(--card))"}}></line>
                                  </pattern>
                                  <pattern id="hatch-_r_9_-denied" width={6} height={6} patternUnits="userSpaceOnUse" patterntransform="rotate(45)">
                                    <rect width={6} height={6} style={{fill: "color-mix(in oklab, var(--warning) 38%, var(--card))"}}></rect>
                                    <line x1={1} x2={1} y2={6} strokeWidth={2} style={{stroke: "color-mix(in oklab, var(--warning) 86%, var(--card))"}}></line>
                                  </pattern>
                                  <pattern id="hatch-_r_9_-failed" width={6} height={6} patternUnits="userSpaceOnUse" patterntransform="rotate(45)">
                                    <rect width={6} height={6} style={{fill: "color-mix(in oklab, var(--destructive) 30%, var(--card))"}}></rect>
                                    <line x1={1} x2={1} y2={6} strokeWidth={2} style={{stroke: "color-mix(in oklab, var(--destructive) 74%, var(--card))"}}></line>
                                  </pattern>
                                </defs>
                                <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_250" tabIndex={-1}>
                                  <g className="recharts-layer recharts-reference-line">
                                    <line className="recharts-reference-line-line" y={2.2413793103448274} stroke="var(--muted-foreground)" strokeOpacity={0.6} strokeDasharray="4 4" fill="none" fillOpacity={1} strokeWidth={1} x1={24} y1={189.60919540229887} x2={652} y2={189.60919540229887}></line>
                                  </g>
                                </g>
                                <g className="recharts-zIndex-layer_300" tabIndex={-1}>
                                  <g className="recharts-bar recharts-layer" id="recharts-bar-_r_54_">
                                    <g className="recharts-bar-rectangles recharts-layer">
                                      <g className="recharts-layer">
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790100000000" x={28.331} y={192.6667} width={12} height={25.3333} fill="url(#hatch-_r_9_-success)" radius="4" d={"M 28.331,196.6667\n            A 4,4,0,0,1,32.331,192.6667\n            L 36.331,192.6667\n            A 4,4,0,0,1,40.331,196.6667\n            L 40.331,214\n            A 4,4,0,0,1,36.331,218\n            L 32.331,218\n            A 4,4,0,0,1,28.331,214 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790121600000" x={49.9862} y={192.6667} width={12} height={25.3333} fill="url(#hatch-_r_9_-success)" radius="4" d={"M 49.9862,196.6667\n            A 4,4,0,0,1,53.9862,192.6667\n            L 57.9862,192.6667\n            A 4,4,0,0,1,61.9862,196.6667\n            L 61.9862,214\n            A 4,4,0,0,1,57.9862,218\n            L 53.9862,218\n            A 4,4,0,0,1,49.9862,214 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790143200000" x={71.6414} y={205.3333} width={12} height={12.6667} fill="url(#hatch-_r_9_-success)" radius="4" d={"M 71.6414,209.3333\n            A 4,4,0,0,1,75.6414,205.3333\n            L 79.6414,205.3333\n            A 4,4,0,0,1,83.6414,209.3333\n            L 83.6414,214\n            A 4,4,0,0,1,79.6414,218\n            L 75.6414,218\n            A 4,4,0,0,1,71.6414,214 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790164800000" x={93.2966} y={180} width={12} height={38} fill="url(#hatch-_r_9_-success)" radius="4" d={"M 93.2966,184\n            A 4,4,0,0,1,97.2966,180\n            L 101.2966,180\n            A 4,4,0,0,1,105.2966,184\n            L 105.2966,214\n            A 4,4,0,0,1,101.2966,218\n            L 97.2966,218\n            A 4,4,0,0,1,93.2966,214 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790186400000" x={114.9517} y={167.3333} width={12} height={50.6667} fill="url(#hatch-_r_9_-success)" radius="4" d={"M 114.9517,171.3333\n            A 4,4,0,0,1,118.9517,167.3333\n            L 122.9517,167.3333\n            A 4,4,0,0,1,126.9517,171.3333\n            L 126.9517,214\n            A 4,4,0,0,1,122.9517,218\n            L 118.9517,218\n            A 4,4,0,0,1,114.9517,214 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790208000000" x={136.6069} y={192.6667} width={12} height={25.3333} fill="url(#hatch-_r_9_-success)" radius="4" d={"M 136.6069,196.6667\n            A 4,4,0,0,1,140.6069,192.6667\n            L 144.6069,192.6667\n            A 4,4,0,0,1,148.6069,196.6667\n            L 148.6069,214\n            A 4,4,0,0,1,144.6069,218\n            L 140.6069,218\n            A 4,4,0,0,1,136.6069,214 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790251200000" x={179.9172} y={167.3333} width={12} height={50.6667} fill="url(#hatch-_r_9_-success)" radius="4" d={"M 179.9172,171.3333\n            A 4,4,0,0,1,183.9172,167.3333\n            L 187.9172,167.3333\n            A 4,4,0,0,1,191.9172,171.3333\n            L 191.9172,214\n            A 4,4,0,0,1,187.9172,218\n            L 183.9172,218\n            A 4,4,0,0,1,179.9172,214 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790272800000" x={201.5724} y={167.3333} width={12} height={50.6667} fill="url(#hatch-_r_9_-success)" radius="4" d={"M 201.5724,171.3333\n            A 4,4,0,0,1,205.5724,167.3333\n            L 209.5724,167.3333\n            A 4,4,0,0,1,213.5724,171.3333\n            L 213.5724,214\n            A 4,4,0,0,1,209.5724,218\n            L 205.5724,218\n            A 4,4,0,0,1,201.5724,214 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790294400000" x={223.2276} y={206.3333} width={12} height={11.6667} fill="url(#hatch-_r_9_-success)" radius="4" d={"M 223.2276,210.3333\n            A 4,4,0,0,1,227.2276,206.3333\n            L 231.2276,206.3333\n            A 4,4,0,0,1,235.2276,210.3333\n            L 235.2276,214\n            A 4,4,0,0,1,231.2276,218\n            L 227.2276,218\n            A 4,4,0,0,1,223.2276,214 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790316000000" x={244.8828} y={205.3333} width={12} height={12.6667} fill="url(#hatch-_r_9_-success)" radius="4" d={"M 244.8828,209.3333\n            A 4,4,0,0,1,248.8828,205.3333\n            L 252.8828,205.3333\n            A 4,4,0,0,1,256.8828,209.3333\n            L 256.8828,214\n            A 4,4,0,0,1,252.8828,218\n            L 248.8828,218\n            A 4,4,0,0,1,244.8828,214 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790337600000" x={266.5379} y={206.3333} width={12} height={11.6667} fill="url(#hatch-_r_9_-success)" radius="4" d={"M 266.5379,210.3333\n            A 4,4,0,0,1,270.5379,206.3333\n            L 274.5379,206.3333\n            A 4,4,0,0,1,278.5379,210.3333\n            L 278.5379,214\n            A 4,4,0,0,1,274.5379,218\n            L 270.5379,218\n            A 4,4,0,0,1,266.5379,214 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790359200000" x={288.1931} y={167.3333} width={12} height={50.6667} fill="url(#hatch-_r_9_-success)" radius="4" d={"M 288.1931,171.3333\n            A 4,4,0,0,1,292.1931,167.3333\n            L 296.1931,167.3333\n            A 4,4,0,0,1,300.1931,171.3333\n            L 300.1931,214\n            A 4,4,0,0,1,296.1931,218\n            L 292.1931,218\n            A 4,4,0,0,1,288.1931,214 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790380800000" x={309.8483} y={192.6667} width={12} height={25.3333} fill="url(#hatch-_r_9_-success)" radius="4" d={"M 309.8483,196.6667\n            A 4,4,0,0,1,313.8483,192.6667\n            L 317.8483,192.6667\n            A 4,4,0,0,1,321.8483,196.6667\n            L 321.8483,214\n            A 4,4,0,0,1,317.8483,218\n            L 313.8483,218\n            A 4,4,0,0,1,309.8483,214 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790424000000" x={353.1586} y={205.3333} width={12} height={12.6667} fill="url(#hatch-_r_9_-success)" radius="4" d={"M 353.1586,209.3333\n            A 4,4,0,0,1,357.1586,205.3333\n            L 361.1586,205.3333\n            A 4,4,0,0,1,365.1586,209.3333\n            L 365.1586,214\n            A 4,4,0,0,1,361.1586,218\n            L 357.1586,218\n            A 4,4,0,0,1,353.1586,214 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790445600000" x={374.8138} y={192.6667} width={12} height={25.3333} fill="url(#hatch-_r_9_-success)" radius="4" d={"M 374.8138,196.6667\n            A 4,4,0,0,1,378.8138,192.6667\n            L 382.8138,192.6667\n            A 4,4,0,0,1,386.8138,196.6667\n            L 386.8138,214\n            A 4,4,0,0,1,382.8138,218\n            L 378.8138,218\n            A 4,4,0,0,1,374.8138,214 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790510400000" x={439.7793} y={205.3333} width={12} height={12.6667} fill="url(#hatch-_r_9_-success)" radius="4" d={"M 439.7793,209.3333\n            A 4,4,0,0,1,443.7793,205.3333\n            L 447.7793,205.3333\n            A 4,4,0,0,1,451.7793,209.3333\n            L 451.7793,214\n            A 4,4,0,0,1,447.7793,218\n            L 443.7793,218\n            A 4,4,0,0,1,439.7793,214 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790532000000" x={461.4345} y={205.3333} width={12} height={12.6667} fill="url(#hatch-_r_9_-success)" radius="4" d={"M 461.4345,209.3333\n            A 4,4,0,0,1,465.4345,205.3333\n            L 469.4345,205.3333\n            A 4,4,0,0,1,473.4345,209.3333\n            L 473.4345,214\n            A 4,4,0,0,1,469.4345,218\n            L 465.4345,218\n            A 4,4,0,0,1,461.4345,214 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790596800000" x={526.4} y={180} width={12} height={38} fill="url(#hatch-_r_9_-success)" radius="4" d={"M 526.4,184\n            A 4,4,0,0,1,530.4,180\n            L 534.4,180\n            A 4,4,0,0,1,538.4,184\n            L 538.4,214\n            A 4,4,0,0,1,534.4,218\n            L 530.4,218\n            A 4,4,0,0,1,526.4,214 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790618400000" x={548.0552} y={167.3333} width={12} height={50.6667} fill="url(#hatch-_r_9_-success)" radius="4" d={"M 548.0552,171.3333\n            A 4,4,0,0,1,552.0552,167.3333\n            L 556.0552,167.3333\n            A 4,4,0,0,1,560.0552,171.3333\n            L 560.0552,214\n            A 4,4,0,0,1,556.0552,218\n            L 552.0552,218\n            A 4,4,0,0,1,548.0552,214 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790640000000" x={569.7103} y={167.3333} width={12} height={50.6667} fill="url(#hatch-_r_9_-success)" radius="4" d={"M 569.7103,171.3333\n            A 4,4,0,0,1,573.7103,167.3333\n            L 577.7103,167.3333\n            A 4,4,0,0,1,581.7103,171.3333\n            L 581.7103,214\n            A 4,4,0,0,1,577.7103,218\n            L 573.7103,218\n            A 4,4,0,0,1,569.7103,214 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790683200000" x={613.0207} y={193.6667} width={12} height={24.3333} fill="url(#hatch-_r_9_-success)" radius="4" d={"M 613.0207,197.6667\n            A 4,4,0,0,1,617.0207,193.6667\n            L 621.0207,193.6667\n            A 4,4,0,0,1,625.0207,197.6667\n            L 625.0207,214\n            A 4,4,0,0,1,621.0207,218\n            L 617.0207,218\n            A 4,4,0,0,1,613.0207,214 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790691600000" x={634.6759} y={92.3333} width={12} height={125.6667} fill="url(#hatch-_r_9_-success)" radius="4" d={"M 634.6759,96.3333\n            A 4,4,0,0,1,638.6759,92.3333\n            L 642.6759,92.3333\n            A 4,4,0,0,1,646.6759,96.3333\n            L 646.6759,214\n            A 4,4,0,0,1,642.6759,218\n            L 638.6759,218\n            A 4,4,0,0,1,634.6759,214 Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <g className="recharts-bar recharts-layer" id="recharts-bar-_r_55_">
                                    <g className="recharts-bar-rectangles recharts-layer">
                                      <g className="recharts-layer">
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790294400000" x={223.2276} y={192.6667} width={12} height={11.6667} fill="url(#hatch-_r_9_-denied)" radius="4" d={"M 223.2276,196.6667\n            A 4,4,0,0,1,227.2276,192.6667\n            L 231.2276,192.6667\n            A 4,4,0,0,1,235.2276,196.6667\n            L 235.2276,200.3333\n            A 4,4,0,0,1,231.2276,204.3333\n            L 227.2276,204.3333\n            A 4,4,0,0,1,223.2276,200.3333 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790683200000" x={613.0207} y={181} width={12} height={10.6667} fill="url(#hatch-_r_9_-denied)" radius="4" d={"M 613.0207,185\n            A 4,4,0,0,1,617.0207,181\n            L 621.0207,181\n            A 4,4,0,0,1,625.0207,185\n            L 625.0207,187.6667\n            A 4,4,0,0,1,621.0207,191.6667\n            L 617.0207,191.6667\n            A 4,4,0,0,1,613.0207,187.6667 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790691600000" x={634.6759} y={66} width={12} height={24.3333} fill="url(#hatch-_r_9_-denied)" radius="4" d={"M 634.6759,70\n            A 4,4,0,0,1,638.6759,66\n            L 642.6759,66\n            A 4,4,0,0,1,646.6759,70\n            L 646.6759,86.3333\n            A 4,4,0,0,1,642.6759,90.3333\n            L 638.6759,90.3333\n            A 4,4,0,0,1,634.6759,86.3333 Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <g className="recharts-bar recharts-layer" id="recharts-bar-_r_56_">
                                    <g className="recharts-bar-rectangles recharts-layer">
                                      <g className="recharts-layer">
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790337600000" x={266.5379} y={192.6667} width={12} height={11.6667} fill="url(#hatch-_r_9_-failed)" radius="4" d={"M 266.5379,196.6667\n            A 4,4,0,0,1,270.5379,192.6667\n            L 274.5379,192.6667\n            A 4,4,0,0,1,278.5379,196.6667\n            L 278.5379,200.3333\n            A 4,4,0,0,1,274.5379,204.3333\n            L 270.5379,204.3333\n            A 4,4,0,0,1,266.5379,200.3333 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" name="undefined" end="1790683200000" x={613.0207} y={167.3333} width={12} height={11.6667} fill="url(#hatch-_r_9_-failed)" radius="4" d={"M 613.0207,171.3333\n            A 4,4,0,0,1,617.0207,167.3333\n            L 621.0207,167.3333\n            A 4,4,0,0,1,625.0207,171.3333\n            L 625.0207,175\n            A 4,4,0,0,1,621.0207,179\n            L 617.0207,179\n            A 4,4,0,0,1,613.0207,175 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-zIndex-layer_400" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_500" tabIndex={-1}>
                                  <g className="recharts-cartesian-axis recharts-layer recharts-xAxis xAxis">
                                    <g className="recharts-cartesian-axis-ticks recharts-xAxis-ticks">
                                      <g className="recharts-cartesian-axis-tick-lines recharts-xAxis-tick-lines">
                                        <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                        <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                        <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                        <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                        <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                        <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                        <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      </g>
                                    </g>
                                  </g>
                                  <g className="recharts-cartesian-axis recharts-layer recharts-yAxis yAxis">
                                    <g className="recharts-cartesian-axis-ticks recharts-yAxis-ticks">
                                      <g className="recharts-cartesian-axis-tick-lines recharts-yAxis-tick-lines">
                                        <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                        <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                        <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                        <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-zIndex-layer_600" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_2000" tabIndex={-1}>
                                  <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={628} stroke="none" x={78.13793103448276} y={234} textAnchor="middle" fill="#666">
                                        <tspan x={78.13793103448276} dy="0.71em">
                                          {"Sep 23"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={628} stroke="none" x={164.75862068965515} y={234} textAnchor="middle" fill="#666">
                                        <tspan x={164.75862068965515} dy="0.71em">
                                          {"Sep 24"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={628} stroke="none" x={251.3793103448276} y={234} textAnchor="middle" fill="#666">
                                        <tspan x={251.3793103448276} dy="0.71em">
                                          {"Sep 25"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={628} stroke="none" x={338} y={234} textAnchor="middle" fill="#666">
                                        <tspan x={338} dy="0.71em">
                                          {"Sep 26"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={628} stroke="none" x={424.62068965517244} y={234} textAnchor="middle" fill="#666">
                                        <tspan x={424.62068965517244} dy="0.71em">
                                          {"Sep 27"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={628} stroke="none" x={511.2413793103448} y={234} textAnchor="middle" fill="#666">
                                        <tspan x={511.2413793103448} dy="0.71em">
                                          {"Sep 28"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={628} stroke="none" x={597.8620689655172} y={234} textAnchor="middle" fill="#666">
                                        <tspan x={597.8620689655172} dy="0.71em">
                                          {"Sep 29"}
                                        </tspan>
                                      </text>
                                    </g>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" width={24} orientation="left" height={190} stroke="none" x={18} y={218} textAnchor="end" fill="#666">
                                        <tspan x={18} dy="0.355em">
                                          {"0"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" width={24} orientation="left" height={190} stroke="none" x={18} y={154.66666666666669} textAnchor="end" fill="#666">
                                        <tspan x={18} dy="0.355em">
                                          {"5"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" width={24} orientation="left" height={190} stroke="none" x={18} y={91.33333333333334} textAnchor="end" fill="#666">
                                        <tspan x={18} dy="0.355em">
                                          {"10"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" width={24} orientation="left" height={190} stroke="none" x={18} y={28} textAnchor="end" fill="#666">
                                        <tspan x={18} dy="0.355em">
                                          {"15"}
                                        </tspan>
                                      </text>
                                    </g>
                                  </g>
                                  <text className="recharts-label recharts-text" offset={6} x={658} y={189.60919540229887} textAnchor="start" fill="var(--muted-foreground)">
                                    <tspan x={658} dy="0.355em">
                                      {"Avg 2.2"}
                                    </tspan>
                                  </text>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      </ChartContainer>
                      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                        <span className="absolute flex items-center justify-center size-5" style={{left: "631px", top: "0px"}}>
                          <Avatar className="size-5" size="sm" aria-hidden="true">
                            <AvatarImage alt="" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                        </span>
                        <span className="absolute flex items-center justify-center size-5" style={{left: "610px", top: "0px"}}>
                          <Avatar className="size-5" size="sm" aria-hidden="true">
                            <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                        </span>
                        <span className="absolute flex items-center justify-center size-5" style={{left: "220px", top: "0px"}}>
                          <Avatar className="size-5" size="sm" aria-hidden="true">
                            <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                        </span>
                      </div>
                    </div>
                  </FramePanel>
                </Frame>
              </div>
              <div className="@4xl:col-span-2 min-w-0">
                <Frame className="h-full min-w-0" spacing="default">
                  <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="flex flex-col gap-px min-w-0">
                      <div className="font-semibold text-sm">
                        {"Denied Attempts"}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {"Newest first, oldest 4d ago"}
                      </div>
                    </div>
                    <Button type="button" tabIndex={0}>
                      {"Review all"}
                      <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Button>
                  </header>
                  <FramePanel className="flex flex-1 flex-col gap-4 min-h-0 outline-none" tabIndex={-1}>
                    <div className="@xl:flex-row @xl:gap-3 @xl:items-baseline flex flex-col gap-1 min-w-0">
                      <div className="flex gap-1.5 items-baseline shrink-0">
                        <span className="font-semibold tabular-nums text-2xl tracking-tight">
                          {"4"}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {"to review"}
                        </span>
                      </div>
                      <div className="flex gap-x-1.5 items-center min-w-0 overflow-hidden tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                        <span>
                          {"2 actors"}
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="flex gap-1 items-center">
                          <span className="flex text-warning">
                            <svg className="lucide lucide-globe size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                              <circle cx={12} cy={12} r={10}></circle>
                              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                              <path d="M2 12h20"></path>
                            </svg>
                          </span>
                          {"2 from a new network"}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 min-h-0">
                      <div className="flex gap-3 h-5 items-center min-w-0">
                        <span className="flex flex-1 gap-0.5 items-center min-w-0" aria-hidden="true">
                          <span className="data-[linked=true]:h-3 flex-1 h-2 rounded-full" style={{backgroundImage: "repeating-linear-gradient(135deg, color-mix(in oklab, var(--warning) 86%, var(--card)) 0 2px, color-mix(in oklab, var(--warning) 38%, var(--card)) 2px 6px)"}}></span>
                          <span className="data-[linked=true]:h-3 flex-1 h-2 rounded-full" style={{backgroundImage: "repeating-linear-gradient(135deg, color-mix(in oklab, var(--warning) 86%, var(--card)) 0 2px, color-mix(in oklab, var(--warning) 38%, var(--card)) 2px 6px)"}}></span>
                          <span className="data-[linked=true]:h-3 flex-1 h-2 rounded-full" style={{backgroundImage: "repeating-linear-gradient(135deg, color-mix(in oklab, var(--warning) 86%, var(--card)) 0 2px, color-mix(in oklab, var(--warning) 38%, var(--card)) 2px 6px)"}}></span>
                          <span className="data-[linked=true]:h-3 flex-1 h-2 rounded-full" style={{backgroundImage: "repeating-linear-gradient(135deg, color-mix(in oklab, var(--warning) 86%, var(--card)) 0 2px, color-mix(in oklab, var(--warning) 38%, var(--card)) 2px 6px)"}}></span>
                        </span>
                        <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                          {"0 of 4 reviewed"}
                        </span>
                      </div>
                      <div className="@4xl:flex-1 @4xl:min-h-36 min-w-0 relative">
                        <ul className="-mx-2.5 @4xl:absolute @4xl:inset-0 @4xl:overflow-y-auto @4xl:scroll-fade-y flex flex-col" aria-label="Denied attempts">
                          <li className="group/row relative">
                            <Item className="aria-[current=true]:bg-muted cursor-pointer dark:aria-[current=true]:bg-muted/50 dark:data-[linked=true]:bg-muted/50 dark:group-hover/row:bg-muted/50 data-[linked=true]:bg-muted focus-visible:ring-inset group-hover/row:bg-muted items-start text-start" type="button" variant="default" size="xs">
                              <ItemMedia variant="default">
                                <Avatar className="size-5" size="sm" aria-hidden="true">
                                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </ItemMedia>
                              <ItemContent className="min-w-0">
                                <ItemTitle className="gap-1.5 max-w-full min-w-0">
                                  <span className="min-w-0 truncate">
                                    {"David Kim"}
                                  </span>
                                  <span className="flex shrink-0 text-warning">
                                    <svg className="lucide lucide-globe size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={10}></circle>
                                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                      <path d="M2 12h20"></path>
                                    </svg>
                                    <span className="sr-only">
                                      {"From a new network"}
                                    </span>
                                  </span>
                                </ItemTitle>
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="font-mono shrink-0">
                                    {"iam.role.grant"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"prod-db-admin"}
                                  </span>
                                </span>
                              </ItemContent>
                              <ItemActions>
                                <span className="leading-5 tabular-nums text-muted-foreground text-xs">
                                  {"14m ago"}
                                </span>
                              </ItemActions>
                            </Item>
                            <Tooltip>
                            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bottom-1 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none end-2.5 focus-visible:opacity-100 group-hover/row:opacity-100 group/button hover:bg-card inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Mark David Kim's iam.role.grant on prod-db-admin, 14m ago, reviewed" id="base-ui-_r_f_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </li>
                          <li className="group/row relative">
                            <Item className="aria-[current=true]:bg-muted cursor-pointer dark:aria-[current=true]:bg-muted/50 dark:data-[linked=true]:bg-muted/50 dark:group-hover/row:bg-muted/50 data-[linked=true]:bg-muted focus-visible:ring-inset group-hover/row:bg-muted items-start text-start" type="button" variant="default" size="xs">
                              <ItemMedia variant="default">
                                <Avatar className="size-5" size="sm" aria-hidden="true">
                                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </ItemMedia>
                              <ItemContent className="min-w-0">
                                <ItemTitle className="gap-1.5 max-w-full min-w-0">
                                  <span className="min-w-0 truncate">
                                    {"David Kim"}
                                  </span>
                                  <span className="flex shrink-0 text-warning">
                                    <svg className="lucide lucide-globe size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={10}></circle>
                                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                      <path d="M2 12h20"></path>
                                    </svg>
                                    <span className="sr-only">
                                      {"From a new network"}
                                    </span>
                                  </span>
                                </ItemTitle>
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="font-mono shrink-0">
                                    {"secret.reveal"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"ledger-db-admin-dsn"}
                                  </span>
                                </span>
                              </ItemContent>
                              <ItemActions>
                                <span className="leading-5 tabular-nums text-muted-foreground text-xs">
                                  {"20m ago"}
                                </span>
                              </ItemActions>
                            </Item>
                            <Tooltip>
                            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bottom-1 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none end-2.5 focus-visible:opacity-100 group-hover/row:opacity-100 group/button hover:bg-card inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Mark David Kim's secret.reveal on ledger-db-admin-dsn, 20m ago, reviewed" id="base-ui-_r_h_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </li>
                          <li className="group/row relative">
                            <Item className="aria-[current=true]:bg-muted cursor-pointer dark:aria-[current=true]:bg-muted/50 dark:data-[linked=true]:bg-muted/50 dark:group-hover/row:bg-muted/50 data-[linked=true]:bg-muted focus-visible:ring-inset group-hover/row:bg-muted items-start text-start" type="button" variant="default" size="xs">
                              <ItemMedia variant="default">
                                <Avatar className="size-5" size="sm" aria-hidden="true">
                                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </ItemMedia>
                              <ItemContent className="min-w-0">
                                <ItemTitle className="gap-1.5 max-w-full min-w-0">
                                  <span className="min-w-0 truncate">
                                    {"Sofia Romero"}
                                  </span>
                                </ItemTitle>
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="font-mono shrink-0">
                                    {"secret.reveal"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"ledger-db-readonly-dsn"}
                                  </span>
                                </span>
                              </ItemContent>
                              <ItemActions>
                                <span className="leading-5 tabular-nums text-muted-foreground text-xs">
                                  {"6h ago"}
                                </span>
                              </ItemActions>
                            </Item>
                            <Tooltip>
                            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bottom-1 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none end-2.5 focus-visible:opacity-100 group-hover/row:opacity-100 group/button hover:bg-card inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Mark Sofia Romero's secret.reveal on ledger-db-readonly-dsn, 6h ago, reviewed" id="base-ui-_r_j_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </li>
                          <li className="group/row relative">
                            <Item className="aria-[current=true]:bg-muted cursor-pointer dark:aria-[current=true]:bg-muted/50 dark:data-[linked=true]:bg-muted/50 dark:group-hover/row:bg-muted/50 data-[linked=true]:bg-muted focus-visible:ring-inset group-hover/row:bg-muted items-start text-start" type="button" variant="default" size="xs">
                              <ItemMedia variant="default">
                                <Avatar className="size-5" size="sm" aria-hidden="true">
                                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </ItemMedia>
                              <ItemContent className="min-w-0">
                                <ItemTitle className="gap-1.5 max-w-full min-w-0">
                                  <span className="min-w-0 truncate">
                                    {"Sofia Romero"}
                                  </span>
                                </ItemTitle>
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="font-mono shrink-0">
                                    {"secret.reveal"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"payouts-bank-api-token"}
                                  </span>
                                </span>
                              </ItemContent>
                              <ItemActions>
                                <span className="leading-5 tabular-nums text-muted-foreground text-xs">
                                  {"4d ago"}
                                </span>
                              </ItemActions>
                            </Item>
                            <Tooltip>
                            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bottom-1 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none end-2.5 focus-visible:opacity-100 group-hover/row:opacity-100 group/button hover:bg-card inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Mark Sofia Romero's secret.reveal on payouts-bank-api-token, 4d ago, reviewed" id="base-ui-_r_l_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </FramePanel>
                </Frame>
              </div>
              <section className="@4xl:col-span-5 min-w-0 scroll-mt-4" aria-label="Events">
                <Frame className="w-full" spacing="default">
                  <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="flex flex-col gap-px min-w-0">
                      <div className="font-semibold text-sm">
                        {"Events"}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        <span className="gap-1.5 inline-flex items-center tabular-nums whitespace-nowrap" role="status">
                          <span>
                            {"65 events"}
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span>
                            {"14 actors"}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center min-w-0 ms-auto shrink-0">
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center min-w-0 outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="View, All events" aria-haspopup="menu" id="base-ui-_r_q_" aria-expanded="false">
                        <svg className="lucide lucide-bookmark" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BookmarkIcon" tabler="IconBookmark" hugeicons="Bookmark02Icon" phosphor="BookmarkSimpleIcon" remixicon="RiBookmarkLine" aria-hidden="true">
                          <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"></path>
                        </svg>
                        <span className="max-w-36 truncate">
                          {"All events"}
                        </span>
                        <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                      <Popover>
                      <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Display settings" baseUiClickTrigger="" id="base-ui-_r_v_" aria-haspopup="dialog" aria-expanded="false">
                        <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                          <path d="M14 17H5"></path>
                          <path d="M19 7h-9"></path>
                          <circle cx={17} cy={17} r={3}></circle>
                          <circle cx={7} cy={7} r={3}></circle>
                        </svg>
                        <span className="max-sm:sr-only">
                          {"Settings"}
                        </span>
                      </PopoverTrigger>
                      </Popover>
                    </div>
                  </header>
                  <FramePanel className="p-0">
                    <div className="flex flex-wrap gap-2 items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <InputGroup className="flex-1 sm:max-w-64" role="group">
                        <InputGroupAddon role="group" data-align="inline-start">
                          <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                            <path d="m21 21-4.34-4.34"></path>
                            <circle cx={11} cy={11} r={8}></circle>
                          </svg>
                        </InputGroupAddon>
                        <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_10_" placeholder="Search actions, resources, IPs..." aria-label="Search events" value="" />
                      </InputGroup>
                      <Filters className="min-w-0 sm:flex-1" empty="true">
                        <div className="flex flex-wrap gap-2 items-center" role="toolbar" aria-label="Filters" aria-orientation="horizontal"></div>
                        <Popover>
                        <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center ms-auto outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Filter" baseUiClickTrigger="" id="base-ui-_r_13_" aria-haspopup="dialog" aria-expanded="false">
                          <svg className="lucide lucide-list-filter" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListFilterIcon" tabler="IconFilter2" hugeicons="FilterMailIcon" phosphor="FunnelSimpleIcon" remixicon="RiFilter3Line" aria-hidden="true">
                            <path d="M2 5h20"></path>
                            <path d="M6 12h12"></path>
                            <path d="M9 19h6"></path>
                          </svg>
                          <span className="max-sm:sr-only">
                            {"Filter"}
                          </span>
                        </PopoverTrigger>
                        </Popover>
                        <div className="sr-only" aria-live="polite" role="status">
                          <span></span>
                        </div>
                      </Filters>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <div className="relative">
                      <DataGridProvider>
                      <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" overflowXEnd="">
                        <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_14_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "22px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-x="" data-overflow-x-end="">
                          <div role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-overflow-x-end="">
                            <DataGridProvider>
                            <DataGridTableViewport>
                              <DataGridProvider>
                              <DataGridTable>
                                <colgroup>
                                  <col style={{width: "36px"}} />
                                  <col style={{width: "140px"}} />
                                  <col style={{width: "180px"}} />
                                  <col style={{width: "204px"}} />
                                  <col style={{width: "110px"}} />
                                  <col style={{width: "204px"}} />
                                  <col style={{width: "98px"}} />
                                  <col style={{width: "140px"}} />
                                  <col style={{width: "112px"}} />
                                  <col style={{width: "44px"}} />
                                </colgroup>
                                <thead>
                                  <tr className="[&>th]:border-b bg-transparent">
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" data-pinned="start" data-outer-pinned-col="start" style={{width: "36px"}}>
                                      <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_15_" aria-checked="false" aria-label="Select all"></Checkbox>
                                      <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" data-col-id="time" data-header-id="time" data-header-depth="0" data-pinned="start" data-last-col="start" style={{width: "140px"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1b_" aria-expanded="false">
                                          {"Time"}
                                          <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                            <path d="M12 5v14"></path>
                                            <path d="m19 12-7 7-7-7"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="actor" data-header-id="actor" data-header-depth="0" style={{width: "180px"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1g_" aria-expanded="false">
                                          {"Actor"}
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="action" data-header-id="action" data-header-depth="0" style={{width: "204px"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1l_" aria-expanded="false">
                                          {"Action"}
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="outcome" data-header-id="outcome" data-header-depth="0" style={{width: "110px"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1q_" aria-expanded="false">
                                          {"Outcome"}
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="resource" data-header-id="resource" data-header-depth="0" style={{width: "204px"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1v_" aria-expanded="false">
                                          {"Resource"}
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="environment" data-header-id="environment" data-header-depth="0" style={{width: "98px"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_24_" aria-expanded="false">
                                          {"Env"}
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="source" data-header-id="source" data-header-depth="0" style={{width: "140px"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_29_" aria-expanded="false">
                                          {"Source"}
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="ip" data-header-id="ip" data-header-depth="0" style={{width: "112px"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_2e_" aria-expanded="false">
                                          {"IP"}
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-right" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" data-pinned="end" data-outer-pinned-col="end" data-last-col="end" style={{width: "44px"}}>
                                      <span className="sr-only">
                                        {"Actions"}
                                      </span>
                                    </th>
                                  </tr>
                                </thead>
                                <DataGridProvider>
                                <DataGridTableBody>
                                  <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="EVT-9f3a21">
                                    <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                      <div className="flex items-center min-w-0">
                                        <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_2g_" aria-checked="false" aria-label="Select row"></Checkbox>
                                        <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                      <button className="focus-visible:outline-2 focus-visible:outline-ring/50 font-mono hover:underline outline-offset-2 tabular-nums text-xs underline-offset-4" type="button" aria-label="Sep 29, 14:12:08, open EVT-9f3a21">
                                        {"Sep 29, 14:12:08"}
                                      </button>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0 text-sm">
                                        <Avatar className="size-5" size="sm" aria-hidden="true">
                                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="truncate">
                                          {"Emma Wilson"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex items-center min-w-0">
                                        <span className="font-mono text-xs truncate">
                                          {"deployment.promote"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                        {"Success"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-cloud-upload size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CloudUploadIcon" tabler="IconCloudUpload" hugeicons="CloudUploadIcon" phosphor="CloudArrowUpIcon" remixicon="RiUploadCloud2Line" aria-hidden="true">
                                            <path d="M12 13v8"></path>
                                            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                                            <path d="m8 17 4-4 4 4"></path>
                                          </svg>
                                        </span>
                                        <span className="text-sm truncate">
                                          {"payments-api"}
                                        </span>
                                        <span className="font-mono shrink-0 text-muted-foreground text-xs">
                                          {"DEP-4127"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-monitor size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MonitorIcon" tabler="IconDeviceDesktop" hugeicons="ComputerIcon" phosphor="MonitorIcon" remixicon="RiComputerLine" aria-hidden="true">
                                            <rect width={20} height={14} x={2} y={3} rx={2}></rect>
                                            <line x1={8} x2={16} y1={21} y2={21}></line>
                                            <line x1={12} x2={12} y1={17} y2={21}></line>
                                          </svg>
                                        </span>
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Console"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                                        {"203.0.113.24"}
                                      </span>
                                    </td>
                                    <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                      <div className="flex items-center justify-end min-w-0">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for EVT-9f3a21" aria-haspopup="menu" id="base-ui-_r_2m_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                            <circle cx={12} cy={12} r={1}></circle>
                                            <circle cx={19} cy={12} r={1}></circle>
                                            <circle cx={5} cy={12} r={1}></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="EVT-3c95d1">
                                    <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                      <div className="flex items-center min-w-0">
                                        <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_2o_" aria-checked="false" aria-label="Select row"></Checkbox>
                                        <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                      <button className="focus-visible:outline-2 focus-visible:outline-ring/50 font-mono hover:underline outline-offset-2 tabular-nums text-xs underline-offset-4" type="button" aria-label="Sep 29, 14:06:30, open EVT-3c95d1">
                                        {"Sep 29, 14:06:30"}
                                      </button>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0 text-sm">
                                        <Avatar className="size-5" size="sm" aria-hidden="true">
                                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="truncate">
                                          {"David Kim"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex items-center min-w-0">
                                        <span className="font-mono text-xs truncate">
                                          {"access.request.create"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                        {"Success"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-user-round-cog size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundCogIcon" tabler="IconUserCog" hugeicons="UserSettings01Icon" phosphor="UserCircleGearIcon" remixicon="RiUserSettingsLine" aria-hidden="true">
                                            <path d="m14.305 19.53.923-.382"></path>
                                            <path d="m15.228 16.852-.923-.383"></path>
                                            <path d="m16.852 15.228-.383-.923"></path>
                                            <path d="m16.852 20.772-.383.924"></path>
                                            <path d="m19.148 15.228.383-.923"></path>
                                            <path d="m19.53 21.696-.382-.924"></path>
                                            <path d="M2 21a8 8 0 0 1 10.434-7.62"></path>
                                            <path d="m20.772 16.852.924-.383"></path>
                                            <path d="m20.772 19.148.924.383"></path>
                                            <circle cx={10} cy={8} r={5}></circle>
                                            <circle cx={18} cy={18} r={3}></circle>
                                          </svg>
                                        </span>
                                        <span className="text-sm truncate">
                                          {"prod-db-admin"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-square-terminal size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SquareTerminalIcon" tabler="IconTerminal2" hugeicons="CommandLineIcon" phosphor="TerminalWindowIcon" remixicon="RiTerminalBoxLine" aria-hidden="true">
                                            <path d="m7 11 2-2-2-2"></path>
                                            <path d="M11 13h4"></path>
                                            <rect width={18} height={18} x={3} y={3} rx={2} ry={2}></rect>
                                          </svg>
                                        </span>
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"CLI"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                                        {"203.0.113.57"}
                                      </span>
                                    </td>
                                    <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                      <div className="flex items-center justify-end min-w-0">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for EVT-3c95d1" aria-haspopup="menu" id="base-ui-_r_2u_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                            <circle cx={12} cy={12} r={1}></circle>
                                            <circle cx={19} cy={12} r={1}></circle>
                                            <circle cx={5} cy={12} r={1}></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="EVT-8c21d7">
                                    <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                      <div className="flex items-center min-w-0">
                                        <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_30_" aria-checked="false" aria-label="Select row"></Checkbox>
                                        <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                      <button className="focus-visible:outline-2 focus-visible:outline-ring/50 font-mono hover:underline outline-offset-2 tabular-nums text-xs underline-offset-4" type="button" aria-label="Sep 29, 14:05:41, open EVT-8c21d7">
                                        {"Sep 29, 14:05:41"}
                                      </button>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0 text-sm">
                                        <Avatar className="size-5" size="sm" aria-hidden="true">
                                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="truncate">
                                          {"David Kim"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex items-center min-w-0">
                                        <span className="font-mono text-xs truncate">
                                          {"iam.role.grant"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                        {"Denied"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-user-round-cog size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundCogIcon" tabler="IconUserCog" hugeicons="UserSettings01Icon" phosphor="UserCircleGearIcon" remixicon="RiUserSettingsLine" aria-hidden="true">
                                            <path d="m14.305 19.53.923-.382"></path>
                                            <path d="m15.228 16.852-.923-.383"></path>
                                            <path d="m16.852 15.228-.383-.923"></path>
                                            <path d="m16.852 20.772-.383.924"></path>
                                            <path d="m19.148 15.228.383-.923"></path>
                                            <path d="m19.53 21.696-.382-.924"></path>
                                            <path d="M2 21a8 8 0 0 1 10.434-7.62"></path>
                                            <path d="m20.772 16.852.924-.383"></path>
                                            <path d="m20.772 19.148.924.383"></path>
                                            <circle cx={10} cy={8} r={5}></circle>
                                            <circle cx={18} cy={18} r={3}></circle>
                                          </svg>
                                        </span>
                                        <span className="text-sm truncate">
                                          {"prod-db-admin"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-square-terminal size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SquareTerminalIcon" tabler="IconTerminal2" hugeicons="CommandLineIcon" phosphor="TerminalWindowIcon" remixicon="RiTerminalBoxLine" aria-hidden="true">
                                            <path d="m7 11 2-2-2-2"></path>
                                            <path d="M11 13h4"></path>
                                            <rect width={18} height={18} x={3} y={3} rx={2} ry={2}></rect>
                                          </svg>
                                        </span>
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"CLI"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                                        {"203.0.113.57"}
                                      </span>
                                    </td>
                                    <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                      <div className="flex items-center justify-end min-w-0">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for EVT-8c21d7" aria-haspopup="menu" id="base-ui-_r_36_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                            <circle cx={12} cy={12} r={1}></circle>
                                            <circle cx={19} cy={12} r={1}></circle>
                                            <circle cx={5} cy={12} r={1}></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="EVT-2b64e0">
                                    <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                      <div className="flex items-center min-w-0">
                                        <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_38_" aria-checked="false" aria-label="Select row"></Checkbox>
                                        <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                      <button className="focus-visible:outline-2 focus-visible:outline-ring/50 font-mono hover:underline outline-offset-2 tabular-nums text-xs underline-offset-4" type="button" aria-label="Sep 29, 13:59:47, open EVT-2b64e0">
                                        {"Sep 29, 13:59:47"}
                                      </button>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0 text-sm">
                                        <Avatar className="size-5" size="sm" aria-hidden="true">
                                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="truncate">
                                          {"David Kim"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex items-center min-w-0">
                                        <span className="font-mono text-xs truncate">
                                          {"secret.reveal"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                        {"Denied"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-key-round size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                            <circle cx={16.5} cy={7.5} r=".5" fill="currentColor"></circle>
                                          </svg>
                                        </span>
                                        <span className="text-sm truncate">
                                          {"ledger-db-admin-dsn"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-square-terminal size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SquareTerminalIcon" tabler="IconTerminal2" hugeicons="CommandLineIcon" phosphor="TerminalWindowIcon" remixicon="RiTerminalBoxLine" aria-hidden="true">
                                            <path d="m7 11 2-2-2-2"></path>
                                            <path d="M11 13h4"></path>
                                            <rect width={18} height={18} x={3} y={3} rx={2} ry={2}></rect>
                                          </svg>
                                        </span>
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"CLI"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                                        {"203.0.113.57"}
                                      </span>
                                    </td>
                                    <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                      <div className="flex items-center justify-end min-w-0">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for EVT-2b64e0" aria-haspopup="menu" id="base-ui-_r_3e_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                            <circle cx={12} cy={12} r={1}></circle>
                                            <circle cx={19} cy={12} r={1}></circle>
                                            <circle cx={5} cy={12} r={1}></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="EVT-7e0b94">
                                    <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                      <div className="flex items-center min-w-0">
                                        <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_3g_" aria-checked="false" aria-label="Select row"></Checkbox>
                                        <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                      <button className="focus-visible:outline-2 focus-visible:outline-ring/50 font-mono hover:underline outline-offset-2 tabular-nums text-xs underline-offset-4" type="button" aria-label="Sep 29, 13:58:12, open EVT-7e0b94">
                                        {"Sep 29, 13:58:12"}
                                      </button>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0 text-sm">
                                        <span className="flex items-center justify-center shrink-0 size-5" aria-hidden="true">
                                          <svg className="dark:hidden size-3.5" aria-hidden="true" viewBox="0 0 256 222" preserveAspectRatio="xMidYMid">
                                            <path d="m128 0 128 221.705H0z"></path>
                                          </svg>
                                          <svg className="dark:block hidden size-3.5" aria-hidden="true" viewBox="0 0 256 222" preserveAspectRatio="xMidYMid">
                                            <path fill="#fff" d="m128 0 128 221.705H0z"></path>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          {"Vercel"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex items-center min-w-0">
                                        <span className="font-mono text-xs truncate">
                                          {"rollout.step"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                        {"Success"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-cloud-upload size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CloudUploadIcon" tabler="IconCloudUpload" hugeicons="CloudUploadIcon" phosphor="CloudArrowUpIcon" remixicon="RiUploadCloud2Line" aria-hidden="true">
                                            <path d="M12 13v8"></path>
                                            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                                            <path d="m8 17 4-4 4 4"></path>
                                          </svg>
                                        </span>
                                        <span className="text-sm truncate">
                                          {"payments-api"}
                                        </span>
                                        <span className="font-mono shrink-0 text-muted-foreground text-xs">
                                          {"DEP-4127"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-code size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                                            <path d="m16 18 6-6-6-6"></path>
                                            <path d="m8 6-6 6 6 6"></path>
                                          </svg>
                                        </span>
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"API"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                                        {"198.51.100.14"}
                                      </span>
                                    </td>
                                    <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                      <div className="flex items-center justify-end min-w-0">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for EVT-7e0b94" aria-haspopup="menu" id="base-ui-_r_3m_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                            <circle cx={12} cy={12} r={1}></circle>
                                            <circle cx={19} cy={12} r={1}></circle>
                                            <circle cx={5} cy={12} r={1}></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="EVT-7d2c58">
                                    <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                      <div className="flex items-center min-w-0">
                                        <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_3o_" aria-checked="false" aria-label="Select row"></Checkbox>
                                        <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                      <button className="focus-visible:outline-2 focus-visible:outline-ring/50 font-mono hover:underline outline-offset-2 tabular-nums text-xs underline-offset-4" type="button" aria-label="Sep 29, 13:54:47, open EVT-7d2c58">
                                        {"Sep 29, 13:54:47"}
                                      </button>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0 text-sm">
                                        <span className="flex items-center justify-center shrink-0 size-5" aria-hidden="true">
                                          <svg className="dark:hidden size-3.5" aria-hidden="true" viewBox="0 0 256 222" preserveAspectRatio="xMidYMid">
                                            <path d="m128 0 128 221.705H0z"></path>
                                          </svg>
                                          <svg className="dark:block hidden size-3.5" aria-hidden="true" viewBox="0 0 256 222" preserveAspectRatio="xMidYMid">
                                            <path fill="#fff" d="m128 0 128 221.705H0z"></path>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          {"Vercel"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex items-center min-w-0">
                                        <span className="font-mono text-xs truncate">
                                          {"rollout.step"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                        {"Success"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-cloud-upload size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CloudUploadIcon" tabler="IconCloudUpload" hugeicons="CloudUploadIcon" phosphor="CloudArrowUpIcon" remixicon="RiUploadCloud2Line" aria-hidden="true">
                                            <path d="M12 13v8"></path>
                                            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                                            <path d="m8 17 4-4 4 4"></path>
                                          </svg>
                                        </span>
                                        <span className="text-sm truncate">
                                          {"payments-api"}
                                        </span>
                                        <span className="font-mono shrink-0 text-muted-foreground text-xs">
                                          {"DEP-4127"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-code size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                                            <path d="m16 18 6-6-6-6"></path>
                                            <path d="m8 6-6 6 6 6"></path>
                                          </svg>
                                        </span>
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"API"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                                        {"198.51.100.14"}
                                      </span>
                                    </td>
                                    <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                      <div className="flex items-center justify-end min-w-0">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for EVT-7d2c58" aria-haspopup="menu" id="base-ui-_r_3u_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                            <circle cx={12} cy={12} r={1}></circle>
                                            <circle cx={19} cy={12} r={1}></circle>
                                            <circle cx={5} cy={12} r={1}></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="EVT-6d4f02">
                                    <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                      <div className="flex items-center min-w-0">
                                        <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_40_" aria-checked="false" aria-label="Select row"></Checkbox>
                                        <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                      <button className="focus-visible:outline-2 focus-visible:outline-ring/50 font-mono hover:underline outline-offset-2 tabular-nums text-xs underline-offset-4" type="button" aria-label="Sep 29, 13:51:30, open EVT-6d4f02">
                                        {"Sep 29, 13:51:30"}
                                      </button>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0 text-sm">
                                        <span className="flex items-center justify-center shrink-0 size-5" aria-hidden="true">
                                          <svg className="dark:hidden size-4" aria-hidden="true" viewBox="0 0 1024 1024" fill="none">
                                            <path fill="#1b1f23" fillRule="evenodd" d="M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28s87.04 5.76 128 17.28c97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0" clipRule="evenodd"></path>
                                          </svg>
                                          <svg className="dark:block hidden size-4" aria-hidden="true" viewBox="0 0 1024 1024" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#ffff"></path>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          {"GitHub Actions"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex items-center min-w-0">
                                        <span className="font-mono text-xs truncate">
                                          {"deployment.create"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                        {"Success"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-cloud-upload size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CloudUploadIcon" tabler="IconCloudUpload" hugeicons="CloudUploadIcon" phosphor="CloudArrowUpIcon" remixicon="RiUploadCloud2Line" aria-hidden="true">
                                            <path d="M12 13v8"></path>
                                            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                                            <path d="m8 17 4-4 4 4"></path>
                                          </svg>
                                        </span>
                                        <span className="text-sm truncate">
                                          {"payments-api"}
                                        </span>
                                        <span className="font-mono shrink-0 text-muted-foreground text-xs">
                                          {"DEP-4127"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="dark:hidden size-4" aria-hidden="true" viewBox="0 0 1024 1024" fill="none">
                                            <path fill="#1b1f23" fillRule="evenodd" d="M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28s87.04 5.76 128 17.28c97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0" clipRule="evenodd"></path>
                                          </svg>
                                          <svg className="dark:block hidden size-4" aria-hidden="true" viewBox="0 0 1024 1024" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#ffff"></path>
                                          </svg>
                                        </span>
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"GitHub Actions"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                                        {"198.51.100.42"}
                                      </span>
                                    </td>
                                    <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                      <div className="flex items-center justify-end min-w-0">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for EVT-6d4f02" aria-haspopup="menu" id="base-ui-_r_46_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                            <circle cx={12} cy={12} r={1}></circle>
                                            <circle cx={19} cy={12} r={1}></circle>
                                            <circle cx={5} cy={12} r={1}></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="EVT-5a9e3c">
                                    <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                      <div className="flex items-center min-w-0">
                                        <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_48_" aria-checked="false" aria-label="Select row"></Checkbox>
                                        <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                      <button className="focus-visible:outline-2 focus-visible:outline-ring/50 font-mono hover:underline outline-offset-2 tabular-nums text-xs underline-offset-4" type="button" aria-label="Sep 29, 13:40:00, open EVT-5a9e3c">
                                        {"Sep 29, 13:40:00"}
                                      </button>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0 text-sm">
                                        <span className="flex items-center justify-center shrink-0 size-5" aria-hidden="true">
                                          <svg className="w-5" aria-hidden="true" viewBox="0 0 228 120">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M204 48C192.817 48 183.42 40.3514 180.756 30H153.248C147.382 30 142.376 34.241 141.412 40.0272L140.425 45.9456C139.489 51.5648 136.646 56.4554 132.626 60C136.646 63.5446 139.489 68.4352 140.425 74.0544L141.412 79.9728C142.376 85.759 147.382 90 153.248 90H156.756C159.42 79.6486 168.817 72 180 72C193.255 72 204 82.7452 204 96C204 109.255 193.255 120 180 120C168.817 120 159.42 112.351 156.756 102H153.248C141.516 102 131.504 93.5181 129.575 81.9456L128.588 76.0272C127.624 70.241 122.618 66 116.752 66H107.244C104.58 76.3514 95.183 84 84 84C72.817 84 63.4204 76.3514 60.7561 66H47.2439C44.5796 76.3514 35.183 84 24 84C10.7452 84 0 73.2548 0 60C0 46.7452 10.7452 36 24 36C35.183 36 44.5796 43.6486 47.2439 54H60.7561C63.4204 43.6486 72.817 36 84 36C95.183 36 104.58 43.6486 107.244 54H116.752C122.618 54 127.624 49.759 128.588 43.9728L129.575 38.0544C131.504 26.4819 141.516 18 153.248 18L180.756 18C183.42 7.64864 192.817 0 204 0C217.255 0 228 10.7452 228 24C228 37.2548 217.255 48 204 48ZM204 36C210.627 36 216 30.6274 216 24C216 17.3726 210.627 12 204 12C197.373 12 192 17.3726 192 24C192 30.6274 197.373 36 204 36ZM24 72C30.6274 72 36 66.6274 36 60C36 53.3726 30.6274 48 24 48C17.3726 48 12 53.3726 12 60C12 66.6274 17.3726 72 24 72ZM96 60C96 66.6274 90.6274 72 84 72C77.3726 72 72 66.6274 72 60C72 53.3726 77.3726 48 84 48C90.6274 48 96 53.3726 96 60ZM192 96C192 102.627 186.627 108 180 108C173.373 108 168 102.627 168 96C168 89.3726 173.373 84 180 84C186.627 84 192 89.3726 192 96Z" fill="#ea4b71"></path>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          {"n8n"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex items-center min-w-0">
                                        <span className="font-mono text-xs truncate">
                                          {"secret.rotate"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                        {"Success"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-key-round size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                            <circle cx={16.5} cy={7.5} r=".5" fill="currentColor"></circle>
                                          </svg>
                                        </span>
                                        <span className="text-sm truncate">
                                          {"webhook-signing-key"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-code size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                                            <path d="m16 18 6-6-6-6"></path>
                                            <path d="m8 6-6 6 6 6"></path>
                                          </svg>
                                        </span>
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"API"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                                        {"198.51.100.8"}
                                      </span>
                                    </td>
                                    <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                      <div className="flex items-center justify-end min-w-0">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for EVT-5a9e3c" aria-haspopup="menu" id="base-ui-_r_4e_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                            <circle cx={12} cy={12} r={1}></circle>
                                            <circle cx={19} cy={12} r={1}></circle>
                                            <circle cx={5} cy={12} r={1}></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="EVT-4b17e8">
                                    <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                      <div className="flex items-center min-w-0">
                                        <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_4g_" aria-checked="false" aria-label="Select row"></Checkbox>
                                        <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                      <button className="focus-visible:outline-2 focus-visible:outline-ring/50 font-mono hover:underline outline-offset-2 tabular-nums text-xs underline-offset-4" type="button" aria-label="Sep 29, 13:22:47, open EVT-4b17e8">
                                        {"Sep 29, 13:22:47"}
                                      </button>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0 text-sm">
                                        <span className="flex items-center justify-center shrink-0 size-5" aria-hidden="true">
                                          <svg className="size-4" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 -25 256 256">
                                            <path fill="#EA4335" d="m170.252 56.819 22.253-22.253 1.483-9.37C153.437-11.677 88.976-7.496 52.42 33.92 42.267 45.423 34.734 59.764 30.717 74.573l7.97-1.123 44.505-7.34 3.436-3.513c19.797-21.742 53.27-24.667 76.128-6.168l7.496.39Z"></path>
                                            <path fill="#4285F4" d="M224.205 73.918a100.249 100.249 0 0 0-30.217-48.722l-31.232 31.232a55.515 55.515 0 0 1 20.379 44.037v5.544c15.35 0 27.797 12.445 27.797 27.796 0 15.352-12.446 27.485-27.797 27.485h-55.671l-5.466 5.934v33.34l5.466 5.231h55.67c39.93.311 72.553-31.494 72.864-71.424a72.303 72.303 0 0 0-31.793-60.453"></path>
                                            <path fill="#34A853" d="M71.87 205.796h55.593V161.29H71.87a27.275 27.275 0 0 1-11.399-2.498l-7.887 2.42-22.409 22.253-1.952 7.574c12.567 9.489 27.9 14.825 43.647 14.757"></path>
                                            <path fill="#FBBC05" d="M71.87 61.425C31.94 61.664-.237 94.228.001 134.159a72.301 72.301 0 0 0 28.222 56.88l32.248-32.246c-13.99-6.322-20.208-22.786-13.887-36.776 6.32-13.99 22.786-20.208 36.775-13.888a27.796 27.796 0 0 1 13.887 13.888l32.248-32.248A72.224 72.224 0 0 0 71.87 61.425"></path>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          {"Cloud Build"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex items-center min-w-0">
                                        <span className="font-mono text-xs truncate">
                                          {"infra.apply"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                        {"Success"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-network size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="NetworkIcon" tabler="IconSitemap" hugeicons="HierarchySquare01Icon" phosphor="TreeStructureIcon" remixicon="RiOrganizationChart" aria-hidden="true">
                                            <rect x={16} y={16} width={6} height={6} rx={1}></rect>
                                            <rect x={2} y={16} width={6} height={6} rx={1}></rect>
                                            <rect x={9} y={2} width={6} height={6} rx={1}></rect>
                                            <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
                                            <path d="M12 12V8"></path>
                                          </svg>
                                        </span>
                                        <span className="text-sm truncate">
                                          {"prod-eu-west-1"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-blocks size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BlocksIcon" tabler="IconComponents" hugeicons="DashboardSquare01Icon" phosphor="SquaresFourIcon" remixicon="RiApps2Line" aria-hidden="true">
                                            <path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path>
                                            <rect x={14} y={2} width={8} height={8} rx={1}></rect>
                                          </svg>
                                        </span>
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Terraform"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                                        {"198.51.100.61"}
                                      </span>
                                    </td>
                                    <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                      <div className="flex items-center justify-end min-w-0">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for EVT-4b17e8" aria-haspopup="menu" id="base-ui-_r_4m_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                            <circle cx={12} cy={12} r={1}></circle>
                                            <circle cx={19} cy={12} r={1}></circle>
                                            <circle cx={5} cy={12} r={1}></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="EVT-1779b1">
                                    <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                      <div className="flex items-center min-w-0">
                                        <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_4o_" aria-checked="false" aria-label="Select row"></Checkbox>
                                        <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                      <button className="focus-visible:outline-2 focus-visible:outline-ring/50 font-mono hover:underline outline-offset-2 tabular-nums text-xs underline-offset-4" type="button" aria-label="Sep 29, 13:12:00, open EVT-1779b1">
                                        {"Sep 29, 13:12:00"}
                                      </button>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0 text-sm">
                                        <span className="flex items-center justify-center shrink-0 size-5" aria-hidden="true">
                                          <svg className="dark:hidden size-4" aria-hidden="true" viewBox="0 0 1024 1024" fill="none">
                                            <path fill="#1b1f23" fillRule="evenodd" d="M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28s87.04 5.76 128 17.28c97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0" clipRule="evenodd"></path>
                                          </svg>
                                          <svg className="dark:block hidden size-4" aria-hidden="true" viewBox="0 0 1024 1024" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#ffff"></path>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          {"GitHub Actions"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex items-center min-w-0">
                                        <span className="font-mono text-xs truncate">
                                          {"deployment.create"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                        {"Success"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-cloud-upload size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CloudUploadIcon" tabler="IconCloudUpload" hugeicons="CloudUploadIcon" phosphor="CloudArrowUpIcon" remixicon="RiUploadCloud2Line" aria-hidden="true">
                                            <path d="M12 13v8"></path>
                                            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                                            <path d="m8 17 4-4 4 4"></path>
                                          </svg>
                                        </span>
                                        <span className="text-sm truncate">
                                          {"webhook-dispatcher"}
                                        </span>
                                        <span className="font-mono shrink-0 text-muted-foreground text-xs">
                                          {"DEP-4126"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        {"Staging"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="dark:hidden size-4" aria-hidden="true" viewBox="0 0 1024 1024" fill="none">
                                            <path fill="#1b1f23" fillRule="evenodd" d="M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28s87.04 5.76 128 17.28c97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0" clipRule="evenodd"></path>
                                          </svg>
                                          <svg className="dark:block hidden size-4" aria-hidden="true" viewBox="0 0 1024 1024" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#ffff"></path>
                                          </svg>
                                        </span>
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"GitHub Actions"}
                                        </span>
                                      </span>
                                    </td>
                                    <td className="align-middle px-2 py-1.5">
                                      <span className="font-mono tabular-nums text-muted-foreground text-xs">
                                        {"198.51.100.42"}
                                      </span>
                                    </td>
                                    <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                      <div className="flex items-center justify-end min-w-0">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for EVT-1779b1" aria-haspopup="menu" id="base-ui-_r_4u_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                            <circle cx={12} cy={12} r={1}></circle>
                                            <circle cx={19} cy={12} r={1}></circle>
                                            <circle cx={5} cy={12} r={1}></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </td>
                                  </tr>
                                </DataGridTableBody>
                                </DataGridProvider>
                              </DataGridTable>
                              </DataGridProvider>
                            </DataGridTableViewport>
                            </DataGridProvider>
                          </div>
                        </div>
                        <div className="data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-[var(--data-grid-scrollbar-size,0.625rem)] data-[orientation=horizontal]:mb-px data-[orientation=vertical]:border-s data-[orientation=vertical]:border-s-transparent data-[orientation=vertical]:h-full data-[orientation=vertical]:me-px data-[orientation=vertical]:w-[var(--data-grid-scrollbar-size,0.625rem)] flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_r_14_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "1222.416403785489px"}}>
                          <div className="before:-inset-0.5 before:absolute bg-border flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                        </div>
                      </DataGridScrollArea>
                      </DataGridProvider>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                      <DataGridProvider>
                      <DataGridPagination>
                        <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                          <div className="text-muted-foreground text-sm">
                            {"Rows per page"}
                          </div>
                          <Select>
                          <SelectTrigger className="min-w-16" type="button" tabIndex={0} id="base-ui-_r_50_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                            <SelectValue>
                              {"10"}
                            </SelectValue>
                            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                              {"▼"}
                            </svg>
                          </SelectTrigger>
                          </Select>
                          <input id="base-ui-_r_50_-hidden-input" tabIndex={-1} aria-hidden="true" value="10" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        </div>
                        <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                          <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                            {"1 - 10 of 65 events"}
                          </div>
                          <div className="flex flex-wrap gap-1 items-center justify-center order-1 sm:flex-nowrap">
                            <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" disabled="" tabIndex={0} disabled>
                              <span className="sr-only">
                                {"Go to previous page"}
                              </span>
                              <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                                <path d="m15 18-6-6 6-6"></path>
                              </svg>
                            </Button>
                            <Button className="bg-accent px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-accent-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 1" aria-current="page">
                              {"1"}
                            </Button>
                            <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 2">
                              {"2"}
                            </Button>
                            <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 3">
                              {"3"}
                            </Button>
                            <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 4">
                              {"4"}
                            </Button>
                            <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 5">
                              {"5"}
                            </Button>
                            <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 6">
                              {"6"}
                            </Button>
                            <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 7">
                              {"7"}
                            </Button>
                            <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" tabIndex={0}>
                              <span className="sr-only">
                                {"Go to next page"}
                              </span>
                              <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                            </Button>
                          </div>
                        </div>
                      </DataGridPagination>
                      </DataGridProvider>
                    </footer>
                  </FramePanel>
                </Frame>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
