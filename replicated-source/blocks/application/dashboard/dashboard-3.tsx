import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarFallback,
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
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Dialog,
  DialogTrigger,
} from "@/registry/bases/base/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { ItemMedia } from "@/registry/bases/base/ui/item"
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
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="bg-background lg:p-6 min-h-svh p-3 sm:p-4 w-full">
      <div className="flex flex-col gap-3 max-w-7xl min-h-svh mx-auto text-foreground w-full">
        <Tabs className="flex-1 flex-col min-h-0" data-orientation="horizontal" activationDirection="none">
          <header className="bg-background border-b border-border flex flex-col gap-2.5 pb-2.5 shrink-0 w-full">
            <div className="flex flex-col gap-1.5 min-w-0">
              <h1 className="font-semibold sm:text-lg text-base text-foreground whitespace-nowrap">
                Delivery Board
              </h1>
              <div className="flex flex-wrap gap-x-4 gap-y-2 items-start justify-between min-w-0 sm:items-center">
                <Breadcrumb aria-label="breadcrumb">
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink className="flex gap-1 items-center" href="#">
                        <svg className="lucide lucide-square size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                        </svg>
                        <span className="hidden md:inline">
                          Accounts
                        </span>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator role="presentation" aria-hidden="true">
                      <svg className="cn-rtl-flip lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      </svg>
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbLink className="flex gap-1 items-center" href="#">
                        <svg className="lucide lucide-square size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                        </svg>
                        <span className="hidden md:inline">
                          Delivery
                        </span>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator role="presentation" aria-hidden="true">
                      <svg className="cn-rtl-flip lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      </svg>
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                        Northstar Rollout
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
                <div className="flex gap-1 items-center shrink-0">
                  <Button type="button" tabIndex="0" aria-label="Search worklogs">
                    <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    </svg>
                  </Button>
                  <Button type="button" tabIndex="0" aria-label="Star board" aria-pressed="false">
                    <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    </svg>
                  </Button>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false">
                    <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center justify-between min-h-9 min-w-0">
              <TabsList className="gap-0 h-9 hidden md:inline-flex p-0" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                <TabsTrigger className="first:pl-0 group-data-horizontal/tabs:after:bottom-[-1px] h-full last:pr-0" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_5_" compositeItemActive="">
                  Overview
                </TabsTrigger>
                <TabsTrigger className="first:pl-0 group-data-horizontal/tabs:after:bottom-[-1px] h-full last:pr-0" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_6_">
                  Worklog
                </TabsTrigger>
                <TabsTrigger className="first:pl-0 group-data-horizontal/tabs:after:bottom-[-1px] h-full last:pr-0" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_7_">
                  Files
                </TabsTrigger>
                <TabsTrigger className="first:pl-0 group-data-horizontal/tabs:after:bottom-[-1px] h-full last:pr-0" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_8_">
                  Reports
                </TabsTrigger>
              </TabsList>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center md:hidden outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open menu" aria-haspopup="menu" id="base-ui-_r_c_" aria-expanded="false">
                <span className="flex items-center justify-center relative size-4">
                  <svg className="absolute duration-200 lucide lucide-square opacity-100 rotate-0 scale-100 size-4 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MenuIcon" tabler="IconMenu2" hugeicons="Menu01Icon" phosphor="ListIcon" remixicon="RiMenuLine" aria-hidden="true">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  </svg>
                  <svg className="-rotate-90 absolute duration-200 lucide lucide-square opacity-0 scale-75 size-4 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  </svg>
                </span>
              </DropdownMenuTrigger>
              </DropdownMenu>
              <div className="flex gap-2 items-center shrink-0">
                <Button className="duration-300 ease-in-out flex group/fab h-7 hover:w-32 overflow-hidden px-3 relative rounded-full transition-[width] w-7" type="button" tabIndex="0">
                  <svg className="-translate-x-1/2 -translate-y-1/2 absolute duration-300 group-hover/fab:left-3 group-hover/fab:translate-x-0 left-1/2 lucide lucide-square top-1/2 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  </svg>
                  <span className="duration-300 group-hover/fab:opacity-100 ml-8 opacity-0 pr-2 transition-opacity whitespace-nowrap">
                    New Brief
                  </span>
                </Button>
                <Separator className="h-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                <AvatarGroup>
                  <Avatar size="sm">
                    <AvatarImage alt="Amara Ortiz" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar size="sm">
                    <AvatarImage alt="Theo Mercer" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar size="sm">
                    <AvatarFallback className="text-[10px]">
                      LH
                    </AvatarFallback>
                  </Avatar>
                  <AvatarGroupCount className="font-medium leading-none tabular-nums text-[13px]!">
                    <Popover>
                    <PopoverTrigger className="flex focus-visible:ring-3 focus-visible:ring-ring/50 hover:text-foreground items-center justify-center outline-none rounded-full size-full transition-colors" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_f_" aria-haspopup="dialog" aria-expanded="false" aria-label="6 more: Iris Calder, Samir Vale, Nina Flores, Owen Hart, Cleo Warner, Jules Park">
                      +6
                    </PopoverTrigger>
                    </Popover>
                  </AvatarGroupCount>
                </AvatarGroup>
              </div>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 pt-4">
            <Frame className="@container w-full">
              <div className="@2xl:grid-cols-2 @4xl:grid-cols-4 gap-1 grid">
                <FramePanel className="space-y-10">
                  <div className="flex gap-2 grow items-center justify-between">
                    <span className="text-muted-foreground text-sm">
                      Account
                    </span>
                    <div className="[&_svg]:size-4 [&_svg]:text-muted-foreground">
                      <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-1.5">
                      <span className="font-medium leading-tight text-sm">
                        Northstar Commerce
                      </span>
                      <p className="leading-none text-muted-foreground text-sm">
                        Enterprise rollout
                      </p>
                    </div>
                    <div className="flex justify-end pt-1">
                      <svg className="size-5" viewBox="0 0 27 37" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M25.7756 17.3698C25.2893 15.6249 24.5666 13.9548 23.6276 12.4058H23.6296C23.6296 12.4058 22.7026 10.8678 22.3136 10.4028H22.3106C22.2146 10.2818 22.0216 10.4158 22.0956 10.5538C22.2046 10.7828 22.3036 11.0648 22.2346 11.3398C22.1206 11.6758 21.7456 11.9088 21.4006 11.7898C21.3051 11.7512 21.2186 11.6933 21.1466 11.6198C20.7936 11.2548 20.6096 10.6508 20.3806 9.8838C20.1746 9.2008 19.9196 8.35279 19.4596 7.43479C18.7116 5.94279 17.8266 5.25279 17.7906 5.22379C17.7686 5.20662 17.7416 5.19721 17.7137 5.19703C17.6859 5.19685 17.6587 5.20591 17.6366 5.2228C17.6142 5.23992 17.5976 5.26346 17.5891 5.29028C17.5805 5.31709 17.5803 5.34588 17.5886 5.3728C17.5926 5.3848 17.9646 6.61479 17.2466 7.54579C16.9606 7.91679 16.5256 8.1408 16.0186 8.1728C15.5086 8.2058 15.0036 8.0368 14.7006 7.7328C13.9496 6.9778 13.8616 5.63979 13.8756 4.90979C13.9226 2.47579 14.6576 0.770795 15.0406 0.209795C15.0567 0.185815 15.0649 0.157376 15.064 0.12849C15.0631 0.0996036 15.0532 0.071728 15.0356 0.048795C15.018 0.0265184 14.9936 0.0106996 14.9661 0.00382184C14.9385 -0.00305591 14.9095 -0.000603202 14.8836 0.010795C11.9096 1.2998 9.75456 3.50679 8.65356 6.38379C8.03456 8.09479 7.76456 8.8748 7.54556 9.3658C7.34356 9.8148 7.15656 10.0218 6.96556 10.1358C6.86056 10.1998 6.73256 10.2358 6.60056 10.2408C6.40656 10.2208 5.44656 10.0448 6.28256 8.4388C6.35156 8.3038 6.16856 8.1698 6.06656 8.2788L5.40856 9.0058C5.37923 9.0378 5.3499 9.0698 5.32056 9.1018L5.21156 9.2228C5.1929 9.24413 5.1759 9.2648 5.16056 9.2848C3.08056 11.6618 1.62756 14.7038 0.790564 17.5138C0.0405639 20.2138 -0.00643612 22.3708 0.000563879 23.1908L0.00156388 23.3728C0.00156388 27.0068 1.38356 30.4228 3.89256 32.9928C6.40156 35.5628 9.73956 36.9778 13.2876 36.9778C16.8356 36.9778 20.1736 35.5628 22.6826 32.9928C25.1926 30.4228 26.5736 27.0058 26.5736 23.3728C26.5736 21.0578 26.2756 19.1718 25.7706 17.3698H25.7756ZM13.2896 30.4168C9.49156 30.4168 6.41056 27.2648 6.41056 23.3738C6.41056 19.4828 9.49056 16.3298 13.2896 16.3298C17.0886 16.3298 20.1686 19.4838 20.1686 23.3738C20.1686 27.2638 17.0886 30.4168 13.2896 30.4168Z" fill="#FF4000"></path>
                      </svg>
                    </div>
                  </div>
                </FramePanel>
                <FramePanel className="space-y-10">
                  <div className="flex gap-2 grow items-center justify-between">
                    <span className="text-muted-foreground text-sm">
                      Workspace
                    </span>
                    <div className="[&_svg]:size-4 [&_svg]:text-muted-foreground">
                      <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-1.5">
                      <a className="font-medium hover:underline leading-tight text-primary text-sm" href="#">
                        portal.northstar.io
                      </a>
                      <p className="leading-none text-muted-foreground text-sm">
                        Requests: 124k/day
                      </p>
                    </div>
                    <div className="flex justify-end pt-1">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                        Running
                      </Badge>
                    </div>
                  </div>
                </FramePanel>
                <FramePanel className="space-y-10">
                  <div className="flex gap-2 grow items-center justify-between">
                    <span className="text-muted-foreground text-sm">
                      Next Review
                    </span>
                    <div className="[&_svg]:size-4 [&_svg]:text-muted-foreground">
                      <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-1.5">
                      <span className="font-medium leading-tight text-sm">
                        Apr 3, 2026
                      </span>
                      <p className="leading-none text-muted-foreground text-sm">
                        Client steering
                      </p>
                    </div>
                    <div className="flex justify-end pt-1">
                      <AvatarGroup>
                        <Avatar className="size-5" size="default">
                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <Avatar className="size-5" size="default">
                          <AvatarFallback className="text-[9px]">
                            B
                          </AvatarFallback>
                        </Avatar>
                        <Avatar className="size-5" size="default">
                          <AvatarFallback className="text-[9px]">
                            C
                          </AvatarFallback>
                        </Avatar>
                        <AvatarGroupCount className="border size-5 text-[10px]">
                          +1
                        </AvatarGroupCount>
                      </AvatarGroup>
                    </div>
                  </div>
                </FramePanel>
                <FramePanel className="space-y-10">
                  <div className="flex gap-2 grow items-center justify-between">
                    <span className="text-muted-foreground text-sm">
                      Owner
                    </span>
                    <div className="[&_svg]:size-4 [&_svg]:text-muted-foreground">
                      <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-1.5">
                      <a className="font-medium hover:underline leading-tight text-primary text-sm" href="#">
                        Amara Ortiz
                      </a>
                      <p className="leading-none text-muted-foreground text-sm">
                        Delivery lead
                      </p>
                    </div>
                    <div className="flex justify-end pt-1">
                      <Avatar className="size-6" size="default">
                        <AvatarImage alt="Amara Ortiz" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </div>
                  </div>
                </FramePanel>
              </div>
            </Frame>
            <Frame className="w-full">
              <header className="flex flex-col gap-3 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-start sm:justify-between">
                <div className="flex flex-col gap-px">
                  <div className="font-semibold text-balance text-sm">
                    Worklogs
                  </div>
                  <div className="text-muted-foreground text-pretty text-xs">
                    Weekly client delivery hours
                  </div>
                </div>
                <Dialog>
                <DialogTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-default disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 sm:w-auto transition-all w-full whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_i_" aria-haspopup="dialog" aria-expanded="false">
                  New Log
                </DialogTrigger>
                </Dialog>
              </header>
              <FramePanel className="bg-card p-0! shadow-none!">
                <div className="flex flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="flex flex-wrap gap-2 items-center">
                    <InputGroup className="sm:w-48" role="group">
                      <InputGroupAddon role="group" data-align="inline-start">
                        <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                        </svg>
                      </InputGroupAddon>
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_j_" placeholder="Search people..." aria-label="Search people by name or role" value="" />
                    </InputGroup>
                    <Select>
                    <SelectTrigger className="w-[180px]" type="button" tabIndex="0" id="base-ui-_r_k_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        People
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-square pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                        ▼
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_k_-hidden-input" tabIndex="-1" aria-hidden="true" value="everyone" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <Select>
                    <SelectTrigger className="w-[180px]" type="button" tabIndex="0" id="base-ui-_r_n_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        Tracked time
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-square pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                        ▼
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_n_-hidden-input" tabIndex="-1" aria-hidden="true" value="any" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <Select>
                    <SelectTrigger className="w-[180px]" type="button" tabIndex="0" id="base-ui-_r_q_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        Billable status
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-square pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                        ▼
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_q_-hidden-input" tabIndex="-1" aria-hidden="true" value="any" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                  <div className="flex flex-wrap gap-2 items-center justify-end">
                    <ButtonGroup role="group">
                      <Button type="button" tabIndex="0" aria-label="Previous week">
                        <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                        </svg>
                      </Button>
                      <Popover>
                      <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 tabular-nums transition-all w-[168px] whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_u_" aria-haspopup="dialog" aria-expanded="false">
                        <span className="truncate">
                          Mar 23 - 29
                        </span>
                        <svg className="lucide lucide-square text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                        </svg>
                      </PopoverTrigger>
                      </Popover>
                      <Button type="button" tabIndex="0" aria-label="Next week">
                        <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                        </svg>
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <div className="relative">
                  <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                    <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_v_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                      <div role="presentation" style={{minWidth: "fit-content"}}>
                        <DataGridTableViewport>
                          <DataGridTable>
                            <colgroup>
                              <col style={{width: "240px"}} />
                              <col style={{width: "112px"}} />
                              <col style={{width: "112px"}} />
                              <col style={{width: "112px"}} />
                              <col style={{width: "112px"}} />
                              <col style={{width: "112px"}} />
                              <col style={{width: "112px"}} />
                              <col style={{width: "112px"}} />
                              <col style={{width: "120px"}} />
                            </colgroup>
                            <thead>
                              <tr className="*:last:border-e-0 [&>th]:border-b bg-transparent">
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="person" data-header-id="person" data-header-depth="0" style={{width: "240px"}}>
                                  <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                    People
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="2026-03-23" data-header-id="2026-03-23" data-header-depth="0" style={{width: "112px"}}>
                                  <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                                    Mon, Mar 23
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="2026-03-24" data-header-id="2026-03-24" data-header-depth="0" style={{width: "112px"}}>
                                  <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                                    Tue, Mar 24
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="2026-03-25" data-header-id="2026-03-25" data-header-depth="0" style={{width: "112px"}}>
                                  <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                                    Wed, Mar 25
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="2026-03-26" data-header-id="2026-03-26" data-header-depth="0" style={{width: "112px"}}>
                                  <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                                    Thu, Mar 26
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="2026-03-27" data-header-id="2026-03-27" data-header-depth="0" style={{width: "112px"}}>
                                  <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                                    Fri, Mar 27
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="2026-03-28" data-header-id="2026-03-28" data-header-depth="0" style={{width: "112px"}}>
                                  <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                                    Sat, Mar 28
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="2026-03-29" data-header-id="2026-03-29" data-header-depth="0" style={{width: "112px"}}>
                                  <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                                    Sun, Mar 29
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-foreground text-right" scope="col" data-col-id="total" data-header-id="total" data-header-depth="0" style={{width: "120px"}}>
                                  <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                                    Total
                                  </div>
                                </th>
                              </tr>
                            </thead>
                            <DataGridTableBody>
                              <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="amara-ortiz">
                                <td className="align-middle border-e px-2 py-1.5">
                                  <div className="flex gap-2.5 items-center min-w-0">
                                    <div className="relative shrink-0">
                                      <Avatar className="size-8" size="default">
                                        <AvatarImage alt="Amara Ortiz" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </div>
                                    <div className="flex flex-col leading-tight min-w-0">
                                      <div className="font-medium text-foreground text-sm truncate">
                                        Amara Ortiz
                                      </div>
                                      <div className="pt-0.5 text-muted-foreground text-xs truncate" title="Client delivery lead">
                                        Client delivery lead
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Mar 23: 6h 30m logged as client. Migration kickoff with Atlas Health" id="base-ui-_r_11_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        6h 30m
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-emerald-500 block h-full rounded-full" style={{width: "81.25%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Client
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Mar 24: 5h 30m logged as internal. Weekly staffing and margin review" id="base-ui-_r_13_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        5h 30m
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-sky-500 block h-full rounded-full" style={{width: "68.75%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Internal
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Mar 25: 7h logged as client. Pilot implementation sync" id="base-ui-_r_15_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        7h
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-emerald-500 block h-full rounded-full" style={{width: "87.5%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Client
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Mar 26: 6h logged as client. Partner escalation planning" id="base-ui-_r_17_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        6h
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-emerald-500 block h-full rounded-full" style={{width: "75%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Client
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Mar 27: 4h 30m logged as client. Renewal prep" id="base-ui-_r_19_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        4h 30m
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-emerald-500 block h-full rounded-full" style={{width: "56.25%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Client
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Mar 28: No weekend hours were logged for this day." id="base-ui-_r_1b_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                        -
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Off
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Mar 29: No weekend hours were logged for this day." id="base-ui-_r_1d_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                        -
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Off
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5 text-right">
                                  <div className="flex flex-col gap-1 items-end text-right">
                                    <span className="font-semibold tabular-nums text-foreground text-sm">
                                      29h 30m
                                    </span>
                                    <span className="gap-1 inline-flex items-center tabular-nums text-emerald-600 text-xs">
                                      <svg className="lucide lucide-square size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                      </svg>
                                      92%
                                    </span>
                                  </div>
                                </td>
                              </tr>
                              <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="theo-mercer">
                                <td className="align-middle border-e px-2 py-1.5">
                                  <div className="flex gap-2.5 items-center min-w-0">
                                    <div className="relative shrink-0">
                                      <Avatar className="size-8" size="default">
                                        <AvatarImage alt="Theo Mercer" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </div>
                                    <div className="flex flex-col leading-tight min-w-0">
                                      <div className="font-medium text-foreground text-sm truncate">
                                        Theo Mercer
                                      </div>
                                      <div className="pt-0.5 text-muted-foreground text-xs truncate" title="Platform engineer">
                                        Platform engineer
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Mar 23: 8h logged as client. Gateway failover validation" id="base-ui-_r_1f_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        8h
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-emerald-500 block h-full rounded-full" style={{width: "100%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Client
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Mar 24: 8h logged as client. Webhook retries" id="base-ui-_r_1h_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        8h
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-emerald-500 block h-full rounded-full" style={{width: "100%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Client
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Mar 25: 7h 30m logged as client. Tenant sync fixes" id="base-ui-_r_1j_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        7h 30m
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-emerald-500 block h-full rounded-full" style={{width: "93.75%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Client
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Mar 26: 8h logged as client. SSO edge cases" id="base-ui-_r_1l_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        8h
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-emerald-500 block h-full rounded-full" style={{width: "100%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Client
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Mar 27: 8h logged as client. Metrics rollout" id="base-ui-_r_1n_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        8h
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-emerald-500 block h-full rounded-full" style={{width: "100%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Client
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Mar 28: No weekend hours were logged for this day." id="base-ui-_r_1p_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                        -
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Off
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Mar 29: No weekend hours were logged for this day." id="base-ui-_r_1r_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                        -
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Off
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5 text-right">
                                  <div className="flex flex-col gap-1 items-end text-right">
                                    <span className="font-semibold tabular-nums text-foreground text-sm">
                                      39h 30m
                                    </span>
                                    <span className="gap-1 inline-flex items-center tabular-nums text-emerald-600 text-xs">
                                      <svg className="lucide lucide-square size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                      </svg>
                                      99%
                                    </span>
                                  </div>
                                </td>
                              </tr>
                              <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="lena-hoffman">
                                <td className="align-middle border-e px-2 py-1.5">
                                  <div className="flex gap-2.5 items-center min-w-0">
                                    <div className="relative shrink-0">
                                      <Avatar className="size-8" size="default">
                                        <AvatarFallback>
                                          LH
                                        </AvatarFallback>
                                      </Avatar>
                                    </div>
                                    <div className="flex flex-col leading-tight min-w-0">
                                      <div className="font-medium text-foreground text-sm truncate">
                                        Lena Hoffman
                                      </div>
                                      <div className="pt-0.5 text-muted-foreground text-xs truncate" title="Content systems editor">
                                        Content systems editor
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Mar 23: 5h logged as internal. Publishing QA" id="base-ui-_r_1t_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        5h
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-sky-500 block h-full rounded-full" style={{width: "62.5%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Internal
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Mar 24: 4h 30m logged as client. Implementation guide updates" id="base-ui-_r_1v_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        4h 30m
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-emerald-500 block h-full rounded-full" style={{width: "56.25%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Client
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Mar 25: 5h logged as internal. Docs audit" id="base-ui-_r_21_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        5h
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-sky-500 block h-full rounded-full" style={{width: "62.5%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Internal
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Mar 26: 3h 30m logged as client. Admin walkthrough copy" id="base-ui-_r_23_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        3h 30m
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-emerald-500 block h-full rounded-full" style={{width: "43.75%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Client
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Mar 27: 4h logged as client. Email setup checklist" id="base-ui-_r_25_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        4h
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-emerald-500 block h-full rounded-full" style={{width: "50%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Client
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Mar 28: No weekend hours were logged for this day." id="base-ui-_r_27_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                        -
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Off
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Mar 29: No weekend hours were logged for this day." id="base-ui-_r_29_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                        -
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Off
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5 text-right">
                                  <div className="flex flex-col gap-1 items-end text-right">
                                    <span className="font-semibold tabular-nums text-foreground text-sm">
                                      22h
                                    </span>
                                    <span className="gap-1 inline-flex items-center tabular-nums text-amber-600 text-xs">
                                      <svg className="lucide lucide-square size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                      </svg>
                                      73%
                                    </span>
                                  </div>
                                </td>
                              </tr>
                              <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="iris-calder">
                                <td className="align-middle border-e px-2 py-1.5">
                                  <div className="flex gap-2.5 items-center min-w-0">
                                    <div className="relative shrink-0">
                                      <Avatar className="size-8" size="default">
                                        <AvatarImage alt="Iris Calder" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </div>
                                    <div className="flex flex-col leading-tight min-w-0">
                                      <div className="font-medium text-foreground text-sm truncate">
                                        Iris Calder
                                      </div>
                                      <div className="pt-0.5 text-muted-foreground text-xs truncate" title="Design systems lead">
                                        Design systems lead
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Mar 23: 6h logged as client. Timesheet explorations" id="base-ui-_r_2b_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        6h
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-emerald-500 block h-full rounded-full" style={{width: "75%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Client
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Mar 24: 6h 30m logged as client. Usage analytics QA" id="base-ui-_r_2d_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        6h 30m
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-emerald-500 block h-full rounded-full" style={{width: "81.25%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Client
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Mar 25: 6h logged as internal. Pattern inventory" id="base-ui-_r_2f_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        6h
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-sky-500 block h-full rounded-full" style={{width: "75%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Internal
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Mar 26: 6h 30m logged as client. Workspace theming" id="base-ui-_r_2h_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        6h 30m
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-emerald-500 block h-full rounded-full" style={{width: "81.25%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Client
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Mar 27: 4h logged as client. Review fixes" id="base-ui-_r_2j_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        4h
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-emerald-500 block h-full rounded-full" style={{width: "50%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Client
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Mar 28: No weekend hours were logged for this day." id="base-ui-_r_2l_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                        -
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Off
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Mar 29: No weekend hours were logged for this day." id="base-ui-_r_2n_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                        -
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Off
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5 text-right">
                                  <div className="flex flex-col gap-1 items-end text-right">
                                    <span className="font-semibold tabular-nums text-foreground text-sm">
                                      29h
                                    </span>
                                    <span className="gap-1 inline-flex items-center tabular-nums text-emerald-600 text-xs">
                                      <svg className="lucide lucide-square size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                      </svg>
                                      91%
                                    </span>
                                  </div>
                                </td>
                              </tr>
                              <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="samir-vale">
                                <td className="align-middle border-e px-2 py-1.5">
                                  <div className="flex gap-2.5 items-center min-w-0">
                                    <div className="relative shrink-0">
                                      <Avatar className="size-8" size="default">
                                        <AvatarFallback>
                                          SV
                                        </AvatarFallback>
                                      </Avatar>
                                    </div>
                                    <div className="flex flex-col leading-tight min-w-0">
                                      <div className="font-medium text-foreground text-sm truncate">
                                        Samir Vale
                                      </div>
                                      <div className="pt-0.5 text-muted-foreground text-xs truncate" title="Partner success manager">
                                        Partner success manager
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Mar 23: 7h logged as support. Go-live triage" id="base-ui-_r_2p_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        7h
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-amber-500 block h-full rounded-full" style={{width: "87.5%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Support
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Mar 24: 7h 30m logged as support. Partner QBR prep" id="base-ui-_r_2r_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        7h 30m
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-amber-500 block h-full rounded-full" style={{width: "93.75%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Support
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Mar 25: 6h 30m logged as client. Migration playbook review" id="base-ui-_r_2t_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        6h 30m
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-emerald-500 block h-full rounded-full" style={{width: "81.25%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Client
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Mar 26: 8h logged as client. Expansion scoping" id="base-ui-_r_2v_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        8h
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-emerald-500 block h-full rounded-full" style={{width: "100%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Client
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Mar 27: 7h logged as support. Weekly care plan" id="base-ui-_r_31_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                        7h
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-amber-500 block h-full rounded-full" style={{width: "87.5%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Support
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Mar 28: No weekend hours were logged for this day." id="base-ui-_r_33_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                        -
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Off
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Mar 29: No weekend hours were logged for this day." id="base-ui-_r_35_" baseUiTooltipTrigger="">
                                    <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                      <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                        -
                                      </span>
                                      <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                        <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                      </span>
                                      <span className="leading-none text-[11px] text-muted-foreground">
                                        Off
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle border-e px-2 py-1.5 text-right">
                                  <div className="flex flex-col gap-1 items-end text-right">
                                    <span className="font-semibold tabular-nums text-foreground text-sm">
                                      36h
                                    </span>
                                    <span className="gap-1 inline-flex items-center tabular-nums text-emerald-600 text-xs">
                                      <svg className="lucide lucide-square size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                      </svg>
                                      103%
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            </DataGridTableBody>
                          </DataGridTable>
                        </DataGridTableViewport>
                      </div>
                    </div>
                  </DataGridScrollArea>
                </div>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                  <DataGridPagination>
                    <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                      <div className="text-muted-foreground text-sm">
                        Rows per page
                      </div>
                      <Select>
                      <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_36_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                        <SelectValue>
                          5
                        </SelectValue>
                        <svg className="cn-select-trigger-icon lucide lucide-square pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                          ▼
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_36_-hidden-input" tabIndex="-1" aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </div>
                    <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                      <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                        1 - 5 of 9
                      </div>
                      <div className="flex flex-wrap gap-1 items-center justify-center order-1 sm:flex-nowrap">
                        <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" disabled="" tabIndex="0" disabled>
                          <span className="sr-only">
                            Go to previous page
                          </span>
                          <svg className="lucide lucide-square size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                          </svg>
                        </Button>
                        <Button className="bg-accent px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-accent-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 1" aria-current="page">
                          1
                        </Button>
                        <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 2">
                          2
                        </Button>
                        <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" tabIndex="0">
                          <span className="sr-only">
                            Go to next page
                          </span>
                          <svg className="lucide lucide-square size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </DataGridPagination>
                </footer>
              </FramePanel>
            </Frame>
            <section className="gap-3 grid lg:grid-cols-3" aria-label="Delivery integration cards">
              <Frame className="@container h-full w-full" spacing="xs">
                <header className="flex flex-row gap-3 items-start justify-between px-(--frame-panel-header-px) px-3! py-(--frame-panel-header-py) py-2.5!">
                  <div className="min-w-0 space-y-0.5">
                    <div className="font-semibold text-sm">
                      Delivery Apps
                    </div>
                    <div className="text-muted-foreground text-xs truncate">
                      Live project connectors
                    </div>
                  </div>
                </header>
                <FramePanel className="p-3!">
                  <ul className="flex flex-col" id="_r_39_">
                    <li>
                      <div className="flex gap-2.5 items-center">
                        <div className="flex items-center justify-center shrink-0 size-8">
                          <svg className="size-6" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                            <defs>
                              <lineargradient id="_r_3a_" x1="23.666%" x2="76.334%" y1="95.6118%" y2="4.3882%">
                                <stop offset=".00006%" stopColor="#0845BF"></stop>
                                <stop offset="19.11%" stopColor="#0950DE"></stop>
                                <stop offset="38.23%" stopColor="#0B59F6"></stop>
                                <stop offset="50%" stopColor="#0B5CFF"></stop>
                                <stop offset="67.32%" stopColor="#0E5EFE"></stop>
                                <stop offset="77.74%" stopColor="#1665FC"></stop>
                                <stop offset="86.33%" stopColor="#246FF9"></stop>
                                <stop offset="93.88%" stopColor="#387FF4"></stop>
                                <stop offset="100%" stopColor="#4F90EE"></stop>
                              </lineargradient>
                            </defs>
                            <path fill="url(#_r_3a_)" d="M256 128c0 13.568-1.024 27.136-3.328 40.192-6.912 43.264-41.216 77.568-84.48 84.48C155.136 254.976 141.568 256 128 256c-13.568 0-27.136-1.024-40.192-3.328-43.264-6.912-77.568-41.216-84.48-84.48C1.024 155.136 0 141.568 0 128c0-13.568 1.024-27.136 3.328-40.192 6.912-43.264 41.216-77.568 84.48-84.48C100.864 1.024 114.432 0 128 0c13.568 0 27.136 1.024 40.192 3.328 43.264 6.912 77.568 41.216 84.48 84.48C254.976 100.864 256 114.432 256 128Z"></path>
                            <path fill="#FFF" d="M204.032 207.872H75.008c-8.448 0-16.64-4.608-20.48-12.032-4.608-8.704-2.816-19.2 4.096-26.112l89.856-89.856H83.968c-17.664 0-32-14.336-32-32h118.784c8.448 0 16.64 4.608 20.48 12.032 4.608 8.704 2.816 19.2-4.096 26.112l-89.6 90.112h74.496c17.664 0 32 14.08 32 31.744Z"></path>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0 space-y-0.5">
                          <p className="font-medium text-foreground text-sm truncate">
                            Zoom
                          </p>
                          <p className="text-muted-foreground text-xs truncate">
                            Client calls
                          </p>
                        </div>
                        <Button type="button" tabIndex="0" aria-label="Connect Zoom">
                          Connect
                        </Button>
                      </div>
                      <Separator className="bg-transparent border-dashed border-t my-2.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    </li>
                    <li>
                      <div className="flex gap-2.5 items-center">
                        <div className="flex items-center justify-center shrink-0 size-8">
                          <svg className="size-6" aria-hidden="true" viewBox="0 0 2447.6 2452.5">
                            <g clipRule="evenodd" fillRule="evenodd">
                              <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                              <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                              <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                              <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                            </g>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0 space-y-0.5">
                          <p className="font-medium text-foreground text-sm truncate">
                            Slack
                          </p>
                          <p className="text-muted-foreground text-xs truncate">
                            Launch room
                          </p>
                        </div>
                        <Button type="button" tabIndex="0" aria-label="Connect Slack">
                          Connect
                        </Button>
                      </div>
                      <Separator className="bg-transparent border-dashed border-t my-2.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    </li>
                    <li>
                      <div className="flex gap-2.5 items-center">
                        <div className="flex items-center justify-center shrink-0 size-8">
                          <svg className="size-6" aria-hidden="true" viewBox="0 0 109 113" fill="none">
                            <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint0_linear)"></path>
                            <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint1_linear)" fillOpacity="0.2"></path>
                            <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"></path>
                            <defs>
                              <lineargradient id="supabase-paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#249361"></stop>
                                <stop offset="1" stopColor="#3ECF8E"></stop>
                              </lineargradient>
                              <lineargradient id="supabase-paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
                                <stop></stop>
                                <stop offset="1" stopOpacity="0"></stop>
                              </lineargradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0 space-y-0.5">
                          <p className="font-medium text-foreground text-sm truncate">
                            Supabase
                          </p>
                          <p className="text-muted-foreground text-xs truncate">
                            Usage store
                          </p>
                        </div>
                        <Button type="button" tabIndex="0" aria-label="Connect Supabase">
                          Connect
                        </Button>
                      </div>
                      <Separator className="bg-transparent border-dashed border-t my-2.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    </li>
                    <li>
                      <div className="flex gap-2.5 items-center">
                        <div className="flex items-center justify-center shrink-0 size-8">
                          <span className="dark:hidden" aria-hidden="true">
                            <svg className="size-6" aria-hidden="true" fill="none" viewBox="0 0 128 128">
                              <circle cx="64" cy="64" r="20" fill="#6C47FF"></circle>
                              <path fill="#BAB1FF" d="M99.572 10.788c1.999 1.34 2.17 4.156.468 5.858L85.424 31.262c-1.32 1.32-3.37 1.53-5.033.678A35.846 35.846 0 0 0 64 28c-19.882 0-36 16.118-36 36a35.846 35.846 0 0 0 3.94 16.391c.851 1.663.643 3.712-.678 5.033L16.646 100.04c-1.702 1.702-4.519 1.531-5.858-.468C3.974 89.399 0 77.163 0 64 0 28.654 28.654 0 64 0c13.163 0 25.399 3.974 35.572 10.788Z"></path>
                              <path fill="#6C47FF" d="M100.04 111.354c1.702 1.702 1.531 4.519-.468 5.858C89.399 124.026 77.164 128 64 128c-13.164 0-25.399-3.974-35.572-10.788-2-1.339-2.17-4.156-.468-5.858l14.615-14.616c1.322-1.32 3.37-1.53 5.033-.678A35.847 35.847 0 0 0 64 100a35.846 35.846 0 0 0 16.392-3.94c1.662-.852 3.712-.643 5.032.678l14.616 14.616Z"></path>
                            </svg>
                          </span>
                          <span className="dark:block hidden" aria-hidden="true">
                            <svg className="size-6" aria-hidden="true" fill="none" viewBox="0 0 128 128">
                              <circle cx="64" cy="64" r="20" fill="#fff"></circle>
                              <path fill="#fff" fillOpacity=".4" d="M99.572 10.788c1.999 1.34 2.17 4.156.468 5.858L85.424 31.262c-1.32 1.32-3.37 1.53-5.033.678A35.846 35.846 0 0 0 64 28c-19.882 0-36 16.118-36 36a35.846 35.846 0 0 0 3.94 16.391c.851 1.663.643 3.712-.678 5.033L16.646 100.04c-1.702 1.702-4.519 1.531-5.858-.468C3.974 89.399 0 77.163 0 64 0 28.654 28.654 0 64 0c13.163 0 25.399 3.974 35.572 10.788Z"></path>
                              <path fill="#fff" d="M100.04 111.354c1.702 1.702 1.531 4.519-.468 5.858C89.399 124.026 77.164 128 64 128c-13.164 0-25.399-3.974-35.572-10.788-2-1.339-2.17-4.156-.468-5.858l14.615-14.616c1.322-1.32 3.37-1.53 5.033-.678A35.847 35.847 0 0 0 64 100a35.846 35.846 0 0 0 16.392-3.94c1.662-.852 3.712-.643 5.032.678l14.616 14.616Z"></path>
                            </svg>
                          </span>
                        </div>
                        <div className="flex-1 min-w-0 space-y-0.5">
                          <p className="font-medium text-foreground text-sm truncate">
                            Clerk
                          </p>
                          <p className="text-muted-foreground text-xs truncate">
                            SSO gate
                          </p>
                        </div>
                        <Button type="button" tabIndex="0" aria-label="Connect Clerk">
                          Connect
                        </Button>
                      </div>
                    </li>
                  </ul>
                </FramePanel>
                <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) px-3! py-(--frame-panel-footer-py) py-2.5!">
                  <Button className="w-full" type="button" tabIndex="0" aria-expanded="false" aria-controls="_r_39_">
                    See All
                  </Button>
                </footer>
              </Frame>
              <Frame className="@container h-full w-full" spacing="xs">
                <header className="flex flex-row gap-3 items-start justify-between px-(--frame-panel-header-px) px-3! py-(--frame-panel-header-py) py-2.5!">
                  <div className="min-w-0 space-y-0.5">
                    <div className="font-semibold text-sm">
                      Manual Workflows
                    </div>
                    <div className="text-muted-foreground text-xs truncate">
                      Optional workflow add-ons
                    </div>
                  </div>
                </header>
                <FramePanel className="p-3!">
                  <ul className="flex flex-col" id="_r_3b_">
                    <li>
                      <div className="flex gap-2.5 items-center">
                        <ItemMedia variant="icon">
                          <Item className="[&_svg]:opacity-60 [&_svg]:size-4 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                            <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                            </svg>
                          </Item>
                        </ItemMedia>
                        <div className="flex-1 min-w-0 space-y-0.5">
                          <p className="font-medium text-foreground text-sm truncate">
                            Data Audit
                          </p>
                          <p className="text-muted-foreground text-xs truncate">
                            Clean rollout exports
                          </p>
                        </div>
                        <Button type="button" tabIndex="0" aria-label="Add Data Audit workflow">
                          <svg className="lucide lucide-square opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                          </svg>
                        </Button>
                      </div>
                      <Separator className="bg-transparent border-dashed border-t my-2.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    </li>
                    <li>
                      <div className="flex gap-2.5 items-center">
                        <ItemMedia variant="icon">
                          <Item className="[&_svg]:opacity-60 [&_svg]:size-4 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                            <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ScanSearchIcon" tabler="IconZoomScan" hugeicons="SearchVisualIcon" phosphor="SelectionIcon" remixicon="RiScan2Line" aria-hidden="true">
                              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                            </svg>
                          </Item>
                        </ItemMedia>
                        <div className="flex-1 min-w-0 space-y-0.5">
                          <p className="font-medium text-foreground text-sm truncate">
                            Risk Sweep
                          </p>
                          <p className="text-muted-foreground text-xs truncate">
                            Flag delivery drift
                          </p>
                        </div>
                        <Button type="button" tabIndex="0" aria-label="Add Risk Sweep workflow">
                          <svg className="lucide lucide-square opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                          </svg>
                        </Button>
                      </div>
                      <Separator className="bg-transparent border-dashed border-t my-2.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    </li>
                    <li>
                      <div className="flex gap-2.5 items-center">
                        <ItemMedia variant="icon">
                          <Item className="[&_svg]:opacity-60 [&_svg]:size-4 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                            <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                            </svg>
                          </Item>
                        </ItemMedia>
                        <div className="flex-1 min-w-0 space-y-0.5">
                          <p className="font-medium text-foreground text-sm truncate">
                            Launch Recap
                          </p>
                          <p className="text-muted-foreground text-xs truncate">
                            Draft client summary
                          </p>
                        </div>
                        <Button type="button" tabIndex="0" aria-label="Add Launch Recap workflow">
                          <svg className="lucide lucide-square opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                          </svg>
                        </Button>
                      </div>
                      <Separator className="bg-transparent border-dashed border-t my-2.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    </li>
                    <li>
                      <div className="flex gap-2.5 items-center">
                        <ItemMedia variant="icon">
                          <Item className="[&_svg]:opacity-60 [&_svg]:size-4 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                            <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                            </svg>
                          </Item>
                        </ItemMedia>
                        <div className="flex-1 min-w-0 space-y-0.5">
                          <p className="font-medium text-foreground text-sm truncate">
                            Support Bot
                          </p>
                          <p className="text-muted-foreground text-xs truncate">
                            Route handoff notes
                          </p>
                        </div>
                        <Button type="button" tabIndex="0" aria-label="Add Support Bot workflow">
                          <svg className="lucide lucide-square opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                          </svg>
                        </Button>
                      </div>
                    </li>
                  </ul>
                </FramePanel>
                <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) px-3! py-(--frame-panel-footer-py) py-2.5!">
                  <Button className="w-full" type="button" tabIndex="0" aria-expanded="false" aria-controls="_r_3b_">
                    Browse More
                  </Button>
                </footer>
              </Frame>
              <Frame className="@container h-full w-full" spacing="xs">
                <header className="flex flex-row gap-3 items-start justify-between px-(--frame-panel-header-px) px-3! py-(--frame-panel-header-py) py-2.5!">
                  <div className="min-w-0 space-y-0.5">
                    <div className="font-semibold text-sm">
                      Delivery Checks
                    </div>
                    <div className="text-muted-foreground text-xs truncate">
                      Launch readiness tasks
                    </div>
                  </div>
                </header>
                <FramePanel className="p-3!">
                  <ul className="flex flex-col" id="_r_3c_">
                    <li>
                      <div className="flex gap-2.5 items-center">
                        <ItemMedia variant="icon">
                          <Item className="[&_svg]:opacity-60 [&_svg]:size-4 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                            <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClipboardListIcon" tabler="IconClipboardList" hugeicons="ClipboardIcon" phosphor="ClipboardTextIcon" remixicon="RiFileListLine" aria-hidden="true">
                              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                            </svg>
                          </Item>
                        </ItemMedia>
                        <div className="flex-1 min-w-0 space-y-0.5">
                          <p className="font-medium text-foreground text-sm truncate">
                            Scope Check
                          </p>
                          <p className="text-muted-foreground text-xs truncate">
                            Confirm launch criteria
                          </p>
                        </div>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                          Ready
                        </Badge>
                      </div>
                      <Separator className="bg-transparent border-dashed border-t my-2.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    </li>
                    <li>
                      <div className="flex gap-2.5 items-center">
                        <ItemMedia variant="icon">
                          <Item className="[&_svg]:opacity-60 [&_svg]:size-4 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                            <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                            </svg>
                          </Item>
                        </ItemMedia>
                        <div className="flex-1 min-w-0 space-y-0.5">
                          <p className="font-medium text-foreground text-sm truncate">
                            QA Handoff
                          </p>
                          <p className="text-muted-foreground text-xs truncate">
                            Send tester notes
                          </p>
                        </div>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                          Due
                        </Badge>
                      </div>
                      <Separator className="bg-transparent border-dashed border-t my-2.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    </li>
                    <li>
                      <div className="flex gap-2.5 items-center">
                        <ItemMedia variant="icon">
                          <Item className="[&_svg]:opacity-60 [&_svg]:size-4 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                            <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                            </svg>
                          </Item>
                        </ItemMedia>
                        <div className="flex-1 min-w-0 space-y-0.5">
                          <p className="font-medium text-foreground text-sm truncate">
                            Stakeholder Sync
                          </p>
                          <p className="text-muted-foreground text-xs truncate">
                            Align decision owners
                          </p>
                        </div>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                          Review
                        </Badge>
                      </div>
                      <Separator className="bg-transparent border-dashed border-t my-2.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    </li>
                    <li>
                      <div className="flex gap-2.5 items-center">
                        <ItemMedia variant="icon">
                          <Item className="[&_svg]:opacity-60 [&_svg]:size-4 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                            <svg className="lucide lucide-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                            </svg>
                          </Item>
                        </ItemMedia>
                        <div className="flex-1 min-w-0 space-y-0.5">
                          <p className="font-medium text-foreground text-sm truncate">
                            Client Recap
                          </p>
                          <p className="text-muted-foreground text-xs truncate">
                            Queue weekly update
                          </p>
                        </div>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-invert/10 border border-invert/15 dark:bg-invert/35 dark:border-invert/45 dark:text-invert-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                          Queued
                        </Badge>
                      </div>
                    </li>
                  </ul>
                </FramePanel>
                <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) px-3! py-(--frame-panel-footer-py) py-2.5!">
                  <Button className="w-full" type="button" tabIndex="0" aria-expanded="false" aria-controls="_r_3c_">
                    View Tasks
                  </Button>
                </footer>
              </Frame>
            </section>
          </div>
        </Tabs>
      </div>
    </main>
  )
}
