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
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Metric detail"}
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Sheet>
        <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
          <svg className="lucide lucide-panel-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PanelRightIcon" tabler="IconLayoutSidebarRight" hugeicons="SidebarRight01Icon" phosphor="SidebarSimpleIcon" remixicon="RiLayoutRightLine" data-icon="inline-start" aria-hidden="true">
            <rect width={18} height={18} x={3} y={3} rx={2}></rect>
            <path d="M15 3v18"></path>
          </svg>
          {"Open Sheet"}
        </SheetTrigger>
        </Sheet>
      </div>
    </main>
    <Sheet>
    <SheetContent className="bg-popover flex flex-col gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(30rem,calc(100vw-2rem))] z-[60]" data-open="" tabIndex={-1} baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_4_" style={{"--nested-dialogs": "0"}}>
      <SheetHeader className="border-b gap-0 p-0 shrink-0">
        <div className="flex gap-2 items-center justify-between min-h-11 px-5">
          <span className="font-mono gap-2 inline-flex items-center text-muted-foreground text-xs">
            <svg className="lucide lucide-target size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TargetIcon" tabler="IconTarget" hugeicons="Target01Icon" phosphor="TargetIcon" remixicon="RiFocus3Line" aria-hidden="true">
              <circle cx={12} cy={12} r={10}></circle>
              <circle cx={12} cy={12} r={6}></circle>
              <circle cx={12} cy={12} r={2}></circle>
            </svg>
            {"MET-609"}
          </span>
          <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Close metric detail">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </SheetClose>
        </div>
        <div className="flex flex-col gap-2 min-w-0 pb-4 pt-1 px-5">
          <div className="flex gap-2 items-center min-w-0">
            <SheetTitle className="flex-1 font-semibold min-w-0 text-lg tracking-tight truncate" id="base-ui-_r_3_">
              {"Activation rate"}
            </SheetTitle>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
              {"On track"}
            </Badge>
          </div>
          <SheetDescription className="text-muted-foreground text-xs" id="base-ui-_r_4_">
            {"801 of 1,284 workspaces activated in 28 days."}
          </SheetDescription>
        </div>
      </SheetHeader>
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full min-h-0" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_5_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "773px"}} data-has-overflow-y="" data-overflow-y-end="">
            <div className="flex flex-col gap-3 px-5 py-4">
              <div className="flex gap-3 items-end justify-between">
                <div className="flex gap-2 items-baseline">
                  <span className="font-semibold tabular-nums text-4xl text-foreground tracking-tight">
                    {"62.4%"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    {"+3.1 pts"}
                  </Badge>
                </div>
                <span className="pb-1 text-muted-foreground text-xs">
                  {"vs 59.3% prior 28 days"}
                </span>
              </div>
              <div className="bg-muted/55 h-1 mt-1.5 overflow-hidden relative rounded-full">
                <div className="absolute bg-[repeating-linear-gradient(-45deg,currentColor_0,currentColor_1px,transparent_0,transparent_4px)] inset-0 opacity-20 pointer-events-none text-muted-foreground" aria-hidden="true"></div>
                <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="89" aria-valuetext="89%" role="progressbar">
                  <ProgressTrack progressing="">
                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "89%"}}></ProgressIndicator>
                  </ProgressTrack>
                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                    {"x"}
                  </span>
                </Progress>
              </div>
              <div className="flex gap-2 items-center justify-between text-muted-foreground text-xs">
                <span>
                  {"Target 70%"}
                </span>
                <span className="tabular-nums">
                  {"89% ready"}
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                {"801 of 1,284 new workspaces activated"}
              </p>
            </div>
            <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-3 px-5 py-4">
              <div className="flex gap-2 items-center justify-between">
                <h3 className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                  {"Definition"}
                </h3>
              </div>
              <dl className="gap-x-4 gap-y-2.5 grid grid-cols-[7.5rem_1fr]">
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    {"Activation event"}
                  </dt>
                  <dd className="font-mono min-w-0 text-foreground text-xs">
                    {"template_applied"}
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    {"Source feature"}
                  </dt>
                  <dd className="min-w-0 text-foreground text-sm">
                    {"Template gallery (FEA-118)"}
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    {"Segment"}
                  </dt>
                  <dd className="min-w-0 text-foreground text-sm">
                    {"Trial workspaces over 20 seats"}
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    {"Window"}
                  </dt>
                  <dd className="min-w-0 text-foreground text-sm">
                    {"Last 28 days"}
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    {"Definition"}
                  </dt>
                  <dd className="font-mono min-w-0 text-foreground text-xs">
                    {"activated / new workspaces"}
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    {"Refreshed"}
                  </dt>
                  <dd className="min-w-0 text-foreground text-sm">
                    {"Hourly · 2h ago"}
                  </dd>
                </div>
              </dl>
            </div>
            <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-3 px-5 py-4">
              <div className="flex gap-2 items-center justify-between">
                <h3 className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                  {"Owners"}
                </h3>
              </div>
              <div className="flex gap-3 items-center justify-between">
                <AvatarGroup className="-space-x-1">
                  <Avatar className="size-6" size="default">
                    <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar className="size-6" size="default">
                    <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar className="size-6" size="default">
                    <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar className="size-6" size="default">
                    <AvatarFallback className="text-[10px]">
                      {"IV"}
                    </AvatarFallback>
                  </Avatar>
                </AvatarGroup>
                <p className="flex-wrap gap-x-1.5 inline-flex items-center justify-end min-w-0 text-muted-foreground text-xs">
                  <span className="font-medium text-foreground">
                    {"Mira Stone"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="truncate">
                    {"leads"}
                  </span>
                </p>
              </div>
            </div>
            <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-3 px-5 py-4">
              <div className="flex gap-2 items-center justify-between">
                <h3 className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                  {"Alert Rule"}
                </h3>
              </div>
              <div className="flex gap-3 items-start">
                <div className="grid place-items-center relative shrink-0 size-5 text-warning">
                  <span className="[&_svg]:block [&_svg]:size-4 grid leading-none place-items-center size-5">
                    <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                      <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                      <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                    </svg>
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-1 min-w-0">
                  <div className="flex gap-2 items-start justify-between">
                    <p className="font-medium leading-5 min-w-0 text-foreground text-sm">
                      {"Activation drop"}
                    </p>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      {"Armed"}
                    </Badge>
                  </div>
                  <p className="flex-wrap gap-x-1.5 inline-flex items-center text-muted-foreground text-xs">
                    <span>
                      {"Fires below 55%"}
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span>
                      {"2 day window"}
                    </span>
                  </p>
                  <div className="flex gap-1.5 items-center mt-0.5 text-muted-foreground text-xs">
                    <Avatar className="size-5" size="default">
                      <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                    <span>
                      {"Sana Qureshi"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-3 px-5 py-4">
              <div className="flex gap-2 items-center justify-between">
                <h3 className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                  {"Readout"}
                </h3>
              </div>
              <div className="gap-x-4 gap-y-2.5 grid grid-cols-[7.5rem_1fr]">
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    {"Decision"}
                  </dt>
                  <dd className="min-w-0 text-foreground text-sm">
                    {"Keep rollout at 50%"}
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    {"Next review"}
                  </dt>
                  <dd className="min-w-0 text-foreground text-sm">
                    {"Jun 18, 9:00 AM"}
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    {"Guardrail"}
                  </dt>
                  <dd className="min-w-0 text-foreground text-sm">
                    {"+1.6% ticket volume"}
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    {"Export"}
                  </dt>
                  <dd className="min-w-0 text-foreground text-sm">
                    {"Ready for June report"}
                  </dd>
                </div>
              </div>
            </div>
            <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-3 px-5 py-4">
              <div className="flex gap-2 items-center justify-between">
                <h3 className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                  {"Recent Changes"}
                </h3>
              </div>
              <Timeline data-orientation="vertical">
                <TimelineItem className="has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-5" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="[&_svg]:size-3 bg-primary/10 border dark:bg-primary/15 flex group-data-completed/timeline-item:border-border items-center justify-center size-5 text-primary" aria-hidden="true">
                      <svg className="lucide lucide-target size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TargetIcon" tabler="IconTarget" hugeicons="Target01Icon" phosphor="TargetIcon" remixicon="RiFocus3Line" aria-hidden="true">
                        <circle cx={12} cy={12} r={10}></circle>
                        <circle cx={12} cy={12} r={6}></circle>
                        <circle cx={12} cy={12} r={2}></circle>
                      </svg>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium text-foreground">
                        {"Target raised to 70%"}
                      </span>
                    </TimelineTitle>
                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                      {"2 days ago"}
                    </span>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[52ch] text-muted-foreground text-sm">
                      {"Leo Grant lifted the goal from 65% after the Q3 onboarding push."}
                    </p>
                    <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <span>
                        {"Leo Grant"}
                      </span>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-5" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="[&_svg]:size-3 bg-warning/10 border border-warning/20 dark:bg-warning/15 flex group-data-completed/timeline-item:border-border items-center justify-center size-5 text-warning" aria-hidden="true">
                      <svg className="lucide lucide-bell size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                        <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                        <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                      </svg>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium text-foreground">
                        {"Alert threshold set to 55%"}
                      </span>
                    </TimelineTitle>
                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                      {"Jun 9"}
                    </span>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[52ch] text-muted-foreground text-sm">
                      {"Sana Qureshi widened the activation drop guard to a 2 day window."}
                    </p>
                    <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <span>
                        {"Sana Qureshi"}
                      </span>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-5" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="[&_svg]:size-3 bg-info/10 border border-info/20 dark:bg-info/15 flex group-data-completed/timeline-item:border-border items-center justify-center size-5 text-info" aria-hidden="true">
                      <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium text-foreground">
                        {"Definition updated"}
                      </span>
                    </TimelineTitle>
                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                      {"Jun 2"}
                    </span>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[52ch] text-muted-foreground text-sm">
                      {"template_applied (EVT-1842) replaced first_report_viewed as the activation event."}
                    </p>
                    <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <span>
                        {"Mira Stone"}
                      </span>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-5" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="[&_svg]:size-3 bg-success/10 border border-success/20 dark:bg-success/15 flex group-data-completed/timeline-item:border-border items-center justify-center size-5 text-success" aria-hidden="true">
                      <svg className="lucide lucide-users size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx={9} cy={7} r={4}></circle>
                      </svg>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium text-foreground">
                        {"Nora Vale added as owner"}
                      </span>
                    </TimelineTitle>
                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                      {"May 28"}
                    </span>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[52ch] text-muted-foreground text-sm">
                      {"Lifecycle analyst joined the week four retention review."}
                    </p>
                    <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <span>
                        {"Nora Vale"}
                      </span>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
          <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_5_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "185.59108989657915px"}}>
            <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
          </div>
        </ScrollArea>
      </div>
    </SheetContent>
    </Sheet>
  </>
  )
}
