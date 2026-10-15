import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-[635px] min-h-svh p-10 w-full">
      <Frame className="@container rounded-md w-full">
        <div className="gap-1 grid grid-cols-1 md:grid-cols-3 w-full">
          <FramePanel className="rounded-md space-y-4.5 w-[180px]">
            <h3 className="leading-tight text-muted-foreground text-sm truncate" title="MRR">
              MRR
            </h3>
            <div className="flex gap-2 items-center">
              <div className="[&_svg]:size-4.5 [&_svg]:text-green-600 flex items-center justify-center shrink-0">
                <svg className="lucide lucide-circle-dollar-sign size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                  <path d="M12 18V6"></path>
                </svg>
              </div>
              <span className="font-medium leading-tight text-base text-foreground">
                $210.5k
              </span>
            </div>
          </FramePanel>
          <FramePanel className="rounded-md space-y-4.5 w-[180px]">
            <h3 className="leading-tight text-muted-foreground text-sm truncate" title="TTM Gross Revenue">
              TTM Gross Revenue
            </h3>
            <div className="flex gap-2 items-center">
              <div className="[&_svg]:size-4.5 [&_svg]:text-green-600 flex items-center justify-center shrink-0">
                <svg className="lucide lucide-trending-up size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
              </div>
              <span className="font-medium leading-tight text-base text-foreground">
                $2.4M
              </span>
            </div>
          </FramePanel>
          <FramePanel className="rounded-md space-y-4.5 w-[180px]">
            <h3 className="leading-tight text-muted-foreground text-sm truncate" title="Customer Base">
              Customer Base
            </h3>
            <div className="flex gap-2 items-center">
              <div className="[&_svg]:size-4.5 [&_svg]:text-green-600 flex items-center justify-center shrink-0">
                <svg className="lucide lucide-users size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </div>
              <span className="font-medium leading-tight text-base text-foreground">
                150-500
              </span>
            </div>
          </FramePanel>
          <FramePanel className="rounded-md space-y-4.5 w-[180px]">
            <h3 className="leading-tight text-muted-foreground text-sm truncate" title="Annual Growth Rate">
              Annual Growth Rate
            </h3>
            <div className="flex gap-2 items-center">
              <div className="[&_svg]:size-4.5 [&_svg]:text-green-600 flex items-center justify-center shrink-0">
                <svg className="lucide lucide-trending-up size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
              </div>
              <span className="font-medium leading-tight text-base text-foreground">
                45%
              </span>
            </div>
          </FramePanel>
          <FramePanel className="rounded-md space-y-4.5 w-[180px]">
            <h3 className="leading-tight text-muted-foreground text-sm truncate" title="Avg. Order Value">
              Avg. Order Value
            </h3>
            <div className="flex gap-2 items-center">
              <div className="[&_svg]:size-4.5 [&_svg]:text-green-600 flex items-center justify-center shrink-0">
                <svg className="lucide lucide-shopping-cart size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingCartIcon" tabler="IconShoppingCart" hugeicons="ShoppingCart01Icon" phosphor="ShoppingCartIcon" remixicon="RiShoppingCartLine" aria-hidden="true">
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
              </div>
              <span className="font-medium leading-tight text-base text-foreground">
                $320
              </span>
            </div>
          </FramePanel>
          <FramePanel className="rounded-md space-y-4.5 w-[180px]">
            <h3 className="leading-tight text-muted-foreground text-sm truncate" title="Date Founded">
              Date Founded
            </h3>
            <div className="flex gap-2 items-center">
              <div className="[&_svg]:size-4.5 [&_svg]:text-green-600 flex items-center justify-center shrink-0">
                <svg className="lucide lucide-calendar size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
              </div>
              <span className="font-medium leading-tight text-base text-foreground">
                Nov 2018
              </span>
            </div>
          </FramePanel>
        </div>
      </Frame>
    </div>
  )
}
