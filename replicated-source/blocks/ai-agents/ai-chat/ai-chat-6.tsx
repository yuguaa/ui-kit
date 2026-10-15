import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/bases/base/ui/attachment"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Bubble } from "@/registry/bases/base/ui/bubble"
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
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/registry/bases/base/ui/questionnaire"
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
              {"Signups"}
            </span>
            <div className="flex gap-3 items-center ms-auto shrink-0">
              <Button className="gap-1.5" type="button" tabIndex={0} aria-pressed="true">
                <svg className="lucide lucide-bot size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                  <path d="M12 8V4H8"></path>
                  <rect width={16} height={12} x={4} y={8} rx={2}></rect>
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
              <div className="flex flex-1 flex-col gap-2 min-w-0">
                <Skeleton className="animate-none h-6 max-w-full w-52"></Skeleton>
                <Skeleton className="animate-none h-3.5 max-w-full w-72"></Skeleton>
              </div>
              <Skeleton className="animate-none h-8 shrink-0 w-28"></Skeleton>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-end">
                <Skeleton className="animate-none h-16 w-full"></Skeleton>
                <Skeleton className="animate-none h-24 w-full"></Skeleton>
                <Skeleton className="animate-none h-12 w-full"></Skeleton>
                <Skeleton className="animate-none h-28 w-full"></Skeleton>
                <Skeleton className="animate-none h-20 w-full"></Skeleton>
                <Skeleton className="animate-none h-32 w-full"></Skeleton>
                <Skeleton className="animate-none h-14 w-full"></Skeleton>
                <Skeleton className="animate-none h-26 w-full"></Skeleton>
                <Skeleton className="animate-none h-18 w-full"></Skeleton>
                <Skeleton className="animate-none h-36 w-full"></Skeleton>
                <Skeleton className="animate-none h-22 w-full"></Skeleton>
                <Skeleton className="animate-none h-16 w-full"></Skeleton>
              </div>
              <div className="flex gap-6">
                <Skeleton className="animate-none h-3 w-20"></Skeleton>
                <Skeleton className="animate-none h-3 w-16"></Skeleton>
                <Skeleton className="animate-none h-3 w-24"></Skeleton>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Skeleton className="animate-none h-3 w-32"></Skeleton>
              <div className="flex gap-4 items-center">
                <Skeleton className="animate-none rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-44"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-20"></Skeleton>
                <Skeleton className="animate-none h-6 ms-auto shrink-0 w-16"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="animate-none rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-32"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-28"></Skeleton>
                <Skeleton className="animate-none h-6 ms-auto shrink-0 w-16"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="animate-none rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-56"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-16"></Skeleton>
                <Skeleton className="animate-none h-6 ms-auto shrink-0 w-16"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="animate-none rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-40"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-24"></Skeleton>
                <Skeleton className="animate-none h-6 ms-auto shrink-0 w-16"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="animate-none rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-28"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-20"></Skeleton>
                <Skeleton className="animate-none h-6 ms-auto shrink-0 w-16"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="animate-none rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-52"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-28"></Skeleton>
                <Skeleton className="animate-none h-6 ms-auto shrink-0 w-16"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="animate-none rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-36"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-16"></Skeleton>
                <Skeleton className="animate-none h-6 ms-auto shrink-0 w-16"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="animate-none rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-48"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-24"></Skeleton>
                <Skeleton className="animate-none h-6 ms-auto shrink-0 w-16"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="animate-none rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-36"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-20"></Skeleton>
                <Skeleton className="animate-none h-6 ms-auto shrink-0 w-16"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="animate-none rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-44"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-28"></Skeleton>
                <Skeleton className="animate-none h-6 ms-auto shrink-0 w-16"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="animate-none rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-56"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-16"></Skeleton>
                <Skeleton className="animate-none h-6 ms-auto shrink-0 w-16"></Skeleton>
              </div>
              <div className="flex gap-4 items-center">
                <Skeleton className="animate-none rounded-full shrink-0 size-8"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-34"></Skeleton>
                <Skeleton className="animate-none h-3.5 w-24"></Skeleton>
                <Skeleton className="animate-none h-6 ms-auto shrink-0 w-16"></Skeleton>
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
              <div className="flex gap-2 items-center min-h-12 px-4">
                <span className="shrink-0 text-primary">
                  <svg className="lucide lucide-bot shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                    <path d="M12 8V4H8"></path>
                    <rect width={16} height={12} x={4} y={8} rx={2}></rect>
                    <path d="M2 14h2"></path>
                    <path d="M20 14h2"></path>
                    <path d="M15 13v2"></path>
                    <path d="M9 13v2"></path>
                  </svg>
                </span>
                <DropdownMenu>
                <DropdownMenuTrigger className="-ms-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none font-medium gap-1.5 group/button h-8 inline-flex items-center justify-start min-w-0 outline-none px-1.5 select-none shrink-0 text-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Model, Claude Sonnet 5" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false">
                  <span className="min-w-0 text-sm truncate">
                    {"Claude Sonnet 5"}
                  </span>
                  <svg className="lucide lucide-chevron-down opacity-60 shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
                <p className="flex items-center min-w-0 shrink" role="status" aria-live="polite"></p>
                <div className="flex gap-0.5 items-center ms-auto shrink-0">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="New chat" id="base-ui-_r_6_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Hide assistant" id="base-ui-_r_8_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
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
                  <MessageScrollerViewport className="scrollbar" role="region" aria-label="Messages" tabIndex={0} scrollable="start">
                    <MessageScrollerContent className="gap-6 min-w-0 px-4 py-4 w-full" role="log" aria-relevant="additions" aria-busy="false">
                      <MessageScrollerItem className="[content-visibility:visible]" scrollAnchor="false">
                        <Marker variant="separator">
                          <MarkerContent>
                            {"Today"}
                          </MarkerContent>
                        </Marker>
                      </MessageScrollerItem>
                      <MessageScrollerItem className="[content-visibility:visible] animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none" messageId="m_ask" scrollAnchor="false">
                        <div className="flex flex-col gap-6">
                          <Message className="group/turn" data-align="end" role="group" aria-label="Priya Nair">
                            <MessageContent className="gap-1.5 items-end">
                              <AttachmentGroup className="gap-2 max-w-[88%] self-end" aria-label="1 attached file">
                                <Attachment className="max-w-56" data-state="done" size="sm" data-orientation="horizontal">
                                  <AttachmentMedia className="text-muted-foreground" variant="icon">
                                    <svg className="lucide lucide-chart-column shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                      <path d="M18 17V9"></path>
                                      <path d="M13 17V5"></path>
                                      <path d="M8 17v-3"></path>
                                    </svg>
                                  </AttachmentMedia>
                                  <AttachmentContent>
                                    <AttachmentTitle className="text-xs">
                                      {"funnel-export.csv"}
                                    </AttachmentTitle>
                                    <AttachmentDescription className="tabular-nums text-xs">
                                      {"CSV, 1,204 rows"}
                                    </AttachmentDescription>
                                  </AttachmentContent>
                                </Attachment>
                              </AttachmentGroup>
                              <Bubble className="max-w-[88%]" variant="muted" data-align="end">
                                <BubbleContent className="text-sm/6">
                                  {"Signup completion dropped 12% after 4.2 shipped on Tuesday. Work out what changed and get a fix moving before Thursday's review."}
                                </BubbleContent>
                              </Bubble>
                              <MessageFooter className="gap-0.5 pe-0">
                                <span className="duration-150 flex group-focus-within/turn:opacity-100 group-hover/turn:opacity-100 items-center motion-reduce:transition-none opacity-0 transition-opacity">
                                  <span className="pe-1 tabular-nums text-muted-foreground text-xs">
                                    {"09:41"}
                                  </span>
                                  <Button type="button" tabIndex={0} aria-label="Copy message">
                                    <svg className="lucide lucide-copy size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                      <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                    </svg>
                                  </Button>
                                  <Button type="button" tabIndex={0} aria-label="Edit message">
                                    <svg className="lucide lucide-square-pen size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                                      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                      <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                                    </svg>
                                  </Button>
                                </span>
                              </MessageFooter>
                            </MessageContent>
                          </Message>
                        </div>
                      </MessageScrollerItem>
                      <MessageScrollerItem className="[content-visibility:visible] animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none" messageId="m_scope" scrollAnchor="false">
                        <div className="flex flex-col gap-6">
                          <Message className="group/turn" data-align="start" role="group" aria-label="NeUI Chat, Scoping the Drop">
                            <MessageContent className="gap-2">
                              <div className="flex gap-2 items-baseline min-w-0">
                                <h3 className="flex-1 font-semibold min-w-0 text-base tracking-tight truncate">
                                  {"Scoping the Drop"}
                                </h3>
                                <span className="flex gap-1.5 items-center shrink-0 text-muted-foreground text-xs">
                                  <span className="tabular-nums">
                                    {"4s"}
                                  </span>
                                </span>
                              </div>
                              <Bubble className="w-full" variant="ghost" data-align="start">
                                <BubbleContent className="p-0">
                                  <div className="selection:bg-primary/20 space-y-3 tabular-nums text-sm/6">
                                    <p className="whitespace-pre-wrap">
                                      {"Your export agrees with the funnel: completion fell from 71% to 59% between Monday and Wednesday, and all of it sits on the email verification step."}
                                    </p>
                                    <p className="whitespace-pre-wrap">
                                      {"Three questions before I start. I have pre-picked what I would choose, so confirming is enough."}
                                    </p>
                                  </div>
                                </BubbleContent>
                              </Bubble>
                              <div className="pt-1">
                                <div className="flex flex-col gap-3" role="group" aria-labelledby="_r_l_">
                                  <h4 className="font-medium text-muted-foreground text-xs tracking-wide uppercase" id="_r_l_">
                                    {"Brief"}
                                  </h4>
                                  <Questionnaire className="gap-3" current="1" first="" total="3" shortcuts="letters" novalidate="">
                                    <QuestionnaireProgress className="w-full" current="1" first="" total="3" aria-label="Questionnaire progress" aria-live="polite" aria-valuemax="3" aria-valuemin="1" aria-valuenow="1" aria-valuetext="Question 1 of 3" role="progressbar">
                                      <div className="flex gap-1 mb-1.5" aria-hidden="true">
                                        <span className="bg-primary flex-1 h-1 rounded-full"></span>
                                        <span className="bg-muted flex-1 h-1 rounded-full"></span>
                                        <span className="bg-muted flex-1 h-1 rounded-full"></span>
                                      </div>
                                      <span className="tabular-nums text-muted-foreground text-xs">
                                        {"Question 1 of 3"}
                                      </span>
                                    </QuestionnaireProgress>
                                    <QuestionnaireItem className="gap-2.5" data-active="" multiple="" required="" status="answered" aria-keyshortcuts="Meta+Enter Control+Enter ArrowUp ArrowDown ArrowRight" tabIndex={-1}>
                                      <QuestionnaireTitle className="font-medium text-sm">
                                        {"What may I read?"}
                                      </QuestionnaireTitle>
                                      <QuestionnaireChoices shortcuts="letters">
                                        <QuestionnaireChoice shortcut="A" type="checkbox" checked="">
                                          <input className="absolute cn-questionnaire-choice-input cursor-pointer inset-0 opacity-0 size-full z-10" data-shortcut="A" data-type="checkbox" aria-keyshortcuts="A Enter" id="_r_m_" type="checkbox" value="src_upload" name="sources" data-checked="" checked />
                                          <span className="border cn-questionnaire-choice-indicator flex group-data-[type=radio]/questionnaire-choice:rounded-full items-center justify-center pointer-events-none relative shrink-0" aria-hidden="true">
                                            <span className="cn-questionnaire-choice-indicator-dot group-data-[type=checkbox]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block hidden rounded-full"></span>
                                            <svg className="cn-questionnaire-choice-indicator-check group-data-[type=radio]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block hidden lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                              <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                          </span>
                                          <span className="cn-questionnaire-choice-content cn-questionnaire-choice-label flex flex-1 flex-col leading-snug min-w-0">
                                            <span className="text-sm">
                                              {"funnel-export.csv"}
                                            </span>
                                            <QuestionnaireChoiceDescription className="text-xs">
                                              {"Attached, CSV, 1,204 rows"}
                                            </QuestionnaireChoiceDescription>
                                          </span>
                                          <span className="cn-questionnaire-choice-shortcut cn-questionnaire-shortcut group-data-[shortcut]/questionnaire-choice:inline-flex hidden ms-auto pointer-events-none shrink-0" data-shortcut="A" aria-hidden="true">
                                            {"A"}
                                          </span>
                                        </QuestionnaireChoice>
                                        <QuestionnaireChoice shortcut="B" type="checkbox" checked="">
                                          <input className="absolute cn-questionnaire-choice-input cursor-pointer inset-0 opacity-0 size-full z-10" data-shortcut="B" data-type="checkbox" aria-keyshortcuts="B Enter" id="_r_n_" type="checkbox" value="src_funnel" name="sources" data-checked="" checked />
                                          <span className="border cn-questionnaire-choice-indicator flex group-data-[type=radio]/questionnaire-choice:rounded-full items-center justify-center pointer-events-none relative shrink-0" aria-hidden="true">
                                            <span className="cn-questionnaire-choice-indicator-dot group-data-[type=checkbox]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block hidden rounded-full"></span>
                                            <svg className="cn-questionnaire-choice-indicator-check group-data-[type=radio]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block hidden lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                              <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                          </span>
                                          <span className="cn-questionnaire-choice-content cn-questionnaire-choice-label flex flex-1 flex-col leading-snug min-w-0">
                                            <span className="text-sm">
                                              {"Signup funnel"}
                                            </span>
                                            <QuestionnaireChoiceDescription className="text-xs">
                                              {"Analytics, last 14 days"}
                                            </QuestionnaireChoiceDescription>
                                          </span>
                                          <span className="cn-questionnaire-choice-shortcut cn-questionnaire-shortcut group-data-[shortcut]/questionnaire-choice:inline-flex hidden ms-auto pointer-events-none shrink-0" data-shortcut="B" aria-hidden="true">
                                            {"B"}
                                          </span>
                                        </QuestionnaireChoice>
                                        <QuestionnaireChoice shortcut="C" type="checkbox" checked="">
                                          <input className="absolute cn-questionnaire-choice-input cursor-pointer inset-0 opacity-0 size-full z-10" data-shortcut="C" data-type="checkbox" aria-keyshortcuts="C Enter" id="_r_o_" type="checkbox" value="src_tickets" name="sources" data-checked="" checked />
                                          <span className="border cn-questionnaire-choice-indicator flex group-data-[type=radio]/questionnaire-choice:rounded-full items-center justify-center pointer-events-none relative shrink-0" aria-hidden="true">
                                            <span className="cn-questionnaire-choice-indicator-dot group-data-[type=checkbox]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block hidden rounded-full"></span>
                                            <svg className="cn-questionnaire-choice-indicator-check group-data-[type=radio]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block hidden lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                              <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                          </span>
                                          <span className="cn-questionnaire-choice-content cn-questionnaire-choice-label flex flex-1 flex-col leading-snug min-w-0">
                                            <span className="text-sm">
                                              {"Support queue"}
                                            </span>
                                            <QuestionnaireChoiceDescription className="text-xs">
                                              {"14 tickets tagged signup"}
                                            </QuestionnaireChoiceDescription>
                                          </span>
                                          <span className="cn-questionnaire-choice-shortcut cn-questionnaire-shortcut group-data-[shortcut]/questionnaire-choice:inline-flex hidden ms-auto pointer-events-none shrink-0" data-shortcut="C" aria-hidden="true">
                                            {"C"}
                                          </span>
                                        </QuestionnaireChoice>
                                        <QuestionnaireChoice unchecked="" shortcut="D" type="checkbox">
                                          <input className="absolute cn-questionnaire-choice-input cursor-pointer inset-0 opacity-0 size-full z-10" data-unchecked="" data-shortcut="D" data-type="checkbox" aria-keyshortcuts="D" id="_r_p_" type="checkbox" value="src_replay" name="sources" />
                                          <span className="border cn-questionnaire-choice-indicator flex group-data-[type=radio]/questionnaire-choice:rounded-full items-center justify-center pointer-events-none relative shrink-0" aria-hidden="true">
                                            <span className="cn-questionnaire-choice-indicator-dot group-data-[type=checkbox]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block hidden rounded-full"></span>
                                            <svg className="cn-questionnaire-choice-indicator-check group-data-[type=radio]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block hidden lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                              <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                          </span>
                                          <span className="cn-questionnaire-choice-content cn-questionnaire-choice-label flex flex-1 flex-col leading-snug min-w-0">
                                            <span className="text-sm">
                                              {"Session replay"}
                                            </span>
                                            <QuestionnaireChoiceDescription className="text-xs">
                                              {"18 signups, Aug 25"}
                                            </QuestionnaireChoiceDescription>
                                          </span>
                                          <span className="cn-questionnaire-choice-shortcut cn-questionnaire-shortcut group-data-[shortcut]/questionnaire-choice:inline-flex hidden ms-auto pointer-events-none shrink-0" data-shortcut="D" aria-hidden="true">
                                            {"D"}
                                          </span>
                                        </QuestionnaireChoice>
                                      </QuestionnaireChoices>
                                      <QuestionnaireError hidden id="_r_q_">
                                        {"Choose an answer to continue."}
                                      </QuestionnaireError>
                                    </QuestionnaireItem>
                                    <QuestionnaireItem className="gap-2.5" required="" status="answered" hidden inert="" tabIndex={-1}>
                                      <QuestionnaireTitle className="font-medium text-sm">
                                        {"How far should I take it?"}
                                      </QuestionnaireTitle>
                                      <QuestionnaireChoices shortcuts="letters">
                                        <QuestionnaireChoice unchecked="" shortcut="A" type="radio">
                                          <input className="absolute cn-questionnaire-choice-input cursor-pointer inset-0 opacity-0 size-full z-10" data-unchecked="" data-shortcut="A" data-type="radio" aria-keyshortcuts="A" id="_r_r_" required type="radio" value="cause" name="depth" />
                                          <span className="border cn-questionnaire-choice-indicator flex group-data-[type=radio]/questionnaire-choice:rounded-full items-center justify-center pointer-events-none relative shrink-0" aria-hidden="true">
                                            <span className="cn-questionnaire-choice-indicator-dot group-data-[type=checkbox]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block hidden rounded-full"></span>
                                            <svg className="cn-questionnaire-choice-indicator-check group-data-[type=radio]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block hidden lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                              <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                          </span>
                                          <span className="cn-questionnaire-choice-content cn-questionnaire-choice-label flex flex-1 flex-col leading-snug min-w-0">
                                            <span className="text-sm">
                                              {"Find the cause"}
                                            </span>
                                            <QuestionnaireChoiceDescription className="text-xs">
                                              {"Read and report back"}
                                            </QuestionnaireChoiceDescription>
                                          </span>
                                          <span className="cn-questionnaire-choice-shortcut cn-questionnaire-shortcut group-data-[shortcut]/questionnaire-choice:inline-flex hidden ms-auto pointer-events-none shrink-0" data-shortcut="A" aria-hidden="true">
                                            {"A"}
                                          </span>
                                        </QuestionnaireChoice>
                                        <QuestionnaireChoice unchecked="" shortcut="B" type="radio">
                                          <input className="absolute cn-questionnaire-choice-input cursor-pointer inset-0 opacity-0 size-full z-10" data-unchecked="" data-shortcut="B" data-type="radio" aria-keyshortcuts="B" id="_r_s_" required type="radio" value="fix" name="depth" />
                                          <span className="border cn-questionnaire-choice-indicator flex group-data-[type=radio]/questionnaire-choice:rounded-full items-center justify-center pointer-events-none relative shrink-0" aria-hidden="true">
                                            <span className="cn-questionnaire-choice-indicator-dot group-data-[type=checkbox]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block hidden rounded-full"></span>
                                            <svg className="cn-questionnaire-choice-indicator-check group-data-[type=radio]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block hidden lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                              <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                          </span>
                                          <span className="cn-questionnaire-choice-content cn-questionnaire-choice-label flex flex-1 flex-col leading-snug min-w-0">
                                            <span className="text-sm">
                                              {"Find it and draft a fix"}
                                            </span>
                                            <QuestionnaireChoiceDescription className="text-xs">
                                              {"Adds the drafting steps"}
                                            </QuestionnaireChoiceDescription>
                                          </span>
                                          <span className="cn-questionnaire-choice-shortcut cn-questionnaire-shortcut group-data-[shortcut]/questionnaire-choice:inline-flex hidden ms-auto pointer-events-none shrink-0" data-shortcut="B" aria-hidden="true">
                                            {"B"}
                                          </span>
                                        </QuestionnaireChoice>
                                        <QuestionnaireChoice shortcut="C" type="radio" checked="">
                                          <input className="absolute cn-questionnaire-choice-input cursor-pointer inset-0 opacity-0 size-full z-10" data-shortcut="C" data-type="radio" aria-keyshortcuts="C Enter" id="_r_t_" required type="radio" value="handoff" name="depth" data-checked="" checked />
                                          <span className="border cn-questionnaire-choice-indicator flex group-data-[type=radio]/questionnaire-choice:rounded-full items-center justify-center pointer-events-none relative shrink-0" aria-hidden="true">
                                            <span className="cn-questionnaire-choice-indicator-dot group-data-[type=checkbox]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block hidden rounded-full"></span>
                                            <svg className="cn-questionnaire-choice-indicator-check group-data-[type=radio]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block hidden lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                              <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                          </span>
                                          <span className="cn-questionnaire-choice-content cn-questionnaire-choice-label flex flex-1 flex-col leading-snug min-w-0">
                                            <span className="text-sm">
                                              {"Draft it and hand it off"}
                                            </span>
                                            <QuestionnaireChoiceDescription className="text-xs">
                                              {"Adds the review note"}
                                            </QuestionnaireChoiceDescription>
                                          </span>
                                          <span className="cn-questionnaire-choice-shortcut cn-questionnaire-shortcut group-data-[shortcut]/questionnaire-choice:inline-flex hidden ms-auto pointer-events-none shrink-0" data-shortcut="C" aria-hidden="true">
                                            {"C"}
                                          </span>
                                        </QuestionnaireChoice>
                                      </QuestionnaireChoices>
                                      <QuestionnaireError hidden id="_r_u_">
                                        {"Choose an answer to continue."}
                                      </QuestionnaireError>
                                    </QuestionnaireItem>
                                    <QuestionnaireItem className="gap-2.5" required="" status="answered" hidden inert="" tabIndex={-1}>
                                      <QuestionnaireTitle className="font-medium text-sm">
                                        {"When is this needed?"}
                                      </QuestionnaireTitle>
                                      <QuestionnaireChoices shortcuts="letters">
                                        <QuestionnaireChoice shortcut="A" type="radio" checked="">
                                          <input className="absolute cn-questionnaire-choice-input cursor-pointer inset-0 opacity-0 size-full z-10" data-shortcut="A" data-type="radio" aria-keyshortcuts="A Enter" id="_r_v_" required type="radio" value="due_thu" name="deadline" data-checked="" checked />
                                          <span className="border cn-questionnaire-choice-indicator flex group-data-[type=radio]/questionnaire-choice:rounded-full items-center justify-center pointer-events-none relative shrink-0" aria-hidden="true">
                                            <span className="cn-questionnaire-choice-indicator-dot group-data-[type=checkbox]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block hidden rounded-full"></span>
                                            <svg className="cn-questionnaire-choice-indicator-check group-data-[type=radio]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block hidden lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                              <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                          </span>
                                          <span className="cn-questionnaire-choice-content cn-questionnaire-choice-label flex flex-1 flex-col leading-snug min-w-0">
                                            <span className="text-sm">
                                              {"Before Thursday's review"}
                                            </span>
                                            <QuestionnaireChoiceDescription className="text-xs">
                                              {"Aug 27"}
                                            </QuestionnaireChoiceDescription>
                                          </span>
                                          <span className="cn-questionnaire-choice-shortcut cn-questionnaire-shortcut group-data-[shortcut]/questionnaire-choice:inline-flex hidden ms-auto pointer-events-none shrink-0" data-shortcut="A" aria-hidden="true">
                                            {"A"}
                                          </span>
                                        </QuestionnaireChoice>
                                        <QuestionnaireChoice unchecked="" shortcut="B" type="radio">
                                          <input className="absolute cn-questionnaire-choice-input cursor-pointer inset-0 opacity-0 size-full z-10" data-unchecked="" data-shortcut="B" data-type="radio" aria-keyshortcuts="B" id="_r_10_" required type="radio" value="due_fri" name="deadline" />
                                          <span className="border cn-questionnaire-choice-indicator flex group-data-[type=radio]/questionnaire-choice:rounded-full items-center justify-center pointer-events-none relative shrink-0" aria-hidden="true">
                                            <span className="cn-questionnaire-choice-indicator-dot group-data-[type=checkbox]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block hidden rounded-full"></span>
                                            <svg className="cn-questionnaire-choice-indicator-check group-data-[type=radio]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block hidden lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                              <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                          </span>
                                          <span className="cn-questionnaire-choice-content cn-questionnaire-choice-label flex flex-1 flex-col leading-snug min-w-0">
                                            <span className="text-sm">
                                              {"End of the week"}
                                            </span>
                                            <QuestionnaireChoiceDescription className="text-xs">
                                              {"Aug 28"}
                                            </QuestionnaireChoiceDescription>
                                          </span>
                                          <span className="cn-questionnaire-choice-shortcut cn-questionnaire-shortcut group-data-[shortcut]/questionnaire-choice:inline-flex hidden ms-auto pointer-events-none shrink-0" data-shortcut="B" aria-hidden="true">
                                            {"B"}
                                          </span>
                                        </QuestionnaireChoice>
                                        <QuestionnaireChoice unchecked="" shortcut="C" type="radio">
                                          <input className="absolute cn-questionnaire-choice-input cursor-pointer inset-0 opacity-0 size-full z-10" data-unchecked="" data-shortcut="C" data-type="radio" aria-keyshortcuts="C" id="_r_11_" required type="radio" value="due_mon" name="deadline" />
                                          <span className="border cn-questionnaire-choice-indicator flex group-data-[type=radio]/questionnaire-choice:rounded-full items-center justify-center pointer-events-none relative shrink-0" aria-hidden="true">
                                            <span className="cn-questionnaire-choice-indicator-dot group-data-[type=checkbox]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block hidden rounded-full"></span>
                                            <svg className="cn-questionnaire-choice-indicator-check group-data-[type=radio]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block hidden lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                              <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                          </span>
                                          <span className="cn-questionnaire-choice-content cn-questionnaire-choice-label flex flex-1 flex-col leading-snug min-w-0">
                                            <span className="text-sm">
                                              {"Early next week"}
                                            </span>
                                            <QuestionnaireChoiceDescription className="text-xs">
                                              {"Aug 31"}
                                            </QuestionnaireChoiceDescription>
                                          </span>
                                          <span className="cn-questionnaire-choice-shortcut cn-questionnaire-shortcut group-data-[shortcut]/questionnaire-choice:inline-flex hidden ms-auto pointer-events-none shrink-0" data-shortcut="C" aria-hidden="true">
                                            {"C"}
                                          </span>
                                        </QuestionnaireChoice>
                                      </QuestionnaireChoices>
                                      <QuestionnaireError hidden id="_r_12_">
                                        {"Choose an answer to continue."}
                                      </QuestionnaireError>
                                    </QuestionnaireItem>
                                    <QuestionnaireActions>
                                      <QuestionnairePrevious className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" status="answered" hidden="" aria-hidden="true" hidden inert="" tabIndex={-1} type="button" size="sm" variant="outline">
                                        {"Previous"}
                                      </QuestionnairePrevious>
                                      <QuestionnaireNext className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-default disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" shortcut="Enter" status="answered" visible="" aria-keyshortcuts="Enter" type="button" size="sm" variant="default">
                                        {"Next"}
                                      </QuestionnaireNext>
                                      <QuestionnaireSubmit className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-default disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" status="answered" hidden="" aria-hidden="true" hidden inert="" tabIndex={-1} type="submit" size="sm" variant="default">
                                        {"Start Work"}
                                      </QuestionnaireSubmit>
                                    </QuestionnaireActions>
                                  </Questionnaire>
                                </div>
                              </div>
                              <MessageFooter className="gap-0.5">
                                <span className="duration-150 flex group-focus-within/turn:opacity-100 group-hover/turn:opacity-100 items-center motion-reduce:transition-none opacity-0 transition-opacity">
                                  <span className="pe-1 tabular-nums text-muted-foreground text-xs">
                                    {"09:41"}
                                  </span>
                                  <Button type="button" tabIndex={0} aria-label="Copy answer">
                                    <svg className="lucide lucide-copy size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                      <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                    </svg>
                                  </Button>
                                  <Button type="button" tabIndex={0} aria-label="Retry answer">
                                    <svg className="lucide lucide-refresh-cw size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
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
                      <div aria-hidden="true" data-message-scroller-spacer="" hidden></div>
                    </MessageScrollerContent>
                  </MessageScrollerViewport>
                  <div className="absolute bg-linear-to-b data-[active=true]:opacity-100 duration-200 ease-out from-sidebar h-6 inset-x-0 motion-reduce:transition-none opacity-0 pointer-events-none to-transparent top-0 transition-opacity" aria-hidden="true" data-active="true"></div>
                  <div className="absolute bg-linear-to-t bottom-0 data-[active=true]:opacity-100 duration-200 ease-out from-sidebar h-8 inset-x-0 motion-reduce:transition-none opacity-0 pointer-events-none to-transparent transition-opacity" aria-hidden="true" data-active="false"></div>
                  <MessageScrollerButton className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none rounded-full select-none shadow-sm shrink-0 whitespace-nowrap" type="button" tabIndex={-1} data-active="false" direction="end" inert="" variant="outline" size="icon-sm">
                    <svg className="lucide lucide-arrow-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine">
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
            <SidebarFooter className="border-t gap-2 pb-4 pt-3 px-4 relative shrink-0 z-10" sidebar="footer">
              <form className="w-full">
                <Field role="group" data-orientation="vertical">
                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="ai-chat-6-composer">
                    {"Message NeUI Chat"}
                  </FieldLabel>
                  <InputGroup role="group">
                    <textarea className="cn-input-group-textarea cn-textarea disabled:cursor-not-allowed disabled:opacity-50 field-sizing-content flex flex-1 max-h-32 min-h-10 outline-none placeholder:text-muted-foreground resize-none w-full" id="ai-chat-6-composer" placeholder="Ask about the signup drop"></textarea>
                    <InputGroupAddon className="gap-2 justify-between" role="group" data-align="block-end">
                      <div className="flex gap-1 items-center min-w-0">
                        <Tooltip>
                        <TooltipTrigger className="flex" id="base-ui-_r_d_" baseUiTooltipTrigger="">
                          <DropdownMenu>
                          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} size="icon-sm" aria-label="Attach a file" aria-haspopup="menu" id="base-ui-_r_e_" aria-expanded="false">
                            <svg className="lucide lucide-paperclip" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" aria-hidden="true">
                              <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                            </svg>
                          </DropdownMenuTrigger>
                          </DropdownMenu>
                        </TooltipTrigger>
                        </Tooltip>
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-sm disabled:opacity-50 disabled:pointer-events-none flex gap-1.5 group/button hover:text-foreground items-center justify-center min-w-0 outline-none px-1.5 select-none shadow-none shrink text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} size="sm" aria-label="Context, 3 of 4 sources" aria-haspopup="menu" id="base-ui-_r_j_" aria-expanded="false">
                          <svg className="lucide lucide-layers shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                            <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                            <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                            <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                          </svg>
                          <span className="tabular-nums text-xs truncate">
                            {"3"}
                          </span>
                          <svg className="lucide lucide-chevron-down opacity-60 shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                      </div>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-default cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="submit" tabIndex={0} size="icon-sm" aria-label="Send message" aria-disabled="true" id="base-ui-_r_14_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
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
          </SidebarProvider>
        </div>
        </SidebarProvider>
      </Sidebar>
      </SidebarProvider>
    </div>
    </SidebarProvider>
  )
}
