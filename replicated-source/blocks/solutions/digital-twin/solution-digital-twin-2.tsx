import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <main className="md:h-svh min-h-svh w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Kart Live Timing"}
      </h1>
      <div className="bg-zinc-950 dark isolate md:h-svh min-h-svh overflow-hidden relative text-foreground w-full">
        <div className="hidden" aria-hidden="true">
          <span className="text-zinc-800" data-role="deck"></span>
          <span className="text-zinc-300" data-role="kerb"></span>
          <span className="text-zinc-950" data-role="ground"></span>
          <span className="text-zinc-700" data-role="floor"></span>
          <span className="text-zinc-950" data-role="visor"></span>
          <span className="text-white" data-role="white"></span>
          <span className="text-red-500" data-role="d7"></span>
          <span className="text-sky-400" data-role="d23"></span>
          <span className="text-green-500" data-role="d11"></span>
          <span className="text-amber-400" data-role="d4"></span>
          <span className="text-orange-500" data-role="d31"></span>
          <span className="text-blue-500" data-role="d9"></span>
          <span className="text-zinc-100" data-role="d16"></span>
          <span className="text-emerald-500" data-role="d42"></span>
          <span className="text-yellow-400" data-role="d3"></span>
          <span className="text-rose-400" data-role="d88"></span>
          <span className="text-teal-400" data-role="d12"></span>
          <span className="text-stone-300" data-role="d27"></span>
          <span className="text-cyan-500" data-role="d55"></span>
          <span className="text-orange-300" data-role="d19"></span>
          <span className="text-zinc-400" data-role="d70"></span>
        </div>
        <div className="gap-3 grid md:grid-cols-[minmax(0,1fr)_20rem] md:h-full p-3 xl:grid-cols-[minmax(0,1fr)_22rem]">
          <section className="@container/stage flex flex-col gap-3 md:min-h-0 min-h-[640px] min-w-0 relative" aria-label="Live circuit">
            <div className="absolute bg-[radial-gradient(60%_55%_at_50%_58%,color-mix(in_oklch,var(--color-white)_5%,transparent),transparent_70%)] inset-0 pointer-events-none" aria-hidden="true"></div>
            <div className="[mask-image:radial-gradient(ellipse_55%_50%_at_50%_58%,black,transparent)] absolute bg-[repeating-radial-gradient(circle_at_50%_58%,transparent_0,transparent_47px,color-mix(in_oklch,var(--color-white)_2%,transparent)_48px,transparent_49px)] inset-0 pointer-events-none" aria-hidden="true"></div>
            <div className="absolute inset-0">
              <div className="duration-300 ease-out motion-reduce:transition-none opacity-100 size-full touch-none transition-opacity" aria-label="Circuit in 3D with every kart. Drag to orbit, right drag to pan, scroll to zoom." role="img" style={{position: "relative", width: "100%", height: "100%", overflow: "hidden", pointerEvents: "auto"}}>
                <div style={{width: "100%", height: "100%"}}>
                  <canvas style={{display: "block", width: "892px", height: "609px", touchAction: "none", userSelect: "none"}} data-engine="three.js r186" width={892} height={609} data-camera-controls-version="3.1.2"></canvas>
                </div>
              </div>
            </div>
            <Frame className="[--frame-border-color:color-mix(in_oklch,var(--color-white)_9%,transparent)] [--frame-panel-bg:transparent] [--frame-panel-border-color:transparent] backdrop-blur-xl backdrop-saturate-150 bg-white/[0.035] z-10" spacing="default">
              <FramePanel className="@3xl/stage:flex-row @3xl/stage:gap-5 @3xl/stage:items-stretch flex flex-col gap-3">
                <div className="@3xl/stage:flex-col @3xl/stage:items-start @3xl/stage:justify-center @3xl/stage:w-36 flex gap-3 items-center justify-between shrink-0">
                  <div className="flex gap-1.5 h-4 items-center text-xs">
                    <span className="bg-red-500 motion-safe:animate-pulse rounded-full size-1.5" aria-hidden="true"></span>
                    <span className="[text-box:trim-both_cap_alphabetic] text-foreground">
                      {"Live"}
                    </span>
                    <span className="[text-box:trim-both_cap_alphabetic] tabular-nums text-muted-foreground">
                      {"09:35"}
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="font-extralight leading-none tabular-nums text-2xl">
                      {"Lap 13"}
                      <span className="text-base text-muted-foreground">
                        {"/20"}
                      </span>
                    </span>
                    <Button type="button" tabIndex={0} aria-label="Pause race" extracted="1">
                      <svg className="lucide lucide-pause" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PauseIcon" tabler="IconPlayerPause" hugeicons="PauseIcon" phosphor="PauseIcon" remixicon="RiPauseLine" aria-hidden="true">
                        <rect x={14} y={3} width={5} height={18} rx={1}></rect>
                        <rect x={5} y={3} width={5} height={18} rx={1}></rect>
                      </svg>
                    </Button>
                  </div>
                </div>
                <div className="@3xl/stage:mx-6 flex-1 min-w-0 relative">
                  <div className="flex h-4 items-center justify-between mb-1 text-muted-foreground text-xs">
                    <span className="[text-box:trim-both_cap_alphabetic]">
                      {"Gap to Leader"}
                    </span>
                  </div>
                  <div className="h-14 relative" role="toolbar" aria-label="Karts by interval to the leader">
                    <div className="absolute bg-white/15 bottom-2 h-px inset-x-0" aria-hidden="true"></div>
                    <div className="absolute bottom-0 duration-300 ease-out inset-x-0 motion-reduce:transition-none pointer-events-none transition-transform" style={{transform: "translateX(0%)"}}>
                      <button className="-translate-x-1/2 flex flex-col gap-1 group/kart items-center outline-none pointer-events-auto text-red-500 w-6" type="button" aria-pressed="false" aria-label="P1, kart 7, Rafa Okoye">
                        <span className="font-light leading-none opacity-85 tabular-nums text-sm text-white">
                          {"7"}
                        </span>
                        <span className="bg-current duration-150 group-focus-visible/kart:ring-2 group-focus-visible/kart:ring-ring group-hover/kart:scale-125 ring-current/30 rounded-full size-2 transition-transform" aria-hidden="true"></span>
                      </button>
                    </div>
                    <div className="absolute bottom-0 duration-300 ease-out inset-x-0 motion-reduce:transition-none pointer-events-none transition-transform" style={{transform: "translateX(4.91586%)"}}>
                      <button className="-translate-x-1/2 flex flex-col gap-1 group/kart items-center outline-none pointer-events-auto text-sky-400 w-6" type="button" aria-pressed="false" aria-label="P2, kart 23, Lena Brandt">
                        <span className="font-light leading-none opacity-85 tabular-nums text-sm text-white">
                          {"23"}
                        </span>
                        <span className="bg-current duration-150 group-focus-visible/kart:ring-2 group-focus-visible/kart:ring-ring group-hover/kart:scale-125 ring-current/30 rounded-full size-2 transition-transform" aria-hidden="true"></span>
                      </button>
                    </div>
                    <div className="absolute bottom-0 duration-300 ease-out inset-x-0 motion-reduce:transition-none pointer-events-none transition-transform" style={{transform: "translateX(11.7521%)"}}>
                      <button className="-translate-x-1/2 flex flex-col gap-1 group/kart items-center outline-none pointer-events-auto text-green-500 w-6" type="button" aria-pressed="false" aria-label="P3, kart 11, Kai Moreno">
                        <span className="font-light leading-none opacity-85 tabular-nums text-sm text-white">
                          {"11"}
                        </span>
                        <span className="bg-current duration-150 group-focus-visible/kart:ring-2 group-focus-visible/kart:ring-ring group-hover/kart:scale-125 ring-current/30 rounded-full size-2 transition-transform" aria-hidden="true"></span>
                      </button>
                    </div>
                    <div className="absolute bottom-0 duration-300 ease-out inset-x-0 motion-reduce:transition-none pointer-events-none transition-transform" style={{transform: "translateX(14.8085%)"}}>
                      <button className="-translate-x-1/2 flex flex-col gap-1 group/kart items-center outline-none pointer-events-auto text-amber-400 w-6" type="button" aria-pressed="false" aria-label="P4, kart 4, Amira Hale">
                        <span className="-translate-y-5 font-light leading-none opacity-85 tabular-nums text-sm text-white">
                          {"4"}
                        </span>
                        <span className="bg-current duration-150 group-focus-visible/kart:ring-2 group-focus-visible/kart:ring-ring group-hover/kart:scale-125 ring-current/30 rounded-full size-2 transition-transform" aria-hidden="true"></span>
                      </button>
                    </div>
                    <div className="absolute bottom-0 duration-300 ease-out inset-x-0 motion-reduce:transition-none pointer-events-none transition-transform" style={{transform: "translateX(21.4239%)"}}>
                      <button className="-translate-x-1/2 flex flex-col gap-1 group/kart items-center outline-none pointer-events-auto text-orange-500 w-6" type="button" aria-pressed="false" aria-label="P5, kart 31, Jonas Vik">
                        <span className="font-light leading-none opacity-85 tabular-nums text-sm text-white">
                          {"31"}
                        </span>
                        <span className="bg-current duration-150 group-focus-visible/kart:ring-2 group-focus-visible/kart:ring-ring group-hover/kart:scale-125 ring-current/30 rounded-full size-2 transition-transform" aria-hidden="true"></span>
                      </button>
                    </div>
                    <div className="absolute bottom-0 duration-300 ease-out inset-x-0 motion-reduce:transition-none pointer-events-none transition-transform" style={{transform: "translateX(23.7955%)"}}>
                      <button className="-translate-x-1/2 flex flex-col gap-1 group/kart items-center outline-none pointer-events-auto text-blue-500 w-6" type="button" aria-pressed="false" aria-label="P6, kart 9, Mei Arata">
                        <span className="-translate-y-5 font-light leading-none opacity-85 tabular-nums text-sm text-white">
                          {"9"}
                        </span>
                        <span className="bg-current duration-150 group-focus-visible/kart:ring-2 group-focus-visible/kart:ring-ring group-hover/kart:scale-125 ring-current/30 rounded-full size-2 transition-transform" aria-hidden="true"></span>
                      </button>
                    </div>
                    <div className="absolute bottom-0 duration-300 ease-out inset-x-0 motion-reduce:transition-none pointer-events-none transition-transform" style={{transform: "translateX(30.4266%)"}}>
                      <button className="-translate-x-1/2 flex flex-col gap-1 group/kart items-center outline-none pointer-events-auto text-zinc-100 w-6" type="button" aria-pressed="false" aria-label="P7, kart 16, Dario Kell">
                        <span className="font-light leading-none opacity-85 tabular-nums text-sm text-white">
                          {"16"}
                        </span>
                        <span className="bg-current duration-150 group-focus-visible/kart:ring-2 group-focus-visible/kart:ring-ring group-hover/kart:scale-125 ring-current/30 rounded-full size-2 transition-transform" aria-hidden="true"></span>
                      </button>
                    </div>
                    <div className="absolute bottom-0 duration-300 ease-out inset-x-0 motion-reduce:transition-none pointer-events-none transition-transform" style={{transform: "translateX(33.9449%)"}}>
                      <button className="-translate-x-1/2 flex flex-col gap-1 group/kart items-center outline-none pointer-events-auto text-emerald-500 w-6" type="button" aria-pressed="false" aria-label="P8, kart 42, Ines Duval">
                        <span className="-translate-y-5 font-light leading-none opacity-85 tabular-nums text-sm text-white">
                          {"42"}
                        </span>
                        <span className="bg-current duration-150 group-focus-visible/kart:ring-2 group-focus-visible/kart:ring-ring group-hover/kart:scale-125 ring-current/30 rounded-full size-2 transition-transform" aria-hidden="true"></span>
                      </button>
                    </div>
                    <div className="absolute bottom-0 duration-300 ease-out inset-x-0 motion-reduce:transition-none pointer-events-none transition-transform" style={{transform: "translateX(39.6616%)"}}>
                      <button className="-translate-x-1/2 flex flex-col gap-1 group/kart items-center outline-none pointer-events-auto text-yellow-400 w-6" type="button" aria-pressed="false" aria-label="P9, kart 3, Tomas Reyes">
                        <span className="font-light leading-none opacity-85 tabular-nums text-sm text-white">
                          {"3"}
                        </span>
                        <span className="bg-current duration-150 group-focus-visible/kart:ring-2 group-focus-visible/kart:ring-ring group-hover/kart:scale-125 ring-current/30 rounded-full size-2 transition-transform" aria-hidden="true"></span>
                      </button>
                    </div>
                    <div className="absolute bottom-0 duration-300 ease-out inset-x-0 motion-reduce:transition-none pointer-events-none transition-transform" style={{transform: "translateX(45.2186%)"}}>
                      <button className="-translate-x-1/2 flex flex-col gap-1 group/kart items-center outline-none pointer-events-auto text-rose-400 w-6" type="button" aria-pressed="false" aria-label="P10, kart 88, Zara Holm">
                        <span className="font-light leading-none opacity-85 tabular-nums text-sm text-white">
                          {"88"}
                        </span>
                        <span className="bg-current duration-150 group-focus-visible/kart:ring-2 group-focus-visible/kart:ring-ring group-hover/kart:scale-125 ring-current/30 rounded-full size-2 transition-transform" aria-hidden="true"></span>
                      </button>
                    </div>
                    <div className="absolute bottom-0 duration-300 ease-out inset-x-0 motion-reduce:transition-none pointer-events-none transition-transform" style={{transform: "translateX(51.0905%)"}}>
                      <button className="-translate-x-1/2 flex flex-col gap-1 group/kart items-center outline-none pointer-events-auto text-teal-400 w-6" type="button" aria-pressed="false" aria-label="P11, kart 12, Niko Saar">
                        <span className="font-light leading-none opacity-85 tabular-nums text-sm text-white">
                          {"12"}
                        </span>
                        <span className="bg-current duration-150 group-focus-visible/kart:ring-2 group-focus-visible/kart:ring-ring group-hover/kart:scale-125 ring-current/30 rounded-full size-2 transition-transform" aria-hidden="true"></span>
                      </button>
                    </div>
                    <div className="absolute bottom-0 duration-300 ease-out inset-x-0 motion-reduce:transition-none pointer-events-none transition-transform" style={{transform: "translateX(55.1116%)"}}>
                      <button className="-translate-x-1/2 flex flex-col gap-1 group/kart items-center outline-none pointer-events-auto text-stone-300 w-6" type="button" aria-pressed="false" aria-label="P12, kart 27, Ayla Brook">
                        <span className="font-light leading-none opacity-85 tabular-nums text-sm text-white">
                          {"27"}
                        </span>
                        <span className="bg-current duration-150 group-focus-visible/kart:ring-2 group-focus-visible/kart:ring-ring group-hover/kart:scale-125 ring-current/30 rounded-full size-2 transition-transform" aria-hidden="true"></span>
                      </button>
                    </div>
                    <div className="absolute bottom-0 duration-300 ease-out inset-x-0 motion-reduce:transition-none pointer-events-none transition-transform" style={{transform: "translateX(62.8378%)"}}>
                      <button className="-translate-x-1/2 flex flex-col gap-1 group/kart items-center outline-none pointer-events-auto text-cyan-500 w-6" type="button" aria-pressed="false" aria-label="P13, kart 55, Hugo Lane">
                        <span className="font-light leading-none opacity-85 tabular-nums text-sm text-white">
                          {"55"}
                        </span>
                        <span className="bg-current duration-150 group-focus-visible/kart:ring-2 group-focus-visible/kart:ring-ring group-hover/kart:scale-125 ring-current/30 rounded-full size-2 transition-transform" aria-hidden="true"></span>
                      </button>
                    </div>
                    <div className="absolute bottom-0 duration-300 ease-out inset-x-0 motion-reduce:transition-none pointer-events-none transition-transform" style={{transform: "translateX(65.1548%)"}}>
                      <button className="-translate-x-1/2 flex flex-col gap-1 group/kart items-center outline-none pointer-events-auto text-orange-300 w-6" type="button" aria-pressed="false" aria-label="P14, kart 19, Vera Quist">
                        <span className="-translate-y-5 font-light leading-none opacity-85 tabular-nums text-sm text-white">
                          {"19"}
                        </span>
                        <span className="bg-current duration-150 group-focus-visible/kart:ring-2 group-focus-visible/kart:ring-ring group-hover/kart:scale-125 ring-current/30 rounded-full size-2 transition-transform" aria-hidden="true"></span>
                      </button>
                    </div>
                    <div className="absolute bottom-0 duration-300 ease-out inset-x-0 motion-reduce:transition-none pointer-events-none transition-transform" style={{transform: "translateX(75.8449%)"}}>
                      <button className="-translate-x-1/2 flex flex-col gap-1 group/kart items-center outline-none pointer-events-auto text-zinc-400 w-6" type="button" aria-pressed="false" aria-label="P15, kart 70, Sami Roux">
                        <span className="font-light leading-none opacity-85 tabular-nums text-sm text-white">
                          {"70"}
                        </span>
                        <span className="bg-current duration-150 group-focus-visible/kart:ring-2 group-focus-visible/kart:ring-ring group-hover/kart:scale-125 ring-current/30 rounded-full size-2 transition-transform" aria-hidden="true"></span>
                      </button>
                    </div>
                  </div>
                  <div className="h-3 mt-1 relative tabular-nums text-muted-foreground text-xs" aria-hidden="true">
                    <span className="-translate-x-1/2 absolute" style={{left: "0%"}}>
                      {"0"}
                    </span>
                    <span className="-translate-x-1/2 absolute" style={{left: "22%"}}>
                      {"+5s"}
                    </span>
                    <span className="-translate-x-1/2 absolute" style={{left: "44%"}}>
                      {"+10s"}
                    </span>
                    <span className="-translate-x-1/2 absolute" style={{left: "66%"}}>
                      {"+15s"}
                    </span>
                    <span className="-translate-x-1/2 absolute" style={{left: "88%"}}>
                      {"+20s"}
                    </span>
                  </div>
                </div>
                <div className="@3xl/stage:flex-col @3xl/stage:items-end @3xl/stage:justify-center @3xl/stage:w-36 flex gap-3 items-center justify-between shrink-0">
                  <span className="text-muted-foreground text-xs">
                    {"Fastest Lap"}
                  </span>
                  <span className="flex gap-2 items-center">
                    <span className="font-extralight leading-none tabular-nums text-lg">
                      {"0:47.117"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/5 border border-white/15 dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-light gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-white text-xs transition-shadow">
                      <span className="[text-box:trim-both_cap_alphabetic]">
                        {"23"}
                      </span>
                    </Badge>
                  </span>
                </div>
              </FramePanel>
            </Frame>
            <div className="flex flex-1 flex-col min-h-0 pointer-events-none relative z-10">
              <div className="flex gap-4 items-start justify-between">
                <div className="flex flex-col gap-2 min-w-0">
                  <h2 className="@3xl/stage:text-6xl font-extralight leading-none text-4xl text-white/15 tracking-tight">
                    {"Kenari Kart Circuit"}
                  </h2>
                  <p className="@max-lg/stage:flex-col @max-lg/stage:items-start flex gap-1.5 items-center text-white/45 text-xs">
                    <span>
                      {"Sepang, Selangor"}
                    </span>
                    <span className="@max-lg/stage:hidden bg-muted-foreground/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="flex gap-1.5 items-center">
                      <span className="tabular-nums">
                        {"1,200 m"}
                      </span>
                      <span className="bg-muted-foreground/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span>
                        {"14 corners"}
                      </span>
                    </span>
                  </p>
                </div>
                <div className="flex gap-2 items-center pointer-events-auto shrink-0">
                  <ToggleGroup className="backdrop-blur-xl bg-white/10 p-0.5" data-orientation="horizontal" aria-orientation="horizontal" role="group" spacing="1" aria-label="Map view" style={{"--gap": "1"}}>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-default data-pressed:bg-white data-pressed:hover:bg-white data-pressed:text-zinc-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-transparent hover:text-foreground inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex={0} aria-pressed="true" variant="default" size="default" spacing="1">
                      <span className="[text-box:trim-both_cap_alphabetic]">
                        {"3D"}
                      </span>
                    </ToggleGroupItem>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-default data-pressed:bg-white data-pressed:hover:bg-white data-pressed:text-zinc-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-transparent hover:text-foreground inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="default" size="default" spacing="1">
                      <span className="[text-box:trim-both_cap_alphabetic]">
                        {"2D"}
                      </span>
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <ButtonGroup role="group" aria-label="Zoom">
                    <Button type="button" tabIndex={0} aria-label="Zoom out">
                      <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                        <path d="M5 12h14"></path>
                      </svg>
                    </Button>
                    <Button type="button" tabIndex={0} aria-label="Zoom in">
                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </Button>
                  </ButtonGroup>
                  <Button type="button" tabIndex={0} aria-label="Reset view">
                    <svg className="lucide lucide-rotate-ccw" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RotateCcwIcon" tabler="IconRefresh" hugeicons="UndoIcon" phosphor="ArrowCounterClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                      <path d="M3 3v5h5"></path>
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center"></div>
              <p className="flex gap-1.5 items-center max-md:hidden self-start text-muted-foreground text-xs">
                <span>
                  {"Click a helmet to follow"}
                </span>
                <span className="bg-muted-foreground/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  {"Drag to orbit"}
                </span>
                <span className="bg-muted-foreground/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  {"Scroll to zoom"}
                </span>
              </p>
            </div>
          </section>
          <aside className="flex flex-col gap-3 md:grid md:grid-rows-[minmax(0,7fr)_minmax(0,3fr)] md:min-h-0 min-w-0" aria-label="Race standings">
            <Frame className="[--frame-border-color:color-mix(in_oklch,var(--color-white)_9%,transparent)] [--frame-panel-bg:transparent] [--frame-panel-border-color:transparent] backdrop-blur-xl backdrop-saturate-150 bg-white/[0.035] max-md:max-h-[32rem] md:min-h-0" spacing="default">
              <FramePanel className="flex flex-col gap-3 min-h-0">
                <div className="flex gap-2 h-6 items-center justify-between">
                  <h2 className="font-medium text-sm">
                    <span className="[text-box:trim-both_cap_alphabetic]">
                      {"Standings"}
                    </span>
                  </h2>
                  <span className="tabular-nums text-muted-foreground text-xs">
                    {"Lap 13 of 20"}
                  </span>
                </div>
                <div className="gap-2 grid grid-cols-[1.75rem_minmax(0,1fr)_2.5rem_4.25rem] items-center px-2 text-foreground/70 text-xs" aria-hidden="true">
                  <span>
                    {"Pos"}
                  </span>
                  <span>
                    {"Driver"}
                  </span>
                  <span className="text-right">
                    {"Laps"}
                  </span>
                  <span className="text-right">
                    {"Best"}
                  </span>
                </div>
                <ol className="-mx-1 flex flex-1 flex-col gap-0.5 min-h-0 overflow-y-auto px-1 scroll-fade">
                  <li>
                    <button className="duration-150 focus-visible:ring-2 focus-visible:ring-ring gap-2 grid grid-cols-[1.75rem_minmax(0,1fr)_2.5rem_4.25rem] h-9 hover:bg-white/[0.06] items-center motion-reduce:transition-none outline-none px-2 rounded-full text-left text-sm transition-colors w-full" type="button" aria-pressed="false">
                      <span className="font-light tabular-nums text-white">
                        {"1"}
                      </span>
                      <span className="flex gap-2 items-center min-w-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/5 border border-white/15 dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-light gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-white text-xs transition-shadow">
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"7"}
                          </span>
                        </Badge>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"Rafa Okoye"}
                        </span>
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right">
                        {"12"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right text-xs">
                        {"0:47.148"}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="duration-150 focus-visible:ring-2 focus-visible:ring-ring gap-2 grid grid-cols-[1.75rem_minmax(0,1fr)_2.5rem_4.25rem] h-9 hover:bg-white/[0.06] items-center motion-reduce:transition-none outline-none px-2 rounded-full text-left text-sm transition-colors w-full" type="button" aria-pressed="false">
                      <span className="font-light tabular-nums text-white">
                        {"2"}
                      </span>
                      <span className="flex gap-2 items-center min-w-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/5 border border-white/15 dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-light gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-white text-xs transition-shadow">
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"23"}
                          </span>
                        </Badge>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"Lena Brandt"}
                        </span>
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right">
                        {"12"}
                      </span>
                      <span className="font-medium tabular-nums text-foreground text-right text-xs">
                        {"0:47.117"}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="duration-150 focus-visible:ring-2 focus-visible:ring-ring gap-2 grid grid-cols-[1.75rem_minmax(0,1fr)_2.5rem_4.25rem] h-9 hover:bg-white/[0.06] items-center motion-reduce:transition-none outline-none px-2 rounded-full text-left text-sm transition-colors w-full" type="button" aria-pressed="false">
                      <span className="font-light tabular-nums text-white">
                        {"3"}
                      </span>
                      <span className="flex gap-2 items-center min-w-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/5 border border-white/15 dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-light gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-white text-xs transition-shadow">
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"11"}
                          </span>
                        </Badge>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"Kai Moreno"}
                        </span>
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right">
                        {"12"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right text-xs">
                        {"0:47.448"}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="duration-150 focus-visible:ring-2 focus-visible:ring-ring gap-2 grid grid-cols-[1.75rem_minmax(0,1fr)_2.5rem_4.25rem] h-9 hover:bg-white/[0.06] items-center motion-reduce:transition-none outline-none px-2 rounded-full text-left text-sm transition-colors w-full" type="button" aria-pressed="false">
                      <span className="font-light tabular-nums text-muted-foreground">
                        {"4"}
                      </span>
                      <span className="flex gap-2 items-center min-w-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/5 border border-white/15 dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-light gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-white text-xs transition-shadow">
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"4"}
                          </span>
                        </Badge>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"Amira Hale"}
                        </span>
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right">
                        {"12"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right text-xs">
                        {"0:47.473"}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="duration-150 focus-visible:ring-2 focus-visible:ring-ring gap-2 grid grid-cols-[1.75rem_minmax(0,1fr)_2.5rem_4.25rem] h-9 hover:bg-white/[0.06] items-center motion-reduce:transition-none outline-none px-2 rounded-full text-left text-sm transition-colors w-full" type="button" aria-pressed="false">
                      <span className="font-light tabular-nums text-muted-foreground">
                        {"5"}
                      </span>
                      <span className="flex gap-2 items-center min-w-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/5 border border-white/15 dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-light gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-white text-xs transition-shadow">
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"31"}
                          </span>
                        </Badge>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"Jonas Vik"}
                        </span>
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right">
                        {"11"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right text-xs">
                        {"0:47.514"}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="duration-150 focus-visible:ring-2 focus-visible:ring-ring gap-2 grid grid-cols-[1.75rem_minmax(0,1fr)_2.5rem_4.25rem] h-9 hover:bg-white/[0.06] items-center motion-reduce:transition-none outline-none px-2 rounded-full text-left text-sm transition-colors w-full" type="button" aria-pressed="false">
                      <span className="font-light tabular-nums text-muted-foreground">
                        {"6"}
                      </span>
                      <span className="flex gap-2 items-center min-w-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/5 border border-white/15 dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-light gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-white text-xs transition-shadow">
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"9"}
                          </span>
                        </Badge>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"Mei Arata"}
                        </span>
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right">
                        {"11"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right text-xs">
                        {"0:47.641"}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="duration-150 focus-visible:ring-2 focus-visible:ring-ring gap-2 grid grid-cols-[1.75rem_minmax(0,1fr)_2.5rem_4.25rem] h-9 hover:bg-white/[0.06] items-center motion-reduce:transition-none outline-none px-2 rounded-full text-left text-sm transition-colors w-full" type="button" aria-pressed="false">
                      <span className="font-light tabular-nums text-muted-foreground">
                        {"7"}
                      </span>
                      <span className="flex gap-2 items-center min-w-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/5 border border-white/15 dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-light gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-white text-xs transition-shadow">
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"16"}
                          </span>
                        </Badge>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"Dario Kell"}
                        </span>
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right">
                        {"11"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right text-xs">
                        {"0:47.517"}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="duration-150 focus-visible:ring-2 focus-visible:ring-ring gap-2 grid grid-cols-[1.75rem_minmax(0,1fr)_2.5rem_4.25rem] h-9 hover:bg-white/[0.06] items-center motion-reduce:transition-none outline-none px-2 rounded-full text-left text-sm transition-colors w-full" type="button" aria-pressed="false">
                      <span className="font-light tabular-nums text-muted-foreground">
                        {"8"}
                      </span>
                      <span className="flex gap-2 items-center min-w-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/5 border border-white/15 dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-light gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-white text-xs transition-shadow">
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"42"}
                          </span>
                        </Badge>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"Ines Duval"}
                        </span>
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right">
                        {"11"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right text-xs">
                        {"0:47.802"}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="duration-150 focus-visible:ring-2 focus-visible:ring-ring gap-2 grid grid-cols-[1.75rem_minmax(0,1fr)_2.5rem_4.25rem] h-9 hover:bg-white/[0.06] items-center motion-reduce:transition-none outline-none px-2 rounded-full text-left text-sm transition-colors w-full" type="button" aria-pressed="false">
                      <span className="font-light tabular-nums text-muted-foreground">
                        {"9"}
                      </span>
                      <span className="flex gap-2 items-center min-w-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/5 border border-white/15 dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-light gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-white text-xs transition-shadow">
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"3"}
                          </span>
                        </Badge>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"Tomas Reyes"}
                        </span>
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right">
                        {"11"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right text-xs">
                        {"0:47.696"}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="duration-150 focus-visible:ring-2 focus-visible:ring-ring gap-2 grid grid-cols-[1.75rem_minmax(0,1fr)_2.5rem_4.25rem] h-9 hover:bg-white/[0.06] items-center motion-reduce:transition-none outline-none px-2 rounded-full text-left text-sm transition-colors w-full" type="button" aria-pressed="false">
                      <span className="font-light tabular-nums text-muted-foreground">
                        {"10"}
                      </span>
                      <span className="flex gap-2 items-center min-w-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/5 border border-white/15 dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-light gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-white text-xs transition-shadow">
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"88"}
                          </span>
                        </Badge>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"Zara Holm"}
                        </span>
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right">
                        {"11"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right text-xs">
                        {"0:47.830"}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="duration-150 focus-visible:ring-2 focus-visible:ring-ring gap-2 grid grid-cols-[1.75rem_minmax(0,1fr)_2.5rem_4.25rem] h-9 hover:bg-white/[0.06] items-center motion-reduce:transition-none outline-none px-2 rounded-full text-left text-sm transition-colors w-full" type="button" aria-pressed="false">
                      <span className="font-light tabular-nums text-muted-foreground">
                        {"11"}
                      </span>
                      <span className="flex gap-2 items-center min-w-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/5 border border-white/15 dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-light gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-white text-xs transition-shadow">
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"12"}
                          </span>
                        </Badge>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"Niko Saar"}
                        </span>
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right">
                        {"11"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right text-xs">
                        {"0:47.838"}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="duration-150 focus-visible:ring-2 focus-visible:ring-ring gap-2 grid grid-cols-[1.75rem_minmax(0,1fr)_2.5rem_4.25rem] h-9 hover:bg-white/[0.06] items-center motion-reduce:transition-none outline-none px-2 rounded-full text-left text-sm transition-colors w-full" type="button" aria-pressed="false">
                      <span className="font-light tabular-nums text-muted-foreground">
                        {"12"}
                      </span>
                      <span className="flex gap-2 items-center min-w-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/5 border border-white/15 dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-light gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-white text-xs transition-shadow">
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"27"}
                          </span>
                        </Badge>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"Ayla Brook"}
                        </span>
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right">
                        {"11"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right text-xs">
                        {"0:48.193"}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="duration-150 focus-visible:ring-2 focus-visible:ring-ring gap-2 grid grid-cols-[1.75rem_minmax(0,1fr)_2.5rem_4.25rem] h-9 hover:bg-white/[0.06] items-center motion-reduce:transition-none outline-none px-2 rounded-full text-left text-sm transition-colors w-full" type="button" aria-pressed="false">
                      <span className="font-light tabular-nums text-muted-foreground">
                        {"13"}
                      </span>
                      <span className="flex gap-2 items-center min-w-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/5 border border-white/15 dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-light gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-white text-xs transition-shadow">
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"55"}
                          </span>
                        </Badge>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"Hugo Lane"}
                        </span>
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right">
                        {"11"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right text-xs">
                        {"0:48.236"}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="duration-150 focus-visible:ring-2 focus-visible:ring-ring gap-2 grid grid-cols-[1.75rem_minmax(0,1fr)_2.5rem_4.25rem] h-9 hover:bg-white/[0.06] items-center motion-reduce:transition-none outline-none px-2 rounded-full text-left text-sm transition-colors w-full" type="button" aria-pressed="false">
                      <span className="font-light tabular-nums text-muted-foreground">
                        {"14"}
                      </span>
                      <span className="flex gap-2 items-center min-w-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/5 border border-white/15 dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-light gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-white text-xs transition-shadow">
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"19"}
                          </span>
                        </Badge>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"Vera Quist"}
                        </span>
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right">
                        {"11"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right text-xs">
                        {"0:48.321"}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="duration-150 focus-visible:ring-2 focus-visible:ring-ring gap-2 grid grid-cols-[1.75rem_minmax(0,1fr)_2.5rem_4.25rem] h-9 hover:bg-white/[0.06] items-center motion-reduce:transition-none outline-none px-2 rounded-full text-left text-sm transition-colors w-full" type="button" aria-pressed="false">
                      <span className="font-light tabular-nums text-muted-foreground">
                        {"15"}
                      </span>
                      <span className="flex gap-2 items-center min-w-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/5 border border-white/15 dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-light gap-1 h-5 min-w-7 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-white text-xs transition-shadow">
                          <span className="[text-box:trim-both_cap_alphabetic]">
                            {"70"}
                          </span>
                        </Badge>
                        <span className="[text-box:trim-both_cap_alphabetic] overflow-x-clip text-ellipsis whitespace-nowrap">
                          {"Sami Roux"}
                        </span>
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right">
                        {"11"}
                      </span>
                      <span className="tabular-nums text-muted-foreground text-right text-xs">
                        {"0:48.356"}
                      </span>
                    </button>
                  </li>
                </ol>
              </FramePanel>
            </Frame>
            <Frame className="[--frame-border-color:color-mix(in_oklch,var(--color-white)_9%,transparent)] [--frame-panel-bg:transparent] [--frame-panel-border-color:transparent] backdrop-blur-xl backdrop-saturate-150 bg-white/[0.035] md:min-h-0" spacing="default">
              <FramePanel className="flex flex-col isolate justify-between min-h-56 text-white" aria-live="polite">
                <div className="-z-20 absolute bg-red-500 inset-0 opacity-90" aria-hidden="true"></div>
                <img className="-z-10 [mask-image:linear-gradient(to_right,transparent,black_45%)] absolute h-full inset-y-0 object-cover right-0 w-3/5" alt="Rafa Okoye in race kit" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=480&h=600&fit=crop&crop=faces&dpr=2&q=80" />
                <div className="-z-10 absolute bg-gradient-to-t from-black/75 inset-0 to-black/30 via-black/10" aria-hidden="true"></div>
                <div className="flex gap-3 items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-extralight leading-none tabular-nums text-5xl">
                      {"P1"}
                    </span>
                    <span className="font-extralight mt-1 tabular-nums text-sm text-white/80">
                      {"#7"}
                    </span>
                  </div>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-white/40 dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                    <span className="[text-box:trim-both_cap_alphabetic]">
                      {"Leader"}
                    </span>
                  </Badge>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-light leading-tight text-2xl">
                    {"Rafa Okoye"}
                  </span>
                  <span className="flex flex-wrap gap-1.5 items-center tabular-nums text-white/75 text-xs">
                    <span>
                      {"Best 0:47.148"}
                    </span>
                    <span className="bg-muted-foreground/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span>
                      {"Leader"}
                    </span>
                    <span className="bg-muted-foreground/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span>
                      {"12 laps"}
                    </span>
                  </span>
                </div>
              </FramePanel>
            </Frame>
          </aside>
        </div>
      </div>
    </main>
  )
}
