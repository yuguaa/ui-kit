import { IconStack } from "@/registry-neui/bases/base/neui/icon-stack"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <div className="max-w-3xl w-full">
        <div className="flex flex-col gap-4">
          <header className="flex flex-col gap-1">
            <h1 className="font-semibold text-2xl tracking-tight">
              {"Projects"}
            </h1>
            <p className="max-w-lg text-muted-foreground text-sm/relaxed">
              {"Manage the shared project fields your workspace uses to stay organized."}
            </p>
          </header>
          <Tabs className="gap-3 p-0 w-full" data-orientation="horizontal" activationDirection="none">
            <div>
              <ScrollArea className="[&>[data-slot=scroll-area-scrollbar][data-orientation=vertical]]:hidden w-full whitespace-nowrap" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_0_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                  <div className="min-w-max">
                    <TabsList className="border-b border-border gap-5 h-auto justify-start p-0 py-1 w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line" aria-label="Project settings sections">
                      <TabsTrigger className="flex-none gap-2 justify-start px-0 py-1.5" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_1_" compositeItemActive="" aria-controls="base-ui-_r_3_">
                        <span className="truncate">
                          {"Project states"}
                        </span>
                      </TabsTrigger>
                      <TabsTrigger className="flex-none gap-2 justify-start px-0 py-1.5" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_2_">
                        <span className="truncate">
                          {"Project labels"}
                        </span>
                      </TabsTrigger>
                    </TabsList>
                  </div>
                </div>
              </ScrollArea>
            </div>
            <div className="min-w-0">
              <TabsContent className="mt-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_3_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_1_">
                <div className="flex flex-col">
                  <Empty className="justify-start md:pt-6 min-h-72 pt-5 px-0">
                    <EmptyHeader className="gap-4.5 items-start max-w-84 text-left">
                      <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-empty-media cn-empty-media-default flex items-center justify-center mb-0 shrink-0" data-variant="default">
                        <IconStack aria-hidden="true" style={{"--icon-stack-content-x": "71%", "--icon-stack-content-y": "58%"}}>
                          <svg className="h-full overflow-visible w-full" aria-hidden="true" viewBox="0 0 72 81" fill="none">
                            <ellipse className="blur-[4px]" cx="36" cy="76" rx="30" ry="7" fill="currentColor" fillOpacity="0.055"></ellipse>
                            <g opacity="0.4" transform="translate(0 0)">
                              <path d="M42.2538 2.046C41.4408 1.6325 40.3965 1.6677 39.2612 2.2424L7.9616 18.1934C5.3895 19.5039 3.301 23.1064 3.301 26.2322V64.3226C3.301 66.0677 3.9458 67.2943 4.962 67.8199L1.8363 66.229C0.8201 65.7104 0.1753 64.4771 0.1753 62.732V24.6412C0.1753 21.5085 2.2638 17.913 4.8359 16.6024L36.1355 0.6515C37.2778 0.0698 38.322 0.0416 39.128 0.4551L42.2538 2.046Z" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M42.2545 2.0456C43.2707 2.5643 43.9155 3.7979 43.9155 5.543V43.6337C43.9155 46.7665 41.827 50.3616 39.2549 51.6722L7.9554 67.6235C6.813 68.2052 5.7687 68.2331 4.9628 67.8196C3.9465 67.301 3.3018 66.0673 3.3018 64.3222V26.2318C3.3018 23.0991 5.3903 19.5036 7.9624 18.193L39.2619 2.2421C40.4043 1.6604 41.4486 1.6321 42.2545 2.0456Z" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </g>
                            <g opacity="0.6" transform="translate(13.65 6.04)">
                              <path d="M42.2538 2.046C41.4408 1.6325 40.3965 1.6677 39.2612 2.2424L7.9616 18.1934C5.3895 19.5039 3.301 23.1064 3.301 26.2322V64.3226C3.301 66.0677 3.9458 67.2943 4.962 67.8199L1.8363 66.229C0.8201 65.7104 0.1753 64.4771 0.1753 62.732V24.6412C0.1753 21.5085 2.2638 17.913 4.8359 16.6024L36.1355 0.6515C37.2778 0.0698 38.322 0.0416 39.128 0.4551L42.2538 2.046Z" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M42.2545 2.0456C43.2707 2.5643 43.9155 3.7979 43.9155 5.543V43.6337C43.9155 46.7665 41.827 50.3616 39.2549 51.6722L7.9554 67.6235C6.813 68.2052 5.7687 68.2331 4.9628 67.8196C3.9465 67.301 3.3018 66.0673 3.3018 64.3222V26.2318C3.3018 23.0991 5.3903 19.5036 7.9624 18.193L39.2619 2.2421C40.4043 1.6604 41.4486 1.6321 42.2545 2.0456Z" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </g>
                            <g opacity="0.8" transform="translate(27.32 12.08)">
                              <path d="M42.2538 2.046C41.4408 1.6325 40.3965 1.6677 39.2612 2.2424L7.9616 18.1934C5.3895 19.5039 3.301 23.1064 3.301 26.2322V64.3226C3.301 66.0677 3.9458 67.2943 4.962 67.8199L1.8363 66.229C0.8201 65.7104 0.1753 64.4771 0.1753 62.732V24.6412C0.1753 21.5085 2.2638 17.913 4.8359 16.6024L36.1355 0.6515C37.2778 0.0698 38.322 0.0416 39.128 0.4551L42.2538 2.046Z" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M42.2545 2.0456C43.2707 2.5643 43.9155 3.7979 43.9155 5.543V43.6337C43.9155 46.7665 41.827 50.3616 39.2549 51.6722L7.9554 67.6235C6.813 68.2052 5.7687 68.2331 4.9628 67.8196C3.9465 67.301 3.3018 66.0673 3.3018 64.3222V26.2318C3.3018 23.0991 5.3903 19.5036 7.9624 18.193L39.2619 2.2421C40.4043 1.6604 41.4486 1.6321 42.2545 2.0456Z" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </g>
                          </svg>
                          <div className="-skew-y-26 -translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[var(--icon-stack-content-x)] pointer-events-none scale-x-90 text-muted-foreground top-[var(--icon-stack-content-y)]">
                            <svg className="lucide lucide-target" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TargetIcon" tabler="IconTarget" hugeicons="Target01Icon" phosphor="TargetIcon" remixicon="RiFocus3Line" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <circle cx="12" cy="12" r="6"></circle>
                              <circle cx="12" cy="12" r="2"></circle>
                            </svg>
                          </div>
                        </IconStack>
                      </div>
                      <div className="flex flex-col gap-3.5 items-start">
                        <div className="flex flex-col gap-2">
                          <EmptyTitle className="font-semibold text-lg tracking-tight">
                            {"Set up project states"}
                          </EmptyTitle>
                          <EmptyDescription className="text-sm/relaxed">
                            {"Create a shared stage system so every project follows the same progress flow."}
                          </EmptyDescription>
                        </div>
                        <Button type="button" tabIndex="0">
                          {"Enable"}
                        </Button>
                      </div>
                    </EmptyHeader>
                  </Empty>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
