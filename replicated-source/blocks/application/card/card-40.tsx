import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-[414px] min-h-svh p-10 w-full">
      <Frame className="@container p-1 rounded-lg w-full">
        <div className="gap-1 grid grid-cols-2">
          <FramePanel className="p-3.5 rounded-lg space-y-5">
            <div className="flex gap-0.5 items-baseline">
              <span className="leading-none text-[26px]">
                72
              </span>
              <span className="leading-none text-lg text-muted-foreground/50">
                bpm
              </span>
            </div>
            <span className="leading-relaxed text-muted-foreground text-sm">
              Heart Rate
            </span>
          </FramePanel>
          <FramePanel className="p-3.5 rounded-lg space-y-5">
            <div className="flex gap-0.5 items-baseline">
              <span className="leading-none text-[26px]">
                6.2
              </span>
              <span className="leading-none text-lg text-muted-foreground/50">
                km
              </span>
            </div>
            <span className="leading-relaxed text-muted-foreground text-sm">
              Distance Run
            </span>
          </FramePanel>
          <FramePanel className="p-3.5 rounded-lg space-y-5">
            <div className="flex gap-0.5 items-baseline">
              <span className="leading-none text-[26px]">
                480
              </span>
              <span className="leading-none text-lg text-muted-foreground/50">
                kcal
              </span>
            </div>
            <span className="leading-relaxed text-muted-foreground text-sm">
              Calories Burned
            </span>
          </FramePanel>
          <FramePanel className="p-3.5 rounded-lg space-y-5">
            <div className="flex gap-0.5 items-baseline">
              <span className="leading-none text-[26px]">
                120
              </span>
              <span className="leading-none text-lg text-muted-foreground/50">
                reps
              </span>
            </div>
            <span className="leading-relaxed text-muted-foreground text-sm">
              Strength Reps
            </span>
          </FramePanel>
        </div>
      </Frame>
    </div>
  )
}
