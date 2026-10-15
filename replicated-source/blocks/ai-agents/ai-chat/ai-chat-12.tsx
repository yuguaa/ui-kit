import { Bubble } from "@/registry/bases/base/ui/bubble"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Collapsible,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
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
import { MarkerContent } from "@/registry/bases/base/ui/marker"
import {
  MessageScroller,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerViewport,
} from "@/registry/bases/base/ui/message-scroller"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
} from "@/registry/bases/base/ui/sidebar"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { BubbleContent } from "@/registry/bases/radix/ui/bubble"
import { Marker } from "@/registry/bases/radix/ui/marker"

export function Pattern() {
  return (
    <div className="flex group/sidebar-wrapper h-svh has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "min(26rem, 42vw)", "--sidebar-width-icon": "3rem", "--sidebar": "var(--card)"}}>
      <SidebarInset className="min-h-0 overflow-hidden">
        <div className="flex-1 min-h-0 overflow-y-auto scrollbar">
          <header className="after:absolute after:bg-gradient-to-b after:from-background after:h-6 after:inset-x-0 after:pointer-events-none after:to-transparent after:top-full backdrop-blur-md bg-background/70 flex gap-2 h-14 items-center px-4 sm:px-6 sticky supports-backdrop-filter:bg-background/60 top-0 z-10">
            <span className="font-medium min-w-0 text-sm truncate">
              Halcyon Labs
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span className="min-w-0 text-muted-foreground text-sm truncate">
              Docs
            </span>
            <Button className="ms-auto" type="button" tabIndex="0" aria-pressed="true">
              Ask AI
            </Button>
          </header>
          <div className="flex flex-col gap-8 max-w-2xl mx-auto px-4 py-8 sm:px-6 w-full" aria-hidden="true">
            <div className="flex flex-col gap-3">
              <Skeleton className="h-3 w-32"></Skeleton>
              <Skeleton className="h-7 max-w-full w-72"></Skeleton>
              <Skeleton className="h-4 max-w-md w-full"></Skeleton>
            </div>
            <div className="flex flex-col gap-2.5">
              <Skeleton className="h-3.5 w-full"></Skeleton>
              <Skeleton className="h-3.5 w-full"></Skeleton>
              <Skeleton className="h-3.5 w-11/12"></Skeleton>
              <Skeleton className="h-3.5 w-2/3"></Skeleton>
            </div>
            <div className="flex flex-col gap-2.5">
              <Skeleton className="h-3.5 w-full"></Skeleton>
              <Skeleton className="h-3.5 w-10/12"></Skeleton>
              <Skeleton className="h-3.5 w-full"></Skeleton>
              <Skeleton className="h-3.5 w-1/2"></Skeleton>
            </div>
            <div className="border-s flex flex-col gap-2.5 ps-4">
              <Skeleton className="h-3 w-2/5"></Skeleton>
              <Skeleton className="h-3 w-3/5"></Skeleton>
              <Skeleton className="h-3 w-1/2"></Skeleton>
              <Skeleton className="h-3 w-4/6"></Skeleton>
              <Skeleton className="h-3 w-1/3"></Skeleton>
            </div>
            <div className="flex flex-col gap-3">
              <Skeleton className="h-5 w-56"></Skeleton>
              <Skeleton className="h-3.5 w-11/12"></Skeleton>
              <Skeleton className="h-3.5 w-full"></Skeleton>
              <Skeleton className="h-3.5 w-3/4"></Skeleton>
            </div>
            <div className="flex flex-col gap-3">
              <Skeleton className="h-5 w-44"></Skeleton>
              <Skeleton className="h-3.5 w-full"></Skeleton>
              <Skeleton className="h-3.5 w-full"></Skeleton>
              <Skeleton className="h-3.5 w-9/12"></Skeleton>
              <Skeleton className="h-3.5 w-5/12"></Skeleton>
            </div>
            <Skeleton className="h-28"></Skeleton>
            <div className="flex flex-col gap-2.5">
              <Skeleton className="h-3.5 w-full"></Skeleton>
              <Skeleton className="h-3.5 w-full"></Skeleton>
              <Skeleton className="h-3.5 w-11/12"></Skeleton>
              <Skeleton className="h-3.5 w-2/3"></Skeleton>
            </div>
            <div className="flex flex-col gap-2.5">
              <Skeleton className="h-3.5 w-full"></Skeleton>
              <Skeleton className="h-3.5 w-10/12"></Skeleton>
              <Skeleton className="h-3.5 w-full"></Skeleton>
              <Skeleton className="h-3.5 w-1/2"></Skeleton>
            </div>
            <div className="flex flex-col gap-2.5">
              <Skeleton className="h-3.5 w-11/12"></Skeleton>
              <Skeleton className="h-3.5 w-full"></Skeleton>
              <Skeleton className="h-3.5 w-3/4"></Skeleton>
            </div>
            <div className="flex flex-col gap-2.5">
              <Skeleton className="h-3.5 w-full"></Skeleton>
              <Skeleton className="h-3.5 w-full"></Skeleton>
              <Skeleton className="h-3.5 w-9/12"></Skeleton>
              <Skeleton className="h-3.5 w-5/12"></Skeleton>
            </div>
          </div>
        </div>
      </SidebarInset>
      <Sidebar data-state="expanded" collapsible="" variant="sidebar" data-side="right">
        <div className="bg-transparent cn-sidebar-gap group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative w-(--sidebar-width)"></div>
        <div className="data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l h-svh hidden inset-y-0 md:flex transition-[left,right,width] w-(--sidebar-width) z-10" data-side="right" aria-label="Ask AI about NeUI Pro">
          <div className="cn-sidebar-inner flex flex-col size-full" data-sidebar="sidebar">
            <SidebarHeader className="absolute after:absolute after:bg-linear-to-b after:from-sidebar after:h-6 after:inset-x-0 after:pointer-events-none after:to-transparent after:top-full backdrop-blur-md bg-sidebar/70 gap-0 inset-x-0 p-0 supports-backdrop-filter:bg-sidebar/60 top-0 z-20" sidebar="header">
              <div className="flex gap-1 items-center min-h-12 px-3">
                <span className="font-medium min-w-0 ps-1 text-sm truncate">
                  Ask AI
                </span>
                <div className="flex gap-0.5 items-center ms-auto shrink-0">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="New question" id="base-ui-_r_1_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-square-pen size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="flex" id="base-ui-_r_6_" baseUiTooltipTrigger="">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Assistant settings" aria-haspopup="menu" id="base-ui-_r_7_" aria-expanded="false">
                      <svg className="lucide lucide-settings-2 lucide-settings2 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                        <path d="M14 17H5"></path>
                        <path d="M19 7h-9"></path>
                        <circle cx="17" cy="17" r="3"></circle>
                        <circle cx="7" cy="7" r="3"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Hide the assistant" id="base-ui-_r_a_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </div>
              </div>
            </SidebarHeader>
            <SidebarContent className="overflow-hidden" sidebar="content">
              <div className="flex flex-1 flex-col min-h-0 relative">
                <MessageScroller className="flex-1" scrollable="start">
                  <MessageScrollerViewport className="scrollbar" role="region" aria-label="Messages" tabIndex="0" scrollable="start">
                    <MessageScrollerContent className="gap-4 min-w-0 pb-4 pt-16 px-4 w-full" role="log" aria-relevant="additions" aria-busy="false">
                      <MessageScrollerItem className="[content-visibility:visible]" scrollAnchor="false">
                        <Marker variant="separator">
                          <MarkerContent>
                            Today
                          </MarkerContent>
                        </Marker>
                      </MessageScrollerItem>
                      <MessageScrollerItem className="[content-visibility:visible] animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none" messageId="asked_seed" scrollAnchor="false">
                        <Bubble variant="default" data-align="end">
                          <BubbleContent className="leading-relaxed text-sm">
                            Why do my webhook deliveries keep retrying?
                          </BubbleContent>
                        </Bubble>
                      </MessageScrollerItem>
                      <MessageScrollerItem className="[content-visibility:visible] animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none" messageId="answer_seed" scrollAnchor="false">
                        <div className="flex flex-col gap-2 group/turn">
                          <Collapsible data-closed="">
                            <Collapsible>
                            <CollapsibleTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none font-normal gap-2 group/button group/receipt h-7 hover:text-foreground inline-flex items-center justify-start max-w-full outline-none px-1.5 select-none shrink-0 text-muted-foreground transition-all w-fit whitespace-nowrap" type="button" tabIndex="0" aria-label="Read 6 articles, used 4" aria-disabled="false" aria-expanded="false">
                              <svg className="lucide lucide-book-open shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                                <path d="M12 7v14"></path>
                                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                              </svg>
                              <span className="min-w-0 text-xs truncate">
                                Read 6 articles
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="shrink-0 tabular-nums text-xs">
                                Used 4
                              </span>
                              <span className="flex shrink-0">
                                <svg className="duration-200 group-data-[panel-open]/receipt:rotate-180 lucide lucide-chevron-down motion-reduce:transition-none opacity-60 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                  <path d="m6 9 6 6 6-6"></path>
                                </svg>
                              </span>
                            </CollapsibleTrigger>
                            </Collapsible>
                          </Collapsible>
                          <Bubble className="max-w-full" variant="outline" data-align="start">
                            <BubbleContent className="flex-col gap-3">
                              <p className="leading-relaxed text-sm">
                                NeUI Pro retries whenever your endpoint answers with anything outside the 200 range, or takes longer than ten seconds to answer at all.
                              </p>
                              <ol className="flex flex-col gap-2">
                                <li className="flex gap-2.5 leading-relaxed text-sm">
                                  <span className="shrink-0 tabular-nums text-muted-foreground w-3" aria-hidden="true">
                                    1
                                  </span>
                                  <span className="min-w-0">
                                    Open the delivery log for the failing event and read the status NeUI Pro recorded against each attempt.
                                  </span>
                                </li>
                                <li className="flex gap-2.5 leading-relaxed text-sm">
                                  <span className="shrink-0 tabular-nums text-muted-foreground w-3" aria-hidden="true">
                                    2
                                  </span>
                                  <span className="min-w-0">
                                    Acknowledge inside ten seconds. Return the response first, then do the work in a background job.
                                  </span>
                                </li>
                                <li className="flex gap-2.5 leading-relaxed text-sm">
                                  <span className="shrink-0 tabular-nums text-muted-foreground w-3" aria-hidden="true">
                                    3
                                  </span>
                                  <span className="min-w-0">
                                    Check the signature step. A rejected signature answers with 400, which counts as a failure and starts the backoff again.
                                  </span>
                                </li>
                                <li className="flex gap-2.5 leading-relaxed text-sm">
                                  <span className="shrink-0 tabular-nums text-muted-foreground w-3" aria-hidden="true">
                                    4
                                  </span>
                                  <span className="min-w-0">
                                    Return 200 for events you mean to ignore, so they leave the queue instead of retrying for a day.
                                  </span>
                                </li>
                              </ol>
                              <p className="leading-relaxed text-muted-foreground text-sm">
                                Every attempt carries the same event id, so the handler has to be safe to run twice.
                              </p>
                            </BubbleContent>
                          </Bubble>
                          <div className="flex gap-1 items-start">
                            <div className="flex flex-col gap-2">
                              <div className="flex gap-0.5 items-center">
                                <Tooltip>
                                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:text-success cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="This answer helped" aria-pressed="false" id="base-ui-_r_d_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-thumbs-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsUpIcon" tabler="IconThumbUp" hugeicons="ThumbsUpIcon" phosphor="ThumbsUpIcon" remixicon="RiThumbUpLine" aria-hidden="true">
                                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                                    <path d="M7 10v12"></path>
                                  </svg>
                                </TooltipTrigger>
                                </Tooltip>
                                <Tooltip>
                                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:text-foreground cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="This answer missed" aria-pressed="false" id="base-ui-_r_f_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-thumbs-down size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsDownIcon" tabler="IconThumbDown" hugeicons="ThumbsDownIcon" phosphor="ThumbsDownIcon" remixicon="RiThumbDownLine" aria-hidden="true">
                                    <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path>
                                    <path d="M17 14V2"></path>
                                  </svg>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </div>
                            <div className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-events-none transition-opacity">
                              <Tooltip>
                              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy answer" id="base-ui-_r_h_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-copy size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                              <Tooltip>
                              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Answer again" id="base-ui-_r_j_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-refresh-cw size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                                  <path d="M21 3v5h-5"></path>
                                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                                  <path d="M8 16H3v5"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <Button className="font-normal gap-2 h-auto hover:text-foreground items-start justify-start max-w-full px-2 py-1 text-muted-foreground text-xs w-fit whitespace-normal" type="button" tabIndex="0">
                              <svg className="lucide lucide-corner-down-right mt-px opacity-50 shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CornerDownRightIcon" tabler="IconCornerDownRight" hugeicons="CornerDownRightIcon" phosphor="ArrowBendDownRightIcon" remixicon="RiCornerDownRightLine" aria-hidden="true">
                                <path d="m15 10 5 5-5 5"></path>
                                <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
                              </svg>
                              <span className="min-w-0 text-start">
                                How do I replay a dead lettered event?
                              </span>
                            </Button>
                            <Button className="font-normal gap-2 h-auto hover:text-foreground items-start justify-start max-w-full px-2 py-1 text-muted-foreground text-xs w-fit whitespace-normal" type="button" tabIndex="0">
                              <svg className="lucide lucide-corner-down-right mt-px opacity-50 shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CornerDownRightIcon" tabler="IconCornerDownRight" hugeicons="CornerDownRightIcon" phosphor="ArrowBendDownRightIcon" remixicon="RiCornerDownRightLine" aria-hidden="true">
                                <path d="m15 10 5 5-5 5"></path>
                                <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
                              </svg>
                              <span className="min-w-0 text-start">
                                How long does the backoff run?
                              </span>
                            </Button>
                          </div>
                        </div>
                      </MessageScrollerItem>
                      <div aria-hidden="true" data-message-scroller-spacer="" hidden></div>
                    </MessageScrollerContent>
                  </MessageScrollerViewport>
                </MessageScroller>
                <div className="absolute bg-linear-to-t bottom-0 data-[active=true]:opacity-100 duration-200 ease-out from-sidebar h-8 inset-x-0 motion-reduce:transition-none opacity-0 pointer-events-none to-transparent transition-opacity" aria-hidden="true" data-active="false"></div>
              </div>
            </SidebarContent>
            <SidebarFooter className="gap-2 mt-2 pb-4 pt-2 px-4 relative shrink-0 z-10" sidebar="footer">
              <form>
                <Field role="group" data-orientation="vertical">
                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="ai-chat-12-composer">
                    Ask about NeUI Pro
                  </FieldLabel>
                  <InputGroup role="group">
                    <textarea className="cn-input-group-textarea cn-textarea disabled:cursor-not-allowed disabled:opacity-50 field-sizing-content flex flex-1 max-h-32 min-h-9 outline-none placeholder:text-muted-foreground resize-none w-full" id="ai-chat-12-composer" placeholder="Ask about NeUI Pro" maxLength="1000"></textarea>
                    <InputGroupAddon className="gap-2 justify-between" role="group" data-align="block-end">
                      <span className="data-low:text-destructive tabular-nums text-muted-foreground text-xs" aria-hidden="true">
                        0 / 1000
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-default disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 transition-all whitespace-nowrap" type="submit" tabIndex="0" aria-label="Send question" id="base-ui-_r_l_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-arrow-up size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                          <path d="m5 12 7-7 7 7"></path>
                          <path d="M12 19V5"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
              </form>
            </SidebarFooter>
          </div>
        </div>
      </Sidebar>
    </div>
  )
}
