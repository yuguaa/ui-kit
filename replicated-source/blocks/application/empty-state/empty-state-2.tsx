import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <div className="flex flex-col gap-24 items-center justify-center max-w-3xl md:py-12 min-h-[820px] py-8 sm:gap-32 w-full">
        <Empty className="border-0 flex-none gap-7 md:p-0 p-0 rounded-none">
          <EmptyHeader className="gap-4 max-w-md">
            <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-empty-media cn-empty-media-default flex items-center justify-center mb-0 shrink-0" data-variant="default">
              <div className="h-32 isolate relative w-56" aria-hidden="true">
                <div className="absolute bg-muted/50 border border-border/40 bottom-4 dark:bg-muted/25 flex gap-2.5 h-12 items-center left-6 px-3 right-6 rounded-lg">
                  <div className="bg-muted-foreground/10 rounded shrink-0 size-5"></div>
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <div className="bg-muted-foreground/10 h-2 rounded w-full"></div>
                    <div className="bg-muted-foreground/8 h-2 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="absolute bg-muted/70 border border-border/50 bottom-8 dark:bg-muted/40 flex gap-2.5 h-12 items-center left-3 px-3 right-3 rounded-lg">
                  <div className="bg-muted-foreground/12 rounded shrink-0 size-5"></div>
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <div className="bg-muted-foreground/12 h-2 rounded w-full"></div>
                    <div className="bg-muted-foreground/10 h-2 rounded w-3/4"></div>
                  </div>
                </div>
                <div className="absolute bg-background border border-border bottom-12 flex gap-3 h-14 inset-x-0 items-center px-3.5 rounded-lg shadow-sm">
                  <div className="bg-muted rounded shrink-0 size-7"></div>
                  <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                    <div className="bg-muted h-2.5 rounded w-full"></div>
                    <div className="bg-muted/70 h-2 rounded w-3/5"></div>
                  </div>
                </div>
                <div className="absolute bg-linear-to-b bottom-0 from-background/0 h-10 inset-x-0 pointer-events-none to-background"></div>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <EmptyTitle className="font-semibold text-2xl tracking-tight">
                {"No search matches yet"}
              </EmptyTitle>
              <EmptyDescription className="max-w-[25rem] text-sm/relaxed">
                {"Broaden your query or browse the library to explore files, notes, and tagged moments across the workspace."}
              </EmptyDescription>
            </div>
          </EmptyHeader>
          <EmptyContent className="gap-0 max-w-none">
            <ButtonGroup className="**:data-[slot=button]:border-r-0" role="group">
              <Button type="button" tabIndex="0" extracted="1">
                <svg className="fill-current lucide lucide-play" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlayIcon" tabler="IconPlayerPlay" hugeicons="PlayIcon" phosphor="PlayIcon" remixicon="RiPlayLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                </svg>
                {"Browse library"}
              </Button>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" data-icon="inline-start" aria-hidden="true">
                  <path d="M14 17H5"></path>
                  <path d="M19 7h-9"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                {"Refine filters"}
              </Button>
            </ButtonGroup>
          </EmptyContent>
        </Empty>
        <div className="max-w-md sm:max-w-136 w-full">
          <div className="flex flex-col gap-3 items-start w-full">
            <p className="text-muted-foreground text-sm">
              {"Try these searches"}
            </p>
            <div className="flex flex-wrap gap-2 items-center justify-start">
              <Button className="gap-2 rounded-full" type="button" tabIndex="0">
                {"\"meeting transcript\""}
              </Button>
              <Button className="gap-2 rounded-full" type="button" tabIndex="0">
                {"#launch-plan"}
              </Button>
              <Button className="gap-2 rounded-full" type="button" tabIndex="0">
                {"\"handoff notes\""}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
