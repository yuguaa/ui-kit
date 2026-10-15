import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFillBodyCell,
  DataGridTableFillHeadCell,
  DataGridTableFoot,
  DataGridTableFootRow,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
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
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
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
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-4 pt-8 sm:p-8 sm:pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Store profit and loss
      </h1>
      <Frame className="@container/grid [--color-gain:var(--color-blue-500)] [--color-loss:var(--destructive)] [--grid-cell-px:--spacing(2)] [--tree-leaf-pad:--spacing(4)] w-full" spacing="default">
        <header className="flex flex-row flex-wrap gap-(--frame-panel-header-gap) gap-x-3 gap-y-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-px min-w-0">
            <div className="font-semibold text-sm">
              Store P&L
            </div>
            <div className="flex flex-wrap gap-x-1.5 items-center text-muted-foreground text-xs">
              <span className="tabular-nums">
                28 stores
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span className="tabular-nums">
                10 markets
              </span>
              <span className="@max-6xl/grid:hidden contents">
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  FY26, Oct 2025 to Sep 2026
                </span>
              </span>
            </div>
          </div>
          <div className="*:col-start-1 *:row-start-1 grid max-sm:w-full min-w-0">
            <div className="flex flex-wrap gap-2 items-center max-sm:w-full min-w-0">
              <InputGroup className="sm:w-56" role="group">
                <InputGroupAddon role="group" data-align="inline-start">
                  <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                  </svg>
                </InputGroupAddon>
                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1_" placeholder="Search stores..." aria-label="Search stores" value="" />
              </InputGroup>
              <ButtonGroup role="group" aria-label="View">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:bg-muted aria-pressed:text-foreground cn-button cn-button-size-icon cn-button-variant-outline dark:aria-pressed:bg-input/50 disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filters" aria-pressed="false" id="base-ui-_r_3_" baseUiTooltipTrigger="" extracted="1">
                  <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                    <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 style-luma:[&_svg:not([class*='size-'])]:size-4 style-lyra:[&_svg:not([class*='size-'])]:size-4 style-maia:[&_svg:not([class*='size-'])]:size-4 style-mira:[&_svg:not([class*='size-'])]:size-3.5 style-nova:[&_svg:not([class*='size-'])]:size-4 style-rhea:[&_svg:not([class*='size-'])]:size-4 style-sera:[&_svg:not([class*='size-'])]:size-3.5 style-vega:[&_svg:not([class*='size-'])]:size-4 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Columns" id="base-ui-_r_8_" role="combobox" aria-expanded="false" aria-haspopup="dialog" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-columns-3 lucide-columns3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Columns3Icon" tabler="IconColumns3" hugeicons="Layout07Icon" phosphor="ColumnsIcon" remixicon="RiLayoutColumnLine" aria-hidden="true">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M9 3v18"></path>
                    <path d="M15 3v18"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <input id="base-ui-_r_5_-hidden-input" tabIndex="-1" aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Settings" baseUiClickTrigger="" id="base-ui-_r_c_" aria-haspopup="dialog" aria-expanded="false" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                    <path d="M14 17H5"></path>
                    <path d="M19 7h-9"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Export" id="base-ui-_r_f_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                    <path d="M12 15V3"></path>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <path d="m7 10 5 5 5-5"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </ButtonGroup>
              <Button className="max-sm:ms-auto" type="button" tabIndex="0">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                New Store
              </Button>
            </div>
          </div>
        </header>
        <FramePanel className="p-0">
          <div className="@container/regions border-b px-(--frame-panel-header-px) py-2">
            <ToggleGroup className="@4xl/regions:grid-cols-4 @md/regions:grid @md/regions:grid-cols-2 @md/regions:overflow-visible gap-2 items-stretch max-@md/regions:-m-1 max-@md/regions:p-1 no-scrollbar overflow-x-auto snap-mandatory snap-x w-full" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" spacing="2" aria-label="Region" style={{"--gap": "2"}}>
              <ToggleGroupItem className="@md/regions:w-auto [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline data-pressed:border-foreground/30 disabled:opacity-50 disabled:pointer-events-none flex-col focus-visible:ring-[3px] font-normal gap-2 group/toggle h-auto hover:bg-muted inline-flex items-stretch justify-start min-w-0 outline-none p-3 snap-start text-start w-64 whitespace-normal" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="default" spacing="2" aria-label="All Regions: 28 stores, $122M net sales, +4.2% year on year, 12.8% margin, 5 loss making, 15% of sales">
                <span className="flex flex-col gap-1">
                  <span className="flex gap-2 h-6 items-center min-w-0">
                    <IconTile variant="outline" size="xs" aria-hidden="true">
                      <svg className="lucide lucide-globe" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                    </IconTile>
                    <span className="font-medium text-foreground text-sm truncate">
                      All Regions
                    </span>
                    <span className="ms-auto shrink-0 tabular-nums text-muted-foreground text-xs">
                      28 stores
                    </span>
                  </span>
                  <span className="flex gap-2 h-6 items-center">
                    <span className="font-semibold tabular-nums text-foreground text-xl/6 tracking-tight">
                      $122M
                    </span>
                    <span className="dark:text-blue-400 gap-1 inline-flex items-center tabular-nums text-blue-600 text-xs">
                      <svg className="lucide lucide-trending-up shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                      +4.2%
                    </span>
                  </span>
                </span>
                <span className="flex flex-col gap-1.5">
                  <span className="bg-muted-foreground/15 flex gap-0.5 h-1.5 rounded-full w-full" aria-hidden="true">
                    <span className="bg-(--color-gain) min-w-1.5 rounded-full" style={{flex: "1.0403e+08 1 0%"}}></span>
                    <span className="bg-(--color-loss) min-w-1.5 rounded-full" style={{flex: "1.795e+07 1 0%"}}></span>
                  </span>
                  <span className="flex gap-2 h-4 items-center justify-between min-w-0 text-muted-foreground text-xs">
                    <span className="truncate">
                      <span className="tabular-nums text-foreground">
                        12.8%
                      </span>
                      margin
                    </span>
                    <span className="shrink-0">
                      <span className="font-medium tabular-nums text-destructive">
                        5
                      </span>
                      loss-making
                    </span>
                  </span>
                </span>
              </ToggleGroupItem>
              <ToggleGroupItem className="@md/regions:w-auto [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline data-pressed:border-foreground/30 disabled:opacity-50 disabled:pointer-events-none flex-col focus-visible:ring-[3px] font-normal gap-2 group/toggle h-auto hover:bg-muted inline-flex items-stretch justify-start min-w-0 outline-none p-3 snap-start text-start w-64 whitespace-normal" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="2" aria-label="Americas: 11 stores, $51M net sales, +7.2% year on year, 16.2% margin, 1 loss making, 5% of sales">
                <span className="flex flex-col gap-1">
                  <span className="flex gap-2 h-6 items-center min-w-0">
                    <span className="flex gap-0.5 shrink-0" aria-hidden="true">
                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/us.svg" />
                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/ca.svg" />
                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/mx.svg" />
                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/br.svg" />
                    </span>
                    <span className="font-medium text-foreground text-sm truncate">
                      Americas
                    </span>
                    <span className="ms-auto shrink-0 tabular-nums text-muted-foreground text-xs">
                      11 stores
                    </span>
                  </span>
                  <span className="flex gap-2 h-6 items-center">
                    <span className="font-semibold tabular-nums text-foreground text-xl/6 tracking-tight">
                      $51M
                    </span>
                    <span className="dark:text-blue-400 gap-1 inline-flex items-center tabular-nums text-blue-600 text-xs">
                      <svg className="lucide lucide-trending-up shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                      +7.2%
                    </span>
                  </span>
                </span>
                <span className="flex flex-col gap-1.5">
                  <span className="bg-muted-foreground/15 flex gap-0.5 h-1.5 rounded-full w-full" aria-hidden="true">
                    <span className="bg-(--color-gain) min-w-1.5 rounded-full" style={{flex: "4.849e+07 1 0%"}}></span>
                    <span className="bg-(--color-loss) min-w-1.5 rounded-full" style={{flex: "2.48e+06 1 0%"}}></span>
                  </span>
                  <span className="flex gap-2 h-4 items-center justify-between min-w-0 text-muted-foreground text-xs">
                    <span className="truncate">
                      <span className="tabular-nums text-foreground">
                        16.2%
                      </span>
                      margin
                    </span>
                    <span className="shrink-0">
                      <span className="font-medium tabular-nums text-destructive">
                        1
                      </span>
                      loss-making
                    </span>
                  </span>
                </span>
              </ToggleGroupItem>
              <ToggleGroupItem className="@md/regions:w-auto [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline data-pressed:border-foreground/30 disabled:opacity-50 disabled:pointer-events-none flex-col focus-visible:ring-[3px] font-normal gap-2 group/toggle h-auto hover:bg-muted inline-flex items-stretch justify-start min-w-0 outline-none p-3 snap-start text-start w-64 whitespace-normal" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="2" aria-label="EMEA: 11 stores, $44.1M net sales, -0.6% year on year, 7.9% margin, 3 loss making, 30% of sales">
                <span className="flex flex-col gap-1">
                  <span className="flex gap-2 h-6 items-center min-w-0">
                    <span className="flex gap-0.5 shrink-0" aria-hidden="true">
                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/gb.svg" />
                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/de.svg" />
                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/fr.svg" />
                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/es.svg" />
                    </span>
                    <span className="font-medium text-foreground text-sm truncate">
                      EMEA
                    </span>
                    <span className="ms-auto shrink-0 tabular-nums text-muted-foreground text-xs">
                      11 stores
                    </span>
                  </span>
                  <span className="flex gap-2 h-6 items-center">
                    <span className="font-semibold tabular-nums text-foreground text-xl/6 tracking-tight">
                      $44.1M
                    </span>
                    <span className="gap-1 inline-flex items-center tabular-nums text-destructive text-xs">
                      <svg className="lucide lucide-trending-down shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                        <path d="M16 17h6v-6"></path>
                        <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                      </svg>
                      -0.6%
                    </span>
                  </span>
                </span>
                <span className="flex flex-col gap-1.5">
                  <span className="bg-muted-foreground/15 flex gap-0.5 h-1.5 rounded-full w-full" aria-hidden="true">
                    <span className="bg-(--color-gain) min-w-1.5 rounded-full" style={{flex: "3.096e+07 1 0%"}}></span>
                    <span className="bg-(--color-loss) min-w-1.5 rounded-full" style={{flex: "1.311e+07 1 0%"}}></span>
                  </span>
                  <span className="flex gap-2 h-4 items-center justify-between min-w-0 text-muted-foreground text-xs">
                    <span className="truncate">
                      <span className="tabular-nums text-foreground">
                        7.9%
                      </span>
                      margin
                    </span>
                    <span className="shrink-0">
                      <span className="font-medium tabular-nums text-destructive">
                        3
                      </span>
                      loss-making
                    </span>
                  </span>
                </span>
              </ToggleGroupItem>
              <ToggleGroupItem className="@md/regions:w-auto [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline data-pressed:border-foreground/30 disabled:opacity-50 disabled:pointer-events-none flex-col focus-visible:ring-[3px] font-normal gap-2 group/toggle h-auto hover:bg-muted inline-flex items-stretch justify-start min-w-0 outline-none p-3 snap-start text-start w-64 whitespace-normal" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="2" aria-label="APAC: 6 stores, $26.9M net sales, +7.3% year on year, 14.2% margin, 1 loss making, 9% of sales">
                <span className="flex flex-col gap-1">
                  <span className="flex gap-2 h-6 items-center min-w-0">
                    <span className="flex gap-0.5 shrink-0" aria-hidden="true">
                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/jp.svg" />
                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/au.svg" />
                    </span>
                    <span className="font-medium text-foreground text-sm truncate">
                      APAC
                    </span>
                    <span className="ms-auto shrink-0 tabular-nums text-muted-foreground text-xs">
                      6 stores
                    </span>
                  </span>
                  <span className="flex gap-2 h-6 items-center">
                    <span className="font-semibold tabular-nums text-foreground text-xl/6 tracking-tight">
                      $26.9M
                    </span>
                    <span className="dark:text-blue-400 gap-1 inline-flex items-center tabular-nums text-blue-600 text-xs">
                      <svg className="lucide lucide-trending-up shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                      +7.3%
                    </span>
                  </span>
                </span>
                <span className="flex flex-col gap-1.5">
                  <span className="bg-muted-foreground/15 flex gap-0.5 h-1.5 rounded-full w-full" aria-hidden="true">
                    <span className="bg-(--color-gain) min-w-1.5 rounded-full" style={{flex: "2.458e+07 1 0%"}}></span>
                    <span className="bg-(--color-loss) min-w-1.5 rounded-full" style={{flex: "2.36e+06 1 0%"}}></span>
                  </span>
                  <span className="flex gap-2 h-4 items-center justify-between min-w-0 text-muted-foreground text-xs">
                    <span className="truncate">
                      <span className="tabular-nums text-foreground">
                        14.2%
                      </span>
                      margin
                    </span>
                    <span className="shrink-0">
                      <span className="font-medium tabular-nums text-destructive">
                        1
                      </span>
                      loss-making
                    </span>
                  </span>
                </span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="relative">
            <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_k_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div role="presentation" style={{minWidth: "fit-content"}}>
                  <DataGridTableViewport style={{width: "calc(1214px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                    <DataGridTable style={{"--header-select-size": "49", "--col-select-size": "49", "--header-store-size": "291", "--col-store-size": "291", "--header-salesRank-size": "76", "--col-salesRank-size": "76", "--header-sales-size": "160", "--col-sales-size": "160", "--header-yoy-size": "106", "--col-yoy-size": "106", "--header-profitRank-size": "76", "--col-profitRank-size": "76", "--header-profit-size": "96", "--col-profit-size": "96", "--header-change-size": "104", "--col-change-size": "104", "--header-changeGain-size": "104", "--col-changeGain-size": "104", "--header-margin-size": "92", "--col-margin-size": "92", "--header-actions-size": "60", "--col-actions-size": "60", width: "calc(1214px + var(--data-grid-fill-size, 0px))"}}>
                      <colgroup>
                        <col style={{width: "calc(var(--col-select-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-store-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-salesRank-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-sales-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-yoy-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-profitRank-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-profit-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-change-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-changeGain-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-margin-size) * 1px)"}} />
                        <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                        <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                      </colgroup>
                      <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                        <tr className="*:last:border-e-0 [&>th]:border-b bg-transparent">
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" data-pinned="start" data-outer-pinned-col="start" data-last-col="start" style={{top: "0px", width: "calc(var(--header-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_l_" aria-checked="false" aria-label="Select all"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="store" data-header-id="store" data-header-depth="0" style={{width: "calc(var(--header-store-size) * 1px)"}}>
                            <div className="-ms-2 flex h-full items-center">
                              <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                Store
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </Button>
                            </div>
                            <span className="-end-2 absolute before:hidden cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="salesRank" data-header-id="salesRank" data-header-depth="0" style={{width: "calc(var(--header-salesRank-size) * 1px)"}}>
                            <div className="-me-2 flex flex-1 justify-end min-w-0">
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_r_" aria-expanded="false">
                                  Sales #
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </div>
                            <span className="-end-2 absolute before:hidden cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" data-col-id="sales" data-header-id="sales" data-header-depth="0" style={{width: "calc(var(--header-sales-size) * 1px)"}}>
                            <div className="-me-2 flex flex-1 justify-end min-w-0">
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_10_" aria-expanded="false">
                                  Net Sales
                                  <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                    <path d="M12 5v14"></path>
                                    <path d="m19 12-7 7-7-7"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </div>
                            <span className="-end-2 absolute before:hidden cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="yoy" data-header-id="yoy" data-header-depth="0" style={{width: "calc(var(--header-yoy-size) * 1px)"}}>
                            <div className="-me-2 flex flex-1 justify-end min-w-0">
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_15_" aria-expanded="false">
                                  YoY
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </div>
                            <span className="-end-2 absolute before:hidden cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="profitRank" data-header-id="profitRank" data-header-depth="0" style={{width: "calc(var(--header-profitRank-size) * 1px)"}}>
                            <div className="-me-2 flex flex-1 justify-end min-w-0">
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1a_" aria-expanded="false">
                                  Profit #
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </div>
                            <span className="-end-2 absolute before:hidden cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="profit" data-header-id="profit" data-header-depth="0" style={{width: "calc(var(--header-profit-size) * 1px)"}}>
                            <div className="-me-2 flex flex-1 justify-end min-w-0">
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1f_" aria-expanded="false">
                                  Profit
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </div>
                            <span className="-end-2 absolute before:hidden cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" colSpan="2" aria-sort="none" data-col-id="change" data-header-id="change" data-header-depth="0" data-span="2" style={{width: "calc((var(--header-change-size) + var(--header-changeGain-size)) * 1px)"}}>
                            <div className="-me-2 flex flex-1 in-[th[colspan='2']]:[&>div]:ms-0 in-[th[colspan='2']]:[&>div]:w-full in-[th[colspan='2']]:me-0 justify-end min-w-0">
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground in-[th[colspan='2']]:justify-center in-[th[colspan='2']]:w-full inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1k_" aria-expanded="false">
                                  <span className="hidden in-[th[colspan='2']]:block shrink-0 w-3.25" aria-hidden="true"></span>
                                  <span className="in-[th[colspan='2']]:hidden">
                                    Change
                                    <span className="sr-only">
                                      vs FY25
                                    </span>
                                  </span>
                                  <span className="hidden in-[th[colspan='2']]:inline">
                                    Profit vs FY25
                                  </span>
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="margin" data-header-id="margin" data-header-depth="0" style={{width: "calc(var(--header-margin-size) * 1px)"}}>
                            <div className="-me-2 flex flex-1 justify-end min-w-0">
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1p_" aria-expanded="false">
                                  Margin
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                            </div>
                            <span className="-end-2 absolute before:hidden cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" data-pinned="end" data-outer-pinned-col="end" data-last-col="end" style={{top: "0px", width: "calc(var(--header-actions-size) * 1px)"}}>
                            <span className="sr-only">
                              Actions
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <DataGridTableBody>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="stl_028t5">
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1r_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-store-size) * 1px)"}}>
                            <div className="flex min-w-0">
                              <span className="flex flex-col min-w-0">
                                <span className="flex gap-1.5 h-5 items-center min-w-0">
                                  <button className="cursor-pointer font-medium hover:text-primary hover:underline leading-5 min-w-0 text-[13px] text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Portland Pearl">
                                    Portland Pearl
                                  </button>
                                </span>
                                <span className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/us.svg" />
                                      <span className="font-mono text-xs" aria-hidden="true">
                                        US
                                      </span>
                                      <span className="sr-only">
                                        United States
                                      </span>
                                    </span>
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Flagship
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-salesRank-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                                <span aria-hidden="true">
                                  1
                                </span>
                                <span className="sr-only">
                                  Ranked 1 of 28 by net sales
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-sales-size) * 1px)"}}>
                            <div className="flex flex-col min-w-0">
                              <span className="flex gap-1.5 h-5 items-baseline justify-between min-w-0">
                                <span className="in-[tfoot]:text-foreground/70 leading-4 min-w-0 tabular-nums text-muted-foreground text-xs truncate whitespace-nowrap">
                                  <span>
                                    103%
                                  </span>
                                  of plan
                                </span>
                                <span className="font-medium leading-5 shrink-0 tabular-nums text-[13px] text-foreground">
                                  $12.6M
                                </span>
                              </span>
                              <span className="flex flex-col h-4 justify-center">
                                <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-none gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(0.00%, 100% - 0.375rem), 1px)"}}>
                                  <ProgressTrack complete="">
                                    <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-yoy-size) * 1px)"}}>
                            <div className="flex flex-col items-end min-w-0">
                              <span className="dark:text-blue-400 gap-1 inline-flex items-center leading-5 tabular-nums text-[13px] text-blue-600">
                                <svg className="lucide lucide-trending-up shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                  <path d="M16 7h6v6"></path>
                                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                +7.7%
                              </span>
                              <span className="leading-4 tabular-nums text-muted-foreground text-xs truncate">
                                FY25 $11.7M
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-profitRank-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                                <span aria-hidden="true">
                                  1
                                </span>
                                <span className="sr-only">
                                  Ranked 1 of 28 by operating profit
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-profit-size) * 1px)"}}>
                            <div className="absolute bg-blue-300 dark:bg-blue-700/70 dark:text-white flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-[13px] text-blue-950">
                              $3.04M
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5" style={{width: "calc(var(--col-change-size) * 1px)"}}>
                            <div className="flex h-5 items-center justify-end min-w-0">
                              <span className="sr-only">
                                +14%, +$369K vs FY25
                              </span>
                              <span className="in-[tfoot]:text-foreground/70 leading-4 tabular-nums text-muted-foreground text-xs truncate" aria-hidden="true">
                                +$369K
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5" style={{width: "calc(var(--col-changeGain-size) * 1px)"}}>
                            <div className="flex gap-1 h-5 items-center justify-start min-w-0">
                              <span className="bg-success h-1.5 rounded-full shrink-0" aria-hidden="true" style={{width: "max(0.375rem, round(down, 27.63% - 0.8289rem, 1px))"}}></span>
                              <span className="font-medium leading-4 shrink-0 tabular-nums text-foreground text-xs whitespace-nowrap" aria-hidden="true">
                                +14%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-margin-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                24.1%
                              </Badge>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) ps-(--frame-panel-header-px) px-2 py-1.5" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-center">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" rowActions="stl_028t5" aria-label="Actions for Portland Pearl" aria-haspopup="menu" id="base-ui-_r_21_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="stl_vst4v">
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_23_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-store-size) * 1px)"}}>
                            <div className="flex min-w-0">
                              <span className="flex flex-col min-w-0">
                                <span className="flex gap-1.5 h-5 items-center min-w-0">
                                  <button className="cursor-pointer font-medium hover:text-primary hover:underline leading-5 min-w-0 text-[13px] text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Tokyo Shibuya">
                                    Tokyo Shibuya
                                  </button>
                                </span>
                                <span className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/jp.svg" />
                                      <span className="font-mono text-xs" aria-hidden="true">
                                        JP
                                      </span>
                                      <span className="sr-only">
                                        Japan
                                      </span>
                                    </span>
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Flagship
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-salesRank-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                                <span aria-hidden="true">
                                  2
                                </span>
                                <span className="sr-only">
                                  Ranked 2 of 28 by net sales
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-sales-size) * 1px)"}}>
                            <div className="flex flex-col min-w-0">
                              <span className="flex gap-1.5 h-5 items-baseline justify-between min-w-0">
                                <span className="in-[tfoot]:text-foreground/70 leading-4 min-w-0 tabular-nums text-muted-foreground text-xs truncate whitespace-nowrap">
                                  <span>
                                    106%
                                  </span>
                                  of plan
                                </span>
                                <span className="font-medium leading-5 shrink-0 tabular-nums text-[13px] text-foreground">
                                  $11.4M
                                </span>
                              </span>
                              <span className="flex flex-col h-4 justify-center">
                                <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-none gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(0.00%, 100% - 0.375rem), 1px)"}}>
                                  <ProgressTrack complete="">
                                    <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-yoy-size) * 1px)"}}>
                            <div className="flex flex-col items-end min-w-0">
                              <span className="dark:text-blue-400 gap-1 inline-flex items-center leading-5 tabular-nums text-[13px] text-blue-600">
                                <svg className="lucide lucide-trending-up shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                  <path d="M16 7h6v6"></path>
                                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                +10.0%
                              </span>
                              <span className="leading-4 tabular-nums text-muted-foreground text-xs truncate">
                                FY25 $10.4M
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-profitRank-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                                <span aria-hidden="true">
                                  2
                                </span>
                                <span className="sr-only">
                                  Ranked 2 of 28 by operating profit
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-profit-size) * 1px)"}}>
                            <div className="absolute bg-blue-300 dark:bg-blue-700/70 dark:text-white flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-[13px] text-blue-950">
                              $2.11M
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5" style={{width: "calc(var(--col-change-size) * 1px)"}}>
                            <div className="flex h-5 items-center justify-end min-w-0">
                              <span className="sr-only">
                                +19%, +$337K vs FY25
                              </span>
                              <span className="in-[tfoot]:text-foreground/70 leading-4 tabular-nums text-muted-foreground text-xs truncate" aria-hidden="true">
                                +$337K
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5" style={{width: "calc(var(--col-changeGain-size) * 1px)"}}>
                            <div className="flex gap-1 h-5 items-center justify-start min-w-0">
                              <span className="bg-success h-1.5 rounded-full shrink-0" aria-hidden="true" style={{width: "max(0.375rem, round(down, 38.01% - 1.1403rem, 1px))"}}></span>
                              <span className="font-medium leading-4 shrink-0 tabular-nums text-foreground text-xs whitespace-nowrap" aria-hidden="true">
                                +19%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-margin-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                18.5%
                              </Badge>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) ps-(--frame-panel-header-px) px-2 py-1.5" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-center">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" rowActions="stl_vst4v" aria-label="Actions for Tokyo Shibuya" aria-haspopup="menu" id="base-ui-_r_29_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="stl_fxiz0">
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2b_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-store-size) * 1px)"}}>
                            <div className="flex min-w-0">
                              <span className="flex flex-col min-w-0">
                                <span className="flex gap-1.5 h-5 items-center min-w-0">
                                  <button className="cursor-pointer font-medium hover:text-primary hover:underline leading-5 min-w-0 text-[13px] text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open London Seven Dials">
                                    London Seven Dials
                                  </button>
                                </span>
                                <span className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/gb.svg" />
                                      <span className="font-mono text-xs" aria-hidden="true">
                                        GB
                                      </span>
                                      <span className="sr-only">
                                        United Kingdom
                                      </span>
                                    </span>
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Flagship
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-salesRank-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                                <span aria-hidden="true">
                                  3
                                </span>
                                <span className="sr-only">
                                  Ranked 3 of 28 by net sales
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-sales-size) * 1px)"}}>
                            <div className="flex flex-col min-w-0">
                              <span className="flex gap-1.5 h-5 items-baseline justify-between min-w-0">
                                <span className="in-[tfoot]:text-foreground/70 leading-4 min-w-0 tabular-nums text-muted-foreground text-xs truncate whitespace-nowrap">
                                  <span className="text-destructive">
                                    92%
                                  </span>
                                  of plan
                                </span>
                                <span className="font-medium leading-5 shrink-0 tabular-nums text-[13px] text-foreground">
                                  $10.9M
                                </span>
                              </span>
                              <span className="flex flex-col h-4 justify-center">
                                <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-destructive **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-none gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(8.40%, 100% - 0.375rem), 1px)"}}>
                                  <ProgressTrack complete="">
                                    <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-yoy-size) * 1px)"}}>
                            <div className="flex flex-col items-end min-w-0">
                              <span className="gap-1 inline-flex items-center leading-5 tabular-nums text-[13px] text-destructive">
                                <svg className="lucide lucide-trending-down shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                                  <path d="M16 17h6v-6"></path>
                                  <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                </svg>
                                -4.6%
                              </span>
                              <span className="leading-4 tabular-nums text-muted-foreground text-xs truncate">
                                FY25 $11.4M
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-profitRank-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                                <span aria-hidden="true">
                                  28
                                </span>
                                <span className="sr-only">
                                  Ranked 28 of 28 by operating profit
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-profit-size) * 1px)"}}>
                            <div className="absolute bg-red-200 dark:bg-red-800/60 dark:text-white flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-[13px] text-red-950">
                              -$425K
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5" style={{width: "calc(var(--col-change-size) * 1px)"}}>
                            <div className="flex gap-1 h-5 items-center justify-end min-w-0">
                              <span className="font-medium leading-4 shrink-0 tabular-nums text-destructive text-xs whitespace-nowrap">
                                -140%
                                <span className="sr-only">
                                  , -$1.49M vs FY25
                                </span>
                              </span>
                              <span className="bg-destructive h-1.5 rounded-full shrink-0" aria-hidden="true" style={{width: "max(0.375rem, round(down, 100% - 3rem, 1px))"}}></span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5" style={{width: "calc(var(--col-changeGain-size) * 1px)"}}>
                            <div className="flex h-5 items-center justify-start min-w-0">
                              <span className="in-[tfoot]:text-foreground/70 leading-4 tabular-nums text-muted-foreground text-xs truncate" aria-hidden="true">
                                -$1.49M
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-margin-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-destructive-foreground text-xs transition-shadow">
                                -3.9%
                              </Badge>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) ps-(--frame-panel-header-px) px-2 py-1.5" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-center">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" rowActions="stl_fxiz0" aria-label="Actions for London Seven Dials" aria-haspopup="menu" id="base-ui-_r_2h_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="stl_nn0c6">
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2j_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-store-size) * 1px)"}}>
                            <div className="flex min-w-0">
                              <span className="flex flex-col min-w-0">
                                <span className="flex gap-1.5 h-5 items-center min-w-0">
                                  <button className="cursor-pointer font-medium hover:text-primary hover:underline leading-5 min-w-0 text-[13px] text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Vancouver Gastown">
                                    Vancouver Gastown
                                  </button>
                                </span>
                                <span className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/ca.svg" />
                                      <span className="font-mono text-xs" aria-hidden="true">
                                        CA
                                      </span>
                                      <span className="sr-only">
                                        Canada
                                      </span>
                                    </span>
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Flagship
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-salesRank-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                                <span aria-hidden="true">
                                  4
                                </span>
                                <span className="sr-only">
                                  Ranked 4 of 28 by net sales
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-sales-size) * 1px)"}}>
                            <div className="flex flex-col min-w-0">
                              <span className="flex gap-1.5 h-5 items-baseline justify-between min-w-0">
                                <span className="in-[tfoot]:text-foreground/70 leading-4 min-w-0 tabular-nums text-muted-foreground text-xs truncate whitespace-nowrap">
                                  <span>
                                    103%
                                  </span>
                                  of plan
                                </span>
                                <span className="font-medium leading-5 shrink-0 tabular-nums text-[13px] text-foreground">
                                  $9.84M
                                </span>
                              </span>
                              <span className="flex flex-col h-4 justify-center">
                                <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-none gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(0.00%, 100% - 0.375rem), 1px)"}}>
                                  <ProgressTrack complete="">
                                    <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-yoy-size) * 1px)"}}>
                            <div className="flex flex-col items-end min-w-0">
                              <span className="dark:text-blue-400 gap-1 inline-flex items-center leading-5 tabular-nums text-[13px] text-blue-600">
                                <svg className="lucide lucide-trending-up shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                  <path d="M16 7h6v6"></path>
                                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                +6.8%
                              </span>
                              <span className="leading-4 tabular-nums text-muted-foreground text-xs truncate">
                                FY25 $9.21M
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-profitRank-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                                <span aria-hidden="true">
                                  3
                                </span>
                                <span className="sr-only">
                                  Ranked 3 of 28 by operating profit
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-profit-size) * 1px)"}}>
                            <div className="absolute bg-blue-300 dark:bg-blue-700/70 dark:text-white flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-[13px] text-blue-950">
                              $1.97M
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5" style={{width: "calc(var(--col-change-size) * 1px)"}}>
                            <div className="flex h-5 items-center justify-end min-w-0">
                              <span className="sr-only">
                                +12%, +$218K vs FY25
                              </span>
                              <span className="in-[tfoot]:text-foreground/70 leading-4 tabular-nums text-muted-foreground text-xs truncate" aria-hidden="true">
                                +$218K
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5" style={{width: "calc(var(--col-changeGain-size) * 1px)"}}>
                            <div className="flex gap-1 h-5 items-center justify-start min-w-0">
                              <span className="bg-success h-1.5 rounded-full shrink-0" aria-hidden="true" style={{width: "max(0.375rem, round(down, 24.95% - 0.7485rem, 1px))"}}></span>
                              <span className="font-medium leading-4 shrink-0 tabular-nums text-foreground text-xs whitespace-nowrap" aria-hidden="true">
                                +12%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-margin-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                20.0%
                              </Badge>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) ps-(--frame-panel-header-px) px-2 py-1.5" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-center">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" rowActions="stl_nn0c6" aria-label="Actions for Vancouver Gastown" aria-haspopup="menu" id="base-ui-_r_2p_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="stl_ysje8">
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2r_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-store-size) * 1px)"}}>
                            <div className="flex min-w-0">
                              <span className="flex flex-col min-w-0">
                                <span className="flex gap-1.5 h-5 items-center min-w-0">
                                  <button className="cursor-pointer font-medium hover:text-primary hover:underline leading-5 min-w-0 text-[13px] text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Munich Glockenbach">
                                    Munich Glockenbach
                                  </button>
                                </span>
                                <span className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/de.svg" />
                                      <span className="font-mono text-xs" aria-hidden="true">
                                        DE
                                      </span>
                                      <span className="sr-only">
                                        Germany
                                      </span>
                                    </span>
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Flagship
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-salesRank-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                                <span aria-hidden="true">
                                  5
                                </span>
                                <span className="sr-only">
                                  Ranked 5 of 28 by net sales
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-sales-size) * 1px)"}}>
                            <div className="flex flex-col min-w-0">
                              <span className="flex gap-1.5 h-5 items-baseline justify-between min-w-0">
                                <span className="in-[tfoot]:text-foreground/70 leading-4 min-w-0 tabular-nums text-muted-foreground text-xs truncate whitespace-nowrap">
                                  <span>
                                    98%
                                  </span>
                                  of plan
                                </span>
                                <span className="font-medium leading-5 shrink-0 tabular-nums text-[13px] text-foreground">
                                  $8.72M
                                </span>
                              </span>
                              <span className="flex flex-col h-4 justify-center">
                                <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-warning **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-none gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(2.02%, 100% - 0.375rem), 1px)"}}>
                                  <ProgressTrack complete="">
                                    <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-yoy-size) * 1px)"}}>
                            <div className="flex flex-col items-end min-w-0">
                              <span className="dark:text-blue-400 gap-1 inline-flex items-center leading-5 tabular-nums text-[13px] text-blue-600">
                                <svg className="lucide lucide-trending-up shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                  <path d="M16 7h6v6"></path>
                                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                +7.0%
                              </span>
                              <span className="leading-4 tabular-nums text-muted-foreground text-xs truncate">
                                FY25 $8.15M
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-profitRank-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                                <span aria-hidden="true">
                                  4
                                </span>
                                <span className="sr-only">
                                  Ranked 4 of 28 by operating profit
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-profit-size) * 1px)"}}>
                            <div className="absolute bg-blue-300 dark:bg-blue-700/70 dark:text-white flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-[13px] text-blue-950">
                              $1.66M
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5" style={{width: "calc(var(--col-change-size) * 1px)"}}>
                            <div className="flex h-5 items-center justify-end min-w-0">
                              <span className="sr-only">
                                +16%, +$223K vs FY25
                              </span>
                              <span className="in-[tfoot]:text-foreground/70 leading-4 tabular-nums text-muted-foreground text-xs truncate" aria-hidden="true">
                                +$223K
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5" style={{width: "calc(var(--col-changeGain-size) * 1px)"}}>
                            <div className="flex gap-1 h-5 items-center justify-start min-w-0">
                              <span className="bg-success h-1.5 rounded-full shrink-0" aria-hidden="true" style={{width: "max(0.375rem, round(down, 31.12% - 0.9336rem, 1px))"}}></span>
                              <span className="font-medium leading-4 shrink-0 tabular-nums text-foreground text-xs whitespace-nowrap" aria-hidden="true">
                                +16%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-margin-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                19.0%
                              </Badge>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) ps-(--frame-panel-header-px) px-2 py-1.5" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-center">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" rowActions="stl_ysje8" aria-label="Actions for Munich Glockenbach" aria-haspopup="menu" id="base-ui-_r_31_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="stl_4rzwy">
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_33_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-store-size) * 1px)"}}>
                            <div className="flex min-w-0">
                              <span className="flex flex-col min-w-0">
                                <span className="flex gap-1.5 h-5 items-center min-w-0">
                                  <button className="cursor-pointer font-medium hover:text-primary hover:underline leading-5 min-w-0 text-[13px] text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Seattle Ballard">
                                    Seattle Ballard
                                  </button>
                                </span>
                                <span className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/us.svg" />
                                      <span className="font-mono text-xs" aria-hidden="true">
                                        US
                                      </span>
                                      <span className="sr-only">
                                        United States
                                      </span>
                                    </span>
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Standard
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-salesRank-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                                <span aria-hidden="true">
                                  6
                                </span>
                                <span className="sr-only">
                                  Ranked 6 of 28 by net sales
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-sales-size) * 1px)"}}>
                            <div className="flex flex-col min-w-0">
                              <span className="flex gap-1.5 h-5 items-baseline justify-between min-w-0">
                                <span className="in-[tfoot]:text-foreground/70 leading-4 min-w-0 tabular-nums text-muted-foreground text-xs truncate whitespace-nowrap">
                                  <span>
                                    104%
                                  </span>
                                  of plan
                                </span>
                                <span className="font-medium leading-5 shrink-0 tabular-nums text-[13px] text-foreground">
                                  $4.92M
                                </span>
                              </span>
                              <span className="flex flex-col h-4 justify-center">
                                <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-none gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(0.00%, 100% - 0.375rem), 1px)"}}>
                                  <ProgressTrack complete="">
                                    <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-yoy-size) * 1px)"}}>
                            <div className="flex flex-col items-end min-w-0">
                              <span className="dark:text-blue-400 gap-1 inline-flex items-center leading-5 tabular-nums text-[13px] text-blue-600">
                                <svg className="lucide lucide-trending-up shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                  <path d="M16 7h6v6"></path>
                                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                +6.7%
                              </span>
                              <span className="leading-4 tabular-nums text-muted-foreground text-xs truncate">
                                FY25 $4.61M
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-profitRank-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                                <span aria-hidden="true">
                                  5
                                </span>
                                <span className="sr-only">
                                  Ranked 5 of 28 by operating profit
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-profit-size) * 1px)"}}>
                            <div className="absolute bg-blue-300 dark:bg-blue-700/70 dark:text-white flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-[13px] text-blue-950">
                              $876K
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5" style={{width: "calc(var(--col-change-size) * 1px)"}}>
                            <div className="flex h-5 items-center justify-end min-w-0">
                              <span className="sr-only">
                                +11%, +$87.8K vs FY25
                              </span>
                              <span className="in-[tfoot]:text-foreground/70 leading-4 tabular-nums text-muted-foreground text-xs truncate" aria-hidden="true">
                                +$87.8K
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5" style={{width: "calc(var(--col-changeGain-size) * 1px)"}}>
                            <div className="flex gap-1 h-5 items-center justify-start min-w-0">
                              <span className="bg-success h-1.5 rounded-full shrink-0" aria-hidden="true" style={{width: "max(0.375rem, round(down, 22.27% - 0.6681rem, 1px))"}}></span>
                              <span className="font-medium leading-4 shrink-0 tabular-nums text-foreground text-xs whitespace-nowrap" aria-hidden="true">
                                +11%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-margin-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                17.8%
                              </Badge>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) ps-(--frame-panel-header-px) px-2 py-1.5" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-center">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" rowActions="stl_4rzwy" aria-label="Actions for Seattle Ballard" aria-haspopup="menu" id="base-ui-_r_39_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="stl_0ik8o">
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3b_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-store-size) * 1px)"}}>
                            <div className="flex min-w-0">
                              <span className="flex flex-col min-w-0">
                                <span className="flex gap-1.5 h-5 items-center min-w-0">
                                  <button className="cursor-pointer font-medium hover:text-primary hover:underline leading-5 min-w-0 text-[13px] text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Osaka Umeda">
                                    Osaka Umeda
                                  </button>
                                </span>
                                <span className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/jp.svg" />
                                      <span className="font-mono text-xs" aria-hidden="true">
                                        JP
                                      </span>
                                      <span className="sr-only">
                                        Japan
                                      </span>
                                    </span>
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Standard
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-salesRank-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                                <span aria-hidden="true">
                                  7
                                </span>
                                <span className="sr-only">
                                  Ranked 7 of 28 by net sales
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-sales-size) * 1px)"}}>
                            <div className="flex flex-col min-w-0">
                              <span className="flex gap-1.5 h-5 items-baseline justify-between min-w-0">
                                <span className="in-[tfoot]:text-foreground/70 leading-4 min-w-0 tabular-nums text-muted-foreground text-xs truncate whitespace-nowrap">
                                  <span>
                                    104%
                                  </span>
                                  of plan
                                </span>
                                <span className="font-medium leading-5 shrink-0 tabular-nums text-[13px] text-foreground">
                                  $4.48M
                                </span>
                              </span>
                              <span className="flex flex-col h-4 justify-center">
                                <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-none gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(0.00%, 100% - 0.375rem), 1px)"}}>
                                  <ProgressTrack complete="">
                                    <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-yoy-size) * 1px)"}}>
                            <div className="flex flex-col items-end min-w-0">
                              <span className="dark:text-blue-400 gap-1 inline-flex items-center leading-5 tabular-nums text-[13px] text-blue-600">
                                <svg className="lucide lucide-trending-up shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                  <path d="M16 7h6v6"></path>
                                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                +7.4%
                              </span>
                              <span className="leading-4 tabular-nums text-muted-foreground text-xs truncate">
                                FY25 $4.17M
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-profitRank-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                                <span aria-hidden="true">
                                  8
                                </span>
                                <span className="sr-only">
                                  Ranked 8 of 28 by operating profit
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-profit-size) * 1px)"}}>
                            <div className="absolute bg-blue-200 dark:bg-blue-800/60 dark:text-white flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-[13px] text-blue-950">
                              $704K
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5" style={{width: "calc(var(--col-change-size) * 1px)"}}>
                            <div className="flex h-5 items-center justify-end min-w-0">
                              <span className="sr-only">
                                +13%, +$82.7K vs FY25
                              </span>
                              <span className="in-[tfoot]:text-foreground/70 leading-4 tabular-nums text-muted-foreground text-xs truncate" aria-hidden="true">
                                +$82.7K
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5" style={{width: "calc(var(--col-changeGain-size) * 1px)"}}>
                            <div className="flex gap-1 h-5 items-center justify-start min-w-0">
                              <span className="bg-success h-1.5 rounded-full shrink-0" aria-hidden="true" style={{width: "max(0.375rem, round(down, 26.63% - 0.7989rem, 1px))"}}></span>
                              <span className="font-medium leading-4 shrink-0 tabular-nums text-foreground text-xs whitespace-nowrap" aria-hidden="true">
                                +13%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-margin-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                15.7%
                              </Badge>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) ps-(--frame-panel-header-px) px-2 py-1.5" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-center">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" rowActions="stl_0ik8o" aria-label="Actions for Osaka Umeda" aria-haspopup="menu" id="base-ui-_r_3h_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="stl_881lu">
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3j_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-store-size) * 1px)"}}>
                            <div className="flex min-w-0">
                              <span className="flex flex-col min-w-0">
                                <span className="flex gap-1.5 h-5 items-center min-w-0">
                                  <button className="cursor-pointer font-medium hover:text-primary hover:underline leading-5 min-w-0 text-[13px] text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Paris Marais">
                                    Paris Marais
                                  </button>
                                </span>
                                <span className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/fr.svg" />
                                      <span className="font-mono text-xs" aria-hidden="true">
                                        FR
                                      </span>
                                      <span className="sr-only">
                                        France
                                      </span>
                                    </span>
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Standard
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-salesRank-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                                <span aria-hidden="true">
                                  8
                                </span>
                                <span className="sr-only">
                                  Ranked 8 of 28 by net sales
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-sales-size) * 1px)"}}>
                            <div className="flex flex-col min-w-0">
                              <span className="flex gap-1.5 h-5 items-baseline justify-between min-w-0">
                                <span className="in-[tfoot]:text-foreground/70 leading-4 min-w-0 tabular-nums text-muted-foreground text-xs truncate whitespace-nowrap">
                                  <span>
                                    103%
                                  </span>
                                  of plan
                                </span>
                                <span className="font-medium leading-5 shrink-0 tabular-nums text-[13px] text-foreground">
                                  $4.36M
                                </span>
                              </span>
                              <span className="flex flex-col h-4 justify-center">
                                <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-none gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(0.00%, 100% - 0.375rem), 1px)"}}>
                                  <ProgressTrack complete="">
                                    <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-yoy-size) * 1px)"}}>
                            <div className="flex flex-col items-end min-w-0">
                              <span className="dark:text-blue-400 gap-1 inline-flex items-center leading-5 tabular-nums text-[13px] text-blue-600">
                                <svg className="lucide lucide-trending-up shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                  <path d="M16 7h6v6"></path>
                                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                +5.8%
                              </span>
                              <span className="leading-4 tabular-nums text-muted-foreground text-xs truncate">
                                FY25 $4.12M
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-profitRank-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                                <span aria-hidden="true">
                                  13
                                </span>
                                <span className="sr-only">
                                  Ranked 13 of 28 by operating profit
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-profit-size) * 1px)"}}>
                            <div className="absolute bg-blue-100 dark:bg-blue-900/60 dark:text-blue-50 flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-[13px] text-blue-950">
                              $385K
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5" style={{width: "calc(var(--col-change-size) * 1px)"}}>
                            <div className="flex gap-1 h-5 items-center justify-end min-w-0">
                              <span className="font-medium leading-4 shrink-0 tabular-nums text-warning-foreground text-xs whitespace-nowrap">
                                -13%
                                <span className="sr-only">
                                  , -$56.3K vs FY25
                                </span>
                              </span>
                              <span className="bg-warning h-1.5 rounded-full shrink-0" aria-hidden="true" style={{width: "max(0.375rem, round(down, 25.54% - 0.7662rem, 1px))"}}></span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5" style={{width: "calc(var(--col-changeGain-size) * 1px)"}}>
                            <div className="flex h-5 items-center justify-start min-w-0">
                              <span className="in-[tfoot]:text-foreground/70 leading-4 tabular-nums text-muted-foreground text-xs truncate" aria-hidden="true">
                                -$56.3K
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-margin-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                8.8%
                              </Badge>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) ps-(--frame-panel-header-px) px-2 py-1.5" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-center">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" rowActions="stl_881lu" aria-label="Actions for Paris Marais" aria-haspopup="menu" id="base-ui-_r_3p_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="stl_e7i4k">
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3r_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-store-size) * 1px)"}}>
                            <div className="flex min-w-0">
                              <span className="flex flex-col min-w-0">
                                <span className="flex gap-1.5 h-5 items-center min-w-0">
                                  <button className="cursor-pointer font-medium hover:text-primary hover:underline leading-5 min-w-0 text-[13px] text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Austin Eastside">
                                    Austin Eastside
                                  </button>
                                </span>
                                <span className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/us.svg" />
                                      <span className="font-mono text-xs" aria-hidden="true">
                                        US
                                      </span>
                                      <span className="sr-only">
                                        United States
                                      </span>
                                    </span>
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Standard
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-salesRank-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                                <span aria-hidden="true">
                                  9
                                </span>
                                <span className="sr-only">
                                  Ranked 9 of 28 by net sales
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-sales-size) * 1px)"}}>
                            <div className="flex flex-col min-w-0">
                              <span className="flex gap-1.5 h-5 items-baseline justify-between min-w-0">
                                <span className="in-[tfoot]:text-foreground/70 leading-4 min-w-0 tabular-nums text-muted-foreground text-xs truncate whitespace-nowrap">
                                  <span>
                                    109%
                                  </span>
                                  of plan
                                </span>
                                <span className="font-medium leading-5 shrink-0 tabular-nums text-[13px] text-foreground">
                                  $4.05M
                                </span>
                              </span>
                              <span className="flex flex-col h-4 justify-center">
                                <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-none gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(0.00%, 100% - 0.375rem), 1px)"}}>
                                  <ProgressTrack complete="">
                                    <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-yoy-size) * 1px)"}}>
                            <div className="flex flex-col items-end min-w-0">
                              <span className="dark:text-blue-400 gap-1 inline-flex items-center leading-5 tabular-nums text-[13px] text-blue-600">
                                <svg className="lucide lucide-trending-up shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                  <path d="M16 7h6v6"></path>
                                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                +15.1%
                              </span>
                              <span className="leading-4 tabular-nums text-muted-foreground text-xs truncate">
                                FY25 $3.52M
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-profitRank-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                                <span aria-hidden="true">
                                  7
                                </span>
                                <span className="sr-only">
                                  Ranked 7 of 28 by operating profit
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-profit-size) * 1px)"}}>
                            <div className="absolute bg-blue-200 dark:bg-blue-800/60 dark:text-white flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-[13px] text-blue-950">
                              $709K
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5" style={{width: "calc(var(--col-change-size) * 1px)"}}>
                            <div className="flex h-5 items-center justify-end min-w-0">
                              <span className="sr-only">
                                +35%, +$185K vs FY25
                              </span>
                              <span className="in-[tfoot]:text-foreground/70 leading-4 tabular-nums text-muted-foreground text-xs truncate" aria-hidden="true">
                                +$185K
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5" style={{width: "calc(var(--col-changeGain-size) * 1px)"}}>
                            <div className="flex gap-1 h-5 items-center justify-start min-w-0">
                              <span className="bg-success h-1.5 rounded-full shrink-0" aria-hidden="true" style={{width: "max(0.375rem, round(down, 70.44% - 2.1132rem, 1px))"}}></span>
                              <span className="font-medium leading-4 shrink-0 tabular-nums text-foreground text-xs whitespace-nowrap" aria-hidden="true">
                                +35%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-margin-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                17.5%
                              </Badge>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) ps-(--frame-panel-header-px) px-2 py-1.5" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-center">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" rowActions="stl_e7i4k" aria-label="Actions for Austin Eastside" aria-haspopup="menu" id="base-ui-_r_41_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[row-status=deleted]:[&_td]:line-through data-[row-status=deleted]:bg-destructive/5 data-[row-status=deleted]:opacity-60 data-[row-status=dirty]:bg-amber-500/5 data-[row-status=new]:bg-green-500/5 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="stl_kna2t">
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_43_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-store-size) * 1px)"}}>
                            <div className="flex min-w-0">
                              <span className="flex flex-col min-w-0">
                                <span className="flex gap-1.5 h-5 items-center min-w-0">
                                  <button className="cursor-pointer font-medium hover:text-primary hover:underline leading-5 min-w-0 text-[13px] text-foreground text-left transition-colors truncate underline-offset-2" type="button" aria-label="Open Manchester Ancoats">
                                    Manchester Ancoats
                                  </button>
                                </span>
                                <span className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/gb.svg" />
                                      <span className="font-mono text-xs" aria-hidden="true">
                                        GB
                                      </span>
                                      <span className="sr-only">
                                        United Kingdom
                                      </span>
                                    </span>
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    Standard
                                  </span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-salesRank-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                                <span aria-hidden="true">
                                  10
                                </span>
                                <span className="sr-only">
                                  Ranked 10 of 28 by net sales
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-sales-size) * 1px)"}}>
                            <div className="flex flex-col min-w-0">
                              <span className="flex gap-1.5 h-5 items-baseline justify-between min-w-0">
                                <span className="in-[tfoot]:text-foreground/70 leading-4 min-w-0 tabular-nums text-muted-foreground text-xs truncate whitespace-nowrap">
                                  <span>
                                    104%
                                  </span>
                                  of plan
                                </span>
                                <span className="font-medium leading-5 shrink-0 tabular-nums text-[13px] text-foreground">
                                  $3.94M
                                </span>
                              </span>
                              <span className="flex flex-col h-4 justify-center">
                                <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-none gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(0.00%, 100% - 0.375rem), 1px)"}}>
                                  <ProgressTrack complete="">
                                    <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-yoy-size) * 1px)"}}>
                            <div className="flex flex-col items-end min-w-0">
                              <span className="dark:text-blue-400 gap-1 inline-flex items-center leading-5 tabular-nums text-[13px] text-blue-600">
                                <svg className="lucide lucide-trending-up shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                  <path d="M16 7h6v6"></path>
                                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                +7.7%
                              </span>
                              <span className="leading-4 tabular-nums text-muted-foreground text-xs truncate">
                                FY25 $3.66M
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-profitRank-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                                <span aria-hidden="true">
                                  9
                                </span>
                                <span className="sr-only">
                                  Ranked 9 of 28 by operating profit
                                </span>
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle border-e p-0 relative truncate" style={{width: "calc(var(--col-profit-size) * 1px)"}}>
                            <div className="absolute bg-blue-200 dark:bg-blue-800/60 dark:text-white flex font-medium inset-0 items-center justify-end px-(--grid-cell-px) tabular-nums text-[13px] text-blue-950">
                              $631K
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5" style={{width: "calc(var(--col-change-size) * 1px)"}}>
                            <div className="flex h-5 items-center justify-end min-w-0">
                              <span className="sr-only">
                                +17%, +$89.4K vs FY25
                              </span>
                              <span className="in-[tfoot]:text-foreground/70 leading-4 tabular-nums text-muted-foreground text-xs truncate" aria-hidden="true">
                                +$89.4K
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5" style={{width: "calc(var(--col-changeGain-size) * 1px)"}}>
                            <div className="flex gap-1 h-5 items-center justify-start min-w-0">
                              <span className="bg-success h-1.5 rounded-full shrink-0" aria-hidden="true" style={{width: "max(0.375rem, round(down, 33% - 0.99rem, 1px))"}}></span>
                              <span className="font-medium leading-4 shrink-0 tabular-nums text-foreground text-xs whitespace-nowrap" aria-hidden="true">
                                +17%
                              </span>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 truncate" style={{width: "calc(var(--col-margin-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                16.0%
                              </Badge>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) ps-(--frame-panel-header-px) px-2 py-1.5" data-pinned="end" data-last-col="end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-center">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" rowActions="stl_kna2t" aria-label="Actions for Manchester Ancoats" aria-haspopup="menu" id="base-ui-_r_49_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                      </DataGridTableBody>
                      <DataGridTableFoot className="[&_[data-slot=badge]]:[text-shadow:none] [--totals-hatch:color-mix(in_oklab,var(--border)_40%,transparent)] [background-image:repeating-linear-gradient(-45deg,var(--totals-hatch)_0_1px,transparent_1px_4px)] [text-shadow:1px_0_var(--frame-panel-bg),-1px_0_var(--frame-panel-bg),0_1px_var(--frame-panel-bg),0_-1px_var(--frame-panel-bg),1px_1px_var(--frame-panel-bg),-1px_-1px_var(--frame-panel-bg),1px_-1px_var(--frame-panel-bg),-1px_1px_var(--frame-panel-bg)] dark:[--totals-hatch:color-mix(in_oklab,var(--border)_28%,transparent)]">
                        <DataGridTableFootRow>
                          <td className="align-middle border-e font-medium px-2 py-1.5 text-secondary-foreground/80"></td>
                          <td className="align-middle border-e font-medium px-2 py-1.5 text-secondary-foreground/80">
                            <span className="flex gap-1.5 items-baseline min-w-0">
                              <span className="font-semibold text-[13px] text-foreground">
                                Total
                              </span>
                              <span className="tabular-nums text-foreground/70 text-xs truncate">
                                28 stores
                              </span>
                            </span>
                          </td>
                          <td className="align-middle border-e font-medium px-2 py-1.5 text-secondary-foreground/80"></td>
                          <td className="align-middle border-e font-medium px-2 py-1.5 text-secondary-foreground/80">
                            <div className="-my-px flex flex-col gap-0.75 min-w-0">
                              <span className="flex gap-1.5 h-3.5 items-baseline justify-between min-w-0">
                                <span className="in-[tfoot]:text-foreground/70 leading-4 min-w-0 tabular-nums text-muted-foreground text-xs truncate whitespace-nowrap">
                                  <span>
                                    101%
                                  </span>
                                  of plan
                                </span>
                                <span className="font-semibold leading-3.5 shrink-0 tabular-nums text-[13px] text-foreground">
                                  $122M
                                </span>
                              </span>
                              <Progress className="**:data-[slot=progress-indicator]:-translate-x-(--mini-bar-drain) **:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:motion-reduce:transition-none **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:transition-[translate] **:data-[slot=progress-track]:bg-muted-foreground/15 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full flex-none gap-0 min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-hidden="true" style={{"--mini-bar-drain": "round(min(0.00%, 100% - 0.375rem), 1px)"}}>
                                <ProgressTrack complete="">
                                  <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                </ProgressTrack>
                                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                  x
                                </span>
                              </Progress>
                            </div>
                          </td>
                          <td className="align-middle border-e font-medium px-2 py-1.5 text-end text-secondary-foreground/80">
                            <span className="flex items-center justify-end">
                              <span className="dark:text-blue-400 font-semibold gap-1 inline-flex items-center leading-4 tabular-nums text-[13px] text-blue-600">
                                <svg className="lucide lucide-trending-up shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                  <path d="M16 7h6v6"></path>
                                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                +4.2%
                              </span>
                            </span>
                          </td>
                          <td className="align-middle border-e font-medium px-2 py-1.5 text-secondary-foreground/80"></td>
                          <td className="align-middle border-e font-medium px-2 py-1.5 text-end text-secondary-foreground/80">
                            <span className="font-semibold tabular-nums text-[13px] text-foreground">
                              $15.6M
                            </span>
                          </td>
                          <td className="align-middle border-e font-medium px-2 py-1.5 text-end text-secondary-foreground/80">
                            <div className="flex gap-1 h-5 items-center justify-end min-w-0">
                              <span className="font-semibold leading-4 shrink-0 tabular-nums text-warning-foreground text-xs whitespace-nowrap">
                                -7%
                                <span className="sr-only">
                                  , -$1.12M vs FY25
                                </span>
                              </span>
                              <span className="bg-warning h-1.5 rounded-full shrink-0" aria-hidden="true" style={{width: "max(0.375rem, round(down, 13.45% - 0.4035rem, 1px))"}}></span>
                            </div>
                          </td>
                          <td className="align-middle border-e font-medium px-2 py-1.5 text-secondary-foreground/80">
                            <div className="flex h-5 items-center justify-start min-w-0">
                              <span className="font-semibold in-[tfoot]:text-foreground/70 leading-4 tabular-nums text-muted-foreground text-xs truncate" aria-hidden="true">
                                -$1.12M
                              </span>
                            </div>
                          </td>
                          <td className="[&_[data-slot=badge]]:font-semibold align-middle border-e font-medium px-2 py-1.5 text-end text-foreground">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                              12.8%
                            </Badge>
                          </td>
                          <td className="align-middle border-e font-medium px-2 py-1.5 text-secondary-foreground/80"></td>
                          <td className="p-0" aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></td>
                        </DataGridTableFootRow>
                      </DataGridTableFoot>
                    </DataGridTable>
                  </DataGridTableViewport>
                </div>
              </div>
            </DataGridScrollArea>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
            <DataGridPagination>
              <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                <div className="text-muted-foreground text-sm">
                  Rows per page
                </div>
                <Select>
                <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_4b_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                  <SelectValue>
                    10
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    ▼
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_4b_-hidden-input" tabIndex="-1" aria-hidden="true" value="10" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                  1 - 10 of 28 stores
                </div>
                <div className="flex flex-wrap gap-1 items-center justify-center order-1 sm:flex-nowrap">
                  <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" disabled="" tabIndex="0" disabled>
                    <span className="sr-only">
                      Go to previous page
                    </span>
                    <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </Button>
                  <Button className="bg-accent px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-accent-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 1" aria-current="page">
                    1
                  </Button>
                  <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 2">
                    2
                  </Button>
                  <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 3">
                    3
                  </Button>
                  <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" tabIndex="0">
                    <span className="sr-only">
                      Go to next page
                    </span>
                    <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </Button>
                </div>
              </div>
            </DataGridPagination>
          </footer>
        </FramePanel>
      </Frame>
    </main>
  )
}
