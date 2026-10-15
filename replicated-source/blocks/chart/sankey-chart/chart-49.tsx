import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Frame className="@container max-w-5xl w-full" spacing="default">
        <header className="flex flex-row flex-wrap gap-3 items-center justify-between min-w-0 px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-0.5 min-w-0">
            <div className="flex gap-2 items-center min-w-0">
              <div className="font-semibold text-sm truncate">
                Trial Journey
              </div>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                20,400 trials
              </Badge>
            </div>
            <div className="text-muted-foreground text-sm truncate">
              Where new trials convert or drop off
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Date range" style={{"--gap": "0"}}>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="0" aria-pressed="false" variant="outline" size="sm" spacing="0" aria-label="Last 7D" extracted="1">
                7D
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="-1" aria-pressed="true" variant="outline" size="sm" spacing="0" aria-label="Last 30D">
                30D
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="0" aria-label="Last 90D">
                90D
              </ToggleGroupItem>
            </ToggleGroup>
            <Button className="motion-reduce:hidden" type="button" tabIndex="0" aria-label="Replay animation">
              <svg className="lucide lucide-rotate-ccw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RotateCcwIcon" tabler="IconRefresh" hugeicons="UndoIcon" phosphor="ArrowCounterClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
            </Button>
            <Button className="motion-reduce:hidden" type="button" tabIndex="0" aria-label="Pause flow" aria-pressed="false">
              <svg className="lucide lucide-pause" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PauseIcon" tabler="IconPlayerPause" hugeicons="PauseIcon" phosphor="PauseIcon" remixicon="RiPauseLine" aria-hidden="true">
                <rect x="14" y="3" width="5" height="18" rx="1"></rect>
                <rect x="5" y="3" width="5" height="18" rx="1"></rect>
              </svg>
            </Button>
          </div>
        </header>
        <FramePanel>
          <div className="overflow-x-auto">
            <div className="c49-sweep">
              <style>{`
@keyframes c49-sweep {
  from { mask-image: linear-gradient(to right, #000 48%, transparent 52%); mask-size: 300% 100%; mask-repeat: no-repeat; mask-position: 78% 0; }
  to { mask-image: linear-gradient(to right, #000 48%, transparent 52%); mask-size: 300% 100%; mask-repeat: no-repeat; mask-position: 22% 0; }
}
@keyframes c49-appear { from { opacity: 0; } }
@keyframes c49-pulse {
  0% { offset-distance: 0%; opacity: 0; }
  12%, 88% { opacity: 1; }
  100% { offset-distance: 100%; opacity: 0; }
}
@keyframes c49-leak {
  0% { offset-distance: 0%; opacity: 0; }
  14% { opacity: 1; }
  100% { offset-distance: 64%; opacity: 0; }
}
.c49-sweep { animation: c49-sweep 1400ms cubic-bezier(0.3, 0, 0.2, 1) backwards; }
.c49-pulses { animation: c49-appear 600ms ease-out backwards; }
.c49-pulse { offset-rotate: 0deg; animation: c49-pulse var(--c49-dur) linear var(--c49-delay) infinite; }
.c49-pulse[data-leak] { animation-name: c49-leak; }
[data-c49-paused] .c49-pulse { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .c49-sweep, .c49-pulses { animation: none; }
  .c49-pulse { display: none; }
}
html[data-demo="frozen"] :is(.c49-sweep, .c49-pulses) { animation: none; }
html[data-demo="frozen"] .c49-pulse { display: none; }
`}</style>
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-104 justify-center min-w-3xl text-xs w-full" data-chart="chart-r3" role="img" aria-label="Trial journey: 20,400 signups, 2,940 upgraded">
                <style>{`
 [data-chart=chart-r3] {
  --color-journey: var(--foreground);
  --color-upgraded: var(--success);
  --color-dropped: var(--destructive);
}


.dark [data-chart=chart-r3] {
  --color-journey: var(--foreground);
  --color-upgraded: var(--success);
  --color-dropped: var(--destructive);
}
`}</style>
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width="990" height="416" style={{position: "relative", cursor: "default", width: "990px", height: "416px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" width="990" height="416" viewBox="0 0 990 416">
                        <title></title>
                        <desc></desc>
                        <g className="recharts-layer recharts-sankey-links">
                          <g className="recharts-layer">
                            <g>
                              <path className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity" d="M112,118.89509803921568 C203.25,118.89509803921568 203.25,118.89509803921568 294.5,118.89509803921568" fill="none" stroke="var(--color-journey)" strokeWidth="109.79019607843136" opacity="0.12"></path>
                              <g className="c49-pulses duration-200 motion-reduce:transition-none pointer-events-none transition-opacity" aria-hidden="true" opacity="1">
                                <circle className="c49-pulse" cx="0" cy="-32.937058823529405" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 112 118.895 C 203.25 118.895 203.25 118.895 294.5 118.895\")", "--c49-dur": "4.3s", "--c49-delay": "0s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="-8.563635294117647" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 112 118.895 C 203.25 118.895 203.25 118.895 294.5 118.895\")", "--c49-dur": "4.3s", "--c49-delay": "-0.86s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="15.809788235294114" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 112 118.895 C 203.25 118.895 203.25 118.895 294.5 118.895\")", "--c49-dur": "4.3s", "--c49-delay": "-1.72s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="-25.69090588235294" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 112 118.895 C 203.25 118.895 203.25 118.895 294.5 118.895\")", "--c49-dur": "4.3s", "--c49-delay": "-2.5799999999999996s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="-1.3174823529411774" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 112 118.895 C 203.25 118.895 203.25 118.895 294.5 118.895\")", "--c49-dur": "4.3s", "--c49-delay": "-3.44s"}}></circle>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g>
                              <path className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity" d="M112,238.6470588235294 C203.25,238.6470588235294 203.25,212.6470588235294 294.5,212.6470588235294" fill="none" stroke="var(--color-journey)" strokeWidth="77.71372549019607" opacity="0.12"></path>
                              <g className="c49-pulses duration-200 motion-reduce:transition-none pointer-events-none transition-opacity" aria-hidden="true" opacity="1">
                                <circle className="c49-pulse" cx="0" cy="-18.18501176470588" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 112 238.647 C 203.25 238.647 203.25 212.647 294.5 212.647\")", "--c49-dur": "5.1s", "--c49-delay": "-0.41s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="-0.9325647058823536" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 112 238.647 C 203.25 238.647 203.25 212.647 294.5 212.647\")", "--c49-dur": "5.1s", "--c49-delay": "-1.6849999999999998s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="16.319882352941175" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 112 238.647 C 203.25 238.647 203.25 212.647 294.5 212.647\")", "--c49-dur": "5.1s", "--c49-delay": "-2.96s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="-13.05590588235294" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 112 238.647 C 203.25 238.647 203.25 212.647 294.5 212.647\")", "--c49-dur": "5.1s", "--c49-delay": "-4.234999999999999s"}}></circle>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g>
                              <path className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity" d="M112,328.73480392156864 C203.25,328.73480392156864 203.25,276.73480392156864 294.5,276.73480392156864" fill="none" stroke="var(--color-journey)" strokeWidth="50.46176470588235" opacity="0.12"></path>
                              <g className="c49-pulses duration-200 motion-reduce:transition-none pointer-events-none transition-opacity" aria-hidden="true" opacity="1">
                                <circle className="c49-pulse" cx="0" cy="-8.477576470588236" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 112 328.735 C 203.25 328.735 203.25 276.735 294.5 276.735\")", "--c49-dur": "3.9s", "--c49-delay": "-0.82s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="2.724935294117646" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 112 328.735 C 203.25 328.735 203.25 276.735 294.5 276.735\")", "--c49-dur": "3.9s", "--c49-delay": "-2.77s"}}></circle>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g>
                              <path className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity" d="M112,393.9828431372549 C203.25,393.9828431372549 203.25,315.9828431372549 294.5,315.9828431372549" fill="none" stroke="var(--color-journey)" strokeWidth="28.034313725490193" opacity="0.12"></path>
                              <g className="c49-pulses duration-200 motion-reduce:transition-none pointer-events-none transition-opacity" aria-hidden="true" opacity="1">
                                <circle className="c49-pulse" cx="0" cy="-2.8594999999999993" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 112 393.983 C 203.25 393.983 203.25 315.983 294.5 315.983\")", "--c49-dur": "4.7s", "--c49-delay": "-1.23s"}}></circle>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g>
                              <path className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity" d="M298.5,150.45 C389.75,150.45 389.75,150.45 481,150.45" fill="none" stroke="var(--color-journey)" strokeWidth="172.9" opacity="0.12"></path>
                              <g className="c49-pulses duration-200 motion-reduce:transition-none pointer-events-none transition-opacity" aria-hidden="true" opacity="1">
                                <circle className="c49-pulse" cx="0" cy="-6.2244" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 298.5 150.45 C 389.75 150.45 389.75 150.45 481 150.45\")", "--c49-dur": "5.6s", "--c49-delay": "-1.64s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="32.159400000000005" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 298.5 150.45 C 389.75 150.45 389.75 150.45 481 150.45\")", "--c49-dur": "5.6s", "--c49-delay": "-2.34s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="-33.1968" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 298.5 150.45 C 389.75 150.45 389.75 150.45 481 150.45\")", "--c49-dur": "5.6s", "--c49-delay": "-3.04s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="5.187000000000005" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 298.5 150.45 C 389.75 150.45 389.75 150.45 481 150.45\")", "--c49-dur": "5.6s", "--c49-delay": "-3.7399999999999993s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="43.570800000000006" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 298.5 150.45 C 389.75 150.45 389.75 150.45 481 150.45\")", "--c49-dur": "5.6s", "--c49-delay": "-4.4399999999999995s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="-21.785400000000003" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 298.5 150.45 C 389.75 150.45 389.75 150.45 481 150.45\")", "--c49-dur": "5.6s", "--c49-delay": "-5.14s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="16.5984" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 298.5 150.45 C 389.75 150.45 389.75 150.45 481 150.45\")", "--c49-dur": "5.6s", "--c49-delay": "-5.839999999999999s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="-48.757799999999996" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 298.5 150.45 C 389.75 150.45 389.75 150.45 481 150.45\")", "--c49-dur": "5.6s", "--c49-delay": "-6.539999999999999s"}}></circle>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g>
                              <path className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity" d="M298.5,283.45 C389.75,283.45 389.75,309.45 481,309.45" fill="none" stroke="var(--color-dropped)" strokeWidth="93.1" opacity="0.12"></path>
                              <g className="c49-pulses duration-200 motion-reduce:transition-none pointer-events-none transition-opacity" aria-hidden="true" opacity="1">
                                <circle className="c49-pulse" cx="0" cy="2.7930000000000024" r="1.75" fill="var(--color-dropped)" fillOpacity="0.9" data-leak="" style={{offsetPath: "path(\"M 298.5 283.45 C 389.75 283.45 389.75 309.45 481 309.45\")", "--c49-dur": "4.1s", "--c49-delay": "-2.05s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="23.4612" r="1.75" fill="var(--color-dropped)" fillOpacity="0.9" data-leak="" style={{offsetPath: "path(\"M 298.5 283.45 C 389.75 283.45 389.75 309.45 481 309.45\")", "--c49-dur": "4.1s", "--c49-delay": "-3.0749999999999997s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="-11.7306" r="1.75" fill="var(--color-dropped)" fillOpacity="0.9" data-leak="" style={{offsetPath: "path(\"M 298.5 283.45 C 389.75 283.45 389.75 309.45 481 309.45\")", "--c49-dur": "4.1s", "--c49-delay": "-4.1s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="8.937600000000002" r="1.75" fill="var(--color-dropped)" fillOpacity="0.9" data-leak="" style={{offsetPath: "path(\"M 298.5 283.45 C 389.75 283.45 389.75 309.45 481 309.45\")", "--c49-dur": "4.1s", "--c49-delay": "-5.125s"}}></circle>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g>
                              <path className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity" d="M485,115.0485294117647 C576.25,115.0485294117647 576.25,115.0485294117647 667.5,115.0485294117647" fill="none" stroke="var(--color-journey)" strokeWidth="102.09705882352941" opacity="0.12"></path>
                              <g className="c49-pulses duration-200 motion-reduce:transition-none pointer-events-none transition-opacity" aria-hidden="true" opacity="1">
                                <circle className="c49-pulse" cx="0" cy="9.801317647058823" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 485 115.049 C 576.25 115.049 576.25 115.049 667.5 115.049\")", "--c49-dur": "4.3s", "--c49-delay": "-2.46s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="-28.79137058823529" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 485 115.049 C 576.25 115.049 576.25 115.049 667.5 115.049\")", "--c49-dur": "4.3s", "--c49-delay": "-3.32s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="-6.125823529411763" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 485 115.049 C 576.25 115.049 576.25 115.049 667.5 115.049\")", "--c49-dur": "4.3s", "--c49-delay": "-4.18s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="16.539723529411766" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 485 115.049 C 576.25 115.049 576.25 115.049 667.5 115.049\")", "--c49-dur": "4.3s", "--c49-delay": "-5.039999999999999s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="-22.052964705882353" r="1.75" fill="var(--color-journey)" fillOpacity="0.55" style={{offsetPath: "path(\"M 485 115.049 C 576.25 115.049 576.25 115.049 667.5 115.049\")", "--c49-dur": "4.3s", "--c49-delay": "-5.9s"}}></circle>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g>
                              <path className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity" d="M485,201.4985294117647 C576.25,201.4985294117647 576.25,227.4985294117647 667.5,227.4985294117647" fill="none" stroke="var(--color-dropped)" strokeWidth="70.80294117647058" opacity="0.12"></path>
                              <g className="c49-pulses duration-200 motion-reduce:transition-none pointer-events-none transition-opacity" aria-hidden="true" opacity="1">
                                <circle className="c49-pulse" cx="0" cy="11.470076470588234" r="1.75" fill="var(--color-dropped)" fillOpacity="0.9" data-leak="" style={{offsetPath: "path(\"M 485 201.499 C 576.25 201.499 576.25 227.499 667.5 227.499\")", "--c49-dur": "5.1s", "--c49-delay": "-2.8699999999999997s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="-15.293435294117645" r="1.75" fill="var(--color-dropped)" fillOpacity="0.9" data-leak="" style={{offsetPath: "path(\"M 485 201.499 C 576.25 201.499 576.25 227.499 667.5 227.499\")", "--c49-dur": "5.1s", "--c49-delay": "-4.569999999999999s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="0.42481764705882386" r="1.75" fill="var(--color-dropped)" fillOpacity="0.9" data-leak="" style={{offsetPath: "path(\"M 485 201.499 C 576.25 201.499 576.25 227.499 667.5 227.499\")", "--c49-dur": "5.1s", "--c49-delay": "-6.27s"}}></circle>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g>
                              <path className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity" d="M671.5,83.16764705882353 C762.75,83.16764705882353 762.75,83.16764705882353 854,83.16764705882353" fill="none" stroke="var(--color-upgraded)" strokeWidth="38.33529411764706" opacity="0.12"></path>
                              <g className="c49-pulses duration-200 motion-reduce:transition-none pointer-events-none transition-opacity" aria-hidden="true" opacity="1">
                                <circle className="c49-pulse" cx="0" cy="8.740447058823529" r="1.75" fill="var(--color-upgraded)" fillOpacity="0.9" style={{offsetPath: "path(\"M 671.5 83.1676 C 762.75 83.1676 762.75 83.1676 854 83.1676\")", "--c49-dur": "3.9s", "--c49-delay": "-3.28s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="-5.750294117647059" r="1.75" fill="var(--color-upgraded)" fillOpacity="0.9" style={{offsetPath: "path(\"M 671.5 83.1676 C 762.75 83.1676 762.75 83.1676 854 83.1676\")", "--c49-dur": "3.9s", "--c49-delay": "-5.2299999999999995s"}}></circle>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g>
                              <path className="cursor-pointer duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity" d="M671.5,134.21617647058824 C762.75,134.21617647058824 762.75,160.21617647058824 854,160.21617647058824" fill="none" stroke="var(--color-dropped)" strokeWidth="63.76176470588235" opacity="0.12"></path>
                              <g className="c49-pulses duration-200 motion-reduce:transition-none pointer-events-none transition-opacity" aria-hidden="true" opacity="1">
                                <circle className="c49-pulse" cx="0" cy="18.74595882352941" r="1.75" fill="var(--color-dropped)" fillOpacity="0.9" data-leak="" style={{offsetPath: "path(\"M 671.5 134.216 C 762.75 134.216 762.75 160.216 854 160.216\")", "--c49-dur": "4.7s", "--c49-delay": "-3.69s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="-5.3559882352941175" r="1.75" fill="var(--color-dropped)" fillOpacity="0.9" data-leak="" style={{offsetPath: "path(\"M 671.5 134.216 C 762.75 134.216 762.75 160.216 854 160.216\")", "--c49-dur": "4.7s", "--c49-delay": "-5.256666666666667s"}}></circle>
                                <circle className="c49-pulse" cx="0" cy="8.799123529411764" r="1.75" fill="var(--color-dropped)" fillOpacity="0.9" data-leak="" style={{offsetPath: "path(\"M 671.5 134.216 C 762.75 134.216 762.75 160.216 854 160.216\")", "--c49-dur": "4.7s", "--c49-delay": "-6.823333333333333s"}}></circle>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-layer recharts-sankey-nodes">
                          <g className="recharts-layer">
                            <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <text className="pointer-events-none" x="112" y="16" textAnchor="end">
                                <tspan className="fill-muted-foreground text-xs">
                                  Channels
                                </tspan>
                                <tspan className="fill-foreground font-semibold tabular-nums text-sm" x="112" dy="22">
                                  4 sources
                                </tspan>
                              </text>
                              <rect className="cursor-pointer" x="108" y="64" width="4" height="109.79019607843136" rx="2" fill="var(--color-journey)"></rect>
                              <text className="pointer-events-none text-xs" x="98" y="111.89509803921568" textAnchor="end" dominantBaseline="middle" stroke="var(--frame-panel-bg, var(--background))" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                <tspan className="fill-foreground font-medium">
                                  Docs
                                </tspan>
                                <tspan className="tabular-nums" x="98" dy="15">
                                  <tspan className="fill-muted-foreground">
                                    8,420
                                  </tspan>
                                </tspan>
                              </text>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <rect className="cursor-pointer" x="108" y="199.79019607843136" width="4" height="77.71372549019607" rx="2" fill="var(--color-journey)"></rect>
                              <text className="pointer-events-none text-xs" x="98" y="231.6470588235294" textAnchor="end" dominantBaseline="middle" stroke="var(--frame-panel-bg, var(--background))" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                <tspan className="fill-foreground font-medium">
                                  Referrals
                                </tspan>
                                <tspan className="tabular-nums" x="98" dy="15">
                                  <tspan className="fill-muted-foreground">
                                    5,960
                                  </tspan>
                                </tspan>
                              </text>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <rect className="cursor-pointer" x="108" y="303.50392156862745" width="4" height="50.46176470588235" rx="2" fill="var(--color-journey)"></rect>
                              <text className="pointer-events-none text-xs" x="98" y="321.73480392156864" textAnchor="end" dominantBaseline="middle" stroke="var(--frame-panel-bg, var(--background))" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                <tspan className="fill-foreground font-medium">
                                  Newsletter
                                </tspan>
                                <tspan className="tabular-nums" x="98" dy="15">
                                  <tspan className="fill-muted-foreground">
                                    3,870
                                  </tspan>
                                </tspan>
                              </text>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <rect className="cursor-pointer" x="108" y="379.96568627450984" width="4" height="28.034313725490193" rx="2" fill="var(--color-journey)"></rect>
                              <text className="pointer-events-none text-xs" x="98" y="386.9828431372549" textAnchor="end" dominantBaseline="middle" stroke="var(--frame-panel-bg, var(--background))" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                <tspan className="fill-foreground font-medium">
                                  Marketplace
                                </tspan>
                                <tspan className="tabular-nums" x="98" dy="15">
                                  <tspan className="fill-muted-foreground">
                                    2,150
                                  </tspan>
                                </tspan>
                              </text>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <text className="pointer-events-none" x="294.5" y="16" textAnchor="start">
                                <tspan className="fill-muted-foreground text-xs">
                                  Signed Up
                                </tspan>
                                <tspan className="fill-foreground font-semibold tabular-nums text-sm" x="294.5" dy="22">
                                  20,400
                                </tspan>
                              </text>
                              <line x1="296.5" x2="296.5" y1="50" y2="58" stroke="var(--border)" strokeDasharray="2 3"></line>
                              <rect className="cursor-pointer" x="294.5" y="64" width="4" height="266" rx="2" fill="var(--color-journey)"></rect>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <text className="pointer-events-none" x="481" y="16" textAnchor="start">
                                <tspan className="fill-muted-foreground text-xs">
                                  Onboarded
                                </tspan>
                                <tspan className="fill-foreground font-semibold tabular-nums text-sm" x="481" dy="22">
                                  13,260
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums text-xs" dx="6">
                                  65.0%
                                </tspan>
                              </text>
                              <line x1="483" x2="483" y1="50" y2="58" stroke="var(--border)" strokeDasharray="2 3"></line>
                              <rect className="cursor-pointer" x="481" y="64" width="4" height="172.9" rx="2" fill="var(--color-journey)"></rect>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <rect className="cursor-pointer" x="481" y="262.9" width="4" height="93.1" rx="2" fill="var(--color-dropped)"></rect>
                              <text className="pointer-events-none text-xs" x="495" y="302.45" textAnchor="start" dominantBaseline="middle" stroke="var(--frame-panel-bg, var(--background))" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                <tspan className="fill-foreground font-medium">
                                  Skipped Setup
                                </tspan>
                                <tspan className="tabular-nums" x="495" dy="15">
                                  <tspan className="fill-muted-foreground">
                                    7,140
                                  </tspan>
                                  <tspan className="fill-muted-foreground" dx="5">
                                    35.0%
                                  </tspan>
                                </tspan>
                              </text>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <text className="pointer-events-none" x="667.5" y="16" textAnchor="start">
                                <tspan className="fill-muted-foreground text-xs">
                                  Team Invited
                                </tspan>
                                <tspan className="fill-foreground font-semibold tabular-nums text-sm" x="667.5" dy="22">
                                  7,830
                                </tspan>
                                <tspan className="fill-muted-foreground tabular-nums text-xs" dx="6">
                                  59.0%
                                </tspan>
                              </text>
                              <line x1="669.5" x2="669.5" y1="50" y2="58" stroke="var(--border)" strokeDasharray="2 3"></line>
                              <rect className="cursor-pointer" x="667.5" y="64" width="4" height="102.09705882352941" rx="2" fill="var(--color-journey)"></rect>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <rect className="cursor-pointer" x="667.5" y="192.0970588235294" width="4" height="70.80294117647058" rx="2" fill="var(--color-dropped)"></rect>
                              <text className="pointer-events-none text-xs" x="681.5" y="220.4985294117647" textAnchor="start" dominantBaseline="middle" stroke="var(--frame-panel-bg, var(--background))" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                <tspan className="fill-foreground font-medium">
                                  Went Solo
                                </tspan>
                                <tspan className="tabular-nums" x="681.5" dy="15">
                                  <tspan className="fill-muted-foreground">
                                    5,430
                                  </tspan>
                                  <tspan className="fill-muted-foreground" dx="5">
                                    41.0%
                                  </tspan>
                                </tspan>
                              </text>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <text className="pointer-events-none" x="854" y="16" textAnchor="start">
                                <tspan className="fill-muted-foreground text-xs">
                                  Converted
                                </tspan>
                                <tspan className="fill-success font-semibold tabular-nums text-base" x="854" dy="22">
                                  14.4%
                                </tspan>
                              </text>
                              <line x1="856" x2="856" y1="50" y2="58" stroke="var(--border)" strokeDasharray="2 3"></line>
                              <rect className="cursor-pointer" x="854" y="64" width="4" height="38.33529411764706" rx="2" fill="var(--color-upgraded)"></rect>
                              <text className="pointer-events-none text-xs" x="868" y="76.16764705882353" textAnchor="start" dominantBaseline="middle" stroke="var(--frame-panel-bg, var(--background))" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                <tspan className="fill-foreground font-medium">
                                  Upgraded
                                </tspan>
                                <tspan className="tabular-nums" x="868" dy="15">
                                  <tspan className="fill-muted-foreground">
                                    2,940
                                  </tspan>
                                  <tspan className="fill-muted-foreground" dx="5">
                                    37.5%
                                  </tspan>
                                </tspan>
                              </text>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none transition-opacity">
                              <rect className="cursor-pointer" x="854" y="128.33529411764707" width="4" height="63.76176470588235" rx="2" fill="var(--color-dropped)"></rect>
                              <text className="pointer-events-none text-xs" x="868" y="153.21617647058824" textAnchor="start" dominantBaseline="middle" stroke="var(--frame-panel-bg, var(--background))" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                <tspan className="fill-foreground font-medium">
                                  Didn't Upgrade
                                </tspan>
                                <tspan className="tabular-nums" x="868" dy="15">
                                  <tspan className="fill-muted-foreground">
                                    4,890
                                  </tspan>
                                  <tspan className="fill-muted-foreground" dx="5">
                                    62.5%
                                  </tspan>
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
            </div>
          </div>
          <ul className="sr-only">
            <li>
              Docs to Signed Up: 8,420 trials
            </li>
            <li>
              Referrals to Signed Up: 5,960 trials
            </li>
            <li>
              Newsletter to Signed Up: 3,870 trials
            </li>
            <li>
              Marketplace to Signed Up: 2,150 trials
            </li>
            <li>
              Signed Up to Onboarded: 13,260 trials
            </li>
            <li>
              Signed Up to Skipped Setup: 7,140 trials
            </li>
            <li>
              Onboarded to Team Invited: 7,830 trials
            </li>
            <li>
              Onboarded to Went Solo: 5,430 trials
            </li>
            <li>
              Team Invited to Upgraded: 2,940 trials
            </li>
            <li>
              Team Invited to Didn't Upgrade: 4,890 trials
            </li>
          </ul>
        </FramePanel>
        <footer className="flex flex-row flex-wrap gap-(--frame-panel-footer-gap) gap-x-4 gap-y-1 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) text-xs">
          <span className="flex flex-wrap gap-x-4 gap-y-1 items-center text-muted-foreground">
            <span className="gap-1.5 inline-flex items-center">
              <span className="bg-foreground rounded-full shrink-0 size-2" aria-hidden="true"></span>
              In Journey
            </span>
            <span className="gap-1.5 inline-flex items-center">
              <span className="bg-success rounded-full shrink-0 size-2" aria-hidden="true"></span>
              Upgraded
            </span>
            <span className="gap-1.5 inline-flex items-center">
              <span className="bg-destructive rounded-full shrink-0 size-2" aria-hidden="true"></span>
              Dropped Off
            </span>
          </span>
          <span className="text-muted-foreground">
            Pulse density follows trial volume
          </span>
        </footer>
      </Frame>
    </div>
  )
}
