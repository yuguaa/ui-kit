import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
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
import {
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Client comments sheet"}
      </h1>
      <Sheet>
      <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
        <svg className="lucide lucide-message-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" data-icon="inline-start" aria-hidden="true">
          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
        </svg>
        {"Open comments"}
      </SheetTrigger>
      </Sheet>
    </main>
    <Sheet>
    <SheetContent className="flex flex-col gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(28rem,calc(100vw-2rem))]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" style={{"--nested-dialogs": "0"}} aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_b_">
      <SheetHeader className="p-0 shrink-0">
        <div className="border-b flex gap-2 items-center justify-between min-h-12 px-4">
          <div className="flex gap-2 items-center min-w-0">
            <Item className="border-0 p-0 size-8" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="size-5" aria-hidden="true" fill="none" viewBox="100 100 312 312">
                  <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                </svg>
              </ItemMedia>
            </Item>
            <div className="flex gap-2 items-center min-w-0">
              <SheetTitle className="leading-5 text-sm truncate" id="base-ui-_r_3_">
                {"All comments for Stripe"}
              </SheetTitle>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                {"6"}
              </Badge>
            </div>
          </div>
          <div className="flex gap-1 items-center shrink-0">
            <Tooltip>
            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Show open comments" id="base-ui-_r_5_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-funnel size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
              </svg>
              <span className="sr-only">
                {"Show open comments"}
              </span>
            </TooltipTrigger>
            </Tooltip>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open comment actions" aria-haspopup="menu" id="base-ui-_r_9_" aria-expanded="false">
              <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Close comments sheet">
              <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </SheetClose>
          </div>
        </div>
        <SheetDescription className="sr-only" id="base-ui-_r_b_">
          {"Command thread for Stripe"}
        </SheetDescription>
      </SheetHeader>
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_c_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "171px"}} data-has-overflow-y="" data-overflow-y-end="">
            <div className="flex flex-col min-h-full p-3">
              <div className="flex flex-col gap-3">
                <Item className="border-border/60 flex-nowrap gap-1 group/comment hover:bg-muted/35 items-start p-2! relative" variant="outline" size="sm" role="article">
                  <ItemMedia variant="image">
                    <Avatar className="-mt-2 size-5" size="sm">
                      <AvatarImage alt="Emily Parker" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent className="gap-1 min-w-0">
                    <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-center min-w-0">
                      <ItemTitle className="font-medium leading-5 text-sm truncate">
                        {"Emily Parker"}
                      </ItemTitle>
                      <span className="text-muted-foreground text-xs">
                        {"4 minutes ago"}
                      </span>
                    </div>
                    <p className="leading-5 text-sm">
                      {"Can we name the SSO owner before the client review?"}
                    </p>
                    <div className="flex flex-wrap gap-1.5 items-center min-w-0 mt-1.5">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-full text-[0.625rem] transition-shadow">
                        <svg className="lucide lucide-smile size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmileIcon" tabler="IconMoodSmile" hugeicons="SmileIcon" phosphor="SmileyIcon" remixicon="RiEmotionHappyLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                          <line x1="9" x2="9.01" y1="9" y2="9"></line>
                          <line x1="15" x2="15.01" y1="9" y2="9"></line>
                        </svg>
                        {"2"}
                      </Badge>
                    </div>
                  </ItemContent>
                  <ItemActions className="absolute bg-background/95 border gap-0.5 group-focus-within/comment:opacity-100 group-hover/comment:opacity-100 opacity-0 p-0.5 right-2 rounded-lg shadow-xs top-2 transition-opacity" role="toolbar" aria-label="Actions for Emily Parker's comment">
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reply" id="base-ui-_r_e_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-corner-up-left size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CornerUpLeftIcon" tabler="IconCornerUpLeft" hugeicons="ArrowMoveUpLeftIcon" phosphor="ArrowBendUpLeftIcon" remixicon="RiCornerUpLeftLine" aria-hidden="true">
                        <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                        <path d="M9 14 4 9l5-5"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="React" aria-pressed="false" data-active="false" id="base-ui-_r_g_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-smile size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmileIcon" tabler="IconMoodSmile" hugeicons="SmileIcon" phosphor="SmileyIcon" remixicon="RiEmotionHappyLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" x2="9.01" y1="9" y2="9"></line>
                        <line x1="15" x2="15.01" y1="9" y2="9"></line>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Resolve" aria-pressed="false" data-active="false" id="base-ui-_r_i_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More comment actions" aria-haspopup="menu" id="base-ui-_r_m_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </ItemActions>
                </Item>
                <Item className="border-border/60 flex-nowrap gap-1 group/comment hover:bg-muted/35 items-start p-2! relative" variant="outline" size="sm" role="article">
                  <ItemMedia variant="image">
                    <Avatar className="-mt-2 size-5" size="sm">
                      <AvatarImage alt="James Miller" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent className="gap-1 min-w-0">
                    <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-center min-w-0">
                      <ItemTitle className="font-medium leading-5 text-sm truncate">
                        {"James Miller"}
                      </ItemTitle>
                      <span className="text-muted-foreground text-xs">
                        {"8 minutes ago"}
                      </span>
                    </div>
                    <p className="leading-5 text-sm">
                      {"Moved the procurement note above the renewal risk summary."}
                    </p>
                  </ItemContent>
                  <ItemActions className="absolute bg-background/95 border gap-0.5 group-focus-within/comment:opacity-100 group-hover/comment:opacity-100 opacity-0 p-0.5 right-2 rounded-lg shadow-xs top-2 transition-opacity" role="toolbar" aria-label="Actions for James Miller's comment">
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reply" id="base-ui-_r_p_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-corner-up-left size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CornerUpLeftIcon" tabler="IconCornerUpLeft" hugeicons="ArrowMoveUpLeftIcon" phosphor="ArrowBendUpLeftIcon" remixicon="RiCornerUpLeftLine" aria-hidden="true">
                        <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                        <path d="M9 14 4 9l5-5"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="React" aria-pressed="false" data-active="false" id="base-ui-_r_r_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-smile size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmileIcon" tabler="IconMoodSmile" hugeicons="SmileIcon" phosphor="SmileyIcon" remixicon="RiEmotionHappyLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" x2="9.01" y1="9" y2="9"></line>
                        <line x1="15" x2="15.01" y1="9" y2="9"></line>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Resolve" aria-pressed="false" data-active="false" id="base-ui-_r_t_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More comment actions" aria-haspopup="menu" id="base-ui-_r_11_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </ItemActions>
                </Item>
                <Item className="border-border/60 flex-nowrap gap-1 group/comment hover:bg-muted/35 items-start p-2! relative" variant="outline" size="sm" role="article">
                  <ItemMedia variant="image">
                    <Avatar className="-mt-2 size-5" size="sm">
                      <AvatarImage alt="Daniel Brooks" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent className="gap-1 min-w-0">
                    <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-center min-w-0">
                      <ItemTitle className="font-medium leading-5 text-sm truncate">
                        {"Daniel Brooks"}
                      </ItemTitle>
                      <span className="text-muted-foreground text-xs">
                        {"14 minutes ago"}
                      </span>
                    </div>
                    <p className="leading-5 text-sm">
                      {"Call out SCIM separately from SAML in the diagram."}
                    </p>
                    <div className="flex flex-wrap gap-1.5 items-center min-w-0 mt-1.5">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-full text-[0.625rem] transition-shadow">
                        <svg className="lucide lucide-smile size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmileIcon" tabler="IconMoodSmile" hugeicons="SmileIcon" phosphor="SmileyIcon" remixicon="RiEmotionHappyLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                          <line x1="9" x2="9.01" y1="9" y2="9"></line>
                          <line x1="15" x2="15.01" y1="9" y2="9"></line>
                        </svg>
                        {"1"}
                      </Badge>
                    </div>
                  </ItemContent>
                  <ItemActions className="absolute bg-background/95 border gap-0.5 group-focus-within/comment:opacity-100 group-hover/comment:opacity-100 opacity-0 p-0.5 right-2 rounded-lg shadow-xs top-2 transition-opacity" role="toolbar" aria-label="Actions for Daniel Brooks's comment">
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reply" id="base-ui-_r_14_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-corner-up-left size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CornerUpLeftIcon" tabler="IconCornerUpLeft" hugeicons="ArrowMoveUpLeftIcon" phosphor="ArrowBendUpLeftIcon" remixicon="RiCornerUpLeftLine" aria-hidden="true">
                        <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                        <path d="M9 14 4 9l5-5"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="React" aria-pressed="false" data-active="false" id="base-ui-_r_16_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-smile size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmileIcon" tabler="IconMoodSmile" hugeicons="SmileIcon" phosphor="SmileyIcon" remixicon="RiEmotionHappyLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" x2="9.01" y1="9" y2="9"></line>
                        <line x1="15" x2="15.01" y1="9" y2="9"></line>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Resolve" aria-pressed="false" data-active="false" id="base-ui-_r_18_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More comment actions" aria-haspopup="menu" id="base-ui-_r_1c_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </ItemActions>
                </Item>
                <Item className="border-border/60 flex-nowrap gap-1 group/comment hover:bg-muted/35 items-start p-2! relative" variant="outline" size="sm" role="article">
                  <ItemMedia variant="image">
                    <Avatar className="-mt-2 size-5" size="sm">
                      <AvatarImage alt="Olivia Carter" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent className="gap-1 min-w-0">
                    <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-center min-w-0">
                      <ItemTitle className="font-medium leading-5 text-sm truncate">
                        {"Olivia Carter"}
                      </ItemTitle>
                      <span className="text-muted-foreground text-xs">
                        {"22 minutes ago"}
                      </span>
                    </div>
                    <p className="leading-5 text-sm">
                      {"Keep the executive summary to two sharp sentences."}
                    </p>
                  </ItemContent>
                  <ItemActions className="absolute bg-background/95 border gap-0.5 group-focus-within/comment:opacity-100 group-hover/comment:opacity-100 opacity-0 p-0.5 right-2 rounded-lg shadow-xs top-2 transition-opacity" role="toolbar" aria-label="Actions for Olivia Carter's comment">
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reply" id="base-ui-_r_1f_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-corner-up-left size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CornerUpLeftIcon" tabler="IconCornerUpLeft" hugeicons="ArrowMoveUpLeftIcon" phosphor="ArrowBendUpLeftIcon" remixicon="RiCornerUpLeftLine" aria-hidden="true">
                        <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                        <path d="M9 14 4 9l5-5"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="React" aria-pressed="false" data-active="false" id="base-ui-_r_1h_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-smile size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmileIcon" tabler="IconMoodSmile" hugeicons="SmileIcon" phosphor="SmileyIcon" remixicon="RiEmotionHappyLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" x2="9.01" y1="9" y2="9"></line>
                        <line x1="15" x2="15.01" y1="9" y2="9"></line>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Resolve" aria-pressed="false" data-active="false" id="base-ui-_r_1j_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More comment actions" aria-haspopup="menu" id="base-ui-_r_1n_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </ItemActions>
                </Item>
                <Item className="border-border/60 flex-nowrap gap-1 group/comment hover:bg-muted/35 items-start p-2! relative" variant="outline" size="sm" role="article">
                  <ItemMedia variant="image">
                    <Avatar className="-mt-2 size-5" size="sm">
                      <AvatarImage alt="James Miller" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent className="gap-1 min-w-0">
                    <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-center min-w-0">
                      <ItemTitle className="font-medium leading-5 text-sm truncate">
                        {"James Miller"}
                      </ItemTitle>
                      <span className="text-muted-foreground text-xs">
                        {"31 minutes ago"}
                      </span>
                    </div>
                    <p className="leading-5 text-sm">
                      {"I’ll move the budget note into the renewal section."}
                    </p>
                  </ItemContent>
                  <ItemActions className="absolute bg-background/95 border gap-0.5 group-focus-within/comment:opacity-100 group-hover/comment:opacity-100 opacity-0 p-0.5 right-2 rounded-lg shadow-xs top-2 transition-opacity" role="toolbar" aria-label="Actions for James Miller's comment">
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reply" id="base-ui-_r_1q_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-corner-up-left size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CornerUpLeftIcon" tabler="IconCornerUpLeft" hugeicons="ArrowMoveUpLeftIcon" phosphor="ArrowBendUpLeftIcon" remixicon="RiCornerUpLeftLine" aria-hidden="true">
                        <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                        <path d="M9 14 4 9l5-5"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="React" aria-pressed="false" data-active="false" id="base-ui-_r_1s_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-smile size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmileIcon" tabler="IconMoodSmile" hugeicons="SmileIcon" phosphor="SmileyIcon" remixicon="RiEmotionHappyLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" x2="9.01" y1="9" y2="9"></line>
                        <line x1="15" x2="15.01" y1="9" y2="9"></line>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Resolve" aria-pressed="false" data-active="false" id="base-ui-_r_1u_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More comment actions" aria-haspopup="menu" id="base-ui-_r_22_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </ItemActions>
                </Item>
                <Item className="border-border/60 flex-nowrap gap-1 group/comment hover:bg-muted/35 items-start p-2! relative" variant="outline" size="sm" role="article">
                  <ItemMedia variant="image">
                    <Avatar className="-mt-2 size-5" size="sm">
                      <AvatarImage alt="Hannah Stone" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent className="gap-1 min-w-0">
                    <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-center min-w-0">
                      <ItemTitle className="font-medium leading-5 text-sm truncate">
                        {"Hannah Stone"}
                      </ItemTitle>
                      <span className="text-muted-foreground text-xs">
                        {"44 minutes ago"}
                      </span>
                    </div>
                    <p className="leading-5 text-sm">
                      {"Retention copy is approved with the exception note attached."}
                    </p>
                    <div className="flex flex-wrap gap-1.5 items-center min-w-0 mt-1.5">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-full text-[0.625rem] transition-shadow">
                        <svg className="lucide lucide-smile size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmileIcon" tabler="IconMoodSmile" hugeicons="SmileIcon" phosphor="SmileyIcon" remixicon="RiEmotionHappyLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                          <line x1="9" x2="9.01" y1="9" y2="9"></line>
                          <line x1="15" x2="15.01" y1="9" y2="9"></line>
                        </svg>
                        {"3"}
                      </Badge>
                    </div>
                  </ItemContent>
                  <ItemActions className="absolute bg-background/95 border gap-0.5 group-focus-within/comment:opacity-100 group-hover/comment:opacity-100 opacity-0 p-0.5 right-2 rounded-lg shadow-xs top-2 transition-opacity" role="toolbar" aria-label="Actions for Hannah Stone's comment">
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reply" id="base-ui-_r_25_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-corner-up-left size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CornerUpLeftIcon" tabler="IconCornerUpLeft" hugeicons="ArrowMoveUpLeftIcon" phosphor="ArrowBendUpLeftIcon" remixicon="RiCornerUpLeftLine" aria-hidden="true">
                        <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                        <path d="M9 14 4 9l5-5"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="React" aria-pressed="false" data-active="false" id="base-ui-_r_27_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-smile size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmileIcon" tabler="IconMoodSmile" hugeicons="SmileIcon" phosphor="SmileyIcon" remixicon="RiEmotionHappyLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" x2="9.01" y1="9" y2="9"></line>
                        <line x1="15" x2="15.01" y1="9" y2="9"></line>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Resolve" aria-pressed="false" data-active="false" id="base-ui-_r_29_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More comment actions" aria-haspopup="menu" id="base-ui-_r_2d_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </ItemActions>
                </Item>
              </div>
            </div>
          </div>
          <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_c_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "287.0051724137931px"}}>
            <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
          </div>
        </ScrollArea>
      </div>
      <SheetFooter className="shrink-0">
        <form className="w-full">
          <Field className="gap-2" role="group" data-orientation="vertical">
            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="sheet-5-comment">
              {"Add comment"}
            </FieldLabel>
            <InputGroup className="rounded-xl" role="group">
              <textarea className="cn-input-group-textarea cn-textarea disabled:cursor-not-allowed disabled:opacity-50 field-sizing-content flex flex-1 min-h-16 outline-none placeholder:text-muted-foreground resize-none w-full" id="sheet-5-comment" placeholder="Add a comment..." rows="2" aria-label="Add comment"></textarea>
              <InputGroupAddon className="gap-2" role="group" data-align="block-end">
                <div className="flex gap-1 items-center">
                  <Button className="cn-input-group-button cn-input-group-button-size-icon-sm flex shadow-none" type="button" tabIndex="0" size="icon-sm" aria-label="Add emoji">
                    <svg className="lucide lucide-smile" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmileIcon" tabler="IconMoodSmile" hugeicons="SmileIcon" phosphor="SmileyIcon" remixicon="RiEmotionHappyLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" x2="9.01" y1="9" y2="9"></line>
                      <line x1="15" x2="15.01" y1="9" y2="9"></line>
                    </svg>
                  </Button>
                  <Button className="cn-input-group-button cn-input-group-button-size-icon-sm flex shadow-none" type="button" tabIndex="0" size="icon-sm" aria-label="Mention teammate">
                    <span aria-hidden="true">
                      {"@"}
                    </span>
                  </Button>
                  <Button className="cn-input-group-button cn-input-group-button-size-icon-sm flex shadow-none" type="button" tabIndex="0" size="icon-sm" aria-label="Attach file">
                    <svg className="lucide lucide-paperclip" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" aria-hidden="true">
                      <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                    </svg>
                  </Button>
                </div>
                <Button className="cn-input-group-button cn-input-group-button-size-sm flex ml-auto shadow-none" type="button" tabIndex="0" size="sm">
                  {"Cancel"}
                </Button>
                <Button className="cn-input-group-button cn-input-group-button-size-sm flex shadow-none" type="submit" tabIndex="0" size="sm">
                  {"Post Comment"}
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </form>
      </SheetFooter>
    </SheetContent>
    </Sheet>
  </>
  )
}
