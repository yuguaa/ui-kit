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
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <section className="max-w-2xl mx-auto w-full" aria-labelledby="audit-log-title">
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-wrap gap-3 items-end justify-between">
            <div className="min-w-0 space-y-1">
              <h1 className="font-semibold text-xl tracking-tight" id="audit-log-title">
                {"Audit Log"}
              </h1>
              <p className="leading-5 text-muted-foreground text-sm">
                {"12 events in Acme Cloud workspace"}
              </p>
            </div>
            <div className="flex gap-2 items-center shrink-0">
              <Select>
              <SelectTrigger className="w-40" type="button" tabIndex="0" id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" extracted="1">
                <svg className="lucide lucide-calendar size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <SelectValue>
                  {"Last 24 hours"}
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  {"▼"}
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_0_-hidden-input" tabIndex="-1" aria-hidden="true" value="24h" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
                <span className="hidden sm:block">
                  {"Export CSV"}
                </span>
              </Button>
            </div>
          </div>
          <Tabs data-orientation="horizontal" activationDirection="none">
            <TabsList className="border-b gap-6 h-10! justify-start overflow-x-auto pb-0 w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line" aria-label="Filter by event type">
              <TabsTrigger className="after:-bottom-px! px-1 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_3_" compositeItemActive="">
                {"All"}
              </TabsTrigger>
              <TabsTrigger className="after:-bottom-px! px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_4_">
                {"Auth"}
              </TabsTrigger>
              <TabsTrigger className="after:-bottom-px! px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_5_">
                {"Roles"}
              </TabsTrigger>
              <TabsTrigger className="after:-bottom-px! px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_6_">
                {"SSO/SCIM"}
              </TabsTrigger>
              <TabsTrigger className="after:-bottom-px! px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_7_">
                {"Sessions"}
              </TabsTrigger>
              <TabsTrigger className="after:-bottom-px! px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_8_">
                {"API"}
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-semibold text-muted-foreground text-xs tracking-wide uppercase">
              {"Today, Jun 17"}
            </h2>
            <Timeline data-orientation="vertical">
              <TimelineItem className="ms-10 pb-6" completed="true">
                <TimelineHeader className="flex gap-2.5 items-center justify-between min-w-0">
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center">
                    <TimelineTitle className="font-semibold">
                      {"Login failed"}
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                      <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      {"Critical"}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {"2:14 PM"}
                    </span>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center shadow-xs size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-triangle-alert size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-2">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-open="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" panelOpen="" tabIndex="0" aria-disabled="false" aria-controls="base-ui-_r_9_" aria-expanded="true" aria-label="Toggle Login failed details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-5" size="default">
                              <AvatarImage alt="Kenji Tan" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <span className="font-medium min-w-0 text-muted-foreground text-sm truncate">
                              {"Kenji Tan, Password rejected"}
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </header>
                      </CollapsibleTrigger>
                      </Collapsible>
                      <CollapsibleContent data-open="" id="base-ui-_r_9_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                        <FramePanel className="space-y-3">
                          <dl className="gap-2.5 grid grid-cols-1 sm:grid-cols-2">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <dt className="text-muted-foreground text-xs">
                                {"Target"}
                              </dt>
                              <dd className="flex items-center min-w-0 text-sm">
                                <span className="font-medium text-foreground truncate">
                                  {"kenji.tan@acmecloud.com"}
                                </span>
                              </dd>
                            </div>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <dt className="text-muted-foreground text-xs">
                                {"Actor"}
                              </dt>
                              <dd className="flex items-center min-w-0 text-sm">
                                <span className="font-medium text-foreground truncate">
                                  {"kenji.tan@acmecloud.com"}
                                </span>
                              </dd>
                            </div>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <dt className="text-muted-foreground text-xs">
                                {"Source IP"}
                              </dt>
                              <dd className="flex items-center min-w-0 text-sm">
                                <span className="font-medium gap-2 inline-flex items-center min-w-0 tabular-nums text-foreground">
                                  <span className="truncate">
                                    {"192.0.2.51"}
                                  </span>
                                  <span className="text-muted-foreground truncate">
                                    {"Berlin"}
                                  </span>
                                </span>
                              </dd>
                            </div>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <dt className="text-muted-foreground text-xs">
                                {"Session"}
                              </dt>
                              <dd className="flex items-center min-w-0 text-sm">
                                <span className="font-mono text-foreground text-xs truncate">
                                  {"sess_b71e0d44"}
                                </span>
                              </dd>
                            </div>
                          </dl>
                          <p className="leading-5 text-muted-foreground text-xs">
                            {"3 failed attempts in 5 minutes, account temporarily locked"}
                          </p>
                          <div className="border-t flex flex-wrap gap-2.5 items-center justify-between pt-2.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"evt_9f3a21c8"}
                            </Badge>
                            <Button type="button" tabIndex="0">
                              <svg className="lucide lucide-copy opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                              </svg>
                              {"Copy reference"}
                            </Button>
                          </div>
                        </FramePanel>
                      </CollapsibleContent>
                    </Collapsible>
                  </Frame>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem className="ms-10 pb-6">
                <TimelineHeader className="flex gap-2.5 items-center justify-between min-w-0">
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center">
                    <TimelineTitle className="font-semibold">
                      {"Role changed"}
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                      <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      {"Notice"}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {"1:02 PM"}
                    </span>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center shadow-xs size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-arrow-left-right size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftRightIcon" tabler="IconArrowsLeftRight" hugeicons="ArrowDataTransferHorizontalIcon" phosphor="ArrowsLeftRightIcon" remixicon="RiArrowLeftRightLine" aria-hidden="true">
                      <path d="M8 3 4 7l4 4"></path>
                      <path d="M4 7h16"></path>
                      <path d="m16 21 4-4-4-4"></path>
                      <path d="M20 17H4"></path>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-2">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-open="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" panelOpen="" tabIndex="0" aria-disabled="false" aria-controls="base-ui-_r_a_" aria-expanded="true" aria-label="Toggle Role changed details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-5" size="default">
                              <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <span className="font-medium min-w-0 text-muted-foreground text-sm truncate">
                              {"Leo Grant, Member to Admin"}
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </header>
                      </CollapsibleTrigger>
                      </Collapsible>
                      <CollapsibleContent data-open="" id="base-ui-_r_a_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                        <FramePanel className="space-y-3">
                          <dl className="gap-2.5 grid grid-cols-1 sm:grid-cols-2">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <dt className="text-muted-foreground text-xs">
                                {"Target"}
                              </dt>
                              <dd className="flex items-center min-w-0 text-sm">
                                <span className="font-medium text-foreground truncate">
                                  {"Sana Qureshi"}
                                </span>
                              </dd>
                            </div>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <dt className="text-muted-foreground text-xs">
                                {"Actor"}
                              </dt>
                              <dd className="flex items-center min-w-0 text-sm">
                                <span className="font-medium text-foreground truncate">
                                  {"leo.grant@acmecloud.com"}
                                </span>
                              </dd>
                            </div>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <dt className="text-muted-foreground text-xs">
                                {"Source IP"}
                              </dt>
                              <dd className="flex items-center min-w-0 text-sm">
                                <span className="font-medium gap-2 inline-flex items-center min-w-0 tabular-nums text-foreground">
                                  <span className="truncate">
                                    {"192.0.2.14"}
                                  </span>
                                  <span className="text-muted-foreground truncate">
                                    {"San Francisco"}
                                  </span>
                                </span>
                              </dd>
                            </div>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <dt className="text-muted-foreground text-xs">
                                {"Session"}
                              </dt>
                              <dd className="flex items-center min-w-0 text-sm">
                                <span className="font-mono text-foreground text-xs truncate">
                                  {"sess_c98a2f10"}
                                </span>
                              </dd>
                            </div>
                          </dl>
                          <p className="leading-5 text-muted-foreground text-xs">
                            {"Promotion approved by Mira Stone, scope raised to Write"}
                          </p>
                          <div className="border-t flex flex-wrap gap-2.5 items-center justify-between pt-2.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"evt_71b0a9d2"}
                            </Badge>
                            <Button type="button" tabIndex="0">
                              <svg className="lucide lucide-copy opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                              </svg>
                              {"Copy reference"}
                            </Button>
                          </div>
                        </FramePanel>
                      </CollapsibleContent>
                    </Collapsible>
                  </Frame>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem className="ms-10 pb-6">
                <TimelineHeader className="flex gap-2.5 items-center justify-between min-w-0">
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center">
                    <TimelineTitle className="font-semibold">
                      {"Session revoked"}
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                      <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      {"Notice"}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {"11:48 AM"}
                    </span>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center shadow-xs size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-log-out size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LogOutIcon" tabler="IconLogout" hugeicons="LogoutSquare01Icon" phosphor="SignOutIcon" remixicon="RiLogoutBoxRLine" aria-hidden="true">
                      <path d="m16 17 5-5-5-5"></path>
                      <path d="M21 12H9"></path>
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-2">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle Session revoked details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-5" size="default">
                              <AvatarImage alt="Sarah Chen" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <span className="font-medium min-w-0 text-muted-foreground text-sm truncate">
                              {"Sarah Chen, Chrome on Windows"}
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </header>
                      </CollapsibleTrigger>
                      </Collapsible>
                    </Collapsible>
                  </Frame>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem className="ms-10 pb-0">
                <TimelineHeader className="flex gap-2.5 items-center justify-between min-w-0">
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center">
                    <TimelineTitle className="font-semibold">
                      {"Login success"}
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      {"Info"}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {"9:05 AM"}
                    </span>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center shadow-xs size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-circle-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-2">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle Login success details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-5" size="default">
                              <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <span className="font-medium min-w-0 text-muted-foreground text-sm truncate">
                              {"Mira Stone, SSO via Okta"}
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
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
          <div className="space-y-4">
            <h2 className="font-semibold text-muted-foreground text-xs tracking-wide uppercase">
              {"Yesterday, Jun 16"}
            </h2>
            <Timeline data-orientation="vertical">
              <TimelineItem className="ms-10 pb-6" completed="true">
                <TimelineHeader className="flex gap-2.5 items-center justify-between min-w-0">
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center">
                    <TimelineTitle className="font-semibold">
                      {"API key created"}
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                      <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      {"Notice"}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {"6:21 PM"}
                    </span>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center shadow-xs size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-key-round size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-2">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle API key created details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-5" size="default">
                              <AvatarImage alt="David Kim" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <span className="font-medium min-w-0 text-muted-foreground text-sm truncate">
                              {"David Kim, Production, ci-deploy"}
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </header>
                      </CollapsibleTrigger>
                      </Collapsible>
                    </Collapsible>
                  </Frame>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem className="ms-10 pb-6">
                <TimelineHeader className="flex gap-2.5 items-center justify-between min-w-0">
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center">
                    <TimelineTitle className="font-semibold">
                      {"SSO config changed"}
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                      <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      {"Critical"}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {"4:37 PM"}
                    </span>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center shadow-xs size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-shield-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-2">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle SSO config changed details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-5" size="default">
                              <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <span className="font-medium min-w-0 text-muted-foreground text-sm truncate">
                              {"Mira Stone, Okta to Microsoft Entra ID"}
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </header>
                      </CollapsibleTrigger>
                      </Collapsible>
                    </Collapsible>
                  </Frame>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem className="ms-10 pb-6">
                <TimelineHeader className="flex gap-2.5 items-center justify-between min-w-0">
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center">
                    <TimelineTitle className="font-semibold">
                      {"SCIM provision"}
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      {"Info"}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {"4:30 PM"}
                    </span>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center shadow-xs size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-users size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-2">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle SCIM provision details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-5" size="default">
                              <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <span className="font-medium min-w-0 text-muted-foreground text-sm truncate">
                              {"Leo Grant, 4 members imported"}
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </header>
                      </CollapsibleTrigger>
                      </Collapsible>
                    </Collapsible>
                  </Frame>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem className="ms-10 pb-6">
                <TimelineHeader className="flex gap-2.5 items-center justify-between min-w-0">
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center">
                    <TimelineTitle className="font-semibold">
                      {"MFA reset"}
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                      <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      {"Notice"}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {"2:10 PM"}
                    </span>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center shadow-xs size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-refresh-cw size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                      <path d="M21 3v5h-5"></path>
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                      <path d="M8 16H3v5"></path>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-2">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle MFA reset details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-5" size="default">
                              <AvatarImage alt="Sarah Chen" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <span className="font-medium min-w-0 text-muted-foreground text-sm truncate">
                              {"Sarah Chen, Authenticator re-enrolled"}
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </header>
                      </CollapsibleTrigger>
                      </Collapsible>
                    </Collapsible>
                  </Frame>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem className="ms-10 pb-0">
                <TimelineHeader className="flex gap-2.5 items-center justify-between min-w-0">
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center">
                    <TimelineTitle className="font-semibold">
                      {"Member invited"}
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      {"Info"}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {"10:55 AM"}
                    </span>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center shadow-xs size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-mail size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-2">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle Member invited details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-5" size="default">
                              <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <span className="font-medium min-w-0 text-muted-foreground text-sm truncate">
                              {"Mira Stone, Guest, Support Agent"}
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
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
          <div className="space-y-4">
            <h2 className="font-semibold text-muted-foreground text-xs tracking-wide uppercase">
              {"Jun 15"}
            </h2>
            <Timeline data-orientation="vertical">
              <TimelineItem className="ms-10 pb-6" completed="true">
                <TimelineHeader className="flex gap-2.5 items-center justify-between min-w-0">
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center">
                    <TimelineTitle className="font-semibold">
                      {"Data export"}
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                      <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      {"Notice"}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {"5:42 PM"}
                    </span>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center shadow-xs size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-database size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                      <path d="M3 12A9 3 0 0 0 21 12"></path>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-2">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle Data export details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-5" size="default">
                              <AvatarImage alt="Omar Haddad" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <span className="font-medium min-w-0 text-muted-foreground text-sm truncate">
                              {"Omar Haddad, Audit log, CSV"}
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </header>
                      </CollapsibleTrigger>
                      </Collapsible>
                    </Collapsible>
                  </Frame>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem className="ms-10 pb-6">
                <TimelineHeader className="flex gap-2.5 items-center justify-between min-w-0">
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center">
                    <TimelineTitle className="font-semibold">
                      {"Session revoked"}
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      {"Info"}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {"3:18 PM"}
                    </span>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center shadow-xs size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-log-out size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LogOutIcon" tabler="IconLogout" hugeicons="LogoutSquare01Icon" phosphor="SignOutIcon" remixicon="RiLogoutBoxRLine" aria-hidden="true">
                      <path d="m16 17 5-5-5-5"></path>
                      <path d="M21 12H9"></path>
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-2">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle Session revoked details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-5" size="default">
                              <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <span className="font-medium min-w-0 text-muted-foreground text-sm truncate">
                              {"Nora Vale, Safari on iOS"}
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </header>
                      </CollapsibleTrigger>
                      </Collapsible>
                    </Collapsible>
                  </Frame>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem className="ms-10 pb-0">
                <TimelineHeader className="flex gap-2.5 items-center justify-between min-w-0">
                  <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                  <div className="flex flex-wrap gap-2 items-center">
                    <TimelineTitle className="font-semibold">
                      {"Login success"}
                    </TimelineTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      {"Info"}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {"8:47 AM"}
                    </span>
                  </div>
                  <TimelineIndicator className="[&_svg]:size-3.5 bg-background border border-border flex group-data-[orientation=vertical]/timeline:-left-7 items-center justify-center shadow-xs size-6 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-circle-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="mt-2">
                  <Frame spacing="sm">
                    <Collapsible className="group/collapsible" data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle Login success details">
                        <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-5" size="default">
                              <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <span className="font-medium min-w-0 text-muted-foreground text-sm truncate">
                              {"Sana Qureshi, Password, 2FA passed"}
                            </span>
                          </div>
                          <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
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
