import { ColorPickerSwatch } from "@/registry-neui/bases/base/neui/color-picker"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
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

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 min-h-svh p-4 sm:p-10 w-full">
      <Card className="@container/leads [--leads-current:var(--leads-accent,var(--color-teal-600))] dark:[--leads-current:var(--leads-accent,var(--color-teal-400))] max-w-4xl min-w-0 w-full" size="default">
        <CardHeader>
          <CardTitle>
            {"Inbound Leads"}
          </CardTitle>
          <CardDescription className="col-start-1">
            <span className="flex gap-1.5 items-center">
              <span className="font-medium gap-1 inline-flex items-center tabular-nums text-success">
                <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
                <span className="sr-only">
                  {"Up"}
                </span>
                {"20.1%"}
              </span>
              {"vs 2024"}
            </span>
          </CardDescription>
          <CardAction className="@2xl/card-header:col-start-2 @2xl/card-header:justify-self-end @2xl/card-header:mt-0 @2xl/card-header:row-span-2 @2xl/card-header:row-start-1 col-start-1 justify-self-start mt-2 row-span-1 row-start-3">
            <div className="flex flex-wrap gap-2 items-center">
              <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Granularity" style={{"--gap": "0"}}>
                <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="sm" spacing="0" aria-label="By month" extracted="1">
                  {"Month"}
                </ToggleGroupItem>
                <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="0" aria-label="By quarter">
                  {"Quarter"}
                </ToggleGroupItem>
              </ToggleGroup>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_5_" aria-expanded="false">
                {"Display"}
                <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Trend line: Linear Trend" aria-haspopup="menu" id="base-ui-_r_a_" aria-expanded="false">
                {"Linear Trend"}
                <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
              <ButtonGroup role="group" aria-label="Chart actions">
                <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline data-placeholder:text-muted-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-center normal-case outline-none select-none shrink-0 tabular-nums tracking-normal transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Series color" id="_r_c_" data-base-ui-tooltip-trigger="" data-base-ui-click-trigger="" aria-haspopup="dialog" aria-expanded="false">
                  <ColorPickerSwatch className="after:absolute after:inset-0 after:inset-ring after:inset-ring-foreground/10 after:pointer-events-none after:rounded-[inherit] forced-color-adjust-none inline-flex relative shrink-0 size-4" aria-hidden="true" style={{background: "var(--leads-current)"}}></ColorPickerSwatch>
                </button>
                <span className="sr-only" role="status"></span>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Refresh data" aria-busy="false" id="base-ui-_r_i_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                    <path d="M21 3v5h-5"></path>
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                    <path d="M8 16H3v5"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Expand chart" id="base-ui-_r_k_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-maximize-2 lucide-maximize2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Maximize2Icon" tabler="IconMaximize" hugeicons="Maximize01Icon" phosphor="CornersOutIcon" remixicon="RiFullscreenLine" aria-hidden="true">
                    <path d="M15 3h6v6"></path>
                    <path d="m21 3-7 7"></path>
                    <path d="m3 21 7-7"></path>
                    <path d="M9 21H3v-6"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions" aria-haspopup="menu" id="base-ui-_r_p_" baseUiTooltipTrigger="" aria-expanded="false">
                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </ButtonGroup>
            </div>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="mb-2 mt-3">
            <div className="@xl/leads:h-72 [&_.recharts-cartesian-grid]:duration-300 [&_.recharts-cartesian-grid]:transition-opacity [&_g]:outline-hidden [-webkit-tap-highlight-color:transparent] data-[grid=off]:[&_.recharts-cartesian-grid]:opacity-0 group/plot h-60 has-[.recharts-surface:focus-visible]:outline-2 motion-reduce:[&_*]:transition-none outline-offset-4 outline-ring/50 w-full" data-points="on" data-fill="on" data-grid="on" data-compare="on" data-trend="linear">
              <style dangerouslySetInnerHTML={{ __html: "\n@keyframes leads-particle-fall {\n  0% { transform: translateY(0); opacity: 0; }\n  20%, 75% { opacity: var(--leads-particle-peak); }\n  100% { transform: translateY(var(--leads-particle-fall)); opacity: 0; }\n}\n.leads-particle {\n  opacity: 0;\n  animation: leads-particle-fall var(--leads-particle-duration) linear var(--leads-particle-delay) infinite;\n}\n@media (prefers-reduced-motion: reduce) {\n  .leads-particle { animation: none; }\n}\nhtml[data-demo=\"frozen\"] .leads-particle { animation: none; }\n" }} />
              <ChartContainer>
              <div className="@xl/leads:h-72 [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-60 justify-center text-xs w-full" data-chart="chart-_r_u_">
                <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_u_] {\n  --color-current: var(--leads-current);\n  --color-prior: color-mix(in oklab, var(--muted-foreground) 50%, var(--card));\n}\n\n\n.dark [data-chart=chart-_r_u_] {\n  --color-current: var(--leads-current);\n  --color-prior: color-mix(in oklab, var(--muted-foreground) 50%, var(--card));\n}\n" }} />
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width="864" height="288" style={{position: "relative", cursor: "default", width: "864px", height: "288px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" aria-label="Inbound leads by period" role="application" tabIndex="0" width="864" height="288" viewBox="0 0 864 288" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc>
                          {"This year against last year, period by period; arrow keys move through the periods."}
                        </desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                          <g className="recharts-cartesian-grid">
                            <g className="recharts-cartesian-grid-vertical">
                              <line stroke="#ccc" fill="none" x="36" y="20" width="824" height="238" x1="124" y1="20" x2="124" y2="258"></line>
                              <line stroke="#ccc" fill="none" x="36" y="20" width="824" height="238" x1="196" y1="20" x2="196" y2="258"></line>
                              <line stroke="#ccc" fill="none" x="36" y="20" width="824" height="238" x1="268" y1="20" x2="268" y2="258"></line>
                              <line stroke="#ccc" fill="none" x="36" y="20" width="824" height="238" x1="340" y1="20" x2="340" y2="258"></line>
                              <line stroke="#ccc" fill="none" x="36" y="20" width="824" height="238" x1="412" y1="20" x2="412" y2="258"></line>
                              <line stroke="#ccc" fill="none" x="36" y="20" width="824" height="238" x1="484" y1="20" x2="484" y2="258"></line>
                              <line stroke="#ccc" fill="none" x="36" y="20" width="824" height="238" x1="556" y1="20" x2="556" y2="258"></line>
                              <line stroke="#ccc" fill="none" x="36" y="20" width="824" height="238" x1="628" y1="20" x2="628" y2="258"></line>
                              <line stroke="#ccc" fill="none" x="36" y="20" width="824" height="238" x1="700" y1="20" x2="700" y2="258"></line>
                              <line stroke="#ccc" fill="none" x="36" y="20" width="824" height="238" x1="772" y1="20" x2="772" y2="258"></line>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                        <defs>
                          <clippath id="recharts1-clip">
                            <rect x="36" y="20" height="238" width="824"></rect>
                          </clippath>
                        </defs>
                        <defs>
                          <lineargradient id="rt-fill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--color-current)" stopOpacity="0.2"></stop>
                            <stop offset="100%" stopColor="var(--color-current)" stopOpacity="0"></stop>
                          </lineargradient>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                          <g className="duration-300 group-data-[fill=off]/plot:opacity-0 recharts-area recharts-layer transition-opacity">
                            <g className="recharts-layer">
                              <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_v_)">
                                <g className="recharts-layer">
                                  <path className="recharts-area-area recharts-curve" data-series="fill" strokeWidth="1" fill="url(#rt-fill)" fillOpacity="1" height="238" stroke="none" width="824" id="recharts-area-_r_v_" d="M52,139.595C76,137.364,100,135.133,124,129.778C148,124.423,172,107.465,196,107.465C220,107.465,244,112.82,268,112.82C292,112.82,316,95.268,340,95.268C364,95.268,388,97.053,412,100.622C436,104.192,460,115.597,484,118.77C508,121.943,532,123.53,556,123.53C580,123.53,604,93.929,628,84.558C652,75.186,676,67.303,700,67.303C724,67.303,748,70.178,772,75.93C796,81.682,820,95.02,844,108.358L844,258C820,258,796,258,772,258C748,258,724,258,700,258C676,258,652,258,628,258C604,258,580,258,556,258C532,258,508,258,484,258C460,258,436,258,412,258C388,258,364,258,340,258C316,258,292,258,268,258C244,258,220,258,196,258C172,258,148,258,124,258C100,258,76,258,52,258Z"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_150" tabIndex="-1">
                          <clippath id="rt-particles">
                            <path className="recharts-curve" data-series="clip" d="M52,139.595C76,137.364,100,135.133,124,129.778C148,124.423,172,107.465,196,107.465C220,107.465,244,112.82,268,112.82C292,112.82,316,95.268,340,95.268C364,95.268,388,97.053,412,100.622C436,104.192,460,115.597,484,118.77C508,121.943,532,123.53,556,123.53C580,123.53,604,93.929,628,84.558C652,75.186,676,67.303,700,67.303C724,67.303,748,70.178,772,75.93C796,81.682,820,95.02,844,108.358L844,258C820,258,796,258,772,258C748,258,724,258,700,258C676,258,652,258,628,258C604,258,580,258,556,258C532,258,508,258,484,258C460,258,436,258,412,258C388,258,364,258,340,258C316,258,292,258,268,258C244,258,220,258,196,258C172,258,148,258,124,258C100,258,76,258,52,258Z"></path>
                          </clippath>
                          <g className="duration-300 group-data-[fill=off]/plot:opacity-0 pointer-events-none transition-opacity" aria-hidden="true" data-particles="" clipPath="url(#rt-particles)">
                            <circle className="leads-particle" cx="77.2" cy="91.39999999999999" r="1.6" fill="var(--color-current)" style={{"--leads-particle-fall": "130.9px", "--leads-particle-duration": "9.7s", "--leads-particle-delay": "-2.1s", "--leads-particle-peak": "0.45"}}></circle>
                            <circle className="leads-particle" cx="134.88" cy="62.839999999999996" r="1.2" fill="var(--color-current)" style={{"--leads-particle-fall": "147.56px", "--leads-particle-duration": "12.3s", "--leads-particle-delay": "-7.4s", "--leads-particle-peak": "0.35"}}></circle>
                            <circle className="leads-particle" cx="192.56" cy="105.67999999999999" r="2" fill="var(--color-current)" style={{"--leads-particle-fall": "119px", "--leads-particle-duration": "10.9s", "--leads-particle-delay": "-4.6s", "--leads-particle-peak": "0.4"}}></circle>
                            <circle className="leads-particle" cx="258.48" cy="77.12" r="1.4" fill="var(--color-current)" style={{"--leads-particle-fall": "142.79999999999998px", "--leads-particle-duration": "13.7s", "--leads-particle-delay": "-0.8s", "--leads-particle-peak": "0.35"}}></circle>
                            <circle className="leads-particle" cx="316.16" cy="115.2" r="1.8" fill="var(--color-current)" style={{"--leads-particle-fall": "114.24px", "--leads-particle-duration": "8.9s", "--leads-particle-delay": "-5.9s", "--leads-particle-peak": "0.45"}}></circle>
                            <circle className="leads-particle" cx="382.08" cy="67.6" r="1.3" fill="var(--color-current)" style={{"--leads-particle-fall": "157.08px", "--leads-particle-duration": "11.6s", "--leads-particle-delay": "-9.2s", "--leads-particle-peak": "0.35"}}></circle>
                            <circle className="leads-particle" cx="439.76" cy="98.54" r="1.7" fill="var(--color-current)" style={{"--leads-particle-fall": "133.28px", "--leads-particle-duration": "14.4s", "--leads-particle-delay": "-3.3s", "--leads-particle-peak": "0.4"}}></circle>
                            <circle className="leads-particle" cx="505.67999999999995" cy="81.88" r="1.2" fill="var(--color-current)" style={{"--leads-particle-fall": "138.04px", "--leads-particle-duration": "9.4s", "--leads-particle-delay": "-6.7s", "--leads-particle-peak": "0.35"}}></circle>
                            <circle className="leads-particle" cx="563.36" cy="110.44" r="1.9" fill="var(--color-current)" style={{"--leads-particle-fall": "119px", "--leads-particle-duration": "12.8s", "--leads-particle-delay": "-1.5s", "--leads-particle-peak": "0.45"}}></circle>
                            <circle className="leads-particle" cx="621.04" cy="58.08" r="1.4" fill="var(--color-current)" style={{"--leads-particle-fall": "161.84px", "--leads-particle-duration": "10.3s", "--leads-particle-delay": "-8.1s", "--leads-particle-peak": "0.35"}}></circle>
                            <circle className="leads-particle" cx="678.72" cy="91.39999999999999" r="1.6" fill="var(--color-current)" style={{"--leads-particle-fall": "133.28px", "--leads-particle-duration": "15.1s", "--leads-particle-delay": "-4s", "--leads-particle-peak": "0.4"}}></circle>
                            <circle className="leads-particle" cx="736.4" cy="72.36" r="1.3" fill="var(--color-current)" style={{"--leads-particle-fall": "147.56px", "--leads-particle-duration": "11.1s", "--leads-particle-delay": "-10.6s", "--leads-particle-peak": "0.35"}}></circle>
                            <circle className="leads-particle" cx="785.84" cy="100.92" r="1.8" fill="var(--color-current)" style={{"--leads-particle-fall": "123.76px", "--leads-particle-duration": "13.3s", "--leads-particle-delay": "-2.8s", "--leads-particle-peak": "0.45"}}></circle>
                            <circle className="leads-particle" cx="827.04" cy="81.88" r="1.2" fill="var(--color-current)" style={{"--leads-particle-fall": "138.04px", "--leads-particle-duration": "9.9s", "--leads-particle-delay": "-6.1s", "--leads-particle-peak": "0.35"}}></circle>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_390" tabIndex="-1">
                          <g className="duration-300 group-data-[compare=off]/plot:opacity-0 recharts-layer recharts-line transition-opacity">
                            <g className="recharts-layer recharts-shape">
                              <path className="recharts-curve recharts-line-curve" stroke="var(--color-prior)" strokeWidth="1.5" data-series="prior" fill="none" id="recharts-line-_r_11_" height="238" width="824" d="M52,153.28C76,150.255,100,147.231,124,144.653C148,142.074,172,140.537,196,137.81C220,135.083,244,128.29,268,128.29C292,128.29,316,130.67,340,130.67C364,130.67,388,121.448,412,121.448C436,121.448,460,137.215,484,141.38C508,145.545,532,147.628,556,147.628C580,147.628,604,130.967,628,124.72C652,118.472,676,113.762,700,110.143C724,106.523,748,103.003,772,103.003C796,103.003,820,115.498,844,127.992"></path>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_395" tabIndex="-1">
                          <g className="duration-300 group-data-[trend=linear]/plot:opacity-100 opacity-0 recharts-layer recharts-line transition-opacity">
                            <g className="recharts-layer recharts-shape">
                              <path className="recharts-curve recharts-line-curve" stroke="var(--color-current)" strokeOpacity="0.7" strokeWidth="1.5" strokeDasharray="5 4" data-series="linear" fill="none" id="recharts-line-_r_12_" height="238" width="824" d="M52,127.405C76,126.067,100,124.73,124,123.392C148,122.054,172,120.717,196,119.379C220,118.041,244,116.703,268,115.366C292,114.028,316,112.69,340,111.353C364,110.015,388,108.677,412,107.339C436,106.002,460,104.664,484,103.326C508,101.989,532,100.651,556,99.313C580,97.976,604,96.638,628,95.3C652,93.962,676,92.625,700,91.287C724,89.949,748,88.612,772,87.274C796,85.936,820,84.598,844,83.261"></path>
                            </g>
                          </g>
                          <g className="duration-300 group-data-[trend=average]/plot:opacity-100 opacity-0 recharts-layer recharts-line transition-opacity">
                            <g className="recharts-layer recharts-shape">
                              <path className="recharts-curve recharts-line-curve" stroke="var(--color-current)" strokeOpacity="0.7" strokeWidth="1.5" strokeDasharray="5 4" data-series="average" fill="none" id="recharts-line-_r_13_" height="238" width="824" d="M52,134.686C76,131.649,100,128.612,124,125.613C148,122.613,172,120.092,196,116.688C220,113.283,244,106.705,268,105.184C292,103.664,316,102.903,340,102.903C364,102.903,388,103.564,412,104.887C436,106.209,460,114.308,484,114.308C508,114.308,532,112.523,556,108.953C580,105.383,604,97.3,628,91.797C652,86.293,676,75.93,700,75.93C724,75.93,748,81.161,772,83.863C796,86.566,820,89.355,844,92.144"></path>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_400" tabIndex="-1">
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <path className="recharts-curve recharts-line-curve" stroke="var(--color-current)" strokeWidth="2" data-series="current" fill="none" id="recharts-line-_r_10_" height="238" width="824" d="M52,139.595C76,137.364,100,135.133,124,129.778C148,124.423,172,107.465,196,107.465C220,107.465,244,112.82,268,112.82C292,112.82,316,95.268,340,95.268C364,95.268,388,97.053,412,100.622C436,104.192,460,115.597,484,118.77C508,121.943,532,123.53,556,123.53C580,123.53,604,93.929,628,84.558C652,75.186,676,67.303,700,67.303C724,67.303,748,70.178,772,75.93C796,81.682,820,95.02,844,108.358"></path>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_500" tabIndex="-1">
                          <g className="recharts-cartesian-axis recharts-layer recharts-xAxis xAxis">
                            <line className="recharts-cartesian-axis-line" angle="0" height="30" orientation="bottom" x="36" y="258" width="824" stroke="var(--border)" fill="none" x1="36" y1="258" x2="860" y2="258"></line>
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
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_600" tabIndex="-1">
                          <g className="recharts-layer recharts-line-dots">
                            <circle className="duration-300 ease-out group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="52" cy="139.59499999999997" r="4" fill="var(--color-current)" stroke="var(--card)" strokeWidth="2" data-dot="current"></circle>
                            <circle className="duration-300 ease-out group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="124" cy="129.7775" r="4" fill="var(--color-current)" stroke="var(--card)" strokeWidth="2" data-dot="current"></circle>
                            <circle className="duration-300 ease-out group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="196" cy="107.465" r="4" fill="var(--color-current)" stroke="var(--card)" strokeWidth="2" data-dot="current"></circle>
                            <circle className="duration-300 ease-out group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="268" cy="112.82000000000001" r="4" fill="var(--color-current)" stroke="var(--card)" strokeWidth="2" data-dot="current"></circle>
                            <circle className="duration-300 ease-out group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="340" cy="95.2675" r="4" fill="var(--color-current)" stroke="var(--card)" strokeWidth="2" data-dot="current"></circle>
                            <circle className="duration-300 ease-out group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="412" cy="100.62249999999999" r="4" fill="var(--color-current)" stroke="var(--card)" strokeWidth="2" data-dot="current"></circle>
                            <circle className="duration-300 ease-out group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="484" cy="118.77000000000001" r="4" fill="var(--color-current)" stroke="var(--card)" strokeWidth="2" data-dot="current"></circle>
                            <circle className="duration-300 ease-out group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="556" cy="123.53000000000002" r="4" fill="var(--color-current)" stroke="var(--card)" strokeWidth="2" data-dot="current"></circle>
                            <circle className="duration-300 ease-out group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="628" cy="84.5575" r="4" fill="var(--color-current)" stroke="var(--card)" strokeWidth="2" data-dot="current"></circle>
                            <circle className="duration-300 ease-out group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="700" cy="67.3025" r="4" fill="var(--color-current)" stroke="var(--card)" strokeWidth="2" data-dot="current"></circle>
                            <circle className="duration-300 ease-out group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="772" cy="75.92999999999999" r="4" fill="var(--color-current)" stroke="var(--card)" strokeWidth="2" data-dot="current"></circle>
                            <circle className="duration-300 ease-out group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="844" cy="108.3575" r="4" fill="var(--color-current)" stroke="var(--card)" strokeWidth="2" data-dot="current"></circle>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <circle className="duration-300 ease-out group-data-[compare=off]/plot:opacity-0 group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="52" cy="153.28000000000003" r="3.5" fill="var(--color-prior)" stroke="var(--card)" strokeWidth="1.5" data-dot="prior"></circle>
                            <circle className="duration-300 ease-out group-data-[compare=off]/plot:opacity-0 group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="124" cy="144.6525" r="3.5" fill="var(--color-prior)" stroke="var(--card)" strokeWidth="1.5" data-dot="prior"></circle>
                            <circle className="duration-300 ease-out group-data-[compare=off]/plot:opacity-0 group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="196" cy="137.81" r="3.5" fill="var(--color-prior)" stroke="var(--card)" strokeWidth="1.5" data-dot="prior"></circle>
                            <circle className="duration-300 ease-out group-data-[compare=off]/plot:opacity-0 group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="268" cy="128.29" r="3.5" fill="var(--color-prior)" stroke="var(--card)" strokeWidth="1.5" data-dot="prior"></circle>
                            <circle className="duration-300 ease-out group-data-[compare=off]/plot:opacity-0 group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="340" cy="130.67" r="3.5" fill="var(--color-prior)" stroke="var(--card)" strokeWidth="1.5" data-dot="prior"></circle>
                            <circle className="duration-300 ease-out group-data-[compare=off]/plot:opacity-0 group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="412" cy="121.4475" r="3.5" fill="var(--color-prior)" stroke="var(--card)" strokeWidth="1.5" data-dot="prior"></circle>
                            <circle className="duration-300 ease-out group-data-[compare=off]/plot:opacity-0 group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="484" cy="141.38000000000002" r="3.5" fill="var(--color-prior)" stroke="var(--card)" strokeWidth="1.5" data-dot="prior"></circle>
                            <circle className="duration-300 ease-out group-data-[compare=off]/plot:opacity-0 group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="556" cy="147.6275" r="3.5" fill="var(--color-prior)" stroke="var(--card)" strokeWidth="1.5" data-dot="prior"></circle>
                            <circle className="duration-300 ease-out group-data-[compare=off]/plot:opacity-0 group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="628" cy="124.71999999999998" r="3.5" fill="var(--color-prior)" stroke="var(--card)" strokeWidth="1.5" data-dot="prior"></circle>
                            <circle className="duration-300 ease-out group-data-[compare=off]/plot:opacity-0 group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="700" cy="110.1425" r="3.5" fill="var(--color-prior)" stroke="var(--card)" strokeWidth="1.5" data-dot="prior"></circle>
                            <circle className="duration-300 ease-out group-data-[compare=off]/plot:opacity-0 group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="772" cy="103.00250000000001" r="3.5" fill="var(--color-prior)" stroke="var(--card)" strokeWidth="1.5" data-dot="prior"></circle>
                            <circle className="duration-300 ease-out group-data-[compare=off]/plot:opacity-0 group-data-[points=off]/plot:opacity-0 group-data-[points=off]/plot:scale-50 origin-center pointer-events-none transform-fill transition-[opacity,scale]" cx="844" cy="127.99249999999999" r="3.5" fill="var(--color-prior)" stroke="var(--card)" strokeWidth="1.5" data-dot="prior"></circle>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                          <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="52" y="274" dy="0.71em" textAnchor="middle">
                                {"Jan"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="124" y="274" dy="0.71em" textAnchor="middle">
                                {"Feb"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="196" y="274" dy="0.71em" textAnchor="middle">
                                {"Mar"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="268" y="274" dy="0.71em" textAnchor="middle">
                                {"Apr"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="340" y="274" dy="0.71em" textAnchor="middle">
                                {"May"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="412" y="274" dy="0.71em" textAnchor="middle">
                                {"Jun"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="484" y="274" dy="0.71em" textAnchor="middle">
                                {"Jul"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="556" y="274" dy="0.71em" textAnchor="middle">
                                {"Aug"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="628" y="274" dy="0.71em" textAnchor="middle">
                                {"Sep"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="700" y="274" dy="0.71em" textAnchor="middle">
                                {"Oct"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="772" y="274" dy="0.71em" textAnchor="middle">
                                {"Nov"}
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="fill-muted-foreground" x="844" y="274" dy="0.71em" textAnchor="middle">
                                {"Dec"}
                              </text>
                            </g>
                          </g>
                          <g className="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width="36" orientation="left" height="238" stroke="none" x="22" y="258" textAnchor="end" fill="#666">
                                <tspan x="22" dy="0.355em">
                                  {"0"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width="36" orientation="left" height="238" stroke="none" x="22" y="198.5" textAnchor="end" fill="#666">
                                <tspan x="22" dy="0.355em">
                                  {"200"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width="36" orientation="left" height="238" stroke="none" x="22" y="139" textAnchor="end" fill="#666">
                                <tspan x="22" dy="0.355em">
                                  {"400"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width="36" orientation="left" height="238" stroke="none" x="22" y="79.5" textAnchor="end" fill="#666">
                                <tspan x="22" dy="0.355em">
                                  {"600"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width="36" orientation="left" height="238" stroke="none" x="22" y="20" textAnchor="end" fill="#666">
                                <tspan x="22" dy="0.355em">
                                  {"800"}
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
          </div>
          <div className="sr-only">
            <table>
              <caption>
                {"Inbound leads per month, 2025 and 2024"}
              </caption>
              <thead>
                <tr>
                  <th scope="col">
                    {"Period"}
                  </th>
                  <th scope="col">
                    {"2025"}
                  </th>
                  <th scope="col">
                    {"2024"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    {"January"}
                  </th>
                  <td>
                    {"398"}
                  </td>
                  <td>
                    {"352"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"February"}
                  </th>
                  <td>
                    {"431"}
                  </td>
                  <td>
                    {"381"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"March"}
                  </th>
                  <td>
                    {"506"}
                  </td>
                  <td>
                    {"404"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"April"}
                  </th>
                  <td>
                    {"488"}
                  </td>
                  <td>
                    {"436"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"May"}
                  </th>
                  <td>
                    {"547"}
                  </td>
                  <td>
                    {"428"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"June"}
                  </th>
                  <td>
                    {"529"}
                  </td>
                  <td>
                    {"459"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"July"}
                  </th>
                  <td>
                    {"468"}
                  </td>
                  <td>
                    {"392"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"August"}
                  </th>
                  <td>
                    {"452"}
                  </td>
                  <td>
                    {"371"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"September"}
                  </th>
                  <td>
                    {"583"}
                  </td>
                  <td>
                    {"448"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"October"}
                  </th>
                  <td>
                    {"641"}
                  </td>
                  <td>
                    {"497"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"November"}
                  </th>
                  <td>
                    {"612"}
                  </td>
                  <td>
                    {"521"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {"December"}
                  </th>
                  <td>
                    {"503"}
                  </td>
                  <td>
                    {"437"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
        <CardFooter className="border-t">
          <div className="@md/leads:flex-row @md/leads:items-center @md/leads:justify-between flex flex-col gap-3 items-start w-full">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 items-center text-xs" aria-label="Series">
              <li className="animate-in duration-300 fade-in-0 flex gap-1.5 items-center motion-reduce:animate-none">
                <span className="bg-(--leads-current) rounded-full shrink-0 size-2" aria-hidden="true"></span>
                <span className="text-muted-foreground">
                  {"2025"}
                </span>
                <span className="font-medium tabular-nums text-foreground">
                  {"6,158"}
                </span>
              </li>
              <li className="animate-in duration-300 fade-in-0 flex gap-1.5 items-center motion-reduce:animate-none">
                <span className="bg-muted-foreground/50 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                <span className="text-muted-foreground">
                  {"2024"}
                </span>
                <span className="font-medium tabular-nums text-foreground">
                  {"5,126"}
                </span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-x-3 gap-y-2 items-center text-muted-foreground text-xs">
              <ul className="flex items-center text-xs" aria-label="Trend">
                <li className="animate-in duration-300 fade-in-0 flex gap-1.5 items-center motion-reduce:animate-none">
                  <svg className="h-0.5 shrink-0 text-(--leads-current) w-4" aria-hidden="true" viewBox="0 0 16 2">
                    <line x1="0" x2="16" y1="1" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"></line>
                  </svg>
                  <span className="text-muted-foreground">
                    {"Linear trend"}
                  </span>
                  <span className="font-medium tabular-nums text-foreground">
                    {"+13 a month"}
                  </span>
                </li>
              </ul>
              <span className="bg-muted-foreground/40 rounded-full size-1" aria-hidden="true"></span>
              <span>
                {"Updated Jan 6, 09:30"}
              </span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
