import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-4xl min-h-svh p-6 w-full">
      <Frame className="-translate-y-2 max-w-[552px] w-full" spacing="xs">
        <FramePanel className="[--chart-distance:oklch(0.57_0.15_181)] bg-card h-[220px] p-0 text-card-foreground">
          <Tabs className="gap-0 h-full relative" data-orientation="horizontal" activationDirection="none">
            <div className="flex flex-col gap-4 pt-6 px-6 relative sm:flex-row sm:items-start sm:justify-between z-10">
              <div className="flex gap-2.5 items-center min-w-0">
                <div className="bg-[oklch(0.62_0.15_181)] flex isolate items-center justify-center overflow-hidden relative rounded-md shadow-[0_1px_3px_0_rgba(0,0,0,0.16)] shrink-0 size-10" aria-hidden="true">
                  <span className="absolute bg-[radial-gradient(65%_65%_at_36%_18%,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0)_72%)] inset-0 pointer-events-none"></span>
                  <svg className="relative size-6 text-white z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={6.5} cy={16.5} r={2.6} stroke="currentColor" strokeWidth={1.8}></circle>
                    <circle cx={17.5} cy={16.5} r={2.6} stroke="currentColor" strokeWidth={1.8}></circle>
                    <path d="M6.5 16.5 10.2 9.2h3.1l4.2 7.3m-7.3-7.3 3.1 7.3m-3.1-7.3-1.7-2.5h-2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}></path>
                    <path d="M14.2 7.2h3.1" stroke="currentColor" strokeLinecap="round" strokeWidth={1.8}></path>
                  </svg>
                </div>
                <div className="flex gap-1.5 items-baseline min-w-0">
                  <span className="font-medium text-2xl">
                    {"1,562"}
                  </span>
                  <span className="font-medium text-2xl text-muted-foreground/45">
                    {"km"}
                  </span>
                </div>
              </div>
              <TabsList className="min-[520px]:w-[184px] w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_0_" compositeItemActive="" aria-controls="base-ui-_r_3_" extracted="1">
                  {"Week"}
                </TabsTrigger>
                <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_1_">
                  {"Month"}
                </TabsTrigger>
                <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_2_">
                  {"Year"}
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="absolute bottom-0 h-[134px] inset-x-0">
              <TabsContent className="h-full m-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_3_" role="tabpanel" tabIndex={0} index="0" aria-labelledby="base-ui-_r_0_">
                <svg className="size-full" viewBox="0 0 552 118" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="_r_4_-dots" width={5} height={5} patternUnits="userSpaceOnUse">
                      <circle cx={1} cy={1} r={0.55} fill="var(--chart-distance)" fillOpacity={0.18}></circle>
                    </pattern>
                  </defs>
                  <path d="M0 76 L12 76 L23 86 L35 73 L48 67 L61 66 L73 76 L84 71 L94 60 L108 60 L119 70 L131 70 L142 74 L154 75 L165 80 L178 80 L190 72 L201 82 L214 82 L226 70 L239 70 L252 74 L265 74 L277 60 L289 72 L302 72 L315 50 L328 60 L340 58 L352 49 L364 37 L376 37 L386 26 L397 47 L410 47 L422 58 L435 50 L447 50 L459 39 L470 48 L481 71 L493 60 L506 60 L518 26 L529 48 L541 48 L552 59 L552 118 L0 118 Z" fill="url(#_r_4_-dots)"></path>
                  <path d="M0 76 L12 76 L23 86 L35 73 L48 67 L61 66 L73 76 L84 71 L94 60 L108 60 L119 70 L131 70 L142 74 L154 75 L165 80 L178 80 L190 72 L201 82 L214 82 L226 70 L239 70 L252 74 L265 74 L277 60 L289 72 L302 72 L315 50 L328 60 L340 58 L352 49 L364 37 L376 37 L386 26 L397 47 L410 47 L422 58 L435 50 L447 50 L459 39 L470 48 L481 71 L493 60 L506 60 L518 26 L529 48 L541 48 L552 59" fill="none" stroke="var(--chart-distance)" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={2} vector-effect="non-scaling-stroke"></path>
                </svg>
              </TabsContent>
            </div>
          </Tabs>
        </FramePanel>
      </Frame>
    </div>
  )
}
