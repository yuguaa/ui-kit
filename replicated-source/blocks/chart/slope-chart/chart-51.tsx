import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Slider } from "@/registry/bases/base/ui/slider"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Frame className="@container max-w-6xl w-full" spacing="default">
        <header className="flex flex-row flex-wrap gap-(--frame-panel-header-gap) gap-x-6 gap-y-3 items-center min-w-0 px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="@3xl:basis-0 basis-full flex flex-col gap-0.5 grow min-w-0">
            <div className="flex font-semibold gap-2 items-center text-sm">
              Retention Crossover
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                23,180 signups
              </Badge>
            </div>
            <div className="text-muted-foreground text-sm">
              Which channels keep the users they bring
            </div>
          </div>
          <div className="@3xl:flex-none @3xl:w-sm @5xl:w-md flex flex-1 gap-3 items-center min-w-0">
            <style>{`
@keyframes c51-settle { from { transform: translateY(3px); opacity: 0.3; } }
.c51-settle { display: inline-block; animation: c51-settle 360ms cubic-bezier(0.22, 1, 0.36, 1); }
@media (prefers-reduced-motion: reduce) { .c51-settle { animation: none; } }
html[data-demo="frozen"] .c51-settle { animation: none; }
`}</style>
            <div className="flex flex-col shrink-0 w-18">
              <span className="flex gap-1 items-baseline leading-5 text-sm">
                <span className="text-muted-foreground">
                  Day
                </span>
                <span className="c51-settle font-medium tabular-nums">
                  30
                </span>
              </span>
              <span className="leading-4 text-muted-foreground text-xs">
                Habit
              </span>
            </div>
            <div className="flex-1 h-5 has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50 min-w-0 relative rounded-full">
              <div className="absolute inset-y-0" aria-hidden="true" style={{left: "6px", right: "6px"}}>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "0%"}}>
                  <span className="bg-primary/60 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.7)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "3.0303%"}}>
                  <span className="bg-primary/60 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.4)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "6.06061%"}}>
                  <span className="bg-primary/60 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.4)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "9.09091%"}}>
                  <span className="bg-primary/60 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.4)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "12.1212%"}}>
                  <span className="bg-primary/60 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.4)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "15.1515%"}}>
                  <span className="bg-primary/60 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.4)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "18.1818%"}}>
                  <span className="bg-primary/60 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.7)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "21.2121%"}}>
                  <span className="bg-primary/60 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.4)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "24.2424%"}}>
                  <span className="bg-primary/60 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.4)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "27.2727%"}}>
                  <span className="bg-primary/60 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.4)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "30.303%"}}>
                  <span className="bg-primary/60 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.4)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "33.3333%"}}>
                  <span className="bg-primary/60 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.4)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "36.3636%"}}>
                  <span className="bg-primary/60 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.4)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "39.3939%"}}>
                  <span className="bg-primary/60 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.7)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "42.4242%"}}>
                  <span className="bg-primary/60 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.4)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "45.4545%"}}>
                  <span className="bg-primary/60 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.400002)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "48.4848%"}}>
                  <span className="bg-primary/60 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.400072)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "51.5152%"}}>
                  <span className="bg-primary/60 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.401448)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "54.5455%"}}>
                  <span className="bg-primary/60 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.414936)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "57.5758%"}}>
                  <span className="bg-primary/60 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.479079)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "60.6061%"}}>
                  <span className="bg-primary/60 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.614959)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "63.6364%"}}>
                  <span className="bg-primary/60 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.85)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "66.6667%"}}>
                  <span className="bg-muted-foreground/30 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.614959)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "69.697%"}}>
                  <span className="bg-muted-foreground/30 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.479079)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "72.7273%"}}>
                  <span className="bg-muted-foreground/30 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.414936)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "75.7576%"}}>
                  <span className="bg-muted-foreground/30 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.401448)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "78.7879%"}}>
                  <span className="bg-muted-foreground/30 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.400072)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "81.8182%"}}>
                  <span className="bg-muted-foreground/30 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.700001)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "84.8485%"}}>
                  <span className="bg-muted-foreground/30 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.4)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "87.8788%"}}>
                  <span className="bg-muted-foreground/30 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.4)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "90.9091%"}}>
                  <span className="bg-muted-foreground/30 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.4)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "93.9394%"}}>
                  <span className="bg-muted-foreground/30 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.4)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "96.9697%"}}>
                  <span className="bg-muted-foreground/30 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.4)"}}></span>
                </span>
                <span className="-translate-x-1/2 absolute flex inset-y-0 items-center w-px" style={{left: "100%"}}>
                  <span className="bg-muted-foreground/30 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-full motion-reduce:transition-none rounded-full transition-[transform,background-color] w-full" style={{transform: "scaleY(0.7)"}}></span>
                </span>
                <span className="-inset-y-0.5 -translate-x-1/2 absolute bg-primary left-0 rounded-full w-0.5" style={{transform: "translateX(224px)"}}></span>
              </div>
              <Slider className="**:data-[slot=slider-track]:h-5 absolute cursor-pointer inset-0 opacity-0" data-orientation="horizontal" id="base-ui-_r_0_" role="group" aria-label="Days since signup">
                <div className="cn-slider data-disabled:opacity-50 data-vertical:flex-col data-vertical:h-full data-vertical:w-auto flex items-center relative select-none touch-none w-full" data-orientation="horizontal" data-base-ui-slider-control="">
                  <div className="cn-slider-track grow overflow-hidden relative select-none" data-orientation="horizontal" style={{position: "relative"}}>
                    <div className="cn-slider-range data-horizontal:h-full data-vertical:w-full select-none" data-orientation="horizontal" data-base-ui-slider-indicator="" style={{position: "relative", height: "inherit", "--start-position": "63.18681318681318%", insetInlineStart: "0px", width: "var(--start-position)"}}></div>
                  </div>
                  <div className="block cn-slider-thumb disabled:opacity-50 disabled:pointer-events-none select-none shrink-0" data-orientation="horizontal" data-index="0" id="base-ui-_r_1_" style={{"--position": "63.18681318681318%", position: "absolute", insetInlineStart: "var(--position)", top: "50%", translate: "-50% -50%"}}>
                    <input aria-orientation="horizontal" aria-valuenow="21" id="base-ui-_r_3_" max="33" min="0" step="1" type="range" value="21" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "100%", height: "100%", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </div>
              </Slider>
              <output className="sr-only" aria-live="polite">
                Retention at day 30, Habit stage
              </output>
            </div>
          </div>
          <ButtonGroup className="shrink-0" role="group">
            <Button type="button" tabIndex="0" aria-pressed="false" extracted="1">
              <svg className="lucide lucide-play" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlayIcon" tabler="IconPlayerPlay" hugeicons="PlayIcon" phosphor="PlayIcon" remixicon="RiPlayLine" aria-hidden="true">
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
              </svg>
              Play
            </Button>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Crossover options" aria-haspopup="menu" id="base-ui-_r_7_" aria-expanded="false">
              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </ButtonGroup>
        </header>
        <FramePanel className="min-w-0">
          <div className="overflow-x-auto">
            <div className="flex flex-col gap-3 min-w-3xl py-3">
              <div className="flex items-center text-muted-foreground text-xs">
                <span className="pe-2.5 shrink-0 text-end" style={{width: "232px"}}>
                  Signups
                </span>
                <span className="flex flex-1 gap-3 items-center justify-center">
                  <span className="gap-1.5 inline-flex items-center">
                    <span className="bg-success rounded-full shrink-0 size-2" aria-hidden="true"></span>
                    Climbs
                  </span>
                  <span className="gap-1.5 inline-flex items-center">
                    <span className="bg-destructive rounded-full shrink-0 size-2" aria-hidden="true"></span>
                    Falls
                  </span>
                  <span className="gap-1.5 inline-flex items-center">
                    <span className="bg-muted-foreground rounded-full shrink-0 size-2" aria-hidden="true"></span>
                    Holds
                  </span>
                </span>
                <span className="flex justify-between ps-2.5 shrink-0" style={{width: "156px"}}>
                  <span>
                    Kept at Day 30
                  </span>
                  <span>
                    Places
                  </span>
                </span>
              </div>
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden [&_[class*=recharts-zIndex-layer]]:outline-hidden aspect-auto cn-chart flex h-104 justify-center text-xs w-full" data-chart="chart-_r_a_" role="img" aria-label="11 acquisition channels: signup order on the left, retention order on the right">
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width="1118" height="416" style={{position: "relative", cursor: "default", width: "1118px", height: "416px"}}>
                      <svg className="recharts-surface" role="application" tabIndex="0" width="1118" height="416" viewBox="0 0 1118 416" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                        <defs>
                          <clippath id="recharts1-clip">
                            <rect x="232" y="6" height="404" width="730"></rect>
                          </clippath>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                          <g className="recharts-layer recharts-reference-line">
                            <line className="recharts-reference-line-line" x="0" stroke="var(--border)" fill="none" fillOpacity="1" strokeWidth="1" x1="232" y1="410" x2="232" y2="6"></line>
                          </g>
                          <g className="recharts-layer recharts-reference-line">
                            <line className="recharts-reference-line-line" x="1" stroke="var(--border)" fill="none" fillOpacity="1" strokeWidth="1" x1="962" y1="410" x2="962" y2="6"></line>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_400" tabIndex="-1">
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r9-direct-ribbon" gradientUnits="userSpaceOnUse" x1="232" x2="962" y1="0" y2="0">
                                    <stop offset="0%" stopColor="var(--muted-foreground)" stopOpacity="0.35"></stop>
                                    <stop offset="60%" stopColor="var(--muted-foreground)" stopOpacity="0.75"></stop>
                                    <stop offset="100%" stopColor="var(--muted-foreground)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M232,134.54545454545453 L275.79999999999995,134.54545454545453 C597,134.54545454545453 597,134.54545454545453 918.1999999999999,134.54545454545453 L962,134.54545454545453" fill="none" stroke="url(#r9-direct-ribbon)" strokeWidth="5.217842323651452" strokeOpacity="0.35" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path className="cursor-pointer" d="M232,134.54545454545453 L275.79999999999995,134.54545454545453 C597,134.54545454545453 597,134.54545454545453 918.1999999999999,134.54545454545453 L962,134.54545454545453" fill="none" stroke="transparent" strokeWidth="18"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r9-content-ribbon" gradientUnits="userSpaceOnUse" x1="232" x2="962" y1="0" y2="0">
                                    <stop offset="0%" stopColor="var(--muted-foreground)" stopOpacity="0.35"></stop>
                                    <stop offset="60%" stopColor="var(--destructive)" stopOpacity="0.75"></stop>
                                    <stop offset="100%" stopColor="var(--destructive)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M232,171.27272727272728 L275.79999999999995,171.27272727272728 C597,171.27272727272728 597,281.45454545454544 918.1999999999999,281.45454545454544 L962,281.45454545454544" fill="none" stroke="url(#r9-content-ribbon)" strokeWidth="4.622406639004149" strokeOpacity="0.75" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path className="cursor-pointer" d="M232,171.27272727272728 L275.79999999999995,171.27272727272728 C597,171.27272727272728 597,281.45454545454544 918.1999999999999,281.45454545454544 L962,281.45454545454544" fill="none" stroke="transparent" strokeWidth="18"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r9-newsletter-ribbon" gradientUnits="userSpaceOnUse" x1="232" x2="962" y1="0" y2="0">
                                    <stop offset="0%" stopColor="var(--muted-foreground)" stopOpacity="0.35"></stop>
                                    <stop offset="60%" stopColor="var(--success)" stopOpacity="0.75"></stop>
                                    <stop offset="100%" stopColor="var(--success)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M232,281.45454545454544 L275.79999999999995,281.45454545454544 C597,281.45454545454544 597,171.27272727272728 918.1999999999999,171.27272727272728 L962,171.27272727272728" fill="none" stroke="url(#r9-newsletter-ribbon)" strokeWidth="3.3298755186721993" strokeOpacity="0.75" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path className="cursor-pointer" d="M232,281.45454545454544 L275.79999999999995,281.45454545454544 C597,281.45454545454544 597,171.27272727272728 918.1999999999999,171.27272727272728 L962,171.27272727272728" fill="none" stroke="transparent" strokeWidth="18"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r9-organic-ribbon" gradientUnits="userSpaceOnUse" x1="232" x2="962" y1="0" y2="0">
                                    <stop offset="0%" stopColor="var(--muted-foreground)" stopOpacity="0.35"></stop>
                                    <stop offset="60%" stopColor="var(--destructive)" stopOpacity="0.75"></stop>
                                    <stop offset="100%" stopColor="var(--destructive)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M232,97.81818181818181 L275.79999999999995,97.81818181818181 C597,97.81818181818181 597,244.72727272727275 918.1999999999999,244.72727272727275 L962,244.72727272727275" fill="none" stroke="url(#r9-organic-ribbon)" strokeWidth="6.2053941908713695" strokeOpacity="1" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path className="cursor-pointer" d="M232,97.81818181818181 L275.79999999999995,97.81818181818181 C597,97.81818181818181 597,244.72727272727275 918.1999999999999,244.72727272727275 L962,244.72727272727275" fill="none" stroke="transparent" strokeWidth="18"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r9-affiliates-ribbon" gradientUnits="userSpaceOnUse" x1="232" x2="962" y1="0" y2="0">
                                    <stop offset="0%" stopColor="var(--muted-foreground)" stopOpacity="0.35"></stop>
                                    <stop offset="60%" stopColor="var(--destructive)" stopOpacity="0.75"></stop>
                                    <stop offset="100%" stopColor="var(--destructive)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M232,208 L275.79999999999995,208 C597,208 597,354.90909090909093 918.1999999999999,354.90909090909093 L962,354.90909090909093" fill="none" stroke="url(#r9-affiliates-ribbon)" strokeWidth="4.012448132780083" strokeOpacity="1" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path className="cursor-pointer" d="M232,208 L275.79999999999995,208 C597,208 597,354.90909090909093 918.1999999999999,354.90909090909093 L962,354.90909090909093" fill="none" stroke="transparent" strokeWidth="18"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r9-events-ribbon" gradientUnits="userSpaceOnUse" x1="232" x2="962" y1="0" y2="0">
                                    <stop offset="0%" stopColor="var(--muted-foreground)" stopOpacity="0.35"></stop>
                                    <stop offset="60%" stopColor="var(--success)" stopOpacity="0.75"></stop>
                                    <stop offset="100%" stopColor="var(--success)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M232,391.6363636363636 L275.79999999999995,391.6363636363636 C597,391.6363636363636 597,208 918.1999999999999,208 L962,208" fill="none" stroke="url(#r9-events-ribbon)" strokeWidth="2.095435684647303" strokeOpacity="1" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path className="cursor-pointer" d="M232,391.6363636363636 L275.79999999999995,391.6363636363636 C597,391.6363636363636 597,208 918.1999999999999,208 L962,208" fill="none" stroke="transparent" strokeWidth="18"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r9-referrals-ribbon" gradientUnits="userSpaceOnUse" x1="232" x2="962" y1="0" y2="0">
                                    <stop offset="0%" stopColor="var(--muted-foreground)" stopOpacity="0.35"></stop>
                                    <stop offset="60%" stopColor="var(--success)" stopOpacity="0.75"></stop>
                                    <stop offset="100%" stopColor="var(--success)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M232,244.72727272727275 L275.79999999999995,244.72727272727275 C597,244.72727272727275 597,24.363636363636363 918.1999999999999,24.363636363636363 L962,24.363636363636363" fill="none" stroke="url(#r9-referrals-ribbon)" strokeWidth="3.649377593360996" strokeOpacity="1" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path className="cursor-pointer" d="M232,244.72727272727275 L275.79999999999995,244.72727272727275 C597,244.72727272727275 597,24.363636363636363 918.1999999999999,24.363636363636363 L962,24.363636363636363" fill="none" stroke="transparent" strokeWidth="18"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r9-partners-ribbon" gradientUnits="userSpaceOnUse" x1="232" x2="962" y1="0" y2="0">
                                    <stop offset="0%" stopColor="var(--muted-foreground)" stopOpacity="0.35"></stop>
                                    <stop offset="60%" stopColor="var(--success)" stopOpacity="0.75"></stop>
                                    <stop offset="100%" stopColor="var(--success)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M232,318.1818181818182 L275.79999999999995,318.1818181818182 C597,318.1818181818182 597,61.090909090909086 918.1999999999999,61.090909090909086 L962,61.090909090909086" fill="none" stroke="url(#r9-partners-ribbon)" strokeWidth="2.923236514522822" strokeOpacity="1" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path className="cursor-pointer" d="M232,318.1818181818182 L275.79999999999995,318.1818181818182 C597,318.1818181818182 597,61.090909090909086 918.1999999999999,61.090909090909086 L962,61.090909090909086" fill="none" stroke="transparent" strokeWidth="18"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r9-webinars-ribbon" gradientUnits="userSpaceOnUse" x1="232" x2="962" y1="0" y2="0">
                                    <stop offset="0%" stopColor="var(--muted-foreground)" stopOpacity="0.35"></stop>
                                    <stop offset="60%" stopColor="var(--success)" stopOpacity="0.75"></stop>
                                    <stop offset="100%" stopColor="var(--success)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M232,354.90909090909093 L275.79999999999995,354.90909090909093 C597,354.90909090909093 597,97.81818181818181 918.1999999999999,97.81818181818181 L962,97.81818181818181" fill="none" stroke="url(#r9-webinars-ribbon)" strokeWidth="2.4294605809128633" strokeOpacity="1" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path className="cursor-pointer" d="M232,354.90909090909093 L275.79999999999995,354.90909090909093 C597,354.90909090909093 597,97.81818181818181 918.1999999999999,97.81818181818181 L962,97.81818181818181" fill="none" stroke="transparent" strokeWidth="18"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r9-paid-search-ribbon" gradientUnits="userSpaceOnUse" x1="232" x2="962" y1="0" y2="0">
                                    <stop offset="0%" stopColor="var(--muted-foreground)" stopOpacity="0.35"></stop>
                                    <stop offset="60%" stopColor="var(--destructive)" stopOpacity="0.75"></stop>
                                    <stop offset="100%" stopColor="var(--destructive)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M232,24.363636363636363 L275.79999999999995,24.363636363636363 C597,24.363636363636363 597,318.1818181818182 918.1999999999999,318.1818181818182 L962,318.1818181818182" fill="none" stroke="url(#r9-paid-search-ribbon)" strokeWidth="8.5" strokeOpacity="1" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path className="cursor-pointer" d="M232,24.363636363636363 L275.79999999999995,24.363636363636363 C597,24.363636363636363 597,318.1818181818182 918.1999999999999,318.1818181818182 L962,318.1818181818182" fill="none" stroke="transparent" strokeWidth="18.5"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line">
                            <g className="recharts-layer recharts-shape">
                              <g>
                                <defs>
                                  <lineargradient id="r9-paid-social-ribbon" gradientUnits="userSpaceOnUse" x1="232" x2="962" y1="0" y2="0">
                                    <stop offset="0%" stopColor="var(--muted-foreground)" stopOpacity="0.35"></stop>
                                    <stop offset="60%" stopColor="var(--destructive)" stopOpacity="0.75"></stop>
                                    <stop offset="100%" stopColor="var(--destructive)"></stop>
                                  </lineargradient>
                                </defs>
                                <path className="duration-300 motion-reduce:transition-none transition-[stroke-opacity]" d="M232,61.090909090909086 L275.79999999999995,61.090909090909086 C597,61.090909090909086 597,391.6363636363636 918.1999999999999,391.6363636363636 L962,391.6363636363636" fill="none" stroke="url(#r9-paid-social-ribbon)" strokeWidth="7.178423236514523" strokeOpacity="1" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path className="cursor-pointer" d="M232,61.090909090909086 L275.79999999999995,61.090909090909086 C597,61.090909090909086 597,391.6363636363636 918.1999999999999,391.6363636363636 L962,391.6363636363636" fill="none" stroke="transparent" strokeWidth="18"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_600" tabIndex="-1">
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x="0" y="116.54545454545453" width="232" height="36" fill="transparent"></rect>
                              <text className="text-[13px]" x="156" y="134.54545454545453" textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground">
                                  Direct
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums text-xs" dx="6">
                                  2,560
                                </tspan>
                              </text>
                              <rect className="fill-muted" x="166" y="131.54545454545453" width="56" height="6" rx="3"></rect>
                              <rect className="fill-muted-foreground" x="192" y="131.54545454545453" width="30" height="6" rx="3" fillOpacity="0.45"></rect>
                              <circle cx="232" cy="134.54545454545453" r="4.108921161825727" fill="var(--background)" stroke="var(--muted-foreground)" strokeOpacity="0.6" strokeWidth="1.5"></circle>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x="962" y="116.54545454545453" width="156" height="36" fill="transparent"></rect>
                              <rect className="fill-muted" x="972" y="131.54545454545453" width="56" height="6" rx="3"></rect>
                              <rect className="fill-muted-foreground" x="972" y="131.54545454545453" width="28" height="6" rx="3" fillOpacity="0.45"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x="1038" y="134.54545454545453" dominantBaseline="central">
                                37%
                              </text>
                              <text className="fill-muted-foreground font-medium tabular-nums text-xs" x="1116" y="134.54545454545453" textAnchor="end" dominantBaseline="central">
                                0
                              </text>
                              <circle className="duration-200 motion-reduce:transition-none transition-[fill]" cx="962" cy="134.54545454545453" r="4.108921161825727" fill="var(--background)" stroke="var(--muted-foreground)" strokeWidth="1.5"></circle>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x="0" y="153.27272727272728" width="232" height="36" fill="transparent"></rect>
                              <text className="text-[13px]" x="156" y="171.27272727272728" textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground">
                                  Content
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums text-xs" dx="6">
                                  2,150
                                </tspan>
                              </text>
                              <rect className="fill-muted" x="166" y="168.27272727272728" width="56" height="6" rx="3"></rect>
                              <rect className="fill-muted-foreground" x="197" y="168.27272727272728" width="25" height="6" rx="3" fillOpacity="0.45"></rect>
                              <circle cx="232" cy="171.27272727272728" r="3.8112033195020745" fill="var(--background)" stroke="var(--muted-foreground)" strokeOpacity="0.6" strokeWidth="1.5"></circle>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x="962" y="263.45454545454544" width="156" height="36" fill="transparent"></rect>
                              <rect className="fill-muted" x="972" y="278.45454545454544" width="56" height="6" rx="3"></rect>
                              <rect className="fill-destructive" x="972" y="278.45454545454544" width="17" height="6" rx="3" fillOpacity="0.85"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x="1038" y="281.45454545454544" dominantBaseline="central">
                                22%
                              </text>
                              <text className="fill-destructive font-medium tabular-nums text-xs" x="1116" y="281.45454545454544" textAnchor="end" dominantBaseline="central">
                                -3
                              </text>
                              <circle className="duration-200 motion-reduce:transition-none transition-[fill]" cx="962" cy="281.45454545454544" r="3.8112033195020745" fill="var(--background)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x="0" y="263.45454545454544" width="232" height="36" fill="transparent"></rect>
                              <text className="text-[13px]" x="156" y="281.45454545454544" textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground">
                                  Newsletter
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums text-xs" dx="6">
                                  1,260
                                </tspan>
                              </text>
                              <rect className="fill-muted" x="166" y="278.45454545454544" width="56" height="6" rx="3"></rect>
                              <rect className="fill-muted-foreground" x="207" y="278.45454545454544" width="15" height="6" rx="3" fillOpacity="0.45"></rect>
                              <circle cx="232" cy="281.45454545454544" r="3.5" fill="var(--background)" stroke="var(--muted-foreground)" strokeOpacity="0.6" strokeWidth="1.5"></circle>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x="962" y="153.27272727272728" width="156" height="36" fill="transparent"></rect>
                              <rect className="fill-muted" x="972" y="168.27272727272728" width="56" height="6" rx="3"></rect>
                              <rect className="fill-success" x="972" y="168.27272727272728" width="24" height="6" rx="3" fillOpacity="0.85"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x="1038" y="171.27272727272728" dominantBaseline="central">
                                32%
                              </text>
                              <text className="fill-success font-medium tabular-nums text-xs" x="1116" y="171.27272727272728" textAnchor="end" dominantBaseline="central">
                                +3
                              </text>
                              <circle className="duration-200 motion-reduce:transition-none transition-[fill]" cx="962" cy="171.27272727272728" r="3.5" fill="var(--background)" stroke="var(--success)" strokeWidth="1.5"></circle>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x="0" y="79.81818181818181" width="232" height="36" fill="transparent"></rect>
                              <text className="text-[13px]" x="156" y="97.81818181818181" textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground">
                                  Organic Search
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums text-xs" dx="6">
                                  3,240
                                </tspan>
                              </text>
                              <rect className="fill-muted" x="166" y="94.81818181818181" width="56" height="6" rx="3"></rect>
                              <rect className="fill-muted-foreground" x="184" y="94.81818181818181" width="38" height="6" rx="3" fillOpacity="0.45"></rect>
                              <circle cx="232" cy="97.81818181818181" r="4.602697095435685" fill="var(--background)" stroke="var(--muted-foreground)" strokeOpacity="0.6" strokeWidth="1.5"></circle>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x="962" y="226.72727272727275" width="156" height="36" fill="transparent"></rect>
                              <rect className="fill-muted" x="972" y="241.72727272727275" width="56" height="6" rx="3"></rect>
                              <rect className="fill-destructive" x="972" y="241.72727272727275" width="21" height="6" rx="3" fillOpacity="0.85"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x="1038" y="244.72727272727275" dominantBaseline="central">
                                28%
                              </text>
                              <text className="fill-destructive font-medium tabular-nums text-xs" x="1116" y="244.72727272727275" textAnchor="end" dominantBaseline="central">
                                -4
                              </text>
                              <circle className="duration-200 motion-reduce:transition-none transition-[fill]" cx="962" cy="244.72727272727275" r="4.602697095435685" fill="var(--background)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x="0" y="190" width="232" height="36" fill="transparent"></rect>
                              <text className="text-[13px]" x="156" y="208" textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground">
                                  Affiliates
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums text-xs" dx="6">
                                  1,730
                                </tspan>
                              </text>
                              <rect className="fill-muted" x="166" y="205" width="56" height="6" rx="3"></rect>
                              <rect className="fill-muted-foreground" x="202" y="205" width="20" height="6" rx="3" fillOpacity="0.45"></rect>
                              <circle cx="232" cy="208" r="3.5062240663900415" fill="var(--background)" stroke="var(--muted-foreground)" strokeOpacity="0.6" strokeWidth="1.5"></circle>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x="962" y="336.90909090909093" width="156" height="36" fill="transparent"></rect>
                              <rect className="fill-muted" x="972" y="351.90909090909093" width="56" height="6" rx="3"></rect>
                              <rect className="fill-destructive" x="972" y="351.90909090909093" width="7" height="6" rx="3" fillOpacity="0.85"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x="1038" y="354.90909090909093" dominantBaseline="central">
                                10%
                              </text>
                              <text className="fill-destructive font-medium tabular-nums text-xs" x="1116" y="354.90909090909093" textAnchor="end" dominantBaseline="central">
                                -4
                              </text>
                              <circle className="duration-200 motion-reduce:transition-none transition-[fill]" cx="962" cy="354.90909090909093" r="3.5062240663900415" fill="var(--background)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x="0" y="373.6363636363636" width="232" height="36" fill="transparent"></rect>
                              <text className="text-[13px]" x="156" y="391.6363636363636" textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground">
                                  Events
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums text-xs" dx="6">
                                  410
                                </tspan>
                              </text>
                              <rect className="fill-muted" x="166" y="388.6363636363636" width="56" height="6" rx="3"></rect>
                              <rect className="fill-muted-foreground" x="217" y="388.6363636363636" width="5" height="6" rx="3" fillOpacity="0.45"></rect>
                              <circle cx="232" cy="391.6363636363636" r="3.5" fill="var(--background)" stroke="var(--muted-foreground)" strokeOpacity="0.6" strokeWidth="1.5"></circle>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x="962" y="190" width="156" height="36" fill="transparent"></rect>
                              <rect className="fill-muted" x="972" y="205" width="56" height="6" rx="3"></rect>
                              <rect className="fill-success" x="972" y="205" width="24" height="6" rx="3" fillOpacity="0.85"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x="1038" y="208" dominantBaseline="central">
                                32%
                              </text>
                              <text className="fill-success font-medium tabular-nums text-xs" x="1116" y="208" textAnchor="end" dominantBaseline="central">
                                +5
                              </text>
                              <circle className="duration-200 motion-reduce:transition-none transition-[fill]" cx="962" cy="208" r="3.5" fill="var(--background)" stroke="var(--success)" strokeWidth="1.5"></circle>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x="0" y="226.72727272727275" width="232" height="36" fill="transparent"></rect>
                              <text className="text-[13px]" x="156" y="244.72727272727275" textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground">
                                  Referrals
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums text-xs" dx="6">
                                  1,480
                                </tspan>
                              </text>
                              <rect className="fill-muted" x="166" y="241.72727272727275" width="56" height="6" rx="3"></rect>
                              <rect className="fill-muted-foreground" x="205" y="241.72727272727275" width="17" height="6" rx="3" fillOpacity="0.45"></rect>
                              <circle cx="232" cy="244.72727272727275" r="3.5" fill="var(--background)" stroke="var(--muted-foreground)" strokeOpacity="0.6" strokeWidth="1.5"></circle>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x="962" y="6.363636363636363" width="156" height="36" fill="transparent"></rect>
                              <rect className="fill-muted" x="972" y="21.363636363636363" width="56" height="6" rx="3"></rect>
                              <rect className="fill-success" x="972" y="21.363636363636363" width="37" height="6" rx="3" fillOpacity="0.85"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x="1038" y="24.363636363636363" dominantBaseline="central">
                                49%
                              </text>
                              <text className="fill-success font-medium tabular-nums text-xs" x="1116" y="24.363636363636363" textAnchor="end" dominantBaseline="central">
                                +6
                              </text>
                              <circle className="duration-200 motion-reduce:transition-none transition-[fill]" cx="962" cy="24.363636363636363" r="3.5" fill="var(--background)" stroke="var(--success)" strokeWidth="1.5"></circle>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x="0" y="300.1818181818182" width="232" height="36" fill="transparent"></rect>
                              <text className="text-[13px]" x="156" y="318.1818181818182" textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground">
                                  Partner Directory
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums text-xs" dx="6">
                                  980
                                </tspan>
                              </text>
                              <rect className="fill-muted" x="166" y="315.1818181818182" width="56" height="6" rx="3"></rect>
                              <rect className="fill-muted-foreground" x="211" y="315.1818181818182" width="11" height="6" rx="3" fillOpacity="0.45"></rect>
                              <circle cx="232" cy="318.1818181818182" r="3.5" fill="var(--background)" stroke="var(--muted-foreground)" strokeOpacity="0.6" strokeWidth="1.5"></circle>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x="962" y="43.090909090909086" width="156" height="36" fill="transparent"></rect>
                              <rect className="fill-muted" x="972" y="58.090909090909086" width="56" height="6" rx="3"></rect>
                              <rect className="fill-success" x="972" y="58.090909090909086" width="30" height="6" rx="3" fillOpacity="0.85"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x="1038" y="61.090909090909086" dominantBaseline="central">
                                40%
                              </text>
                              <text className="fill-success font-medium tabular-nums text-xs" x="1116" y="61.090909090909086" textAnchor="end" dominantBaseline="central">
                                +7
                              </text>
                              <circle className="duration-200 motion-reduce:transition-none transition-[fill]" cx="962" cy="61.090909090909086" r="3.5" fill="var(--background)" stroke="var(--success)" strokeWidth="1.5"></circle>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x="0" y="336.90909090909093" width="232" height="36" fill="transparent"></rect>
                              <text className="text-[13px]" x="156" y="354.90909090909093" textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground">
                                  Webinars
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums text-xs" dx="6">
                                  640
                                </tspan>
                              </text>
                              <rect className="fill-muted" x="166" y="351.90909090909093" width="56" height="6" rx="3"></rect>
                              <rect className="fill-muted-foreground" x="215" y="351.90909090909093" width="7" height="6" rx="3" fillOpacity="0.45"></rect>
                              <circle cx="232" cy="354.90909090909093" r="3.5" fill="var(--background)" stroke="var(--muted-foreground)" strokeOpacity="0.6" strokeWidth="1.5"></circle>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x="962" y="79.81818181818181" width="156" height="36" fill="transparent"></rect>
                              <rect className="fill-muted" x="972" y="94.81818181818181" width="56" height="6" rx="3"></rect>
                              <rect className="fill-success" x="972" y="94.81818181818181" width="29" height="6" rx="3" fillOpacity="0.85"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x="1038" y="97.81818181818181" dominantBaseline="central">
                                39%
                              </text>
                              <text className="fill-success font-medium tabular-nums text-xs" x="1116" y="97.81818181818181" textAnchor="end" dominantBaseline="central">
                                +7
                              </text>
                              <circle className="duration-200 motion-reduce:transition-none transition-[fill]" cx="962" cy="97.81818181818181" r="3.5" fill="var(--background)" stroke="var(--success)" strokeWidth="1.5"></circle>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x="0" y="6.363636363636363" width="232" height="36" fill="transparent"></rect>
                              <text className="text-[13px]" x="156" y="24.363636363636363" textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground">
                                  Paid Search
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums text-xs" dx="6">
                                  4,820
                                </tspan>
                              </text>
                              <rect className="fill-muted" x="166" y="21.363636363636363" width="56" height="6" rx="3"></rect>
                              <rect className="fill-muted-foreground" x="166" y="21.363636363636363" width="56" height="6" rx="3" fillOpacity="0.45"></rect>
                              <circle cx="232" cy="24.363636363636363" r="5.75" fill="var(--background)" stroke="var(--muted-foreground)" strokeOpacity="0.6" strokeWidth="1.5"></circle>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x="962" y="300.1818181818182" width="156" height="36" fill="transparent"></rect>
                              <rect className="fill-muted" x="972" y="315.1818181818182" width="56" height="6" rx="3"></rect>
                              <rect className="fill-destructive" x="972" y="315.1818181818182" width="14" height="6" rx="3" fillOpacity="0.85"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x="1038" y="318.1818181818182" dominantBaseline="central">
                                19%
                              </text>
                              <text className="fill-destructive font-medium tabular-nums text-xs" x="1116" y="318.1818181818182" textAnchor="end" dominantBaseline="central">
                                -8
                              </text>
                              <circle className="duration-200 motion-reduce:transition-none transition-[fill]" cx="962" cy="318.1818181818182" r="5.75" fill="var(--background)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                            </g>
                          </g>
                          <g className="recharts-layer recharts-line-dots">
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x="0" y="43.090909090909086" width="232" height="36" fill="transparent"></rect>
                              <text className="text-[13px]" x="156" y="61.090909090909086" textAnchor="end" dominantBaseline="central">
                                <tspan className="fill-foreground">
                                  Paid Social
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums text-xs" dx="6">
                                  3,910
                                </tspan>
                              </text>
                              <rect className="fill-muted" x="166" y="58.090909090909086" width="56" height="6" rx="3"></rect>
                              <rect className="fill-muted-foreground" x="177" y="58.090909090909086" width="45" height="6" rx="3" fillOpacity="0.45"></rect>
                              <circle cx="232" cy="61.090909090909086" r="5.089211618257261" fill="var(--background)" stroke="var(--muted-foreground)" strokeOpacity="0.6" strokeWidth="1.5"></circle>
                            </g>
                            <g className="cursor-pointer duration-200 motion-reduce:transition-none transition-opacity">
                              <rect x="962" y="373.6363636363636" width="156" height="36" fill="transparent"></rect>
                              <rect className="fill-muted" x="972" y="388.6363636363636" width="56" height="6" rx="3"></rect>
                              <rect className="fill-destructive" x="972" y="388.6363636363636" width="5" height="6" rx="3" fillOpacity="0.85"></rect>
                              <text className="fill-foreground font-medium tabular-nums text-xs" x="1038" y="391.6363636363636" dominantBaseline="central">
                                7%
                              </text>
                              <text className="fill-destructive font-medium tabular-nums text-xs" x="1116" y="391.6363636363636" textAnchor="end" dominantBaseline="central">
                                -9
                              </text>
                              <circle className="duration-200 motion-reduce:transition-none transition-[fill]" cx="962" cy="391.6363636363636" r="5.089211618257261" fill="var(--background)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                            </g>
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
          </div>
          <ul className="sr-only">
            <li>
              Referrals: 1,480 signups, rank 7; 49% kept at day 30, rank 1
            </li>
            <li>
              Partner Directory: 980 signups, rank 9; 40% kept at day 30, rank 2
            </li>
            <li>
              Webinars: 640 signups, rank 10; 39% kept at day 30, rank 3
            </li>
            <li>
              Direct: 2,560 signups, rank 4; 37% kept at day 30, rank 4
            </li>
            <li>
              Newsletter: 1,260 signups, rank 8; 32% kept at day 30, rank 5
            </li>
            <li>
              Events: 410 signups, rank 11; 32% kept at day 30, rank 6
            </li>
            <li>
              Organic Search: 3,240 signups, rank 3; 28% kept at day 30, rank 7
            </li>
            <li>
              Content: 2,150 signups, rank 5; 22% kept at day 30, rank 8
            </li>
            <li>
              Paid Search: 4,820 signups, rank 1; 19% kept at day 30, rank 9
            </li>
            <li>
              Affiliates: 1,730 signups, rank 6; 10% kept at day 30, rank 10
            </li>
            <li>
              Paid Social: 3,910 signups, rank 2; 7% kept at day 30, rank 11
            </li>
          </ul>
        </FramePanel>
        <footer className="flex flex-col gap-(--frame-panel-footer-gap) min-w-0 px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
          <div className="flex gap-4 items-center justify-between min-h-6 min-w-0 w-full" style={{opacity: "1", transform: "none"}}>
            <p className="flex gap-2 items-center leading-5 min-w-0 text-[13px] text-muted-foreground">
              <svg className="lucide lucide-lightbulb shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LightbulbIcon" tabler="IconBulb" hugeicons="BulbIcon" phosphor="LightbulbIcon" remixicon="RiLightbulbLine" aria-hidden="true">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                <path d="M9 18h6"></path>
                <path d="M10 22h4"></path>
              </svg>
              <span className="tabular-nums truncate">
                <span className="font-medium text-foreground">
                  Referrals
                </span>
                keeps 49% of its users at Day 30
                <span className="@2xl:inline hidden">
                  , Paid Search keeps 19%
                </span>
              </span>
            </p>
            <span className="@xl:inline hidden shrink-0 tabular-nums text-muted-foreground text-xs">
              10 of 11 channels moved
            </span>
          </div>
        </footer>
      </Frame>
    </div>
  )
}
