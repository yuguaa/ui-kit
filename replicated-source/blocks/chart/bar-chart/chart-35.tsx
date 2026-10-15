import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
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
      <div className="@container max-w-5xl w-full">
        <Frame className="h-full min-w-0" spacing="default">
          <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="basis-40 flex flex-col gap-px grow min-w-0">
              <div className="font-semibold text-sm">
                {"Event Volume"}
              </div>
              <div className="text-muted-foreground text-xs truncate">
                {"6-hour buckets, UTC"}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <ToggleGroup multiple="" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Outcomes in the chart" style={{"--gap": "0"}}>
                <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:bg-card aria-pressed:text-foreground cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] gap-1.5 group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="sm" spacing="0" aria-label="Success, 59 events" extracted="1">
                  <span className="bg-success rounded-full shrink-0 size-2" aria-hidden="true"></span>
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    {"Success"}
                  </span>
                  <span className="[text-box:trim-both_cap_alphabetic] tabular-nums">
                    {"59"}
                  </span>
                </ToggleGroupItem>
                <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:bg-card aria-pressed:text-foreground cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] gap-1.5 group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="-1" aria-pressed="true" variant="outline" size="sm" spacing="0" aria-label="Denied, 4 events">
                  <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    {"Denied"}
                  </span>
                  <span className="[text-box:trim-both_cap_alphabetic] tabular-nums">
                    {"4"}
                  </span>
                </ToggleGroupItem>
                <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:bg-card aria-pressed:text-foreground cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] gap-1.5 group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="-1" aria-pressed="true" variant="outline" size="sm" spacing="0" aria-label="Failed, 2 events">
                  <span className="bg-destructive rounded-full shrink-0 size-2" aria-hidden="true"></span>
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    {"Failed"}
                  </span>
                  <span className="[text-box:trim-both_cap_alphabetic] tabular-nums">
                    {"2"}
                  </span>
                </ToggleGroupItem>
              </ToggleGroup>
              <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Time range" style={{"--gap": "0"}}>
                <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:bg-card aria-pressed:text-foreground cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none tabular-nums text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="0" aria-pressed="false" variant="outline" size="sm" spacing="0" title="Last hour">
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    {"1h"}
                  </span>
                </ToggleGroupItem>
                <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:bg-card aria-pressed:text-foreground cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none tabular-nums text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="0" title="Last 24 hours">
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    {"24h"}
                  </span>
                </ToggleGroupItem>
                <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:bg-card aria-pressed:text-foreground cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none tabular-nums text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="-1" aria-pressed="true" variant="outline" size="sm" spacing="0" title="Last 7 days">
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    {"7d"}
                  </span>
                </ToggleGroupItem>
                <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:bg-card aria-pressed:text-foreground cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none tabular-nums text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="0" title="Last 30 days">
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    {"30d"}
                  </span>
                </ToggleGroupItem>
              </ToggleGroup>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions" aria-haspopup="menu" id="base-ui-_r_c_" baseUiTooltipTrigger="" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </TooltipTrigger>
              </Tooltip>
            </div>
          </header>
          <FramePanel className="flex flex-1 flex-col gap-4 min-h-0">
            <div className="min-w-0" aria-live="polite" aria-atomic="true">
              <div className="@xl:flex-row @xl:gap-3 @xl:items-center flex flex-col gap-1 min-w-0">
                <div className="flex gap-1.5 items-baseline shrink-0">
                  <span className="font-semibold tabular-nums text-2xl tracking-tight">
                    {"65"}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {"events"}
                  </span>
                </div>
                <div className="@xl:flex-nowrap @xl:min-h-0 @xl:overflow-hidden @xl:whitespace-nowrap content-start flex flex-wrap gap-x-1.5 gap-y-1 items-center min-h-11 min-w-0 tabular-nums text-muted-foreground text-xs">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                    <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    <span className="[text-box:trim-both_cap_alphabetic] tabular-nums">
                      {"+25%"}
                    </span>
                  </Badge>
                  <span className="flex h-5 items-center shrink-0">
                    <span className="[text-box:trim-both_cap_alphabetic]">
                      {"vs prior 7d"}
                    </span>
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="flex h-5 items-center shrink-0">
                    <span className="[text-box:trim-both_cap_alphabetic]">
                      {"6.2% denied"}
                    </span>
                  </span>
                  <span className="@xl:flex gap-x-1.5 hidden items-center">
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="flex h-5 items-center shrink-0">
                      <span className="[text-box:trim-both_cap_alphabetic]">
                        {"4 awaiting review"}
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="min-w-0 mt-auto relative">
              <ChartContainer>
              <div className="@4xl:h-62 [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden [&_[class*=recharts-zIndex-layer]]:outline-hidden aspect-video cn-chart cursor-pointer flex h-48 has-[.recharts-surface:focus-visible]:ring-[3px] has-[.recharts-surface:focus-visible]:ring-ring/50 justify-center min-w-0 select-none text-xs touch-pan-y w-full" data-chart="chart-_r_f_" role="group" aria-label="Events per bucket: Success, Denied, and Failed. Arrow keys move, Enter selects, Shift+Enter extends, Escape clears.">
                <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_f_] {\n  --color-success: var(--success);\n  --color-denied: var(--warning);\n  --color-failed: var(--destructive);\n}\n\n\n.dark [data-chart=chart-_r_f_] {\n  --color-success: var(--success);\n  --color-denied: var(--warning);\n  --color-failed: var(--destructive);\n}\n" }} />
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width="990" height="248" style={{position: "relative", cursor: "default", width: "990px", height: "248px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" role="application" tabIndex="0" width="990" height="248" viewBox="0 0 990 248" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_-50" tabIndex="-1">
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="30.6621" y="28" width="19" height="190" radius="4" d={"M 30.6621,32\n            A 4,4,0,0,1,34.6621,28\n            L 45.6621,28\n            A 4,4,0,0,1,49.6621,32\n            L 49.6621,214\n            A 4,4,0,0,1,45.6621,218\n            L 34.6621,218\n            A 4,4,0,0,1,30.6621,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="63.9724" y="28" width="19" height="190" radius="4" d={"M 63.9724,32\n            A 4,4,0,0,1,67.9724,28\n            L 78.9724,28\n            A 4,4,0,0,1,82.9724,32\n            L 82.9724,214\n            A 4,4,0,0,1,78.9724,218\n            L 67.9724,218\n            A 4,4,0,0,1,63.9724,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="97.2828" y="28" width="19" height="190" radius="4" d={"M 97.2828,32\n            A 4,4,0,0,1,101.2828,28\n            L 112.2828,28\n            A 4,4,0,0,1,116.2828,32\n            L 116.2828,214\n            A 4,4,0,0,1,112.2828,218\n            L 101.2828,218\n            A 4,4,0,0,1,97.2828,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="130.5931" y="28" width="19" height="190" radius="4" d={"M 130.5931,32\n            A 4,4,0,0,1,134.5931,28\n            L 145.5931,28\n            A 4,4,0,0,1,149.5931,32\n            L 149.5931,214\n            A 4,4,0,0,1,145.5931,218\n            L 134.5931,218\n            A 4,4,0,0,1,130.5931,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="163.9034" y="28" width="19" height="190" radius="4" d={"M 163.9034,32\n            A 4,4,0,0,1,167.9034,28\n            L 178.9034,28\n            A 4,4,0,0,1,182.9034,32\n            L 182.9034,214\n            A 4,4,0,0,1,178.9034,218\n            L 167.9034,218\n            A 4,4,0,0,1,163.9034,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="197.2138" y="28" width="19" height="190" radius="4" d={"M 197.2138,32\n            A 4,4,0,0,1,201.2138,28\n            L 212.2138,28\n            A 4,4,0,0,1,216.2138,32\n            L 216.2138,214\n            A 4,4,0,0,1,212.2138,218\n            L 201.2138,218\n            A 4,4,0,0,1,197.2138,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="230.5241" y="28" width="19" height="190" radius="4" d={"M 230.5241,32\n            A 4,4,0,0,1,234.5241,28\n            L 245.5241,28\n            A 4,4,0,0,1,249.5241,32\n            L 249.5241,214\n            A 4,4,0,0,1,245.5241,218\n            L 234.5241,218\n            A 4,4,0,0,1,230.5241,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="263.8345" y="28" width="19" height="190" radius="4" d={"M 263.8345,32\n            A 4,4,0,0,1,267.8345,28\n            L 278.8345,28\n            A 4,4,0,0,1,282.8345,32\n            L 282.8345,214\n            A 4,4,0,0,1,278.8345,218\n            L 267.8345,218\n            A 4,4,0,0,1,263.8345,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="297.1448" y="28" width="19" height="190" radius="4" d={"M 297.1448,32\n            A 4,4,0,0,1,301.1448,28\n            L 312.1448,28\n            A 4,4,0,0,1,316.1448,32\n            L 316.1448,214\n            A 4,4,0,0,1,312.1448,218\n            L 301.1448,218\n            A 4,4,0,0,1,297.1448,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="330.4552" y="28" width="19" height="190" radius="4" d={"M 330.4552,32\n            A 4,4,0,0,1,334.4552,28\n            L 345.4552,28\n            A 4,4,0,0,1,349.4552,32\n            L 349.4552,214\n            A 4,4,0,0,1,345.4552,218\n            L 334.4552,218\n            A 4,4,0,0,1,330.4552,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="363.7655" y="28" width="19" height="190" radius="4" d={"M 363.7655,32\n            A 4,4,0,0,1,367.7655,28\n            L 378.7655,28\n            A 4,4,0,0,1,382.7655,32\n            L 382.7655,214\n            A 4,4,0,0,1,378.7655,218\n            L 367.7655,218\n            A 4,4,0,0,1,363.7655,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="397.0759" y="28" width="19" height="190" radius="4" d={"M 397.0759,32\n            A 4,4,0,0,1,401.0759,28\n            L 412.0759,28\n            A 4,4,0,0,1,416.0759,32\n            L 416.0759,214\n            A 4,4,0,0,1,412.0759,218\n            L 401.0759,218\n            A 4,4,0,0,1,397.0759,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="430.3862" y="28" width="19" height="190" radius="4" d={"M 430.3862,32\n            A 4,4,0,0,1,434.3862,28\n            L 445.3862,28\n            A 4,4,0,0,1,449.3862,32\n            L 449.3862,214\n            A 4,4,0,0,1,445.3862,218\n            L 434.3862,218\n            A 4,4,0,0,1,430.3862,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="463.6966" y="28" width="19" height="190" radius="4" d={"M 463.6966,32\n            A 4,4,0,0,1,467.6966,28\n            L 478.6966,28\n            A 4,4,0,0,1,482.6966,32\n            L 482.6966,214\n            A 4,4,0,0,1,478.6966,218\n            L 467.6966,218\n            A 4,4,0,0,1,463.6966,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="497.0069" y="28" width="19" height="190" radius="4" d={"M 497.0069,32\n            A 4,4,0,0,1,501.0069,28\n            L 512.0069,28\n            A 4,4,0,0,1,516.0069,32\n            L 516.0069,214\n            A 4,4,0,0,1,512.0069,218\n            L 501.0069,218\n            A 4,4,0,0,1,497.0069,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="530.3172" y="28" width="19" height="190" radius="4" d={"M 530.3172,32\n            A 4,4,0,0,1,534.3172,28\n            L 545.3172,28\n            A 4,4,0,0,1,549.3172,32\n            L 549.3172,214\n            A 4,4,0,0,1,545.3172,218\n            L 534.3172,218\n            A 4,4,0,0,1,530.3172,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="563.6276" y="28" width="19" height="190" radius="4" d={"M 563.6276,32\n            A 4,4,0,0,1,567.6276,28\n            L 578.6276,28\n            A 4,4,0,0,1,582.6276,32\n            L 582.6276,214\n            A 4,4,0,0,1,578.6276,218\n            L 567.6276,218\n            A 4,4,0,0,1,563.6276,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="596.9379" y="28" width="19" height="190" radius="4" d={"M 596.9379,32\n            A 4,4,0,0,1,600.9379,28\n            L 611.9379,28\n            A 4,4,0,0,1,615.9379,32\n            L 615.9379,214\n            A 4,4,0,0,1,611.9379,218\n            L 600.9379,218\n            A 4,4,0,0,1,596.9379,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="630.2483" y="28" width="19" height="190" radius="4" d={"M 630.2483,32\n            A 4,4,0,0,1,634.2483,28\n            L 645.2483,28\n            A 4,4,0,0,1,649.2483,32\n            L 649.2483,214\n            A 4,4,0,0,1,645.2483,218\n            L 634.2483,218\n            A 4,4,0,0,1,630.2483,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="663.5586" y="28" width="19" height="190" radius="4" d={"M 663.5586,32\n            A 4,4,0,0,1,667.5586,28\n            L 678.5586,28\n            A 4,4,0,0,1,682.5586,32\n            L 682.5586,214\n            A 4,4,0,0,1,678.5586,218\n            L 667.5586,218\n            A 4,4,0,0,1,663.5586,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="696.869" y="28" width="19" height="190" radius="4" d={"M 696.869,32\n            A 4,4,0,0,1,700.869,28\n            L 711.869,28\n            A 4,4,0,0,1,715.869,32\n            L 715.869,214\n            A 4,4,0,0,1,711.869,218\n            L 700.869,218\n            A 4,4,0,0,1,696.869,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="730.1793" y="28" width="19" height="190" radius="4" d={"M 730.1793,32\n            A 4,4,0,0,1,734.1793,28\n            L 745.1793,28\n            A 4,4,0,0,1,749.1793,32\n            L 749.1793,214\n            A 4,4,0,0,1,745.1793,218\n            L 734.1793,218\n            A 4,4,0,0,1,730.1793,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="763.4897" y="28" width="19" height="190" radius="4" d={"M 763.4897,32\n            A 4,4,0,0,1,767.4897,28\n            L 778.4897,28\n            A 4,4,0,0,1,782.4897,32\n            L 782.4897,214\n            A 4,4,0,0,1,778.4897,218\n            L 767.4897,218\n            A 4,4,0,0,1,763.4897,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="796.8" y="28" width="19" height="190" radius="4" d={"M 796.8,32\n            A 4,4,0,0,1,800.8,28\n            L 811.8,28\n            A 4,4,0,0,1,815.8,32\n            L 815.8,214\n            A 4,4,0,0,1,811.8,218\n            L 800.8,218\n            A 4,4,0,0,1,796.8,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="830.1103" y="28" width="19" height="190" radius="4" d={"M 830.1103,32\n            A 4,4,0,0,1,834.1103,28\n            L 845.1103,28\n            A 4,4,0,0,1,849.1103,32\n            L 849.1103,214\n            A 4,4,0,0,1,845.1103,218\n            L 834.1103,218\n            A 4,4,0,0,1,830.1103,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="863.4207" y="28" width="19" height="190" radius="4" d={"M 863.4207,32\n            A 4,4,0,0,1,867.4207,28\n            L 878.4207,28\n            A 4,4,0,0,1,882.4207,32\n            L 882.4207,214\n            A 4,4,0,0,1,878.4207,218\n            L 867.4207,218\n            A 4,4,0,0,1,863.4207,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="896.731" y="28" width="19" height="190" radius="4" d={"M 896.731,32\n            A 4,4,0,0,1,900.731,28\n            L 911.731,28\n            A 4,4,0,0,1,915.731,32\n            L 915.731,214\n            A 4,4,0,0,1,911.731,218\n            L 900.731,218\n            A 4,4,0,0,1,896.731,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="930.0414" y="28" width="19" height="190" radius="4" d={"M 930.0414,32\n            A 4,4,0,0,1,934.0414,28\n            L 945.0414,28\n            A 4,4,0,0,1,949.0414,32\n            L 949.0414,214\n            A 4,4,0,0,1,945.0414,218\n            L 934.0414,218\n            A 4,4,0,0,1,930.0414,214 Z"}></path>
                          </g>
                          <g className="recharts-inactive-bar recharts-layer">
                            <path className="fill-muted recharts-rectangle" x="963.3517" y="28" width="19" height="190" radius="4" d={"M 963.3517,32\n            A 4,4,0,0,1,967.3517,28\n            L 978.3517,28\n            A 4,4,0,0,1,982.3517,32\n            L 982.3517,214\n            A 4,4,0,0,1,978.3517,218\n            L 967.3517,218\n            A 4,4,0,0,1,963.3517,214 Z"}></path>
                          </g>
                        </g>
                        <defs>
                          <clippath id="recharts1-clip">
                            <rect x="24" y="28" height="190" width="966"></rect>
                          </clippath>
                        </defs>
                        <defs>
                          <pattern id="hatch-_r_0_-success" width="6" height="6" patternUnits="userSpaceOnUse" patterntransform="rotate(45)">
                            <rect width="6" height="6" style={{fill: "color-mix(in oklab, var(--color-success) 22%, var(--card))"}}></rect>
                            <line x1="1" x2="1" y2="6" strokeWidth="2" style={{stroke: "color-mix(in oklab, var(--color-success) 52%, var(--card))"}}></line>
                          </pattern>
                          <pattern id="hatch-_r_0_-denied" width="6" height="6" patternUnits="userSpaceOnUse" patterntransform="rotate(45)">
                            <rect width="6" height="6" style={{fill: "color-mix(in oklab, var(--color-denied) 38%, var(--card))"}}></rect>
                            <line x1="1" x2="1" y2="6" strokeWidth="2" style={{stroke: "color-mix(in oklab, var(--color-denied) 86%, var(--card))"}}></line>
                          </pattern>
                          <pattern id="hatch-_r_0_-failed" width="6" height="6" patternUnits="userSpaceOnUse" patterntransform="rotate(45)">
                            <rect width="6" height="6" style={{fill: "color-mix(in oklab, var(--color-failed) 30%, var(--card))"}}></rect>
                            <line x1="1" x2="1" y2="6" strokeWidth="2" style={{stroke: "color-mix(in oklab, var(--color-failed) 74%, var(--card))"}}></line>
                          </pattern>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_300" tabIndex="-1">
                          <g className="recharts-bar recharts-layer" id="recharts-bar-_r_g_">
                            <g className="recharts-bar-rectangles recharts-layer">
                              <g className="recharts-layer">
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790100000000" x="30.6621" y="192.6667" width="19" height="25.3333" fill="url(#hatch-_r_0_-success)" radius="4" d={"M 30.6621,196.6667\n            A 4,4,0,0,1,34.6621,192.6667\n            L 45.6621,192.6667\n            A 4,4,0,0,1,49.6621,196.6667\n            L 49.6621,214\n            A 4,4,0,0,1,45.6621,218\n            L 34.6621,218\n            A 4,4,0,0,1,30.6621,214 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790121600000" x="63.9724" y="192.6667" width="19" height="25.3333" fill="url(#hatch-_r_0_-success)" radius="4" d={"M 63.9724,196.6667\n            A 4,4,0,0,1,67.9724,192.6667\n            L 78.9724,192.6667\n            A 4,4,0,0,1,82.9724,196.6667\n            L 82.9724,214\n            A 4,4,0,0,1,78.9724,218\n            L 67.9724,218\n            A 4,4,0,0,1,63.9724,214 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790143200000" x="97.2828" y="205.3333" width="19" height="12.6667" fill="url(#hatch-_r_0_-success)" radius="4" d={"M 97.2828,209.3333\n            A 4,4,0,0,1,101.2828,205.3333\n            L 112.2828,205.3333\n            A 4,4,0,0,1,116.2828,209.3333\n            L 116.2828,214\n            A 4,4,0,0,1,112.2828,218\n            L 101.2828,218\n            A 4,4,0,0,1,97.2828,214 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790164800000" x="130.5931" y="180" width="19" height="38" fill="url(#hatch-_r_0_-success)" radius="4" d={"M 130.5931,184\n            A 4,4,0,0,1,134.5931,180\n            L 145.5931,180\n            A 4,4,0,0,1,149.5931,184\n            L 149.5931,214\n            A 4,4,0,0,1,145.5931,218\n            L 134.5931,218\n            A 4,4,0,0,1,130.5931,214 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790186400000" x="163.9034" y="167.3333" width="19" height="50.6667" fill="url(#hatch-_r_0_-success)" radius="4" d={"M 163.9034,171.3333\n            A 4,4,0,0,1,167.9034,167.3333\n            L 178.9034,167.3333\n            A 4,4,0,0,1,182.9034,171.3333\n            L 182.9034,214\n            A 4,4,0,0,1,178.9034,218\n            L 167.9034,218\n            A 4,4,0,0,1,163.9034,214 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790208000000" x="197.2138" y="192.6667" width="19" height="25.3333" fill="url(#hatch-_r_0_-success)" radius="4" d={"M 197.2138,196.6667\n            A 4,4,0,0,1,201.2138,192.6667\n            L 212.2138,192.6667\n            A 4,4,0,0,1,216.2138,196.6667\n            L 216.2138,214\n            A 4,4,0,0,1,212.2138,218\n            L 201.2138,218\n            A 4,4,0,0,1,197.2138,214 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790251200000" x="263.8345" y="167.3333" width="19" height="50.6667" fill="url(#hatch-_r_0_-success)" radius="4" d={"M 263.8345,171.3333\n            A 4,4,0,0,1,267.8345,167.3333\n            L 278.8345,167.3333\n            A 4,4,0,0,1,282.8345,171.3333\n            L 282.8345,214\n            A 4,4,0,0,1,278.8345,218\n            L 267.8345,218\n            A 4,4,0,0,1,263.8345,214 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790272800000" x="297.1448" y="167.3333" width="19" height="50.6667" fill="url(#hatch-_r_0_-success)" radius="4" d={"M 297.1448,171.3333\n            A 4,4,0,0,1,301.1448,167.3333\n            L 312.1448,167.3333\n            A 4,4,0,0,1,316.1448,171.3333\n            L 316.1448,214\n            A 4,4,0,0,1,312.1448,218\n            L 301.1448,218\n            A 4,4,0,0,1,297.1448,214 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790294400000" x="330.4552" y="206.3333" width="19" height="11.6667" fill="url(#hatch-_r_0_-success)" radius="4" d={"M 330.4552,210.3333\n            A 4,4,0,0,1,334.4552,206.3333\n            L 345.4552,206.3333\n            A 4,4,0,0,1,349.4552,210.3333\n            L 349.4552,214\n            A 4,4,0,0,1,345.4552,218\n            L 334.4552,218\n            A 4,4,0,0,1,330.4552,214 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790316000000" x="363.7655" y="205.3333" width="19" height="12.6667" fill="url(#hatch-_r_0_-success)" radius="4" d={"M 363.7655,209.3333\n            A 4,4,0,0,1,367.7655,205.3333\n            L 378.7655,205.3333\n            A 4,4,0,0,1,382.7655,209.3333\n            L 382.7655,214\n            A 4,4,0,0,1,378.7655,218\n            L 367.7655,218\n            A 4,4,0,0,1,363.7655,214 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790337600000" x="397.0759" y="206.3333" width="19" height="11.6667" fill="url(#hatch-_r_0_-success)" radius="4" d={"M 397.0759,210.3333\n            A 4,4,0,0,1,401.0759,206.3333\n            L 412.0759,206.3333\n            A 4,4,0,0,1,416.0759,210.3333\n            L 416.0759,214\n            A 4,4,0,0,1,412.0759,218\n            L 401.0759,218\n            A 4,4,0,0,1,397.0759,214 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790359200000" x="430.3862" y="167.3333" width="19" height="50.6667" fill="url(#hatch-_r_0_-success)" radius="4" d={"M 430.3862,171.3333\n            A 4,4,0,0,1,434.3862,167.3333\n            L 445.3862,167.3333\n            A 4,4,0,0,1,449.3862,171.3333\n            L 449.3862,214\n            A 4,4,0,0,1,445.3862,218\n            L 434.3862,218\n            A 4,4,0,0,1,430.3862,214 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790380800000" x="463.6966" y="192.6667" width="19" height="25.3333" fill="url(#hatch-_r_0_-success)" radius="4" d={"M 463.6966,196.6667\n            A 4,4,0,0,1,467.6966,192.6667\n            L 478.6966,192.6667\n            A 4,4,0,0,1,482.6966,196.6667\n            L 482.6966,214\n            A 4,4,0,0,1,478.6966,218\n            L 467.6966,218\n            A 4,4,0,0,1,463.6966,214 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790424000000" x="530.3172" y="205.3333" width="19" height="12.6667" fill="url(#hatch-_r_0_-success)" radius="4" d={"M 530.3172,209.3333\n            A 4,4,0,0,1,534.3172,205.3333\n            L 545.3172,205.3333\n            A 4,4,0,0,1,549.3172,209.3333\n            L 549.3172,214\n            A 4,4,0,0,1,545.3172,218\n            L 534.3172,218\n            A 4,4,0,0,1,530.3172,214 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790445600000" x="563.6276" y="192.6667" width="19" height="25.3333" fill="url(#hatch-_r_0_-success)" radius="4" d={"M 563.6276,196.6667\n            A 4,4,0,0,1,567.6276,192.6667\n            L 578.6276,192.6667\n            A 4,4,0,0,1,582.6276,196.6667\n            L 582.6276,214\n            A 4,4,0,0,1,578.6276,218\n            L 567.6276,218\n            A 4,4,0,0,1,563.6276,214 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790510400000" x="663.5586" y="205.3333" width="19" height="12.6667" fill="url(#hatch-_r_0_-success)" radius="4" d={"M 663.5586,209.3333\n            A 4,4,0,0,1,667.5586,205.3333\n            L 678.5586,205.3333\n            A 4,4,0,0,1,682.5586,209.3333\n            L 682.5586,214\n            A 4,4,0,0,1,678.5586,218\n            L 667.5586,218\n            A 4,4,0,0,1,663.5586,214 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790532000000" x="696.869" y="205.3333" width="19" height="12.6667" fill="url(#hatch-_r_0_-success)" radius="4" d={"M 696.869,209.3333\n            A 4,4,0,0,1,700.869,205.3333\n            L 711.869,205.3333\n            A 4,4,0,0,1,715.869,209.3333\n            L 715.869,214\n            A 4,4,0,0,1,711.869,218\n            L 700.869,218\n            A 4,4,0,0,1,696.869,214 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790596800000" x="796.8" y="180" width="19" height="38" fill="url(#hatch-_r_0_-success)" radius="4" d={"M 796.8,184\n            A 4,4,0,0,1,800.8,180\n            L 811.8,180\n            A 4,4,0,0,1,815.8,184\n            L 815.8,214\n            A 4,4,0,0,1,811.8,218\n            L 800.8,218\n            A 4,4,0,0,1,796.8,214 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790618400000" x="830.1103" y="167.3333" width="19" height="50.6667" fill="url(#hatch-_r_0_-success)" radius="4" d={"M 830.1103,171.3333\n            A 4,4,0,0,1,834.1103,167.3333\n            L 845.1103,167.3333\n            A 4,4,0,0,1,849.1103,171.3333\n            L 849.1103,214\n            A 4,4,0,0,1,845.1103,218\n            L 834.1103,218\n            A 4,4,0,0,1,830.1103,214 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790640000000" x="863.4207" y="167.3333" width="19" height="50.6667" fill="url(#hatch-_r_0_-success)" radius="4" d={"M 863.4207,171.3333\n            A 4,4,0,0,1,867.4207,167.3333\n            L 878.4207,167.3333\n            A 4,4,0,0,1,882.4207,171.3333\n            L 882.4207,214\n            A 4,4,0,0,1,878.4207,218\n            L 867.4207,218\n            A 4,4,0,0,1,863.4207,214 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790683200000" x="930.0414" y="193.6667" width="19" height="24.3333" fill="url(#hatch-_r_0_-success)" radius="4" d={"M 930.0414,197.6667\n            A 4,4,0,0,1,934.0414,193.6667\n            L 945.0414,193.6667\n            A 4,4,0,0,1,949.0414,197.6667\n            L 949.0414,214\n            A 4,4,0,0,1,945.0414,218\n            L 934.0414,218\n            A 4,4,0,0,1,930.0414,214 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790691600000" x="963.3517" y="92.3333" width="19" height="125.6667" fill="url(#hatch-_r_0_-success)" radius="4" d={"M 963.3517,96.3333\n            A 4,4,0,0,1,967.3517,92.3333\n            L 978.3517,92.3333\n            A 4,4,0,0,1,982.3517,96.3333\n            L 982.3517,214\n            A 4,4,0,0,1,978.3517,218\n            L 967.3517,218\n            A 4,4,0,0,1,963.3517,214 Z"}></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-bar recharts-layer" id="recharts-bar-_r_h_">
                            <g className="recharts-bar-rectangles recharts-layer">
                              <g className="recharts-layer">
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790294400000" x="330.4552" y="192.6667" width="19" height="11.6667" fill="url(#hatch-_r_0_-denied)" radius="4" d={"M 330.4552,196.6667\n            A 4,4,0,0,1,334.4552,192.6667\n            L 345.4552,192.6667\n            A 4,4,0,0,1,349.4552,196.6667\n            L 349.4552,200.3333\n            A 4,4,0,0,1,345.4552,204.3333\n            L 334.4552,204.3333\n            A 4,4,0,0,1,330.4552,200.3333 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790683200000" x="930.0414" y="181" width="19" height="10.6667" fill="url(#hatch-_r_0_-denied)" radius="4" d={"M 930.0414,185\n            A 4,4,0,0,1,934.0414,181\n            L 945.0414,181\n            A 4,4,0,0,1,949.0414,185\n            L 949.0414,187.6667\n            A 4,4,0,0,1,945.0414,191.6667\n            L 934.0414,191.6667\n            A 4,4,0,0,1,930.0414,187.6667 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790691600000" x="963.3517" y="66" width="19" height="24.3333" fill="url(#hatch-_r_0_-denied)" radius="4" d={"M 963.3517,70\n            A 4,4,0,0,1,967.3517,66\n            L 978.3517,66\n            A 4,4,0,0,1,982.3517,70\n            L 982.3517,86.3333\n            A 4,4,0,0,1,978.3517,90.3333\n            L 967.3517,90.3333\n            A 4,4,0,0,1,963.3517,86.3333 Z"}></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-bar recharts-layer" id="recharts-bar-_r_i_">
                            <g className="recharts-bar-rectangles recharts-layer">
                              <g className="recharts-layer">
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790337600000" x="397.0759" y="192.6667" width="19" height="11.6667" fill="url(#hatch-_r_0_-failed)" radius="4" d={"M 397.0759,196.6667\n            A 4,4,0,0,1,401.0759,192.6667\n            L 412.0759,192.6667\n            A 4,4,0,0,1,416.0759,196.6667\n            L 416.0759,200.3333\n            A 4,4,0,0,1,412.0759,204.3333\n            L 401.0759,204.3333\n            A 4,4,0,0,1,397.0759,200.3333 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="undefined" end="1790683200000" x="930.0414" y="167.3333" width="19" height="11.6667" fill="url(#hatch-_r_0_-failed)" radius="4" d={"M 930.0414,171.3333\n            A 4,4,0,0,1,934.0414,167.3333\n            L 945.0414,167.3333\n            A 4,4,0,0,1,949.0414,171.3333\n            L 949.0414,175\n            A 4,4,0,0,1,945.0414,179\n            L 934.0414,179\n            A 4,4,0,0,1,930.0414,175 Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <g></g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
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
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="966" stroke="none" x="107.27586206896552" y="234" textAnchor="middle" fill="#666">
                                <tspan x="107.27586206896552" dy="0.71em">
                                  {"Sep 23"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="966" stroke="none" x="240.51724137931035" y="234" textAnchor="middle" fill="#666">
                                <tspan x="240.51724137931035" dy="0.71em">
                                  {"Sep 24"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="966" stroke="none" x="373.7586206896552" y="234" textAnchor="middle" fill="#666">
                                <tspan x="373.7586206896552" dy="0.71em">
                                  {"Sep 25"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="966" stroke="none" x="506.99999999999994" y="234" textAnchor="middle" fill="#666">
                                <tspan x="506.99999999999994" dy="0.71em">
                                  {"Sep 26"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="966" stroke="none" x="640.2413793103449" y="234" textAnchor="middle" fill="#666">
                                <tspan x="640.2413793103449" dy="0.71em">
                                  {"Sep 27"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="966" stroke="none" x="773.4827586206897" y="234" textAnchor="middle" fill="#666">
                                <tspan x="773.4827586206897" dy="0.71em">
                                  {"Sep 28"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="966" stroke="none" x="906.7241379310345" y="234" textAnchor="middle" fill="#666">
                                <tspan x="906.7241379310345" dy="0.71em">
                                  {"Sep 29"}
                                </tspan>
                              </text>
                            </g>
                          </g>
                          <g className="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width="24" orientation="left" height="190" stroke="none" x="18" y="218" textAnchor="end" fill="#666">
                                <tspan x="18" dy="0.355em">
                                  {"0"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width="24" orientation="left" height="190" stroke="none" x="18" y="154.66666666666669" textAnchor="end" fill="#666">
                                <tspan x="18" dy="0.355em">
                                  {"5"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width="24" orientation="left" height="190" stroke="none" x="18" y="91.33333333333334" textAnchor="end" fill="#666">
                                <tspan x="18" dy="0.355em">
                                  {"10"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" width="24" orientation="left" height="190" stroke="none" x="18" y="28" textAnchor="end" fill="#666">
                                <tspan x="18" dy="0.355em">
                                  {"15"}
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
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <span className="absolute flex items-center justify-center size-5" style={{left: "963px", top: "0px"}}>
                  <Avatar className="size-5" size="sm" aria-hidden="true">
                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                </span>
                <span className="absolute flex items-center justify-center size-5" style={{left: "930px", top: "0px"}}>
                  <Avatar className="size-5" size="sm" aria-hidden="true">
                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                </span>
                <span className="absolute flex items-center justify-center size-5" style={{left: "330px", top: "0px"}}>
                  <Avatar className="size-5" size="sm" aria-hidden="true">
                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                </span>
              </div>
            </div>
          </FramePanel>
        </Frame>
      </div>
    </div>
  )
}
