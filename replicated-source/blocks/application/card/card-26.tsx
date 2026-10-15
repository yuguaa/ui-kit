import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-5xl min-h-svh p-6 w-full">
      <div className="@container w-full">
        <div className="@2xl:grid-cols-3 gap-5 grid">
          <Frame spacing="sm">
            <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) px-1! py-(--frame-panel-header-py) py-1!">
              <div className="[&_svg]:size-4 [&_svg]:text-muted-foreground flex gap-2 items-center">
                <svg className="lucide lucide-package" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                  <path d="M12 22V12"></path>
                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                  <path d="m7.5 4.27 9 5.15"></path>
                </svg>
                <span className="font-medium text-foreground text-sm">
                  {"Total Orders"}
                </span>
              </div>
            </header>
            <FramePanel>
              <a className="font-semibold hover:text-primary leading-tight text-sm" href="#">
                {"Analytics"}
              </a>
              <p className="leading-relaxed pt-1.5 text-muted-foreground text-xs">
                {"Track every order and monitor growth trends with real-time updates."}
              </p>
            </FramePanel>
          </Frame>
          <Frame spacing="sm">
            <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) px-1! py-(--frame-panel-header-py) py-1!">
              <div className="[&_svg]:size-4 [&_svg]:text-muted-foreground flex gap-2 items-center">
                <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
                <span className="font-medium text-foreground text-sm">
                  {"Revenue"}
                </span>
              </div>
            </header>
            <FramePanel>
              <a className="font-semibold hover:text-primary leading-tight text-sm" href="#">
                {"Financial Summary"}
              </a>
              <p className="leading-relaxed pt-1.5 text-muted-foreground text-xs">
                {"Get instant insights into earnings and cash flow performance."}
              </p>
            </FramePanel>
          </Frame>
          <Frame spacing="sm">
            <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) px-1! py-(--frame-panel-header-py) py-1!">
              <div className="[&_svg]:size-4 [&_svg]:text-muted-foreground flex gap-2 items-center">
                <svg className="lucide lucide-map-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx={12} cy={10} r={3}></circle>
                </svg>
                <span className="font-medium text-foreground text-sm">
                  {"Shipments"}
                </span>
              </div>
            </header>
            <FramePanel>
              <a className="font-semibold hover:text-primary leading-tight text-sm" href="#">
                {"Logistics"}
              </a>
              <p className="leading-relaxed pt-1.5 text-muted-foreground text-xs">
                {"Stay on top of deliveries and track shipment statuses efficiently."}
              </p>
            </FramePanel>
          </Frame>
        </div>
      </div>
    </div>
  )
}
