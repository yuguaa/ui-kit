import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-xl min-h-svh p-6 w-full">
      <Frame className="w-full">
        <header className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-header-px) px-1.5! py-(--frame-panel-header-py) py-1!">
          <div className="flex gap-1.5 items-center">
            <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-7" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="lucide lucide-package shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                  <path d="M12 22V12"></path>
                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                  <path d="m7.5 4.27 9 5.15"></path>
                </svg>
              </ItemMedia>
            </Item>
            <div className="font-medium text-sm">
              Delivery Details
            </div>
          </div>
          <DropdownMenu>
          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent! cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false">
            <svg className="lucide lucide-ellipsis-vertical size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
            </svg>
          </DropdownMenuTrigger>
          </DropdownMenu>
        </header>
        <FramePanel className="flex flex-col gap-5 p-5!">
          <div className="flex gap-2 items-center">
            <svg className="lucide lucide-map-pin size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="text-sm">
              Overtoom 135, 1054 HG Amsterdam
            </span>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
              Home
            </Badge>
          </div>
          <div className="flex gap-2 items-center">
            <svg className="lucide lucide-clock size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
            <span className="text-sm">
              37m 23s
            </span>
            <span className="text-muted-foreground text-sm">
              24m ago
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <svg className="lucide lucide-package size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
              <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
              <path d="M12 22V12"></path>
              <polyline points="3.29 7 12 12 20.71 7"></polyline>
              <path d="m7.5 4.27 9 5.15"></path>
            </svg>
            <span className="text-sm">
              #NL-54321-AMST
            </span>
            <span className="text-muted-foreground text-sm">
              Live Tracking
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            <h4 className="font-medium text-sm">
              Delivery Notes
            </h4>
            <p className="text-muted-foreground text-sm">
              Driver confirmed delivery at the main entrance; photo proof uploaded to the order.
            </p>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}
