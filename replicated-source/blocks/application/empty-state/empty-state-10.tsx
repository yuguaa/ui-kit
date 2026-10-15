import { IconStack } from "@/registry-neui/bases/base/neui/icon-stack"
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
      <div className="flex flex-col gap-3 max-w-2xl w-full">
        <div className="flex flex-col gap-1 max-w-xl">
          <h1 className="font-semibold sm:text-2xl text-xl tracking-tight">
            {"Blueprint Library"}
          </h1>
          <p className="text-muted-foreground text-xs/5">
            {"Turn repeatable launches, onboarding flows, and reports into reusable project blueprints."}
          </p>
        </div>
        <Card size="sm">
          <CardContent className="flex items-center justify-center min-h-[208px] py-5 sm:py-6">
            <Empty className="border-none flex-none gap-3.5 justify-start max-w-xl md:flex-row md:gap-4 p-0 text-left">
              <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-empty-media cn-empty-media-default flex items-center justify-center mb-0 md:w-28 shrink-0 w-full" data-variant="default">
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
                    <svg className="lucide lucide-layout-template" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutTemplateIcon" tabler="IconTemplate" hugeicons="DashboardSquare01Icon" phosphor="SquaresFourIcon" remixicon="RiLayout2Line" aria-hidden="true">
                      <rect width="18" height="7" x="3" y="3" rx="1"></rect>
                      <rect width="9" height="7" x="3" y="14" rx="1"></rect>
                      <rect width="5" height="7" x="16" y="14" rx="1"></rect>
                    </svg>
                  </div>
                </IconStack>
              </div>
              <div className="flex flex-1 flex-col gap-2.5 items-start min-w-0">
                <EmptyHeader className="gap-1.5 items-start max-w-96 text-left">
                  <EmptyTitle className="font-semibold text-base tracking-tight">
                    {"No blueprints yet"}
                  </EmptyTitle>
                  <EmptyDescription className="text-sm/6">
                    {"Create a reusable starting point so every new project starts structured."}
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent className="flex-row flex-wrap gap-2 justify-start max-w-none">
                  <Button type="button" tabIndex="0">
                    {"Create blueprint"}
                  </Button>
                  <Button type="button" tabIndex="0">
                    {"Import blueprint"}
                  </Button>
                </EmptyContent>
              </div>
            </Empty>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
