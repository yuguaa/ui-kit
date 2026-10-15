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
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="bg-background flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 text-foreground w-full">
      <section className="max-w-2xl w-full" aria-labelledby="activity-timeline-title">
        <div className="mb-6 space-y-4">
          <div className="space-y-0.5">
            <h1 className="font-semibold text-xl tracking-tight" id="activity-timeline-title">
              Activity
            </h1>
            <p className="leading-5 text-muted-foreground text-sm">
              12 activities in view.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <ToggleGroup className="flex-wrap" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="2" aria-label="Filter by activity type" style={{"--gap": "2"}}>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-3 whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="sm" spacing="2" extracted="1">
                All
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-3 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="2">
                Calls
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-3 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="2">
                Emails
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-3 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="2">
                Meetings
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-3 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="2">
                Notes
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-3 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="2">
                Tasks
              </ToggleGroupItem>
            </ToggleGroup>
            <Select>
            <SelectTrigger className="sm:ml-auto w-[150px]" type="button" tabIndex="0" id="base-ui-_r_6_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
              <svg className="lucide lucide-users size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
              <SelectValue>
                All owners
              </SelectValue>
              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
                ▼
              </svg>
            </SelectTrigger>
            </Select>
            <input id="base-ui-_r_6_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <div className="flex gap-3 items-center mb-4">
              <h2 className="font-semibold text-muted-foreground text-xs tracking-wide uppercase">
                Today
              </h2>
              <span className="bg-border grow h-px" aria-hidden="true"></span>
              <span className="tabular-nums text-muted-foreground text-xs">
                4
              </span>
            </div>
            <Timeline data-orientation="vertical">
              <TimelineItem className="ms-10 pb-6" completed="true">
                <TimelineHeader>
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <TimelineTitle className="font-semibold">
                      Budget Call
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      Connected
                    </Badge>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-smartphone size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmartphoneIcon" tabler="IconDeviceMobile" hugeicons="SmartPhone01Icon" phosphor="DeviceMobileIcon" remixicon="RiSmartphoneLine" aria-hidden="true">
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                      <path d="M12 18h.01"></path>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-1.5">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-open="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" panelOpen="" tabIndex="0" aria-disabled="false" aria-controls="base-ui-_r_9_" aria-expanded="true" aria-label="Toggle Budget Call details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex flex-col gap-0.5 items-start min-w-0">
                            <span className="font-medium min-w-0 text-foreground text-sm truncate">
                              Brightwave Media
                            </span>
                            <span className="min-w-0 text-muted-foreground text-xs truncate">
                              9:12 AM
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </header>
                      </CollapsibleTrigger>
                      </Collapsible>
                      <CollapsibleContent data-open="" id="base-ui-_r_9_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                        <FramePanel className="space-y-2.5">
                          <div className="space-y-2.5">
                            <p className="leading-5 text-muted-foreground text-xs">
                              Budget approved and RevOps joined security review.
                            </p>
                            <div className="border-t flex flex-wrap gap-2.5 items-center justify-between pt-2">
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-6" size="default">
                                  <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="flex flex-col min-w-0">
                                  <span className="font-medium text-foreground text-xs truncate">
                                    Mira Stone
                                  </span>
                                  <span className="text-[11px] text-muted-foreground truncate">
                                    Account Executive
                                  </span>
                                </span>
                              </div>
                              <Button type="button" tabIndex="0">
                                <svg className="lucide lucide-copy size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                </svg>
                                ACT-2841
                              </Button>
                            </div>
                          </div>
                        </FramePanel>
                      </CollapsibleContent>
                    </Collapsible>
                  </Frame>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem className="ms-10 pb-6" completed="true">
                <TimelineHeader>
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <TimelineTitle className="font-semibold">
                      Pricing Reply
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      Replied
                    </Badge>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-mail size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-1.5">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-open="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" panelOpen="" tabIndex="0" aria-disabled="false" aria-controls="base-ui-_r_a_" aria-expanded="true" aria-label="Toggle Pricing Reply details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex flex-col gap-0.5 items-start min-w-0">
                            <span className="font-medium min-w-0 text-foreground text-sm truncate">
                              Apex Manufacturing
                            </span>
                            <span className="min-w-0 text-muted-foreground text-xs truncate">
                              8:47 AM
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </header>
                      </CollapsibleTrigger>
                      </Collapsible>
                      <CollapsibleContent data-open="" id="base-ui-_r_a_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                        <FramePanel className="space-y-2.5">
                          <div className="space-y-2.5">
                            <p className="leading-5 text-muted-foreground text-xs">
                              Apex requested net-45 and three seats.
                            </p>
                            <div className="border-t flex flex-wrap gap-2.5 items-center justify-between pt-2">
                              <div className="flex gap-2 items-center min-w-0">
                                <Avatar className="size-6" size="default">
                                  <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="flex flex-col min-w-0">
                                  <span className="font-medium text-foreground text-xs truncate">
                                    Leo Grant
                                  </span>
                                  <span className="text-[11px] text-muted-foreground truncate">
                                    Account Executive
                                  </span>
                                </span>
                              </div>
                              <Button type="button" tabIndex="0">
                                <svg className="lucide lucide-copy size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                </svg>
                                ACT-2840
                              </Button>
                            </div>
                          </div>
                        </FramePanel>
                      </CollapsibleContent>
                    </Collapsible>
                  </Frame>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem className="ms-10 pb-6" completed="true">
                <TimelineHeader>
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <TimelineTitle className="font-semibold">
                      Closed Won
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      Won
                    </Badge>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-square-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-1.5">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle Closed Won details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex flex-col gap-0.5 items-start min-w-0">
                            <span className="font-medium min-w-0 text-foreground text-sm truncate">
                              Cobalt Logistics
                            </span>
                            <span className="min-w-0 text-muted-foreground text-xs truncate">
                              8:05 AM
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </header>
                      </CollapsibleTrigger>
                      </Collapsible>
                    </Collapsible>
                  </Frame>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem className="ms-10 pb-6" completed="true">
                <TimelineHeader>
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <TimelineTitle className="font-semibold">
                      Risk Note
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                      <span className="bg-muted-foreground/60 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      Logged
                    </Badge>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                      <path d="M10 9H8"></path>
                      <path d="M16 13H8"></path>
                      <path d="M16 17H8"></path>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-1.5">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle Risk Note details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex flex-col gap-0.5 items-start min-w-0">
                            <span className="font-medium min-w-0 text-foreground text-sm truncate">
                              Cedar & Co
                            </span>
                            <span className="min-w-0 text-muted-foreground text-xs truncate">
                              7:40 AM
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
          </div>
          <div>
            <div className="flex gap-3 items-center mb-4">
              <h2 className="font-semibold text-muted-foreground text-xs tracking-wide uppercase">
                Yesterday
              </h2>
              <span className="bg-border grow h-px" aria-hidden="true"></span>
              <span className="tabular-nums text-muted-foreground text-xs">
                2
              </span>
            </div>
            <Timeline data-orientation="vertical">
              <TimelineItem className="ms-10 pb-6" completed="true">
                <TimelineHeader>
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <TimelineTitle className="font-semibold">
                      Vertex Demo
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                      <span className="bg-primary rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      Moved
                    </Badge>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-calendar size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-1.5">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle Vertex Demo details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex flex-col gap-0.5 items-start min-w-0">
                            <span className="font-medium min-w-0 text-foreground text-sm truncate">
                              Vertex Health
                            </span>
                            <span className="min-w-0 text-muted-foreground text-xs truncate">
                              4:30 PM
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </header>
                      </CollapsibleTrigger>
                      </Collapsible>
                    </Collapsible>
                  </Frame>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem className="ms-10 pb-6" completed="true">
                <TimelineHeader>
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <TimelineTitle className="font-semibold">
                      Voicemail Left
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                      <span className="bg-muted-foreground/60 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      Voicemail
                    </Badge>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-smartphone size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmartphoneIcon" tabler="IconDeviceMobile" hugeicons="SmartPhone01Icon" phosphor="DeviceMobileIcon" remixicon="RiSmartphoneLine" aria-hidden="true">
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                      <path d="M12 18h.01"></path>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-1.5">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle Voicemail Left details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex flex-col gap-0.5 items-start min-w-0">
                            <span className="font-medium min-w-0 text-foreground text-sm truncate">
                              Meridian Retail
                            </span>
                            <span className="min-w-0 text-muted-foreground text-xs truncate">
                              2:18 PM
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
          </div>
          <div>
            <div className="flex gap-3 items-center mb-4">
              <h2 className="font-semibold text-muted-foreground text-xs tracking-wide uppercase">
                This week
              </h2>
              <span className="bg-border grow h-px" aria-hidden="true"></span>
              <span className="tabular-nums text-muted-foreground text-xs">
                3
              </span>
            </div>
            <Timeline data-orientation="vertical">
              <TimelineItem className="ms-10 pb-6" completed="true">
                <TimelineHeader>
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <TimelineTitle className="font-semibold">
                      Quote Accepted
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      Replied
                    </Badge>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-mail size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-1.5">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle Quote Accepted details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex flex-col gap-0.5 items-start min-w-0">
                            <span className="font-medium min-w-0 text-foreground text-sm truncate">
                              Atlas Freight
                            </span>
                            <span className="min-w-0 text-muted-foreground text-xs truncate">
                              Tue 5:02 PM
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </header>
                      </CollapsibleTrigger>
                      </Collapsible>
                    </Collapsible>
                  </Frame>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem className="ms-10 pb-6" completed="true">
                <TimelineHeader>
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <TimelineTitle className="font-semibold">
                      Renewal Review
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                      <span className="bg-primary rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      Scheduled
                    </Badge>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-square-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-1.5">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle Renewal Review details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex flex-col gap-0.5 items-start min-w-0">
                            <span className="font-medium min-w-0 text-foreground text-sm truncate">
                              Orbit Software
                            </span>
                            <span className="min-w-0 text-muted-foreground text-xs truncate">
                              Tue 10:15 AM
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </header>
                      </CollapsibleTrigger>
                      </Collapsible>
                    </Collapsible>
                  </Frame>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem className="ms-10 pb-6" completed="true">
                <TimelineHeader>
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <TimelineTitle className="font-semibold">
                      Call Missed
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                      <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      No answer
                    </Badge>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-smartphone size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmartphoneIcon" tabler="IconDeviceMobile" hugeicons="SmartPhone01Icon" phosphor="DeviceMobileIcon" remixicon="RiSmartphoneLine" aria-hidden="true">
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                      <path d="M12 18h.01"></path>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-1.5">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle Call Missed details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex flex-col gap-0.5 items-start min-w-0">
                            <span className="font-medium min-w-0 text-foreground text-sm truncate">
                              Quanta Devices
                            </span>
                            <span className="min-w-0 text-muted-foreground text-xs truncate">
                              Mon 3:44 PM
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
          </div>
          <div>
            <div className="flex gap-3 items-center mb-4">
              <h2 className="font-semibold text-muted-foreground text-xs tracking-wide uppercase">
                Earlier
              </h2>
              <span className="bg-border grow h-px" aria-hidden="true"></span>
              <span className="tabular-nums text-muted-foreground text-xs">
                3
              </span>
            </div>
            <Timeline data-orientation="vertical">
              <TimelineItem className="ms-10 pb-6" completed="true">
                <TimelineHeader>
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <TimelineTitle className="font-semibold">
                      Procurement Call
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                      <span className="bg-primary rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      Moved
                    </Badge>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-calendar size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-1.5">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle Procurement Call details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex flex-col gap-0.5 items-start min-w-0">
                            <span className="font-medium min-w-0 text-foreground text-sm truncate">
                              Ridgeline Energy
                            </span>
                            <span className="min-w-0 text-muted-foreground text-xs truncate">
                              Jun 11
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </header>
                      </CollapsibleTrigger>
                      </Collapsible>
                    </Collapsible>
                  </Frame>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem className="ms-10 pb-6" completed="true">
                <TimelineHeader>
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <TimelineTitle className="font-semibold">
                      Intro Reply
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      Replied
                    </Badge>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-mail size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-1.5">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle Intro Reply details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex flex-col gap-0.5 items-start min-w-0">
                            <span className="font-medium min-w-0 text-foreground text-sm truncate">
                              Summit Financial
                            </span>
                            <span className="min-w-0 text-muted-foreground text-xs truncate">
                              Jun 10
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </header>
                      </CollapsibleTrigger>
                      </Collapsible>
                    </Collapsible>
                  </Frame>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem className="ms-10 pb-6" completed="true">
                <TimelineHeader>
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <TimelineTitle className="font-semibold">
                      Discovery Note
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                      <span className="bg-muted-foreground/60 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      Logged
                    </Badge>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                      <path d="M10 9H8"></path>
                      <path d="M16 13H8"></path>
                      <path d="M16 17H8"></path>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-1.5">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle Discovery Note details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex flex-col gap-0.5 items-start min-w-0">
                            <span className="font-medium min-w-0 text-foreground text-sm truncate">
                              Harbor Labs
                            </span>
                            <span className="min-w-0 text-muted-foreground text-xs truncate">
                              Jun 9
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
          </div>
        </div>
      </section>
    </div>
  )
}
