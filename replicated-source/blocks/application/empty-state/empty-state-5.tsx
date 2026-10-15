import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
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
    <div className="flex items-center justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <Frame className="max-w-4xl mx-auto w-full">
        <FramePanel className="p-0! shadow-none!">
          <div className="grid grid-cols-1 items-center lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] min-h-[440px]">
            <div className="flex items-center lg:pr-5 min-w-0 px-7 py-8 sm:px-9 sm:py-10">
              <Empty className="gap-6 items-start text-left">
                <EmptyHeader className="gap-4 items-start max-w-md text-left">
                  <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-empty-media cn-empty-media-icon flex items-center justify-center mb-0 self-start shrink-0" data-variant="icon">
                    <svg className="lucide lucide-layers" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <EmptyTitle className="font-semibold sm:text-2xl text-xl tracking-tight">
                      {"No Brief Is Ready Yet"}
                    </EmptyTitle>
                    <EmptyDescription className="text-sm/relaxed">
                      <span className="block">
                        {"Pull open signals, notes, and decisions into one"}
                      </span>
                      <span className="block">
                        {"clear brief before the review starts."}
                      </span>
                    </EmptyDescription>
                  </div>
                </EmptyHeader>
                <EmptyContent className="gap-0 items-start max-w-none text-left">
                  <div className="flex gap-2 items-center max-[420px]:flex-wrap w-full">
                    <Button type="button" tabIndex={0} extracted="1">
                      <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" data-icon="inline-start" aria-hidden="true">
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                        <path d="M20 2v4"></path>
                        <path d="M22 4h-4"></path>
                        <circle cx={4} cy={20} r={2}></circle>
                      </svg>
                      {"Draft Brief"}
                    </Button>
                    <Button type="button" tabIndex={0}>
                      <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" data-icon="inline-start" aria-hidden="true">
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx={11} cy={11} r={8}></circle>
                      </svg>
                      {"Browse Signals"}
                    </Button>
                  </div>
                </EmptyContent>
              </Empty>
            </div>
            <div className="-mb-30 -mr-10 bg-muted/10 flex items-end lg:pl-0 min-w-0 pb-0 pt-2 px-6 sm:px-7">
              <div className="bg-background border border-border/60 flex lg:min-h-[420px] min-h-[350px] min-w-[450px] overflow-hidden rounded-xl shadow-black/5 shadow-lg sm:min-h-[360px]"></div>
            </div>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}
