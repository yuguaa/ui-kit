import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-5xl min-h-svh p-6 w-full">
      <Frame className="w-full">
        <FramePanel className="p-0!">
          <div className="flex flex-col items-stretch md:flex-row overflow-hidden">
            <div className="border-b border-border/60 flex flex-col gap-2 justify-between last:border-0 md:border-r md:gap-4 p-4">
              <h3 className="m-0 text-muted-foreground text-sm">
                {"Passing Controls"}
              </h3>
              <div className="flex gap-1.5 items-center">
                <div className="[&_svg]:size-4">
                  <svg className="lucide lucide-loader-circle size-4 text-green-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Loader2Icon" tabler="IconLoader" hugeicons="Loading03Icon" phosphor="SpinnerIcon" remixicon="RiLoaderLine" aria-hidden="true">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                  </svg>
                </div>
                <div className="flex gap-0.5 items-baseline">
                  <span className="text-sm">
                    {"92% - 42"}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {"/73 controls"}
                  </span>
                </div>
              </div>
            </div>
            <div className="border-b border-border/60 flex flex-col gap-2 justify-between last:border-0 md:border-r md:gap-4 p-4">
              <h3 className="m-0 text-muted-foreground text-sm">
                {"Open Tickets"}
              </h3>
              <div className="flex gap-1.5 items-center">
                <div className="[&_svg]:size-4">
                  <svg className="lucide lucide-message-square size-4 text-sky-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                    <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="flex gap-0.5 items-baseline">
                  <span className="text-sm">
                    {"22% - 16"}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {"/74 tickets"}
                  </span>
                </div>
              </div>
            </div>
            <div className="border-b border-border/60 flex flex-col gap-2 justify-between last:border-0 md:border-r md:gap-4 p-4">
              <h3 className="m-0 text-muted-foreground text-sm">
                {"Critical Issues"}
              </h3>
              <div className="flex gap-1.5 items-center">
                <div className="[&_svg]:size-4">
                  <svg className="lucide lucide-circle-x size-4 text-rose-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m15 9-6 6"></path>
                    <path d="m9 9 6 6"></path>
                  </svg>
                </div>
                <div className="flex gap-0.5 items-baseline">
                  <span className="text-sm">
                    {"5% - 6"}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {"/107 issues"}
                  </span>
                </div>
              </div>
            </div>
            <div className="border-b border-border/60 flex flex-col gap-2 justify-between last:border-0 md:border-r md:gap-4 p-4">
              <h3 className="m-0 text-muted-foreground text-sm">
                {"Verified Findings"}
              </h3>
              <div className="flex gap-1.5 items-center">
                <div className="[&_svg]:size-4">
                  <svg className="lucide lucide-calendar-check size-4 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarCheckIcon" tabler="IconCalendarCheck" hugeicons="CalendarCheckIn01Icon" phosphor="CalendarCheckIcon" remixicon="RiCalendarCheckLine" aria-hidden="true">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                    <path d="m9 16 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="flex gap-0.5 items-baseline">
                  <span className="text-sm">
                    {"64% - 68"}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {"/107"}
                  </span>
                </div>
              </div>
            </div>
            <div className="border-b border-border/60 flex flex-1 flex-col gap-2 isolate justify-between last:border-0 md:border-r md:gap-4 p-4 relative">
              <div className="[--card-dot-pattern-fill:var(--color-foreground)] [--card-dot-pattern-opacity:0.12] absolute dark:[--card-dot-pattern-opacity:0.2] inset-0 pointer-events-none z-0" aria-hidden="true">
                <svg className="size-full" viewBox="0 0 240 136" fill="none" preserveAspectRatio="none" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg" style={{opacity: "var(--card-dot-pattern-opacity)"}}>
                  <defs>
                    <mask id="_r_0_-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="240" height="136" style={{maskType: "alpha"}}>
                      <rect width="240" height="136" fill="url(#_r_0_-gradient)"></rect>
                    </mask>
                    <lineargradient id="_r_0_-gradient" x1="240" y1="0" x2="156.1387" y2="95.7483" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"></stop>
                      <stop offset="0.538873" stopColor="white"></stop>
                      <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                    </lineargradient>
                    <pattern id="_r_0_-pattern" patternUnits="userSpaceOnUse" patterntransform="matrix(48 0 0 48 0 0)" preserveAspectRatio="none" viewBox="0 0 48 48" width="1" height="1">
                      <g fill="var(--card-dot-pattern-fill)">
                        <rect x="0" y="0" width="2" height="2" fillOpacity="0.216"></rect>
                        <rect x="4" y="0" width="2" height="2" fillOpacity="0.489"></rect>
                        <rect x="8" y="0" width="2" height="2" fillOpacity="0.366"></rect>
                        <rect x="12" y="0" width="2" height="2" fillOpacity="0.305"></rect>
                        <rect x="16" y="0" width="2" height="2" fillOpacity="0.514"></rect>
                        <rect x="20" y="0" width="2" height="2" fillOpacity="0.129"></rect>
                        <rect x="24" y="0" width="2" height="2" fillOpacity="0.431"></rect>
                        <rect x="28" y="0" width="2" height="2" fillOpacity="0.142"></rect>
                        <rect x="32" y="0" width="2" height="2" fillOpacity="0.288"></rect>
                        <rect x="36" y="0" width="2" height="2" fillOpacity="0.144"></rect>
                        <rect x="40" y="0" width="2" height="2" fillOpacity="0.313"></rect>
                        <rect x="44" y="0" width="2" height="2" fillOpacity="0.214"></rect>
                        <rect x="0" y="4" width="2" height="2" fillOpacity="0.4"></rect>
                        <rect x="4" y="4" width="2" height="2" fillOpacity="0.13"></rect>
                        <rect x="8" y="4" width="2" height="2" fillOpacity="0.498"></rect>
                        <rect x="12" y="4" width="2" height="2" fillOpacity="0.473"></rect>
                        <rect x="16" y="4" width="2" height="2" fillOpacity="0.386"></rect>
                        <rect x="20" y="4" width="2" height="2" fillOpacity="0.248"></rect>
                        <rect x="24" y="4" width="2" height="2" fillOpacity="0.168"></rect>
                        <rect x="28" y="4" width="2" height="2" fillOpacity="0.193"></rect>
                        <rect x="32" y="4" width="2" height="2" fillOpacity="0.528"></rect>
                        <rect x="36" y="4" width="2" height="2" fillOpacity="0.307"></rect>
                        <rect x="40" y="4" width="2" height="2" fillOpacity="0.314"></rect>
                        <rect x="44" y="4" width="2" height="2" fillOpacity="0.444"></rect>
                        <rect x="0" y="8" width="2" height="2" fillOpacity="0.33"></rect>
                        <rect x="4" y="8" width="2" height="2" fillOpacity="0.438"></rect>
                        <rect x="8" y="8" width="2" height="2" fillOpacity="0.477"></rect>
                        <rect x="12" y="8" width="2" height="2" fillOpacity="0.434"></rect>
                        <rect x="16" y="8" width="2" height="2" fillOpacity="0.47"></rect>
                        <rect x="20" y="8" width="2" height="2" fillOpacity="0.383"></rect>
                        <rect x="24" y="8" width="2" height="2" fillOpacity="0.514"></rect>
                        <rect x="28" y="8" width="2" height="2" fillOpacity="0.287"></rect>
                        <rect x="32" y="8" width="2" height="2" fillOpacity="0.346"></rect>
                        <rect x="36" y="8" width="2" height="2" fillOpacity="0.52"></rect>
                        <rect x="40" y="8" width="2" height="2" fillOpacity="0.524"></rect>
                        <rect x="44" y="8" width="2" height="2" fillOpacity="0.126"></rect>
                        <rect x="0" y="12" width="2" height="2" fillOpacity="0.259"></rect>
                        <rect x="4" y="12" width="2" height="2" fillOpacity="0.281"></rect>
                        <rect x="8" y="12" width="2" height="2" fillOpacity="0.311"></rect>
                        <rect x="12" y="12" width="2" height="2" fillOpacity="0.212"></rect>
                        <rect x="16" y="12" width="2" height="2" fillOpacity="0.524"></rect>
                        <rect x="20" y="12" width="2" height="2" fillOpacity="0.353"></rect>
                        <rect x="24" y="12" width="2" height="2" fillOpacity="0.34"></rect>
                        <rect x="28" y="12" width="2" height="2" fillOpacity="0.417"></rect>
                        <rect x="32" y="12" width="2" height="2" fillOpacity="0.258"></rect>
                        <rect x="36" y="12" width="2" height="2" fillOpacity="0.158"></rect>
                        <rect x="40" y="12" width="2" height="2" fillOpacity="0.388"></rect>
                        <rect x="44" y="12" width="2" height="2" fillOpacity="0.184"></rect>
                        <rect x="0" y="16" width="2" height="2" fillOpacity="0.491"></rect>
                        <rect x="4" y="16" width="2" height="2" fillOpacity="0.417"></rect>
                        <rect x="8" y="16" width="2" height="2" fillOpacity="0.231"></rect>
                        <rect x="12" y="16" width="2" height="2" fillOpacity="0.209"></rect>
                        <rect x="16" y="16" width="2" height="2" fillOpacity="0.305"></rect>
                        <rect x="20" y="16" width="2" height="2" fillOpacity="0.287"></rect>
                        <rect x="24" y="16" width="2" height="2" fillOpacity="0.353"></rect>
                        <rect x="28" y="16" width="2" height="2" fillOpacity="0.513"></rect>
                        <rect x="32" y="16" width="2" height="2" fillOpacity="0.483"></rect>
                        <rect x="36" y="16" width="2" height="2" fillOpacity="0.455"></rect>
                        <rect x="40" y="16" width="2" height="2" fillOpacity="0.483"></rect>
                        <rect x="44" y="16" width="2" height="2" fillOpacity="0.189"></rect>
                        <rect x="0" y="20" width="2" height="2" fillOpacity="0.264"></rect>
                        <rect x="4" y="20" width="2" height="2" fillOpacity="0.295"></rect>
                        <rect x="8" y="20" width="2" height="2" fillOpacity="0.51"></rect>
                        <rect x="12" y="20" width="2" height="2" fillOpacity="0.305"></rect>
                        <rect x="16" y="20" width="2" height="2" fillOpacity="0.438"></rect>
                        <rect x="20" y="20" width="2" height="2" fillOpacity="0.289"></rect>
                        <rect x="24" y="20" width="2" height="2" fillOpacity="0.322"></rect>
                        <rect x="28" y="20" width="2" height="2" fillOpacity="0.196"></rect>
                        <rect x="32" y="20" width="2" height="2" fillOpacity="0.486"></rect>
                        <rect x="36" y="20" width="2" height="2" fillOpacity="0.388"></rect>
                        <rect x="40" y="20" width="2" height="2" fillOpacity="0.489"></rect>
                        <rect x="44" y="20" width="2" height="2" fillOpacity="0.208"></rect>
                        <rect x="0" y="24" width="2" height="2" fillOpacity="0.239"></rect>
                        <rect x="4" y="24" width="2" height="2" fillOpacity="0.463"></rect>
                        <rect x="8" y="24" width="2" height="2" fillOpacity="0.539"></rect>
                        <rect x="12" y="24" width="2" height="2" fillOpacity="0.408"></rect>
                        <rect x="16" y="24" width="2" height="2" fillOpacity="0.527"></rect>
                        <rect x="20" y="24" width="2" height="2" fillOpacity="0.357"></rect>
                        <rect x="24" y="24" width="2" height="2" fillOpacity="0.362"></rect>
                        <rect x="28" y="24" width="2" height="2" fillOpacity="0.151"></rect>
                        <rect x="32" y="24" width="2" height="2" fillOpacity="0.324"></rect>
                        <rect x="36" y="24" width="2" height="2" fillOpacity="0.347"></rect>
                        <rect x="40" y="24" width="2" height="2" fillOpacity="0.299"></rect>
                        <rect x="44" y="24" width="2" height="2" fillOpacity="0.127"></rect>
                        <rect x="0" y="28" width="2" height="2" fillOpacity="0.476"></rect>
                        <rect x="4" y="28" width="2" height="2" fillOpacity="0.461"></rect>
                        <rect x="8" y="28" width="2" height="2" fillOpacity="0.377"></rect>
                        <rect x="12" y="28" width="2" height="2" fillOpacity="0.415"></rect>
                        <rect x="16" y="28" width="2" height="2" fillOpacity="0.217"></rect>
                        <rect x="20" y="28" width="2" height="2" fillOpacity="0.297"></rect>
                        <rect x="24" y="28" width="2" height="2" fillOpacity="0.258"></rect>
                        <rect x="28" y="28" width="2" height="2" fillOpacity="0.296"></rect>
                        <rect x="32" y="28" width="2" height="2" fillOpacity="0.276"></rect>
                        <rect x="36" y="28" width="2" height="2" fillOpacity="0.182"></rect>
                        <rect x="40" y="28" width="2" height="2" fillOpacity="0.422"></rect>
                        <rect x="44" y="28" width="2" height="2" fillOpacity="0.392"></rect>
                        <rect x="0" y="32" width="2" height="2" fillOpacity="0.273"></rect>
                        <rect x="4" y="32" width="2" height="2" fillOpacity="0.143"></rect>
                        <rect x="8" y="32" width="2" height="2" fillOpacity="0.338"></rect>
                        <rect x="12" y="32" width="2" height="2" fillOpacity="0.264"></rect>
                        <rect x="16" y="32" width="2" height="2" fillOpacity="0.218"></rect>
                        <rect x="20" y="32" width="2" height="2" fillOpacity="0.29"></rect>
                        <rect x="24" y="32" width="2" height="2" fillOpacity="0.336"></rect>
                        <rect x="28" y="32" width="2" height="2" fillOpacity="0.313"></rect>
                        <rect x="32" y="32" width="2" height="2" fillOpacity="0.514"></rect>
                        <rect x="36" y="32" width="2" height="2" fillOpacity="0.289"></rect>
                        <rect x="40" y="32" width="2" height="2" fillOpacity="0.25"></rect>
                        <rect x="44" y="32" width="2" height="2" fillOpacity="0.507"></rect>
                        <rect x="0" y="36" width="2" height="2" fillOpacity="0.346"></rect>
                        <rect x="4" y="36" width="2" height="2" fillOpacity="0.208"></rect>
                        <rect x="8" y="36" width="2" height="2" fillOpacity="0.313"></rect>
                        <rect x="12" y="36" width="2" height="2" fillOpacity="0.365"></rect>
                        <rect x="16" y="36" width="2" height="2" fillOpacity="0.491"></rect>
                        <rect x="20" y="36" width="2" height="2" fillOpacity="0.121"></rect>
                        <rect x="24" y="36" width="2" height="2" fillOpacity="0.472"></rect>
                        <rect x="28" y="36" width="2" height="2" fillOpacity="0.281"></rect>
                        <rect x="32" y="36" width="2" height="2" fillOpacity="0.297"></rect>
                        <rect x="36" y="36" width="2" height="2" fillOpacity="0.33"></rect>
                        <rect x="40" y="36" width="2" height="2" fillOpacity="0.463"></rect>
                        <rect x="44" y="36" width="2" height="2" fillOpacity="0.447"></rect>
                        <rect x="0" y="40" width="2" height="2" fillOpacity="0.217"></rect>
                        <rect x="4" y="40" width="2" height="2" fillOpacity="0.467"></rect>
                        <rect x="8" y="40" width="2" height="2" fillOpacity="0.297"></rect>
                        <rect x="12" y="40" width="2" height="2" fillOpacity="0.303"></rect>
                        <rect x="16" y="40" width="2" height="2" fillOpacity="0.497"></rect>
                        <rect x="20" y="40" width="2" height="2" fillOpacity="0.201"></rect>
                        <rect x="24" y="40" width="2" height="2" fillOpacity="0.5"></rect>
                        <rect x="28" y="40" width="2" height="2" fillOpacity="0.458"></rect>
                        <rect x="32" y="40" width="2" height="2" fillOpacity="0.165"></rect>
                        <rect x="36" y="40" width="2" height="2" fillOpacity="0.36"></rect>
                        <rect x="40" y="40" width="2" height="2" fillOpacity="0.329"></rect>
                        <rect x="44" y="40" width="2" height="2" fillOpacity="0.419"></rect>
                        <rect x="0" y="44" width="2" height="2" fillOpacity="0.47"></rect>
                        <rect x="4" y="44" width="2" height="2" fillOpacity="0.161"></rect>
                        <rect x="8" y="44" width="2" height="2" fillOpacity="0.191"></rect>
                        <rect x="12" y="44" width="2" height="2" fillOpacity="0.341"></rect>
                        <rect x="16" y="44" width="2" height="2" fillOpacity="0.279"></rect>
                        <rect x="20" y="44" width="2" height="2" fillOpacity="0.387"></rect>
                        <rect x="24" y="44" width="2" height="2" fillOpacity="0.173"></rect>
                        <rect x="28" y="44" width="2" height="2" fillOpacity="0.537"></rect>
                        <rect x="32" y="44" width="2" height="2" fillOpacity="0.218"></rect>
                        <rect x="36" y="44" width="2" height="2" fillOpacity="0.368"></rect>
                        <rect x="40" y="44" width="2" height="2" fillOpacity="0.5"></rect>
                        <rect x="44" y="44" width="2" height="2" fillOpacity="0.414"></rect>
                      </g>
                    </pattern>
                  </defs>
                  <g mask="url(#_r_0_-mask)">
                    <rect width="240" height="136" fill="url(#_r_0_-pattern)"></rect>
                  </g>
                </svg>
              </div>
              <div className="flex flex-col gap-2 justify-between md:gap-4 relative z-10">
                <h3 className="m-0 text-muted-foreground text-sm">
                  {"Team"}
                </h3>
                <AvatarGroup>
                  <Avatar className="size-6" size="default">
                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar className="size-6" size="default">
                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar className="size-6" size="default">
                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <AvatarGroupCount className="border size-6 text-[10px]">
                    {"+1"}
                  </AvatarGroupCount>
                </AvatarGroup>
              </div>
            </div>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}
