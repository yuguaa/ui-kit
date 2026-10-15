import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"

export function Pattern() {
  return (
    <div className="flex flex-col h-svh p-4 w-full">
      <Frame className="flex-1 h-full min-h-0 w-full" spacing="default">
        <header className="flex flex-row gap-3 items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-1 flex-col gap-px min-w-0">
            <div className="flex gap-2 items-center min-w-0">
              <div className="font-semibold text-sm truncate">
                Loomwell 4.2
              </div>
            </div>
            <div className="text-muted-foreground text-xs">
              <span className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-center">
                <span>
                  Launch brief
                </span>
                <span className="gap-1.5 inline-flex items-center max-sm:hidden">
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  Edited Sep 26
                </span>
                <span className="gap-1.5 inline-flex items-center">
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span aria-live="polite">
                    Saved
                  </span>
                </span>
              </span>
            </div>
          </div>
          <Tooltip>
          <TooltipTrigger className="*:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background -space-x-2 cn-avatar-group flex group/avatar-group max-sm:hidden" role="group" aria-label="Shared with Maya Chen, Daniel Okafor, and Lena Hoffmann" id="base-ui-_r_1_" baseUiTooltipTrigger="">
            <Avatar size="sm">
              <AvatarImage alt="Maya Chen" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
            </Avatar>
            <Avatar size="sm">
              <AvatarImage alt="Daniel Okafor" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
            </Avatar>
            <Avatar size="sm">
              <AvatarImage alt="Lena Hoffmann" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
            </Avatar>
          </TooltipTrigger>
          </Tooltip>
          <DropdownMenu>
          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Document actions" aria-haspopup="menu" id="base-ui-_r_5_" aria-expanded="false" extracted="1">
            <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </DropdownMenuTrigger>
          </DropdownMenu>
        </header>
        <FramePanel className="flex flex-col min-h-0 p-0">
          <div className="border-b flex gap-1 items-center no-scrollbar overflow-x-auto overflow-y-hidden px-(--frame-panel-header-px) py-(--frame-panel-header-py) shrink-0 supports-[animation-timeline:scroll()]:scroll-fade-x" role="toolbar" aria-orientation="horizontal" aria-label="Formatting">
            <div className="flex gap-0.5 items-center shrink-0" role="group" aria-label="History">
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" disabled="" tabIndex="-1" disabled aria-label="Undo" toolbarItem="" id="base-ui-_r_9_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-undo-2 lucide-undo2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Undo2Icon" tabler="IconArrowBackUp" hugeicons="Undo02Icon" phosphor="ArrowUUpLeftIcon" remixicon="RiArrowGoBackLine" aria-hidden="true">
                  <path d="M9 14 4 9l5-5"></path>
                  <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" disabled="" tabIndex="-1" disabled aria-label="Redo" toolbarItem="" id="base-ui-_r_b_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-redo-2 lucide-redo2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Redo2Icon" tabler="IconArrowForwardUp" hugeicons="Redo02Icon" phosphor="ArrowUUpRightIcon" remixicon="RiArrowGoForwardLine" aria-hidden="true">
                  <path d="m15 14 5-5-5-5"></path>
                  <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
            </div>
            <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-between outline-none select-none shrink-0 sm:w-28 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Block type, Heading 1" toolbarItem="" aria-haspopup="menu" id="base-ui-_r_f_" aria-expanded="false">
              <span className="flex sm:hidden">
                <svg className="lucide lucide-heading-1 lucide-heading1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Heading1Icon" tabler="IconH1" hugeicons="Heading01Icon" phosphor="TextHOneIcon" remixicon="RiH1" aria-hidden="true">
                  <path d="M4 12h8"></path>
                  <path d="M4 18V6"></path>
                  <path d="M12 18V6"></path>
                  <path d="m17 12 3-2v8"></path>
                </svg>
              </span>
              <span className="max-sm:hidden truncate">
                Heading 1
              </span>
              <svg className="lucide lucide-chevron-down opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
            <div className="flex gap-0.5 items-center shrink-0" role="group" aria-label="Text style">
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Bold" toolbarItem="" id="base-ui-_r_i_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-bold" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BoldIcon" tabler="IconBold" hugeicons="TextBoldIcon" phosphor="TextBIcon" remixicon="RiBold" aria-hidden="true">
                  <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Italic" toolbarItem="" id="base-ui-_r_l_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-italic" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ItalicIcon" tabler="IconItalic" hugeicons="TextItalicIcon" phosphor="TextItalicIcon" remixicon="RiItalic" aria-hidden="true">
                  <line x1="19" x2="10" y1="4" y2="4"></line>
                  <line x1="14" x2="5" y1="20" y2="20"></line>
                  <line x1="15" x2="9" y1="4" y2="20"></line>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Underline" toolbarItem="" id="base-ui-_r_o_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-underline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UnderlineIcon" tabler="IconUnderline" hugeicons="TextUnderlineIcon" phosphor="TextUnderlineIcon" remixicon="RiUnderline" aria-hidden="true">
                  <path d="M6 4v6a6 6 0 0 0 12 0V4"></path>
                  <line x1="4" x2="20" y1="20" y2="20"></line>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Strikethrough" toolbarItem="" id="base-ui-_r_r_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-strikethrough" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StrikethroughIcon" tabler="IconStrikethrough" hugeicons="TextStrikethroughIcon" phosphor="TextStrikethroughIcon" remixicon="RiStrikethrough" aria-hidden="true">
                  <path d="M16 4H9a3 3 0 0 0-2.83 4"></path>
                  <path d="M14 12a4 4 0 0 1 0 8H6"></path>
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Inline code" toolbarItem="" id="base-ui-_r_u_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                  <path d="m16 18 6-6-6-6"></path>
                  <path d="m8 6-6 6 6 6"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
            </div>
            <div className="flex gap-0.5 items-center shrink-0" role="group" aria-label="Annotate">
              <Tooltip>
              <TooltipTrigger className="flex" id="base-ui-_r_12_" baseUiTooltipTrigger="">
                <Popover>
                <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Highlight" toolbarItem="" baseUiClickTrigger="" id="base-ui-_r_13_" aria-haspopup="dialog" aria-expanded="false">
                  <svg className="lucide lucide-highlighter" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HighlighterIcon" tabler="IconHighlight" hugeicons="HighlighterIcon" phosphor="HighlighterIcon" remixicon="RiMarkPenLine" aria-hidden="true">
                    <path d="m9 11-6 6v3h9l3-3"></path>
                    <path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"></path>
                  </svg>
                </PopoverTrigger>
                </Popover>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="flex" id="base-ui-_r_17_" baseUiTooltipTrigger="">
                <Popover>
                <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Link" toolbarItem="" baseUiClickTrigger="" id="base-ui-_r_18_" aria-haspopup="dialog" aria-expanded="false">
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
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Bullet list" toolbarItem="" id="base-ui-_r_1b_" baseUiTooltipTrigger="">
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
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Numbered list" toolbarItem="" id="base-ui-_r_1e_" baseUiTooltipTrigger="">
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
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Task list" toolbarItem="" id="base-ui-_r_1h_" baseUiTooltipTrigger="">
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
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Quote" toolbarItem="" id="base-ui-_r_1k_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-text-quote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TextQuoteIcon" tabler="IconBlockquote" hugeicons="LeftToRightBlockQuoteIcon" phosphor="QuotesIcon" remixicon="RiDoubleQuotesL" aria-hidden="true">
                  <path d="M17 5H3"></path>
                  <path d="M21 12H8"></path>
                  <path d="M21 19H8"></path>
                  <path d="M3 12v7"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Code block" toolbarItem="" id="base-ui-_r_1n_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-square-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCodeIcon" tabler="IconSourceCode" hugeicons="SourceCodeSquareIcon" phosphor="CodeBlockIcon" remixicon="RiCodeBoxLine" aria-hidden="true">
                  <path d="m10 9-3 3 3 3"></path>
                  <path d="m14 15 3-3-3-3"></path>
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-label="Divider" toolbarItem="" id="base-ui-_r_1q_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
            </div>
            <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
            <Tooltip>
            <TooltipTrigger className="flex shrink-0" id="base-ui-_r_1v_" baseUiTooltipTrigger="">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none gap-0.5 group/button inline-flex items-center justify-center outline-none px-1.5 select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-label="Alignment, Align left" toolbarItem="" aria-haspopup="menu" id="base-ui-_r_20_" aria-expanded="false">
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
          <div className="flex-1 min-h-0 overflow-y-auto relative supports-[animation-timeline:scroll()]:scroll-fade-y">
            <div className="[&_.ProseMirror-gapcursor]:after:border-t-foreground! [&_.tiptap>*+*]:mt-3 [&_.tiptap>h2:not(:first-child)]:mt-8 [&_.tiptap>h3:not(:first-child)]:mt-6 [&_.tiptap]:break-words [&_.tiptap]:flex-1 [&_.tiptap]:outline-none [&_.tiptap_.ProseMirror-selectednode]:outline-2 [&_.tiptap_.ProseMirror-selectednode]:outline-ring/50 [&_.tiptap_.is-empty]:before:content-[attr(data-placeholder)] [&_.tiptap_.is-empty]:before:float-start [&_.tiptap_.is-empty]:before:h-0 [&_.tiptap_.is-empty]:before:pointer-events-none [&_.tiptap_.is-empty]:before:text-muted-foreground [&_.tiptap_.selection]:bg-primary/15 [&_.tiptap_:not(pre)>code]:bg-muted [&_.tiptap_:not(pre)>code]:font-mono [&_.tiptap_:not(pre)>code]:px-1 [&_.tiptap_:not(pre)>code]:py-0.5 [&_.tiptap_:not(pre)>code]:rounded-sm [&_.tiptap_:not(pre)>code]:text-sm [&_.tiptap_a]:text-primary [&_.tiptap_a]:underline [&_.tiptap_a]:underline-offset-4 [&_.tiptap_blockquote]:border-s-2 [&_.tiptap_blockquote]:ps-4 [&_.tiptap_blockquote]:text-muted-foreground [&_.tiptap_h1]:font-semibold [&_.tiptap_h1]:text-2xl/9 [&_.tiptap_h1]:tracking-tight [&_.tiptap_h2]:font-semibold [&_.tiptap_h2]:text-xl/8 [&_.tiptap_h2]:tracking-tight [&_.tiptap_h3]:font-semibold [&_.tiptap_h3]:text-lg/7 [&_.tiptap_hr]:border-border [&_.tiptap_hr]:my-6 [&_.tiptap_li+li]:mt-1 [&_.tiptap_li::marker]:text-muted-foreground [&_.tiptap_li[data-checked=true]>div>[data-node-view-content]]:line-through [&_.tiptap_li[data-checked=true]>div>[data-node-view-content]]:text-muted-foreground [&_.tiptap_mark[data-color=blue]]:bg-sky-200 [&_.tiptap_mark[data-color=green]]:bg-emerald-200 [&_.tiptap_mark[data-color=pink]]:bg-pink-200 [&_.tiptap_mark[data-color=violet]]:bg-violet-200 [&_.tiptap_mark]:bg-yellow-200 [&_.tiptap_mark]:px-0.5 [&_.tiptap_mark]:text-inherit [&_.tiptap_ol]:list-decimal [&_.tiptap_ol]:ps-6 [&_.tiptap_pre]:bg-muted [&_.tiptap_pre]:font-mono [&_.tiptap_pre]:px-4 [&_.tiptap_pre]:py-3 [&_.tiptap_pre]:rounded-md [&_.tiptap_pre]:text-sm [&_.tiptap_ul[data-type=taskList]]:list-none [&_.tiptap_ul[data-type=taskList]]:ps-0.5 [&_.tiptap_ul]:list-disc [&_.tiptap_ul]:ps-6 dark:[&_.tiptap_mark[data-color=blue]]:bg-sky-400/30 dark:[&_.tiptap_mark[data-color=green]]:bg-emerald-400/30 dark:[&_.tiptap_mark[data-color=pink]]:bg-pink-400/30 dark:[&_.tiptap_mark[data-color=violet]]:bg-violet-400/30 dark:[&_.tiptap_mark]:bg-yellow-400/30 flex flex-col max-w-3xl min-h-full mx-auto px-4 py-6 sm:px-8 sm:py-10 text-base/7 text-foreground w-full">
              <div className="ProseMirror tiptap" contentEditable="true" aria-label="Loomwell 4.2 launch brief" aria-multiline="true" translate="no" tabIndex="0">
                <h1>
                  Loomwell 4.2 Launch Brief
                </h1>
                <p>
                  Loomwell 4.2 brings
                  <strong>
                    scheduled replies
                  </strong>
                  and a rebuilt
                  <strong>
                    inbox search
                  </strong>
                  to every workspace on October 14. This brief is the source of truth for positioning, rollout and support readiness. Live numbers sit on the
                  <a target="_blank" rel="noopener noreferrer nofollow" href="https://loomwell.example/rollout">
                    rollout dashboard
                  </a>
                  .
                </p>
                <h2>
                  Goals
                </h2>
                <ul>
                  <li>
                    <p>
                      Cut median first reply time for teams over 50 seats by 20%.
                    </p>
                  </li>
                  <li>
                    <p>
                      Move inbox search from the Scale plan to every plan,
                      <em>
                        including Free
                      </em>
                      .
                    </p>
                  </li>
                  <li>
                    <p>
                      Keep launch week tickets under 1,200, down from 1,640 at the 4.0 launch.
                    </p>
                  </li>
                  <li>
                    <p>
                      Publish both help center articles before general availability.
                    </p>
                  </li>
                </ul>
                <h2>
                  Rollout
                </h2>
                <ol>
                  <li>
                    <p>
                      Dogfood with the support team from October 1.
                    </p>
                  </li>
                  <li>
                    <p>
                      Open to 10% of workspaces on October 7 while search latency is watched.
                    </p>
                  </li>
                  <li>
                    <p>
                      General availability on October 14, with the changelog and the customer email.
                    </p>
                  </li>
                </ol>
                <blockquote>
                  <p>
                    Half my team works overnight. Scheduling replies means nobody sends a 3 a.m. apology again.
                  </p>
                  <p>
                    <em>
                      Priya Raman, support lead at Fieldnote
                    </em>
                  </p>
                </blockquote>
                <p>
                  Pricing does not change in 4.2.
                  <mark data-color="yellow">
                    Leave the Q1 pricing review out of every piece of launch copy.
                  </mark>
                </p>
                <h2>
                  Launch Checklist
                </h2>
                <ul data-type="taskList">
                  <li className="node-taskItem react-renderer" data-checked="true">
                    <div className="flex gap-2.5 items-start" data-node-view-wrapper="" style={{whiteSpace: "normal"}}>
                      <span className="flex h-7 items-center shrink-0" data-task-toggle="" contentEditable="false">
                        <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_2i_" aria-checked="true" aria-label="Final copy for the in-app announcement">
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
                            Final copy for the in-app announcement
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="node-taskItem react-renderer" data-checked="true">
                    <div className="flex gap-2.5 items-start" data-node-view-wrapper="" style={{whiteSpace: "normal"}}>
                      <span className="flex h-7 items-center shrink-0" data-task-toggle="" contentEditable="false">
                        <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_2f_" aria-checked="true" aria-label="Search latency dashboard shared with the on-call rotation">
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
                            Search latency dashboard shared with the on-call rotation
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="node-taskItem react-renderer" data-checked="false">
                    <div className="flex gap-2.5 items-start" data-node-view-wrapper="" style={{whiteSpace: "normal"}}>
                      <span className="flex h-7 items-center shrink-0" data-task-toggle="" contentEditable="false">
                        <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2c_" aria-checked="false" aria-label="Help center article for scheduled replies, owned by Daniel"></Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </span>
                      <div className="flex-1 min-w-0" data-node-view-content="" style={{whiteSpace: "pre-wrap"}}>
                        <div data-node-view-content-react="" data-node-view-wrapper="" style={{whiteSpace: "inherit"}}>
                          <p>
                            Help center article for scheduled replies, owned by
                            <strong>
                              Daniel
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="node-taskItem react-renderer" data-checked="false">
                    <div className="flex gap-2.5 items-start" data-node-view-wrapper="" style={{whiteSpace: "normal"}}>
                      <span className="flex h-7 items-center shrink-0" data-task-toggle="" contentEditable="false">
                        <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_29_" aria-checked="false" aria-label="Support macros updated for the new search operators"></Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </span>
                      <div className="flex-1 min-w-0" data-node-view-content="" style={{whiteSpace: "pre-wrap"}}>
                        <div data-node-view-content-react="" data-node-view-wrapper="" style={{whiteSpace: "inherit"}}>
                          <p>
                            Support macros updated for the new search operators
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <h3>
                  Search Operators
                </h3>
                <p>
                  Search now reads
                  <code>
                    from:
                  </code>
                  ,
                  <code>
                    status:
                  </code>
                  and quoted phrases. Paste this into the macro as the example:
                </p>
                <pre>
                  <code>
                    from:maya status:open "refund request"
                  </code>
                </pre>
                <p>
                  Questions go to Maya in #launch-loomwell.
                </p>
              </div>
            </div>
          </div>
        </FramePanel>
        <footer className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
          <p className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
            <span>
              <span className="font-medium text-foreground">
                220
              </span>
              words
            </span>
            <span className="gap-1.5 inline-flex items-center max-sm:hidden">
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span>
                <span className="font-medium text-foreground">
                  1,346
                </span>
                characters
              </span>
            </span>
            <span className="gap-1.5 inline-flex items-center">
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              1 min read
            </span>
          </p>
          <Popover>
          <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_24_" aria-haspopup="dialog" aria-expanded="false">
            <svg className="lucide lucide-keyboard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KeyboardIcon" tabler="IconKeyboard" hugeicons="KeyboardIcon" phosphor="KeyboardIcon" remixicon="RiKeyboardLine" aria-hidden="true">
              <path d="M10 8h.01"></path>
              <path d="M12 12h.01"></path>
              <path d="M14 8h.01"></path>
              <path d="M16 12h.01"></path>
              <path d="M18 8h.01"></path>
              <path d="M6 8h.01"></path>
              <path d="M7 16h10"></path>
              <path d="M8 12h.01"></path>
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            </svg>
            <span className="max-sm:sr-only">
              Shortcuts
            </span>
          </PopoverTrigger>
          </Popover>
        </footer>
      </Frame>
    </div>
  )
}
