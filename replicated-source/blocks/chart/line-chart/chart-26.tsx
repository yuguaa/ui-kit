import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Card className="bg-slate-950 border-slate-800 max-w-lg rounded-3xl shadow-2xl text-white w-full" size="default">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="font-semibold text-lg text-slate-200">
            {"Floor Price"}
          </CardTitle>
          <CardAction>
            <Button className="hover:bg-transparent hover:text-white text-slate-400" type="button" tabIndex={0} extracted="1">
              <svg className="lucide lucide-settings size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                <circle cx={12} cy={12} r={3}></circle>
              </svg>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="pb-8 px-6 space-y-6">
          <Tabs className="w-full" data-orientation="horizontal" activationDirection="none">
            <TabsList className="bg-slate-900/50 p-1 rounded-xl w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
              <TabsTrigger className="data-active:bg-slate-800 data-active:text-emerald-400 hover:text-emerald-400 rounded-lg text-slate-400" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_0_">
                {"Month"}
              </TabsTrigger>
              <TabsTrigger className="data-active:bg-slate-800 data-active:text-emerald-400 hover:text-emerald-400 rounded-lg text-slate-400" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_1_" compositeItemActive="">
                {"Max"}
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="h-40 w-full">
            <ChartContainer>
            <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-full justify-center text-xs w-full" data-chart="chart-_r_2_">
              <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_2_] {\n  --color-value: rgb(16 185 129);\n}\n\n\n.dark [data-chart=chart-_r_2_] {\n  --color-value: rgb(16 185 129);\n}\n" }} />
              <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                  <div className="recharts-wrapper" width={464} height={160} style={{position: "relative", cursor: "default", width: "464px", height: "160px"}}>
                    <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                    <svg className="recharts-surface" role="application" tabIndex={0} width={464} height={160} viewBox="0 0 464 160" style={{width: "100%", height: "100%", display: "block"}}>
                      <title></title>
                      <desc></desc>
                      <g className="recharts-zIndex-layer_-100" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                      <defs>
                        <clippath id="recharts1-clip">
                          <rect x={5} y={5} height={150} width={454}></rect>
                        </clippath>
                      </defs>
                      <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_300" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_400" tabIndex={-1}>
                        <g className="recharts-layer recharts-line">
                          <g className="recharts-layer recharts-shape">
                            <path className="recharts-curve recharts-line-curve" stroke="rgb(16 185 129)" strokeWidth={3} fill="none" id="recharts-line-_r_3_" height={150} width={454} strokeDasharray="478.7786865234375px 478.7786865234375px" d="M5,144.726C30.222,142.671,55.444,140.616,80.667,138.562C105.889,136.507,131.111,136.507,156.333,132.397C181.556,128.288,206.778,112.192,232,103.63C257.222,95.068,282.444,88.219,307.667,81.027C332.889,73.836,358.111,71.438,383.333,60.479C408.556,49.521,433.778,32.397,459,15.274"></path>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_500" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_600" tabIndex={-1}>
                        <g className="recharts-layer recharts-line-dots">
                          <circle className="recharts-dot recharts-line-dot" r={4} stroke="rgb(16 185 129)" strokeWidth={0} fill="rgb(16 185 129)" height={150} width={454} cx={5} cy={144.72602739726025}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={4} stroke="rgb(16 185 129)" strokeWidth={0} fill="rgb(16 185 129)" height={150} width={454} cx={80.66666666666667} cy={138.56164383561645}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={4} stroke="rgb(16 185 129)" strokeWidth={0} fill="rgb(16 185 129)" height={150} width={454} cx={156.33333333333334} cy={132.39726027397262}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={4} stroke="rgb(16 185 129)" strokeWidth={0} fill="rgb(16 185 129)" height={150} width={454} cx={232} cy={103.63013698630135}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={4} stroke="rgb(16 185 129)" strokeWidth={0} fill="rgb(16 185 129)" height={150} width={454} cx={307.6666666666667} cy={81.02739726027397}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={4} stroke="rgb(16 185 129)" strokeWidth={0} fill="rgb(16 185 129)" height={150} width={454} cx={383.33333333333337} cy={60.47945205479453}></circle>
                          <circle className="recharts-dot recharts-line-dot" r={4} stroke="rgb(16 185 129)" strokeWidth={0} fill="rgb(16 185 129)" height={150} width={454} cx={459} cy={15.273972602739718}></circle>
                        </g>
                      </g>
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
          <div className="flex items-end justify-between">
            <div className="space-y-1">
              <div className="font-medium text-slate-400 text-sm">
                {"Current Price (USD)"}
              </div>
              <div className="flex gap-2 items-baseline">
                <span className="font-bold text-4xl">
                  {"6.4"}
                </span>
                <span className="font-semibold text-emerald-400 text-sm">
                  {"+$2.1"}
                </span>
              </div>
            </div>
            <div className="flex font-bold gap-1 items-center text-2xl text-emerald-400">
              <svg className="lucide lucide-trending-up size-6" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                <path d="M16 7h6v6"></path>
                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
              </svg>
              {"24.5%"}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
