import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Card className="gap-0 max-w-[360px] overflow-hidden py-0 w-full" size="default">
        <CardHeader className="border-b flex items-center justify-between p-4! relative z-10">
          <CardTitle className="font-medium text-sm">
            Capital Inflows
          </CardTitle>
          <CardAction>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none gap-1.5 group/button inline-flex items-center justify-between min-w-24 outline-none px-3 select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Change inflow range" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false" extracted="1">
              <span>
                Last Week
              </span>
              <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </CardAction>
        </CardHeader>
        <CardContent className="p-0! relative">
          <div className="absolute h-52 inset-x-0 overflow-hidden pointer-events-none top-0" aria-hidden="true">
            <div className="[background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:8px_8px] [mask-image:linear-gradient(to_bottom,black_0%,black_42%,transparent_100%)] absolute h-40 inset-x-0 opacity-35 top-0"></div>
            <div className="-inset-x-8 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:8px_8px] [mask-image:radial-gradient(ellipse_88%_76%_at_50%_16%,black_0%,black_46%,transparent_100%)] absolute blur-md h-44 opacity-45 top-7"></div>
            <div className="absolute bg-[linear-gradient(to_bottom,transparent_0%,var(--card)_72%,var(--card)_100%)] bottom-0 h-24 inset-x-0"></div>
          </div>
          <div className="pb-4 pt-5 px-5 relative">
            <div className="h-[158px] max-w-[300px] mx-auto relative w-full">
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-full justify-center overflow-visible text-xs w-full" data-chart="chart-_r_5_" role="img" aria-label="Capital inflows for Last Week: $12.4M">
                <style>{`
 [data-chart=chart-_r_5_] {
  --color-wavemark: oklch(57% 0.13 184);
  --color-envato: oklch(76% 0.17 84);
  --color-qbridge: oklch(65% 0.21 45);
}


.dark [data-chart=chart-_r_5_] {
  --color-wavemark: oklch(57% 0.13 184);
  --color-envato: oklch(76% 0.17 84);
  --color-qbridge: oklch(65% 0.21 45);
}
`}</style>
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width="300" height="158" style={{position: "relative", cursor: "default", width: "300px", height: "158px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" cx="50%" cy="50%" role="application" tabIndex="0" width="300" height="158" viewBox="0 0 300 158" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                        <defs>
                          <clippath id="recharts1-clip">
                            <rect x="0" y="0" height="158" width="300"></rect>
                          </clippath>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                          <g className="recharts-layer recharts-pie" tabIndex="0">
                            <g className="recharts-layer">
                              <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                <g className="recharts-layer recharts-shape">
                                  <path className="recharts-sector" cx="150" cy="146.94" stroke="var(--card)" strokeWidth="1.5" fill="var(--color-wavemark)" name="WaveMark" id="wavemark" color="oklch(57% 0.13 184)" tabIndex="-1" data-recharts-item-index="0" data-recharts-item-id="recharts-pie-_r_6_" d={"M 37.0398,146.94\n    A3,3,0,0,1,34.0409,143.8604\n    A116,116,0,0,1,188.4617,37.5019\n    A3,3,0,0,1,190.2699,41.4017\n  L180.9968,65.7045\n      A3,3,0,0,1,177.2217,67.4731\n      A84,84,0,0,0,66.05,144.0434\n      A3,3,0,0,1,63.0517,146.94Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                <g className="recharts-layer recharts-shape">
                                  <path className="recharts-sector" cx="150" cy="146.94" stroke="var(--card)" strokeWidth="1.5" fill="var(--color-envato)" name="Envato Inc." id="envato" color="oklch(76% 0.17 84)" tabIndex="-1" data-recharts-item-index="1" data-recharts-item-id="recharts-pie-_r_6_" d={"M 192.1057,42.1206\n    A3,3,0,0,1,196.0812,40.4857\n    A116,116,0,0,1,258.9839,107.2095\n    A3,3,0,0,1,257.1177,111.0819\n  L232.4511,119.3391\n      A3,3,0,0,1,228.6885,117.5441\n      A84,84,0,0,0,183.98,70.1197\n      A3,3,0,0,1,182.4098,66.2579Z"}></path>
                                </g>
                              </g>
                              <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                <g className="recharts-layer recharts-shape">
                                  <path className="recharts-sector" cx="150" cy="146.94" stroke="var(--card)" strokeWidth="1.5" fill="var(--color-qbridge)" name="QBridge B.V." id="qbridge" color="oklch(65% 0.21 45)" tabIndex="-1" data-recharts-item-index="2" data-recharts-item-id="recharts-pie-_r_6_" d={"M 257.7272,112.9568\n    A3,3,0,0,1,261.5137,114.9916\n    A116,116,0,0,1,265.9591,143.8604\n    A3,3,0,0,1,262.9602,146.94\n  L236.9483,146.94\n      A3,3,0,0,1,233.95,144.0434\n      A84,84,0,0,0,230.9324,124.4466\n      A3,3,0,0,1,232.9203,120.7823Z"}></path>
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
                        <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col inset-x-0 items-center pointer-events-none top-[82px]">
                <span className="text-muted-foreground text-xs">
                  Capital In
                </span>
                <span className="font-medium text-2xl">
                  $12.4M
                </span>
              </div>
            </div>
          </div>
          <div className="pb-5 px-5">
            <Separator className="mb-5" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch">
              <div className="contents">
                <div className="flex flex-col gap-2 items-center min-w-0 px-2 text-center">
                  <Item className="[&_svg]:size-4 [&_svg]:text-white bg-[var(--source-icon-bg)] border-2 border-white dark:[--source-stipple-opacity:0.38] dark:bg-neutral-950 dark:border-border dark:shadow-[0_1px_3px_0_rgba(0,0,0,0.35)] isolate overflow-hidden p-0 relative shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default" style={{"--source-icon-bg": "oklch(57% 0.13 184)"}}>
                    <span className="[background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.22)_0.6px,transparent_0.65px)] [background-size:3px_3px] absolute inset-0 opacity-[var(--source-stipple-opacity,0)] pointer-events-none z-0" aria-hidden="true"></span>
                    <span className="[background-image:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] absolute inset-0 pointer-events-none z-[1]" aria-hidden="true"></span>
                    <ItemMedia className="relative size-auto z-10" variant="icon">
                      <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="min-w-0">
                    <div className="text-muted-foreground text-xs">
                      WaveMark
                    </div>
                    <div className="font-medium text-base">
                      $7.6M
                    </div>
                  </div>
                </div>
                <Separator className="mx-2" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              </div>
              <div className="contents">
                <div className="flex flex-col gap-2 items-center min-w-0 px-2 text-center">
                  <Item className="[&_svg]:size-4 [&_svg]:text-white bg-[var(--source-icon-bg)] border-2 border-white dark:[--source-stipple-opacity:0.38] dark:bg-neutral-950 dark:border-border dark:shadow-[0_1px_3px_0_rgba(0,0,0,0.35)] isolate overflow-hidden p-0 relative shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default" style={{"--source-icon-bg": "oklch(76% 0.17 84)"}}>
                    <span className="[background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.22)_0.6px,transparent_0.65px)] [background-size:3px_3px] absolute inset-0 opacity-[var(--source-stipple-opacity,0)] pointer-events-none z-0" aria-hidden="true"></span>
                    <span className="[background-image:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] absolute inset-0 pointer-events-none z-[1]" aria-hidden="true"></span>
                    <ItemMedia className="relative size-auto z-10" variant="icon">
                      <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                        <path d="M20 2v4"></path>
                        <path d="M22 4h-4"></path>
                        <circle cx="4" cy="20" r="2"></circle>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="min-w-0">
                    <div className="text-muted-foreground text-xs">
                      Envato Inc.
                    </div>
                    <div className="font-medium text-base">
                      $3.4M
                    </div>
                  </div>
                </div>
                <Separator className="mx-2" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              </div>
              <div className="contents">
                <div className="flex flex-col gap-2 items-center min-w-0 px-2 text-center">
                  <Item className="[&_svg]:size-4 [&_svg]:text-white bg-[var(--source-icon-bg)] border-2 border-white dark:[--source-stipple-opacity:0.3] dark:bg-neutral-950 dark:border-border dark:shadow-[0_1px_3px_0_rgba(0,0,0,0.35)] isolate overflow-hidden p-0 relative shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default" style={{"--source-icon-bg": "oklch(65% 0.21 45)"}}>
                    <span className="[background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.22)_0.6px,transparent_0.65px)] [background-size:3px_3px] absolute inset-0 opacity-[var(--source-stipple-opacity,0)] pointer-events-none z-0" aria-hidden="true"></span>
                    <span className="[background-image:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] absolute inset-0 pointer-events-none z-[1]" aria-hidden="true"></span>
                    <ItemMedia className="relative size-auto z-10" variant="icon">
                      <svg className="lucide lucide-circle-dollar-sign" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                        <path d="M12 18V6"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="min-w-0">
                    <div className="text-muted-foreground text-xs">
                      QBridge B.V.
                    </div>
                    <div className="font-medium text-base">
                      $1.2M
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
