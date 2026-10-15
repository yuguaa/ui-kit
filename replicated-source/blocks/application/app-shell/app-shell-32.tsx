import {
  Sortable,
  SortableItem,
  SortableItemHandle,
} from "@/registry-neui/bases/radix/neui/sortable"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
import {
  Dialog,
  DialogTrigger,
} from "@/registry/bases/base/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/registry/bases/base/ui/sidebar"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import {
  SidebarGroupLabel,
  SidebarMenuAction,
  SidebarMenuSubButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <SidebarProvider>
    <div className="bg-background flex group/sidebar-wrapper h-svh has-data-[variant=inset]:bg-sidebar min-h-0 overflow-hidden text-foreground w-full" style={{"--sidebar-width": "19rem", "--sidebar-width-icon": "3rem"}}>
      <div className="hidden md:flex">
        <nav className="after:absolute after:bg-input/50 after:inset-y-0 after:right-0 after:w-px flex flex-col h-full items-center justify-between relative shrink-0 w-12" aria-label="Sections">
          <div className="flex flex-col gap-3 items-center w-full">
            <div className="border-b border-input/50 flex justify-center py-3 w-full">
              <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 outline-none rounded-md text-foreground" href="#" aria-label="NeUI home">
                <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M16 0.92308H8C4.09152 0.92308 0.92308 4.09152 0.92308 8V16C0.92308 19.9085 4.09152 23.0769 8 23.0769H16C19.9085 23.0769 23.0769 19.9085 23.0769 16V8C23.0769 4.09152 19.9085 0.92308 16 0.92308ZM8 0C3.58172 0 0 3.58172 0 8V16C0 20.4183 3.58172 24 8 24H16C20.4183 24 24 20.4183 24 16V8C24 3.58172 20.4183 0 16 0H8Z" fill="currentColor"></path>
                  <path d="M16.8322 8.25504C17.4549 8.25504 17.9597 7.75023 17.9597 7.12752C17.9597 6.50481 17.4549 6 16.8322 6C16.2095 6 15.7047 6.50481 15.7047 7.12752C15.7047 7.75023 16.2095 8.25504 16.8322 8.25504Z" fill="currentColor"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.04032 13.6509V7.12745C6.04032 6.50474 6.54512 5.99993 7.16782 5.99993C7.79055 5.99993 8.29535 6.50474 8.29535 7.12745V13.6509C8.29535 14.8074 9.23282 15.7449 10.3893 15.7449H13.6108C14.7672 15.7449 15.7047 14.8074 15.7047 13.6509V10.4616C15.7047 9.83898 16.2095 9.33418 16.8323 9.33418C17.4549 9.33418 17.9598 9.83898 17.9598 10.4616V13.6509C17.9598 16.0528 16.0127 17.9999 13.6108 17.9999H10.3893C7.98742 17.9999 6.04032 16.0528 6.04032 13.6509Z" fill="currentColor"></path>
                </svg>
              </a>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="flex">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Overview" role="button" tabIndex={0} id="base-ui-_r_1_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                    <rect width={7} height={9} x={3} y={3} rx={1}></rect>
                    <rect width={7} height={5} x={14} y={3} rx={1}></rect>
                    <rect width={7} height={9} x={14} y={12} rx={1}></rect>
                    <rect width={7} height={5} x={3} y={16} rx={1}></rect>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </li>
              <li className="flex">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Live Map" role="button" tabIndex={0} id="base-ui-_r_3_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-map" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MapIcon" tabler="IconMap" hugeicons="Location01Icon" phosphor="MapTrifoldIcon" remixicon="RiMapLine" aria-hidden="true">
                    <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
                    <path d="M15 5.764v15"></path>
                    <path d="M9 3.236v15"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </li>
              <li className="flex">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Robots" role="button" tabIndex={0} id="base-ui-_r_5_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-bot" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                    <path d="M12 8V4H8"></path>
                    <rect width={16} height={12} x={4} y={8} rx={2}></rect>
                    <path d="M2 14h2"></path>
                    <path d="M20 14h2"></path>
                    <path d="M15 13v2"></path>
                    <path d="M9 13v2"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </li>
              <li className="flex">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Inventory" role="button" tabIndex={0} id="base-ui-_r_7_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-boxes" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BoxesIcon" tabler="IconBoxMultiple" hugeicons="BoxesIcon" phosphor="CubeIcon" remixicon="RiStackLine" aria-hidden="true">
                    <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
                    <path d="m7 16.5-4.74-2.85"></path>
                    <path d="m7 16.5 5-3"></path>
                    <path d="M7 16.5v5.17"></path>
                    <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
                    <path d="m17 16.5-5-3"></path>
                    <path d="m17 16.5 4.74-2.85"></path>
                    <path d="M17 16.5v5.17"></path>
                    <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
                    <path d="M12 8 7.26 5.15"></path>
                    <path d="m12 8 4.74-2.85"></path>
                    <path d="M12 13.5V8"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </li>
              <li className="flex">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 bg-input/60 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 inline-flex items-center justify-center outline-none select-none shrink-0 text-foreground transition-all whitespace-nowrap" href="#" aria-label="Security" aria-current="page" role="button" tabIndex={0} id="base-ui-_r_9_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </li>
              <li className="flex">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Missions" role="button" tabIndex={0} id="base-ui-_r_b_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-clipboard-list" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClipboardListIcon" tabler="IconClipboardList" hugeicons="ClipboardIcon" phosphor="ClipboardTextIcon" remixicon="RiFileListLine" aria-hidden="true">
                    <rect width={8} height={4} x={8} y={2} rx={1} ry={1}></rect>
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <path d="M12 11h4"></path>
                    <path d="M12 16h4"></path>
                    <path d="M8 11h.01"></path>
                    <path d="M8 16h.01"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </li>
              <li className="flex">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Telemetry" role="button" tabIndex={0} id="base-ui-_r_d_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-square-activity" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SquareActivityIcon" tabler="IconActivityHeartbeat" hugeicons="PulseRectangle01Icon" phosphor="HeartbeatIcon" remixicon="RiPulseLine" aria-hidden="true">
                    <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                    <path d="M17 12h-2l-2 5-2-10-2 5H7"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </li>
              <li className="flex">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Access Keys" role="button" tabIndex={0} id="base-ui-_r_f_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-key-round" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                    <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                    <circle cx={16.5} cy={7.5} r=".5" fill="currentColor"></circle>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </li>
              <li className="flex">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Zones" role="button" tabIndex={0} id="base-ui-_r_h_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-square-dashed-mouse-pointer" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SquareDashedMousePointerIcon" tabler="IconLayersSelected" hugeicons="SquareMousePointerIcon" phosphor="SelectionIcon" remixicon="RiCursorLine" aria-hidden="true">
                    <path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"></path>
                    <path d="M5 3a2 2 0 0 0-2 2"></path>
                    <path d="M19 3a2 2 0 0 1 2 2"></path>
                    <path d="M5 21a2 2 0 0 1-2-2"></path>
                    <path d="M9 3h1"></path>
                    <path d="M9 21h2"></path>
                    <path d="M14 3h1"></path>
                    <path d="M3 9v1"></path>
                    <path d="M21 9v2"></path>
                    <path d="M3 14v1"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 items-center py-3">
            <Tooltip>
            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Help" role="button" tabIndex={0} id="base-ui-_r_j_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                <circle cx={12} cy={12} r={10}></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </TooltipTrigger>
            </Tooltip>
            <Tooltip>
            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Settings" role="button" tabIndex={0} id="base-ui-_r_l_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                <circle cx={12} cy={12} r={3}></circle>
              </svg>
            </TooltipTrigger>
            </Tooltip>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Account menu for Shadcn" aria-haspopup="menu" id="base-ui-_r_p_" aria-expanded="false">
              <Avatar className="after:border-0 after:rounded-md rounded-md" size="sm">
                <AvatarImage className="rounded-md" alt="" src="/assets/avatar-shadcn.jpg"></AvatarImage>
              </Avatar>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </nav>
      </div>
      <div className="flex flex-1 flex-col min-w-0">
        <header className="border-b border-input/50 flex gap-2 items-center justify-between px-3 py-2.5 shrink-0">
          <div className="flex gap-2.5 items-center min-w-0">
            <span className="flex md:hidden">
              <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 outline-none rounded-md text-foreground" href="#" aria-label="NeUI home">
                <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M16 0.92308H8C4.09152 0.92308 0.92308 4.09152 0.92308 8V16C0.92308 19.9085 4.09152 23.0769 8 23.0769H16C19.9085 23.0769 23.0769 19.9085 23.0769 16V8C23.0769 4.09152 19.9085 0.92308 16 0.92308ZM8 0C3.58172 0 0 3.58172 0 8V16C0 20.4183 3.58172 24 8 24H16C20.4183 24 24 20.4183 24 16V8C24 3.58172 20.4183 0 16 0H8Z" fill="currentColor"></path>
                  <path d="M16.8322 8.25504C17.4549 8.25504 17.9597 7.75023 17.9597 7.12752C17.9597 6.50481 17.4549 6 16.8322 6C16.2095 6 15.7047 6.50481 15.7047 7.12752C15.7047 7.75023 16.2095 8.25504 16.8322 8.25504Z" fill="currentColor"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.04032 13.6509V7.12745C6.04032 6.50474 6.54512 5.99993 7.16782 5.99993C7.79055 5.99993 8.29535 6.50474 8.29535 7.12745V13.6509C8.29535 14.8074 9.23282 15.7449 10.3893 15.7449H13.6108C14.7672 15.7449 15.7047 14.8074 15.7047 13.6509V10.4616C15.7047 9.83898 16.2095 9.33418 16.8323 9.33418C17.4549 9.33418 17.9598 9.83898 17.9598 10.4616V13.6509C17.9598 16.0528 16.0127 17.9999 13.6108 17.9999H10.3893C7.98742 17.9999 6.04032 16.0528 6.04032 13.6509Z" fill="currentColor"></path>
                </svg>
              </a>
            </span>
            <SidebarProvider>
            <SidebarTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center md:hidden outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} sidebar="trigger">
              <svg className="cn-rtl-flip lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine">
                <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                <path d="M9 3v18"></path>
              </svg>
              <span className="sr-only">
                {"Toggle Sidebar"}
              </span>
            </SidebarTrigger>
            </SidebarProvider>
            <h1 className="font-medium text-sm truncate">
              {"Fleet Protection"}
            </h1>
            <Separator className="bg-input data-vertical:self-center h-3 max-sm:hidden" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
            <div className="flex gap-1.5 items-center max-sm:hidden">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border-0 border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-secondary-foreground transition-shadow">
                {"248 Endpoints"}
              </Badge>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border-0 border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-secondary-foreground transition-shadow">
                {"12 Threats"}
              </Badge>
            </div>
          </div>
          <div className="flex gap-2 items-center shrink-0">
            <Dialog>
            <DialogTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-default disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-xs transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="New Mission" baseUiClickTrigger="" id="base-ui-_r_s_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-route" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" data-icon="inline-start" aria-hidden="true">
                <circle cx={6} cy={19} r={3}></circle>
                <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                <circle cx={18} cy={5} r={3}></circle>
              </svg>
              <span className="sm:hidden">
                {"New"}
              </span>
              <span className="max-sm:hidden">
                {"New Mission"}
              </span>
            </DialogTrigger>
            </Dialog>
            <Button className="dark:bg-clip-border max-sm:hidden shadow-xs text-xs" type="button" tabIndex={0} aria-expanded="false">
              <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" data-icon="inline-start" aria-hidden="true">
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                <path d="M20 2v4"></path>
                <path d="M22 4h-4"></path>
                <circle cx={4} cy={20} r={2}></circle>
              </svg>
              {"Open Chat"}
            </Button>
            <Button className="dark:bg-clip-border shadow-xs sm:hidden" type="button" tabIndex={0} aria-label="Open chat" aria-expanded="false">
              <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                <path d="M20 2v4"></path>
                <path d="M22 4h-4"></path>
                <circle cx={4} cy={20} r={2}></circle>
              </svg>
            </Button>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline dark:bg-clip-border disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shadow-xs shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Panel display" aria-haspopup="menu" id="base-ui-_r_10_" aria-expanded="false">
              <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                <path d="M14 17H5"></path>
                <path d="M19 7h-9"></path>
                <circle cx={17} cy={17} r={3}></circle>
                <circle cx={7} cy={7} r={3}></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </header>
        <div className="flex flex-1 min-h-0">
          <aside className="after:absolute after:bg-border after:inset-y-0 after:right-0 after:w-px data-[state=collapsed]:after:hidden data-[state=collapsed]:w-0 duration-200 ease-linear hidden md:flex overflow-hidden relative shrink-0 transition-[width] w-64" aria-label="Scope" data-state="expanded">
            <div className="flex flex-col shrink-0 w-64">
              <Tabs className="flex-1 gap-0 min-h-0" data-orientation="horizontal" activationDirection="none">
                <div className="pt-3 px-3 shrink-0">
                  <TabsList className="bg-input/40 h-7 p-0 rounded-md w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                    <TabsTrigger className="dark:data-active:bg-background data-active:border-input data-active:shadow-none h-full px-2.5 text-muted-foreground text-xs" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_12_" compositeItemActive="" aria-controls="base-ui-_r_15_">
                      {"Security"}
                    </TabsTrigger>
                    <TabsTrigger className="dark:data-active:bg-background data-active:border-input data-active:shadow-none h-full px-2.5 text-muted-foreground text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_13_">
                      {"Assets"}
                    </TabsTrigger>
                    <TabsTrigger className="dark:data-active:bg-background data-active:border-input data-active:shadow-none h-full px-2.5 text-muted-foreground text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_14_">
                      {"Events"}
                    </TabsTrigger>
                  </TabsList>
                </div>
                <div className="[--scroll-fade-reveal:--spacing(8)] flex-1 min-h-0 no-scrollbar overflow-y-auto p-3 scroll-fade-y scroll-py-10">
                  <TabsContent data-orientation="horizontal" activationDirection="none" id="base-ui-_r_15_" role="tabpanel" tabIndex={0} index="0" aria-labelledby="base-ui-_r_12_">
                    <SidebarProvider>
                    <SidebarGroup className="p-0" sidebar="group">
                      <SidebarProvider>
                      <SidebarGroupLabel className="h-6 px-0 text-ring" sidebar="group-label">
                        {"Security Scope"}
                      </SidebarGroupLabel>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarGroupContent sidebar="group-content">
                        <SidebarProvider>
                        <SidebarMenu sidebar="menu">
                          <SidebarProvider>
                          <SidebarMenuItem sidebar="menu-item">
                            <Collapsible data-open="">
                              <Collapsible>
                              <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:text-ring [&_svg]:shrink-0 [&_svg]:size-4 active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default data-active:[&>svg]:text-current data-active:bg-transparent data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group/menu-button hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground items-center outline-hidden overflow-hidden peer/menu-button pr-0 px-0 text-muted-foreground text-xs w-full" type="button" sidebar="menu-button" size="default" panelOpen="" tabIndex={0} aria-disabled="false" aria-controls="base-ui-_r_16_" aria-expanded="true">
                                <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none rotate-90 shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                <svg className="lucide lucide-monitor-cog size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MonitorCogIcon" tabler="IconDeviceDesktopCog" hugeicons="ComputerSettingsIcon" phosphor="MonitorIcon" remixicon="RiComputerLine" aria-hidden="true">
                                  <path d="M12 17v4"></path>
                                  <path d="m14.305 7.53.923-.382"></path>
                                  <path d="m15.228 4.852-.923-.383"></path>
                                  <path d="m16.852 3.228-.383-.924"></path>
                                  <path d="m16.852 8.772-.383.923"></path>
                                  <path d="m19.148 3.228.383-.924"></path>
                                  <path d="m19.53 9.696-.382-.924"></path>
                                  <path d="m20.772 4.852.924-.383"></path>
                                  <path d="m20.772 7.148.924.383"></path>
                                  <path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
                                  <path d="M8 21h8"></path>
                                  <circle cx={18} cy={6} r={3}></circle>
                                </svg>
                                <span className="min-w-0 truncate">
                                  {"Endpoints"}
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/20 border-0 border-success/15 dark:bg-success/20 dark:border-success/25 dark:text-success-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.75 h-4.5 min-w-4.5 ml-auto outline-none pr-1.5 px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                  <svg className="lucide lucide-shield-check size-2.5!" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                  </svg>
                                  {"Stable"}
                                </Badge>
                              </CollapsibleTrigger>
                              </Collapsible>
                              <CollapsibleContent data-open="" id="base-ui-_r_16_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                                <Sortable className="border-l cn-sidebar-menu-sub flex flex-col gap-0 min-w-0 ml-1.75 mx-0 pl-1 pr-0 py-0 translate-x-0" sidebar="menu-sub" dragging="false">
                                  <SortableItem className="data-[dragging=true]:bg-background data-[dragging=true]:pointer-events-none group/menu-sub-item relative rounded-md text-sidebar-foreground" sidebar="menu-sub-item" value="devices" dragging="false" tabIndex={-1} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                    <Collapsible data-closed="">
                                      <Collapsible>
                                      <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:bg-transparent data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground items-center min-w-0 outline-hidden overflow-hidden pr-6 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" tabIndex={0} aria-disabled="false" aria-expanded="false">
                                        <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                          <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                        <span className="shrink-0 size-4" aria-hidden="true"></span>
                                        <span className="min-w-0 truncate">
                                          {"Devices"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border-0 border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-secondary-foreground transition-shadow">
                                          {"248"}
                                        </Badge>
                                      </CollapsibleTrigger>
                                      </Collapsible>
                                    </Collapsible>
                                    <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground inline-flex items-center justify-center left-5.5 outline-none select-none shrink-0 text-ring top-0.5 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reorder Devices" dragging="false">
                                      <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                        <circle cx={9} cy={12} r={1}></circle>
                                        <circle cx={9} cy={5} r={1}></circle>
                                        <circle cx={9} cy={19} r={1}></circle>
                                        <circle cx={15} cy={12} r={1}></circle>
                                        <circle cx={15} cy={5} r={1}></circle>
                                        <circle cx={15} cy={19} r={1}></circle>
                                      </svg>
                                    </SortableItemHandle>
                                    <SidebarMenuAction className="[&>svg]:size-3.5 aspect-auto h-5 hover:bg-transparent hover:text-foreground right-0 text-ring w-3.5" type="button" sidebar="menu-action" aria-label="Add to Devices">
                                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                  </SortableItem>
                                  <SortableItem className="data-[dragging=true]:bg-background data-[dragging=true]:pointer-events-none group/menu-sub-item relative rounded-md text-sidebar-foreground" sidebar="menu-sub-item" value="threats" dragging="false" tabIndex={-1} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                    <Collapsible data-open="">
                                      <Collapsible>
                                      <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:bg-transparent data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground items-center min-w-0 outline-hidden overflow-hidden pr-12 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" panelOpen="" tabIndex={0} aria-disabled="false" aria-controls="base-ui-_r_18_" aria-expanded="true">
                                        <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none rotate-90 shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                          <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                        <span className="shrink-0 size-4" aria-hidden="true"></span>
                                        <span className="min-w-0 truncate">
                                          {"Threats"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border-0 border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-secondary-foreground transition-shadow">
                                          {"12"}
                                        </Badge>
                                      </CollapsibleTrigger>
                                      </Collapsible>
                                      <CollapsibleContent data-open="" id="base-ui-_r_18_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                                        <SidebarMenuSub className="border-l gap-px ml-3.75 mx-0 pl-1 pr-0 py-0 translate-x-0" sidebar="menu-sub">
                                          <SidebarMenuSubItem sidebar="menu-sub-item">
                                            <SidebarMenuSubButton className="[&>svg]:text-ring active:bg-input/60 aria-expanded:[&>svg]:text-current aria-expanded:text-foreground data-active:[&>svg]:text-current data-active:bg-input/60 data-active:gap-2 data-active:text-foreground font-medium gap-1.5 hover:[&>svg]:text-current hover:bg-input/60 hover:text-foreground text-muted-foreground translate-x-0 w-full" href="#" sidebar="menu-sub-button" size="sm">
                                              <svg className="lucide lucide-layout-dashboard size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                                                <rect width={7} height={9} x={3} y={3} rx={1}></rect>
                                                <rect width={7} height={5} x={14} y={3} rx={1}></rect>
                                                <rect width={7} height={9} x={14} y={12} rx={1}></rect>
                                                <rect width={7} height={5} x={3} y={16} rx={1}></rect>
                                              </svg>
                                              <span className="min-w-0 truncate">
                                                {"Overview"}
                                              </span>
                                            </SidebarMenuSubButton>
                                          </SidebarMenuSubItem>
                                          <SidebarMenuSubItem sidebar="menu-sub-item">
                                            <SidebarMenuSubButton className="[&>svg]:text-ring active:bg-input/60 aria-expanded:[&>svg]:text-current aria-expanded:text-foreground data-active:[&>svg]:text-current data-active:bg-input/60 data-active:gap-2 data-active:text-foreground font-medium gap-1.5 hover:[&>svg]:text-current hover:bg-input/60 hover:text-foreground text-muted-foreground translate-x-0 w-full" href="#" aria-current="page" sidebar="menu-sub-button" size="sm" data-active="">
                                              <svg className="lucide lucide-scan-search size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ScanSearchIcon" tabler="IconZoomScan" hugeicons="SearchVisualIcon" phosphor="SelectionIcon" remixicon="RiScan2Line" aria-hidden="true">
                                                <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                                                <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                                                <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                                                <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                                                <circle cx={12} cy={12} r={3}></circle>
                                                <path d="m16 16-1.9-1.9"></path>
                                              </svg>
                                              <span className="min-w-0 truncate">
                                                {"Suspicious Activity"}
                                              </span>
                                            </SidebarMenuSubButton>
                                          </SidebarMenuSubItem>
                                          <SidebarMenuSubItem sidebar="menu-sub-item">
                                            <SidebarMenuSubButton className="[&>svg]:text-ring active:bg-input/60 aria-expanded:[&>svg]:text-current aria-expanded:text-foreground data-active:[&>svg]:text-current data-active:bg-input/60 data-active:gap-2 data-active:text-foreground font-medium gap-1.5 hover:[&>svg]:text-current hover:bg-input/60 hover:text-foreground text-muted-foreground translate-x-0 w-full" href="#" sidebar="menu-sub-button" size="sm">
                                              <svg className="lucide lucide-shield-alert size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldAlertIcon" tabler="IconShieldExclamation" hugeicons="ShieldEnergyIcon" phosphor="ShieldWarningIcon" remixicon="RiShieldLine" aria-hidden="true">
                                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                                <path d="M12 8v4"></path>
                                                <path d="M12 16h.01"></path>
                                              </svg>
                                              <span className="min-w-0 truncate">
                                                {"Incidents"}
                                              </span>
                                            </SidebarMenuSubButton>
                                          </SidebarMenuSubItem>
                                          <SidebarMenuSubItem sidebar="menu-sub-item">
                                            <SidebarMenuSubButton className="[&>svg]:text-ring active:bg-input/60 aria-expanded:[&>svg]:text-current aria-expanded:text-foreground data-active:[&>svg]:text-current data-active:bg-input/60 data-active:gap-2 data-active:text-foreground font-medium gap-1.5 hover:[&>svg]:text-current hover:bg-input/60 hover:text-foreground text-muted-foreground translate-x-0 w-full" href="#" sidebar="menu-sub-button" size="sm">
                                              <svg className="lucide lucide-square-activity size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SquareActivityIcon" tabler="IconActivityHeartbeat" hugeicons="PulseRectangle01Icon" phosphor="HeartbeatIcon" remixicon="RiPulseLine" aria-hidden="true">
                                                <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                                                <path d="M17 12h-2l-2 5-2-10-2 5H7"></path>
                                              </svg>
                                              <span className="min-w-0 truncate">
                                                {"Anomalies"}
                                              </span>
                                            </SidebarMenuSubButton>
                                          </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                      </CollapsibleContent>
                                    </Collapsible>
                                    <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground inline-flex items-center justify-center left-5.5 outline-none select-none shrink-0 text-ring top-0.5 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reorder Threats" dragging="false">
                                      <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                        <circle cx={9} cy={12} r={1}></circle>
                                        <circle cx={9} cy={5} r={1}></circle>
                                        <circle cx={9} cy={19} r={1}></circle>
                                        <circle cx={15} cy={12} r={1}></circle>
                                        <circle cx={15} cy={5} r={1}></circle>
                                        <circle cx={15} cy={19} r={1}></circle>
                                      </svg>
                                    </SortableItemHandle>
                                    <a className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute active:translate-y-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-5 hover:bg-transparent hover:text-foreground inline-flex items-center justify-center outline-none px-0 right-0 select-none shrink-0 text-muted-foreground text-xs top-1.5 transition-all w-auto whitespace-nowrap" href="#" aria-label="Review Threats">
                                      {"Review"}
                                    </a>
                                  </SortableItem>
                                  <SortableItem className="data-[dragging=true]:bg-background data-[dragging=true]:pointer-events-none group/menu-sub-item relative rounded-md text-sidebar-foreground" sidebar="menu-sub-item" value="risks" dragging="false" tabIndex={-1} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                    <Collapsible data-closed="">
                                      <Collapsible>
                                      <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:bg-transparent data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground items-center min-w-0 outline-hidden overflow-hidden pr-0 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" tabIndex={0} aria-disabled="false" aria-expanded="false">
                                        <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                          <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                        <span className="shrink-0 size-4" aria-hidden="true"></span>
                                        <span className="min-w-0 truncate">
                                          {"Risks"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border-0 border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-secondary-foreground transition-shadow">
                                          {"37"}
                                        </Badge>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border-0 border-destructive/15 dark:bg-destructive/10 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 min-w-4 ml-auto outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-destructive transition-shadow">
                                          {"High"}
                                        </Badge>
                                      </CollapsibleTrigger>
                                      </Collapsible>
                                    </Collapsible>
                                    <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground inline-flex items-center justify-center left-5.5 outline-none select-none shrink-0 text-ring top-0.5 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reorder Risks" dragging="false">
                                      <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                        <circle cx={9} cy={12} r={1}></circle>
                                        <circle cx={9} cy={5} r={1}></circle>
                                        <circle cx={9} cy={19} r={1}></circle>
                                        <circle cx={15} cy={12} r={1}></circle>
                                        <circle cx={15} cy={5} r={1}></circle>
                                        <circle cx={15} cy={19} r={1}></circle>
                                      </svg>
                                    </SortableItemHandle>
                                  </SortableItem>
                                  <SortableItem className="data-[dragging=true]:bg-background data-[dragging=true]:pointer-events-none group/menu-sub-item relative rounded-md text-sidebar-foreground" sidebar="menu-sub-item" value="policies" dragging="false" tabIndex={-1} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                    <Collapsible data-closed="">
                                      <Collapsible>
                                      <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:bg-transparent data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground items-center min-w-0 outline-hidden overflow-hidden pr-6 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" tabIndex={0} aria-disabled="false" aria-expanded="false">
                                        <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                          <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                        <span className="shrink-0 size-4" aria-hidden="true"></span>
                                        <span className="min-w-0 truncate">
                                          {"Policies"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border-0 border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-secondary-foreground transition-shadow">
                                          {"8"}
                                        </Badge>
                                      </CollapsibleTrigger>
                                      </Collapsible>
                                    </Collapsible>
                                    <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground inline-flex items-center justify-center left-5.5 outline-none select-none shrink-0 text-ring top-0.5 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reorder Policies" dragging="false">
                                      <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                        <circle cx={9} cy={12} r={1}></circle>
                                        <circle cx={9} cy={5} r={1}></circle>
                                        <circle cx={9} cy={19} r={1}></circle>
                                        <circle cx={15} cy={12} r={1}></circle>
                                        <circle cx={15} cy={5} r={1}></circle>
                                        <circle cx={15} cy={19} r={1}></circle>
                                      </svg>
                                    </SortableItemHandle>
                                    <SidebarMenuAction className="[&>svg]:size-3.5 aspect-auto h-5 hover:bg-transparent hover:text-foreground right-0 text-ring w-3.5" type="button" sidebar="menu-action" aria-label="Add to Policies">
                                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                  </SortableItem>
                                  <SortableItem className="data-[dragging=true]:bg-background data-[dragging=true]:pointer-events-none group/menu-sub-item relative rounded-md text-sidebar-foreground" sidebar="menu-sub-item" value="quarantined" dragging="false" tabIndex={-1} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                    <Collapsible data-closed="">
                                      <Collapsible>
                                      <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:bg-transparent data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground items-center min-w-0 outline-hidden overflow-hidden pr-0 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" tabIndex={0} aria-disabled="false" aria-expanded="false">
                                        <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                          <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                        <span className="shrink-0 size-4" aria-hidden="true"></span>
                                        <span className="min-w-0 truncate">
                                          {"Quarantined"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border-0 border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-secondary-foreground transition-shadow">
                                          {"5"}
                                        </Badge>
                                      </CollapsibleTrigger>
                                      </Collapsible>
                                    </Collapsible>
                                    <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground inline-flex items-center justify-center left-5.5 outline-none select-none shrink-0 text-ring top-0.5 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reorder Quarantined" dragging="false">
                                      <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                        <circle cx={9} cy={12} r={1}></circle>
                                        <circle cx={9} cy={5} r={1}></circle>
                                        <circle cx={9} cy={19} r={1}></circle>
                                        <circle cx={15} cy={12} r={1}></circle>
                                        <circle cx={15} cy={5} r={1}></circle>
                                        <circle cx={15} cy={19} r={1}></circle>
                                      </svg>
                                    </SortableItemHandle>
                                  </SortableItem>
                                  <SortableItem className="data-[dragging=true]:bg-background data-[dragging=true]:pointer-events-none group/menu-sub-item relative rounded-md text-sidebar-foreground" sidebar="menu-sub-item" value="tasks" dragging="false" tabIndex={-1} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                    <Collapsible data-closed="">
                                      <Collapsible>
                                      <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:bg-transparent data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground items-center min-w-0 outline-hidden overflow-hidden pr-0 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" tabIndex={0} aria-disabled="false" aria-expanded="false">
                                        <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                          <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                        <span className="shrink-0 size-4" aria-hidden="true"></span>
                                        <span className="min-w-0 truncate">
                                          {"Tasks"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border-0 border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-secondary-foreground transition-shadow">
                                          {"7"}
                                        </Badge>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/20 border-0 border-success/15 dark:bg-success/20 dark:border-success/25 dark:text-success-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 min-w-4 ml-auto outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                          {"Active"}
                                        </Badge>
                                      </CollapsibleTrigger>
                                      </Collapsible>
                                    </Collapsible>
                                    <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground inline-flex items-center justify-center left-5.5 outline-none select-none shrink-0 text-ring top-0.5 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reorder Tasks" dragging="false">
                                      <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                        <circle cx={9} cy={12} r={1}></circle>
                                        <circle cx={9} cy={5} r={1}></circle>
                                        <circle cx={9} cy={19} r={1}></circle>
                                        <circle cx={15} cy={12} r={1}></circle>
                                        <circle cx={15} cy={5} r={1}></circle>
                                        <circle cx={15} cy={19} r={1}></circle>
                                      </svg>
                                    </SortableItemHandle>
                                  </SortableItem>
                                </Sortable>
                                <div id="DndDescribedBy-0" style={{display: "none"}}>
                                  {"To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel."}
                                </div>
                                <div id="DndLiveRegion-0" role="status" aria-live="assertive" aria-atomic="true" style={{position: "fixed", top: "0px", left: "0px", width: "1px", height: "1px", margin: "-1px", border: "0px", padding: "0px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(100%)", whiteSpace: "nowrap"}}></div>
                              </CollapsibleContent>
                            </Collapsible>
                          </SidebarMenuItem>
                          </SidebarProvider>
                          <SidebarProvider>
                          <SidebarMenuItem sidebar="menu-item">
                            <Collapsible data-closed="">
                              <Collapsible>
                              <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:text-ring [&_svg]:shrink-0 [&_svg]:size-4 active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default data-active:[&>svg]:text-current data-active:bg-transparent data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group/menu-button hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground items-center outline-hidden overflow-hidden peer/menu-button pr-12 px-0 text-muted-foreground text-xs w-full" type="button" sidebar="menu-button" size="default" tabIndex={0} aria-disabled="false" aria-expanded="false">
                                <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                <svg className="lucide lucide-shield-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldEllipsisIcon" tabler="IconShield" hugeicons="Shield01Icon" phosphor="ShieldIcon" remixicon="RiShieldLine" aria-hidden="true">
                                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                  <path d="M8 12h.01"></path>
                                  <path d="M12 12h.01"></path>
                                  <path d="M16 12h.01"></path>
                                </svg>
                                <span className="min-w-0 truncate">
                                  {"Identity & Access"}
                                </span>
                              </CollapsibleTrigger>
                              </Collapsible>
                              <Button className="absolute dark:bg-clip-border right-0 shadow-xs top-1" type="button" tabIndex={0} aria-label="Add to Identity & Access">
                                {"Add"}
                              </Button>
                            </Collapsible>
                          </SidebarMenuItem>
                          </SidebarProvider>
                          <SidebarProvider>
                          <SidebarMenuItem sidebar="menu-item">
                            <Collapsible data-closed="">
                              <Collapsible>
                              <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:text-ring [&_svg]:shrink-0 [&_svg]:size-4 active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default data-active:[&>svg]:text-current data-active:bg-transparent data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group/menu-button hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground items-center outline-hidden overflow-hidden peer/menu-button pr-0 px-0 text-muted-foreground text-xs w-full" type="button" sidebar="menu-button" size="default" tabIndex={0} aria-disabled="false" aria-expanded="false">
                                <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                <svg className="lucide lucide-braces size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BracesIcon" tabler="IconBraces" hugeicons="BracesIcon" phosphor="BracketsCurlyIcon" remixicon="RiBracesLine" aria-hidden="true">
                                  <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"></path>
                                  <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"></path>
                                </svg>
                                <span className="min-w-0 truncate">
                                  {"Application Security"}
                                </span>
                              </CollapsibleTrigger>
                              </Collapsible>
                            </Collapsible>
                          </SidebarMenuItem>
                          </SidebarProvider>
                          <SidebarProvider>
                          <SidebarMenuItem sidebar="menu-item">
                            <Collapsible data-closed="">
                              <Collapsible>
                              <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:text-ring [&_svg]:shrink-0 [&_svg]:size-4 active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default data-active:[&>svg]:text-current data-active:bg-transparent data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group/menu-button hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground items-center outline-hidden overflow-hidden peer/menu-button pr-16 px-0 text-muted-foreground text-xs w-full" type="button" sidebar="menu-button" size="default" tabIndex={0} aria-disabled="false" aria-expanded="false">
                                <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                <svg className="lucide lucide-database-zap size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseZapIcon" tabler="IconDatabase" hugeicons="DatabaseZapIcon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                                  <ellipse cx={12} cy={5} rx={9} ry={3}></ellipse>
                                  <path d="M3 5V19A9 3 0 0 0 15 21.84"></path>
                                  <path d="M21 5V8"></path>
                                  <path d="M21 12L18 17H22L19 22"></path>
                                  <path d="M3 12A9 3 0 0 0 14.59 14.87"></path>
                                </svg>
                                <span className="min-w-0 truncate">
                                  {"Data Protection"}
                                </span>
                              </CollapsibleTrigger>
                              </Collapsible>
                              <a className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute cn-button cn-button-size-xs cn-button-variant-outline dark:bg-clip-border disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none right-0 select-none shadow-xs shrink-0 top-1 transition-all whitespace-nowrap" href="#" aria-label="Review Data Protection">
                                {"Review"}
                              </a>
                            </Collapsible>
                          </SidebarMenuItem>
                          </SidebarProvider>
                        </SidebarMenu>
                        </SidebarProvider>
                      </SidebarGroupContent>
                      </SidebarProvider>
                    </SidebarGroup>
                    </SidebarProvider>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </aside>
          <main className="@container [--scroll-fade-reveal:--spacing(8)] flex-1 min-h-0 min-w-0 no-scrollbar overflow-y-auto p-3 scroll-fade-y">
            <div className="[--slot-line:#f3f1f3] dark:[--slot-line:var(--border)] flex flex-col gap-3" aria-hidden="true">
              <div className="@2xl:grid-cols-3 gap-3 grid items-start">
                <Card className="bg-card gap-0 py-0 ring-(--slot-line) ring-1 rounded-lg" size="default">
                  <Card className="after:absolute after:border-b after:border-border after:inset-0 after:pointer-events-none after:rounded-b-lg relative ring-0 rounded-none" size="default">
                    <CardContent className="flex flex-col gap-4">
                      <div className="flex gap-4 h-8 items-center justify-between">
                        <div className="flex flex-1 gap-2.5 items-center min-w-0">
                          <Skeleton className="bg-input/50 dark:bg-input/30 shrink-0 size-7"></Skeleton>
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-5 max-w-23.5 w-full"></Skeleton>
                        </div>
                        <div className="flex items-center justify-center size-8">
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-1"></Skeleton>
                        </div>
                      </div>
                      <div className="flex gap-1 h-6 items-center">
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-6 shrink-0 w-10.25"></Skeleton>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 max-w-26.25 w-full"></Skeleton>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="flex gap-4 items-center justify-between px-4 py-2.5">
                    <Skeleton className="bg-input/50 dark:bg-input/30 h-5 rounded-full shrink-0 w-24.5"></Skeleton>
                    <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-w-27.5 w-full"></Skeleton>
                  </div>
                </Card>
                <Card className="bg-card gap-0 py-0 ring-(--slot-line) ring-1 rounded-lg" size="default">
                  <Card className="after:absolute after:border-b after:border-border after:inset-0 after:pointer-events-none after:rounded-b-lg relative ring-0 rounded-none" size="default">
                    <CardContent className="flex flex-col gap-4">
                      <div className="flex gap-4 h-8 items-center justify-between">
                        <div className="flex flex-1 gap-2.5 items-center min-w-0">
                          <Skeleton className="bg-input/50 dark:bg-input/30 shrink-0 size-7"></Skeleton>
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-5 max-w-20 w-full"></Skeleton>
                        </div>
                        <div className="flex items-center justify-center size-8">
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-1"></Skeleton>
                        </div>
                      </div>
                      <div className="flex gap-1 h-6 items-center">
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-6 shrink-0 w-10.5"></Skeleton>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 max-w-21 w-full"></Skeleton>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="flex gap-4 items-center justify-between px-4 py-2.5">
                    <div className="flex flex-1 gap-2 items-center min-w-0">
                      <Skeleton className="bg-input/50 dark:bg-input/30 h-4.5 rounded-full shrink-0 w-8"></Skeleton>
                      <Skeleton className="bg-input/50 dark:bg-input/30 h-3 max-w-16.75 w-full"></Skeleton>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <Skeleton className="bg-input/50 dark:bg-input/30 size-6"></Skeleton>
                      <Skeleton className="bg-input/50 dark:bg-input/30 h-6 w-14.75"></Skeleton>
                    </div>
                  </div>
                </Card>
                <Card className="bg-card gap-0 py-0 ring-(--slot-line) ring-1 rounded-lg" size="default">
                  <Card className="after:absolute after:border-b after:border-border after:inset-0 after:pointer-events-none after:rounded-b-lg relative ring-0 rounded-none" size="default">
                    <CardContent className="flex flex-col gap-4">
                      <div className="flex gap-4 h-8 items-center justify-between">
                        <div className="flex flex-1 gap-2.5 items-center min-w-0">
                          <Skeleton className="bg-input/50 dark:bg-input/30 shrink-0 size-7"></Skeleton>
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-5 max-w-24.25 w-full"></Skeleton>
                        </div>
                        <div className="flex items-center justify-center size-8">
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-1"></Skeleton>
                        </div>
                      </div>
                      <div className="flex gap-1 h-6 items-center">
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-6 shrink-0 w-11.5"></Skeleton>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 max-w-31 w-full"></Skeleton>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="flex gap-4 items-center justify-between px-4 py-2.5">
                    <div className="flex flex-1 gap-2 items-center min-w-0">
                      <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-12.75"></Skeleton>
                      <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-w-25 w-full"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 dark:bg-input/30 h-6 shrink-0 w-14.5"></Skeleton>
                  </div>
                </Card>
              </div>
              <div className="@4xl:grid-cols-3 @xl:grid-cols-2 gap-3 grid">
                <Card className="bg-card ring-(--slot-line) ring-1 rounded-lg" size="default">
                  <CardContent className="flex flex-col gap-6 h-65">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                      <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="bg-card ring-(--slot-line) ring-1 rounded-lg" size="default">
                  <CardContent className="flex flex-col gap-6 h-65">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                      <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="bg-card ring-(--slot-line) ring-1 rounded-lg" size="default">
                  <CardContent className="flex flex-col gap-6 h-65">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                      <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="bg-card ring-(--slot-line) ring-1 rounded-lg" size="default">
                  <CardContent className="flex flex-col gap-6 h-65">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                      <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="bg-card ring-(--slot-line) ring-1 rounded-lg" size="default">
                  <CardContent className="flex flex-col gap-6 h-65">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                      <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="bg-card ring-(--slot-line) ring-1 rounded-lg" size="default">
                  <CardContent className="flex flex-col gap-6 h-65">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                      <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="bg-card ring-(--slot-line) ring-1 rounded-lg" size="default">
                  <CardContent className="flex flex-col gap-6 h-65">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                      <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="bg-card ring-(--slot-line) ring-1 rounded-lg" size="default">
                  <CardContent className="flex flex-col gap-6 h-65">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                      <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="bg-card ring-(--slot-line) ring-1 rounded-lg" size="default">
                  <CardContent className="flex flex-col gap-6 h-65">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                      <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1"></Skeleton>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
          <aside className="data-[state=open]:w-80 duration-200 ease-linear hidden md:flex motion-reduce:transition-none overflow-hidden shrink-0 transition-[width] w-0 xl:data-[state=open]:w-104" aria-label="AI Assistant" data-state="closed" inert="">
            <div className="border-l flex flex-col shrink-0 w-80 xl:w-104"></div>
          </aside>
        </div>
      </div>
      <button className="-translate-y-1/2 cursor-pointer duration-200 ease-linear fixed flex focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-ring focus-visible:rounded-sm group/rail h-12 items-center outline-none pl-2 top-1/2 transition-[left] w-7 z-30" type="button" aria-label="Collapse sidebar" style={{left: "var(--sidebar-width)"}}>
        <span className="flex flex-col items-center">
          <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:bg-foreground/60 group-hover/rail:rotate-40 h-2 origin-bottom rounded-t-full transition-all w-0.5" aria-hidden="true"></span>
          <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:-rotate-40 group-hover/rail:bg-foreground/60 h-2 origin-top rounded-b-full transition-all w-0.5" aria-hidden="true"></span>
        </span>
        <span className="-ml-2 -translate-x-0.5 absolute bg-foreground border border-border duration-200 ease-out font-medium group-hover/rail:opacity-100 group-hover/rail:translate-x-0 left-full opacity-0 pointer-events-none px-2 py-0.5 rounded-md shadow-black/5 shadow-xs text-[11px] text-background transition-all whitespace-nowrap">
          {"Collapse"}
        </span>
      </button>
    </div>
    </SidebarProvider>
  )
}
