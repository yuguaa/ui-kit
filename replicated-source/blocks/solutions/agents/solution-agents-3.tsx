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
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/base/ui/alert"
import {
  Avatar,
  AvatarGroup,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
import {
  ComboboxChip,
  ComboboxChips,
} from "@/registry/bases/base/ui/combobox"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Field,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="bg-background flex items-start justify-center max-w-[1320px] md:p-4 min-h-svh mx-auto p-3 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Run Detail"}
      </h1>
      <div className="@container flex flex-col gap-4 w-full">
        <header className="flex flex-wrap gap-3 items-center justify-between">
          <div className="flex gap-1.5 items-center min-w-0">
            <Button type="button" tabIndex="0" aria-label="Back to the run queue" extracted="1">
              <svg className="lucide lucide-arrow-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftIcon" tabler="IconArrowLeft" hugeicons="ArrowLeft02Icon" phosphor="ArrowLeftIcon" remixicon="RiArrowLeftLine" aria-hidden="true">
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
            </Button>
            <div className="flex flex-col gap-0.5 min-w-0">
              <div className="flex flex-wrap gap-2 items-center min-w-0">
                <span className="text-muted-foreground text-sm">
                  {"Run Queue /"}
                </span>
                <h2 className="font-semibold leading-tight text-foreground text-lg tracking-tight">
                  {"RUN-4822"}
                </h2>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                  <svg className="lucide lucide-triangle-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="AlertTriangleIcon" tabler="IconAlertTriangle" hugeicons="Alert01Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                  {"Failed"}
                </Badge>
              </div>
              <p className="min-w-0 text-muted-foreground text-sm truncate">
                {"Refund Resolver · Production"}
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center shrink-0">
            <AvatarGroup className="-space-x-1" aria-label="Owners watching this run">
              <Avatar className="ring-2 ring-background size-6" size="default">
                <AvatarImage alt="Maya Perez" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <Avatar className="ring-2 ring-background size-6" size="default">
                <AvatarImage alt="Noa Kim" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
            </AvatarGroup>
            <Separator className="h-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
            <Button type="button" tabIndex="0">
              <svg className="lucide lucide-circle-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="hidden md:block">
                {"Approve"}
              </span>
            </Button>
            <Button type="button" tabIndex="0">
              <svg className="lucide lucide-refresh-cw size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                <path d="M21 3v5h-5"></path>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                <path d="M8 16H3v5"></path>
              </svg>
              <span className="hidden md:block">
                {"Retry Step"}
              </span>
            </Button>
            <Button type="button" tabIndex="0" aria-label="Pause the run">
              <svg className="lucide lucide-pause size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PauseIcon" tabler="IconPlayerPause" hugeicons="PauseIcon" phosphor="PauseIcon" remixicon="RiPauseLine" aria-hidden="true">
                <rect x="14" y="3" width="5" height="18" rx="1"></rect>
                <rect x="5" y="3" width="5" height="18" rx="1"></rect>
              </svg>
            </Button>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More run actions" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false">
              <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </header>
        <div className="@4xl:grid-cols-3 gap-4 grid grid-cols-1 items-start">
          <div className="@4xl:col-span-2 min-w-0">
            <Frame className="w-full" spacing="sm">
              <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <div className="font-semibold text-sm">
                    {"Step Trace"}
                  </div>
                  <div className="hidden sm:block text-muted-foreground text-sm truncate">
                    {"Failed at step 3 of 6"}
                  </div>
                </div>
              </header>
              <FramePanel>
                <Timeline data-orientation="vertical">
                  <TimelineItem completed="true">
                    <TimelineHeader>
                      <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                      <div className="flex flex-wrap gap-2 items-center min-w-0">
                        <TimelineTitle className="font-semibold">
                          {"Plan the refund approach"}
                        </TimelineTitle>
                        <span className="tabular-nums text-muted-foreground text-xs">
                          {"14s"}
                        </span>
                      </div>
                      <TimelineIndicator className="bg-muted border-none flex group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground items-center justify-center size-5 text-muted-foreground" aria-hidden="true">
                        <svg className="lucide lucide-check size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </TimelineIndicator>
                    </TimelineHeader>
                    <TimelineContent className="mt-2">
                      <Frame spacing="sm">
                        <Collapsible className="group/collapsible" data-closed="">
                          <Collapsible>
                          <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle Plan the refund approach tool calls">
                            <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                              <span className="font-medium min-w-0 text-muted-foreground text-sm truncate">
                                {"2 tool calls"}
                              </span>
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
                  <TimelineItem completed="true">
                    <TimelineHeader>
                      <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                      <div className="flex flex-wrap gap-2 items-center min-w-0">
                        <TimelineTitle className="font-semibold">
                          {"Validate the refund policy"}
                        </TimelineTitle>
                        <span className="tabular-nums text-muted-foreground text-xs">
                          {"9s"}
                        </span>
                      </div>
                      <TimelineIndicator className="bg-muted border-none flex group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground items-center justify-center size-5 text-muted-foreground" aria-hidden="true">
                        <svg className="lucide lucide-check size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </TimelineIndicator>
                    </TimelineHeader>
                    <TimelineContent className="mt-2">
                      <Frame spacing="sm">
                        <Collapsible className="group/collapsible" data-closed="">
                          <Collapsible>
                          <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle Validate the refund policy tool calls">
                            <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                              <span className="font-medium min-w-0 text-muted-foreground text-sm truncate">
                                {"1 tool call"}
                              </span>
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
                  <TimelineItem>
                    <TimelineHeader>
                      <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                      <div className="flex flex-wrap gap-2 items-center min-w-0">
                        <TimelineTitle className="font-semibold">
                          {"Capture the partial refund"}
                        </TimelineTitle>
                        <span className="tabular-nums text-muted-foreground text-xs">
                          {"12s"}
                        </span>
                      </div>
                      <TimelineIndicator className="bg-destructive/10 border-none dark:bg-destructive/20 flex group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground items-center justify-center size-5 text-destructive" aria-hidden="true">
                        <svg className="lucide lucide-x size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </TimelineIndicator>
                    </TimelineHeader>
                    <TimelineContent className="mt-2">
                      <Frame spacing="sm">
                        <Collapsible className="group/collapsible" data-open="">
                          <Collapsible>
                          <CollapsibleTrigger className="flex w-full" type="button" panelOpen="" tabIndex="0" aria-disabled="false" aria-controls="base-ui-_r_7_" aria-expanded="true" aria-label="Toggle Capture the partial refund tool calls">
                            <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                              <span className="font-medium min-w-0 text-muted-foreground text-sm truncate">
                                {"2 tool calls"}
                              </span>
                              <svg className="duration-200 group-data-open/collapsible:rotate-90 lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                            </header>
                          </CollapsibleTrigger>
                          </Collapsible>
                          <CollapsibleContent data-open="" id="base-ui-_r_7_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                            <FramePanel className="space-y-3">
                              <div className="space-y-3">
                                <p className="leading-5 text-muted-foreground text-xs">
                                  {"The processor declined the partial capture on the original card."}
                                </p>
                                <div className="border-t pt-2.5 space-y-2.5">
                                  <div className="flex flex-wrap gap-x-3 gap-y-1 items-center justify-between min-w-0">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="font-medium font-mono text-foreground text-xs truncate">
                                        {"payments.refunds.create"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"402 card_declined, attempt 1 of 3"}
                                      </span>
                                    </div>
                                    <div className="flex gap-2 items-center shrink-0">
                                      <span className="tabular-nums text-muted-foreground text-xs">
                                        {"6.1s"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                        {"Failed"}
                                      </Badge>
                                    </div>
                                  </div>
                                  <div className="flex flex-wrap gap-x-3 gap-y-1 items-center justify-between min-w-0">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="font-medium font-mono text-foreground text-xs truncate">
                                        {"payments.refunds.create"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"402 card_declined, attempt 2 of 3"}
                                      </span>
                                    </div>
                                    <div className="flex gap-2 items-center shrink-0">
                                      <span className="tabular-nums text-muted-foreground text-xs">
                                        {"5.8s"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                        {"Failed"}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <Alert className="[&>svg:not([class*=size-])]:size-4 [&>svg]:text-destructive bg-destructive/4 border border-destructive/30 gap-y-0.5 grid grid-cols-[0_1fr] has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start has-[>svg]:gap-x-2.5 has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] items-center px-3 py-2.5 style-luma:rounded-2xl style-lyra:rounded-none style-maia:rounded-lg style-mira:rounded-lg style-nova:rounded-lg style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-lg text-sm" role="alert">
                                  <svg className="lucide lucide-circle-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="AlertCircleIcon" tabler="IconAlertCircle" hugeicons="AlertCircleIcon" phosphor="WarningCircleIcon" remixicon="RiErrorWarningLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" x2="12" y1="8" y2="12"></line>
                                    <line x1="12" x2="12.01" y1="16" y2="16"></line>
                                  </svg>
                                  <AlertTitle className="col-start-2 font-medium line-clamp-1 min-h-4 tracking-tight">
                                    {"Partial Capture Declined"}
                                  </AlertTitle>
                                  <AlertAction className="flex gap-1.5 max-sm:col-start-2 max-sm:justify-start max-sm:mt-2 sm:col-start-3 sm:justify-end sm:row-start-1 sm:self-center">
                                    <Button type="button" tabIndex="0">
                                      {"Retry Step"}
                                    </Button>
                                  </AlertAction>
                                  <AlertDescription className="[&_p]:leading-relaxed col-start-2 gap-1 grid justify-items-start text-muted-foreground text-sm">
                                    {"payments.refunds.create returned 402 card_declined. Retry with a manual amount or credit the account instead."}
                                  </AlertDescription>
                                </Alert>
                              </div>
                            </FramePanel>
                          </CollapsibleContent>
                        </Collapsible>
                      </Frame>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineHeader>
                      <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                      <div className="flex flex-wrap gap-2 items-center min-w-0">
                        <TimelineTitle className="font-semibold">
                          {"Verify the refund landed"}
                        </TimelineTitle>
                      </div>
                      <TimelineIndicator className="bg-muted border-none flex group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground items-center justify-center size-5 text-muted-foreground" aria-hidden="true">
                        <svg className="lucide lucide-circle size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                      </TimelineIndicator>
                    </TimelineHeader>
                    <TimelineContent className="mt-2">
                      <Frame spacing="sm">
                        <Collapsible className="group/collapsible" data-closed="">
                          <Collapsible>
                          <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle Verify the refund landed tool calls">
                            <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                              <span className="font-medium min-w-0 text-muted-foreground text-sm truncate">
                                {"0 tool calls"}
                              </span>
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
                  <TimelineItem>
                    <TimelineHeader>
                      <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                      <div className="flex flex-wrap gap-2 items-center min-w-0">
                        <TimelineTitle className="font-semibold">
                          {"Notify the customer"}
                        </TimelineTitle>
                      </div>
                      <TimelineIndicator className="bg-muted border-none flex group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground items-center justify-center size-5 text-muted-foreground" aria-hidden="true">
                        <svg className="lucide lucide-circle size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                      </TimelineIndicator>
                    </TimelineHeader>
                    <TimelineContent className="mt-2">
                      <Frame spacing="sm">
                        <Collapsible className="group/collapsible" data-closed="">
                          <Collapsible>
                          <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle Notify the customer tool calls">
                            <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                              <span className="font-medium min-w-0 text-muted-foreground text-sm truncate">
                                {"0 tool calls"}
                              </span>
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
                  <TimelineItem>
                    <TimelineHeader>
                      <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                      <div className="flex flex-wrap gap-2 items-center min-w-0">
                        <TimelineTitle className="font-semibold">
                          {"Write back to the order record"}
                        </TimelineTitle>
                      </div>
                      <TimelineIndicator className="bg-muted border-none flex group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground items-center justify-center size-5 text-muted-foreground" aria-hidden="true">
                        <svg className="lucide lucide-circle size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                      </TimelineIndicator>
                    </TimelineHeader>
                    <TimelineContent className="mt-2">
                      <Frame spacing="sm">
                        <Collapsible className="group/collapsible" data-closed="">
                          <Collapsible>
                          <CollapsibleTrigger className="flex w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false" aria-label="Toggle Write back to the order record tool calls">
                            <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                              <span className="font-medium min-w-0 text-muted-foreground text-sm truncate">
                                {"0 tool calls"}
                              </span>
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
              </FramePanel>
            </Frame>
          </div>
          <div className="min-w-0">
            <form className="w-full" id="run-settings">
              <Frame className="group w-full" spacing="sm">
                <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <div className="font-semibold text-sm">
                      {"Run Settings"}
                    </div>
                    <div className="hidden sm:block text-muted-foreground text-sm truncate">
                      {"Applied to this run's retries and notifications."}
                    </div>
                  </div>
                </header>
                <FramePanel className="p-0">
                  <Field className="gap-x-2 gap-y-1 grid group/row px-4 py-1.5 sm:gap-4 sm:grid-cols-[minmax(7.75rem,0.5fr)_minmax(0,1.5fr)] sm:items-center" role="group" data-orientation="vertical">
                    <FieldLabel className="cn-field-title font-normal gap-1 items-center min-w-0 text-muted-foreground text-sm">
                      <span className="min-w-0 truncate">
                        {"Status"}
                      </span>
                    </FieldLabel>
                    <div className="col-start-1 items-center min-h-8 min-w-0 relative row-start-2 sm:col-start-2 sm:row-start-1">
                      <button className="active:bg-muted/40 border border-transparent duration-150 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/value h-8 hover:bg-muted/40 items-center min-w-0 opacity-100 outline-none px-2.5 relative rounded-md sm:group-hover/row:bg-muted/40 text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit Status" aria-hidden="false">
                        <span className="flex items-center min-w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                            <svg className="lucide lucide-triangle-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="AlertTriangleIcon" tabler="IconAlertTriangle" hugeicons="Alert01Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                              <path d="M12 9v4"></path>
                              <path d="M12 17h.01"></path>
                            </svg>
                            {"Failed"}
                          </Badge>
                        </span>
                        <Item className="ml-1.5 opacity-100 p-0 size-5 sm:group-focus-visible/value:opacity-100 sm:group-hover/row:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity" variant="default" size="default">
                          <ItemMedia className="size-auto" variant="icon">
                            <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                              <path d="m15 5 4 4"></path>
                            </svg>
                          </ItemMedia>
                        </Item>
                      </button>
                      <div className="absolute duration-150 inset-x-0 min-w-0 opacity-0 pointer-events-none top-0 transition-opacity" aria-hidden="true" inert="">
                        <InputGroup className="box-border h-8 has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none!" role="group">
                          <Select>
                          <SelectTrigger className="border-0 flex-1 focus-visible:ring-0 focus:ring-0 h-8 min-w-0 px-2.5 shadow-none" type="button" tabIndex="0" id="run-settings-status" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                            <SelectValue>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                <svg className="lucide lucide-triangle-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="AlertTriangleIcon" tabler="IconAlertTriangle" hugeicons="Alert01Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                  <path d="M12 9v4"></path>
                                  <path d="M12 17h.01"></path>
                                </svg>
                                {"Failed"}
                              </Badge>
                            </SelectValue>
                            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                              {"▼"}
                            </svg>
                          </SelectTrigger>
                          </Select>
                          <input id="base-ui-_r_b_-hidden-input" tabIndex="-1" aria-hidden="true" value="failed" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          <InputGroupAddon className="gap-1 pr-2" role="group" data-align="inline-end">
                            <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Discard Status">
                              <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                            </Button>
                            <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Save Status">
                              <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </Button>
                          </InputGroupAddon>
                        </InputGroup>
                      </div>
                    </div>
                  </Field>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <Field className="gap-x-2 gap-y-1 grid group/row px-4 py-1.5 sm:gap-4 sm:grid-cols-[minmax(7.75rem,0.5fr)_minmax(0,1.5fr)] sm:items-center" role="group" data-orientation="vertical">
                    <FieldLabel className="cn-field-title font-normal gap-1 items-center min-w-0 text-muted-foreground text-sm">
                      <span className="min-w-0 truncate">
                        {"Priority"}
                      </span>
                    </FieldLabel>
                    <div className="col-start-1 items-center min-h-8 min-w-0 relative row-start-2 sm:col-start-2 sm:row-start-1">
                      <button className="active:bg-muted/40 border border-transparent duration-150 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/value h-8 hover:bg-muted/40 items-center min-w-0 opacity-100 outline-none px-2.5 relative rounded-md sm:group-hover/row:bg-muted/40 text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit Priority" aria-hidden="false">
                        <span className="flex items-center min-w-0">
                          <span className="flex font-medium gap-2 items-center min-h-8 min-w-0 text-foreground text-sm">
                            <span className="flex items-center shrink-0 text-muted-foreground">
                              <svg className="lucide lucide-zap size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 truncate">
                              {"High"}
                            </span>
                          </span>
                        </span>
                        <Item className="ml-1.5 opacity-100 p-0 size-5 sm:group-focus-visible/value:opacity-100 sm:group-hover/row:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity" variant="default" size="default">
                          <ItemMedia className="size-auto" variant="icon">
                            <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                              <path d="m15 5 4 4"></path>
                            </svg>
                          </ItemMedia>
                        </Item>
                      </button>
                      <div className="absolute duration-150 inset-x-0 min-w-0 opacity-0 pointer-events-none top-0 transition-opacity" aria-hidden="true" inert="">
                        <InputGroup className="box-border h-8 has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none!" role="group">
                          <Select>
                          <SelectTrigger className="border-0 flex-1 focus-visible:ring-0 focus:ring-0 h-8 min-w-0 px-2.5 shadow-none" type="button" tabIndex="0" id="run-settings-priority" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                            <SelectValue>
                              <span className="flex font-medium gap-2 items-center min-h-8 min-w-0 text-foreground text-sm">
                                <span className="flex items-center shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-zap size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                  </svg>
                                </span>
                                <span className="min-w-0 truncate">
                                  {"High"}
                                </span>
                              </span>
                            </SelectValue>
                            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                              {"▼"}
                            </svg>
                          </SelectTrigger>
                          </Select>
                          <input id="base-ui-_r_e_-hidden-input" tabIndex="-1" aria-hidden="true" value="high" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          <InputGroupAddon className="gap-1 pr-2" role="group" data-align="inline-end">
                            <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Discard Priority">
                              <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                            </Button>
                            <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Save Priority">
                              <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </Button>
                          </InputGroupAddon>
                        </InputGroup>
                      </div>
                    </div>
                  </Field>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <Field className="gap-x-2 gap-y-1 grid group/row px-4 py-1.5 sm:gap-4 sm:grid-cols-[minmax(7.75rem,0.5fr)_minmax(0,1.5fr)] sm:items-start" role="group" data-orientation="vertical">
                    <FieldLabel className="cn-field-title font-normal gap-1 items-center min-w-0 sm:min-h-8 text-muted-foreground text-sm">
                      <span className="min-w-0 truncate">
                        {"Owners"}
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="-my-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Owners info" id="base-ui-_r_i_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </FieldLabel>
                    <div className="col-start-1 items-start min-h-8 min-w-0 relative row-start-2 sm:col-start-2 sm:row-start-1">
                      <button className="active:bg-muted/40 border border-transparent duration-150 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/value h-auto hover:bg-muted/40 items-start min-h-8 min-w-0 opacity-100 outline-none px-2.5 py-1 relative rounded-md sm:group-hover/row:bg-muted/40 text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit Owners" aria-hidden="false">
                        <span className="flex items-start min-w-0">
                          <span className="flex flex-wrap gap-1.5 items-center min-h-6 min-w-0 overflow-visible">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-0 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <Avatar className="size-3.5" size="default">
                                <AvatarImage alt="Maya Perez" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="max-w-32 truncate">
                                {"Maya Perez"}
                              </span>
                            </Badge>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-0 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <Avatar className="size-3.5" size="default">
                                <AvatarImage alt="Noa Kim" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="max-w-32 truncate">
                                {"Noa Kim"}
                              </span>
                            </Badge>
                          </span>
                        </span>
                        <Item className="ml-1.5 opacity-100 p-0 size-5 sm:group-focus-visible/value:opacity-100 sm:group-hover/row:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity" variant="default" size="default">
                          <ItemMedia className="size-auto" variant="icon">
                            <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                              <path d="m15 5 4 4"></path>
                            </svg>
                          </ItemMedia>
                        </Item>
                      </button>
                      <div className="absolute duration-150 inset-x-0 min-w-0 opacity-0 pointer-events-none top-0 transition-opacity" aria-hidden="true" inert="">
                        <InputGroup className="box-border h-auto! has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none! items-start min-h-8!" role="group">
                          <ComboboxChips className="bg-transparent border-0 flex-1 flex-wrap! focus-within:ring-0 gap-1.5 h-auto! has-data-[slot=combobox-chip]:pl-1 items-center min-h-8! overflow-visible px-2 py-1! ring-0 shadow-none" role="toolbar">
                            <ComboboxChip className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 inline-flex items-center justify-center min-w-0 outline-none px-1.25 py-0.5 relative shrink-0 style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow w-fit whitespace-nowrap" tabIndex="-1">
                              <Avatar className="size-4" size="default">
                                <AvatarImage alt="Maya Perez" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              {"Maya Perez"}
                              <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost cn-combobox-chip-remove disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-disabled="false">
                                <svg className="cn-combobox-chip-indicator-icon lucide lucide-x pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path>
                                </svg>
                              </button>
                            </ComboboxChip>
                            <ComboboxChip className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 inline-flex items-center justify-center min-w-0 outline-none px-1.25 py-0.5 relative shrink-0 style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow w-fit whitespace-nowrap" tabIndex="-1">
                              <Avatar className="size-4" size="default">
                                <AvatarImage alt="Noa Kim" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              {"Noa Kim"}
                              <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost cn-combobox-chip-remove disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-disabled="false">
                                <svg className="cn-combobox-chip-indicator-icon lucide lucide-x pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path>
                                </svg>
                              </button>
                            </ComboboxChip>
                            <input className="bg-transparent cn-combobox-chip-input flex-1 min-w-20 outline-none" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" id="base-ui-_r_j_" placeholder="" type="text" value="" />
                          </ComboboxChips>
                          <input id="base-ui-_r_j_-hidden-input" tabIndex="-1" aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          <InputGroupAddon className="gap-1 pr-2 pt-1 self-start" role="group" data-align="inline-end">
                            <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Discard Owners">
                              <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                            </Button>
                            <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Save Owners">
                              <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </Button>
                          </InputGroupAddon>
                        </InputGroup>
                      </div>
                    </div>
                  </Field>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <Field className="gap-x-2 gap-y-1 grid group/row px-4 py-1.5 sm:gap-4 sm:grid-cols-[minmax(7.75rem,0.5fr)_minmax(0,1.5fr)] sm:items-center" role="group" data-orientation="vertical">
                    <FieldLabel className="cn-field-title font-normal gap-1 items-center min-w-0 text-muted-foreground text-sm">
                      <span className="min-w-0 truncate">
                        {"Retry Policy"}
                      </span>
                    </FieldLabel>
                    <div className="col-start-1 items-center min-h-8 min-w-0 relative row-start-2 sm:col-start-2 sm:row-start-1">
                      <button className="active:bg-muted/40 border border-transparent duration-150 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/value h-8 hover:bg-muted/40 items-center min-w-0 opacity-100 outline-none px-2.5 relative rounded-md sm:group-hover/row:bg-muted/40 text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit Retry Policy" aria-hidden="false">
                        <span className="flex items-center min-w-0">
                          <span className="flex font-medium gap-2 items-center min-h-8 min-w-0 text-foreground text-sm">
                            <span className="flex items-center shrink-0 text-muted-foreground">
                              <svg className="lucide lucide-refresh-cw size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                                <path d="M21 3v5h-5"></path>
                                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                                <path d="M8 16H3v5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 truncate">
                              {"Exponential backoff"}
                            </span>
                          </span>
                        </span>
                        <Item className="ml-1.5 opacity-100 p-0 size-5 sm:group-focus-visible/value:opacity-100 sm:group-hover/row:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity" variant="default" size="default">
                          <ItemMedia className="size-auto" variant="icon">
                            <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                              <path d="m15 5 4 4"></path>
                            </svg>
                          </ItemMedia>
                        </Item>
                      </button>
                      <div className="absolute duration-150 inset-x-0 min-w-0 opacity-0 pointer-events-none top-0 transition-opacity" aria-hidden="true" inert="">
                        <InputGroup className="box-border h-8 has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none!" role="group">
                          <Select>
                          <SelectTrigger className="border-0 flex-1 focus-visible:ring-0 focus:ring-0 h-8 min-w-0 px-2.5 shadow-none" type="button" tabIndex="0" id="run-settings-retry-policy" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                            <SelectValue>
                              <span className="flex font-medium gap-2 items-center min-h-8 min-w-0 text-foreground text-sm">
                                <span className="flex items-center shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-refresh-cw size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                                    <path d="M21 3v5h-5"></path>
                                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                                    <path d="M8 16H3v5"></path>
                                  </svg>
                                </span>
                                <span className="min-w-0 truncate">
                                  {"Exponential backoff"}
                                </span>
                              </span>
                            </SelectValue>
                            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                              {"▼"}
                            </svg>
                          </SelectTrigger>
                          </Select>
                          <input id="base-ui-_r_m_-hidden-input" tabIndex="-1" aria-hidden="true" value="exponential" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          <InputGroupAddon className="gap-1 pr-2" role="group" data-align="inline-end">
                            <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Discard Retry Policy">
                              <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                            </Button>
                            <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Save Retry Policy">
                              <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </Button>
                          </InputGroupAddon>
                        </InputGroup>
                      </div>
                    </div>
                  </Field>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <Field className="gap-x-2 gap-y-1 grid group/row px-4 py-1.5 sm:gap-4 sm:grid-cols-[minmax(7.75rem,0.5fr)_minmax(0,1.5fr)] sm:items-center" role="group" data-orientation="vertical">
                    <FieldLabel className="cn-field-title font-normal gap-1 items-center min-w-0 text-muted-foreground text-sm">
                      <span className="min-w-0 truncate">
                        {"Max Retries"}
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="-my-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Max Retries info" id="base-ui-_r_q_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </FieldLabel>
                    <div className="col-start-1 items-center min-h-8 min-w-0 relative row-start-2 sm:col-start-2 sm:row-start-1">
                      <button className="active:bg-muted/40 border border-transparent duration-150 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/value h-8 hover:bg-muted/40 items-center min-w-0 opacity-100 outline-none px-2.5 relative rounded-md sm:group-hover/row:bg-muted/40 text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit Max Retries" aria-hidden="false">
                        <span className="flex items-center min-w-0">
                          <span className="flex font-medium gap-2 items-center min-h-8 min-w-0 text-foreground text-sm">
                            <span className="flex items-center shrink-0 text-muted-foreground">
                              <svg className="lucide lucide-hash size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HashIcon" tabler="IconHash" hugeicons="HashtagIcon" phosphor="HashIcon" remixicon="RiHashtag" aria-hidden="true">
                                <line x1="4" x2="20" y1="9" y2="9"></line>
                                <line x1="4" x2="20" y1="15" y2="15"></line>
                                <line x1="10" x2="8" y1="3" y2="21"></line>
                                <line x1="16" x2="14" y1="3" y2="21"></line>
                              </svg>
                            </span>
                            <span className="min-w-0 truncate">
                              {"3 per step"}
                            </span>
                          </span>
                        </span>
                        <Item className="ml-1.5 opacity-100 p-0 size-5 sm:group-focus-visible/value:opacity-100 sm:group-hover/row:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity" variant="default" size="default">
                          <ItemMedia className="size-auto" variant="icon">
                            <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                              <path d="m15 5 4 4"></path>
                            </svg>
                          </ItemMedia>
                        </Item>
                      </button>
                      <div className="absolute duration-150 inset-x-0 min-w-0 opacity-0 pointer-events-none top-0 transition-opacity" aria-hidden="true" inert="">
                        <InputGroup className="box-border h-8 has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none!" role="group">
                          <InputGroupAddon role="group" data-align="inline-start">
                            <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                              <svg className="lucide lucide-hash size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HashIcon" tabler="IconHash" hugeicons="HashtagIcon" phosphor="HashIcon" remixicon="RiHashtag" aria-hidden="true">
                                <line x1="4" x2="20" y1="9" y2="9"></line>
                                <line x1="4" x2="20" y1="15" y2="15"></line>
                                <line x1="10" x2="8" y1="3" y2="21"></line>
                                <line x1="16" x2="14" y1="3" y2="21"></line>
                              </svg>
                            </span>
                          </InputGroupAddon>
                          <input className="bg-transparent cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 focus-visible:ring-0! font-medium h-8 min-w-0 outline-none placeholder:text-muted-foreground text-left text-sm w-full" id="run-settings-max-retries" inputmode="numeric" value="3" />
                          <InputGroupAddon className="gap-1 pr-2" role="group" data-align="inline-end">
                            <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Discard Max Retries">
                              <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                            </Button>
                            <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Save Max Retries">
                              <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </Button>
                          </InputGroupAddon>
                        </InputGroup>
                      </div>
                    </div>
                  </Field>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <Field className="gap-x-2 gap-y-1 grid group/row px-4 py-1.5 sm:gap-4 sm:grid-cols-[minmax(7.75rem,0.5fr)_minmax(0,1.5fr)] sm:items-center" role="group" data-orientation="vertical">
                    <FieldLabel className="cn-field-title font-normal gap-1 items-center min-w-0 text-muted-foreground text-sm">
                      <span className="min-w-0 truncate">
                        {"On Failure"}
                      </span>
                    </FieldLabel>
                    <div className="col-start-1 items-center min-h-8 min-w-0 relative row-start-2 sm:col-start-2 sm:row-start-1">
                      <button className="active:bg-muted/40 border border-transparent duration-150 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/value h-8 hover:bg-muted/40 items-center min-w-0 opacity-100 outline-none px-2.5 relative rounded-md sm:group-hover/row:bg-muted/40 text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit On Failure" aria-hidden="false">
                        <span className="flex items-center min-w-0">
                          <span className="flex font-medium gap-2 items-center min-h-8 min-w-0 text-foreground text-sm">
                            <span className="flex items-center shrink-0 text-muted-foreground">
                              <svg className="lucide lucide-bell size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                                <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 truncate">
                              {"Notify owners"}
                            </span>
                          </span>
                        </span>
                        <Item className="ml-1.5 opacity-100 p-0 size-5 sm:group-focus-visible/value:opacity-100 sm:group-hover/row:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity" variant="default" size="default">
                          <ItemMedia className="size-auto" variant="icon">
                            <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                              <path d="m15 5 4 4"></path>
                            </svg>
                          </ItemMedia>
                        </Item>
                      </button>
                      <div className="absolute duration-150 inset-x-0 min-w-0 opacity-0 pointer-events-none top-0 transition-opacity" aria-hidden="true" inert="">
                        <InputGroup className="box-border h-8 has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none!" role="group">
                          <div className="flex flex-1 gap-3 h-8 items-center justify-between min-w-0 px-2.5">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="run-settings-notify" id="run-settings-notify-label">
                              <span className="flex font-medium gap-2 items-center min-h-8 min-w-0 text-foreground text-sm">
                                <span className="flex items-center shrink-0 text-muted-foreground">
                                  <svg className="lucide lucide-bell size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                                    <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                    <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                                  </svg>
                                </span>
                                <span className="min-w-0 truncate">
                                  {"Notify owners"}
                                </span>
                              </span>
                            </FieldLabel>
                            <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_s_" aria-checked="true" size="sm" aria-labelledby="run-settings-notify-label">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                            </Switch>
                            <input id="run-settings-notify" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </div>
                          <InputGroupAddon className="gap-1 pr-2" role="group" data-align="inline-end">
                            <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Discard On Failure">
                              <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                            </Button>
                            <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Save On Failure">
                              <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </Button>
                          </InputGroupAddon>
                        </InputGroup>
                      </div>
                    </div>
                  </Field>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <Field className="gap-x-2 gap-y-1 grid group/row px-4 py-1.5 sm:gap-4 sm:grid-cols-[minmax(7.75rem,0.5fr)_minmax(0,1.5fr)] sm:items-center" role="group" data-orientation="vertical">
                    <FieldLabel className="cn-field-title font-normal gap-1 items-center min-w-0 text-muted-foreground text-sm">
                      <span className="min-w-0 truncate">
                        {"Started"}
                      </span>
                    </FieldLabel>
                    <div className="col-start-1 flex items-center min-h-8 min-w-0 px-2.5 row-start-2 sm:col-start-2 sm:row-start-1">
                      <span className="flex font-medium gap-2 items-center min-h-8 min-w-0 text-foreground text-sm">
                        <span className="flex items-center shrink-0 text-muted-foreground">
                          <svg className="lucide lucide-clock size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 6v6l4 2"></path>
                          </svg>
                        </span>
                        <span className="min-w-0 truncate">
                          {"Jun 10, 12:38"}
                        </span>
                      </span>
                    </div>
                  </Field>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <Field className="gap-x-2 gap-y-1 grid group/row px-4 py-1.5 sm:gap-4 sm:grid-cols-[minmax(7.75rem,0.5fr)_minmax(0,1.5fr)] sm:items-center" role="group" data-orientation="vertical">
                    <FieldLabel className="cn-field-title font-normal gap-1 items-center min-w-0 text-muted-foreground text-sm">
                      <span className="min-w-0 truncate">
                        {"Last Activity"}
                      </span>
                    </FieldLabel>
                    <div className="col-start-1 flex items-center min-h-8 min-w-0 px-2.5 row-start-2 sm:col-start-2 sm:row-start-1">
                      <span className="flex font-medium gap-2 items-center min-h-8 min-w-0 text-foreground text-sm">
                        <span className="flex items-center shrink-0 text-muted-foreground">
                          <svg className="lucide lucide-circle-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0 truncate">
                          {"8 min ago"}
                        </span>
                      </span>
                    </div>
                  </Field>
                </FramePanel>
              </Frame>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
