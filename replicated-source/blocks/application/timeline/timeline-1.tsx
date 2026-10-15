import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/registry-neui/bases/radix/neui/timeline"
import {
  Avatar,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
import { Spinner } from "@/registry/bases/base/ui/spinner"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <section className="max-w-xl w-full" aria-labelledby="timeline-title">
        <div className="mb-6 space-y-1">
          <h1 className="font-semibold text-xl" id="timeline-title">
            {"Activation Timeline"}
          </h1>
          <p className="leading-5 text-muted-foreground text-sm">
            {"Track onboarding milestones."}
          </p>
        </div>
        <Timeline data-orientation="vertical">
          <TimelineItem className="ms-10 pb-10" completed="true">
            <TimelineHeader>
              <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
              <div className="flex flex-wrap gap-2 items-center">
                <TimelineTitle className="font-semibold">
                  {"Contract Signed"}
                </TimelineTitle>
              </div>
              <TimelineIndicator className="bg-muted border-none flex group-data-[orientation=vertical]/timeline:-left-7 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground items-center justify-center size-6 text-muted-foreground" aria-hidden="true">
                <svg className="lucide lucide-check size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </TimelineIndicator>
            </TimelineHeader>
            <TimelineContent className="mt-2">
              <Frame spacing="sm">
                <Collapsible className="group/collapsible" data-closed="">
                  <Collapsible>
                  <CollapsibleTrigger className="flex w-full" type="button" tabIndex={0} aria-disabled="false" aria-expanded="false" aria-label="Toggle Contract Signed details" extracted="1">
                    <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="flex gap-2 items-center min-w-0">
                        <Avatar className="size-5" size="default">
                          <AvatarImage alt="Maya Brooks" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <span className="font-medium min-w-0 text-muted-foreground text-sm truncate">
                          {"Maya Brooks / Revenue Operations"}
                        </span>
                      </div>
                      <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </header>
                  </CollapsibleTrigger>
                  </Collapsible>
                </Collapsible>
              </Frame>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="ms-10 pb-10" completed="true">
            <TimelineHeader>
              <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
              <div className="flex flex-wrap gap-2 items-center">
                <TimelineTitle className="font-semibold">
                  {"Workspace Provisioning"}
                </TimelineTitle>
              </div>
              <TimelineIndicator className="bg-muted border-none flex group-data-[orientation=vertical]/timeline:-left-7 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground items-center justify-center size-6 text-muted-foreground" aria-hidden="true">
                <Spinner className="lucide lucide-loader-circle size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Loader2Icon" tabler="IconLoader" hugeicons="Loading03Icon" phosphor="SpinnerIcon" remixicon="RiLoaderLine" role="status" aria-label="Loading">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                </Spinner>
              </TimelineIndicator>
            </TimelineHeader>
            <TimelineContent className="mt-2">
              <Frame spacing="sm">
                <Collapsible className="group/collapsible" data-open="">
                  <Collapsible>
                  <CollapsibleTrigger className="flex w-full" type="button" panelOpen="" tabIndex={0} aria-disabled="false" aria-controls="base-ui-_r_1_" aria-expanded="true" aria-label="Toggle Workspace Provisioning details">
                    <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="flex gap-2 items-center min-w-0">
                        <Avatar className="size-5" size="default">
                          <AvatarImage alt="Nina Patel" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <span className="font-medium min-w-0 text-muted-foreground text-sm truncate">
                          {"Nina Patel / Implementation Lead"}
                        </span>
                      </div>
                      <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </header>
                  </CollapsibleTrigger>
                  </Collapsible>
                  <CollapsibleContent data-open="" id="base-ui-_r_1_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                    <FramePanel className="space-y-3.5">
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-1.5 items-center">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                            <svg className="lucide lucide-flag size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FlagIcon" tabler="IconFlag" hugeicons="Flag03Icon" phosphor="FlagIcon" remixicon="RiFlagLine" aria-hidden="true">
                              <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                            </svg>
                            {"Medium"}
                          </Badge>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                            <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            {"Pending"}
                          </Badge>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            <svg className="lucide lucide-layout-dashboard size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                              <rect width={7} height={9} x={3} y={3} rx={1}></rect>
                              <rect width={7} height={5} x={14} y={3} rx={1}></rect>
                              <rect width={7} height={9} x={14} y={12} rx={1}></rect>
                              <rect width={7} height={5} x={3} y={16} rx={1}></rect>
                            </svg>
                            {"Identity Setup"}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <div className="font-semibold leading-5 text-foreground text-sm">
                            {"Admin Group Mapping"}
                          </div>
                          <p className="leading-5 text-muted-foreground text-xs">
                            {"SCIM groups are being matched to launch roles before the first admin invites go out."}
                          </p>
                        </div>
                        <div className="border-t flex flex-wrap gap-2.5 items-center justify-between pt-3.5">
                          <AvatarGroup className="-space-x-1" aria-label="Assignees for Admin Group Mapping">
                            <Avatar className="size-6" size="default">
                              <AvatarImage alt="Nina Patel" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-6" size="default">
                              <AvatarImage alt="Theo Grant" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <AvatarGroupCount className="bg-background border size-6 tabular-nums text-[10px]">
                              {"+2"}
                            </AvatarGroupCount>
                          </AvatarGroup>
                          <div className="flex gap-2.5 items-center text-muted-foreground text-xs">
                            <span className="gap-1 inline-flex items-center">
                              <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                              </svg>
                              <span className="font-medium tabular-nums text-foreground">
                                {"3"}
                              </span>
                            </span>
                            <span className="gap-1 inline-flex items-center">
                              <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                <path d="M3 10h18"></path>
                              </svg>
                              <span className="font-medium text-foreground">
                                {"Today"}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </FramePanel>
                  </CollapsibleContent>
                </Collapsible>
              </Frame>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="ms-10 pb-10">
            <TimelineHeader>
              <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
              <div className="flex flex-wrap gap-2 items-center">
                <TimelineTitle className="font-semibold">
                  {"Launch Readiness"}
                </TimelineTitle>
              </div>
              <TimelineIndicator className="bg-muted border-none flex group-data-[orientation=vertical]/timeline:-left-7 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground items-center justify-center size-6 text-muted-foreground" aria-hidden="true">
                <svg className="lucide lucide-circle size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx={12} cy={12} r={10}></circle>
                </svg>
              </TimelineIndicator>
            </TimelineHeader>
            <TimelineContent className="mt-2">
              <Frame spacing="sm">
                <Collapsible className="group/collapsible" data-closed="">
                  <Collapsible>
                  <CollapsibleTrigger className="flex w-full" type="button" tabIndex={0} aria-disabled="false" aria-expanded="false" aria-label="Toggle Launch Readiness details">
                    <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="flex gap-2 items-center min-w-0">
                        <Avatar className="size-5" size="default">
                          <AvatarImage alt="Leah Stone" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <span className="font-medium min-w-0 text-muted-foreground text-sm truncate">
                          {"Leah Stone / Account Executive"}
                        </span>
                      </div>
                      <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </header>
                  </CollapsibleTrigger>
                  </Collapsible>
                </Collapsible>
              </Frame>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>
    </div>
  )
}
