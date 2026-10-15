import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
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
      <Card className="max-w-4xl mx-auto overflow-hidden p-0 relative shadow-xs w-full" size="default">
        <CardContent className="overflow-hidden p-0">
          <div className="grid grid-cols-1 items-center lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] min-h-[440px]">
            <div className="flex items-center lg:pr-5 min-w-0 px-7 py-8 sm:px-9 sm:py-10">
              <Empty className="gap-6 items-start text-left">
                <EmptyHeader className="gap-4 items-start max-w-md text-left">
                  <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-empty-media cn-empty-media-icon flex items-center justify-center mb-0 self-start shrink-0" data-variant="icon">
                    <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                      <path d="M18 17V9"></path>
                      <path d="M13 17V5"></path>
                      <path d="M8 17v-3"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <EmptyTitle className="font-semibold sm:text-2xl text-xl tracking-tight">
                      {"No reports for this workspace"}
                    </EmptyTitle>
                    <EmptyDescription className="text-sm/relaxed">
                      <span className="block">
                        {"Create your first report to turn tracked companies"}
                      </span>
                      <span className="block">
                        {"into one clear view your team can share."}
                      </span>
                    </EmptyDescription>
                  </div>
                </EmptyHeader>
                <EmptyContent className="gap-0 items-start max-w-none text-left">
                  <div className="flex gap-2 items-center max-[420px]:flex-wrap w-full">
                    <Button type="button" tabIndex="0" extracted="1">
                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                      {"Add report"}
                    </Button>
                    <Button type="button" tabIndex="0">
                      <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" data-icon="inline-start" aria-hidden="true">
                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      {"View sample"}
                    </Button>
                  </div>
                </EmptyContent>
              </Empty>
            </div>
            <div className="-mb-30 -mr-10 bg-muted/10 flex items-end lg:pl-0 min-w-0 ml-auto pb-0 pt-2 px-6 sm:px-7">
              <div className="bg-background border border-border/60 flex lg:min-h-[420px] min-h-[350px] min-w-[450px] overflow-hidden rounded-xl shadow-black/5 shadow-lg sm:min-h-[360px]"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
