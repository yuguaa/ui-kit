import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"
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

export function Pattern() {
  return (
    <div className="bg-background h-svh text-foreground w-full">
      <div className="bg-input/20 flex gap-2 h-full p-2">
        <div className="hidden lg:flex">
          <nav className="flex flex-col items-center justify-between shrink-0 w-7" aria-label="Sections">
            <div className="flex flex-col items-center">
              <div className="flex py-2.5">
                <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 outline-none rounded-md text-foreground" href="#" aria-label="NeUI home">
                  <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M16 0.92308H8C4.09152 0.92308 0.92308 4.09152 0.92308 8V16C0.92308 19.9085 4.09152 23.0769 8 23.0769H16C19.9085 23.0769 23.0769 19.9085 23.0769 16V8C23.0769 4.09152 19.9085 0.92308 16 0.92308ZM8 0C3.58172 0 0 3.58172 0 8V16C0 20.4183 3.58172 24 8 24H16C20.4183 24 24 20.4183 24 16V8C24 3.58172 20.4183 0 16 0H8Z" fill="currentColor"></path>
                    <path d="M16.8322 8.25504C17.4549 8.25504 17.9597 7.75023 17.9597 7.12752C17.9597 6.50481 17.4549 6 16.8322 6C16.2095 6 15.7047 6.50481 15.7047 7.12752C15.7047 7.75023 16.2095 8.25504 16.8322 8.25504Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.04032 13.6509V7.12745C6.04032 6.50474 6.54512 5.99993 7.16782 5.99993C7.79055 5.99993 8.29535 6.50474 8.29535 7.12745V13.6509C8.29535 14.8074 9.23282 15.7449 10.3893 15.7449H13.6108C14.7672 15.7449 15.7047 14.8074 15.7047 13.6509V10.4616C15.7047 9.83898 16.2095 9.33418 16.8323 9.33418C17.4549 9.33418 17.9598 9.83898 17.9598 10.4616V13.6509C17.9598 16.0528 16.0127 17.9999 13.6108 17.9999H10.3893C7.98742 17.9999 6.04032 16.0528 6.04032 13.6509Z" fill="currentColor"></path>
                  </svg>
                </a>
              </div>
              <div className="flex h-0 items-center" aria-hidden="true">
                <Separator className="bg-input data-horizontal:w-4" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              </div>
              <ul className="flex flex-col gap-2 pt-3">
                <li className="flex">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 bg-input/60 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-input/60 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 inline-flex items-center justify-center outline-none select-none shrink-0 text-foreground transition-all whitespace-nowrap" href="#" aria-label="Matching" aria-current="page" role="button" tabIndex="0" id="base-ui-_r_1_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-scale" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ScaleIcon" tabler="IconScale" hugeicons="JusticeScale01Icon" phosphor="ScalesIcon" remixicon="RiScales3Line" aria-hidden="true">
                      <path d="M12 3v18"></path>
                      <path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path>
                      <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path>
                      <path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path>
                      <path d="M7 21h10"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </li>
                <li className="flex">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-input/60 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Suppliers" role="button" tabIndex="0" id="base-ui-_r_3_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-building-2 lucide-building2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                      <path d="M10 12h4"></path>
                      <path d="M10 8h4"></path>
                      <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                      <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </li>
                <li className="flex">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-input/60 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Documents" role="button" tabIndex="0" id="base-ui-_r_5_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                      <path d="M10 9H8"></path>
                      <path d="M16 13H8"></path>
                      <path d="M16 17H8"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </li>
                <li className="flex">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-input/60 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Team" role="button" tabIndex="0" id="base-ui-_r_7_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </li>
                <li className="flex">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-input/60 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Rules" role="button" tabIndex="0" id="base-ui-_r_9_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-sliders-horizontal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SlidersHorizontalIcon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                      <path d="M10 5H3"></path>
                      <path d="M12 19H3"></path>
                      <path d="M14 3v4"></path>
                      <path d="M16 17v4"></path>
                      <path d="M21 12h-9"></path>
                      <path d="M21 19h-5"></path>
                      <path d="M21 5h-7"></path>
                      <path d="M8 10v4"></path>
                      <path d="M8 12H3"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 items-center py-3">
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-input/60 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Help" role="button" tabIndex="0" id="base-ui-_r_b_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-input/60 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Settings" role="button" tabIndex="0" id="base-ui-_r_d_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Account menu for Shadcn" aria-haspopup="menu" id="base-ui-_r_h_" aria-expanded="false">
                <Avatar className="after:border-0 after:rounded-md rounded-md size-6" size="default">
                  <AvatarImage className="rounded-md" alt="" startingStyle="" src="/assets/avatar-shadcn.jpg"></AvatarImage>
                </Avatar>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
          </nav>
        </div>
        <Card className="after:absolute after:border after:border-ring/30 after:inset-0 after:pointer-events-none after:rounded-lg bg-background flex-1 gap-0 min-w-0 py-0 relative ring-0 rounded-lg" size="default">
          <header className="border-b border-input/50 flex flex-wrap gap-x-2.5 gap-y-2 items-center max-sm:gap-x-2 px-3 py-2 shrink-0">
            <div className="-ml-1.5 flex lg:hidden">
              <Button type="button" tabIndex="0" aria-label="Open navigation">
                <svg className="lucide lucide-menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MenuIcon" tabler="IconMenu2" hugeicons="Menu01Icon" phosphor="ListIcon" remixicon="RiMenuLine" aria-hidden="true">
                  <path d="M4 5h16"></path>
                  <path d="M4 12h16"></path>
                  <path d="M4 19h16"></path>
                </svg>
              </Button>
              <Button type="button" tabIndex="0" aria-label="Open order queue">
                <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine" aria-hidden="true">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M9 3v18"></path>
                </svg>
              </Button>
            </div>
            <h1 className="font-medium max-sm:basis-0 max-sm:flex-1 max-sm:min-w-0 max-sm:truncate text-sm">
              3WIM Queue
            </h1>
            <Separator className="-me-px bg-input data-vertical:h-3.5 data-vertical:self-center max-sm:hidden" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
            <Tabs className="max-sm:order-last max-sm:w-full" data-orientation="horizontal" activationDirection="none">
              <TabsList className="bg-input/40 h-7 p-0 rounded-md" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                <TabsTrigger className="dark:data-active:bg-background data-active:border-input data-active:shadow-none h-full px-2.25 text-muted-foreground text-xs" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_j_" compositeItemActive="">
                  Matching Queue
                </TabsTrigger>
                <TabsTrigger className="dark:data-active:bg-background data-active:border-input data-active:shadow-none h-full px-2.25 text-muted-foreground text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_k_">
                  Completed Matches
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex gap-2 items-center ms-auto">
              <Button className="pl-1.25 pr-2.25 shadow-xs text-xs" type="button" tabIndex="0" aria-expanded="false">
                <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle>
                </svg>
                Ask AI
              </Button>
              <Button className="pl-1.25 pr-2.25 text-xs" type="button" tabIndex="0">
                <svg className="lucide lucide-upload" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UploadIcon" tabler="IconUpload" hugeicons="Upload01Icon" phosphor="UploadSimpleIcon" remixicon="RiUploadLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M12 3v12"></path>
                  <path d="m17 8-5-5-5 5"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                </svg>
                <span>
                  Upload
                  <span className="max-sm:hidden">
                    New
                  </span>
                </span>
              </Button>
            </div>
          </header>
          <div className="flex flex-1 min-h-0">
            <aside className="after:absolute after:bg-border after:inset-y-0 after:right-0 after:w-px hidden lg:flex relative" aria-label="Order queue">
              <div className="flex flex-1 flex-col gap-3 min-h-0 p-3 w-64">
                <div className="flex gap-1.5 items-center">
                  <InputGroup className="bg-background dark:bg-input/30 flex-1 h-7 rounded-md shadow-xs" role="group">
                    <InputGroupAddon className="[&>svg]:size-3.5 pl-1.25" role="group" data-align="inline-start">
                      <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                      </svg>
                    </InputGroupAddon>
                    <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 font-medium h-full min-w-0 outline-none pl-1 placeholder:text-muted-foreground text-xs w-full" id="base-ui-_r_l_" placeholder="Search..." aria-label="Search orders" value="" />
                  </InputGroup>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shadow-2xs shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filter orders" aria-haspopup="menu" id="base-ui-_r_p_" aria-expanded="false">
                    <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                      <path d="M14 17H5"></path>
                      <path d="M19 7h-9"></path>
                      <circle cx="17" cy="17" r="3"></circle>
                      <circle cx="7" cy="7" r="3"></circle>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </div>
                <div className="flex flex-1 flex-col min-h-0 no-scrollbar overflow-y-auto scroll-fade-y">
                  <p className="font-medium text-ring text-xs">
                    31 orders
                  </p>
                  <ul className="flex flex-col">
                    <li>
                      <Collapsible data-open="">
                        <Collapsible>
                        <CollapsibleTrigger className="[&>svg]:size-3.5 [&>svg]:text-ring [&>svg]:transition-transform data-panel-open:[&>svg]:rotate-90 data-panel-open:[&>svg]:text-foreground data-panel-open:text-foreground flex flex-1 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 hover:text-foreground items-center min-w-0 outline-none rounded-md text-muted-foreground text-xs w-full" type="button" panelOpen="" tabIndex="0" aria-disabled="false" aria-controls="base-ui-_r_r_" aria-expanded="true">
                          <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                          <span className="flex-1 min-w-0 text-left truncate">
                            PO-2026-10021
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/20 border-0 border-warning/15 dark:bg-warning/20 dark:border-warning/25 dark:text-yellow-400 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-warning-foreground transition-shadow">
                            Review
                          </Badge>
                        </CollapsibleTrigger>
                        </Collapsible>
                        <CollapsibleContent data-open="" id="base-ui-_r_r_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                          <Collapsible data-open="">
                            <div className="flex gap-1.5">
                              <span className="flex justify-center shrink-0 w-3.5" aria-hidden="true">
                                <span className="bg-border w-px"></span>
                              </span>
                              <Collapsible>
                              <CollapsibleTrigger className="[&>svg]:size-3.5 [&>svg]:text-ring [&>svg]:transition-transform data-panel-open:[&>svg]:rotate-90 data-panel-open:[&>svg]:text-foreground data-panel-open:text-foreground flex flex-1 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 hover:text-foreground items-center min-w-0 outline-none rounded-md text-muted-foreground text-xs" type="button" panelOpen="" tabIndex="0" aria-disabled="false" aria-controls="base-ui-_r_s_" aria-expanded="true">
                                <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                <span className="truncate">
                                  3WIM
                                </span>
                              </CollapsibleTrigger>
                              </Collapsible>
                            </div>
                            <CollapsibleContent data-open="" id="base-ui-_r_s_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                              <div className="flex">
                                <span className="flex justify-center shrink-0 w-3.5" aria-hidden="true">
                                  <span className="bg-border w-px"></span>
                                </span>
                                <span className="flex justify-end py-1.5 shrink-0 w-5" aria-hidden="true">
                                  <span className="flex flex-col gap-0.5 items-center">
                                    <span className="border border-destructive dark:border-destructive-foreground flex p-px rounded-full" aria-hidden="true">
                                      <span className="[&>svg]:size-2.5 bg-destructive dark:bg-destructive-foreground flex items-center justify-center rounded-full size-3 text-white">
                                        <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                          <path d="M18 6 6 18"></path>
                                          <path d="m6 6 12 12"></path>
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="flex flex-1 flex-col items-center justify-between">
                                      <span className="bg-destructive dark:bg-destructive-foreground rounded-full size-0.75"></span>
                                      <span className="bg-destructive dark:bg-destructive-foreground rounded-full size-0.75"></span>
                                    </span>
                                    <span className="border border-destructive dark:border-destructive-foreground flex p-px rounded-full" aria-hidden="true">
                                      <span className="[&>svg]:size-2.5 bg-destructive dark:bg-destructive-foreground flex items-center justify-center rounded-full size-3 text-white">
                                        <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                          <path d="M18 6 6 18"></path>
                                          <path d="m6 6 12 12"></path>
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="flex flex-1 flex-col items-center justify-between">
                                      <span className="bg-linear-to-b bg-position-[0_0] bg-size-[3px_8px] dark:from-destructive-foreground from-destructive rounded-full size-0.75 to-ring/80"></span>
                                      <span className="bg-linear-to-b bg-position-[0_-5px] bg-size-[3px_8px] dark:from-destructive-foreground from-destructive rounded-full size-0.75 to-ring/80"></span>
                                    </span>
                                    <span className="border border-ring/80 flex p-px rounded-full" aria-hidden="true">
                                      <span className="[&>svg]:size-2.5 bg-ring/80 flex items-center justify-center rounded-full size-3 text-white">
                                        <svg className="lucide lucide-circle-dashed" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDashedIcon" tabler="IconCircleDashed" hugeicons="CircleDashedIcon" phosphor="CircleDashedIcon" remixicon="RiCheckboxBlankCircleLine" aria-hidden="true">
                                          <path d="M10.1 2.182a10 10 0 0 1 3.8 0"></path>
                                          <path d="M13.9 21.818a10 10 0 0 1-3.8 0"></path>
                                          <path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"></path>
                                          <path d="M2.182 13.9a10 10 0 0 1 0-3.8"></path>
                                          <path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"></path>
                                          <path d="M21.818 10.1a10 10 0 0 1 0 3.8"></path>
                                          <path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"></path>
                                          <path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"></path>
                                        </svg>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                                <ul className="flex flex-1 flex-col min-w-0 pl-1">
                                  <li className="relative">
                                    <Button className="active:translate-y-0 dark:hover:bg-input/30 data-active:bg-input/30 data-active:text-foreground gap-1.5 hover:bg-input/30 justify-start pr-7 px-1.25 text-muted-foreground text-xs w-full" type="button" tabIndex="0" data-active="true" aria-current="page">
                                      <span className="truncate">
                                        Document validation
                                      </span>
                                      <span className="sr-only">
                                        , Failed
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border-0 border-destructive/15 dark:bg-destructive/10 dark:border-destructive/25 dark:text-destructive-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 min-w-4 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-destructive transition-shadow">
                                        1
                                      </Badge>
                                    </Button>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="-translate-y-1/2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-3.5 absolute cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none right-px select-none shrink-0 text-ring top-1/2 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Document validation" aria-haspopup="menu" id="base-ui-_r_10_" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="12" cy="5" r="1"></circle>
                                        <circle cx="12" cy="19" r="1"></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </li>
                                  <li className="relative">
                                    <Button className="active:translate-y-0 dark:hover:bg-input/30 data-active:bg-input/30 data-active:text-foreground gap-1.5 hover:bg-input/30 justify-start px-1.25 text-muted-foreground text-xs w-full" type="button" tabIndex="0">
                                      <span className="truncate">
                                        3-way line match
                                      </span>
                                      <span className="sr-only">
                                        , Failed
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border-0 border-destructive/15 dark:bg-destructive/10 dark:border-destructive/25 dark:text-destructive-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 min-w-4 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-destructive transition-shadow">
                                        2
                                      </Badge>
                                    </Button>
                                  </li>
                                  <li className="relative">
                                    <Button className="active:translate-y-0 dark:hover:bg-input/30 data-active:bg-input/30 data-active:text-foreground gap-1.5 hover:bg-input/30 justify-start px-1.25 text-muted-foreground text-xs w-full" type="button" tabIndex="0">
                                      <span className="truncate">
                                        Approve payment
                                      </span>
                                      <span className="sr-only">
                                        , Pending
                                      </span>
                                    </Button>
                                  </li>
                                </ul>
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                          <Collapsible data-closed="">
                            <div className="flex gap-1.5">
                              <span className="flex justify-center shrink-0 w-3.5" aria-hidden="true">
                                <span className="bg-border w-px"></span>
                              </span>
                              <Collapsible>
                              <CollapsibleTrigger className="[&>svg]:size-3.5 [&>svg]:text-ring [&>svg]:transition-transform data-panel-open:[&>svg]:rotate-90 data-panel-open:[&>svg]:text-foreground data-panel-open:text-foreground flex flex-1 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 hover:text-foreground items-center min-w-0 outline-none rounded-md text-muted-foreground text-xs" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                                <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                <span className="truncate">
                                  More
                                </span>
                              </CollapsibleTrigger>
                              </Collapsible>
                            </div>
                          </Collapsible>
                        </CollapsibleContent>
                      </Collapsible>
                    </li>
                    <li>
                      <Collapsible data-closed="">
                        <Collapsible>
                        <CollapsibleTrigger className="[&>svg]:size-3.5 [&>svg]:text-ring [&>svg]:transition-transform data-panel-open:[&>svg]:rotate-90 data-panel-open:[&>svg]:text-foreground data-panel-open:text-foreground flex flex-1 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 hover:text-foreground items-center min-w-0 outline-none rounded-md text-muted-foreground text-xs w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                          <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                          <span className="flex-1 min-w-0 text-left truncate">
                            PO-2026-10001
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/20 border-0 border-success/15 dark:bg-success/20 dark:border-success/25 dark:text-emerald-400 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                            Ready
                          </Badge>
                        </CollapsibleTrigger>
                        </Collapsible>
                      </Collapsible>
                    </li>
                    <li>
                      <Collapsible data-closed="">
                        <Collapsible>
                        <CollapsibleTrigger className="[&>svg]:size-3.5 [&>svg]:text-ring [&>svg]:transition-transform data-panel-open:[&>svg]:rotate-90 data-panel-open:[&>svg]:text-foreground data-panel-open:text-foreground flex flex-1 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 hover:text-foreground items-center min-w-0 outline-none rounded-md text-muted-foreground text-xs w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                          <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                          <span className="flex-1 min-w-0 text-left truncate">
                            PO-2026-10024
                          </span>
                        </CollapsibleTrigger>
                        </Collapsible>
                      </Collapsible>
                    </li>
                    <li>
                      <Collapsible data-closed="">
                        <Collapsible>
                        <CollapsibleTrigger className="[&>svg]:size-3.5 [&>svg]:text-ring [&>svg]:transition-transform data-panel-open:[&>svg]:rotate-90 data-panel-open:[&>svg]:text-foreground data-panel-open:text-foreground flex flex-1 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 hover:text-foreground items-center min-w-0 outline-none rounded-md text-muted-foreground text-xs w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                          <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                          <span className="flex-1 min-w-0 text-left truncate">
                            PO-2026-10032
                          </span>
                        </CollapsibleTrigger>
                        </Collapsible>
                      </Collapsible>
                    </li>
                    <li>
                      <Collapsible data-closed="">
                        <Collapsible>
                        <CollapsibleTrigger className="[&>svg]:size-3.5 [&>svg]:text-ring [&>svg]:transition-transform data-panel-open:[&>svg]:rotate-90 data-panel-open:[&>svg]:text-foreground data-panel-open:text-foreground flex flex-1 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 hover:text-foreground items-center min-w-0 outline-none rounded-md text-muted-foreground text-xs w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                          <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                          <span className="flex-1 min-w-0 text-left truncate">
                            PO-2026-10011
                          </span>
                        </CollapsibleTrigger>
                        </Collapsible>
                      </Collapsible>
                    </li>
                    <li>
                      <Collapsible data-closed="">
                        <Collapsible>
                        <CollapsibleTrigger className="[&>svg]:size-3.5 [&>svg]:text-ring [&>svg]:transition-transform data-panel-open:[&>svg]:rotate-90 data-panel-open:[&>svg]:text-foreground data-panel-open:text-foreground flex flex-1 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 hover:text-foreground items-center min-w-0 outline-none rounded-md text-muted-foreground text-xs w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                          <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                          <span className="flex-1 min-w-0 text-left truncate">
                            PO-2026-10033
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/20 border-0 border-warning/15 dark:bg-warning/20 dark:border-warning/25 dark:text-yellow-400 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-warning-foreground transition-shadow">
                            Review
                          </Badge>
                        </CollapsibleTrigger>
                        </Collapsible>
                      </Collapsible>
                    </li>
                    <li>
                      <Collapsible data-closed="">
                        <Collapsible>
                        <CollapsibleTrigger className="[&>svg]:size-3.5 [&>svg]:text-ring [&>svg]:transition-transform data-panel-open:[&>svg]:rotate-90 data-panel-open:[&>svg]:text-foreground data-panel-open:text-foreground flex flex-1 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 hover:text-foreground items-center min-w-0 outline-none rounded-md text-muted-foreground text-xs w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                          <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                          <span className="flex-1 min-w-0 text-left truncate">
                            PO-2026-10022
                          </span>
                        </CollapsibleTrigger>
                        </Collapsible>
                      </Collapsible>
                    </li>
                    <li>
                      <Collapsible data-closed="">
                        <Collapsible>
                        <CollapsibleTrigger className="[&>svg]:size-3.5 [&>svg]:text-ring [&>svg]:transition-transform data-panel-open:[&>svg]:rotate-90 data-panel-open:[&>svg]:text-foreground data-panel-open:text-foreground flex flex-1 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 hover:text-foreground items-center min-w-0 outline-none rounded-md text-muted-foreground text-xs w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                          <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                          <span className="flex-1 min-w-0 text-left truncate">
                            PO-2026-10051
                          </span>
                        </CollapsibleTrigger>
                        </Collapsible>
                      </Collapsible>
                    </li>
                    <li>
                      <Collapsible data-closed="">
                        <Collapsible>
                        <CollapsibleTrigger className="[&>svg]:size-3.5 [&>svg]:text-ring [&>svg]:transition-transform data-panel-open:[&>svg]:rotate-90 data-panel-open:[&>svg]:text-foreground data-panel-open:text-foreground flex flex-1 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 hover:text-foreground items-center min-w-0 outline-none rounded-md text-muted-foreground text-xs w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                          <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                          <span className="flex-1 min-w-0 text-left truncate">
                            PO-2026-10053
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/20 border-0 border-warning/15 dark:bg-warning/20 dark:border-warning/25 dark:text-yellow-400 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-warning-foreground transition-shadow">
                            Review
                          </Badge>
                        </CollapsibleTrigger>
                        </Collapsible>
                      </Collapsible>
                    </li>
                    <li>
                      <Collapsible data-closed="">
                        <Collapsible>
                        <CollapsibleTrigger className="[&>svg]:size-3.5 [&>svg]:text-ring [&>svg]:transition-transform data-panel-open:[&>svg]:rotate-90 data-panel-open:[&>svg]:text-foreground data-panel-open:text-foreground flex flex-1 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 hover:text-foreground items-center min-w-0 outline-none rounded-md text-muted-foreground text-xs w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                          <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                          <span className="flex-1 min-w-0 text-left truncate">
                            PO-2026-10070
                          </span>
                        </CollapsibleTrigger>
                        </Collapsible>
                      </Collapsible>
                    </li>
                    <li>
                      <Collapsible data-closed="">
                        <Collapsible>
                        <CollapsibleTrigger className="[&>svg]:size-3.5 [&>svg]:text-ring [&>svg]:transition-transform data-panel-open:[&>svg]:rotate-90 data-panel-open:[&>svg]:text-foreground data-panel-open:text-foreground flex flex-1 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 hover:text-foreground items-center min-w-0 outline-none rounded-md text-muted-foreground text-xs w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                          <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                          <span className="flex-1 min-w-0 text-left truncate">
                            PO-2026-10020
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border-0 border-destructive/15 dark:bg-destructive/10 dark:border-destructive/25 dark:text-destructive-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-destructive transition-shadow">
                            Overdue
                          </Badge>
                        </CollapsibleTrigger>
                        </Collapsible>
                      </Collapsible>
                    </li>
                    <li>
                      <Collapsible data-closed="">
                        <Collapsible>
                        <CollapsibleTrigger className="[&>svg]:size-3.5 [&>svg]:text-ring [&>svg]:transition-transform data-panel-open:[&>svg]:rotate-90 data-panel-open:[&>svg]:text-foreground data-panel-open:text-foreground flex flex-1 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 hover:text-foreground items-center min-w-0 outline-none rounded-md text-muted-foreground text-xs w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                          <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                          <span className="flex-1 min-w-0 text-left truncate">
                            PO-2026-10023
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/20 border-0 border-success/15 dark:bg-success/20 dark:border-success/25 dark:text-emerald-400 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                            Ready
                          </Badge>
                        </CollapsibleTrigger>
                        </Collapsible>
                      </Collapsible>
                    </li>
                    <li>
                      <Collapsible data-closed="">
                        <Collapsible>
                        <CollapsibleTrigger className="[&>svg]:size-3.5 [&>svg]:text-ring [&>svg]:transition-transform data-panel-open:[&>svg]:rotate-90 data-panel-open:[&>svg]:text-foreground data-panel-open:text-foreground flex flex-1 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 hover:text-foreground items-center min-w-0 outline-none rounded-md text-muted-foreground text-xs w-full" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                          <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                          <span className="flex-1 min-w-0 text-left truncate">
                            PO-2026-10090
                          </span>
                        </CollapsibleTrigger>
                        </Collapsible>
                      </Collapsible>
                    </li>
                  </ul>
                </div>
                <Button className="pl-1.25 pr-2.25 shadow-xs text-xs w-full" type="button" tabIndex="0">
                  <svg className="lucide lucide-file-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileUpIcon" tabler="IconFileUpload" hugeicons="FileUploadIcon" phosphor="FileArrowUpIcon" remixicon="RiFileUploadLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                    <path d="M12 12v6"></path>
                    <path d="m15 15-3-3-3 3"></path>
                  </svg>
                  New 3WIM
                </Button>
              </div>
            </aside>
            <main className="flex-1 lg:pr-2 min-w-0 no-scrollbar overflow-y-auto p-3 scroll-fade-y">
              <div className="flex flex-col gap-3">
                <Frame className="[--frame-gap:0px] [--frame-panel-border-color:color-mix(in_oklch,var(--color-ring)_20%,transparent)] [--frame-panel-footer-px-adjust:-4px] [--frame-panel-footer-py-adjust:-2px] [--frame-panel-header-px-adjust:-4px] [--frame-panel-header-py-adjust:-2px] [--frame-panel-px-adjust:-5px] [--frame-panel-py-adjust:-5px] [--frame-panel-radius:var(--radius-lg)] [--frame-px:--spacing(1)] [--frame-py:--spacing(1)] bg-info/7 border-0 dark:bg-info/10 rounded-lg" spacing="default" aria-hidden="true">
                  <header className="flex flex-row gap-(--frame-panel-header-gap) items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <Skeleton className="bg-input/50 dark:bg-input/30 h-5 shrink-0 w-50"></Skeleton>
                    <Skeleton className="bg-input/50 dark:bg-input/30 shrink-0 size-3.5"></Skeleton>
                  </header>
                  <FramePanel className="[--frame-panel-px:13.2px] [--frame-panel-py:13.2px] after:[mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)] after:absolute after:bg-[linear-gradient(90deg,rgb(38_188_96/.4),rgb(168_39_243/.4)_25.66%,rgb(212_178_24/.4)_50.81%,rgb(25_99_201/.4)_75.47%,rgb(211_75_22/.4)_100.71%)] after:inset-0 after:p-[1.2px] after:pointer-events-none after:rounded-(--frame-panel-radius) border-0 flex flex-col gap-4 lg:flex-row shadow-none">
                    <div className="flex flex-1 flex-col gap-4 min-w-0">
                      <div className="flex gap-4 items-center justify-between">
                        <div className="flex gap-2 items-center min-w-0">
                          <Skeleton className="bg-input/50 dark:bg-input/30 rounded-lg shrink-0 size-8.5"></Skeleton>
                          <div className="flex flex-col gap-1 min-w-0">
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-w-full shrink-0 w-28"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3 max-w-full shrink-0 w-24"></Skeleton>
                          </div>
                        </div>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-4.5 shrink-0 w-20"></Skeleton>
                      </div>
                      <Skeleton className="bg-input/50 dark:bg-input/30 h-7 shrink-0 w-full"></Skeleton>
                      <div className="flex flex-col gap-4 md:flex-row">
                        <div className="flex flex-1 flex-col gap-2.5 min-w-0">
                          <div className="contents">
                            <div className="flex gap-1.5 items-center">
                              <div className="shrink-0 w-32">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-16"></Skeleton>
                              </div>
                              <Skeleton className="bg-input/50 dark:bg-input/30 h-4 min-w-0 shrink w-18"></Skeleton>
                            </div>
                          </div>
                          <div className="contents">
                            <div className="-mb-px border-dashed border-ring/20 border-t shrink-0" aria-hidden="true"></div>
                            <div className="flex gap-1.5 items-center">
                              <div className="shrink-0 w-32">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-24"></Skeleton>
                              </div>
                              <Skeleton className="bg-input/50 dark:bg-input/30 h-4 min-w-0 shrink w-48"></Skeleton>
                            </div>
                          </div>
                          <div className="contents">
                            <div className="-mb-px border-dashed border-ring/20 border-t shrink-0" aria-hidden="true"></div>
                            <div className="flex gap-1.5 items-center">
                              <div className="shrink-0 w-32">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-20"></Skeleton>
                              </div>
                              <Skeleton className="bg-input/50 dark:bg-input/30 h-4 min-w-0 shrink w-2"></Skeleton>
                            </div>
                          </div>
                          <div className="contents">
                            <div className="-mb-px border-dashed border-ring/20 border-t shrink-0" aria-hidden="true"></div>
                            <div className="flex gap-1.5 items-center">
                              <div className="shrink-0 w-32">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-22"></Skeleton>
                              </div>
                              <Skeleton className="bg-input/50 dark:bg-input/30 h-4 min-w-0 shrink w-18"></Skeleton>
                            </div>
                          </div>
                          <div className="contents">
                            <div className="-mb-px border-dashed border-ring/20 border-t shrink-0" aria-hidden="true"></div>
                            <div className="flex gap-1.5 items-center">
                              <div className="shrink-0 w-32">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-14"></Skeleton>
                              </div>
                              <Skeleton className="bg-input/50 dark:bg-input/30 h-4 min-w-0 shrink w-22"></Skeleton>
                            </div>
                          </div>
                          <div className="contents">
                            <div className="-mb-px border-dashed border-ring/20 border-t shrink-0" aria-hidden="true"></div>
                            <div className="flex gap-1.5 items-center">
                              <div className="shrink-0 w-32">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-22"></Skeleton>
                              </div>
                              <Skeleton className="bg-input/50 dark:bg-input/30 h-4 min-w-0 shrink w-15"></Skeleton>
                            </div>
                          </div>
                        </div>
                        <div className="-mr-px border-dashed border-l border-ring/20 max-md:hidden self-stretch shrink-0" aria-hidden="true"></div>
                        <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-24"></Skeleton>
                          <Frame className="[--frame-gap:--spacing(1)] [--frame-panel-border-color:color-mix(in_oklch,var(--color-ring)_20%,transparent)] [--frame-panel-footer-px-adjust:-4px] [--frame-panel-footer-py-adjust:-2px] [--frame-panel-header-px-adjust:-4px] [--frame-panel-header-py-adjust:-2px] [--frame-panel-px-adjust:-5px] [--frame-panel-py-adjust:-5px] [--frame-panel-radius:var(--radius-lg)] bg-muted border-0 dark:bg-input/50 rounded-lg" spacing="default">
                            <FramePanel className="flex flex-col gap-1.5 shadow-none">
                              <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-3/4"></Skeleton>
                              <div className="flex flex-col gap-0.5 py-px">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-full"></Skeleton>
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-1/2"></Skeleton>
                              </div>
                            </FramePanel>
                          </Frame>
                          <Frame className="[--frame-gap:--spacing(1)] [--frame-panel-border-color:color-mix(in_oklch,var(--color-ring)_20%,transparent)] [--frame-panel-footer-px-adjust:-4px] [--frame-panel-footer-py-adjust:-2px] [--frame-panel-header-px-adjust:-4px] [--frame-panel-header-py-adjust:-2px] [--frame-panel-px-adjust:-5px] [--frame-panel-py-adjust:-5px] [--frame-panel-radius:var(--radius-lg)] bg-muted border-0 dark:bg-input/50 rounded-lg" spacing="default">
                            <FramePanel className="flex flex-col gap-1.5 shadow-none">
                              <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-3/4"></Skeleton>
                              <div className="flex flex-col gap-0.5 py-px">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-full"></Skeleton>
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-1/2"></Skeleton>
                              </div>
                            </FramePanel>
                          </Frame>
                        </div>
                      </div>
                    </div>
                    <Frame className="[--frame-gap:--spacing(2)] [--frame-panel-border-color:color-mix(in_oklch,var(--color-ring)_20%,transparent)] [--frame-panel-footer-px-adjust:-4px] [--frame-panel-footer-py-adjust:-2px] [--frame-panel-header-px-adjust:-4px] [--frame-panel-header-py-adjust:-2px] [--frame-panel-px-adjust:-5px] [--frame-panel-py-adjust:-5px] [--frame-panel-radius:var(--radius-lg)] [--frame-px:--spacing(1)] [--frame-py:--spacing(1)] bg-muted border-0 dark:bg-input/50 lg:w-65 rounded-lg" spacing="default">
                      <div className="flex items-center justify-between pt-1 px-3">
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-5 shrink-0 w-28"></Skeleton>
                      </div>
                      <FramePanel className="flex flex-col gap-3 shadow-none">
                        <div className="flex gap-4 items-center justify-between">
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-4 min-w-0 shrink w-20"></Skeleton>
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-5 shrink-0 w-4"></Skeleton>
                        </div>
                        <div className="flex flex-col gap-0.5 py-px">
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-full"></Skeleton>
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-3/4"></Skeleton>
                        </div>
                        <div className="-mb-px border-dashed border-ring/20 border-t shrink-0" aria-hidden="true"></div>
                        <div className="flex gap-4 items-center justify-between">
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-4 min-w-0 shrink w-24"></Skeleton>
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-2"></Skeleton>
                        </div>
                        <div className="flex gap-4 items-center justify-between">
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-4 min-w-0 shrink w-24"></Skeleton>
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-18"></Skeleton>
                        </div>
                        <div className="flex flex-col gap-2 items-center mt-auto pt-6">
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-3 shrink-0 w-36"></Skeleton>
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-7 rounded-md shrink-0 w-full"></Skeleton>
                        </div>
                      </FramePanel>
                    </Frame>
                  </FramePanel>
                  <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                    <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 max-w-full shrink-0 w-125"></Skeleton>
                  </footer>
                </Frame>
                <Frame className="[--frame-gap:--spacing(1)] [--frame-panel-border-color:color-mix(in_oklch,var(--color-ring)_20%,transparent)] [--frame-panel-footer-px-adjust:-4px] [--frame-panel-footer-py-adjust:-2px] [--frame-panel-header-px-adjust:-4px] [--frame-panel-header-py-adjust:-2px] [--frame-panel-px-adjust:-5px] [--frame-panel-py-adjust:-5px] [--frame-panel-radius:var(--radius-lg)] [--frame-px:--spacing(1)] [--frame-py:--spacing(1)] bg-muted border-0 dark:bg-input/50 rounded-lg shadow-xs" spacing="default" aria-hidden="true">
                  <div className="flex flex-col gap-1 md:flex-row">
                    <FramePanel className="flex flex-1 flex-col gap-3 shadow-none">
                      <div className="flex gap-2 items-center justify-between">
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-22"></Skeleton>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 min-w-0 shrink w-11"></Skeleton>
                      </div>
                      <div className="flex gap-2 items-center">
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-24"></Skeleton>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-4.5 shrink-0 w-20"></Skeleton>
                      </div>
                      <div className="flex flex-1 flex-col gap-2 justify-end">
                        <div className="flex gap-1.5 items-center">
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-15"></Skeleton>
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-14"></Skeleton>
                        </div>
                        <div className="flex gap-1.5 h-3.5 items-center">
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-15"></Skeleton>
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-4.5 shrink-0 w-20"></Skeleton>
                        </div>
                      </div>
                    </FramePanel>
                    <FramePanel className="flex flex-1 flex-col gap-3 md:max-w-56 shadow-none">
                      <div className="flex gap-2 items-center justify-between">
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-22"></Skeleton>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 min-w-0 shrink w-11"></Skeleton>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-24"></Skeleton>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-24"></Skeleton>
                      </div>
                      <div className="flex flex-1 flex-col gap-2 justify-end">
                        <div className="flex gap-1.5 items-center">
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-15"></Skeleton>
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-14"></Skeleton>
                        </div>
                        <div className="flex gap-1.5 h-3.5 items-center">
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-15"></Skeleton>
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-4.5 shrink-0 w-20"></Skeleton>
                        </div>
                      </div>
                    </FramePanel>
                    <FramePanel className="flex flex-1 flex-col gap-3 shadow-none">
                      <div className="flex gap-2 items-center justify-between">
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-22"></Skeleton>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 min-w-0 shrink w-31"></Skeleton>
                      </div>
                      <div className="flex gap-2 items-center">
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-24"></Skeleton>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-4.5 shrink-0 w-20"></Skeleton>
                      </div>
                      <div className="flex flex-1 flex-col gap-2 justify-end">
                        <div className="flex gap-1.5 items-center">
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-15"></Skeleton>
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-14"></Skeleton>
                        </div>
                        <div className="flex gap-1.5 h-3.5 items-center">
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-15"></Skeleton>
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-4.5 shrink-0 w-20"></Skeleton>
                        </div>
                      </div>
                    </FramePanel>
                  </div>
                  <FramePanel className="bg-background bg-linear-to-r dark:from-input/30 dark:to-input/30 flex flex-col from-accent/20 p-0 shadow-none to-accent/20">
                    <div className="flex gap-4 h-9.75 items-center justify-between px-3">
                      <Skeleton className="bg-input/50 dark:bg-input/30 h-6 rounded-md shrink-0 w-61"></Skeleton>
                      <div className="flex gap-2 items-center max-md:hidden">
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-4.5 rounded-full shrink-0 w-8"></Skeleton>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-35"></Skeleton>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-6 rounded-md shrink-0 w-17"></Skeleton>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-6 rounded-md shrink-0 w-24"></Skeleton>
                      </div>
                    </div>
                    <FramePanel className="-mb-px -mx-px p-0 shadow-none">
                      <div className="grid md:grid-cols-[439fr_224fr_439fr]">
                        <div className="contents">
                          <div className="border-b flex gap-2 h-7 items-center md:border-r min-w-0 px-3">
                            <Skeleton className="bg-input/50 dark:bg-input/30 rounded-full shrink-0 size-3.5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 min-w-0 shrink w-38"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 ml-auto shrink-0 w-14"></Skeleton>
                          </div>
                          <div className="border-b border-r flex h-7 items-center justify-end max-md:hidden min-w-0 px-3">
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-14"></Skeleton>
                          </div>
                          <div className="border-b flex h-7 items-center justify-end max-md:hidden min-w-0 px-3">
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-1"></Skeleton>
                          </div>
                        </div>
                        <div className="contents">
                          <div className="bg-muted/50 border-b flex gap-2 h-7 items-center md:border-r min-w-0 px-3">
                            <Skeleton className="bg-input/50 dark:bg-input/30 rounded-full shrink-0 size-3.5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 min-w-0 shrink w-50"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 ml-auto shrink-0 w-14"></Skeleton>
                          </div>
                          <div className="bg-muted/50 border-b border-r flex h-7 items-center justify-end max-md:hidden min-w-0 px-3">
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-1"></Skeleton>
                          </div>
                          <div className="bg-muted/50 border-b flex h-7 items-center justify-end max-md:hidden min-w-0 px-3">
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-14"></Skeleton>
                          </div>
                        </div>
                        <div className="contents">
                          <div className="border-b flex gap-2 h-7 items-center md:border-r min-w-0 px-3">
                            <Skeleton className="bg-input/50 dark:bg-input/30 rounded-full shrink-0 size-3.5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 min-w-0 shrink w-50"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 ml-auto shrink-0 w-16"></Skeleton>
                          </div>
                          <div className="border-b border-r flex h-7 items-center justify-end max-md:hidden min-w-0 px-3">
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-16"></Skeleton>
                          </div>
                          <div className="border-b flex h-7 items-center justify-end max-md:hidden min-w-0 px-3">
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-1"></Skeleton>
                          </div>
                        </div>
                        <div className="contents">
                          <div className="bg-muted/50 border-b flex gap-2 h-7 items-center md:border-r min-w-0 px-3">
                            <Skeleton className="bg-input/50 dark:bg-input/30 rounded-full shrink-0 size-3.5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 min-w-0 shrink w-50"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 ml-auto shrink-0 w-16"></Skeleton>
                          </div>
                          <div className="bg-muted/50 border-b border-r flex h-7 items-center justify-end max-md:hidden min-w-0 px-3">
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-1"></Skeleton>
                          </div>
                          <div className="bg-muted/50 border-b flex h-7 items-center justify-end max-md:hidden min-w-0 px-3">
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-16"></Skeleton>
                          </div>
                        </div>
                        <div className="contents">
                          <div className="border-b flex gap-2 h-7 items-center md:border-r min-w-0 px-3">
                            <Skeleton className="bg-input/50 dark:bg-input/30 rounded-full shrink-0 size-3.5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 min-w-0 shrink w-40"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 ml-auto shrink-0 w-1"></Skeleton>
                          </div>
                          <div className="border-b border-r flex h-7 items-center justify-end max-md:hidden min-w-0 px-3">
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-1"></Skeleton>
                          </div>
                          <div className="border-b flex h-7 items-center justify-end max-md:hidden min-w-0 px-3">
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-12"></Skeleton>
                          </div>
                        </div>
                        <div className="contents">
                          <div className="bg-muted/50 border-b flex gap-2 h-7 items-center md:border-r min-w-0 px-3">
                            <Skeleton className="bg-input/50 dark:bg-input/30 rounded-full shrink-0 size-3.5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 min-w-0 shrink w-42"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 ml-auto shrink-0 w-1"></Skeleton>
                          </div>
                          <div className="bg-muted/50 border-b border-r flex h-7 items-center justify-end max-md:hidden min-w-0 px-3">
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-1"></Skeleton>
                          </div>
                          <div className="bg-muted/50 border-b flex h-7 items-center justify-end max-md:hidden min-w-0 px-3">
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-8"></Skeleton>
                          </div>
                        </div>
                        <div className="contents">
                          <div className="bg-destructive/5 border-b dark:bg-red-950/50 flex gap-2 h-7 items-center md:border-r min-w-0 px-3">
                            <Skeleton className="bg-input/50 dark:bg-input/30 rounded-full shrink-0 size-3.5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 min-w-0 shrink w-38"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 ml-auto shrink-0 w-1"></Skeleton>
                          </div>
                          <div className="bg-destructive/5 border-b border-r dark:bg-red-950/50 flex h-7 items-center justify-end max-md:hidden min-w-0 px-3">
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-1"></Skeleton>
                          </div>
                          <div className="bg-destructive/5 border-b dark:bg-red-950/50 flex h-7 items-center justify-end max-md:hidden min-w-0 px-3">
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-1"></Skeleton>
                          </div>
                        </div>
                      </div>
                      <div className="bg-muted dark:bg-input/50 px-3 py-2">
                        <FramePanel className="bg-linear-to-r dark:from-input/25 dark:to-input/25 flex flex-col from-accent/20 gap-3 shadow-none to-accent/20">
                          <div className="flex gap-1.5">
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-4.5 shrink-0 w-20"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-4.5 shrink-0 w-18"></Skeleton>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-5 max-w-full shrink-0 w-80"></Skeleton>
                            <div className="flex flex-col gap-0.5 py-px">
                              <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-full"></Skeleton>
                              <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-2/3"></Skeleton>
                            </div>
                          </div>
                        </FramePanel>
                      </div>
                    </FramePanel>
                  </FramePanel>
                </Frame>
              </div>
            </main>
          </div>
        </Card>
        <aside className="-ml-2 2xl:data-[state=open]:w-96 data-[state=open]:ml-0 data-[state=open]:w-80 duration-200 ease-linear flex motion-reduce:transition-none overflow-hidden shrink-0 transition-[width,margin] w-0" aria-label="3WIM Advisor" data-state="closed" inert="">
          <Card className="2xl:w-96 after:absolute after:border after:border-ring/30 after:inset-0 after:pointer-events-none after:rounded-lg after:z-30 bg-background gap-0 h-full py-0 relative ring-0 rounded-lg shrink-0 w-80" size="default"></Card>
        </aside>
      </div>
    </div>
  )
}
