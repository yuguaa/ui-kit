import {
  Avatar,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
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
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"

export function Pattern() {
  return (
    <div className="flex items-center justify-center p-10 w-full">
      <Tabs className="flex-1 flex-col min-h-0" data-orientation="horizontal" activationDirection="none">
        <h1 className="font-semibold sm:text-lg text-base text-foreground whitespace-nowrap">
          Navbar
        </h1>
        <header className="bg-background border-b border-border flex flex-col gap-3 shrink-0 w-full">
          <div className="flex items-center justify-between">
            <Breadcrumb aria-label="breadcrumb">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink className="flex gap-1 items-center" href="#">
                    <svg className="lucide lucide-folder size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                    </svg>
                    <span className="hidden md:inline">
                      Products
                    </span>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator role="presentation" aria-hidden="true">
                  <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink className="flex gap-1 items-center" href="#">
                    <svg className="lucide lucide-folder size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                    </svg>
                    <span className="hidden md:inline">
                      Mobile
                    </span>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator role="presentation" aria-hidden="true">
                  <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                    Checkout Flow
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex gap-1 items-center shrink-0">
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
              </Button>
              <Button type="button" tabIndex="0" aria-label="Star">
                <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
              </Button>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex items-center justify-between min-h-9">
            <TabsList className="hidden md:inline-flex" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
              <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_5_">
                Discussion
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-full! style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-destructive-foreground transition-shadow">
                  3
                </Badge>
              </TabsTrigger>
              <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_6_" compositeItemActive="">
                Tasks
              </TabsTrigger>
              <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_7_">
                Timeline
              </TabsTrigger>
              <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_8_">
                Files
              </TabsTrigger>
              <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_9_">
                Overview
              </TabsTrigger>
            </TabsList>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center md:hidden outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open menu" aria-expanded="false" aria-haspopup="menu" id="base-ui-_r_d_">
              <span className="flex items-center justify-center relative size-4">
                <svg className="absolute duration-200 lucide lucide-menu opacity-100 rotate-0 scale-100 size-4 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MenuIcon" tabler="IconMenu2" hugeicons="Menu01Icon" phosphor="ListIcon" remixicon="RiMenuLine" aria-hidden="true">
                  <path d="M4 5h16"></path>
                  <path d="M4 12h16"></path>
                  <path d="M4 19h16"></path>
                </svg>
                <svg className="-rotate-90 absolute duration-200 lucide lucide-x opacity-0 scale-75 size-4 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </span>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <div className="flex gap-2 items-center shrink-0">
              <Button className="duration-300 ease-in-out flex group/fab h-7 hover:w-32 overflow-hidden px-3 relative rounded-full transition-[width] w-7" type="button" tabIndex="0">
                <svg className="-translate-x-1/2 -translate-y-1/2 absolute duration-300 group-hover/fab:left-3 group-hover/fab:translate-x-0 left-1/2 lucide lucide-plus top-1/2 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <span className="duration-300 group-hover/fab:opacity-100 ml-8 opacity-0 pr-2 transition-opacity whitespace-nowrap">
                  Create New
                </span>
              </Button>
              <Separator className="h-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              <AvatarGroup>
                <Avatar size="sm">
                  <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
                <Avatar size="sm">
                  <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
                <Avatar size="sm">
                  <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
                <AvatarGroupCount>
                  <Popover>
                  <PopoverTrigger className="flex focus-visible:ring-2 focus-visible:ring-ring/50 hover:text-foreground items-center justify-center outline-none rounded-full size-full tabular-nums" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_g_" aria-haspopup="dialog" aria-expanded="false" aria-label="9 more: Mira Stone, Alex Johnson, Nora Vale, David Kim, Priya Patel, Omar Haddad, Sarah Chen, Kenji Tan, Emma Wilson">
                    +9
                  </PopoverTrigger>
                  </Popover>
                </AvatarGroupCount>
              </AvatarGroup>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 pt-3">
          <div className="auto-rows-min gap-4 grid md:grid-cols-3">
            <div className="aspect-video bg-muted/20 border border-border/70 border-dashed rounded-lg"></div>
            <div className="aspect-video bg-muted/20 border border-border/70 border-dashed rounded-lg"></div>
            <div className="aspect-video bg-muted/20 border border-border/70 border-dashed rounded-lg"></div>
          </div>
          <div className="bg-muted/20 border border-border/70 border-dashed flex-1 md:min-h-min min-h-screen rounded-lg"></div>
        </div>
      </Tabs>
    </div>
  )
}
