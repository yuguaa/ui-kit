import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Avatar,
  AvatarGroup,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemContent } from "@/registry/bases/base/ui/item"
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
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex flex-col min-h-svh w-full">
      <div className="bg-background flex flex-1 flex-col text-foreground w-full">
        <header className="bg-background border-b sticky top-0 z-20">
          <div className="flex gap-3 items-center min-h-14 px-4 py-2 sm:px-6">
            <div className="flex flex-1 flex-col gap-px min-w-0">
              <div className="flex gap-2 items-center min-w-0">
                <h1 className="font-medium text-base/5 truncate">
                  {"Inbox Search Rollout"}
                </h1>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-primary text-xs transition-shadow">
                  {"3 suggestions"}
                </Badge>
              </div>
              <p className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-center text-muted-foreground text-xs">
                <span>
                  {"Rollout plan"}
                </span>
                <span className="gap-1.5 inline-flex items-center max-sm:hidden">
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  {"Lena Hoffmann"}
                </span>
                <span className="gap-1.5 inline-flex items-center">
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  {"Edited Sep 26"}
                </span>
              </p>
            </div>
            <div className="flex gap-2 items-center shrink-0">
              <AvatarGroup className="max-sm:hidden" role="group" aria-label="Shared with Lena Hoffmann, Daniel Okafor, Maya Chen, and Arjun Mehta">
                <Avatar size="sm">
                  <AvatarImage alt="Lena Hoffmann" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
                <Avatar size="sm">
                  <AvatarImage alt="Daniel Okafor" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
                <Avatar size="sm">
                  <AvatarImage alt="Maya Chen" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
                <Avatar size="sm">
                  <AvatarImage alt="Arjun Mehta" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
              </AvatarGroup>
              <Separator className="data-vertical:self-center h-5 max-sm:hidden" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              <div className="max-md:hidden">
                <Select>
                <SelectTrigger type="button" tabIndex="0" id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Suggestion view" extracted="1">
                  <SelectValue>
                    <svg className="lucide lucide-highlighter" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HighlighterIcon" tabler="IconHighlight" hugeicons="HighlighterIcon" phosphor="HighlighterIcon" remixicon="RiMarkPenLine" aria-hidden="true">
                      <path d="m9 11-6 6v3h9l3-3"></path>
                      <path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"></path>
                    </svg>
                    {"All Markup"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_0_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <Popover>
              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-default disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center max-sm:px-0 max-sm:w-8 outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_4_" aria-haspopup="dialog" aria-expanded="false">
                <svg className="lucide lucide-share-2 lucide-share2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Share2Icon" tabler="IconShare" hugeicons="Share08Icon" phosphor="ShareNetworkIcon" remixicon="RiShareLine" data-icon="inline-start" aria-hidden="true">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                </svg>
                <span className="max-sm:sr-only">
                  {"Share"}
                </span>
              </PopoverTrigger>
              </Popover>
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
          <div className="border-t flex items-center px-4 py-2 sm:px-6">
            <div className="[&>:first-child]:ms-auto [&>:last-child]:me-auto flex flex-1 gap-1 items-center min-w-0 no-scrollbar overflow-x-auto overflow-y-hidden supports-[animation-timeline:scroll()]:scroll-fade-x" role="toolbar" aria-orientation="horizontal" aria-label="Formatting">
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
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-between outline-none select-none shrink-0 sm:w-28 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Block type, Heading 1" toolbarItem="" aria-haspopup="menu" id="base-ui-_r_h_" aria-expanded="false">
                <span className="flex sm:hidden">
                  <svg className="lucide lucide-heading-1 lucide-heading1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Heading1Icon" tabler="IconH1" hugeicons="Heading01Icon" phosphor="TextHOneIcon" remixicon="RiH1" aria-hidden="true">
                    <path d="M4 12h8"></path>
                    <path d="M4 18V6"></path>
                    <path d="M12 18V6"></path>
                    <path d="m17 12 3-2v8"></path>
                  </svg>
                </span>
                <span className="max-sm:hidden truncate">
                  {"Heading 1"}
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
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Strikethrough" toolbarItem="" id="base-ui-_r_t_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-strikethrough" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StrikethroughIcon" tabler="IconStrikethrough" hugeicons="TextStrikethroughIcon" phosphor="TextStrikethroughIcon" remixicon="RiStrikethrough" aria-hidden="true">
                    <path d="M16 4H9a3 3 0 0 0-2.83 4"></path>
                    <path d="M14 12a4 4 0 0 1 0 8H6"></path>
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Inline code" toolbarItem="" id="base-ui-_r_10_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                    <path d="m16 18 6-6-6-6"></path>
                    <path d="m8 6-6 6 6 6"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </div>
              <div className="flex gap-0.5 items-center shrink-0" role="group" aria-label="Annotate">
                <Tooltip>
                <TooltipTrigger className="flex" id="base-ui-_r_14_" baseUiTooltipTrigger="">
                  <Popover>
                  <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Highlight" toolbarItem="" baseUiClickTrigger="" id="base-ui-_r_15_" aria-haspopup="dialog" aria-expanded="false">
                    <svg className="lucide lucide-highlighter" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HighlighterIcon" tabler="IconHighlight" hugeicons="HighlighterIcon" phosphor="HighlighterIcon" remixicon="RiMarkPenLine" aria-hidden="true">
                      <path d="m9 11-6 6v3h9l3-3"></path>
                      <path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"></path>
                    </svg>
                  </PopoverTrigger>
                  </Popover>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="flex" id="base-ui-_r_19_" baseUiTooltipTrigger="">
                  <Popover>
                  <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Link" toolbarItem="" baseUiClickTrigger="" id="base-ui-_r_1a_" aria-haspopup="dialog" aria-expanded="false">
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
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Bullet list" toolbarItem="" id="base-ui-_r_1d_" baseUiTooltipTrigger="">
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
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Numbered list" toolbarItem="" id="base-ui-_r_1g_" baseUiTooltipTrigger="">
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
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Task list" toolbarItem="" id="base-ui-_r_1j_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-list-todo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListTodoIcon" tabler="IconChecklist" hugeicons="CheckListIcon" phosphor="ListChecksIcon" remixicon="RiTodoLine" aria-hidden="true">
                    <path d="M13 5h8"></path>
                    <path d="M13 12h8"></path>
                    <path d="M13 19h8"></path>
                    <path d="m3 17 2 2 4-4"></path>
                    <rect x="3" y="4" width="6" height="6" rx="1"></rect>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </div>
              <div className="flex gap-0.5 items-center shrink-0" role="group" aria-label="Blocks">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Quote" toolbarItem="" id="base-ui-_r_1m_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-text-quote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TextQuoteIcon" tabler="IconBlockquote" hugeicons="LeftToRightBlockQuoteIcon" phosphor="QuotesIcon" remixicon="RiDoubleQuotesL" aria-hidden="true">
                    <path d="M17 5H3"></path>
                    <path d="M21 12H8"></path>
                    <path d="M21 19H8"></path>
                    <path d="M3 12v7"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Code block" toolbarItem="" id="base-ui-_r_1p_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-square-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCodeIcon" tabler="IconSourceCode" hugeicons="SourceCodeSquareIcon" phosphor="CodeBlockIcon" remixicon="RiCodeBoxLine" aria-hidden="true">
                    <path d="m10 9-3 3 3 3"></path>
                    <path d="m14 15 3-3-3-3"></path>
                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-label="Divider" toolbarItem="" id="base-ui-_r_1s_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </div>
              <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              <Tooltip>
              <TooltipTrigger className="flex shrink-0" id="base-ui-_r_21_" baseUiTooltipTrigger="">
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none gap-0.5 group/button inline-flex items-center justify-center outline-none px-1.5 select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-label="Alignment, Align left" toolbarItem="" aria-haspopup="menu" id="base-ui-_r_22_" aria-expanded="false">
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
              <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              <div className="flex gap-0.5 items-center shrink-0" role="group" aria-label="Plan">
                <Tooltip>
                <TooltipTrigger className="flex" id="base-ui-_r_26_" baseUiTooltipTrigger="">
                  <Popover>
                  <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-label="Contents" toolbarItem="" baseUiClickTrigger="" id="base-ui-_r_27_" aria-haspopup="dialog" aria-expanded="false">
                    <svg className="lucide lucide-table-of-contents" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TableOfContentsIcon" tabler="IconListDetails" hugeicons="LeftToRightListDashIcon" phosphor="ListDashesIcon" remixicon="RiListIndefinite" aria-hidden="true">
                      <path d="M16 5H3"></path>
                      <path d="M16 12H3"></path>
                      <path d="M16 19H3"></path>
                      <path d="M21 5h.01"></path>
                      <path d="M21 12h.01"></path>
                      <path d="M21 19h.01"></path>
                    </svg>
                  </PopoverTrigger>
                  </Popover>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-label="Ask Assist" toolbarItem="" id="base-ui-_r_29_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                    <path d="M20 2v4"></path>
                    <path d="M22 4h-4"></path>
                    <circle cx="4" cy="20" r="2"></circle>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col max-w-3xl mx-auto px-4 sm:px-6 w-full">
          <div className="[&_.ProseMirror-gapcursor]:after:border-t-foreground! [&_.tiptap>*+*]:mt-3 [&_.tiptap>h2:not(:first-child)]:mt-8 [&_.tiptap>h3:not(:first-child)]:mt-6 [&_.tiptap]:break-words [&_.tiptap]:flex-1 [&_.tiptap]:outline-none [&_.tiptap_.ProseMirror-selectednode]:outline-2 [&_.tiptap_.ProseMirror-selectednode]:outline-ring/50 [&_.tiptap_.is-empty]:before:content-[attr(data-placeholder)] [&_.tiptap_.is-empty]:before:float-start [&_.tiptap_.is-empty]:before:h-0 [&_.tiptap_.is-empty]:before:pointer-events-none [&_.tiptap_.is-empty]:before:text-muted-foreground [&_.tiptap_.selection]:bg-primary/15 [&_.tiptap_:is(h1,h2,h3)]:scroll-mt-32 [&_.tiptap_:not(pre)>code]:bg-muted [&_.tiptap_:not(pre)>code]:font-mono [&_.tiptap_:not(pre)>code]:px-1 [&_.tiptap_:not(pre)>code]:py-0.5 [&_.tiptap_:not(pre)>code]:rounded-sm [&_.tiptap_:not(pre)>code]:text-sm [&_.tiptap_a]:text-primary [&_.tiptap_a]:underline [&_.tiptap_a]:underline-offset-4 [&_.tiptap_blockquote]:border-s-2 [&_.tiptap_blockquote]:ps-4 [&_.tiptap_blockquote]:text-muted-foreground [&_.tiptap_del+ins]:ms-1 [&_.tiptap_del_[data-suggestion-active]]:bg-destructive/20 [&_.tiptap_h1]:font-semibold [&_.tiptap_h1]:text-2xl/9 [&_.tiptap_h1]:tracking-tight [&_.tiptap_h2]:font-semibold [&_.tiptap_h2]:text-xl/8 [&_.tiptap_h2]:tracking-tight [&_.tiptap_h3]:font-semibold [&_.tiptap_h3]:text-lg/7 [&_.tiptap_hr]:border-border [&_.tiptap_hr]:my-6 [&_.tiptap_ins]:underline-offset-4 [&_.tiptap_ins_[data-suggestion-active]]:bg-success/20 [&_.tiptap_li+li]:mt-1 [&_.tiptap_li::marker]:text-muted-foreground [&_.tiptap_li[data-checked=true]>div>[data-node-view-content]]:line-through [&_.tiptap_li[data-checked=true]>div>[data-node-view-content]]:text-muted-foreground [&_.tiptap_mark[data-color=blue]]:bg-sky-200 [&_.tiptap_mark[data-color=green]]:bg-emerald-200 [&_.tiptap_mark[data-color=pink]]:bg-pink-200 [&_.tiptap_mark[data-color=violet]]:bg-violet-200 [&_.tiptap_mark]:bg-yellow-200 [&_.tiptap_mark]:px-0.5 [&_.tiptap_mark]:text-inherit [&_.tiptap_ol]:list-decimal [&_.tiptap_ol]:ps-6 [&_.tiptap_pre]:bg-muted [&_.tiptap_pre]:font-mono [&_.tiptap_pre]:px-4 [&_.tiptap_pre]:py-3 [&_.tiptap_pre]:rounded-md [&_.tiptap_pre]:text-sm [&_.tiptap_ul[data-type=taskList]]:list-none [&_.tiptap_ul[data-type=taskList]]:ps-0.5 [&_.tiptap_ul]:list-disc [&_.tiptap_ul]:ps-6 [&_del]:bg-destructive/10 [&_del]:decoration-destructive/60 [&_del]:line-through [&_del]:text-destructive-foreground [&_ins]:bg-success/10 [&_ins]:decoration-success/60 [&_ins]:text-success-foreground [&_ins]:underline dark:[&_.tiptap_del_[data-suggestion-active]]:bg-destructive/30 dark:[&_.tiptap_ins_[data-suggestion-active]]:bg-success/30 dark:[&_.tiptap_mark[data-color=blue]]:bg-sky-400/30 dark:[&_.tiptap_mark[data-color=green]]:bg-emerald-400/30 dark:[&_.tiptap_mark[data-color=pink]]:bg-pink-400/30 dark:[&_.tiptap_mark[data-color=violet]]:bg-violet-400/30 dark:[&_.tiptap_mark]:bg-yellow-400/30 dark:[&_del]:bg-destructive/15 dark:[&_del]:text-destructive dark:[&_ins]:bg-success/15 dark:[&_ins]:text-success flex flex-col min-h-full py-8 sm:py-10 text-base/7 text-foreground">
            <div className="ProseMirror tiptap" contentEditable="true" aria-label="Inbox Search Rollout rollout plan" aria-multiline="true" translate="no" tabIndex="0">
              <h1>
                {"Inbox Search Rollout"}
              </h1>
              <p>
                <del data-id="s-intro" data-author="assist" data-time="2026-09-26T14:58:00.000Z">
                  {"At this point in time, the plan is to roll out the new inbox search to every workspace in a number of stages, in order to make sure that we are able to catch regressions well before they have a chance to reach our largest customers."}
                </del>
                <ins data-id="s-intro" data-author="assist" data-time="2026-09-26T14:58:00.000Z">
                  {"We will release inbox search in four stages, so regressions surface before they reach our largest customers."}
                </ins>
              </p>
              <p>
                {"Search ships with Loomwell 4.2 on October 14. This plan covers each stage, the metrics that gate it and who signs off."}
              </p>
              <h2>
                {"Stages"}
              </h2>
              <ol>
                <li>
                  <p>
                    <strong>
                      {"Internal"}
                    </strong>
                    {": the Kestrel Works support team, from September 29."}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>
                      {"Beta"}
                    </strong>
                    {": 40 opt-in workspaces, from October 6. Beta admins will"}
                    <del data-id="s-beta" data-author="assist" data-time="2026-09-26T14:58:00.000Z">
                      {"recieve"}
                    </del>
                    <ins data-id="s-beta" data-author="assist" data-time="2026-09-26T14:58:00.000Z">
                      {"receive"}
                    </ins>
                    {"a short survey after their first week."}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>
                      {"General availability"}
                    </strong>
                    {": every workspace on October 14."}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>
                      {"Enterprise"}
                    </strong>
                    {": workspaces over 500 seats, one week after GA."}
                  </p>
                </li>
              </ol>
              <h2>
                {"Success metrics"}
              </h2>
              <p>
                <del data-id="s-metrics" data-author="assist" data-time="2026-09-26T14:58:00.000Z">
                  {"It is important to note that a stage can only move forward when all of the numbers below have held steady for a period of three consecutive days."}
                </del>
                <ins data-id="s-metrics" data-author="assist" data-time="2026-09-26T14:58:00.000Z">
                  {"A stage moves forward only after these numbers hold for three straight days."}
                </ins>
              </p>
              <ul>
                <li>
                  <p>
                    {"Median query time under 300 ms, p95 under 900 ms."}
                  </p>
                </li>
                <li>
                  <p>
                    {"Zero result rate below 8 percent on the top 200 queries."}
                  </p>
                </li>
                <li>
                  <p>
                    {"No rise in tickets tagged search against the prior week."}
                  </p>
                </li>
              </ul>
              <p>
                {"Any stage pauses on its own if a rollback has occured in the last 24 hours."}
              </p>
              <h2>
                {"Risks"}
              </h2>
              <p>
                {"Index rebuilds for the largest workspaces take up to 6 hours, so enterprise accounts move last. The rebuild runbook still needs an owner (TBD)."}
              </p>
              <p>
                {"Support needs a seperate macro for search feedback before beta starts. Who writes the macro copy, Daniel or Maya?"}
              </p>
              <h2>
                {"Sign-off"}
              </h2>
              <ul data-type="taskList">
                <li className="node-taskItem react-renderer" data-checked="true">
                  <div className="flex gap-2.5 items-start" data-node-view-wrapper="" style={{whiteSpace: "normal"}}>
                    <span className="flex h-7 items-center shrink-0" data-task-toggle="" contentEditable="false">
                      <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_34_" aria-checked="true" aria-label="Search quality review, Lena Hoffmann">
                        <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                          <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </span>
                      </Checkbox>
                      <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </span>
                    <div className="flex-1 min-w-0" data-node-view-content="" style={{whiteSpace: "pre-wrap"}}>
                      <div data-node-view-content-react="" data-node-view-wrapper="" style={{whiteSpace: "inherit"}}>
                        <p>
                          {"Search quality review, Lena Hoffmann"}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="node-taskItem react-renderer" data-checked="false">
                  <div className="flex gap-2.5 items-start" data-node-view-wrapper="" style={{whiteSpace: "normal"}}>
                    <span className="flex h-7 items-center shrink-0" data-task-toggle="" contentEditable="false">
                      <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2u_" aria-checked="false" aria-label="Support readiness, Daniel Okafor"></Checkbox>
                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </span>
                    <div className="flex-1 min-w-0" data-node-view-content="" style={{whiteSpace: "pre-wrap"}}>
                      <div data-node-view-content-react="" data-node-view-wrapper="" style={{whiteSpace: "inherit"}}>
                        <p>
                          {"Support readiness, Daniel Okafor"}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="node-taskItem react-renderer" data-checked="false">
                  <div className="flex gap-2.5 items-start" data-node-view-wrapper="" style={{whiteSpace: "normal"}}>
                    <span className="flex h-7 items-center shrink-0" data-task-toggle="" contentEditable="false">
                      <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_31_" aria-checked="false" aria-label="Launch messaging, Maya Chen"></Checkbox>
                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </span>
                    <div className="flex-1 min-w-0" data-node-view-content="" style={{whiteSpace: "pre-wrap"}}>
                      <div data-node-view-content-react="" data-node-view-wrapper="" style={{whiteSpace: "inherit"}}>
                        <p>
                          {"Launch messaging, Maya Chen"}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="node-taskItem react-renderer" data-checked="false">
                  <div className="flex gap-2.5 items-start" data-node-view-wrapper="" style={{whiteSpace: "normal"}}>
                    <span className="flex h-7 items-center shrink-0" data-task-toggle="" contentEditable="false">
                      <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_37_" aria-checked="false" aria-label="Result card design QA, Arjun Mehta"></Checkbox>
                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </span>
                    <div className="flex-1 min-w-0" data-node-view-content="" style={{whiteSpace: "pre-wrap"}}>
                      <div data-node-view-content-react="" data-node-view-wrapper="" style={{whiteSpace: "inherit"}}>
                        <p>
                          {"Result card design QA, Arjun Mehta"}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom-3 flex justify-center mt-auto pointer-events-none pt-6 sm:bottom-5 sticky z-10">
            <div className="[--dock-spectrum:conic-gradient(in_oklch,var(--color-sky-400),var(--color-violet-500),var(--color-fuchsia-500),var(--color-rose-400),var(--color-amber-300),var(--color-sky-400))] [--fold-top:max(0px,calc(var(--fold-h,0px)-var(--fold-shown,0px)))] [--glow:max(var(--glow-hover,0),var(--glow-focus,0),var(--glow-press,0),var(--glow-work,0))] active:[--glow-press:0.65] dark:[--dock-spectrum:conic-gradient(in_oklch,var(--color-sky-300),var(--color-violet-400),var(--color-fuchsia-400),var(--color-rose-300),var(--color-amber-200),var(--color-sky-300))] data-working:[--glow-work:0.75] focus-within:[--glow-focus:0.55] group/dock has-[[aria-haspopup][aria-expanded=true]]:[--glow-focus:0.55] hover:[--glow-hover:0.3] max-w-xl relative w-full">
              <div className="absolute blur-md bottom-0 duration-300 inset-x-0 opacity-(--glow) pointer-events-none top-(--fold-top) transition-opacity" aria-hidden="true">
                <div className="@container-size [mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)] absolute inset-0 overflow-clip p-1">
                  <span className="-translate-1/2 absolute animate-[spin_7s_linear_infinite] bg-(image:--dock-spectrum) left-1/2 motion-reduce:animate-none size-[max(125cqw,100cqw+100cqh)] top-1/2" data-dock-light="true"></span>
                </div>
              </div>
              <Frame className="backdrop-blur-md backdrop-saturate-50 group-data-folding/dock:[clip-path:inset(var(--fold-top)_0_0_0_round_var(--frame-radius))] pointer-events-auto w-full" spacing="default" role="region" aria-label="Assist">
                <div className="-bottom-px -inset-x-px @container-size [mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)] absolute duration-300 opacity-[clamp(0.7,calc(var(--glow)*10),1)] overflow-clip p-px pointer-events-none rounded-(--frame-radius) top-[calc(var(--fold-top)-1px)] transition-opacity z-10" aria-hidden="true">
                  <span className="-translate-1/2 absolute animate-[spin_7s_linear_infinite] bg-(image:--dock-spectrum) left-1/2 motion-reduce:animate-none size-[max(125cqw,100cqw+100cqh)] top-1/2" data-dock-light="true"></span>
                </div>
                <span className="sr-only" role="status"></span>
                <header className="flex flex-row gap-2 items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <IconTile variant="elevated" size="xs" aria-hidden="true">
                    <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                      <path d="M20 2v4"></path>
                      <path d="M22 4h-4"></path>
                      <circle cx="4" cy="20" r="2"></circle>
                    </svg>
                  </IconTile>
                  <div className="flex flex-1 font-semibold gap-1.5 items-center min-w-0 text-sm">
                    <span className="truncate">
                      {"Plan polished"}
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="font-normal shrink-0 tabular-nums text-muted-foreground text-xs">
                      {"3 edits"}
                    </span>
                  </div>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Review later" id="base-ui-_r_2i_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </header>
                <FramePanel className="flex flex-col gap-3">
                  <Item className="cursor-pointer hover:bg-muted/60 text-start" type="button" variant="default" size="xs">
                    <ItemContent className="min-w-0 text-sm">
                      <span className="[&_del]:bg-destructive/10 [&_del]:decoration-destructive/60 [&_del]:line-through [&_del]:text-destructive-foreground [&_ins]:bg-success/10 [&_ins]:decoration-success/60 [&_ins]:text-success-foreground [&_ins]:underline [&_ins]:underline-offset-2 dark:[&_del]:bg-destructive/15 dark:[&_del]:text-destructive dark:[&_ins]:bg-success/15 dark:[&_ins]:text-success flex flex-col gap-1 min-w-0">
                        <span className="flex gap-2 items-baseline min-w-0">
                          <span className="shrink-0 text-muted-foreground text-xs w-9">
                            {"Was"}
                          </span>
                          <del className="truncate">
                            {"At this point in time, the plan is to roll out the new inbox search to every workspace in a number of stages, in order to make sure that we are able to catch regressions well before they have a chance to reach our largest customers."}
                          </del>
                        </span>
                        <span className="flex gap-2 items-baseline min-w-0">
                          <span className="shrink-0 text-muted-foreground text-xs w-9">
                            {"Now"}
                          </span>
                          <ins className="line-clamp-2 min-w-0">
                            {"We will release inbox search in four stages, so regressions surface before they reach our largest customers."}
                          </ins>
                        </span>
                      </span>
                    </ItemContent>
                  </Item>
                  <div className="flex flex-wrap gap-2 items-center">
                    <ButtonGroup role="group" aria-label="Edits">
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Previous edit" id="base-ui-_r_2k_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                          <path d="m15 18-6-6 6-6"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                      <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-16 tabular-nums text-xs">
                        {"1 of 3"}
                      </div>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Next edit" id="base-ui-_r_2m_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </ButtonGroup>
                    <span className="sr-only" role="status"></span>
                    <div className="flex gap-2 items-center ms-auto">
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="All edits" aria-haspopup="menu" id="base-ui-_r_2r_" baseUiTooltipTrigger="" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                      <Button type="button" tabIndex="0">
                        <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" data-icon="inline-start" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                        {"Reject"}
                      </Button>
                      <Button type="button" tabIndex="0">
                        <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" data-icon="inline-start" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        {"Accept"}
                      </Button>
                    </div>
                  </div>
                </FramePanel>
              </Frame>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
