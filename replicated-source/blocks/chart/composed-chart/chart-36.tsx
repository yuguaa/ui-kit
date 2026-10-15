import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <div className="@container max-w-5xl w-full">
        <div className="flex flex-col gap-4">
          <Frame className="min-w-0" spacing="default">
            <header className="flex flex-col gap-3 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-1 min-w-0">
                <div className="flex gap-2 items-center min-w-0">
                  <h2 className="font-medium min-w-0 text-base truncate">
                    {"fraud-scorer"}
                    <span className="font-mono font-normal text-muted-foreground">
                      {"v3.9.0"}
                    </span>
                  </h2>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                    {"Waiting"}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                  <span className="flex gap-1 items-center min-w-0">
                    <span className="font-mono min-w-0 text-foreground text-xs truncate">
                      {"DEP-4128"}
                    </span>
                    <Button type="button" tabIndex="0" aria-label="Copy deploy ID" extracted="1">
                      <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </svg>
                    </Button>
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                    {"Production"}
                  </Badge>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="font-mono">
                    {"prod-us-east-1"}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-center shrink-0">
                <Button type="button" tabIndex="0">
                  <svg className="lucide lucide-rocket" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RocketIcon" tabler="IconRocket" hugeicons="RocketIcon" phosphor="RocketIcon" remixicon="RiRocketLine" aria-hidden="true">
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                    <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                  </svg>
                  {"Promote"}
                </Button>
                <Button type="button" tabIndex="0">
                  <svg className="lucide lucide-undo-2 lucide-undo2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Undo2Icon" tabler="IconArrowBackUp" hugeicons="Undo02Icon" phosphor="ArrowUUpLeftIcon" remixicon="RiArrowGoBackLine" aria-hidden="true">
                    <path d="M9 14 4 9l5-5"></path>
                    <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path>
                  </svg>
                  {"Roll back"}
                </Button>
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false">
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
              <div className="gap-3 grid grid-cols-2 sm:grid-cols-5">
                <div className="col-span-2 flex flex-col gap-0.5 min-w-0 sm:col-span-1">
                  <span className="text-muted-foreground text-xs">
                    {"Verdict"}
                  </span>
                  <span className="flex h-7 items-center">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      {"Within limits"}
                    </Badge>
                  </span>
                  <span className="tabular-nums text-muted-foreground text-xs truncate">
                    {"vs v3.8.2 for 5:30"}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-muted-foreground text-xs">
                    {"Error rate"}
                  </span>
                  <span className="font-semibold tabular-nums text-lg">
                    {"0.05%"}
                  </span>
                  <span className="tabular-nums text-muted-foreground text-xs truncate">
                    {"Baseline 0.04%"}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-muted-foreground text-xs">
                    {"p95 latency"}
                  </span>
                  <span className="font-semibold tabular-nums text-lg">
                    {"44 ms"}
                  </span>
                  <span className="tabular-nums text-muted-foreground text-xs truncate">
                    {"Baseline 42 ms"}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-muted-foreground text-xs">
                    {"p99 latency"}
                  </span>
                  <span className="font-semibold tabular-nums text-lg">
                    {"62 ms"}
                  </span>
                  <span className="tabular-nums text-muted-foreground text-xs truncate">
                    {"Baseline 60 ms"}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-muted-foreground text-xs">
                    {"Requests (rpm)"}
                  </span>
                  <span className="font-semibold tabular-nums text-lg">
                    {"3,676"}
                  </span>
                  <span className="tabular-nums text-muted-foreground text-xs truncate">
                    {"Baseline 3,680"}
                  </span>
                </div>
              </div>
            </FramePanel>
          </Frame>
          <div className="@3xl:grid-cols-2 gap-4 grid">
            <Frame className="min-w-0" spacing="default">
              <header className="flex flex-col gap-3 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-px">
                  <div className="font-semibold text-sm">
                    {"Error Rate"}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {"Share of failed requests"}
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1 items-center text-muted-foreground text-xs">
                  <span className="font-mono gap-1.5 inline-flex items-center">
                    <span className="bg-sky-500 rounded-full size-2" aria-hidden="true"></span>
                    {"v3.9.0"}
                  </span>
                  <span className="font-mono gap-1.5 inline-flex items-center">
                    <span className="bg-slate-500 rounded-full size-2" aria-hidden="true"></span>
                    {"v3.8.2"}
                  </span>
                </div>
              </header>
              <FramePanel>
                <ChartContainer>
                <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden [&_[class*=recharts-zIndex-layer]]:outline-hidden aspect-video cn-chart flex h-40 justify-center min-w-0 text-xs w-full" data-chart="chart-_r_7_">
                  <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_7_] {\n  --color-release: var(--color-sky-500);\n  --color-baseline: var(--color-slate-500);\n}\n\n\n.dark [data-chart=chart-_r_7_] {\n  --color-release: var(--color-sky-500);\n  --color-baseline: var(--color-slate-500);\n}\n" }} />
                  <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                    <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                      <div className="recharts-wrapper" width="462" height="160" style={{position: "relative", cursor: "default", width: "462px", height: "160px"}}>
                        <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                        <svg className="recharts-surface" role="application" tabIndex="0" width="462" height="160" viewBox="0 0 462 160" style={{width: "100%", height: "100%", display: "block"}}>
                          <title></title>
                          <desc></desc>
                          <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                            <g className="recharts-cartesian-grid">
                              <g className="recharts-cartesian-grid-horizontal">
                                <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="8" y="12" width="446" height="118" x1="8" y1="130" x2="454" y2="130"></line>
                                <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="8" y="12" width="446" height="118" x1="8" y1="99.21739130434781" x2="454" y2="99.21739130434781"></line>
                                <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="8" y="12" width="446" height="118" x1="8" y1="68.43478260869566" x2="454" y2="68.43478260869566"></line>
                                <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="8" y="12" width="446" height="118" x1="8" y1="12" x2="454" y2="12"></line>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                          <defs>
                            <clippath id="recharts1-clip">
                              <rect x="8" y="12" height="118" width="446"></rect>
                            </clippath>
                          </defs>
                          <defs>
                            <lineargradient id="_r_6_-release" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="var(--color-release)" stopOpacity="0.2"></stop>
                              <stop offset="100%" stopColor="var(--color-release)" stopOpacity="0"></stop>
                            </lineargradient>
                          </defs>
                          <g className="recharts-zIndex-layer_100" tabIndex="-1">
                            <g className="recharts-area recharts-layer">
                              <g className="recharts-layer">
                                <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#_r_6_-release)" fillOpacity="0.6" height="118" stroke="none" width="446" id="recharts-area-_r_a_" d="M8,120.765C12.646,119.739,17.292,118.713,21.938,118.713C26.583,118.713,31.229,119.169,35.875,119.397C40.521,119.625,45.167,119.853,49.813,120.081C54.458,120.309,59.104,120.765,63.75,120.765C68.396,120.765,73.042,118.713,77.688,118.713C82.333,118.713,86.979,119.169,91.625,119.397C96.271,119.625,100.917,119.853,105.563,120.081C110.208,120.309,114.854,120.765,119.5,120.765C124.146,120.765,128.792,118.713,133.438,118.713C138.083,118.713,142.729,119.169,147.375,119.397C152.021,119.625,156.667,119.853,161.313,120.081C165.958,120.309,170.604,120.765,175.25,120.765C179.896,120.765,184.542,118.713,189.188,118.713C193.833,118.713,198.479,119.169,203.125,119.397C207.771,119.625,212.417,119.853,217.063,120.081C221.708,120.309,226.354,120.765,231,120.765C235.646,120.765,240.292,118.713,244.938,118.713C249.583,118.713,254.229,119.169,258.875,119.397C263.521,119.625,268.167,119.853,272.813,120.081C277.458,120.309,282.104,120.765,286.75,120.765C291.396,120.765,296.042,118.713,300.688,118.713C305.333,118.713,309.979,119.169,314.625,119.397C319.271,119.625,323.917,119.853,328.563,120.081C333.208,120.309,337.854,120.765,342.5,120.765C347.146,120.765,351.792,118.713,356.438,118.713C361.083,118.713,365.729,119.169,370.375,119.397C375.021,119.625,379.667,119.853,384.313,120.081C388.958,120.309,393.604,120.765,398.25,120.765C402.896,120.765,407.542,118.713,412.188,118.713C416.833,118.713,421.479,119.169,426.125,119.397C430.771,119.625,435.417,119.853,440.063,120.081C444.708,120.309,449.354,120.537,454,120.765L454,130C449.354,130,444.708,130,440.063,130C435.417,130,430.771,130,426.125,130C421.479,130,416.833,130,412.188,130C407.542,130,402.896,130,398.25,130C393.604,130,388.958,130,384.313,130C379.667,130,375.021,130,370.375,130C365.729,130,361.083,130,356.438,130C351.792,130,347.146,130,342.5,130C337.854,130,333.208,130,328.563,130C323.917,130,319.271,130,314.625,130C309.979,130,305.333,130,300.688,130C296.042,130,291.396,130,286.75,130C282.104,130,277.458,130,272.813,130C268.167,130,263.521,130,258.875,130C254.229,130,249.583,130,244.938,130C240.292,130,235.646,130,231,130C226.354,130,221.708,130,217.063,130C212.417,130,207.771,130,203.125,130C198.479,130,193.833,130,189.188,130C184.542,130,179.896,130,175.25,130C170.604,130,165.958,130,161.313,130C156.667,130,152.021,130,147.375,130C142.729,130,138.083,130,133.438,130C128.792,130,124.146,130,119.5,130C114.854,130,110.208,130,105.563,130C100.917,130,96.271,130,91.625,130C86.979,130,82.333,130,77.688,130C73.042,130,68.396,130,63.75,130C59.104,130,54.458,130,49.813,130C45.167,130,40.521,130,35.875,130C31.229,130,26.583,130,21.938,130C17.292,130,12.646,130,8,130Z"></path>
                                <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="118" stroke="transparent" width="446" d="M8,120.765C12.646,119.739,17.292,118.713,21.938,118.713C26.583,118.713,31.229,119.169,35.875,119.397C40.521,119.625,45.167,119.853,49.813,120.081C54.458,120.309,59.104,120.765,63.75,120.765C68.396,120.765,73.042,118.713,77.688,118.713C82.333,118.713,86.979,119.169,91.625,119.397C96.271,119.625,100.917,119.853,105.563,120.081C110.208,120.309,114.854,120.765,119.5,120.765C124.146,120.765,128.792,118.713,133.438,118.713C138.083,118.713,142.729,119.169,147.375,119.397C152.021,119.625,156.667,119.853,161.313,120.081C165.958,120.309,170.604,120.765,175.25,120.765C179.896,120.765,184.542,118.713,189.188,118.713C193.833,118.713,198.479,119.169,203.125,119.397C207.771,119.625,212.417,119.853,217.063,120.081C221.708,120.309,226.354,120.765,231,120.765C235.646,120.765,240.292,118.713,244.938,118.713C249.583,118.713,254.229,119.169,258.875,119.397C263.521,119.625,268.167,119.853,272.813,120.081C277.458,120.309,282.104,120.765,286.75,120.765C291.396,120.765,296.042,118.713,300.688,118.713C305.333,118.713,309.979,119.169,314.625,119.397C319.271,119.625,323.917,119.853,328.563,120.081C333.208,120.309,337.854,120.765,342.5,120.765C347.146,120.765,351.792,118.713,356.438,118.713C361.083,118.713,365.729,119.169,370.375,119.397C375.021,119.625,379.667,119.853,384.313,120.081C388.958,120.309,393.604,120.765,398.25,120.765C402.896,120.765,407.542,118.713,412.188,118.713C416.833,118.713,421.479,119.169,426.125,119.397C430.771,119.625,435.417,119.853,440.063,120.081C444.708,120.309,449.354,120.537,454,120.765"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_400" tabIndex="-1">
                            <g className="recharts-layer recharts-reference-line">
                              <line className="recharts-reference-line-line" y="0.5" stroke="var(--destructive)" strokeDasharray="4 4" fill="none" fillOpacity="1" strokeWidth="1" x1="8" y1="27.391304347826075" x2="454" y2="27.391304347826075"></line>
                            </g>
                            <g className="recharts-layer recharts-reference-line">
                              <line className="recharts-reference-line-line" x="0:00" stroke="var(--muted-foreground)" strokeDasharray="3 3" fill="none" fillOpacity="1" strokeWidth="1" x1="8" y1="130" x2="8" y2="12"></line>
                            </g>
                            <g className="recharts-layer recharts-reference-line">
                              <line className="recharts-reference-line-line" x="2:30" stroke="var(--muted-foreground)" strokeDasharray="3 3" fill="none" fillOpacity="1" strokeWidth="1" x1="217.0625" y1="130" x2="217.0625" y2="12"></line>
                            </g>
                            <g className="recharts-layer recharts-line">
                              <g className="recharts-layer recharts-shape">
                                <path className="recharts-curve recharts-line-curve" stroke="var(--color-release)" strokeWidth="2" fill="none" id="recharts-line-_r_b_" height="118" width="446" d="M8,120.765C12.646,119.739,17.292,118.713,21.938,118.713C26.583,118.713,31.229,119.169,35.875,119.397C40.521,119.625,45.167,119.853,49.813,120.081C54.458,120.309,59.104,120.765,63.75,120.765C68.396,120.765,73.042,118.713,77.688,118.713C82.333,118.713,86.979,119.169,91.625,119.397C96.271,119.625,100.917,119.853,105.563,120.081C110.208,120.309,114.854,120.765,119.5,120.765C124.146,120.765,128.792,118.713,133.438,118.713C138.083,118.713,142.729,119.169,147.375,119.397C152.021,119.625,156.667,119.853,161.313,120.081C165.958,120.309,170.604,120.765,175.25,120.765C179.896,120.765,184.542,118.713,189.188,118.713C193.833,118.713,198.479,119.169,203.125,119.397C207.771,119.625,212.417,119.853,217.063,120.081C221.708,120.309,226.354,120.765,231,120.765C235.646,120.765,240.292,118.713,244.938,118.713C249.583,118.713,254.229,119.169,258.875,119.397C263.521,119.625,268.167,119.853,272.813,120.081C277.458,120.309,282.104,120.765,286.75,120.765C291.396,120.765,296.042,118.713,300.688,118.713C305.333,118.713,309.979,119.169,314.625,119.397C319.271,119.625,323.917,119.853,328.563,120.081C333.208,120.309,337.854,120.765,342.5,120.765C347.146,120.765,351.792,118.713,356.438,118.713C361.083,118.713,365.729,119.169,370.375,119.397C375.021,119.625,379.667,119.853,384.313,120.081C388.958,120.309,393.604,120.765,398.25,120.765C402.896,120.765,407.542,118.713,412.188,118.713C416.833,118.713,421.479,119.169,426.125,119.397C430.771,119.625,435.417,119.853,440.063,120.081C444.708,120.309,449.354,120.537,454,120.765"></path>
                              </g>
                            </g>
                            <g className="recharts-layer recharts-line">
                              <g className="recharts-layer recharts-shape">
                                <path className="recharts-curve recharts-line-curve" stroke="var(--color-baseline)" strokeDasharray="4 4" strokeWidth="2" fill="none" id="recharts-line-_r_c_" height="118" width="446" d="M8,122.612C12.646,122.339,17.292,122.065,21.938,121.791C26.583,121.518,31.229,120.97,35.875,120.97C40.521,120.97,45.167,122.202,49.813,122.202C54.458,122.202,59.104,121.381,63.75,121.381C68.396,121.381,73.042,122.612,77.688,122.612C82.333,122.612,86.979,122.065,91.625,121.791C96.271,121.518,100.917,120.97,105.563,120.97C110.208,120.97,114.854,122.202,119.5,122.202C124.146,122.202,128.792,121.381,133.438,121.381C138.083,121.381,142.729,122.612,147.375,122.612C152.021,122.612,156.667,122.065,161.313,121.791C165.958,121.518,170.604,120.97,175.25,120.97C179.896,120.97,184.542,122.202,189.188,122.202C193.833,122.202,198.479,121.381,203.125,121.381C207.771,121.381,212.417,122.612,217.063,122.612C221.708,122.612,226.354,122.065,231,121.791C235.646,121.518,240.292,120.97,244.938,120.97C249.583,120.97,254.229,122.202,258.875,122.202C263.521,122.202,268.167,121.381,272.813,121.381C277.458,121.381,282.104,122.612,286.75,122.612C291.396,122.612,296.042,122.065,300.688,121.791C305.333,121.518,309.979,120.97,314.625,120.97C319.271,120.97,323.917,122.202,328.563,122.202C333.208,122.202,337.854,121.381,342.5,121.381C347.146,121.381,351.792,122.612,356.438,122.612C361.083,122.612,365.729,122.065,370.375,121.791C375.021,121.518,379.667,120.97,384.313,120.97C388.958,120.97,393.604,122.202,398.25,122.202C402.896,122.202,407.542,121.381,412.188,121.381C416.833,121.381,421.479,122.612,426.125,122.612C430.771,122.612,435.417,122.065,440.063,121.791C444.708,121.518,449.354,121.244,454,120.97"></path>
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
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="446" stroke="none" x="49.8125" y="144" textAnchor="middle" fill="#666">
                                  <tspan x="49.8125" dy="0.71em">
                                    {"0:30"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="446" stroke="none" x="105.5625" y="144" textAnchor="middle" fill="#666">
                                  <tspan x="105.5625" dy="0.71em">
                                    {"1:10"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="446" stroke="none" x="175.25" y="144" textAnchor="middle" fill="#666">
                                  <tspan x="175.25" dy="0.71em">
                                    {"2:00"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="446" stroke="none" x="244.9375" y="144" textAnchor="middle" fill="#666">
                                  <tspan x="244.9375" dy="0.71em">
                                    {"2:50"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="446" stroke="none" x="314.625" y="144" textAnchor="middle" fill="#666">
                                  <tspan x="314.625" dy="0.71em">
                                    {"3:40"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="446" stroke="none" x="384.3125" y="144" textAnchor="middle" fill="#666">
                                  <tspan x="384.3125" dy="0.71em">
                                    {"4:30"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="446" stroke="none" x="449.265625" y="144" textAnchor="middle" fill="#666">
                                  <tspan x="449.265625" dy="0.71em">
                                    {"5:20"}
                                  </tspan>
                                </text>
                              </g>
                            </g>
                            <text className="recharts-label recharts-text" offset="5" x="449" y="32.39130434782608" textAnchor="end" fill="var(--destructive)">
                              <tspan x="449" dy="0.71em">
                                {"Limit 0.50%"}
                              </tspan>
                            </text>
                            <text className="recharts-label recharts-text" offset="5" x="13" y="17" textAnchor="start" fill="var(--muted-foreground)">
                              <tspan x="13" dy="0.71em">
                                {"25%"}
                              </tspan>
                            </text>
                            <text className="recharts-label recharts-text" offset="5" x="222.0625" y="17" textAnchor="start" fill="var(--muted-foreground)">
                              <tspan x="222.0625" dy="0.71em">
                                {"50%"}
                              </tspan>
                            </text>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                </ChartContainer>
              </FramePanel>
            </Frame>
            <Frame className="min-w-0" spacing="default">
              <header className="flex flex-col gap-3 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-px">
                  <div className="font-semibold text-sm">
                    {"Latency"}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {"p95 in milliseconds"}
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1 items-center text-muted-foreground text-xs">
                  <span className="font-mono gap-1.5 inline-flex items-center">
                    <span className="bg-sky-500 rounded-full size-2" aria-hidden="true"></span>
                    {"v3.9.0"}
                  </span>
                  <span className="font-mono gap-1.5 inline-flex items-center">
                    <span className="bg-slate-500 rounded-full size-2" aria-hidden="true"></span>
                    {"v3.8.2"}
                  </span>
                </div>
              </header>
              <FramePanel>
                <ChartContainer>
                <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden [&_[class*=recharts-zIndex-layer]]:outline-hidden aspect-video cn-chart flex h-40 justify-center min-w-0 text-xs w-full" data-chart="chart-_r_9_">
                  <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_9_] {\n  --color-release: var(--color-sky-500);\n  --color-baseline: var(--color-slate-500);\n}\n\n\n.dark [data-chart=chart-_r_9_] {\n  --color-release: var(--color-sky-500);\n  --color-baseline: var(--color-slate-500);\n}\n" }} />
                  <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                    <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                      <div className="recharts-wrapper" width="462" height="160" style={{position: "relative", cursor: "default", width: "462px", height: "160px"}}>
                        <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                        <svg className="recharts-surface" role="application" tabIndex="0" width="462" height="160" viewBox="0 0 462 160" style={{width: "100%", height: "100%", display: "block"}}>
                          <title></title>
                          <desc></desc>
                          <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                            <g className="recharts-cartesian-grid">
                              <g className="recharts-cartesian-grid-horizontal">
                                <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="8" y="12" width="446" height="118" x1="8" y1="130" x2="454" y2="130"></line>
                                <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="8" y="12" width="446" height="118" x1="8" y1="97.93478260869566" x2="454" y2="97.93478260869566"></line>
                                <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="8" y="12" width="446" height="118" x1="8" y1="65.86956521739131" x2="454" y2="65.86956521739131"></line>
                                <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="8" y="12" width="446" height="118" x1="8" y1="12" x2="454" y2="12"></line>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                          <defs>
                            <clippath id="recharts2-clip">
                              <rect x="8" y="12" height="118" width="446"></rect>
                            </clippath>
                          </defs>
                          <defs>
                            <lineargradient id="_r_8_-release" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="var(--color-release)" stopOpacity="0.2"></stop>
                              <stop offset="100%" stopColor="var(--color-release)" stopOpacity="0"></stop>
                            </lineargradient>
                          </defs>
                          <g className="recharts-zIndex-layer_100" tabIndex="-1">
                            <g className="recharts-area recharts-layer">
                              <g className="recharts-layer">
                                <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#_r_8_-release)" fillOpacity="0.6" height="118" stroke="none" width="446" id="recharts-area-_r_d_" d="M8,77.054C12.646,76.319,17.292,75.583,21.938,74.848C26.583,74.112,31.229,72.642,35.875,72.642C40.521,72.642,45.167,75.951,49.813,75.951C54.458,75.951,59.104,73.745,63.75,73.745C68.396,73.745,73.042,77.054,77.688,77.054C82.333,77.054,86.979,75.583,91.625,74.848C96.271,74.112,100.917,72.642,105.563,72.642C110.208,72.642,114.854,75.951,119.5,75.951C124.146,75.951,128.792,73.745,133.438,73.745C138.083,73.745,142.729,77.054,147.375,77.054C152.021,77.054,156.667,75.583,161.313,74.848C165.958,74.112,170.604,72.642,175.25,72.642C179.896,72.642,184.542,75.951,189.188,75.951C193.833,75.951,198.479,73.745,203.125,73.745C207.771,73.745,212.417,75.823,217.063,75.823C221.708,75.823,226.354,74.318,231,73.565C235.646,72.813,240.292,71.308,244.938,71.308C249.583,71.308,254.229,74.694,258.875,74.694C263.521,74.694,268.167,72.437,272.813,72.437C277.458,72.437,282.104,75.823,286.75,75.823C291.396,75.823,296.042,74.318,300.688,73.565C305.333,72.813,309.979,71.308,314.625,71.308C319.271,71.308,323.917,74.694,328.563,74.694C333.208,74.694,337.854,72.437,342.5,72.437C347.146,72.437,351.792,75.823,356.438,75.823C361.083,75.823,365.729,74.318,370.375,73.565C375.021,72.813,379.667,71.308,384.313,71.308C388.958,71.308,393.604,74.694,398.25,74.694C402.896,74.694,407.542,72.437,412.188,72.437C416.833,72.437,421.479,75.823,426.125,75.823C430.771,75.823,435.417,74.318,440.063,73.565C444.708,72.813,449.354,72.06,454,71.308L454,130C449.354,130,444.708,130,440.063,130C435.417,130,430.771,130,426.125,130C421.479,130,416.833,130,412.188,130C407.542,130,402.896,130,398.25,130C393.604,130,388.958,130,384.313,130C379.667,130,375.021,130,370.375,130C365.729,130,361.083,130,356.438,130C351.792,130,347.146,130,342.5,130C337.854,130,333.208,130,328.563,130C323.917,130,319.271,130,314.625,130C309.979,130,305.333,130,300.688,130C296.042,130,291.396,130,286.75,130C282.104,130,277.458,130,272.813,130C268.167,130,263.521,130,258.875,130C254.229,130,249.583,130,244.938,130C240.292,130,235.646,130,231,130C226.354,130,221.708,130,217.063,130C212.417,130,207.771,130,203.125,130C198.479,130,193.833,130,189.188,130C184.542,130,179.896,130,175.25,130C170.604,130,165.958,130,161.313,130C156.667,130,152.021,130,147.375,130C142.729,130,138.083,130,133.438,130C128.792,130,124.146,130,119.5,130C114.854,130,110.208,130,105.563,130C100.917,130,96.271,130,91.625,130C86.979,130,82.333,130,77.688,130C73.042,130,68.396,130,63.75,130C59.104,130,54.458,130,49.813,130C45.167,130,40.521,130,35.875,130C31.229,130,26.583,130,21.938,130C17.292,130,12.646,130,8,130Z"></path>
                                <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="118" stroke="transparent" width="446" d="M8,77.054C12.646,76.319,17.292,75.583,21.938,74.848C26.583,74.112,31.229,72.642,35.875,72.642C40.521,72.642,45.167,75.951,49.813,75.951C54.458,75.951,59.104,73.745,63.75,73.745C68.396,73.745,73.042,77.054,77.688,77.054C82.333,77.054,86.979,75.583,91.625,74.848C96.271,74.112,100.917,72.642,105.563,72.642C110.208,72.642,114.854,75.951,119.5,75.951C124.146,75.951,128.792,73.745,133.438,73.745C138.083,73.745,142.729,77.054,147.375,77.054C152.021,77.054,156.667,75.583,161.313,74.848C165.958,74.112,170.604,72.642,175.25,72.642C179.896,72.642,184.542,75.951,189.188,75.951C193.833,75.951,198.479,73.745,203.125,73.745C207.771,73.745,212.417,75.823,217.063,75.823C221.708,75.823,226.354,74.318,231,73.565C235.646,72.813,240.292,71.308,244.938,71.308C249.583,71.308,254.229,74.694,258.875,74.694C263.521,74.694,268.167,72.437,272.813,72.437C277.458,72.437,282.104,75.823,286.75,75.823C291.396,75.823,296.042,74.318,300.688,73.565C305.333,72.813,309.979,71.308,314.625,71.308C319.271,71.308,323.917,74.694,328.563,74.694C333.208,74.694,337.854,72.437,342.5,72.437C347.146,72.437,351.792,75.823,356.438,75.823C361.083,75.823,365.729,74.318,370.375,73.565C375.021,72.813,379.667,71.308,384.313,71.308C388.958,71.308,393.604,74.694,398.25,74.694C402.896,74.694,407.542,72.437,412.188,72.437C416.833,72.437,421.479,75.823,426.125,75.823C430.771,75.823,435.417,74.318,440.063,73.565C444.708,72.813,449.354,72.06,454,71.308"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_400" tabIndex="-1">
                            <g className="recharts-layer recharts-reference-line">
                              <line className="recharts-reference-line-line" y="80" stroke="var(--destructive)" strokeDasharray="4 4" fill="none" fillOpacity="1" strokeWidth="1" x1="8" y1="27.39130434782609" x2="454" y2="27.39130434782609"></line>
                            </g>
                            <g className="recharts-layer recharts-reference-line">
                              <line className="recharts-reference-line-line" x="0:00" stroke="var(--muted-foreground)" strokeDasharray="3 3" fill="none" fillOpacity="1" strokeWidth="1" x1="8" y1="130" x2="8" y2="12"></line>
                            </g>
                            <g className="recharts-layer recharts-reference-line">
                              <line className="recharts-reference-line-line" x="2:30" stroke="var(--muted-foreground)" strokeDasharray="3 3" fill="none" fillOpacity="1" strokeWidth="1" x1="217.0625" y1="130" x2="217.0625" y2="12"></line>
                            </g>
                            <g className="recharts-layer recharts-line">
                              <g className="recharts-layer recharts-shape">
                                <path className="recharts-curve recharts-line-curve" stroke="var(--color-release)" strokeWidth="2" fill="none" id="recharts-line-_r_e_" height="118" width="446" d="M8,77.054C12.646,76.319,17.292,75.583,21.938,74.848C26.583,74.112,31.229,72.642,35.875,72.642C40.521,72.642,45.167,75.951,49.813,75.951C54.458,75.951,59.104,73.745,63.75,73.745C68.396,73.745,73.042,77.054,77.688,77.054C82.333,77.054,86.979,75.583,91.625,74.848C96.271,74.112,100.917,72.642,105.563,72.642C110.208,72.642,114.854,75.951,119.5,75.951C124.146,75.951,128.792,73.745,133.438,73.745C138.083,73.745,142.729,77.054,147.375,77.054C152.021,77.054,156.667,75.583,161.313,74.848C165.958,74.112,170.604,72.642,175.25,72.642C179.896,72.642,184.542,75.951,189.188,75.951C193.833,75.951,198.479,73.745,203.125,73.745C207.771,73.745,212.417,75.823,217.063,75.823C221.708,75.823,226.354,74.318,231,73.565C235.646,72.813,240.292,71.308,244.938,71.308C249.583,71.308,254.229,74.694,258.875,74.694C263.521,74.694,268.167,72.437,272.813,72.437C277.458,72.437,282.104,75.823,286.75,75.823C291.396,75.823,296.042,74.318,300.688,73.565C305.333,72.813,309.979,71.308,314.625,71.308C319.271,71.308,323.917,74.694,328.563,74.694C333.208,74.694,337.854,72.437,342.5,72.437C347.146,72.437,351.792,75.823,356.438,75.823C361.083,75.823,365.729,74.318,370.375,73.565C375.021,72.813,379.667,71.308,384.313,71.308C388.958,71.308,393.604,74.694,398.25,74.694C402.896,74.694,407.542,72.437,412.188,72.437C416.833,72.437,421.479,75.823,426.125,75.823C430.771,75.823,435.417,74.318,440.063,73.565C444.708,72.813,449.354,72.06,454,71.308"></path>
                              </g>
                            </g>
                            <g className="recharts-layer recharts-line">
                              <g className="recharts-layer recharts-shape">
                                <path className="recharts-curve recharts-line-curve" stroke="var(--color-baseline)" strokeDasharray="4 4" strokeWidth="2" fill="none" id="recharts-line-_r_f_" height="118" width="446" d="M8,78.285C12.646,77.806,17.292,77.328,21.938,76.849C26.583,76.37,31.229,75.891,35.875,75.412C40.521,74.933,45.167,73.976,49.813,73.976C54.458,73.976,59.104,78.285,63.75,78.285C68.396,78.285,73.042,77.328,77.688,76.849C82.333,76.37,86.979,75.891,91.625,75.412C96.271,74.933,100.917,73.976,105.563,73.976C110.208,73.976,114.854,78.285,119.5,78.285C124.146,78.285,128.792,77.328,133.438,76.849C138.083,76.37,142.729,75.891,147.375,75.412C152.021,74.933,156.667,73.976,161.313,73.976C165.958,73.976,170.604,78.285,175.25,78.285C179.896,78.285,184.542,77.328,189.188,76.849C193.833,76.37,198.479,75.891,203.125,75.412C207.771,74.933,212.417,73.976,217.063,73.976C221.708,73.976,226.354,78.285,231,78.285C235.646,78.285,240.292,77.328,244.938,76.849C249.583,76.37,254.229,75.891,258.875,75.412C263.521,74.933,268.167,73.976,272.813,73.976C277.458,73.976,282.104,78.285,286.75,78.285C291.396,78.285,296.042,77.328,300.688,76.849C305.333,76.37,309.979,75.891,314.625,75.412C319.271,74.933,323.917,73.976,328.563,73.976C333.208,73.976,337.854,78.285,342.5,78.285C347.146,78.285,351.792,77.328,356.438,76.849C361.083,76.37,365.729,75.891,370.375,75.412C375.021,74.933,379.667,73.976,384.313,73.976C388.958,73.976,393.604,78.285,398.25,78.285C402.896,78.285,407.542,77.328,412.188,76.849C416.833,76.37,421.479,75.891,426.125,75.412C430.771,74.933,435.417,73.976,440.063,73.976C444.708,73.976,449.354,76.13,454,78.285"></path>
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
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="446" stroke="none" x="49.8125" y="144" textAnchor="middle" fill="#666">
                                  <tspan x="49.8125" dy="0.71em">
                                    {"0:30"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="446" stroke="none" x="105.5625" y="144" textAnchor="middle" fill="#666">
                                  <tspan x="105.5625" dy="0.71em">
                                    {"1:10"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="446" stroke="none" x="175.25" y="144" textAnchor="middle" fill="#666">
                                  <tspan x="175.25" dy="0.71em">
                                    {"2:00"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="446" stroke="none" x="244.9375" y="144" textAnchor="middle" fill="#666">
                                  <tspan x="244.9375" dy="0.71em">
                                    {"2:50"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="446" stroke="none" x="314.625" y="144" textAnchor="middle" fill="#666">
                                  <tspan x="314.625" dy="0.71em">
                                    {"3:40"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="446" stroke="none" x="384.3125" y="144" textAnchor="middle" fill="#666">
                                  <tspan x="384.3125" dy="0.71em">
                                    {"4:30"}
                                  </tspan>
                                </text>
                              </g>
                              <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="446" stroke="none" x="449.265625" y="144" textAnchor="middle" fill="#666">
                                  <tspan x="449.265625" dy="0.71em">
                                    {"5:20"}
                                  </tspan>
                                </text>
                              </g>
                            </g>
                            <text className="recharts-label recharts-text" offset="5" x="449" y="32.39130434782609" textAnchor="end" fill="var(--destructive)">
                              <tspan x="449" dy="0.71em">
                                {"Limit 80 ms"}
                              </tspan>
                            </text>
                            <text className="recharts-label recharts-text" offset="5" x="13" y="17" textAnchor="start" fill="var(--muted-foreground)">
                              <tspan x="13" dy="0.71em">
                                {"25%"}
                              </tspan>
                            </text>
                            <text className="recharts-label recharts-text" offset="5" x="222.0625" y="17" textAnchor="start" fill="var(--muted-foreground)">
                              <tspan x="222.0625" dy="0.71em">
                                {"50%"}
                              </tspan>
                            </text>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                </ChartContainer>
              </FramePanel>
            </Frame>
          </div>
        </div>
      </div>
    </div>
  )
}
