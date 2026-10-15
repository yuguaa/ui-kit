import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-5xl min-h-svh p-10 w-full">
      <div className="@2xl:grid-cols-2 @4xl:grid-cols-4 gap-5 grid">
        <Frame className="rounded-md">
          <header className="flex flex-col gap-(--frame-panel-header-gap) px-1 py-1.5">
            <span className="font-medium text-xs">
              Total Orders
            </span>
          </header>
          <FramePanel className="rounded-md space-y-3.5">
            <div className="font-semibold leading-tight text-foreground text-xl">
              1,246
              <span className="font-semibold text-muted-foreground/40"></span>
            </div>
            <div className="flex gap-1.5 items-center">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                <svg className="lucide lucide-trending-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
                <span>
                  23.08%
                </span>
              </Badge>
              <span className="text-muted-foreground text-xs">
                Annual trend
              </span>
            </div>
          </FramePanel>
        </Frame>
        <Frame className="rounded-md">
          <header className="flex flex-col gap-(--frame-panel-header-gap) px-1 py-1.5">
            <span className="font-medium text-xs">
              Cumulative Spend
            </span>
          </header>
          <FramePanel className="rounded-md space-y-3.5">
            <div className="font-semibold leading-tight text-foreground text-xl">
              $89,378
              <span className="font-semibold text-muted-foreground/40">
                .02
              </span>
            </div>
            <div className="flex gap-1.5 items-center">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                <svg className="lucide lucide-trending-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
                <span>
                  3.82%
                </span>
              </Badge>
              <span className="text-muted-foreground text-xs">
                Monthly trend
              </span>
            </div>
          </FramePanel>
        </Frame>
        <Frame className="rounded-md">
          <header className="flex flex-col gap-(--frame-panel-header-gap) px-1 py-1.5">
            <span className="font-medium text-xs">
              Avg. Order Value(AOV)
            </span>
          </header>
          <FramePanel className="rounded-md space-y-3.5">
            <div className="font-semibold leading-tight text-foreground text-xl">
              $68
              <span className="font-semibold text-muted-foreground/40">
                .50
              </span>
            </div>
            <div className="flex gap-1.5 items-center">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-destructive-foreground transition-shadow">
                <svg className="lucide lucide-trending-down size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                  <path d="M16 17h6v-6"></path>
                  <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                </svg>
                <span>
                  0.39%
                </span>
              </Badge>
              <span className="text-muted-foreground text-xs">
                Weekly trend
              </span>
            </div>
          </FramePanel>
        </Frame>
        <Frame className="rounded-md">
          <header className="flex flex-col gap-(--frame-panel-header-gap) px-1 py-1.5">
            <span className="font-medium text-xs">
              Account Balance
            </span>
          </header>
          <FramePanel className="rounded-md space-y-3.5">
            <div className="font-semibold leading-tight text-foreground text-xl">
              $2,345
              <span className="font-semibold text-muted-foreground/40">
                .94
              </span>
            </div>
            <div className="flex gap-1.5 items-center">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                <svg className="lucide lucide-trending-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
                <span>
                  1.04%
                </span>
              </Badge>
              <span className="text-muted-foreground text-xs">
                Daily trend
              </span>
            </div>
          </FramePanel>
        </Frame>
      </div>
    </div>
  )
}
