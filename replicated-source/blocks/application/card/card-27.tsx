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
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-5xl min-h-svh p-6 w-full">
      <Frame className="w-full">
        <FramePanel className="p-0">
          <div className="flex flex-col items-stretch md:flex-row overflow-hidden">
            <div className="border-b border-border/60 flex flex-col gap-2 justify-between last:border-0 md:border-r md:gap-4 p-4">
              <h3 className="m-0 text-muted-foreground text-sm">
                {"Created"}
              </h3>
              <div className="flex gap-1.5 items-center">
                <svg className="shrink-0 size-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                  <g clipPath="url(#coinholder-clip)">
                    <path opacity="0.35" d="M12.2926 13.2856C11.5667 13.2856 10.8408 13.0005 10.2901 12.4823L3.50646 5.95223C2.63035 5.09711 2.32997 3.77556 2.75551 2.60948C3.20608 1.4434 4.28245 0.666016 5.50901 0.666016H12.3177C13.9447 0.666016 15.2464 2.0394 15.2464 3.69782V10.2279C15.2464 11.4458 14.5455 12.5341 13.4942 13.0264C13.0936 13.1819 12.6931 13.2856 12.2926 13.2856Z" fill="#7960ED"></path>
                    <path d="M8.68839 15.3321C7.9124 15.3321 7.16145 15.0211 6.61075 14.4511L1.77961 9.47579C1.05369 8.69841 0.753308 7.61007 1.02866 6.57355C1.27898 5.53704 2.05496 4.70783 3.0312 4.39687L9.88991 2.27202C10.9162 1.96107 12.0426 2.24611 12.8186 3.02349C13.5946 3.82679 13.87 4.96696 13.5446 6.0553L11.492 13.1554C11.1916 14.1919 10.3906 14.9693 9.38928 15.2284C9.16399 15.3062 8.91368 15.3321 8.68839 15.3321Z" fill="#7960ED"></path>
                  </g>
                  <defs>
                    <clippath id="coinholder-clip">
                      <rect width="14.6667" height="14.6667" fill="white" transform="translate(0.666016 0.666016)"></rect>
                    </clippath>
                  </defs>
                </svg>
                <span className="text-sm">
                  {"Conhodler"}
                </span>
                <span className="text-muted-foreground text-sm">
                  {"24m ago"}
                </span>
              </div>
            </div>
            <div className="border-b border-border/60 flex flex-col gap-2 justify-between last:border-0 md:border-r md:gap-4 p-4">
              <h3 className="m-0 text-muted-foreground text-sm">
                {"Status"}
              </h3>
              <div className="flex gap-1.5 items-center">
                <span className="bg-green-600 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                <span className="text-sm">
                  {"Ready"}
                </span>
              </div>
            </div>
            <div className="border-b border-border/60 flex flex-col gap-2 justify-between last:border-0 md:border-r md:gap-4 p-4">
              <h3 className="m-0 text-muted-foreground text-sm">
                {"Mobile"}
              </h3>
              <div className="flex gap-2">
                <div className="flex gap-1 items-center">
                  <svg className="lucide lucide-clock shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <span className="text-sm">
                    {"49s"}
                  </span>
                </div>
                <span className="text-muted-foreground text-sm">
                  {"24m ago"}
                </span>
              </div>
            </div>
            <div className="border-b border-border/60 flex flex-col gap-2 justify-between last:border-0 md:border-r md:gap-4 p-4">
              <h3 className="m-0 text-muted-foreground text-sm">
                {"Email"}
              </h3>
              <div className="flex gap-1.5 items-center">
                <svg className="lucide lucide-eye size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span className="text-sm">
                  {"Preview"}
                </span>
              </div>
            </div>
            <div className="border-b border-border/60 flex flex-col gap-2 justify-between last:border-0 md:border-r md:gap-4 p-4">
              <h3 className="m-0 text-muted-foreground text-sm">
                {"Domain"}
              </h3>
              <div className="flex flex-wrap gap-1.5 items-center">
                <svg className="lucide lucide-globe size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
                <span className="text-sm">
                  {"neui.io"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                  {"Main"}
                </Badge>
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
              <div className="flex flex-col gap-2 justify-between md:gap-4 relative z-10">
                <h3 className="m-0 text-muted-foreground text-sm">
                  {"Team"}
                </h3>
                <AvatarGroup>
                  <Avatar className="size-6" size="default">
                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar className="size-6" size="default">
                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar className="size-6" size="default">
                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <AvatarGroupCount className="border size-6 text-[10px]">
                    {"+1"}
                  </AvatarGroupCount>
                </AvatarGroup>
              </div>
            </div>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}
