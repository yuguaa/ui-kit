import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-5xl min-h-svh p-6 w-full">
      <Frame className="@container w-full">
        <div className="@2xl:grid-cols-3 gap-1 grid">
          <FramePanel className="flex gap-2.5 isolate items-center">
            <div className="[--card-dot-pattern-fill:var(--color-foreground)] [--card-dot-pattern-opacity:0.12] absolute dark:[--card-dot-pattern-opacity:0.2] inset-0 pointer-events-none z-0" aria-hidden="true">
              <svg className="size-full" viewBox="0 0 240 136" fill="none" preserveAspectRatio="none" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg" style={{opacity: "var(--card-dot-pattern-opacity)"}}>
                <defs>
                  <mask id="_r_0_-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="240" height="136" style={{maskType: "alpha"}}>
                    <rect width="240" height="136" fill="url(#_r_0_-gradient)"></rect>
                  </mask>
                  <lineargradient id="_r_0_-gradient" x1="0" y1="0" x2="83.8613" y2="95.7483" gradientUnits="userSpaceOnUse">
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
            <div className="flex gap-2.5 items-center relative z-10">
              <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                    <path d="M3 12A9 3 0 0 0 21 12"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="flex flex-col gap-2">
                <a className="font-medium hover:text-primary leading-none text-sm" href="#">
                  {"Database Server"}
                </a>
                <div className="flex gap-2 items-center">
                  <div className="flex gap-1 items-center">
                    <div className="bg-green-600 rounded-full shrink-0 size-1.5" aria-hidden="true"></div>
                    <span className="leading-none text-green-600 text-xs">
                      {"Online"}
                    </span>
                  </div>
                  <p className="leading-none text-muted-foreground text-xs">
                    {"Last backup 10 mins ago"}
                  </p>
                </div>
              </div>
            </div>
          </FramePanel>
          <FramePanel className="flex gap-2.5 isolate items-center">
            <div className="[--card-dot-pattern-fill:var(--color-foreground)] [--card-dot-pattern-opacity:0.12] absolute dark:[--card-dot-pattern-opacity:0.2] inset-0 pointer-events-none z-0" aria-hidden="true">
              <svg className="size-full" viewBox="0 0 240 136" fill="none" preserveAspectRatio="none" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg" style={{opacity: "var(--card-dot-pattern-opacity)"}}>
                <defs>
                  <mask id="_r_1_-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="240" height="136" style={{maskType: "alpha"}}>
                    <rect width="240" height="136" fill="url(#_r_1_-gradient)"></rect>
                  </mask>
                  <lineargradient id="_r_1_-gradient" x1="0" y1="0" x2="83.8613" y2="95.7483" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"></stop>
                    <stop offset="0.538873" stopColor="white"></stop>
                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                  </lineargradient>
                  <pattern id="_r_1_-pattern" patternUnits="userSpaceOnUse" patterntransform="matrix(48 0 0 48 0 0)" preserveAspectRatio="none" viewBox="0 0 48 48" width="1" height="1">
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
                <g mask="url(#_r_1_-mask)">
                  <rect width="240" height="136" fill="url(#_r_1_-pattern)"></rect>
                </g>
              </svg>
            </div>
            <div className="flex gap-2.5 items-center relative z-10">
              <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="flex flex-col gap-2">
                <a className="font-medium hover:text-primary leading-none text-sm" href="#">
                  {"Storage Bucket"}
                </a>
                <div className="flex gap-2 items-center">
                  <div className="flex gap-1 items-center">
                    <div className="bg-blue-600 rounded-full shrink-0 size-1.5" aria-hidden="true"></div>
                    <span className="leading-none text-blue-600 text-xs">
                      {"Synced"}
                    </span>
                  </div>
                  <p className="leading-none text-muted-foreground text-xs">
                    {"Last backup 10 mins ago"}
                  </p>
                </div>
              </div>
            </div>
          </FramePanel>
          <FramePanel className="flex gap-2.5 isolate items-center">
            <div className="[--card-dot-pattern-fill:var(--color-foreground)] [--card-dot-pattern-opacity:0.12] absolute dark:[--card-dot-pattern-opacity:0.2] inset-0 pointer-events-none z-0" aria-hidden="true">
              <svg className="size-full" viewBox="0 0 240 136" fill="none" preserveAspectRatio="none" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg" style={{opacity: "var(--card-dot-pattern-opacity)"}}>
                <defs>
                  <mask id="_r_2_-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="240" height="136" style={{maskType: "alpha"}}>
                    <rect width="240" height="136" fill="url(#_r_2_-gradient)"></rect>
                  </mask>
                  <lineargradient id="_r_2_-gradient" x1="0" y1="0" x2="83.8613" y2="95.7483" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"></stop>
                    <stop offset="0.538873" stopColor="white"></stop>
                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                  </lineargradient>
                  <pattern id="_r_2_-pattern" patternUnits="userSpaceOnUse" patterntransform="matrix(48 0 0 48 0 0)" preserveAspectRatio="none" viewBox="0 0 48 48" width="1" height="1">
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
                <g mask="url(#_r_2_-mask)">
                  <rect width="240" height="136" fill="url(#_r_2_-pattern)"></rect>
                </g>
              </svg>
            </div>
            <div className="flex gap-2.5 items-center relative z-10">
              <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="flex flex-col gap-2">
                <a className="font-medium hover:text-primary leading-none text-sm" href="#">
                  {"Analytics Engine"}
                </a>
                <div className="flex gap-2 items-center">
                  <div className="flex gap-1 items-center">
                    <div className="bg-violet-700 rounded-full shrink-0 size-1.5" aria-hidden="true"></div>
                    <span className="leading-none text-violet-700 text-xs">
                      {"Idle"}
                    </span>
                  </div>
                  <p className="leading-none text-muted-foreground text-xs">
                    {"Last run 1 day ago"}
                  </p>
                </div>
              </div>
            </div>
          </FramePanel>
        </div>
      </Frame>
    </div>
  )
}
