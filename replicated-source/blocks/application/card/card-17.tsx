import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-4xl min-h-svh p-8 w-full">
      <Frame className="@container w-full">
        <div className="@2xl:grid-cols-2 gap-1 grid">
          <FramePanel className="isolate">
            <canvas className="[mask-image:linear-gradient(to_bottom_left,black,transparent_60%)] absolute h-full inset-0 pointer-events-none text-muted-foreground w-full" aria-hidden="true" width="408" height="203"></canvas>
            <div className="relative space-y-7.5 z-10">
              <Item className="[&_svg]:size-5 [&_svg]:text-white bg-green-600 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="flex flex-col gap-3">
                <span className="block font-medium leading-tight text-sm">
                  {"Recent Orders Overview"}
                </span>
                <p className="leading-relaxed text-muted-foreground text-xs">
                  {"Track and review all recent purchases, updates, and status changes in one place."}
                </p>
                <a className="gap-1 hover:underline inline-flex items-center text-primay text-xs underline-offset-2" href="#">
                  {"View Orders"}
                  <svg className="lucide lucide-chevron-right shrink-0 size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
            </div>
          </FramePanel>
          <FramePanel className="isolate">
            <canvas className="[mask-image:linear-gradient(to_bottom_left,black,transparent_60%)] absolute h-full inset-0 pointer-events-none text-muted-foreground w-full" aria-hidden="true" width="408" height="203"></canvas>
            <div className="relative space-y-7.5 z-10">
              <Item className="[&_svg]:size-5 [&_svg]:text-white bg-indigo-600 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                    <path d="M16 7h6v6"></path>
                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="flex flex-col gap-3">
                <span className="block font-medium leading-tight text-sm">
                  {"Active Opportunities Pipeline"}
                </span>
                <p className="leading-relaxed text-muted-foreground text-xs">
                  {"Monitor ongoing deals, check potential revenue, and update opportunity stages."}
                </p>
                <a className="gap-1 hover:underline inline-flex items-center text-primay text-xs underline-offset-2" href="#">
                  {"Open Pipeline"}
                  <svg className="lucide lucide-chevron-right shrink-0 size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
            </div>
          </FramePanel>
          <FramePanel className="isolate">
            <canvas className="[mask-image:linear-gradient(to_bottom_left,black,transparent_60%)] absolute h-full inset-0 pointer-events-none text-muted-foreground w-full" aria-hidden="true" width="408" height="203"></canvas>
            <div className="relative space-y-7.5 z-10">
              <Item className="[&_svg]:size-5 [&_svg]:text-white bg-sky-600 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="flex flex-col gap-3">
                <span className="block font-medium leading-tight text-sm">
                  {"Performance & Sales Reports"}
                </span>
                <p className="leading-relaxed text-muted-foreground text-xs">
                  {"Analyze weekly and monthly reports to gain deeper insights into performance trends."}
                </p>
                <a className="gap-1 hover:underline inline-flex items-center text-primay text-xs underline-offset-2" href="#">
                  {"View Reports"}
                  <svg className="lucide lucide-chevron-right shrink-0 size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
            </div>
          </FramePanel>
          <FramePanel className="isolate">
            <canvas className="[mask-image:linear-gradient(to_bottom_left,black,transparent_60%)] absolute h-full inset-0 pointer-events-none text-muted-foreground w-full" aria-hidden="true" width="408" height="203"></canvas>
            <div className="relative space-y-7.5 z-10">
              <Item className="[&_svg]:size-5 [&_svg]:text-white bg-orange-600 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                    <path d="M14 17H5"></path>
                    <path d="M19 7h-9"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="flex flex-col gap-3">
                <span className="block font-medium leading-tight text-sm">
                  {"Integration Settings & Sync"}
                </span>
                <p className="leading-relaxed text-muted-foreground text-xs">
                  {"Manage connections with third-party tools and ensure data stays in sync."}
                </p>
                <a className="gap-1 hover:underline inline-flex items-center text-primay text-xs underline-offset-2" href="#">
                  {"Manage Integrations"}
                  <svg className="lucide lucide-chevron-right shrink-0 size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
            </div>
          </FramePanel>
        </div>
      </Frame>
    </div>
  )
}
