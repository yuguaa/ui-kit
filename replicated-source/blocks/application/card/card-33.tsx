import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-5xl min-h-svh p-8 w-full">
      <Frame className="@container w-full">
        <div className="@2xl:grid-cols-2 @4xl:grid-cols-4 gap-1 grid">
          <FramePanel className="border-border isolate space-y-5">
            <div className="[--card-dot-pattern-fill:var(--color-foreground)] [--card-dot-pattern-opacity:0.12] absolute dark:[--card-dot-pattern-opacity:0.2] inset-0 pointer-events-none z-0" aria-hidden="true">
              <svg className="size-full" viewBox="0 0 240 136" fill="none" preserveAspectRatio="none" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg" style={{opacity: "var(--card-dot-pattern-opacity)"}}>
                <defs>
                  <mask id="_r_0_-mask" maskUnits="userSpaceOnUse" x={0} y={0} width={240} height={136} style={{maskType: "alpha"}}>
                    <rect width={240} height={136} fill="url(#_r_0_-gradient)"></rect>
                  </mask>
                  <lineargradient id="_r_0_-gradient" x1={240} y1={0} x2={156.1387} y2={95.7483} gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"></stop>
                    <stop offset={0.538873} stopColor="white"></stop>
                    <stop offset={1} stopColor="white" stopOpacity={0}></stop>
                  </lineargradient>
                  <pattern id="_r_0_-pattern" patternUnits="userSpaceOnUse" patterntransform="matrix(48 0 0 48 0 0)" preserveAspectRatio="none" viewBox="0 0 48 48" width={1} height={1}>
                    <g fill="var(--card-dot-pattern-fill)">
                      <rect x={0} y={0} width={2} height={2} fillOpacity={0.216}></rect>
                      <rect x={4} y={0} width={2} height={2} fillOpacity={0.489}></rect>
                      <rect x={8} y={0} width={2} height={2} fillOpacity={0.366}></rect>
                      <rect x={12} y={0} width={2} height={2} fillOpacity={0.305}></rect>
                      <rect x={16} y={0} width={2} height={2} fillOpacity={0.514}></rect>
                      <rect x={20} y={0} width={2} height={2} fillOpacity={0.129}></rect>
                      <rect x={24} y={0} width={2} height={2} fillOpacity={0.431}></rect>
                      <rect x={28} y={0} width={2} height={2} fillOpacity={0.142}></rect>
                      <rect x={32} y={0} width={2} height={2} fillOpacity={0.288}></rect>
                      <rect x={36} y={0} width={2} height={2} fillOpacity={0.144}></rect>
                      <rect x={40} y={0} width={2} height={2} fillOpacity={0.313}></rect>
                      <rect x={44} y={0} width={2} height={2} fillOpacity={0.214}></rect>
                      <rect x={0} y={4} width={2} height={2} fillOpacity={0.4}></rect>
                      <rect x={4} y={4} width={2} height={2} fillOpacity={0.13}></rect>
                      <rect x={8} y={4} width={2} height={2} fillOpacity={0.498}></rect>
                      <rect x={12} y={4} width={2} height={2} fillOpacity={0.473}></rect>
                      <rect x={16} y={4} width={2} height={2} fillOpacity={0.386}></rect>
                      <rect x={20} y={4} width={2} height={2} fillOpacity={0.248}></rect>
                      <rect x={24} y={4} width={2} height={2} fillOpacity={0.168}></rect>
                      <rect x={28} y={4} width={2} height={2} fillOpacity={0.193}></rect>
                      <rect x={32} y={4} width={2} height={2} fillOpacity={0.528}></rect>
                      <rect x={36} y={4} width={2} height={2} fillOpacity={0.307}></rect>
                      <rect x={40} y={4} width={2} height={2} fillOpacity={0.314}></rect>
                      <rect x={44} y={4} width={2} height={2} fillOpacity={0.444}></rect>
                      <rect x={0} y={8} width={2} height={2} fillOpacity={0.33}></rect>
                      <rect x={4} y={8} width={2} height={2} fillOpacity={0.438}></rect>
                      <rect x={8} y={8} width={2} height={2} fillOpacity={0.477}></rect>
                      <rect x={12} y={8} width={2} height={2} fillOpacity={0.434}></rect>
                      <rect x={16} y={8} width={2} height={2} fillOpacity={0.47}></rect>
                      <rect x={20} y={8} width={2} height={2} fillOpacity={0.383}></rect>
                      <rect x={24} y={8} width={2} height={2} fillOpacity={0.514}></rect>
                      <rect x={28} y={8} width={2} height={2} fillOpacity={0.287}></rect>
                      <rect x={32} y={8} width={2} height={2} fillOpacity={0.346}></rect>
                      <rect x={36} y={8} width={2} height={2} fillOpacity={0.52}></rect>
                      <rect x={40} y={8} width={2} height={2} fillOpacity={0.524}></rect>
                      <rect x={44} y={8} width={2} height={2} fillOpacity={0.126}></rect>
                      <rect x={0} y={12} width={2} height={2} fillOpacity={0.259}></rect>
                      <rect x={4} y={12} width={2} height={2} fillOpacity={0.281}></rect>
                      <rect x={8} y={12} width={2} height={2} fillOpacity={0.311}></rect>
                      <rect x={12} y={12} width={2} height={2} fillOpacity={0.212}></rect>
                      <rect x={16} y={12} width={2} height={2} fillOpacity={0.524}></rect>
                      <rect x={20} y={12} width={2} height={2} fillOpacity={0.353}></rect>
                      <rect x={24} y={12} width={2} height={2} fillOpacity={0.34}></rect>
                      <rect x={28} y={12} width={2} height={2} fillOpacity={0.417}></rect>
                      <rect x={32} y={12} width={2} height={2} fillOpacity={0.258}></rect>
                      <rect x={36} y={12} width={2} height={2} fillOpacity={0.158}></rect>
                      <rect x={40} y={12} width={2} height={2} fillOpacity={0.388}></rect>
                      <rect x={44} y={12} width={2} height={2} fillOpacity={0.184}></rect>
                      <rect x={0} y={16} width={2} height={2} fillOpacity={0.491}></rect>
                      <rect x={4} y={16} width={2} height={2} fillOpacity={0.417}></rect>
                      <rect x={8} y={16} width={2} height={2} fillOpacity={0.231}></rect>
                      <rect x={12} y={16} width={2} height={2} fillOpacity={0.209}></rect>
                      <rect x={16} y={16} width={2} height={2} fillOpacity={0.305}></rect>
                      <rect x={20} y={16} width={2} height={2} fillOpacity={0.287}></rect>
                      <rect x={24} y={16} width={2} height={2} fillOpacity={0.353}></rect>
                      <rect x={28} y={16} width={2} height={2} fillOpacity={0.513}></rect>
                      <rect x={32} y={16} width={2} height={2} fillOpacity={0.483}></rect>
                      <rect x={36} y={16} width={2} height={2} fillOpacity={0.455}></rect>
                      <rect x={40} y={16} width={2} height={2} fillOpacity={0.483}></rect>
                      <rect x={44} y={16} width={2} height={2} fillOpacity={0.189}></rect>
                      <rect x={0} y={20} width={2} height={2} fillOpacity={0.264}></rect>
                      <rect x={4} y={20} width={2} height={2} fillOpacity={0.295}></rect>
                      <rect x={8} y={20} width={2} height={2} fillOpacity={0.51}></rect>
                      <rect x={12} y={20} width={2} height={2} fillOpacity={0.305}></rect>
                      <rect x={16} y={20} width={2} height={2} fillOpacity={0.438}></rect>
                      <rect x={20} y={20} width={2} height={2} fillOpacity={0.289}></rect>
                      <rect x={24} y={20} width={2} height={2} fillOpacity={0.322}></rect>
                      <rect x={28} y={20} width={2} height={2} fillOpacity={0.196}></rect>
                      <rect x={32} y={20} width={2} height={2} fillOpacity={0.486}></rect>
                      <rect x={36} y={20} width={2} height={2} fillOpacity={0.388}></rect>
                      <rect x={40} y={20} width={2} height={2} fillOpacity={0.489}></rect>
                      <rect x={44} y={20} width={2} height={2} fillOpacity={0.208}></rect>
                      <rect x={0} y={24} width={2} height={2} fillOpacity={0.239}></rect>
                      <rect x={4} y={24} width={2} height={2} fillOpacity={0.463}></rect>
                      <rect x={8} y={24} width={2} height={2} fillOpacity={0.539}></rect>
                      <rect x={12} y={24} width={2} height={2} fillOpacity={0.408}></rect>
                      <rect x={16} y={24} width={2} height={2} fillOpacity={0.527}></rect>
                      <rect x={20} y={24} width={2} height={2} fillOpacity={0.357}></rect>
                      <rect x={24} y={24} width={2} height={2} fillOpacity={0.362}></rect>
                      <rect x={28} y={24} width={2} height={2} fillOpacity={0.151}></rect>
                      <rect x={32} y={24} width={2} height={2} fillOpacity={0.324}></rect>
                      <rect x={36} y={24} width={2} height={2} fillOpacity={0.347}></rect>
                      <rect x={40} y={24} width={2} height={2} fillOpacity={0.299}></rect>
                      <rect x={44} y={24} width={2} height={2} fillOpacity={0.127}></rect>
                      <rect x={0} y={28} width={2} height={2} fillOpacity={0.476}></rect>
                      <rect x={4} y={28} width={2} height={2} fillOpacity={0.461}></rect>
                      <rect x={8} y={28} width={2} height={2} fillOpacity={0.377}></rect>
                      <rect x={12} y={28} width={2} height={2} fillOpacity={0.415}></rect>
                      <rect x={16} y={28} width={2} height={2} fillOpacity={0.217}></rect>
                      <rect x={20} y={28} width={2} height={2} fillOpacity={0.297}></rect>
                      <rect x={24} y={28} width={2} height={2} fillOpacity={0.258}></rect>
                      <rect x={28} y={28} width={2} height={2} fillOpacity={0.296}></rect>
                      <rect x={32} y={28} width={2} height={2} fillOpacity={0.276}></rect>
                      <rect x={36} y={28} width={2} height={2} fillOpacity={0.182}></rect>
                      <rect x={40} y={28} width={2} height={2} fillOpacity={0.422}></rect>
                      <rect x={44} y={28} width={2} height={2} fillOpacity={0.392}></rect>
                      <rect x={0} y={32} width={2} height={2} fillOpacity={0.273}></rect>
                      <rect x={4} y={32} width={2} height={2} fillOpacity={0.143}></rect>
                      <rect x={8} y={32} width={2} height={2} fillOpacity={0.338}></rect>
                      <rect x={12} y={32} width={2} height={2} fillOpacity={0.264}></rect>
                      <rect x={16} y={32} width={2} height={2} fillOpacity={0.218}></rect>
                      <rect x={20} y={32} width={2} height={2} fillOpacity={0.29}></rect>
                      <rect x={24} y={32} width={2} height={2} fillOpacity={0.336}></rect>
                      <rect x={28} y={32} width={2} height={2} fillOpacity={0.313}></rect>
                      <rect x={32} y={32} width={2} height={2} fillOpacity={0.514}></rect>
                      <rect x={36} y={32} width={2} height={2} fillOpacity={0.289}></rect>
                      <rect x={40} y={32} width={2} height={2} fillOpacity={0.25}></rect>
                      <rect x={44} y={32} width={2} height={2} fillOpacity={0.507}></rect>
                      <rect x={0} y={36} width={2} height={2} fillOpacity={0.346}></rect>
                      <rect x={4} y={36} width={2} height={2} fillOpacity={0.208}></rect>
                      <rect x={8} y={36} width={2} height={2} fillOpacity={0.313}></rect>
                      <rect x={12} y={36} width={2} height={2} fillOpacity={0.365}></rect>
                      <rect x={16} y={36} width={2} height={2} fillOpacity={0.491}></rect>
                      <rect x={20} y={36} width={2} height={2} fillOpacity={0.121}></rect>
                      <rect x={24} y={36} width={2} height={2} fillOpacity={0.472}></rect>
                      <rect x={28} y={36} width={2} height={2} fillOpacity={0.281}></rect>
                      <rect x={32} y={36} width={2} height={2} fillOpacity={0.297}></rect>
                      <rect x={36} y={36} width={2} height={2} fillOpacity={0.33}></rect>
                      <rect x={40} y={36} width={2} height={2} fillOpacity={0.463}></rect>
                      <rect x={44} y={36} width={2} height={2} fillOpacity={0.447}></rect>
                      <rect x={0} y={40} width={2} height={2} fillOpacity={0.217}></rect>
                      <rect x={4} y={40} width={2} height={2} fillOpacity={0.467}></rect>
                      <rect x={8} y={40} width={2} height={2} fillOpacity={0.297}></rect>
                      <rect x={12} y={40} width={2} height={2} fillOpacity={0.303}></rect>
                      <rect x={16} y={40} width={2} height={2} fillOpacity={0.497}></rect>
                      <rect x={20} y={40} width={2} height={2} fillOpacity={0.201}></rect>
                      <rect x={24} y={40} width={2} height={2} fillOpacity={0.5}></rect>
                      <rect x={28} y={40} width={2} height={2} fillOpacity={0.458}></rect>
                      <rect x={32} y={40} width={2} height={2} fillOpacity={0.165}></rect>
                      <rect x={36} y={40} width={2} height={2} fillOpacity={0.36}></rect>
                      <rect x={40} y={40} width={2} height={2} fillOpacity={0.329}></rect>
                      <rect x={44} y={40} width={2} height={2} fillOpacity={0.419}></rect>
                      <rect x={0} y={44} width={2} height={2} fillOpacity={0.47}></rect>
                      <rect x={4} y={44} width={2} height={2} fillOpacity={0.161}></rect>
                      <rect x={8} y={44} width={2} height={2} fillOpacity={0.191}></rect>
                      <rect x={12} y={44} width={2} height={2} fillOpacity={0.341}></rect>
                      <rect x={16} y={44} width={2} height={2} fillOpacity={0.279}></rect>
                      <rect x={20} y={44} width={2} height={2} fillOpacity={0.387}></rect>
                      <rect x={24} y={44} width={2} height={2} fillOpacity={0.173}></rect>
                      <rect x={28} y={44} width={2} height={2} fillOpacity={0.537}></rect>
                      <rect x={32} y={44} width={2} height={2} fillOpacity={0.218}></rect>
                      <rect x={36} y={44} width={2} height={2} fillOpacity={0.368}></rect>
                      <rect x={40} y={44} width={2} height={2} fillOpacity={0.5}></rect>
                      <rect x={44} y={44} width={2} height={2} fillOpacity={0.414}></rect>
                    </g>
                  </pattern>
                </defs>
                <g mask="url(#_r_0_-mask)">
                  <rect width={240} height={136} fill="url(#_r_0_-pattern)"></rect>
                </g>
              </svg>
            </div>
            <div className="relative space-y-5 z-10">
              <div className="flex flex-row items-center justify-between">
                <Item className="[&_svg]:size-4.5 [&_svg]:text-white [background:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%),#000] border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9.5" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="lucide lucide-link" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent! cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_4_" aria-expanded="false">
                  <svg className="lucide lucide-ellipsis-vertical size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                    <circle cx={12} cy={12} r={1}></circle>
                    <circle cx={12} cy={5} r={1}></circle>
                    <circle cx={12} cy={19} r={1}></circle>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </div>
              <div className="flex flex-col gap-0.5">
                <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
                  {"New Order"}
                </a>
                <p className="leading-relaxed text-muted-foreground text-xs">
                  {"143/pkg"}
                </p>
              </div>
            </div>
          </FramePanel>
          <FramePanel className="border-border isolate space-y-5">
            <div className="[--card-dot-pattern-fill:var(--color-foreground)] [--card-dot-pattern-opacity:0.12] absolute dark:[--card-dot-pattern-opacity:0.2] inset-0 pointer-events-none z-0" aria-hidden="true">
              <svg className="size-full" viewBox="0 0 240 136" fill="none" preserveAspectRatio="none" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg" style={{opacity: "var(--card-dot-pattern-opacity)"}}>
                <defs>
                  <mask id="_r_6_-mask" maskUnits="userSpaceOnUse" x={0} y={0} width={240} height={136} style={{maskType: "alpha"}}>
                    <rect width={240} height={136} fill="url(#_r_6_-gradient)"></rect>
                  </mask>
                  <lineargradient id="_r_6_-gradient" x1={240} y1={0} x2={156.1387} y2={95.7483} gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"></stop>
                    <stop offset={0.538873} stopColor="white"></stop>
                    <stop offset={1} stopColor="white" stopOpacity={0}></stop>
                  </lineargradient>
                  <pattern id="_r_6_-pattern" patternUnits="userSpaceOnUse" patterntransform="matrix(48 0 0 48 0 0)" preserveAspectRatio="none" viewBox="0 0 48 48" width={1} height={1}>
                    <g fill="var(--card-dot-pattern-fill)">
                      <rect x={0} y={0} width={2} height={2} fillOpacity={0.216}></rect>
                      <rect x={4} y={0} width={2} height={2} fillOpacity={0.489}></rect>
                      <rect x={8} y={0} width={2} height={2} fillOpacity={0.366}></rect>
                      <rect x={12} y={0} width={2} height={2} fillOpacity={0.305}></rect>
                      <rect x={16} y={0} width={2} height={2} fillOpacity={0.514}></rect>
                      <rect x={20} y={0} width={2} height={2} fillOpacity={0.129}></rect>
                      <rect x={24} y={0} width={2} height={2} fillOpacity={0.431}></rect>
                      <rect x={28} y={0} width={2} height={2} fillOpacity={0.142}></rect>
                      <rect x={32} y={0} width={2} height={2} fillOpacity={0.288}></rect>
                      <rect x={36} y={0} width={2} height={2} fillOpacity={0.144}></rect>
                      <rect x={40} y={0} width={2} height={2} fillOpacity={0.313}></rect>
                      <rect x={44} y={0} width={2} height={2} fillOpacity={0.214}></rect>
                      <rect x={0} y={4} width={2} height={2} fillOpacity={0.4}></rect>
                      <rect x={4} y={4} width={2} height={2} fillOpacity={0.13}></rect>
                      <rect x={8} y={4} width={2} height={2} fillOpacity={0.498}></rect>
                      <rect x={12} y={4} width={2} height={2} fillOpacity={0.473}></rect>
                      <rect x={16} y={4} width={2} height={2} fillOpacity={0.386}></rect>
                      <rect x={20} y={4} width={2} height={2} fillOpacity={0.248}></rect>
                      <rect x={24} y={4} width={2} height={2} fillOpacity={0.168}></rect>
                      <rect x={28} y={4} width={2} height={2} fillOpacity={0.193}></rect>
                      <rect x={32} y={4} width={2} height={2} fillOpacity={0.528}></rect>
                      <rect x={36} y={4} width={2} height={2} fillOpacity={0.307}></rect>
                      <rect x={40} y={4} width={2} height={2} fillOpacity={0.314}></rect>
                      <rect x={44} y={4} width={2} height={2} fillOpacity={0.444}></rect>
                      <rect x={0} y={8} width={2} height={2} fillOpacity={0.33}></rect>
                      <rect x={4} y={8} width={2} height={2} fillOpacity={0.438}></rect>
                      <rect x={8} y={8} width={2} height={2} fillOpacity={0.477}></rect>
                      <rect x={12} y={8} width={2} height={2} fillOpacity={0.434}></rect>
                      <rect x={16} y={8} width={2} height={2} fillOpacity={0.47}></rect>
                      <rect x={20} y={8} width={2} height={2} fillOpacity={0.383}></rect>
                      <rect x={24} y={8} width={2} height={2} fillOpacity={0.514}></rect>
                      <rect x={28} y={8} width={2} height={2} fillOpacity={0.287}></rect>
                      <rect x={32} y={8} width={2} height={2} fillOpacity={0.346}></rect>
                      <rect x={36} y={8} width={2} height={2} fillOpacity={0.52}></rect>
                      <rect x={40} y={8} width={2} height={2} fillOpacity={0.524}></rect>
                      <rect x={44} y={8} width={2} height={2} fillOpacity={0.126}></rect>
                      <rect x={0} y={12} width={2} height={2} fillOpacity={0.259}></rect>
                      <rect x={4} y={12} width={2} height={2} fillOpacity={0.281}></rect>
                      <rect x={8} y={12} width={2} height={2} fillOpacity={0.311}></rect>
                      <rect x={12} y={12} width={2} height={2} fillOpacity={0.212}></rect>
                      <rect x={16} y={12} width={2} height={2} fillOpacity={0.524}></rect>
                      <rect x={20} y={12} width={2} height={2} fillOpacity={0.353}></rect>
                      <rect x={24} y={12} width={2} height={2} fillOpacity={0.34}></rect>
                      <rect x={28} y={12} width={2} height={2} fillOpacity={0.417}></rect>
                      <rect x={32} y={12} width={2} height={2} fillOpacity={0.258}></rect>
                      <rect x={36} y={12} width={2} height={2} fillOpacity={0.158}></rect>
                      <rect x={40} y={12} width={2} height={2} fillOpacity={0.388}></rect>
                      <rect x={44} y={12} width={2} height={2} fillOpacity={0.184}></rect>
                      <rect x={0} y={16} width={2} height={2} fillOpacity={0.491}></rect>
                      <rect x={4} y={16} width={2} height={2} fillOpacity={0.417}></rect>
                      <rect x={8} y={16} width={2} height={2} fillOpacity={0.231}></rect>
                      <rect x={12} y={16} width={2} height={2} fillOpacity={0.209}></rect>
                      <rect x={16} y={16} width={2} height={2} fillOpacity={0.305}></rect>
                      <rect x={20} y={16} width={2} height={2} fillOpacity={0.287}></rect>
                      <rect x={24} y={16} width={2} height={2} fillOpacity={0.353}></rect>
                      <rect x={28} y={16} width={2} height={2} fillOpacity={0.513}></rect>
                      <rect x={32} y={16} width={2} height={2} fillOpacity={0.483}></rect>
                      <rect x={36} y={16} width={2} height={2} fillOpacity={0.455}></rect>
                      <rect x={40} y={16} width={2} height={2} fillOpacity={0.483}></rect>
                      <rect x={44} y={16} width={2} height={2} fillOpacity={0.189}></rect>
                      <rect x={0} y={20} width={2} height={2} fillOpacity={0.264}></rect>
                      <rect x={4} y={20} width={2} height={2} fillOpacity={0.295}></rect>
                      <rect x={8} y={20} width={2} height={2} fillOpacity={0.51}></rect>
                      <rect x={12} y={20} width={2} height={2} fillOpacity={0.305}></rect>
                      <rect x={16} y={20} width={2} height={2} fillOpacity={0.438}></rect>
                      <rect x={20} y={20} width={2} height={2} fillOpacity={0.289}></rect>
                      <rect x={24} y={20} width={2} height={2} fillOpacity={0.322}></rect>
                      <rect x={28} y={20} width={2} height={2} fillOpacity={0.196}></rect>
                      <rect x={32} y={20} width={2} height={2} fillOpacity={0.486}></rect>
                      <rect x={36} y={20} width={2} height={2} fillOpacity={0.388}></rect>
                      <rect x={40} y={20} width={2} height={2} fillOpacity={0.489}></rect>
                      <rect x={44} y={20} width={2} height={2} fillOpacity={0.208}></rect>
                      <rect x={0} y={24} width={2} height={2} fillOpacity={0.239}></rect>
                      <rect x={4} y={24} width={2} height={2} fillOpacity={0.463}></rect>
                      <rect x={8} y={24} width={2} height={2} fillOpacity={0.539}></rect>
                      <rect x={12} y={24} width={2} height={2} fillOpacity={0.408}></rect>
                      <rect x={16} y={24} width={2} height={2} fillOpacity={0.527}></rect>
                      <rect x={20} y={24} width={2} height={2} fillOpacity={0.357}></rect>
                      <rect x={24} y={24} width={2} height={2} fillOpacity={0.362}></rect>
                      <rect x={28} y={24} width={2} height={2} fillOpacity={0.151}></rect>
                      <rect x={32} y={24} width={2} height={2} fillOpacity={0.324}></rect>
                      <rect x={36} y={24} width={2} height={2} fillOpacity={0.347}></rect>
                      <rect x={40} y={24} width={2} height={2} fillOpacity={0.299}></rect>
                      <rect x={44} y={24} width={2} height={2} fillOpacity={0.127}></rect>
                      <rect x={0} y={28} width={2} height={2} fillOpacity={0.476}></rect>
                      <rect x={4} y={28} width={2} height={2} fillOpacity={0.461}></rect>
                      <rect x={8} y={28} width={2} height={2} fillOpacity={0.377}></rect>
                      <rect x={12} y={28} width={2} height={2} fillOpacity={0.415}></rect>
                      <rect x={16} y={28} width={2} height={2} fillOpacity={0.217}></rect>
                      <rect x={20} y={28} width={2} height={2} fillOpacity={0.297}></rect>
                      <rect x={24} y={28} width={2} height={2} fillOpacity={0.258}></rect>
                      <rect x={28} y={28} width={2} height={2} fillOpacity={0.296}></rect>
                      <rect x={32} y={28} width={2} height={2} fillOpacity={0.276}></rect>
                      <rect x={36} y={28} width={2} height={2} fillOpacity={0.182}></rect>
                      <rect x={40} y={28} width={2} height={2} fillOpacity={0.422}></rect>
                      <rect x={44} y={28} width={2} height={2} fillOpacity={0.392}></rect>
                      <rect x={0} y={32} width={2} height={2} fillOpacity={0.273}></rect>
                      <rect x={4} y={32} width={2} height={2} fillOpacity={0.143}></rect>
                      <rect x={8} y={32} width={2} height={2} fillOpacity={0.338}></rect>
                      <rect x={12} y={32} width={2} height={2} fillOpacity={0.264}></rect>
                      <rect x={16} y={32} width={2} height={2} fillOpacity={0.218}></rect>
                      <rect x={20} y={32} width={2} height={2} fillOpacity={0.29}></rect>
                      <rect x={24} y={32} width={2} height={2} fillOpacity={0.336}></rect>
                      <rect x={28} y={32} width={2} height={2} fillOpacity={0.313}></rect>
                      <rect x={32} y={32} width={2} height={2} fillOpacity={0.514}></rect>
                      <rect x={36} y={32} width={2} height={2} fillOpacity={0.289}></rect>
                      <rect x={40} y={32} width={2} height={2} fillOpacity={0.25}></rect>
                      <rect x={44} y={32} width={2} height={2} fillOpacity={0.507}></rect>
                      <rect x={0} y={36} width={2} height={2} fillOpacity={0.346}></rect>
                      <rect x={4} y={36} width={2} height={2} fillOpacity={0.208}></rect>
                      <rect x={8} y={36} width={2} height={2} fillOpacity={0.313}></rect>
                      <rect x={12} y={36} width={2} height={2} fillOpacity={0.365}></rect>
                      <rect x={16} y={36} width={2} height={2} fillOpacity={0.491}></rect>
                      <rect x={20} y={36} width={2} height={2} fillOpacity={0.121}></rect>
                      <rect x={24} y={36} width={2} height={2} fillOpacity={0.472}></rect>
                      <rect x={28} y={36} width={2} height={2} fillOpacity={0.281}></rect>
                      <rect x={32} y={36} width={2} height={2} fillOpacity={0.297}></rect>
                      <rect x={36} y={36} width={2} height={2} fillOpacity={0.33}></rect>
                      <rect x={40} y={36} width={2} height={2} fillOpacity={0.463}></rect>
                      <rect x={44} y={36} width={2} height={2} fillOpacity={0.447}></rect>
                      <rect x={0} y={40} width={2} height={2} fillOpacity={0.217}></rect>
                      <rect x={4} y={40} width={2} height={2} fillOpacity={0.467}></rect>
                      <rect x={8} y={40} width={2} height={2} fillOpacity={0.297}></rect>
                      <rect x={12} y={40} width={2} height={2} fillOpacity={0.303}></rect>
                      <rect x={16} y={40} width={2} height={2} fillOpacity={0.497}></rect>
                      <rect x={20} y={40} width={2} height={2} fillOpacity={0.201}></rect>
                      <rect x={24} y={40} width={2} height={2} fillOpacity={0.5}></rect>
                      <rect x={28} y={40} width={2} height={2} fillOpacity={0.458}></rect>
                      <rect x={32} y={40} width={2} height={2} fillOpacity={0.165}></rect>
                      <rect x={36} y={40} width={2} height={2} fillOpacity={0.36}></rect>
                      <rect x={40} y={40} width={2} height={2} fillOpacity={0.329}></rect>
                      <rect x={44} y={40} width={2} height={2} fillOpacity={0.419}></rect>
                      <rect x={0} y={44} width={2} height={2} fillOpacity={0.47}></rect>
                      <rect x={4} y={44} width={2} height={2} fillOpacity={0.161}></rect>
                      <rect x={8} y={44} width={2} height={2} fillOpacity={0.191}></rect>
                      <rect x={12} y={44} width={2} height={2} fillOpacity={0.341}></rect>
                      <rect x={16} y={44} width={2} height={2} fillOpacity={0.279}></rect>
                      <rect x={20} y={44} width={2} height={2} fillOpacity={0.387}></rect>
                      <rect x={24} y={44} width={2} height={2} fillOpacity={0.173}></rect>
                      <rect x={28} y={44} width={2} height={2} fillOpacity={0.537}></rect>
                      <rect x={32} y={44} width={2} height={2} fillOpacity={0.218}></rect>
                      <rect x={36} y={44} width={2} height={2} fillOpacity={0.368}></rect>
                      <rect x={40} y={44} width={2} height={2} fillOpacity={0.5}></rect>
                      <rect x={44} y={44} width={2} height={2} fillOpacity={0.414}></rect>
                    </g>
                  </pattern>
                </defs>
                <g mask="url(#_r_6_-mask)">
                  <rect width={240} height={136} fill="url(#_r_6_-pattern)"></rect>
                </g>
              </svg>
            </div>
            <div className="relative space-y-5 z-10">
              <div className="flex flex-row items-center justify-between">
                <Item className="[&_svg]:size-4.5 [&_svg]:text-white [background:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%),#000] border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9.5" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="lucide lucide-palette" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PaletteIcon" tabler="IconPalette" hugeicons="PaintBoardIcon" phosphor="PaletteIcon" remixicon="RiPaletteLine" aria-hidden="true">
                      <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                      <circle cx={13.5} cy={6.5} r=".5" fill="currentColor"></circle>
                      <circle cx={17.5} cy={10.5} r=".5" fill="currentColor"></circle>
                      <circle cx={6.5} cy={12.5} r=".5" fill="currentColor"></circle>
                      <circle cx={8.5} cy={7.5} r=".5" fill="currentColor"></circle>
                    </svg>
                  </ItemMedia>
                </Item>
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent! cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_a_" aria-expanded="false">
                  <svg className="lucide lucide-ellipsis-vertical size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                    <circle cx={12} cy={12} r={1}></circle>
                    <circle cx={12} cy={5} r={1}></circle>
                    <circle cx={12} cy={19} r={1}></circle>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </div>
              <div className="flex flex-col gap-0.5">
                <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
                  {"Low Stock Alerts"}
                </a>
                <p className="leading-relaxed text-muted-foreground text-xs">
                  {"27/items"}
                </p>
              </div>
            </div>
          </FramePanel>
          <FramePanel className="border-border isolate space-y-5">
            <div className="[--card-dot-pattern-fill:var(--color-foreground)] [--card-dot-pattern-opacity:0.12] absolute dark:[--card-dot-pattern-opacity:0.2] inset-0 pointer-events-none z-0" aria-hidden="true">
              <svg className="size-full" viewBox="0 0 240 136" fill="none" preserveAspectRatio="none" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg" style={{opacity: "var(--card-dot-pattern-opacity)"}}>
                <defs>
                  <mask id="_r_c_-mask" maskUnits="userSpaceOnUse" x={0} y={0} width={240} height={136} style={{maskType: "alpha"}}>
                    <rect width={240} height={136} fill="url(#_r_c_-gradient)"></rect>
                  </mask>
                  <lineargradient id="_r_c_-gradient" x1={240} y1={0} x2={156.1387} y2={95.7483} gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"></stop>
                    <stop offset={0.538873} stopColor="white"></stop>
                    <stop offset={1} stopColor="white" stopOpacity={0}></stop>
                  </lineargradient>
                  <pattern id="_r_c_-pattern" patternUnits="userSpaceOnUse" patterntransform="matrix(48 0 0 48 0 0)" preserveAspectRatio="none" viewBox="0 0 48 48" width={1} height={1}>
                    <g fill="var(--card-dot-pattern-fill)">
                      <rect x={0} y={0} width={2} height={2} fillOpacity={0.216}></rect>
                      <rect x={4} y={0} width={2} height={2} fillOpacity={0.489}></rect>
                      <rect x={8} y={0} width={2} height={2} fillOpacity={0.366}></rect>
                      <rect x={12} y={0} width={2} height={2} fillOpacity={0.305}></rect>
                      <rect x={16} y={0} width={2} height={2} fillOpacity={0.514}></rect>
                      <rect x={20} y={0} width={2} height={2} fillOpacity={0.129}></rect>
                      <rect x={24} y={0} width={2} height={2} fillOpacity={0.431}></rect>
                      <rect x={28} y={0} width={2} height={2} fillOpacity={0.142}></rect>
                      <rect x={32} y={0} width={2} height={2} fillOpacity={0.288}></rect>
                      <rect x={36} y={0} width={2} height={2} fillOpacity={0.144}></rect>
                      <rect x={40} y={0} width={2} height={2} fillOpacity={0.313}></rect>
                      <rect x={44} y={0} width={2} height={2} fillOpacity={0.214}></rect>
                      <rect x={0} y={4} width={2} height={2} fillOpacity={0.4}></rect>
                      <rect x={4} y={4} width={2} height={2} fillOpacity={0.13}></rect>
                      <rect x={8} y={4} width={2} height={2} fillOpacity={0.498}></rect>
                      <rect x={12} y={4} width={2} height={2} fillOpacity={0.473}></rect>
                      <rect x={16} y={4} width={2} height={2} fillOpacity={0.386}></rect>
                      <rect x={20} y={4} width={2} height={2} fillOpacity={0.248}></rect>
                      <rect x={24} y={4} width={2} height={2} fillOpacity={0.168}></rect>
                      <rect x={28} y={4} width={2} height={2} fillOpacity={0.193}></rect>
                      <rect x={32} y={4} width={2} height={2} fillOpacity={0.528}></rect>
                      <rect x={36} y={4} width={2} height={2} fillOpacity={0.307}></rect>
                      <rect x={40} y={4} width={2} height={2} fillOpacity={0.314}></rect>
                      <rect x={44} y={4} width={2} height={2} fillOpacity={0.444}></rect>
                      <rect x={0} y={8} width={2} height={2} fillOpacity={0.33}></rect>
                      <rect x={4} y={8} width={2} height={2} fillOpacity={0.438}></rect>
                      <rect x={8} y={8} width={2} height={2} fillOpacity={0.477}></rect>
                      <rect x={12} y={8} width={2} height={2} fillOpacity={0.434}></rect>
                      <rect x={16} y={8} width={2} height={2} fillOpacity={0.47}></rect>
                      <rect x={20} y={8} width={2} height={2} fillOpacity={0.383}></rect>
                      <rect x={24} y={8} width={2} height={2} fillOpacity={0.514}></rect>
                      <rect x={28} y={8} width={2} height={2} fillOpacity={0.287}></rect>
                      <rect x={32} y={8} width={2} height={2} fillOpacity={0.346}></rect>
                      <rect x={36} y={8} width={2} height={2} fillOpacity={0.52}></rect>
                      <rect x={40} y={8} width={2} height={2} fillOpacity={0.524}></rect>
                      <rect x={44} y={8} width={2} height={2} fillOpacity={0.126}></rect>
                      <rect x={0} y={12} width={2} height={2} fillOpacity={0.259}></rect>
                      <rect x={4} y={12} width={2} height={2} fillOpacity={0.281}></rect>
                      <rect x={8} y={12} width={2} height={2} fillOpacity={0.311}></rect>
                      <rect x={12} y={12} width={2} height={2} fillOpacity={0.212}></rect>
                      <rect x={16} y={12} width={2} height={2} fillOpacity={0.524}></rect>
                      <rect x={20} y={12} width={2} height={2} fillOpacity={0.353}></rect>
                      <rect x={24} y={12} width={2} height={2} fillOpacity={0.34}></rect>
                      <rect x={28} y={12} width={2} height={2} fillOpacity={0.417}></rect>
                      <rect x={32} y={12} width={2} height={2} fillOpacity={0.258}></rect>
                      <rect x={36} y={12} width={2} height={2} fillOpacity={0.158}></rect>
                      <rect x={40} y={12} width={2} height={2} fillOpacity={0.388}></rect>
                      <rect x={44} y={12} width={2} height={2} fillOpacity={0.184}></rect>
                      <rect x={0} y={16} width={2} height={2} fillOpacity={0.491}></rect>
                      <rect x={4} y={16} width={2} height={2} fillOpacity={0.417}></rect>
                      <rect x={8} y={16} width={2} height={2} fillOpacity={0.231}></rect>
                      <rect x={12} y={16} width={2} height={2} fillOpacity={0.209}></rect>
                      <rect x={16} y={16} width={2} height={2} fillOpacity={0.305}></rect>
                      <rect x={20} y={16} width={2} height={2} fillOpacity={0.287}></rect>
                      <rect x={24} y={16} width={2} height={2} fillOpacity={0.353}></rect>
                      <rect x={28} y={16} width={2} height={2} fillOpacity={0.513}></rect>
                      <rect x={32} y={16} width={2} height={2} fillOpacity={0.483}></rect>
                      <rect x={36} y={16} width={2} height={2} fillOpacity={0.455}></rect>
                      <rect x={40} y={16} width={2} height={2} fillOpacity={0.483}></rect>
                      <rect x={44} y={16} width={2} height={2} fillOpacity={0.189}></rect>
                      <rect x={0} y={20} width={2} height={2} fillOpacity={0.264}></rect>
                      <rect x={4} y={20} width={2} height={2} fillOpacity={0.295}></rect>
                      <rect x={8} y={20} width={2} height={2} fillOpacity={0.51}></rect>
                      <rect x={12} y={20} width={2} height={2} fillOpacity={0.305}></rect>
                      <rect x={16} y={20} width={2} height={2} fillOpacity={0.438}></rect>
                      <rect x={20} y={20} width={2} height={2} fillOpacity={0.289}></rect>
                      <rect x={24} y={20} width={2} height={2} fillOpacity={0.322}></rect>
                      <rect x={28} y={20} width={2} height={2} fillOpacity={0.196}></rect>
                      <rect x={32} y={20} width={2} height={2} fillOpacity={0.486}></rect>
                      <rect x={36} y={20} width={2} height={2} fillOpacity={0.388}></rect>
                      <rect x={40} y={20} width={2} height={2} fillOpacity={0.489}></rect>
                      <rect x={44} y={20} width={2} height={2} fillOpacity={0.208}></rect>
                      <rect x={0} y={24} width={2} height={2} fillOpacity={0.239}></rect>
                      <rect x={4} y={24} width={2} height={2} fillOpacity={0.463}></rect>
                      <rect x={8} y={24} width={2} height={2} fillOpacity={0.539}></rect>
                      <rect x={12} y={24} width={2} height={2} fillOpacity={0.408}></rect>
                      <rect x={16} y={24} width={2} height={2} fillOpacity={0.527}></rect>
                      <rect x={20} y={24} width={2} height={2} fillOpacity={0.357}></rect>
                      <rect x={24} y={24} width={2} height={2} fillOpacity={0.362}></rect>
                      <rect x={28} y={24} width={2} height={2} fillOpacity={0.151}></rect>
                      <rect x={32} y={24} width={2} height={2} fillOpacity={0.324}></rect>
                      <rect x={36} y={24} width={2} height={2} fillOpacity={0.347}></rect>
                      <rect x={40} y={24} width={2} height={2} fillOpacity={0.299}></rect>
                      <rect x={44} y={24} width={2} height={2} fillOpacity={0.127}></rect>
                      <rect x={0} y={28} width={2} height={2} fillOpacity={0.476}></rect>
                      <rect x={4} y={28} width={2} height={2} fillOpacity={0.461}></rect>
                      <rect x={8} y={28} width={2} height={2} fillOpacity={0.377}></rect>
                      <rect x={12} y={28} width={2} height={2} fillOpacity={0.415}></rect>
                      <rect x={16} y={28} width={2} height={2} fillOpacity={0.217}></rect>
                      <rect x={20} y={28} width={2} height={2} fillOpacity={0.297}></rect>
                      <rect x={24} y={28} width={2} height={2} fillOpacity={0.258}></rect>
                      <rect x={28} y={28} width={2} height={2} fillOpacity={0.296}></rect>
                      <rect x={32} y={28} width={2} height={2} fillOpacity={0.276}></rect>
                      <rect x={36} y={28} width={2} height={2} fillOpacity={0.182}></rect>
                      <rect x={40} y={28} width={2} height={2} fillOpacity={0.422}></rect>
                      <rect x={44} y={28} width={2} height={2} fillOpacity={0.392}></rect>
                      <rect x={0} y={32} width={2} height={2} fillOpacity={0.273}></rect>
                      <rect x={4} y={32} width={2} height={2} fillOpacity={0.143}></rect>
                      <rect x={8} y={32} width={2} height={2} fillOpacity={0.338}></rect>
                      <rect x={12} y={32} width={2} height={2} fillOpacity={0.264}></rect>
                      <rect x={16} y={32} width={2} height={2} fillOpacity={0.218}></rect>
                      <rect x={20} y={32} width={2} height={2} fillOpacity={0.29}></rect>
                      <rect x={24} y={32} width={2} height={2} fillOpacity={0.336}></rect>
                      <rect x={28} y={32} width={2} height={2} fillOpacity={0.313}></rect>
                      <rect x={32} y={32} width={2} height={2} fillOpacity={0.514}></rect>
                      <rect x={36} y={32} width={2} height={2} fillOpacity={0.289}></rect>
                      <rect x={40} y={32} width={2} height={2} fillOpacity={0.25}></rect>
                      <rect x={44} y={32} width={2} height={2} fillOpacity={0.507}></rect>
                      <rect x={0} y={36} width={2} height={2} fillOpacity={0.346}></rect>
                      <rect x={4} y={36} width={2} height={2} fillOpacity={0.208}></rect>
                      <rect x={8} y={36} width={2} height={2} fillOpacity={0.313}></rect>
                      <rect x={12} y={36} width={2} height={2} fillOpacity={0.365}></rect>
                      <rect x={16} y={36} width={2} height={2} fillOpacity={0.491}></rect>
                      <rect x={20} y={36} width={2} height={2} fillOpacity={0.121}></rect>
                      <rect x={24} y={36} width={2} height={2} fillOpacity={0.472}></rect>
                      <rect x={28} y={36} width={2} height={2} fillOpacity={0.281}></rect>
                      <rect x={32} y={36} width={2} height={2} fillOpacity={0.297}></rect>
                      <rect x={36} y={36} width={2} height={2} fillOpacity={0.33}></rect>
                      <rect x={40} y={36} width={2} height={2} fillOpacity={0.463}></rect>
                      <rect x={44} y={36} width={2} height={2} fillOpacity={0.447}></rect>
                      <rect x={0} y={40} width={2} height={2} fillOpacity={0.217}></rect>
                      <rect x={4} y={40} width={2} height={2} fillOpacity={0.467}></rect>
                      <rect x={8} y={40} width={2} height={2} fillOpacity={0.297}></rect>
                      <rect x={12} y={40} width={2} height={2} fillOpacity={0.303}></rect>
                      <rect x={16} y={40} width={2} height={2} fillOpacity={0.497}></rect>
                      <rect x={20} y={40} width={2} height={2} fillOpacity={0.201}></rect>
                      <rect x={24} y={40} width={2} height={2} fillOpacity={0.5}></rect>
                      <rect x={28} y={40} width={2} height={2} fillOpacity={0.458}></rect>
                      <rect x={32} y={40} width={2} height={2} fillOpacity={0.165}></rect>
                      <rect x={36} y={40} width={2} height={2} fillOpacity={0.36}></rect>
                      <rect x={40} y={40} width={2} height={2} fillOpacity={0.329}></rect>
                      <rect x={44} y={40} width={2} height={2} fillOpacity={0.419}></rect>
                      <rect x={0} y={44} width={2} height={2} fillOpacity={0.47}></rect>
                      <rect x={4} y={44} width={2} height={2} fillOpacity={0.161}></rect>
                      <rect x={8} y={44} width={2} height={2} fillOpacity={0.191}></rect>
                      <rect x={12} y={44} width={2} height={2} fillOpacity={0.341}></rect>
                      <rect x={16} y={44} width={2} height={2} fillOpacity={0.279}></rect>
                      <rect x={20} y={44} width={2} height={2} fillOpacity={0.387}></rect>
                      <rect x={24} y={44} width={2} height={2} fillOpacity={0.173}></rect>
                      <rect x={28} y={44} width={2} height={2} fillOpacity={0.537}></rect>
                      <rect x={32} y={44} width={2} height={2} fillOpacity={0.218}></rect>
                      <rect x={36} y={44} width={2} height={2} fillOpacity={0.368}></rect>
                      <rect x={40} y={44} width={2} height={2} fillOpacity={0.5}></rect>
                      <rect x={44} y={44} width={2} height={2} fillOpacity={0.414}></rect>
                    </g>
                  </pattern>
                </defs>
                <g mask="url(#_r_c_-mask)">
                  <rect width={240} height={136} fill="url(#_r_c_-pattern)"></rect>
                </g>
              </svg>
            </div>
            <div className="relative space-y-5 z-10">
              <div className="flex flex-row items-center justify-between">
                <Item className="[&_svg]:size-4.5 [&_svg]:text-white [background:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%),#000] border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9.5" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                      <path d="M18 17V9"></path>
                      <path d="M13 17V5"></path>
                      <path d="M8 17v-3"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent! cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_g_" aria-expanded="false">
                  <svg className="lucide lucide-ellipsis-vertical size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                    <circle cx={12} cy={12} r={1}></circle>
                    <circle cx={12} cy={5} r={1}></circle>
                    <circle cx={12} cy={19} r={1}></circle>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </div>
              <div className="flex flex-col gap-0.5">
                <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
                  {"Restocked"}
                </a>
                <p className="leading-relaxed text-muted-foreground text-xs">
                  {"320/items"}
                </p>
              </div>
            </div>
          </FramePanel>
          <FramePanel className="border-border isolate space-y-5">
            <div className="[--card-dot-pattern-fill:var(--color-foreground)] [--card-dot-pattern-opacity:0.12] absolute dark:[--card-dot-pattern-opacity:0.2] inset-0 pointer-events-none z-0" aria-hidden="true">
              <svg className="size-full" viewBox="0 0 240 136" fill="none" preserveAspectRatio="none" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg" style={{opacity: "var(--card-dot-pattern-opacity)"}}>
                <defs>
                  <mask id="_r_i_-mask" maskUnits="userSpaceOnUse" x={0} y={0} width={240} height={136} style={{maskType: "alpha"}}>
                    <rect width={240} height={136} fill="url(#_r_i_-gradient)"></rect>
                  </mask>
                  <lineargradient id="_r_i_-gradient" x1={240} y1={0} x2={156.1387} y2={95.7483} gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"></stop>
                    <stop offset={0.538873} stopColor="white"></stop>
                    <stop offset={1} stopColor="white" stopOpacity={0}></stop>
                  </lineargradient>
                  <pattern id="_r_i_-pattern" patternUnits="userSpaceOnUse" patterntransform="matrix(48 0 0 48 0 0)" preserveAspectRatio="none" viewBox="0 0 48 48" width={1} height={1}>
                    <g fill="var(--card-dot-pattern-fill)">
                      <rect x={0} y={0} width={2} height={2} fillOpacity={0.216}></rect>
                      <rect x={4} y={0} width={2} height={2} fillOpacity={0.489}></rect>
                      <rect x={8} y={0} width={2} height={2} fillOpacity={0.366}></rect>
                      <rect x={12} y={0} width={2} height={2} fillOpacity={0.305}></rect>
                      <rect x={16} y={0} width={2} height={2} fillOpacity={0.514}></rect>
                      <rect x={20} y={0} width={2} height={2} fillOpacity={0.129}></rect>
                      <rect x={24} y={0} width={2} height={2} fillOpacity={0.431}></rect>
                      <rect x={28} y={0} width={2} height={2} fillOpacity={0.142}></rect>
                      <rect x={32} y={0} width={2} height={2} fillOpacity={0.288}></rect>
                      <rect x={36} y={0} width={2} height={2} fillOpacity={0.144}></rect>
                      <rect x={40} y={0} width={2} height={2} fillOpacity={0.313}></rect>
                      <rect x={44} y={0} width={2} height={2} fillOpacity={0.214}></rect>
                      <rect x={0} y={4} width={2} height={2} fillOpacity={0.4}></rect>
                      <rect x={4} y={4} width={2} height={2} fillOpacity={0.13}></rect>
                      <rect x={8} y={4} width={2} height={2} fillOpacity={0.498}></rect>
                      <rect x={12} y={4} width={2} height={2} fillOpacity={0.473}></rect>
                      <rect x={16} y={4} width={2} height={2} fillOpacity={0.386}></rect>
                      <rect x={20} y={4} width={2} height={2} fillOpacity={0.248}></rect>
                      <rect x={24} y={4} width={2} height={2} fillOpacity={0.168}></rect>
                      <rect x={28} y={4} width={2} height={2} fillOpacity={0.193}></rect>
                      <rect x={32} y={4} width={2} height={2} fillOpacity={0.528}></rect>
                      <rect x={36} y={4} width={2} height={2} fillOpacity={0.307}></rect>
                      <rect x={40} y={4} width={2} height={2} fillOpacity={0.314}></rect>
                      <rect x={44} y={4} width={2} height={2} fillOpacity={0.444}></rect>
                      <rect x={0} y={8} width={2} height={2} fillOpacity={0.33}></rect>
                      <rect x={4} y={8} width={2} height={2} fillOpacity={0.438}></rect>
                      <rect x={8} y={8} width={2} height={2} fillOpacity={0.477}></rect>
                      <rect x={12} y={8} width={2} height={2} fillOpacity={0.434}></rect>
                      <rect x={16} y={8} width={2} height={2} fillOpacity={0.47}></rect>
                      <rect x={20} y={8} width={2} height={2} fillOpacity={0.383}></rect>
                      <rect x={24} y={8} width={2} height={2} fillOpacity={0.514}></rect>
                      <rect x={28} y={8} width={2} height={2} fillOpacity={0.287}></rect>
                      <rect x={32} y={8} width={2} height={2} fillOpacity={0.346}></rect>
                      <rect x={36} y={8} width={2} height={2} fillOpacity={0.52}></rect>
                      <rect x={40} y={8} width={2} height={2} fillOpacity={0.524}></rect>
                      <rect x={44} y={8} width={2} height={2} fillOpacity={0.126}></rect>
                      <rect x={0} y={12} width={2} height={2} fillOpacity={0.259}></rect>
                      <rect x={4} y={12} width={2} height={2} fillOpacity={0.281}></rect>
                      <rect x={8} y={12} width={2} height={2} fillOpacity={0.311}></rect>
                      <rect x={12} y={12} width={2} height={2} fillOpacity={0.212}></rect>
                      <rect x={16} y={12} width={2} height={2} fillOpacity={0.524}></rect>
                      <rect x={20} y={12} width={2} height={2} fillOpacity={0.353}></rect>
                      <rect x={24} y={12} width={2} height={2} fillOpacity={0.34}></rect>
                      <rect x={28} y={12} width={2} height={2} fillOpacity={0.417}></rect>
                      <rect x={32} y={12} width={2} height={2} fillOpacity={0.258}></rect>
                      <rect x={36} y={12} width={2} height={2} fillOpacity={0.158}></rect>
                      <rect x={40} y={12} width={2} height={2} fillOpacity={0.388}></rect>
                      <rect x={44} y={12} width={2} height={2} fillOpacity={0.184}></rect>
                      <rect x={0} y={16} width={2} height={2} fillOpacity={0.491}></rect>
                      <rect x={4} y={16} width={2} height={2} fillOpacity={0.417}></rect>
                      <rect x={8} y={16} width={2} height={2} fillOpacity={0.231}></rect>
                      <rect x={12} y={16} width={2} height={2} fillOpacity={0.209}></rect>
                      <rect x={16} y={16} width={2} height={2} fillOpacity={0.305}></rect>
                      <rect x={20} y={16} width={2} height={2} fillOpacity={0.287}></rect>
                      <rect x={24} y={16} width={2} height={2} fillOpacity={0.353}></rect>
                      <rect x={28} y={16} width={2} height={2} fillOpacity={0.513}></rect>
                      <rect x={32} y={16} width={2} height={2} fillOpacity={0.483}></rect>
                      <rect x={36} y={16} width={2} height={2} fillOpacity={0.455}></rect>
                      <rect x={40} y={16} width={2} height={2} fillOpacity={0.483}></rect>
                      <rect x={44} y={16} width={2} height={2} fillOpacity={0.189}></rect>
                      <rect x={0} y={20} width={2} height={2} fillOpacity={0.264}></rect>
                      <rect x={4} y={20} width={2} height={2} fillOpacity={0.295}></rect>
                      <rect x={8} y={20} width={2} height={2} fillOpacity={0.51}></rect>
                      <rect x={12} y={20} width={2} height={2} fillOpacity={0.305}></rect>
                      <rect x={16} y={20} width={2} height={2} fillOpacity={0.438}></rect>
                      <rect x={20} y={20} width={2} height={2} fillOpacity={0.289}></rect>
                      <rect x={24} y={20} width={2} height={2} fillOpacity={0.322}></rect>
                      <rect x={28} y={20} width={2} height={2} fillOpacity={0.196}></rect>
                      <rect x={32} y={20} width={2} height={2} fillOpacity={0.486}></rect>
                      <rect x={36} y={20} width={2} height={2} fillOpacity={0.388}></rect>
                      <rect x={40} y={20} width={2} height={2} fillOpacity={0.489}></rect>
                      <rect x={44} y={20} width={2} height={2} fillOpacity={0.208}></rect>
                      <rect x={0} y={24} width={2} height={2} fillOpacity={0.239}></rect>
                      <rect x={4} y={24} width={2} height={2} fillOpacity={0.463}></rect>
                      <rect x={8} y={24} width={2} height={2} fillOpacity={0.539}></rect>
                      <rect x={12} y={24} width={2} height={2} fillOpacity={0.408}></rect>
                      <rect x={16} y={24} width={2} height={2} fillOpacity={0.527}></rect>
                      <rect x={20} y={24} width={2} height={2} fillOpacity={0.357}></rect>
                      <rect x={24} y={24} width={2} height={2} fillOpacity={0.362}></rect>
                      <rect x={28} y={24} width={2} height={2} fillOpacity={0.151}></rect>
                      <rect x={32} y={24} width={2} height={2} fillOpacity={0.324}></rect>
                      <rect x={36} y={24} width={2} height={2} fillOpacity={0.347}></rect>
                      <rect x={40} y={24} width={2} height={2} fillOpacity={0.299}></rect>
                      <rect x={44} y={24} width={2} height={2} fillOpacity={0.127}></rect>
                      <rect x={0} y={28} width={2} height={2} fillOpacity={0.476}></rect>
                      <rect x={4} y={28} width={2} height={2} fillOpacity={0.461}></rect>
                      <rect x={8} y={28} width={2} height={2} fillOpacity={0.377}></rect>
                      <rect x={12} y={28} width={2} height={2} fillOpacity={0.415}></rect>
                      <rect x={16} y={28} width={2} height={2} fillOpacity={0.217}></rect>
                      <rect x={20} y={28} width={2} height={2} fillOpacity={0.297}></rect>
                      <rect x={24} y={28} width={2} height={2} fillOpacity={0.258}></rect>
                      <rect x={28} y={28} width={2} height={2} fillOpacity={0.296}></rect>
                      <rect x={32} y={28} width={2} height={2} fillOpacity={0.276}></rect>
                      <rect x={36} y={28} width={2} height={2} fillOpacity={0.182}></rect>
                      <rect x={40} y={28} width={2} height={2} fillOpacity={0.422}></rect>
                      <rect x={44} y={28} width={2} height={2} fillOpacity={0.392}></rect>
                      <rect x={0} y={32} width={2} height={2} fillOpacity={0.273}></rect>
                      <rect x={4} y={32} width={2} height={2} fillOpacity={0.143}></rect>
                      <rect x={8} y={32} width={2} height={2} fillOpacity={0.338}></rect>
                      <rect x={12} y={32} width={2} height={2} fillOpacity={0.264}></rect>
                      <rect x={16} y={32} width={2} height={2} fillOpacity={0.218}></rect>
                      <rect x={20} y={32} width={2} height={2} fillOpacity={0.29}></rect>
                      <rect x={24} y={32} width={2} height={2} fillOpacity={0.336}></rect>
                      <rect x={28} y={32} width={2} height={2} fillOpacity={0.313}></rect>
                      <rect x={32} y={32} width={2} height={2} fillOpacity={0.514}></rect>
                      <rect x={36} y={32} width={2} height={2} fillOpacity={0.289}></rect>
                      <rect x={40} y={32} width={2} height={2} fillOpacity={0.25}></rect>
                      <rect x={44} y={32} width={2} height={2} fillOpacity={0.507}></rect>
                      <rect x={0} y={36} width={2} height={2} fillOpacity={0.346}></rect>
                      <rect x={4} y={36} width={2} height={2} fillOpacity={0.208}></rect>
                      <rect x={8} y={36} width={2} height={2} fillOpacity={0.313}></rect>
                      <rect x={12} y={36} width={2} height={2} fillOpacity={0.365}></rect>
                      <rect x={16} y={36} width={2} height={2} fillOpacity={0.491}></rect>
                      <rect x={20} y={36} width={2} height={2} fillOpacity={0.121}></rect>
                      <rect x={24} y={36} width={2} height={2} fillOpacity={0.472}></rect>
                      <rect x={28} y={36} width={2} height={2} fillOpacity={0.281}></rect>
                      <rect x={32} y={36} width={2} height={2} fillOpacity={0.297}></rect>
                      <rect x={36} y={36} width={2} height={2} fillOpacity={0.33}></rect>
                      <rect x={40} y={36} width={2} height={2} fillOpacity={0.463}></rect>
                      <rect x={44} y={36} width={2} height={2} fillOpacity={0.447}></rect>
                      <rect x={0} y={40} width={2} height={2} fillOpacity={0.217}></rect>
                      <rect x={4} y={40} width={2} height={2} fillOpacity={0.467}></rect>
                      <rect x={8} y={40} width={2} height={2} fillOpacity={0.297}></rect>
                      <rect x={12} y={40} width={2} height={2} fillOpacity={0.303}></rect>
                      <rect x={16} y={40} width={2} height={2} fillOpacity={0.497}></rect>
                      <rect x={20} y={40} width={2} height={2} fillOpacity={0.201}></rect>
                      <rect x={24} y={40} width={2} height={2} fillOpacity={0.5}></rect>
                      <rect x={28} y={40} width={2} height={2} fillOpacity={0.458}></rect>
                      <rect x={32} y={40} width={2} height={2} fillOpacity={0.165}></rect>
                      <rect x={36} y={40} width={2} height={2} fillOpacity={0.36}></rect>
                      <rect x={40} y={40} width={2} height={2} fillOpacity={0.329}></rect>
                      <rect x={44} y={40} width={2} height={2} fillOpacity={0.419}></rect>
                      <rect x={0} y={44} width={2} height={2} fillOpacity={0.47}></rect>
                      <rect x={4} y={44} width={2} height={2} fillOpacity={0.161}></rect>
                      <rect x={8} y={44} width={2} height={2} fillOpacity={0.191}></rect>
                      <rect x={12} y={44} width={2} height={2} fillOpacity={0.341}></rect>
                      <rect x={16} y={44} width={2} height={2} fillOpacity={0.279}></rect>
                      <rect x={20} y={44} width={2} height={2} fillOpacity={0.387}></rect>
                      <rect x={24} y={44} width={2} height={2} fillOpacity={0.173}></rect>
                      <rect x={28} y={44} width={2} height={2} fillOpacity={0.537}></rect>
                      <rect x={32} y={44} width={2} height={2} fillOpacity={0.218}></rect>
                      <rect x={36} y={44} width={2} height={2} fillOpacity={0.368}></rect>
                      <rect x={40} y={44} width={2} height={2} fillOpacity={0.5}></rect>
                      <rect x={44} y={44} width={2} height={2} fillOpacity={0.414}></rect>
                    </g>
                  </pattern>
                </defs>
                <g mask="url(#_r_i_-mask)">
                  <rect width={240} height={136} fill="url(#_r_i_-pattern)"></rect>
                </g>
              </svg>
            </div>
            <div className="relative space-y-5 z-10">
              <div className="flex flex-row items-center justify-between">
                <Item className="[&_svg]:size-4.5 [&_svg]:text-white [background:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%),#000] border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9.5" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="lucide lucide-shield" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldIcon" tabler="IconShield" hugeicons="Shield01Icon" phosphor="ShieldIcon" remixicon="RiShieldLine" aria-hidden="true">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent! cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_m_" aria-expanded="false">
                  <svg className="lucide lucide-ellipsis-vertical size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                    <circle cx={12} cy={12} r={1}></circle>
                    <circle cx={12} cy={5} r={1}></circle>
                    <circle cx={12} cy={19} r={1}></circle>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </div>
              <div className="flex flex-col gap-0.5">
                <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
                  {"Avg. Order Size"}
                </a>
                <p className="leading-relaxed text-muted-foreground text-xs">
                  {"3.2/items"}
                </p>
              </div>
            </div>
          </FramePanel>
        </div>
      </Frame>
    </div>
  )
}
