import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Bubble } from "@/registry/bases/base/ui/bubble"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { FieldLabel } from "@/registry/bases/base/ui/field"
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
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { BubbleContent } from "@/registry/bases/radix/ui/bubble"
import { Marker } from "@/registry/bases/radix/ui/marker"

export function Pattern() {
  return (
    <section className="bg-background flex flex-col h-svh isolate min-h-[32rem] overflow-hidden relative w-full" aria-label="Nimbus chat">
      <canvas className="[mask-image:radial-gradient(76%_66%_at_50%_54%,black,transparent)] absolute h-full inset-0 pointer-events-none text-muted-foreground w-full" aria-hidden="true" width="1280" height="633"></canvas>
      <header className="after:absolute after:bg-gradient-to-b after:from-background after:h-6 after:inset-x-0 after:pointer-events-none after:to-transparent after:top-full backdrop-blur-md bg-background/70 flex gap-2 h-14 items-center px-4 shrink-0 sm:px-6 sticky supports-backdrop-filter:bg-background/60 top-0 z-20">
        <DropdownMenu>
        <DropdownMenuTrigger className="-ms-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none gap-1.5 group/button inline-flex items-center justify-center min-w-0 outline-none px-2 select-none shrink transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false">
          <span className="font-medium min-w-0 truncate">
            Stripe webhook 500s on charge.refunded
          </span>
          <svg className="lucide lucide-chevron-down opacity-60 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </DropdownMenuTrigger>
        </DropdownMenu>
        <div className="flex gap-0.5 items-center ms-auto shrink-0">
          <Tooltip>
          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Favorite thread" aria-pressed="false" id="base-ui-_r_6_" baseUiTooltipTrigger="">
            <svg className="lucide lucide-star size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
          </TooltipTrigger>
          </Tooltip>
          <DropdownMenu>
          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Conversation settings" aria-haspopup="menu" id="base-ui-_r_a_" aria-expanded="false">
            <svg className="lucide lucide-settings-2 lucide-settings2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
              <path d="M14 17H5"></path>
              <path d="M19 7h-9"></path>
              <circle cx="17" cy="17" r="3"></circle>
              <circle cx="7" cy="7" r="3"></circle>
            </svg>
          </DropdownMenuTrigger>
          </DropdownMenu>
        </div>
      </header>
      <style>{`
@keyframes chat11-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
}

.chat11-pulse {
  animation: chat11-pulse 1.9s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .chat11-pulse {
    animation: none;
  }
}
`}</style>
      <MessageScroller className="flex-1 z-10" scrollable="start">
        <MessageScrollerViewport className="scrollbar" role="region" aria-label="Messages" tabIndex="0" scrollable="start">
          <MessageScrollerContent className="gap-6 justify-end max-w-3xl min-w-0 mx-auto px-4 py-6 sm:px-6 w-full" role="log" aria-relevant="additions" aria-busy="false">
            <MessageScrollerItem className="[content-visibility:visible]" scrollAnchor="false">
              <Marker variant="separator">
                <MarkerContent className="text-xs">
                  Today
                </MarkerContent>
              </Marker>
            </MessageScrollerItem>
            <MessageScrollerItem className="[content-visibility:visible]" scrollAnchor="false">
              <Message data-align="end">
                <MessageContent>
                  <Bubble variant="muted" data-align="end">
                    <BubbleContent className="backdrop-blur-md bg-card/75 border-border">
                      charge.refunded is still 500ing after we shipped the retry fix. what is actually throwing
                    </BubbleContent>
                  </Bubble>
                  <MessageFooter className="pt-1 tabular-nums text-muted-foreground text-xs">
                    14:44
                  </MessageFooter>
                </MessageContent>
              </Message>
            </MessageScrollerItem>
            <MessageScrollerItem className="[content-visibility:visible]" scrollAnchor="false">
              <div className="flex flex-col gap-1.5 group/message">
                <Frame className="backdrop-blur-md bg-card/75 w-full" spacing="sm">
                  <header className="flex flex-row gap-2 items-center px-(--frame-panel-header-px) py-2">
                    <div className="font-semibold text-sm truncate">
                      Nimbus
                    </div>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="min-w-0 text-muted-foreground text-xs truncate">
                      Claude Sonnet 5
                    </span>
                    <span className="gap-1.5 hidden items-center ms-auto shrink-0 sm:flex tabular-nums text-muted-foreground text-xs">
                      <span>
                        4.2s
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span>
                        2,140 tokens
                      </span>
                    </span>
                  </header>
                  <FramePanel>
                    <p className="leading-relaxed text-foreground/90 text-sm">
                      The retry fix was never the problem. stripe-webhook.ts line 118 reads balance_transaction.fee before the null guard, and a refund on a disputed charge arrives with balance_transaction set to null. All three replays threw the same TypeError, so this is deterministic rather than a race.
                    </p>
                  </FramePanel>
                  <FramePanel className="bg-muted/40">
                    <ul className="flex flex-col gap-2">
                      <li className="flex gap-2.5 items-center">
                        <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="font-mono shrink-0 text-xs">
                          read_file
                          <span className="sr-only">
                            , Completed
                          </span>
                        </span>
                        <span className="min-w-0 text-muted-foreground text-xs truncate">
                          stripe-webhook.ts:96-140
                        </span>
                      </li>
                      <li className="flex gap-2.5 items-center">
                        <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="font-mono shrink-0 text-xs">
                          query_db
                          <span className="sr-only">
                            , Completed
                          </span>
                        </span>
                        <span className="min-w-0 text-muted-foreground text-xs truncate">
                          webhook_events, 41 rows
                        </span>
                      </li>
                      <li className="flex gap-2.5 items-center">
                        <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="font-mono shrink-0 text-xs">
                          run_code
                          <span className="sr-only">
                            , Failed
                          </span>
                        </span>
                        <span className="min-w-0 text-muted-foreground text-xs truncate">
                          replay harness, 3 of 3 threw
                        </span>
                      </li>
                    </ul>
                  </FramePanel>
                </Frame>
                <MessageFooter className="gap-0.5 group-focus-within/message:opacity-100 group-hover/message:opacity-100 opacity-0 transition-opacity">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy reply" id="base-ui-_r_d_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-copy size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Retry reply" id="base-ui-_r_f_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-refresh-cw size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                      <path d="M21 3v5h-5"></path>
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                      <path d="M8 16H3v5"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Helpful" aria-pressed="false" id="base-ui-_r_h_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-thumbs-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsUpIcon" tabler="IconThumbUp" hugeicons="ThumbsUpIcon" phosphor="ThumbsUpIcon" remixicon="RiThumbUpLine" aria-hidden="true">
                      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                      <path d="M7 10v12"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Not helpful" aria-pressed="false" id="base-ui-_r_j_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-thumbs-down size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsDownIcon" tabler="IconThumbDown" hugeicons="ThumbsDownIcon" phosphor="ThumbsDownIcon" remixicon="RiThumbDownLine" aria-hidden="true">
                      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path>
                      <path d="M17 14V2"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </MessageFooter>
              </div>
            </MessageScrollerItem>
            <MessageScrollerItem className="[content-visibility:visible]" scrollAnchor="false">
              <Message data-align="end">
                <MessageContent>
                  <Bubble variant="muted" data-align="end">
                    <BubbleContent className="backdrop-blur-md bg-card/75 border-border">
                      how bad is the backlog
                    </BubbleContent>
                  </Bubble>
                  <MessageFooter className="pt-1 tabular-nums text-muted-foreground text-xs">
                    14:49
                  </MessageFooter>
                </MessageContent>
              </Message>
            </MessageScrollerItem>
            <MessageScrollerItem className="[content-visibility:visible]" scrollAnchor="false">
              <div className="flex flex-col gap-1.5 group/message">
                <Frame className="backdrop-blur-md bg-card/75 w-full" spacing="sm">
                  <header className="flex flex-row gap-2 items-center px-(--frame-panel-header-px) py-2">
                    <div className="font-semibold text-sm truncate">
                      Nimbus
                    </div>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="min-w-0 text-muted-foreground text-xs truncate">
                      Claude Sonnet 5
                    </span>
                    <span className="gap-1.5 hidden items-center ms-auto shrink-0 sm:flex tabular-nums text-muted-foreground text-xs">
                      <span>
                        2.6s
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span>
                        1,315 tokens
                      </span>
                    </span>
                  </header>
                  <FramePanel>
                    <p className="leading-relaxed text-foreground/90 text-sm">
                      41 events are queued and 6 of the 50 retry attempts are left. Stripe stops redelivering at zero, so the oldest event drops in about 40 minutes. I have a patch ready that moves the guard above the dereference.
                    </p>
                  </FramePanel>
                  <FramePanel className="bg-muted/40">
                    <dl className="gap-3 grid grid-cols-3">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <dt className="text-muted-foreground text-xs truncate">
                          Queued
                        </dt>
                        <dd className="font-semibold tabular-nums text-base text-foreground truncate">
                          41
                        </dd>
                      </div>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <dt className="text-muted-foreground text-xs truncate">
                          Retries left
                        </dt>
                        <dd className="font-semibold tabular-nums text-base text-destructive truncate">
                          6 of 50
                        </dd>
                      </div>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <dt className="text-muted-foreground text-xs truncate">
                          Oldest event
                        </dt>
                        <dd className="font-semibold tabular-nums text-base text-warning truncate">
                          2h 14m
                        </dd>
                      </div>
                    </dl>
                  </FramePanel>
                </Frame>
                <MessageFooter className="gap-0.5 group-focus-within/message:opacity-100 group-hover/message:opacity-100 opacity-0 transition-opacity">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy reply" id="base-ui-_r_l_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-copy size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Retry reply" id="base-ui-_r_n_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-refresh-cw size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                      <path d="M21 3v5h-5"></path>
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                      <path d="M8 16H3v5"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Helpful" aria-pressed="false" id="base-ui-_r_p_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-thumbs-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsUpIcon" tabler="IconThumbUp" hugeicons="ThumbsUpIcon" phosphor="ThumbsUpIcon" remixicon="RiThumbUpLine" aria-hidden="true">
                      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                      <path d="M7 10v12"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Not helpful" aria-pressed="false" id="base-ui-_r_r_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-thumbs-down size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsDownIcon" tabler="IconThumbDown" hugeicons="ThumbsDownIcon" phosphor="ThumbsDownIcon" remixicon="RiThumbDownLine" aria-hidden="true">
                      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path>
                      <path d="M17 14V2"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </MessageFooter>
              </div>
            </MessageScrollerItem>
            <MessageScrollerItem className="[content-visibility:visible]" scrollAnchor="false">
              <div className="flex flex-wrap gap-2">
                <Bubble variant="outline" data-align="start">
                  <BubbleContent className="flex-row gap-1.5 px-3 py-1.5 text-xs" type="button">
                    Show the patch
                    <svg className="lucide lucide-arrow-right opacity-60 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </BubbleContent>
                </Bubble>
                <Bubble variant="outline" data-align="start">
                  <BubbleContent className="flex-row gap-1.5 px-3 py-1.5 text-xs" type="button">
                    Replay one event
                    <svg className="lucide lucide-arrow-right opacity-60 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </BubbleContent>
                </Bubble>
                <Bubble variant="outline" data-align="start">
                  <BubbleContent className="flex-row gap-1.5 px-3 py-1.5 text-xs" type="button">
                    Restart the worker
                    <svg className="lucide lucide-arrow-right opacity-60 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </BubbleContent>
                </Bubble>
              </div>
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
            Scroll to end
          </span>
        </MessageScrollerButton>
      </MessageScroller>
      <div className="flex flex-col gap-2 max-w-3xl mx-auto pb-4 px-4 relative shrink-0 sm:pb-6 sm:px-6 w-full z-10">
        <Frame className="backdrop-blur-md bg-card/75 w-full" spacing="sm">
          <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <ToggleGroup className="flex-wrap w-full" multiple="" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="2" aria-label="Sources this run can read" style={{"--gap": "2"}}>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:bg-card data-pressed:shadow-xs data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] font-normal group/toggle hover:bg-muted inline-flex items-center justify-center min-w-0 outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="sm" spacing="2">
                <svg className="lucide lucide-code size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                  <path d="m16 18 6-6-6-6"></path>
                  <path d="m8 6-6 6 6 6"></path>
                </svg>
                <span className="max-w-40 min-w-0 truncate">
                  billing-service
                </span>
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:bg-card data-pressed:shadow-xs data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] font-normal group/toggle hover:bg-muted inline-flex items-center justify-center min-w-0 outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="-1" aria-pressed="true" variant="outline" size="sm" spacing="2">
                <svg className="lucide lucide-database size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                  <path d="M3 12A9 3 0 0 0 21 12"></path>
                </svg>
                <span className="max-w-40 min-w-0 truncate">
                  webhook_events
                </span>
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:bg-card data-pressed:shadow-xs data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] font-normal group/toggle hover:bg-muted inline-flex items-center justify-center min-w-0 outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="-1" aria-pressed="true" variant="outline" size="sm" spacing="2">
                <svg className="lucide lucide-globe size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
                <span className="max-w-40 min-w-0 truncate">
                  Stripe API docs
                </span>
              </ToggleGroupItem>
            </ToggleGroup>
          </header>
          <FramePanel className="p-0">
            <form>
              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="ai-chat-11-composer">
                Message Nimbus
              </FieldLabel>
              <InputGroup className="bg-transparent border-0 shadow-none" role="group">
                <textarea className="cn-input-group-textarea cn-textarea disabled:cursor-not-allowed disabled:opacity-50 field-sizing-content flex flex-1 max-h-40 min-h-16 outline-none placeholder:text-muted-foreground resize-none w-full" id="ai-chat-11-composer" placeholder="Ask anything about this incident"></textarea>
                <InputGroupAddon className="gap-1.5" role="group" data-align="block-end">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none rounded-full select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" size="icon-sm" aria-label="Attach a file" id="base-ui-_r_10_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-sm disabled:opacity-50 disabled:pointer-events-none flex gap-1.5 group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" size="sm" aria-label="Model, Claude Sonnet 5" aria-haspopup="menu" id="base-ui-_r_14_" aria-expanded="false">
                    <span className="inline-flex shrink-0 size-4" aria-hidden="true">
                      <svg className="dark:hidden size-4" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                        <title>
                          Anthropic
                        </title>
                        <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path>
                      </svg>
                      <svg className="dark:block hidden size-4" fill="#ffff" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                        <title>
                          Anthropic
                        </title>
                        <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path>
                      </svg>
                    </span>
                    <span className="max-w-24 sm:max-w-none truncate">
                      Claude Sonnet 5
                    </span>
                    <svg className="lucide lucide-chevron-down opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                  <div className="flex gap-1.5 items-center ms-auto">
                    <Kbd className="hidden sm:inline-flex">
                      Enter
                    </Kbd>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-default cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center opacity-60 outline-none rounded-full select-none shadow-none shrink-0 transition-opacity whitespace-nowrap" type="submit" tabIndex="0" size="icon-sm" aria-label="Send message" id="base-ui-_r_17_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-arrow-up size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
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
          Nimbus can be wrong. Check the run trace before you ship.
        </p>
      </div>
    </section>
  )
}
