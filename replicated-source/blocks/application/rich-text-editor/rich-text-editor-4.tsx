import {
  Avatar,
  AvatarGroup,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
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
import { Label } from "@/registry/bases/base/ui/label"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex flex-col min-h-svh w-full">
      <div className="[--spec-header:--spacing(26)] [--spec-offset:0px] bg-background flex flex-1 flex-col text-foreground w-full" style={{"--spec-header": "102px"}}>
        <header className="bg-background border-b sticky top-0 z-20">
          <div className="flex gap-3 items-center min-h-14 px-4 py-2 sm:px-6">
            <div className="flex flex-1 flex-col gap-px min-w-0">
              <div className="flex gap-2 items-center min-w-0">
                <h1 className="font-medium text-base/5 truncate">
                  Shared Drafts
                </h1>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 max-sm:sr-only min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                  Live
                </Badge>
              </div>
              <p className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-center text-muted-foreground text-xs">
                <span>
                  Loomwell 4.3
                </span>
                <span className="gap-1.5 inline-flex items-center max-sm:hidden">
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  Product spec
                </span>
                <span className="gap-1.5 inline-flex items-center max-sm:hidden">
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  Edited just now
                </span>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="max-md:hidden tabular-nums text-muted-foreground text-xs">
                3 here
              </span>
              <AvatarGroup role="group" aria-label="3 teammates here, 0 editing">
                <Tooltip>
                <TooltipTrigger className="aria-disabled:cursor-default focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:z-10 hover:z-10 outline-none relative rounded-full" type="button" aria-label="Follow Maya Chen, Idle" id="base-ui-_r_1c_" baseUiTooltipTrigger="" aria-pressed="false" extracted="1">
                  <Avatar className="after:border-2 after:border-violet-600 after:mix-blend-normal dark:after:border-violet-400 dark:after:mix-blend-normal data-[presence=unsynced]:opacity-50 ring-2 ring-background" size="sm" presence="idle">
                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="aria-disabled:cursor-default focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:z-10 hover:z-10 outline-none relative rounded-full" type="button" aria-label="Follow Lena Hoffmann, Idle" id="base-ui-_r_1e_" baseUiTooltipTrigger="" aria-pressed="false">
                  <Avatar className="after:border-2 after:border-sky-700 after:mix-blend-normal dark:after:border-sky-400 dark:after:mix-blend-normal data-[presence=unsynced]:opacity-50 ring-2 ring-background" size="sm" presence="idle">
                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="aria-disabled:cursor-default focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:z-10 hover:z-10 outline-none relative rounded-full" type="button" aria-label="Daniel Okafor, Viewing" aria-disabled="true" id="base-ui-_r_1g_" baseUiTooltipTrigger="">
                  <Avatar className="after:border-2 after:border-pink-700 after:mix-blend-normal dark:after:border-pink-400 dark:after:mix-blend-normal data-[presence=unsynced]:opacity-50 ring-2 ring-background" size="sm" presence="viewing">
                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                </TooltipTrigger>
                </Tooltip>
              </AvatarGroup>
            </div>
            <div className="flex gap-1.5 items-center shrink-0">
              <Label id="base-ui-_r_1i_-label">
                <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_1h_" aria-checked="true" size="sm" aria-label="Online" aria-labelledby="base-ui-_r_1i_-label">
                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                </Switch>
                <input id="base-ui-_r_1i_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <span className="max-sm:sr-only">
                  Online
                </span>
              </Label>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Document actions" aria-haspopup="menu" id="base-ui-_r_1n_" aria-expanded="false">
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
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" disabled="" tabIndex="-1" disabled aria-label="Undo" toolbarItem="" id="base-ui-_r_1q_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-undo-2 lucide-undo2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Undo2Icon" tabler="IconArrowBackUp" hugeicons="Undo02Icon" phosphor="ArrowUUpLeftIcon" remixicon="RiArrowGoBackLine" aria-hidden="true">
                    <path d="M9 14 4 9l5-5"></path>
                    <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" disabled="" tabIndex="-1" disabled aria-label="Redo" toolbarItem="" id="base-ui-_r_1s_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-redo-2 lucide-redo2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Redo2Icon" tabler="IconArrowForwardUp" hugeicons="Redo02Icon" phosphor="ArrowUUpRightIcon" remixicon="RiArrowGoForwardLine" aria-hidden="true">
                    <path d="m15 14 5-5-5-5"></path>
                    <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </div>
              <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-between outline-none select-none shrink-0 sm:w-28 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Block type, Text" toolbarItem="" aria-haspopup="menu" id="base-ui-_r_20_" aria-expanded="false">
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
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Bold" toolbarItem="" id="base-ui-_r_23_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-bold" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BoldIcon" tabler="IconBold" hugeicons="TextBoldIcon" phosphor="TextBIcon" remixicon="RiBold" aria-hidden="true">
                    <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Italic" toolbarItem="" id="base-ui-_r_26_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-italic" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ItalicIcon" tabler="IconItalic" hugeicons="TextItalicIcon" phosphor="TextItalicIcon" remixicon="RiItalic" aria-hidden="true">
                    <line x1="19" x2="10" y1="4" y2="4"></line>
                    <line x1="14" x2="5" y1="20" y2="20"></line>
                    <line x1="15" x2="9" y1="4" y2="20"></line>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Underline" toolbarItem="" id="base-ui-_r_29_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-underline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UnderlineIcon" tabler="IconUnderline" hugeicons="TextUnderlineIcon" phosphor="TextUnderlineIcon" remixicon="RiUnderline" aria-hidden="true">
                    <path d="M6 4v6a6 6 0 0 0 12 0V4"></path>
                    <line x1="4" x2="20" y1="20" y2="20"></line>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="flex" id="base-ui-_r_2d_" baseUiTooltipTrigger="">
                  <Popover>
                  <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Link" toolbarItem="" baseUiClickTrigger="" id="base-ui-_r_2e_" aria-haspopup="dialog" aria-expanded="false">
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
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Bullet list" toolbarItem="" id="base-ui-_r_2h_" baseUiTooltipTrigger="">
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
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Numbered list" toolbarItem="" id="base-ui-_r_2k_" baseUiTooltipTrigger="">
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
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="-1" aria-pressed="false" aria-label="Task list" toolbarItem="" id="base-ui-_r_2n_" baseUiTooltipTrigger="">
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
              <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              <div className="flex gap-0.5 items-center shrink-0" role="group" aria-label="Comments">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" disabled="" tabIndex="-1" disabled aria-label="Comment" toolbarItem="" id="base-ui-_r_2q_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-message-square-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareTextIcon" tabler="IconMessageDots" hugeicons="Comment01Icon" phosphor="ChatTextIcon" remixicon="RiMessage3Line" aria-hidden="true">
                    <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                    <path d="M7 11h10"></path>
                    <path d="M7 15h6"></path>
                    <path d="M7 7h8"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-1 gap-10 items-start max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="flex-1 min-w-0">
            <div className="[&_.ProseMirror-gapcursor]:after:border-t-foreground! [&_.tiptap>*+*]:mt-3 [&_.tiptap>h2:not(:first-child)]:mt-8 [&_.tiptap>h3:not(:first-child)]:mt-6 [&_.tiptap]:break-words [&_.tiptap]:flex-1 [&_.tiptap]:outline-none [&_.tiptap_.ProseMirror-selectednode]:outline-2 [&_.tiptap_.ProseMirror-selectednode]:outline-ring/50 [&_.tiptap_.is-empty]:before:content-[attr(data-placeholder)] [&_.tiptap_.is-empty]:before:float-start [&_.tiptap_.is-empty]:before:h-0 [&_.tiptap_.is-empty]:before:pointer-events-none [&_.tiptap_.is-empty]:before:text-muted-foreground [&_.tiptap_.selection]:bg-primary/15 [&_.tiptap_:not(pre)>code]:bg-muted [&_.tiptap_:not(pre)>code]:font-mono [&_.tiptap_:not(pre)>code]:px-1 [&_.tiptap_:not(pre)>code]:py-0.5 [&_.tiptap_:not(pre)>code]:rounded-sm [&_.tiptap_:not(pre)>code]:text-sm [&_.tiptap_[data-comment-id]]:scroll-mt-[calc(var(--spec-header)+--spacing(6))] [&_.tiptap_[data-comment=active]:not([data-peer-selection])]:bg-warning/25 [&_.tiptap_[data-comment=open]:not([data-peer-selection])]:bg-warning/10 [&_.tiptap_[data-comment]]:decoration-2 [&_.tiptap_[data-comment]]:decoration-warning/70 [&_.tiptap_[data-comment]]:underline [&_.tiptap_[data-comment]]:underline-offset-4 [&_.tiptap_a]:text-primary [&_.tiptap_a]:underline [&_.tiptap_a]:underline-offset-4 [&_.tiptap_blockquote]:border-s-2 [&_.tiptap_blockquote]:ps-4 [&_.tiptap_blockquote]:text-muted-foreground [&_.tiptap_h1]:font-semibold [&_.tiptap_h1]:text-2xl/9 [&_.tiptap_h1]:tracking-tight [&_.tiptap_h2]:font-semibold [&_.tiptap_h2]:text-xl/8 [&_.tiptap_h2]:tracking-tight [&_.tiptap_h3]:font-semibold [&_.tiptap_h3]:text-lg/7 [&_.tiptap_hr]:border-border [&_.tiptap_hr]:my-6 [&_.tiptap_li+li]:mt-1 [&_.tiptap_li::marker]:text-muted-foreground [&_.tiptap_li[data-checked=true]>div>[data-node-view-content]]:line-through [&_.tiptap_li[data-checked=true]>div>[data-node-view-content]]:text-muted-foreground [&_.tiptap_mark[data-color=blue]]:bg-sky-200 [&_.tiptap_mark[data-color=green]]:bg-emerald-200 [&_.tiptap_mark[data-color=pink]]:bg-pink-200 [&_.tiptap_mark[data-color=violet]]:bg-violet-200 [&_.tiptap_mark]:bg-yellow-200 [&_.tiptap_mark]:px-0.5 [&_.tiptap_mark]:text-inherit [&_.tiptap_ol]:list-decimal [&_.tiptap_ol]:ps-6 [&_.tiptap_pre]:bg-muted [&_.tiptap_pre]:font-mono [&_.tiptap_pre]:px-4 [&_.tiptap_pre]:py-3 [&_.tiptap_pre]:rounded-md [&_.tiptap_pre]:text-sm [&_.tiptap_ul[data-type=taskList]]:list-none [&_.tiptap_ul[data-type=taskList]]:ps-0.5 [&_.tiptap_ul]:list-disc [&_.tiptap_ul]:ps-6 dark:[&_.tiptap_[data-comment=active]:not([data-peer-selection])]:bg-warning/30 dark:[&_.tiptap_[data-comment=open]:not([data-peer-selection])]:bg-warning/15 dark:[&_.tiptap_mark[data-color=blue]]:bg-sky-400/30 dark:[&_.tiptap_mark[data-color=green]]:bg-emerald-400/30 dark:[&_.tiptap_mark[data-color=pink]]:bg-pink-400/30 dark:[&_.tiptap_mark[data-color=violet]]:bg-violet-400/30 dark:[&_.tiptap_mark]:bg-yellow-400/30 flex flex-col max-w-3xl min-h-full mx-auto py-8 sm:py-10 text-base/7 text-foreground w-full">
              <div className="ProseMirror tiptap" contentEditable="true" aria-label="Shared Drafts" aria-multiline="true" translate="no" tabIndex="0">
                <p>
                  Loomwell 4.3 lets two support agents write one customer reply together before it goes out. This spec covers the first release, planned for general availability on November 18. A private beta opens to 40 accounts on October 28.
                </p>
                <h2>
                  Problem
                </h2>
                <p>
                  Hard tickets pull in a second agent on 22% of escalations. Today the helper pastes a draft into an internal note, waits for a thumbs up, and the owner copies the final text back into the reply. Across 1,840 escalations in August, that loop added
                  <span data-comment-id="t-handoff">
                    <span data-comment="open">
                      a median of 14 minutes
                    </span>
                  </span>
                  to first response.
                </p>
                <h2>
                  Goals
                </h2>
                <ul>
                  <li>
                    <p>
                      Two agents edit the same reply draft at once, with
                      <span data-comment-id="t-cursors">
                        <span data-comment="open">
                          named cursors
                        </span>
                      </span>
                      <span className="-mx-px ProseMirror-widget border-violet-600 border-x border-y-0 break-normal dark:border-violet-400 pointer-events-none relative" data-peer="maya" aria-hidden="true" contentEditable="false">
                        ⁠
                        <span className="-translate-x-1/2 absolute bg-violet-600 bottom-full dark:bg-violet-400 dark:text-violet-950 font-medium px-1.5 py-0.5 rounded-sm select-none start-0 text-white text-xs/none whitespace-nowrap" data-caret-label="">
                          Maya
                        </span>
                        ⁠
                      </span>
                      , and see each other’s changes as they type.
                    </p>
                  </li>
                  <li>
                    <p>
                      Cut the median handoff on escalations from 14 minutes to under 5
                      <span className="-mx-px ProseMirror-widget border-sky-700 border-x border-y-0 break-normal dark:border-sky-400 pointer-events-none relative" data-peer="lena" aria-hidden="true" contentEditable="false">
                        ⁠
                        <span className="-translate-x-1/2 absolute bg-sky-700 bottom-full dark:bg-sky-400 dark:text-sky-950 font-medium px-1.5 py-0.5 rounded-sm select-none start-0 text-white text-xs/none whitespace-nowrap" data-caret-label="">
                          Lena
                        </span>
                        ⁠
                      </span>
                      , measured from invite to send.
                    </p>
                  </li>
                  <li>
                    <p>
                      Every draft keeps one owner, and only the owner sends it.
                    </p>
                  </li>
                  <li>
                    <p>
                      Nothing typed is lost when an agent drops offline.
                    </p>
                  </li>
                </ul>
                <h2>
                  Non-Goals
                </h2>
                <ul>
                  <li>
                    <p>
                      Co-editing internal notes, macros or help center articles.
                    </p>
                  </li>
                  <li>
                    <p>
                      Suggesting mode or tracked changes inside a reply.
                    </p>
                  </li>
                </ul>
                <h2>
                  How It Works
                </h2>
                <p>
                  Any agent on a ticket can invite a teammate from the reply box. The teammate joins the draft in place, and a presence row above the composer shows everyone in it.
                  <span data-comment-id="t-owner">
                    <span data-comment="open">
                      Only the owner can press Send
                    </span>
                  </span>
                  ; a teammate can ask for ownership and the owner approves it in one click.
                </p>
                <p>
                  Drafts sync through the existing realtime gateway. If an agent drops offline, edits queue locally and merge on reconnect, so no one loses text.
                </p>
                <p>
                  Access follows the ticket: anyone who can reply can join, light agents can watch but not type, and every join and ownership change lands in the ticket’s audit log.
                </p>
                <h2>
                  Success Metrics
                </h2>
                <ul>
                  <li>
                    <p>
                      Median escalation handoff under 5 minutes by the end of the beta.
                    </p>
                  </li>
                  <li>
                    <p>
                      At least 30% of escalations on beta accounts use a shared draft within four weeks.
                    </p>
                  </li>
                  <li>
                    <p>
                      No rise in replies sent by the wrong owner, checked weekly by support operations.
                    </p>
                  </li>
                  <li>
                    <p>
                      Satisfaction on shared replies at or above the team average of 91%.
                    </p>
                  </li>
                </ul>
                <h2>
                  Rollout
                </h2>
                <ol>
                  <li>
                    <p>
                      October 28: private beta for 40 accounts, English only.
                    </p>
                  </li>
                  <li>
                    <p>
                      November 4: every Growth and Scale workspace, behind a workspace setting.
                    </p>
                  </li>
                  <li>
                    <p>
                      November 18: general availability, on by default for new workspaces.
                    </p>
                  </li>
                </ol>
                <h2>
                  Risks
                </h2>
                <p>
                  Two agents can still promise different things in different paragraphs. The composer shows who changed each paragraph last, and the owner reads the whole draft before sending.
                </p>
                <p>
                  Offline merges never conflict at the text level, but edits that land in a burst on reconnect can surprise the owner. Merged paragraphs stay marked for ten seconds after a sync.
                </p>
                <h2>
                  Open Questions
                </h2>
                <ul>
                  <li>
                    <p>
                      Does a shared reply count toward both agents’ response time targets?
                    </p>
                  </li>
                  <li>
                    <p>
                      Should the draft lock once the owner opens the send confirmation?
                    </p>
                  </li>
                  <li>
                    <p>
                      Do we show live cursors to
                      <span data-comment-id="t-free">
                        <span data-comment="open">
                          agents on the free plan
                        </span>
                      </span>
                      ?
                    </p>
                  </li>
                </ul>
                <h2>
                  Launch Checklist
                </h2>
                <ul data-type="taskList">
                  <li className="node-taskItem react-renderer" data-checked="true">
                    <div className="flex gap-2.5 items-start" data-node-view-wrapper="" style={{whiteSpace: "normal"}}>
                      <span className="flex h-7 items-center shrink-0" data-task-toggle="" contentEditable="false">
                        <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_3d_" aria-checked="true" aria-label="Presence row design review">
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
                            Presence row design review
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="node-taskItem react-renderer" data-checked="false">
                    <div className="flex gap-2.5 items-start" data-node-view-wrapper="" style={{whiteSpace: "normal"}}>
                      <span className="flex h-7 items-center shrink-0" data-task-toggle="" contentEditable="false">
                        <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3m_" aria-checked="false" aria-label="Load test the gateway at 3,000 concurrent drafts"></Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </span>
                      <div className="flex-1 min-w-0" data-node-view-content="" style={{whiteSpace: "pre-wrap"}}>
                        <div data-node-view-content-react="" data-node-view-wrapper="" style={{whiteSpace: "inherit"}}>
                          <p>
                            Load test the gateway at 3,000 concurrent drafts
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="node-taskItem react-renderer" data-checked="false">
                    <div className="flex gap-2.5 items-start" data-node-view-wrapper="" style={{whiteSpace: "normal"}}>
                      <span className="flex h-7 items-center shrink-0" data-task-toggle="" contentEditable="false">
                        <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3g_" aria-checked="false" aria-label="Macro audit with support operations"></Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </span>
                      <div className="flex-1 min-w-0" data-node-view-content="" style={{whiteSpace: "pre-wrap"}}>
                        <div data-node-view-content-react="" data-node-view-wrapper="" style={{whiteSpace: "inherit"}}>
                          <p>
                            Macro audit with support operations
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="node-taskItem react-renderer" data-checked="false">
                    <div className="flex gap-2.5 items-start" data-node-view-wrapper="" style={{whiteSpace: "normal"}}>
                      <span className="flex h-7 items-center shrink-0" data-task-toggle="" contentEditable="false">
                        <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3j_" aria-checked="false" aria-label="Help center article and in-app tour"></Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </span>
                      <div className="flex-1 min-w-0" data-node-view-content="" style={{whiteSpace: "pre-wrap"}}>
                        <div data-node-view-content-react="" data-node-view-wrapper="" style={{whiteSpace: "inherit"}}>
                          <p>
                            Help center article and in-app tour
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <p>
                  Owner: Arjun Mehta. Engineering: Lena Hoffmann. Launch: Maya Chen.
                </p>
              </div>
            </div>
          </div>
          <aside className="flex flex-col max-h-[calc(100svh-var(--spec-offset)-var(--spec-header))] py-10 shrink-0 sticky top-(--spec-header) w-80" aria-label="Discussion">
            <Card className="min-h-0" size="sm" role="region" aria-labelledby="_r_2r_">
              <CardHeader>
                <CardTitle className="flex gap-2 items-center">
                  <h2 className="outline-none" id="_r_2r_" tabIndex="-1">
                    Comments
                  </h2>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                    4
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col min-h-0">
                <div className="min-h-0 no-scrollbar overflow-y-auto overscroll-contain relative supports-[animation-timeline:scroll()]:scroll-fade-y">
                  <ul className="flex flex-col gap-0.5" aria-label="Open comments">
                    <li data-thread-id="t-handoff">
                      <Item className="has-[[data-thread-select]:focus-visible]:ring-[3px] has-[[data-thread-select]:focus-visible]:ring-ring/50 has-[[data-thread-select][aria-current=true]]:bg-input/30 items-start not-has-[[data-thread-select][aria-current=true]]:hover:bg-muted/50 relative" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <Avatar className="after:border-2 after:border-pink-700 after:mix-blend-normal dark:after:border-pink-400 dark:after:mix-blend-normal data-[presence=unsynced]:opacity-50" size="sm">
                            <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="w-full">
                            <button className="after:absolute after:inset-0 aria-[current=true]:font-medium font-normal min-w-0 outline-none text-start truncate" type="button" aria-labelledby="_r_2s_ _r_2t_" data-thread-select="">
                              <span id="_r_2s_">
                                Daniel Okafor
                              </span>
                            </button>
                            <span className="font-normal shrink-0 tabular-nums text-muted-foreground text-xs">
                              Sep 25
                            </span>
                          </ItemTitle>
                          <ItemDescription className="line-clamp-1" id="_r_2t_">
                            “a median of 14 minutes”
                          </ItemDescription>
                          <p className="line-clamp-2 text-sm">
                            These numbers come from the August export. Is queue wait counted once here, or twice?
                          </p>
                          <p className="text-muted-foreground text-xs">
                            1 reply
                          </p>
                          <p className="empty:hidden text-muted-foreground text-xs" aria-live="polite"></p>
                        </ItemContent>
                        <ItemActions className="gap-0.5 relative z-10">
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none focus-visible:bg-success focus-visible:border-success focus-visible:ring-success/30 focus-visible:text-white group/button hover:bg-success hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Resolve thread from Daniel Okafor" aria-describedby="_r_2t_" id="base-ui-_r_2v_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </ItemActions>
                      </Item>
                    </li>
                    <li data-thread-id="t-cursors">
                      <Item className="has-[[data-thread-select]:focus-visible]:ring-[3px] has-[[data-thread-select]:focus-visible]:ring-ring/50 has-[[data-thread-select][aria-current=true]]:bg-input/30 items-start not-has-[[data-thread-select][aria-current=true]]:hover:bg-muted/50 relative" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <Avatar className="after:border-2 after:border-violet-600 after:mix-blend-normal dark:after:border-violet-400 dark:after:mix-blend-normal data-[presence=unsynced]:opacity-50" size="sm">
                            <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="w-full">
                            <button className="after:absolute after:inset-0 aria-[current=true]:font-medium font-normal min-w-0 outline-none text-start truncate" type="button" aria-labelledby="_r_3p_ _r_3q_" data-thread-select="">
                              <span id="_r_3p_">
                                Maya Chen
                              </span>
                            </button>
                            <span className="font-normal shrink-0 tabular-nums text-muted-foreground text-xs">
                              Just now
                            </span>
                          </ItemTitle>
                          <ItemDescription className="line-clamp-1" id="_r_3q_">
                            “named cursors”
                          </ItemDescription>
                          <p className="line-clamp-2 text-sm">
                            Admins read cursor as jargon. Could this say who is typing instead?
                          </p>
                          <p className="empty:hidden text-muted-foreground text-xs" aria-live="polite"></p>
                        </ItemContent>
                        <ItemActions className="gap-0.5 relative z-10">
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none focus-visible:bg-success focus-visible:border-success focus-visible:ring-success/30 focus-visible:text-white group/button hover:bg-success hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Resolve thread from Maya Chen" aria-describedby="_r_3q_" id="base-ui-_r_3s_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </ItemActions>
                      </Item>
                    </li>
                    <li data-thread-id="t-owner">
                      <Item className="has-[[data-thread-select]:focus-visible]:ring-[3px] has-[[data-thread-select]:focus-visible]:ring-ring/50 has-[[data-thread-select][aria-current=true]]:bg-input/30 items-start not-has-[[data-thread-select][aria-current=true]]:hover:bg-muted/50 relative" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <Avatar className="after:border-2 after:border-violet-600 after:mix-blend-normal dark:after:border-violet-400 dark:after:mix-blend-normal data-[presence=unsynced]:opacity-50" size="sm">
                            <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="w-full">
                            <button className="after:absolute after:inset-0 aria-[current=true]:font-medium font-normal min-w-0 outline-none text-start truncate" type="button" aria-labelledby="_r_30_ _r_31_" data-thread-select="">
                              <span id="_r_30_">
                                Maya Chen
                              </span>
                            </button>
                            <span className="font-normal shrink-0 tabular-nums text-muted-foreground text-xs">
                              9:12 AM
                            </span>
                          </ItemTitle>
                          <ItemDescription className="line-clamp-1" id="_r_31_">
                            “Only the owner can press Send”
                          </ItemDescription>
                          <p className="line-clamp-2 text-sm">
                            What does the teammate see if the owner goes offline halfway through?
                          </p>
                          <p className="text-muted-foreground text-xs">
                            1 reply
                          </p>
                          <p className="empty:hidden text-muted-foreground text-xs" aria-live="polite"></p>
                        </ItemContent>
                        <ItemActions className="gap-0.5 relative z-10">
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none focus-visible:bg-success focus-visible:border-success focus-visible:ring-success/30 focus-visible:text-white group/button hover:bg-success hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Resolve thread from Maya Chen" aria-describedby="_r_31_" id="base-ui-_r_33_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </ItemActions>
                      </Item>
                    </li>
                    <li data-thread-id="t-free">
                      <Item className="has-[[data-thread-select]:focus-visible]:ring-[3px] has-[[data-thread-select]:focus-visible]:ring-ring/50 has-[[data-thread-select][aria-current=true]]:bg-input/30 items-start not-has-[[data-thread-select][aria-current=true]]:hover:bg-muted/50 relative" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <Avatar className="after:border-2 after:border-pink-700 after:mix-blend-normal dark:after:border-pink-400 dark:after:mix-blend-normal data-[presence=unsynced]:opacity-50" size="sm">
                            <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="w-full">
                            <button className="after:absolute after:inset-0 aria-[current=true]:font-medium font-normal min-w-0 outline-none text-start truncate" type="button" aria-labelledby="_r_34_ _r_35_" data-thread-select="">
                              <span id="_r_34_">
                                Daniel Okafor
                              </span>
                            </button>
                            <span className="font-normal shrink-0 tabular-nums text-muted-foreground text-xs">
                              11:30 AM
                            </span>
                          </ItemTitle>
                          <ItemDescription className="line-clamp-1" id="_r_35_">
                            “agents on the free plan”
                          </ItemDescription>
                          <p className="line-clamp-2 text-sm">
                            Pricing needs this settled before the beta invite list goes out.
                          </p>
                          <p className="empty:hidden text-muted-foreground text-xs" aria-live="polite"></p>
                        </ItemContent>
                        <ItemActions className="gap-0.5 relative z-10">
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none focus-visible:bg-success focus-visible:border-success focus-visible:ring-success/30 focus-visible:text-white group/button hover:bg-success hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Resolve thread from Daniel Okafor" aria-describedby="_r_35_" id="base-ui-_r_37_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
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
