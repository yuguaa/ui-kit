import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/registry-neui/bases/base/neui/code-block/code-block"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Alert,
  AlertAction,
  AlertDescription,
} from "@/registry/bases/base/ui/alert"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Bubble,
  BubbleGroup,
} from "@/registry/bases/base/ui/bubble"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Collapsible,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
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
  MessageAvatar,
  MessageContent,
  MessageFooter,
} from "@/registry/bases/base/ui/message"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BubbleContent } from "@/registry/bases/radix/ui/bubble"
import { Marker } from "@/registry/bases/radix/ui/marker"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col h-svh min-h-0 text-foreground w-full">
      <header className="after:absolute after:bg-gradient-to-b after:from-background after:h-6 after:inset-x-0 after:pointer-events-none after:to-transparent after:top-full backdrop-blur-md bg-background/70 flex gap-2 h-14 items-center px-3 shrink-0 sm:px-4 sticky supports-backdrop-filter:bg-background/60 top-0 z-10">
        <div className="flex flex-1 gap-2 items-center min-w-0">
          <Popover>
          <PopoverTrigger className="-ms-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none font-medium gap-1.5 group/button inline-flex items-center justify-center min-w-0 outline-none px-2 select-none shrink transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false">
            <span className="min-w-0 truncate">
              {"Stripe webhook 500s on charge.refunded"}
            </span>
            <svg className="lucide lucide-chevron-down opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </PopoverTrigger>
          </Popover>
        </div>
        <Tooltip>
        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="New chat" id="base-ui-_r_3_" baseUiTooltipTrigger="">
          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
        </TooltipTrigger>
        </Tooltip>
        <Tooltip>
        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-secondary disabled:opacity-50 disabled:pointer-events-none group/button hidden items-center justify-center outline-none select-none shrink-0 sm:inline-flex transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Chat memory" aria-pressed="true" id="base-ui-_r_5_" baseUiTooltipTrigger="">
          <svg className="lucide lucide-bookmark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BookmarkIcon" tabler="IconBookmark" hugeicons="Bookmark02Icon" phosphor="BookmarkSimpleIcon" remixicon="RiBookmarkLine" aria-hidden="true">
            <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"></path>
          </svg>
        </TooltipTrigger>
        </Tooltip>
        <DropdownMenu>
        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none gap-1.5 group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_9_" aria-expanded="false">
          <span className="max-w-28 sm:max-w-none truncate">
            {"Claude Sonnet 5"}
          </span>
          <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </DropdownMenuTrigger>
        </DropdownMenu>
        <DropdownMenu>
        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Chat options" aria-haspopup="menu" id="base-ui-_r_e_" aria-expanded="false">
          <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </DropdownMenuTrigger>
        </DropdownMenu>
      </header>
      <main className="flex flex-1 flex-col min-h-0">
        <MessageScroller className="flex-1" scrollable="start">
          <MessageScrollerViewport className="scrollbar" role="region" aria-label="Messages" tabIndex="0" scrollable="start">
            <MessageScrollerContent className="gap-6 max-w-3xl min-w-0 mx-auto px-4 py-6 sm:px-6 w-full" role="log" aria-relevant="additions" aria-busy="false">
              <MessageScrollerItem className="[content-visibility:visible]" scrollAnchor="false">
                <div className="flex gap-2 items-center md:hidden">
                  <h1 className="flex-1 font-semibold min-w-0 text-base tracking-tight truncate">
                    {"Stripe webhook 500s on charge.refunded"}
                  </h1>
                </div>
              </MessageScrollerItem>
              <MessageScrollerItem className="[content-visibility:visible]" scrollAnchor="false">
                <Marker variant="separator">
                  <MarkerContent>
                    {"Yesterday"}
                  </MarkerContent>
                </Marker>
              </MessageScrollerItem>
              <MessageScrollerItem className="[content-visibility:visible]" scrollAnchor="false">
                <Marker variant="separator">
                  <MarkerContent>
                    {"Earlier turns compacted to save context"}
                  </MarkerContent>
                </Marker>
              </MessageScrollerItem>
              <MessageScrollerItem className="[content-visibility:visible] animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none" messageId="m_01" scrollAnchor="false">
                <Message className="group/turn" data-align="end" role="group" aria-label="Jonas Weber">
                  <MessageAvatar>
                    <Avatar size="default">
                      <AvatarImage alt="" src="https://github.com/shadcn.png"></AvatarImage>
                    </Avatar>
                  </MessageAvatar>
                  <MessageContent className="gap-1">
                    <BubbleGroup className="gap-3 items-end w-full">
                      <Bubble variant="muted" data-align="end">
                        <BubbleContent className="space-y-2">
                          <p className="whitespace-pre-wrap">
                            {"stripe-webhook.ts is returning 500 on charge.refunded since the 3.4 deploy. 41 events queued. any idea?"}
                          </p>
                        </BubbleContent>
                      </Bubble>
                    </BubbleGroup>
                    <MessageFooter className="gap-0.5 pe-0">
                      <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-events-none transition-opacity">
                        <span className="pe-1 tabular-nums text-muted-foreground text-xs">
                          {"9:12"}
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
                  <MessageAvatar className="self-start translate-y-0!">
                    <Avatar size="default">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs">
                        <svg className="lucide lucide-sparkles size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                          <path d="M20 2v4"></path>
                          <path d="M22 4h-4"></path>
                          <circle cx="4" cy="20" r="2"></circle>
                        </svg>
                      </AvatarFallback>
                    </Avatar>
                  </MessageAvatar>
                  <MessageContent className="gap-1">
                    <BubbleGroup className="gap-5">
                      <Bubble className="w-full" variant="ghost" data-align="start">
                        <BubbleContent className="space-y-3">
                          <p className="whitespace-pre-wrap">
                            {"I read the handler and the last 20 failures in the events table. Every failing payload is a refund on a charge that was created outside a PaymentIntent, so"}
                            <code className="bg-muted font-mono px-1 py-0.5 rounded-sm text-[0.85em]">
                              {"payment_intent"}
                            </code>
                            {"is null. The 3.4 refactor stopped guarding it:"}
                          </p>
                          <CodeBlock className="[--code-block-bg:var(--card)] [--code-block-caret-color:var(--primary)] [--code-block-copy-inset:--spacing(2)] [--code-block-copy-top:var(--code-block-copy-inset)] [--code-block-diff-add-bg:color-mix(in_oklch,var(--success)_8%,transparent)] [--code-block-diff-remove-bg:color-mix(in_oklch,var(--destructive)_8%,transparent)] [--code-block-error-bg:color-mix(in_oklch,var(--destructive)_8%,transparent)] [--code-block-expand-clearance:--spacing(9)] [--code-block-fold-width:--spacing(4.5)] [--code-block-font-size:0.8125rem] [--code-block-gutter-gap:--spacing(2.5)] [--code-block-gutter-width:--spacing(9)] [--code-block-header-height:--spacing(9)] [--code-block-highlight-bar:color-mix(in_oklch,var(--primary)_60%,transparent)] [--code-block-highlight-bg:color-mix(in_oklch,var(--primary)_6%,transparent)] [--code-block-info-bg:color-mix(in_oklch,var(--info)_8%,transparent)] [--code-block-line-height:1.5rem] [--code-block-number-pad:var(--code-block-gutter-gap)] [--code-block-padding:--spacing(3)] [--code-block-warning-bg:color-mix(in_oklch,var(--warning)_10%,transparent)] bg-card bg-clip-padding border border-border dark:[--code-block-diff-add-bg:color-mix(in_oklch,var(--success)_12%,transparent)] dark:[--code-block-diff-remove-bg:color-mix(in_oklch,var(--destructive)_12%,transparent)] dark:[--code-block-error-bg:color-mix(in_oklch,var(--destructive)_12%,transparent)] dark:[--code-block-highlight-bg:color-mix(in_oklch,var(--primary)_12%,transparent)] dark:[--code-block-info-bg:color-mix(in_oklch,var(--info)_12%,transparent)] dark:[--code-block-warning-bg:color-mix(in_oklch,var(--warning)_14%,transparent)] data-[gutter-channel]:[--code-block-number-pad:calc(var(--code-block-gutter-gap)+var(--code-block-fold-width))] data-[has-diff]:[--code-block-gutter-gap:--spacing(4)] data-[has-header]:[--code-block-copy-top:calc(var(--code-block-header-height)+1px+var(--code-block-copy-inset))] flex flex-col group/code-block min-w-0 relative rounded-(--code-block-radius) style-luma:[--code-block-radius:var(--radius-2xl)] style-lyra:[--code-block-radius:0px] style-maia:[--code-block-radius:var(--radius-2xl)] style-mira:[--code-block-radius:var(--radius-lg)] style-nova:[--code-block-radius:var(--radius-lg)] style-rhea:[--code-block-radius:var(--radius-xl)] style-sera:[--code-block-radius:0px] style-vega:[--code-block-radius:var(--radius-lg)] text-card-foreground text-left w-full" variant="default" foldable="true" gutterChannel="true" hasHeader="true">
                            <CodeBlockHeader>
                              <CodeBlockTitle>
                                {"stripe-webhook.ts"}
                              </CodeBlockTitle>
                              <div className="flex gap-1 items-center ms-auto">
                                <Tooltip>
                                <TooltipTrigger className="inline-flex" id="base-ui-_r_i_" baseUiTooltipTrigger="">
                                  <CodeBlock>
                                  <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-3.5 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" data-position="inline" aria-label="Download file">
                                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
                                    </svg>
                                  </button>
                                  </CodeBlock>
                                </TooltipTrigger>
                                </Tooltip>
                                <Tooltip>
                                <TooltipTrigger className="inline-flex" id="base-ui-_r_k_" baseUiTooltipTrigger="">
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
                            <ScrollArea className="**:data-[slot=scroll-area-viewport]:max-h-[calc(16*var(--code-block-line-height)+var(--code-block-padding))] [&>[data-slot=scroll-area-viewport]>div]:block! rounded-(--code-block-radius)" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                              <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_l_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                                <CodeBlockContent className="min-w-0 relative rounded-[inherit]">
                                  <span className="sr-only" role="status" aria-live="polite"></span>
                                  <div className="focus-visible:ring-[3px] focus-visible:ring-ring/50 min-w-0 outline-none relative rounded-[inherit]" id="_r_g_" role="region" aria-label="typescript code" tabIndex="0">
                                    <pre className="[&_[data-slot=code-block-token]]:text-[color:var(--cb-c,currentColor)] dark:[&_[data-slot=code-block-token]]:text-[color:var(--cb-cd,currentColor)] font-mono min-w-full pl-(--code-block-gutter-width) py-(--code-block-padding) text-(length:--code-block-font-size) w-max" dir="ltr" data-code-line-numbers="true" style={{"--code-block-gutter-width": "calc(2ch + var(--code-block-fold-width) + var(--code-block-gutter-gap) + var(--code-block-padding))", counterReset: "cb-line 0"}}>
                                      <code>
                                        <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="1" id="_r_g_-L1" style={{counterReset: "cb-line 0"}}>
                                          <span>
                                            <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                              {"const"}
                                            </span>
                                            <span style={{"--cb-c": "#005CC5", "--cb-cd": "#79B8FF"}}>
                                              {"intent"}
                                            </span>
                                            <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                              {"="}
                                            </span>
                                            <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                              {"event.data.object.payment_intent"}
                                            </span>
                                          </span>
                                        </span>
                                        <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="2" id="_r_g_-L2" style={{counterReset: "cb-line 1"}}>
                                          <span>
                                            <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                              {"const"}
                                            </span>
                                            <span style={{"--cb-c": "#005CC5", "--cb-cd": "#79B8FF"}}>
                                              {"order"}
                                            </span>
                                            <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                              {"="}
                                            </span>
                                            <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                              {"await"}
                                            </span>
                                            <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                              {"orders."}
                                            </span>
                                            <span style={{"--cb-c": "#6F42C1", "--cb-cd": "#B392F0"}}>
                                              {"byIntent"}
                                            </span>
                                            <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                              {"(intent)"}
                                            </span>
                                          </span>
                                        </span>
                                      </code>
                                    </pre>
                                  </div>
                                </CodeBlockContent>
                              </div>
                            </ScrollArea>
                          </CodeBlock>
                          <p className="whitespace-pre-wrap">
                            {"Line 2 calls"}
                            <code className="bg-muted font-mono px-1 py-0.5 rounded-sm text-[0.85em]">
                              {"orders.byIntent(null)"}
                            </code>
                            {", which throws before the handler ever reaches its retry wrapper. The 21 refunds that succeeded in the same window were all on PaymentIntent charges."}
                          </p>
                        </BubbleContent>
                      </Bubble>
                    </BubbleGroup>
                    <MessageFooter className="gap-0.5">
                      <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-events-none transition-opacity">
                        <span className="pe-1 tabular-nums text-muted-foreground text-xs">
                          {"9:12"}
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
                <Message className="group/turn" data-align="end" role="group" aria-label="Jonas Weber">
                  <MessageAvatar>
                    <Avatar size="default">
                      <AvatarImage alt="" src="https://github.com/shadcn.png"></AvatarImage>
                    </Avatar>
                  </MessageAvatar>
                  <MessageContent className="gap-1">
                    <BubbleGroup className="gap-3 items-end w-full">
                      <Bubble variant="muted" data-align="end">
                        <BubbleContent className="space-y-2">
                          <p className="whitespace-pre-wrap">
                            {"makes sense. what's the smallest fix"}
                          </p>
                        </BubbleContent>
                      </Bubble>
                    </BubbleGroup>
                    <MessageFooter className="gap-0.5 pe-0">
                      <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-events-none transition-opacity">
                        <span className="pe-1 tabular-nums text-muted-foreground text-xs">
                          {"9:14"}
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
              <MessageScrollerItem className="[content-visibility:visible] animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none" messageId="m_04" scrollAnchor="false">
                <Message className="group/turn" data-align="start" role="group" aria-label="NeUI Chat">
                  <MessageAvatar className="self-start translate-y-0!">
                    <Avatar size="default">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs">
                        <svg className="lucide lucide-sparkles size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                          <path d="M20 2v4"></path>
                          <path d="M22 4h-4"></path>
                          <circle cx="4" cy="20" r="2"></circle>
                        </svg>
                      </AvatarFallback>
                    </Avatar>
                  </MessageAvatar>
                  <MessageContent className="gap-1">
                    <BubbleGroup className="gap-5">
                      <Bubble className="w-full" variant="ghost" data-align="start">
                        <BubbleContent className="space-y-3">
                          <p className="whitespace-pre-wrap">
                            {"Guard the lookup and fall back to the charge id, which is always present on a refund event:"}
                          </p>
                          <CodeBlock className="[--code-block-bg:var(--card)] [--code-block-caret-color:var(--primary)] [--code-block-copy-inset:--spacing(2)] [--code-block-copy-top:var(--code-block-copy-inset)] [--code-block-diff-add-bg:color-mix(in_oklch,var(--success)_8%,transparent)] [--code-block-diff-remove-bg:color-mix(in_oklch,var(--destructive)_8%,transparent)] [--code-block-error-bg:color-mix(in_oklch,var(--destructive)_8%,transparent)] [--code-block-expand-clearance:--spacing(9)] [--code-block-fold-width:--spacing(4.5)] [--code-block-font-size:0.8125rem] [--code-block-gutter-gap:--spacing(2.5)] [--code-block-gutter-width:--spacing(9)] [--code-block-header-height:--spacing(9)] [--code-block-highlight-bar:color-mix(in_oklch,var(--primary)_60%,transparent)] [--code-block-highlight-bg:color-mix(in_oklch,var(--primary)_6%,transparent)] [--code-block-info-bg:color-mix(in_oklch,var(--info)_8%,transparent)] [--code-block-line-height:1.5rem] [--code-block-number-pad:var(--code-block-gutter-gap)] [--code-block-padding:--spacing(3)] [--code-block-warning-bg:color-mix(in_oklch,var(--warning)_10%,transparent)] bg-card bg-clip-padding border border-border dark:[--code-block-diff-add-bg:color-mix(in_oklch,var(--success)_12%,transparent)] dark:[--code-block-diff-remove-bg:color-mix(in_oklch,var(--destructive)_12%,transparent)] dark:[--code-block-error-bg:color-mix(in_oklch,var(--destructive)_12%,transparent)] dark:[--code-block-highlight-bg:color-mix(in_oklch,var(--primary)_12%,transparent)] dark:[--code-block-info-bg:color-mix(in_oklch,var(--info)_12%,transparent)] dark:[--code-block-warning-bg:color-mix(in_oklch,var(--warning)_14%,transparent)] data-[gutter-channel]:[--code-block-number-pad:calc(var(--code-block-gutter-gap)+var(--code-block-fold-width))] data-[has-diff]:[--code-block-gutter-gap:--spacing(4)] data-[has-header]:[--code-block-copy-top:calc(var(--code-block-header-height)+1px+var(--code-block-copy-inset))] flex flex-col group/code-block min-w-0 relative rounded-(--code-block-radius) style-luma:[--code-block-radius:var(--radius-2xl)] style-lyra:[--code-block-radius:0px] style-maia:[--code-block-radius:var(--radius-2xl)] style-mira:[--code-block-radius:var(--radius-lg)] style-nova:[--code-block-radius:var(--radius-lg)] style-rhea:[--code-block-radius:var(--radius-xl)] style-sera:[--code-block-radius:0px] style-vega:[--code-block-radius:var(--radius-lg)] text-card-foreground text-left w-full" variant="default" foldable="true" gutterChannel="true" hasHeader="true">
                            <CodeBlockHeader>
                              <CodeBlockTitle>
                                {"stripe-webhook.ts"}
                              </CodeBlockTitle>
                              <div className="flex gap-1 items-center ms-auto">
                                <Tooltip>
                                <TooltipTrigger className="inline-flex" id="base-ui-_r_o_" baseUiTooltipTrigger="">
                                  <CodeBlock>
                                  <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-3.5 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" data-position="inline" aria-label="Download file">
                                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
                                    </svg>
                                  </button>
                                  </CodeBlock>
                                </TooltipTrigger>
                                </Tooltip>
                                <Tooltip>
                                <TooltipTrigger className="inline-flex" id="base-ui-_r_q_" baseUiTooltipTrigger="">
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
                            <ScrollArea className="**:data-[slot=scroll-area-viewport]:max-h-[calc(16*var(--code-block-line-height)+var(--code-block-padding))] [&>[data-slot=scroll-area-viewport]>div]:block! rounded-(--code-block-radius)" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                              <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_r_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                                <CodeBlockContent className="min-w-0 relative rounded-[inherit]">
                                  <span className="sr-only" role="status" aria-live="polite"></span>
                                  <div className="focus-visible:ring-[3px] focus-visible:ring-ring/50 min-w-0 outline-none relative rounded-[inherit]" id="_r_m_" role="region" aria-label="typescript code" tabIndex="0">
                                    <pre className="[&_[data-slot=code-block-token]]:text-[color:var(--cb-c,currentColor)] dark:[&_[data-slot=code-block-token]]:text-[color:var(--cb-cd,currentColor)] font-mono min-w-full pl-(--code-block-gutter-width) py-(--code-block-padding) text-(length:--code-block-font-size) w-max" dir="ltr" data-code-line-numbers="true" style={{"--code-block-gutter-width": "calc(2ch + var(--code-block-fold-width) + var(--code-block-gutter-gap) + var(--code-block-padding))", counterReset: "cb-line 0"}}>
                                      <code>
                                        <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="1" id="_r_m_-L1" style={{counterReset: "cb-line 0"}}>
                                          <span>
                                            <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                              {"const"}
                                            </span>
                                            <span style={{"--cb-c": "#005CC5", "--cb-cd": "#79B8FF"}}>
                                              {"intent"}
                                            </span>
                                            <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                              {"="}
                                            </span>
                                            <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                              {"event.data.object.payment_intent"}
                                            </span>
                                          </span>
                                        </span>
                                        <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="2" id="_r_m_-L2" style={{counterReset: "cb-line 1"}}>
                                          <button className="-ml-[calc(var(--code-block-fold-width)+0.25rem)] align-top cursor-pointer focus-visible:ring-2 focus-visible:ring-ring/50 hover:bg-muted hover:text-foreground inline-flex items-center justify-center left-[calc(var(--code-block-gutter-width)-var(--code-block-fold-width)-0.25rem)] mr-[0.25rem] outline-none rounded-[4px] shrink-0 size-(--code-block-fold-width) sticky text-muted-foreground translate-y-[calc((var(--code-block-line-height)-var(--code-block-fold-width))/2)] z-20" type="button" data-state="unfolded" aria-expanded="true" aria-label="Fold lines 2 to 4">
                                            <svg className="size-3" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                              <path d="m6 9 6 6 6-6"></path>
                                            </svg>
                                          </button>
                                          <span>
                                            <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                              {"const"}
                                            </span>
                                            <span style={{"--cb-c": "#005CC5", "--cb-cd": "#79B8FF"}}>
                                              {"order"}
                                            </span>
                                            <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                              {"="}
                                            </span>
                                            <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                              {"intent"}
                                            </span>
                                          </span>
                                        </span>
                                        <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="3" id="_r_m_-L3" style={{counterReset: "cb-line 2"}}>
                                          <span>
                                            <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                              {"?"}
                                            </span>
                                            <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                              {"await"}
                                            </span>
                                            <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                              {"orders."}
                                            </span>
                                            <span style={{"--cb-c": "#6F42C1", "--cb-cd": "#B392F0"}}>
                                              {"byIntent"}
                                            </span>
                                            <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                              {"(intent)"}
                                            </span>
                                          </span>
                                        </span>
                                        <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="4" id="_r_m_-L4" style={{counterReset: "cb-line 3"}}>
                                          <span>
                                            <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                              {":"}
                                            </span>
                                            <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                              {"await"}
                                            </span>
                                            <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                              {"orders."}
                                            </span>
                                            <span style={{"--cb-c": "#6F42C1", "--cb-cd": "#B392F0"}}>
                                              {"byCharge"}
                                            </span>
                                            <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                              {"(event.data.object.id)"}
                                            </span>
                                          </span>
                                        </span>
                                      </code>
                                    </pre>
                                  </div>
                                </CodeBlockContent>
                              </div>
                            </ScrollArea>
                          </CodeBlock>
                          <p className="whitespace-pre-wrap">
                            {"That clears 39 of the 41 on replay. The other two are past Stripe's 3 day retry window, so they need a manual resend from the Dashboard."}
                          </p>
                        </BubbleContent>
                      </Bubble>
                    </BubbleGroup>
                    <MessageFooter className="gap-0.5">
                      <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-events-none transition-opacity">
                        <span className="pe-1 tabular-nums text-muted-foreground text-xs">
                          {"9:15"}
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
              <MessageScrollerItem className="[content-visibility:visible] animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none" messageId="m_06" scrollAnchor="false">
                <Message className="group/turn" data-align="end" role="group" aria-label="Jonas Weber">
                  <MessageAvatar>
                    <Avatar size="default">
                      <AvatarImage alt="" src="https://github.com/shadcn.png"></AvatarImage>
                    </Avatar>
                  </MessageAvatar>
                  <MessageContent className="gap-1">
                    <BubbleGroup className="gap-3 items-end w-full">
                      <Bubble variant="muted" data-align="end">
                        <BubbleContent className="space-y-2">
                          <p className="whitespace-pre-wrap">
                            {"ok patch it"}
                          </p>
                        </BubbleContent>
                      </Bubble>
                      <Bubble variant="muted" data-align="end">
                        <BubbleContent className="space-y-2">
                          <p className="whitespace-pre-wrap">
                            {"and tell me what the retry backlog looks like after"}
                          </p>
                        </BubbleContent>
                      </Bubble>
                    </BubbleGroup>
                    <MessageFooter className="gap-0.5 pe-0">
                      <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-events-none transition-opacity">
                        <span className="pe-1 tabular-nums text-muted-foreground text-xs">
                          {"9:16"}
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
              <MessageScrollerItem className="[content-visibility:visible]" scrollAnchor="false">
                <Message className="group/turn" data-align="start" role="group" aria-label="NeUI Chat">
                  <MessageAvatar className="self-start translate-y-0!">
                    <Avatar size="default">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs">
                        <svg className="lucide lucide-sparkles size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                          <path d="M20 2v4"></path>
                          <path d="M22 4h-4"></path>
                          <circle cx="4" cy="20" r="2"></circle>
                        </svg>
                      </AvatarFallback>
                    </Avatar>
                  </MessageAvatar>
                  <MessageContent className="gap-1">
                    <BubbleGroup className="gap-5">
                      <Bubble className="w-full" variant="ghost" data-align="start">
                        <BubbleContent className="space-y-3">
                          <p className="whitespace-pre-wrap">
                            {"Patched"}
                            <code className="bg-muted font-mono px-1 py-0.5 rounded-sm text-[0.85em]">
                              {"stripe-webhook.ts"}
                            </code>
                            {"and started the replay. 39 of 41 have cleared so far, and the last two are outside the retry window and need a manual resend."}
                          </p>
                        </BubbleContent>
                      </Bubble>
                    </BubbleGroup>
                    <MessageFooter className="gap-0.5">
                      <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-events-none transition-opacity">
                        <span className="pe-1 tabular-nums text-muted-foreground text-xs">
                          {"9:17"}
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
              <div aria-hidden="true" data-message-scroller-spacer="" hidden></div>
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <p className="sr-only" role="status" aria-live="polite"></p>
          <MessageScrollerButton className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bottom-4 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none rounded-full select-none shadow-sm shrink-0 whitespace-nowrap" type="button" tabIndex="-1" data-active="false" direction="end" inert="" variant="outline" size="icon-sm">
            <svg className="lucide lucide-arrow-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine">
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
            <span className="sr-only">
              {"Scroll to end"}
            </span>
          </MessageScrollerButton>
        </MessageScroller>
        <div className="pb-2 px-3 shrink-0 sm:px-4">
          <Alert className="[&>svg:not([class*=size-])]:size-4 [&_[data-slot=alert-action]]:col-start-3 [&_[data-slot=alert-action]]:mt-0 [&_[data-slot=alert-action]]:row-start-1 [&_[data-slot=alert-action]]:self-center bg-card border gap-3 grid grid-cols-[0_1fr] has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start has-[>svg]:gap-x-2.5 has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] items-center max-w-3xl mx-auto pe-2 ps-3 px-3 py-2 style-luma:rounded-2xl style-lyra:rounded-none style-maia:rounded-lg style-mira:rounded-lg style-nova:rounded-lg style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-lg text-card-foreground text-sm w-fit" role="alert">
            <AlertDescription className="[&_p]:leading-relaxed block col-start-2 gap-1 justify-items-start text-foreground text-sm">
              {"Make sure you agree to our"}
              <a className="underline underline-offset-4" href="#terms">
                {"Terms"}
              </a>
              {"and our"}
              <a className="underline underline-offset-4" href="#privacy">
                {"Privacy Policy"}
              </a>
            </AlertDescription>
            <AlertAction className="flex gap-1.5 max-sm:col-start-2 max-sm:justify-start max-sm:mt-2 sm:col-start-3 sm:justify-end sm:row-start-1 sm:self-center">
              <Button type="button" tabIndex="0" aria-label="Dismiss terms notice">
                <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </Button>
            </AlertAction>
          </Alert>
        </div>
        <div className="pb-4 px-3 shrink-0 sm:px-4">
          <div className="flex flex-col gap-2 max-w-3xl mx-auto w-full">
            <Frame className="w-full" spacing="sm">
              <header className="bg-muted/40 flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py) rounded-t-[calc(var(--frame-radius)-1px)]">
                <Collapsible data-closed="">
                  <div className="flex gap-2 items-center">
                    <Collapsible>
                    <CollapsibleTrigger className="flex flex-1 gap-1.5 group/notice hover:text-foreground items-center min-w-0 text-muted-foreground text-start text-xs" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                      <svg className="lucide lucide-activity shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                      </svg>
                      <span className="truncate">
                        {"Context 64 percent full"}
                        <span className="align-middle bg-muted-foreground/40 inline-block mx-1.5 rounded-full size-1" aria-hidden="true"></span>
                        {"Plan limit resets Friday 12:00 PM"}
                      </span>
                      <svg className="group-data-[panel-open]/notice:rotate-180 lucide lucide-chevron-down shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </CollapsibleTrigger>
                    </Collapsible>
                    <Button type="button" tabIndex="0" aria-label="Dismiss usage notice">
                      <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </Button>
                  </div>
                </Collapsible>
              </header>
              <FramePanel className="p-0">
                <form className="relative">
                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="ai-chat-1-composer">
                    {"Message NeUI Chat"}
                  </FieldLabel>
                  <InputGroup className="bg-transparent border-0 shadow-none" role="group">
                    <textarea className="cn-input-group-textarea cn-textarea disabled:cursor-not-allowed disabled:opacity-50 field-sizing-content flex flex-1 max-h-48 min-h-16 outline-none placeholder:text-muted-foreground resize-none w-full" id="ai-chat-1-composer" placeholder="Ask anything, or describe what you want changed..."></textarea>
                    <InputGroupAddon className="gap-1" role="group" data-align="block-end">
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" size="icon-sm" aria-label="Add context" aria-haspopup="menu" id="base-ui-_r_10_" aria-expanded="false">
                        <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                      <Button className="cn-input-group-button cn-input-group-button-size-sm flex shadow-none" type="button" tabIndex="0" size="sm" aria-pressed="true">
                        <svg className="lucide lucide-brain" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BrainIcon" tabler="IconBrain" hugeicons="AiBrain01Icon" phosphor="BrainIcon" remixicon="RiBrainLine" data-icon="inline-start" aria-hidden="true">
                          <path d="M12 18V5"></path>
                          <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>
                          <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                          <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                          <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                          <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                          <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                          <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                        </svg>
                        {"Think"}
                      </Button>
                      <Button className="cn-input-group-button cn-input-group-button-size-sm flex shadow-none" type="button" tabIndex="0" size="sm" aria-pressed="false">
                        <svg className="lucide lucide-globe" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" data-icon="inline-start" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                        {"Search"}
                      </Button>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 hidden leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-full sm:inline-flex text-[0.625rem] transition-shadow">
                        <span className="bg-primary rounded-full size-1.5" aria-hidden="true"></span>
                        {"1 tool"}
                      </Badge>
                      <div className="flex gap-1 items-center ms-auto">
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" size="icon-sm" aria-label="Dictate message" aria-pressed="false" id="base-ui-_r_13_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-mic" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MicIcon" tabler="IconMicrophone" hugeicons="Mic02Icon" phosphor="MicrophoneIcon" remixicon="RiMicLine" aria-hidden="true">
                            <path d="M12 19v3"></path>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                            <rect x="9" y="2" width="6" height="13" rx="3"></rect>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-default cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="submit" tabIndex="0" size="icon-sm" aria-label="Send message" id="base-ui-_r_15_" baseUiTooltipTrigger="">
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
              </FramePanel>
            </Frame>
            <p className="text-center text-muted-foreground text-xs">
              {"NeUI Chat can make mistakes. Check important info."}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
