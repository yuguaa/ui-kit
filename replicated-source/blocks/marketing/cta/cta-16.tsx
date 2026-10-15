import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="@container bg-background text-foreground w-full" aria-labelledby="cta-16-title">
        <div className="flex justify-center max-w-[90rem] mx-auto px-[clamp(1rem,5.56cqw,5rem)] py-12 w-full">
          <Card className="@container bg-background dark isolate max-w-7xl overflow-clip py-0 relative shadow-2xl text-base w-full" size="default">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'3'%20height%3D'3'%20shape-rendering%3D'crispEdges'%3E%3Crect%20x%3D'1'%20y%3D'1'%20width%3D'1'%20height%3D'1'%20fill%3D'white'%20fill-opacity%3D'0.07'%2F%3E%3C%2Fsvg%3E\")", backgroundSize: "3px 3px"}}></div>
            <div className="-left-25 -top-25 absolute bg-sky-500/8 blur-[100px] pointer-events-none rounded-full size-100" aria-hidden="true"></div>
            <div className="@min-[480px]:p-8 @min-[900px]:flex-row @min-[900px]:gap-8 @min-[900px]:items-center @min-[900px]:p-12 flex flex-col gap-6 p-6 relative">
              <div className="flex flex-1 flex-col gap-4 min-w-0">
                <h2 className="@min-[480px]:text-4xl font-semibold leading-10 text-3xl text-balance text-gray-200" id="cta-16-title">
                  {"Build Faster with NeUI"}
                </h2>
                <p className="leading-6 text-base text-muted-foreground text-pretty">
                  {"Production-ready blocks and components for building polished modern apps faster."}
                </p>
              </div>
              <div className="@min-[900px]:justify-end @min-[900px]:shrink-0 @min-[900px]:w-80 flex flex-wrap gap-x-4 gap-y-2 items-center">
                <Button href="#" role="button" tabIndex="0">
                  <svg className="lucide lucide-message-square size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                    <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                  </svg>
                  {"Contact Us"}
                </Button>
                <Button href="#" role="button" tabIndex="0">
                  <svg className="lucide lucide-calendar-days size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                    <path d="M8 14h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 18h.01"></path>
                    <path d="M12 18h.01"></path>
                    <path d="M16 18h.01"></path>
                  </svg>
                  {"Book a Call"}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
