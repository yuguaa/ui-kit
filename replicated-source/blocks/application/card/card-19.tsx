import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-2xl min-h-svh p-6 w-full">
      <div className="@container w-full">
        <Frame className="w-full">
          <header className="flex flex-row gap-(--frame-panel-header-gap) items-center justify-between px-1.5 py-2">
            <div className="font-medium text-sm">
              {"Asset Overview"}
            </div>
            <span className="text-muted-foreground text-xs">
              {"Updated Mar 3, 7:32 AM GMT+7"}
            </span>
          </header>
          <FramePanel className="flex flex-col gap-4 px-3.5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-3.5">
              <div className="flex gap-1.5 items-center">
                <svg className="lucide lucide-circle-dollar-sign size-4.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                  <path d="M12 18V6"></path>
                </svg>
                <span className="font-medium leading-relaxed text-xs uppercase">
                  {"Bts/Usd | Cryptocurrency"}
                </span>
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:items-center">
                <h3 className="font-semibold leading-tight text-2xl">
                  {"$93,725.75 USD"}
                </h3>
                <span className="leading-relaxed text-green-800 text-xs">
                  {"+2.42% (+$2,215.87)"}
                </span>
              </div>
            </div>
            <div className="flex gap-2.5">
              <Button type="button" tabIndex="0">
                {"Follow"}
              </Button>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
                {"Trade on Binance"}
              </Button>
            </div>
          </FramePanel>
        </Frame>
      </div>
    </div>
  )
}
