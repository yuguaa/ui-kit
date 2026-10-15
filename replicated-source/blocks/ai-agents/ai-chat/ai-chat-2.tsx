import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/registry-neui/bases/base/neui/code-block/code-block"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Bubble,
  BubbleGroup,
} from "@/registry/bases/base/ui/bubble"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { FieldLabel } from "@/registry/bases/base/ui/field"
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
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { BubbleContent } from "@/registry/bases/radix/ui/bubble"
import { Marker } from "@/registry/bases/radix/ui/marker"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col h-svh text-foreground w-full">
      <header className="border-b flex gap-2 h-14 items-center px-3 shrink-0 sm:px-4">
        <svg className="lucide lucide-file-text shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File01Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
          <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
          <path d="M10 9H8"></path>
          <path d="M16 13H8"></path>
          <path d="M16 17H8"></path>
        </svg>
        <span className="font-mono min-w-0 text-muted-foreground text-xs truncate">
          release-notes-3.4.md
        </span>
        <div className="flex gap-2 items-center ms-auto">
          <ul className="-space-x-2 hidden items-center sm:flex" aria-label="In this draft">
            <li>
              <span className="sr-only">
                Maya Chen
              </span>
              <Avatar className="ring-2 ring-background size-6" size="default" aria-hidden="true">
                <AvatarImage alt="" src="https://github.com/shadcn.png"></AvatarImage>
              </Avatar>
            </li>
            <li>
              <span className="sr-only">
                Jonas Weber
              </span>
              <Avatar className="ring-2 ring-background size-6" size="default" aria-hidden="true">
                <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
            </li>
            <li>
              <span className="sr-only">
                Priya Nair
              </span>
              <Avatar className="ring-2 ring-background size-6" size="default" aria-hidden="true">
                <AvatarImage alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
            </li>
          </ul>
          <Button type="button" tabIndex="0">
            <svg className="lucide lucide-link" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" data-icon="inline-start" aria-hidden="true">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            Share
          </Button>
          <Button type="button" tabIndex="0" aria-pressed="true">
            <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" data-icon="inline-start" aria-hidden="true">
              <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
              <path d="M20 2v4"></path>
              <path d="M22 4h-4"></path>
              <circle cx="4" cy="20" r="2"></circle>
            </svg>
            <span className="max-sm:sr-only">
              Assistant
            </span>
          </Button>
        </div>
      </header>
      <div className="flex flex-1 min-h-0">
        <main className="flex-1 min-w-0 overflow-y-auto">
          <article className="max-w-2xl mx-auto px-4 py-8 sm:px-6 sm:py-12 w-full">
            <header className="flex flex-col gap-3" aria-hidden="true">
              <Skeleton className="animate-none h-5 w-28"></Skeleton>
              <Skeleton className="animate-none h-7 max-w-full w-72"></Skeleton>
              <Skeleton className="animate-none h-3 max-w-full w-56"></Skeleton>
            </header>
            <div className="flex flex-col gap-8 mt-8">
              <div className="flex flex-col gap-2.5 px-3 py-2" aria-hidden="true">
                <Skeleton className="animate-none h-4 w-40"></Skeleton>
                <Skeleton className="animate-none h-3 w-full"></Skeleton>
                <Skeleton className="animate-none h-3 w-11/12"></Skeleton>
                <Skeleton className="animate-none h-3 w-2/3"></Skeleton>
              </div>
              <div className="flex flex-col gap-2.5 px-3 py-2" aria-hidden="true">
                <Skeleton className="animate-none h-4 w-40"></Skeleton>
                <Skeleton className="animate-none h-3 w-full"></Skeleton>
                <Skeleton className="animate-none h-3 w-10/12"></Skeleton>
                <Skeleton className="animate-none h-3 w-full"></Skeleton>
                <Skeleton className="animate-none h-3 w-1/2"></Skeleton>
              </div>
              <section className="-mx-3 bg-transparent duration-300 flex flex-col gap-2.5 motion-reduce:transition-none px-3 py-2 scroll-mt-6 transition-colors" aria-labelledby="webhooks-heading">
                <h2 className="font-semibold text-base tracking-tight" id="webhooks-heading">
                  Webhook reliability
                </h2>
                <p className="italic text-muted-foreground text-sm/6">
                  Draft this from the Aug 19 incident notes.
                </p>
              </section>
              <div className="flex flex-col gap-2.5 px-3 py-2" aria-hidden="true">
                <Skeleton className="animate-none h-4 w-40"></Skeleton>
                <Skeleton className="animate-none h-3 w-11/12"></Skeleton>
                <Skeleton className="animate-none h-3 w-full"></Skeleton>
                <Skeleton className="animate-none h-3 w-3/4"></Skeleton>
                <Skeleton className="animate-none h-3 w-5/12"></Skeleton>
              </div>
            </div>
          </article>
        </main>
        <div className="border-s duration-300 ease-in-out motion-reduce:transition-none overflow-hidden shrink-0 transition-[width] w-96" role="complementary" aria-label="Assistant" aria-hidden="false">
          <div className="h-full w-96">
            <div className="bg-background flex flex-col h-full min-h-0 w-full">
              <header className="border-b flex gap-2 h-14 items-center px-3 shrink-0">
                <IconTile variant="elevated" size="sm" aria-hidden="true">
                  <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                    <path d="M20 2v4"></path>
                    <path d="M22 4h-4"></path>
                    <circle cx="4" cy="20" r="2"></circle>
                  </svg>
                </IconTile>
                <h2 className="font-medium min-w-0 text-sm truncate">
                  Webhook section
                </h2>
                <div className="flex gap-0.5 items-center ms-auto">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="New chat" id="base-ui-_r_1_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Collapse panel" id="base-ui-_r_3_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-panel-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PanelRightIcon" tabler="IconLayoutSidebarRight" hugeicons="SidebarRight01Icon" phosphor="SidebarSimpleIcon" remixicon="RiLayoutRightLine" aria-hidden="true">
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M15 3v18"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </div>
              </header>
              <MessageScroller className="flex-1" scrollable="start">
                <MessageScrollerViewport className="scrollbar" role="region" aria-label="Messages" tabIndex="0" scrollable="start">
                  <MessageScrollerContent className="gap-5 min-w-0 px-3 py-4 w-full" role="log" aria-relevant="additions" aria-busy="false">
                    <MessageScrollerItem className="[content-visibility:visible]" scrollAnchor="false">
                      <Marker variant="separator">
                        <MarkerContent>
                          Today
                        </MarkerContent>
                      </Marker>
                    </MessageScrollerItem>
                    <MessageScrollerItem className="[content-visibility:visible] animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none" messageId="m_01" scrollAnchor="false">
                      <Message className="group/turn" data-align="end" role="group" aria-label="Maya Chen">
                        <MessageContent className="gap-1">
                          <BubbleGroup className="gap-2 items-end w-full">
                            <Bubble className="max-w-[85%]" variant="muted" data-align="end">
                              <BubbleContent className="space-y-2">
                                <p className="whitespace-pre-wrap">
                                  webhook section is still empty. draft it from the incident thread, customer facing, no error codes
                                </p>
                              </BubbleContent>
                            </Bubble>
                          </BubbleGroup>
                          <MessageFooter className="gap-0.5">
                            <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-events-none transition-opacity">
                              <span className="pe-1 tabular-nums text-muted-foreground text-xs">
                                10:38
                              </span>
                              <Button type="button" tabIndex="0" aria-label="Copy message">
                                <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                </svg>
                              </Button>
                            </span>
                          </MessageFooter>
                        </MessageContent>
                      </Message>
                    </MessageScrollerItem>
                    <MessageScrollerItem className="[content-visibility:visible] animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none" messageId="m_02" scrollAnchor="false">
                      <Message className="group/turn" data-align="start" role="group" aria-label="NeUI Chat">
                        <MessageContent className="gap-1">
                          <BubbleGroup className="gap-4">
                            <Bubble className="w-full" variant="ghost" data-align="start">
                              <BubbleContent className="space-y-3">
                                <p className="whitespace-pre-wrap">
                                  <code className="bg-muted font-mono px-1 py-0.5 rounded-sm text-[0.85em]">
                                    th_9f2k4m
                                  </code>
                                  has it.
                                  <code className="bg-muted font-mono px-1 py-0.5 rounded-sm text-[0.85em]">
                                    stripe-webhook.ts
                                  </code>
                                  started returning 500s on
                                  <code className="bg-muted font-mono px-1 py-0.5 rounded-sm text-[0.85em]">
                                    charge.refunded
                                  </code>
                                  after the 3.4.0-rc deploy, because a refund event can arrive without a
                                  <code className="bg-muted font-mono px-1 py-0.5 rounded-sm text-[0.85em]">
                                    payment_intent
                                  </code>
                                  . 41 confirmations queued from 08:46 to 09:12 on Aug 19. A null-guard patch falling back to the charge id plus a replay cleared 39; the last 2 were past Stripe's 3 day retry window and were resent from the Dashboard that morning. All 41 delivered, nothing lost.

