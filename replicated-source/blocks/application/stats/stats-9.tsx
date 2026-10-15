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
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Frame className="sm:max-w-md w-full">
        <FramePanel className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-base">
              Tasks Overview
            </h3>
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
          <div className="flex flex-col gap-5">
            <div className="grow mb-6">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-muted-foreground text-sm">
                  Tasks Done
                </span>
                <span className="font-semibold text-muted-foreground text-sm">
                  12
                </span>
              </div>
              <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="66" aria-valuetext="66%" role="progressbar">
                <ProgressTrack progressing="">
                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "66%"}}></ProgressIndicator>
                </ProgressTrack>
                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                  x
                </span>
              </Progress>
            </div>
            <div className="space-y-6">
              <div className="gap-2.5 grid grid-cols-3">
                <div className="bg-muted/60 flex flex-col gap-1 items-center justify-center px-2 py-3.5 rounded-lg">
                  <span className="font-bold text-emerald-500 text-lg">
                    28
                  </span>
                  <span className="text-accent-foreground text-xs">
                    Backlog
                  </span>
                </div>
                <div className="bg-muted/60 flex flex-col gap-1 items-center justify-center px-2 py-3.5 rounded-lg">
                  <span className="font-bold text-amber-500 text-lg">
                    14
                  </span>
                  <span className="text-accent-foreground text-xs">
                    In Progress
                  </span>
                </div>
                <div className="bg-muted/60 flex flex-col gap-1 items-center justify-center px-2 py-3.5 rounded-lg">
                  <span className="font-bold text-indigo-500 text-lg">
                    8
                  </span>
                  <span className="text-accent-foreground text-xs">
                    In Review
                  </span>
                </div>
              </div>
              <div className="text-center text-muted-foreground text-xs">
                AI prediction to finish all tasks:
                <span className="font-semibold text-foreground">
                  1w 4d 2h
                </span>
              </div>
            </div>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}
