import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardDescription,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  EmptyDescription,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"
import {
  Field,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col h-svh relative text-foreground w-full">
      <div className="flex-1 min-h-0 overflow-y-auto">
        <header className="bg-background border-b flex gap-2 h-14 items-center px-4 sm:px-6 sticky top-0 z-10">
          <span className="font-medium min-w-0 text-sm truncate">
            {"Halcyon Labs"}
          </span>
          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
          <span className="min-w-0 text-muted-foreground text-sm truncate">
            {"API Health"}
          </span>
          <DropdownMenu>
          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center ms-auto outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open user menu" aria-haspopup="menu" id="base-ui-_r_5_" aria-expanded="false">
            <Avatar className="size-6" size="default">
              <AvatarImage alt="Maya Chen" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
            </Avatar>
          </DropdownMenuTrigger>
          </DropdownMenu>
        </header>
        <div className="flex flex-col gap-8 motion-reduce:**:data-[slot=skeleton]:animate-none px-4 py-6 sm:px-6 w-full" aria-hidden="true">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-44"></Skeleton>
            <Skeleton className="h-3.5 max-w-full w-64"></Skeleton>
          </div>
          <div className="gap-4 grid grid-cols-2 lg:grid-cols-4">
            <Skeleton className="h-24"></Skeleton>
            <Skeleton className="h-24"></Skeleton>
            <Skeleton className="h-24"></Skeleton>
            <Skeleton className="h-24"></Skeleton>
          </div>
          <Skeleton className="h-56"></Skeleton>
          <div className="flex flex-col gap-3">
            <Skeleton className="h-3 w-28"></Skeleton>
            <div className="flex gap-4 items-center">
              <Skeleton className="h-3.5 w-40"></Skeleton>
              <Skeleton className="h-3.5 w-16"></Skeleton>
              <Skeleton className="h-3.5 w-12"></Skeleton>
              <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
            </div>
            <div className="flex gap-4 items-center">
              <Skeleton className="h-3.5 w-56"></Skeleton>
              <Skeleton className="h-3.5 w-20"></Skeleton>
              <Skeleton className="h-3.5 w-10"></Skeleton>
              <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
            </div>
            <div className="flex gap-4 items-center">
              <Skeleton className="h-3.5 w-32"></Skeleton>
              <Skeleton className="h-3.5 w-16"></Skeleton>
              <Skeleton className="h-3.5 w-14"></Skeleton>
              <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
            </div>
            <div className="flex gap-4 items-center">
              <Skeleton className="h-3.5 w-48"></Skeleton>
              <Skeleton className="h-3.5 w-12"></Skeleton>
              <Skeleton className="h-3.5 w-12"></Skeleton>
              <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
            </div>
            <div className="flex gap-4 items-center">
              <Skeleton className="h-3.5 w-44"></Skeleton>
              <Skeleton className="h-3.5 w-20"></Skeleton>
              <Skeleton className="h-3.5 w-10"></Skeleton>
              <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
            </div>
            <div className="flex gap-4 items-center">
              <Skeleton className="h-3.5 w-36"></Skeleton>
              <Skeleton className="h-3.5 w-16"></Skeleton>
              <Skeleton className="h-3.5 w-14"></Skeleton>
              <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
            </div>
            <div className="flex gap-4 items-center">
              <Skeleton className="h-3.5 w-52"></Skeleton>
              <Skeleton className="h-3.5 w-20"></Skeleton>
              <Skeleton className="h-3.5 w-12"></Skeleton>
              <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
            </div>
            <div className="flex gap-4 items-center">
              <Skeleton className="h-3.5 w-28"></Skeleton>
              <Skeleton className="h-3.5 w-12"></Skeleton>
              <Skeleton className="h-3.5 w-10"></Skeleton>
              <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
            </div>
            <div className="flex gap-4 items-center">
              <Skeleton className="h-3.5 w-44"></Skeleton>
              <Skeleton className="h-3.5 w-16"></Skeleton>
              <Skeleton className="h-3.5 w-14"></Skeleton>
              <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
            </div>
            <div className="flex gap-4 items-center">
              <Skeleton className="h-3.5 w-60"></Skeleton>
              <Skeleton className="h-3.5 w-20"></Skeleton>
              <Skeleton className="h-3.5 w-12"></Skeleton>
              <Skeleton className="h-6 ms-auto shrink-0 w-14"></Skeleton>
            </div>
          </div>
        </div>
      </div>
      <Button className="bottom-4 end-4 fixed hidden rounded-full transition-colors z-40" type="button" tabIndex="0" aria-haspopup="dialog" aria-expanded="true" inert="">
        <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
          <path d="M20 2v4"></path>
          <path d="M22 4h-4"></path>
          <circle cx="4" cy="20" r="2"></circle>
        </svg>
        {"Ask AI"}
      </Button>
      <Card className="[--window-h:min(40rem,calc(100svh-2rem))] [--window-max-h:calc(100svh-2rem)] bg-popover bottom-4 data-[state=closed]:[content-visibility:hidden] data-[state=closed]:invisible end-4 fixed gap-0 h-(--window-h) max-sm:h-(--window-max-h) origin-bottom-right overflow-hidden p-0 rounded-xl rtl:origin-bottom-left shadow-md sm:data-[expanded=true]:h-(--window-max-h) sm:max-w-104 w-[calc(100vw-2rem)] z-50" size="default" role="dialog" aria-modal="false" aria-labelledby="_r_0_" aria-describedby="_r_1_" data-state="open" expanded="false">
        <div className="absolute after:absolute after:bg-linear-to-b after:from-popover after:h-6 after:inset-x-0 after:pointer-events-none after:to-transparent after:top-full backdrop-blur-md bg-popover/70 in-data-[size=minimized]:backdrop-filter-none inset-x-0 rounded-t-xl supports-backdrop-filter:bg-popover/60 top-0 z-20">
          <span className="absolute border-foreground/10 border-t hidden in-data-folding:block inset-0 pointer-events-none rounded-t-xl" aria-hidden="true" data-fold="edge"></span>
          <div className="flex gap-1 items-center min-h-12 px-3">
            <div className="flex gap-2 items-center min-w-0 ps-1">
              <CardTitle className="font-medium normal-case text-sm tracking-normal truncate" id="_r_0_" role="heading" aria-level="2">
                {"NeUI Chat"}
              </CardTitle>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                {"Beta"}
              </Badge>
              <CardDescription className="sr-only" id="_r_1_">
                {"Answers from API Health and what you attach."}
              </CardDescription>
            </div>
            <div className="flex gap-0.5 items-center ms-auto shrink-0">
              <div className="flex gap-0.5 items-center" data-fold="controls">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" disabled="" tabIndex="0" disabled aria-label="New chat" id="base-ui-_r_8_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="flex" id="base-ui-_r_b_" baseUiTooltipTrigger="">
                  <Popover>
                  <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Chat history" baseUiClickTrigger="" id="base-ui-_r_c_" aria-haspopup="dialog" aria-expanded="false">
                    <svg className="lucide lucide-history" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HistoryIcon" tabler="IconHistory" hugeicons="Clock01Icon" phosphor="ClockCounterClockwiseIcon" remixicon="RiHistoryLine" aria-hidden="true">
                      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                      <path d="M3 3v5h5"></path>
                      <path d="M12 7v5l4 2"></path>
                    </svg>
                  </PopoverTrigger>
                  </Popover>
                </TooltipTrigger>
                </Tooltip>
                <Separator className="h-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              </div>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [@media(max-height:42rem)]:hidden cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button group/expand hover:text-foreground inline-flex items-center justify-center max-sm:hidden outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Expand chat" aria-pressed="false" id="base-ui-_r_e_" baseUiTooltipTrigger="">
                <svg className="group-aria-pressed/expand:hidden lucide lucide-maximize-2 lucide-maximize2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Maximize2Icon" tabler="IconMaximize" hugeicons="Maximize01Icon" phosphor="CornersOutIcon" remixicon="RiFullscreenLine" aria-hidden="true">
                  <path d="M15 3h6v6"></path>
                  <path d="m21 3-7 7"></path>
                  <path d="m3 21 7-7"></path>
                  <path d="M9 21H3v-6"></path>
                </svg>
                <svg className="group-aria-pressed/expand:block hidden lucide lucide-minimize-2 lucide-minimize2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Minimize2Icon" tabler="IconMinimize" hugeicons="Minimize01Icon" phosphor="CornersInIcon" remixicon="RiFullscreenExitLine" aria-hidden="true">
                  <path d="m14 10 7-7"></path>
                  <path d="M20 10h-6V4"></path>
                  <path d="m3 21 7-7"></path>
                  <path d="M4 14h6v6"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Minimize chat" id="base-ui-_r_g_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="End chat" id="base-ui-_r_i_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col min-h-0" data-fold="body">
          <div className="flex flex-1 flex-col min-h-0" data-fold="content">
            <div className="[--scroll-fade-reveal:--spacing(8)] data-[at-end=true]:scroll-fade-b-0 data-[fits=true]:scroll-fade-none flex flex-1 flex-col gap-5 min-h-0 no-scrollbar overflow-y-auto overscroll-contain pb-2 pt-18 px-4 scroll-fade-b scroll-pb-10 scroll-pt-18" data-fold="starters" data-fits="true" data-at-end="true">
              <div className="flex flex-col gap-1">
                <EmptyTitle>
                  {"Hi Maya"}
                </EmptyTitle>
                <EmptyDescription>
                  {"I read API Health and anything you attach."}
                </EmptyDescription>
              </div>
              <div className="flex flex-col gap-1" role="group" aria-labelledby="_r_j_">
                <p className="font-medium text-muted-foreground text-xs" id="_r_j_">
                  {"Try Asking"}
                </p>
                <div className="flex flex-col">
                  <Button className="font-normal gap-2 hover:text-foreground justify-start text-muted-foreground w-full" type="button" tabIndex="0">
                    <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span className="min-w-0 truncate">
                      {"Why did p95 double on eu-west?"}
                    </span>
                  </Button>
                  <Button className="font-normal gap-2 hover:text-foreground justify-start text-muted-foreground w-full" type="button" tabIndex="0">
                    <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span className="min-w-0 truncate">
                      {"Which endpoints fail the most?"}
                    </span>
                  </Button>
                  <Button className="font-normal gap-2 hover:text-foreground justify-start text-muted-foreground w-full" type="button" tabIndex="0">
                    <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span className="min-w-0 truncate">
                      {"How do we fix the slowdown?"}
                    </span>
                  </Button>
                  <Button className="font-normal gap-2 hover:text-foreground justify-start text-muted-foreground w-full" type="button" tabIndex="0">
                    <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span className="min-w-0 truncate">
                      {"Draft a status update for customers"}
                    </span>
                  </Button>
                  <Button className="font-normal gap-2 hover:text-foreground justify-start text-muted-foreground w-full" type="button" tabIndex="0">
                    <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span className="min-w-0 truncate">
                      {"What changed in release 3.4?"}
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 pb-3 px-4 shrink-0">
            <form>
              <Field role="group" data-orientation="vertical">
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="_r_k_">
                  {"Ask a question"}
                </FieldLabel>
                <InputGroup role="group">
                  <textarea className="cn-input-group-textarea cn-textarea disabled:cursor-not-allowed disabled:opacity-50 field-sizing-content flex flex-1 max-h-32 min-h-14 outline-none placeholder:text-muted-foreground resize-none w-full" id="_r_k_" placeholder="Ask about this page"></textarea>
                  <InputGroupAddon className="justify-between" role="group" data-align="block-end">
                    <Tooltip>
                    <TooltipTrigger className="flex" id="base-ui-_r_p_" baseUiTooltipTrigger="">
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" size="icon-sm" aria-label="Attach context" aria-haspopup="menu" id="base-ui-_r_q_" aria-expanded="false">
                        <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-default disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 transition-all whitespace-nowrap" type="submit" tabIndex="0" aria-label="Send question" id="base-ui-_r_t_" baseUiTooltipTrigger="">
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
            <p className="text-center text-muted-foreground text-xs">
              {"Replies can be wrong. Check before acting."}
            </p>
          </div>
        </div>
      </Card>
      <Card className="bg-popover bottom-4 data-[state=closed]:[content-visibility:hidden] data-[state=closed]:invisible end-4 fixed gap-0 h-12 overflow-hidden p-0 rounded-xl shadow-md sm:max-w-104 w-[calc(100vw-2rem)] z-40" size="minimized" role="region" aria-label="NeUI Chat" data-state="closed" inert="">
        <div className="absolute after:absolute after:bg-linear-to-b after:from-popover after:h-6 after:inset-x-0 after:pointer-events-none after:to-transparent after:top-full backdrop-blur-md bg-popover/70 in-data-[size=minimized]:backdrop-filter-none inset-x-0 rounded-t-xl supports-backdrop-filter:bg-popover/60 top-0 z-20">
          <span className="absolute border-foreground/10 border-t hidden in-data-folding:block inset-0 pointer-events-none rounded-t-xl" aria-hidden="true" data-fold="edge"></span>
          <div className="flex gap-1 items-center min-h-12 px-3">
            <div className="flex gap-2 items-center min-w-0 ps-1">
              <CardTitle className="font-medium normal-case text-sm tracking-normal truncate">
                {"NeUI Chat"}
              </CardTitle>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                {"Beta"}
              </Badge>
              <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs" role="status" data-fold="status"></span>
            </div>
            <div className="flex gap-0.5 items-center ms-auto shrink-0">
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [@media(max-height:42rem)]:hidden cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button group/expand hover:text-foreground inline-flex items-center justify-center max-sm:hidden outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Expand chat" aria-pressed="false" id="base-ui-_r_v_" baseUiTooltipTrigger="">
                <svg className="group-aria-pressed/expand:hidden lucide lucide-maximize-2 lucide-maximize2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Maximize2Icon" tabler="IconMaximize" hugeicons="Maximize01Icon" phosphor="CornersOutIcon" remixicon="RiFullscreenLine" aria-hidden="true">
                  <path d="M15 3h6v6"></path>
                  <path d="m21 3-7 7"></path>
                  <path d="m3 21 7-7"></path>
                  <path d="M9 21H3v-6"></path>
                </svg>
                <svg className="group-aria-pressed/expand:block hidden lucide lucide-minimize-2 lucide-minimize2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Minimize2Icon" tabler="IconMinimize" hugeicons="Minimize01Icon" phosphor="CornersInIcon" remixicon="RiFullscreenExitLine" aria-hidden="true">
                  <path d="m14 10 7-7"></path>
                  <path d="M20 10h-6V4"></path>
                  <path d="m3 21 7-7"></path>
                  <path d="M4 14h6v6"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Restore chat" id="base-ui-_r_11_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-chevron-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine" aria-hidden="true">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="End chat" id="base-ui-_r_13_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
