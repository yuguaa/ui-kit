import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
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
  CardFooter,
} from "@/registry/bases/base/ui/card"
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
import { Kbd } from "@/registry/bases/base/ui/kbd"
import {
  Sheet,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
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
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/registry/bases/base/ui/sidebar"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import {
  SidebarGroupLabel,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuSubButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <SidebarProvider>
    <div className="bg-background flex group/sidebar-wrapper h-svh has-data-[variant=inset]:bg-sidebar min-h-0 overflow-hidden text-foreground w-full" style={{"--sidebar-width": "14rem", "--sidebar-width-icon": "3rem"}}>
      <div className="data-[state=collapsed]:w-12 data-[state=open]:w-(--sidebar-width) duration-200 ease-linear group/fade h-svh motion-reduce:transition-none overflow-hidden relative shrink-0 transition-[width]" data-state="open">
        <div className="duration-200 group-data-[state=collapsed]/fade:opacity-0 group-data-[state=collapsed]/fade:pointer-events-none h-full motion-reduce:transition-none transition-opacity w-(--sidebar-width)">
          <SidebarProvider>
          <Sidebar className="bg-background py-2" data-state="expanded">
            <div className="flex flex-1 flex-col min-h-0">
              <SidebarHeader className="gap-4 p-4 pb-0" sidebar="header">
                <div className="flex h-7 items-center justify-between">
                  <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.75 items-center outline-none rounded-md shrink-0 text-foreground" href="#" aria-label="NeUI home">
                    <svg className="h-6 w-auto" viewBox="0 0 24.084 24" fill="none" aria-hidden="true">
                      <path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M16.0554 0.92308H8.02772C4.1057 0.92308 0.926278 4.09152 0.926278 8V16C0.926278 19.9085 4.1057 23.0769 8.02772 23.0769H16.0554C19.9774 23.0769 23.1569 19.9085 23.1569 16V8C23.1569 4.09152 19.9774 0.92308 16.0554 0.92308ZM8.02772 0C3.59413 0 0 3.58172 0 8V16C0 20.4183 3.59413 24 8.02772 24H16.0554C20.489 24 24.0832 20.4183 24.0832 16V8C24.0832 3.58172 20.489 0 16.0554 0H8.02772Z" fill="currentColor"></path>
                      <path d="M16.8909 8.25504C17.5158 8.25504 18.0223 7.75023 18.0223 7.12752C18.0223 6.50481 17.5158 6 16.8909 6C16.266 6 15.7595 6.50481 15.7595 7.12752C15.7595 7.75023 16.266 8.25504 16.8909 8.25504Z" fill="currentColor"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.06097 13.651V7.12751C6.06097 6.50481 6.56752 6 7.19237 6C7.81726 6 8.32381 6.50481 8.32381 7.12751V13.651C8.32381 14.8074 9.26453 15.745 10.425 15.745H13.6577C14.8181 15.745 15.7589 14.8074 15.7589 13.651V10.4617C15.7589 9.83905 16.2654 9.33425 16.8903 9.33425C17.5151 9.33425 18.0217 9.83905 18.0217 10.4617V13.651C18.0217 16.0529 16.0679 18 13.6577 18H10.425C8.01481 18 6.06097 16.0529 6.06097 13.651Z" fill="currentColor"></path>
                    </svg>
                    <svg className="group-data-[collapsible=icon]:hidden h-6 w-auto" viewBox="31.2 0 33.022 24" fill="none" aria-hidden="true">
                      <path d="M64.2217 7.63423V16.3615H62.3766V7.63423H64.2217Z" fill="currentColor"></path>
                      <path d="M56.6133 7.63423H58.4585V13.3018C58.4585 13.9382 58.3065 14.495 58.0025 14.9723C57.7014 15.4496 57.2795 15.8217 56.7369 16.0888C56.1943 16.353 55.5622 16.4851 54.8406 16.4851C54.1161 16.4851 53.4826 16.353 52.94 16.0888C52.3974 15.8217 51.9755 15.4496 51.6744 14.9723C51.3732 14.495 51.2227 13.9382 51.2227 13.3018V7.63423H53.0678V13.1442C53.0678 13.4766 53.1403 13.772 53.2852 14.0305C53.4329 14.2891 53.6403 14.4922 53.9073 14.6399C54.1744 14.7876 54.4854 14.8615 54.8406 14.8615C55.1985 14.8615 55.5096 14.7876 55.7738 14.6399C56.0408 14.4922 56.2468 14.2891 56.3917 14.0305C56.5394 13.772 56.6133 13.4766 56.6133 13.1442V7.63423Z" fill="currentColor"></path>
                      <path d="M41.475 16.3615V7.63423H47.3557V9.15554H43.3202V11.2351H47.0531V12.7564H43.3202V14.8402H47.3727V16.3615H41.475Z" fill="currentColor"></path>
                      <path d="M31.2 16.3615V7.63423H34.6432C35.3023 7.63423 35.8648 7.75213 36.3307 7.98792C36.7994 8.22088 37.156 8.55184 37.4003 8.98082C37.6474 9.40696 37.771 9.90838 37.771 10.4851C37.771 11.0646 37.646 11.5632 37.396 11.9808C37.146 12.3956 36.7838 12.7138 36.3094 12.9354C35.8378 13.157 35.2668 13.2678 34.5963 13.2678H32.2909V11.7848H34.298C34.6503 11.7848 34.9429 11.7365 35.1759 11.6399C35.4088 11.5433 35.5821 11.3984 35.6957 11.2053C35.8122 11.0121 35.8705 10.772 35.8705 10.4851C35.8705 10.1953 35.8122 9.95099 35.6957 9.75213C35.5821 9.55326 35.4074 9.4027 35.1716 9.30042C34.9386 9.19531 34.6446 9.14275 34.2895 9.14275H33.0452V16.3615H31.2ZM35.9131 12.3899L38.0821 16.3615H36.0452L33.923 12.3899H35.9131Z" fill="currentColor"></path>
                    </svg>
                  </a>
                  <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex={0} aria-label="Toggle Sidebar">
                    <svg className="lucide lucide-panel-left-close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PanelLeftCloseIcon" tabler="IconLayoutSidebarLeftCollapse" hugeicons="PanelLeftCloseIcon" phosphor="SidebarSimpleIcon" remixicon="RiSidebarFoldLine" aria-hidden="true">
                      <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                      <path d="M9 3v18"></path>
                      <path d="m16 15-3-3 3-3"></path>
                    </svg>
                  </Button>
                </div>
                <InputGroup className="h-8 rounded-lg shadow-none" role="group">
                  <InputGroupAddon className="pl-2.25" role="group" data-align="inline-start">
                    <svg className="lucide lucide-search size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                      <path d="m21 21-4.34-4.34"></path>
                      <circle cx={11} cy={11} r={8}></circle>
                    </svg>
                  </InputGroupAddon>
                  <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 h-full min-w-0 outline-none pb-1.25 placeholder:text-muted-foreground pt-0.75 w-full" id="base-ui-_r_0_" placeholder="Search" aria-label="Search navigation" aria-keyshortcuts="Meta+F Control+F" value="" />
                  <InputGroupAddon className="mr-0 pr-2.25" role="group" data-align="inline-end" aria-hidden="true">
                    <Kbd className="rounded-md">
                      {"⌘F"}
                    </Kbd>
                  </InputGroupAddon>
                </InputGroup>
              </SidebarHeader>
              <SidebarProvider>
              <SidebarContent className="[--scroll-fade-reveal:--spacing(8)] gap-4 pb-0 pt-4 px-4 scroll-fade-y scroll-py-10" sidebar="content">
                <SidebarProvider>
                <SidebarGroup className="gap-0.5 p-0" sidebar="group">
                  <SidebarProvider>
                  <SidebarGroupLabel className="block h-5 pb-1 px-2 text-ring truncate" sidebar="group-label" id="fleet-overview-label">
                    {"Fleet Overview"}
                  </SidebarGroupLabel>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarGroupContent sidebar="group-content">
                    <SidebarProvider>
                    <SidebarMenu className="gap-0.5" sidebar="menu" aria-labelledby="fleet-overview-label">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="[&>svg]:text-ring data-active:[&>svg]:text-current data-active:text-foreground font-medium hover:not-data-active:bg-accent/50 hover:text-foreground text-muted-foreground text-xs" href="#" id="base-ui-_r_2_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-layout-dashboard size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                            <rect width={7} height={9} x={3} y={3} rx={1}></rect>
                            <rect width={7} height={5} x={14} y={3} rx={1}></rect>
                            <rect width={7} height={9} x={14} y={12} rx={1}></rect>
                            <rect width={7} height={5} x={3} y={16} rx={1}></rect>
                          </svg>
                          <span>
                            {"Overview"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="[&>svg]:text-ring data-active:[&>svg]:text-current data-active:text-foreground font-medium hover:not-data-active:bg-accent/50 hover:text-foreground text-muted-foreground text-xs" href="#" aria-current="page" id="base-ui-_r_4_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="">
                          <svg className="lucide lucide-shield-check size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                          <span>
                            {"Security Center"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="[&>svg]:text-ring data-active:[&>svg]:text-current data-active:text-foreground font-medium hover:not-data-active:bg-accent/50 hover:text-foreground text-muted-foreground text-xs" href="#" id="base-ui-_r_6_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-map-pin size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                            <circle cx={12} cy={10} r={3}></circle>
                          </svg>
                          <span>
                            {"Live Map"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="[&>svg]:text-ring data-active:[&>svg]:text-current data-active:text-foreground font-medium hover:not-data-active:bg-accent/50 hover:text-foreground text-muted-foreground text-xs" href="#" id="base-ui-_r_8_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-bot size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                            <path d="M12 8V4H8"></path>
                            <rect width={16} height={12} x={4} y={8} rx={2}></rect>
                            <path d="M2 14h2"></path>
                            <path d="M20 14h2"></path>
                            <path d="M15 13v2"></path>
                            <path d="M9 13v2"></path>
                          </svg>
                          <span>
                            {"All Robots"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="[&>svg]:text-ring data-active:[&>svg]:text-current data-active:text-foreground font-medium hover:not-data-active:bg-accent/50 hover:text-foreground text-muted-foreground text-xs" href="#" id="base-ui-_r_a_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-layers size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                            <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                            <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                            <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                          </svg>
                          <span>
                            {"Zones"}
                          </span>
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
                <SidebarProvider>
                <SidebarGroup className="gap-0.5 p-0" sidebar="group">
                  <SidebarProvider>
                  <SidebarGroupLabel className="block h-5 pb-1 px-2 text-ring truncate" sidebar="group-label" id="fleet-activity-label">
                    {"Fleet Activity"}
                  </SidebarGroupLabel>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarGroupContent sidebar="group-content">
                    <SidebarProvider>
                    <SidebarMenu className="gap-0.5" sidebar="menu" aria-labelledby="fleet-activity-label">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="[&>svg]:text-ring data-active:[&>svg]:text-current data-active:text-foreground font-medium hover:not-data-active:bg-accent/50 hover:text-foreground text-muted-foreground text-xs" href="#" id="base-ui-_r_c_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-activity size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                          </svg>
                          <span>
                            {"Live Status"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="[&>svg]:text-ring data-active:[&>svg]:text-current data-active:text-foreground font-medium hover:not-data-active:bg-accent/50 hover:text-foreground text-muted-foreground text-xs" href="#" id="base-ui-_r_e_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-key-round size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                            <circle cx={16.5} cy={7.5} r=".5" fill="currentColor"></circle>
                          </svg>
                          <span>
                            {"Access Requests"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="[&>svg]:text-ring data-active:[&>svg]:text-current data-active:text-foreground font-medium hover:not-data-active:bg-accent/50 hover:text-foreground text-muted-foreground text-xs" href="#" id="base-ui-_r_g_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-list size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListIcon" tabler="IconList" hugeicons="LeftToRightListBulletIcon" phosphor="ListBulletsIcon" remixicon="RiListCheck" aria-hidden="true">
                            <path d="M3 5h.01"></path>
                            <path d="M3 12h.01"></path>
                            <path d="M3 19h.01"></path>
                            <path d="M8 5h13"></path>
                            <path d="M8 12h13"></path>
                            <path d="M8 19h13"></path>
                          </svg>
                          <span>
                            {"Event Feed"}
                          </span>
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
              <SidebarFooter className="gap-4 p-4 pt-0" sidebar="footer">
                <Card className="border gap-3.5 group-data-[collapsible=icon]:hidden overflow-hidden py-3.75 relative ring-0 shadow-2xs" size="default">
                  <div className="absolute bg-[length:10px_10px] bg-[url(/assets/card-grid.svg)] bg-repeat dark:invert inset-0" aria-hidden="true"></div>
                  <CardContent className="flex flex-col gap-2.5 items-center px-3.75 relative text-center">
                    <IconTile className="[--icon-tile-icon-size:--spacing(5)] [--icon-tile-size:--spacing(9)] border-ring/50 shadow-2xs" variant="outline" size="default">
                      <svg className="lucide lucide-bot" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                        <path d="M12 8V4H8"></path>
                        <rect width={16} height={12} x={4} y={8} rx={2}></rect>
                        <path d="M2 14h2"></path>
                        <path d="M20 14h2"></path>
                        <path d="M15 13v2"></path>
                        <path d="M9 13v2"></path>
                      </svg>
                    </IconTile>
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-sm">
                        {"Integrations"}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {"Connect fleet tools, data and workflows here"}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-transparent border-t-0 justify-center px-3.75 py-0 relative">
                    <Button className="h-7 shadow-2xs text-xs" type="button" tabIndex={0}>
                      {"Upgrade"}
                    </Button>
                  </CardFooter>
                </Card>
                <SidebarProvider>
                <SidebarMenu sidebar="menu">
                  <SidebarProvider>
                  <SidebarMenuItem sidebar="menu-item">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-muted/50 border border-input/50 cn-sidebar-menu-button cn-sidebar-menu-button-size-lg cn-sidebar-menu-button-variant-default disabled:opacity-50 disabled:pointer-events-none flex gap-2 group/menu-button h-10 hover:bg-muted hover:border-input items-center outline-hidden overflow-hidden peer/menu-button px-1.75 rounded-lg text-xs w-full" type="button" sidebar="menu-button" size="lg" aria-label="Open account menu for Shadcn" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_k_" aria-expanded="false">
                      <Avatar className="after:border-0 after:rounded-md rounded-md" size="sm">
                        <AvatarImage className="rounded-md" alt="Shadcn" src="/assets/avatar-shadcn.jpg"></AvatarImage>
                      </Avatar>
                      <span className="flex-1 grid leading-none min-w-0 text-left">
                        <span className="font-medium text-sidebar-accent-foreground truncate">
                          {"Shadcn"}
                        </span>
                        <span className="mt-0.5 text-[0.625rem] text-muted-foreground truncate">
                          {"Author of Shadcn/ui"}
                        </span>
                      </span>
                      <svg className="lucide lucide-chevrons-up-down ml-auto size-3.5! text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                        <path d="m7 15 5 5 5-5"></path>
                        <path d="m7 9 5-5 5 5"></path>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </SidebarMenuItem>
                  </SidebarProvider>
                </SidebarMenu>
                </SidebarProvider>
              </SidebarFooter>
            </div>
          </Sidebar>
          </SidebarProvider>
        </div>
        <div className="absolute duration-200 group-data-[state=collapsed]/fade:opacity-100 group-data-[state=collapsed]/fade:pointer-events-auto inset-y-0 motion-reduce:transition-none opacity-0 pointer-events-none start-0 transition-opacity w-12" inert="">
          <SidebarProvider>
          <Sidebar className="bg-background py-2 w-12" data-state="collapsed">
            <SidebarHeader className="gap-4 p-4 pb-0 px-2" sidebar="header">
              <Button className="hover:text-foreground mx-auto text-muted-foreground" type="button" tabIndex={0} aria-label="Toggle Sidebar">
                <svg className="lucide lucide-panel-left-close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PanelLeftCloseIcon" tabler="IconLayoutSidebarLeftCollapse" hugeicons="PanelLeftCloseIcon" phosphor="SidebarSimpleIcon" remixicon="RiSidebarFoldLine" aria-hidden="true">
                  <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                  <path d="M9 3v18"></path>
                  <path d="m16 15-3-3 3-3"></path>
                </svg>
              </Button>
              <Button className="mx-auto" type="button" tabIndex={0} aria-label="Search navigation">
                <svg className="lucide lucide-search size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx={11} cy={11} r={8}></circle>
                </svg>
              </Button>
            </SidebarHeader>
            <SidebarProvider>
            <SidebarContent className="[--scroll-fade-reveal:--spacing(8)] gap-4 pb-0 pt-4.5 px-2 scroll-fade-y scroll-py-10" sidebar="content">
              <SidebarProvider>
              <SidebarGroup className="gap-0.5 p-0" sidebar="group">
                <SidebarProvider>
                <SidebarGroupContent sidebar="group-content">
                  <SidebarProvider>
                  <SidebarMenu className="gap-0.5" sidebar="menu">
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="[&>svg]:text-ring data-active:[&>svg]:text-current data-active:text-foreground hover:text-foreground justify-center p-2 size-8 text-muted-foreground" href="#" aria-label="Overview" id="base-ui-_r_n_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-layout-dashboard size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
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
                      <SidebarMenuButton className="[&>svg]:text-ring data-active:[&>svg]:text-current data-active:text-foreground hover:text-foreground justify-center p-2 size-8 text-muted-foreground" href="#" aria-label="Security Center" aria-current="page" id="base-ui-_r_p_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="">
                        <svg className="lucide lucide-shield-check size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
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
                      <SidebarMenuButton className="[&>svg]:text-ring data-active:[&>svg]:text-current data-active:text-foreground hover:text-foreground justify-center p-2 size-8 text-muted-foreground" href="#" aria-label="Live Map" id="base-ui-_r_r_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-map-pin size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx={12} cy={10} r={3}></circle>
                        </svg>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="[&>svg]:text-ring data-active:[&>svg]:text-current data-active:text-foreground hover:text-foreground justify-center p-2 size-8 text-muted-foreground" href="#" aria-label="All Robots" id="base-ui-_r_t_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-bot size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
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
                      <SidebarMenuButton className="[&>svg]:text-ring data-active:[&>svg]:text-current data-active:text-foreground hover:text-foreground justify-center p-2 size-8 text-muted-foreground" href="#" aria-label="Zones" id="base-ui-_r_v_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-layers size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                          <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                          <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                          <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
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
              <SidebarProvider>
              <SidebarGroup className="gap-0.5 p-0" sidebar="group">
                <SidebarProvider>
                <SidebarGroupContent sidebar="group-content">
                  <SidebarProvider>
                  <SidebarMenu className="gap-0.5" sidebar="menu">
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="[&>svg]:text-ring data-active:[&>svg]:text-current data-active:text-foreground hover:text-foreground justify-center p-2 size-8 text-muted-foreground" href="#" aria-label="Live Status" id="base-ui-_r_11_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-activity size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                          <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                        </svg>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="[&>svg]:text-ring data-active:[&>svg]:text-current data-active:text-foreground hover:text-foreground justify-center p-2 size-8 text-muted-foreground" href="#" aria-label="Access Requests" id="base-ui-_r_13_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-key-round size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
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
                      <SidebarMenuButton className="[&>svg]:text-ring data-active:[&>svg]:text-current data-active:text-foreground hover:text-foreground justify-center p-2 size-8 text-muted-foreground" href="#" aria-label="Event Feed" id="base-ui-_r_15_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-list size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListIcon" tabler="IconList" hugeicons="LeftToRightListBulletIcon" phosphor="ListBulletsIcon" remixicon="RiListCheck" aria-hidden="true">
                          <path d="M3 5h.01"></path>
                          <path d="M3 12h.01"></path>
                          <path d="M3 19h.01"></path>
                          <path d="M8 5h13"></path>
                          <path d="M8 12h13"></path>
                          <path d="M8 19h13"></path>
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
            <SidebarFooter className="gap-4 p-4 pt-0 px-2" sidebar="footer">
              <SidebarProvider>
              <SidebarMenu sidebar="menu">
                <SidebarProvider>
                <SidebarMenuItem sidebar="menu-item">
                  <SidebarProvider>
                  <SidebarMenuButton className="bg-muted/50 border border-input/50 gap-2 hover:bg-muted hover:border-input justify-center p-0 rounded-lg size-8 text-xs" type="button" sidebar="menu-button" size="lg" tabIndex={-1}>
                    <Avatar className="after:border-0 after:rounded-md rounded-md" size="sm">
                      <AvatarImage className="rounded-md" alt="Shadcn" src="/assets/avatar-shadcn.jpg"></AvatarImage>
                    </Avatar>
                    <span className="flex-1 hidden leading-none min-w-0 text-left">
                      <span className="font-medium text-sidebar-accent-foreground truncate">
                        {"Shadcn"}
                      </span>
                      <span className="mt-0.5 text-[0.625rem] text-muted-foreground truncate">
                        {"Author of Shadcn/ui"}
                      </span>
                    </span>
                    <svg className="hidden lucide lucide-chevrons-up-down ml-auto size-3.5! text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path>
                    </svg>
                  </SidebarMenuButton>
                  </SidebarProvider>
                </SidebarMenuItem>
                </SidebarProvider>
              </SidebarMenu>
              </SidebarProvider>
            </SidebarFooter>
          </Sidebar>
          </SidebarProvider>
        </div>
      </div>
      <SidebarInset className="md:py-2 min-h-0 min-w-0 overflow-hidden">
        <div className="border-b flex h-12 items-center justify-between md:hidden px-4 shrink-0">
          <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.75 items-center outline-none rounded-md shrink-0 text-foreground" href="#" aria-label="NeUI home">
            <svg className="h-6 w-auto" viewBox="0 0 24.084 24" fill="none" aria-hidden="true">
              <path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M16.0554 0.92308H8.02772C4.1057 0.92308 0.926278 4.09152 0.926278 8V16C0.926278 19.9085 4.1057 23.0769 8.02772 23.0769H16.0554C19.9774 23.0769 23.1569 19.9085 23.1569 16V8C23.1569 4.09152 19.9774 0.92308 16.0554 0.92308ZM8.02772 0C3.59413 0 0 3.58172 0 8V16C0 20.4183 3.59413 24 8.02772 24H16.0554C20.489 24 24.0832 20.4183 24.0832 16V8C24.0832 3.58172 20.489 0 16.0554 0H8.02772Z" fill="currentColor"></path>
              <path d="M16.8909 8.25504C17.5158 8.25504 18.0223 7.75023 18.0223 7.12752C18.0223 6.50481 17.5158 6 16.8909 6C16.266 6 15.7595 6.50481 15.7595 7.12752C15.7595 7.75023 16.266 8.25504 16.8909 8.25504Z" fill="currentColor"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M6.06097 13.651V7.12751C6.06097 6.50481 6.56752 6 7.19237 6C7.81726 6 8.32381 6.50481 8.32381 7.12751V13.651C8.32381 14.8074 9.26453 15.745 10.425 15.745H13.6577C14.8181 15.745 15.7589 14.8074 15.7589 13.651V10.4617C15.7589 9.83905 16.2654 9.33425 16.8903 9.33425C17.5151 9.33425 18.0217 9.83905 18.0217 10.4617V13.651C18.0217 16.0529 16.0679 18 13.6577 18H10.425C8.01481 18 6.06097 16.0529 6.06097 13.651Z" fill="currentColor"></path>
            </svg>
            <svg className="group-data-[collapsible=icon]:hidden h-6 w-auto" viewBox="31.2 0 33.022 24" fill="none" aria-hidden="true">
              <path d="M64.2217 7.63423V16.3615H62.3766V7.63423H64.2217Z" fill="currentColor"></path>
              <path d="M56.6133 7.63423H58.4585V13.3018C58.4585 13.9382 58.3065 14.495 58.0025 14.9723C57.7014 15.4496 57.2795 15.8217 56.7369 16.0888C56.1943 16.353 55.5622 16.4851 54.8406 16.4851C54.1161 16.4851 53.4826 16.353 52.94 16.0888C52.3974 15.8217 51.9755 15.4496 51.6744 14.9723C51.3732 14.495 51.2227 13.9382 51.2227 13.3018V7.63423H53.0678V13.1442C53.0678 13.4766 53.1403 13.772 53.2852 14.0305C53.4329 14.2891 53.6403 14.4922 53.9073 14.6399C54.1744 14.7876 54.4854 14.8615 54.8406 14.8615C55.1985 14.8615 55.5096 14.7876 55.7738 14.6399C56.0408 14.4922 56.2468 14.2891 56.3917 14.0305C56.5394 13.772 56.6133 13.4766 56.6133 13.1442V7.63423Z" fill="currentColor"></path>
              <path d="M41.475 16.3615V7.63423H47.3557V9.15554H43.3202V11.2351H47.0531V12.7564H43.3202V14.8402H47.3727V16.3615H41.475Z" fill="currentColor"></path>
              <path d="M31.2 16.3615V7.63423H34.6432C35.3023 7.63423 35.8648 7.75213 36.3307 7.98792C36.7994 8.22088 37.156 8.55184 37.4003 8.98082C37.6474 9.40696 37.771 9.90838 37.771 10.4851C37.771 11.0646 37.646 11.5632 37.396 11.9808C37.146 12.3956 36.7838 12.7138 36.3094 12.9354C35.8378 13.157 35.2668 13.2678 34.5963 13.2678H32.2909V11.7848H34.298C34.6503 11.7848 34.9429 11.7365 35.1759 11.6399C35.4088 11.5433 35.5821 11.3984 35.6957 11.2053C35.8122 11.0121 35.8705 10.772 35.8705 10.4851C35.8705 10.1953 35.8122 9.95099 35.6957 9.75213C35.5821 9.55326 35.4074 9.4027 35.1716 9.30042C34.9386 9.19531 34.6446 9.14275 34.2895 9.14275H33.0452V16.3615H31.2ZM35.9131 12.3899L38.0821 16.3615H36.0452L33.923 12.3899H35.9131Z" fill="currentColor"></path>
            </svg>
          </a>
          <div className="flex gap-1 items-center">
            <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex={0} aria-label="Toggle Sidebar">
              <svg className="lucide lucide-panel-left-close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PanelLeftCloseIcon" tabler="IconLayoutSidebarLeftCollapse" hugeicons="PanelLeftCloseIcon" phosphor="SidebarSimpleIcon" remixicon="RiSidebarFoldLine" aria-hidden="true">
                <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                <path d="M9 3v18"></path>
                <path d="m16 15-3-3 3-3"></path>
              </svg>
            </Button>
            <Sheet>
            <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open scope" baseUiClickTrigger="" id="base-ui-_r_17_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-menu" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MenuIcon" tabler="IconMenu2" hugeicons="Menu01Icon" phosphor="ListIcon" remixicon="RiMenuLine" aria-hidden="true">
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
            </SheetTrigger>
            </Sheet>
          </div>
        </div>
        <Card className="after:absolute after:border after:border-border after:inset-0 after:pointer-events-none after:rounded-xl bg-accent/10 flex-1 flex-row gap-0 max-md:after:border-0 max-md:after:rounded-none max-md:rounded-none min-h-0 overflow-hidden py-0 relative ring-0 shadow-none" size="default">
          <aside className="border-r flex flex-col shrink-0 w-64" aria-label="Scope">
            <Tabs className="flex-1 flex-col gap-0 min-h-0" data-orientation="horizontal" activationDirection="none">
              <div className="pr-3.75 pt-4 px-4 shrink-0">
                <TabsList className="bg-input/30 h-7 inset-ring inset-ring-ring/20 p-0 w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                  <TabsTrigger className="dark:data-active:border-ring/30 data-active:border-ring/50 data-active:shadow-xs h-full px-2.5 text-muted-foreground text-xs" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_18_" compositeItemActive="" aria-controls="base-ui-_r_1b_">
                    {"Security"}
                  </TabsTrigger>
                  <TabsTrigger className="dark:data-active:border-ring/30 data-active:border-ring/50 data-active:shadow-xs h-full px-2.5 text-muted-foreground text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_19_">
                    {"Assets"}
                  </TabsTrigger>
                  <TabsTrigger className="dark:data-active:border-ring/30 data-active:border-ring/50 data-active:shadow-xs h-full px-2.5 text-muted-foreground text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_1a_">
                    {"Events"}
                  </TabsTrigger>
                </TabsList>
              </div>
              <div className="[--scroll-fade-reveal:--spacing(8)] flex-1 min-h-0 no-scrollbar overflow-y-auto p-4 pr-3.75 scroll-fade-y scroll-py-10">
                <TabsContent data-orientation="horizontal" activationDirection="none" id="base-ui-_r_1b_" role="tabpanel" tabIndex={0} index="0" aria-labelledby="base-ui-_r_18_">
                  <SidebarProvider>
                  <SidebarGroup className="p-0" sidebar="group">
                    <SidebarProvider>
                    <SidebarGroupLabel className="h-5 pb-1 px-0 text-ring" sidebar="group-label">
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
                            <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:text-ring [&_svg]:shrink-0 [&_svg]:size-4 active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default data-active:[&>svg]:text-current data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group/menu-button hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground items-center not-data-active:hover:bg-transparent outline-hidden overflow-hidden peer/menu-button pr-0 px-0 text-muted-foreground text-xs w-full" type="button" sidebar="menu-button" size="default" panelOpen="" tabIndex={0} aria-disabled="false" aria-controls="base-ui-_r_1c_" aria-expanded="true">
                              <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none rotate-90 shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                              <svg className="lucide lucide-monitor size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MonitorIcon" tabler="IconDeviceDesktop" hugeicons="ComputerIcon" phosphor="MonitorIcon" remixicon="RiComputerLine" aria-hidden="true">
                                <rect width={20} height={14} x={2} y={3} rx={2}></rect>
                                <line x1={8} x2={16} y1={21} y2={21}></line>
                                <line x1={12} x2={12} y1={17} y2={21}></line>
                              </svg>
                              <span className="min-w-0 truncate">
                                {"Endpoints"}
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/20 border border-transparent dark:bg-success/15 dark:border-transparent dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.75 h-4.5 leading-none min-w-4.5 ml-auto outline-none pr-1.5 px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                <svg className="lucide lucide-shield-check size-2.5!" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                  <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                {"Stable"}
                              </Badge>
                            </CollapsibleTrigger>
                            </Collapsible>
                            <CollapsibleContent data-open="" id="base-ui-_r_1c_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                              <Sortable className="border-l cn-sidebar-menu-sub flex flex-col gap-0.5 min-w-0 ml-1.75 mx-0 pl-1 pr-0 py-0 translate-x-0" sidebar="menu-sub" dragging="false">
                                <SortableItem className="data-[dragging=true]:bg-background data-[dragging=true]:pointer-events-none group/menu-sub-item relative rounded-md text-sidebar-foreground" sidebar="menu-sub-item" value="devices" dragging="false" tabIndex={-1} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <Collapsible data-closed="">
                                    <Collapsible>
                                    <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:text-foreground items-center min-w-0 not-data-active:hover:bg-transparent outline-hidden overflow-hidden pr-6 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" tabIndex={0} aria-disabled="false" aria-expanded="false">
                                      <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                      <span className="shrink-0 size-4" aria-hidden="true"></span>
                                      <span className="min-w-0 truncate">
                                        {"Devices"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-foreground transition-shadow">
                                        {"248"}
                                      </Badge>
                                    </CollapsibleTrigger>
                                    </Collapsible>
                                  </Collapsible>
                                  <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground inline-flex items-center justify-center left-6 outline-none select-none shrink-0 text-ring top-1 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reorder Devices" dragging="false">
                                    <svg className="lucide lucide-grip-vertical size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
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
                                    <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:text-foreground items-center min-w-0 not-data-active:hover:bg-transparent outline-hidden overflow-hidden pr-12 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" panelOpen="" tabIndex={0} aria-disabled="false" aria-controls="base-ui-_r_1e_" aria-expanded="true">
                                      <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none rotate-90 shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                      <span className="shrink-0 size-4" aria-hidden="true"></span>
                                      <span className="min-w-0 truncate">
                                        {"Threats"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-foreground transition-shadow">
                                        {"12"}
                                      </Badge>
                                    </CollapsibleTrigger>
                                    </Collapsible>
                                    <CollapsibleContent data-open="" id="base-ui-_r_1e_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                                      <SidebarMenuSub className="border-l gap-0.5 ml-3.75 mx-0 pl-1 pr-0 py-0 translate-x-0" sidebar="menu-sub">
                                        <SidebarMenuSubItem sidebar="menu-sub-item">
                                          <SidebarMenuSubButton className="[&>svg]:text-ring aria-expanded:[&>svg]:text-current aria-expanded:text-foreground data-active:[&>svg]:text-current data-active:gap-2 data-active:text-foreground font-medium gap-1.5 hover:[&>svg]:text-current hover:text-foreground not-data-active:hover:bg-accent/70 text-muted-foreground translate-x-0 w-full" href="#" sidebar="menu-sub-button" size="sm">
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
                                          <SidebarMenuSubButton className="[&>svg]:text-ring aria-expanded:[&>svg]:text-current aria-expanded:text-foreground data-active:[&>svg]:text-current data-active:gap-2 data-active:text-foreground font-medium gap-1.5 hover:[&>svg]:text-current hover:text-foreground not-data-active:hover:bg-accent/70 text-muted-foreground translate-x-0 w-full" href="#" aria-current="page" sidebar="menu-sub-button" size="sm" data-active="">
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
                                          <SidebarMenuSubButton className="[&>svg]:text-ring aria-expanded:[&>svg]:text-current aria-expanded:text-foreground data-active:[&>svg]:text-current data-active:gap-2 data-active:text-foreground font-medium gap-1.5 hover:[&>svg]:text-current hover:text-foreground not-data-active:hover:bg-accent/70 text-muted-foreground translate-x-0 w-full" href="#" sidebar="menu-sub-button" size="sm">
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
                                          <SidebarMenuSubButton className="[&>svg]:text-ring aria-expanded:[&>svg]:text-current aria-expanded:text-foreground data-active:[&>svg]:text-current data-active:gap-2 data-active:text-foreground font-medium gap-1.5 hover:[&>svg]:text-current hover:text-foreground not-data-active:hover:bg-accent/70 text-muted-foreground translate-x-0 w-full" href="#" sidebar="menu-sub-button" size="sm">
                                            <svg className="lucide lucide-activity size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                            </svg>
                                            <span className="min-w-0 truncate">
                                              {"Anomalies"}
                                            </span>
                                          </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                      </SidebarMenuSub>
                                    </CollapsibleContent>
                                  </Collapsible>
                                  <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground inline-flex items-center justify-center left-6 outline-none select-none shrink-0 text-ring top-1 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reorder Threats" dragging="false">
                                    <svg className="lucide lucide-grip-vertical size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx={9} cy={12} r={1}></circle>
                                      <circle cx={9} cy={5} r={1}></circle>
                                      <circle cx={9} cy={19} r={1}></circle>
                                      <circle cx={15} cy={12} r={1}></circle>
                                      <circle cx={15} cy={5} r={1}></circle>
                                      <circle cx={15} cy={19} r={1}></circle>
                                    </svg>
                                  </SortableItemHandle>
                                  <SidebarMenuAction className="aspect-auto h-5 hover:bg-transparent hover:text-foreground px-0 right-0 text-muted-foreground text-xs w-auto" href="#" aria-label="Review Threats" sidebar="menu-action">
                                    {"Review"}
                                  </SidebarMenuAction>
                                </SortableItem>
                                <SortableItem className="data-[dragging=true]:bg-background data-[dragging=true]:pointer-events-none group/menu-sub-item relative rounded-md text-sidebar-foreground" sidebar="menu-sub-item" value="risks" dragging="false" tabIndex={-1} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <Collapsible data-closed="">
                                    <Collapsible>
                                    <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:text-foreground items-center min-w-0 not-data-active:hover:bg-transparent outline-hidden overflow-hidden pr-0 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" tabIndex={0} aria-disabled="false" aria-expanded="false">
                                      <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                      <span className="shrink-0 size-4" aria-hidden="true"></span>
                                      <span className="min-w-0 truncate">
                                        {"Risks"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-foreground transition-shadow">
                                        {"37"}
                                      </Badge>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-transparent dark:bg-destructive/15 dark:border-transparent dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 leading-none min-w-4 ml-auto outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-destructive transition-shadow">
                                        {"High"}
                                      </Badge>
                                    </CollapsibleTrigger>
                                    </Collapsible>
                                  </Collapsible>
                                  <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground inline-flex items-center justify-center left-6 outline-none select-none shrink-0 text-ring top-1 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reorder Risks" dragging="false">
                                    <svg className="lucide lucide-grip-vertical size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
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
                                    <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:text-foreground items-center min-w-0 not-data-active:hover:bg-transparent outline-hidden overflow-hidden pr-6 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" tabIndex={0} aria-disabled="false" aria-expanded="false">
                                      <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                      <span className="shrink-0 size-4" aria-hidden="true"></span>
                                      <span className="min-w-0 truncate">
                                        {"Policies"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-foreground transition-shadow">
                                        {"8"}
                                      </Badge>
                                    </CollapsibleTrigger>
                                    </Collapsible>
                                  </Collapsible>
                                  <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground inline-flex items-center justify-center left-6 outline-none select-none shrink-0 text-ring top-1 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reorder Policies" dragging="false">
                                    <svg className="lucide lucide-grip-vertical size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
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
                                    <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:text-foreground items-center min-w-0 not-data-active:hover:bg-transparent outline-hidden overflow-hidden pr-0 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" tabIndex={0} aria-disabled="false" aria-expanded="false">
                                      <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                      <span className="shrink-0 size-4" aria-hidden="true"></span>
                                      <span className="min-w-0 truncate">
                                        {"Quarantined"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-foreground transition-shadow">
                                        {"5"}
                                      </Badge>
                                    </CollapsibleTrigger>
                                    </Collapsible>
                                  </Collapsible>
                                  <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground inline-flex items-center justify-center left-6 outline-none select-none shrink-0 text-ring top-1 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reorder Quarantined" dragging="false">
                                    <svg className="lucide lucide-grip-vertical size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
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
                                    <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:text-foreground items-center min-w-0 not-data-active:hover:bg-transparent outline-hidden overflow-hidden pr-0 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" tabIndex={0} aria-disabled="false" aria-expanded="false">
                                      <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                      <span className="shrink-0 size-4" aria-hidden="true"></span>
                                      <span className="min-w-0 truncate">
                                        {"Tasks"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-foreground transition-shadow">
                                        {"7"}
                                      </Badge>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/20 border border-transparent dark:bg-success/15 dark:border-transparent dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 leading-none min-w-4 ml-auto outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                        {"Active"}
                                      </Badge>
                                    </CollapsibleTrigger>
                                    </Collapsible>
                                  </Collapsible>
                                  <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground inline-flex items-center justify-center left-6 outline-none select-none shrink-0 text-ring top-1 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reorder Tasks" dragging="false">
                                    <svg className="lucide lucide-grip-vertical size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
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
                            <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:text-ring [&_svg]:shrink-0 [&_svg]:size-4 active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default data-active:[&>svg]:text-current data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group/menu-button hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground items-center not-data-active:hover:bg-transparent outline-hidden overflow-hidden peer/menu-button pr-12 px-0 text-muted-foreground text-xs w-full" type="button" sidebar="menu-button" size="default" tabIndex={0} aria-disabled="false" aria-expanded="false">
                              <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                              <svg className="lucide lucide-shield size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldIcon" tabler="IconShield" hugeicons="Shield01Icon" phosphor="ShieldIcon" remixicon="RiShieldLine" aria-hidden="true">
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                              </svg>
                              <span className="min-w-0 truncate">
                                {"Identity & Access"}
                              </span>
                            </CollapsibleTrigger>
                            </Collapsible>
                            <Button className="absolute right-0 shadow-xs top-1" type="button" tabIndex={0} aria-label="Add to Identity & Access">
                              {"Add"}
                            </Button>
                          </Collapsible>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <Collapsible data-closed="">
                            <Collapsible>
                            <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:text-ring [&_svg]:shrink-0 [&_svg]:size-4 active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default data-active:[&>svg]:text-current data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group/menu-button hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground items-center not-data-active:hover:bg-transparent outline-hidden overflow-hidden peer/menu-button pr-0 px-0 text-muted-foreground text-xs w-full" type="button" sidebar="menu-button" size="default" tabIndex={0} aria-disabled="false" aria-expanded="false">
                              <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                              <svg className="lucide lucide-code size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                                <path d="m16 18 6-6-6-6"></path>
                                <path d="m8 6-6 6 6 6"></path>
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
                            <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:text-ring [&_svg]:shrink-0 [&_svg]:size-4 active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default data-active:[&>svg]:text-current data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group/menu-button hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground items-center not-data-active:hover:bg-transparent outline-hidden overflow-hidden peer/menu-button pr-16 px-0 text-muted-foreground text-xs w-full" type="button" sidebar="menu-button" size="default" tabIndex={0} aria-disabled="false" aria-expanded="false">
                              <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                              <svg className="lucide lucide-database size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                                <ellipse cx={12} cy={5} rx={9} ry={3}></ellipse>
                                <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                <path d="M3 12A9 3 0 0 0 21 12"></path>
                              </svg>
                              <span className="min-w-0 truncate">
                                {"Data Protection"}
                              </span>
                            </CollapsibleTrigger>
                            </Collapsible>
                            <a className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute cn-button cn-button-size-xs cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none right-0 select-none shadow-xs shrink-0 top-1 transition-all whitespace-nowrap" href="#" aria-label="Review Data Protection">
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
          </aside>
          <div className="@container flex-1 min-h-0 min-w-0 overflow-y-auto p-4">
            <div className="flex flex-col gap-4" aria-hidden="true">
              <div className="@lg:grid-cols-3 @md:grid-cols-2 gap-4 grid">
                <Card className="gap-0 inset-ring inset-ring-foreground/10 py-0 ring-0 rounded-lg" size="default">
                  <CardContent className="flex flex-col gap-4 py-4">
                    <div className="flex gap-4 items-center justify-between">
                      <div className="flex flex-1 gap-2.5 items-center min-w-0">
                        <Skeleton className="bg-input/50 shrink-0 size-7"></Skeleton>
                        <Skeleton className="bg-input/50 h-4 max-w-24 w-full"></Skeleton>
                      </div>
                      <Skeleton className="bg-input/50 rounded-lg shrink-0 size-8"></Skeleton>
                    </div>
                    <div className="flex gap-1 items-end min-w-0">
                      <Skeleton className="bg-input/50 h-6 shrink-0 w-12"></Skeleton>
                      <Skeleton className="bg-input/50 h-3.5 max-w-28 w-full"></Skeleton>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-input/20 border-t gap-4 justify-between pb-2.5 pt-2.25 rounded-b-lg">
                    <div className="-space-x-2 flex shrink-0">
                      <Skeleton className="bg-input/50 ring-1 ring-background ring-inset rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-1 ring-background ring-inset rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-1 ring-background ring-inset rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-1 ring-background ring-inset rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-1 ring-background ring-inset rounded-full size-6"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 h-3.5 max-w-24 w-full"></Skeleton>
                  </CardFooter>
                </Card>
                <Card className="gap-0 inset-ring inset-ring-foreground/10 py-0 ring-0 rounded-lg" size="default">
                  <CardContent className="flex flex-col gap-4 py-4">
                    <div className="flex gap-4 items-center justify-between">
                      <div className="flex flex-1 gap-2.5 items-center min-w-0">
                        <Skeleton className="bg-input/50 shrink-0 size-7"></Skeleton>
                        <Skeleton className="bg-input/50 h-4 max-w-24 w-full"></Skeleton>
                      </div>
                      <Skeleton className="bg-input/50 rounded-lg shrink-0 size-8"></Skeleton>
                    </div>
                    <div className="flex gap-1 items-end min-w-0">
                      <Skeleton className="bg-input/50 h-6 shrink-0 w-12"></Skeleton>
                      <Skeleton className="bg-input/50 h-3.5 max-w-28 w-full"></Skeleton>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-input/20 border-t gap-4 justify-between pb-2.5 pt-2.25 rounded-b-lg">
                    <div className="-space-x-2 flex shrink-0">
                      <Skeleton className="bg-input/50 ring-1 ring-background ring-inset rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-1 ring-background ring-inset rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-1 ring-background ring-inset rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-1 ring-background ring-inset rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-1 ring-background ring-inset rounded-full size-6"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 h-3.5 max-w-24 w-full"></Skeleton>
                  </CardFooter>
                </Card>
                <Card className="gap-0 inset-ring inset-ring-foreground/10 py-0 ring-0 rounded-lg" size="default">
                  <CardContent className="flex flex-col gap-4 py-4">
                    <div className="flex gap-4 items-center justify-between">
                      <div className="flex flex-1 gap-2.5 items-center min-w-0">
                        <Skeleton className="bg-input/50 shrink-0 size-7"></Skeleton>
                        <Skeleton className="bg-input/50 h-4 max-w-24 w-full"></Skeleton>
                      </div>
                      <Skeleton className="bg-input/50 rounded-lg shrink-0 size-8"></Skeleton>
                    </div>
                    <div className="flex gap-1 items-end min-w-0">
                      <Skeleton className="bg-input/50 h-6 shrink-0 w-12"></Skeleton>
                      <Skeleton className="bg-input/50 h-3.5 max-w-28 w-full"></Skeleton>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-input/20 border-t gap-4 justify-between pb-2.5 pt-2.25 rounded-b-lg">
                    <div className="-space-x-2 flex shrink-0">
                      <Skeleton className="bg-input/50 ring-1 ring-background ring-inset rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-1 ring-background ring-inset rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-1 ring-background ring-inset rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-1 ring-background ring-inset rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-1 ring-background ring-inset rounded-full size-6"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 h-3.5 max-w-24 w-full"></Skeleton>
                  </CardFooter>
                </Card>
              </div>
              <div className="@lg:grid-cols-3 @md:grid-cols-2 gap-4 grid">
                <Card className="inset-ring inset-ring-foreground/10 ring-0 shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-2 h-65">
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-0 mt-4"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="inset-ring inset-ring-foreground/10 ring-0 shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-2 h-65">
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-0 mt-4"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="inset-ring inset-ring-foreground/10 ring-0 shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-2 h-65">
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-0 mt-4"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="inset-ring inset-ring-foreground/10 ring-0 shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-2 h-65">
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-0 mt-4"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="inset-ring inset-ring-foreground/10 ring-0 shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-2 h-65">
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-0 mt-4"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="inset-ring inset-ring-foreground/10 ring-0 shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-2 h-65">
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-0 mt-4"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="inset-ring inset-ring-foreground/10 ring-0 shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-2 h-65">
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-0 mt-4"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="inset-ring inset-ring-foreground/10 ring-0 shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-2 h-65">
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-0 mt-4"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="inset-ring inset-ring-foreground/10 ring-0 shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-2 h-65">
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-0 mt-4"></Skeleton>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </SidebarInset>
    </div>
    </SidebarProvider>
  )
}
