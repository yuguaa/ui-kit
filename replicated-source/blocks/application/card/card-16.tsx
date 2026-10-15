import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6">
      <Frame className="bg-zinc-950 w-80">
        <header className="flex flex-col gap-(--frame-panel-header-gap) isolate p-4.5 relative">
          <div className="[--card-dot-pattern-fill:var(--color-zinc-300)] [--card-dot-pattern-opacity:0.2] absolute inset-0 pointer-events-none z-0" aria-hidden="true">
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
          <div className="flex flex-col gap-11 relative z-10">
            <div className="flex flex-row items-center justify-between">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-zinc-800 border border-zinc-800 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs text-zinc-300 transition-shadow">
                <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                {"Live"}
              </Badge>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent! cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_4_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis-vertical size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                  <circle cx={12} cy={12} r={1}></circle>
                  <circle cx={12} cy={5} r={1}></circle>
                  <circle cx={12} cy={19} r={1}></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
            <svg className="size-8.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" fill="none">
              <path d="M25.5408 2.55583C24.7821 2.11573 23.9908 1.73467 23.1736 1.41602C23.1736 1.41602 21.1879 2.49646 20.1252 3.14502C18.929 3.8767 16.9997 5.31333 16.9997 5.31333C16.9997 5.31333 15.0703 3.8767 13.8652 3.14502C12.8025 2.49646 10.8183 1.41602 10.8183 1.41602C9.9986 1.73432 9.20471 2.11539 8.44366 2.55583C7.57394 3.04499 6.77043 3.64351 6.05273 4.33678C6.05273 4.33678 9.64135 7.21005 11.5292 8.88563C13.417 10.5612 16.9997 13.8901 16.9997 13.8901C16.9997 13.8901 20.5616 10.5671 22.4553 8.89008C24.3491 7.21302 27.9302 4.34123 27.9302 4.34123C27.2135 3.64618 26.4105 3.04613 25.5408 2.55583Z" fill="white"></path>
              <path d="M8.45148 31.4344C9.21234 31.8756 10.0062 32.2571 10.8261 32.5756C10.8261 32.5756 12.8104 31.4937 13.873 30.8452C15.0707 30.115 17 28.6768 17 28.6768C17 28.6768 18.9294 30.115 20.1301 30.8452C21.1883 31.4937 23.174 32.5831 23.174 32.5831C23.9938 32.2646 24.7878 31.883 25.5486 31.4418C26.4184 30.9534 27.2215 30.3548 27.9381 29.6608C27.9381 29.6608 24.3509 26.7876 22.4631 25.112C20.5753 23.4364 17 20.1016 17 20.1016C17 20.1016 13.4233 23.4245 11.537 25.1001C9.65065 26.7757 6.06055 29.6489 6.06055 29.6489C6.77779 30.3427 7.58137 30.9413 8.45148 31.4299V31.4344Z" fill="white"></path>
              <path d="M31.4344 25.551C31.8756 24.7902 32.2571 23.9963 32.5756 23.1764C32.5756 23.1764 31.4937 21.1907 30.8452 20.128C30.115 18.9304 28.6768 16.9995 28.6768 16.9995C28.6768 16.9995 30.115 15.0701 30.8452 13.8828C31.4937 12.8143 32.5831 10.8285 32.5831 10.8285C32.2646 10.0087 31.883 9.21476 31.4418 8.4539C30.9534 7.58409 30.3548 6.78097 29.6608 6.06445C29.6608 6.06445 26.7876 9.65159 25.112 11.5394C23.4364 13.4272 20.1016 16.9995 20.1016 16.9995C20.1016 16.9995 23.4245 20.5718 25.1001 22.4596C26.7757 24.3474 29.649 27.936 29.649 27.936C30.3427 27.2188 30.9413 26.4152 31.4299 25.5451L31.4344 25.551Z" fill="white"></path>
              <path d="M2.55583 8.46124C2.11573 9.2199 1.73467 10.0113 1.41602 10.8284C1.41602 10.8284 2.49646 12.8142 3.14502 13.8828C3.8767 15.0804 5.31333 17.0128 5.31333 17.0128C5.31333 17.0128 3.8767 18.9421 3.14502 20.1413C2.49646 21.198 1.41602 23.1838 1.41602 23.1838C1.73432 24.0034 2.11539 24.7973 2.55583 25.5584C3.04475 26.4278 3.6433 27.2309 4.33678 27.9478C4.33678 27.9478 7.21005 24.3607 8.88563 22.4729C10.5612 20.5851 13.8901 16.9994 13.8901 16.9994C13.8901 16.9994 10.5671 13.4375 8.89008 11.5467C7.21302 9.65596 4.34123 6.07031 4.34123 6.07031C3.64639 6.78774 3.04637 7.59126 2.55583 8.46124Z" fill="white"></path>
            </svg>
          </div>
        </header>
        <FramePanel className="space-y-3.5">
          <div className="flex justify-between">
            <h3 className="font-medium leading-tight text-sm">
              {"LeadForge CRM"}
            </h3>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-secondary-foreground transition-shadow">
              {"Installed"}
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm">
            {"Sync contacts, track opportunities, and forecast deals in one unified workspace."}
          </p>
          <AvatarGroup>
            <Avatar className="size-6" size="default">
              <AvatarImage alt="Sarah Chen" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
            </Avatar>
            <Avatar className="size-6" size="default">
              <AvatarImage alt="Michael Rodriguez" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
            </Avatar>
            <Avatar className="size-6" size="default">
              <AvatarImage alt="Emma Wilson" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
            </Avatar>
            <AvatarGroupCount className="border size-6 text-[10px]">
              {"+3"}
            </AvatarGroupCount>
          </AvatarGroup>
        </FramePanel>
        <FramePanel className="py-2.5!">
          <Button className="w-full" type="button" tabIndex={0}>
            {"Integration Guide"}
          </Button>
        </FramePanel>
      </Frame>
    </div>
  )
}
