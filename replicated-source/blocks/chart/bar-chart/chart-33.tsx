import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
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
      <Frame className="max-w-3xl min-w-0 w-full" spacing="default">
        <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex gap-3 items-center min-w-0">
            <IconTile variant="outline" size="default" role="img" aria-label="Google Cloud Scheduler">
              <svg preserveAspectRatio="xMidYMid" viewBox="0 -25 256 256">
                <path fill="#EA4335" d="m170.252 56.819 22.253-22.253 1.483-9.37C153.437-11.677 88.976-7.496 52.42 33.92 42.267 45.423 34.734 59.764 30.717 74.573l7.97-1.123 44.505-7.34 3.436-3.513c19.797-21.742 53.27-24.667 76.128-6.168l7.496.39Z"></path>
                <path fill="#4285F4" d="M224.205 73.918a100.249 100.249 0 0 0-30.217-48.722l-31.232 31.232a55.515 55.515 0 0 1 20.379 44.037v5.544c15.35 0 27.797 12.445 27.797 27.796 0 15.352-12.446 27.485-27.797 27.485h-55.671l-5.466 5.934v33.34l5.466 5.231h55.67c39.93.311 72.553-31.494 72.864-71.424a72.303 72.303 0 0 0-31.793-60.453"></path>
                <path fill="#34A853" d="M71.87 205.796h55.593V161.29H71.87a27.275 27.275 0 0 1-11.399-2.498l-7.887 2.42-22.409 22.253-1.952 7.574c12.567 9.489 27.9 14.825 43.647 14.757"></path>
                <path fill="#FBBC05" d="M71.87 61.425C31.94 61.664-.237 94.228.001 134.159a72.301 72.301 0 0 0 28.222 56.88l32.248-32.246c-13.99-6.322-20.208-22.786-13.887-36.776 6.32-13.99 22.786-20.208 36.775-13.888a27.796 27.796 0 0 1 13.887 13.888l32.248-32.248A72.224 72.224 0 0 0 71.87 61.425"></path>
              </svg>
            </IconTile>
            <div className="flex flex-col gap-px min-w-0">
              <div className="flex gap-2 h-5 items-center min-w-0">
                <div className="[text-box:trim-both_cap_alphabetic] font-semibold overflow-x-clip text-ellipsis text-sm whitespace-nowrap">
                  {"Run Durations"}
                </div>
              </div>
              <div className="text-muted-foreground text-sm">
                <span className="flex flex-wrap gap-x-1.5 items-center max-sm:flex-col max-sm:items-start min-w-0">
                  <span className="flex h-5 items-center min-w-0">
                    <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                      {"Refresh fraud model features"}
                    </span>
                  </span>
                  <span className="bg-muted-foreground/40 max-sm:hidden rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="flex h-5 items-center">
                    <span className="[text-box:trim-both_cap_alphabetic]">
                      {"Hourly at :00 UTC"}
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Runs shown" style={{"--gap": "0"}}>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none tabular-nums whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="sm" spacing="0" aria-label="Last 20 runs" extracted="1">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"20"}
                </span>
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none tabular-nums whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="0" aria-label="Last 50 runs">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"50"}
                </span>
              </ToggleGroupItem>
            </ToggleGroup>
            <ButtonGroup role="group" aria-label="View">
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filter by status" aria-haspopup="menu" id="base-ui-_r_6_" baseUiTooltipTrigger="" aria-expanded="false">
                <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Display options" aria-haspopup="menu" id="base-ui-_r_d_" baseUiTooltipTrigger="" aria-expanded="false">
                <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                  <path d="M14 17H5"></path>
                  <path d="M19 7h-9"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
              </TooltipTrigger>
              </Tooltip>
            </ButtonGroup>
            <ButtonGroup role="group" aria-label="Job actions">
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Refresh" aria-haspopup="menu" id="base-ui-_r_k_" baseUiTooltipTrigger="" aria-expanded="false">
                <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Run now" aria-busy="false" id="base-ui-_r_o_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-play" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlayIcon" tabler="IconPlayerPlay" hugeicons="PlayIcon" phosphor="PlayIcon" remixicon="RiPlayLine" aria-hidden="true">
                  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions" aria-haspopup="menu" id="base-ui-_r_t_" baseUiTooltipTrigger="" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </TooltipTrigger>
              </Tooltip>
            </ButtonGroup>
          </div>
        </header>
        <FramePanel className="@container/slo">
          <dl className="@xl/slo:divide-x @xl/slo:gap-0 @xl/slo:grid-cols-4 gap-x-6 gap-y-5 grid grid-cols-2">
            <div className="@xl/slo:first:ps-0 @xl/slo:last:pe-0 @xl/slo:px-5 flex flex-col gap-2 min-w-0">
              <dt className="flex h-4 items-center text-muted-foreground text-xs">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Success Rate"}
                </span>
              </dt>
              <dd className="flex flex-col gap-2 min-w-0">
                <span className="flex h-6 items-center">
                  <span className="[text-box:trim-both_cap_alphabetic] font-semibold tabular-nums text-base text-foreground whitespace-nowrap">
                    {"95.0%"}
                  </span>
                </span>
                <span className="flex gap-3 h-5 items-center min-w-0">
                  <span className="[&_svg]:size-3.5 flex font-medium gap-1 items-center shrink-0 tabular-nums text-success text-xs">
                    <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    <span className="[text-box:trim-both_cap_alphabetic]">
                      {"+5.5 pts"}
                    </span>
                    <span className="sr-only">
                      {", better than the previous 20 runs"}
                    </span>
                  </span>
                  <svg className="flex-1 h-5 min-w-0 overflow-visible text-muted-foreground" aria-hidden="true" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <polyline points="0.00,2.00 2.56,2.00 5.13,2.00 7.69,2.00 10.26,2.00 12.82,10.00 15.38,10.00 17.95,10.00 20.51,10.00 23.08,10.00 25.64,10.00 28.21,18.00 30.77,18.00 33.33,18.00 35.90,18.00 38.46,10.00 41.03,10.00 43.59,10.00 46.15,10.00 48.72,10.00 51.28,10.00" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" strokeLinejoin="round" vector-effect="non-scaling-stroke"></polyline>
                    <polyline points="51.28,10.00 53.85,2.00 56.41,2.00 58.97,2.00 61.54,2.00 64.10,2.00 66.67,2.00 69.23,2.00 71.79,2.00 74.36,2.00 76.92,2.00 79.49,2.00 82.05,2.00 84.62,2.00 87.18,10.00 89.74,10.00 92.31,10.00 94.87,10.00 97.44,10.00 100.00,10.00" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" vector-effect="non-scaling-stroke"></polyline>
                  </svg>
                </span>
              </dd>
            </div>
            <div className="@xl/slo:first:ps-0 @xl/slo:last:pe-0 @xl/slo:px-5 flex flex-col gap-2 min-w-0">
              <dt className="flex h-4 items-center text-muted-foreground text-xs">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"p50 Duration"}
                </span>
              </dt>
              <dd className="flex flex-col gap-2 min-w-0">
                <span className="flex h-6 items-center">
                  <span className="[text-box:trim-both_cap_alphabetic] font-semibold tabular-nums text-base text-foreground whitespace-nowrap">
                    {"8m 17s"}
                  </span>
                </span>
                <span className="flex gap-3 h-5 items-center min-w-0">
                  <span className="[&_svg]:size-3.5 flex font-medium gap-1 items-center shrink-0 tabular-nums text-destructive text-xs">
                    <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    <span className="[text-box:trim-both_cap_alphabetic]">
                      {"+36s"}
                    </span>
                    <span className="sr-only">
                      {", worse than the previous 20 runs"}
                    </span>
                  </span>
                  <svg className="flex-1 h-5 min-w-0 overflow-visible text-muted-foreground" aria-hidden="true" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <polyline points="0.00,16.22 2.56,16.22 5.13,16.22 7.69,15.14 10.26,16.22 12.82,17.11 15.38,17.11 17.95,15.33 20.51,17.11 23.08,17.11 25.64,15.23 28.21,16.42 30.77,18.00 33.33,18.00 35.90,15.63 38.46,14.15 41.03,14.15 43.59,15.73 46.15,14.15 48.72,13.85 51.28,14.74" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" strokeLinejoin="round" vector-effect="non-scaling-stroke"></polyline>
                    <polyline points="51.28,14.74 53.85,13.85 56.41,13.85 58.97,13.85 61.54,14.44 64.10,14.05 66.67,14.05 69.23,12.77 71.79,12.17 74.36,10.30 76.92,9.70 79.49,9.70 82.05,8.91 84.62,7.53 87.18,4.47 89.74,2.00 92.31,2.00 94.87,2.00 97.44,2.00 100.00,2.00" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" vector-effect="non-scaling-stroke"></polyline>
                  </svg>
                </span>
              </dd>
            </div>
            <div className="@xl/slo:first:ps-0 @xl/slo:last:pe-0 @xl/slo:px-5 flex flex-col gap-2 min-w-0">
              <dt className="flex h-4 items-center text-muted-foreground text-xs">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"p95 Duration"}
                </span>
              </dt>
              <dd className="flex flex-col gap-2 min-w-0">
                <span className="flex h-6 items-center">
                  <span className="[text-box:trim-both_cap_alphabetic] font-semibold tabular-nums text-base text-foreground whitespace-nowrap">
                    {"11m 33s"}
                  </span>
                </span>
                <span className="flex gap-3 h-5 items-center min-w-0">
                  <span className="[&_svg]:size-3.5 flex font-medium gap-1 items-center shrink-0 tabular-nums text-destructive text-xs">
                    <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    <span className="[text-box:trim-both_cap_alphabetic]">
                      {"+3m 31s"}
                    </span>
                    <span className="sr-only">
                      {", worse than the previous 20 runs"}
                    </span>
                  </span>
                  <svg className="flex-1 h-5 min-w-0 overflow-visible text-muted-foreground" aria-hidden="true" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <polyline points="0.00,12.18 2.56,12.18 5.13,12.18 7.69,12.18 10.26,12.36 12.82,12.36 15.38,12.36 17.95,12.36 20.51,17.79 23.08,17.79 25.64,17.66 28.21,17.66 30.77,17.98 33.33,17.82 35.90,17.82 38.46,17.82 41.03,17.82 43.59,17.82 46.15,17.82 48.72,17.82 51.28,18.00" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" strokeLinejoin="round" vector-effect="non-scaling-stroke"></polyline>
                    <polyline points="51.28,18.00 53.85,17.39 56.41,17.39 58.97,17.33 61.54,17.33 64.10,17.33 66.67,17.33 69.23,17.33 71.79,17.15 74.36,17.01 76.92,16.29 79.49,11.43 82.05,11.43 84.62,11.01 87.18,2.00 89.74,2.00 92.31,2.00 94.87,2.00 97.44,2.00 100.00,2.00" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" vector-effect="non-scaling-stroke"></polyline>
                  </svg>
                </span>
              </dd>
            </div>
            <div className="@xl/slo:first:ps-0 @xl/slo:last:pe-0 @xl/slo:px-5 flex flex-col gap-2 min-w-0">
              <dt className="flex h-4 items-center text-muted-foreground text-xs">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Timeout Budget"}
                </span>
              </dt>
              <dd className="flex flex-col gap-2 min-w-0">
                <span className="flex h-6 items-center">
                  <span className="[text-box:trim-both_cap_alphabetic] font-semibold tabular-nums text-base text-foreground whitespace-nowrap">
                    {"77.0%"}
                  </span>
                </span>
                <span className="flex gap-3 h-5 items-center min-w-0">
                  <span className="[&_svg]:size-3.5 flex font-medium gap-1 items-center shrink-0 tabular-nums text-destructive text-xs">
                    <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    <span className="[text-box:trim-both_cap_alphabetic]">
                      {"+23.5 pts"}
                    </span>
                    <span className="sr-only">
                      {", worse than the previous 20 runs"}
                    </span>
                  </span>
                  <svg className="flex-1 h-5 min-w-0 overflow-visible text-muted-foreground" aria-hidden="true" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <polyline points="0.00,12.18 2.56,12.18 5.13,12.18 7.69,12.18 10.26,12.36 12.82,12.36 15.38,12.36 17.95,12.36 20.51,17.79 23.08,17.79 25.64,17.66 28.21,17.66 30.77,17.98 33.33,17.82 35.90,17.82 38.46,17.82 41.03,17.82 43.59,17.82 46.15,17.82 48.72,17.82 51.28,18.00" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" strokeLinejoin="round" vector-effect="non-scaling-stroke"></polyline>
                    <polyline points="51.28,18.00 53.85,17.39 56.41,17.39 58.97,17.33 61.54,17.33 64.10,17.33 66.67,17.33 69.23,17.33 71.79,17.15 74.36,17.01 76.92,16.29 79.49,11.43 82.05,11.43 84.62,11.01 87.18,2.00 89.74,2.00 92.31,2.00 94.87,2.00 97.44,2.00 100.00,2.00" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" vector-effect="non-scaling-stroke"></polyline>
                  </svg>
                </span>
              </dd>
            </div>
          </dl>
        </FramePanel>
        <FramePanel className="flex flex-col gap-4 min-w-0 mt-3!">
          <div className="flex flex-wrap gap-x-4 gap-y-2 items-center justify-between text-xs" aria-live="polite">
            <span className="flex gap-2 h-5 items-center min-w-0">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Succeeded"}
                </span>
              </Badge>
              <span className="[text-box:trim-both_cap_alphabetic] font-medium font-mono text-foreground">
                {"RUN-58418"}
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span className="[text-box:trim-both_cap_alphabetic] tabular-nums text-muted-foreground">
                {"Oct 13, 09:00 UTC"}
              </span>
            </span>
            <span className="flex gap-3 h-5 items-center">
              <span className="flex gap-1.5 items-center">
                <svg className="shrink-0 size-3" aria-hidden="true" viewBox="0 0 12 12">
                  <defs>
                    <pattern id="r10-queue-succeeded" width="6" height="6" patternUnits="userSpaceOnUse">
                      <rect width="6" height="6" fill="color-mix(in oklab, var(--info) 18%, var(--card))"></rect>
                      <g fill="var(--info)" fillOpacity="0.72">
                        <circle cx="1.5" cy="1.5" r="0.8"></circle>
                        <circle cx="4.5" cy="4.5" r="0.8"></circle>
                      </g>
                    </pattern>
                  </defs>
                  <rect width="12" height="12" rx="2.5" fill="url(#r10-queue-succeeded)"></rect>
                </svg>
                <span className="sr-only">
                  {"Queue wait"}
                </span>
                <span className="[text-box:trim-both_cap_alphabetic] tabular-nums text-muted-foreground">
                  {"40s"}
                </span>
              </span>
              <span className="flex gap-1.5 items-center">
                <svg className="shrink-0 size-3" aria-hidden="true" viewBox="0 0 12 12">
                  <defs>
                    <pattern id="r11-execute-succeeded" width="6" height="6" patternUnits="userSpaceOnUse">
                      <rect width="6" height="6" fill="color-mix(in oklab, var(--info) 18%, var(--card))"></rect>
                      <path d="M-1 1 1-1M0 6 6 0M5 7 7 5" fill="none" stroke="var(--info)" strokeOpacity="0.62" strokeWidth="1"></path>
                    </pattern>
                  </defs>
                  <rect width="12" height="12" rx="2.5" fill="url(#r11-execute-succeeded)"></rect>
                </svg>
                <span className="sr-only">
                  {"Execute"}
                </span>
                <span className="[text-box:trim-both_cap_alphabetic] tabular-nums text-muted-foreground">
                  {"6m 40s"}
                </span>
              </span>
              <span className="flex gap-1.5 items-center">
                <svg className="shrink-0 size-3" aria-hidden="true" viewBox="0 0 12 12">
                  <defs>
                    <pattern id="r12-teardown-succeeded" width="6" height="6" patternUnits="userSpaceOnUse">
                      <rect width="6" height="6" fill="color-mix(in oklab, var(--info) 18%, var(--card))"></rect>
                      <path d="M0 1.5H6M0 4.5H6" fill="none" stroke="var(--info)" strokeOpacity="0.62" strokeWidth="1"></path>
                    </pattern>
                  </defs>
                  <rect width="12" height="12" rx="2.5" fill="url(#r12-teardown-succeeded)"></rect>
                </svg>
                <span className="sr-only">
                  {"Teardown"}
                </span>
                <span className="[text-box:trim-both_cap_alphabetic] tabular-nums text-muted-foreground">
                  {"41s"}
                </span>
              </span>
              <span className="[text-box:trim-both_cap_alphabetic] font-semibold tabular-nums text-foreground text-sm">
                {"8m 01s"}
              </span>
            </span>
          </div>
          <div className="[&_.recharts-area,&_.recharts-line]:duration-200 [&_.recharts-area,&_.recharts-line]:transition-[opacity,visibility] [&_.recharts-reference-line]:duration-200 [&_.recharts-reference-line]:transition-[opacity,visibility] [&_.recharts-surface]:cursor-pointer [&_[data-status]]:duration-200 [&_[data-status]]:transition-opacity [&_g]:outline-hidden [-webkit-tap-highlight-color:transparent] data-[band=off]:[&_.recharts-area,&_.recharts-line]:invisible data-[band=off]:[&_.recharts-area,&_.recharts-line]:opacity-0 data-[show-failed=off]:[&_[data-status=failed]]:opacity-15 data-[show-running=off]:[&_[data-status=running]]:opacity-15 data-[show-skipped=off]:[&_[data-status=skipped]]:opacity-15 data-[show-succeeded=off]:[&_[data-status=succeeded]]:opacity-15 data-[show-timed-out=off]:[&_[data-status=timedOut]]:opacity-15 data-[timeout=off]:[&_.recharts-reference-line]:invisible data-[timeout=off]:[&_.recharts-reference-line]:opacity-0 group/plot has-[.recharts-surface:focus-visible]:outline-2 motion-reduce:[&_*]:transition-none outline-offset-4 outline-ring/50 w-full" data-band="on" data-outliers="on" data-deploys="on" data-timeout="on" data-show-succeeded="on" data-show-failed="on" data-show-timed-out="on" data-show-skipped="on" data-show-running="on">
            <ChartContainer>
            <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-52 justify-center sm:h-60 text-xs w-full" data-chart="chart-_r_15_">
              <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_15_] {\n  --color-total: var(--primary);\n  --color-band: var(--muted-foreground);\n}\n\n\n.dark [data-chart=chart-_r_15_] {\n  --color-total: var(--primary);\n  --color-band: var(--muted-foreground);\n}\n" }} />
              <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                  <div className="recharts-wrapper" width="726" height="240" style={{position: "relative", cursor: "default", width: "726px", height: "240px"}}>
                    <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                    <svg className="recharts-surface" aria-label="Run durations for Refresh fraud model features" role="application" tabIndex="0" width="726" height="240" viewBox="0 0 726 240" style={{width: "100%", height: "100%", display: "block"}}>
                      <title></title>
                      <desc>
                        {"Each run stacks its queue, execute and teardown time in its outcome tone; arrow keys move through runs and Enter opens one."}
                      </desc>
                      <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                        <g className="recharts-cartesian-grid">
                          <g className="recharts-cartesian-grid-horizontal">
                            <line stroke="#ccc" fill="none" x="32" y="4" width="690" height="206" x1="32" y1="210" x2="722" y2="210"></line>
                            <line stroke="#ccc" fill="none" x="32" y="4" width="690" height="206" x1="32" y1="147.5757575757576" x2="722" y2="147.5757575757576"></line>
                            <line stroke="#ccc" fill="none" x="32" y="4" width="690" height="206" x1="32" y1="85.15151515151517" x2="722" y2="85.15151515151517"></line>
                            <line stroke="#ccc" fill="none" x="32" y="4" width="690" height="206" x1="32" y1="22.72727272727276" x2="722" y2="22.72727272727276"></line>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                      <defs>
                        <clippath id="recharts1-clip">
                          <rect x="32" y="4" height="206" width="690"></rect>
                        </clippath>
                      </defs>
                      <defs>
                        <pattern id="r13-queue-succeeded" width="6" height="6" patternUnits="userSpaceOnUse">
                          <rect width="6" height="6" fill="color-mix(in oklab, var(--info) 18%, var(--card))"></rect>
                          <g fill="var(--info)" fillOpacity="0.72">
                            <circle cx="1.5" cy="1.5" r="0.8"></circle>
                            <circle cx="4.5" cy="4.5" r="0.8"></circle>
                          </g>
                        </pattern>
                        <pattern id="r13-queue-failed" width="6" height="6" patternUnits="userSpaceOnUse">
                          <rect width="6" height="6" fill="color-mix(in oklab, var(--destructive) 18%, var(--card))"></rect>
                          <g fill="var(--destructive)" fillOpacity="0.72">
                            <circle cx="1.5" cy="1.5" r="0.8"></circle>
                            <circle cx="4.5" cy="4.5" r="0.8"></circle>
                          </g>
                        </pattern>
                        <pattern id="r13-queue-timedOut" width="6" height="6" patternUnits="userSpaceOnUse">
                          <rect width="6" height="6" fill="color-mix(in oklab, var(--warning) 18%, var(--card))"></rect>
                          <g fill="var(--warning)" fillOpacity="0.72">
                            <circle cx="1.5" cy="1.5" r="0.8"></circle>
                            <circle cx="4.5" cy="4.5" r="0.8"></circle>
                          </g>
                        </pattern>
                        <pattern id="r13-queue-skipped" width="6" height="6" patternUnits="userSpaceOnUse">
                          <rect width="6" height="6" fill="color-mix(in oklab, var(--muted-foreground) 18%, var(--card))"></rect>
                          <g fill="var(--muted-foreground)" fillOpacity="0.72">
                            <circle cx="1.5" cy="1.5" r="0.8"></circle>
                            <circle cx="4.5" cy="4.5" r="0.8"></circle>
                          </g>
                        </pattern>
                        <pattern id="r13-queue-running" width="6" height="6" patternUnits="userSpaceOnUse">
                          <rect width="6" height="6" fill="color-mix(in oklab, var(--primary) 18%, var(--card))"></rect>
                          <g fill="var(--primary)" fillOpacity="0.72">
                            <circle cx="1.5" cy="1.5" r="0.8"></circle>
                            <circle cx="4.5" cy="4.5" r="0.8"></circle>
                          </g>
                        </pattern>
                        <pattern id="r13-execute-succeeded" width="6" height="6" patternUnits="userSpaceOnUse">
                          <rect width="6" height="6" fill="color-mix(in oklab, var(--info) 18%, var(--card))"></rect>
                          <path d="M-1 1 1-1M0 6 6 0M5 7 7 5" fill="none" stroke="var(--info)" strokeOpacity="0.62" strokeWidth="1"></path>
                        </pattern>
                        <pattern id="r13-execute-failed" width="6" height="6" patternUnits="userSpaceOnUse">
                          <rect width="6" height="6" fill="color-mix(in oklab, var(--destructive) 18%, var(--card))"></rect>
                          <path d="M-1 1 1-1M0 6 6 0M5 7 7 5" fill="none" stroke="var(--destructive)" strokeOpacity="0.62" strokeWidth="1"></path>
                        </pattern>
                        <pattern id="r13-execute-timedOut" width="6" height="6" patternUnits="userSpaceOnUse">
                          <rect width="6" height="6" fill="color-mix(in oklab, var(--warning) 18%, var(--card))"></rect>
                          <path d="M-1 1 1-1M0 6 6 0M5 7 7 5" fill="none" stroke="var(--warning)" strokeOpacity="0.62" strokeWidth="1"></path>
                        </pattern>
                        <pattern id="r13-execute-skipped" width="6" height="6" patternUnits="userSpaceOnUse">
                          <rect width="6" height="6" fill="color-mix(in oklab, var(--muted-foreground) 18%, var(--card))"></rect>
                          <path d="M-1 1 1-1M0 6 6 0M5 7 7 5" fill="none" stroke="var(--muted-foreground)" strokeOpacity="0.62" strokeWidth="1"></path>
                        </pattern>
                        <pattern id="r13-execute-running" width="6" height="6" patternUnits="userSpaceOnUse">
                          <rect width="6" height="6" fill="color-mix(in oklab, var(--primary) 18%, var(--card))"></rect>
                          <path d="M-1 1 1-1M0 6 6 0M5 7 7 5" fill="none" stroke="var(--primary)" strokeOpacity="0.62" strokeWidth="1"></path>
                        </pattern>
                        <pattern id="r13-teardown-succeeded" width="6" height="6" patternUnits="userSpaceOnUse">
                          <rect width="6" height="6" fill="color-mix(in oklab, var(--info) 18%, var(--card))"></rect>
                          <path d="M0 1.5H6M0 4.5H6" fill="none" stroke="var(--info)" strokeOpacity="0.62" strokeWidth="1"></path>
                        </pattern>
                        <pattern id="r13-teardown-failed" width="6" height="6" patternUnits="userSpaceOnUse">
                          <rect width="6" height="6" fill="color-mix(in oklab, var(--destructive) 18%, var(--card))"></rect>
                          <path d="M0 1.5H6M0 4.5H6" fill="none" stroke="var(--destructive)" strokeOpacity="0.62" strokeWidth="1"></path>
                        </pattern>
                        <pattern id="r13-teardown-timedOut" width="6" height="6" patternUnits="userSpaceOnUse">
                          <rect width="6" height="6" fill="color-mix(in oklab, var(--warning) 18%, var(--card))"></rect>
                          <path d="M0 1.5H6M0 4.5H6" fill="none" stroke="var(--warning)" strokeOpacity="0.62" strokeWidth="1"></path>
                        </pattern>
                        <pattern id="r13-teardown-skipped" width="6" height="6" patternUnits="userSpaceOnUse">
                          <rect width="6" height="6" fill="color-mix(in oklab, var(--muted-foreground) 18%, var(--card))"></rect>
                          <path d="M0 1.5H6M0 4.5H6" fill="none" stroke="var(--muted-foreground)" strokeOpacity="0.62" strokeWidth="1"></path>
                        </pattern>
                        <pattern id="r13-teardown-running" width="6" height="6" patternUnits="userSpaceOnUse">
                          <rect width="6" height="6" fill="color-mix(in oklab, var(--primary) 18%, var(--card))"></rect>
                          <path d="M0 1.5H6M0 4.5H6" fill="none" stroke="var(--primary)" strokeOpacity="0.62" strokeWidth="1"></path>
                        </pattern>
                      </defs>
                      <g className="recharts-zIndex-layer_100" tabIndex="-1">
                        <g className="recharts-area recharts-layer">
                          <g className="recharts-layer">
                            <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_1b_)">
                              <g className="recharts-layer">
                                <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="var(--muted-foreground)" fillOpacity="0.16" height="206" stroke="none" width="690" id="recharts-area-_r_1b_" d="M49.25,106.688C60.75,108.269,72.25,109.851,83.75,109.851C95.25,109.851,106.75,108.571,118.25,108.571C129.75,108.571,141.25,108.571,152.75,108.571C164.25,108.571,175.75,108.571,187.25,108.571C198.75,108.571,210.25,109.164,221.75,109.164C233.25,109.164,244.75,109.164,256.25,109.164C267.75,109.164,279.25,109.164,290.75,109.164C302.25,109.164,313.75,109.164,325.25,109.164C336.75,109.164,348.25,107.981,359.75,107.583C371.25,107.184,382.75,107.016,394.25,106.771C405.75,106.527,417.25,106.553,428.75,106.116C440.25,105.679,451.75,99.519,463.25,99.519C474.75,99.519,486.25,99.519,497.75,99.519C509.25,99.519,520.75,95.764,532.25,95.764C543.75,95.764,555.25,95.764,566.75,95.764C578.25,95.764,589.75,94.578,601.25,94.578C612.75,94.578,624.25,94.578,635.75,94.578C647.25,94.578,658.75,94.578,670.25,94.578C681.75,94.578,693.25,94.578,704.75,94.578L704.75,107.208C693.25,107.659,681.75,108.11,670.25,108.457C658.75,108.803,647.25,109.046,635.75,109.289C624.25,109.532,612.75,109.601,601.25,109.913C589.75,110.225,578.25,111.162,566.75,111.162C555.25,111.162,543.75,111.162,532.25,111.162C520.75,111.162,509.25,111.162,497.75,111.162C486.25,111.162,474.75,112.41,463.25,112.41C451.75,112.41,440.25,112.41,428.75,112.41C417.25,112.41,405.75,112.948,394.25,113.138C382.75,113.329,371.25,113.555,359.75,113.555C348.25,113.555,336.75,113.555,325.25,113.555C313.75,113.555,302.25,113.971,290.75,113.971C279.25,113.971,267.75,113.971,256.25,113.971C244.75,113.971,233.25,113.971,221.75,113.971C210.25,113.971,198.75,113.763,187.25,113.763C175.75,113.763,164.25,113.971,152.75,113.971C141.25,113.971,129.75,113.971,118.25,113.971C106.75,113.971,95.25,114.075,83.75,114.075C72.25,114.075,60.75,114.023,49.25,113.971Z"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                      <g className="recharts-zIndex-layer_300" tabIndex="-1">
                        <g className="recharts-bar recharts-layer" id="recharts-bar-_r_1c_">
                          <g className="recharts-bar-rectangles recharts-layer">
                            <g className="recharts-layer">
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 transition-opacity" style={{opacity: "1"}}>
                                    <g data-status="succeeded">
                                      <clippath id="r14-RUN-58399">
                                        <path d="M39.59,210V119.11515151515152A4,4 0 0 1 43.59,115.11515151515152H54.59A4,4 0 0 1 58.59,119.11515151515152V210Z"></path>
                                      </clippath>
                                      <g clipPath="url(#r14-RUN-58399)">
                                        <path d="M39.59,210V197.93131313131312H58.59V210Z" fill="url(#r13-queue-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M39.59,197.93131313131312V122.6060606060606H58.59V197.93131313131312Z" fill="url(#r13-execute-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M39.59,122.6060606060606V119.11515151515151A4,4 0 0 1 43.59,115.11515151515151H54.59A4,4 0 0 1 58.59,119.11515151515151V122.6060606060606Z" fill="url(#r13-teardown-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 transition-opacity" style={{opacity: "1"}}>
                                    <g data-status="succeeded">
                                      <clippath id="r14-RUN-58400">
                                        <path d="M74.09,210V110.79191919191922A4,4 0 0 1 78.09,106.79191919191922H89.09A4,4 0 0 1 93.09,110.79191919191922V210Z"></path>
                                      </clippath>
                                      <g clipPath="url(#r14-RUN-58400)">
                                        <path d="M74.09,210V195.85050505050506H93.09V210Z" fill="url(#r13-queue-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M74.09,195.85050505050506V114.90707070707074H93.09V195.85050505050506Z" fill="url(#r13-execute-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M74.09,114.90707070707074V110.79191919191923A4,4 0 0 1 78.09,106.79191919191923H89.09A4,4 0 0 1 93.09,110.79191919191923V114.90707070707074Z" fill="url(#r13-teardown-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 transition-opacity" style={{opacity: "1"}}>
                                    <g data-status="succeeded">
                                      <clippath id="r14-RUN-58401">
                                        <path d="M108.59,210V121.40404040404042A4,4 0 0 1 112.59,117.40404040404042H123.59A4,4 0 0 1 127.59,121.40404040404042V210Z"></path>
                                      </clippath>
                                      <g clipPath="url(#r14-RUN-58401)">
                                        <path d="M108.59,210V201.26060606060605H127.59V210Z" fill="url(#r13-queue-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M108.59,201.26060606060605V126.55959595959595H127.59V201.26060606060605Z" fill="url(#r13-execute-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M108.59,126.55959595959595V121.4040404040404A4,4 0 0 1 112.59,117.4040404040404H123.59A4,4 0 0 1 127.59,121.4040404040404V126.55959595959595Z" fill="url(#r13-teardown-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 transition-opacity" style={{opacity: "1"}}>
                                    <g data-status="succeeded">
                                      <clippath id="r14-RUN-58402">
                                        <path d="M143.09,210V113.28888888888889A4,4 0 0 1 147.09,109.28888888888889H158.09A4,4 0 0 1 162.09,113.28888888888889V210Z"></path>
                                      </clippath>
                                      <g clipPath="url(#r14-RUN-58402)">
                                        <path d="M143.09,210V200.0121212121212H162.09V210Z" fill="url(#r13-queue-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M143.09,200.0121212121212V118.65252525252524H162.09V200.0121212121212Z" fill="url(#r13-execute-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M143.09,118.65252525252524V113.28888888888888A4,4 0 0 1 147.09,109.28888888888888H158.09A4,4 0 0 1 162.09,113.28888888888888V118.65252525252524Z" fill="url(#r13-teardown-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 transition-opacity" style={{opacity: "1"}}>
                                    <g data-status="succeeded">
                                      <clippath id="r14-RUN-58403">
                                        <path d="M177.59,210V118.4909090909091A4,4 0 0 1 181.59,114.4909090909091H192.59A4,4 0 0 1 196.59,118.4909090909091V210Z"></path>
                                      </clippath>
                                      <g clipPath="url(#r14-RUN-58403)">
                                        <path d="M177.59,210V200.42828282828282H196.59V210Z" fill="url(#r13-queue-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M177.59,200.42828282828282V122.81414141414142H196.59V200.42828282828282Z" fill="url(#r13-execute-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M177.59,122.81414141414142V118.4909090909091A4,4 0 0 1 181.59,114.4909090909091H192.59A4,4 0 0 1 196.59,118.4909090909091V122.81414141414142Z" fill="url(#r13-teardown-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 transition-opacity" style={{opacity: "1"}}>
                                    <g data-status="succeeded">
                                      <clippath id="r14-RUN-58404">
                                        <path d="M212.09,210V114.53737373737374A4,4 0 0 1 216.09,110.53737373737374H227.09A4,4 0 0 1 231.09,114.53737373737374V210Z"></path>
                                      </clippath>
                                      <g clipPath="url(#r14-RUN-58404)">
                                        <path d="M212.09,210V196.8909090909091H231.09V210Z" fill="url(#r13-queue-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M212.09,196.8909090909091V118.23636363636366H231.09V196.8909090909091Z" fill="url(#r13-execute-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M212.09,118.23636363636366V114.53737373737377A4,4 0 0 1 216.09,110.53737373737377H227.09A4,4 0 0 1 231.09,114.53737373737377V118.23636363636366Z" fill="url(#r13-teardown-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 transition-opacity" style={{opacity: "1"}}>
                                    <g data-status="succeeded">
                                      <clippath id="r14-RUN-58405">
                                        <path d="M246.59,210V124.73333333333333A4,4 0 0 1 250.59,120.73333333333333H261.59000000000003A4,4 0 0 1 265.59000000000003,124.73333333333333V210Z"></path>
                                      </clippath>
                                      <g clipPath="url(#r14-RUN-58405)">
                                        <path d="M246.59,210V200.0121212121212H265.59000000000003V210Z" fill="url(#r13-queue-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M246.59,200.0121212121212V128.640404040404H265.59000000000003V200.0121212121212Z" fill="url(#r13-execute-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M246.59,128.640404040404V124.7333333333333A4,4 0 0 1 250.59,120.7333333333333H261.59000000000003A4,4 0 0 1 265.59000000000003,124.7333333333333V128.640404040404Z" fill="url(#r13-teardown-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 transition-opacity" style={{opacity: "1"}}>
                                    <g data-status="succeeded">
                                      <clippath id="r14-RUN-58406">
                                        <path d="M281.09,210V113.28888888888889A4,4 0 0 1 285.09,109.28888888888889H296.09A4,4 0 0 1 300.09,113.28888888888889V210Z"></path>
                                      </clippath>
                                      <g clipPath="url(#r14-RUN-58406)">
                                        <path d="M281.09,210V198.55555555555554H300.09V210Z" fill="url(#r13-queue-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M281.09,198.55555555555554V119.06868686868685H300.09V198.55555555555554Z" fill="url(#r13-execute-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M281.09,119.06868686868685V113.28888888888888A4,4 0 0 1 285.09,109.28888888888888H296.09A4,4 0 0 1 300.09,113.28888888888888V119.06868686868685Z" fill="url(#r13-teardown-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 transition-opacity" style={{opacity: "1"}}>
                                    <g data-status="succeeded">
                                      <clippath id="r14-RUN-58407">
                                        <path d="M315.59,210V111.62424242424245A4,4 0 0 1 319.59,107.62424242424245H330.59A4,4 0 0 1 334.59,111.62424242424245V210Z"></path>
                                      </clippath>
                                      <g clipPath="url(#r14-RUN-58407)">
                                        <path d="M315.59,210V198.76363636363635H334.59V210Z" fill="url(#r13-queue-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M315.59,198.76363636363635V117.82020202020203H334.59V198.76363636363635Z" fill="url(#r13-execute-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M315.59,117.82020202020203V111.62424242424244A4,4 0 0 1 319.59,107.62424242424244H330.59A4,4 0 0 1 334.59,111.62424242424244V117.82020202020203Z" fill="url(#r13-teardown-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 transition-opacity" style={{opacity: "1"}}>
                                    <g data-status="succeeded">
                                      <clippath id="r14-RUN-58408">
                                        <path d="M350.09,210V110.3757575757576A4,4 0 0 1 354.09,106.3757575757576H365.09A4,4 0 0 1 369.09,110.3757575757576V210Z"></path>
                                      </clippath>
                                      <g clipPath="url(#r14-RUN-58408)">
                                        <path d="M350.09,210V202.7171717171717H369.09V210Z" fill="url(#r13-queue-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M350.09,202.7171717171717V114.90707070707072H369.09V202.7171717171717Z" fill="url(#r13-execute-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M350.09,114.90707070707072V110.37575757575759A4,4 0 0 1 354.09,106.37575757575759H365.09A4,4 0 0 1 369.09,110.37575757575759V114.90707070707072Z" fill="url(#r13-teardown-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 transition-opacity" style={{opacity: "1"}}>
                                    <g data-status="succeeded">
                                      <clippath id="r14-RUN-58409">
                                        <path d="M384.59,210V105.17373737373738A4,4 0 0 1 388.59,101.17373737373738H399.59A4,4 0 0 1 403.59,105.17373737373738V210Z"></path>
                                      </clippath>
                                      <g clipPath="url(#r14-RUN-58409)">
                                        <path d="M384.59,210V199.17979797979797H403.59V210Z" fill="url(#r13-queue-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M384.59,199.17979797979797V108.87272727272727H403.59V199.17979797979797Z" fill="url(#r13-execute-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M384.59,108.87272727272727V105.17373737373738A4,4 0 0 1 388.59,101.17373737373738H399.59A4,4 0 0 1 403.59,105.17373737373738V108.87272727272727Z" fill="url(#r13-teardown-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 transition-opacity" style={{opacity: "1"}}>
                                    <g data-status="succeeded">
                                      <clippath id="r14-RUN-58410">
                                        <path d="M419.09,210V72.08888888888892A4,4 0 0 1 423.09,68.08888888888892H434.09A4,4 0 0 1 438.09,72.08888888888892V210Z"></path>
                                      </clippath>
                                      <g clipPath="url(#r14-RUN-58410)">
                                        <path d="M419.09,210V169.21616161616163H438.09V210Z" fill="url(#r13-queue-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M419.09,169.21616161616163V78.70101010101013H438.09V169.21616161616163Z" fill="url(#r13-execute-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M419.09,78.70101010101013V72.08888888888892A4,4 0 0 1 423.09,68.08888888888892H434.09A4,4 0 0 1 438.09,72.08888888888892V78.70101010101013Z" fill="url(#r13-teardown-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 transition-opacity" style={{opacity: "1"}}>
                                    <g data-status="succeeded">
                                      <clippath id="r14-RUN-58411">
                                        <path d="M453.59,210V105.17373737373738A4,4 0 0 1 457.59,101.17373737373738H468.59A4,4 0 0 1 472.59,105.17373737373738V210Z"></path>
                                      </clippath>
                                      <g clipPath="url(#r14-RUN-58411)">
                                        <path d="M453.59,210V199.38787878787878H472.59V210Z" fill="url(#r13-queue-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M453.59,199.38787878787878V109.08080808080808H472.59V199.38787878787878Z" fill="url(#r13-execute-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M453.59,109.08080808080808V105.17373737373738A4,4 0 0 1 457.59,101.17373737373738H468.59A4,4 0 0 1 472.59,105.17373737373738V109.08080808080808Z" fill="url(#r13-teardown-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 transition-opacity" style={{opacity: "1"}}>
                                    <g data-status="succeeded">
                                      <clippath id="r14-RUN-58412">
                                        <path d="M488.09,210V101.22020202020202A4,4 0 0 1 492.09,97.22020202020202H503.09A4,4 0 0 1 507.09,101.22020202020202V210Z"></path>
                                      </clippath>
                                      <g clipPath="url(#r14-RUN-58412)">
                                        <path d="M488.09,210V197.5151515151515H507.09V210Z" fill="url(#r13-queue-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M488.09,197.5151515151515V107.20808080808081H507.09V197.5151515151515Z" fill="url(#r13-execute-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M488.09,107.20808080808081V101.22020202020202A4,4 0 0 1 492.09,97.22020202020202H503.09A4,4 0 0 1 507.09,101.22020202020202V107.20808080808081Z" fill="url(#r13-teardown-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 transition-opacity" style={{opacity: "1"}}>
                                    <g data-status="timedOut">
                                      <clippath id="r14-RUN-58413">
                                        <path d="M522.59,210V26.72727272727276A4,4 0 0 1 526.59,22.72727272727276H537.59A4,4 0 0 1 541.59,26.72727272727276V210Z"></path>
                                      </clippath>
                                      <g clipPath="url(#r14-RUN-58413)">
                                        <path d="M522.59,210V203.54949494949494H541.59V210Z" fill="url(#r13-queue-timedOut)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M522.59,203.54949494949494V26.727272727272748A4,4 0 0 1 526.59,22.727272727272748H537.59A4,4 0 0 1 541.59,26.727272727272748V203.54949494949494Z" fill="url(#r13-execute-timedOut)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 transition-opacity" style={{opacity: "1"}}>
                                    <g data-status="succeeded">
                                      <clippath id="r14-RUN-58414">
                                        <path d="M557.09,210V99.97171717171719A4,4 0 0 1 561.09,95.97171717171719H572.09A4,4 0 0 1 576.09,99.97171717171719V210Z"></path>
                                      </clippath>
                                      <g clipPath="url(#r14-RUN-58414)">
                                        <path d="M557.09,210V201.05252525252524H576.09V210Z" fill="url(#r13-queue-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M557.09,201.05252525252524V105.75151515151515H576.09V201.05252525252524Z" fill="url(#r13-execute-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M557.09,105.75151515151515V99.97171717171717A4,4 0 0 1 561.09,95.97171717171717H572.09A4,4 0 0 1 576.09,99.97171717171717V105.75151515151515Z" fill="url(#r13-teardown-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 transition-opacity" style={{opacity: "1"}}>
                                    <g data-status="succeeded">
                                      <clippath id="r14-RUN-58415">
                                        <path d="M591.59,210V105.7979797979798A4,4 0 0 1 595.59,101.7979797979798H606.59A4,4 0 0 1 610.59,105.7979797979798V210Z"></path>
                                      </clippath>
                                      <g clipPath="url(#r14-RUN-58415)">
                                        <path d="M591.59,210V199.8040404040404H610.59V210Z" fill="url(#r13-queue-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M591.59,199.8040404040404V112.61818181818181H610.59V199.8040404040404Z" fill="url(#r13-execute-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M591.59,112.61818181818181V105.79797979797979A4,4 0 0 1 595.59,101.79797979797979H606.59A4,4 0 0 1 610.59,105.79797979797979V112.61818181818181Z" fill="url(#r13-teardown-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 transition-opacity" style={{opacity: "1"}}>
                                    <g data-status="succeeded">
                                      <clippath id="r14-RUN-58416">
                                        <path d="M626.09,210V106.83838383838386A4,4 0 0 1 630.09,102.83838383838386H641.09A4,4 0 0 1 645.09,106.83838383838386V210Z"></path>
                                      </clippath>
                                      <g clipPath="url(#r14-RUN-58416)">
                                        <path d="M626.09,210V198.97171717171716H645.09V210Z" fill="url(#r13-queue-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M626.09,198.97171717171716V111.36969696969697H645.09V198.97171717171716Z" fill="url(#r13-execute-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M626.09,111.36969696969697V106.83838383838385A4,4 0 0 1 630.09,102.83838383838385H641.09A4,4 0 0 1 645.09,106.83838383838385V111.36969696969697Z" fill="url(#r13-teardown-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 transition-opacity" style={{opacity: "1"}}>
                                    <g data-status="succeeded">
                                      <clippath id="r14-RUN-58417">
                                        <path d="M660.59,210V108.71111111111111A4,4 0 0 1 664.59,104.71111111111111H675.59A4,4 0 0 1 679.59,108.71111111111111V210Z"></path>
                                      </clippath>
                                      <g clipPath="url(#r14-RUN-58417)">
                                        <path d="M660.59,210V197.7232323232323H679.59V210Z" fill="url(#r13-queue-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M660.59,197.7232323232323V113.86666666666665H679.59V197.7232323232323Z" fill="url(#r13-execute-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M660.59,113.86666666666665V108.7111111111111A4,4 0 0 1 664.59,104.7111111111111H675.59A4,4 0 0 1 679.59,108.7111111111111V113.86666666666665Z" fill="url(#r13-teardown-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar-rectangle recharts-layer">
                                <g className="recharts-inactive-bar recharts-layer">
                                  <g className="duration-150 transition-opacity" style={{opacity: "1"}}>
                                    <g data-status="succeeded">
                                      <clippath id="r14-RUN-58418">
                                        <path d="M695.09,210V113.91313131313133A4,4 0 0 1 699.09,109.91313131313133H710.09A4,4 0 0 1 714.09,113.91313131313133V210Z"></path>
                                      </clippath>
                                      <g clipPath="url(#r14-RUN-58418)">
                                        <path d="M695.09,210V201.67676767676767H714.09V210Z" fill="url(#r13-queue-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M695.09,201.67676767676767V118.44444444444446H714.09V201.67676767676767Z" fill="url(#r13-execute-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                        <path d="M695.09,118.44444444444446V113.91313131313133A4,4 0 0 1 699.09,109.91313131313133H710.09A4,4 0 0 1 714.09,113.91313131313133V118.44444444444446Z" fill="url(#r13-teardown-succeeded)" stroke="var(--card)" strokeWidth="4" paint-order="stroke" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_400" tabIndex="-1">
                        <g className="recharts-layer recharts-line">
                          <g className="recharts-layer recharts-shape">
                            <path className="recharts-curve recharts-line-curve" stroke="color-mix(in oklab, var(--muted-foreground) 70%, transparent)" strokeWidth="1" strokeDasharray="3 3" fill="none" id="recharts-line-_r_1d_" height="206" width="690" d="M49.25,106.688C60.75,108.269,72.25,109.851,83.75,109.851C95.25,109.851,106.75,108.571,118.25,108.571C129.75,108.571,141.25,108.571,152.75,108.571C164.25,108.571,175.75,108.571,187.25,108.571C198.75,108.571,210.25,109.164,221.75,109.164C233.25,109.164,244.75,109.164,256.25,109.164C267.75,109.164,279.25,109.164,290.75,109.164C302.25,109.164,313.75,109.164,325.25,109.164C336.75,109.164,348.25,107.981,359.75,107.583C371.25,107.184,382.75,107.016,394.25,106.771C405.75,106.527,417.25,106.553,428.75,106.116C440.25,105.679,451.75,99.519,463.25,99.519C474.75,99.519,486.25,99.519,497.75,99.519C509.25,99.519,520.75,95.764,532.25,95.764C543.75,95.764,555.25,95.764,566.75,95.764C578.25,95.764,589.75,94.578,601.25,94.578C612.75,94.578,624.25,94.578,635.75,94.578C647.25,94.578,658.75,94.578,670.25,94.578C681.75,94.578,693.25,94.578,704.75,94.578"></path>
                          </g>
                        </g>
                        <g className="recharts-layer recharts-reference-line">
                          <line className="recharts-reference-line-line" y="900" stroke="var(--warning)" strokeDasharray="4 4" fill="none" fillOpacity="1" strokeWidth="1" x1="32" y1="22.72727272727276" x2="722" y2="22.72727272727276"></line>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_450" tabIndex="-1">
                        <g className="duration-200 group-data-[outliers=off]/plot:invisible group-data-[outliers=off]/plot:opacity-0 pointer-events-none transition-[opacity,visibility]">
                          <g className="duration-150 transition-opacity" role="img" aria-label="RUN-58410 is an outlier: 11m 22s, 37% past the expected p95" style={{opacity: "1"}}>
                            <path d="M425.25 60.08888888888892H432.25L428.75 65.08888888888892Z" fill="var(--foreground)" stroke="var(--card)" strokeWidth="2" paint-order="stroke" strokeLinejoin="round"></path>
                          </g>
                          <g className="duration-150 transition-opacity" role="img" aria-label="RUN-58413 is an outlier: 15m 00s, 64% past the expected p95" style={{opacity: "1"}}>
                            <path d="M528.75 14.727272727272759H535.75L532.25 19.72727272727276Z" fill="var(--foreground)" stroke="var(--card)" strokeWidth="2" paint-order="stroke" strokeLinejoin="round"></path>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_460" tabIndex="-1">
                        <g className="duration-200 group-data-[deploys=off]/plot:invisible group-data-[deploys=off]/plot:opacity-0 pointer-events-none transition-[opacity,visibility]">
                          <g role="img" aria-label="Deploy v2.14.0 before RUN-58408">
                            <line x1="343.5" x2="343.5" y1="4" y2="210" stroke="var(--foreground)" strokeOpacity="0.55" strokeDasharray="2 2"></line>
                            <text className="fill-foreground font-medium tabular-nums" x="349.5" y="6" dy="0.71em" textAnchor="start" stroke="var(--card)" strokeWidth="4" paint-order="stroke">
                              {"v2.14.0"}
                            </text>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_500" tabIndex="-1">
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
                      <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                      <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                      <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                      <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                      <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                        <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="49.25" y="224" dy="0.71em" textAnchor="middle"></text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="83.75" y="224" dy="0.71em" textAnchor="middle"></text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="118.25" y="224" dy="0.71em" textAnchor="middle">
                              {"16:00"}
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="152.75" y="224" dy="0.71em" textAnchor="middle"></text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="187.25" y="224" dy="0.71em" textAnchor="middle"></text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="221.75" y="224" dy="0.71em" textAnchor="middle"></text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="256.25" y="224" dy="0.71em" textAnchor="middle">
                              {"20:00"}
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="290.75" y="224" dy="0.71em" textAnchor="middle"></text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="325.25" y="224" dy="0.71em" textAnchor="middle"></text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="359.75" y="224" dy="0.71em" textAnchor="middle"></text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="394.25" y="224" dy="0.71em" textAnchor="middle">
                              {"Oct 13"}
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="428.75" y="224" dy="0.71em" textAnchor="middle"></text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="463.25" y="224" dy="0.71em" textAnchor="middle"></text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="497.75" y="224" dy="0.71em" textAnchor="middle"></text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="532.25" y="224" dy="0.71em" textAnchor="middle">
                              {"04:00"}
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="566.75" y="224" dy="0.71em" textAnchor="middle"></text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="601.25" y="224" dy="0.71em" textAnchor="middle"></text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="635.75" y="224" dy="0.71em" textAnchor="middle"></text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="670.25" y="224" dy="0.71em" textAnchor="middle">
                              {"08:00"}
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="fill-muted-foreground tabular-nums" x="704.75" y="224" dy="0.71em" textAnchor="middle"></text>
                          </g>
                        </g>
                        <g className="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" width="32" orientation="left" height="206" stroke="none" x="24" y="210" textAnchor="end" fill="#666">
                              <tspan x="24" dy="0.355em">
                                {"0"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" width="32" orientation="left" height="206" stroke="none" x="24" y="147.5757575757576" textAnchor="end" fill="#666">
                              <tspan x="24" dy="0.355em">
                                {"5m"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" width="32" orientation="left" height="206" stroke="none" x="24" y="85.15151515151517" textAnchor="end" fill="#666">
                              <tspan x="24" dy="0.355em">
                                {"10m"}
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-cartesian-axis-tick-label recharts-layer">
                            <text className="recharts-cartesian-axis-tick-value recharts-text" width="32" orientation="left" height="206" stroke="none" x="24" y="22.72727272727276" textAnchor="end" fill="#666">
                              <tspan x="24" dy="0.355em">
                                {"15m"}
                              </tspan>
                            </text>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            </ChartContainer>
          </div>
          <div className="sr-only">
            <table>
              <caption>
                {"The last 20 runs of Refresh fraud model features, oldest first"}
              </caption>
              <thead>
                <tr>
                  <th scope="col">
                    {"Run"}
                  </th>
                  <th scope="col">
                    {"Started"}
                  </th>
                  <th scope="col">
                    {"Status"}
                  </th>
                  <th scope="col">
                    {"Duration"}
                  </th>
                  <th scope="col">
                    {"Queue wait"}
                  </th>
                  <th scope="col">
                    {"Execute"}
                  </th>
                  <th scope="col">
                    {"Teardown"}
                  </th>
                  <th scope="col">
                    {"Outlier"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    {"RUN-58399"}
                  </th>
                  <td>
                    {"Oct 12, 14:00 UTC"}
                  </td>
                  <td>
                    {"Succeeded"}
                  </td>
                  <td>
                    {"7m 36s"}
                  </td>
                  <td>
                    {"58s"}
                  </td>
                  <td>
                    {"6m 02s"}
                  </td>
                  <td>
                    {"36s"}
                  </td>
                  <td>
                    {"No"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"RUN-58400"}
                  </th>
                  <td>
                    {"Oct 12, 15:00 UTC"}
                  </td>
                  <td>
                    {"Succeeded"}
                  </td>
                  <td>
                    {"8m 16s"}
                  </td>
                  <td>
                    {"1m 08s"}
                  </td>
                  <td>
                    {"6m 29s"}
                  </td>
                  <td>
                    {"39s"}
                  </td>
                  <td>
                    {"No"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"RUN-58401"}
                  </th>
                  <td>
                    {"Oct 12, 16:00 UTC"}
                  </td>
                  <td>
                    {"Succeeded"}
                  </td>
                  <td>
                    {"7m 25s"}
                  </td>
                  <td>
                    {"42s"}
                  </td>
                  <td>
                    {"5m 59s"}
                  </td>
                  <td>
                    {"44s"}
                  </td>
                  <td>
                    {"No"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"RUN-58402"}
                  </th>
                  <td>
                    {"Oct 12, 17:00 UTC"}
                  </td>
                  <td>
                    {"Succeeded"}
                  </td>
                  <td>
                    {"8m 04s"}
                  </td>
                  <td>
                    {"48s"}
                  </td>
                  <td>
                    {"6m 31s"}
                  </td>
                  <td>
                    {"45s"}
                  </td>
                  <td>
                    {"No"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"RUN-58403"}
                  </th>
                  <td>
                    {"Oct 12, 18:00 UTC"}
                  </td>
                  <td>
                    {"Succeeded"}
                  </td>
                  <td>
                    {"7m 39s"}
                  </td>
                  <td>
                    {"46s"}
                  </td>
                  <td>
                    {"6m 13s"}
                  </td>
                  <td>
                    {"40s"}
                  </td>
                  <td>
                    {"No"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"RUN-58404"}
                  </th>
                  <td>
                    {"Oct 12, 19:00 UTC"}
                  </td>
                  <td>
                    {"Succeeded"}
                  </td>
                  <td>
                    {"7m 58s"}
                  </td>
                  <td>
                    {"1m 03s"}
                  </td>
                  <td>
                    {"6m 18s"}
                  </td>
                  <td>
                    {"37s"}
                  </td>
                  <td>
                    {"No"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"RUN-58405"}
                  </th>
                  <td>
                    {"Oct 12, 20:00 UTC"}
                  </td>
                  <td>
                    {"Succeeded"}
                  </td>
                  <td>
                    {"7m 09s"}
                  </td>
                  <td>
                    {"48s"}
                  </td>
                  <td>
                    {"5m 43s"}
                  </td>
                  <td>
                    {"38s"}
                  </td>
                  <td>
                    {"No"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"RUN-58406"}
                  </th>
                  <td>
                    {"Oct 12, 21:00 UTC"}
                  </td>
                  <td>
                    {"Succeeded"}
                  </td>
                  <td>
                    {"8m 04s"}
                  </td>
                  <td>
                    {"55s"}
                  </td>
                  <td>
                    {"6m 22s"}
                  </td>
                  <td>
                    {"47s"}
                  </td>
                  <td>
                    {"No"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"RUN-58407"}
                  </th>
                  <td>
                    {"Oct 12, 22:00 UTC"}
                  </td>
                  <td>
                    {"Succeeded"}
                  </td>
                  <td>
                    {"8m 12s"}
                  </td>
                  <td>
                    {"54s"}
                  </td>
                  <td>
                    {"6m 29s"}
                  </td>
                  <td>
                    {"49s"}
                  </td>
                  <td>
                    {"No"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"RUN-58408"}
                  </th>
                  <td>
                    {"Oct 12, 23:00 UTC"}
                  </td>
                  <td>
                    {"Succeeded"}
                  </td>
                  <td>
                    {"8m 18s"}
                  </td>
                  <td>
                    {"35s"}
                  </td>
                  <td>
                    {"7m 02s"}
                  </td>
                  <td>
                    {"41s"}
                  </td>
                  <td>
                    {"No"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"RUN-58409"}
                  </th>
                  <td>
                    {"Oct 13, 00:00 UTC"}
                  </td>
                  <td>
                    {"Succeeded"}
                  </td>
                  <td>
                    {"8m 43s"}
                  </td>
                  <td>
                    {"52s"}
                  </td>
                  <td>
                    {"7m 14s"}
                  </td>
                  <td>
                    {"37s"}
                  </td>
                  <td>
                    {"No"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"RUN-58410"}
                  </th>
                  <td>
                    {"Oct 13, 01:00 UTC"}
                  </td>
                  <td>
                    {"Succeeded"}
                  </td>
                  <td>
                    {"11m 22s"}
                  </td>
                  <td>
                    {"3m 16s"}
                  </td>
                  <td>
                    {"7m 15s"}
                  </td>
                  <td>
                    {"51s"}
                  </td>
                  <td>
                    {"Yes"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"RUN-58411"}
                  </th>
                  <td>
                    {"Oct 13, 02:00 UTC"}
                  </td>
                  <td>
                    {"Succeeded"}
                  </td>
                  <td>
                    {"8m 43s"}
                  </td>
                  <td>
                    {"51s"}
                  </td>
                  <td>
                    {"7m 14s"}
                  </td>
                  <td>
                    {"38s"}
                  </td>
                  <td>
                    {"No"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"RUN-58412"}
                  </th>
                  <td>
                    {"Oct 13, 03:00 UTC"}
                  </td>
                  <td>
                    {"Succeeded"}
                  </td>
                  <td>
                    {"9m 02s"}
                  </td>
                  <td>
                    {"1m 00s"}
                  </td>
                  <td>
                    {"7m 14s"}
                  </td>
                  <td>
                    {"48s"}
                  </td>
                  <td>
                    {"No"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"RUN-58413"}
                  </th>
                  <td>
                    {"Oct 13, 04:00 UTC"}
                  </td>
                  <td>
                    {"Timed Out"}
                  </td>
                  <td>
                    {"15m 00s"}
                  </td>
                  <td>
                    {"31s"}
                  </td>
                  <td>
                    {"14m 29s"}
                  </td>
                  <td>
                    {"0s"}
                  </td>
                  <td>
                    {"Yes"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"RUN-58414"}
                  </th>
                  <td>
                    {"Oct 13, 05:00 UTC"}
                  </td>
                  <td>
                    {"Succeeded"}
                  </td>
                  <td>
                    {"9m 08s"}
                  </td>
                  <td>
                    {"43s"}
                  </td>
                  <td>
                    {"7m 38s"}
                  </td>
                  <td>
                    {"47s"}
                  </td>
                  <td>
                    {"No"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"RUN-58415"}
                  </th>
                  <td>
                    {"Oct 13, 06:00 UTC"}
                  </td>
                  <td>
                    {"Succeeded"}
                  </td>
                  <td>
                    {"8m 40s"}
                  </td>
                  <td>
                    {"49s"}
                  </td>
                  <td>
                    {"6m 59s"}
                  </td>
                  <td>
                    {"52s"}
                  </td>
                  <td>
                    {"No"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"RUN-58416"}
                  </th>
                  <td>
                    {"Oct 13, 07:00 UTC"}
                  </td>
                  <td>
                    {"Succeeded"}
                  </td>
                  <td>
                    {"8m 35s"}
                  </td>
                  <td>
                    {"53s"}
                  </td>
                  <td>
                    {"7m 01s"}
                  </td>
                  <td>
                    {"41s"}
                  </td>
                  <td>
                    {"No"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"RUN-58417"}
                  </th>
                  <td>
                    {"Oct 13, 08:00 UTC"}
                  </td>
                  <td>
                    {"Succeeded"}
                  </td>
                  <td>
                    {"8m 26s"}
                  </td>
                  <td>
                    {"59s"}
                  </td>
                  <td>
                    {"6m 43s"}
                  </td>
                  <td>
                    {"44s"}
                  </td>
                  <td>
                    {"No"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"RUN-58418"}
                  </th>
                  <td>
                    {"Oct 13, 09:00 UTC"}
                  </td>
                  <td>
                    {"Succeeded"}
                  </td>
                  <td>
                    {"8m 01s"}
                  </td>
                  <td>
                    {"40s"}
                  </td>
                  <td>
                    {"6m 40s"}
                  </td>
                  <td>
                    {"41s"}
                  </td>
                  <td>
                    {"No"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </FramePanel>
        <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
          <div className="@container/legend w-full">
            <div className="flex gap-x-6 items-center justify-between text-xs">
              <ul className="flex flex-wrap gap-x-4 gap-y-2 items-center min-w-0" aria-label="Phases">
                <li className="flex gap-1.5 h-4 items-center">
                  <svg className="shrink-0 size-3" aria-hidden="true" viewBox="0 0 12 12">
                    <defs>
                      <pattern id="r16-queue-neutral" width="6" height="6" patternUnits="userSpaceOnUse">
                        <rect width="6" height="6" fill="color-mix(in oklab, var(--muted-foreground) 10%, var(--card))"></rect>
                        <g fill="var(--muted-foreground)" fillOpacity="0.72">
                          <circle cx="1.5" cy="1.5" r="0.8"></circle>
                          <circle cx="4.5" cy="4.5" r="0.8"></circle>
                        </g>
                      </pattern>
                    </defs>
                    <rect width="12" height="12" rx="2.5" fill="url(#r16-queue-neutral)"></rect>
                  </svg>
                  <span className="[text-box:trim-both_cap_alphabetic] text-muted-foreground">
                    {"Queue wait"}
                  </span>
                </li>
                <li className="flex gap-1.5 h-4 items-center">
                  <svg className="shrink-0 size-3" aria-hidden="true" viewBox="0 0 12 12">
                    <defs>
                      <pattern id="r17-execute-neutral" width="6" height="6" patternUnits="userSpaceOnUse">
                        <rect width="6" height="6" fill="color-mix(in oklab, var(--muted-foreground) 10%, var(--card))"></rect>
                        <path d="M-1 1 1-1M0 6 6 0M5 7 7 5" fill="none" stroke="var(--muted-foreground)" strokeOpacity="0.62" strokeWidth="1"></path>
                      </pattern>
                    </defs>
                    <rect width="12" height="12" rx="2.5" fill="url(#r17-execute-neutral)"></rect>
                  </svg>
                  <span className="[text-box:trim-both_cap_alphabetic] text-muted-foreground">
                    {"Execute"}
                  </span>
                </li>
                <li className="flex gap-1.5 h-4 items-center">
                  <svg className="shrink-0 size-3" aria-hidden="true" viewBox="0 0 12 12">
                    <defs>
                      <pattern id="r18-teardown-neutral" width="6" height="6" patternUnits="userSpaceOnUse">
                        <rect width="6" height="6" fill="color-mix(in oklab, var(--muted-foreground) 10%, var(--card))"></rect>
                        <path d="M0 1.5H6M0 4.5H6" fill="none" stroke="var(--muted-foreground)" strokeOpacity="0.62" strokeWidth="1"></path>
                      </pattern>
                    </defs>
                    <rect width="12" height="12" rx="2.5" fill="url(#r18-teardown-neutral)"></rect>
                  </svg>
                  <span className="[text-box:trim-both_cap_alphabetic] text-muted-foreground">
                    {"Teardown"}
                  </span>
                </li>
              </ul>
              <ul className="@2xl/legend:flex gap-x-4 hidden items-center" aria-label="Layers">
                <li className="flex gap-1.5 h-4 items-center">
                  <svg className="shrink-0 size-3" aria-hidden="true" viewBox="0 0 12 12">
                    <rect y="3" width="12" height="9" rx="2" fill="var(--muted-foreground)" fillOpacity="0.16"></rect>
                    <line x1="0" x2="12" y1="3.5" y2="3.5" stroke="color-mix(in oklab, var(--muted-foreground) 70%, transparent)" strokeDasharray="3 3"></line>
                  </svg>
                  <span className="[text-box:trim-both_cap_alphabetic] text-muted-foreground">
                    {"p50 to p95"}
                  </span>
                </li>
                <li className="flex gap-1.5 h-4 items-center">
                  <svg className="shrink-0 size-3" aria-hidden="true" viewBox="0 0 12 12">
                    <path d="M2.5 4H9.5L6 9Z" fill="var(--foreground)" stroke="var(--card)" strokeWidth="2" paint-order="stroke" strokeLinejoin="round"></path>
                  </svg>
                  <span className="[text-box:trim-both_cap_alphabetic] text-muted-foreground">
                    {"Outlier"}
                  </span>
                </li>
                <li className="flex gap-1.5 h-4 items-center">
                  <svg className="shrink-0 size-3 text-foreground" aria-hidden="true" viewBox="0 0 12 12">
                    <line x1="6" x2="6" y1="0" y2="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"></line>
                  </svg>
                  <span className="[text-box:trim-both_cap_alphabetic] text-muted-foreground">
                    {"Deploy"}
                  </span>
                </li>
                <li className="flex gap-1.5 h-4 items-center">
                  <svg className="shrink-0 size-3 text-warning" aria-hidden="true" viewBox="0 0 12 12">
                    <line x1="0" x2="12" y1="6" y2="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"></line>
                  </svg>
                  <span className="[text-box:trim-both_cap_alphabetic] text-muted-foreground">
                    {"Timeout"}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </Frame>
    </div>
  )
}
