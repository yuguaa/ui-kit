import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentTitle,
} from "@/registry/bases/base/ui/attachment"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Bubble } from "@/registry/bases/base/ui/bubble"
import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
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
import { Kbd } from "@/registry/bases/base/ui/kbd"
import { MarkerContent } from "@/registry/bases/base/ui/marker"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerViewport,
} from "@/registry/bases/base/ui/message-scroller"
import {
  Message,
  MessageContent,
  MessageFooter,
} from "@/registry/bases/base/ui/message"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
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
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BubbleContent } from "@/registry/bases/radix/ui/bubble"
import { Marker } from "@/registry/bases/radix/ui/marker"

export function Pattern() {
  return (
    <SidebarProvider>
    <div className="flex group/sidebar-wrapper h-svh has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "min(28rem, 45vw)", "--sidebar-width-icon": "3rem", "--sidebar": "var(--card)"}}>
      <SidebarInset className="min-h-0 overflow-hidden">
        <div className="flex-1 min-h-0 overflow-y-auto scrollbar">
          <header className="after:absolute after:bg-gradient-to-b after:from-background after:h-6 after:inset-x-0 after:pointer-events-none after:to-transparent after:top-full backdrop-blur-md bg-background/70 flex gap-2 h-14 items-center px-4 sm:px-6 sticky supports-backdrop-filter:bg-background/60 top-0 z-10">
            <span className="font-medium min-w-0 text-sm truncate">
              {"NeUI Labs"}
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span className="min-w-0 text-muted-foreground text-sm truncate">
              {"Research"}
            </span>
            <div className="flex gap-3 items-center ms-auto shrink-0">
              <Button className="gap-1.5" type="button" tabIndex="0" aria-pressed="true">
                <svg className="lucide lucide-bot size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                  <path d="M12 8V4H8"></path>
                  <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                  <path d="M2 14h2"></path>
                  <path d="M20 14h2"></path>
                  <path d="M15 13v2"></path>
                  <path d="M9 13v2"></path>
                </svg>
                {"AI Assistant"}
              </Button>
              <Avatar className="size-7" size="default">
                <AvatarImage alt="Priya Nair" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
            </div>
          </header>
          <div className="flex flex-col gap-8 px-4 py-6 sm:px-6 w-full" aria-hidden="true">
            <div className="flex gap-4 items-center justify-between">
              <div className="flex flex-col gap-2">
                <Skeleton className="h-6 w-44"></Skeleton>
                <Skeleton className="h-3.5 w-64"></Skeleton>
              </div>
              <Skeleton className="h-8 shrink-0 w-24"></Skeleton>
            </div>
            <div className="gap-4 grid sm:grid-cols-3">
              <Skeleton className="h-24"></Skeleton>
              <Skeleton className="h-24"></Skeleton>
              <Skeleton className="h-24"></Skeleton>
            </div>
            <div className="flex flex-col gap-3">
              <Skeleton className="h-3 w-28"></Skeleton>
              <div className="flex gap-4 items-center">
                <Skeleton className="rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="h-3.5 w-40"></Skeleton>
                <Skeleton className="h-3.5 w-24"></Skeleton>
                <Skeleton className="h-3.5 w-16"></Skeleton>
                <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="h-3.5 w-56"></Skeleton>
                <Skeleton className="h-3.5 w-20"></Skeleton>
                <Skeleton className="h-3.5 w-12"></Skeleton>
                <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="h-3.5 w-32"></Skeleton>
                <Skeleton className="h-3.5 w-28"></Skeleton>
                <Skeleton className="h-3.5 w-16"></Skeleton>
                <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="h-3.5 w-48"></Skeleton>
                <Skeleton className="h-3.5 w-16"></Skeleton>
                <Skeleton className="h-3.5 w-10"></Skeleton>
                <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="h-3.5 w-44"></Skeleton>
                <Skeleton className="h-3.5 w-24"></Skeleton>
                <Skeleton className="h-3.5 w-14"></Skeleton>
                <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="h-3.5 w-36"></Skeleton>
                <Skeleton className="h-3.5 w-20"></Skeleton>
                <Skeleton className="h-3.5 w-12"></Skeleton>
                <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="h-3.5 w-52"></Skeleton>
                <Skeleton className="h-3.5 w-28"></Skeleton>
                <Skeleton className="h-3.5 w-10"></Skeleton>
                <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="h-3.5 w-28"></Skeleton>
                <Skeleton className="h-3.5 w-16"></Skeleton>
                <Skeleton className="h-3.5 w-16"></Skeleton>
                <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="h-3.5 w-44"></Skeleton>
                <Skeleton className="h-3.5 w-20"></Skeleton>
                <Skeleton className="h-3.5 w-14"></Skeleton>
                <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="h-3.5 w-60"></Skeleton>
                <Skeleton className="h-3.5 w-24"></Skeleton>
                <Skeleton className="h-3.5 w-12"></Skeleton>
                <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="h-3.5 w-36"></Skeleton>
                <Skeleton className="h-3.5 w-28"></Skeleton>
                <Skeleton className="h-3.5 w-16"></Skeleton>
                <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="h-3.5 w-48"></Skeleton>
                <Skeleton className="h-3.5 w-20"></Skeleton>
                <Skeleton className="h-3.5 w-10"></Skeleton>
                <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="h-3.5 w-40"></Skeleton>
                <Skeleton className="h-3.5 w-16"></Skeleton>
                <Skeleton className="h-3.5 w-14"></Skeleton>
                <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="h-3.5 w-56"></Skeleton>
                <Skeleton className="h-3.5 w-24"></Skeleton>
                <Skeleton className="h-3.5 w-12"></Skeleton>
                <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="h-3.5 w-32"></Skeleton>
                <Skeleton className="h-3.5 w-20"></Skeleton>
                <Skeleton className="h-3.5 w-16"></Skeleton>
                <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="h-3.5 w-44"></Skeleton>
                <Skeleton className="h-3.5 w-28"></Skeleton>
                <Skeleton className="h-3.5 w-10"></Skeleton>
                <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
      <SidebarProvider>
      <Sidebar data-state="expanded" collapsible="" variant="floating" data-side="right">
        <div className="bg-transparent cn-sidebar-gap group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))] group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative w-(--sidebar-width)"></div>
        <SidebarProvider>
        <div className="data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)] h-svh hidden inset-y-0 md:flex p-2 transition-[left,right,width] w-(--sidebar-width) z-10" data-side="right" aria-label="NeUI Chat">
          <SidebarProvider>
          <div className="cn-sidebar-inner flex flex-col size-full" data-sidebar="sidebar">
            <SidebarHeader className="border-b gap-0 p-0 shrink-0" sidebar="header">
              <div className="flex gap-1 items-center min-h-12 px-3">
                <Popover>
                <PopoverTrigger className="-ms-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none font-medium gap-2 group/button h-8 inline-flex items-center justify-start min-w-0 outline-none px-1.5 select-none shrink-0 text-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_2_" aria-haspopup="dialog" aria-expanded="false">
                  <span className="text-primary">
                    <svg className="lucide lucide-bot shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                      <path d="M12 8V4H8"></path>
                      <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                      <path d="M2 14h2"></path>
                      <path d="M20 14h2"></path>
                      <path d="M15 13v2"></path>
                      <path d="M9 13v2"></path>
                    </svg>
                  </span>
                  <span className="min-w-0 text-sm text-start truncate">
                    {"Trust in AI replies"}
                  </span>
                  <svg className="lucide lucide-chevron-down opacity-60 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </PopoverTrigger>
                </Popover>
                <div className="flex gap-0.5 items-center ms-auto shrink-0">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="New chat" id="base-ui-_r_4_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-square-pen size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="flex" id="base-ui-_r_9_" baseUiTooltipTrigger="">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Chat settings" aria-haspopup="menu" id="base-ui-_r_a_" aria-expanded="false">
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
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Hide assistant" id="base-ui-_r_d_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </div>
              </div>
            </SidebarHeader>
            <SidebarProvider>
            <SidebarContent className="overflow-hidden" sidebar="content">
              <div className="flex flex-1 flex-col min-h-0 relative">
                <MessageScroller className="flex-1" scrollable="start">
                  <MessageScrollerViewport className="scrollbar" role="region" aria-label="Messages" tabIndex="0" scrollable="start">
                    <MessageScrollerContent className="gap-6 min-w-0 px-4 py-4 w-full" role="log" aria-relevant="additions" aria-busy="false">
                      <MessageScrollerItem className="[content-visibility:visible]" scrollAnchor="false">
                        <Marker variant="separator">
                          <MarkerContent>
                            {"Today"}
                          </MarkerContent>
                        </Marker>
                      </MessageScrollerItem>
                      <MessageScrollerItem className="[content-visibility:visible] animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none" messageId="m_01" scrollAnchor="false">
                        <div className="flex flex-col gap-6">
                          <Message className="group/turn" data-align="end" role="group" aria-label="Priya Nair">
                            <MessageContent className="gap-1 items-end">
                              <Bubble className="max-w-[88%]" variant="muted" data-align="end">
                                <BubbleContent className="text-sm/6">
                                  {"We keep hearing that the assistant sounds certain even when it is guessing. What should the reply itself do about that?"}
                                </BubbleContent>
                              </Bubble>
                              <MessageFooter className="gap-0.5 pe-0">
                                <span className="flex flex-wrap focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-events-none transition-opacity">
                                  <span className="pe-1 tabular-nums text-muted-foreground text-xs">
                                    {"11:02"}
                                  </span>
                                  <Button type="button" tabIndex="0" aria-label="Copy message">
                                    <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                    </svg>
                                  </Button>
                                  <Button type="button" tabIndex="0" aria-label="Edit message">
                                    <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                      <path d="m15 5 4 4"></path>
                                    </svg>
                                  </Button>
                                </span>
                              </MessageFooter>
                            </MessageContent>
                          </Message>
                        </div>
                      </MessageScrollerItem>
                      <MessageScrollerItem className="[content-visibility:visible] animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none" messageId="m_02" scrollAnchor="false">
                        <div className="flex flex-col gap-6">
                          <Message className="group/turn" data-align="start" role="group" aria-label="NeUI Chat">
                            <MessageContent className="gap-2">
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="bg-primary rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                <h3 className="flex-1 font-medium min-w-0 text-sm truncate">
                                  {"Confidence Signals"}
                                </h3>
                                <span className="flex gap-1 items-center shrink-0 tabular-nums text-[11px] text-muted-foreground">
                                  <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 6v6l4 2"></path>
                                  </svg>
                                  {"6s"}
                                </span>
                                <button className="-me-1 flex focus-visible:ring-2 focus-visible:ring-ring group/section hover:text-foreground outline-none p-1 rounded-full shrink-0 text-muted-foreground" type="button" aria-expanded="true" aria-controls="_r_e_" aria-label="Collapse answer">
                                  <svg className="duration-200 group-aria-expanded/section:rotate-180 lucide lucide-chevron-down motion-reduce:transition-none shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                    <path d="m6 9 6 6 6-6"></path>
                                  </svg>
                                </button>
                              </div>
                              <Bubble className="w-full" variant="ghost" data-align="start">
                                <BubbleContent className="p-0">
                                  <div>
                                    <div className="selection:bg-primary/20 space-y-3 text-sm/6" id="_r_e_" data-answer-body="true">
                                      <p className="whitespace-pre-wrap">
                                        {"Say the shape of the doubt, not the size of it. A reply that admits which part is thin reads as more reliable than one that prints a percentage nobody can audit."}
                                      </p>
                                      <p className="whitespace-pre-wrap">
                                        {"Three moves carry most of it. Name the source before the claim, separate what was measured from what was inferred, and offer the cheapest next check instead of a hedge."}
                                      </p>
                                      <p className="whitespace-pre-wrap">
                                        {"The live region matters as much as the wording. A reply that announces itself through"}
                                        <code className="bg-muted font-mono px-1 py-0.5 rounded-sm text-[0.85em]">
                                          {"role=\"status\""}
                                        </code>
                                        {"lets a screen reader hear the answer settle rather than guess at it."}
                                      </p>
                                    </div>
                                  </div>
                                </BubbleContent>
                              </Bubble>
                              <MessageFooter className="gap-0.5">
                                <span className="flex flex-wrap focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-events-none transition-opacity">
                                  <span className="pe-1 tabular-nums text-muted-foreground text-xs">
                                    {"11:03"}
                                  </span>
                                  <Button className="font-normal gap-1.5 h-6 hover:text-foreground px-1.5 text-muted-foreground text-xs" type="button" tabIndex="0" aria-label="Reply to this answer, quoting its first line">
                                    <span className="[&>svg]:size-3.5">
                                      <svg className="lucide lucide-message-square-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareTextIcon" tabler="IconMessageDots" hugeicons="Comment01Icon" phosphor="ChatTextIcon" remixicon="RiMessage3Line" aria-hidden="true">
                                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        <path d="M7 11h10"></path>
                                        <path d="M7 15h6"></path>
                                        <path d="M7 7h8"></path>
                                      </svg>
                                    </span>
                                    {"Reply"}
                                  </Button>
                                  <Button type="button" tabIndex="0" aria-label="Copy answer">
                                    <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                    </svg>
                                  </Button>
                                  <Button type="button" tabIndex="0" aria-label="Like answer" aria-pressed="false">
                                    <svg className="lucide lucide-thumbs-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsUpIcon" tabler="IconThumbUp" hugeicons="ThumbsUpIcon" phosphor="ThumbsUpIcon" remixicon="RiThumbUpLine" aria-hidden="true">
                                      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                                      <path d="M7 10v12"></path>
                                    </svg>
                                  </Button>
                                  <Button type="button" tabIndex="0" aria-label="Dislike answer" aria-pressed="false">
                                    <svg className="lucide lucide-thumbs-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsDownIcon" tabler="IconThumbDown" hugeicons="ThumbsDownIcon" phosphor="ThumbsDownIcon" remixicon="RiThumbDownLine" aria-hidden="true">
                                      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path>
                                      <path d="M17 14V2"></path>
                                    </svg>
                                  </Button>
                                </span>
                              </MessageFooter>
                            </MessageContent>
                          </Message>
                        </div>
                      </MessageScrollerItem>
                      <MessageScrollerItem className="[content-visibility:visible] animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none" messageId="m_03" scrollAnchor="false">
                        <div className="flex flex-col gap-6">
                          <Message className="group/turn" data-align="end" role="group" aria-label="Priya Nair">
                            <MessageContent className="gap-1 items-end">
                              <div className="flex flex-col items-end max-w-[88%] self-end w-full" role="group" aria-label="2 attached recordings">
                                <Attachment className="gap-2.5 w-full" data-state="done" size="sm" data-orientation="horizontal">
                                  <Avatar className="size-6" size="default">
                                    <AvatarImage alt="Jonas Weber" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <AttachmentContent>
                                    <AttachmentTitle className="text-xs">
                                      {"Design review, AI states"}
                                    </AttachmentTitle>
                                    <AttachmentDescription className="tabular-nums text-[11px]">
                                      {"41 min, Aug 25"}
                                    </AttachmentDescription>
                                  </AttachmentContent>
                                  <span className="shrink-0 text-muted-foreground">
                                    <svg className="lucide lucide-video shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="VideoIcon" tabler="IconVideo" hugeicons="Video02Icon" phosphor="VideoCameraIcon" remixicon="RiVideoOnLine" aria-hidden="true">
                                      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                                      <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                                    </svg>
                                  </span>
                                </Attachment>
                                <p className="pe-1 pt-1.5 tabular-nums text-[11px] text-muted-foreground">
                                  {"2 recordings attached"}
                                </p>
                              </div>
                              <Bubble className="max-w-[88%]" variant="muted" data-align="end">
                                <BubbleContent className="text-sm/6">
                                  {"Both sessions are attached. Pull out what people actually asked for, not what we assumed."}
                                </BubbleContent>
                              </Bubble>
                              <MessageFooter className="gap-0.5 pe-0">
                                <span className="flex flex-wrap focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-events-none transition-opacity">
                                  <span className="pe-1 tabular-nums text-muted-foreground text-xs">
                                    {"11:05"}
                                  </span>
                                  <Button type="button" tabIndex="0" aria-label="Copy message">
                                    <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                    </svg>
                                  </Button>
                                  <Button type="button" tabIndex="0" aria-label="Edit message">
                                    <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                      <path d="m15 5 4 4"></path>
                                    </svg>
                                  </Button>
                                </span>
                              </MessageFooter>
                            </MessageContent>
                          </Message>
                        </div>
                      </MessageScrollerItem>
                      <MessageScrollerItem className="[content-visibility:visible] animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none" messageId="m_04" scrollAnchor="false">
                        <div className="flex flex-col gap-6">
                          <Message className="group/turn" data-align="start" role="group" aria-label="NeUI Chat">
                            <MessageContent className="gap-2">
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="bg-primary rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                <h3 className="flex-1 font-medium min-w-0 text-sm truncate">
                                  {"Session Findings"}
                                </h3>
                                <span className="flex gap-1 items-center shrink-0 tabular-nums text-[11px] text-muted-foreground">
                                  <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 6v6l4 2"></path>
                                  </svg>
                                  {"12s"}
                                </span>
                                <button className="-me-1 flex focus-visible:ring-2 focus-visible:ring-ring group/section hover:text-foreground outline-none p-1 rounded-full shrink-0 text-muted-foreground" type="button" aria-expanded="true" aria-controls="_r_t_" aria-label="Collapse answer">
                                  <svg className="duration-200 group-aria-expanded/section:rotate-180 lucide lucide-chevron-down motion-reduce:transition-none shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                    <path d="m6 9 6 6 6-6"></path>
                                  </svg>
                                </button>
                              </div>
                              <Bubble className="w-full" variant="ghost" data-align="start">
                                <BubbleContent className="p-0">
                                  <div>
                                    <div className="selection:bg-primary/20 space-y-3 text-sm/6" id="_r_t_" data-answer-body="true">
                                      <p className="whitespace-pre-wrap">
                                        {"Across both sessions the same three asks came up, and none of them was about accuracy."}
                                      </p>
                                      <p className="whitespace-pre-wrap">
                                        {"People wanted to know where an answer came from before they read it. Nine of eleven scrolled to the sources first."}
                                      </p>
                                      <p className="whitespace-pre-wrap">
                                        {"They wanted the reply to hold still. Two participants lost their place when the text reflowed mid answer."}
                                      </p>
                                      <p className="whitespace-pre-wrap">
                                        {"And they wanted to argue with one sentence rather than the whole answer. That one is worth building."}
                                      </p>
                                    </div>
                                  </div>
                                </BubbleContent>
                              </Bubble>
                              <div className="flex flex-wrap gap-1.5 pt-0.5" role="group" aria-label="Sources this reply read">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 hover:bg-accent hover:text-foreground max-w-full min-w-0 outline-none px-1.25 py-0.5 relative rounded-full text-muted-foreground text-xs transition-colors" type="button" aria-label="Attach Trust research sync to your next message">
                                  <svg className="lucide lucide-file-text shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                    <path d="M10 9H8"></path>
                                    <path d="M16 13H8"></path>
                                    <path d="M16 17H8"></path>
                                  </svg>
                                  <span className="truncate">
                                    {"Trust research sync"}
                                  </span>
                                </Badge>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 hover:bg-accent hover:text-foreground max-w-full min-w-0 outline-none px-1.25 py-0.5 relative rounded-full text-muted-foreground text-xs transition-colors" type="button" aria-label="Attach Design review, AI states to your next message">
                                  <svg className="lucide lucide-file-text shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                    <path d="M10 9H8"></path>
                                    <path d="M16 13H8"></path>
                                    <path d="M16 17H8"></path>
                                  </svg>
                                  <span className="truncate">
                                    {"Design review, AI states"}
                                  </span>
                                </Badge>
                              </div>
                              <MessageFooter className="gap-0.5">
                                <span className="flex flex-wrap focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-events-none transition-opacity">
                                  <span className="pe-1 tabular-nums text-muted-foreground text-xs">
                                    {"11:07"}
                                  </span>
                                  <Button className="font-normal gap-1.5 h-6 hover:text-foreground px-1.5 text-muted-foreground text-xs" type="button" tabIndex="0" aria-label="Reply to this answer, quoting its first line">
                                    <span className="[&>svg]:size-3.5">
                                      <svg className="lucide lucide-message-square-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareTextIcon" tabler="IconMessageDots" hugeicons="Comment01Icon" phosphor="ChatTextIcon" remixicon="RiMessage3Line" aria-hidden="true">
                                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        <path d="M7 11h10"></path>
                                        <path d="M7 15h6"></path>
                                        <path d="M7 7h8"></path>
                                      </svg>
                                    </span>
                                    {"Reply"}
                                  </Button>
                                  <Button type="button" tabIndex="0" aria-label="Copy answer">
                                    <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                    </svg>
                                  </Button>
                                  <Button type="button" tabIndex="0" aria-label="Like answer" aria-pressed="false">
                                    <svg className="lucide lucide-thumbs-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsUpIcon" tabler="IconThumbUp" hugeicons="ThumbsUpIcon" phosphor="ThumbsUpIcon" remixicon="RiThumbUpLine" aria-hidden="true">
                                      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                                      <path d="M7 10v12"></path>
                                    </svg>
                                  </Button>
                                  <Button type="button" tabIndex="0" aria-label="Dislike answer" aria-pressed="false">
                                    <svg className="lucide lucide-thumbs-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsDownIcon" tabler="IconThumbDown" hugeicons="ThumbsDownIcon" phosphor="ThumbsDownIcon" remixicon="RiThumbDownLine" aria-hidden="true">
                                      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path>
                                      <path d="M17 14V2"></path>
                                    </svg>
                                  </Button>
                                  <Button type="button" tabIndex="0" aria-label="Retry answer">
                                    <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                                      <path d="M21 3v5h-5"></path>
                                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                                      <path d="M8 16H3v5"></path>
                                    </svg>
                                  </Button>
                                </span>
                              </MessageFooter>
                            </MessageContent>
                          </Message>
                        </div>
                      </MessageScrollerItem>
                      <MessageScrollerItem className="[content-visibility:visible]" scrollAnchor="false">
                        <div className="flex flex-col gap-2 items-end" role="group" aria-label="Quick replies">
                          <Button className="font-normal gap-2 h-auto hover:text-foreground justify-start max-w-full py-1.5 text-muted-foreground" type="button" tabIndex="0">
                            <span className="min-w-0 truncate">
                              {"Draft the pattern note"}
                            </span>
                            <svg className="lucide lucide-corner-down-right opacity-50 shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CornerDownRightIcon" tabler="IconCornerDownRight" hugeicons="CornerDownRightIcon" phosphor="ArrowBendDownRightIcon" remixicon="RiCornerDownRightLine" aria-hidden="true">
                              <path d="m15 10 5 5-5 5"></path>
                              <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
                            </svg>
                          </Button>
                          <Button className="font-normal gap-2 h-auto hover:text-foreground justify-start max-w-full py-1.5 text-muted-foreground" type="button" tabIndex="0">
                            <span className="min-w-0 truncate">
                              {"What did they reject"}
                            </span>
                            <svg className="lucide lucide-corner-down-right opacity-50 shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CornerDownRightIcon" tabler="IconCornerDownRight" hugeicons="CornerDownRightIcon" phosphor="ArrowBendDownRightIcon" remixicon="RiCornerDownRightLine" aria-hidden="true">
                              <path d="m15 10 5 5-5 5"></path>
                              <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
                            </svg>
                          </Button>
                        </div>
                      </MessageScrollerItem>
                      <div aria-hidden="true" data-message-scroller-spacer="" hidden></div>
                    </MessageScrollerContent>
                  </MessageScrollerViewport>
                  <div className="absolute bg-linear-to-b data-[active=true]:opacity-100 duration-200 ease-out from-sidebar h-6 inset-x-0 motion-reduce:transition-none opacity-0 pointer-events-none to-transparent top-0 transition-opacity" aria-hidden="true" data-active="true"></div>
                  <div className="absolute bg-linear-to-t bottom-0 data-[active=true]:opacity-100 duration-200 ease-out from-sidebar h-8 inset-x-0 motion-reduce:transition-none opacity-0 pointer-events-none to-transparent transition-opacity" aria-hidden="true" data-active="false"></div>
                  <p className="sr-only" role="status" aria-live="polite"></p>
                  <MessageScrollerButton className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none rounded-full select-none shadow-sm shrink-0 whitespace-nowrap" type="button" tabIndex="-1" data-active="false" direction="end" inert="" variant="outline" size="icon-sm">
                    <svg className="lucide lucide-arrow-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine">
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                    <span className="sr-only">
                      {"Scroll to end"}
                    </span>
                  </MessageScrollerButton>
                </MessageScroller>
              </div>
            </SidebarContent>
            </SidebarProvider>
            <SidebarFooter className="gap-2 pb-4 pt-2 px-4 relative shrink-0 z-10" sidebar="footer">
              <Card className="gap-1 p-1.5" size="sm" role="group" aria-label="Suggested prompts">
                <div className="flex gap-1.5 items-center pb-1 pt-0.5 px-1.5 text-[11px] text-muted-foreground">
                  <Kbd>
                    {"↑"}
                  </Kbd>
                  <Kbd>
                    {"↓"}
                  </Kbd>
                  {"navigate"}
                  <Kbd className="ms-1.5">
                    {"Enter"}
                  </Kbd>
                  {"select"}
                  <Kbd className="ms-auto">
                    {"Esc"}
                  </Kbd>
                  <Tooltip>
                  <TooltipTrigger className="-me-0.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Close suggestions" id="base-ui-_r_v_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </div>
                <button className="flex focus-visible:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:text-foreground gap-2 hover:bg-accent hover:text-foreground items-center outline-none px-2 py-1.5 rounded-full text-muted-foreground text-start text-xs w-full" type="button">
                  <svg className="lucide lucide-corner-down-right opacity-50 shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CornerDownRightIcon" tabler="IconCornerDownRight" hugeicons="CornerDownRightIcon" phosphor="ArrowBendDownRightIcon" remixicon="RiCornerDownRightLine" aria-hidden="true">
                    <path d="m15 10 5 5-5 5"></path>
                    <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
                  </svg>
                  <span className="flex-1 min-w-0 truncate">
                    {"How should AI show uncertainty?"}
                  </span>
                </button>
                <button className="flex focus-visible:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:text-foreground gap-2 hover:bg-accent hover:text-foreground items-center outline-none px-2 py-1.5 rounded-full text-muted-foreground text-start text-xs w-full" type="button">
                  <svg className="lucide lucide-corner-down-right opacity-50 shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CornerDownRightIcon" tabler="IconCornerDownRight" hugeicons="CornerDownRightIcon" phosphor="ArrowBendDownRightIcon" remixicon="RiCornerDownRightLine" aria-hidden="true">
                    <path d="m15 10 5 5-5 5"></path>
                    <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
                  </svg>
                  <span className="flex-1 min-w-0 truncate">
                    {"Which UI elements build trust in AI responses?"}
                  </span>
                </button>
                <button className="flex focus-visible:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:text-foreground gap-2 hover:bg-accent hover:text-foreground items-center outline-none px-2 py-1.5 rounded-full text-muted-foreground text-start text-xs w-full" type="button">
                  <svg className="lucide lucide-corner-down-right opacity-50 shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CornerDownRightIcon" tabler="IconCornerDownRight" hugeicons="CornerDownRightIcon" phosphor="ArrowBendDownRightIcon" remixicon="RiCornerDownRightLine" aria-hidden="true">
                    <path d="m15 10 5 5-5 5"></path>
                    <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
                  </svg>
                  <span className="flex-1 min-w-0 truncate">
                    {"What signals make AI responses feel reliable?"}
                  </span>
                </button>
              </Card>
              <form className="w-full">
                <Field role="group" data-orientation="vertical">
                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="ai-chat-4-composer">
                    {"Message NeUI Chat"}
                  </FieldLabel>
                  <InputGroup role="group">
                    <textarea className="cn-input-group-textarea cn-textarea disabled:cursor-not-allowed disabled:opacity-50 field-sizing-content flex flex-1 max-h-32 min-h-10 outline-none placeholder:text-muted-foreground resize-none w-full" id="ai-chat-4-composer" placeholder="Ask AI anything"></textarea>
                    <InputGroupAddon className="gap-2 justify-between" role="group" data-align="block-end">
                      <div className="flex gap-1 items-center min-w-0">
                        <Tooltip>
                        <TooltipTrigger className="flex" id="base-ui-_r_j_" baseUiTooltipTrigger="">
                          <DropdownMenu>
                          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" size="icon-sm" aria-label="Attach a recording" aria-haspopup="menu" id="base-ui-_r_k_" aria-expanded="false">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </DropdownMenuTrigger>
                          </DropdownMenu>
                        </TooltipTrigger>
                        </Tooltip>
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-sm disabled:opacity-50 disabled:pointer-events-none flex gap-1.5 group/button hover:text-foreground items-center justify-center min-w-0 outline-none px-1.5 select-none shadow-none shrink text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" size="sm" aria-label="Model Claude Sonnet 5, mode Auto" aria-haspopup="menu" id="base-ui-_r_p_" aria-expanded="false">
                          <span className="min-w-0 text-xs truncate">
                            {"Claude Sonnet 5"}
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="shrink-0 text-xs">
                            {"Auto"}
                          </span>
                          <svg className="lucide lucide-chevron-down opacity-60 shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 text-primary transition-all whitespace-nowrap" type="button" tabIndex="0" size="icon-sm" aria-label="Suggested prompts" aria-pressed="true" id="base-ui-_r_s_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                            <path d="M20 2v4"></path>
                            <path d="M22 4h-4"></path>
                            <circle cx="4" cy="20" r="2"></circle>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </div>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-default cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="submit" tabIndex="0" size="icon-sm" aria-label="Send message" aria-disabled="true" id="base-ui-_r_11_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                          <path d="m5 12 7-7 7 7"></path>
                          <path d="M12 19V5"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
              </form>
              <p className="text-[11px] text-center text-muted-foreground">
                {"NeUI Chat can browse the web. Check important info."}
              </p>
            </SidebarFooter>
          </div>
          </SidebarProvider>
        </div>
        </SidebarProvider>
      </Sidebar>
      </SidebarProvider>
    </div>
    </SidebarProvider>
  )
}
