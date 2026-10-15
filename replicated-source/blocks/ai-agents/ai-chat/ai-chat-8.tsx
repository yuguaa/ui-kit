import {
  Avatar,
  AvatarGroup,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Bubble,
  BubbleReactions,
} from "@/registry/bases/base/ui/bubble"
import { Button } from "@/registry/bases/base/ui/button"
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
import {
  MarkerContent,
  MarkerIcon,
} from "@/registry/bases/base/ui/marker"
import {
  MessageScroller,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerViewport,
} from "@/registry/bases/base/ui/message-scroller"
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
              {"Calendar"}
            </span>
            <div className="flex gap-3 items-center ms-auto shrink-0">
              <Button className="gap-1.5" type="button" tabIndex="0" aria-pressed="true">
                <svg className="lucide lucide-sparkles size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle>
                </svg>
                {"Assistant"}
              </Button>
              <Avatar className="size-7" size="default">
                <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                    <svg className="lucide lucide-sparkles shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                      <path d="M20 2v4"></path>
                      <path d="M22 4h-4"></path>
                      <circle cx="4" cy="20" r="2"></circle>
                    </svg>
                  </span>
                  <span className="min-w-0 text-sm text-start truncate">
                    {"Thursday reshuffle"}
                  </span>
                  <svg className="lucide lucide-chevron-down opacity-60 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </PopoverTrigger>
                </Popover>
                <div className="flex gap-0.5 items-center ms-auto shrink-0">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:text-foreground cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center max-md:hidden outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Widen the panel" aria-pressed="false" id="base-ui-_r_4_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-panel-right size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PanelRightIcon" tabler="IconLayoutSidebarRight" hugeicons="SidebarRight01Icon" phosphor="SidebarSimpleIcon" remixicon="RiLayoutRightLine" aria-hidden="true">
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M15 3v18"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="New chat" id="base-ui-_r_6_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-square-pen size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="flex" id="base-ui-_r_b_" baseUiTooltipTrigger="">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Chat settings" aria-haspopup="menu" id="base-ui-_r_c_" aria-expanded="false">
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
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Hide assistant" id="base-ui-_r_f_" baseUiTooltipTrigger="">
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
                    <MessageScrollerContent className="gap-4 min-w-0 px-4 py-4 w-full" role="log" aria-relevant="additions" aria-busy="false">
                      <MessageScrollerItem className="[content-visibility:visible]" scrollAnchor="false">
                        <Marker variant="separator">
                          <MarkerContent>
                            {"Today"}
                          </MarkerContent>
                        </Marker>
                      </MessageScrollerItem>
                      <MessageScrollerItem className="[content-visibility:visible] animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none" messageId="t_hello" scrollAnchor="false">
                        <div className="flex flex-col gap-2 group/turn">
                          <Bubble className="max-w-full" variant="outline" data-align="start">
                            <BubbleContent className="leading-relaxed text-sm">
                              {"Welcome back. How can I help?"}
                            </BubbleContent>
                          </Bubble>
                          <div className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-events-none transition-opacity">
                            <Tooltip>
                            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy answer" id="base-ui-_r_h_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-copy size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </div>
                        </div>
                      </MessageScrollerItem>
                      <MessageScrollerItem className="[content-visibility:visible] animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none" messageId="t_voice" scrollAnchor="false">
                        <Bubble className="max-w-full w-full" variant="muted" data-align="end">
                          <BubbleContent className="flex-col gap-2.5 px-3 py-2.5 w-full">
                            <div className="flex gap-3 items-center">
                              <Button className="rounded-full" type="button" tabIndex="0" aria-label="Play voice note">
                                <svg className="lucide lucide-play size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlayIcon" tabler="IconPlayerPlay" hugeicons="PlayIcon" phosphor="PlayIcon" remixicon="RiPlayLine" aria-hidden="true">
                                  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                                </svg>
                              </Button>
                              <div className="flex-1 min-w-0"></div>
                              <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                {"0:18"}
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="flex gap-1.5 items-center text-muted-foreground text-xs">
                                {"Transcription"}
                              </span>
                              <p className="leading-relaxed text-sm">
                                {"I've got a lunch with Sarah on Thursday at noon. Can you move things around so it fits?"}
                              </p>
                            </div>
                          </BubbleContent>
                          <BubbleReactions className="focus-within:opacity-100 group-hover/bubble:opacity-100 max-md:opacity-100 opacity-0" data-align="end" data-side="bottom">
                            <Tooltip>
                            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy transcript" id="base-ui-_r_j_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-copy size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                            <Tooltip>
                            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Edit transcript" id="base-ui-_r_l_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                            <Tooltip>
                            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Send again" id="base-ui-_r_n_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-refresh-cw size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                                <path d="M21 3v5h-5"></path>
                                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                                <path d="M8 16H3v5"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </BubbleReactions>
                        </Bubble>
                      </MessageScrollerItem>
                      <MessageScrollerItem className="[content-visibility:visible] animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none" messageId="t_steps" scrollAnchor="false">
                        <div className="flex flex-col gap-2 group/turn">
                          <Bubble className="max-w-full" variant="outline" data-align="start">
                            <BubbleContent className="flex-col gap-2.5">
                              <p className="leading-relaxed text-sm">
                                {"Checked the day before answering:"}
                              </p>
                              <div className="flex flex-col gap-1.5">
                                <Marker variant="default">
                                  <MarkerIcon className="text-success" aria-hidden="true">
                                    <svg className="lucide lucide-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                  </MarkerIcon>
                                  <MarkerContent className="flex gap-1.5 items-center">
                                    <span className="shrink-0 text-foreground">
                                      {"Read the calendar"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="min-w-0 truncate">
                                      {"5 entries on Thursday"}
                                    </span>
                                  </MarkerContent>
                                </Marker>
                                <Marker variant="default">
                                  <MarkerIcon className="text-success" aria-hidden="true">
                                    <svg className="lucide lucide-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                  </MarkerIcon>
                                  <MarkerContent className="flex gap-1.5 items-center">
                                    <span className="shrink-0 text-foreground">
                                      {"Found the clashes"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="min-w-0 truncate">
                                      {"2 sit on top of noon"}
                                    </span>
                                  </MarkerContent>
                                </Marker>
                                <Marker variant="default">
                                  <MarkerIcon className="text-success" aria-hidden="true">
                                    <svg className="lucide lucide-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                  </MarkerIcon>
                                  <MarkerContent className="flex gap-1.5 items-center">
                                    <span className="shrink-0 text-foreground">
                                      {"Checked the guests"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="min-w-0 truncate">
                                      {"Maya and Jonas are flexible"}
                                    </span>
                                  </MarkerContent>
                                </Marker>
                              </div>
                              <p className="leading-relaxed text-sm">
                                {"Both clashes can move without asking anyone to give up a morning."}
                              </p>
                            </BubbleContent>
                          </Bubble>
                          <div className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-events-none transition-opacity">
                            <Tooltip>
                            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy answer" id="base-ui-_r_p_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-copy size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                            <Tooltip>
                            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Answer again" id="base-ui-_r_r_" baseUiTooltipTrigger="">
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
                      </MessageScrollerItem>
                      <MessageScrollerItem className="[content-visibility:visible] animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none" messageId="t_plan" scrollAnchor="false">
                        <div className="flex flex-col gap-2.5">
                          <Bubble className="max-w-full" variant="outline" data-align="start">
                            <BubbleContent className="flex-col gap-2.5">
                              <p className="leading-relaxed text-sm">
                                {"Here is what I would move:"}
                              </p>
                              <ul className="flex flex-col gap-1.5">
                                <li className="flex gap-2 items-center">
                                  <svg className="lucide lucide-calendar shrink-0 size-3.5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                    <path d="M3 10h18"></path>
                                  </svg>
                                  <span className="leading-relaxed min-w-0 text-sm">
                                    <button className="font-medium hover:text-primary underline underline-offset-2" type="button" aria-label="Ask about Lunch With Sarah">
                                      {"Lunch With Sarah"}
                                    </button>
                                    {"books at 12:00 PM."}
                                  </span>
                                </li>
                                <li className="flex gap-2 items-center">
                                  <svg className="lucide lucide-calendar shrink-0 size-3.5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                    <path d="M3 10h18"></path>
                                  </svg>
                                  <span className="leading-relaxed min-w-0 text-sm">
                                    <button className="font-medium hover:text-primary underline underline-offset-2" type="button" aria-label="Ask about Sync With Maya">
                                      {"Sync With Maya"}
                                    </button>
                                    {"moves to 1:30 PM."}
                                  </span>
                                </li>
                                <li className="flex gap-2 items-center">
                                  <svg className="lucide lucide-calendar shrink-0 size-3.5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                    <path d="M3 10h18"></path>
                                  </svg>
                                  <span className="leading-relaxed min-w-0 text-sm">
                                    <button className="font-medium hover:text-primary underline underline-offset-2" type="button" aria-label="Ask about Strategy Session">
                                      {"Strategy Session"}
                                    </button>
                                    {"moves to Friday, 3:00 PM."}
                                  </span>
                                </li>
                              </ul>
                              <div className="flex gap-2 items-center">
                                <AvatarGroup className="-space-x-1" aria-label="Guests affected: Maya Chen, Jonas Weber, Sarah Chen">
                                  <Avatar className="size-5" size="default">
                                    <AvatarImage alt="Maya Chen" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-5" size="default">
                                    <AvatarImage alt="Jonas Weber" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-5" size="default">
                                    <AvatarImage alt="Sarah Chen" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                </AvatarGroup>
                                <span className="text-muted-foreground text-xs">
                                  {"Will be notified"}
                                </span>
                              </div>
                              <p className="leading-relaxed text-sm">
                                {"Shall I update your calendar and let them know?"}
                              </p>
                            </BubbleContent>
                          </Bubble>
                          <div className="flex flex-col gap-1.5">
                            <div className="gap-2 grid grid-cols-2">
                              <Button className="gap-1.5" type="button" tabIndex="0">
                                <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path>
                                </svg>
                                {"Not Now"}
                              </Button>
                              <Button className="gap-1.5" type="button" tabIndex="0">
                                <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                  <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                {"Approve"}
                              </Button>
                            </div>
                            <p className="text-muted-foreground text-xs">
                              {"Need another option? Just ask."}
                            </p>
                          </div>
                        </div>
                      </MessageScrollerItem>
                      <div aria-hidden="true" data-message-scroller-spacer="" hidden></div>
                    </MessageScrollerContent>
                  </MessageScrollerViewport>
                </MessageScroller>
                <div className="absolute bg-linear-to-b data-[active=true]:opacity-100 duration-200 ease-out from-sidebar h-6 inset-x-0 motion-reduce:transition-none opacity-0 pointer-events-none to-transparent top-0 transition-opacity" aria-hidden="true" data-active="true"></div>
                <div className="absolute bg-linear-to-t bottom-0 data-[active=true]:opacity-100 duration-200 ease-out from-sidebar h-8 inset-x-0 motion-reduce:transition-none opacity-0 pointer-events-none to-transparent transition-opacity" aria-hidden="true" data-active="false"></div>
              </div>
            </SidebarContent>
            </SidebarProvider>
            <SidebarFooter className="gap-2 mt-2 pb-4 pt-2 px-4 relative shrink-0 z-10" sidebar="footer">
              <div className="flex flex-col gap-2">
                <form>
                  <Field role="group" data-orientation="vertical">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="ai-chat-8-composer">
                      {"Message the assistant"}
                    </FieldLabel>
                    <InputGroup className="min-h-10" role="group">
                      <textarea className="cn-input-group-textarea cn-textarea disabled:cursor-not-allowed disabled:opacity-50 field-sizing-content flex flex-1 max-h-32 min-h-9 outline-none placeholder:text-muted-foreground resize-none w-full" id="ai-chat-8-composer" placeholder="Ask me anything"></textarea>
                      <InputGroupAddon className="pb-1 self-end" role="group" data-align="inline-end">
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Record a voice note" id="base-ui-_r_t_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-mic size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MicIcon" tabler="IconMicrophone" hugeicons="Mic02Icon" phosphor="MicrophoneIcon" remixicon="RiMicLine" aria-hidden="true">
                            <path d="M12 19v3"></path>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                            <rect x="9" y="2" width="6" height="13" rx="3"></rect>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </InputGroupAddon>
                    </InputGroup>
                  </Field>
                </form>
                <div className="flex gap-2 items-center justify-between px-1">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none font-normal gap-1.5 group/button h-7 hover:text-foreground inline-flex items-center justify-center min-w-0 outline-none px-2 select-none shrink text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Model Swift 2.4, mode Act" aria-haspopup="menu" id="base-ui-_r_11_" aria-expanded="false">
                    <span className="min-w-0 text-xs truncate">
                      {"Swift 2.4"}
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="shrink-0 text-xs">
                      {"Act"}
                    </span>
                    <svg className="lucide lucide-chevron-down opacity-60 shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                  <div className="flex gap-0.5 items-center shrink-0">
                    <Popover>
                    <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none font-normal gap-1.5 group/button h-7 hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Keyboard shortcuts" baseUiClickTrigger="" id="base-ui-_r_14_" aria-haspopup="dialog" aria-expanded="false">
                      <svg className="lucide lucide-key-round shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                        <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                        <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                      </svg>
                      <span className="max-sm:sr-only text-xs">
                        {"Shortcuts"}
                      </span>
                    </PopoverTrigger>
                    </Popover>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none font-normal gap-1.5 group/button h-7 hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Attach a meeting" aria-haspopup="menu" id="base-ui-_r_18_" aria-expanded="false">
                      <svg className="lucide lucide-paperclip shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" aria-hidden="true">
                        <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                      </svg>
                      <span className="max-sm:sr-only text-xs">
                        {"Attach"}
                      </span>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
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
