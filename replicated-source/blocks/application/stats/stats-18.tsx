import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Frame className="@container grow max-w-5xl w-full" spacing="default">
        <FramePanel className="@2xl:divide-x @2xl:divide-y-0 @2xl:grid-cols-3 divide-border divide-y grid p-0!">
          <div className="flex flex-col gap-6 min-w-0 p-5">
            <div className="flex gap-3 items-center justify-between">
              <div className="flex gap-3 items-center min-w-0">
                <IconTile variant="elevated" size="default">
                  <svg className="lucide lucide-receipt-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ReceiptTextIcon" tabler="IconReceipt" hugeicons="Invoice01Icon" phosphor="ReceiptIcon" remixicon="RiReceiptLine" aria-hidden="true">
                    <path d="M13 16H8"></path>
                    <path d="M14 8H8"></path>
                    <path d="M16 12H8"></path>
                    <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"></path>
                  </svg>
                </IconTile>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <h3 className="font-medium text-sm truncate">
                    {"Invoices Collected"}
                  </h3>
                  <p className="text-muted-foreground text-xs truncate">
                    {"October billing run"}
                  </p>
                </div>
              </div>
              <DropdownMenu>
              <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Invoices Collected actions" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false" extracted="1">
                <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-baseline justify-between">
                <p className="flex gap-1.5 items-baseline min-w-0">
                  <span className="font-semibold tabular-nums text-2xl tracking-tight">
                    {"608"}
                  </span>
                  <span className="tabular-nums text-muted-foreground text-sm truncate">
                    {"of 691 invoices"}
                  </span>
                </p>
                <span className="font-medium tabular-nums text-sm">
                  {"88%"}
                </span>
              </div>
              <div className="flex gap-0.75 h-5" aria-hidden="true">
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-success flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 min-w-0 p-5">
            <div className="flex gap-3 items-center justify-between">
              <div className="flex gap-3 items-center min-w-0">
                <IconTile variant="elevated" size="default">
                  <svg className="lucide lucide-package" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                    <path d="M12 22V12"></path>
                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                    <path d="m7.5 4.27 9 5.15"></path>
                  </svg>
                </IconTile>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <h3 className="font-medium text-sm truncate">
                    {"Stock Replenished"}
                  </h3>
                  <p className="text-muted-foreground text-xs truncate">
                    {"Across 4 warehouses"}
                  </p>
                </div>
              </div>
              <DropdownMenu>
              <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Stock Replenished actions" aria-haspopup="menu" id="base-ui-_r_8_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-baseline justify-between">
                <p className="flex gap-1.5 items-baseline min-w-0">
                  <span className="font-semibold tabular-nums text-2xl tracking-tight">
                    {"7,420"}
                  </span>
                  <span className="tabular-nums text-muted-foreground text-sm truncate">
                    {"of 12,300 units"}
                  </span>
                </p>
                <span className="font-medium tabular-nums text-sm">
                  {"60%"}
                </span>
              </div>
              <div className="flex gap-0.75 h-5" aria-hidden="true">
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-info flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 min-w-0 p-5">
            <div className="flex gap-3 items-center justify-between">
              <div className="flex gap-3 items-center min-w-0">
                <IconTile variant="elevated" size="default">
                  <svg className="lucide lucide-landmark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LandmarkIcon" tabler="IconBuildingBank" hugeicons="BankIcon" phosphor="BankIcon" remixicon="RiBankLine" aria-hidden="true">
                    <path d="M10 18v-7"></path>
                    <path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"></path>
                    <path d="M14 18v-7"></path>
                    <path d="M18 18v-7"></path>
                    <path d="M3 22h18"></path>
                    <path d="M6 18v-7"></path>
                  </svg>
                </IconTile>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <h3 className="font-medium text-sm truncate">
                    {"Budget Utilized"}
                  </h3>
                  <p className="text-muted-foreground text-xs truncate">
                    {"Q4 operating budget"}
                  </p>
                </div>
              </div>
              <DropdownMenu>
              <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Budget Utilized actions" aria-haspopup="menu" id="base-ui-_r_d_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-baseline justify-between">
                <p className="flex gap-1.5 items-baseline min-w-0">
                  <span className="font-semibold tabular-nums text-2xl tracking-tight">
                    {"$1.4M"}
                  </span>
                  <span className="tabular-nums text-muted-foreground text-sm truncate">
                    {"of $2.6M"}
                  </span>
                </p>
                <span className="font-medium tabular-nums text-sm">
                  {"55%"}
                </span>
              </div>
              <div className="flex gap-0.75 h-5" aria-hidden="true">
                <span className="bg-warning flex-1 rounded-full"></span>
                <span className="bg-warning flex-1 rounded-full"></span>
                <span className="bg-warning flex-1 rounded-full"></span>
                <span className="bg-warning flex-1 rounded-full"></span>
                <span className="bg-warning flex-1 rounded-full"></span>
                <span className="bg-warning flex-1 rounded-full"></span>
                <span className="bg-warning flex-1 rounded-full"></span>
                <span className="bg-warning flex-1 rounded-full"></span>
                <span className="bg-warning flex-1 rounded-full"></span>
                <span className="bg-warning flex-1 rounded-full"></span>
                <span className="bg-warning flex-1 rounded-full"></span>
                <span className="bg-warning flex-1 rounded-full"></span>
                <span className="bg-warning flex-1 rounded-full"></span>
                <span className="bg-warning flex-1 rounded-full"></span>
                <span className="bg-warning flex-1 rounded-full"></span>
                <span className="bg-warning flex-1 rounded-full"></span>
                <span className="bg-warning flex-1 rounded-full"></span>
                <span className="bg-warning flex-1 rounded-full"></span>
                <span className="bg-warning flex-1 rounded-full"></span>
                <span className="bg-warning flex-1 rounded-full"></span>
                <span className="bg-warning flex-1 rounded-full"></span>
                <span className="bg-warning flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
                <span className="bg-muted flex-1 rounded-full"></span>
              </div>
            </div>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}
