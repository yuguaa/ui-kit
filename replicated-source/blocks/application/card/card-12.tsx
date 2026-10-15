import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-lg min-h-svh p-6 w-full">
      <Frame className="w-full">
        <div className="gap-1 grid lg:grid-cols-3 sm:grid-cols-2">
          <a className="[&_svg]:opacity-60 [&_svg]:size-5 block cursor-pointer focus-visible:ring-[3px] focus-visible:ring-ring/50 group/card h-full hover:[&_svg]:opacity-100 hover:[&_svg]:text-primary min-w-0 outline-none rounded-(--frame-radius) w-full" href="#valuation">
            <FramePanel className="p-3.5 space-y-7.5">
              <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              </svg>
              <h3 className="group-hover/card:text-primary leading-relaxed text-sm transition-colors">
                Valuation
              </h3>
            </FramePanel>
          </a>
          <a className="[&_svg]:opacity-60 [&_svg]:size-5 block cursor-pointer focus-visible:ring-[3px] focus-visible:ring-ring/50 group/card h-full hover:[&_svg]:opacity-100 hover:[&_svg]:text-primary min-w-0 outline-none rounded-(--frame-radius) w-full" href="#ledger">
            <FramePanel className="p-3.5 space-y-7.5">
              <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              </svg>
              <h3 className="group-hover/card:text-primary leading-relaxed text-sm transition-colors">
                Ledger
              </h3>
            </FramePanel>
          </a>
          <a className="[&_svg]:opacity-60 [&_svg]:size-5 block cursor-pointer focus-visible:ring-[3px] focus-visible:ring-ring/50 group/card h-full hover:[&_svg]:opacity-100 hover:[&_svg]:text-primary min-w-0 outline-none rounded-(--frame-radius) w-full" href="#funding">
            <FramePanel className="p-3.5 space-y-7.5">
              <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldIcon" tabler="IconShield" hugeicons="Shield01Icon" phosphor="ShieldIcon" remixicon="RiShieldLine" aria-hidden="true">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              </svg>
              <h3 className="group-hover/card:text-primary leading-relaxed text-sm transition-colors">
                Funding
              </h3>
            </FramePanel>
          </a>
          <a className="[&_svg]:opacity-60 [&_svg]:size-5 block cursor-pointer focus-visible:ring-[3px] focus-visible:ring-ring/50 group/card h-full hover:[&_svg]:opacity-100 hover:[&_svg]:text-primary min-w-0 outline-none rounded-(--frame-radius) w-full" href="#cash-flow">
            <FramePanel className="p-3.5 space-y-7.5">
              <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              </svg>
              <h3 className="group-hover/card:text-primary leading-relaxed text-sm transition-colors">
                Cash Flow
              </h3>
            </FramePanel>
          </a>
          <a className="[&_svg]:opacity-60 [&_svg]:size-5 block cursor-pointer focus-visible:ring-[3px] focus-visible:ring-ring/50 group/card h-full hover:[&_svg]:opacity-100 hover:[&_svg]:text-primary min-w-0 outline-none rounded-(--frame-radius) w-full" href="#metrics">
            <FramePanel className="p-3.5 space-y-7.5">
              <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              </svg>
              <h3 className="group-hover/card:text-primary leading-relaxed text-sm transition-colors">
                Metrics
              </h3>
            </FramePanel>
          </a>
          <a className="[&_svg]:opacity-60 [&_svg]:size-5 block cursor-pointer focus-visible:ring-[3px] focus-visible:ring-ring/50 group/card h-full hover:[&_svg]:opacity-100 hover:[&_svg]:text-primary min-w-0 outline-none rounded-(--frame-radius) w-full" href="#earnings">
            <FramePanel className="p-3.5 space-y-7.5">
              <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              </svg>
              <h3 className="group-hover/card:text-primary leading-relaxed text-sm transition-colors">
                Earnings
              </h3>
            </FramePanel>
          </a>
        </div>
      </Frame>
    </div>
  )
}
