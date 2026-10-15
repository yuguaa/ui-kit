import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Frame className="sm:max-w-md w-full">
        <FramePanel>
          <div className="flex gap-3 items-center justify-between mb-6">
            <div className="font-semibold text-sm">
              Leads Overview
            </div>
            <Select>
            <SelectTrigger className="w-32" type="button" tabIndex="0" id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" extracted="1">
              <SelectValue>
                This Month
              </SelectValue>
              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
                ▼
              </svg>
            </SelectTrigger>
            </Select>
            <input id="base-ui-_r_0_-hidden-input" tabIndex="-1" aria-hidden="true" value="this-month" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
          </div>
          <div className="flex gap-x-6 items-stretch mb-4">
            <div className="flex flex-1 flex-col gap-1 items-start">
              <div className="flex gap-1 items-center mb-1">
                <span className="font-bold text-2xl text-foreground">
                  54
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                  21.43%
                </Badge>
              </div>
              <span className="font-medium text-muted-foreground text-sm">
                New leads
              </span>
              <div className="mt-1 w-full">
                <Progress className="**:data-[slot=progress-track]:h-2.5" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="21.43" aria-valuetext="21%" role="progressbar">
                  <ProgressTrack progressing="">
                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "21.43%"}}></ProgressIndicator>
                  </ProgressTrack>
                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                    x
                  </span>
                </Progress>
              </div>
            </div>
            <div className="border-muted-foreground/10 border-s flex flex-1 flex-col gap-1 items-start ps-6">
              <div className="flex gap-1 items-center mb-1">
                <span className="font-bold text-2xl text-foreground">
                  198
                </span>
              </div>
              <span className="font-medium text-muted-foreground text-sm">
                Returning leads
              </span>
              <div className="flex gap-0.5 mt-1 w-full">
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-emerald-500 flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-muted flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-muted flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-muted flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-muted flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-muted flex-1 h-2.5 rounded-md w-0.5"></div>
                <div className="bg-muted flex-1 h-2.5 rounded-md w-0.5"></div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-4 items-center mb-1.5">
            <div className="flex flex-1 flex-col gap-0.5">
              <span className="text-muted-foreground text-xs">
                Top Source
              </span>
              <span className="font-medium text-foreground text-sm">
                LinkedIn
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-0.5 ps-7.5">
              <span className="flex gap-1 items-center text-muted-foreground text-xs">
                Conversion Rate
                <Tooltip>
                <TooltipTrigger className="cursor-help focus-visible:ring-[3px] focus-visible:ring-ring/50 hover:text-foreground inline-flex items-center outline-none rounded-full text-muted-foreground" type="button" aria-label="About Conversion Rate" id="base-ui-_r_4_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </span>
              <span className="font-medium text-foreground text-sm">
                12.8%
              </span>
            </div>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}
