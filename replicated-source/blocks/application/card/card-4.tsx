import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-6xl min-h-svh p-8 w-full">
      <div className="flex flex-wrap gap-5 justify-center w-full">
        <Frame className="[--frame-radius:var(--radius-lg)] bg-zinc-950 w-56">
          <FramePanel className="bg-green-600 border-none isolate p-5!">
            <div className="[--card-surface-grid-opacity:0.22] absolute dark:[--card-surface-grid-opacity:0.10] inset-0 pointer-events-none z-0" aria-hidden="true">
              <svg className="size-full" viewBox="0 0 240 136" fill="none" preserveAspectRatio="xMidYMid slice" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg" style={{opacity: "var(--card-surface-grid-opacity)"}}>
                <defs>
                  <mask id="_r_0_-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="240" height="136" style={{maskType: "alpha"}}>
                    <rect width="240" height="136" fill="url(#_r_0_-gradient)"></rect>
                  </mask>
                  <lineargradient id="_r_0_-gradient" x1="0" y1="0" x2="83.8613" y2="95.7483" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"></stop>
                    <stop offset="0.538873" stopColor="white"></stop>
                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                  </lineargradient>
                  <pattern id="_r_0_-grid" width="11" height="11" patternUnits="userSpaceOnUse">
                    <path d="M 11 0 L 0 0 0 11" stroke="white" strokeWidth="1" vector-effect="nonScalingStroke"></path>
                  </pattern>
                </defs>
                <g mask="url(#_r_0_-mask)">
                  <rect width="240" height="136" fill="url(#_r_0_-grid)"></rect>
                </g>
              </svg>
            </div>
            <div className="flex flex-col gap-5 relative space-y-12.5 z-10">
              <Item className="[&_svg]:size-5 [&_svg]:text-green-700 bg-white p-0 shadow-sm size-10.5" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                    <path d="M3 12A9 3 0 0 0 21 12"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="flex flex-col gap-2.5">
                <a className="font-medium hover:text-white/80 leading-none text-3xl text-white transition-colors" href="#">
                  $28.5k
                </a>
                <div className="flex gap-1.5 items-center">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-black/20 border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                    <svg className="lucide lucide-trending-up size-3.5 text-emerald-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    <span>
                      23.08%
                    </span>
                  </Badge>
                  <span className="text-white/80 text-xs">
                    Annual trend
                  </span>
                </div>
              </div>
            </div>
          </FramePanel>
          <footer className="flex flex-col gap-(--frame-panel-footer-gap) p-0! px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
            <a className="flex flex-row font-medium gap-2 group items-center justify-between no-underline px-2 py-2 text-xs w-full" href="#">
              <span className="group-hover:text-zinc-400 text-white transition-colors">
                Full Sales Report
              </span>
              <svg className="group-hover:text-zinc-400 lucide lucide-arrow-right shrink-0 size-4 text-white transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </footer>
        </Frame>
        <Frame className="[--frame-radius:var(--radius-lg)] bg-zinc-950 w-56">
          <FramePanel className="bg-indigo-600 border-none isolate p-5!">
            <div className="[--card-surface-grid-opacity:0.22] absolute dark:[--card-surface-grid-opacity:0.10] inset-0 pointer-events-none z-0" aria-hidden="true">
              <svg className="size-full" viewBox="0 0 240 136" fill="none" preserveAspectRatio="xMidYMid slice" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg" style={{opacity: "var(--card-surface-grid-opacity)"}}>
                <defs>
                  <mask id="_r_1_-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="240" height="136" style={{maskType: "alpha"}}>
                    <rect width="240" height="136" fill="url(#_r_1_-gradient)"></rect>
                  </mask>
                  <lineargradient id="_r_1_-gradient" x1="0" y1="0" x2="83.8613" y2="95.7483" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"></stop>
                    <stop offset="0.538873" stopColor="white"></stop>
                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                  </lineargradient>
                  <pattern id="_r_1_-grid" width="11" height="11" patternUnits="userSpaceOnUse">
                    <path d="M 11 0 L 0 0 0 11" stroke="white" strokeWidth="1" vector-effect="nonScalingStroke"></path>
                  </pattern>
                </defs>
                <g mask="url(#_r_1_-mask)">
                  <rect width="240" height="136" fill="url(#_r_1_-grid)"></rect>
                </g>
              </svg>
            </div>
            <div className="flex flex-col gap-5 relative space-y-12.5 z-10">
              <Item className="[&_svg]:size-5 [&_svg]:text-indigo-700 bg-white p-0 shadow-sm size-10.5" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="flex flex-col gap-2.5">
                <a className="font-medium hover:text-white/80 leading-none text-3xl text-white transition-colors" href="#">
                  2.3k
                </a>
                <div className="flex gap-1.5 items-center">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-black/20 border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                    <svg className="lucide lucide-trending-up size-3.5 text-emerald-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    <span>
                      12%
                    </span>
                  </Badge>
                  <span className="text-white/80 text-xs">
                    More Signups
                  </span>
                </div>
              </div>
            </div>
          </FramePanel>
          <footer className="flex flex-col gap-(--frame-panel-footer-gap) p-0! px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
            <a className="flex flex-row font-medium gap-2 group items-center justify-between no-underline px-2 py-2 text-xs w-full" href="#">
              <span className="group-hover:text-zinc-400 text-white transition-colors">
                Full Customer Report
              </span>
              <svg className="group-hover:text-zinc-400 lucide lucide-arrow-right shrink-0 size-4 text-white transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </footer>
        </Frame>
        <Frame className="[--frame-radius:var(--radius-lg)] bg-zinc-950 w-56">
          <FramePanel className="bg-rose-600 border-none isolate p-5!">
            <div className="[--card-surface-grid-opacity:0.22] absolute dark:[--card-surface-grid-opacity:0.10] inset-0 pointer-events-none z-0" aria-hidden="true">
              <svg className="size-full" viewBox="0 0 240 136" fill="none" preserveAspectRatio="xMidYMid slice" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg" style={{opacity: "var(--card-surface-grid-opacity)"}}>
                <defs>
                  <mask id="_r_2_-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="240" height="136" style={{maskType: "alpha"}}>
                    <rect width="240" height="136" fill="url(#_r_2_-gradient)"></rect>
                  </mask>
                  <lineargradient id="_r_2_-gradient" x1="0" y1="0" x2="83.8613" y2="95.7483" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"></stop>
                    <stop offset="0.538873" stopColor="white"></stop>
                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                  </lineargradient>
                  <pattern id="_r_2_-grid" width="11" height="11" patternUnits="userSpaceOnUse">
                    <path d="M 11 0 L 0 0 0 11" stroke="white" strokeWidth="1" vector-effect="nonScalingStroke"></path>
                  </pattern>
                </defs>
                <g mask="url(#_r_2_-mask)">
                  <rect width="240" height="136" fill="url(#_r_2_-grid)"></rect>
                </g>
              </svg>
            </div>
            <div className="flex flex-col gap-5 relative space-y-12.5 z-10">
              <Item className="[&_svg]:size-5 [&_svg]:text-rose-700 bg-white p-0 shadow-sm size-10.5" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="flex flex-col gap-2.5">
                <a className="font-medium hover:text-white/80 leading-none text-3xl text-white transition-colors" href="#">
                  84%
                </a>
                <div className="flex gap-1.5 items-center">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-black/20 border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                    <svg className="lucide lucide-trending-up size-3.5 text-emerald-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    <span>
                      18.4%
                    </span>
                  </Badge>
                  <span className="text-white/80 text-xs">
                    Conversion Lift
                  </span>
                </div>
              </div>
            </div>
          </FramePanel>
          <footer className="flex flex-col gap-(--frame-panel-footer-gap) p-0! px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
            <a className="flex flex-row font-medium gap-2 group items-center justify-between no-underline px-2 py-2 text-xs w-full" href="#">
              <span className="group-hover:text-zinc-400 text-white transition-colors">
                Full Growth Report
              </span>
              <svg className="group-hover:text-zinc-400 lucide lucide-arrow-right shrink-0 size-4 text-white transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </footer>
        </Frame>
        <Frame className="[--frame-radius:var(--radius-lg)] bg-zinc-950 w-56">
          <FramePanel className="bg-fuchsia-600 border-none isolate p-5!">
            <div className="[--card-surface-grid-opacity:0.22] absolute dark:[--card-surface-grid-opacity:0.10] inset-0 pointer-events-none z-0" aria-hidden="true">
              <svg className="size-full" viewBox="0 0 240 136" fill="none" preserveAspectRatio="xMidYMid slice" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg" style={{opacity: "var(--card-surface-grid-opacity)"}}>
                <defs>
                  <mask id="_r_3_-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="240" height="136" style={{maskType: "alpha"}}>
                    <rect width="240" height="136" fill="url(#_r_3_-gradient)"></rect>
                  </mask>
                  <lineargradient id="_r_3_-gradient" x1="0" y1="0" x2="83.8613" y2="95.7483" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"></stop>
                    <stop offset="0.538873" stopColor="white"></stop>
                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                  </lineargradient>
                  <pattern id="_r_3_-grid" width="11" height="11" patternUnits="userSpaceOnUse">
                    <path d="M 11 0 L 0 0 0 11" stroke="white" strokeWidth="1" vector-effect="nonScalingStroke"></path>
                  </pattern>
                </defs>
                <g mask="url(#_r_3_-mask)">
                  <rect width="240" height="136" fill="url(#_r_3_-grid)"></rect>
                </g>
              </svg>
            </div>
            <div className="flex flex-col gap-5 relative space-y-12.5 z-10">
              <Item className="[&_svg]:size-5 [&_svg]:text-fuchsia-700 bg-white p-0 shadow-sm size-10.5" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="flex flex-col gap-2.5">
                <a className="font-medium hover:text-white/80 leading-none text-3xl text-white transition-colors" href="#">
                  1.2k
                </a>
                <div className="flex gap-1.5 items-center">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-black/20 border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                    <svg className="lucide lucide-trending-up size-3.5 text-emerald-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    <span>
                      9.7%
                    </span>
                  </Badge>
                  <span className="text-white/80 text-xs">
                    Active Runs
                  </span>
                </div>
              </div>
            </div>
          </FramePanel>
          <footer className="flex flex-col gap-(--frame-panel-footer-gap) p-0! px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
            <a className="flex flex-row font-medium gap-2 group items-center justify-between no-underline px-2 py-2 text-xs w-full" href="#">
              <span className="group-hover:text-zinc-400 text-white transition-colors">
                Full Activity Report
              </span>
              <svg className="group-hover:text-zinc-400 lucide lucide-arrow-right shrink-0 size-4 text-white transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </footer>
        </Frame>
      </div>
    </div>
  )
}
