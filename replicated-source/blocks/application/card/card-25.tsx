import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-5xl min-h-svh p-8 w-full">
      <Frame className="@container w-full">
        <div className="@2xl:grid-cols-3 gap-1 grid">
          <FramePanel>
            <div className="flex gap-2.5 items-center">
              <Item className="[&_svg]:size-5 [&_svg]:text-white [background-image:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] bg-zinc-950 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-credit-card" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="flex flex-col gap-1">
                <p className="leading-tight text-muted-foreground text-sm">
                  Account
                </p>
                <h3 className="font-medium leading-tight text-sm">
                  Main Wallet
                </h3>
              </div>
            </div>
            <div className="mt-5 space-y-1.5">
              <p className="leading-tight text-muted-foreground text-sm">
                Balance (USD)
              </p>
              <div className="flex flex-wrap gap-1.5 items-center">
                <span className="font-medium text-xl tracking-tight">
                  $2,435,900
                </span>
                <span className="font-medium text-sm text-teal-600">
                  +18% ($214,356)
                </span>
              </div>
            </div>
          </FramePanel>
          <FramePanel>
            <div className="flex gap-2.5 items-center">
              <Item className="[&_svg]:size-5 [&_svg]:text-white [background-image:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] bg-violet-700 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="flex flex-col gap-1">
                <p className="leading-tight text-muted-foreground text-sm">
                  Account
                </p>
                <h3 className="font-medium leading-tight text-sm">
                  Reserve Fund
                </h3>
              </div>
            </div>
            <div className="mt-5 space-y-1.5">
              <p className="leading-tight text-muted-foreground text-sm">
                Balance (USD)
              </p>
              <div className="flex flex-wrap gap-1.5 items-center">
                <span className="font-medium text-xl tracking-tight">
                  $1,980,000
                </span>
                <span className="font-medium text-rose-600 text-sm">
                  -3% ($58,000)
                </span>
              </div>
            </div>
          </FramePanel>
          <FramePanel>
            <div className="flex gap-2.5 items-center">
              <Item className="[&_svg]:size-5 [&_svg]:text-white [background-image:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] bg-rose-600 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                    <path d="M16 7h6v6"></path>
                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="flex flex-col gap-1">
                <p className="leading-tight text-muted-foreground text-sm">
                  Team
                </p>
                <h3 className="font-medium leading-tight text-sm">
                  Growth Portfolio
                </h3>
              </div>
            </div>
            <div className="mt-5 space-y-1.5">
              <p className="leading-tight text-muted-foreground text-sm">
                Balance (USD)
              </p>
              <div className="flex flex-wrap gap-1.5 items-center">
                <span className="font-medium text-xl tracking-tight">
                  $3,245,500
                </span>
                <span className="font-medium text-sm text-teal-600">
                  +10% ($295,000)
                </span>
              </div>
            </div>
          </FramePanel>
        </div>
      </Frame>
    </div>
  )
}
