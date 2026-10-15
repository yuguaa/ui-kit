import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex flex-col min-h-svh w-full">
      <div className="[--redline-header:--spacing(26)] [--redline-offset:0px] bg-background flex flex-1 flex-col text-foreground w-full" style={{"--redline-header": "102px"}}>
        <header className="bg-background border-b sticky top-0 z-20">
          <div className="flex gap-3 items-center min-h-14 px-4 py-2 sm:px-6">
            <div className="flex flex-1 flex-col gap-px min-w-0">
              <div className="flex gap-2 items-center min-w-0">
                <h1 className="font-medium text-base/5 truncate">
                  Master Services Agreement
                </h1>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 max-sm:sr-only min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                  In Review
                </Badge>
              </div>
              <p className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-center text-muted-foreground text-xs">
                <span>
                  Halden Freight
                </span>
                <span className="gap-1.5 inline-flex items-center">
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  Round 3
                </span>
                <span className="gap-1.5 inline-flex items-center max-sm:hidden">
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  Edited 9:30 AM
                </span>
              </p>
            </div>
            <Tooltip>
            <TooltipTrigger className="*:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background -space-x-2 cn-avatar-group flex group/avatar-group max-md:hidden" role="group" tabIndex="0" aria-label="Shared with Sofia Marques, Priya Raman, and Daniel Okafor" id="base-ui-_r_1_" baseUiTooltipTrigger="">
              <Avatar size="sm">
                <AvatarImage alt="Sofia Marques" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage alt="Priya Raman" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage alt="Daniel Okafor" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
            </TooltipTrigger>
            </Tooltip>
            <div className="flex gap-1.5 items-center shrink-0">
              <Select>
              <SelectTrigger type="button" tabIndex="0" id="base-ui-_r_2_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Document mode" extracted="1">
                <SelectValue>
                  <svg className="lucide lucide-message-square-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareTextIcon" tabler="IconMessageDots" hugeicons="Comment01Icon" phosphor="ChatTextIcon" remixicon="RiMessage3Line" aria-hidden="true">
                    <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                    <path d="M7 11h10"></path>
                    <path d="M7 15h6"></path>
                    <path d="M7 7h8"></path>
                  </svg>
                  <span className="max-sm:sr-only">
                    Suggesting
                  </span>
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  ▼
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_2_-hidden-input" tabIndex="-1" aria-hidden="true" value="suggesting" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Document actions" aria-haspopup="menu" id="base-ui-_r_8_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
          </div>
          <div className="border-t flex gap-2 items-center px-4 py-2 sm:px-6">
            <div className="flex flex-1 gap-1 items-center min-w-0 no-scrollbar overflow-x-auto overflow-y-hidden supports-[animation-timeline:scroll()]:scroll-fade-x" role="toolbar" aria-orientation="horizontal" aria-label="Formatting">
              <div className="flex gap-0.5 items-center shrink-0" role="group" aria-label="History">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" disabled="" tabIndex="-1" disabled aria-label="Undo" toolbarItem="" id="base-ui-_r_b_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-undo-2 lucide-undo2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Undo2Icon" tabler="IconArrowBackUp" hugeicons="Undo02Icon" phosphor="ArrowUUpLeftIcon" remixicon="RiArrowGoBackLine" aria-hidden="true">
                    <path d="M9 14 4 9l5-5"></path>
                    <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" disabled="" tabIndex="-1" disabled aria-label="Redo" toolbarItem="" id="base-ui-_r_d_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-redo-2 lucide-redo2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Redo2Icon" tabler="IconArrowForwardUp" hugeicons="Redo02Icon" phosphor="ArrowUUpRightIcon" remixicon="RiArrowGoForwardLine" aria-hidden="true">
                    <path d="m15 14 5-5-5-5"></path>
                    <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </div>
              <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-between outline-none select-none shrink-0 sm:w-28 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Block type, Text" toolbarItem="" aria-haspopup="menu" id="base-ui-_r_h_" aria-expanded="false">
                <span className="flex sm:hidden">
                  <svg className="lucide lucide-type" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TypeIcon" tabler="IconLetterT" hugeicons="TextIcon" phosphor="TextTIcon" remixicon="RiText" aria-hidden="true">
                    <path d="M12 4v16"></path>
                    <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path>
                    <path d="M9 20h6"></path>
                  </svg>
                </span>
                <span className="max-sm:hidden truncate">
                  Text
                </span>
                <svg className="lucide lucide-chevron-down opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
              <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              <div className="flex gap-0.5 items-center shrink-0" role="group" aria-label="Text style">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Bold" toolbarItem="" id="base-ui-_r_k_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-bold" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BoldIcon" tabler="IconBold" hugeicons="TextBoldIcon" phosphor="TextBIcon" remixicon="RiBold" aria-hidden="true">
                    <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Italic" toolbarItem="" id="base-ui-_r_n_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-italic" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ItalicIcon" tabler="IconItalic" hugeicons="TextItalicIcon" phosphor="TextItalicIcon" remixicon="RiItalic" aria-hidden="true">
                    <line x1="19" x2="10" y1="4" y2="4"></line>
                    <line x1="14" x2="5" y1="20" y2="20"></line>
                    <line x1="15" x2="9" y1="4" y2="20"></line>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Underline" toolbarItem="" id="base-ui-_r_q_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-underline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UnderlineIcon" tabler="IconUnderline" hugeicons="TextUnderlineIcon" phosphor="TextUnderlineIcon" remixicon="RiUnderline" aria-hidden="true">
                    <path d="M6 4v6a6 6 0 0 0 12 0V4"></path>
                    <line x1="4" x2="20" y1="20" y2="20"></line>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="flex" id="base-ui-_r_u_" baseUiTooltipTrigger="">
                  <Popover>
                  <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Link" toolbarItem="" baseUiClickTrigger="" id="base-ui-_r_v_" aria-haspopup="dialog" aria-expanded="false">
                    <svg className="lucide lucide-link" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </PopoverTrigger>
                  </Popover>
                </TooltipTrigger>
                </Tooltip>
              </div>
              <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              <div className="flex gap-0.5 items-center shrink-0" role="group" aria-label="Lists">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Bullet list" toolbarItem="" id="base-ui-_r_12_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-list" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListIcon" tabler="IconList" hugeicons="LeftToRightListBulletIcon" phosphor="ListBulletsIcon" remixicon="RiListCheck" aria-hidden="true">
                    <path d="M3 5h.01"></path>
                    <path d="M3 12h.01"></path>
                    <path d="M3 19h.01"></path>
                    <path d="M8 5h13"></path>
                    <path d="M8 12h13"></path>
                    <path d="M8 19h13"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Numbered list" toolbarItem="" id="base-ui-_r_15_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-list-ordered" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListOrderedIcon" tabler="IconListNumbers" hugeicons="LeftToRightListNumberIcon" phosphor="ListNumbersIcon" remixicon="RiListOrdered" aria-hidden="true">
                    <path d="M11 5h10"></path>
                    <path d="M11 12h10"></path>
                    <path d="M11 19h10"></path>
                    <path d="M4 4h1v5"></path>
                    <path d="M4 9h2"></path>
                    <path d="M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </div>
              <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              <Tooltip>
              <TooltipTrigger className="flex shrink-0" id="base-ui-_r_1b_" baseUiTooltipTrigger="">
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none gap-0.5 group/button inline-flex items-center justify-center outline-none px-1.5 select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-label="Alignment, Align left" toolbarItem="" aria-haspopup="menu" id="base-ui-_r_1c_" aria-expanded="false">
                  <svg className="lucide lucide-text-align-start" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="AlignLeftIcon" tabler="IconAlignLeft" hugeicons="TextAlignLeftIcon" phosphor="TextAlignLeftIcon" remixicon="RiAlignLeft" aria-hidden="true">
                    <path d="M21 5H3"></path>
                    <path d="M15 12H3"></path>
                    <path d="M17 19H3"></path>
                  </svg>
                  <svg className="lucide lucide-chevron-down opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </TooltipTrigger>
              </Tooltip>
            </div>
            <div className="flex gap-0.5 items-center shrink-0" role="group" aria-label="Suggestions">
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Previous suggestion" toolbarItem="" id="base-ui-_r_1f_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-chevron-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine" aria-hidden="true">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <span className="min-w-12 px-1 tabular-nums text-center text-muted-foreground text-xs whitespace-nowrap">
                8 open
              </span>
              <span className="sr-only" role="status"></span>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Next suggestion" toolbarItem="" id="base-ui-_r_1h_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
            </div>
          </div>
        </header>
        <div className="flex flex-1 gap-10 items-start max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="flex-1 min-w-0">
            <div className="[&_.ProseMirror-gapcursor]:after:border-t-foreground! [&_.tiptap>*+*]:mt-3 [&_.tiptap>h2:not(:first-child)]:mt-8 [&_.tiptap>h3:not(:first-child)]:mt-6 [&_.tiptap]:break-words [&_.tiptap]:flex-1 [&_.tiptap]:outline-none [&_.tiptap_.ProseMirror-selectednode]:outline-2 [&_.tiptap_.ProseMirror-selectednode]:outline-ring/50 [&_.tiptap_.is-empty]:before:content-[attr(data-placeholder)] [&_.tiptap_.is-empty]:before:float-start [&_.tiptap_.is-empty]:before:h-0 [&_.tiptap_.is-empty]:before:pointer-events-none [&_.tiptap_.is-empty]:before:text-muted-foreground [&_.tiptap_.selection]:bg-primary/15 [&_.tiptap_:is(ins,del)]:scroll-mt-[calc(var(--redline-header)+--spacing(6))] [&_.tiptap_:not(pre)>code]:bg-muted [&_.tiptap_:not(pre)>code]:font-mono [&_.tiptap_:not(pre)>code]:px-1 [&_.tiptap_:not(pre)>code]:py-0.5 [&_.tiptap_:not(pre)>code]:rounded-sm [&_.tiptap_:not(pre)>code]:text-sm [&_.tiptap_a]:text-primary [&_.tiptap_a]:underline [&_.tiptap_a]:underline-offset-4 [&_.tiptap_blockquote]:border-s-2 [&_.tiptap_blockquote]:ps-4 [&_.tiptap_blockquote]:text-muted-foreground [&_.tiptap_del+ins]:ms-1 [&_.tiptap_del_[data-suggestion-active]]:bg-destructive/20 [&_.tiptap_h1]:font-semibold [&_.tiptap_h1]:text-2xl/9 [&_.tiptap_h1]:tracking-tight [&_.tiptap_h2]:font-semibold [&_.tiptap_h2]:text-xl/8 [&_.tiptap_h2]:tracking-tight [&_.tiptap_h3]:font-semibold [&_.tiptap_h3]:text-lg/7 [&_.tiptap_hr]:border-border [&_.tiptap_hr]:my-6 [&_.tiptap_ins]:underline-offset-4 [&_.tiptap_ins_[data-suggestion-active]]:bg-success/20 [&_.tiptap_li+li]:mt-1 [&_.tiptap_li::marker]:text-muted-foreground [&_.tiptap_li[data-checked=true]>div>[data-node-view-content]]:line-through [&_.tiptap_li[data-checked=true]>div>[data-node-view-content]]:text-muted-foreground [&_.tiptap_mark[data-color=blue]]:bg-sky-200 [&_.tiptap_mark[data-color=green]]:bg-emerald-200 [&_.tiptap_mark[data-color=pink]]:bg-pink-200 [&_.tiptap_mark[data-color=violet]]:bg-violet-200 [&_.tiptap_mark]:bg-yellow-200 [&_.tiptap_mark]:px-0.5 [&_.tiptap_mark]:text-inherit [&_.tiptap_ol]:list-decimal [&_.tiptap_ol]:ps-6 [&_.tiptap_pre]:bg-muted [&_.tiptap_pre]:font-mono [&_.tiptap_pre]:px-4 [&_.tiptap_pre]:py-3 [&_.tiptap_pre]:rounded-md [&_.tiptap_pre]:text-sm [&_.tiptap_ul[data-type=taskList]]:list-none [&_.tiptap_ul[data-type=taskList]]:ps-0.5 [&_.tiptap_ul]:list-disc [&_.tiptap_ul]:ps-6 [&_del]:bg-destructive/10 [&_del]:decoration-destructive/60 [&_del]:line-through [&_del]:text-destructive-foreground [&_ins]:bg-success/10 [&_ins]:decoration-success/60 [&_ins]:text-success-foreground [&_ins]:underline dark:[&_.tiptap_del_[data-suggestion-active]]:bg-destructive/30 dark:[&_.tiptap_ins_[data-suggestion-active]]:bg-success/30 dark:[&_.tiptap_mark[data-color=blue]]:bg-sky-400/30 dark:[&_.tiptap_mark[data-color=green]]:bg-emerald-400/30 dark:[&_.tiptap_mark[data-color=pink]]:bg-pink-400/30 dark:[&_.tiptap_mark[data-color=violet]]:bg-violet-400/30 dark:[&_.tiptap_mark]:bg-yellow-400/30 dark:[&_del]:bg-destructive/15 dark:[&_del]:text-destructive dark:[&_ins]:bg-success/15 dark:[&_ins]:text-success flex flex-col max-w-3xl min-h-full mx-auto py-8 sm:py-10 text-base/7 text-foreground w-full">
              <div className="ProseMirror tiptap" contentEditable="true" aria-label="Master Services Agreement" aria-multiline="true" translate="no" tabIndex="0">
                <p>
                  This Master Services Agreement (the “Agreement”) is made as of October 1, 2026 (the “Effective Date”) between Kestrel Works Inc., the provider of Loomwell (“Kestrel”), and Halden Freight LLC (“Customer”). It governs Customer’s use of the Services under every Order Form the parties sign.
                </p>
                <h2>
                  1. Definitions
                </h2>
                <p>
                  <strong>
                    1.1
                  </strong>
                  “Services” means the Loomwell shared inbox, its mobile apps and the APIs described in the Documentation
                  <del data-id="s-beta" data-author="sofia" data-time="2026-09-26T09:12:00.000Z">
                    , including any beta or preview features
                  </del>
                  . Beta features are offered as is and are excluded from the service levels in Section 2.
                </p>
                <p>
                  <strong>
                    1.2
                  </strong>
                  “Customer Data” means all messages, attachments, contact records and other content that Customer or its Authorized Users submit to the Services. “Authorized Users” means Customer’s employees and contractors who hold a seat under an active Order Form.
                </p>
                <h2>
                  2. Services and Support
                </h2>
                <p>
                  <strong>
                    2.1
                  </strong>
                  Kestrel will make the Services available 99.9% of the time in each calendar month
                  <ins data-id="s-maintenance" data-author="sofia" data-time="2026-09-26T09:30:00.000Z">
                    , excluding scheduled maintenance announced at least 48 hours in advance
                  </ins>
                  . If availability falls below that level, Customer may claim the service credits set out in the Support Policy.
                </p>
                <p>
                  <strong>
                    2.2
                  </strong>
                  Kestrel will respond to Priority 1 tickets within
                  <del data-id="s-response" data-author="daniel" data-time="2026-09-25T16:40:00.000Z">
                    one (1) business day
                  </del>
                  <ins data-id="s-response" data-author="daniel" data-time="2026-09-25T16:40:00.000Z">
                    four (4) business hours
                  </ins>
                  and to all other tickets within two (2) business days. Support is provided in English by email and inside the product.
                </p>
                <h2>
                  3. Fees and Payment
                </h2>
                <p>
                  <strong>
                    3.1
                  </strong>
                  Customer will pay the Fees listed in each Order Form. Kestrel invoices annually in advance, and each invoice is due within
                  <del data-id="s-payment" data-author="priya" data-time="2026-09-25T14:05:00.000Z">
                    thirty (30)
                  </del>
                  <ins data-id="s-payment" data-author="priya" data-time="2026-09-25T14:05:00.000Z">
                    forty-five (45)
                  </ins>
                  days of the invoice date.
                </p>
                <p>
                  <strong>
                    3.2
                  </strong>
                  Late amounts accrue interest at 1% per month or the highest rate the law allows, whichever is lower. Fees exclude taxes, which Customer pays except for taxes on Kestrel’s income.
                </p>
                <h2>
                  4. Term and Renewal
                </h2>
                <p>
                  <strong>
                    4.1
                  </strong>
                  This Agreement starts on the Effective Date and continues until every Order Form has expired or been terminated. Each Order Form has an initial Subscription Term of twelve (12) months.
                </p>
                <p>
                  <strong>
                    4.2
                  </strong>
                  <del data-id="s-renewal" data-author="priya" data-time="2026-09-25T14:12:00.000Z">
                    Each Subscription Term renews automatically for successive twelve (12) month periods unless either party gives notice of non-renewal at least sixty (60) days before it ends.
                  </del>
                  Kestrel will notify Customer of any price change at least ninety (90) days before a new Subscription Term begins.
                </p>
                <h2>
                  5. Data Protection
                </h2>
                <p>
                  <strong>
                    5.1
                  </strong>
                  Kestrel will process Customer Data only to provide the Services and as Customer instructs in writing, under the Data Processing Addendum attached as Exhibit B. Kestrel keeps Customer Data encrypted in transit and at rest.
                </p>
                <p>
                  <strong>
                    5.2
                  </strong>
                  Kestrel will notify Customer of any confirmed Security Incident affecting Customer Data within
                  <del data-id="s-breach" data-author="priya" data-time="2026-09-25T14:20:00.000Z">
                    seventy-two (72) hours
                  </del>
                  <ins data-id="s-breach" data-author="priya" data-time="2026-09-25T14:20:00.000Z">
                    forty-eight (48) hours
                  </ins>
                  of confirming it, and will share the facts Customer needs to meet its own notice duties.
                </p>
                <h2>
                  6. Limitation of Liability
                </h2>
                <p>
                  <strong>
                    6.1
                  </strong>
                  Except for breaches of Section 5 and a party’s indemnity obligations, each party’s total liability under this Agreement is capped at the Fees paid or payable in the
                  <del data-id="s-liability" data-author="priya" data-time="2026-09-25T14:31:00.000Z">
                    twelve (12)
                  </del>
                  <ins data-id="s-liability" data-author="priya" data-time="2026-09-25T14:31:00.000Z">
                    twenty-four (24)
                  </ins>
                  months before the event giving rise to the claim.
                </p>
                <p>
                  <strong>
                    6.2
                  </strong>
                  Neither party is liable for lost profits, lost revenue or indirect, special or consequential damages, even if it was told such damages were possible.
                </p>
                <h2>
                  7. Termination
                </h2>
                <p>
                  <strong>
                    7.1
                  </strong>
                  Either party may terminate this Agreement if the other materially breaches it and fails to cure the breach within thirty (30) days of written notice.
                  <ins data-id="s-convenience" data-author="priya" data-time="2026-09-25T14:44:00.000Z">
                    Customer may also terminate for convenience on ninety (90) days’ written notice, with a pro rata refund of any prepaid Fees for the remaining Subscription Term.
                  </ins>
                </p>
                <p>
                  <strong>
                    7.2
                  </strong>
                  On termination, Kestrel will make Customer Data available for export for thirty (30) days and then delete it from production systems within a further sixty (60) days.
                </p>
                <h2>
                  8. General
                </h2>
                <p>
                  <strong>
                    8.1
                  </strong>
                  This Agreement is governed by the laws of the Province of Ontario and the federal laws of Canada that apply there. The courts of Toronto have exclusive jurisdiction over any dispute.
                </p>
                <p>
                  <strong>
                    8.2
                  </strong>
                  Neither party may assign this Agreement without the other’s written consent, except to a successor in a merger or a sale of substantially all of its assets.
                </p>
              </div>
            </div>
          </div>
          <aside className="flex flex-col max-h-[calc(100svh-var(--redline-offset)-var(--redline-header))] py-10 shrink-0 sticky top-(--redline-header) w-80" aria-label="Review">
            <Card className="min-h-0" size="sm" role="region" aria-labelledby="_r_1i_">
              <CardHeader className="items-center">
                <CardTitle className="flex gap-2 items-center">
                  <h2 className="outline-none" id="_r_1i_" tabIndex="-1">
                    Suggestions
                  </h2>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                    8
                  </Badge>
                </CardTitle>
                <CardAction className="row-span-1 self-center">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Resolve all suggestions" aria-haspopup="menu" id="base-ui-_r_1m_" aria-expanded="false">
                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </CardAction>
              </CardHeader>
              <CardContent className="flex flex-col gap-1 min-h-0">
                <ToggleGroup className="w-full" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Markup view" style={{"--gap": "0"}}>
                  <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="sm" spacing="0">
                    All markup
                  </ToggleGroupItem>
                  <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="0">
                    Final
                  </ToggleGroupItem>
                  <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="0">
                    Original
                  </ToggleGroupItem>
                </ToggleGroup>
                <div className="min-h-0 no-scrollbar overflow-y-auto overscroll-contain relative supports-[animation-timeline:scroll()]:scroll-fade-y">
                  <ul className="flex flex-col gap-0.5" aria-label="Open suggestions">
                    <li data-change-id="s-beta">
                      <Item className="dark:has-[[data-row-select][aria-current=true]]:bg-muted/50 has-[[data-row-select]:focus-visible]:ring-[3px] has-[[data-row-select]:focus-visible]:ring-ring/50 has-[[data-row-select][aria-current=true]]:bg-muted hover:bg-muted/50 items-start relative" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <Avatar size="sm">
                            <AvatarImage alt="Sofia Marques" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="w-full">
                            <button className="after:absolute after:inset-0 aria-[current=true]:font-medium font-normal min-w-0 outline-none text-start truncate" type="button" aria-labelledby="_r_21_ _r_22_" data-row-select="">
                              <span id="_r_21_">
                                Sofia Marques
                              </span>
                            </button>
                            <span className="font-normal shrink-0 tabular-nums text-muted-foreground text-xs">
                              9:12 AM
                            </span>
                          </ItemTitle>
                          <ItemDescription className="line-clamp-3">
                            <span className="[&_del]:bg-destructive/10 [&_del]:decoration-destructive/60 [&_del]:line-through [&_del]:text-destructive-foreground [&_ins]:bg-success/10 [&_ins]:decoration-success/60 [&_ins]:text-success-foreground [&_ins]:underline [&_ins]:underline-offset-2 dark:[&_del]:bg-destructive/15 dark:[&_del]:text-destructive dark:[&_ins]:bg-success/15 dark:[&_ins]:text-success" id="_r_22_">
                              <span className="font-medium text-foreground">
                                Deleted
                              </span>
                              <del>
                                including any beta or preview features
                              </del>
                            </span>
                          </ItemDescription>
                        </ItemContent>
                        <ItemActions className="gap-0.5 relative z-10">
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none focus-visible:bg-success focus-visible:border-success focus-visible:ring-success/30 focus-visible:text-white group/button hover:bg-success hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Accept deleted text from Sofia Marques" aria-describedby="_r_22_" id="base-ui-_r_24_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none focus-visible:bg-destructive focus-visible:border-destructive focus-visible:ring-destructive/30 focus-visible:text-white group/button hover:bg-destructive hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reject deleted text from Sofia Marques" aria-describedby="_r_22_" id="base-ui-_r_26_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </ItemActions>
                      </Item>
                    </li>
                    <li data-change-id="s-maintenance">
                      <Item className="dark:has-[[data-row-select][aria-current=true]]:bg-muted/50 has-[[data-row-select]:focus-visible]:ring-[3px] has-[[data-row-select]:focus-visible]:ring-ring/50 has-[[data-row-select][aria-current=true]]:bg-muted hover:bg-muted/50 items-start relative" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <Avatar size="sm">
                            <AvatarImage alt="Sofia Marques" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="w-full">
                            <button className="after:absolute after:inset-0 aria-[current=true]:font-medium font-normal min-w-0 outline-none text-start truncate" type="button" aria-labelledby="_r_27_ _r_28_" data-row-select="">
                              <span id="_r_27_">
                                Sofia Marques
                              </span>
                            </button>
                            <span className="font-normal shrink-0 tabular-nums text-muted-foreground text-xs">
                              9:30 AM
                            </span>
                          </ItemTitle>
                          <ItemDescription className="line-clamp-3">
                            <span className="[&_del]:bg-destructive/10 [&_del]:decoration-destructive/60 [&_del]:line-through [&_del]:text-destructive-foreground [&_ins]:bg-success/10 [&_ins]:decoration-success/60 [&_ins]:text-success-foreground [&_ins]:underline [&_ins]:underline-offset-2 dark:[&_del]:bg-destructive/15 dark:[&_del]:text-destructive dark:[&_ins]:bg-success/15 dark:[&_ins]:text-success" id="_r_28_">
                              <span className="font-medium text-foreground">
                                Added
                              </span>
                              <ins>
                                excluding scheduled maintenance announced at least 48 hours in advance
                              </ins>
                            </span>
                          </ItemDescription>
                        </ItemContent>
                        <ItemActions className="gap-0.5 relative z-10">
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none focus-visible:bg-success focus-visible:border-success focus-visible:ring-success/30 focus-visible:text-white group/button hover:bg-success hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Accept added text from Sofia Marques" aria-describedby="_r_28_" id="base-ui-_r_2a_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none focus-visible:bg-destructive focus-visible:border-destructive focus-visible:ring-destructive/30 focus-visible:text-white group/button hover:bg-destructive hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reject added text from Sofia Marques" aria-describedby="_r_28_" id="base-ui-_r_2c_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </ItemActions>
                      </Item>
                    </li>
                    <li data-change-id="s-response">
                      <Item className="dark:has-[[data-row-select][aria-current=true]]:bg-muted/50 has-[[data-row-select]:focus-visible]:ring-[3px] has-[[data-row-select]:focus-visible]:ring-ring/50 has-[[data-row-select][aria-current=true]]:bg-muted hover:bg-muted/50 items-start relative" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <Avatar size="sm">
                            <AvatarImage alt="Daniel Okafor" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="w-full">
                            <button className="after:absolute after:inset-0 aria-[current=true]:font-medium font-normal min-w-0 outline-none text-start truncate" type="button" aria-labelledby="_r_2d_ _r_2e_" data-row-select="">
                              <span id="_r_2d_">
                                Daniel Okafor
                              </span>
                            </button>
                            <span className="font-normal shrink-0 tabular-nums text-muted-foreground text-xs">
                              Sep 25
                            </span>
                          </ItemTitle>
                          <ItemDescription className="line-clamp-3">
                            <span className="[&_del]:bg-destructive/10 [&_del]:decoration-destructive/60 [&_del]:line-through [&_del]:text-destructive-foreground [&_ins]:bg-success/10 [&_ins]:decoration-success/60 [&_ins]:text-success-foreground [&_ins]:underline [&_ins]:underline-offset-2 dark:[&_del]:bg-destructive/15 dark:[&_del]:text-destructive dark:[&_ins]:bg-success/15 dark:[&_ins]:text-success" id="_r_2e_">
                              <span className="font-medium text-foreground">
                                Replaced
                              </span>
                              <del>
                                one (1) business day
                              </del>
                              <ins>
                                four (4) business hours
                              </ins>
                            </span>
                          </ItemDescription>
                        </ItemContent>
                        <ItemActions className="gap-0.5 relative z-10">
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none focus-visible:bg-success focus-visible:border-success focus-visible:ring-success/30 focus-visible:text-white group/button hover:bg-success hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Accept replaced text from Daniel Okafor" aria-describedby="_r_2e_" id="base-ui-_r_2g_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none focus-visible:bg-destructive focus-visible:border-destructive focus-visible:ring-destructive/30 focus-visible:text-white group/button hover:bg-destructive hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reject replaced text from Daniel Okafor" aria-describedby="_r_2e_" id="base-ui-_r_2i_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </ItemActions>
                      </Item>
                    </li>
                    <li data-change-id="s-payment">
                      <Item className="dark:has-[[data-row-select][aria-current=true]]:bg-muted/50 has-[[data-row-select]:focus-visible]:ring-[3px] has-[[data-row-select]:focus-visible]:ring-ring/50 has-[[data-row-select][aria-current=true]]:bg-muted hover:bg-muted/50 items-start relative" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <Avatar size="sm">
                            <AvatarImage alt="Priya Raman" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="w-full">
                            <button className="after:absolute after:inset-0 aria-[current=true]:font-medium font-normal min-w-0 outline-none text-start truncate" type="button" aria-labelledby="_r_2j_ _r_2k_" data-row-select="">
                              <span id="_r_2j_">
                                Priya Raman
                              </span>
                            </button>
                            <span className="font-normal shrink-0 tabular-nums text-muted-foreground text-xs">
                              Sep 25
                            </span>
                          </ItemTitle>
                          <ItemDescription className="line-clamp-3">
                            <span className="[&_del]:bg-destructive/10 [&_del]:decoration-destructive/60 [&_del]:line-through [&_del]:text-destructive-foreground [&_ins]:bg-success/10 [&_ins]:decoration-success/60 [&_ins]:text-success-foreground [&_ins]:underline [&_ins]:underline-offset-2 dark:[&_del]:bg-destructive/15 dark:[&_del]:text-destructive dark:[&_ins]:bg-success/15 dark:[&_ins]:text-success" id="_r_2k_">
                              <span className="font-medium text-foreground">
                                Replaced
                              </span>
                              <del>
                                thirty (30)
                              </del>
                              <ins>
                                forty-five (45)
                              </ins>
                            </span>
                          </ItemDescription>
                        </ItemContent>
                        <ItemActions className="gap-0.5 relative z-10">
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none focus-visible:bg-success focus-visible:border-success focus-visible:ring-success/30 focus-visible:text-white group/button hover:bg-success hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Accept replaced text from Priya Raman" aria-describedby="_r_2k_" id="base-ui-_r_2m_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none focus-visible:bg-destructive focus-visible:border-destructive focus-visible:ring-destructive/30 focus-visible:text-white group/button hover:bg-destructive hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reject replaced text from Priya Raman" aria-describedby="_r_2k_" id="base-ui-_r_2o_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </ItemActions>
                      </Item>
                    </li>
                    <li data-change-id="s-renewal">
                      <Item className="dark:has-[[data-row-select][aria-current=true]]:bg-muted/50 has-[[data-row-select]:focus-visible]:ring-[3px] has-[[data-row-select]:focus-visible]:ring-ring/50 has-[[data-row-select][aria-current=true]]:bg-muted hover:bg-muted/50 items-start relative" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <Avatar size="sm">
                            <AvatarImage alt="Priya Raman" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="w-full">
                            <button className="after:absolute after:inset-0 aria-[current=true]:font-medium font-normal min-w-0 outline-none text-start truncate" type="button" aria-labelledby="_r_2p_ _r_2q_" data-row-select="">
                              <span id="_r_2p_">
                                Priya Raman
                              </span>
                            </button>
                            <span className="font-normal shrink-0 tabular-nums text-muted-foreground text-xs">
                              Sep 25
                            </span>
                          </ItemTitle>
                          <ItemDescription className="line-clamp-3">
                            <span className="[&_del]:bg-destructive/10 [&_del]:decoration-destructive/60 [&_del]:line-through [&_del]:text-destructive-foreground [&_ins]:bg-success/10 [&_ins]:decoration-success/60 [&_ins]:text-success-foreground [&_ins]:underline [&_ins]:underline-offset-2 dark:[&_del]:bg-destructive/15 dark:[&_del]:text-destructive dark:[&_ins]:bg-success/15 dark:[&_ins]:text-success" id="_r_2q_">
                              <span className="font-medium text-foreground">
                                Deleted
                              </span>
                              <del>
                                Each Subscription Term renews automatically for successive twelve (12) month periods unless either party gives notice of non-renewal at least sixty (60) days before it ends.
                              </del>
                            </span>
                          </ItemDescription>
                        </ItemContent>
                        <ItemActions className="gap-0.5 relative z-10">
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none focus-visible:bg-success focus-visible:border-success focus-visible:ring-success/30 focus-visible:text-white group/button hover:bg-success hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Accept deleted text from Priya Raman" aria-describedby="_r_2q_" id="base-ui-_r_2s_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none focus-visible:bg-destructive focus-visible:border-destructive focus-visible:ring-destructive/30 focus-visible:text-white group/button hover:bg-destructive hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reject deleted text from Priya Raman" aria-describedby="_r_2q_" id="base-ui-_r_2u_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </ItemActions>
                      </Item>
                    </li>
                    <li data-change-id="s-breach">
                      <Item className="dark:has-[[data-row-select][aria-current=true]]:bg-muted/50 has-[[data-row-select]:focus-visible]:ring-[3px] has-[[data-row-select]:focus-visible]:ring-ring/50 has-[[data-row-select][aria-current=true]]:bg-muted hover:bg-muted/50 items-start relative" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <Avatar size="sm">
                            <AvatarImage alt="Priya Raman" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="w-full">
                            <button className="after:absolute after:inset-0 aria-[current=true]:font-medium font-normal min-w-0 outline-none text-start truncate" type="button" aria-labelledby="_r_2v_ _r_30_" data-row-select="">
                              <span id="_r_2v_">
                                Priya Raman
                              </span>
                            </button>
                            <span className="font-normal shrink-0 tabular-nums text-muted-foreground text-xs">
                              Sep 25
                            </span>
                          </ItemTitle>
                          <ItemDescription className="line-clamp-3">
                            <span className="[&_del]:bg-destructive/10 [&_del]:decoration-destructive/60 [&_del]:line-through [&_del]:text-destructive-foreground [&_ins]:bg-success/10 [&_ins]:decoration-success/60 [&_ins]:text-success-foreground [&_ins]:underline [&_ins]:underline-offset-2 dark:[&_del]:bg-destructive/15 dark:[&_del]:text-destructive dark:[&_ins]:bg-success/15 dark:[&_ins]:text-success" id="_r_30_">
                              <span className="font-medium text-foreground">
                                Replaced
                              </span>
                              <del>
                                seventy-two (72) hours
                              </del>
                              <ins>
                                forty-eight (48) hours
                              </ins>
                            </span>
                          </ItemDescription>
                        </ItemContent>
                        <ItemActions className="gap-0.5 relative z-10">
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none focus-visible:bg-success focus-visible:border-success focus-visible:ring-success/30 focus-visible:text-white group/button hover:bg-success hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Accept replaced text from Priya Raman" aria-describedby="_r_30_" id="base-ui-_r_32_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none focus-visible:bg-destructive focus-visible:border-destructive focus-visible:ring-destructive/30 focus-visible:text-white group/button hover:bg-destructive hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reject replaced text from Priya Raman" aria-describedby="_r_30_" id="base-ui-_r_34_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </ItemActions>
                      </Item>
                    </li>
                    <li data-change-id="s-liability">
                      <Item className="dark:has-[[data-row-select][aria-current=true]]:bg-muted/50 has-[[data-row-select]:focus-visible]:ring-[3px] has-[[data-row-select]:focus-visible]:ring-ring/50 has-[[data-row-select][aria-current=true]]:bg-muted hover:bg-muted/50 items-start relative" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <Avatar size="sm">
                            <AvatarImage alt="Priya Raman" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="w-full">
                            <button className="after:absolute after:inset-0 aria-[current=true]:font-medium font-normal min-w-0 outline-none text-start truncate" type="button" aria-labelledby="_r_35_ _r_36_" data-row-select="">
                              <span id="_r_35_">
                                Priya Raman
                              </span>
                            </button>
                            <span className="font-normal shrink-0 tabular-nums text-muted-foreground text-xs">
                              Sep 25
                            </span>
                          </ItemTitle>
                          <ItemDescription className="line-clamp-3">
                            <span className="[&_del]:bg-destructive/10 [&_del]:decoration-destructive/60 [&_del]:line-through [&_del]:text-destructive-foreground [&_ins]:bg-success/10 [&_ins]:decoration-success/60 [&_ins]:text-success-foreground [&_ins]:underline [&_ins]:underline-offset-2 dark:[&_del]:bg-destructive/15 dark:[&_del]:text-destructive dark:[&_ins]:bg-success/15 dark:[&_ins]:text-success" id="_r_36_">
                              <span className="font-medium text-foreground">
                                Replaced
                              </span>
                              <del>
                                twelve (12)
                              </del>
                              <ins>
                                twenty-four (24)
                              </ins>
                            </span>
                          </ItemDescription>
                        </ItemContent>
                        <ItemActions className="gap-0.5 relative z-10">
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none focus-visible:bg-success focus-visible:border-success focus-visible:ring-success/30 focus-visible:text-white group/button hover:bg-success hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Accept replaced text from Priya Raman" aria-describedby="_r_36_" id="base-ui-_r_38_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none focus-visible:bg-destructive focus-visible:border-destructive focus-visible:ring-destructive/30 focus-visible:text-white group/button hover:bg-destructive hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reject replaced text from Priya Raman" aria-describedby="_r_36_" id="base-ui-_r_3a_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </ItemActions>
                      </Item>
                    </li>
                    <li data-change-id="s-convenience">
                      <Item className="dark:has-[[data-row-select][aria-current=true]]:bg-muted/50 has-[[data-row-select]:focus-visible]:ring-[3px] has-[[data-row-select]:focus-visible]:ring-ring/50 has-[[data-row-select][aria-current=true]]:bg-muted hover:bg-muted/50 items-start relative" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <Avatar size="sm">
                            <AvatarImage alt="Priya Raman" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="w-full">
                            <button className="after:absolute after:inset-0 aria-[current=true]:font-medium font-normal min-w-0 outline-none text-start truncate" type="button" aria-labelledby="_r_3b_ _r_3c_" data-row-select="">
                              <span id="_r_3b_">
                                Priya Raman
                              </span>
                            </button>
                            <span className="font-normal shrink-0 tabular-nums text-muted-foreground text-xs">
                              Sep 25
                            </span>
                          </ItemTitle>
                          <ItemDescription className="line-clamp-3">
                            <span className="[&_del]:bg-destructive/10 [&_del]:decoration-destructive/60 [&_del]:line-through [&_del]:text-destructive-foreground [&_ins]:bg-success/10 [&_ins]:decoration-success/60 [&_ins]:text-success-foreground [&_ins]:underline [&_ins]:underline-offset-2 dark:[&_del]:bg-destructive/15 dark:[&_del]:text-destructive dark:[&_ins]:bg-success/15 dark:[&_ins]:text-success" id="_r_3c_">
                              <span className="font-medium text-foreground">
                                Added
                              </span>
                              <ins>
                                Customer may also terminate for convenience on ninety (90) days’ written notice, with a pro rata refund of any prepaid Fees for the remaining Subscription Term.
                              </ins>
                            </span>
                          </ItemDescription>
                        </ItemContent>
                        <ItemActions className="gap-0.5 relative z-10">
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none focus-visible:bg-success focus-visible:border-success focus-visible:ring-success/30 focus-visible:text-white group/button hover:bg-success hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Accept added text from Priya Raman" aria-describedby="_r_3c_" id="base-ui-_r_3e_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none focus-visible:bg-destructive focus-visible:border-destructive focus-visible:ring-destructive/30 focus-visible:text-white group/button hover:bg-destructive hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reject added text from Priya Raman" aria-describedby="_r_3c_" id="base-ui-_r_3g_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </ItemActions>
                      </Item>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}
