import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Frame className="sm:max-w-md w-full">
        <FramePanel>
          <div className="flex gap-3 items-center justify-between mb-6">
            <div className="font-semibold text-sm">
              {"API Call Quota"}
            </div>
            <Button className="font-medium h-8!" type="button" tabIndex={0} extracted="1">
              {"View API usage"}
            </Button>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="grow space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">
                  {"Used calls:"}
                  <span className="font-semibold text-foreground">
                    {"2000"}
                  </span>
                </span>
                <span className="font-semibold text-base text-foreground">
                  {"$4.00"}
                </span>
              </div>
              <Progress className="**:data-[slot=progress-track]:h-2" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" aria-valuetext="40%" role="progressbar">
                <ProgressTrack progressing="">
                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "40%"}}></ProgressIndicator>
                </ProgressTrack>
                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                  {"x"}
                </span>
              </Progress>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-emerald-600 text-sm">
                  {"3000 free calls left"}
                </span>
                <span className="text-muted-foreground text-xs">
                  {"of 5000 monthly quota"}
                </span>
              </div>
            </div>
            <div className="border border-dashed border-input flex gap-2 items-center justify-between p-2 rounded-md text-muted-foreground text-sm">
              <span>
                {"Quota renews on"}
              </span>
              <span className="font-medium text-foreground">
                {"September 1, 2025"}
              </span>
            </div>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}
