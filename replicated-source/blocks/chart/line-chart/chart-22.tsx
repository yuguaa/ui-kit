import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Card className="max-w-md p-6 rounded-2xl shadow-sm w-full" size="default">
        <CardHeader className="border-0 mb-6 p-0 pb-6">
          <CardTitle className="font-semibold text-lg">
            {"Revenue Performance"}
          </CardTitle>
          <CardAction>
            <Button type="button" tabIndex={0} extracted="1">
              {"Export"}
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="p-0 space-y-6">
          <div className="flex gap-4 items-center">
            <Item className="[&_svg]:h-6 [&_svg]:w-6 bg-violet-500/10 p-0 rounded-full size-12 text-violet-600" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                </svg>
              </ItemMedia>
            </Item>
            <div>
              <div className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                {"Total Revenue"}
              </div>
              <div className="font-bold text-2xl">
                {"$307k"}
              </div>
            </div>
          </div>
          <Tabs className="w-full" data-orientation="horizontal" activationDirection="none">
            <TabsList className="w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
              <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_0_" compositeItemActive="">
                {"5D"}
              </TabsTrigger>
              <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_1_">
                {"2W"}
              </TabsTrigger>
              <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_2_">
                {"1M"}
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="h-40 w-full">
            <ChartContainer>
            <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-full justify-center text-xs w-full" data-chart="chart-_r_3_">
              <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_3_] {\n  --color-revenue: var(--color-violet-500);\n}\n\n\n.dark [data-chart=chart-_r_3_] {\n  --color-revenue: var(--color-violet-500);\n}\n" }} />
              <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                  <div className="recharts-wrapper" width={400} height={160} style={{position: "relative", cursor: "default", width: "400px", height: "160px"}}>
                    <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                    <svg className="recharts-surface" role="application" tabIndex={0} width={400} height={160} viewBox="0 0 400 160" style={{width: "100%", height: "100%", display: "block"}}>
                      <title></title>
                      <desc></desc>
                      <g className="recharts-zIndex-layer_-100" tabIndex={-1}>
                        <g className="recharts-cartesian-grid">
                          <g className="recharts-cartesian-grid-vertical">
                            <line strokeDasharray="4 8" stroke="var(--border)" fill="none" x={10} y={10} width={380} height={140} x1={10} y1={10} x2={10} y2={150}></line>
                            <line strokeDasharray="4 8" stroke="var(--border)" fill="none" x={10} y={10} width={380} height={140} x1={73.33333333333334} y1={10} x2={73.33333333333334} y2={150}></line>
                            <line strokeDasharray="4 8" stroke="var(--border)" fill="none" x={10} y={10} width={380} height={140} x1={136.66666666666669} y1={10} x2={136.66666666666669} y2={150}></line>
                            <line strokeDasharray="4 8" stroke="var(--border)" fill="none" x={10} y={10} width={380} height={140} x1={200} y1={10} x2={200} y2={150}></line>
                            <line strokeDasharray="4 8" stroke="var(--border)" fill="none" x={10} y={10} width={380} height={140} x1={263.33333333333337} y1={10} x2={263.33333333333337} y2={150}></line>
                            <line strokeDasharray="4 8" stroke="var(--border)" fill="none" x={10} y={10} width={380} height={140} x1={326.6666666666667} y1={10} x2={326.6666666666667} y2={150}></line>
                            <line strokeDasharray="4 8" stroke="var(--border)" fill="none" x={10} y={10} width={380} height={140} x1={390} y1={10} x2={390} y2={150}></line>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                      <defs>
                        <clippath id="recharts1-clip">
                          <rect x={10} y={10} height={140} width={380}></rect>
                        </clippath>
                      </defs>
                      <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_300" tabIndex={-1}></g>
                      <g className="recharts-zIndex-layer_400" tabIndex={-1}>
                        <g className="recharts-layer recharts-line">
                          <g className="recharts-layer recharts-shape">
                            <path className="recharts-curve recharts-line-curve" stroke="var(--color-violet-500)" strokeWidth={2} fill="none" id="recharts-line-_r_4_" height={140} width={380} strokeDasharray="502.5741882324219px 502.5741882324219px" d="M10,132.15C31.111,86.448,52.222,40.746,73.333,40.1C94.444,39.454,115.556,83.865,136.667,83.325C157.778,82.785,178.889,37.296,200,25.05C221.111,12.804,242.222,33.801,263.333,54.275C284.444,74.749,305.556,94.7,326.667,98.725C347.778,102.75,368.889,90.85,390,78.95"></path>
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
          <div className="flex gap-2 items-center text-muted-foreground text-xs">
            <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
              <circle cx={12} cy={12} r={10}></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
            <span>
              {"Revenue includes subscription and one-time payments."}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
