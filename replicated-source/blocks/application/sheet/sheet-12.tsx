import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/registry-neui/bases/base/neui/code-block/code-block"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/base/ui/accordion"
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/base/ui/alert"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Cron job"}
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Sheet>
        <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
          <svg className="lucide lucide-calendar-clock" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" data-icon="inline-start" aria-hidden="true">
            <path d="M16 14v2.2l1.6 1"></path>
            <path d="M16 2v4"></path>
            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
            <path d="M3 10h5"></path>
            <path d="M8 2v4"></path>
            <circle cx={16} cy={16} r={6}></circle>
          </svg>
          {"Open Job"}
        </SheetTrigger>
        </Sheet>
      </div>
    </main>
    <Sheet>
    <SheetContent className="flex flex-col gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(36rem,calc(100vw-2rem))]" data-open="" tabIndex={-1} baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" style={{"--nested-dialogs": "0"}} aria-labelledby="base-ui-_r_d_" aria-describedby="base-ui-_r_e_">
      <div className="border-b flex flex-col px-5 py-3.5 shrink-0">
        <div className="flex gap-2 items-center justify-between">
          <div className="flex gap-1 items-center min-w-0">
            <span className="font-mono min-w-0 text-muted-foreground text-xs truncate">
              {"JOB-219"}
            </span>
            <Button type="button" tabIndex={0} aria-label="Copy job ID">
              <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
            </Button>
          </div>
          <div className="flex gap-1 items-center shrink-0">
            <ButtonGroup role="group" aria-label="Jobs">
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Previous job" id="base-ui-_r_5_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-chevron-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine" aria-hidden="true">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-16 tabular-nums text-xs">
                {"2 of 32"}
              </div>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Next job" id="base-ui-_r_7_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
            </ButtonGroup>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More job actions" aria-haspopup="menu" id="base-ui-_r_b_" aria-expanded="false">
              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                <circle cx={12} cy={12} r={1}></circle>
                <circle cx={19} cy={12} r={1}></circle>
                <circle cx={5} cy={12} r={1}></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <Button type="button" tabIndex={0} aria-label="Close">
              <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 items-center min-w-0 mt-1">
          <SheetTitle className="min-w-0 text-lg" id="base-ui-_r_d_">
            {"Import bank settlement files"}
          </SheetTitle>
          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
            {"Failing"}
          </Badge>
        </div>
        <SheetDescription className="mt-1" id="base-ui-_r_e_">
          <span className="flex flex-wrap gap-1.5 items-center min-w-0">
            <span className="font-mono">
              {"30 * * * *"}
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span>
              {"Hourly at :30 UTC"}
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span className="[&_svg:not([class*=size-])]:size-3.5 flex gap-1.5 items-center min-w-0">
              <svg className="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                <ellipse cx={12} cy={5} rx={9} ry={3}></ellipse>
                <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                <path d="M3 12A9 3 0 0 0 21 12"></path>
              </svg>
              <span className="truncate">
                {"ledger-worker"}
              </span>
            </span>
          </span>
        </SheetDescription>
        <div className="flex gap-2 items-center mt-2.5">
          <Button type="button" tabIndex={0}>
            <svg className="lucide lucide-play" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlayIcon" tabler="IconPlayerPlay" hugeicons="PlayIcon" phosphor="PlayIcon" remixicon="RiPlayLine" aria-hidden="true">
              <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
            </svg>
            {"Run Now"}
          </Button>
          <Button type="button" tabIndex={0}>
            <svg className="lucide lucide-pause" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PauseIcon" tabler="IconPlayerPause" hugeicons="PauseIcon" phosphor="PauseIcon" remixicon="RiPauseLine" aria-hidden="true">
              <rect x={14} y={3} width={5} height={18} rx={1}></rect>
              <rect x={5} y={3} width={5} height={18} rx={1}></rect>
            </svg>
            {"Pause"}
          </Button>
        </div>
      </div>
      <Tabs className="flex-1 flex-col gap-0 min-h-0" data-orientation="horizontal" activationDirection="none">
        <div className="border-b px-5 shrink-0">
          <TabsList className="-mb-px gap-5 h-10! p-0" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
            <TabsTrigger className="after:-bottom-px! font-medium gap-1.5 h-full! px-0 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_f_" compositeItemActive="" aria-controls="base-ui-_r_i_">
              {"Overview"}
            </TabsTrigger>
            <TabsTrigger className="after:-bottom-px! font-medium gap-1.5 h-full! px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_g_">
              {"Runs"}
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                {"21"}
              </Badge>
            </TabsTrigger>
            <TabsTrigger className="after:-bottom-px! font-medium gap-1.5 h-full! px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_h_">
              {"Settings"}
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="flex-1 min-h-0 no-scrollbar overflow-y-auto scroll-fade-y scroll-py-10">
          <div className="flex flex-col gap-5 px-5 py-5">
            <TabsContent className="flex flex-col gap-5" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_i_" role="tabpanel" tabIndex={0} index="0" aria-labelledby="base-ui-_r_f_">
              <Alert className="[&>svg:not([class*=size-])]:size-4 [&>svg]:text-destructive bg-destructive/4 border border-destructive/30 gap-y-0.5 grid grid-cols-[0_1fr] has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start has-[>svg]:gap-x-2.5 has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] items-center px-3 py-2.5 style-luma:rounded-2xl style-lyra:rounded-none style-maia:rounded-lg style-mira:rounded-lg style-nova:rounded-lg style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-lg text-sm" role="alert">
                <svg className="lucide lucide-circle-alert" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="AlertCircleIcon" tabler="IconAlertCircle" hugeicons="AlertCircleIcon" phosphor="WarningCircleIcon" remixicon="RiErrorWarningLine" aria-hidden="true">
                  <circle cx={12} cy={12} r={10}></circle>
                  <line x1={12} x2={12} y1={8} y2={12}></line>
                  <line x1={12} x2={12.01} y1={16} y2={16}></line>
                </svg>
                <AlertTitle className="col-start-2 font-medium font-mono line-clamp-1 min-h-4 tracking-tight">
                  {"Exit 137"}
                </AlertTitle>
                <AlertAction className="flex gap-1.5 max-sm:col-start-2 max-sm:justify-start max-sm:mt-2 sm:col-start-3 sm:justify-end sm:row-start-1 sm:self-center">
                  <Button type="button" tabIndex={0}>
                    {"View Log"}
                  </Button>
                </AlertAction>
                <AlertDescription className="[&_p]:leading-relaxed col-start-2 gap-1 grid justify-items-start text-muted-foreground text-sm">
                  {"OOMKilled at the 2Gi memory limit. 4 failed runs in a row since 11:30 UTC."}
                </AlertDescription>
              </Alert>
              <Accordion data-orientation="vertical" dir="ltr" role="region">
                <AccordionItem data-orientation="vertical" index="0" data-open="">
                  <h3 className="flex" data-orientation="vertical" data-index="0" data-open="">
                    <AccordionTrigger className="[&>svg]:my-auto before:-inset-x-2 before:-z-10 before:absolute before:inset-y-0 before:rounded-lg before:transition-colors font-medium hover:before:bg-muted/50 hover:no-underline isolate text-muted-foreground text-xs" type="button" value="schedule,details,next-runs,run-durations,command" data-orientation="vertical" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_k_" aria-expanded="true" id="base-ui-_r_l_" tabIndex={0}>
                      {"Schedule"}
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </AccordionTrigger>
                  </h3>
                  <AccordionContent data-orientation="vertical" index="0" data-open="" id="base-ui-_r_k_" aria-labelledby="base-ui-_r_l_" role="region" style={{"--accordion-panel-height": "auto", "--accordion-panel-width": "auto", animationName: "none"}}>
                    <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 cn-accordion-content-inner data-ending-style:h-0 data-starting-style:h-0 flex flex-col gap-3 h-(--accordion-panel-height) min-w-0">
                      <dl className="gap-x-3 gap-y-1 grid grid-cols-5">
                        <div className="flex flex-col gap-1 min-w-0">
                          <dt className="text-muted-foreground text-xs truncate">
                            {"Minute"}
                          </dt>
                          <dd className="font-mono text-sm truncate">
                            {"30"}
                          </dd>
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                          <dt className="text-muted-foreground text-xs truncate">
                            {"Hour"}
                          </dt>
                          <dd className="font-mono text-sm truncate">
                            {"*"}
                          </dd>
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                          <dt className="text-muted-foreground text-xs truncate">
                            {"Day"}
                          </dt>
                          <dd className="font-mono text-sm truncate">
                            {"*"}
                          </dd>
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                          <dt className="text-muted-foreground text-xs truncate">
                            {"Month"}
                          </dt>
                          <dd className="font-mono text-sm truncate">
                            {"*"}
                          </dd>
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                          <dt className="text-muted-foreground text-xs truncate">
                            {"Weekday"}
                          </dt>
                          <dd className="font-mono text-sm truncate">
                            {"*"}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem data-orientation="vertical" index="1" data-open="">
                  <h3 className="flex" data-orientation="vertical" data-index="1" data-open="">
                    <AccordionTrigger className="[&>svg]:my-auto before:-inset-x-2 before:-z-10 before:absolute before:inset-y-0 before:rounded-lg before:transition-colors font-medium hover:before:bg-muted/50 hover:no-underline isolate text-muted-foreground text-xs" type="button" value="schedule,details,next-runs,run-durations,command" data-orientation="vertical" index="1" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_n_" aria-expanded="true" id="base-ui-_r_o_" tabIndex={0}>
                      {"Details"}
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </AccordionTrigger>
                  </h3>
                  <AccordionContent data-orientation="vertical" index="1" data-open="" id="base-ui-_r_n_" aria-labelledby="base-ui-_r_o_" role="region" style={{"--accordion-panel-height": "auto", "--accordion-panel-width": "auto", animationName: "none"}}>
                    <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 cn-accordion-content-inner data-ending-style:h-0 data-starting-style:h-0 flex flex-col gap-3 h-(--accordion-panel-height) min-w-0">
                      <dl className="gap-x-3 gap-y-2.5 grid grid-cols-[7rem_minmax(0,1fr)] text-sm">
                        <div className="contents">
                          <dt className="text-muted-foreground">
                            {"Runs"}
                          </dt>
                          <dd className="flex gap-1.5 items-center leading-5 min-w-0">
                            <span className="truncate">
                              {"Hourly at :30"}
                            </span>
                            <span className="text-muted-foreground truncate">
                              {"UTC"}
                            </span>
                          </dd>
                        </div>
                        <div className="contents">
                          <dt className="text-muted-foreground">
                            {"Next Run"}
                          </dt>
                          <dd className="flex gap-1.5 items-center leading-5 min-w-0">
                            <span className="tabular-nums truncate">
                              {"Tue, Sep 29, 14:30 UTC"}
                            </span>
                            <span className="text-muted-foreground truncate">
                              {"in 10m"}
                            </span>
                          </dd>
                        </div>
                        <div className="contents">
                          <dt className="text-muted-foreground">
                            {"Concurrency"}
                          </dt>
                          <dd className="flex gap-1.5 items-center leading-5 min-w-0">
                            {"Forbid"}
                            <span className="text-muted-foreground truncate">
                              {"skip if still running"}
                            </span>
                          </dd>
                        </div>
                        <div className="contents">
                          <dt className="text-muted-foreground">
                            {"Timeout"}
                          </dt>
                          <dd className="flex gap-1.5 items-center leading-5 min-w-0">
                            <span className="tabular-nums">
                              {"15 min"}
                            </span>
                          </dd>
                        </div>
                        <div className="contents">
                          <dt className="text-muted-foreground">
                            {"Retries"}
                          </dt>
                          <dd className="flex gap-1.5 items-center leading-5 min-w-0">
                            <span className="tabular-nums">
                              {"3"}
                            </span>
                          </dd>
                        </div>
                        <div className="contents">
                          <dt className="text-muted-foreground">
                            {"Alerts"}
                          </dt>
                          <dd className="flex gap-1.5 items-center leading-5 min-w-0">
                            {"Pages #sre-oncall"}
                          </dd>
                        </div>
                        <div className="contents">
                          <dt className="text-muted-foreground">
                            {"Target"}
                          </dt>
                          <dd className="flex gap-1.5 items-center leading-5 min-w-0">
                            <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                              <svg className="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                                <ellipse cx={12} cy={5} rx={9} ry={3}></ellipse>
                                <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                <path d="M3 12A9 3 0 0 0 21 12"></path>
                              </svg>
                              <span className="truncate">
                                {"ledger-worker"}
                              </span>
                            </span>
                            <span className="font-mono text-muted-foreground text-xs truncate">
                              {"prod-us-east-1"}
                            </span>
                          </dd>
                        </div>
                        <div className="contents">
                          <dt className="text-muted-foreground">
                            {"Environment"}
                          </dt>
                          <dd className="flex gap-1.5 items-center leading-5 min-w-0">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"Production"}
                            </Badge>
                          </dd>
                        </div>
                        <div className="contents">
                          <dt className="text-muted-foreground">
                            {"Owner"}
                          </dt>
                          <dd className="flex gap-1.5 items-center leading-5 min-w-0">
                            <span className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-5" size="sm">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="truncate">
                                {"Alex Johnson"}
                              </span>
                            </span>
                            <span className="text-muted-foreground truncate">
                              {"SRE"}
                            </span>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem data-orientation="vertical" index="2" data-open="">
                  <h3 className="flex" data-orientation="vertical" data-index="2" data-open="">
                    <AccordionTrigger className="[&>svg]:my-auto before:-inset-x-2 before:-z-10 before:absolute before:inset-y-0 before:rounded-lg before:transition-colors font-medium hover:before:bg-muted/50 hover:no-underline isolate text-muted-foreground text-xs" type="button" value="schedule,details,next-runs,run-durations,command" data-orientation="vertical" index="2" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_q_" aria-expanded="true" id="base-ui-_r_r_" tabIndex={0}>
                      {"Next 5 Runs"}
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </AccordionTrigger>
                  </h3>
                  <AccordionContent data-orientation="vertical" index="2" data-open="" id="base-ui-_r_q_" aria-labelledby="base-ui-_r_r_" role="region" style={{"--accordion-panel-height": "auto", "--accordion-panel-width": "auto", animationName: "none"}}>
                    <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 cn-accordion-content-inner data-ending-style:h-0 data-starting-style:h-0 flex flex-col gap-3 h-(--accordion-panel-height) min-w-0">
                      <ol className="flex flex-col gap-1.5 text-sm">
                        <li className="flex gap-3 items-center justify-between">
                          <span className="min-w-0 tabular-nums truncate">
                            {"Tue, Sep 29, 14:30 UTC"}
                          </span>
                          <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                            {"in 10m"}
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between">
                          <span className="min-w-0 tabular-nums truncate">
                            {"Tue, Sep 29, 15:30 UTC"}
                          </span>
                          <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                            {"in 1h 10m"}
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between">
                          <span className="min-w-0 tabular-nums truncate">
                            {"Tue, Sep 29, 16:30 UTC"}
                          </span>
                          <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                            {"in 2h 10m"}
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between">
                          <span className="min-w-0 tabular-nums truncate">
                            {"Tue, Sep 29, 17:30 UTC"}
                          </span>
                          <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                            {"in 3h 10m"}
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between">
                          <span className="min-w-0 tabular-nums truncate">
                            {"Tue, Sep 29, 18:30 UTC"}
                          </span>
                          <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                            {"in 4h 10m"}
                          </span>
                        </li>
                      </ol>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem data-orientation="vertical" index="3" data-open="">
                  <h3 className="flex" data-orientation="vertical" data-index="3" data-open="">
                    <AccordionTrigger className="[&>svg]:my-auto before:-inset-x-2 before:-z-10 before:absolute before:inset-y-0 before:rounded-lg before:transition-colors font-medium hover:before:bg-muted/50 hover:no-underline isolate text-muted-foreground text-xs" type="button" value="schedule,details,next-runs,run-durations,command" data-orientation="vertical" index="3" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_t_" aria-expanded="true" id="base-ui-_r_u_" tabIndex={0}>
                      {"Run Durations"}
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </AccordionTrigger>
                  </h3>
                  <AccordionContent data-orientation="vertical" index="3" data-open="" id="base-ui-_r_t_" aria-labelledby="base-ui-_r_u_" role="region" style={{"--accordion-panel-height": "auto", "--accordion-panel-width": "auto", animationName: "none"}}>
                    <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 cn-accordion-content-inner data-ending-style:h-0 data-starting-style:h-0 flex flex-col gap-3 h-(--accordion-panel-height) min-w-0">
                      <div className="flex flex-wrap gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                        {"Last 20 runs"}
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        {"p95 4m 52s of 15m timeout"}
                      </div>
                      <ChartContainer>
                      <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-32 justify-center text-xs w-full" data-chart="chart-_r_v_">
                        <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_v_] {\n  --color-durationSec: var(--primary);\n}\n\n\n.dark [data-chart=chart-_r_v_] {\n  --color-durationSec: var(--primary);\n}\n" }} />
                        <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                          <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                            <div className="recharts-wrapper" width={535} height={128} style={{position: "relative", cursor: "default", width: "535px", height: "128px"}}>
                              <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                              <svg className="recharts-surface" role="application" tabIndex={0} width={535} height={128} viewBox="0 0 535 128" style={{width: "100%", height: "100%", display: "block"}}>
                                <title></title>
                                <desc></desc>
                                <g className="recharts-zIndex-layer_-100" tabIndex={-1}>
                                  <g className="recharts-cartesian-grid">
                                    <g className="recharts-cartesian-grid-horizontal">
                                      <line strokeDasharray="3 3" stroke="#ccc" fill="none" x={0} y={4} width={535} height={124} x1={0} y1={97} x2={535} y2={97}></line>
                                      <line strokeDasharray="3 3" stroke="#ccc" fill="none" x={0} y={4} width={535} height={124} x1={0} y1={66} x2={535} y2={66}></line>
                                      <line strokeDasharray="3 3" stroke="#ccc" fill="none" x={0} y={4} width={535} height={124} x1={0} y1={4} x2={535} y2={4}></line>
                                      <line strokeDasharray="3 3" stroke="#ccc" fill="none" x={0} y={4} width={535} height={124} x1={0} y1={128} x2={535} y2={128}></line>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                                <defs>
                                  <clippath id="recharts1-clip">
                                    <rect x={0} y={4} height={124} width={535}></rect>
                                  </clippath>
                                </defs>
                                <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_300" tabIndex={-1}>
                                  <g className="recharts-bar recharts-layer" id="recharts-bar-_r_16_">
                                    <g className="recharts-bar-rectangles recharts-layer">
                                      <g className="recharts-layer">
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g opacity={1}>
                                              <path className="recharts-rectangle" name="undefined" id="RUN-58236" x={6.42} y={11.44} width={13} height={116.56} fill="var(--success)" fillOpacity={0.2} d={"M6.42,12.94A 1.5,1.5,0,0,1,7.92,11.44L 17.92,11.44A 1.5,1.5,0,0,1,\n        19.42,12.94L 19.42,128L 6.42,128Z"}></path>
                                              <path className="recharts-rectangle" x={6.42} y={11.44} width={13} height={3} fill="var(--success)" d={"M6.42,12.94A 1.5,1.5,0,0,1,7.92,11.44L 17.92,11.44A 1.5,1.5,0,0,1,\n        19.42,12.94L 19.42,14.44L 6.42,14.44Z"}></path>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g opacity={1}>
                                              <path className="recharts-rectangle" name="undefined" id="RUN-58237" x={33.17} y={36.24} width={13} height={91.76} fill="var(--success)" fillOpacity={0.2} d={"M33.17,37.74A 1.5,1.5,0,0,1,34.67,36.24L 44.67,36.24A 1.5,1.5,0,0,1,\n        46.17,37.74L 46.17,128L 33.17,128Z"}></path>
                                              <path className="recharts-rectangle" x={33.17} y={36.24} width={13} height={3} fill="var(--success)" d={"M33.17,37.74A 1.5,1.5,0,0,1,34.67,36.24L 44.67,36.24A 1.5,1.5,0,0,1,\n        46.17,37.74L 46.17,39.24L 33.17,39.24Z"}></path>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g opacity={1}>
                                              <path className="recharts-rectangle" name="undefined" id="RUN-58238" x={59.92} y={22.6} width={13} height={105.4} fill="var(--success)" fillOpacity={0.2} d={"M59.92,24.1A 1.5,1.5,0,0,1,61.42,22.6L 71.42,22.6A 1.5,1.5,0,0,1,\n        72.92,24.1L 72.92,128L 59.92,128Z"}></path>
                                              <path className="recharts-rectangle" x={59.92} y={22.6} width={13} height={3} fill="var(--success)" d={"M59.92,24.1A 1.5,1.5,0,0,1,61.42,22.6L 71.42,22.6A 1.5,1.5,0,0,1,\n        72.92,24.1L 72.92,25.6L 59.92,25.6Z"}></path>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g opacity={1}>
                                              <path className="recharts-rectangle" name="undefined" id="RUN-58239" x={86.67} y={9.3733} width={13} height={118.6267} fill="var(--success)" fillOpacity={0.2} d={"M86.67,10.8733A 1.5,1.5,0,0,1,88.17,9.3733L 98.17,9.3733A 1.5,1.5,0,0,1,\n        99.67,10.8733L 99.67,128L 86.67,128Z"}></path>
                                              <path className="recharts-rectangle" x={86.67} y={9.3733} width={13} height={3} fill="var(--success)" d={"M86.67,10.8733A 1.5,1.5,0,0,1,88.17,9.3733L 98.17,9.3733A 1.5,1.5,0,0,1,\n        99.67,10.8733L 99.67,12.3733L 86.67,12.3733Z"}></path>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g opacity={1}>
                                              <path className="recharts-rectangle" name="undefined" id="RUN-58240" x={113.42} y={34.1733} width={13} height={93.8267} fill="var(--success)" fillOpacity={0.2} d={"M113.42,35.6733A 1.5,1.5,0,0,1,114.92,34.1733L 124.92,34.1733A 1.5,1.5,0,0,1,\n        126.42,35.6733L 126.42,128L 113.42,128Z"}></path>
                                              <path className="recharts-rectangle" x={113.42} y={34.1733} width={13} height={3} fill="var(--success)" d={"M113.42,35.6733A 1.5,1.5,0,0,1,114.92,34.1733L 124.92,34.1733A 1.5,1.5,0,0,1,\n        126.42,35.6733L 126.42,37.1733L 113.42,37.1733Z"}></path>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g opacity={1}>
                                              <path className="recharts-rectangle" name="undefined" id="RUN-58241" x={140.17} y={20.5333} width={13} height={107.4667} fill="var(--success)" fillOpacity={0.2} d={"M140.17,22.0333A 1.5,1.5,0,0,1,141.67,20.5333L 151.67,20.5333A 1.5,1.5,0,0,1,\n        153.17,22.0333L 153.17,128L 140.17,128Z"}></path>
                                              <path className="recharts-rectangle" x={140.17} y={20.5333} width={13} height={3} fill="var(--success)" d={"M140.17,22.0333A 1.5,1.5,0,0,1,141.67,20.5333L 151.67,20.5333A 1.5,1.5,0,0,1,\n        153.17,22.0333L 153.17,23.5333L 140.17,23.5333Z"}></path>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g opacity={1}>
                                              <path className="recharts-rectangle" name="undefined" id="RUN-58242" x={166.92} y={7.3067} width={13} height={120.6933} fill="var(--success)" fillOpacity={0.2} d={"M166.92,8.8067A 1.5,1.5,0,0,1,168.42,7.3067L 178.42,7.3067A 1.5,1.5,0,0,1,\n        179.92,8.8067L 179.92,128L 166.92,128Z"}></path>
                                              <path className="recharts-rectangle" x={166.92} y={7.3067} width={13} height={3} fill="var(--success)" d={"M166.92,8.8067A 1.5,1.5,0,0,1,168.42,7.3067L 178.42,7.3067A 1.5,1.5,0,0,1,\n        179.92,8.8067L 179.92,10.3067L 166.92,10.3067Z"}></path>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g opacity={1}>
                                              <path className="recharts-rectangle" name="undefined" id="RUN-58243" x={193.67} y={32.1067} width={13} height={95.8933} fill="var(--success)" fillOpacity={0.2} d={"M193.67,33.6067A 1.5,1.5,0,0,1,195.17,32.1067L 205.17,32.1067A 1.5,1.5,0,0,1,\n        206.67,33.6067L 206.67,128L 193.67,128Z"}></path>
                                              <path className="recharts-rectangle" x={193.67} y={32.1067} width={13} height={3} fill="var(--success)" d={"M193.67,33.6067A 1.5,1.5,0,0,1,195.17,32.1067L 205.17,32.1067A 1.5,1.5,0,0,1,\n        206.67,33.6067L 206.67,35.1067L 193.67,35.1067Z"}></path>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g opacity={1}>
                                              <path className="recharts-rectangle" name="undefined" id="RUN-58244" x={220.42} y={18.4667} width={13} height={109.5333} fill="var(--success)" fillOpacity={0.2} d={"M220.42,19.9667A 1.5,1.5,0,0,1,221.92,18.4667L 231.92,18.4667A 1.5,1.5,0,0,1,\n        233.42,19.9667L 233.42,128L 220.42,128Z"}></path>
                                              <path className="recharts-rectangle" x={220.42} y={18.4667} width={13} height={3} fill="var(--success)" d={"M220.42,19.9667A 1.5,1.5,0,0,1,221.92,18.4667L 231.92,18.4667A 1.5,1.5,0,0,1,\n        233.42,19.9667L 233.42,21.4667L 220.42,21.4667Z"}></path>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g opacity={1}>
                                              <path className="recharts-rectangle" name="undefined" id="RUN-58245" x={247.17} y={5.24} width={13} height={122.76} fill="var(--success)" fillOpacity={0.2} d={"M247.17,6.74A 1.5,1.5,0,0,1,248.67,5.24L 258.67,5.24A 1.5,1.5,0,0,1,\n        260.17,6.74L 260.17,128L 247.17,128Z"}></path>
                                              <path className="recharts-rectangle" x={247.17} y={5.24} width={13} height={3} fill="var(--success)" d={"M247.17,6.74A 1.5,1.5,0,0,1,248.67,5.24L 258.67,5.24A 1.5,1.5,0,0,1,\n        260.17,6.74L 260.17,8.24L 247.17,8.24Z"}></path>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g opacity={1}>
                                              <path className="recharts-rectangle" name="undefined" id="RUN-58246" x={273.92} y={30.04} width={13} height={97.96} fill="var(--success)" fillOpacity={0.2} d={"M273.92,31.54A 1.5,1.5,0,0,1,275.42,30.04L 285.42,30.04A 1.5,1.5,0,0,1,\n        286.92,31.54L 286.92,128L 273.92,128Z"}></path>
                                              <path className="recharts-rectangle" x={273.92} y={30.04} width={13} height={3} fill="var(--success)" d={"M273.92,31.54A 1.5,1.5,0,0,1,275.42,30.04L 285.42,30.04A 1.5,1.5,0,0,1,\n        286.92,31.54L 286.92,33.04L 273.92,33.04Z"}></path>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g opacity={1}>
                                              <path className="recharts-rectangle" name="undefined" id="RUN-58247" x={300.67} y={16.4} width={13} height={111.6} fill="var(--success)" fillOpacity={0.2} d={"M300.67,17.9A 1.5,1.5,0,0,1,302.17,16.4L 312.17,16.4A 1.5,1.5,0,0,1,\n        313.67,17.9L 313.67,128L 300.67,128Z"}></path>
                                              <path className="recharts-rectangle" x={300.67} y={16.4} width={13} height={3} fill="var(--success)" d={"M300.67,17.9A 1.5,1.5,0,0,1,302.17,16.4L 312.17,16.4A 1.5,1.5,0,0,1,\n        313.67,17.9L 313.67,19.4L 300.67,19.4Z"}></path>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g opacity={1}>
                                              <path className="recharts-rectangle" name="undefined" id="RUN-58248" x={327.42} y={41.6133} width={13} height={86.3867} fill="var(--success)" fillOpacity={0.2} d={"M327.42,43.1133A 1.5,1.5,0,0,1,328.92,41.6133L 338.92,41.6133A 1.5,1.5,0,0,1,\n        340.42,43.1133L 340.42,128L 327.42,128Z"}></path>
                                              <path className="recharts-rectangle" x={327.42} y={41.6133} width={13} height={3} fill="var(--success)" d={"M327.42,43.1133A 1.5,1.5,0,0,1,328.92,41.6133L 338.92,41.6133A 1.5,1.5,0,0,1,\n        340.42,43.1133L 340.42,44.6133L 327.42,44.6133Z"}></path>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g opacity={1}>
                                              <path className="recharts-rectangle" name="undefined" id="RUN-58249" x={354.17} y={27.9733} width={13} height={100.0267} fill="var(--success)" fillOpacity={0.2} d={"M354.17,29.4733A 1.5,1.5,0,0,1,355.67,27.9733L 365.67,27.9733A 1.5,1.5,0,0,1,\n        367.17,29.4733L 367.17,128L 354.17,128Z"}></path>
                                              <path className="recharts-rectangle" x={354.17} y={27.9733} width={13} height={3} fill="var(--success)" d={"M354.17,29.4733A 1.5,1.5,0,0,1,355.67,27.9733L 365.67,27.9733A 1.5,1.5,0,0,1,\n        367.17,29.4733L 367.17,30.9733L 354.17,30.9733Z"}></path>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g opacity={1}>
                                              <path className="recharts-rectangle" name="undefined" id="RUN-58250" x={380.92} y={14.3333} width={13} height={113.6667} fill="var(--success)" fillOpacity={0.2} d={"M380.92,15.8333A 1.5,1.5,0,0,1,382.42,14.3333L 392.42,14.3333A 1.5,1.5,0,0,1,\n        393.92,15.8333L 393.92,128L 380.92,128Z"}></path>
                                              <path className="recharts-rectangle" x={380.92} y={14.3333} width={13} height={3} fill="var(--success)" d={"M380.92,15.8333A 1.5,1.5,0,0,1,382.42,14.3333L 392.42,14.3333A 1.5,1.5,0,0,1,\n        393.92,15.8333L 393.92,17.3333L 380.92,17.3333Z"}></path>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g opacity={1}>
                                              <path className="recharts-rectangle" name="undefined" id="RUN-58251" x={407.67} y={39.5467} width={13} height={88.4533} fill="var(--success)" fillOpacity={0.2} d={"M407.67,41.0467A 1.5,1.5,0,0,1,409.17,39.5467L 419.17,39.5467A 1.5,1.5,0,0,1,\n        420.67,41.0467L 420.67,128L 407.67,128Z"}></path>
                                              <path className="recharts-rectangle" x={407.67} y={39.5467} width={13} height={3} fill="var(--success)" d={"M407.67,41.0467A 1.5,1.5,0,0,1,409.17,39.5467L 419.17,39.5467A 1.5,1.5,0,0,1,\n        420.67,41.0467L 420.67,42.5467L 407.67,42.5467Z"}></path>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g opacity={1}>
                                              <path className="recharts-rectangle" name="undefined" id="RUN-58252" x={434.42} y={23.84} width={13} height={104.16} fill="var(--destructive)" fillOpacity={0.2} d={"M434.42,25.34A 1.5,1.5,0,0,1,435.92,23.84L 445.92,23.84A 1.5,1.5,0,0,1,\n        447.42,25.34L 447.42,128L 434.42,128Z"}></path>
                                              <path className="recharts-rectangle" x={434.42} y={23.84} width={13} height={3} fill="var(--destructive)" d={"M434.42,25.34A 1.5,1.5,0,0,1,435.92,23.84L 445.92,23.84A 1.5,1.5,0,0,1,\n        447.42,25.34L 447.42,26.84L 434.42,26.84Z"}></path>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g opacity={1}>
                                              <path className="recharts-rectangle" name="undefined" id="RUN-59485" x={461.17} y={23.84} width={13} height={104.16} fill="var(--destructive)" fillOpacity={0.2} d={"M461.17,25.34A 1.5,1.5,0,0,1,462.67,23.84L 472.67,23.84A 1.5,1.5,0,0,1,\n        474.17,25.34L 474.17,128L 461.17,128Z"}></path>
                                              <path className="recharts-rectangle" x={461.17} y={23.84} width={13} height={3} fill="var(--destructive)" d={"M461.17,25.34A 1.5,1.5,0,0,1,462.67,23.84L 472.67,23.84A 1.5,1.5,0,0,1,\n        474.17,25.34L 474.17,26.84L 461.17,26.84Z"}></path>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g opacity={1}>
                                              <path className="recharts-rectangle" name="undefined" id="RUN-58253" x={487.92} y={23.84} width={13} height={104.16} fill="var(--destructive)" fillOpacity={0.2} d={"M487.92,25.34A 1.5,1.5,0,0,1,489.42,23.84L 499.42,23.84A 1.5,1.5,0,0,1,\n        500.92,25.34L 500.92,128L 487.92,128Z"}></path>
                                              <path className="recharts-rectangle" x={487.92} y={23.84} width={13} height={3} fill="var(--destructive)" d={"M487.92,25.34A 1.5,1.5,0,0,1,489.42,23.84L 499.42,23.84A 1.5,1.5,0,0,1,\n        500.92,25.34L 500.92,26.84L 487.92,26.84Z"}></path>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g opacity={1}>
                                              <path className="recharts-rectangle" name="undefined" id="RUN-58254" x={514.67} y={23.84} width={13} height={104.16} fill="var(--destructive)" fillOpacity={0.2} d={"M514.67,25.34A 1.5,1.5,0,0,1,516.17,23.84L 526.17,23.84A 1.5,1.5,0,0,1,\n        527.67,25.34L 527.67,128L 514.67,128Z"}></path>
                                              <path className="recharts-rectangle" x={514.67} y={23.84} width={13} height={3} fill="var(--destructive)" d={"M514.67,25.34A 1.5,1.5,0,0,1,516.17,23.84L 526.17,23.84A 1.5,1.5,0,0,1,\n        527.67,25.34L 527.67,26.84L 514.67,26.84Z"}></path>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-zIndex-layer_400" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_500" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_600" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_2000" tabIndex={-1}></g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      </ChartContainer>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem data-orientation="vertical" index="4" data-open="">
                  <h3 className="flex" data-orientation="vertical" data-index="4" data-open="">
                    <AccordionTrigger className="[&>svg]:my-auto before:-inset-x-2 before:-z-10 before:absolute before:inset-y-0 before:rounded-lg before:transition-colors font-medium hover:before:bg-muted/50 hover:no-underline isolate text-muted-foreground text-xs" type="button" value="schedule,details,next-runs,run-durations,command" data-orientation="vertical" index="4" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_11_" aria-expanded="true" id="base-ui-_r_12_" tabIndex={0}>
                      {"Command"}
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </AccordionTrigger>
                  </h3>
                  <AccordionContent data-orientation="vertical" index="4" data-open="" id="base-ui-_r_11_" aria-labelledby="base-ui-_r_12_" role="region" style={{"--accordion-panel-height": "auto", "--accordion-panel-width": "auto", animationName: "none"}}>
                    <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 cn-accordion-content-inner data-ending-style:h-0 data-starting-style:h-0 flex flex-col gap-3 h-(--accordion-panel-height) min-w-0">
                      <CodeBlock className="[--code-block-bg:var(--card)] [--code-block-caret-color:var(--primary)] [--code-block-copy-inset:--spacing(2)] [--code-block-copy-top:var(--code-block-copy-inset)] [--code-block-diff-add-bg:color-mix(in_oklch,var(--success)_8%,transparent)] [--code-block-diff-remove-bg:color-mix(in_oklch,var(--destructive)_8%,transparent)] [--code-block-error-bg:color-mix(in_oklch,var(--destructive)_8%,transparent)] [--code-block-expand-clearance:--spacing(9)] [--code-block-fold-width:--spacing(4.5)] [--code-block-font-size:0.8125rem] [--code-block-gutter-gap:--spacing(2.5)] [--code-block-gutter-width:--spacing(9)] [--code-block-header-height:--spacing(8)] [--code-block-highlight-bar:color-mix(in_oklch,var(--primary)_60%,transparent)] [--code-block-highlight-bg:color-mix(in_oklch,var(--primary)_6%,transparent)] [--code-block-info-bg:color-mix(in_oklch,var(--info)_8%,transparent)] [--code-block-line-height:1.125rem] [--code-block-number-pad:var(--code-block-gutter-gap)] [--code-block-padding:--spacing(2)] [--code-block-warning-bg:color-mix(in_oklch,var(--warning)_10%,transparent)] bg-card bg-clip-padding border border-border dark:[--code-block-diff-add-bg:color-mix(in_oklch,var(--success)_12%,transparent)] dark:[--code-block-diff-remove-bg:color-mix(in_oklch,var(--destructive)_12%,transparent)] dark:[--code-block-error-bg:color-mix(in_oklch,var(--destructive)_12%,transparent)] dark:[--code-block-highlight-bg:color-mix(in_oklch,var(--primary)_12%,transparent)] dark:[--code-block-info-bg:color-mix(in_oklch,var(--info)_12%,transparent)] dark:[--code-block-warning-bg:color-mix(in_oklch,var(--warning)_14%,transparent)] data-[gutter-channel]:[--code-block-number-pad:calc(var(--code-block-gutter-gap)+var(--code-block-fold-width))] data-[has-diff]:[--code-block-gutter-gap:--spacing(4)] data-[has-header]:[--code-block-copy-top:calc(var(--code-block-header-height)+1px+var(--code-block-copy-inset))] flex flex-col group/code-block min-w-0 relative rounded-(--code-block-radius) style-luma:[--code-block-radius:var(--radius-2xl)] style-lyra:[--code-block-radius:0px] style-maia:[--code-block-radius:var(--radius-2xl)] style-mira:[--code-block-radius:var(--radius-lg)] style-nova:[--code-block-radius:var(--radius-lg)] style-rhea:[--code-block-radius:var(--radius-xl)] style-sera:[--code-block-radius:0px] style-vega:[--code-block-radius:var(--radius-lg)] text-card-foreground text-left w-full" variant="default" hasHeader="true">
                        <CodeBlockHeader className="min-h-8 px-2.5">
                          <CodeBlockTitle>
                            {"command.sh"}
                          </CodeBlockTitle>
                          <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-3.5 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center ms-auto outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} data-position="inline" aria-label="Copy code">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                            </svg>
                          </button>
                        </CodeBlockHeader>
                        <CodeBlockContent className="flex-1 min-w-0 overflow-hidden relative rounded-[inherit]">
                          <span className="sr-only" role="status" aria-live="polite"></span>
                          <div className="[scrollbar-width:thin] focus-visible:ring-[3px] focus-visible:ring-ring/50 min-w-0 outline-none overflow-auto relative rounded-[inherit]" id="_r_13_" role="region" aria-label="bash code" tabIndex={0}>
                            <pre className="[&_[data-slot=code-block-token]]:text-[color:var(--cb-c,currentColor)] dark:[&_[data-slot=code-block-token]]:text-[color:var(--cb-cd,currentColor)] font-mono min-w-full py-(--code-block-padding) text-(length:--code-block-font-size) w-max" dir="ltr" style={{"--code-block-gutter-width": "calc(2ch + var(--code-block-gutter-gap) + var(--code-block-padding))", counterReset: "cb-line 0"}}>
                              <code>
                                <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="1" id="_r_13_-L1" style={{counterReset: "cb-line 0"}}>
                                  <span>
                                    <span style={{"--cb-c": "#6F42C1", "--cb-cd": "#B392F0"}}>
                                      {"harbor"}
                                    </span>
                                    <span style={{"--cb-c": "#032F62", "--cb-cd": "#9ECBFF"}}>
                                      {"run"}
                                    </span>
                                    <span style={{"--cb-c": "#032F62", "--cb-cd": "#9ECBFF"}}>
                                      {"ledger-worker"}
                                    </span>
                                    <span style={{"--cb-c": "#005CC5", "--cb-cd": "#79B8FF"}}>
                                      {"--"}
                                    </span>
                                    <span style={{"--cb-c": "#032F62", "--cb-cd": "#9ECBFF"}}>
                                      {"settlements:import"}
                                    </span>
                                    <span style={{"--cb-c": "#005CC5", "--cb-cd": "#79B8FF"}}>
                                      {"--banks=all"}
                                    </span>
                                  </span>
                                </span>
                              </code>
                            </pre>
                          </div>
                        </CodeBlockContent>
                      </CodeBlock>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </div>
        </div>
      </Tabs>
      <span className="sr-only" role="status"></span>
    </SheetContent>
    </Sheet>
  </>
  )
}
