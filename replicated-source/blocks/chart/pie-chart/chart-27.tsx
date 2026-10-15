import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Frame className="max-w-md w-full">
        <FramePanel className="p-6! space-y-6">
          <div className="border-b border-dashed flex items-center justify-between pb-6">
            <div className="flex gap-2 items-center">
              <h3 className="font-semibold text-base">
                {"Browser Usage"}
              </h3>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-none border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                <svg className="lucide lucide-trending-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
                <span>
                  {"+5.2%"}
                </span>
              </Badge>
            </div>
            <Button type="button" tabIndex="0" extracted="1">
              {"Export"}
            </Button>
          </div>
          <div className="space-y-6">
            <div className="flex gap-3 items-center px-2">
              <Item className="[&_svg]:h-6 [&_svg]:w-6 bg-primary/5 p-0 rounded-full size-12 text-primary" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-chart-pie" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PieChartIcon" tabler="IconChartPie" hugeicons="PieChartIcon" phosphor="ChartPieIcon" remixicon="RiPieChartLine" aria-hidden="true">
                    <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <div>
                <div className="font-medium text-muted-foreground text-sm">
                  {"Total Visitors"}
                </div>
                <div className="font-bold text-2xl">
                  {"925"}
                </div>
              </div>
            </div>
            <Tabs className="w-full" data-orientation="horizontal" activationDirection="none">
              <TabsList className="w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_0_" compositeItemActive="">
                  {"5D"}
                </TabsTrigger>
                <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1_">
                  {"2W"}
                </TabsTrigger>
                <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_2_">
                  {"1M"}
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="aspect-square max-h-[200px] mx-auto w-full">
              <ChartContainer>
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-full justify-center overflow-visible text-xs w-full" data-chart="chart-_r_3_">
                <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_3_] {\n  --color-chrome: var(--color-blue-500);\n  --color-safari: var(--color-sky-500);\n  --color-firefox: var(--color-orange-500);\n  --color-edge: var(--color-indigo-500);\n  --color-other: var(--color-slate-500);\n}\n\n\n.dark [data-chart=chart-_r_3_] {\n  --color-chrome: var(--color-blue-500);\n  --color-safari: var(--color-sky-500);\n  --color-firefox: var(--color-orange-500);\n  --color-edge: var(--color-indigo-500);\n  --color-other: var(--color-slate-500);\n}\n" }} />
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="overflow-visible recharts-wrapper" width="390" height="200" style={{position: "relative", cursor: "default", width: "390px", height: "200px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" cx="50%" cy="50%" role="application" tabIndex="0" width="390" height="200" viewBox="0 0 390 200" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                        <defs>
                          <clippath id="recharts1-clip">
                            <rect x="5" y="5" height="190" width="380"></rect>
                          </clippath>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                          <g className="recharts-layer recharts-pie" tabIndex="0">
                            <g className="recharts-layer">
                              <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                <g className="recharts-layer recharts-shape">
                                  <path className="recharts-sector" strokeWidth="4" stroke="var(--background)" cx="195" cy="100" fill="var(--color-blue-500)" name="chrome" tabIndex="-1" data-recharts-item-index="0" data-recharts-item-id="recharts-pie-_r_4_" d={"M 286.6515,100\n    A8,8,0,0,0,294.6212,91.3043\n    A100,100,0,0,0,179.2436,1.2491\n    A8,8,0,0,0,172.7435,11.0919\n  L184.7403,59.0154\n      A8,8,0,0,0,192.9658,65.0592\n      A35,35,0,0,1,229.3889,93.4884\n      A8,8,0,0,0,237.2493,100Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                <g className="recharts-layer recharts-shape">
                                  <path className="recharts-sector" strokeWidth="4" stroke="var(--background)" cx="195" cy="100" fill="var(--color-sky-500)" name="safari" tabIndex="-1" data-recharts-item-index="1" data-recharts-item-id="recharts-pie-_r_4_" d={"M 169.6542,11.9228\n    A8,8,0,0,0,159.0937,6.6687\n    A100,100,0,0,0,95.1617,94.3155\n    A8,8,0,0,0,103.3903,102.7666\n  L152.77,101.2753\n      A8,8,0,0,0,160.4302,94.5294\n      A35,35,0,0,1,179.2322,68.753\n      A8,8,0,0,0,183.3162,59.3984Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                <g className="recharts-layer recharts-shape">
                                  <path className="recharts-sector" strokeWidth="4" stroke="var(--background)" cx="195" cy="100" fill="var(--color-orange-500)" name="firefox" tabIndex="-1" data-recharts-item-index="2" data-recharts-item-id="recharts-pie-_r_4_" d={"M 103.5426,105.9621\n    A8,8,0,0,0,96.1555,115.1577\n    A100,100,0,0,0,159.9761,193.666\n    A8,8,0,0,0,170.4865,188.3125\n  L183.6999,140.71\n      A8,8,0,0,0,179.5278,131.3944\n      A35,35,0,0,1,161.1075,108.7349\n      A8,8,0,0,0,152.8402,102.7484Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                <g className="recharts-layer recharts-shape">
                                  <path className="recharts-sector" strokeWidth="4" stroke="var(--background)" cx="195" cy="100" fill="var(--color-indigo-500)" name="edge" tabIndex="-1" data-recharts-item-index="3" data-recharts-item-id="recharts-pie-_r_4_" d={"M 173.5835,189.1142\n    A8,8,0,0,0,180.1762,198.8952\n    A100,100,0,0,0,268.0848,168.254\n    A8,8,0,0,0,267.1693,156.4942\n  L228.2684,126.0426\n      A8,8,0,0,0,218.0651,126.3249\n      A35,35,0,0,1,193.2956,134.9585\n      A8,8,0,0,0,185.1275,141.0796Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                <g className="recharts-layer recharts-shape">
                                  <path className="recharts-sector" strokeWidth="4" stroke="var(--background)" cx="195" cy="100" fill="var(--color-slate-500)" name="other" tabIndex="-1" data-recharts-item-index="4" data-recharts-item-id="recharts-pie-_r_4_" d={"M 269.0969,153.9411\n    A8,8,0,0,0,280.6579,151.6016\n    A100,100,0,0,0,294.2571,112.1667\n    A8,8,0,0,0,286.5957,103.1983\n  L237.2235,101.4743\n      A8,8,0,0,0,229.1408,107.7077\n      A35,35,0,0,1,226.6346,114.9751\n      A8,8,0,0,0,229.157,124.8656Z"}></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                          <g className="recharts-label-list recharts-layer">
                            <text className="recharts-label recharts-text" stroke="none" fontSize="10" fontWeight="600" offset="5" x="236.53205433227936" y="46.7896771017071" textAnchor="middle" fill="white">
                              <tspan x="236.53205433227936" dy="0.355em">
                                {"275"}
                              </tspan>
                            </text>
                            <text className="recharts-label recharts-text" stroke="none" fontSize="10" fontWeight="600" offset="5" x="140.4663114689557" y="60.2215282445511" textAnchor="middle" fill="white">
                              <tspan x="140.4663114689557" dy="0.355em">
                                {"200"}
                              </tspan>
                            </text>
                            <text className="recharts-label recharts-text" stroke="none" fontSize="10" fontWeight="600" offset="5" x="142.62289235099675" y="142.57802947911898" textAnchor="middle" fill="white">
                              <tspan x="142.62289235099675" dy="0.355em">
                                {"187"}
                              </tspan>
                            </text>
                            <text className="recharts-label recharts-text" stroke="none" fontSize="10" fontWeight="600" offset="5" x="217.2165393957922" y="163.7391196775984" textAnchor="middle" fill="white">
                              <tspan x="217.2165393957922" dy="0.355em">
                                {"173"}
                              </tspan>
                            </text>
                            <text className="recharts-label recharts-text" stroke="none" fontSize="10" fontWeight="600" offset="5" x="258.8121305109572" y="122.00595373194636" textAnchor="middle" fill="white">
                              <tspan x="258.8121305109572" dy="0.355em">
                                {"90"}
                              </tspan>
                            </text>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              </ChartContainer>
            </div>
            <div className="flex gap-2 items-center px-2 text-muted-foreground text-xs">
              <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
              <span>
                {"Visitor data based on unique browser signatures."}
              </span>
            </div>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}
