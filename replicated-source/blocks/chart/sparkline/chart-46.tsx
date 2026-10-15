import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <div className="gap-2 grid lg:grid-cols-4 max-w-6xl sm:grid-cols-2 w-full xl:gap-3">
        <style>{`
@keyframes c46-rise-x { from { transform: scaleX(0); } }
@keyframes c46-rise-y { from { transform: scaleY(0); } }
@keyframes c46-fade { from { opacity: 0; } }
[data-c46-step="0"] { --c46-delay: 0ms; }
[data-c46-step="1"] { --c46-delay: 60ms; }
[data-c46-step="2"] { --c46-delay: 120ms; }
[data-c46-step="3"] { --c46-delay: 180ms; }
[data-c46-rise="x"] { transform-origin: left; animation: c46-rise-x 480ms cubic-bezier(0.23, 1, 0.32, 1) var(--c46-delay) backwards; }
[data-c46-rise="x"]:dir(rtl) { transform-origin: right; }
[data-c46-rise="y"] .recharts-surface { transform-origin: bottom; animation: c46-rise-y 480ms cubic-bezier(0.23, 1, 0.32, 1) var(--c46-delay) backwards; }
@media (prefers-reduced-motion: reduce) {
  [data-c46-rise="x"], [data-c46-rise="y"] .recharts-surface { animation-name: c46-fade; animation-duration: 200ms; }
}
`}</style>
        <Frame className="h-full min-w-0" spacing="default">
          <FramePanel className="flex flex-col gap-3 overflow-visible">
            <div className="[&_svg:not([class*=size-])]:size-4 flex gap-2 h-5 items-center min-w-0 text-muted-foreground">
              <svg className="lucide lucide-plug-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" aria-hidden="true">
                <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                <path d="m2 22 3-3"></path>
                <path d="M7.5 13.5 10 11"></path>
                <path d="M10.5 16.5 13 14"></path>
                <path d="m18 3-4 4h6l-4 4"></path>
              </svg>
              <span className="[text-box:trim-both_cap_alphabetic] font-medium min-w-0 overflow-x-clip text-ellipsis text-foreground text-sm whitespace-nowrap">
                Connection Health
              </span>
              <span className="[text-box:trim-both_cap_alphabetic] ms-auto shrink-0 text-xs">
                Now
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="flex gap-2.5 h-8 items-center min-w-0">
                <span className="[text-box:trim-both_cap_alphabetic] font-semibold tabular-nums text-2xl tracking-tight">
                  10
                  <span className="font-normal text-base text-muted-foreground">
                    <span aria-hidden="true">
                      /
                    </span>
                    <span className="sr-only">
                      of
                    </span>
                    13
                  </span>
                </span>
                <span className="[&_svg:not([class*=size-])]:size-3.5 font-medium font-mono gap-0.5 h-5 inline-flex items-center shrink-0 tabular-nums text-destructive text-sm">
                  <span className="flex" aria-hidden="true">
                    <svg className="lucide lucide-arrow-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </span>
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    2
                  </span>
                  <span className="sr-only">
                    down against yesterday
                  </span>
                </span>
              </div>
              <span className="tabular-nums text-muted-foreground text-xs">
                12 healthy yesterday
              </span>
            </div>
            <div className="flex flex-col gap-2.5 mt-auto">
              <div className="flex gap-1 h-2 w-full" role="img" aria-label="Connections by health: 10 healthy, 1 degraded, 1 failing, 1 paused" data-c46-rise="x" data-c46-step="0">
                <span className="bg-success h-full min-w-1 rounded-full" style={{flexGrow: "10"}}></span>
                <span className="bg-warning h-full min-w-1 rounded-full" style={{flexGrow: "1"}}></span>
                <span className="bg-destructive h-full min-w-1 rounded-full" style={{flexGrow: "1"}}></span>
                <span className="bg-muted-foreground/40 h-full min-w-1 rounded-full" style={{flexGrow: "1"}}></span>
              </div>
              <dl className="gap-x-4 gap-y-1 grid grid-cols-2">
                <div className="flex gap-1.5 h-4 items-center min-w-0 text-xs">
                  <span className="bg-success rounded-full shrink-0 size-2" aria-hidden="true"></span>
                  <dt className="[text-box:trim-both_cap_alphabetic] min-w-0 overflow-x-clip text-ellipsis text-muted-foreground whitespace-nowrap">
                    Healthy
                  </dt>
                  <dd className="[text-box:trim-both_cap_alphabetic] font-medium ms-auto tabular-nums">
                    10
                  </dd>
                </div>
                <div className="flex gap-1.5 h-4 items-center min-w-0 text-xs">
                  <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                  <dt className="[text-box:trim-both_cap_alphabetic] min-w-0 overflow-x-clip text-ellipsis text-muted-foreground whitespace-nowrap">
                    Degraded
                  </dt>
                  <dd className="[text-box:trim-both_cap_alphabetic] font-medium ms-auto tabular-nums">
                    1
                  </dd>
                </div>
                <div className="flex gap-1.5 h-4 items-center min-w-0 text-xs">
                  <span className="bg-destructive rounded-full shrink-0 size-2" aria-hidden="true"></span>
                  <dt className="[text-box:trim-both_cap_alphabetic] min-w-0 overflow-x-clip text-ellipsis text-muted-foreground whitespace-nowrap">
                    Failing
                  </dt>
                  <dd className="[text-box:trim-both_cap_alphabetic] font-medium ms-auto tabular-nums">
                    1
                  </dd>
                </div>
                <div className="flex gap-1.5 h-4 items-center min-w-0 text-xs">
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                  <dt className="[text-box:trim-both_cap_alphabetic] min-w-0 overflow-x-clip text-ellipsis text-muted-foreground whitespace-nowrap">
                    Paused
                  </dt>
                  <dd className="[text-box:trim-both_cap_alphabetic] font-medium ms-auto tabular-nums">
                    1
                  </dd>
                </div>
              </dl>
            </div>
          </FramePanel>
        </Frame>
        <Frame className="h-full min-w-0" spacing="default">
          <FramePanel className="flex flex-col gap-3 overflow-visible">
            <div className="[&_svg:not([class*=size-])]:size-4 flex gap-2 h-5 items-center min-w-0 text-muted-foreground">
              <svg className="lucide lucide-link" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              <span className="[text-box:trim-both_cap_alphabetic] font-medium min-w-0 overflow-x-clip text-ellipsis text-foreground text-sm whitespace-nowrap">
                Linked Datasets
              </span>
              <span className="[text-box:trim-both_cap_alphabetic] ms-auto shrink-0 text-xs">
                Now
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="flex gap-2.5 h-8 items-center min-w-0">
                <span className="[text-box:trim-both_cap_alphabetic] font-semibold tabular-nums text-2xl tracking-tight">
                  33
                  <span className="font-normal text-base text-muted-foreground">
                    <span aria-hidden="true">
                      /
                    </span>
                    <span className="sr-only">
                      of
                    </span>
                    49
                  </span>
                </span>
                <span className="[&_svg:not([class*=size-])]:size-3.5 font-medium font-mono gap-0.5 h-5 inline-flex items-center shrink-0 tabular-nums text-sm text-success">
                  <span className="flex" aria-hidden="true">
                    <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                      <path d="m5 12 7-7 7 7"></path>
                      <path d="M12 19V5"></path>
                    </svg>
                  </span>
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    2
                  </span>
                  <span className="sr-only">
                    up against last week
                  </span>
                </span>
              </div>
              <span className="tabular-nums text-muted-foreground text-xs">
                31 linked last week
              </span>
            </div>
            <div className="flex flex-col gap-2.5 mt-auto">
              <div className="flex gap-1 h-2 w-full" role="img" aria-label="Datasets by sync state: 32 in sync, 1 drifted, 16 unlinked" data-c46-rise="x" data-c46-step="1">
                <span className="bg-info h-full min-w-1 rounded-full" style={{flexGrow: "32"}}></span>
                <span className="bg-warning h-full min-w-1 rounded-full" style={{flexGrow: "1"}}></span>
                <span className="bg-muted-foreground/30 h-full min-w-1 rounded-full" style={{flexGrow: "16"}}></span>
              </div>
              <dl className="gap-x-4 gap-y-1 grid grid-cols-2">
                <div className="flex gap-1.5 h-4 items-center min-w-0 text-xs">
                  <span className="bg-info rounded-full shrink-0 size-2" aria-hidden="true"></span>
                  <dt className="[text-box:trim-both_cap_alphabetic] min-w-0 overflow-x-clip text-ellipsis text-muted-foreground whitespace-nowrap">
                    In sync
                  </dt>
                  <dd className="[text-box:trim-both_cap_alphabetic] font-medium ms-auto tabular-nums">
                    32
                  </dd>
                </div>
                <div className="flex gap-1.5 h-4 items-center min-w-0 text-xs">
                  <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                  <dt className="[text-box:trim-both_cap_alphabetic] min-w-0 overflow-x-clip text-ellipsis text-muted-foreground whitespace-nowrap">
                    Drifted
                  </dt>
                  <dd className="[text-box:trim-both_cap_alphabetic] font-medium ms-auto tabular-nums">
                    1
                  </dd>
                </div>
                <div className="flex gap-1.5 h-4 items-center min-w-0 text-xs">
                  <span className="bg-muted-foreground/30 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                  <dt className="[text-box:trim-both_cap_alphabetic] min-w-0 overflow-x-clip text-ellipsis text-muted-foreground whitespace-nowrap">
                    Unlinked
                  </dt>
                  <dd className="[text-box:trim-both_cap_alphabetic] font-medium ms-auto tabular-nums">
                    16
                  </dd>
                </div>
              </dl>
            </div>
          </FramePanel>
        </Frame>
        <Frame className="h-full min-w-0" spacing="default">
          <FramePanel className="flex flex-col gap-3 overflow-visible">
            <div className="[&_svg:not([class*=size-])]:size-4 flex gap-2 h-5 items-center min-w-0 text-muted-foreground">
              <svg className="lucide lucide-arrow-left-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftRightIcon" tabler="IconArrowsExchange" hugeicons="ArrowDataTransferHorizontalIcon" phosphor="ArrowsLeftRightIcon" remixicon="RiArrowLeftRightLine" aria-hidden="true">
                <path d="M8 3 4 7l4 4"></path>
                <path d="M4 7h16"></path>
                <path d="m16 21 4-4-4-4"></path>
                <path d="M20 17H4"></path>
              </svg>
              <span className="[text-box:trim-both_cap_alphabetic] font-medium min-w-0 overflow-x-clip text-ellipsis text-foreground text-sm whitespace-nowrap">
                Rows Synced
              </span>
              <span className="[text-box:trim-both_cap_alphabetic] ms-auto shrink-0 text-xs">
                14 days
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="flex gap-2.5 h-8 items-center min-w-0">
                <span className="[text-box:trim-both_cap_alphabetic] font-semibold tabular-nums text-2xl tracking-tight">
                  8.4M
                </span>
                <span className="[&_svg:not([class*=size-])]:size-3.5 font-medium font-mono gap-0.5 h-5 inline-flex items-center shrink-0 tabular-nums text-sm text-success">
                  <span className="flex" aria-hidden="true">
                    <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                      <path d="m5 12 7-7 7 7"></path>
                      <path d="M12 19V5"></path>
                    </svg>
                  </span>
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    4.4%
                  </span>
                  <span className="sr-only">
                    up against yesterday
                  </span>
                </span>
              </div>
              <span className="tabular-nums text-muted-foreground text-xs">
                8.1M yesterday
              </span>
            </div>
            <div className="h-14 has-focus-visible:outline-2 has-focus-visible:outline-ring/50 has-focus-visible:outline-solid mt-auto outline-offset-2 w-full" data-c46-rise="y" data-c46-step="2">
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden [&_[class*=recharts-zIndex-layer]]:outline-hidden aspect-auto cn-chart flex h-14 justify-center text-xs w-full" data-chart="chart-_r_1_">
                <style>{`
 [data-chart=chart-_r_1_] {
  --color-rows: var(--success);
}


.dark [data-chart=chart-_r_1_] {
  --color-rows: var(--success);
}
`}</style>
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width="237" height="56" style={{position: "relative", cursor: "default", width: "237px", height: "56px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px", zIndex: "50", width: "100%"}}></div>
                      <svg className="recharts-surface" role="application" tabIndex="0" width="237" height="56" viewBox="0 0 237 56" style={{width: "100%", height: "100%", display: "block"}}>
                        <title>
                          Rows synced per day, last 14 days
                        </title>
                        <desc>
                          Wed, Sep 16: 7.1M, Thu, Sep 17: 7.5M, Fri, Sep 18: 6.9M, Sat, Sep 19: 7.8M, Sun, Sep 20: 8.2M, Mon, Sep 21: 6.4M, Tue, Sep 22: 6.1M, Wed, Sep 23: 7.7M, Thu, Sep 24: 8M, Fri, Sep 25: 7.9M, Sat, Sep 26: 8.3M, Sun, Sep 27: 7.6M, Mon, Sep 28: 8.1M, Tue, Sep 29: 8.4M
                        </desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                        <defs>
                          <clippath id="recharts1-clip">
                            <rect x="0" y="6" height="50" width="231"></rect>
                          </clippath>
                        </defs>
                        <defs>
                          <lineargradient id="stat-fill-r0" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--success)" stopOpacity="0.24"></stop>
                            <stop offset="100%" stopColor="var(--success)" stopOpacity="0"></stop>
                          </lineargradient>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                          <g className="recharts-area recharts-layer">
                            <g className="recharts-layer">
                              <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_3_)">
                                <g className="recharts-layer">
                                  <path className="recharts-area-area recharts-curve" strokeWidth="1.5" fill="url(#stat-fill-r0)" fillOpacity="1" height="50" stroke="none" width="231" id="recharts-area-_r_3_" d="M0,17.428C5.923,15.843,11.846,14.258,17.769,14.258C23.692,14.258,29.615,19.278,35.538,19.278C41.462,19.278,47.385,13.128,53.308,11.175C59.231,9.223,65.154,7.564,71.077,7.564C77,7.564,82.923,22.243,88.846,23.946C94.769,25.649,100.692,26.5,106.615,26.5C112.538,26.5,118.462,14.052,124.385,12.232C130.308,10.412,136.231,9.502,142.154,9.502C148.077,9.502,154,10.206,159.923,10.206C165.846,10.206,171.769,6.948,177.692,6.948C183.615,6.948,189.538,13.553,195.462,13.553C201.385,13.553,207.308,10.408,213.231,9.15C219.154,7.891,225.077,6.945,231,6L231,56C225.077,56,219.154,56,213.231,56C207.308,56,201.385,56,195.462,56C189.538,56,183.615,56,177.692,56C171.769,56,165.846,56,159.923,56C154,56,148.077,56,142.154,56C136.231,56,130.308,56,124.385,56C118.462,56,112.538,56,106.615,56C100.692,56,94.769,56,88.846,56C82.923,56,77,56,71.077,56C65.154,56,59.231,56,53.308,56C47.385,56,41.462,56,35.538,56C29.615,56,23.692,56,17.769,56C11.846,56,5.923,56,0,56Z"></path>
                                  <path className="recharts-area-curve recharts-curve" strokeWidth="1.5" fill="none" fillOpacity="1" height="50" stroke="var(--success)" width="231" d="M0,17.428C5.923,15.843,11.846,14.258,17.769,14.258C23.692,14.258,29.615,19.278,35.538,19.278C41.462,19.278,47.385,13.128,53.308,11.175C59.231,9.223,65.154,7.564,71.077,7.564C77,7.564,82.923,22.243,88.846,23.946C94.769,25.649,100.692,26.5,106.615,26.5C112.538,26.5,118.462,14.052,124.385,12.232C130.308,10.412,136.231,9.502,142.154,9.502C148.077,9.502,154,10.206,159.923,10.206C165.846,10.206,171.769,6.948,177.692,6.948C183.615,6.948,189.538,13.553,195.462,13.553C201.385,13.553,207.308,10.408,213.231,9.15C219.154,7.891,225.077,6.945,231,6"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_400" tabIndex="-1">
                          <g className="recharts-layer recharts-reference-line">
                            <line className="recharts-reference-line-line" x="Sep 29" stroke="var(--success)" strokeOpacity="0.5" strokeDasharray="2 3" fill="none" fillOpacity="1" strokeWidth="1" x1="231" y1="56" x2="231" y2="6"></line>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_600" tabIndex="-1">
                          <g className="recharts-layer recharts-reference-dot">
                            <circle className="recharts-dot recharts-reference-dot-dot" x="Sep 29" y="8417609" r="4" fill="var(--success)" stroke="var(--card)" strokeWidth="2" fillOpacity="1" cx="231" cy="6"></circle>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FramePanel>
        </Frame>
        <Frame className="h-full min-w-0" spacing="default">
          <FramePanel className="flex flex-col gap-3 overflow-visible">
            <div className="[&_svg:not([class*=size-])]:size-4 flex gap-2 h-5 items-center min-w-0 text-muted-foreground">
              <svg className="lucide lucide-triangle-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
              <span className="[text-box:trim-both_cap_alphabetic] font-medium min-w-0 overflow-x-clip text-ellipsis text-foreground text-sm whitespace-nowrap">
                Failed Syncs
              </span>
              <span className="[text-box:trim-both_cap_alphabetic] ms-auto shrink-0 text-xs">
                14 days
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="flex gap-2.5 h-8 items-center min-w-0">
                <span className="[text-box:trim-both_cap_alphabetic] font-semibold tabular-nums text-2xl tracking-tight">
                  7
                </span>
                <span className="[&_svg:not([class*=size-])]:size-3.5 font-medium font-mono gap-0.5 h-5 inline-flex items-center shrink-0 tabular-nums text-destructive text-sm">
                  <span className="flex" aria-hidden="true">
                    <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                      <path d="m5 12 7-7 7 7"></path>
                      <path d="M12 19V5"></path>
                    </svg>
                  </span>
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    5
                  </span>
                  <span className="sr-only">
                    up against yesterday
                  </span>
                </span>
              </div>
              <span className="tabular-nums text-muted-foreground text-xs">
                2 yesterday, 19 in 14 days
              </span>
            </div>
            <div className="h-14 has-focus-visible:outline-2 has-focus-visible:outline-ring/50 has-focus-visible:outline-solid mt-auto outline-offset-2 w-full" data-c46-rise="y" data-c46-step="3">
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden [&_[class*=recharts-zIndex-layer]]:outline-hidden aspect-auto cn-chart flex h-14 justify-center text-xs w-full" data-chart="chart-_r_2_">
                <style>{`
 [data-chart=chart-_r_2_] {
  --color-failed: var(--destructive);
}


.dark [data-chart=chart-_r_2_] {
  --color-failed: var(--destructive);
}
`}</style>
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width="237" height="56" style={{position: "relative", cursor: "default", width: "237px", height: "56px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px", zIndex: "50", width: "100%"}}></div>
                      <svg className="recharts-surface" role="application" tabIndex="0" width="237" height="56" viewBox="0 0 237 56" style={{width: "100%", height: "100%", display: "block"}}>
                        <title>
                          Failed runs per day, last 14 days
                        </title>
                        <desc>
                          Wed, Sep 16: 0, Thu, Sep 17: 1, Fri, Sep 18: 0, Sat, Sep 19: 0, Sun, Sep 20: 2, Mon, Sep 21: 1, Tue, Sep 22: 0, Wed, Sep 23: 1, Thu, Sep 24: 0, Fri, Sep 25: 3, Sat, Sep 26: 2, Sun, Sep 27: 0, Mon, Sep 28: 2, Tue, Sep 29: 7
                        </desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                        <defs>
                          <clippath id="recharts2-clip">
                            <rect x="0" y="0" height="56" width="237"></rect>
                          </clippath>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_300" tabIndex="-1">
                          <g className="recharts-bar recharts-layer" id="recharts-bar-_r_4_">
                            <g className="recharts-bar-rectangles recharts-layer">
                              <g className="recharts-layer">
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g>
                                      <rect className="fill-muted" x="2.000000000000014" y="0" width="12" height="56" rx="6"></rect>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g>
                                      <rect className="fill-muted" x="18.92857142857144" y="0" width="12" height="56" rx="6"></rect>
                                      <rect className="fill-destructive/40" x="18.92857142857144" y="48" width="12" height="8" rx="4"></rect>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g>
                                      <rect className="fill-muted" x="35.85714285714287" y="0" width="12" height="56" rx="6"></rect>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g>
                                      <rect className="fill-muted" x="52.78571428571429" y="0" width="12" height="56" rx="6"></rect>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g>
                                      <rect className="fill-muted" x="69.71428571428572" y="0" width="12" height="56" rx="6"></rect>
                                      <rect className="fill-destructive/40" x="69.71428571428572" y="40" width="12" height="16" rx="6"></rect>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g>
                                      <rect className="fill-muted" x="86.64285714285715" y="0" width="12" height="56" rx="6"></rect>
                                      <rect className="fill-destructive/40" x="86.64285714285715" y="48" width="12" height="8" rx="4"></rect>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g>
                                      <rect className="fill-muted" x="103.57142857142857" y="0" width="12" height="56" rx="6"></rect>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g>
                                      <rect className="fill-muted" x="120.5" y="0" width="12" height="56" rx="6"></rect>
                                      <rect className="fill-destructive/40" x="120.5" y="48" width="12" height="8" rx="4"></rect>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g>
                                      <rect className="fill-muted" x="137.42857142857144" y="0" width="12" height="56" rx="6"></rect>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g>
                                      <rect className="fill-muted" x="154.35714285714283" y="0" width="12" height="56" rx="6"></rect>
                                      <rect className="fill-destructive/40" x="154.35714285714283" y="32" width="12" height="24" rx="6"></rect>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g>
                                      <rect className="fill-muted" x="171.28571428571428" y="0" width="12" height="56" rx="6"></rect>
                                      <rect className="fill-destructive/40" x="171.28571428571428" y="40" width="12" height="16" rx="6"></rect>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g>
                                      <rect className="fill-muted" x="188.21428571428572" y="0" width="12" height="56" rx="6"></rect>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g>
                                      <rect className="fill-muted" x="205.1428571428571" y="0" width="12" height="56" rx="6"></rect>
                                      <rect className="fill-destructive/40" x="205.1428571428571" y="40" width="12" height="16" rx="6"></rect>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g>
                                      <rect className="fill-muted" x="222.07142857142856" y="0" width="12" height="56" rx="6"></rect>
                                      <rect className="fill-destructive" x="222.07142857142856" y="0" width="12" height="56" rx="6"></rect>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FramePanel>
        </Frame>
      </div>
    </div>
  )
}
