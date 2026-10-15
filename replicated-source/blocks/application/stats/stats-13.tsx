import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Frame className="sm:max-w-md w-full">
        <FramePanel>
          <div className="flex gap-3 items-center justify-between mb-6">
            <div className="flex gap-2.5 items-center">
              <span className="[&_svg]:size-5 text-primary">
                <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </span>
              <div className="font-semibold text-sm">
                {"Compliance Checks"}
              </div>
            </div>
            <DropdownMenu>
            <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false" extracted="1">
              <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                <circle cx={12} cy={12} r={1}></circle>
                <circle cx={12} cy={5} r={1}></circle>
                <circle cx={12} cy={19} r={1}></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
          <div className="space-y-4">
            <div className="flex gap-1 grow">
              <span className="bg-primary border border-primary h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-primary border border-primary h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-primary border border-primary h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-primary border border-primary h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-primary border border-primary h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-primary border border-primary h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-primary border border-primary h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-primary border border-primary h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-primary border border-primary h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-primary border border-primary h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-primary border border-primary h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-primary border border-primary h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-primary border border-primary h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-primary border border-primary h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-primary border border-primary h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-primary border border-primary h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-primary border border-primary h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-primary border border-primary h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-primary border border-primary h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-primary border border-primary h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-muted border border-muted h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-muted border border-muted h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-muted border border-muted h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-muted border border-muted h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-muted border border-muted h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-muted border border-muted h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-muted border border-muted h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-muted border border-muted h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-muted border border-muted h-4 inline-block rounded-sm transition-colors w-3"></span>
              <span className="bg-muted border border-muted h-4 inline-block rounded-sm transition-colors w-3"></span>
            </div>
            <div className="flex items-center justify-between mt-1 text-muted-foreground text-xs">
              <span>
                {"20/16 checks passing"}
              </span>
              <span className="font-semibold text-foreground">
                {"67% assigned"}
              </span>
            </div>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}
