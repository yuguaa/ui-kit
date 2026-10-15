import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-5xl min-h-svh p-6 w-full">
      <Frame className="@container w-full">
        <div className="@2xl:grid-cols-2 @4xl:grid-cols-4 gap-1 grid">
          <FramePanel className="lg:space-y-20 space-y-10">
            <h3 className="text-muted-foreground/50 text-sm">
              0.1
            </h3>
            <div className="flex flex-col gap-2.5">
              <a className="font-medium hover:text-primary leading-tight text-sm">
                Plan Setup
              </a>
              <p className="leading-relaxed text-muted-foreground text-xs">
                Define goals and gather the essentials before starting.
              </p>
            </div>
          </FramePanel>
          <FramePanel className="lg:space-y-20 space-y-10">
            <h3 className="text-muted-foreground/50 text-sm">
              0.2
            </h3>
            <div className="flex flex-col gap-2.5">
              <a className="font-medium hover:text-primary leading-tight text-sm">
                Configuration
              </a>
              <p className="leading-relaxed text-muted-foreground text-xs">
                Adjust key settings to match your project needs.
              </p>
            </div>
          </FramePanel>
          <FramePanel className="lg:space-y-20 space-y-10">
            <h3 className="text-muted-foreground/50 text-sm">
              0.3
            </h3>
            <div className="flex flex-col gap-2.5">
              <a className="font-medium hover:text-primary leading-tight text-sm">
                Integration
              </a>
              <p className="leading-relaxed text-muted-foreground text-xs">
                Connect services and verify everything is running smoothly.
              </p>
            </div>
          </FramePanel>
          <FramePanel className="lg:space-y-20 space-y-10">
            <h3 className="text-muted-foreground/50 text-sm">
              0.4
            </h3>
            <div className="flex flex-col gap-2.5">
              <a className="font-medium hover:text-primary leading-tight text-sm">
                Launch & Monitor
              </a>
              <p className="leading-relaxed text-muted-foreground text-xs">
                Go live and keep track of performance metrics.
              </p>
            </div>
          </FramePanel>
        </div>
      </Frame>
    </div>
  )
}
