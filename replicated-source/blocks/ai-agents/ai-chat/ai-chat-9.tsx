import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/registry-neui/bases/base/neui/code-block/code-block"
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/bases/base/ui/attachment"
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
import { FieldLabel } from "@/registry/bases/base/ui/field"
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
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerViewport,
} from "@/registry/bases/base/ui/message-scroller"
import {
  Message,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@/registry/bases/base/ui/message"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { AttachmentTrigger } from "@/registry/bases/radix/ui/attachment"
import { BubbleContent } from "@/registry/bases/radix/ui/bubble"
import { Marker } from "@/registry/bases/radix/ui/marker"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col h-svh text-foreground w-full">
      <header className="border-b flex gap-1 h-12 items-center px-3 shrink-0 sm:px-4">
        <Popover>
        <PopoverTrigger className="-ms-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none font-medium gap-1.5 group/button inline-flex items-center justify-center min-w-0 outline-none px-2 select-none shrink transition-all whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false">
          <span className="min-w-0 truncate">
            {"Highlights opener for 3.4"}
          </span>
          <svg className="lucide lucide-chevron-down opacity-60" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </PopoverTrigger>
        </Popover>
        <Tooltip>
        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Pin this thread" aria-pressed="true" aria-disabled="false" id="base-ui-_r_3_" baseUiTooltipTrigger="">
          <svg className="fill-current lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
          </svg>
        </TooltipTrigger>
        </Tooltip>
        <DropdownMenu>
        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Thread options" aria-haspopup="menu" id="base-ui-_r_7_" aria-expanded="false">
          <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
            <circle cx={12} cy={12} r={1}></circle>
            <circle cx={12} cy={5} r={1}></circle>
            <circle cx={12} cy={19} r={1}></circle>
          </svg>
        </DropdownMenuTrigger>
        </DropdownMenu>
        <Tooltip>
        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center ms-auto outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Collapse earlier turns" aria-pressed="false" aria-expanded="true" id="base-ui-_r_a_" baseUiTooltipTrigger="">
          <svg className="lucide lucide-minimize-2 lucide-minimize2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Minimize2Icon" tabler="IconMinimize" hugeicons="Minimize01Icon" phosphor="CornersInIcon" remixicon="RiFullscreenExitLine" aria-hidden="true">
            <path d="m14 10 7-7"></path>
            <path d="M20 10h-6V4"></path>
            <path d="m3 21 7-7"></path>
            <path d="M4 14h6v6"></path>
          </svg>
        </TooltipTrigger>
        </Tooltip>
      </header>
      <MessageScroller className="flex-1" scrollable="start">
        <MessageScrollerViewport className="[--scroll-fade-b-size:2.5rem] [overflow-anchor:none] scrollbar" role="region" aria-label="Messages" tabIndex={0} scrollable="start">
          <MessageScrollerContent className="gap-7 max-w-3xl min-w-0 mx-auto pb-10 pt-6 px-4 sm:px-6 w-full" role="log" aria-relevant="additions" aria-busy="false">
            <MessageScrollerItem className="[content-visibility:visible]" scrollAnchor="false">
              <Marker variant="separator">
                <MarkerContent className="text-[13px]">
                  {"Today 10:28 AM"}
                </MarkerContent>
              </Marker>
            </MessageScrollerItem>
            <MessageScrollerItem className="[content-visibility:visible] flex flex-col gap-4" messageId="slot-0" scrollAnchor="false">
              <div className="animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none">
                <Message className="group/turn" data-align="end" role="group" aria-label="Maya Chen">
                  <MessageContent className="gap-1 items-end">
                    <Bubble className="max-w-[85%]" variant="muted" data-align="end">
                      <BubbleContent className="space-y-2 text-[15px]/6">
                        <p className="max-w-[60ch] whitespace-pre-wrap">
                          {"the highlights opener for 3.4 is still the changelog paste. take a look"}
                        </p>
                      </BubbleContent>
                    </Bubble>
                    <MessageFooter className="gap-0.5">
                      <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-events-none transition-opacity">
                        <span className="pe-1 tabular-nums text-muted-foreground text-xs">
                          {"10:28"}
                        </span>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Copy message" id="base-ui-_r_c_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                            <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Edit message" id="base-ui-_r_e_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                            <path d="m15 5 4 4"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </span>
                    </MessageFooter>
                  </MessageContent>
                </Message>
              </div>
            </MessageScrollerItem>
            <MessageScrollerItem className="[content-visibility:visible] flex flex-col gap-4" messageId="slot-1" scrollAnchor="false">
              <div className="animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none">
                <Message className="group/turn" data-align="start" role="group" aria-label="NeUI Chat">
                  <MessageContent className="gap-2">
                    <MessageHeader className="flex-wrap gap-x-2 gap-y-1 pb-0.5 text-[13px] text-muted-foreground">
                      <span className="font-medium min-w-0 text-foreground truncate">
                        {"Claude Sonnet 5"}
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="tabular-nums">
                        {"10:29"}
                      </span>
                    </MessageHeader>
                    <Collapsible data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="-ms-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none font-normal gap-1.5 group/button h-7 hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 text-[13px] text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reasoning, thought for 4 seconds" aria-disabled="false" aria-expanded="false">
                        <svg className="in-data-open:rotate-90 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                        <svg className="lucide lucide-brain shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BrainIcon" tabler="IconBrain" hugeicons="AiBrain01Icon" phosphor="BrainIcon" remixicon="RiBrainLine" aria-hidden="true">
                          <path d="M12 18V5"></path>
                          <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>
                          <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                          <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                          <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                          <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                          <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                          <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                        </svg>
                        {"Thought for"}
                        <span className="tabular-nums">
                          {"4s"}
                        </span>
                      </CollapsibleTrigger>
                      </Collapsible>
                    </Collapsible>
                    <Bubble className="w-full" variant="ghost" data-align="start">
                      <BubbleContent className="space-y-3 text-[15px]/6 w-full">
                        <p className="max-w-[60ch] whitespace-pre-wrap">
                          {"`release-notes-3.4.md` opens on three system names, and not one of them tells a reader what changed for them."}
                          <Tooltip>
                          <TooltipTrigger className="-translate-y-1 bg-muted data-[active=true]:bg-primary data-[active=true]:text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring/40 font-medium h-4 hover:text-foreground inline-flex items-center justify-center min-w-4 ms-px outline-none px-1 rounded-full tabular-nums text-[10px] text-foreground/80 transition-colors" type="button" data-active="false" aria-label="Citation 1, release-notes-3.4.md" aria-pressed="false" id="base-ui-_r_h_" baseUiTooltipTrigger="">
                            {"1"}
                          </TooltipTrigger>
                          </Tooltip>
                        </p>
                        <h3 className="font-semibold max-w-[60ch] pt-1 text-base text-foreground tracking-tight">
                          {"What It Names"}
                        </h3>
                        <ul className="max-w-[60ch] space-y-2">
                          <li className="flex gap-2.5 min-w-0">
                            <span className="bg-muted-foreground/40 mt-2.5 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                            <span className="flex-1 min-w-0">
                              <strong className="font-semibold text-foreground">
                                {"SCIM group sync"}
                              </strong>
                              {"is the mechanism behind the fix, not the fix."}
                            </span>
                          </li>
                          <li className="flex gap-2.5 min-w-0">
                            <span className="bg-muted-foreground/40 mt-2.5 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                            <span className="flex-1 min-w-0">
                              <strong className="font-semibold text-foreground">
                                {"Webhook delivery"}
                              </strong>
                              {"is where refunds got stuck, not what got faster."}
                            </span>
                          </li>
                          <li className="flex gap-2.5 min-w-0">
                            <span className="bg-muted-foreground/40 mt-2.5 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                            <span className="flex-1 min-w-0">
                              <strong className="font-semibold text-foreground">
                                {"Export limits"}
                              </strong>
                              {"reads as a constraint the release adds."}
                            </span>
                          </li>
                        </ul>
                        <p className="max-w-[60ch] whitespace-pre-wrap">
                          {"Only one of the three is filed as a fix, which the opener flattens."}
                          <Tooltip>
                          <TooltipTrigger className="-translate-y-1 bg-muted data-[active=true]:bg-primary data-[active=true]:text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring/40 font-medium h-4 hover:text-foreground inline-flex items-center justify-center min-w-4 ms-px outline-none px-1 rounded-full tabular-nums text-[10px] text-foreground/80 transition-colors" type="button" data-active="false" aria-label="Citation 3, changelog-3.4.yaml" aria-pressed="false" id="base-ui-_r_j_" baseUiTooltipTrigger="">
                            {"3"}
                          </TooltipTrigger>
                          </Tooltip>
                        </p>
                        <CodeBlock className="[--code-block-bg:var(--card)] [--code-block-caret-color:var(--primary)] [--code-block-copy-inset:--spacing(2)] [--code-block-copy-top:var(--code-block-copy-inset)] [--code-block-diff-add-bg:color-mix(in_oklch,var(--success)_8%,transparent)] [--code-block-diff-remove-bg:color-mix(in_oklch,var(--destructive)_8%,transparent)] [--code-block-error-bg:color-mix(in_oklch,var(--destructive)_8%,transparent)] [--code-block-expand-clearance:--spacing(9)] [--code-block-fold-width:--spacing(4.5)] [--code-block-font-size:0.8125rem] [--code-block-gutter-gap:--spacing(2.5)] [--code-block-gutter-width:--spacing(9)] [--code-block-header-height:--spacing(8)] [--code-block-highlight-bar:color-mix(in_oklch,var(--primary)_60%,transparent)] [--code-block-highlight-bg:color-mix(in_oklch,var(--primary)_6%,transparent)] [--code-block-info-bg:color-mix(in_oklch,var(--info)_8%,transparent)] [--code-block-line-height:1.125rem] [--code-block-number-pad:var(--code-block-gutter-gap)] [--code-block-padding:--spacing(2)] [--code-block-warning-bg:color-mix(in_oklch,var(--warning)_10%,transparent)] bg-card bg-clip-padding border border-border dark:[--code-block-diff-add-bg:color-mix(in_oklch,var(--success)_12%,transparent)] dark:[--code-block-diff-remove-bg:color-mix(in_oklch,var(--destructive)_12%,transparent)] dark:[--code-block-error-bg:color-mix(in_oklch,var(--destructive)_12%,transparent)] dark:[--code-block-highlight-bg:color-mix(in_oklch,var(--primary)_12%,transparent)] dark:[--code-block-info-bg:color-mix(in_oklch,var(--info)_12%,transparent)] dark:[--code-block-warning-bg:color-mix(in_oklch,var(--warning)_14%,transparent)] data-[gutter-channel]:[--code-block-number-pad:calc(var(--code-block-gutter-gap)+var(--code-block-fold-width))] data-[has-diff]:[--code-block-gutter-gap:--spacing(4)] data-[has-header]:[--code-block-copy-top:calc(var(--code-block-header-height)+1px+var(--code-block-copy-inset))] flex flex-col group/code-block min-w-0 relative rounded-(--code-block-radius) style-luma:[--code-block-radius:var(--radius-2xl)] style-lyra:[--code-block-radius:0px] style-maia:[--code-block-radius:var(--radius-2xl)] style-mira:[--code-block-radius:var(--radius-lg)] style-nova:[--code-block-radius:var(--radius-lg)] style-rhea:[--code-block-radius:var(--radius-xl)] style-sera:[--code-block-radius:0px] style-vega:[--code-block-radius:var(--radius-lg)] text-card-foreground text-left w-full" variant="default" hasHeader="true">
                          <CodeBlockHeader className="min-h-8 px-2.5">
                            <CodeBlockTitle>
                              {"changelog-3.4.yaml"}
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
                            <div className="[scrollbar-width:thin] focus-visible:ring-[3px] focus-visible:ring-ring/50 min-w-0 outline-none overflow-auto relative rounded-[inherit]" id="_r_k_" role="region" aria-label="yaml code" tabIndex={0}>
                              <pre className="[&_[data-slot=code-block-token]]:text-[color:var(--cb-c,currentColor)] dark:[&_[data-slot=code-block-token]]:text-[color:var(--cb-cd,currentColor)] font-mono min-w-full py-(--code-block-padding) text-(length:--code-block-font-size) w-max" dir="ltr" style={{"--code-block-gutter-width": "calc(2ch + var(--code-block-gutter-gap) + var(--code-block-padding))", counterReset: "cb-line 0"}}>
                                <code>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="1" id="_r_k_-L1" style={{counterReset: "cb-line 0"}}>
                                    <span>
                                      <span style={{"--cb-c": "#22863A", "--cb-cd": "#85E89D"}}>
                                        {"release"}
                                      </span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {":"}
                                      </span>
                                      <span style={{"--cb-c": "#032F62", "--cb-cd": "#9ECBFF"}}>
                                        {"\"3.4\""}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="2" id="_r_k_-L2" style={{counterReset: "cb-line 1"}}>
                                    <span>
                                      <span style={{"--cb-c": "#22863A", "--cb-cd": "#85E89D"}}>
                                        {"freeze"}
                                      </span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {":"}
                                      </span>
                                      <span style={{"--cb-c": "#005CC5", "--cb-cd": "#79B8FF"}}>
                                        {"2026-08-27"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="3" id="_r_k_-L3" style={{counterReset: "cb-line 2"}}>
                                    <span>
                                      <span style={{"--cb-c": "#22863A", "--cb-cd": "#85E89D"}}>
                                        {"changes"}
                                      </span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {":"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="4" id="_r_k_-L4" style={{counterReset: "cb-line 3"}}>
                                    <span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {"-"}
                                      </span>
                                      <span style={{"--cb-c": "#22863A", "--cb-cd": "#85E89D"}}>
                                        {"id"}
                                      </span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {":"}
                                      </span>
                                      <span style={{"--cb-c": "#032F62", "--cb-cd": "#9ECBFF"}}>
                                        {"refund-webhook-delivery"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="5" id="_r_k_-L5" style={{counterReset: "cb-line 4"}}>
                                    <span>
                                      <span style={{"--cb-c": "#22863A", "--cb-cd": "#85E89D"}}>
                                        {"area"}
                                      </span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {":"}
                                      </span>
                                      <span style={{"--cb-c": "#032F62", "--cb-cd": "#9ECBFF"}}>
                                        {"billing"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="6" id="_r_k_-L6" style={{counterReset: "cb-line 5"}}>
                                    <span>
                                      <span style={{"--cb-c": "#22863A", "--cb-cd": "#85E89D"}}>
                                        {"type"}
                                      </span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {":"}
                                      </span>
                                      <span style={{"--cb-c": "#032F62", "--cb-cd": "#9ECBFF"}}>
                                        {"fix"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="7" id="_r_k_-L7" style={{counterReset: "cb-line 6"}}>
                                    <span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {"-"}
                                      </span>
                                      <span style={{"--cb-c": "#22863A", "--cb-cd": "#85E89D"}}>
                                        {"id"}
                                      </span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {":"}
                                      </span>
                                      <span style={{"--cb-c": "#032F62", "--cb-cd": "#9ECBFF"}}>
                                        {"scim-group-sync"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="8" id="_r_k_-L8" style={{counterReset: "cb-line 7"}}>
                                    <span>
                                      <span style={{"--cb-c": "#22863A", "--cb-cd": "#85E89D"}}>
                                        {"area"}
                                      </span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {":"}
                                      </span>
                                      <span style={{"--cb-c": "#032F62", "--cb-cd": "#9ECBFF"}}>
                                        {"identity"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="9" id="_r_k_-L9" style={{counterReset: "cb-line 8"}}>
                                    <span>
                                      <span style={{"--cb-c": "#22863A", "--cb-cd": "#85E89D"}}>
                                        {"type"}
                                      </span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {":"}
                                      </span>
                                      <span style={{"--cb-c": "#032F62", "--cb-cd": "#9ECBFF"}}>
                                        {"improvement"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="10" id="_r_k_-L10" style={{counterReset: "cb-line 9"}}>
                                    <span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {"-"}
                                      </span>
                                      <span style={{"--cb-c": "#22863A", "--cb-cd": "#85E89D"}}>
                                        {"id"}
                                      </span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {":"}
                                      </span>
                                      <span style={{"--cb-c": "#032F62", "--cb-cd": "#9ECBFF"}}>
                                        {"csv-export-limits"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="11" id="_r_k_-L11" style={{counterReset: "cb-line 10"}}>
                                    <span>
                                      <span style={{"--cb-c": "#22863A", "--cb-cd": "#85E89D"}}>
                                        {"area"}
                                      </span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {":"}
                                      </span>
                                      <span style={{"--cb-c": "#032F62", "--cb-cd": "#9ECBFF"}}>
                                        {"exports"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="12" id="_r_k_-L12" style={{counterReset: "cb-line 11"}}>
                                    <span>
                                      <span style={{"--cb-c": "#22863A", "--cb-cd": "#85E89D"}}>
                                        {"type"}
                                      </span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {":"}
                                      </span>
                                      <span style={{"--cb-c": "#032F62", "--cb-cd": "#9ECBFF"}}>
                                        {"improvement"}
                                      </span>
                                    </span>
                                  </span>
                                </code>
                              </pre>
                            </div>
                          </CodeBlockContent>
                        </CodeBlock>
                        <p className="max-w-[60ch] whitespace-pre-wrap">
                          {"3.3 never named a component before its second paragraph."}
                          <Tooltip>
                          <TooltipTrigger className="-translate-y-1 bg-muted data-[active=true]:bg-primary data-[active=true]:text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring/40 font-medium h-4 hover:text-foreground inline-flex items-center justify-center min-w-4 ms-px outline-none px-1 rounded-full tabular-nums text-[10px] text-foreground/80 transition-colors" type="button" data-active="false" aria-label="Citation 2, release-notes-3.3.md" aria-pressed="false" id="base-ui-_r_m_" baseUiTooltipTrigger="">
                            {"2"}
                          </TooltipTrigger>
                          </Tooltip>
                          {"Same shape here?"}
                        </p>
                      </BubbleContent>
                    </Bubble>
                    <section className="flex flex-col gap-1.5 min-w-0" aria-label="Sources">
                      <h4 className="font-medium text-[13px] text-muted-foreground">
                        <span className="tabular-nums">
                          {"3"}
                        </span>
                        {"Sources"}
                      </h4>
                      <AttachmentGroup className="gap-2 pb-1">
                        <Attachment className="data-[active=true]:bg-primary/5 data-[active=true]:border-primary/50 max-w-56" data-state="done" size="xs" data-orientation="horizontal" data-active="false">
                          <AttachmentMedia className="text-muted-foreground" variant="icon">
                            <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                              <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                              <path d="M10 9H8"></path>
                              <path d="M16 13H8"></path>
                              <path d="M16 17H8"></path>
                            </svg>
                          </AttachmentMedia>
                          <AttachmentContent>
                            <AttachmentTitle className="flex gap-1.5 items-center text-[13px]">
                              <span className="tabular-nums text-muted-foreground">
                                {"1"}
                              </span>
                              <span className="min-w-0 truncate">
                                {"release-notes-3.4.md"}
                              </span>
                            </AttachmentTitle>
                            <AttachmentDescription>
                              {"Draft, edited 14m ago"}
                            </AttachmentDescription>
                          </AttachmentContent>
                          <AttachmentTrigger type="button" aria-label="Source 1, release-notes-3.4.md" aria-pressed="false"></AttachmentTrigger>
                        </Attachment>
                        <Attachment className="data-[active=true]:bg-primary/5 data-[active=true]:border-primary/50 max-w-56" data-state="done" size="xs" data-orientation="horizontal" data-active="false">
                          <AttachmentMedia className="text-muted-foreground" variant="icon">
                            <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                              <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                              <path d="M10 9H8"></path>
                              <path d="M16 13H8"></path>
                              <path d="M16 17H8"></path>
                            </svg>
                          </AttachmentMedia>
                          <AttachmentContent>
                            <AttachmentTitle className="flex gap-1.5 items-center text-[13px]">
                              <span className="tabular-nums text-muted-foreground">
                                {"2"}
                              </span>
                              <span className="min-w-0 truncate">
                                {"release-notes-3.3.md"}
                              </span>
                            </AttachmentTitle>
                            <AttachmentDescription>
                              {"Published Jul 30"}
                            </AttachmentDescription>
                          </AttachmentContent>
                          <AttachmentTrigger type="button" aria-label="Source 2, release-notes-3.3.md" aria-pressed="false"></AttachmentTrigger>
                        </Attachment>
                        <Attachment className="data-[active=true]:bg-primary/5 data-[active=true]:border-primary/50 max-w-56" data-state="done" size="xs" data-orientation="horizontal" data-active="false">
                          <AttachmentMedia className="text-muted-foreground" variant="icon">
                            <svg className="lucide lucide-database size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                              <ellipse cx={12} cy={5} rx={9} ry={3}></ellipse>
                              <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                              <path d="M3 12A9 3 0 0 0 21 12"></path>
                            </svg>
                          </AttachmentMedia>
                          <AttachmentContent>
                            <AttachmentTitle className="flex gap-1.5 items-center text-[13px]">
                              <span className="tabular-nums text-muted-foreground">
                                {"3"}
                              </span>
                              <span className="min-w-0 truncate">
                                {"changelog-3.4.yaml"}
                              </span>
                            </AttachmentTitle>
                            <AttachmentDescription>
                              {"3 user facing changes"}
                            </AttachmentDescription>
                          </AttachmentContent>
                          <AttachmentTrigger type="button" aria-label="Source 3, changelog-3.4.yaml" aria-pressed="false"></AttachmentTrigger>
                        </Attachment>
                      </AttachmentGroup>
                    </section>
                    <MessageFooter className="gap-0.5">
                      <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-events-none transition-opacity">
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Copy reply" id="base-ui-_r_o_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                            <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Regenerate with Claude Sonnet 5" id="base-ui-_r_q_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                            <path d="M21 3v5h-5"></path>
                            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                            <path d="M8 16H3v5"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Good reply" aria-pressed="false" id="base-ui-_r_s_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-thumbs-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsUpIcon" tabler="IconThumbUp" hugeicons="ThumbsUpIcon" phosphor="ThumbsUpIcon" remixicon="RiThumbUpLine" aria-hidden="true">
                            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                            <path d="M7 10v12"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Bad reply" aria-pressed="false" id="base-ui-_r_u_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-thumbs-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsDownIcon" tabler="IconThumbDown" hugeicons="ThumbsDownIcon" phosphor="ThumbsDownIcon" remixicon="RiThumbDownLine" aria-hidden="true">
                            <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path>
                            <path d="M17 14V2"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </span>
                    </MessageFooter>
                  </MessageContent>
                </Message>
              </div>
            </MessageScrollerItem>
            <MessageScrollerItem className="[content-visibility:visible] flex flex-col gap-4" messageId="slot-2" scrollAnchor="false">
              <Marker variant="separator">
                <MarkerIcon aria-hidden="true">
                  <svg className="lucide lucide-git-branch" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GitBranchIcon" tabler="IconGitBranch" hugeicons="GitBranchIcon" phosphor="GitBranchIcon" remixicon="RiGitBranchLine" aria-hidden="true">
                    <path d="M15 6a9 9 0 0 0-9 9V3"></path>
                    <circle cx={18} cy={6} r={3}></circle>
                    <circle cx={6} cy={18} r={3}></circle>
                  </svg>
                </MarkerIcon>
                <MarkerContent className="flex flex-wrap gap-x-2 gap-y-1 items-center justify-center text-[13px]">
                  <span className="max-sm:sr-only">
                    {"Original"}
                  </span>
                  <span className="flex flex-wrap gap-1 items-center justify-center normal-case tracking-normal" role="group" aria-label="Message versions">
                    <Button className="border-transparent font-medium hover:bg-primary normal-case rounded-full tracking-normal" type="button" tabIndex={0} aria-label="Version 1 of 2, Original, 10:29" aria-current="true">
                      <span>
                        {"Original"}
                      </span>
                      <span className="font-normal tabular-nums text-primary-foreground/70">
                        {"10:29"}
                      </span>
                    </Button>
                    <Button className="border-border font-medium normal-case rounded-full text-muted-foreground tracking-normal" type="button" tabIndex={0} aria-label="Version 2 of 2, Edited, 10:32">
                      <span>
                        {"Edited"}
                      </span>
                      <span className="font-normal opacity-70 tabular-nums">
                        {"10:32"}
                      </span>
                    </Button>
                  </span>
                  <span className="tabular-nums text-[11px]" aria-hidden="true">
                    {"1 / 2"}
                  </span>
                  <span className="sr-only" aria-live="polite">
                    {"Version 1 of 2"}
                  </span>
                </MarkerContent>
              </Marker>
              <div className="animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none">
                <Message className="group/turn" data-align="end" role="group" aria-label="Maya Chen">
                  <MessageContent className="gap-1 items-end">
                    <Bubble className="max-w-[85%]" variant="muted" data-align="end">
                      <BubbleContent className="space-y-2 text-[15px]/6">
                        <p className="max-w-[60ch] whitespace-pre-wrap">
                          {"yes. one paragraph, no bullets"}
                        </p>
                      </BubbleContent>
                    </Bubble>
                    <MessageFooter className="gap-0.5">
                      <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-events-none transition-opacity">
                        <span className="pe-1 tabular-nums text-muted-foreground text-xs">
                          {"10:29"}
                        </span>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Copy message" id="base-ui-_r_10_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                            <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Edit message" id="base-ui-_r_12_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                            <path d="m15 5 4 4"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </span>
                    </MessageFooter>
                  </MessageContent>
                </Message>
              </div>
            </MessageScrollerItem>
            <MessageScrollerItem className="[content-visibility:visible] flex flex-col gap-4" messageId="slot-3" scrollAnchor="false">
              <Marker variant="separator">
                <MarkerIcon aria-hidden="true">
                  <svg className="lucide lucide-git-branch" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GitBranchIcon" tabler="IconGitBranch" hugeicons="GitBranchIcon" phosphor="GitBranchIcon" remixicon="RiGitBranchLine" aria-hidden="true">
                    <path d="M15 6a9 9 0 0 0-9 9V3"></path>
                    <circle cx={18} cy={6} r={3}></circle>
                    <circle cx={6} cy={18} r={3}></circle>
                  </svg>
                </MarkerIcon>
                <MarkerContent className="flex flex-wrap gap-x-2 gap-y-1 items-center justify-center text-[13px]">
                  <span className="max-sm:sr-only">
                    {"Regenerated here"}
                  </span>
                  <span className="flex flex-wrap gap-1 items-center justify-center normal-case tracking-normal" role="group" aria-label="Reply versions">
                    <Button className="border-border font-medium normal-case rounded-full text-muted-foreground tracking-normal" type="button" tabIndex={0} aria-label="Version 1 of 3, Claude Sonnet 5, 10:30">
                      <span>
                        {"Sonnet 5"}
                      </span>
                      <span className="font-normal opacity-70 tabular-nums">
                        {"10:30"}
                      </span>
                    </Button>
                    <Button className="border-transparent font-medium hover:bg-primary normal-case rounded-full tracking-normal" type="button" tabIndex={0} aria-label="Version 2 of 3, GPT-5.1, 10:33" aria-current="true">
                      <span>
                        {"GPT-5.1"}
                      </span>
                      <span className="font-normal tabular-nums text-primary-foreground/70">
                        {"10:33"}
                      </span>
                    </Button>
                    <Button className="border-border font-medium normal-case rounded-full text-muted-foreground tracking-normal" type="button" tabIndex={0} aria-label="Version 3 of 3, Gemini 3 Pro, 10:35">
                      <span>
                        {"3 Pro"}
                      </span>
                      <span className="font-normal opacity-70 tabular-nums">
                        {"10:35"}
                      </span>
                    </Button>
                  </span>
                  <span className="tabular-nums text-[11px]" aria-hidden="true">
                    {"2 / 3"}
                  </span>
                  <span className="sr-only" aria-live="polite">
                    {"Version 2 of 3"}
                  </span>
                </MarkerContent>
              </Marker>
              <div className="animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none">
                <Message className="group/turn" data-align="start" role="group" aria-label="NeUI Chat">
                  <MessageContent className="gap-2">
                    <MessageHeader className="flex-wrap gap-x-2 gap-y-1 pb-0.5 text-[13px] text-muted-foreground">
                      <span className="font-medium min-w-0 text-foreground truncate">
                        {"GPT-5.1"}
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="tabular-nums">
                        {"10:33"}
                      </span>
                    </MessageHeader>
                    <Collapsible data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="-ms-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none font-normal gap-1.5 group/button h-7 hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 text-[13px] text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reasoning, thought for 6 seconds" aria-disabled="false" aria-expanded="false">
                        <svg className="in-data-open:rotate-90 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                        <svg className="lucide lucide-brain shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BrainIcon" tabler="IconBrain" hugeicons="AiBrain01Icon" phosphor="BrainIcon" remixicon="RiBrainLine" aria-hidden="true">
                          <path d="M12 18V5"></path>
                          <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>
                          <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                          <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                          <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                          <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                          <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                          <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                        </svg>
                        {"Thought for"}
                        <span className="tabular-nums">
                          {"6s"}
                        </span>
                      </CollapsibleTrigger>
                      </Collapsible>
                    </Collapsible>
                    <Bubble className="w-full" variant="ghost" data-align="start">
                      <BubbleContent className="space-y-3 text-[15px]/6 w-full">
                        <p className="max-w-[60ch] whitespace-pre-wrap">
                          {"Same ask, framed as what a reader gets rather than what we shipped:"}
                        </p>
                        <CodeBlock className="[--code-block-bg:var(--card)] [--code-block-caret-color:var(--primary)] [--code-block-copy-inset:--spacing(2)] [--code-block-copy-top:var(--code-block-copy-inset)] [--code-block-diff-add-bg:color-mix(in_oklch,var(--success)_8%,transparent)] [--code-block-diff-remove-bg:color-mix(in_oklch,var(--destructive)_8%,transparent)] [--code-block-error-bg:color-mix(in_oklch,var(--destructive)_8%,transparent)] [--code-block-expand-clearance:--spacing(9)] [--code-block-fold-width:--spacing(4.5)] [--code-block-font-size:0.8125rem] [--code-block-gutter-gap:--spacing(2.5)] [--code-block-gutter-width:--spacing(9)] [--code-block-header-height:--spacing(8)] [--code-block-highlight-bar:color-mix(in_oklch,var(--primary)_60%,transparent)] [--code-block-highlight-bg:color-mix(in_oklch,var(--primary)_6%,transparent)] [--code-block-info-bg:color-mix(in_oklch,var(--info)_8%,transparent)] [--code-block-line-height:1.125rem] [--code-block-number-pad:var(--code-block-gutter-gap)] [--code-block-padding:--spacing(2)] [--code-block-warning-bg:color-mix(in_oklch,var(--warning)_10%,transparent)] bg-card bg-clip-padding border border-border dark:[--code-block-diff-add-bg:color-mix(in_oklch,var(--success)_12%,transparent)] dark:[--code-block-diff-remove-bg:color-mix(in_oklch,var(--destructive)_12%,transparent)] dark:[--code-block-error-bg:color-mix(in_oklch,var(--destructive)_12%,transparent)] dark:[--code-block-highlight-bg:color-mix(in_oklch,var(--primary)_12%,transparent)] dark:[--code-block-info-bg:color-mix(in_oklch,var(--info)_12%,transparent)] dark:[--code-block-warning-bg:color-mix(in_oklch,var(--warning)_14%,transparent)] data-[gutter-channel]:[--code-block-number-pad:calc(var(--code-block-gutter-gap)+var(--code-block-fold-width))] data-[has-diff]:[--code-block-gutter-gap:--spacing(4)] data-[has-header]:[--code-block-copy-top:calc(var(--code-block-header-height)+1px+var(--code-block-copy-inset))] flex flex-col group/code-block min-w-0 relative rounded-(--code-block-radius) style-luma:[--code-block-radius:var(--radius-2xl)] style-lyra:[--code-block-radius:0px] style-maia:[--code-block-radius:var(--radius-2xl)] style-mira:[--code-block-radius:var(--radius-lg)] style-nova:[--code-block-radius:var(--radius-lg)] style-rhea:[--code-block-radius:var(--radius-xl)] style-sera:[--code-block-radius:0px] style-vega:[--code-block-radius:var(--radius-lg)] text-card-foreground text-left w-full" variant="default" hasHeader="true">
                          <CodeBlockHeader className="min-h-8 px-2.5">
                            <CodeBlockTitle>
                              {"release-notes-3.4.md"}
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
                            <div className="[scrollbar-width:thin] focus-visible:ring-[3px] focus-visible:ring-ring/50 min-w-0 outline-none overflow-auto relative rounded-[inherit]" id="_r_14_" role="region" aria-label="markdown code" tabIndex={0}>
                              <pre className="[&_[data-slot=code-block-token]]:text-[color:var(--cb-c,currentColor)] dark:[&_[data-slot=code-block-token]]:text-[color:var(--cb-cd,currentColor)] font-mono min-w-full py-(--code-block-padding) text-(length:--code-block-font-size) w-max" dir="ltr" style={{"--code-block-gutter-width": "calc(2ch + var(--code-block-gutter-gap) + var(--code-block-padding))", counterReset: "cb-line 0"}}>
                                <code>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="1" id="_r_14_-L1" style={{counterReset: "cb-line 0"}}>
                                    <span>
                                      <span style={{"--cb-c": "#005CC5", "--cb-cd": "#79B8FF"}}>
                                        {"## Highlights"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="2" id="_r_14_-L2" style={{counterReset: "cb-line 1"}}>
                                    <span>
                                      <br />
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="3" id="_r_14_-L3" style={{counterReset: "cb-line 2"}}>
                                    <span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {"Three things get out of your way in 3.4."}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="4" id="_r_14_-L4" style={{counterReset: "cb-line 3"}}>
                                    <span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {"Refund confirmations arrive in under a"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="5" id="_r_14_-L5" style={{counterReset: "cb-line 4"}}>
                                    <span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {"minute instead of on the next queue drain."}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="6" id="_r_14_-L6" style={{counterReset: "cb-line 5"}}>
                                    <span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {"Group membership syncs on the user schedule,"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="7" id="_r_14_-L7" style={{counterReset: "cb-line 6"}}>
                                    <span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {"so access stops drifting between runs. CSV"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="8" id="_r_14_-L8" style={{counterReset: "cb-line 7"}}>
                                    <span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {"exports past 50,000 rows finish instead of"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="9" id="_r_14_-L9" style={{counterReset: "cb-line 8"}}>
                                    <span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {"timing out at the gateway."}
                                      </span>
                                    </span>
                                  </span>
                                </code>
                              </pre>
                            </div>
                          </CodeBlockContent>
                        </CodeBlock>
                        <p className="max-w-[60ch] whitespace-pre-wrap">
                          {"The row count is the only figure in it, and it comes from the export tickets, so it is safe to print."}
                        </p>
                      </BubbleContent>
                    </Bubble>
                    <section className="flex flex-col gap-1.5 min-w-0" aria-label="Sources">
                      <h4 className="font-medium text-[13px] text-muted-foreground">
                        <span className="tabular-nums">
                          {"2"}
                        </span>
                        {"Documents Read"}
                      </h4>
                      <AttachmentGroup className="gap-2 pb-1">
                        <Attachment className="data-[active=true]:bg-primary/5 data-[active=true]:border-primary/50 max-w-56" data-state="done" size="xs" data-orientation="horizontal" data-active="false">
                          <AttachmentMedia className="text-muted-foreground" variant="icon">
                            <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                              <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                              <path d="M10 9H8"></path>
                              <path d="M16 13H8"></path>
                              <path d="M16 17H8"></path>
                            </svg>
                          </AttachmentMedia>
                          <AttachmentContent>
                            <AttachmentTitle className="flex gap-1.5 items-center text-[13px]">
                              <span className="min-w-0 truncate">
                                {"release-notes-3.4.md"}
                              </span>
                            </AttachmentTitle>
                            <AttachmentDescription>
                              {"Draft, edited 14m ago"}
                            </AttachmentDescription>
                          </AttachmentContent>
                          <AttachmentTrigger type="button" aria-label="Source, release-notes-3.4.md" aria-pressed="false"></AttachmentTrigger>
                        </Attachment>
                        <Attachment className="data-[active=true]:bg-primary/5 data-[active=true]:border-primary/50 max-w-56" data-state="done" size="xs" data-orientation="horizontal" data-active="false">
                          <AttachmentMedia className="text-muted-foreground" variant="icon">
                            <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                              <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                              <path d="M10 9H8"></path>
                              <path d="M16 13H8"></path>
                              <path d="M16 17H8"></path>
                            </svg>
                          </AttachmentMedia>
                          <AttachmentContent>
                            <AttachmentTitle className="flex gap-1.5 items-center text-[13px]">
                              <span className="min-w-0 truncate">
                                {"release-notes-3.3.md"}
                              </span>
                            </AttachmentTitle>
                            <AttachmentDescription>
                              {"Published Jul 30"}
                            </AttachmentDescription>
                          </AttachmentContent>
                          <AttachmentTrigger type="button" aria-label="Source, release-notes-3.3.md" aria-pressed="false"></AttachmentTrigger>
                        </Attachment>
                      </AttachmentGroup>
                    </section>
                    <MessageFooter className="gap-0.5">
                      <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-events-none transition-opacity">
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Copy reply" id="base-ui-_r_16_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                            <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Regenerate with Claude Sonnet 5" id="base-ui-_r_18_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                            <path d="M21 3v5h-5"></path>
                            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                            <path d="M8 16H3v5"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Good reply" aria-pressed="false" id="base-ui-_r_1a_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-thumbs-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsUpIcon" tabler="IconThumbUp" hugeicons="ThumbsUpIcon" phosphor="ThumbsUpIcon" remixicon="RiThumbUpLine" aria-hidden="true">
                            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                            <path d="M7 10v12"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Bad reply" aria-pressed="false" id="base-ui-_r_1c_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-thumbs-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsDownIcon" tabler="IconThumbDown" hugeicons="ThumbsDownIcon" phosphor="ThumbsDownIcon" remixicon="RiThumbDownLine" aria-hidden="true">
                            <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path>
                            <path d="M17 14V2"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </span>
                    </MessageFooter>
                  </MessageContent>
                </Message>
              </div>
            </MessageScrollerItem>
            <MessageScrollerItem className="[content-visibility:visible] flex flex-col gap-4" messageId="slot-4" scrollAnchor="false">
              <div className="animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none">
                <Message className="group/turn" data-align="end" role="group" aria-label="Maya Chen">
                  <MessageContent className="gap-1 items-end">
                    <Bubble className="max-w-[85%]" variant="muted" data-align="end">
                      <BubbleContent className="space-y-2 text-[15px]/6">
                        <p className="max-w-[60ch] whitespace-pre-wrap">
                          {"drop the row count, ops will argue about the number"}
                        </p>
                      </BubbleContent>
                    </Bubble>
                    <MessageFooter className="gap-0.5">
                      <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-events-none transition-opacity">
                        <span className="pe-1 tabular-nums text-muted-foreground text-xs">
                          {"10:34"}
                        </span>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Copy message" id="base-ui-_r_1e_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                            <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Edit message" id="base-ui-_r_1g_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                            <path d="m15 5 4 4"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </span>
                    </MessageFooter>
                  </MessageContent>
                </Message>
              </div>
            </MessageScrollerItem>
            <MessageScrollerItem className="[content-visibility:visible] flex flex-col gap-4" messageId="slot-5" scrollAnchor="false">
              <Marker variant="separator">
                <MarkerIcon aria-hidden="true">
                  <svg className="lucide lucide-git-branch" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GitBranchIcon" tabler="IconGitBranch" hugeicons="GitBranchIcon" phosphor="GitBranchIcon" remixicon="RiGitBranchLine" aria-hidden="true">
                    <path d="M15 6a9 9 0 0 0-9 9V3"></path>
                    <circle cx={18} cy={6} r={3}></circle>
                    <circle cx={6} cy={18} r={3}></circle>
                  </svg>
                </MarkerIcon>
                <MarkerContent className="flex flex-wrap gap-x-2 gap-y-1 items-center justify-center text-[13px]">
                  <span className="max-sm:sr-only">
                    {"Regenerated here"}
                  </span>
                  <span className="flex flex-wrap gap-1 items-center justify-center normal-case tracking-normal" role="group" aria-label="Reply versions">
                    <Button className="border-transparent font-medium hover:bg-primary normal-case rounded-full tracking-normal" type="button" tabIndex={0} aria-label="Version 1 of 2, GPT-5.1, 10:34" aria-current="true">
                      <span>
                        {"GPT-5.1"}
                      </span>
                      <span className="font-normal tabular-nums text-primary-foreground/70">
                        {"10:34"}
                      </span>
                    </Button>
                    <Button className="border-border font-medium normal-case rounded-full text-muted-foreground tracking-normal" type="button" tabIndex={0} aria-label="Version 2 of 2, Claude Sonnet 5, 10:36">
                      <span>
                        {"Sonnet 5"}
                      </span>
                      <span className="font-normal opacity-70 tabular-nums">
                        {"10:36"}
                      </span>
                    </Button>
                  </span>
                  <span className="tabular-nums text-[11px]" aria-hidden="true">
                    {"1 / 2"}
                  </span>
                  <span className="sr-only" aria-live="polite">
                    {"Version 1 of 2"}
                  </span>
                </MarkerContent>
              </Marker>
              <div className="animate-in duration-300 ease-out fade-in-0 motion-reduce:animate-none">
                <Message className="group/turn" data-align="start" role="group" aria-label="NeUI Chat">
                  <MessageContent className="gap-2">
                    <MessageHeader className="flex-wrap gap-x-2 gap-y-1 pb-0.5 text-[13px] text-muted-foreground">
                      <span className="font-medium min-w-0 text-foreground truncate">
                        {"GPT-5.1"}
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="tabular-nums">
                        {"10:34"}
                      </span>
                    </MessageHeader>
                    <Collapsible data-closed="">
                      <Collapsible>
                      <CollapsibleTrigger className="-ms-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none font-normal gap-1.5 group/button h-7 hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 text-[13px] text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reasoning, thought for 6 seconds" aria-disabled="false" aria-expanded="false">
                        <svg className="in-data-open:rotate-90 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                        <svg className="lucide lucide-brain shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BrainIcon" tabler="IconBrain" hugeicons="AiBrain01Icon" phosphor="BrainIcon" remixicon="RiBrainLine" aria-hidden="true">
                          <path d="M12 18V5"></path>
                          <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>
                          <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                          <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                          <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                          <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                          <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                          <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                        </svg>
                        {"Thought for"}
                        <span className="tabular-nums">
                          {"6s"}
                        </span>
                      </CollapsibleTrigger>
                      </Collapsible>
                    </Collapsible>
                    <Bubble className="w-full" variant="ghost" data-align="start">
                      <BubbleContent className="space-y-3 text-[15px]/6 w-full">
                        <p className="max-w-[60ch] whitespace-pre-wrap">
                          {"Number out. The sentence still carries the change:"}
                        </p>
                        <CodeBlock className="[--code-block-bg:var(--card)] [--code-block-caret-color:var(--primary)] [--code-block-copy-inset:--spacing(2)] [--code-block-copy-top:var(--code-block-copy-inset)] [--code-block-diff-add-bg:color-mix(in_oklch,var(--success)_8%,transparent)] [--code-block-diff-remove-bg:color-mix(in_oklch,var(--destructive)_8%,transparent)] [--code-block-error-bg:color-mix(in_oklch,var(--destructive)_8%,transparent)] [--code-block-expand-clearance:--spacing(9)] [--code-block-fold-width:--spacing(4.5)] [--code-block-font-size:0.8125rem] [--code-block-gutter-gap:--spacing(2.5)] [--code-block-gutter-width:--spacing(9)] [--code-block-header-height:--spacing(8)] [--code-block-highlight-bar:color-mix(in_oklch,var(--primary)_60%,transparent)] [--code-block-highlight-bg:color-mix(in_oklch,var(--primary)_6%,transparent)] [--code-block-info-bg:color-mix(in_oklch,var(--info)_8%,transparent)] [--code-block-line-height:1.125rem] [--code-block-number-pad:var(--code-block-gutter-gap)] [--code-block-padding:--spacing(2)] [--code-block-warning-bg:color-mix(in_oklch,var(--warning)_10%,transparent)] bg-card bg-clip-padding border border-border dark:[--code-block-diff-add-bg:color-mix(in_oklch,var(--success)_12%,transparent)] dark:[--code-block-diff-remove-bg:color-mix(in_oklch,var(--destructive)_12%,transparent)] dark:[--code-block-error-bg:color-mix(in_oklch,var(--destructive)_12%,transparent)] dark:[--code-block-highlight-bg:color-mix(in_oklch,var(--primary)_12%,transparent)] dark:[--code-block-info-bg:color-mix(in_oklch,var(--info)_12%,transparent)] dark:[--code-block-warning-bg:color-mix(in_oklch,var(--warning)_14%,transparent)] data-[gutter-channel]:[--code-block-number-pad:calc(var(--code-block-gutter-gap)+var(--code-block-fold-width))] data-[has-diff]:[--code-block-gutter-gap:--spacing(4)] data-[has-header]:[--code-block-copy-top:calc(var(--code-block-header-height)+1px+var(--code-block-copy-inset))] flex flex-col group/code-block min-w-0 relative rounded-(--code-block-radius) style-luma:[--code-block-radius:var(--radius-2xl)] style-lyra:[--code-block-radius:0px] style-maia:[--code-block-radius:var(--radius-2xl)] style-mira:[--code-block-radius:var(--radius-lg)] style-nova:[--code-block-radius:var(--radius-lg)] style-rhea:[--code-block-radius:var(--radius-xl)] style-sera:[--code-block-radius:0px] style-vega:[--code-block-radius:var(--radius-lg)] text-card-foreground text-left w-full" variant="default" hasHeader="true">
                          <CodeBlockHeader className="min-h-8 px-2.5">
                            <CodeBlockTitle>
                              {"release-notes-3.4.md"}
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
                            <div className="[scrollbar-width:thin] focus-visible:ring-[3px] focus-visible:ring-ring/50 min-w-0 outline-none overflow-auto relative rounded-[inherit]" id="_r_1i_" role="region" aria-label="markdown code" tabIndex={0}>
                              <pre className="[&_[data-slot=code-block-token]]:text-[color:var(--cb-c,currentColor)] dark:[&_[data-slot=code-block-token]]:text-[color:var(--cb-cd,currentColor)] font-mono min-w-full py-(--code-block-padding) text-(length:--code-block-font-size) w-max" dir="ltr" style={{"--code-block-gutter-width": "calc(2ch + var(--code-block-gutter-gap) + var(--code-block-padding))", counterReset: "cb-line 0"}}>
                                <code>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="1" id="_r_1i_-L1" style={{counterReset: "cb-line 0"}}>
                                    <span>
                                      <span style={{"--cb-c": "#005CC5", "--cb-cd": "#79B8FF"}}>
                                        {"## Highlights"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="2" id="_r_1i_-L2" style={{counterReset: "cb-line 1"}}>
                                    <span>
                                      <br />
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="3" id="_r_1i_-L3" style={{counterReset: "cb-line 2"}}>
                                    <span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {"Three things get out of your way in 3.4."}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="4" id="_r_1i_-L4" style={{counterReset: "cb-line 3"}}>
                                    <span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {"Refund confirmations arrive in under a"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="5" id="_r_1i_-L5" style={{counterReset: "cb-line 4"}}>
                                    <span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {"minute instead of on the next queue drain."}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="6" id="_r_1i_-L6" style={{counterReset: "cb-line 5"}}>
                                    <span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {"Group membership syncs on the user schedule,"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="7" id="_r_1i_-L7" style={{counterReset: "cb-line 6"}}>
                                    <span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {"so access stops drifting between runs. Large"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="8" id="_r_1i_-L8" style={{counterReset: "cb-line 7"}}>
                                    <span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {"CSV exports finish instead of timing out at"}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="9" id="_r_1i_-L9" style={{counterReset: "cb-line 8"}}>
                                    <span>
                                      <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                        {"the gateway."}
                                      </span>
                                    </span>
                                  </span>
                                </code>
                              </pre>
                            </div>
                          </CodeBlockContent>
                        </CodeBlock>
                      </BubbleContent>
                    </Bubble>
                    <section className="flex flex-col gap-1.5 min-w-0" aria-label="Sources">
                      <h4 className="font-medium text-[13px] text-muted-foreground">
                        <span className="tabular-nums">
                          {"2"}
                        </span>
                        {"Documents Read"}
                      </h4>
                      <AttachmentGroup className="gap-2 pb-1">
                        <Attachment className="data-[active=true]:bg-primary/5 data-[active=true]:border-primary/50 max-w-56" data-state="done" size="xs" data-orientation="horizontal" data-active="false">
                          <AttachmentMedia className="text-muted-foreground" variant="icon">
                            <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                              <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                              <path d="M10 9H8"></path>
                              <path d="M16 13H8"></path>
                              <path d="M16 17H8"></path>
                            </svg>
                          </AttachmentMedia>
                          <AttachmentContent>
                            <AttachmentTitle className="flex gap-1.5 items-center text-[13px]">
                              <span className="min-w-0 truncate">
                                {"release-notes-3.4.md"}
                              </span>
                            </AttachmentTitle>
                            <AttachmentDescription>
                              {"Draft, edited 14m ago"}
                            </AttachmentDescription>
                          </AttachmentContent>
                          <AttachmentTrigger type="button" aria-label="Source, release-notes-3.4.md" aria-pressed="false"></AttachmentTrigger>
                        </Attachment>
                        <Attachment className="data-[active=true]:bg-primary/5 data-[active=true]:border-primary/50 max-w-56" data-state="done" size="xs" data-orientation="horizontal" data-active="false">
                          <AttachmentMedia className="text-muted-foreground" variant="icon">
                            <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                              <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                              <path d="M10 9H8"></path>
                              <path d="M16 13H8"></path>
                              <path d="M16 17H8"></path>
                            </svg>
                          </AttachmentMedia>
                          <AttachmentContent>
                            <AttachmentTitle className="flex gap-1.5 items-center text-[13px]">
                              <span className="min-w-0 truncate">
                                {"release-notes-3.3.md"}
                              </span>
                            </AttachmentTitle>
                            <AttachmentDescription>
                              {"Published Jul 30"}
                            </AttachmentDescription>
                          </AttachmentContent>
                          <AttachmentTrigger type="button" aria-label="Source, release-notes-3.3.md" aria-pressed="false"></AttachmentTrigger>
                        </Attachment>
                      </AttachmentGroup>
                    </section>
                    <MessageFooter className="gap-0.5">
                      <span className="flex gap-0.5 items-center opacity-100 transition-opacity">
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Copy reply" id="base-ui-_r_1k_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                            <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Regenerate with Claude Sonnet 5" id="base-ui-_r_1m_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                            <path d="M21 3v5h-5"></path>
                            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                            <path d="M8 16H3v5"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Good reply" aria-pressed="false" id="base-ui-_r_1o_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-thumbs-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsUpIcon" tabler="IconThumbUp" hugeicons="ThumbsUpIcon" phosphor="ThumbsUpIcon" remixicon="RiThumbUpLine" aria-hidden="true">
                            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                            <path d="M7 10v12"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Bad reply" aria-pressed="false" id="base-ui-_r_1q_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-thumbs-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsDownIcon" tabler="IconThumbDown" hugeicons="ThumbsDownIcon" phosphor="ThumbsDownIcon" remixicon="RiThumbDownLine" aria-hidden="true">
                            <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path>
                            <path d="M17 14V2"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </span>
                    </MessageFooter>
                    <section className="flex flex-col gap-1.5 items-start min-w-0 mt-0.5 w-full" aria-label="Follow ups">
                      <h4 className="font-medium text-[13px] text-muted-foreground">
                        {"Follow Ups"}
                      </h4>
                      <Bubble className="max-w-full" variant="outline" data-align="start">
                        <BubbleContent className="gap-2 hover:text-foreground text-muted-foreground text-start" type="button">
                          <svg className="lucide lucide-corner-down-right opacity-60 shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CornerDownRightIcon" tabler="IconCornerDownRight" hugeicons="CornerDownRightIcon" phosphor="ArrowBendDownRightIcon" remixicon="RiCornerDownRightLine" aria-hidden="true">
                            <path d="m15 10 5 5-5 5"></path>
                            <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
                          </svg>
                          <span className="min-w-0 truncate">
                            {"Check it against the 3.3 opener"}
                          </span>
                        </BubbleContent>
                      </Bubble>
                      <Bubble className="max-w-full" variant="outline" data-align="start">
                        <BubbleContent className="gap-2 hover:text-foreground text-muted-foreground text-start" type="button">
                          <svg className="lucide lucide-corner-down-right opacity-60 shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CornerDownRightIcon" tabler="IconCornerDownRight" hugeicons="CornerDownRightIcon" phosphor="ArrowBendDownRightIcon" remixicon="RiCornerDownRightLine" aria-hidden="true">
                            <path d="m15 10 5 5-5 5"></path>
                            <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
                          </svg>
                          <span className="min-w-0 truncate">
                            {"List every number I need to verify"}
                          </span>
                        </BubbleContent>
                      </Bubble>
                    </section>
                  </MessageContent>
                </Message>
              </div>
            </MessageScrollerItem>
            <div aria-hidden="true" data-message-scroller-spacer="" hidden></div>
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <p className="sr-only" role="status" aria-live="polite"></p>
        <MessageScrollerButton className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bottom-4 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none rounded-full select-none shadow-sm shrink-0 whitespace-nowrap" type="button" tabIndex={-1} data-active="false" direction="end" inert="" variant="outline" size="icon-sm">
          <svg className="lucide lucide-arrow-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine">
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
          <span className="sr-only">
            {"Scroll to end"}
          </span>
        </MessageScrollerButton>
      </MessageScroller>
      <div className="flex flex-col gap-2 max-w-3xl mx-auto pb-4 pt-1 px-4 shrink-0 sm:px-6 w-full">
        <form>
          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="ai-chat-9-composer">
            {"Message NeUI Chat"}
          </FieldLabel>
          <InputGroup role="group">
            <textarea className="cn-input-group-textarea cn-textarea disabled:cursor-not-allowed disabled:opacity-50 field-sizing-content flex flex-1 max-h-40 min-h-10 outline-none placeholder:text-muted-foreground resize-none w-full" id="ai-chat-9-composer" placeholder="Reply to this thread..."></textarea>
            <InputGroupAddon className="gap-1" role="group" data-align="block-end">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} size="icon-sm" aria-label="Skills" aria-haspopup="menu" id="base-ui-_r_1u_" aria-expanded="false">
                <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx={4} cy={20} r={2}></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} size="icon-sm" aria-label="Attach source" aria-haspopup="menu" id="base-ui-_r_23_" aria-expanded="false">
                <svg className="lucide lucide-paperclip" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" aria-hidden="true">
                  <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-sm disabled:opacity-50 disabled:pointer-events-none flex font-normal group/button items-center justify-center min-w-0 outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} size="sm" aria-label="Model, Claude Sonnet 5" aria-haspopup="menu" id="base-ui-_r_28_" aria-expanded="false">
                <span className="inline-flex items-center justify-center shrink-0 size-4" aria-hidden="true">
                  <svg className="dark:hidden size-full" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                    <title>
                      {"Anthropic"}
                    </title>
                    <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path>
                  </svg>
                  <svg className="dark:block hidden size-full" fill="#ffff" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                    <title>
                      {"Anthropic"}
                    </title>
                    <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path>
                  </svg>
                </span>
                <span className="truncate">
                  {"Claude Sonnet 5"}
                </span>
                <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
              <div className="flex gap-1 items-center ms-auto">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-default cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="submit" tabIndex={0} size="icon-sm" id="base-ui-_r_2b_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                    <path d="m5 12 7-7 7 7"></path>
                    <path d="M12 19V5"></path>
                  </svg>
                  <span className="sr-only">
                    {"Send"}
                  </span>
                </TooltipTrigger>
                </Tooltip>
              </div>
            </InputGroupAddon>
          </InputGroup>
        </form>
        <p className="text-[13px] text-center text-muted-foreground">
          {"NeUI Chat can make mistakes. Check important info."}
        </p>
      </div>
    </div>
  )
}
