import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/registry-neui/bases/base/neui/code-block/code-block"
import {
  Bubble,
  BubbleReactions,
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
import {
  ItemActions,
  ItemContent,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
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
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/bases/base/ui/resizable"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BubbleContent } from "@/registry/bases/radix/ui/bubble"
import { Item } from "@/registry/bases/radix/ui/item"
import { Marker } from "@/registry/bases/radix/ui/marker"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col h-svh text-foreground w-full">
      <header className="border-b flex gap-2 h-14 items-center px-3 shrink-0 sm:px-4">
        <h1 className="font-medium shrink-0 text-sm">
          {"Compare Models"}
        </h1>
        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
          {"2 exchanges"}
        </Badge>
        <div className="flex gap-1 items-center ms-auto">
          <Tooltip>
          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-secondary disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center max-md:hidden outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Lock both transcripts to one scroll position" aria-pressed="true" id="base-ui-_r_1_" baseUiTooltipTrigger="">
            <svg className="lucide lucide-link" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
          </TooltipTrigger>
          </Tooltip>
          <Button className="ms-1" type="button" tabIndex={0}>
            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <span className="max-sm:sr-only">
              {"New comparison"}
            </span>
          </Button>
        </div>
      </header>
      <ResizablePanelGroup className="flex-1 min-h-0" group="true" testid="_r_2_" id="_r_2_" style={{height: "100%", width: "100%", overflow: "hidden", display: "flex", flexFlow: "row", touchAction: "pan-y"}}>
        <ResizablePanel panel="true" testid="_r_3_" id="_r_3_" style={{minHeight: "0px", maxHeight: "100%", height: "auto", minWidth: "0px", maxWidth: "100%", width: "auto", border: "0px", padding: "0px", margin: "0px", display: "flex", overflow: "visible", flex: "50 1 0px"}}>
          <div className="min-h-0" style={{maxHeight: "100%", maxWidth: "100%", flexGrow: "1", overflow: "auto", touchAction: "pan-y"}}>
            <section className="bg-background flex flex-col h-full min-h-0 min-w-0" aria-label="Claude Sonnet 5 answers">
              <div className="border-b flex gap-2 items-center px-4 py-3 shrink-0">
                <Select>
                <SelectTrigger className="font-medium max-w-56 min-w-0 w-full" type="button" tabIndex={0} id="base-ui-_r_4_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Model, Claude Sonnet 5">
                  <SelectValue>
                    <span className="truncate">
                      {"Claude Sonnet 5"}
                    </span>
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_4_-hidden-input" tabIndex={-1} aria-hidden="true" value="claude-sonnet-5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <div className="flex gap-0.5 items-center ms-auto shrink-0">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Regenerate the Claude Sonnet 5 answer" id="base-ui-_r_8_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                      <path d="M21 3v5h-5"></path>
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                      <path d="M8 16H3v5"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More actions for Claude Sonnet 5" aria-haspopup="menu" id="base-ui-_r_c_" aria-expanded="false">
                    <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                      <circle cx={12} cy={12} r={1}></circle>
                      <circle cx={12} cy={5} r={1}></circle>
                      <circle cx={12} cy={19} r={1}></circle>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </div>
              </div>
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
                      <MessageScrollerItem className="[content-visibility:visible] animate-in duration-300 ease-out fade-in-0 flex flex-col gap-3 motion-reduce:animate-none" messageId="turn_1:a:0" scrollAnchor="false">
                        <Item className="gap-2 items-start" variant="muted" size="sm">
                          <ItemContent className="gap-1.5">
                            <ItemTitle className="font-normal line-clamp-2 text-pretty" title="attached churn-aug.csv, 18402 rows. team plan churn reads 4.1% for august vs 2.6 in july. confirm the number before we dig">
                              <span className="sr-only">
                                {"Priya Nair asked:"}
                              </span>
                              {"attached churn-aug.csv, 18402 rows. team plan churn reads 4.1% for august vs 2.6 in july. confirm the number before we dig"}
                            </ItemTitle>
                          </ItemContent>
                          <ItemActions>
                            <span className="tabular-nums text-muted-foreground/70 text-xs">
                              {"10:52"}
                            </span>
                          </ItemActions>
                        </Item>
                        <Message className="group/turn" data-align="start" role="group" aria-label="Claude Sonnet 5">
                          <MessageContent className="gap-1">
                            <Bubble className="w-full" variant="ghost" data-align="start">
                              <BubbleContent className="space-y-3" answerBody="true">
                                <p className="whitespace-pre-wrap">
                                  {"Confirmed at the account level: 21 cancellations against 517 team accounts active on Aug 1, so 4.06 percent.\n\nOne thing to fix before Thursday. Three of the 21 rows are workspaces under one parent account,"}
                                  <code className="bg-muted font-mono px-1 py-0.5 rounded-sm text-[0.85em]">
                                    {"acct_4f19c2"}
                                  </code>
                                  {", which cancelled once. Counted by customer it is 19 of 517, or 3.7 percent. July has no duplicates, so 2.63 percent stands."}
                                </p>
                              </BubbleContent>
                              <BubbleReactions data-align="start" data-side="bottom" role="img" aria-label="Reactions: 🔥">
                                <span>
                                  {"🔥"}
                                </span>
                              </BubbleReactions>
                            </Bubble>
                            <MessageFooter className="flex-wrap gap-1.5 mt-3 text-muted-foreground text-xs">
                              <span className="tabular-nums">
                                {"2.1s"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="tabular-nums">
                                {"148 tokens"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="tabular-nums">
                                {"94 tok/s"}
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                                <svg className="lucide lucide-check size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                  <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                {"Preferred"}
                              </Badge>
                              <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto ms-auto opacity-0 pointer-events-none transition-opacity">
                                <Button type="button" tabIndex={0} aria-label="Copy answer">
                                  <svg className="lucide lucide-copy size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                    <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                  </svg>
                                </Button>
                                <Button type="button" tabIndex={0} aria-label="Like answer" aria-pressed="false">
                                  <svg className="lucide lucide-thumbs-up size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsUpIcon" tabler="IconThumbUp" hugeicons="ThumbsUpIcon" phosphor="ThumbsUpIcon" remixicon="RiThumbUpLine" aria-hidden="true">
                                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                                    <path d="M7 10v12"></path>
                                  </svg>
                                </Button>
                                <Button type="button" tabIndex={0} aria-label="Dislike answer" aria-pressed="false">
                                  <svg className="lucide lucide-thumbs-down size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsDownIcon" tabler="IconThumbDown" hugeicons="ThumbsDownIcon" phosphor="ThumbsDownIcon" remixicon="RiThumbDownLine" aria-hidden="true">
                                    <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path>
                                    <path d="M17 14V2"></path>
                                  </svg>
                                </Button>
                              </span>
                            </MessageFooter>
                          </MessageContent>
                        </Message>
                      </MessageScrollerItem>
                      <MessageScrollerItem className="[content-visibility:visible] animate-in duration-300 ease-out fade-in-0 flex flex-col gap-3 motion-reduce:animate-none" messageId="turn_2:a:1" scrollAnchor="false">
                        <Item className="gap-2 items-start" variant="muted" size="sm">
                          <ItemContent className="gap-1.5">
                            <ItemTitle className="font-normal line-clamp-2 text-pretty" title="ok, what's driving it? ranked drivers, not a summary. i present this thursday">
                              <span className="sr-only">
                                {"Priya Nair asked:"}
                              </span>
                              {"ok, what's driving it? ranked drivers, not a summary. i present this thursday"}
                            </ItemTitle>
                          </ItemContent>
                          <ItemActions>
                            <span className="tabular-nums text-muted-foreground/70 text-xs">
                              {"10:56"}
                            </span>
                          </ItemActions>
                        </Item>
                        <Message className="group/turn" data-align="start" role="group" aria-label="Claude Sonnet 5">
                          <MessageContent className="gap-1">
                            <Bubble className="w-full" variant="ghost" data-align="start">
                              <BubbleContent className="space-y-3" answerBody="true">
                                <p className="whitespace-pre-wrap">
                                  {"Ranked by share of the 21 cancellations."}
                                </p>
                                <div className="cn-table-container">
                                  <Table className="text-xs">
                                    <TableCaption className="sr-only">
                                      {"August team plan cancellations by driver"}
                                    </TableCaption>
                                    <TableHeader>
                                      <TableRow>
                                        <TableHead aria-sort="none">
                                          <Button className="-mx-2 font-medium gap-1 h-7 px-2 text-xs" type="button" tabIndex={0} aria-label="Sort by Driver">
                                            {"Driver"}
                                            <svg className="lucide lucide-chevrons-up-down opacity-40 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </TableHead>
                                        <TableHead className="text-end" aria-sort="none">
                                          <Button className="-mx-2 flex-row-reverse font-medium gap-1 h-7 px-2 text-xs" type="button" tabIndex={0} aria-label="Sort by Accounts">
                                            {"Accounts"}
                                            <svg className="lucide lucide-chevrons-up-down opacity-40 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </TableHead>
                                        <TableHead className="text-end" aria-sort="none">
                                          <Button className="-mx-2 flex-row-reverse font-medium gap-1 h-7 px-2 text-xs" type="button" tabIndex={0} aria-label="Sort by Median days">
                                            {"Median days"}
                                            <svg className="lucide lucide-chevrons-up-down opacity-40 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </TableHead>
                                      </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                      <TableRow>
                                        <TableCell className="font-medium text-foreground">
                                          {"Promo renewal"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"9"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"6"}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium text-foreground">
                                          {"Seat floor"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"5"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"11"}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium text-foreground">
                                          {"Missing SSO"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"4"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"19"}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium text-foreground">
                                          {"No signal"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"3"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"14"}
                                        </TableCell>
                                      </TableRow>
                                    </TableBody>
                                    <TableFooter>
                                      <TableRow>
                                        <TableCell>
                                          {"Total"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"21"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end"></TableCell>
                                      </TableRow>
                                    </TableFooter>
                                  </Table>
                                </div>
                                <p className="whitespace-pre-wrap">
                                  {"All nine promo accounts signed in March on the six month discount and cancelled within days of the first full price invoice. The seat floor group dropped under five seats first, so the plan cancelled them rather than downgrading. Three of the four SSO accounts had opened a ticket in Q2."}
                                </p>
                                <CodeBlock className="[--code-block-bg:var(--card)] [--code-block-caret-color:var(--primary)] [--code-block-copy-inset:--spacing(2)] [--code-block-copy-top:var(--code-block-copy-inset)] [--code-block-diff-add-bg:color-mix(in_oklch,var(--success)_8%,transparent)] [--code-block-diff-remove-bg:color-mix(in_oklch,var(--destructive)_8%,transparent)] [--code-block-error-bg:color-mix(in_oklch,var(--destructive)_8%,transparent)] [--code-block-expand-clearance:--spacing(9)] [--code-block-fold-width:--spacing(4.5)] [--code-block-font-size:0.8125rem] [--code-block-gutter-gap:--spacing(2.5)] [--code-block-gutter-width:--spacing(9)] [--code-block-header-height:--spacing(9)] [--code-block-highlight-bar:color-mix(in_oklch,var(--primary)_60%,transparent)] [--code-block-highlight-bg:color-mix(in_oklch,var(--primary)_6%,transparent)] [--code-block-info-bg:color-mix(in_oklch,var(--info)_8%,transparent)] [--code-block-line-height:1.5rem] [--code-block-number-pad:var(--code-block-gutter-gap)] [--code-block-padding:--spacing(3)] [--code-block-warning-bg:color-mix(in_oklch,var(--warning)_10%,transparent)] bg-card bg-clip-padding border border-border dark:[--code-block-diff-add-bg:color-mix(in_oklch,var(--success)_12%,transparent)] dark:[--code-block-diff-remove-bg:color-mix(in_oklch,var(--destructive)_12%,transparent)] dark:[--code-block-error-bg:color-mix(in_oklch,var(--destructive)_12%,transparent)] dark:[--code-block-highlight-bg:color-mix(in_oklch,var(--primary)_12%,transparent)] dark:[--code-block-info-bg:color-mix(in_oklch,var(--info)_12%,transparent)] dark:[--code-block-warning-bg:color-mix(in_oklch,var(--warning)_14%,transparent)] data-[gutter-channel]:[--code-block-number-pad:calc(var(--code-block-gutter-gap)+var(--code-block-fold-width))] data-[has-diff]:[--code-block-gutter-gap:--spacing(4)] data-[has-header]:[--code-block-copy-top:calc(var(--code-block-header-height)+1px+var(--code-block-copy-inset))] flex flex-col group/code-block min-w-0 relative rounded-(--code-block-radius) style-luma:[--code-block-radius:var(--radius-2xl)] style-lyra:[--code-block-radius:0px] style-maia:[--code-block-radius:var(--radius-2xl)] style-mira:[--code-block-radius:var(--radius-lg)] style-nova:[--code-block-radius:var(--radius-lg)] style-rhea:[--code-block-radius:var(--radius-xl)] style-sera:[--code-block-radius:0px] style-vega:[--code-block-radius:var(--radius-lg)] text-card-foreground text-left w-full" variant="default" hasHeader="true">
                                  <CodeBlockHeader>
                                    <CodeBlockTitle>
                                      {"churn-cohorts.sql"}
                                    </CodeBlockTitle>
                                    <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-3.5 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center ms-auto outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} data-position="inline" aria-label="Copy code">
                                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                      </svg>
                                    </button>
                                  </CodeBlockHeader>
                                  <ScrollArea className="**:data-[slot=scroll-area-viewport]:max-h-72 rounded-(--code-block-radius)" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYStart="">
                                    <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_12_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "48px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-y="" data-overflow-y-start="">
                                      <CodeBlockContent className="min-w-0 relative rounded-[inherit]">
                                        <span className="sr-only" role="status" aria-live="polite">
                                          {"Code generation complete, 13 lines."}
                                        </span>
                                        <div className="focus-visible:ring-[3px] focus-visible:ring-ring/50 min-w-0 outline-none relative rounded-[inherit]" id="_r_11_" role="region" aria-label="sql code" tabIndex={0}>
                                          <pre className="[&_[data-slot=code-block-token]]:text-[color:var(--cb-c,currentColor)] dark:[&_[data-slot=code-block-token]]:text-[color:var(--cb-cd,currentColor)] font-mono min-w-full pl-(--code-block-gutter-width) py-(--code-block-padding) text-(length:--code-block-font-size) w-max" dir="ltr" data-code-line-numbers="true" style={{"--code-block-gutter-width": "calc(2ch + var(--code-block-gutter-gap) + var(--code-block-padding))", counterReset: "cb-line 0"}}>
                                            <code>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="1" id="_r_11_-L1" style={{counterReset: "cb-line 0"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"select"}
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="2" id="_r_11_-L2" style={{counterReset: "cb-line 1"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"case"}
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="3" id="_r_11_-L3" style={{counterReset: "cb-line 2"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"when"}
                                                  </span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    {"promo_code"}
                                                  </span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"="}
                                                  </span>
                                                  <span style={{"--cb-c": "#032F62", "--cb-cd": "#9ECBFF"}}>
                                                    {"'SPRING40'"}
                                                  </span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"then"}
                                                  </span>
                                                  <span style={{"--cb-c": "#032F62", "--cb-cd": "#9ECBFF"}}>
                                                    {"'promo_renewal'"}
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="4" id="_r_11_-L4" style={{counterReset: "cb-line 3"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"when"}
                                                  </span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    {"seats_at_cancel"}
                                                  </span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"<"}
                                                  </span>
                                                  <span style={{"--cb-c": "#005CC5", "--cb-cd": "#79B8FF"}}>
                                                    {"5"}
                                                  </span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"then"}
                                                  </span>
                                                  <span style={{"--cb-c": "#032F62", "--cb-cd": "#9ECBFF"}}>
                                                    {"'seat_floor'"}
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="5" id="_r_11_-L5" style={{counterReset: "cb-line 4"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"when"}
                                                  </span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    {"exit_reason ilike"}
                                                  </span>
                                                  <span style={{"--cb-c": "#032F62", "--cb-cd": "#9ECBFF"}}>
                                                    {"'%sso%'"}
                                                  </span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"then"}
                                                  </span>
                                                  <span style={{"--cb-c": "#032F62", "--cb-cd": "#9ECBFF"}}>
                                                    {"'sso_gap'"}
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="6" id="_r_11_-L6" style={{counterReset: "cb-line 5"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"else"}
                                                  </span>
                                                  <span style={{"--cb-c": "#032F62", "--cb-cd": "#9ECBFF"}}>
                                                    {"'no_signal'"}
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="7" id="_r_11_-L7" style={{counterReset: "cb-line 6"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"end"}
                                                  </span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"as"}
                                                  </span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    {"driver,"}
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="8" id="_r_11_-L8" style={{counterReset: "cb-line 7"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#005CC5", "--cb-cd": "#79B8FF"}}>
                                                    {"count"}
                                                  </span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    {"("}
                                                  </span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"*"}
                                                  </span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    {")"}
                                                  </span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"as"}
                                                  </span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    {"accounts,"}
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="9" id="_r_11_-L9" style={{counterReset: "cb-line 8"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#005CC5", "--cb-cd": "#79B8FF"}}>
                                                    {"round"}
                                                  </span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    {"("}
                                                  </span>
                                                  <span style={{"--cb-c": "#005CC5", "--cb-cd": "#79B8FF"}}>
                                                    {"avg"}
                                                  </span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    {"(days_since_seat_change),"}
                                                  </span>
                                                  <span style={{"--cb-c": "#005CC5", "--cb-cd": "#79B8FF"}}>
                                                    {"1"}
                                                  </span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    {")"}
                                                  </span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"as"}
                                                  </span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"days"}
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="10" id="_r_11_-L10" style={{counterReset: "cb-line 9"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"from"}
                                                  </span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    {"churn_aug"}
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="11" id="_r_11_-L11" style={{counterReset: "cb-line 10"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"where"}
                                                  </span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    {"plan_tier"}
                                                  </span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"="}
                                                  </span>
                                                  <span style={{"--cb-c": "#032F62", "--cb-cd": "#9ECBFF"}}>
                                                    {"'team'"}
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="12" id="_r_11_-L12" style={{counterReset: "cb-line 11"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"and"}
                                                  </span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    {"cancelled_at"}
                                                  </span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {">="}
                                                  </span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"date"}
                                                  </span>
                                                  <span style={{"--cb-c": "#032F62", "--cb-cd": "#9ECBFF"}}>
                                                    {"'2026-08-01'"}
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="13" id="_r_11_-L13" style={{counterReset: "cb-line 12"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"group by"}
                                                  </span>
                                                  <span style={{"--cb-c": "#005CC5", "--cb-cd": "#79B8FF"}}>
                                                    {"1"}
                                                  </span>
                                                </span>
                                              </span>
                                              <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="14" id="_r_11_-L14" style={{counterReset: "cb-line 13"}}>
                                                <span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"order by"}
                                                  </span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    {"accounts"}
                                                  </span>
                                                  <span style={{"--cb-c": "#D73A49", "--cb-cd": "#F97583"}}>
                                                    {"desc"}
                                                  </span>
                                                  <span style={{"--cb-c": "#24292E", "--cb-cd": "#E1E4E8"}}>
                                                    {";"}
                                                  </span>
                                                </span>
                                              </span>
                                            </code>
                                          </pre>
                                        </div>
                                      </CodeBlockContent>
                                    </div>
                                    <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-start="" data-id="base-ui-_r_12_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "245.14285714285714px"}}>
                                      <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 40.8571px, 0px)"}}></div>
                                    </div>
                                  </ScrollArea>
                                </CodeBlock>
                                <p className="whitespace-pre-wrap">
                                  {"Run it against the same file and you should get 9, 5, 4 and 3. The promo cohort is the only one you can act on before Q4."}
                                </p>
                              </BubbleContent>
                            </Bubble>
                            <MessageFooter className="flex-wrap gap-1.5 text-muted-foreground text-xs">
                              <span className="tabular-nums">
                                {"3.1s"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="tabular-nums">
                                {"612 tokens"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="tabular-nums">
                                {"249 tok/s"}
                              </span>
                              <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto ms-auto opacity-0 pointer-events-none transition-opacity">
                                <Button type="button" tabIndex={0} aria-label="Copy answer">
                                  <svg className="lucide lucide-copy size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                    <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                  </svg>
                                </Button>
                                <Button type="button" tabIndex={0} aria-label="Like answer" aria-pressed="false">
                                  <svg className="lucide lucide-thumbs-up size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsUpIcon" tabler="IconThumbUp" hugeicons="ThumbsUpIcon" phosphor="ThumbsUpIcon" remixicon="RiThumbUpLine" aria-hidden="true">
                                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                                    <path d="M7 10v12"></path>
                                  </svg>
                                </Button>
                                <Button type="button" tabIndex={0} aria-label="Dislike answer" aria-pressed="false">
                                  <svg className="lucide lucide-thumbs-down size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsDownIcon" tabler="IconThumbDown" hugeicons="ThumbsDownIcon" phosphor="ThumbsDownIcon" remixicon="RiThumbDownLine" aria-hidden="true">
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
                  <MessageScrollerButton className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bottom-3 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none rounded-full select-none shadow-sm shrink-0 whitespace-nowrap" type="button" tabIndex={-1} data-active="false" direction="end" inert="" variant="outline" size="icon-sm">
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
              <div className="border-t flex gap-2 items-center px-4 py-2 shrink-0">
                <Button type="button" tabIndex={0}>
                  <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" data-icon="inline-start" aria-hidden="true">
                    <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                  </svg>
                  {"Copy"}
                </Button>
                <span className="flex gap-1.5 items-center min-w-0 ms-auto text-muted-foreground text-xs">
                  <span className="shrink-0 tabular-nums">
                    {"2 answers"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="tabular-nums truncate">
                    {"760 tokens"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="shrink-0 tabular-nums">
                    {"$0.018"}
                  </span>
                </span>
              </div>
            </section>
          </div>
        </ResizablePanel>
        <ResizableHandle className="after:w-4 cursor-col-resize data-[separator=active]:bg-primary data-[separator=hover]:bg-primary hover:bg-primary transition-colors" title="Drag to resize the panes" aria-orientation="vertical" separator="inactive" testid="_r_e_" id="_r_e_" role="separator" tabIndex={0} style={{flex: "0 0 auto", touchAction: "none"}} aria-controls="_r_3_" aria-valuemax="78.125" aria-valuemin="21.875" aria-valuenow="50"></ResizableHandle>
        <ResizablePanel panel="true" testid="_r_f_" id="_r_f_" style={{minHeight: "0px", maxHeight: "100%", height: "auto", minWidth: "0px", maxWidth: "100%", width: "auto", border: "0px", padding: "0px", margin: "0px", display: "flex", overflow: "visible", flex: "50 1 0px"}}>
          <div className="min-h-0" style={{maxHeight: "100%", maxWidth: "100%", flexGrow: "1", overflow: "auto", touchAction: "pan-y"}}>
            <section className="bg-background flex flex-col h-full min-h-0 min-w-0" aria-label="GPT-5.1 answers">
              <div className="border-b flex gap-2 items-center px-4 py-3 shrink-0">
                <Select>
                <SelectTrigger className="font-medium max-w-56 min-w-0 w-full" type="button" tabIndex={0} id="base-ui-_r_g_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Model, GPT-5.1">
                  <SelectValue>
                    <span className="truncate">
                      {"GPT-5.1"}
                    </span>
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_g_-hidden-input" tabIndex={-1} aria-hidden="true" value="gpt-5-1" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <div className="flex gap-0.5 items-center ms-auto shrink-0">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Regenerate the GPT-5.1 answer" id="base-ui-_r_k_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                      <path d="M21 3v5h-5"></path>
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                      <path d="M8 16H3v5"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More actions for GPT-5.1" aria-haspopup="menu" id="base-ui-_r_o_" aria-expanded="false">
                    <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                      <circle cx={12} cy={12} r={1}></circle>
                      <circle cx={12} cy={5} r={1}></circle>
                      <circle cx={12} cy={19} r={1}></circle>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </div>
              </div>
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
                      <MessageScrollerItem className="[content-visibility:visible] animate-in duration-300 ease-out fade-in-0 flex flex-col gap-3 motion-reduce:animate-none" messageId="turn_1:b:0" scrollAnchor="false">
                        <Item className="gap-2 items-start" variant="muted" size="sm">
                          <ItemContent className="gap-1.5">
                            <ItemTitle className="font-normal line-clamp-2 text-pretty" title="attached churn-aug.csv, 18402 rows. team plan churn reads 4.1% for august vs 2.6 in july. confirm the number before we dig">
                              <span className="sr-only">
                                {"Priya Nair asked:"}
                              </span>
                              {"attached churn-aug.csv, 18402 rows. team plan churn reads 4.1% for august vs 2.6 in july. confirm the number before we dig"}
                            </ItemTitle>
                          </ItemContent>
                          <ItemActions>
                            <span className="tabular-nums text-muted-foreground/70 text-xs">
                              {"10:52"}
                            </span>
                          </ItemActions>
                        </Item>
                        <Message className="group/turn" data-align="start" role="group" aria-label="GPT-5.1">
                          <MessageContent className="gap-1">
                            <Bubble className="w-full" variant="ghost" data-align="start">
                              <BubbleContent className="space-y-3" answerBody="true">
                                <p className="whitespace-pre-wrap">
                                  {"4.1 percent is right for the definition the file uses and wrong for the one the dashboard uses.\n\nThe file counts accounts active on Aug 1, which is 517, giving 21 of 517 or 4.06 percent. The dashboard divides by the average account count across the month, which is 526, giving 3.99 percent. Both are defensible. They are not the same metric, so the slide should name which one it carries.\n\nSeparately, 17 rows have a null"}
                                  <code className="bg-muted font-mono px-1 py-0.5 rounded-sm text-[0.85em]">
                                    {"plan_tier"}
                                  </code>
                                  {"and sit outside both. If four of those are team accounts the headline moves to 4.75 percent."}
                                </p>
                              </BubbleContent>
                            </Bubble>
                            <MessageFooter className="flex-wrap gap-1.5 text-muted-foreground text-xs">
                              <span className="tabular-nums">
                                {"2.9s"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="tabular-nums">
                                {"172 tokens"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="tabular-nums">
                                {"81 tok/s"}
                              </span>
                              <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto ms-auto opacity-0 pointer-events-none transition-opacity">
                                <Button type="button" tabIndex={0} aria-label="Copy answer">
                                  <svg className="lucide lucide-copy size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                    <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                  </svg>
                                </Button>
                                <Button type="button" tabIndex={0} aria-label="Like answer" aria-pressed="false">
                                  <svg className="lucide lucide-thumbs-up size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsUpIcon" tabler="IconThumbUp" hugeicons="ThumbsUpIcon" phosphor="ThumbsUpIcon" remixicon="RiThumbUpLine" aria-hidden="true">
                                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                                    <path d="M7 10v12"></path>
                                  </svg>
                                </Button>
                                <Button type="button" tabIndex={0} aria-label="Dislike answer" aria-pressed="false">
                                  <svg className="lucide lucide-thumbs-down size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsDownIcon" tabler="IconThumbDown" hugeicons="ThumbsDownIcon" phosphor="ThumbsDownIcon" remixicon="RiThumbDownLine" aria-hidden="true">
                                    <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path>
                                    <path d="M17 14V2"></path>
                                  </svg>
                                </Button>
                              </span>
                            </MessageFooter>
                          </MessageContent>
                        </Message>
                      </MessageScrollerItem>
                      <MessageScrollerItem className="[content-visibility:visible] animate-in duration-300 ease-out fade-in-0 flex flex-col gap-3 motion-reduce:animate-none" messageId="turn_2:b:1" scrollAnchor="false">
                        <Item className="gap-2 items-start" variant="muted" size="sm">
                          <ItemContent className="gap-1.5">
                            <ItemTitle className="font-normal line-clamp-2 text-pretty" title="ok, what's driving it? ranked drivers, not a summary. i present this thursday">
                              <span className="sr-only">
                                {"Priya Nair asked:"}
                              </span>
                              {"ok, what's driving it? ranked drivers, not a summary. i present this thursday"}
                            </ItemTitle>
                          </ItemContent>
                          <ItemActions>
                            <span className="tabular-nums text-muted-foreground/70 text-xs">
                              {"10:56"}
                            </span>
                          </ItemActions>
                        </Item>
                        <Message className="group/turn" data-align="start" role="group" aria-label="GPT-5.1">
                          <MessageContent className="gap-1">
                            <Bubble className="w-full" variant="ghost" data-align="start">
                              <BubbleContent className="space-y-3" answerBody="true">
                                <p className="whitespace-pre-wrap">
                                  {"Ranking raw counts puts the promo cohort on top, and I think that is the wrong lead. July already carried six SPRING40 cancellations, the February signups hitting the same six month renewal. August has nine, the March signups. The cohort is arriving in two waves, not failing at a new rate.\n\nMeasured as excess over July, which is the only number that explains 2.6 becoming 4.1:"}
                                </p>
                                <div className="cn-table-container">
                                  <Table className="text-xs">
                                    <TableCaption className="sr-only">
                                      {"Cancellations by driver, July against August"}
                                    </TableCaption>
                                    <TableHeader>
                                      <TableRow>
                                        <TableHead aria-sort="none">
                                          <Button className="-mx-2 font-medium gap-1 h-7 px-2 text-xs" type="button" tabIndex={0} aria-label="Sort by Driver">
                                            {"Driver"}
                                            <svg className="lucide lucide-chevrons-up-down opacity-40 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </TableHead>
                                        <TableHead className="text-end" aria-sort="none">
                                          <Button className="-mx-2 flex-row-reverse font-medium gap-1 h-7 px-2 text-xs" type="button" tabIndex={0} aria-label="Sort by July">
                                            {"July"}
                                            <svg className="lucide lucide-chevrons-up-down opacity-40 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </TableHead>
                                        <TableHead className="text-end" aria-sort="none">
                                          <Button className="-mx-2 flex-row-reverse font-medium gap-1 h-7 px-2 text-xs" type="button" tabIndex={0} aria-label="Sort by August">
                                            {"August"}
                                            <svg className="lucide lucide-chevrons-up-down opacity-40 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </TableHead>
                                        <TableHead className="text-end" aria-sort="none">
                                          <Button className="-mx-2 flex-row-reverse font-medium gap-1 h-7 px-2 text-xs" type="button" tabIndex={0} aria-label="Sort by Change">
                                            {"Change"}
                                            <svg className="lucide lucide-chevrons-up-down opacity-40 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                              <path d="m7 15 5 5 5-5"></path>
                                              <path d="m7 9 5-5 5 5"></path>
                                            </svg>
                                          </Button>
                                        </TableHead>
                                      </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                      <TableRow>
                                        <TableCell className="font-medium text-foreground">
                                          {"Seat reductions"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"1"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"5"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"4"}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium text-foreground">
                                          {"Promo renewals"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"6"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"9"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"3"}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium text-foreground">
                                          {"Missing SSO"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"3"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"4"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"1"}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell className="font-medium text-foreground">
                                          {"No signal"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"3"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"3"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"0"}
                                        </TableCell>
                                      </TableRow>
                                    </TableBody>
                                    <TableFooter>
                                      <TableRow>
                                        <TableCell>
                                          {"Total"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"13"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"21"}
                                        </TableCell>
                                        <TableCell className="tabular-nums text-end">
                                          {"8"}
                                        </TableCell>
                                      </TableRow>
                                    </TableFooter>
                                  </Table>
                                </div>
                                <p className="whitespace-pre-wrap">
                                  {"Seat reductions are the actual change, and every one of the five fell below five seats first. The promo delta shrinks as the cohort empties in October, and plus one on SSO is noise at this sample size whatever the exit survey says.\n\nOne caveat: the 17 null"}
                                  <code className="bg-muted font-mono px-1 py-0.5 rounded-sm text-[0.85em]">
                                    {"plan_tier"}
                                  </code>
                                  {"rows are in none of these buckets. Worth resolving before the deck, because four team accounts in there move the headline past 4.7 percent.\n\nIf the seat floor is the driver, the fix is a packaging change rather than a save play, and that is a longer conversation than Thursday."}
                                </p>
                              </BubbleContent>
                            </Bubble>
                            <MessageFooter className="flex-wrap gap-1.5 text-muted-foreground text-xs">
                              <span className="tabular-nums">
                                {"4.6s"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="tabular-nums">
                                {"848 tokens"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="tabular-nums">
                                {"230 tok/s"}
                              </span>
                              <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/turn:opacity-100 group-hover/turn:pointer-events-auto items-center max-md:opacity-100 max-md:pointer-events-auto ms-auto opacity-0 pointer-events-none transition-opacity">
                                <Button type="button" tabIndex={0} aria-label="Copy answer">
                                  <svg className="lucide lucide-copy size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                    <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                  </svg>
                                </Button>
                                <Button type="button" tabIndex={0} aria-label="Like answer" aria-pressed="false">
                                  <svg className="lucide lucide-thumbs-up size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsUpIcon" tabler="IconThumbUp" hugeicons="ThumbsUpIcon" phosphor="ThumbsUpIcon" remixicon="RiThumbUpLine" aria-hidden="true">
                                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                                    <path d="M7 10v12"></path>
                                  </svg>
                                </Button>
                                <Button type="button" tabIndex={0} aria-label="Dislike answer" aria-pressed="false">
                                  <svg className="lucide lucide-thumbs-down size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsDownIcon" tabler="IconThumbDown" hugeicons="ThumbsDownIcon" phosphor="ThumbsDownIcon" remixicon="RiThumbDownLine" aria-hidden="true">
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
                  <MessageScrollerButton className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bottom-3 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none rounded-full select-none shadow-sm shrink-0 whitespace-nowrap" type="button" tabIndex={-1} data-active="false" direction="end" variant="outline" size="icon-sm" inert="">
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
              <div className="border-t flex gap-2 items-center px-4 py-2 shrink-0">
                <Button type="button" tabIndex={0}>
                  <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" data-icon="inline-start" aria-hidden="true">
                    <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                  </svg>
                  {"Copy"}
                </Button>
                <span className="flex gap-1.5 items-center min-w-0 ms-auto text-muted-foreground text-xs">
                  <span className="shrink-0 tabular-nums">
                    {"2 answers"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="tabular-nums truncate">
                    {"1,020 tokens"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="shrink-0 tabular-nums">
                    {"$0.013"}
                  </span>
                </span>
              </div>
            </section>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <div className="border-t flex flex-wrap gap-x-3 gap-y-2 items-center justify-center min-h-19 px-4 py-2 shrink-0">
        <p className="tabular-nums text-sm" role="status">
          {"Claude Sonnet 5: 1.5s faster, $0.003 more"}
        </p>
        <span className="bg-muted-foreground/40 max-sm:hidden rounded-full shrink-0 size-1" aria-hidden="true"></span>
        <div className="flex gap-2 items-center min-w-0">
          <span className="text-muted-foreground text-xs">
            {"Prefer"}
          </span>
          <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Prefer an answer" style={{"--gap": "0"}}>
            <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex={0} aria-pressed="false" variant="outline" size="sm" spacing="0">
              <span className="max-w-36 truncate">
                {"Claude Sonnet 5"}
              </span>
            </ToggleGroupItem>
            <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="outline" size="sm" spacing="0">
              <span className="max-w-36 truncate">
                {"GPT-5.1"}
              </span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      <div className="border-t flex flex-col gap-2 px-3 py-3 shrink-0 sm:px-4">
        <form>
          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="ai-chat-7-prompt">
            {"Prompt both models"}
          </FieldLabel>
          <InputGroup role="group">
            <textarea className="cn-input-group-textarea cn-textarea disabled:cursor-not-allowed disabled:opacity-50 field-sizing-content flex flex-1 max-h-32 min-h-10 outline-none placeholder:text-muted-foreground resize-none w-full" id="ai-chat-7-prompt" placeholder="Ask both models about this file..."></textarea>
            <InputGroupAddon className="gap-1" role="group" data-align="block-end">
              <span className="border border-border flex gap-1.5 items-center min-w-0 px-2.5 py-1 rounded-full text-xs">
                <svg className="lucide lucide-file-text shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File01Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
                <span className="font-mono text-foreground truncate">
                  {"churn-aug.csv"}
                </span>
                <span className="bg-muted-foreground/40 max-sm:hidden rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="max-sm:hidden tabular-nums text-muted-foreground">
                  {"18,402 rows"}
                </span>
              </span>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none rounded-full select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} size="icon-sm" aria-label="Attach a file" aria-haspopup="menu" id="base-ui-_r_t_" aria-expanded="false">
                <svg className="lucide lucide-paperclip" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" aria-hidden="true">
                  <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
              <div className="flex gap-1 items-center ms-auto">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} size="icon-sm" aria-label="Run the last prompt again" id="base-ui-_r_16_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                    <path d="M21 3v5h-5"></path>
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                    <path d="M8 16H3v5"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-default cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="submit" tabIndex={0} size="icon-sm" aria-label="Send to both models" id="base-ui-_r_10_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                    <path d="m5 12 7-7 7 7"></path>
                    <path d="M12 19V5"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </div>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </div>
    </div>
  )
}
