import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-5xl min-h-svh p-10 w-full">
      <div className="@container w-full">
        <Frame className="w-full">
          <FramePanel className="p-0!">
            <div className="@2xl:grid-cols-2 @4xl:grid-cols-4 grid overflow-hidden">
              <div className="@4xl:border-b-0 @4xl:border-r border-b border-border/60 flex flex-col md:border-b md:border-r min-h-[316px] overflow-hidden p-4">
                <div className="flex flex-1 flex-col gap-4 justify-between">
                  <div className="[&_svg]:size-5 [&_svg]:text-muted-foreground">
                    <svg className="lucide lucide-shopping-bag size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                      <path d="M3.103 6.034h17.794"></path>
                      <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="leading-relaxed text-muted-foreground text-sm">
                      {"Total Orders"}
                    </h3>
                    <div className="flex gap-1.5 items-center">
                      <div className="font-semibold leading-tight text-xl">
                        {"1,246"}
                        <span className="font-semibold text-muted-foreground/40"></span>
                      </div>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        <svg className="lucide lucide-trending-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                          <path d="M16 7h6v6"></path>
                          <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                        </svg>
                        <span>
                          {"239"}
                        </span>
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {"Tracks overall orders placed within the selected timeframe"}
                  </p>
                </div>
                <div className="-mb-4 -mx-4 h-36 mt-4 overflow-hidden relative" aria-hidden="true">
                  <div className="absolute bg-indigo-100/80 bottom-0 dark:bg-indigo-950/50 h-full inset-x-0" style={{clipPath: "polygon(0px 34%, 100% 2%, 100% 100%, 0px 100%)"}}></div>
                  <div className="absolute bg-gradient-to-br bottom-0 from-indigo-400 h-full inset-x-0 to-indigo-600 via-indigo-500" style={{clipPath: "polygon(0px 48%, 100% 16%, 100% 100%, 0px 100%)"}}></div>
                  <div className="absolute bg-gradient-to-t bottom-0 from-indigo-950/20 h-full inset-x-0 to-transparent"></div>
                </div>
              </div>
              <div className="@4xl:border-b-0 @4xl:border-r border-b border-border/60 flex flex-col md:border-b min-h-[316px] overflow-hidden p-4">
                <div className="flex flex-1 flex-col gap-4 justify-between">
                  <div className="[&_svg]:size-5 [&_svg]:text-muted-foreground">
                    <svg className="lucide lucide-credit-card size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                      <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                      <line x1="2" x2="22" y1="10" y2="10"></line>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="leading-relaxed text-muted-foreground text-sm">
                      {"Cumulative Spend"}
                    </h3>
                    <div className="flex gap-1.5 items-center">
                      <div className="font-semibold leading-tight text-xl">
                        {"$89,378"}
                        <span className="font-semibold text-muted-foreground/40">
                          {".02"}
                        </span>
                      </div>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                        <svg className="lucide lucide-trending-down size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                          <path d="M16 17h6v-6"></path>
                          <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                        </svg>
                        <span>
                          {"$4K"}
                        </span>
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {"Total amount spent across all transactions to date"}
                  </p>
                </div>
                <div className="-mb-4 -mx-4 h-36 mt-4 overflow-hidden relative" aria-hidden="true">
                  <div className="absolute bg-indigo-100/80 bottom-0 dark:bg-indigo-950/50 h-full inset-x-0" style={{clipPath: "polygon(0px 2%, 100% 36%, 100% 100%, 0px 100%)"}}></div>
                  <div className="absolute bg-gradient-to-br bottom-0 from-indigo-500 h-full inset-x-0 to-indigo-700 via-indigo-600" style={{clipPath: "polygon(0px 16%, 100% 50%, 100% 100%, 0px 100%)"}}></div>
                  <div className="absolute bg-gradient-to-t bottom-0 from-indigo-950/20 h-full inset-x-0 to-transparent"></div>
                </div>
              </div>
              <div className="@4xl:border-b-0 @4xl:border-r border-b border-border/60 flex flex-col md:border-b-0 md:border-r min-h-[316px] overflow-hidden p-4">
                <div className="flex flex-1 flex-col gap-4 justify-between">
                  <div className="[&_svg]:size-5 [&_svg]:text-muted-foreground">
                    <svg className="lucide lucide-circle-dollar-sign size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                      <path d="M12 18V6"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="leading-relaxed text-muted-foreground text-sm">
                      {"Avg. Order Value(AOV)"}
                    </h3>
                    <div className="flex gap-1.5 items-center">
                      <div className="font-semibold leading-tight text-xl">
                        {"$68"}
                        <span className="font-semibold text-muted-foreground/40">
                          {".50"}
                        </span>
                      </div>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        <svg className="lucide lucide-trending-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                          <path d="M16 7h6v6"></path>
                          <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                        </svg>
                        <span>
                          {"$17"}
                        </span>
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {"Average revenue earned per order during reporting period"}
                  </p>
                </div>
                <div className="-mb-4 -mx-4 h-36 mt-4 overflow-hidden relative" aria-hidden="true">
                  <div className="absolute bg-indigo-100/80 bottom-0 dark:bg-indigo-950/50 h-full inset-x-0" style={{clipPath: "polygon(0px 36%, 100% 0%, 100% 100%, 0px 100%)"}}></div>
                  <div className="absolute bg-gradient-to-br bottom-0 from-indigo-600 h-full inset-x-0 to-indigo-800 via-indigo-700" style={{clipPath: "polygon(0px 50%, 100% 10%, 100% 100%, 0px 100%)"}}></div>
                  <div className="absolute bg-gradient-to-t bottom-0 from-indigo-950/20 h-full inset-x-0 to-transparent"></div>
                </div>
              </div>
              <div className="@4xl:border-b-0 @4xl:border-r-0 border-border/60 flex flex-col md:border-b-0 min-h-[316px] overflow-hidden p-4">
                <div className="flex flex-1 flex-col gap-4 justify-between">
                  <div className="[&_svg]:size-5 [&_svg]:text-muted-foreground">
                    <svg className="lucide lucide-chart-column size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                      <path d="M18 17V9"></path>
                      <path d="M13 17V5"></path>
                      <path d="M8 17v-3"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="leading-relaxed text-muted-foreground text-sm">
                      {"Account Balance"}
                    </h3>
                    <div className="flex gap-1.5 items-center">
                      <div className="font-semibold leading-tight text-xl">
                        {"$31,345"}
                        <span className="font-semibold text-muted-foreground/40">
                          {".21"}
                        </span>
                      </div>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        <svg className="lucide lucide-trending-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                          <path d="M16 7h6v6"></path>
                          <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                        </svg>
                        <span>
                          {"$3K"}
                        </span>
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {"Current available balance based on latest account activity"}
                  </p>
                </div>
                <div className="-mb-4 -mx-4 h-36 mt-4 overflow-hidden relative" aria-hidden="true">
                  <div className="absolute bg-indigo-100/80 bottom-0 dark:bg-indigo-950/50 h-full inset-x-0" style={{clipPath: "polygon(0px 0%, 100% 22%, 100% 100%, 0px 100%)"}}></div>
                  <div className="absolute bg-gradient-to-br bottom-0 from-indigo-700 h-full inset-x-0 to-indigo-950 via-indigo-800" style={{clipPath: "polygon(0px 10%, 100% 32%, 100% 100%, 0px 100%)"}}></div>
                  <div className="absolute bg-gradient-to-t bottom-0 from-indigo-950/20 h-full inset-x-0 to-transparent"></div>
                </div>
              </div>
            </div>
          </FramePanel>
        </Frame>
      </div>
    </div>
  )
}
