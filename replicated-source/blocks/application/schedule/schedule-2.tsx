import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Label } from "@/registry/bases/base/ui/label"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Frame className="max-w-md w-full">
        <header className="flex flex-row gap-(--frame-panel-header-gap) items-center justify-between px-(--frame-panel-header-px) px-2! py-(--frame-panel-header-py) py-2.25!">
          <div className="flex gap-2 items-center">
            <Avatar size="default">
              <AvatarImage alt="Alex Johnson" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
            </Avatar>
            <div className="flex flex-col">
              <div className="flex gap-1.5 items-center">
                <span className="font-semibold text-sm">
                  Alex Johnson
                </span>
              </div>
              <span className="text-muted-foreground text-xs">
                Founder & CEO
              </span>
            </div>
          </div>
          <DropdownMenu>
          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent! cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false" extracted="1">
            <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </DropdownMenuTrigger>
          </DropdownMenu>
        </header>
        <FramePanel className="p-6! space-y-6">
          <div className="gap-5 grid md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="start-time">
                Start time
              </Label>
              <Select>
              <SelectTrigger className="w-full" type="button" tabIndex="0" id="start-time" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                <SelectValue>
                  09:00 AM
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  ▼
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_5_-hidden-input" tabIndex="-1" aria-hidden="true" value="09:00" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="end-time">
                End time
              </Label>
              <Select>
              <SelectTrigger className="w-full" type="button" tabIndex="0" id="end-time" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                <SelectValue>
                  10:00 AM
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  ▼
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_8_-hidden-input" tabIndex="-1" aria-hidden="true" value="10:00" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label>
              Duration
            </Label>
            <div className="gap-2 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3">
              <Button type="button" tabIndex="0">
                15 min
              </Button>
              <Button type="button" tabIndex="0">
                30 min
              </Button>
              <Button type="button" tabIndex="0">
                1 hour
              </Button>
              <Button type="button" tabIndex="0">
                2 hours
              </Button>
              <Button type="button" tabIndex="0">
                3 hours
              </Button>
              <Button type="button" tabIndex="0">
                4 hours
              </Button>
              <Button type="button" tabIndex="0">
                5 hours
              </Button>
              <Button type="button" tabIndex="0">
                6 hours
              </Button>
              <Button type="button" tabIndex="0">
                7 hours
              </Button>
              <Button type="button" tabIndex="0">
                8 hours
              </Button>
            </div>
          </div>
        </FramePanel>
        <footer className="flex flex-col gap-3 items-center md:flex-row px-(--frame-panel-footer-px) px-2! py-(--frame-panel-footer-py) py-2.5!">
          <div className="flex flex-1 gap-1.5">
            <Tooltip>
            <TooltipTrigger type="button" id="base-ui-_r_c_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-info shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </TooltipTrigger>
            </Tooltip>
            <span className="text-muted-foreground text-xs truncate">
              Selected duration:
              <strong className="font-semibold text-foreground">
                1 hour
              </strong>
            </span>
          </div>
          <div className="flex gap-2 justify-center">
            <Button type="button" tabIndex="0">
              Cancel
            </Button>
            <Button type="button" tabIndex="0">
              Apply
            </Button>
          </div>
        </footer>
      </Frame>
    </div>
  )
}
