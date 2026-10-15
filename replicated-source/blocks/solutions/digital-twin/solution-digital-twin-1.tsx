import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <main className="md:h-svh min-h-svh w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Match Tickets"}
      </h1>
      <div className="bg-background dark isolate md:h-svh min-h-svh overflow-hidden relative text-foreground w-full">
        <div className="hidden" aria-hidden="true">
          <span className="text-amber-400" data-role="premium"></span>
          <span className="text-pink-700" data-role="standard"></span>
          <span className="text-blue-700" data-role="value"></span>
          <span className="dark:text-zinc-700 text-zinc-300" data-role="structure"></span>
          <span className="dark:text-zinc-900 text-zinc-500" data-role="shadow"></span>
          <span className="dark:text-zinc-900 text-zinc-200" data-role="ground"></span>
          <span className="dark:text-zinc-800 text-zinc-300" data-role="wall"></span>
          <span className="dark:text-zinc-700 text-zinc-50" data-role="terrace"></span>
          <span className="dark:text-zinc-600 text-zinc-400" data-role="sold"></span>
          <span className="dark:text-zinc-400 text-zinc-500" data-role="rim"></span>
          <span className="dark:text-zinc-300 text-white" data-role="line"></span>
          <span className="text-white" data-role="white"></span>
          <span className="dark:text-white text-zinc-950" data-role="ink"></span>
          <span className="dark:text-emerald-950 text-emerald-700" data-role="pitch"></span>
          <span className="dark:text-emerald-900 text-emerald-600" data-role="stripe"></span>
          <span className="text-blue-950" data-role="night"></span>
          <span className="text-orange-200" data-role="skin"></span>
        </div>
        <div className="-z-10 absolute bg-[radial-gradient(60%_55%_at_12%_8%,color-mix(in_oklch,var(--color-blue-200)_55%,transparent),transparent_70%),radial-gradient(55%_50%_at_92%_96%,color-mix(in_oklch,var(--color-pink-200)_50%,transparent),transparent_70%),radial-gradient(40%_35%_at_55%_55%,color-mix(in_oklch,var(--color-blue-100)_60%,transparent),transparent_75%)] dark:bg-[radial-gradient(60%_55%_at_12%_8%,color-mix(in_oklch,var(--color-blue-800)_55%,transparent),transparent_70%),radial-gradient(55%_50%_at_92%_96%,color-mix(in_oklch,var(--color-rose-900)_55%,transparent),transparent_70%),radial-gradient(40%_35%_at_55%_55%,color-mix(in_oklch,var(--color-blue-950)_60%,transparent),transparent_75%)] inset-0 pointer-events-none" aria-hidden="true"></div>
        <div className="gap-3 grid md:grid-cols-[minmax(0,1fr)_20rem] md:h-full p-3 xl:grid-cols-[minmax(0,1fr)_22rem]">
          <section className="@container/stage flex flex-col gap-3 md:min-h-0 min-h-[640px] min-w-0 relative" aria-label="Seat map">
            <div className="absolute inset-0">
              <div className="duration-300 ease-out motion-reduce:transition-none opacity-100 size-full touch-none transition-opacity" aria-label="Stadium in 3D. Drag to orbit, right drag to pan, scroll to zoom." role="img" style={{position: "relative", width: "100%", height: "100%", overflow: "hidden", pointerEvents: "auto"}}>
                <div style={{width: "100%", height: "100%"}}>
                  <canvas style={{display: "block", width: "892px", height: "609px", touchAction: "none", userSelect: "none"}} data-engine="three.js r186" width={892} height={609} data-camera-controls-version="3.1.2"></canvas>
                </div>
              </div>
            </div>
            <Frame className="[--frame-border-color:color-mix(in_oklch,var(--color-black)_7%,transparent)] [--frame-panel-bg:transparent] [--frame-panel-border-color:transparent] backdrop-blur-xl backdrop-saturate-150 bg-white/80 dark:[--frame-border-color:color-mix(in_oklch,var(--color-white)_9%,transparent)] dark:bg-white/[0.035] z-10" spacing="default">
              <FramePanel className="@xl/stage:flex-row @xl/stage:gap-4 @xl/stage:items-stretch flex flex-col gap-3">
                <div className="@xl/stage:flex-col @xl/stage:items-start @xl/stage:justify-center @xl/stage:w-28 flex gap-2 items-center justify-between shrink-0">
                  <div className="text-muted-foreground text-xs">
                    {"Price Range"}
                  </div>
                  <div className="font-medium tabular-nums text-sm">
                    {"€38 to €236"}
                  </div>
                </div>
                <div className="flex-1 min-w-0 relative">
                  <div className="h-10 relative" role="toolbar" aria-label="Sectors by price, walking round the bowl">
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="121" tabIndex={0} aria-pressed="false" aria-label="Sector 121, €135 to €195" style={{left: "0.714286%"}} data-extracted="1">
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-amber-400 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "78%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-amber-400 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "63.6%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="221" tabIndex={-1} disabled aria-pressed="false" aria-label="Sector 221, €106 to €154, sold out" style={{left: "2.14286%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-zinc-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-40 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "61.6%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="325" tabIndex={-1} aria-pressed="false" aria-label="Sector 325, €65 to €94" style={{left: "3.57143%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "37.6%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "29.6%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="122" tabIndex={-1} aria-pressed="false" aria-label="Sector 122, €141 to €205" style={{left: "5%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-amber-400 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "82%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-amber-400 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "66.4%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="222" tabIndex={-1} aria-pressed="false" aria-label="Sector 222, €111 to €161" style={{left: "6.42857%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-pink-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "64.4%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-pink-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "50.8%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="326" tabIndex={-1} aria-pressed="false" aria-label="Sector 326, €68 to €99" style={{left: "7.85714%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "39.6%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "31.6%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="101" tabIndex={-1} aria-pressed="false" aria-label="Sector 101, €162 to €236" style={{left: "9.28571%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-amber-400 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "94.4%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-amber-400 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "73.6%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="201" tabIndex={-1} aria-pressed="false" aria-label="Sector 201, €126 to €184" style={{left: "10.7143%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-amber-400 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "73.6%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-amber-400 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "66.4%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="301" tabIndex={-1} aria-pressed="false" aria-label="Sector 301, €77 to €112" style={{left: "12.1429%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-pink-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "44.8%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-pink-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "38.8%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="302" tabIndex={-1} aria-pressed="false" aria-label="Sector 302, €68 to €99" style={{left: "13.5714%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "39.6%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "32%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="102" tabIndex={-1} aria-pressed="false" aria-label="Sector 102, €141 to €205" style={{left: "15%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-amber-400 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "82%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-amber-400 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "69.2%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="202" tabIndex={-1} disabled aria-pressed="false" aria-label="Sector 202, €111 to €161, sold out" style={{left: "16.4286%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-zinc-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-40 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "64.4%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="303" tabIndex={-1} aria-pressed="false" aria-label="Sector 303, €65 to €94" style={{left: "17.8571%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "37.6%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "30.4%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="103" tabIndex={-1} aria-pressed="false" aria-label="Sector 103, €135 to €195" style={{left: "19.2857%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-amber-400 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "78%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-amber-400 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "63.2%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="203" tabIndex={-1} aria-pressed="false" aria-label="Sector 203, €106 to €154" style={{left: "20.7143%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-pink-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "61.6%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-pink-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "48%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="304" tabIndex={-1} aria-pressed="false" aria-label="Sector 304, €38 to €55" style={{left: "22.1429%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "22%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "20%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="104" tabIndex={-1} disabled aria-pressed="false" aria-label="Sector 104, €79 to €115, sold out" style={{left: "23.5714%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-zinc-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-40 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "46%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="204" tabIndex={-1} aria-pressed="false" aria-label="Sector 204, €62 to €90" style={{left: "25%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "36%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "28.4%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="305" tabIndex={-1} aria-pressed="false" aria-label="Sector 305, €38 to €55" style={{left: "26.4286%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "22%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "18.4%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="105" tabIndex={-1} aria-pressed="false" aria-label="Sector 105, €79 to €115" style={{left: "27.8571%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-pink-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "46%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-pink-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "42%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="205" tabIndex={-1} aria-pressed="false" aria-label="Sector 205, €62 to €90" style={{left: "29.2857%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "36%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "31.6%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="306" tabIndex={-1} aria-pressed="false" aria-label="Sector 306, €38 to €55" style={{left: "30.7143%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "22%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "20%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="106" tabIndex={-1} aria-pressed="false" aria-label="Sector 106, €79 to €115" style={{left: "32.1429%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-pink-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "46%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-pink-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "37.6%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="206" tabIndex={-1} aria-pressed="false" aria-label="Sector 206, €62 to €90" style={{left: "33.5714%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "36%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "30.4%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="307" tabIndex={-1} disabled aria-pressed="false" aria-label="Sector 307, €38 to €55, sold out" style={{left: "35%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-zinc-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-40 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "22%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="308" tabIndex={-1} aria-pressed="false" aria-label="Sector 308, €38 to €55" style={{left: "36.4286%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "22%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "17.6%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="107" tabIndex={-1} aria-pressed="false" aria-label="Sector 107, €79 to €115" style={{left: "37.8571%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-pink-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "46%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-pink-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "40.8%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="207" tabIndex={-1} aria-pressed="false" aria-label="Sector 207, €62 to €90" style={{left: "39.2857%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "36%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "31.6%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="309" tabIndex={-1} aria-pressed="false" aria-label="Sector 309, €38 to €55" style={{left: "40.7143%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "22%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "18%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="108" tabIndex={-1} aria-pressed="false" aria-label="Sector 108, €79 to €115" style={{left: "42.1429%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-pink-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "46%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-pink-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "39.6%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="208" tabIndex={-1} aria-pressed="false" aria-label="Sector 208, €62 to €90" style={{left: "43.5714%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "36%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "29.6%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="310" tabIndex={-1} aria-pressed="false" aria-label="Sector 310, €38 to €55" style={{left: "45%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "22%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "18.8%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="109" tabIndex={-1} aria-pressed="false" aria-label="Sector 109, €79 to €115" style={{left: "46.4286%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-pink-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "46%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-pink-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "42%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="209" tabIndex={-1} aria-pressed="false" aria-label="Sector 209, €62 to €90" style={{left: "47.8571%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "36%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "29.6%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="311" tabIndex={-1} aria-pressed="false" aria-label="Sector 311, €38 to €55" style={{left: "49.2857%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "22%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "19.6%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="110" tabIndex={-1} aria-pressed="false" aria-label="Sector 110, €116 to €169" style={{left: "50.7143%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-pink-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "67.6%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-pink-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "54.8%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="210" tabIndex={-1} aria-pressed="false" aria-label="Sector 210, €91 to €133" style={{left: "52.1429%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-pink-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "53.2%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-pink-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "43.2%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="312" tabIndex={-1} aria-pressed="false" aria-label="Sector 312, €56 to €82" style={{left: "53.5714%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "32.8%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "28.4%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="111" tabIndex={-1} aria-pressed="false" aria-label="Sector 111, €122 to €177" style={{left: "55%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-pink-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "70.8%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-pink-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "64.8%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="211" tabIndex={-1} aria-pressed="false" aria-label="Sector 211, €96 to €139" style={{left: "56.4286%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-pink-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "55.6%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-pink-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "44.8%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="313" tabIndex={-1} aria-pressed="false" aria-label="Sector 313, €59 to €85" style={{left: "57.8571%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "34%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "26.8%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="112" tabIndex={-1} aria-pressed="false" aria-label="Sector 112, €140 to €204" style={{left: "59.2857%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-amber-400 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "81.6%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-amber-400 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "74%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="212" tabIndex={-1} aria-pressed="false" aria-label="Sector 212, €109 to €159" style={{left: "60.7143%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-pink-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "63.6%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-pink-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "51.6%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="314" tabIndex={-1} aria-pressed="false" aria-label="Sector 314, €66 to €97" style={{left: "62.1429%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "38.8%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "30.8%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="315" tabIndex={-1} aria-pressed="false" aria-label="Sector 315, €59 to €85" style={{left: "63.5714%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "34%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "28.4%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="113" tabIndex={-1} aria-pressed="false" aria-label="Sector 113, €122 to €177" style={{left: "65%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-pink-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "70.8%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-pink-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "63.6%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="213" tabIndex={-1} aria-pressed="false" aria-label="Sector 213, €96 to €139" style={{left: "66.4286%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-pink-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "55.6%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-pink-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "47.6%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="316" tabIndex={-1} aria-pressed="false" aria-label="Sector 316, €56 to €82" style={{left: "67.8571%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "32.8%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "28.8%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="114" tabIndex={-1} aria-pressed="false" aria-label="Sector 114, €116 to €169" style={{left: "69.2857%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-pink-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "67.6%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-pink-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "54.4%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="214" tabIndex={-1} aria-pressed="false" aria-label="Sector 214, €91 to €133" style={{left: "70.7143%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-pink-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "53.2%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-pink-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "42.4%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="324" tabIndex={-1} aria-pressed="false" aria-label="Sector 324, €38 to €55" style={{left: "72.1429%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "22%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "17.2%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="317" tabIndex={-1} aria-pressed="false" aria-label="Sector 317, €38 to €55" style={{left: "73.5714%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "22%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "18.8%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="115" tabIndex={-1} aria-pressed="false" aria-label="Sector 115, €79 to €115" style={{left: "75%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-pink-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "46%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-pink-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "35.6%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="215" tabIndex={-1} aria-pressed="false" aria-label="Sector 215, €62 to €90" style={{left: "76.4286%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "36%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "32.8%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="318" tabIndex={-1} disabled aria-pressed="false" aria-label="Sector 318, €38 to €55, sold out" style={{left: "77.8571%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-zinc-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-40 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "22%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="116" tabIndex={-1} disabled aria-pressed="false" aria-label="Sector 116, €79 to €115, sold out" style={{left: "79.2857%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-zinc-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-40 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "46%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="216" tabIndex={-1} aria-pressed="false" aria-label="Sector 216, €62 to €90" style={{left: "80.7143%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "36%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "29.6%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="319" tabIndex={-1} aria-pressed="false" aria-label="Sector 319, €38 to €55" style={{left: "82.1429%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "22%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "17.6%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="117" tabIndex={-1} aria-pressed="false" aria-label="Sector 117, €79 to €115" style={{left: "83.5714%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-pink-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "46%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-pink-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "36.4%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="217" tabIndex={-1} disabled aria-pressed="false" aria-label="Sector 217, €62 to €90, sold out" style={{left: "85%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-zinc-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-40 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "36%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="320" tabIndex={-1} aria-pressed="false" aria-label="Sector 320, €38 to €55" style={{left: "86.4286%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "22%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "19.2%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="321" tabIndex={-1} aria-pressed="false" aria-label="Sector 321, €38 to €55" style={{left: "87.8571%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "22%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "18.4%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="118" tabIndex={-1} aria-pressed="false" aria-label="Sector 118, €79 to €115" style={{left: "89.2857%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-pink-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "46%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-pink-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "40%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="218" tabIndex={-1} aria-pressed="false" aria-label="Sector 218, €62 to €90" style={{left: "90.7143%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "36%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "31.6%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="322" tabIndex={-1} aria-pressed="false" aria-label="Sector 322, €38 to €55" style={{left: "92.1429%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "22%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "18.8%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="119" tabIndex={-1} aria-pressed="false" aria-label="Sector 119, €79 to €115" style={{left: "93.5714%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-pink-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "46%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-pink-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "39.2%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="219" tabIndex={-1} disabled aria-pressed="false" aria-label="Sector 219, €62 to €90, sold out" style={{left: "95%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-zinc-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-40 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "36%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="323" tabIndex={-1} aria-pressed="false" aria-label="Sector 323, €38 to €55" style={{left: "96.4286%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "22%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "18.4%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="120" tabIndex={-1} aria-pressed="false" aria-label="Sector 120, €79 to €115" style={{left: "97.8571%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-pink-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "46%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-pink-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "38.4%"}}></span>
                    </button>
                    <button className="-translate-x-1/2 absolute disabled:cursor-not-allowed group/bar inset-y-0 outline-none w-2" type="button" data-sector="220" tabIndex={-1} aria-pressed="false" aria-label="Sector 220, €62 to €90" style={{left: "99.2857%"}}>
                      <span className="-translate-x-1/2 [mask-image:linear-gradient(to_top,transparent,black_55%)] absolute bg-blue-600 bottom-0 duration-150 group-focus-visible/bar:opacity-100 group-hover/bar:opacity-100 left-1/2 motion-reduce:transition-none opacity-75 rounded-full transition-opacity w-0.5" aria-hidden="true" style={{height: "36%"}}></span>
                      <span className="-translate-x-1/2 absolute bg-blue-600 left-1/2 rounded-full size-1.5 translate-y-1/2" aria-hidden="true" style={{bottom: "28.4%"}}></span>
                    </button>
                  </div>
                  <div className="h-3 mt-1.5 relative text-muted-foreground text-xs" aria-hidden="true">
                    <span className="absolute border-l border-zinc-950/10 dark:border-white/15 flex gap-1.5 h-3 items-center pl-1.5 whitespace-nowrap" style={{left: "0%"}}>
                      <span className="@xl/stage:hidden [text-box:trim-both_cap_alphabetic]">
                        {"Main"}
                      </span>
                      <span className="@max-xl/stage:hidden [text-box:trim-both_cap_alphabetic]">
                        {"Main Stand"}
                      </span>
                    </span>
                    <span className="absolute border-l border-zinc-950/10 dark:border-white/15 flex gap-1.5 h-3 items-center pl-1.5 whitespace-nowrap" style={{left: "21.4286%"}}>
                      <span className="@xl/stage:hidden [text-box:trim-both_cap_alphabetic]">
                        {"North"}
                      </span>
                      <span className="@max-xl/stage:hidden [text-box:trim-both_cap_alphabetic]">
                        {"North End"}
                      </span>
                    </span>
                    <span className="absolute border-l border-zinc-950/10 dark:border-white/15 flex gap-1.5 h-3 items-center pl-1.5 whitespace-nowrap" style={{left: "50%"}}>
                      <span className="@xl/stage:hidden [text-box:trim-both_cap_alphabetic]">
                        {"East"}
                      </span>
                      <span className="@max-xl/stage:hidden [text-box:trim-both_cap_alphabetic]">
                        {"East Stand"}
                      </span>
                    </span>
                    <span className="absolute border-l border-zinc-950/10 dark:border-white/15 flex gap-1.5 h-3 items-center pl-1.5 whitespace-nowrap" style={{left: "71.4286%"}}>
                      <span className="@xl/stage:hidden [text-box:trim-both_cap_alphabetic]">
                        {"South"}
                      </span>
                      <span className="@max-xl/stage:hidden [text-box:trim-both_cap_alphabetic]">
                        {"South End"}
                      </span>
                    </span>
                  </div>
                </div>
              </FramePanel>
            </Frame>
            <div className="flex flex-1 flex-col min-h-0 pointer-events-none relative z-10">
              <div className="flex gap-2 items-center justify-between">
                <ToggleGroup className="backdrop-blur-xl bg-zinc-950/[0.06] dark:bg-white/10 p-0.5 pointer-events-auto" data-orientation="horizontal" aria-orientation="horizontal" role="group" spacing="1" aria-label="Map view" style={{"--gap": "1"}}>
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
                <div className="flex gap-2 items-center pointer-events-auto">
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
                  {"Drag to orbit"}
                </span>
                <span className="bg-muted-foreground/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  {"Right drag to pan"}
                </span>
                <span className="bg-muted-foreground/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  {"Scroll to zoom"}
                </span>
              </p>
            </div>
            <Frame className="[--frame-border-color:color-mix(in_oklch,var(--color-black)_7%,transparent)] [--frame-panel-bg:transparent] [--frame-panel-border-color:transparent] backdrop-blur-xl backdrop-saturate-150 bg-white/80 dark:[--frame-border-color:color-mix(in_oklch,var(--color-white)_9%,transparent)] dark:bg-white/[0.035] z-10" spacing="default">
              <FramePanel className="@3xl/stage:flex-row @3xl/stage:items-center flex flex-col gap-4" aria-live="polite">
                <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                  <span className="font-medium text-sm">
                    {"No seats selected"}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {"Pick a sector on the bowl or the price bar."}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 items-center text-muted-foreground text-xs" aria-label="Price bands">
                  <li>
                    <span className="gap-1.5 h-4 inline-flex items-center">
                      <span className="bg-amber-400 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                      <span className="[text-box:trim-both_cap_alphabetic]">
                        {"Premium"}
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="gap-1.5 h-4 inline-flex items-center">
                      <span className="bg-pink-700 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                      <span className="[text-box:trim-both_cap_alphabetic]">
                        {"Standard"}
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="gap-1.5 h-4 inline-flex items-center">
                      <span className="bg-blue-700 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                      <span className="[text-box:trim-both_cap_alphabetic]">
                        {"Value"}
                      </span>
                    </span>
                  </li>
                  <li className="gap-1.5 h-4 inline-flex items-center">
                    <span className="bg-zinc-600 rounded-full size-2" aria-hidden="true"></span>
                    <span className="[text-box:trim-both_cap_alphabetic]">
                      {"Sold Out"}
                    </span>
                  </li>
                </ul>
                <Button type="button" disabled="" tabIndex={0} disabled>
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    {"Checkout"}
                  </span>
                </Button>
              </FramePanel>
            </Frame>
          </section>
          <aside className="md:min-h-0 md:overflow-y-auto min-w-0 scroll-fade" aria-label="Match insights">
            <div className="content-start gap-2 grid grid-cols-2">
              <Frame className="[--frame-border-color:color-mix(in_oklch,var(--color-black)_7%,transparent)] [--frame-panel-bg:transparent] [--frame-panel-border-color:transparent] backdrop-blur-xl backdrop-saturate-150 bg-white/80 col-span-2 dark:[--frame-border-color:color-mix(in_oklch,var(--color-white)_9%,transparent)] dark:bg-white/[0.035]" spacing="default">
                <FramePanel className="flex flex-col gap-3">
                  <div className="flex gap-2 h-6 items-center justify-between">
                    <h2 className="font-medium text-muted-foreground text-xs">
                      <span className="[text-box:trim-both_cap_alphabetic]">
                        {"Matchday 9"}
                      </span>
                    </h2>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                      <span className="[text-box:trim-both_cap_alphabetic]">
                        {"On Sale"}
                      </span>
                    </Badge>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-medium leading-tight text-lg tracking-tight">
                      {"Mirador"}
                      <span className="font-normal text-muted-foreground">
                        {"vs"}
                      </span>
                      {"Delta Atletic"}
                    </div>
                    <div className="flex gap-1.5 h-5 items-center min-w-0 tabular-nums text-[13px] text-muted-foreground">
                      <span className="[text-box:trim-both_cap_alphabetic] shrink-0">
                        {"Sun 25 Oct"}
                      </span>
                      <span className="bg-muted-foreground/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="[text-box:trim-both_cap_alphabetic] shrink-0">
                        {"21:00"}
                      </span>
                      <span className="bg-muted-foreground/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="[text-box:trim-both_cap_alphabetic] min-w-0 overflow-x-clip text-ellipsis whitespace-nowrap">
                        {"Estadi Mirador"}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1.5 h-4 items-center text-muted-foreground text-xs">
                    <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                      <circle cx={12} cy={12} r={10}></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                    <span className="[text-box:trim-both_cap_alphabetic] tabular-nums">
                      {"Gates open 19:30"}
                    </span>
                  </div>
                </FramePanel>
              </Frame>
              <Frame className="[--frame-border-color:color-mix(in_oklch,var(--color-black)_7%,transparent)] [--frame-panel-bg:transparent] [--frame-panel-border-color:transparent] backdrop-blur-xl backdrop-saturate-150 bg-white/80 dark:[--frame-border-color:color-mix(in_oklch,var(--color-white)_9%,transparent)] dark:bg-white/[0.035]" spacing="default">
                <FramePanel className="flex flex-col gap-3">
                  <div className="flex gap-2 h-6 items-center justify-between">
                    <h2 className="font-medium text-muted-foreground text-xs">
                      <span className="[text-box:trim-both_cap_alphabetic]">
                        {"Seats Left"}
                      </span>
                    </h2>
                  </div>
                  <span className="font-light leading-none tabular-nums text-3xl tracking-tight">
                    {"6,684"}
                  </span>
                  <div className="tabular-nums text-muted-foreground text-xs">
                    {"of 77,800"}
                  </div>
                </FramePanel>
              </Frame>
              <Frame className="[--frame-border-color:color-mix(in_oklch,var(--color-black)_7%,transparent)] [--frame-panel-bg:transparent] [--frame-panel-border-color:transparent] backdrop-blur-xl backdrop-saturate-150 bg-white/80 dark:[--frame-border-color:color-mix(in_oklch,var(--color-white)_9%,transparent)] dark:bg-white/[0.035]" spacing="default">
                <FramePanel className="flex flex-col gap-3">
                  <div className="flex gap-2 h-6 items-center justify-between">
                    <h2 className="font-medium text-muted-foreground text-xs">
                      <span className="[text-box:trim-both_cap_alphabetic]">
                        {"Sold"}
                      </span>
                    </h2>
                  </div>
                  <span className="font-light leading-none tabular-nums text-3xl tracking-tight">
                    {"91"}
                    <span className="text-muted-foreground text-xl">
                      {".4%"}
                    </span>
                  </span>
                  <div className="tabular-nums text-muted-foreground text-xs">
                    {"8 sectors full"}
                  </div>
                </FramePanel>
              </Frame>
              <Frame className="[--frame-border-color:color-mix(in_oklch,var(--color-black)_7%,transparent)] [--frame-panel-bg:transparent] [--frame-panel-border-color:transparent] backdrop-blur-xl backdrop-saturate-150 bg-white/80 col-span-2 dark:[--frame-border-color:color-mix(in_oklch,var(--color-white)_9%,transparent)] dark:bg-white/[0.035]" spacing="default">
                <FramePanel className="flex flex-col gap-3">
                  <div className="flex gap-2 h-6 items-center justify-between">
                    <h2 className="font-medium text-muted-foreground text-xs">
                      <span className="[text-box:trim-both_cap_alphabetic]">
                        {"Daily Sales"}
                      </span>
                    </h2>
                    <span className="dark:text-amber-400 tabular-nums text-amber-600 text-xs">
                      {"+23% this week"}
                    </span>
                  </div>
                  <div className="flex gap-1 items-end justify-between">
                    <span className="font-light leading-none tabular-nums text-3xl tracking-tight">
                      {"28,090"}
                    </span>
                    <span className="pb-0.5 text-muted-foreground text-xs">
                      {"last 7 days"}
                    </span>
                  </div>
                  <div className="flex gap-px h-16 items-end justify-between" role="img" aria-label="Tickets sold per day, peak 6,940">
                    <span className="bg-zinc-300 dark:bg-white/55 rounded-full w-0.5" style={{height: "26.513%"}}></span>
                    <span className="bg-zinc-300 dark:bg-white/55 rounded-full w-0.5" style={{height: "31.8444%"}}></span>
                    <span className="bg-zinc-300 dark:bg-white/55 rounded-full w-0.5" style={{height: "28.2421%"}}></span>
                    <span className="bg-zinc-300 dark:bg-white/55 rounded-full w-0.5" style={{height: "35.7349%"}}></span>
                    <span className="bg-zinc-300 dark:bg-white/55 rounded-full w-0.5" style={{height: "44.9568%"}}></span>
                    <span className="bg-zinc-300 dark:bg-white/55 rounded-full w-0.5" style={{height: "63.5447%"}}></span>
                    <span className="bg-zinc-300 dark:bg-white/55 rounded-full w-0.5" style={{height: "57.3487%"}}></span>
                    <span className="bg-zinc-300 dark:bg-white/55 rounded-full w-0.5" style={{height: "32.5648%"}}></span>
                    <span className="bg-zinc-300 dark:bg-white/55 rounded-full w-0.5" style={{height: "29.5389%"}}></span>
                    <span className="bg-zinc-300 dark:bg-white/55 rounded-full w-0.5" style={{height: "34.438%"}}></span>
                    <span className="bg-zinc-300 dark:bg-white/55 rounded-full w-0.5" style={{height: "39.049%"}}></span>
                    <span className="bg-zinc-300 dark:bg-white/55 rounded-full w-0.5" style={{height: "48.415%"}}></span>
                    <span className="bg-zinc-300 dark:bg-white/55 rounded-full w-0.5" style={{height: "73.7752%"}}></span>
                    <span className="bg-zinc-300 dark:bg-white/55 rounded-full w-0.5" style={{height: "70.1729%"}}></span>
                    <span className="bg-zinc-300 dark:bg-white/55 rounded-full w-0.5" style={{height: "35.1585%"}}></span>
                    <span className="bg-zinc-300 dark:bg-white/55 rounded-full w-0.5" style={{height: "37.1758%"}}></span>
                    <span className="bg-zinc-300 dark:bg-white/55 rounded-full w-0.5" style={{height: "42.219%"}}></span>
                    <span className="bg-zinc-300 dark:bg-white/55 rounded-full w-0.5" style={{height: "52.0173%"}}></span>
                    <span className="bg-zinc-300 dark:bg-white/55 rounded-full w-0.5" style={{height: "61.6715%"}}></span>
                    <span className="bg-amber-500 dark:bg-amber-400 rounded-full w-0.5" style={{height: "100%"}}></span>
                    <span className="bg-zinc-300 dark:bg-white/55 rounded-full w-0.5" style={{height: "76.513%"}}></span>
                  </div>
                  <div className="flex justify-between tabular-nums text-muted-foreground text-xs">
                    <span>
                      {"1 Oct"}
                    </span>
                    <span>
                      {"21 Oct"}
                    </span>
                  </div>
                </FramePanel>
              </Frame>
              <Frame className="[--frame-border-color:color-mix(in_oklch,var(--color-black)_7%,transparent)] [--frame-panel-bg:transparent] [--frame-panel-border-color:transparent] backdrop-blur-xl backdrop-saturate-150 bg-white/80 dark:[--frame-border-color:color-mix(in_oklch,var(--color-white)_9%,transparent)] dark:bg-white/[0.035]" spacing="default">
                <FramePanel className="flex flex-col gap-3">
                  <div className="flex gap-2 h-6 items-center justify-between">
                    <h2 className="font-medium text-muted-foreground text-xs">
                      <span className="[text-box:trim-both_cap_alphabetic]">
                        {"From"}
                      </span>
                    </h2>
                  </div>
                  <span className="font-light leading-none tabular-nums text-3xl tracking-tight">
                    {"€43"}
                  </span>
                  <div className="text-muted-foreground text-xs">
                    {"per seat"}
                  </div>
                </FramePanel>
              </Frame>
              <Frame className="[--frame-border-color:color-mix(in_oklch,var(--color-black)_7%,transparent)] [--frame-panel-bg:transparent] [--frame-panel-border-color:transparent] backdrop-blur-xl backdrop-saturate-150 bg-white/80 dark:[--frame-border-color:color-mix(in_oklch,var(--color-white)_9%,transparent)] dark:bg-white/[0.035]" spacing="default">
                <FramePanel className="flex flex-col gap-3">
                  <div className="flex gap-2 h-6 items-center justify-between">
                    <h2 className="font-medium text-muted-foreground text-xs">
                      <span className="[text-box:trim-both_cap_alphabetic]">
                        {"Average"}
                      </span>
                    </h2>
                  </div>
                  <span className="font-light leading-none tabular-nums text-3xl tracking-tight">
                    {"€89"}
                  </span>
                  <div className="text-muted-foreground text-xs">
                    {"open seats"}
                  </div>
                </FramePanel>
              </Frame>
              <Frame className="[--frame-border-color:color-mix(in_oklch,var(--color-black)_7%,transparent)] [--frame-panel-bg:transparent] [--frame-panel-border-color:transparent] backdrop-blur-xl backdrop-saturate-150 bg-white/80 col-span-2 dark:[--frame-border-color:color-mix(in_oklch,var(--color-white)_9%,transparent)] dark:bg-white/[0.035]" spacing="default">
                <FramePanel className="flex flex-col gap-3">
                  <div className="flex gap-2 h-6 items-center justify-between">
                    <h2 className="font-medium text-muted-foreground text-xs">
                      <span className="[text-box:trim-both_cap_alphabetic]">
                        {"Best Value"}
                      </span>
                    </h2>
                    <Button type="button" tabIndex={0}>
                      <span className="[text-box:trim-both_cap_alphabetic]">
                        {"Select"}
                      </span>
                    </Button>
                  </div>
                  <div className="flex gap-3 items-end justify-between">
                    <div className="flex flex-col gap-1.5 min-w-0">
                      <div className="font-medium text-sm">
                        {"Sector 314"}
                      </div>
                      <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                        <span className="truncate">
                          {"Upper Tier"}
                        </span>
                        <span className="bg-muted-foreground/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="truncate">
                          {"East Stand"}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 items-end">
                      <div className="font-medium tabular-nums text-sm">
                        {"€77"}
                      </div>
                      <span className="gap-1.5 h-4 inline-flex items-center text-muted-foreground text-xs">
                        <span className="bg-blue-700 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                        <span className="[text-box:trim-both_cap_alphabetic]">
                          {"Value"}
                        </span>
                      </span>
                    </div>
                  </div>
                </FramePanel>
              </Frame>
              <Frame className="[--frame-border-color:color-mix(in_oklch,var(--color-black)_7%,transparent)] [--frame-panel-bg:transparent] [--frame-panel-border-color:transparent] backdrop-blur-xl backdrop-saturate-150 bg-white/80 col-span-2 dark:[--frame-border-color:color-mix(in_oklch,var(--color-white)_9%,transparent)] dark:bg-white/[0.035]" spacing="default">
                <FramePanel className="flex flex-col gap-3">
                  <div className="flex gap-2 h-6 items-center justify-between">
                    <h2 className="font-medium text-muted-foreground text-xs">
                      <span className="[text-box:trim-both_cap_alphabetic]">
                        {"Tier Mix"}
                      </span>
                    </h2>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-xs">
                        <span>
                          {"Lower Tier"}
                        </span>
                        <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground">
                          <span>
                            {"92% sold"}
                          </span>
                          <span className="bg-muted-foreground/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span>
                            {"1,998 left"}
                          </span>
                        </span>
                      </div>
                      <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="92" aria-valuetext="92%" role="progressbar" aria-label="Lower Tier sold">
                        <ProgressTrack progressing="">
                          <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "92%"}}></ProgressIndicator>
                        </ProgressTrack>
                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                          {"x"}
                        </span>
                      </Progress>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-xs">
                        <span>
                          {"Middle Tier"}
                        </span>
                        <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground">
                          <span>
                            {"93% sold"}
                          </span>
                          <span className="bg-muted-foreground/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span>
                            {"1,465 left"}
                          </span>
                        </span>
                      </div>
                      <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="93" aria-valuetext="93%" role="progressbar" aria-label="Middle Tier sold">
                        <ProgressTrack progressing="">
                          <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "93%"}}></ProgressIndicator>
                        </ProgressTrack>
                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                          {"x"}
                        </span>
                      </Progress>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-xs">
                        <span>
                          {"Upper Tier"}
                        </span>
                        <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground">
                          <span>
                            {"90% sold"}
                          </span>
                          <span className="bg-muted-foreground/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span>
                            {"3,221 left"}
                          </span>
                        </span>
                      </div>
                      <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="90" aria-valuetext="90%" role="progressbar" aria-label="Upper Tier sold">
                        <ProgressTrack progressing="">
                          <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "90%"}}></ProgressIndicator>
                        </ProgressTrack>
                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                          {"x"}
                        </span>
                      </Progress>
                    </div>
                  </div>
                </FramePanel>
              </Frame>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
