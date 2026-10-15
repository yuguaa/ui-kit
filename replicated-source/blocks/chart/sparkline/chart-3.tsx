import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-5xl min-h-svh p-10 w-full">
      <div className="@container w-full">
        <Frame className="w-full" spacing="xs">
          <div className="@2xl:grid-cols-3 gap-1 grid">
            <FramePanel className="min-h-[178px] p-0!">
              <div className="h-full isolate min-h-[178px] overflow-hidden relative">
                <svg className="absolute bottom-0 h-24 inset-x-0 pointer-events-none text-foreground/20 w-full" aria-hidden="true" fill="none" preserveAspectRatio="none" viewBox="0 0 320 96" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="_r_0_-dots" height={1} patterntransform="matrix(4.5 0 0 4.5 0 0)" patternUnits="userSpaceOnUse" preserveAspectRatio="none" viewBox="0 0 9 9" width={1}>
                      <g>
                        <rect fill="currentColor" height={2} rx={1} width={2} x={2} y={2}></rect>
                      </g>
                    </pattern>
                    <lineargradient id="_r_0_-fade" x1={0} x2={0} y1={0} y2={1}>
                      <stop offset={0} stopColor="white" stopOpacity={0}></stop>
                      <stop offset={0.28} stopColor="white" stopOpacity={0.45}></stop>
                      <stop offset={1} stopColor="white"></stop>
                    </lineargradient>
                    <mask id="_r_0_-fade-mask">
                      <rect fill="url(#_r_0_-fade)" height={96} width={320}></rect>
                    </mask>
                  </defs>
                  <rect fill="url(#_r_0_-dots)" height={96} mask="url(#_r_0_-fade-mask)" width={320}></rect>
                </svg>
                <div className="flex gap-2.5 items-start p-5 relative z-10">
                  <div className="[&_svg]:size-5 [&_svg]:text-white bg-neutral-950 border-2 border-white dark:border-border dark:shadow-[0_1px_3px_0_rgba(0,0,0,0.35)] flex isolate items-center justify-center overflow-hidden relative rounded-md shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10">
                    <span className="[background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.22)_0.6px,transparent_0.65px)] [background-size:3px_3px] absolute dark:opacity-[0.38] inset-0 opacity-[0.42] pointer-events-none z-0" aria-hidden="true"></span>
                    <span className="[background-image:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] absolute inset-0 pointer-events-none z-[1]" aria-hidden="true"></span>
                    <span className="relative z-10">
                      <svg className="lucide lucide-wallet" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="WalletIcon" tabler="IconWallet" hugeicons="Wallet01Icon" phosphor="WalletIcon" remixicon="RiWallet3Line" aria-hidden="true">
                        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                        <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="leading-none text-muted-foreground text-sm truncate">
                      {"Main Wallet (USD)"}
                    </h3>
                    <div className="flex flex-wrap gap-x-1.5 gap-y-1 items-baseline mt-1">
                      <span className="font-medium text-base">
                        {"$2,435,900"}
                      </span>
                      <span className="text-sm text-success">
                        {"+18% ($214,356)"}
                      </span>
                    </div>
                  </div>
                </div>
                <ChartContainer>
                <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden absolute aspect-auto bottom-0 cn-chart flex h-24 inset-x-0 justify-center text-xs w-full" data-chart="chart-_r_1_">
                  <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_1_] {\n  --color-value: var(--color-emerald-500);\n}\n\n\n.dark [data-chart=chart-_r_1_] {\n  --color-value: var(--color-emerald-500);\n}\n" }} />
                  <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                    <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                      <div className="recharts-wrapper" width={307} height={96} style={{position: "relative", cursor: "default", width: "307px", height: "96px"}}>
                        <svg className="recharts-surface" role="application" tabIndex={0} width={307} height={96} viewBox="0 0 307 96" style={{width: "100%", height: "100%", display: "block"}}>
                          <title></title>
                          <desc></desc>
                          <g className="recharts-zIndex-layer_-100" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                          <defs>
                            <clippath id="recharts1-clip">
                              <rect x={0} y={10} height={74} width={307}></rect>
                            </clippath>
                          </defs>
                          <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_300" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_400" tabIndex={-1}>
                            <g className="recharts-layer recharts-line">
                              <g className="recharts-layer recharts-shape">
                                <path className="recharts-curve recharts-line-curve" stroke="var(--color-value)" strokeWidth={2} fill="none" id="recharts-line-_r_6_" height={74} width={307} d="M0,75.623L12.792,71.434L25.583,71.434L38.375,65.849L51.167,53.283L63.958,58.868L76.75,54.679L89.542,64.453L102.333,46.302L115.125,39.321L127.917,43.509L140.708,43.509L153.5,47.698L166.292,49.094L179.083,56.075L191.875,65.849L204.667,54.679L217.458,49.094L230.25,37.925L243.042,43.509L255.833,35.132L268.625,26.755L281.417,18.377L294.208,23.962L307,37.925"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-zIndex-layer_500" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_600" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_2000" tabIndex={-1}></g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                </ChartContainer>
              </div>
            </FramePanel>
            <FramePanel className="min-h-[178px] p-0!">
              <div className="h-full isolate min-h-[178px] overflow-hidden relative">
                <svg className="absolute bottom-0 h-24 inset-x-0 pointer-events-none text-foreground/20 w-full" aria-hidden="true" fill="none" preserveAspectRatio="none" viewBox="0 0 320 96" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="_r_2_-dots" height={1} patterntransform="matrix(4.5 0 0 4.5 0 0)" patternUnits="userSpaceOnUse" preserveAspectRatio="none" viewBox="0 0 9 9" width={1}>
                      <g>
                        <rect fill="currentColor" height={2} rx={1} width={2} x={2} y={2}></rect>
                      </g>
                    </pattern>
                    <lineargradient id="_r_2_-fade" x1={0} x2={0} y1={0} y2={1}>
                      <stop offset={0} stopColor="white" stopOpacity={0}></stop>
                      <stop offset={0.28} stopColor="white" stopOpacity={0.45}></stop>
                      <stop offset={1} stopColor="white"></stop>
                    </lineargradient>
                    <mask id="_r_2_-fade-mask">
                      <rect fill="url(#_r_2_-fade)" height={96} width={320}></rect>
                    </mask>
                  </defs>
                  <rect fill="url(#_r_2_-dots)" height={96} mask="url(#_r_2_-fade-mask)" width={320}></rect>
                </svg>
                <div className="flex gap-2.5 items-start p-5 relative z-10">
                  <div className="[&_svg]:size-5 [&_svg]:text-white bg-indigo-600 border-2 border-background dark:border-border dark:shadow-[0_1px_3px_0_rgba(0,0,0,0.35)] flex isolate items-center justify-center overflow-hidden relative rounded-md shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10">
                    <span className="[background-image:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] absolute inset-0 pointer-events-none z-[1]" aria-hidden="true"></span>
                    <span className="relative z-10">
                      <svg className="lucide lucide-briefcase-business" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BriefcaseBusinessIcon" tabler="IconBriefcase" hugeicons="Briefcase01Icon" phosphor="BriefcaseIcon" remixicon="RiBriefcaseLine" aria-hidden="true">
                        <path d="M12 12h.01"></path>
                        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                        <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
                        <rect width={20} height={14} x={2} y={6} rx={2}></rect>
                      </svg>
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="leading-none text-muted-foreground text-sm truncate">
                      {"Reserve Fund (USD)"}
                    </h3>
                    <div className="flex flex-wrap gap-x-1.5 gap-y-1 items-baseline mt-1">
                      <span className="font-medium text-base">
                        {"$1,980,000"}
                      </span>
                      <span className="text-destructive text-sm">
                        {"-3% ($58,000)"}
                      </span>
                    </div>
                  </div>
                </div>
                <ChartContainer>
                <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden absolute aspect-auto bottom-0 cn-chart flex h-24 inset-x-0 justify-center text-xs w-full" data-chart="chart-_r_3_">
                  <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_3_] {\n  --color-value: var(--color-rose-500);\n}\n\n\n.dark [data-chart=chart-_r_3_] {\n  --color-value: var(--color-rose-500);\n}\n" }} />
                  <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                    <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                      <div className="recharts-wrapper" width={307} height={96} style={{position: "relative", cursor: "default", width: "307px", height: "96px"}}>
                        <svg className="recharts-surface" role="application" tabIndex={0} width={307} height={96} viewBox="0 0 307 96" style={{width: "100%", height: "100%", display: "block"}}>
                          <title></title>
                          <desc></desc>
                          <g className="recharts-zIndex-layer_-100" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                          <defs>
                            <clippath id="recharts2-clip">
                              <rect x={0} y={10} height={74} width={307}></rect>
                            </clippath>
                          </defs>
                          <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_300" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_400" tabIndex={-1}>
                            <g className="recharts-layer recharts-line">
                              <g className="recharts-layer recharts-shape">
                                <path className="recharts-curve recharts-line-curve" stroke="var(--color-value)" strokeWidth={2} fill="none" id="recharts-line-_r_7_" height={74} width={307} d="M0,18.222L12.792,42.889L25.583,42.889L38.375,59.333L51.167,48.37L63.958,75.778L76.75,75.778L89.542,75.778L102.333,75.778L115.125,67.556L127.917,63.444L140.708,48.37L153.5,48.37L166.292,59.333L179.083,59.333L191.875,59.333L204.667,71.667L217.458,37.407L230.25,37.407L243.042,37.407L255.833,53.852L268.625,53.852L281.417,67.556L294.208,67.556L307,57.963"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-zIndex-layer_500" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_600" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_2000" tabIndex={-1}></g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                </ChartContainer>
              </div>
            </FramePanel>
            <FramePanel className="min-h-[178px] p-0!">
              <div className="h-full isolate min-h-[178px] overflow-hidden relative">
                <svg className="absolute bottom-0 h-24 inset-x-0 pointer-events-none text-foreground/20 w-full" aria-hidden="true" fill="none" preserveAspectRatio="none" viewBox="0 0 320 96" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="_r_4_-dots" height={1} patterntransform="matrix(4.5 0 0 4.5 0 0)" patternUnits="userSpaceOnUse" preserveAspectRatio="none" viewBox="0 0 9 9" width={1}>
                      <g>
                        <rect fill="currentColor" height={2} rx={1} width={2} x={2} y={2}></rect>
                      </g>
                    </pattern>
                    <lineargradient id="_r_4_-fade" x1={0} x2={0} y1={0} y2={1}>
                      <stop offset={0} stopColor="white" stopOpacity={0}></stop>
                      <stop offset={0.28} stopColor="white" stopOpacity={0.45}></stop>
                      <stop offset={1} stopColor="white"></stop>
                    </lineargradient>
                    <mask id="_r_4_-fade-mask">
                      <rect fill="url(#_r_4_-fade)" height={96} width={320}></rect>
                    </mask>
                  </defs>
                  <rect fill="url(#_r_4_-dots)" height={96} mask="url(#_r_4_-fade-mask)" width={320}></rect>
                </svg>
                <div className="flex gap-2.5 items-start p-5 relative z-10">
                  <div className="[&_svg]:size-5 [&_svg]:text-white bg-amber-400 border-2 border-background dark:border-border dark:shadow-[0_1px_3px_0_rgba(0,0,0,0.35)] flex isolate items-center justify-center overflow-hidden relative rounded-md shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10">
                    <span className="[background-image:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] absolute inset-0 pointer-events-none z-[1]" aria-hidden="true"></span>
                    <span className="relative z-10">
                      <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                        <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                        <path d="M18 17V9"></path>
                        <path d="M13 17V5"></path>
                        <path d="M8 17v-3"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="leading-none text-muted-foreground text-sm truncate">
                      {"Growth Portfolio (USD)"}
                    </h3>
                    <div className="flex flex-wrap gap-x-1.5 gap-y-1 items-baseline mt-1">
                      <span className="font-medium text-base">
                        {"$3,245,500"}
                      </span>
                      <span className="text-sm text-success">
                        {"+10% ($295,000)"}
                      </span>
                    </div>
                  </div>
                </div>
                <ChartContainer>
                <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden absolute aspect-auto bottom-0 cn-chart flex h-24 inset-x-0 justify-center text-xs w-full" data-chart="chart-_r_5_">
                  <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_5_] {\n  --color-value: var(--color-emerald-500);\n}\n\n\n.dark [data-chart=chart-_r_5_] {\n  --color-value: var(--color-emerald-500);\n}\n" }} />
                  <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                    <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                      <div className="recharts-wrapper" width={307} height={96} style={{position: "relative", cursor: "default", width: "307px", height: "96px"}}>
                        <svg className="recharts-surface" role="application" tabIndex={0} width={307} height={96} viewBox="0 0 307 96" style={{width: "100%", height: "100%", display: "block"}}>
                          <title></title>
                          <desc></desc>
                          <g className="recharts-zIndex-layer_-100" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                          <defs>
                            <clippath id="recharts3-clip">
                              <rect x={0} y={10} height={74} width={307}></rect>
                            </clippath>
                          </defs>
                          <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_300" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_400" tabIndex={-1}>
                            <g className="recharts-layer recharts-line">
                              <g className="recharts-layer recharts-shape">
                                <path className="recharts-curve recharts-line-curve" stroke="var(--color-value)" strokeWidth={2} fill="none" id="recharts-line-_r_8_" height={74} width={307} d="M0,33.022L12.792,33.022L25.583,49.467L38.375,26.444L51.167,26.444L63.958,62.622L76.75,62.622L89.542,74.133L102.333,74.133L115.125,62.622L127.917,57.689L140.708,57.689L153.5,64.267L166.292,56.044L179.083,42.889L191.875,42.889L204.667,19.867L217.458,62.622L230.25,62.622L243.042,72.489L255.833,44.533L268.625,44.533L281.417,33.022L294.208,33.022L307,33.022"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-zIndex-layer_500" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_600" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                          <g className="recharts-zIndex-layer_2000" tabIndex={-1}></g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                </ChartContainer>
              </div>
            </FramePanel>
          </div>
        </Frame>
      </div>
    </div>
  )
}