Before I write it: name the outage window or keep it vague? And do you want the line about resending a stuck confirmation?
                                </p>
                              </BubbleContent>
                            </Bubble>
                          </BubbleGroup>
                          <MessageFooter className="gap-0.5">
                            <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-events-none transition-opacity">
                              <span className="pe-1 tabular-nums text-muted-foreground text-xs">
                                10:38
                              </span>
                              <Button type="button" tabIndex="0" aria-label="Copy reply">
                                <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex="0" aria-label="Like reply" aria-pressed="false">
                                <svg className="lucide lucide-thumbs-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsUpIcon" tabler="IconThumbUp" hugeicons="ThumbsUpIcon" phosphor="ThumbsUpIcon" remixicon="RiThumbUpLine" aria-hidden="true">
                                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                                  <path d="M7 10v12"></path>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex="0" aria-label="Dislike reply" aria-pressed="false">
                                <svg className="lucide lucide-thumbs-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsDownIcon" tabler="IconThumbDown" hugeicons="ThumbsDownIcon" phosphor="ThumbsDownIcon" remixicon="RiThumbDownLine" aria-hidden="true">
                                  <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path>
                                  <path d="M17 14V2"></path>
                                </svg>
                              </Button>
                            </span>
                          </MessageFooter>
                        </MessageContent>
                      </Message>
                    </MessageScrollerItem>
                    <MessageScrollerItem className="[content-visibility:visible] animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none" messageId="m_03" scrollAnchor="false">
                      <Message className="group/turn" data-align="end" role="group" aria-label="Maya Chen">
                        <MessageContent className="gap-1">
                          <BubbleGroup className="gap-2 items-end w-full">
                            <Bubble className="max-w-[85%]" variant="muted" data-align="end">
                              <BubbleContent className="space-y-2">
                                <p className="whitespace-pre-wrap">
                                  name the window, keep the resend line. no apology, we stayed inside the SLA
                                </p>
                              </BubbleContent>
                            </Bubble>
                          </BubbleGroup>
                          <MessageFooter className="gap-0.5">
                            <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-events-none transition-opacity">
                              <span className="pe-1 tabular-nums text-muted-foreground text-xs">
                                10:40
                              </span>
                              <Button type="button" tabIndex="0" aria-label="Copy message">
                                <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                </svg>
                              </Button>
                            </span>
                          </MessageFooter>
                        </MessageContent>
                      </Message>
                    </MessageScrollerItem>
                    <MessageScrollerItem className="[content-visibility:visible]" messageId="pending" scrollAnchor="false">
                      <Message className="group/turn" data-align="start" role="group" aria-label="NeUI Chat">
                        <MessageContent className="gap-1">
                          <BubbleGroup className="gap-4">
                            <Bubble className="w-full" variant="ghost" data-align="start">
                              <BubbleContent className="space-y-3">
                                <p className="whitespace-pre-wrap">
                                  Draft below. Window named, resend line kept, no apology.
                                </p>
                                <CodeBlock className="**:data-[slot=code-block-line]:[--tw-enter-translate-y:0]! [--code-block-bg:var(--card)] [--code-block-caret-color:var(--primary)] [--code-block-copy-inset:--spacing(2)] [--code-block-copy-top:var(--code-block-copy-inset)] [--code-block-diff-add-bg:color-mix(in_oklch,var(--success)_8%,transparent)] [--code-block-diff-remove-bg:color-mix(in_oklch,var(--destructive)_8%,transparent)] [--code-block-error-bg:color-mix(in_oklch,var(--destructive)_8%,transparent)] [--code-block-expand-clearance:--spacing(9)] [--code-block-fold-width:--spacing(4.5)] [--code-block-font-size:0.8125rem] [--code-block-gutter-gap:--spacing(2.5)] [--code-block-gutter-width:--spacing(9)] [--code-block-header-height:--spacing(9)] [--code-block-highlight-bar:color-mix(in_oklch,var(--primary)_60%,transparent)] [--code-block-highlight-bg:color-mix(in_oklch,var(--primary)_6%,transparent)] [--code-block-info-bg:color-mix(in_oklch,var(--info)_8%,transparent)] [--code-block-line-height:1.5rem] [--code-block-number-pad:var(--code-block-gutter-gap)] [--code-block-padding:--spacing(3)] [--code-block-warning-bg:color-mix(in_oklch,var(--warning)_10%,transparent)] bg-card bg-clip-padding border border-border dark:[--code-block-diff-add-bg:color-mix(in_oklch,var(--success)_12%,transparent)] dark:[--code-block-diff-remove-bg:color-mix(in_oklch,var(--destructive)_12%,transparent)] dark:[--code-block-error-bg:color-mix(in_oklch,var(--destructive)_12%,transparent)] dark:[--code-block-highlight-bg:color-mix(in_oklch,var(--primary)_12%,transparent)] dark:[--code-block-info-bg:color-mix(in_oklch,var(--info)_12%,transparent)] dark:[--code-block-warning-bg:color-mix(in_oklch,var(--warning)_14%,transparent)] data-[gutter-channel]:[--code-block-number-pad:calc(var(--code-block-gutter-gap)+var(--code-block-fold-width))] data-[has-diff]:[--code-block-gutter-gap:--spacing(4)] data-[has-header]:[--code-block-copy-top:calc(var(--code-block-header-height)+1px+var(--code-block-copy-inset))] flex flex-col group/code-block min-w-0 relative rounded-(--code-block-radius) style-luma:[--code-block-radius:var(--radius-2xl)] style-lyra:[--code-block-radius:0px] style-maia:[--code-block-radius:var(--radius-2xl)] style-mira:[--code-block-radius:var(--radius-lg)] style-nova:[--code-block-radius:var(--radius-lg)] style-rhea:[--code-block-radius:var(--radius-xl)] style-sera:[--code-block-radius:0px] style-vega:[--code-block-radius:var(--radius-lg)] text-card-foreground text-left w-full" variant="default" hasHeader="true">
                                  <CodeBlockHeader>
                                    <CodeBlockTitle>
                                      release-notes-3.4.md
                                    </CodeBlockTitle>
                                    <div className="flex gap-0.5 items-center ms-auto">
                                      <Tooltip>
                                      <TooltipTrigger className="inline-flex" id="base-ui-_r_h_" baseUiTooltipTrigger="">
                                        <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-3.5 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" data-position="inline" aria-label="Download file">
                                          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
                                          </svg>
                                        </button>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="inline-flex" id="base-ui-_r_j_" baseUiTooltipTrigger="">
                                        <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-3.5 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" data-position="inline" aria-label="Copy code">
                                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                          </svg>
                                        </button>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                  </CodeBlockHeader>
                                  <ScrollArea className="**:data-[slot=scroll-area-viewport]:max-h-72 rounded-(--code-block-radius)" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYStart="">
                                    <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_k_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "336px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-y="" data-overflow-y-start="">
                                      <CodeBlockContent className="min-w-0 relative rounded-[inherit]">
                                        <span className="sr-only" role="status" aria-live="polite">
                                          Code generation complete, 25 lines.
                                        </span>
                                        <div className="focus-visible:ring-[3px] focus-visible:ring-ring/50 min-w-0 outline-none relative rounded-[inherit]" id="_r_f_" role="region" aria-label="markdown code" tabIndex="0">
                                          <pre className="[&_[data-slot=code-block-token]]:text-[color:var(--cb-c,currentColor)] dark:[&_[data-slot=code-block-token]]:text-[color:var(--cb-cd,currentColor)] font-mono min-w-full py-(--code-block-padding) text-(length:--code-block-font-size) w-max" dir="ltr" style={{"--code-block-gutter-width": "calc(2ch + var(--code-block-gutter-gap) + var(--code-block-padding))", counterReset: "cb-line 0"}}>
                                            <code>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="1" id="_r_f_-L1" style={{counterReset: "cb-line 0"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#005CC5", "--cb-cd": "#79B8FF"}}>
                                                    ## Webhook reliability
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="2" id="_r_f_-L2" style={{counterReset: "cb-line 1"}}>
                                                <span>
                                                  <br />
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="3" id="_r_f_-L3" style={{counterReset: "cb-line 2"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    Refund confirmations now reach your
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="4" id="_r_f_-L4" style={{counterReset: "cb-line 3"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    endpoint within a minute of the refund
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="5" id="_r_f_-L5" style={{counterReset: "cb-line 4"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    itself. Between 08:46 and 09:12 on Aug
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="6" id="_r_f_-L6" style={{counterReset: "cb-line 5"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    19, confirmations for 41 refunds were
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="7" id="_r_f_-L7" style={{counterReset: "cb-line 6"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    held while refund events without a
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="8" id="_r_f_-L8" style={{counterReset: "cb-line 7"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    payment reference were being rejected.
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="9" id="_r_f_-L9" style={{counterReset: "cb-line 8"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    A fix shipped the same morning, the
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="10" id="_r_f_-L10" style={{counterReset: "cb-line 9"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    held confirmations were replayed, and
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="11" id="_r_f_-L11" style={{counterReset: "cb-line 10"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    every confirmation was delivered.
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="12" id="_r_f_-L12" style={{counterReset: "cb-line 11"}}>
                                                <span>
                                                  <br />
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="13" id="_r_f_-L13" style={{counterReset: "cb-line 12"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#E36209", "--cb-cd": "#FFAB70"}}>
                                                    -
                                                  </span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    Delivery is measured at your
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="14" id="_r_f_-L14" style={{counterReset: "cb-line 13"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    endpoint, not at our queue, so a
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="15" id="_r_f_-L15" style={{counterReset: "cb-line 14"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    slow endpoint still counts against
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="16" id="_r_f_-L16" style={{counterReset: "cb-line 15"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    the minute.
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="17" id="_r_f_-L17" style={{counterReset: "cb-line 16"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#E36209", "--cb-cd": "#FFAB70"}}>
                                                    -
                                                  </span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    A confirmation that fails retries
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="18" id="_r_f_-L18" style={{counterReset: "cb-line 17"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    for 24 hours with backoff before it
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="19" id="_r_f_-L19" style={{counterReset: "cb-line 18"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    is dropped.
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="20" id="_r_f_-L20" style={{counterReset: "cb-line 19"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#E36209", "--cb-cd": "#FFAB70"}}>
                                                    -
                                                  </span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    One still missing five minutes after
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="21" id="_r_f_-L21" style={{counterReset: "cb-line 20"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    a refund can be resent from Billing,
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="22" id="_r_f_-L22" style={{counterReset: "cb-line 21"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    then Refunds, then Resend
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="23" id="_r_f_-L23" style={{counterReset: "cb-line 22"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    confirmation. Resending never
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="24" id="_r_f_-L24" style={{counterReset: "cb-line 23"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    charges the customer twice.
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="25" id="_r_f_-L25" style={{counterReset: "cb-line 24"}}>
                                                <span>
                                                  <br />
                                                </span>
                                              </span>
                                            </code>
                                          </pre>
                                        </div>
                                      </CodeBlockContent>
                                    </div>
                                    <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-start="" data-id="base-ui-_r_k_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "132px"}}>
                                      <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 154px, 0px)"}}></div>
                                    </div>
                                  </ScrollArea>
                                </CodeBlock>
                                <p className="whitespace-pre-wrap">
                                  Tense matches Highlights, so you can drop it in without a second pass.
                                </p>
                                <div className="flex flex-wrap gap-x-2 gap-y-1 items-center">
                                  <Button type="button" tabIndex="0">
                                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="M12 5v14"></path>
                                    </svg>
                                    Insert
                                  </Button>
                                  <span className="text-muted-foreground text-xs">
                                    Fills Webhook reliability
                                  </span>
                                </div>
                              </BubbleContent>
                            </Bubble>
                          </BubbleGroup>
                          <MessageFooter className="gap-0.5">
                            <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-events-none transition-opacity">
                              <span className="pe-1 tabular-nums text-muted-foreground text-xs">
                                10:41
                              </span>
                              <Button type="button" tabIndex="0" aria-label="Copy reply">
                                <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex="0" aria-label="Like reply" aria-pressed="false">
                                <svg className="lucide lucide-thumbs-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsUpIcon" tabler="IconThumbUp" hugeicons="ThumbsUpIcon" phosphor="ThumbsUpIcon" remixicon="RiThumbUpLine" aria-hidden="true">
                                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                                  <path d="M7 10v12"></path>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex="0" aria-label="Dislike reply" aria-pressed="false">
                                <svg className="lucide lucide-thumbs-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsDownIcon" tabler="IconThumbDown" hugeicons="ThumbsDownIcon" phosphor="ThumbsDownIcon" remixicon="RiThumbDownLine" aria-hidden="true">
                                  <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path>
                                  <path d="M17 14V2"></path>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex="0" aria-label="Retry reply">
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
                    </MessageScrollerItem>
                    <MessageScrollerItem className="[content-visibility:visible]" scrollAnchor="false">
                      <div className="flex flex-col gap-2 items-end" role="group" aria-label="Suggested replies">
                        <Bubble variant="outline" data-align="end">
                          <BubbleContent className="gap-2 hover:text-foreground text-muted-foreground" type="button">
                            Shorten to two lines
                            <svg className="lucide lucide-corner-down-right opacity-50 shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CornerDownRightIcon" tabler="IconCornerDownRight" hugeicons="CornerDownRightIcon" phosphor="ArrowBendDownRightIcon" remixicon="RiCornerDownRightLine" aria-hidden="true">
                              <path d="m15 10 5 5-5 5"></path>
                              <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
                            </svg>
                          </BubbleContent>
                        </Bubble>
                        <Bubble variant="outline" data-align="end">
                          <BubbleContent className="gap-2 hover:text-foreground text-muted-foreground" type="button">
                            Add the retry window
                            <svg className="lucide lucide-corner-down-right opacity-50 shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CornerDownRightIcon" tabler="IconCornerDownRight" hugeicons="CornerDownRightIcon" phosphor="ArrowBendDownRightIcon" remixicon="RiCornerDownRightLine" aria-hidden="true">
                              <path d="m15 10 5 5-5 5"></path>
                              <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
                            </svg>
                          </BubbleContent>
                        </Bubble>
                      </div>
                    </MessageScrollerItem>
                    <div aria-hidden="true" data-message-scroller-spacer="" hidden></div>
                  </MessageScrollerContent>
                </MessageScrollerViewport>
                <div className="absolute bg-linear-to-b data-[active=true]:opacity-100 duration-200 ease-out from-background h-6 inset-x-0 motion-reduce:transition-none opacity-0 pointer-events-none to-transparent top-0 transition-opacity" aria-hidden="true" data-active="true"></div>
                <div className="absolute bg-linear-to-t bottom-0 data-[active=true]:opacity-100 duration-200 ease-out from-background h-8 inset-x-0 motion-reduce:transition-none opacity-0 pointer-events-none to-transparent transition-opacity" aria-hidden="true" data-active="false"></div>
                <p className="sr-only" role="status" aria-live="polite"></p>
                <MessageScrollerButton className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bottom-3 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none rounded-full select-none shadow-sm shrink-0 whitespace-nowrap" type="button" tabIndex="-1" data-active="false" direction="end" inert="" variant="outline" size="icon-sm">
                  <svg className="lucide lucide-arrow-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine">
                    <path d="M12 5v14"></path>
                    <path d="m19 12-7 7-7-7"></path>
                  </svg>
                  <span className="sr-only">
                    Scroll to end
                  </span>
                </MessageScrollerButton>
              </MessageScroller>
              <div className="flex flex-col gap-2 pb-3 pt-1 px-3 shrink-0">
                <form>
                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="ai-chat-2-composer">
                    Message NeUI Chat
                  </FieldLabel>
                  <InputGroup role="group">
                    <textarea className="cn-input-group-textarea cn-textarea disabled:cursor-not-allowed disabled:opacity-50 field-sizing-content flex flex-1 max-h-32 min-h-10 outline-none placeholder:text-muted-foreground resize-none w-full" id="ai-chat-2-composer" placeholder="Ask about this draft..."></textarea>
                    <InputGroupAddon className="gap-1" role="group" data-align="block-end">
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" size="icon-sm" aria-label="Add context" aria-haspopup="menu" id="base-ui-_r_7_" aria-expanded="false">
                        <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-sm disabled:opacity-50 disabled:pointer-events-none flex font-normal group/button items-center justify-center min-w-0 outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" size="sm" aria-label="Model, Claude Sonnet 5" aria-haspopup="menu" id="base-ui-_r_c_" aria-expanded="false">
                        <span className="truncate">
                          Claude Sonnet 5
                        </span>
                        <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                      <div className="flex gap-1 items-center ms-auto">
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-default cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="submit" tabIndex="0" size="icon-sm" aria-label="Send message" id="base-ui-_r_m_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                            <path d="m5 12 7-7 7 7"></path>
                            <path d="M12 19V5"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </div>
                    </InputGroupAddon>
                  </InputGroup>
                </form>
                <p className="text-[11px] text-center text-muted-foreground">
                  NeUI Chat can make mistakes. Check important info.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
