import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Frame className="max-w-5xl w-full" spacing="default">
        <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-px min-w-0">
            <div className="font-semibold text-sm">
              Traffic
            </div>
            <div className="text-muted-foreground text-xs">
              Requests per hour, last 24 hours
            </div>
          </div>
          <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Traffic shown" style={{"--gap": "0"}}>
            <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="sm" spacing="0" extracted="1">
              All
            </ToggleGroupItem>
            <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="0">
              Threats
            </ToggleGroupItem>
          </ToggleGroup>
        </header>
        <FramePanel className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-6 sm:items-start sm:justify-between">
            <div className="gap-4 grid grid-cols-3 min-w-0 sm:flex-1 sm:gap-6 sm:max-w-md">
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-muted-foreground text-xs">
                  Requests
                </span>
                <span className="font-semibold leading-none tabular-nums text-2xl text-foreground tracking-tight">
                  1.2M
                </span>
                <span className="tabular-nums text-muted-foreground text-xs truncate">
                  Last 24 hours
                </span>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-muted-foreground text-xs">
                  Blocked
                </span>
                <span className="font-semibold leading-none tabular-nums text-2xl text-foreground tracking-tight">
                  79.8K
                </span>
                <span className="tabular-nums text-muted-foreground text-xs truncate">
                  6.5%
                  <span className="max-sm:sr-only">
                    of requests
                  </span>
                </span>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-muted-foreground text-xs">
                  Challenged
                </span>
                <span className="font-semibold leading-none tabular-nums text-2xl text-foreground tracking-tight">
                  73.1K
                </span>
                <span className="tabular-nums text-muted-foreground text-xs truncate">
                  5.9%
                  <span className="max-sm:sr-only">
                    of requests
                  </span>
                </span>
              </div>
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-xs">
              <span className="flex gap-1.5 items-center">
                <span className="bg-destructive h-2 rounded-full w-3" aria-hidden="true"></span>
                Blocked
              </span>
              <span className="flex gap-1.5 items-center">
                <span className="bg-warning h-2 rounded-full w-3" aria-hidden="true"></span>
                Challenged
              </span>
              <span className="flex gap-1.5 items-center">
                <span className="bg-success/45 h-2 rounded-full w-3" aria-hidden="true"></span>
                Allowed
              </span>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-2 min-h-0">
            <div className="flex-1 gap-1 grid grid-cols-24 min-h-40 sm:gap-1.5 sm:min-h-58" role="group" aria-label="Requests per hour">
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-0" type="button" tabIndex="-1" aria-label="15:00 to 16:00: 69,800 requests, 1,980 blocked, 1,420 challenged" aria-pressed="false">
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-1" type="button" tabIndex="-1" aria-label="16:00 to 17:00: 72,820 requests, 2,110 blocked, 1,510 challenged" aria-pressed="false">
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-2" type="button" tabIndex="-1" aria-label="17:00 to 18:00: 73,290 requests, 2,040 blocked, 9,350 challenged. Scraper wave on /v2/customers" aria-pressed="false">
                <span className="bg-warning flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-warning flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-3" type="button" tabIndex="-1" aria-label="18:00 to 19:00: 68,650 requests, 1,890 blocked, 4,960 challenged" aria-pressed="false">
                <span className="bg-warning flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-4" type="button" tabIndex="-1" aria-label="19:00 to 20:00: 60,350 requests, 1,720 blocked, 1,330 challenged" aria-pressed="false">
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-5" type="button" tabIndex="-1" aria-label="20:00 to 21:00: 54,340 requests, 1,560 blocked, 1,180 challenged" aria-pressed="false">
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-6" type="button" tabIndex="-1" aria-label="21:00 to 22:00: 47,320 requests, 1,380 blocked, 1,040 challenged" aria-pressed="false">
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-7" type="button" tabIndex="-1" aria-label="22:00 to 23:00: 39,930 requests, 1,210 blocked, 920 challenged" aria-pressed="false">
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-8" type="button" tabIndex="-1" aria-label="23:00 to 00:00: 33,770 requests, 1,060 blocked, 810 challenged" aria-pressed="false">
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-9" type="button" tabIndex="-1" aria-label="00:00 to 01:00: 28,760 requests, 940 blocked, 720 challenged" aria-pressed="false">
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-10" type="button" tabIndex="-1" aria-label="01:00 to 02:00: 25,110 requests, 860 blocked, 650 challenged" aria-pressed="false">
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-11" type="button" tabIndex="-1" aria-label="02:00 to 03:00: 25,650 requests, 910 blocked, 2,840 challenged" aria-pressed="false">
                <span className="bg-warning flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-12" type="button" tabIndex="-1" aria-label="03:00 to 04:00: 54,050 requests, 3,350 blocked, 30,400 challenged. Credential stuffing on /oauth/token" aria-pressed="false">
                <span className="bg-destructive flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-warning flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-warning flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-warning flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-warning flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-warning flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-warning flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="flex flex-1 items-center justify-center min-h-1.5 w-full" aria-hidden="true">
                  <span className="bg-destructive rounded-full size-1.5"></span>
                </span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-13" type="button" tabIndex="-1" aria-label="04:00 to 05:00: 47,460 requests, 21,700 blocked, 3,960 challenged. 203.0.113.128/26 added to the blocklist" aria-pressed="false">
                <span className="bg-destructive flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-destructive flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-destructive flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-destructive flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-warning flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="flex flex-1 items-center justify-center min-h-1.5 w-full" aria-hidden="true">
                  <span className="bg-destructive rounded-full size-1.5"></span>
                </span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-14" type="button" tabIndex="-1" aria-label="05:00 to 06:00: 29,160 requests, 2,640 blocked, 1,120 challenged" aria-pressed="false">
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-15" type="button" tabIndex="-1" aria-label="06:00 to 07:00: 33,200 requests, 1,130 blocked, 870 challenged" aria-pressed="false">
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-16" type="button" tabIndex="-1" aria-label="07:00 to 08:00: 42,290 requests, 1,370 blocked, 1,020 challenged" aria-pressed="false">
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-17" type="button" tabIndex="-1" aria-label="08:00 to 09:00: 51,130 requests, 1,640 blocked, 1,190 challenged" aria-pressed="false">
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-18" type="button" tabIndex="-1" aria-label="09:00 to 10:00: 72,210 requests, 16,800 blocked, 1,310 challenged. Scanner wave on dotfiles and CMS paths" aria-pressed="false">
                <span className="bg-destructive flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-destructive flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-destructive flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-19" type="button" tabIndex="-1" aria-label="10:00 to 11:00: 67,520 requests, 5,940 blocked, 1,380 challenged" aria-pressed="false">
                <span className="bg-destructive flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-20" type="button" tabIndex="-1" aria-label="11:00 to 12:00: 67,710 requests, 2,160 blocked, 1,450 challenged" aria-pressed="false">
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-21" type="button" tabIndex="-1" aria-label="12:00 to 13:00: 71,090 requests, 2,270 blocked, 1,520 challenged" aria-pressed="false">
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="_r_0_-hour-22" type="button" tabIndex="-1" aria-label="13:00 to 14:00: 74,860 requests, 2,380 blocked, 1,580 challenged" aria-pressed="false">
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
              <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none opacity-70 outline-none rounded-full transition-opacity" id="_r_0_-hour-23" type="button" tabIndex="0" aria-label="14:00 to now: 23,380 requests, 760 blocked, 520 challenged" aria-pressed="false">
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
              </button>
            </div>
            <div className="gap-1 grid grid-cols-24 sm:gap-1.5 text-muted-foreground text-xs" aria-hidden="true">
              <span className="col-start-1 justify-self-start row-start-1 whitespace-nowrap">
                24h ago
              </span>
              <span className="col-start-6 justify-self-center row-start-1 whitespace-nowrap">
                18h
              </span>
              <span className="col-start-12 justify-self-center row-start-1 whitespace-nowrap">
                12h
              </span>
              <span className="col-start-18 justify-self-center row-start-1 whitespace-nowrap">
                6h
              </span>
              <span className="col-start-24 justify-self-end row-start-1 whitespace-nowrap">
                Now
              </span>
            </div>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}
