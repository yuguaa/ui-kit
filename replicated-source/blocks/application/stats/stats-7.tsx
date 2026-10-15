import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Frame className="@container grow w-full">
        <FramePanel className="@3xl:grid-cols-3 bg-background border-border grid grid-cols-1 p-0! rounded-xl">
          <div className="@3xl:border-x @3xl:border-y-0 border-0 border-border border-y first:border-0 last:border-0 p-6 rounded-none shadow-none">
            <div className="flex flex-col h-full justify-between space-y-6">
              <div className="space-y-0.25">
                <div className="font-semibold text-foreground text-lg">
                  {"Total Sales & Cost"}
                </div>
                <div className="text-muted-foreground text-sm">
                  {"Last 60 days"}
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-1.5 grow justify-between">
                <div className="flex gap-2 items-center">
                  <span className="font-bold text-3xl tracking-tight">
                    {"$956.82k"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    {"+5.4%"}
                  </Badge>
                </div>
                <div className="text-sm">
                  <span className="font-medium text-sm">
                    {"+8.20k"}
                    <span className="font-normal text-muted-foreground">
                      {"vs prev. 60 days"}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="@3xl:border-x @3xl:border-y-0 border-0 border-border border-y first:border-0 last:border-0 p-6 rounded-none shadow-none">
            <div className="flex flex-col h-full justify-between space-y-6">
              <div className="space-y-0.25">
                <div className="font-semibold text-foreground text-lg">
                  {"New Customers"}
                </div>
                <div className="text-muted-foreground text-sm">
                  {"This quarter"}
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-1.5 grow justify-between">
                <div className="flex gap-2 items-center">
                  <span className="font-bold text-3xl tracking-tight">
                    {"1,245"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-user-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserPlusIcon" tabler="IconUserPlus" hugeicons="UserAdd01Icon" phosphor="UserPlusIcon" remixicon="RiUserAddLine" aria-hidden="true">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <line x1="19" x2="19" y1="8" y2="14"></line>
                      <line x1="22" x2="16" y1="11" y2="11"></line>
                    </svg>
                    {"+3.2%"}
                  </Badge>
                </div>
                <div className="text-sm">
                  <span className="font-medium text-sm">
                    {"+39"}
                    <span className="font-normal text-muted-foreground">
                      {"vs last quarter"}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="@3xl:border-x @3xl:border-y-0 border-0 border-border border-y first:border-0 last:border-0 p-6 rounded-none shadow-none">
            <div className="flex flex-col h-full justify-between space-y-6">
              <div className="space-y-0.25">
                <div className="font-semibold text-foreground text-lg">
                  {"Churn Rate"}
                </div>
                <div className="text-muted-foreground text-sm">
                  {"Last 30 days"}
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-1.5 grow justify-between">
                <div className="flex gap-2 items-center">
                  <span className="font-bold text-3xl tracking-tight">
                    {"2.8%"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                      <path d="M16 17h6v-6"></path>
                      <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                    </svg>
                    {"-1.1%"}
                  </Badge>
                </div>
                <div className="text-sm">
                  <span className="font-medium text-sm">
                    {"-0.3%"}
                    <span className="font-normal text-muted-foreground">
                      {"vs prev. 30 days"}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}
