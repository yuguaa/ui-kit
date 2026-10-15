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
import { Button } from "@/registry/bases/base/ui/button"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
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
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Deal detail
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Sheet>
        <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
          <svg className="lucide lucide-panel-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PanelRightIcon" tabler="IconLayoutSidebarRight" hugeicons="SidebarRight01Icon" phosphor="SidebarSimpleIcon" remixicon="RiLayoutRightLine" data-icon="inline-start" aria-hidden="true">
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M15 3v18"></path>
          </svg>
          Open Deal
        </SheetTrigger>
        </Sheet>
      </div>
    </main>
    <Sheet>
    <SheetContent className="bg-popover flex flex-col gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(30rem,calc(100vw-2rem))]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_4_" style={{"--nested-dialogs": "0"}}>
      <SheetHeader className="border-b gap-0 p-0 shrink-0">
        <div className="flex gap-2 items-center justify-between min-h-9 px-4">
          <span className="gap-2 inline-flex items-center text-muted-foreground text-xs">
            <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
              <path d="M12 18V6"></path>
            </svg>
            DEAL-4821
          </span>
          <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Close deal detail">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </SheetClose>
        </div>
        <div className="flex flex-col gap-1.5 min-w-0 pb-3 pt-0 px-4">
          <div className="flex gap-2 items-center min-w-0">
            <SheetTitle className="flex-1 font-semibold min-w-0 text-lg tracking-tight truncate" id="base-ui-_r_3_">
              <span className="flex-nowrap gap-x-1.5 inline-flex items-center min-w-0">
                <span className="gap-x-1.5 inline-flex items-center min-w-0">
                  <span className="min-w-0 truncate">
                    Brightwave Media
                  </span>
                </span>
                <span className="gap-x-1.5 inline-flex items-center min-w-0">
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="min-w-0 truncate">
                    Pro Annual
                  </span>
                </span>
              </span>
            </SheetTitle>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
              Negotiation
            </Badge>
          </div>
          <SheetDescription className="text-muted-foreground text-xs" id="base-ui-_r_4_">
            <span className="flex-wrap gap-x-1.5 inline-flex items-center min-w-0">
              <span className="gap-x-1.5 inline-flex items-center min-w-0">
                <span className="min-w-0 truncate">
                  Closes Jun 28
                </span>
              </span>
              <span className="gap-x-1.5 inline-flex items-center min-w-0">
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="min-w-0 truncate">
                  41 days in pipeline
                </span>
              </span>
            </span>
          </SheetDescription>
          <div className="flex gap-2 items-center pt-0.5">
            <Button type="button" tabIndex="0">
              <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" data-icon="inline-start" aria-hidden="true">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              Mark Won
            </Button>
            <Button type="button" tabIndex="0">
              Mark Lost
            </Button>
          </div>
        </div>
      </SheetHeader>
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full min-h-0" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_5_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "1021px"}} data-has-overflow-y="" data-overflow-y-end="">
            <div className="flex flex-col gap-3 px-5 py-4">
              <div className="flex gap-3 items-end justify-between">
                <div className="flex gap-2 items-baseline">
                  <span className="font-semibold tabular-nums text-4xl text-foreground tracking-tight">
                    $48,000
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    +$6K
                  </Badge>
                </div>
                <span className="pb-1 text-muted-foreground text-xs">
                  vs $42K at proposal
                </span>
              </div>
              <div className="bg-muted/55 h-1 mt-1.5 overflow-hidden relative rounded-full">
                <div className="absolute bg-[repeating-linear-gradient(-45deg,currentColor_0,currentColor_1px,transparent_0,transparent_4px)] inset-0 opacity-20 pointer-events-none text-muted-foreground" aria-hidden="true"></div>
                <Progress className="**:data-[slot=progress-indicator]:bg-primary **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" aria-valuetext="75%" role="progressbar">
                  <ProgressTrack progressing="">
                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "75%"}}></ProgressIndicator>
                  </ProgressTrack>
                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                    x
                  </span>
                </Progress>
              </div>
              <div className="flex gap-2 items-center justify-between text-muted-foreground text-xs">
                <span>
                  Win probability
                </span>
                <span className="tabular-nums">
                  75%
                </span>
              </div>
            </div>
            <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-3 px-5 py-4">
              <div className="flex gap-2 items-center justify-between">
                <h3 className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                  Stage
                </h3>
              </div>
              <div className="flex gap-2 items-center">
                <Select>
                <SelectTrigger className="w-full" type="button" tabIndex="0" id="deal-stage" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Change deal stage">
                  <SelectValue>
                    Negotiation
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    ▼
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_6_-hidden-input" tabIndex="-1" aria-hidden="true" value="Negotiation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
            </div>
            <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-3 px-5 py-4">
              <div className="flex gap-2 items-center justify-between">
                <h3 className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                  Key Fields
                </h3>
              </div>
              <dl className="gap-x-4 gap-y-2.5 grid grid-cols-[7.5rem_1fr]">
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    Account
                  </dt>
                  <dd className="min-w-0 text-foreground text-sm">
                    <span>
                      Brightwave Media
                    </span>
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    Primary contact
                  </dt>
                  <dd className="min-w-0 text-foreground text-sm">
                    <span className="flex-wrap gap-x-1.5 inline-flex items-center min-w-0">
                      <span className="gap-x-1.5 inline-flex items-center min-w-0">
                        <span className="min-w-0 truncate">
                          Daniel Cho
                        </span>
                      </span>
                      <span className="gap-x-1.5 inline-flex items-center min-w-0">
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="min-w-0 truncate">
                          VP Marketing
                        </span>
                      </span>
                    </span>
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    Close date
                  </dt>
                  <dd className="min-w-0 text-foreground text-sm">
                    <span>
                      Jun 28, 2026
                    </span>
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    Plan
                  </dt>
                  <dd className="min-w-0 text-foreground text-sm">
                    <span className="flex-wrap gap-x-1.5 inline-flex items-center min-w-0">
                      <span className="gap-x-1.5 inline-flex items-center min-w-0">
                        <span className="min-w-0 truncate">
                          Pro Annual
                        </span>
                      </span>
                      <span className="gap-x-1.5 inline-flex items-center min-w-0">
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="min-w-0 truncate">
                          45 seats
                        </span>
                      </span>
                    </span>
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    Source
                  </dt>
                  <dd className="min-w-0 text-foreground text-sm">
                    <span>
                      Inbound
                    </span>
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    Deal ID
                  </dt>
                  <dd className="min-w-0 text-foreground text-sm">
                    <span>
                      DEAL-4821
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
            <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-3 px-5 py-4">
              <div className="flex gap-2 items-center justify-between">
                <h3 className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                  Deal Team
                </h3>
              </div>
              <div className="flex gap-3 items-center justify-between">
                <AvatarGroup className="-space-x-1">
                  <Avatar className="size-6" size="default">
                    <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar className="size-6" size="default">
                    <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar className="size-6" size="default">
                    <AvatarFallback className="text-[10px]">
                      EW
                    </AvatarFallback>
                  </Avatar>
                </AvatarGroup>
                <p className="flex-wrap gap-x-1.5 inline-flex items-center justify-end min-w-0 text-muted-foreground text-xs">
                  <span className="font-medium text-foreground">
                    Mira Stone
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="truncate">
                    owns
                  </span>
                </p>
              </div>
            </div>
            <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-3 px-5 py-4">
              <div className="flex gap-2 items-center justify-between">
                <h3 className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                  Next Step
                </h3>
                <Button type="button" tabIndex="0">
                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  Log activity
                </Button>
              </div>
              <div className="flex gap-3 items-start">
                <div className="grid place-items-center relative shrink-0 size-5 text-warning">
                  <span className="[&_svg]:block [&_svg]:size-4 grid leading-none place-items-center size-5">
                    <svg className="lucide lucide-list-checks" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                      <path d="M13 5h8"></path>
                      <path d="M13 12h8"></path>
                      <path d="M13 19h8"></path>
                      <path d="m3 17 2 2 4-4"></path>
                      <path d="m3 7 2 2 4-4"></path>
                    </svg>
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-1 min-w-0">
                  <div className="flex gap-2 items-start justify-between">
                    <p className="font-medium leading-5 min-w-0 text-foreground text-sm">
                      Send revised order form
                    </p>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                      Due today
                    </Badge>
                  </div>
                  <p className="flex-wrap gap-x-1.5 inline-flex items-center text-muted-foreground text-xs">
                    <span>
                      Email
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="flex-wrap gap-x-1.5 inline-flex items-center min-w-0">
                      <span className="gap-x-1.5 inline-flex items-center min-w-0">
                        <span className="min-w-0 truncate">
                          Due today
                        </span>
                      </span>
                      <span className="gap-x-1.5 inline-flex items-center min-w-0">
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="min-w-0 truncate">
                          4:00 PM
                        </span>
                      </span>
                    </span>
                  </p>
                  <div className="flex gap-1.5 items-center mt-0.5 text-muted-foreground text-xs">
                    <Avatar className="size-5" size="default">
                      <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                    <span>
                      Mira Stone
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-3 px-5 py-4">
              <div className="flex gap-2 items-center justify-between">
                <h3 className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                  Financials
                </h3>
              </div>
              <div className="gap-x-4 gap-y-2.5 grid grid-cols-[7.5rem_1fr]">
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    Amount
                  </dt>
                  <dd className="min-w-0 text-foreground text-sm">
                    <span>
                      $48,000 ARR
                    </span>
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    Forecast
                  </dt>
                  <dd className="min-w-0 text-foreground text-sm">
                    <span className="flex-wrap gap-x-1.5 inline-flex items-center min-w-0">
                      <span className="gap-x-1.5 inline-flex items-center min-w-0">
                        <span className="min-w-0 truncate">
                          Commit
                        </span>
                      </span>
                      <span className="gap-x-1.5 inline-flex items-center min-w-0">
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="min-w-0 truncate">
                          $36K weighted
                        </span>
                      </span>
                    </span>
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    Discount
                  </dt>
                  <dd className="min-w-0 text-foreground text-sm">
                    <span>
                      12% off list
                    </span>
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    Term
                  </dt>
                  <dd className="min-w-0 text-foreground text-sm">
                    <span className="flex-wrap gap-x-1.5 inline-flex items-center min-w-0">
                      <span className="gap-x-1.5 inline-flex items-center min-w-0">
                        <span className="min-w-0 truncate">
                          12 months
                        </span>
                      </span>
                      <span className="gap-x-1.5 inline-flex items-center min-w-0">
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="min-w-0 truncate">
                          auto-renew
                        </span>
                      </span>
                    </span>
                  </dd>
                </div>
              </div>
            </div>
            <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-3 px-5 py-4">
              <div className="flex gap-2 items-center justify-between">
                <h3 className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                  Note
                </h3>
                <Button type="button" tabIndex="0">
                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  Add note
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <p className="leading-5 text-foreground text-sm">
                  Daniel confirmed budget for 45 seats. Legal reviewing the MSA, redlines back by Jun 24. Security questionnaire cleared on Jun 16.
                </p>
                <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                  <Avatar className="size-5" size="default">
                    <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <span>
                    Mira Stone
                  </span>
                </div>
              </div>
            </div>
            <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-3 px-5 py-4">
              <div className="flex gap-2 items-center justify-between">
                <h3 className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                  Activity
                </h3>
              </div>
              <Timeline data-orientation="vertical">
                <TimelineItem className="has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-1rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="[&_svg]:size-3 bg-success/10 border border-success/20 dark:bg-success/15 flex group-data-completed/timeline-item:border-border items-center justify-center size-5 text-success" aria-hidden="true">
                      <svg className="lucide lucide-smartphone size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmartphoneIcon" tabler="IconDeviceMobile" hugeicons="SmartPhone01Icon" phosphor="DeviceMobileIcon" remixicon="RiSmartphoneLine" aria-hidden="true">
                        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                        <path d="M12 18h.01"></path>
                      </svg>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="flex-wrap font-medium gap-x-1.5 inline-flex items-center min-w-0 text-foreground">
                        <span className="gap-x-1.5 inline-flex items-center min-w-0">
                          <span className="min-w-0 truncate">
                            Pricing call
                          </span>
                        </span>
                        <span className="gap-x-1.5 inline-flex items-center min-w-0">
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="min-w-0 truncate">
                            Connected
                          </span>
                        </span>
                      </span>
                    </TimelineTitle>
                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                      2h ago
                    </span>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[52ch] text-muted-foreground text-sm">
                      Daniel Cho agreed to 45 seats at 12% off. Asked for revised order form by end of week.
                    </p>
                    <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <span>
                        Mira Stone
                      </span>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-1rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="[&_svg]:size-3 bg-info/10 border border-info/20 dark:bg-info/15 flex group-data-completed/timeline-item:border-border items-center justify-center size-5 text-info" aria-hidden="true">
                      <svg className="lucide lucide-mail size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      </svg>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium text-foreground">
                        Security questionnaire returned
                      </span>
                    </TimelineTitle>
                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                      Yesterday
                    </span>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[52ch] text-muted-foreground text-sm">
                      SOC 2 report and DPA sent to Brightwave legal. No open items.
                    </p>
                    <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <span>
                        Nora Vale
                      </span>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-1rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="[&_svg]:size-3 bg-info/10 border border-info/20 dark:bg-info/15 flex group-data-completed/timeline-item:border-border items-center justify-center size-5 text-info" aria-hidden="true">
                      <svg className="lucide lucide-monitor size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MonitorIcon" tabler="IconDeviceDesktop" hugeicons="ComputerIcon" phosphor="MonitorIcon" remixicon="RiComputerLine" aria-hidden="true">
                        <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                        <line x1="8" x2="16" y1="21" y2="21"></line>
                        <line x1="12" x2="12" y1="17" y2="21"></line>
                      </svg>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="flex-wrap font-medium gap-x-1.5 inline-flex items-center min-w-0 text-foreground">
                        <span className="gap-x-1.5 inline-flex items-center min-w-0">
                          <span className="min-w-0 truncate">
                            Workflow demo
                          </span>
                        </span>
                        <span className="gap-x-1.5 inline-flex items-center min-w-0">
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="min-w-0 truncate">
                            6 attendees
                          </span>
                        </span>
                      </span>
                    </TimelineTitle>
                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                      Jun 11
                    </span>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[52ch] text-muted-foreground text-sm">
                      Walked the Brightwave team through automations and reporting. Strong interest from ops.
                    </p>
                    <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <span>
                        Mira Stone
                      </span>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-1rem)] group-data-[orientation=vertical]/timeline:translate-y-7" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="[&_svg]:size-3 bg-primary/10 border dark:bg-primary/15 flex group-data-completed/timeline-item:border-border items-center justify-center size-5 text-primary" aria-hidden="true">
                      <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium text-foreground">
                        Discovery with VP Marketing
                      </span>
                    </TimelineTitle>
                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                      Jun 4
                    </span>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[52ch] text-muted-foreground text-sm">
                      Scoped 45 seats across two teams. Budget cycle closes end of Q2.
                    </p>
                    <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                      <Avatar className="size-5" size="default">
                        <AvatarFallback className="text-[9px]">
                          EW
                        </AvatarFallback>
                      </Avatar>
                      <span>
                        Emma Wilson
                      </span>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
          <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_5_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "145.4095494283793px"}}>
            <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
          </div>
        </ScrollArea>
      </div>
    </SheetContent>
    </Sheet>
  </>
  )
}
