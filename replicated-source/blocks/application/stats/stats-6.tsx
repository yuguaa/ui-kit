import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Frame className="sm:max-w-md w-full">
        <FramePanel>
          <div className="flex gap-3 items-start justify-between mb-6">
            <div className="flex flex-col gap-px">
              <h3 className="font-semibold text-base">
                {"Staff Performance"}
              </h3>
              <span className="font-normal text-muted-foreground text-xs">
                {"Sales Manager"}
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <Select>
              <SelectTrigger className="h-8! w-28" type="button" tabIndex="0" id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" extracted="1">
                <SelectValue>
                  {"Q3 - 2024"}
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  {"▼"}
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_0_-hidden-input" tabIndex="-1" aria-hidden="true" value="q3" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_6_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
          </div>
          <div className="space-y-5">
            <div className="gap-2 grid grid-cols-3">
              <div className="flex flex-col items-start justify-start">
                <div className="font-bold text-foreground text-xl">
                  {"27"}
                </div>
                <div className="font-medium mb-1 text-muted-foreground text-xs">
                  {"Deals Closed"}
                </div>
                <span className="[&_svg]:h-3 [&_svg]:w-3 flex font-semibold gap-0.5 items-center text-emerald-500 text-xs">
                  <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                    <path d="M16 7h6v6"></path>
                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                  </svg>
                  {"+12%"}
                </span>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="font-bold text-foreground text-xl">
                  {"$182.4k"}
                </div>
                <div className="font-medium mb-1 text-muted-foreground text-xs">
                  {"Revenue"}
                </div>
                <span className="[&_svg]:h-3 [&_svg]:w-3 flex font-semibold gap-0.5 items-center text-emerald-500 text-xs">
                  <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                    <path d="M16 7h6v6"></path>
                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                  </svg>
                  {"+6%"}
                </span>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="font-bold text-foreground text-xl">
                  {"72%"}
                </div>
                <div className="font-medium mb-1 text-muted-foreground text-xs">
                  {"Conversion"}
                </div>
                <span className="[&_svg]:h-3 [&_svg]:w-3 flex font-semibold gap-0.5 items-center text-destructive text-xs">
                  <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                    <path d="M16 17h6v-6"></path>
                    <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                  </svg>
                  {"-3%"}
                </span>
              </div>
            </div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="font-medium text-foreground text-sm">
                  {"Pipeline Progress"}
                </span>
                <span className="font-semibold text-foreground text-xs">
                  {"76%"}
                </span>
              </div>
              <Progress className="**:data-[slot=progress-track]:h-2.5" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="76" aria-valuetext="76%" role="progressbar">
                <ProgressTrack progressing="">
                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "76%"}}></ProgressIndicator>
                </ProgressTrack>
                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                  {"x"}
                </span>
              </Progress>
            </div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div>
              <div className="font-medium mb-2.5 text-foreground text-sm">
                {"Recent Activity"}
              </div>
              <ul className="space-y-2">
                <li className="flex gap-2.5 items-center justify-between text-sm">
                  <span className="flex gap-2 items-center">
                    <svg className="h-3.5 lucide lucide-circle-check text-emerald-500 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span className="text-foreground text-xs truncate">
                      {"Closed deal with FinSight Inc."}
                    </span>
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                    {"Today"}
                  </Badge>
                </li>
                <li className="flex gap-2.5 items-center justify-between text-sm">
                  <span className="flex gap-2 items-center">
                    <svg className="h-3.5 lucide lucide-circle-check text-emerald-500 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span className="text-foreground text-xs truncate">
                      {"3 new leads added to Pipeline."}
                    </span>
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                    {"Yesterday"}
                  </Badge>
                </li>
                <li className="flex gap-2.5 items-center justify-between text-sm">
                  <span className="flex gap-2 items-center">
                    <svg className="h-3.5 lucide lucide-circle-check text-destructive w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span className="text-foreground text-xs truncate">
                      {"Follow-up scheduled."}
                    </span>
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    {"2 days ago"}
                  </Badge>
                </li>
              </ul>
            </div>
          </div>
        </FramePanel>
        <footer className="flex flex-row gap-2.5 items-center p-2! px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
          <Button className="flex-1" type="button" tabIndex="0">
            {"Schedule"}
          </Button>
          <Button className="flex-1" type="button" tabIndex="0">
            {"Full Report"}
          </Button>
        </footer>
      </Frame>
    </div>
  )
}
