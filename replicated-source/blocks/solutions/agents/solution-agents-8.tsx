import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFillBodyCell,
  DataGridTableFillHeadCell,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  FilterChip,
  Filters,
} from "@/registry-neui/bases/base/neui/filters/filters"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/base/ui/alert"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Field,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="bg-background flex items-start justify-center max-w-[1320px] md:p-4 min-h-svh mx-auto p-3 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Evaluation Report"}
      </h1>
      <div className="@container w-full">
        <div className="flex flex-wrap gap-x-3 gap-y-2 items-center justify-between">
          <div className="flex flex-col gap-0.5 min-w-0">
            <h2 className="font-semibold leading-tight text-foreground text-lg tracking-tight">
              {"Evaluation Report"}
            </h2>
            <p className="text-muted-foreground text-sm">
              {"Nightly evals · generated Jun 10, 02:14"}
            </p>
          </div>
          <div className="flex gap-2 items-center shrink-0">
            <Popover>
            <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button group/pick-date inline-flex items-center justify-between leading-none max-w-full outline-none select-none shrink-0 tabular-nums transition-all w-[250px] whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false" extracted="1">
              <span className="truncate">
                {"May 12, 2026 - Jun 10, 2026"}
              </span>
              <svg className="group-hover/pick-date:text-foreground lucide lucide-calendar shrink-0 text-muted-foreground/80 transition-colors" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                <path d="M3 10h18"></path>
              </svg>
            </PopoverTrigger>
            </Popover>
            <Button type="button" tabIndex={0}>
              <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                <path d="M12 15V3"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10 5 5 5-5"></path>
              </svg>
              <span className="hidden sm:block">
                {"Export"}
              </span>
            </Button>
          </div>
        </div>
        <div className="@4xl:grid-cols-3 gap-4 grid grid-cols-1 mt-4">
          <Frame className="@4xl:col-span-2 h-full w-full">
            <header className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="font-semibold text-sm">
                {"Pass Rate Trend"}
              </div>
              <span className="font-medium text-muted-foreground text-xs">
                {"v2.0.3 to v2.1.0"}
              </span>
            </header>
            <FramePanel className="flex flex-col">
              <div className="flex flex-col gap-1">
                <div className="font-medium text-muted-foreground text-xs">
                  {"Pass rate (May 12 to Jun 10)"}
                </div>
                <div className="flex gap-2.5 items-center">
                  <span className="font-semibold leading-none tabular-nums text-xl">
                    {"94.6%"}
                  </span>
                  <span className="[&_svg]:size-4 font-medium gap-1 inline-flex items-center text-destructive text-xs">
                    <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                      <path d="M16 17h6v-6"></path>
                      <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                    </svg>
                    {"-0.1 pts"}
                  </span>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <ChartContainer>
                <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-[250px] justify-center text-xs w-full" data-chart="chart-_r_2_">
                  <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_2_] {\n  --color-rate: var(--color-violet-500);\n}\n\n\n.dark [data-chart=chart-_r_2_] {\n  --color-rate: var(--color-violet-500);\n}\n" }} />
                  <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                    <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                      <div className="recharts-wrapper" width={785} height={250} style={{position: "relative", cursor: "default", width: "785px", height: "250px"}}>
                        <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                        <svg className="recharts-surface" role="application" tabIndex={0} width={785} height={250} viewBox="0 0 785 250" style={{width: "100%", height: "100%", display: "block"}}>
                          <title></title>
                          <desc></desc>
                          <g className="recharts-zIndex-layer_-100" tabIndex={-1}>
                            <g className="recharts-cartesian-grid">
                              <g className="recharts-cartesian-grid-horizontal">
                                <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x={10} y={10} width={765} height={200} x1={10} y1={210} x2={775} y2={210}></line>
                                <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x={10} y={10} width={765} height={200} x1={10} y1={135.92592592592598} x2={775} y2={135.92592592592598}></line>
                                <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x={10} y={10} width={765} height={200} x1={10} y1={61.85185185185201} x2={775} y2={61.85185185185201}></line>
                                <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x={10} y={10} width={765} height={200} x1={10} y1={10} x2={775} y2={10}></line>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                          <defs>
                            <clippath id="recharts1-clip">
                              <rect x={10} y={10} height={200} width={765}></rect>
                            </clippath>
                          </defs>
                          <defs>
                            <lineargradient id="passRateGradient" x1={0} y1={0} x2={0} y2={1}>
                              <stop offset="0%" stopColor="var(--color-violet-500)" stopOpacity={0.15}></stop>
                              <stop offset="100%" stopColor="var(--color-violet-500)" stopOpacity={0}></stop>
                            </lineargradient>
                          </defs>
                          <g className="recharts-zIndex-layer_100" tabIndex={-1}>
                            <g className="recharts-area recharts-layer">
                              <g className="recharts-layer">
                                <path className="recharts-area-area recharts-curve" strokeWidth={1} fill="url(#passRateGradient)" fillOpacity={0.6} height={200} stroke="none" width={765} id="recharts-area-_r_2e_" d="M10,113.704L36.379,106.296L62.759,91.481L89.138,110L115.517,98.889L141.897,106.296L168.276,95.185L194.655,72.963L221.034,61.852L247.414,69.259L273.793,54.444L300.172,65.556L326.552,50.741L352.931,58.148L379.31,47.037L405.69,61.852L432.069,54.444L458.448,65.556L484.828,50.741L511.207,58.148L537.586,47.037L563.966,61.852L590.345,161.852L616.724,172.963L643.103,154.444L669.483,143.333L695.862,135.926L722.241,128.519L748.621,124.815L775,117.407L775,210L748.621,210L722.241,210L695.862,210L669.483,210L643.103,210L616.724,210L590.345,210L563.966,210L537.586,210L511.207,210L484.828,210L458.448,210L432.069,210L405.69,210L379.31,210L352.931,210L326.552,210L300.172,210L273.793,210L247.414,210L221.034,210L194.655,210L168.276,210L141.897,210L115.517,210L89.138,210L62.759,210L36.379,210L10,210Z"></path>
                                <path className="recharts-area-curve recharts-curve" strokeWidth={1} fill="none" fillOpacity={0.6} height={200} stroke="transparent" width={765} d="M10,113.704L36.379,106.296L62.759,91.481L89.138,110L115.517,98.889L141.897,106.296L168.276,95.185L194.655,72.963L221.034,61.852L247.414,69.259L273.793,54.444L300.172,65.556L326.552,50.741L352.931,58.148L379.31,47.037L405.69,61.852L432.069,54.444L458.448,65.556L484.828,50.741L511.207,58.148L537.586,47.037L563.966,61.852L590.345,161.852L616.724,172.963L643.103,154.444L669.483,143.333L695.862,135.926L722.241,128.519L748.621,124.815L775,117.407"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_300" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_400" tabIndex={-1}>
                            <g className="recharts-layer recharts-reference-line">
                              <line className="recharts-reference-line-line" x="May 19" stroke="var(--muted-foreground)" strokeDasharray="3 3" fill="none" fillOpacity={1} strokeWidth={1} x1={194.6551724137931} y1={210} x2={194.6551724137931} y2={10}></line>
                            </g>
                            <g className="recharts-layer recharts-reference-line">
                              <line className="recharts-reference-line-line" x="Jun 03" stroke="var(--muted-foreground)" strokeDasharray="3 3" fill="none" fillOpacity={1} strokeWidth={1} x1={590.344827586207} y1={210} x2={590.344827586207} y2={10}></line>
                            </g>
                            <g className="recharts-layer recharts-line">
                              <g className="recharts-layer recharts-shape">
                                <path className="recharts-curve recharts-line-curve" stroke="var(--color-violet-500)" strokeWidth={3} fill="none" id="recharts-line-_r_2f_" height={200} width={765} strokeDasharray="914.7523803710938px 914.7523803710938px" d="M10,113.704L36.379,106.296L62.759,91.481L89.138,110L115.517,98.889L141.897,106.296L168.276,95.185L194.655,72.963L221.034,61.852L247.414,69.259L273.793,54.444L300.172,65.556L326.552,50.741L352.931,58.148L379.31,47.037L405.69,61.852L432.069,54.444L458.448,65.556L484.828,50.741L511.207,58.148L537.586,47.037L563.966,61.852L590.345,161.852L616.724,172.963L643.103,154.444L669.483,143.333L695.862,135.926L722.241,128.519L748.621,124.815L775,117.407"></path>
                              </g>
                            </g>
                          </g>
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
                                  <g className="recharts-cartesian-axis-tick recharts-layer"></g>
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
                          </g>
                          <g className="recharts-zIndex-layer_600" tabIndex={-1}>
                            <g className="recharts-layer recharts-line-dots">
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={10} cy={113.7037037037035}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={36.37931034482759} cy={106.29629629629599}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={62.758620689655174} cy={91.48148148148151}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={89.13793103448276} cy={110}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={115.51724137931035} cy={98.888888888889}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={141.89655172413794} cy={106.29629629629599}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={168.27586206896552} cy={95.18518518518498}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={194.6551724137931} cy={72.96296296296299}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={221.0344827586207} cy={61.85185185185201}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={247.41379310344828} cy={69.25925925925898}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={273.7931034482759} cy={54.444444444444514}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={300.1724137931035} cy={65.55555555555549}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={326.55172413793105} cy={50.74074074074048}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={352.9310344827586} cy={58.14814814814799}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={379.3103448275862} cy={47.037037037037}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={405.68965517241384} cy={61.85185185185201}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={432.0689655172414} cy={54.444444444444514}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={458.44827586206895} cy={65.55555555555549}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={484.82758620689657} cy={50.74074074074048}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={511.2068965517242} cy={58.14814814814799}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={537.5862068965517} cy={47.037037037037}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={563.9655172413793} cy={61.85185185185201}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={590.344827586207} cy={161.85185185185148}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={616.7241379310345} cy={172.962962962963}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={643.1034482758621} cy={154.4444444444445}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={669.4827586206897} cy={143.33333333333297}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={695.8620689655172} cy={135.92592592592598}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={722.2413793103449} cy={128.5185185185185}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={748.6206896551724} cy={124.81481481481448}></circle>
                              <circle className="recharts-dot recharts-line-dot" r={4} stroke="var(--color-violet-500)" strokeWidth={2} fill="var(--background)" height={200} width={765} cx={775} cy={117.4074074074075}></circle>
                            </g>
                          </g>
                          <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_2000" tabIndex={-1}>
                            <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={765} stroke="none" fontSize="12" x={36.37931034482759} y={226} textAnchor="middle" fill="#666">
                                  <tspan x={36.37931034482759} dy="0.71em">
                                    {"May 13"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={765} stroke="none" fontSize="12" x={89.13793103448276} y={226} textAnchor="middle" fill="#666">
                                  <tspan x={89.13793103448276} dy="0.71em">
                                    {"May 15"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={765} stroke="none" fontSize="12" x={141.89655172413794} y={226} textAnchor="middle" fill="#666">
                                  <tspan x={141.89655172413794} dy="0.71em">
                                    {"May 17"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={765} stroke="none" fontSize="12" x={194.6551724137931} y={226} textAnchor="middle" fill="#666">
                                  <tspan x={194.6551724137931} dy="0.71em">
                                    {"May 19"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={765} stroke="none" fontSize="12" x={247.41379310344828} y={226} textAnchor="middle" fill="#666">
                                  <tspan x={247.41379310344828} dy="0.71em">
                                    {"May 21"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={765} stroke="none" fontSize="12" x={300.1724137931035} y={226} textAnchor="middle" fill="#666">
                                  <tspan x={300.1724137931035} dy="0.71em">
                                    {"May 23"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={765} stroke="none" fontSize="12" x={352.9310344827586} y={226} textAnchor="middle" fill="#666">
                                  <tspan x={352.9310344827586} dy="0.71em">
                                    {"May 25"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={765} stroke="none" fontSize="12" x={405.68965517241384} y={226} textAnchor="middle" fill="#666">
                                  <tspan x={405.68965517241384} dy="0.71em">
                                    {"May 27"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={765} stroke="none" fontSize="12" x={458.44827586206895} y={226} textAnchor="middle" fill="#666">
                                  <tspan x={458.44827586206895} dy="0.71em">
                                    {"May 29"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={765} stroke="none" fontSize="12" x={511.2068965517242} y={226} textAnchor="middle" fill="#666">
                                  <tspan x={511.2068965517242} dy="0.71em">
                                    {"May 31"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={765} stroke="none" fontSize="12" x={563.9655172413793} y={226} textAnchor="middle" fill="#666">
                                  <tspan x={563.9655172413793} dy="0.71em">
                                    {"Jun 02"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={765} stroke="none" fontSize="12" x={616.7241379310345} y={226} textAnchor="middle" fill="#666">
                                  <tspan x={616.7241379310345} dy="0.71em">
                                    {"Jun 04"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={765} stroke="none" fontSize="12" x={669.4827586206897} y={226} textAnchor="middle" fill="#666">
                                  <tspan x={669.4827586206897} dy="0.71em">
                                    {"Jun 06"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={765} stroke="none" fontSize="12" x={722.2413793103449} y={226} textAnchor="middle" fill="#666">
                                  <tspan x={722.2413793103449} dy="0.71em">
                                    {"Jun 08"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={765} stroke="none" fontSize="12" x={766.5625} y={226} textAnchor="middle" fill="#666">
                                  <tspan x={766.5625} dy="0.71em">
                                    {"Jun 10"}
                                  </tspan>
                                </text>
                              </g>
                            </g>
                            <text className="recharts-label recharts-text" fontSize="11" offset={5} x={189.6551724137931} y={15} textAnchor="end" fill="var(--muted-foreground)">
                              <tspan x={189.6551724137931} dy="0.71em">
                                {"v2.0.3"}
                              </tspan>
                            </text>
                            <text className="recharts-label recharts-text" fontSize="11" offset={5} x={595.344827586207} y={15} textAnchor="start" fill="var(--muted-foreground)">
                              <tspan x={595.344827586207} dy="0.71em">
                                {"v2.1.0"}
                              </tspan>
                            </text>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                </ChartContainer>
              </div>
            </FramePanel>
          </Frame>
          <Frame className="@4xl:col-span-1 h-full w-full">
            <header className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="font-semibold text-sm">
                {"Suite Results"}
              </div>
              <div className="font-medium text-muted-foreground text-xs">
                {"Reviewed by Noa Kim"}
              </div>
            </header>
            <FramePanel className="flex flex-col">
              <div className="flex flex-col h-full">
                <div className="gap-2 grid grid-cols-3">
                  <div className="flex flex-col items-start justify-start">
                    <div className="font-bold text-foreground text-xl">
                      {"212"}
                    </div>
                    <div className="font-medium mb-1 text-muted-foreground text-xs">
                      {"Passed"}
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="font-bold text-foreground text-xl">
                      {"5"}
                    </div>
                    <div className="font-medium mb-1 text-muted-foreground text-xs">
                      {"Suites"}
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="font-bold text-foreground text-xl">
                      {"1"}
                    </div>
                    <div className="font-medium mb-1 text-muted-foreground text-xs">
                      {"Regress"}
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  <ul className="space-y-5">
                    <li className="space-y-2">
                      <div className="flex gap-2.5 items-center justify-between text-sm">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="h-3.5 lucide lucide-trending-down text-destructive w-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                            <path d="M16 17h6v-6"></path>
                            <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                          </svg>
                          <span className="text-foreground text-xs truncate">
                            {"Outreach Tone"}
                          </span>
                        </span>
                        <span className="flex gap-1.5 items-center shrink-0">
                          <span className="font-semibold tabular-nums text-destructive text-xs">
                            {"-4.8"}
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                            {"38/42"}
                          </Badge>
                        </span>
                      </div>
                      <Progress className="**:data-[slot=progress-indicator]:bg-destructive **:data-[slot=progress-track]:h-1.5" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="90.47619047619048" aria-valuetext="90%" role="progressbar" aria-label="Outreach Tone pass rate">
                        <ProgressTrack progressing="">
                          <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "90.4762%"}}></ProgressIndicator>
                        </ProgressTrack>
                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                          {"x"}
                        </span>
                      </Progress>
                    </li>
                    <li className="space-y-2">
                      <div className="flex gap-2.5 items-center justify-between text-sm">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="h-3.5 lucide lucide-trending-up text-emerald-500 w-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                            <path d="M16 7h6v6"></path>
                            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                          </svg>
                          <span className="text-foreground text-xs truncate">
                            {"Refund Flows"}
                          </span>
                        </span>
                        <span className="flex gap-1.5 items-center shrink-0">
                          <span className="font-semibold tabular-nums text-success text-xs">
                            {"+2.1"}
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            {"46/48"}
                          </Badge>
                        </span>
                      </div>
                      <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-track]:h-1.5" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="95.83333333333334" aria-valuetext="96%" role="progressbar" aria-label="Refund Flows pass rate">
                        <ProgressTrack progressing="">
                          <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "95.8333%"}}></ProgressIndicator>
                        </ProgressTrack>
                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                          {"x"}
                        </span>
                      </Progress>
                    </li>
                    <li className="space-y-2">
                      <div className="flex gap-2.5 items-center justify-between text-sm">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="h-3.5 lucide lucide-trending-up text-emerald-500 w-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                            <path d="M16 7h6v6"></path>
                            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                          </svg>
                          <span className="text-foreground text-xs truncate">
                            {"Data Hygiene"}
                          </span>
                        </span>
                        <span className="flex gap-1.5 items-center shrink-0">
                          <span className="font-semibold tabular-nums text-success text-xs">
                            {"+0.9"}
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            {"52/54"}
                          </Badge>
                        </span>
                      </div>
                      <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-track]:h-1.5" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="96.29629629629629" aria-valuetext="96%" role="progressbar" aria-label="Data Hygiene pass rate">
                        <ProgressTrack progressing="">
                          <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "96.2963%"}}></ProgressIndicator>
                        </ProgressTrack>
                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                          {"x"}
                        </span>
                      </Progress>
                    </li>
                  </ul>
                </div>
              </div>
            </FramePanel>
            <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
              <span className="text-muted-foreground text-xs">
                {"212 of 224 cases passed on Jun 10"}
              </span>
            </footer>
          </Frame>
          <Frame className="@4xl:col-span-3 w-full">
            <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="flex flex-col gap-0.5 min-w-0">
                <div className="font-semibold text-balance text-sm">
                  {"Case Results"}
                </div>
                <div className="text-muted-foreground text-pretty text-xs">
                  {"v2.1.0 against v2.0.3 · 224 cases nightly"}
                </div>
              </div>
              <Field className="gap-2.5 shrink-0 w-auto" role="group" data-orientation="horizontal">
                <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-sm" htmlFor="regressions-only" id="regressions-only-label">
                  {"Regressions Only"}
                </FieldLabel>
                <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_4_" aria-checked="false" size="sm" aria-labelledby="regressions-only-label">
                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                </Switch>
                <input id="regressions-only" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </Field>
            </header>
            <FramePanel className="p-0! shadow-none!">
              <div className="flex flex-wrap gap-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                <Filters>
                  <div className="flex flex-wrap gap-2 items-center" role="toolbar" aria-label="Filters" aria-orientation="horizontal">
                    <FilterChip className="*:data-slot:rounded-r-none *:focus-visible:relative *:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>[data-slot]~[data-slot]]:border-l-0 [&>[data-slot]~[data-slot]]:rounded-l-none [&>input]:flex-1 cn-button-group cn-button-group-orientation-horizontal items-stretch style-sera:*:border-b-input style-sera:*:border-transparent style-sera:*:rounded-none w-fit" role="group" aria-label="Case contains no value" ruleId="case-1" tabIndex={0} index="0">
                      <div className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex gap-1.5 items-center" title="Case">
                        <svg className="lucide lucide-file-text size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                          <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                          <path d="M10 9H8"></path>
                          <path d="M16 13H8"></path>
                          <path d="M16 17H8"></path>
                        </svg>
                        <span className="flex items-center">
                          <span>
                            {"Case"}
                          </span>
                        </span>
                      </div>
                      <Popover>
                      <PopoverTrigger className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex hover:bg-accent items-center text-muted-foreground" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_9_" aria-haspopup="dialog" aria-expanded="false">
                        {"contains"}
                      </PopoverTrigger>
                      </Popover>
                      <Popover>
                      <PopoverTrigger className="[&_svg]:pointer-events-none bg-background cn-button-group-text cursor-default dark:bg-input/30 flex hover:bg-accent items-center text-muted-foreground" type="button" aria-label="Search..." tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_b_" aria-haspopup="dialog" aria-expanded="false">
                        {"Search..."}
                      </PopoverTrigger>
                      </Popover>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background cn-button cn-button-size-icon cn-button-variant-outline dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Case filter options" aria-haspopup="menu" id="base-ui-_r_f_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMoreLine">
                          <circle cx={12} cy={12} r={1}></circle>
                          <circle cx={12} cy={5} r={1}></circle>
                          <circle cx={12} cy={19} r={1}></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </FilterChip>
                  </div>
                  <Popover>
                  <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Filters" baseUiClickTrigger="" id="base-ui-_r_i_" aria-haspopup="dialog" aria-expanded="false">
                    <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                      <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                    </svg>
                    {"Filters"}
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
                  <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_j_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "260px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-x="" data-overflow-x-end="">
                    <div role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-overflow-x-end="">
                      <DataGridProvider>
                      <DataGridTableViewport style={{width: "calc(1498px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                        <DataGridProvider>
                        <DataGridTable style={{"--header-case-size": "300", "--col-case-size": "300", "--header-suite-size": "150", "--col-suite-size": "150", "--header-agent-size": "160", "--col-agent-size": "160", "--header-status-size": "118", "--col-status-size": "118", "--header-impact-size": "110", "--col-impact-size": "110", "--header-baseline-size": "90", "--col-baseline-size": "90", "--header-current-size": "90", "--col-current-size": "90", "--header-delta-size": "100", "--col-delta-size": "100", "--header-failures-size": "110", "--col-failures-size": "110", "--header-firstFailed-size": "120", "--col-firstFailed-size": "120", "--header-reviewer-size": "150", "--col-reviewer-size": "150", width: "calc(1498px + var(--data-grid-fill-size, 0px))"}}>
                          <colgroup>
                            <col style={{width: "calc(var(--col-case-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-suite-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-agent-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-status-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-impact-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-baseline-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-current-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-delta-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-failures-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-firstFailed-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-reviewer-size) * 1px)"}} />
                            <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                          </colgroup>
                          <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                            <tr className="[&>th]:border-b bg-transparent">
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="case" data-header-id="case" data-header-depth="0" style={{width: "calc(var(--header-case-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_n_" aria-expanded="false">
                                    {"Case"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="suite" data-header-id="suite" data-header-depth="0" style={{width: "calc(var(--header-suite-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_s_" aria-expanded="false">
                                    {"Suite"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="agent" data-header-id="agent" data-header-depth="0" style={{width: "calc(var(--header-agent-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_11_" aria-expanded="false">
                                    {"Agent"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "calc(var(--header-status-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_16_" aria-expanded="false">
                                    {"Status"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="impact" data-header-id="impact" data-header-depth="0" style={{width: "calc(var(--header-impact-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1b_" aria-expanded="false">
                                    {"Impact"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="baseline" data-header-id="baseline" data-header-depth="0" style={{width: "calc(var(--header-baseline-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1g_" aria-expanded="false">
                                    {"v2.0.3"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="current" data-header-id="current" data-header-depth="0" style={{width: "calc(var(--header-current-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1l_" aria-expanded="false">
                                    {"v2.1.0"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="delta" data-header-id="delta" data-header-depth="0" style={{width: "calc(var(--header-delta-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1q_" aria-expanded="false">
                                    {"Delta"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="failures" data-header-id="failures" data-header-depth="0" style={{width: "calc(var(--header-failures-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1v_" aria-expanded="false">
                                    {"Failures"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="firstFailed" data-header-id="firstFailed" data-header-depth="0" style={{width: "calc(var(--header-firstFailed-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_24_" aria-expanded="false">
                                    {"First Failed"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible pe-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="reviewer" data-header-id="reviewer" data-header-depth="0" style={{width: "calc(var(--header-reviewer-size) * 1px)"}}>
                                <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_29_" aria-expanded="false">
                                    {"Reviewer"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <span className="absolute before:hidden cursor-col-resize end-0 flex h-full justify-end select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                            </tr>
                          </thead>
                          <DataGridProvider>
                          <DataGridTableBody>
                            <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="EVAL-2214">
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-case-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <Button className="hover:text-foreground p-0 rounded-md shadow-none size-6 text-muted-foreground" type="button" tabIndex={0} aria-label="Collapse failing case detail">
                                    <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                      <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                  </Button>
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      {"Dunning email tone"}
                                    </span>
                                    <span className="text-muted-foreground text-xs">
                                      {"EVAL-2214"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-suite-size) * 1px)"}}>
                                <span className="text-foreground text-sm">
                                  {"Outreach Tone"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-agent-size) * 1px)"}}>
                                <span className="text-foreground text-sm">
                                  {"Outreach Composer"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  {"Regressed"}
                                </Badge>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-impact-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  {"Critical"}
                                </Badge>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-baseline-size) * 1px)"}}>
                                <span className="tabular-nums text-muted-foreground text-sm">
                                  {"9.1"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-current-size) * 1px)"}}>
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"6.4"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-delta-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  {"-2.7"}
                                </Badge>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-failures-size) * 1px)"}}>
                                <span className="font-medium tabular-nums text-destructive text-sm">
                                  {"9/12"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-firstFailed-size) * 1px)"}}>
                                <span className="tabular-nums text-foreground text-sm">
                                  {"Jun 03"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-reviewer-size) * 1px)"}}>
                                <span className="text-foreground text-sm">
                                  {"Jonas Reed"}
                                </span>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b">
                              <td colSpan="12">
                                <div className="px-5 py-3">
                                  <Alert className="[&>svg:not([class*=size-])]:size-4 [&>svg]:text-destructive bg-destructive/4 border border-destructive/30 gap-y-0.5 grid grid-cols-[0_1fr] has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start has-[>svg]:gap-x-2.5 has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] items-center max-sm:max-w-[calc(100vw-4rem)] max-w-[560px] px-3 py-2.5 style-luma:rounded-2xl style-lyra:rounded-none style-maia:rounded-lg style-mira:rounded-lg style-nova:rounded-lg style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-lg text-sm w-fit" role="alert">
                                    <svg className="lucide lucide-circle-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={10}></circle>
                                      <path d="m15 9-6 6"></path>
                                      <path d="m9 9 6 6"></path>
                                    </svg>
                                    <AlertTitle className="col-start-2 font-medium line-clamp-1 min-h-4 tracking-tight">
                                      {"Tone judge failing"}
                                    </AlertTitle>
                                    <AlertDescription className="[&_p]:leading-relaxed col-start-2 gap-1 grid justify-items-start text-muted-foreground text-sm">
                                      {"Judge flags apologetic openers on 9 of 12 dunning drafts. First failed Jun 03."}
                                    </AlertDescription>
                                  </Alert>
                                </div>
                              </td>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="EVAL-2168">
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-case-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <Button className="hover:text-foreground p-0 rounded-md shadow-none size-6 text-muted-foreground" type="button" tabIndex={0} aria-label="Collapse failing case detail">
                                    <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                      <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                  </Button>
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      {"Order lookup retry path"}
                                    </span>
                                    <span className="text-muted-foreground text-xs">
                                      {"EVAL-2168"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-suite-size) * 1px)"}}>
                                <span className="text-foreground text-sm">
                                  {"Data Hygiene"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-agent-size) * 1px)"}}>
                                <span className="text-foreground text-sm">
                                  {"Data Steward"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                  {"Flaky"}
                                </Badge>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-impact-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                  {"Medium"}
                                </Badge>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-baseline-size) * 1px)"}}>
                                <span className="tabular-nums text-muted-foreground text-sm">
                                  {"7.4"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-current-size) * 1px)"}}>
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"7.6"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-delta-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                  {"Flaky"}
                                </Badge>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-failures-size) * 1px)"}}>
                                <span className="font-medium tabular-nums text-destructive text-sm">
                                  {"3/7"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-firstFailed-size) * 1px)"}}>
                                <span className="tabular-nums text-foreground text-sm">
                                  {"Jun 08"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-reviewer-size) * 1px)"}}>
                                <span className="text-foreground text-sm">
                                  {"Noa Kim"}
                                </span>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b">
                              <td colSpan="12">
                                <div className="px-5 py-3">
                                  <Alert className="[&>svg:not([class*=size-])]:size-4 [&>svg]:text-warning bg-warning/4 border border-warning/30 gap-y-0.5 grid grid-cols-[0_1fr] has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start has-[>svg]:gap-x-2.5 has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] items-center max-sm:max-w-[calc(100vw-4rem)] max-w-[560px] px-3 py-2.5 style-luma:rounded-2xl style-lyra:rounded-none style-maia:rounded-lg style-mira:rounded-lg style-nova:rounded-lg style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-lg text-sm w-fit" role="alert">
                                    <svg className="lucide lucide-triangle-alert" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                      <path d="M12 9v4"></path>
                                      <path d="M12 17h.01"></path>
                                    </svg>
                                    <AlertTitle className="col-start-2 font-medium line-clamp-1 min-h-4 tracking-tight">
                                      {"Intermittent tool timeout"}
                                    </AlertTitle>
                                    <AlertDescription className="[&_p]:leading-relaxed col-start-2 gap-1 grid justify-items-start text-muted-foreground text-sm">
                                      {"orders.lookup exceeded the 8s budget on 3 of the last 7 nights."}
                                    </AlertDescription>
                                  </Alert>
                                </div>
                              </td>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="EVAL-2119">
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-case-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <Button className="hover:text-foreground p-0 rounded-md shadow-none size-6 text-muted-foreground" type="button" tabIndex={0} aria-label="Collapse failing case detail">
                                    <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                      <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                  </Button>
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      {"Refund evidence collection"}
                                    </span>
                                    <span className="text-muted-foreground text-xs">
                                      {"EVAL-2119"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-suite-size) * 1px)"}}>
                                <span className="text-foreground text-sm">
                                  {"Refund Flows"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-agent-size) * 1px)"}}>
                                <span className="text-foreground text-sm">
                                  {"Refund Resolver"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  {"Improved"}
                                </Badge>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-impact-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                  {"None"}
                                </Badge>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-baseline-size) * 1px)"}}>
                                <span className="tabular-nums text-muted-foreground text-sm">
                                  {"6.9"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-current-size) * 1px)"}}>
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"8.4"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-delta-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  {"+1.5"}
                                </Badge>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-failures-size) * 1px)"}}>
                                <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                  {"0/16"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-firstFailed-size) * 1px)"}}>
                                <span className="tabular-nums text-muted-foreground text-sm">
                                  {"None"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-reviewer-size) * 1px)"}}>
                                <span className="text-foreground text-sm">
                                  {"Maya Perez"}
                                </span>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b">
                              <td colSpan="12">
                                <div className="px-5 py-3">
                                  <Alert className="[&>svg:not([class*=size-])]:size-4 [&>svg]:text-success bg-success/4 border border-success/30 gap-y-0.5 grid grid-cols-[0_1fr] has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start has-[>svg]:gap-x-2.5 has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] items-center max-sm:max-w-[calc(100vw-4rem)] max-w-[560px] px-3 py-2.5 style-luma:rounded-2xl style-lyra:rounded-none style-maia:rounded-lg style-mira:rounded-lg style-nova:rounded-lg style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-lg text-sm w-fit" role="alert">
                                    <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={10}></circle>
                                      <path d="m9 12 2 2 4-4"></path>
                                    </svg>
                                    <AlertTitle className="col-start-2 font-medium line-clamp-1 min-h-4 tracking-tight">
                                      {"Evidence recall recovered"}
                                    </AlertTitle>
                                    <AlertDescription className="[&_p]:leading-relaxed col-start-2 gap-1 grid justify-items-start text-muted-foreground text-sm">
                                      {"Refund evidence now cites dispute notes and receipt images on all 16 nightly runs."}
                                    </AlertDescription>
                                  </Alert>
                                </div>
                              </td>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="EVAL-2052">
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-case-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="shrink-0 size-6" aria-hidden="true"></span>
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      {"Refund under $250 auto approve"}
                                    </span>
                                    <span className="text-muted-foreground text-xs">
                                      {"EVAL-2052"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-suite-size) * 1px)"}}>
                                <span className="text-foreground text-sm">
                                  {"Refund Flows"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-agent-size) * 1px)"}}>
                                <span className="text-foreground text-sm">
                                  {"Refund Resolver"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                  {"Passing"}
                                </Badge>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-impact-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                  {"None"}
                                </Badge>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-baseline-size) * 1px)"}}>
                                <span className="tabular-nums text-muted-foreground text-sm">
                                  {"9.4"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-current-size) * 1px)"}}>
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"9.5"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-delta-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                  {"+0.1"}
                                </Badge>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-failures-size) * 1px)"}}>
                                <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                  {"0/20"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-firstFailed-size) * 1px)"}}>
                                <span className="tabular-nums text-muted-foreground text-sm">
                                  {"None"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-reviewer-size) * 1px)"}}>
                                <span className="text-foreground text-sm">
                                  {"Lara Chen"}
                                </span>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_50%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] data-[state=selected]:bg-muted/50 hover:[&>td[data-pinned]]:bg-[color-mix(in_oklab,var(--muted)_40%,var(--data-grid-surface,var(--data-grid-card-surface,var(--background))))] hover:bg-muted/40" data-row-id="EVAL-2231">
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-case-size) * 1px)"}}>
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <Button className="hover:text-foreground p-0 rounded-md shadow-none size-6 text-muted-foreground" type="button" tabIndex={0} aria-label="Collapse failing case detail">
                                    <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                      <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                  </Button>
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      {"Renewal outreach personalization"}
                                    </span>
                                    <span className="text-muted-foreground text-xs">
                                      {"EVAL-2231"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-suite-size) * 1px)"}}>
                                <span className="text-foreground text-sm">
                                  {"Outreach Tone"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-agent-size) * 1px)"}}>
                                <span className="text-foreground text-sm">
                                  {"Outreach Composer"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  {"Regressed"}
                                </Badge>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-impact-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  {"High"}
                                </Badge>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-baseline-size) * 1px)"}}>
                                <span className="tabular-nums text-muted-foreground text-sm">
                                  {"8.6"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-current-size) * 1px)"}}>
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"7.0"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-delta-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  {"-1.6"}
                                </Badge>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-failures-size) * 1px)"}}>
                                <span className="font-medium tabular-nums text-destructive text-sm">
                                  {"11/14"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-firstFailed-size) * 1px)"}}>
                                <span className="tabular-nums text-foreground text-sm">
                                  {"Jun 03"}
                                </span>
                              </td>
                              <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_calc(1px*var(--data-grid-dir,1))_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_calc(-1px*var(--data-grid-dir,1))_0_0_0_var(--border)] align-middle data-pinned:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-reviewer-size) * 1px)"}}>
                                <span className="text-foreground text-sm">
                                  {"Pavel Singh"}
                                </span>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b">
                              <td colSpan="12">
                                <div className="px-5 py-3">
                                  <Alert className="[&>svg:not([class*=size-])]:size-4 [&>svg]:text-destructive bg-destructive/4 border border-destructive/30 gap-y-0.5 grid grid-cols-[0_1fr] has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start has-[>svg]:gap-x-2.5 has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] items-center max-sm:max-w-[calc(100vw-4rem)] max-w-[560px] px-3 py-2.5 style-luma:rounded-2xl style-lyra:rounded-none style-maia:rounded-lg style-mira:rounded-lg style-nova:rounded-lg style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-lg text-sm w-fit" role="alert">
                                    <svg className="lucide lucide-circle-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={10}></circle>
                                      <path d="m15 9-6 6"></path>
                                      <path d="m9 9 6 6"></path>
                                    </svg>
                                    <AlertTitle className="col-start-2 font-medium line-clamp-1 min-h-4 tracking-tight">
                                      {"Wrong company name"}
                                    </AlertTitle>
                                    <AlertDescription className="[&_p]:leading-relaxed col-start-2 gap-1 grid justify-items-start text-muted-foreground text-sm">
                                      {"Greeting uses the legal name instead of the preferred name in 11 of 14 drafts. First failed Jun 03."}
                                    </AlertDescription>
                                  </Alert>
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
                  <div className="data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-[var(--data-grid-scrollbar-size,0.625rem)] data-[orientation=horizontal]:mb-px data-[orientation=vertical]:border-s data-[orientation=vertical]:border-s-transparent data-[orientation=vertical]:h-full data-[orientation=vertical]:me-px data-[orientation=vertical]:w-[var(--data-grid-scrollbar-size,0.625rem)] flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_r_j_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "1021.4739652870494px"}}>
                    <div className="before:-inset-0.5 before:absolute bg-border flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                  </div>
                </DataGridScrollArea>
                </DataGridProvider>
              </div>
            </FramePanel>
            <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
              <DataGridProvider>
              <DataGridPagination>
                <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                  <div className="text-muted-foreground text-sm">
                    {"Rows per page"}
                  </div>
                  <Select>
                  <SelectTrigger className="min-w-16" type="button" tabIndex={0} id="base-ui-_r_2b_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                    <SelectValue>
                      {"5"}
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_2b_-hidden-input" tabIndex={-1} aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                  <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                    {"1 - 5 of 10"}
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
          </Frame>
        </div>
      </div>
    </main>
  )
}
