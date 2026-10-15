import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <div className="@container grow w-full">
        <div className="@3xl:grid-cols-3 gap-8 grid grid-cols-1 w-full">
          <Card className="bg-blue-600 border-0 overflow-hidden p-0 rounded-2xl shadow-lg" size="default">
            <CardContent className="flex flex-col grow justify-end overflow-hidden pb-0 px-0 py-6 relative">
              <div className="[&_svg]:size-6 mb-3.5 px-6 text-white/60">
                <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                </svg>
              </div>
              <div className="flex flex-col grow items-start justify-center px-6">
                <div className="font-semibold mb-6 text-3xl text-white">
                  27.3%
                </div>
                <div className="font-semibold mb-1 text-base text-white">
                  NPS Improvement
                </div>
                <div className="mb-2 text-sm text-white/80">
                  Our new onboarding flow increased Net Promoter Score by 27.3% in Q2.
                </div>
              </div>
              <a className="bg-black/90 dark:bg-zinc-800 flex group/card items-center justify-between mt-6 px-6 py-4 w-full" href="#">
                <span className="font-medium text-sm text-white">
                  Read full story
                </span>
                <span className="[&_svg]:size-5 duration-300 group-hover/card:translate-x-1 text-white transition-transform">
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </a>
            </CardContent>
          </Card>
          <Card className="bg-emerald-600 border-0 overflow-hidden p-0 rounded-2xl shadow-lg" size="default">
            <CardContent className="flex flex-col grow justify-end overflow-hidden pb-0 px-0 py-6 relative">
              <div className="[&_svg]:size-6 mb-3.5 px-6 text-white/60">
                <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col grow items-start justify-center px-6">
                <div className="font-semibold mb-6 text-3xl text-white">
                  8,200
                </div>
                <div className="font-semibold mb-1 text-base text-white">
                  Active Users
                </div>
                <div className="mb-2 text-sm text-white/80">
                  Highest monthly active users since launch. Engagement up 12% MoM.
                </div>
              </div>
              <a className="bg-black/90 dark:bg-zinc-800 flex group/card items-center justify-between mt-6 px-6 py-4 w-full" href="#">
                <span className="font-medium text-sm text-white">
                  See user insights
                </span>
                <span className="[&_svg]:size-5 duration-300 group-hover/card:translate-x-1 text-white transition-transform">
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </a>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-700 border-0 overflow-hidden p-0 rounded-2xl shadow-lg" size="default">
            <CardContent className="flex flex-col grow justify-end overflow-hidden pb-0 px-0 py-6 relative">
              <div className="[&_svg]:size-6 mb-3.5 px-6 text-white/60">
                <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
              </div>
              <div className="flex flex-col grow items-start justify-center px-6">
                <div className="font-semibold mb-6 text-3xl text-white">
                  $1.4M
                </div>
                <div className="font-semibold mb-1 text-base text-white">
                  ARR Growth
                </div>
                <div className="mb-2 text-sm text-white/80">
                  Annual recurring revenue grew by $1.4M in the last quarter.
                </div>
              </div>
              <a className="bg-black/90 dark:bg-zinc-800 flex group/card items-center justify-between mt-6 px-6 py-4 w-full" href="#">
                <span className="font-medium text-sm text-white">
                  View ARR breakdown
                </span>
                <span className="[&_svg]:size-5 duration-300 group-hover/card:translate-x-1 text-white transition-transform">
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
