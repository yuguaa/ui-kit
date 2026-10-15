import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-5xl min-h-svh p-6 w-full">
      <Frame className="w-full">
        <FramePanel className="p-0!">
          <div className="flex flex-col items-stretch md:flex-row overflow-hidden">
            <div className="border-b border-border/60 flex flex-col gap-2 justify-between last:border-0 md:border-r md:gap-4 p-4">
              <h3 className="font-normal m-0 text-muted-foreground text-xs">
                {"Applied for"}
              </h3>
              <span className="text-xs">
                {"Business Analyst"}
              </span>
            </div>
            <div className="border-b border-border/60 flex flex-col gap-2 justify-between last:border-0 md:border-r md:gap-4 p-4">
              <h3 className="font-normal m-0 text-muted-foreground text-xs">
                {"Location"}
              </h3>
              <span className="text-xs">
                {"Amsterdam, NL"}
              </span>
            </div>
            <div className="border-b border-border/60 flex flex-col gap-2 justify-between last:border-0 md:border-r md:gap-4 p-4">
              <h3 className="font-normal m-0 text-muted-foreground text-xs">
                {"Mobile"}
              </h3>
              <div className="-mb-1 flex gap-1.5 items-center">
                <span className="text-xs">
                  {"+31 6 9876 54 32"}
                </span>
                <Button className="[&_svg]:opacity-60 hover:[&_svg]:opacity-100 transition-opacity" type="button" tabIndex="0" aria-label="Copy">
                  <svg className="lucide lucide-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="border-b border-border/60 flex flex-col gap-2 justify-between last:border-0 md:border-r md:gap-4 p-4">
              <h3 className="font-normal m-0 text-muted-foreground text-xs">
                {"Email"}
              </h3>
              <div className="-mb-1 flex gap-1.5 items-center">
                <span className="text-xs">
                  {"jeroen.doe@neui.io"}
                </span>
                <Button className="[&_svg]:opacity-60 hover:[&_svg]:opacity-100 transition-opacity" type="button" tabIndex="0" aria-label="Copy">
                  <svg className="lucide lucide-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="border-b border-border/60 flex flex-1 flex-col gap-2 isolate justify-between last:border-0 md:border-r md:gap-4 p-4 relative">
              <div className="[--card-dot-pattern-fill:var(--color-foreground)] [--card-dot-pattern-opacity:0.12] absolute dark:[--card-dot-pattern-opacity:0.2] inset-0 pointer-events-none z-0" aria-hidden="true">
                <svg className="size-full" viewBox="0 0 240 136" fill="none" preserveAspectRatio="none" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg" style={{opacity: "var(--card-dot-pattern-opacity)"}}>
                  <defs>
                    <mask id="_r_0_-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="240" height="136" style={{maskType: "alpha"}}>
                      <rect width="240" height="136" fill="url(#_r_0_-gradient)"></rect>
                    </mask>
                    <lineargradient id="_r_0_-gradient" x1="240" y1="0" x2="156.1387" y2="95.7483" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"></stop>
                      <stop offset="0.538873" stopColor="white"></stop>
                      <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                    </lineargradient>
                    <pattern id="_r_0_-pattern" patternUnits="userSpaceOnUse" patterntransform="matrix(48 0 0 48 0 0)" preserveAspectRatio="none" viewBox="0 0 48 48" width="1" height="1">
                      <g fill="var(--card-dot-pattern-fill)">
                        <rect x="0" y="0" width="2" height="2" fillOpacity="0.216"></rect>
                        <rect x="4" y="0" width="2" height="2" fillOpacity="0.489"></rect>
                        <rect x="8" y="0" width="2" height="2" fillOpacity="0.366"></rect>
                        <rect x="12" y="0" width="2" height="2" fillOpacity="0.305"></rect>
                        <rect x="16" y="0" width="2" height="2" fillOpacity="0.514"></rect>
                        <rect x="20" y="0" width="2" height="2" fillOpacity="0.129"></rect>
                        <rect x="24" y="0" width="2" height="2" fillOpacity="0.431"></rect>
                        <rect x="28" y="0" width="2" height="2" fillOpacity="0.142"></rect>
                        <rect x="32" y="0" width="2" height="2" fillOpacity="0.288"></rect>
                        <rect x="36" y="0" width="2" height="2" fillOpacity="0.144"></rect>
                        <rect x="40" y="0" width="2" height="2" fillOpacity="0.313"></rect>
                        <rect x="44" y="0" width="2" height="2" fillOpacity="0.214"></rect>
                        <rect x="0" y="4" width="2" height="2" fillOpacity="0.4"></rect>
                        <rect x="4" y="4" width="2" height="2" fillOpacity="0.13"></rect>
                        <rect x="8" y="4" width="2" height="2" fillOpacity="0.498"></rect>
                        <rect x="12" y="4" width="2" height="2" fillOpacity="0.473"></rect>
                        <rect x="16" y="4" width="2" height="2" fillOpacity="0.386"></rect>
                        <rect x="20" y="4" width="2" height="2" fillOpacity="0.248"></rect>
                        <rect x="24" y="4" width="2" height="2" fillOpacity="0.168"></rect>
                        <rect x="28" y="4" width="2" height="2" fillOpacity="0.193"></rect>
                        <rect x="32" y="4" width="2" height="2" fillOpacity="0.528"></rect>
                        <rect x="36" y="4" width="2" height="2" fillOpacity="0.307"></rect>
                        <rect x="40" y="4" width="2" height="2" fillOpacity="0.314"></rect>
                        <rect x="44" y="4" width="2" height="2" fillOpacity="0.444"></rect>
                        <rect x="0" y="8" width="2" height="2" fillOpacity="0.33"></rect>
                        <rect x="4" y="8" width="2" height="2" fillOpacity="0.438"></rect>
                        <rect x="8" y="8" width="2" height="2" fillOpacity="0.477"></rect>
                        <rect x="12" y="8" width="2" height="2" fillOpacity="0.434"></rect>
                        <rect x="16" y="8" width="2" height="2" fillOpacity="0.47"></rect>
                        <rect x="20" y="8" width="2" height="2" fillOpacity="0.383"></rect>
                        <rect x="24" y="8" width="2" height="2" fillOpacity="0.514"></rect>
                        <rect x="28" y="8" width="2" height="2" fillOpacity="0.287"></rect>
                        <rect x="32" y="8" width="2" height="2" fillOpacity="0.346"></rect>
                        <rect x="36" y="8" width="2" height="2" fillOpacity="0.52"></rect>
                        <rect x="40" y="8" width="2" height="2" fillOpacity="0.524"></rect>
                        <rect x="44" y="8" width="2" height="2" fillOpacity="0.126"></rect>
                        <rect x="0" y="12" width="2" height="2" fillOpacity="0.259"></rect>
                        <rect x="4" y="12" width="2" height="2" fillOpacity="0.281"></rect>
                        <rect x="8" y="12" width="2" height="2" fillOpacity="0.311"></rect>
                        <rect x="12" y="12" width="2" height="2" fillOpacity="0.212"></rect>
                        <rect x="16" y="12" width="2" height="2" fillOpacity="0.524"></rect>
                        <rect x="20" y="12" width="2" height="2" fillOpacity="0.353"></rect>
                        <rect x="24" y="12" width="2" height="2" fillOpacity="0.34"></rect>
                        <rect x="28" y="12" width="2" height="2" fillOpacity="0.417"></rect>
                        <rect x="32" y="12" width="2" height="2" fillOpacity="0.258"></rect>
                        <rect x="36" y="12" width="2" height="2" fillOpacity="0.158"></rect>
                        <rect x="40" y="12" width="2" height="2" fillOpacity="0.388"></rect>
                        <rect x="44" y="12" width="2" height="2" fillOpacity="0.184"></rect>
                        <rect x="0" y="16" width="2" height="2" fillOpacity="0.491"></rect>
                        <rect x="4" y="16" width="2" height="2" fillOpacity="0.417"></rect>
                        <rect x="8" y="16" width="2" height="2" fillOpacity="0.231"></rect>
                        <rect x="12" y="16" width="2" height="2" fillOpacity="0.209"></rect>
                        <rect x="16" y="16" width="2" height="2" fillOpacity="0.305"></rect>
                        <rect x="20" y="16" width="2" height="2" fillOpacity="0.287"></rect>
                        <rect x="24" y="16" width="2" height="2" fillOpacity="0.353"></rect>
                        <rect x="28" y="16" width="2" height="2" fillOpacity="0.513"></rect>
                        <rect x="32" y="16" width="2" height="2" fillOpacity="0.483"></rect>
                        <rect x="36" y="16" width="2" height="2" fillOpacity="0.455"></rect>
                        <rect x="40" y="16" width="2" height="2" fillOpacity="0.483"></rect>
                        <rect x="44" y="16" width="2" height="2" fillOpacity="0.189"></rect>
                        <rect x="0" y="20" width="2" height="2" fillOpacity="0.264"></rect>
                        <rect x="4" y="20" width="2" height="2" fillOpacity="0.295"></rect>
                        <rect x="8" y="20" width="2" height="2" fillOpacity="0.51"></rect>
                        <rect x="12" y="20" width="2" height="2" fillOpacity="0.305"></rect>
                        <rect x="16" y="20" width="2" height="2" fillOpacity="0.438"></rect>
                        <rect x="20" y="20" width="2" height="2" fillOpacity="0.289"></rect>
                        <rect x="24" y="20" width="2" height="2" fillOpacity="0.322"></rect>
                        <rect x="28" y="20" width="2" height="2" fillOpacity="0.196"></rect>
                        <rect x="32" y="20" width="2" height="2" fillOpacity="0.486"></rect>
                        <rect x="36" y="20" width="2" height="2" fillOpacity="0.388"></rect>
                        <rect x="40" y="20" width="2" height="2" fillOpacity="0.489"></rect>
                        <rect x="44" y="20" width="2" height="2" fillOpacity="0.208"></rect>
                        <rect x="0" y="24" width="2" height="2" fillOpacity="0.239"></rect>
                        <rect x="4" y="24" width="2" height="2" fillOpacity="0.463"></rect>
                        <rect x="8" y="24" width="2" height="2" fillOpacity="0.539"></rect>
                        <rect x="12" y="24" width="2" height="2" fillOpacity="0.408"></rect>
                        <rect x="16" y="24" width="2" height="2" fillOpacity="0.527"></rect>
                        <rect x="20" y="24" width="2" height="2" fillOpacity="0.357"></rect>
                        <rect x="24" y="24" width="2" height="2" fillOpacity="0.362"></rect>
                        <rect x="28" y="24" width="2" height="2" fillOpacity="0.151"></rect>
                        <rect x="32" y="24" width="2" height="2" fillOpacity="0.324"></rect>
                        <rect x="36" y="24" width="2" height="2" fillOpacity="0.347"></rect>
                        <rect x="40" y="24" width="2" height="2" fillOpacity="0.299"></rect>
                        <rect x="44" y="24" width="2" height="2" fillOpacity="0.127"></rect>
                        <rect x="0" y="28" width="2" height="2" fillOpacity="0.476"></rect>
                        <rect x="4" y="28" width="2" height="2" fillOpacity="0.461"></rect>
                        <rect x="8" y="28" width="2" height="2" fillOpacity="0.377"></rect>
                        <rect x="12" y="28" width="2" height="2" fillOpacity="0.415"></rect>
                        <rect x="16" y="28" width="2" height="2" fillOpacity="0.217"></rect>
                        <rect x="20" y="28" width="2" height="2" fillOpacity="0.297"></rect>
                        <rect x="24" y="28" width="2" height="2" fillOpacity="0.258"></rect>
                        <rect x="28" y="28" width="2" height="2" fillOpacity="0.296"></rect>
                        <rect x="32" y="28" width="2" height="2" fillOpacity="0.276"></rect>
                        <rect x="36" y="28" width="2" height="2" fillOpacity="0.182"></rect>
                        <rect x="40" y="28" width="2" height="2" fillOpacity="0.422"></rect>
                        <rect x="44" y="28" width="2" height="2" fillOpacity="0.392"></rect>
                        <rect x="0" y="32" width="2" height="2" fillOpacity="0.273"></rect>
                        <rect x="4" y="32" width="2" height="2" fillOpacity="0.143"></rect>
                        <rect x="8" y="32" width="2" height="2" fillOpacity="0.338"></rect>
                        <rect x="12" y="32" width="2" height="2" fillOpacity="0.264"></rect>
                        <rect x="16" y="32" width="2" height="2" fillOpacity="0.218"></rect>
                        <rect x="20" y="32" width="2" height="2" fillOpacity="0.29"></rect>
                        <rect x="24" y="32" width="2" height="2" fillOpacity="0.336"></rect>
                        <rect x="28" y="32" width="2" height="2" fillOpacity="0.313"></rect>
                        <rect x="32" y="32" width="2" height="2" fillOpacity="0.514"></rect>
                        <rect x="36" y="32" width="2" height="2" fillOpacity="0.289"></rect>
                        <rect x="40" y="32" width="2" height="2" fillOpacity="0.25"></rect>
                        <rect x="44" y="32" width="2" height="2" fillOpacity="0.507"></rect>
                        <rect x="0" y="36" width="2" height="2" fillOpacity="0.346"></rect>
                        <rect x="4" y="36" width="2" height="2" fillOpacity="0.208"></rect>
                        <rect x="8" y="36" width="2" height="2" fillOpacity="0.313"></rect>
                        <rect x="12" y="36" width="2" height="2" fillOpacity="0.365"></rect>
                        <rect x="16" y="36" width="2" height="2" fillOpacity="0.491"></rect>
                        <rect x="20" y="36" width="2" height="2" fillOpacity="0.121"></rect>
                        <rect x="24" y="36" width="2" height="2" fillOpacity="0.472"></rect>
                        <rect x="28" y="36" width="2" height="2" fillOpacity="0.281"></rect>
                        <rect x="32" y="36" width="2" height="2" fillOpacity="0.297"></rect>
                        <rect x="36" y="36" width="2" height="2" fillOpacity="0.33"></rect>
                        <rect x="40" y="36" width="2" height="2" fillOpacity="0.463"></rect>
                        <rect x="44" y="36" width="2" height="2" fillOpacity="0.447"></rect>
                        <rect x="0" y="40" width="2" height="2" fillOpacity="0.217"></rect>
                        <rect x="4" y="40" width="2" height="2" fillOpacity="0.467"></rect>
                        <rect x="8" y="40" width="2" height="2" fillOpacity="0.297"></rect>
                        <rect x="12" y="40" width="2" height="2" fillOpacity="0.303"></rect>
                        <rect x="16" y="40" width="2" height="2" fillOpacity="0.497"></rect>
                        <rect x="20" y="40" width="2" height="2" fillOpacity="0.201"></rect>
                        <rect x="24" y="40" width="2" height="2" fillOpacity="0.5"></rect>
                        <rect x="28" y="40" width="2" height="2" fillOpacity="0.458"></rect>
                        <rect x="32" y="40" width="2" height="2" fillOpacity="0.165"></rect>
                        <rect x="36" y="40" width="2" height="2" fillOpacity="0.36"></rect>
                        <rect x="40" y="40" width="2" height="2" fillOpacity="0.329"></rect>
                        <rect x="44" y="40" width="2" height="2" fillOpacity="0.419"></rect>
                        <rect x="0" y="44" width="2" height="2" fillOpacity="0.47"></rect>
                        <rect x="4" y="44" width="2" height="2" fillOpacity="0.161"></rect>
                        <rect x="8" y="44" width="2" height="2" fillOpacity="0.191"></rect>
                        <rect x="12" y="44" width="2" height="2" fillOpacity="0.341"></rect>
                        <rect x="16" y="44" width="2" height="2" fillOpacity="0.279"></rect>
                        <rect x="20" y="44" width="2" height="2" fillOpacity="0.387"></rect>
                        <rect x="24" y="44" width="2" height="2" fillOpacity="0.173"></rect>
                        <rect x="28" y="44" width="2" height="2" fillOpacity="0.537"></rect>
                        <rect x="32" y="44" width="2" height="2" fillOpacity="0.218"></rect>
                        <rect x="36" y="44" width="2" height="2" fillOpacity="0.368"></rect>
                        <rect x="40" y="44" width="2" height="2" fillOpacity="0.5"></rect>
                        <rect x="44" y="44" width="2" height="2" fillOpacity="0.414"></rect>
                      </g>
                    </pattern>
                  </defs>
                  <g mask="url(#_r_0_-mask)">
                    <rect width="240" height="136" fill="url(#_r_0_-pattern)"></rect>
                  </g>
                </svg>
              </div>
              <div className="flex flex-1 flex-col gap-2 justify-between md:gap-4 min-h-0 relative w-full z-10">
                <h3 className="font-normal m-0 text-muted-foreground text-xs">
                  {"Skills"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-secondary-foreground transition-shadow">
                    <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    </svg>
                    {"Analysis"}
                  </Badge>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-secondary-foreground transition-shadow">
                    <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    </svg>
                    {"Scrum"}
                  </Badge>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-secondary-foreground transition-shadow">
                    <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    </svg>
                    {"UX Research"}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}
