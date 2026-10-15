import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
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
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
} from "@/registry/bases/base/ui/sidebar"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { SidebarMenuButton } from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <SidebarProvider>
    <div className="[--sidebar:var(--color-background)] bg-background flex group/sidebar-wrapper h-svh has-data-[variant=inset]:bg-sidebar min-h-0 overflow-hidden text-foreground w-full" style={{"--sidebar-width": "27.25rem", "--sidebar-width-icon": "3.25rem"}}>
      <SidebarProvider>
      <Sidebar data-state="expanded" collapsible="" variant="sidebar" data-side="left">
        <div className="bg-transparent cn-sidebar-gap group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative w-(--sidebar-width)"></div>
        <SidebarProvider>
        <div className="*:data-[sidebar=sidebar]:flex-row border-r-0! data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l h-svh hidden inset-y-0 md:flex overflow-hidden transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <SidebarProvider>
          <div className="cn-sidebar-inner flex flex-col size-full" data-sidebar="sidebar">
            <div className="flex min-h-full w-full">
              <SidebarProvider>
              <Sidebar className="shrink-0 w-(--sidebar-width-icon)">
                <SidebarHeader className="items-center pb-1 pt-3.5 px-3" sidebar="header">
                  <a className="flex items-center shrink-0 text-foreground" href="#" aria-label="NeUI home">
                    <svg className="h-7 w-auto" viewBox="0 0 24.084 24" fill="none" aria-hidden="true">
                      <path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M16.0554 0.92308H8.02772C4.1057 0.92308 0.926278 4.09152 0.926278 8V16C0.926278 19.9085 4.1057 23.0769 8.02772 23.0769H16.0554C19.9774 23.0769 23.1569 19.9085 23.1569 16V8C23.1569 4.09152 19.9774 0.92308 16.0554 0.92308ZM8.02772 0C3.59413 0 0 3.58172 0 8V16C0 20.4183 3.59413 24 8.02772 24H16.0554C20.489 24 24.0832 20.4183 24.0832 16V8C24.0832 3.58172 20.489 0 16.0554 0H8.02772Z" fill="currentColor"></path>
                      <path d="M16.8909 8.25504C17.5158 8.25504 18.0223 7.75023 18.0223 7.12752C18.0223 6.50481 17.5158 6 16.8909 6C16.266 6 15.7595 6.50481 15.7595 7.12752C15.7595 7.75023 16.266 8.25504 16.8909 8.25504Z" fill="currentColor"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.06097 13.651V7.12751C6.06097 6.50481 6.56752 6 7.19237 6C7.81726 6 8.32381 6.50481 8.32381 7.12751V13.651C8.32381 14.8074 9.26453 15.745 10.425 15.745H13.6577C14.8181 15.745 15.7589 14.8074 15.7589 13.651V10.4617C15.7589 9.83905 16.2654 9.33425 16.8903 9.33425C17.5151 9.33425 18.0217 9.83905 18.0217 10.4617V13.651C18.0217 16.0529 16.0679 18 13.6577 18H10.425C8.01481 18 6.06097 16.0529 6.06097 13.651Z" fill="currentColor"></path>
                    </svg>
                  </a>
                </SidebarHeader>
                <SidebarProvider>
                <SidebarContent className="[--scroll-fade-reveal:--spacing(8)] gap-2 group-data-[collapsible=icon]:overflow-auto mt-2.5 scroll-fade-y scroll-py-10" sidebar="content">
                  <SidebarProvider>
                  <SidebarGroup className="p-0" sidebar="group">
                    <SidebarProvider>
                    <SidebarGroupContent sidebar="group-content">
                      <SidebarProvider>
                      <SidebarMenu className="gap-2 items-center" sidebar="menu">
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="data-active:bg-primary data-active:border data-active:border-input/30 data-active:hover:bg-primary data-active:hover:text-primary-foreground data-active:text-primary-foreground hover:text-foreground justify-center! size-7! text-ring" type="button" id="base-ui-_r_1_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Overview">
                            <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                              <rect width={7} height={9} x={3} y={3} rx={1}></rect>
                              <rect width={7} height={5} x={14} y={3} rx={1}></rect>
                              <rect width={7} height={9} x={14} y={12} rx={1}></rect>
                              <rect width={7} height={5} x={3} y={16} rx={1}></rect>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="data-active:bg-primary data-active:border data-active:border-input/30 data-active:hover:bg-primary data-active:hover:text-primary-foreground data-active:text-primary-foreground hover:text-foreground justify-center! size-7! text-ring" type="button" id="base-ui-_r_3_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Routes">
                            <svg className="lucide lucide-map" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MapIcon" tabler="IconMap" hugeicons="Location01Icon" phosphor="MapTrifoldIcon" remixicon="RiMapLine" aria-hidden="true">
                              <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
                              <path d="M15 5.764v15"></path>
                              <path d="M9 3.236v15"></path>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="data-active:bg-primary data-active:border data-active:border-input/30 data-active:hover:bg-primary data-active:hover:text-primary-foreground data-active:text-primary-foreground hover:text-foreground justify-center! size-7! text-ring" type="button" id="base-ui-_r_5_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="" aria-label="Robots">
                            <svg className="lucide lucide-bot" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                              <path d="M12 8V4H8"></path>
                              <rect width={16} height={12} x={4} y={8} rx={2}></rect>
                              <path d="M2 14h2"></path>
                              <path d="M20 14h2"></path>
                              <path d="M15 13v2"></path>
                              <path d="M9 13v2"></path>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="data-active:bg-primary data-active:border data-active:border-input/30 data-active:hover:bg-primary data-active:hover:text-primary-foreground data-active:text-primary-foreground hover:text-foreground justify-center! size-7! text-ring" type="button" id="base-ui-_r_7_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Cargo">
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
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="data-active:bg-primary data-active:border data-active:border-input/30 data-active:hover:bg-primary data-active:hover:text-primary-foreground data-active:text-primary-foreground hover:text-foreground justify-center! size-7! text-ring" type="button" id="base-ui-_r_9_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Zones">
                            <svg className="lucide lucide-map-pinned" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MapPinnedIcon" tabler="IconMapPin" hugeicons="MapPinIcon" phosphor="MapPinAreaIcon" remixicon="RiRoadMapLine" aria-hidden="true">
                              <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"></path>
                              <circle cx={12} cy={8} r={2}></circle>
                              <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"></path>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="data-active:bg-primary data-active:border data-active:border-input/30 data-active:hover:bg-primary data-active:hover:text-primary-foreground data-active:text-primary-foreground hover:text-foreground justify-center! size-7! text-ring" type="button" id="base-ui-_r_b_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Missions">
                            <svg className="lucide lucide-clipboard-list" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClipboardListIcon" tabler="IconClipboardList" hugeicons="ClipboardIcon" phosphor="ClipboardTextIcon" remixicon="RiFileListLine" aria-hidden="true">
                              <rect width={8} height={4} x={8} y={2} rx={1} ry={1}></rect>
                              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                              <path d="M12 11h4"></path>
                              <path d="M12 16h4"></path>
                              <path d="M8 11h.01"></path>
                              <path d="M8 16h.01"></path>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                      </SidebarMenu>
                      </SidebarProvider>
                    </SidebarGroupContent>
                    </SidebarProvider>
                  </SidebarGroup>
                  </SidebarProvider>
                  <SidebarSeparator className="-mb-px bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px mx-auto shrink-0 w-5!" data-orientation="horizontal" role="separator" aria-orientation="horizontal" sidebar="separator"></SidebarSeparator>
                  <SidebarProvider>
                  <SidebarGroup className="p-0" sidebar="group">
                    <SidebarProvider>
                    <SidebarGroupContent sidebar="group-content">
                      <SidebarProvider>
                      <SidebarMenu className="gap-2 items-center" sidebar="menu">
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="data-active:bg-primary data-active:border data-active:border-input/30 data-active:hover:bg-primary data-active:hover:text-primary-foreground data-active:text-primary-foreground hover:text-foreground justify-center! size-7! text-ring" type="button" id="base-ui-_r_d_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Telemetry">
                            <svg className="lucide lucide-square-activity" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SquareActivityIcon" tabler="IconActivityHeartbeat" hugeicons="PulseRectangle01Icon" phosphor="HeartbeatIcon" remixicon="RiPulseLine" aria-hidden="true">
                              <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                              <path d="M17 12h-2l-2 5-2-10-2 5H7"></path>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="data-active:bg-primary data-active:border data-active:border-input/30 data-active:hover:bg-primary data-active:hover:text-primary-foreground data-active:text-primary-foreground hover:text-foreground justify-center! size-7! text-ring" type="button" id="base-ui-_r_f_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Access Keys">
                            <svg className="lucide lucide-key-round" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                              <circle cx={16.5} cy={7.5} r=".5" fill="currentColor"></circle>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="data-active:bg-primary data-active:border data-active:border-input/30 data-active:hover:bg-primary data-active:hover:text-primary-foreground data-active:text-primary-foreground hover:text-foreground justify-center! size-7! text-ring" type="button" id="base-ui-_r_h_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Compliance">
                            <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                              <path d="m9 12 2 2 4-4"></path>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="data-active:bg-primary data-active:border data-active:border-input/30 data-active:hover:bg-primary data-active:hover:text-primary-foreground data-active:text-primary-foreground hover:text-foreground justify-center! size-7! text-ring" type="button" id="base-ui-_r_j_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Calibration">
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
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                      </SidebarMenu>
                      </SidebarProvider>
                    </SidebarGroupContent>
                    </SidebarProvider>
                  </SidebarGroup>
                  </SidebarProvider>
                </SidebarContent>
                </SidebarProvider>
                <SidebarFooter className="gap-2 items-center pb-3" sidebar="footer">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default disabled:opacity-50 disabled:pointer-events-none flex group/menu-button hover:text-foreground items-center justify-center! outline-hidden overflow-hidden peer/menu-button size-7! text-ring w-full" type="button" sidebar="menu-button" size="default" aria-label="Help and support" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_n_" aria-expanded="false">
                    <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                      <circle cx={12} cy={12} r={10}></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default disabled:opacity-50 disabled:pointer-events-none flex group/menu-button hover:text-foreground items-center justify-center! outline-hidden overflow-hidden peer/menu-button size-7! text-ring w-full" type="button" sidebar="menu-button" size="default" aria-label="Workspace settings" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_s_" aria-expanded="false">
                    <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                      <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                      <circle cx={12} cy={12} r={3}></circle>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center mx-auto outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open profile for Sienna Wells" aria-haspopup="menu" id="base-ui-_r_11_" aria-expanded="false">
                    <Avatar className="rounded-md size-7" size="sm">
                      <AvatarImage className="rounded-md" alt="Sienna Wells" src="/assets/avatar-shadcn.jpg"></AvatarImage>
                    </Avatar>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </SidebarFooter>
              </Sidebar>
              </SidebarProvider>
              <SidebarProvider>
              <Sidebar className="flex-1 min-w-0">
                <div className="flex flex-col gap-3 h-full min-h-0 pe-px py-3">
                  <h2 className="flex font-medium h-8 items-center leading-6 px-4 text-base">
                    {"Mission Control Center"}
                  </h2>
                  <Tabs className="flex-1 flex-col gap-3 min-h-0" data-orientation="horizontal" activationDirection="none">
                    <div className="max-md:-my-1 max-md:[--scroll-fade-reveal:--spacing(8)] max-md:no-scrollbar max-md:overflow-x-auto max-md:overflow-y-hidden max-md:py-1 max-md:scroll-px-8 max-md:supports-[animation-timeline:scroll()]:scroll-fade-x shrink-0">
                      <TabsList className="bg-input/30 h-7 inset-ring inset-ring-ring/20 justify-start max-md:min-w-full max-md:w-max p-0 w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                        <TabsTrigger className="data-active:border-ring/50 data-active:shadow-xs flex-none h-full max-[348px]:px-1.5 px-2.25 text-muted-foreground text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_13_">
                          {"Missions"}
                        </TabsTrigger>
                        <TabsTrigger className="data-active:border-ring/50 data-active:shadow-xs flex-none h-full max-[348px]:px-1.5 px-2.25 text-muted-foreground text-xs" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_14_" compositeItemActive="" aria-controls="base-ui-_r_18_">
                          {"Robots"}
                        </TabsTrigger>
                        <TabsTrigger className="data-active:border-ring/50 data-active:shadow-xs flex-none h-full max-[348px]:px-1.5 px-2.25 text-muted-foreground text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_15_">
                          {"Stations"}
                        </TabsTrigger>
                        <TabsTrigger className="data-active:border-ring/50 data-active:shadow-xs flex-none h-full max-[348px]:px-1.5 px-2.25 text-muted-foreground text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_16_">
                          {"Alerts"}
                        </TabsTrigger>
                      </TabsList>
                    </div>
                    <TabsContent className="flex flex-col min-h-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_18_" role="tabpanel" tabIndex={0} index="0" aria-labelledby="base-ui-_r_14_">
                      <Frame className="[--frame-panel-footer-py-adjust:2px] [--frame-panel-header-py-adjust:2px] [--frame-panel-px-adjust:-1px] [--frame-panel-py-adjust:-1px] [--frame-radius:var(--radius-lg)] flex-1 min-h-0 shadow-xs">
                        <header className="-mt-px -mx-px flex flex-row gap-2.5 items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                          <div className="flex-1 font-medium min-w-0 text-sm truncate">
                            {"Robot Management"}
                          </div>
                          <Button className="max-md:aspect-square max-md:justify-center max-md:px-0 shadow-xs text-xs" href="#" role="button" tabIndex={0}>
                            <svg className="lucide lucide-bot size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" data-icon="inline-start" aria-hidden="true">
                              <path d="M12 8V4H8"></path>
                              <rect width={16} height={12} x={4} y={8} rx={2}></rect>
                              <path d="M2 14h2"></path>
                              <path d="M20 14h2"></path>
                              <path d="M15 13v2"></path>
                              <path d="M9 13v2"></path>
                            </svg>
                            <span className="max-md:sr-only">
                              {"Onboarding"}
                            </span>
                          </Button>
                          <DropdownMenu>
                          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shadow-xs shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Sort assignments" aria-haspopup="menu" id="base-ui-_r_1c_" aria-expanded="false">
                            <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                              <path d="M14 17H5"></path>
                              <path d="M19 7h-9"></path>
                              <circle cx={17} cy={17} r={3}></circle>
                              <circle cx={7} cy={7} r={3}></circle>
                            </svg>
                          </DropdownMenuTrigger>
                          </DropdownMenu>
                        </header>
                        <FramePanel className="flex flex-col min-h-0 p-0 shadow-none">
                          <div className="[--scroll-fade-reveal:--spacing(8)] flex flex-1 flex-col gap-4 min-h-0 no-scrollbar overflow-y-auto px-(--frame-panel-px) py-(--frame-panel-py) scroll-fade-y scroll-py-10">
                            <div className="flex flex-col gap-4">
                              <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between w-full" role="img" aria-label="58 missions: 38 scheduled, 5 active, 12 paused, 3 failed">
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-blue-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-emerald-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-emerald-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-emerald-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-emerald-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-emerald-500 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-orange-300 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-orange-300 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-orange-300 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-orange-300 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-orange-300 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-orange-300 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-orange-300 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-orange-300 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-orange-300 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-orange-300 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-orange-300 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-orange-300 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-red-600/50 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-red-600/50 h-3.5 rounded-full w-0.75"></span>
                                  <span className="bg-red-600/50 h-3.5 rounded-full w-0.75"></span>
                                </div>
                                <div className="flex flex-wrap gap-x-3 gap-y-1 items-center max-md:grid max-md:grid-cols-2">
                                  <span className="flex gap-1 items-center">
                                    <span className="bg-blue-500 h-2 rounded-full w-0.75" aria-hidden="true"></span>
                                    <span className="font-medium text-muted-foreground text-xs">
                                      {"38 Scheduled"}
                                    </span>
                                  </span>
                                  <span className="flex gap-1 items-center">
                                    <span className="bg-emerald-500 h-2 rounded-full w-0.75" aria-hidden="true"></span>
                                    <span className="font-medium text-muted-foreground text-xs">
                                      {"5 Active"}
                                    </span>
                                  </span>
                                  <span className="flex gap-1 items-center">
                                    <span className="bg-orange-300 h-2 rounded-full w-0.75" aria-hidden="true"></span>
                                    <span className="font-medium text-muted-foreground text-xs">
                                      {"12 Paused"}
                                    </span>
                                  </span>
                                  <span className="flex gap-1 items-center">
                                    <span className="bg-red-600/50 h-2 rounded-full w-0.75" aria-hidden="true"></span>
                                    <span className="font-medium text-muted-foreground text-xs">
                                      {"3 Failed"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="bg-input/20 border border-input/50 flex gap-2 items-center max-md:grid max-md:grid-cols-2 p-1.5 rounded-md w-full">
                                <div className="flex flex-1 flex-col min-w-0 text-center">
                                  <span className="font-medium tabular-nums text-xs">
                                    {"$12.8k"}
                                  </span>
                                  <span className="leading-3.5 text-[10px] text-muted-foreground">
                                    {"Order Value"}
                                  </span>
                                </div>
                                <Separator className="h-5 max-md:hidden my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                                <div className="flex flex-1 flex-col min-w-0 text-center">
                                  <span className="font-medium tabular-nums text-xs">
                                    {"32 min"}
                                  </span>
                                  <span className="leading-3.5 text-[10px] text-muted-foreground">
                                    {"Avg. Run"}
                                  </span>
                                </div>
                                <Separator className="h-5 max-md:hidden my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                                <div className="flex flex-1 flex-col min-w-0 text-center">
                                  <span className="font-medium tabular-nums text-xs">
                                    {"68%"}
                                  </span>
                                  <span className="leading-3.5 text-[10px] text-muted-foreground">
                                    {"On Time"}
                                  </span>
                                </div>
                                <Separator className="h-5 max-md:hidden my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                                <div className="flex flex-1 flex-col min-w-0 text-center">
                                  <span className="font-medium tabular-nums text-xs">
                                    {"28"}
                                  </span>
                                  <span className="leading-3.5 text-[10px] text-muted-foreground">
                                    {"Zones"}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2 items-center">
                              <div className="flex flex-1 gap-1.5 items-center min-w-0">
                                <span className="font-medium text-sm truncate">
                                  {"Scheduled"}
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none pr-1.5 px-1 py-0.25 relative rounded-full text-[0.625rem] transition-shadow">
                                  <span>
                                    {"38"}
                                    <span className="max-md:hidden">
                                      {"Missions"}
                                    </span>
                                  </span>
                                </Badge>
                              </div>
                              <Button className="max-md:aspect-square max-md:justify-center max-md:px-0 shadow-xs" href="#" aria-label="View all scheduled" role="button" tabIndex={0}>
                                <svg className="lucide lucide-eye md:hidden size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                  <circle cx={12} cy={12} r={3}></circle>
                                </svg>
                                <span className="max-md:hidden">
                                  {"View All"}
                                </span>
                              </Button>
                              <Button className="aria-expanded:bg-background dark:aria-expanded:bg-input/30 shadow-xs" type="button" tabIndex={0} aria-expanded="false" aria-label="Expand scheduled">
                                <svg className="lucide lucide-chevron-down size-3 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                  <path d="m6 9 6 6 6-6"></path>
                                </svg>
                              </Button>
                            </div>
                            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                            <div className="flex gap-2 items-center">
                              <div className="flex flex-1 gap-1.5 items-center min-w-0">
                                <span className="font-medium text-sm truncate">
                                  {"Active Assignments"}
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none pr-1.5 px-1 py-0.25 relative rounded-full text-[0.625rem] transition-shadow">
                                  <span>
                                    {"5"}
                                    <span className="max-md:hidden">
                                      {"Missions"}
                                    </span>
                                  </span>
                                </Badge>
                              </div>
                              <Button className="max-md:aspect-square max-md:justify-center max-md:px-0 shadow-xs" href="#" aria-label="View all active assignments" role="button" tabIndex={0}>
                                <svg className="lucide lucide-eye md:hidden size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                  <circle cx={12} cy={12} r={3}></circle>
                                </svg>
                                <span className="max-md:hidden">
                                  {"View All"}
                                </span>
                              </Button>
                              <Button className="aria-expanded:bg-background dark:aria-expanded:bg-input/30 shadow-xs" type="button" tabIndex={0} aria-expanded="true" aria-label="Collapse active assignments">
                                <svg className="lucide lucide-chevron-down rotate-180 size-3 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                  <path d="m6 9 6 6 6-6"></path>
                                </svg>
                              </Button>
                            </div>
                            <div className="flex flex-col gap-2.5">
                              <div className="flex flex-col gap-2.5">
                                <div className="flex flex-col gap-2.5">
                                  <div className="flex gap-2 items-center">
                                    <div className="flex flex-1 gap-1.5 items-center min-w-0">
                                      <Avatar className="shadow-2xs size-6" size="sm">
                                        <AvatarImage alt="" src="/assets/robot-meow.png"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium text-xs truncate">
                                        {"Meow S025"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/20 border-0 border-transparent dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 min-w-4 outline-none px-1 py-0.25 relative rounded-full text-[10px] text-success-foreground transition-shadow">
                                        {"On time"}
                                      </Badge>
                                    </div>
                                    <Button className="shadow-xs" href="#" aria-label="Open Meow S025 mission" role="button" tabIndex={0}>
                                      <svg className="lucide lucide-arrow-up-right size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                                        <path d="M7 7h10v10"></path>
                                        <path d="M7 17 17 7"></path>
                                      </svg>
                                    </Button>
                                    <Button className="aria-expanded:bg-background dark:aria-expanded:bg-input/30 shadow-xs" type="button" tabIndex={0} aria-expanded="false" aria-label="Expand Meow S025 detail">
                                      <svg className="lucide lucide-chevron-down size-3 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                        <path d="m6 9 6 6 6-6"></path>
                                      </svg>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-2.5">
                                <div className="border-dashed border-ring/30 border-t" aria-hidden="true"></div>
                                <div className="flex flex-col gap-3">
                                  <div className="flex gap-2 items-center">
                                    <div className="flex flex-1 gap-1.5 items-center min-w-0">
                                      <Avatar className="shadow-2xs size-6" size="sm">
                                        <AvatarImage alt="" src="/assets/robot-dock.png"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium text-xs truncate">
                                        {"Dock C112"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border-0 border-transparent dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.5 h-4 min-w-4 outline-none pl-0.75 px-1 py-0.25 relative rounded-full text-[10px] text-warning-foreground transition-shadow">
                                        <svg className="lucide lucide-clock size-2.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                          <circle cx={12} cy={12} r={10}></circle>
                                          <path d="M12 6v6l4 2"></path>
                                        </svg>
                                        {"Running late"}
                                      </Badge>
                                    </div>
                                    <Button className="shadow-xs" href="#" aria-label="Open Dock C112 mission" role="button" tabIndex={0}>
                                      <svg className="lucide lucide-arrow-up-right size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                                        <path d="M7 7h10v10"></path>
                                        <path d="M7 17 17 7"></path>
                                      </svg>
                                    </Button>
                                    <Button className="aria-expanded:bg-background dark:aria-expanded:bg-input/30 shadow-xs" type="button" tabIndex={0} aria-expanded="true" aria-label="Collapse Dock C112 detail">
                                      <svg className="lucide lucide-chevron-down rotate-180 size-3 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                        <path d="m6 9 6 6 6-6"></path>
                                      </svg>
                                    </Button>
                                  </div>
                                  <div className="flex flex-col gap-3">
                                    <div className="flex font-medium gap-2 items-center max-md:flex-wrap max-md:gap-x-1.5 max-md:gap-y-1 text-xs">
                                      <span className="flex gap-1 items-center">
                                        <svg className="lucide lucide-clock size-3.5 text-ring" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                          <circle cx={12} cy={12} r={10}></circle>
                                          <path d="M12 6v6l4 2"></path>
                                        </svg>
                                        <span className="tabular-nums">
                                          {"24m"}
                                        </span>
                                        <Separator className="h-3 ms-1 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                                      </span>
                                      <span className="flex gap-1 items-center">
                                        <svg className="lucide lucide-route size-3.5 text-ring" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                          <circle cx={6} cy={19} r={3}></circle>
                                          <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                          <circle cx={18} cy={5} r={3}></circle>
                                        </svg>
                                        <span className="tabular-nums">
                                          {"3.8km"}
                                        </span>
                                        <Separator className="h-3 ms-1 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                                      </span>
                                      <span className="flex gap-1 items-center">
                                        <svg className="lucide lucide-smartphone size-3.5 text-ring" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SmartphoneIcon" tabler="IconDeviceMobile" hugeicons="SmartPhone01Icon" phosphor="DeviceMobileIcon" remixicon="RiSmartphoneLine" aria-hidden="true">
                                          <rect width={14} height={20} x={5} y={2} rx={2} ry={2}></rect>
                                          <path d="M12 18h.01"></path>
                                        </svg>
                                        <span className="tabular-nums">
                                          {"76%"}
                                        </span>
                                        <Separator className="h-3 ms-1 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                                      </span>
                                      <span className="flex gap-1 items-center min-w-0">
                                        <svg className="lucide lucide-settings-2 lucide-settings2 shrink-0 size-3.5 text-ring" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                                          <path d="M14 17H5"></path>
                                          <path d="M19 7h-9"></path>
                                          <circle cx={17} cy={17} r={3}></circle>
                                          <circle cx={7} cy={7} r={3}></circle>
                                        </svg>
                                        <span className="max-md:sr-only truncate">
                                          {"Checking"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.75 h-4.5 leading-none min-w-4.5 outline-none pr-1.5 px-1 py-0.25 relative rounded-full text-[0.625rem] transition-shadow">
                                          <img className="object-cover rounded-full size-3" alt="" width={12} height={12} loading="lazy" src="/assets/operator-mark.png" />
                                          {"Mark"}
                                        </Badge>
                                      </span>
                                    </div>
                                    <ul className="flex flex-col pl-0.5">
                                      <li className="flex gap-2.5 items-center">
                                        <span className="bg-accent flex items-center justify-center min-h-7 relative self-stretch w-0.5" aria-hidden="true">
                                          <span className="bg-ring/50 rounded-full shrink-0 size-1.5"></span>
                                        </span>
                                        <span className="flex flex-1 gap-1 items-center min-w-0">
                                          <span className="shrink-0 text-muted-foreground text-xs w-8">
                                            {"15:05"}
                                          </span>
                                          <span className="bg-ring/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="flex gap-1 items-center min-w-0 text-foreground text-xs">
                                            <span className="max-md:whitespace-normal truncate">
                                              {"Cargo scanned"}
                                            </span>
                                            <span className="flex shrink-0">
                                              <svg className="lucide lucide-scan-search size-3.5 text-ring" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ScanSearchIcon" tabler="IconZoomScan" hugeicons="SearchVisualIcon" phosphor="SelectionIcon" remixicon="RiScan2Line" aria-hidden="true">
                                                <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                                                <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                                                <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                                                <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                                                <circle cx={12} cy={12} r={3}></circle>
                                                <path d="m16 16-1.9-1.9"></path>
                                              </svg>
                                            </span>
                                          </span>
                                        </span>
                                        <span className="flex items-center shrink-0">
                                          <span className="leading-none text-[10px] text-muted-foreground">
                                            {"18/18 units"}
                                          </span>
                                        </span>
                                      </li>
                                      <li className="flex gap-2.5 items-center">
                                        <span className="bg-accent flex items-center justify-center min-h-7 relative self-stretch w-0.5" aria-hidden="true">
                                          <span className="bg-ring/50 rounded-full shrink-0 size-1.5"></span>
                                        </span>
                                        <span className="flex flex-1 gap-1 items-center min-w-0">
                                          <span className="shrink-0 text-muted-foreground text-xs w-8">
                                            {"15:13"}
                                          </span>
                                          <span className="bg-ring/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="flex gap-1 items-center min-w-0 text-foreground text-xs">
                                            <span className="max-md:whitespace-normal truncate">
                                              {"Delay detected"}
                                            </span>
                                            <span className="flex shrink-0">
                                              <svg className="lucide lucide-clock size-3.5 text-ring" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                                <circle cx={12} cy={12} r={10}></circle>
                                                <path d="M12 6v6l4 2"></path>
                                              </svg>
                                            </span>
                                          </span>
                                        </span>
                                        <span className="flex items-center shrink-0">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border-0 border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 min-w-4 outline-none pl-0.75 px-1 py-0.25 relative rounded-full text-[10px] text-warning-foreground transition-shadow">
                                            {"+6 min"}
                                          </Badge>
                                        </span>
                                      </li>
                                      <li className="flex gap-2.5 items-center">
                                        <span className="bg-accent flex items-center justify-center min-h-7 relative self-stretch w-0.5" aria-hidden="true">
                                          <span className="bg-ring/50 rounded-full shrink-0 size-1.5"></span>
                                        </span>
                                        <span className="flex flex-1 gap-1 items-center min-w-0">
                                          <span className="shrink-0 text-muted-foreground text-xs w-8">
                                            {"15:15"}
                                          </span>
                                          <span className="bg-ring/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="flex gap-1 items-center min-w-0 text-foreground text-xs">
                                            <span className="max-md:whitespace-normal truncate">
                                              {"Checkpoint reached"}
                                            </span>
                                            <span className="flex shrink-0">
                                              <svg className="lucide lucide-map-pinned size-3.5 text-ring" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MapPinnedIcon" tabler="IconMapPin" hugeicons="MapPinIcon" phosphor="MapPinAreaIcon" remixicon="RiRoadMapLine" aria-hidden="true">
                                                <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"></path>
                                                <circle cx={12} cy={8} r={2}></circle>
                                                <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"></path>
                                              </svg>
                                            </span>
                                          </span>
                                        </span>
                                        <span className="flex items-center shrink-0">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.75 h-4.5 leading-none min-w-4.5 outline-none pr-1.5 px-1 py-0.25 relative rounded-full text-[0.625rem] transition-shadow">
                                            <svg className="lucide lucide-grid-2x2 lucide-grid2x2 size-2.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Grid2x2Icon" tabler="IconBorderAll" hugeicons="Grid2X2Icon" phosphor="GridFourIcon" remixicon="RiLayoutGrid2Line" aria-hidden="true">
                                              <path d="M12 3v18"></path>
                                              <path d="M3 12h18"></path>
                                              <rect x={3} y={3} width={18} height={18} rx={2}></rect>
                                            </svg>
                                            <span className="max-md:hidden">
                                              {"Zone"}
                                            </span>
                                            {"B"}
                                          </Badge>
                                        </span>
                                      </li>
                                      <li className="flex gap-2.5 items-center">
                                        <span className="bg-accent flex items-center justify-center min-h-7 relative self-stretch w-0.5" aria-hidden="true">
                                          <span className="bg-ring/50 rounded-full shrink-0 size-1.5"></span>
                                        </span>
                                        <span className="flex flex-1 gap-1 items-center min-w-0">
                                          <span className="shrink-0 text-muted-foreground text-xs w-8">
                                            {"15:17"}
                                          </span>
                                          <span className="bg-ring/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="flex gap-1 items-center min-w-0 text-foreground text-xs">
                                            <span className="max-md:whitespace-normal truncate">
                                              {"Route changed by"}
                                            </span>
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.75 h-4.5 leading-none min-w-4.5 outline-none pr-1.5 px-1 py-0.25 relative rounded-full text-[0.625rem] transition-shadow">
                                              <img className="object-cover rounded-full size-3" alt="" width={12} height={12} loading="lazy" src="/assets/operator-chris.png" />
                                              {"Chris"}
                                            </Badge>
                                          </span>
                                        </span>
                                      </li>
                                      <li className="flex gap-2.5 items-center">
                                        <span className="bg-accent flex items-center justify-center min-h-7 relative self-stretch w-0.5" aria-hidden="true">
                                          <span className="bg-ring/50 rounded-full shrink-0 size-1.5"></span>
                                        </span>
                                        <span className="flex flex-1 gap-1 items-center min-w-0">
                                          <span className="shrink-0 text-muted-foreground text-xs w-8">
                                            {"15:18"}
                                          </span>
                                          <span className="bg-ring/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="flex gap-1 items-center min-w-0 text-foreground text-xs">
                                            <span className="max-md:whitespace-normal truncate">
                                              {"Battery dropped"}
                                            </span>
                                            <span className="flex shrink-0">
                                              <svg className="lucide lucide-zap size-3.5 text-ring" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                              </svg>
                                            </span>
                                          </span>
                                        </span>
                                        <span className="flex items-center shrink-0">
                                          <span className="flex gap-0.75 items-center" role="img" aria-label="Battery at 3 of 7 bars">
                                            <span className="bg-emerald-500 h-3 rounded-full w-0.75"></span>
                                            <span className="bg-emerald-500 h-3 rounded-full w-0.75"></span>
                                            <span className="bg-emerald-500 h-3 rounded-full w-0.75"></span>
                                            <span className="bg-emerald-500/30 h-3 rounded-full w-0.75"></span>
                                            <span className="bg-emerald-500/30 h-3 rounded-full w-0.75"></span>
                                            <span className="bg-emerald-500/30 h-3 rounded-full w-0.75"></span>
                                            <span className="bg-emerald-500/30 h-3 rounded-full w-0.75"></span>
                                          </span>
                                        </span>
                                      </li>
                                    </ul>
                                    <Button className="shadow-xs w-full" href="#" aria-label="Track Dock C112 mission" role="button" tabIndex={0}>
                                      <svg className="lucide lucide-map-pinned size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MapPinnedIcon" tabler="IconMapPin" hugeicons="MapPinIcon" phosphor="MapPinAreaIcon" remixicon="RiRoadMapLine" data-icon="inline-start" aria-hidden="true">
                                        <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"></path>
                                        <circle cx={12} cy={8} r={2}></circle>
                                        <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"></path>
                                      </svg>
                                      {"Track Mission"}
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-2.5">
                                <div className="border-dashed border-ring/30 border-t" aria-hidden="true"></div>
                                <div className="flex flex-col gap-2.5">
                                  <div className="flex gap-2 items-center">
                                    <div className="flex flex-1 gap-1.5 items-center min-w-0">
                                      <Avatar className="shadow-2xs size-6" size="sm">
                                        <AvatarImage alt="" src="/assets/robot-pip.png"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium text-xs truncate">
                                        {"Pip W92"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/20 border-0 border-transparent dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 min-w-4 outline-none px-1 py-0.25 relative rounded-full text-[10px] text-success-foreground transition-shadow">
                                        {"On time"}
                                      </Badge>
                                    </div>
                                    <Button className="shadow-xs" href="#" aria-label="Open Pip W92 mission" role="button" tabIndex={0}>
                                      <svg className="lucide lucide-arrow-up-right size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                                        <path d="M7 7h10v10"></path>
                                        <path d="M7 17 17 7"></path>
                                      </svg>
                                    </Button>
                                    <Button className="aria-expanded:bg-background dark:aria-expanded:bg-input/30 shadow-xs" type="button" tabIndex={0} aria-expanded="false" aria-label="Expand Pip W92 detail">
                                      <svg className="lucide lucide-chevron-down size-3 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                        <path d="m6 9 6 6 6-6"></path>
                                      </svg>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-2.5">
                                <div className="border-dashed border-ring/30 border-t" aria-hidden="true"></div>
                                <div className="flex flex-col gap-2.5">
                                  <div className="flex gap-2 items-center">
                                    <div className="flex flex-1 gap-1.5 items-center min-w-0">
                                      <Avatar className="shadow-2xs size-6" size="sm">
                                        <AvatarImage alt="" src="/assets/robot-humble.png"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium text-xs truncate">
                                        {"Humble P028"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border-0 border-transparent dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.5 h-4 min-w-4 outline-none pl-0.75 px-1 py-0.25 relative rounded-full text-[10px] text-destructive transition-shadow">
                                        <svg className="lucide lucide-shield-alert size-2.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldAlertIcon" tabler="IconShieldExclamation" hugeicons="ShieldEnergyIcon" phosphor="ShieldWarningIcon" remixicon="RiShieldLine" aria-hidden="true">
                                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                          <path d="M12 8v4"></path>
                                          <path d="M12 16h.01"></path>
                                        </svg>
                                        {"Failed"}
                                      </Badge>
                                    </div>
                                    <Button className="shadow-xs" href="#" aria-label="Track Humble P028 fullscreen" role="button" tabIndex={0}>
                                      <svg className="lucide lucide-maximize-2 lucide-maximize2 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Maximize2Icon" tabler="IconMaximize" hugeicons="Maximize01Icon" phosphor="CornersOutIcon" remixicon="RiFullscreenLine" aria-hidden="true">
                                        <path d="M15 3h6v6"></path>
                                        <path d="m21 3-7 7"></path>
                                        <path d="m3 21 7-7"></path>
                                        <path d="M9 21H3v-6"></path>
                                      </svg>
                                    </Button>
                                    <Button className="aria-expanded:bg-background dark:aria-expanded:bg-input/30 shadow-xs" type="button" tabIndex={0} aria-expanded="false" aria-label="Expand Humble P028 detail">
                                      <svg className="lucide lucide-chevron-down size-3 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                        <path d="m6 9 6 6 6-6"></path>
                                      </svg>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-2.5">
                                <div className="border-dashed border-ring/30 border-t" aria-hidden="true"></div>
                                <div className="flex flex-col gap-2.5">
                                  <div className="flex gap-2 items-center">
                                    <div className="flex flex-1 gap-1.5 items-center min-w-0">
                                      <Avatar className="shadow-2xs size-6" size="sm">
                                        <AvatarImage alt="" src="/assets/robot-kiko.png"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium text-xs truncate">
                                        {"Kiko B17"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/20 border-0 border-transparent dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 min-w-4 outline-none px-1 py-0.25 relative rounded-full text-[10px] text-success-foreground transition-shadow">
                                        {"On time"}
                                      </Badge>
                                    </div>
                                    <Button className="shadow-xs" href="#" aria-label="Track Kiko B17 fullscreen" role="button" tabIndex={0}>
                                      <svg className="lucide lucide-maximize-2 lucide-maximize2 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Maximize2Icon" tabler="IconMaximize" hugeicons="Maximize01Icon" phosphor="CornersOutIcon" remixicon="RiFullscreenLine" aria-hidden="true">
                                        <path d="M15 3h6v6"></path>
                                        <path d="m21 3-7 7"></path>
                                        <path d="m3 21 7-7"></path>
                                        <path d="M9 21H3v-6"></path>
                                      </svg>
                                    </Button>
                                    <Button className="aria-expanded:bg-background dark:aria-expanded:bg-input/30 shadow-xs" type="button" tabIndex={0} aria-expanded="false" aria-label="Expand Kiko B17 detail">
                                      <svg className="lucide lucide-chevron-down size-3 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                        <path d="m6 9 6 6 6-6"></path>
                                      </svg>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                            <div className="flex gap-2 items-center">
                              <div className="flex flex-1 gap-1.5 items-center min-w-0">
                                <span className="font-medium text-sm truncate">
                                  {"Paused"}
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none pr-1.5 px-1 py-0.25 relative rounded-full text-[0.625rem] transition-shadow">
                                  <span>
                                    {"12"}
                                    <span className="max-md:hidden">
                                      {"Missions"}
                                    </span>
                                  </span>
                                </Badge>
                              </div>
                              <Button className="max-md:aspect-square max-md:justify-center max-md:px-0 shadow-xs" href="#" aria-label="View all paused" role="button" tabIndex={0}>
                                <svg className="lucide lucide-eye md:hidden size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                  <circle cx={12} cy={12} r={3}></circle>
                                </svg>
                                <span className="max-md:hidden">
                                  {"View All"}
                                </span>
                              </Button>
                              <Button className="aria-expanded:bg-background dark:aria-expanded:bg-input/30 shadow-xs" type="button" tabIndex={0} aria-expanded="false" aria-label="Expand paused">
                                <svg className="lucide lucide-chevron-down size-3 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                  <path d="m6 9 6 6 6-6"></path>
                                </svg>
                              </Button>
                            </div>
                            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                            <div className="flex gap-2 items-center">
                              <div className="flex flex-1 gap-1.5 items-center min-w-0">
                                <span className="font-medium text-sm truncate">
                                  {"Failed"}
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none pr-1.5 px-1 py-0.25 relative rounded-full text-[0.625rem] transition-shadow">
                                  <span>
                                    {"3"}
                                    <span className="max-md:hidden">
                                      {"Missions"}
                                    </span>
                                  </span>
                                </Badge>
                              </div>
                              <Button className="max-md:aspect-square max-md:justify-center max-md:px-0 shadow-xs" href="#" aria-label="View all failed" role="button" tabIndex={0}>
                                <svg className="lucide lucide-eye md:hidden size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                  <circle cx={12} cy={12} r={3}></circle>
                                </svg>
                                <span className="max-md:hidden">
                                  {"View All"}
                                </span>
                              </Button>
                              <Button className="aria-expanded:bg-background dark:aria-expanded:bg-input/30 shadow-xs" type="button" tabIndex={0} aria-expanded="false" aria-label="Expand failed">
                                <svg className="lucide lucide-chevron-down size-3 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                  <path d="m6 9 6 6 6-6"></path>
                                </svg>
                              </Button>
                            </div>
                          </div>
                        </FramePanel>
                        <footer className="-mb-px -mx-px flex flex-row gap-2.5 items-center px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                          <Button className="flex-1 text-xs" href="#" aria-label="Review all assignments" role="button" tabIndex={0}>
                            <svg className="lucide lucide-clipboard-list size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClipboardListIcon" tabler="IconClipboardList" hugeicons="ClipboardIcon" phosphor="ClipboardTextIcon" remixicon="RiFileListLine" data-icon="inline-start" aria-hidden="true">
                              <rect width={8} height={4} x={8} y={2} rx={1} ry={1}></rect>
                              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                              <path d="M12 11h4"></path>
                              <path d="M12 16h4"></path>
                              <path d="M8 11h.01"></path>
                              <path d="M8 16h.01"></path>
                            </svg>
                            {"Review Assignments"}
                          </Button>
                          <Button className="max-md:aspect-square max-md:justify-center max-md:px-0 shadow-xs text-xs" href="#" role="button" tabIndex={0}>
                            <svg className="lucide lucide-history size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HistoryIcon" tabler="IconHistory" hugeicons="Clock01Icon" phosphor="ClockCounterClockwiseIcon" remixicon="RiHistoryLine" data-icon="inline-start" aria-hidden="true">
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                              <path d="M3 3v5h5"></path>
                              <path d="M12 7v5l4 2"></path>
                            </svg>
                            <span className="max-md:sr-only">
                              {"Activity"}
                            </span>
                          </Button>
                        </footer>
                      </Frame>
                    </TabsContent>
                  </Tabs>
                </div>
              </Sidebar>
              </SidebarProvider>
            </div>
          </div>
          </SidebarProvider>
        </div>
        </SidebarProvider>
      </Sidebar>
      </SidebarProvider>
      <SidebarInset className="h-svh min-h-0 overflow-hidden">
        <header className="@container/topbar flex gap-2 h-14 items-center justify-between p-3 shrink-0">
          <div className="flex flex-1 gap-2 items-center min-w-0">
            <div className="flex gap-3 items-center md:hidden shrink-0">
              <SidebarProvider>
              <SidebarTrigger className="-mx-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} sidebar="trigger">
                <svg className="cn-rtl-flip lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine">
                  <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                  <path d="M9 3v18"></path>
                </svg>
                <span className="sr-only">
                  {"Toggle Sidebar"}
                </span>
              </SidebarTrigger>
              </SidebarProvider>
              <a className="@max-[18rem]/topbar:hidden flex items-center shrink-0 text-foreground" href="#" aria-label="NeUI home">
                <svg className="h-7 w-auto" viewBox="0 0 24.084 24" fill="none" aria-hidden="true">
                  <path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M16.0554 0.92308H8.02772C4.1057 0.92308 0.926278 4.09152 0.926278 8V16C0.926278 19.9085 4.1057 23.0769 8.02772 23.0769H16.0554C19.9774 23.0769 23.1569 19.9085 23.1569 16V8C23.1569 4.09152 19.9774 0.92308 16.0554 0.92308ZM8.02772 0C3.59413 0 0 3.58172 0 8V16C0 20.4183 3.59413 24 8.02772 24H16.0554C20.489 24 24.0832 20.4183 24.0832 16V8C24.0832 3.58172 20.489 0 16.0554 0H8.02772Z" fill="currentColor"></path>
                  <path d="M16.8909 8.25504C17.5158 8.25504 18.0223 7.75023 18.0223 7.12752C18.0223 6.50481 17.5158 6 16.8909 6C16.266 6 15.7595 6.50481 15.7595 7.12752C15.7595 7.75023 16.266 8.25504 16.8909 8.25504Z" fill="currentColor"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.06097 13.651V7.12751C6.06097 6.50481 6.56752 6 7.19237 6C7.81726 6 8.32381 6.50481 8.32381 7.12751V13.651C8.32381 14.8074 9.26453 15.745 10.425 15.745H13.6577C14.8181 15.745 15.7589 14.8074 15.7589 13.651V10.4617C15.7589 9.83905 16.2654 9.33425 16.8903 9.33425C17.5151 9.33425 18.0217 9.83905 18.0217 10.4617V13.651C18.0217 16.0529 16.0679 18 13.6577 18H10.425C8.01481 18 6.06097 16.0529 6.06097 13.651Z" fill="currentColor"></path>
                </svg>
              </a>
            </div>
            <InputGroup className="@container/search max-md:ms-auto max-md:w-45 max-w-lg" role="group">
              <InputGroupAddon role="group" data-align="inline-start">
                <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx={11} cy={11} r={8}></circle>
                </svg>
              </InputGroupAddon>
              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground text-ellipsis w-full" id="base-ui-_r_1g_" placeholder="Enter Robot SKV or Nickname" aria-label="Search robots" value="" />
              <InputGroupAddon role="group" data-align="inline-end">
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-secondary cn-input-group-button cn-input-group-button-size-xs disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none rounded-md select-none shadow-none shrink-0 text-xs transition-all whitespace-nowrap" type="button" tabIndex={0} size="xs" aria-label="Search scope: Across All Robots" aria-haspopup="menu" id="base-ui-_r_1k_" aria-expanded="false">
                  <svg className="lucide lucide-bot size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                    <path d="M12 8V4H8"></path>
                    <rect width={16} height={12} x={4} y={8} rx={2}></rect>
                    <path d="M2 14h2"></path>
                    <path d="M20 14h2"></path>
                    <path d="M15 13v2"></path>
                    <path d="M9 13v2"></path>
                  </svg>
                  <span className="@max-[10.5rem]/search:hidden max-lg:hidden">
                    {"Across All Robots"}
                  </span>
                  <svg className="lucide lucide-chevrons-up-down size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                    <path d="m7 15 5 5 5-5"></path>
                    <path d="m7 9 5-5 5 5"></path>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div className="flex gap-2 items-center shrink-0">
            <Button className="max-lg:aspect-square max-lg:justify-center max-lg:px-0 text-xs" href="#" aria-label="Create new mission" role="button" tabIndex={0}>
              <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              <span className="max-lg:hidden">
                {"New Mission"}
              </span>
            </Button>
            <Button className="max-lg:aspect-square max-lg:justify-center max-lg:px-0 shadow-xs text-xs" href="#" aria-label="Ask AI about the fleet" role="button" tabIndex={0}>
              <svg className="lucide lucide-sparkles size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" data-icon="inline-start" aria-hidden="true">
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                <path d="M20 2v4"></path>
                <path d="M22 4h-4"></path>
                <circle cx={4} cy={20} r={2}></circle>
              </svg>
              <span className="max-lg:hidden">
                {"Ask AI"}
              </span>
            </Button>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shadow-xs shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Workspace preferences" aria-haspopup="menu" id="base-ui-_r_1p_" aria-expanded="false">
              <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                <circle cx={12} cy={12} r={3}></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </header>
        <main className="@container flex flex-1 flex-col min-h-0 overflow-y-auto p-3 pt-0">
          <div className="flex flex-1 flex-col gap-4 min-h-0" aria-hidden="true">
            <div className="@2xl:grid-cols-3 gap-4 grid shrink-0">
              <Card className="border border-border ring-0 shadow-xs" size="default">
                <CardContent className="flex flex-col gap-4 h-24 justify-between">
                  <div className="flex gap-2 items-center">
                    <Skeleton className="bg-input/50 rounded-md size-7"></Skeleton>
                    <Skeleton className="bg-input/50 h-3 w-24"></Skeleton>
                  </div>
                  <div className="flex gap-4 items-end justify-between">
                    <Skeleton className="bg-input/50 h-6 w-20"></Skeleton>
                    <Skeleton className="bg-input/50 h-3 w-16"></Skeleton>
                  </div>
                </CardContent>
              </Card>
              <Card className="border border-border ring-0 shadow-xs" size="default">
                <CardContent className="flex flex-col gap-4 h-24 justify-between">
                  <div className="flex gap-2 items-center">
                    <Skeleton className="bg-input/50 rounded-md size-7"></Skeleton>
                    <Skeleton className="bg-input/50 h-3 w-24"></Skeleton>
                  </div>
                  <div className="flex gap-4 items-end justify-between">
                    <Skeleton className="bg-input/50 h-6 w-20"></Skeleton>
                    <Skeleton className="bg-input/50 h-3 w-16"></Skeleton>
                  </div>
                </CardContent>
              </Card>
              <Card className="border border-border ring-0 shadow-xs" size="default">
                <CardContent className="flex flex-col gap-4 h-24 justify-between">
                  <div className="flex gap-2 items-center">
                    <Skeleton className="bg-input/50 rounded-md size-7"></Skeleton>
                    <Skeleton className="bg-input/50 h-3 w-24"></Skeleton>
                  </div>
                  <div className="flex gap-4 items-end justify-between">
                    <Skeleton className="bg-input/50 h-6 w-20"></Skeleton>
                    <Skeleton className="bg-input/50 h-3 w-16"></Skeleton>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="border border-border flex-1 min-h-64 ring-0 shadow-xs" size="default">
              <CardContent className="flex flex-col gap-5 h-full">
                <div className="flex gap-4 items-center justify-between shrink-0">
                  <Skeleton className="bg-input/50 h-4 w-32"></Skeleton>
                  <div className="flex gap-2">
                    <Skeleton className="bg-input/50 h-7 w-24"></Skeleton>
                    <Skeleton className="bg-input/50 h-7 w-16"></Skeleton>
                  </div>
                </div>
                <Skeleton className="bg-input/50 h-7 max-w-full shrink-0 w-72"></Skeleton>
                <div className="flex flex-1 flex-col gap-3 min-h-0">
                  <Skeleton className="bg-input/50 flex-1 min-h-6"></Skeleton>
                  <Skeleton className="bg-input/50 flex-1 min-h-6"></Skeleton>
                  <Skeleton className="bg-input/50 flex-1 min-h-6"></Skeleton>
                  <Skeleton className="bg-input/50 flex-1 min-h-6"></Skeleton>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </SidebarInset>
    </div>
    </SidebarProvider>
  )
}
