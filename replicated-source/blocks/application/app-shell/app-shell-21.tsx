import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/bases/base/ui/resizable"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/registry/bases/base/ui/sidebar"
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
import { Item } from "@/registry/bases/radix/ui/item"
import {
  SidebarMenuAction,
  SidebarMenuButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <SidebarProvider>
    <div className="bg-background flex group/sidebar-wrapper h-svh has-data-[variant=inset]:bg-sidebar min-h-0 text-foreground w-full" style={{"--sidebar-width": "16rem", "--sidebar-width-icon": "3rem"}}>
      <ResizablePanelGroup className="[&>[data-panel]:first-child]:duration-200 [&>[data-panel]:first-child]:ease-linear [&>[data-panel]:first-child]:transition-[flex] flex-1 group/panels has-[[data-separator=active]]:[&>[data-panel]:first-child]:transition-none min-h-0" group="true" testid="_r_0_" id="_r_0_" style={{height: "100%", width: "100%", overflow: "hidden", display: "flex", flexFlow: "row", touchAction: "pan-y"}}>
        <ResizablePanel panel="true" testid="_r_1_" id="_r_1_" style={{minHeight: "0px", maxHeight: "100%", height: "auto", minWidth: "0px", maxWidth: "100%", width: "auto", border: "0px", padding: "0px", margin: "0px", display: "flex", flex: "19.39 1 0px", overflow: "visible"}}>
          <div className="min-h-0" style={{maxHeight: "100%", maxWidth: "100%", flexGrow: "1", overflow: "auto", touchAction: "pan-y"}}>
            <div className="group/fade h-full overflow-hidden relative" data-state="open">
              <div className="duration-200 group-data-[state=collapsed]/fade:opacity-0 group-data-[state=collapsed]/fade:pointer-events-none h-full transition-opacity" style={{width: "248px"}}>
                <SidebarProvider>
                <Sidebar>
                  <SidebarHeader className="gap-2" sidebar="header">
                    <div className="flex gap-2 items-center pt-1 px-1">
                      <Item className="bg-background border border-border p-0 size-8 text-foreground" variant="default" size="default" aria-hidden="true">
                        <ItemMedia className="size-auto" variant="icon">
                          <svg className="size-3" width={50} height={50} viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={70.634} cy={29.8334} r={4.69799} fill="currentColor"></circle>
                            <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                          </svg>
                        </ItemMedia>
                      </Item>
                      <span className="flex-1 font-semibold min-w-0 text-sm tracking-tight truncate">
                        {"NeUI Chat"}
                      </span>
                      <Button type="button" tabIndex={0} aria-label="Search chats">
                        <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                          <path d="m21 21-4.34-4.34"></path>
                          <circle cx={11} cy={11} r={8}></circle>
                        </svg>
                      </Button>
                      <Button type="button" tabIndex={0} aria-label="Collapse sidebar">
                        <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine" aria-hidden="true">
                          <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                          <path d="M9 3v18"></path>
                        </svg>
                      </Button>
                    </div>
                  </SidebarHeader>
                  <SidebarProvider>
                  <SidebarContent sidebar="content">
                    <div className="px-2 py-3">
                      <Tabs data-orientation="horizontal" activationDirection="none">
                        <TabsList className="bg-foreground/5 grid grid-cols-2 w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                          <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_2_" compositeItemActive="">
                            {"Chats"}
                          </TabsTrigger>
                          <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_3_">
                            {"Artifacts"}
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                    <SidebarProvider>
                    <SidebarMenu className="gap-0.5 px-2" sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="data-active:bg-foreground/10 data-active:hover:bg-foreground/12 hover:bg-foreground/5" type="button" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          <span>
                            {"New Chat"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="data-active:bg-foreground/10 data-active:hover:bg-foreground/12 hover:bg-foreground/5" type="button" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                          </svg>
                          <span>
                            {"Projects"}
                          </span>
                          <SidebarMenuBadge sidebar="menu-badge">
                            {"4"}
                          </SidebarMenuBadge>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="data-active:bg-foreground/10 data-active:hover:bg-foreground/12 hover:bg-foreground/5" type="button" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="M12 6v6l4 2"></path>
                          </svg>
                          <span>
                            {"Scheduled"}
                          </span>
                          <SidebarMenuBadge sidebar="menu-badge">
                            {"2"}
                          </SidebarMenuBadge>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="data-active:bg-foreground/10 data-active:hover:bg-foreground/12 hover:bg-foreground/5" type="button" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                            <path d="M14 17H5"></path>
                            <path d="M19 7h-9"></path>
                            <circle cx={17} cy={17} r={3}></circle>
                            <circle cx={7} cy={7} r={3}></circle>
                          </svg>
                          <span>
                            {"Customize"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                    </SidebarMenu>
                    </SidebarProvider>
                    <SidebarSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px mx-0 my-3 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal" sidebar="separator"></SidebarSeparator>
                    <nav aria-label="Chat threads">
                      <Collapsible data-open="">
                        <SidebarProvider>
                        <SidebarGroup className="py-1" sidebar="group">
                          <Collapsible>
                          <CollapsibleTrigger className="[&>svg]:shrink-0 cn-sidebar-group-label cursor-pointer flex group/collapsible hover:text-foreground items-center outline-hidden shrink-0 w-full" sidebar="group-label" panelOpen="" role="button" tabIndex={0} aria-controls="base-ui-_r_4_" aria-expanded="true">
                            {"Pinned"}
                            <span className="ms-auto tabular-nums text-muted-foreground text-xs">
                              {"2"}
                            </span>
                            <svg className="group-data-[panel-open]/collapsible:rotate-180 lucide lucide-chevron-down ms-1 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </CollapsibleTrigger>
                          </Collapsible>
                          <CollapsibleContent data-open="" id="base-ui-_r_4_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                            <SidebarProvider>
                            <SidebarGroupContent sidebar="group-content">
                              <SidebarProvider>
                              <SidebarMenu className="gap-0.5" sidebar="menu">
                                <SidebarProvider>
                                <SidebarMenuItem className="group/row" sidebar="menu-item">
                                  <SidebarProvider>
                                  <SidebarMenuButton className="data-active:bg-foreground/10 data-active:hover:bg-foreground/12 duration-200 ease-out group-focus-within/menu-item:pe-14 group-hover/menu-item:pe-14 hover:bg-foreground/5 max-md:pe-9 pe-2 transition-[padding]" type="button" sidebar="menu-button" size="default" data-active="">
                                    <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-hover/row:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" data-overflowing="true">
                                      <span className="duration-150 ease-linear group-hover/row:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/row:duration-[2500ms] inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                        {"Stripe webhook 500s on charge.refunded"}
                                      </span>
                                    </span>
                                  </SidebarMenuButton>
                                  </SidebarProvider>
                                  <SidebarMenuAction className="end-7 max-md:hidden" type="button" sidebar="menu-action" aria-label="Unpin Stripe webhook 500s on charge.refunded">
                                    <svg className="lucide lucide-pin-off" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PinOffIcon" tabler="IconPinnedOff" hugeicons="PinOffIcon" phosphor="PushPinSlashIcon" remixicon="RiUnpinLine" aria-hidden="true">
                                      <path d="M12 17v5"></path>
                                      <path d="M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89"></path>
                                      <path d="m2 2 20 20"></path>
                                      <path d="M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11"></path>
                                    </svg>
                                  </SidebarMenuAction>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Stripe webhook 500s on charge.refunded" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_8_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </SidebarMenuItem>
                                </SidebarProvider>
                                <SidebarProvider>
                                <SidebarMenuItem className="group/row" sidebar="menu-item">
                                  <SidebarProvider>
                                  <SidebarMenuButton className="data-active:bg-foreground/10 data-active:hover:bg-foreground/12 duration-200 ease-out group-focus-within/menu-item:pe-14 group-hover/menu-item:pe-14 hover:bg-foreground/5 max-md:pe-9 pe-2 transition-[padding]" type="button" sidebar="menu-button" size="default">
                                    <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-hover/row:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden">
                                      <span className="duration-150 ease-linear group-hover/row:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/row:duration-[2500ms] inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                        {"Q3 release notes draft"}
                                      </span>
                                    </span>
                                  </SidebarMenuButton>
                                  </SidebarProvider>
                                  <SidebarMenuAction className="end-7 max-md:hidden" type="button" sidebar="menu-action" aria-label="Unpin Q3 release notes draft">
                                    <svg className="lucide lucide-pin-off" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PinOffIcon" tabler="IconPinnedOff" hugeicons="PinOffIcon" phosphor="PushPinSlashIcon" remixicon="RiUnpinLine" aria-hidden="true">
                                      <path d="M12 17v5"></path>
                                      <path d="M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89"></path>
                                      <path d="m2 2 20 20"></path>
                                      <path d="M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11"></path>
                                    </svg>
                                  </SidebarMenuAction>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Q3 release notes draft" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_d_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </SidebarMenuItem>
                                </SidebarProvider>
                              </SidebarMenu>
                              </SidebarProvider>
                            </SidebarGroupContent>
                            </SidebarProvider>
                          </CollapsibleContent>
                        </SidebarGroup>
                        </SidebarProvider>
                      </Collapsible>
                      <Collapsible data-open="">
                        <SidebarProvider>
                        <SidebarGroup className="py-1" sidebar="group">
                          <Collapsible>
                          <CollapsibleTrigger className="[&>svg]:shrink-0 cn-sidebar-group-label cursor-pointer flex group/collapsible hover:text-foreground items-center outline-hidden shrink-0 w-full" sidebar="group-label" panelOpen="" role="button" tabIndex={0} aria-controls="base-ui-_r_f_" aria-expanded="true">
                            {"Recent"}
                            <span className="ms-auto tabular-nums text-muted-foreground text-xs">
                              {"6"}
                            </span>
                            <svg className="group-data-[panel-open]/collapsible:rotate-180 lucide lucide-chevron-down ms-1 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </CollapsibleTrigger>
                          </Collapsible>
                          <CollapsibleContent data-open="" id="base-ui-_r_f_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                            <SidebarProvider>
                            <SidebarGroupContent sidebar="group-content">
                              <SidebarProvider>
                              <SidebarMenu className="gap-0.5" sidebar="menu">
                                <SidebarProvider>
                                <SidebarMenuItem className="group/row" sidebar="menu-item">
                                  <SidebarProvider>
                                  <SidebarMenuButton className="data-active:bg-foreground/10 data-active:hover:bg-foreground/12 duration-200 ease-out group-focus-within/menu-item:pe-14 group-hover/menu-item:pe-14 hover:bg-foreground/5 max-md:pe-9 pe-2 transition-[padding]" type="button" sidebar="menu-button" size="default">
                                    <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-hover/row:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden">
                                      <span className="duration-150 ease-linear group-hover/row:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/row:duration-[2500ms] inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                        {"Stream chat responses"}
                                      </span>
                                    </span>
                                  </SidebarMenuButton>
                                  </SidebarProvider>
                                  <SidebarMenuAction className="end-7 max-md:hidden" type="button" sidebar="menu-action" aria-label="Pin Stream chat responses">
                                    <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Pin" tabler="IconPin" hugeicons="Pin02Icon" phosphor="PushPinIcon" remixicon="RiPushpinLine" aria-hidden="true">
                                      <path d="M12 17v5"></path>
                                      <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                    </svg>
                                  </SidebarMenuAction>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Stream chat responses" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_j_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </SidebarMenuItem>
                                </SidebarProvider>
                                <SidebarProvider>
                                <SidebarMenuItem className="group/row" sidebar="menu-item">
                                  <SidebarProvider>
                                  <SidebarMenuButton className="data-active:bg-foreground/10 data-active:hover:bg-foreground/12 duration-200 ease-out group-focus-within/menu-item:pe-14 group-hover/menu-item:pe-14 hover:bg-foreground/5 max-md:pe-9 pe-2 transition-[padding]" type="button" sidebar="menu-button" size="default">
                                    <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-hover/row:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden">
                                      <span className="duration-150 ease-linear group-hover/row:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/row:duration-[2500ms] inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                        {"Churn by plan tier"}
                                      </span>
                                    </span>
                                  </SidebarMenuButton>
                                  </SidebarProvider>
                                  <SidebarMenuAction className="end-7 max-md:hidden" type="button" sidebar="menu-action" aria-label="Pin Churn by plan tier">
                                    <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Pin" tabler="IconPin" hugeicons="Pin02Icon" phosphor="PushPinIcon" remixicon="RiPushpinLine" aria-hidden="true">
                                      <path d="M12 17v5"></path>
                                      <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                    </svg>
                                  </SidebarMenuAction>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Churn by plan tier" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_o_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </SidebarMenuItem>
                                </SidebarProvider>
                                <SidebarProvider>
                                <SidebarMenuItem className="group/row" sidebar="menu-item">
                                  <SidebarProvider>
                                  <SidebarMenuButton className="data-active:bg-foreground/10 data-active:hover:bg-foreground/12 duration-200 ease-out group-focus-within/menu-item:pe-14 group-hover/menu-item:pe-14 hover:bg-foreground/5 max-md:pe-9 pe-2 transition-[padding]" type="button" sidebar="menu-button" size="default">
                                    <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-hover/row:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" data-overflowing="true">
                                      <span className="duration-150 ease-linear group-hover/row:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/row:duration-[2500ms] inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                        {"Mobile onboarding revamp scope"}
                                      </span>
                                    </span>
                                  </SidebarMenuButton>
                                  </SidebarProvider>
                                  <SidebarMenuAction className="end-7 max-md:hidden" type="button" sidebar="menu-action" aria-label="Pin Mobile onboarding revamp scope">
                                    <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Pin" tabler="IconPin" hugeicons="Pin02Icon" phosphor="PushPinIcon" remixicon="RiPushpinLine" aria-hidden="true">
                                      <path d="M12 17v5"></path>
                                      <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                    </svg>
                                  </SidebarMenuAction>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Mobile onboarding revamp scope" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_t_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </SidebarMenuItem>
                                </SidebarProvider>
                                <SidebarProvider>
                                <SidebarMenuItem className="group/row" sidebar="menu-item">
                                  <SidebarProvider>
                                  <SidebarMenuButton className="data-active:bg-foreground/10 data-active:hover:bg-foreground/12 duration-200 ease-out group-focus-within/menu-item:pe-14 group-hover/menu-item:pe-14 hover:bg-foreground/5 max-md:pe-9 pe-2 transition-[padding]" type="button" sidebar="menu-button" size="default">
                                    <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-hover/row:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" data-overflowing="true">
                                      <span className="duration-150 ease-linear group-hover/row:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/row:duration-[2500ms] inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                        {"Why is p95 latency up on eu-west"}
                                      </span>
                                    </span>
                                  </SidebarMenuButton>
                                  </SidebarProvider>
                                  <SidebarMenuAction className="end-7 max-md:hidden" type="button" sidebar="menu-action" aria-label="Pin Why is p95 latency up on eu-west">
                                    <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Pin" tabler="IconPin" hugeicons="Pin02Icon" phosphor="PushPinIcon" remixicon="RiPushpinLine" aria-hidden="true">
                                      <path d="M12 17v5"></path>
                                      <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                    </svg>
                                  </SidebarMenuAction>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Why is p95 latency up on eu-west" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_12_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </SidebarMenuItem>
                                </SidebarProvider>
                                <SidebarProvider>
                                <SidebarMenuItem className="group/row" sidebar="menu-item">
                                  <SidebarProvider>
                                  <SidebarMenuButton className="data-active:bg-foreground/10 data-active:hover:bg-foreground/12 duration-200 ease-out group-focus-within/menu-item:pe-14 group-hover/menu-item:pe-14 hover:bg-foreground/5 max-md:pe-9 pe-2 transition-[padding]" type="button" sidebar="menu-button" size="default">
                                    <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-hover/row:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden">
                                      <span className="duration-150 ease-linear group-hover/row:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/row:duration-[2500ms] inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                        {"Rewrite the trial expiry email"}
                                      </span>
                                    </span>
                                  </SidebarMenuButton>
                                  </SidebarProvider>
                                  <SidebarMenuAction className="end-7 max-md:hidden" type="button" sidebar="menu-action" aria-label="Pin Rewrite the trial expiry email">
                                    <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Pin" tabler="IconPin" hugeicons="Pin02Icon" phosphor="PushPinIcon" remixicon="RiPushpinLine" aria-hidden="true">
                                      <path d="M12 17v5"></path>
                                      <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                    </svg>
                                  </SidebarMenuAction>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Rewrite the trial expiry email" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_17_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </SidebarMenuItem>
                                </SidebarProvider>
                                <SidebarProvider>
                                <SidebarMenuItem className="group/row" sidebar="menu-item">
                                  <SidebarProvider>
                                  <SidebarMenuButton className="data-active:bg-foreground/10 data-active:hover:bg-foreground/12 duration-200 ease-out group-focus-within/menu-item:pe-14 group-hover/menu-item:pe-14 hover:bg-foreground/5 max-md:pe-9 pe-2 transition-[padding]" type="button" sidebar="menu-button" size="default">
                                    <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-hover/row:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden">
                                      <span className="duration-150 ease-linear group-hover/row:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/row:duration-[2500ms] inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                        {"Postgres index for events table"}
                                      </span>
                                    </span>
                                  </SidebarMenuButton>
                                  </SidebarProvider>
                                  <SidebarMenuAction className="end-7 max-md:hidden" type="button" sidebar="menu-action" aria-label="Pin Postgres index for events table">
                                    <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Pin" tabler="IconPin" hugeicons="Pin02Icon" phosphor="PushPinIcon" remixicon="RiPushpinLine" aria-hidden="true">
                                      <path d="M12 17v5"></path>
                                      <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                    </svg>
                                  </SidebarMenuAction>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Postgres index for events table" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1c_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </SidebarMenuItem>
                                </SidebarProvider>
                              </SidebarMenu>
                              </SidebarProvider>
                            </SidebarGroupContent>
                            </SidebarProvider>
                          </CollapsibleContent>
                        </SidebarGroup>
                        </SidebarProvider>
                      </Collapsible>
                    </nav>
                  </SidebarContent>
                  </SidebarProvider>
                  <SidebarFooter className="gap-2" sidebar="footer">
                    <SidebarProvider>
                    <SidebarMenu className="gap-0.5" sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="data-active:bg-foreground/10 data-active:hover:bg-foreground/12 hover:bg-foreground/5 hover:text-foreground text-muted-foreground" type="button" sidebar="menu-button" size="sm">
                          <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                            <path d="M12 7v14"></path>
                            <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                          </svg>
                          <span>
                            {"Docs"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="data-active:bg-foreground/10 data-active:hover:bg-foreground/12 hover:bg-foreground/5 hover:text-foreground text-muted-foreground" type="button" sidebar="menu-button" size="sm">
                          <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <span>
                            {"What is new"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="data-active:bg-foreground/10 data-active:hover:bg-foreground/12 hover:bg-foreground/5 hover:text-foreground text-muted-foreground" type="button" sidebar="menu-button" size="sm">
                          <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                          <span>
                            {"Help"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                    </SidebarMenu>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenu sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-background border border-border cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default disabled:opacity-50 disabled:pointer-events-none flex group/menu-button h-auto hover:bg-accent items-center outline-hidden overflow-hidden pe-1.5 peer/menu-button ps-1.5 py-1.5 rounded-lg w-full" type="button" sidebar="menu-button" size="default" aria-label="Open workspace menu" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1h_" aria-expanded="false">
                          <div className="flex flex-1 gap-2 items-center min-w-0">
                            <Avatar className="in-data-[state=collapsed]:size-6! size-8" size="default">
                              <AvatarImage alt="shadcn" src="https://github.com/shadcn.png"></AvatarImage>
                            </Avatar>
                            <div className="flex flex-col min-w-0">
                              <span className="font-medium leading-4 text-[13px] truncate">
                                {"shadcn"}
                              </span>
                              <span className="flex gap-1 items-center leading-none min-w-0">
                                <svg className="block shrink-0 size-3!" viewBox="0 0 28 28" fill="none" width="100%" height="100%" aria-hidden="true">
                                  <defs>
                                    <lineargradient id="sb21-atlas" x1={0} y1={0} x2={28} y2={28} gradientUnits="userSpaceOnUse">
                                      <stop offset="0%" stopColor="#6366f1"></stop>
                                      <stop offset="50%" stopColor="#8b5cf6"></stop>
                                      <stop offset="100%" stopColor="#ec4899"></stop>
                                    </lineargradient>
                                  </defs>
                                  <circle cx={14} cy={14} r={14} fill="url(#sb21-atlas)"></circle>
                                </svg>
                                <span className="leading-none text-[11px] text-muted-foreground truncate">
                                  {"Atlas"}
                                </span>
                                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="leading-none shrink-0 text-[11px] text-muted-foreground">
                                  {"Max"}
                                </span>
                              </span>
                            </div>
                          </div>
                          <svg className="lucide lucide-ellipsis ml-auto mr-1 opacity-50 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={1}></circle>
                            <circle cx={19} cy={12} r={1}></circle>
                            <circle cx={5} cy={12} r={1}></circle>
                          </svg>
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                      </SidebarMenuItem>
                      </SidebarProvider>
                    </SidebarMenu>
                    </SidebarProvider>
                  </SidebarFooter>
                </Sidebar>
                </SidebarProvider>
              </div>
              <div className="absolute duration-200 group-data-[state=collapsed]/fade:opacity-100 group-data-[state=collapsed]/fade:pointer-events-auto inset-y-0 opacity-0 pointer-events-none start-0 transition-opacity w-12" inert="">
                <SidebarProvider>
                <Sidebar className="overflow-hidden">
                  <SidebarHeader className="pb-0 pt-2 px-2" sidebar="header">
                    <SidebarProvider>
                    <SidebarMenu className="gap-0.5" sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="[&>span:last-child]:sr-only data-active:bg-foreground/10 data-active:hover:bg-foreground/12 hover:bg-foreground/5 p-2 size-8" type="button" id="base-ui-_r_1k_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Expand sidebar">
                          <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine" aria-hidden="true">
                            <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                            <path d="M9 3v18"></path>
                          </svg>
                          <span>
                            {"Expand sidebar"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                    </SidebarMenu>
                    </SidebarProvider>
                  </SidebarHeader>
                  <SidebarProvider>
                  <SidebarContent className="overflow-hidden" sidebar="content">
                    <SidebarProvider>
                    <SidebarMenu className="gap-0.5 pt-2 px-2" sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="[&>span:last-child]:sr-only data-active:bg-foreground/10 data-active:hover:bg-foreground/12 hover:bg-foreground/5 p-2 size-8" type="button" id="base-ui-_r_1m_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="New chat">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          <span>
                            {"New Chat"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="[&>span:last-child]:sr-only data-active:bg-foreground/10 data-active:hover:bg-foreground/12 hover:bg-foreground/5 p-2 size-8" type="button" id="base-ui-_r_1o_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Search chats">
                          <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                            <path d="m21 21-4.34-4.34"></path>
                            <circle cx={11} cy={11} r={8}></circle>
                          </svg>
                          <span>
                            {"Search"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="[&>span:last-child]:sr-only data-active:bg-foreground/10 data-active:hover:bg-foreground/12 hover:bg-foreground/5 p-2 size-8" type="button" id="base-ui-_r_1q_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                          </svg>
                          <span>
                            {"Projects"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="[&>span:last-child]:sr-only data-active:bg-foreground/10 data-active:hover:bg-foreground/12 hover:bg-foreground/5 p-2 size-8" type="button" id="base-ui-_r_1s_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="M12 6v6l4 2"></path>
                          </svg>
                          <span>
                            {"Scheduled"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="[&>span:last-child]:sr-only data-active:bg-foreground/10 data-active:hover:bg-foreground/12 hover:bg-foreground/5 p-2 size-8" type="button" id="base-ui-_r_1u_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                            <path d="M14 17H5"></path>
                            <path d="M19 7h-9"></path>
                            <circle cx={17} cy={17} r={3}></circle>
                            <circle cx={7} cy={7} r={3}></circle>
                          </svg>
                          <span>
                            {"Customize"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                    </SidebarMenu>
                    </SidebarProvider>
                    <SidebarSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px mx-2 my-1 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal" sidebar="separator"></SidebarSeparator>
                    <SidebarProvider>
                    <SidebarMenu className="gap-0.5 px-2" sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&>span:last-child]:sr-only [&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default data-active:bg-foreground/10 data-active:hover:bg-foreground/12 disabled:opacity-50 disabled:pointer-events-none flex group/menu-button hover:bg-foreground/5 items-center outline-hidden overflow-hidden p-2 peer/menu-button size-8" type="button" id="base-ui-_r_22_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Pinned chats" tabIndex={0} aria-haspopup="menu" aria-expanded="false">
                          <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Pin" tabler="IconPin" hugeicons="Pin02Icon" phosphor="PushPinIcon" remixicon="RiPushpinLine" aria-hidden="true">
                            <path d="M12 17v5"></path>
                            <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                          </svg>
                          <span>
                            {"Pinned"}
                          </span>
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&>span:last-child]:sr-only [&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default data-active:bg-foreground/10 data-active:hover:bg-foreground/12 disabled:opacity-50 disabled:pointer-events-none flex group/menu-button hover:bg-foreground/5 items-center outline-hidden overflow-hidden p-2 peer/menu-button size-8" type="button" id="base-ui-_r_29_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Recent chats" tabIndex={0} aria-haspopup="menu" aria-expanded="false">
                          <svg className="lucide lucide-message-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                          </svg>
                          <span>
                            {"Recent"}
                          </span>
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                      </SidebarMenuItem>
                      </SidebarProvider>
                    </SidebarMenu>
                    </SidebarProvider>
                  </SidebarContent>
                  </SidebarProvider>
                  <SidebarFooter className="gap-1 pb-3 px-2" sidebar="footer">
                    <SidebarProvider>
                    <SidebarMenu className="gap-0.5" sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="[&>span:last-child]:sr-only data-active:bg-foreground/10 data-active:hover:bg-foreground/12 hover:bg-foreground/5 p-2 size-8" type="button" id="base-ui-_r_2e_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                            <path d="M12 7v14"></path>
                            <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                          </svg>
                          <span>
                            {"Docs"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="[&>span:last-child]:sr-only data-active:bg-foreground/10 data-active:hover:bg-foreground/12 hover:bg-foreground/5 p-2 size-8" type="button" id="base-ui-_r_2g_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <span>
                            {"What is new"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="[&>span:last-child]:sr-only data-active:bg-foreground/10 data-active:hover:bg-foreground/12 hover:bg-foreground/5 p-2 size-8" type="button" id="base-ui-_r_2i_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                          <span>
                            {"Help"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                    </SidebarMenu>
                    </SidebarProvider>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 size-8 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Account and workspace menu" aria-haspopup="menu" id="base-ui-_r_2m_" aria-expanded="false">
                      <Avatar className="size-7" size="default">
                        <AvatarImage alt="" src="https://github.com/shadcn.png"></AvatarImage>
                      </Avatar>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </SidebarFooter>
                </Sidebar>
                </SidebarProvider>
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle className="[&>div]:transition-colors [&[data-separator=active]>div]:bg-primary [&[data-separator=hover]>div]:bg-primary after:w-3 cursor-col-resize data-[separator=active]:bg-primary data-[separator=hover]:bg-primary hover:[&>div]:bg-primary hover:bg-primary transition-colors" title="Drag to resize. Click to collapse." aria-orientation="vertical" separator="inactive" testid="_r_2o_" id="_r_2o_" role="separator" tabIndex={0} style={{flex: "0 0 auto", touchAction: "none"}} aria-controls="_r_1_" aria-valuemax="28.147" aria-valuemin="3.753" aria-valuenow="19.39">
          <div className="cn-resizable-handle-icon flex shrink-0 z-10"></div>
        </ResizableHandle>
        <ResizablePanel panel="true" testid="_r_2p_" id="_r_2p_" style={{minHeight: "0px", maxHeight: "100%", height: "auto", minWidth: "0px", maxWidth: "100%", width: "auto", border: "0px", padding: "0px", margin: "0px", display: "flex", flex: "80.61 1 0px", overflow: "visible"}}>
          <div className="min-h-0" style={{maxHeight: "100%", maxWidth: "100%", flexGrow: "1", overflow: "auto", touchAction: "pan-y"}}>
            <div className="flex flex-1 flex-col h-full min-h-0 min-w-0">
              <header className="after:absolute after:bg-gradient-to-b after:from-background after:h-6 after:inset-x-0 after:pointer-events-none after:to-transparent after:top-full bg-background flex gap-2 h-12 items-center md:h-14 px-3 relative shrink-0 sm:px-4 z-10">
                <div className="flex flex-1 gap-2 items-center min-w-0">
                  <h1 className="font-medium min-w-0 text-sm truncate">
                    {"Stripe webhook 500s on charge.refunded"}
                  </h1>
                </div>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-secondary disabled:opacity-50 disabled:pointer-events-none group/button hidden items-center justify-center outline-none select-none shrink-0 sm:inline-flex transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Chat memory" aria-pressed="true" id="base-ui-_r_2r_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-bookmark" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BookmarkIcon" tabler="IconBookmark" hugeicons="Bookmark02Icon" phosphor="BookmarkSimpleIcon" remixicon="RiBookmarkLine" aria-hidden="true">
                    <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none gap-1.5 group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_2v_" aria-expanded="false">
                  <span className="max-w-28 sm:max-w-none truncate">
                    {"Claude Sonnet 5"}
                  </span>
                  <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Chat options" aria-haspopup="menu" id="base-ui-_r_34_" aria-expanded="false">
                  <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                    <circle cx={12} cy={12} r={1}></circle>
                    <circle cx={12} cy={5} r={1}></circle>
                    <circle cx={12} cy={19} r={1}></circle>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </header>
              <main className="flex flex-1 flex-col min-h-0">
                <div className="flex flex-1 flex-col min-h-0">
                  <div className="flex-1 min-h-0 overflow-y-auto scrollbar">
                    <div className="flex flex-col gap-8 max-w-3xl mx-auto px-4 py-6 sm:px-6 w-full" aria-hidden="true">
                      <div className="flex flex-col gap-2 items-end">
                        <Skeleton className="h-8 w-52"></Skeleton>
                      </div>
                      <div className="flex gap-3">
                        <Skeleton className="rounded-full shrink-0 size-8"></Skeleton>
                        <div className="flex flex-1 flex-col gap-2.5 min-w-0 pt-2">
                          <Skeleton className="h-3.5 w-full"></Skeleton>
                          <Skeleton className="h-3.5 w-11/12"></Skeleton>
                          <Skeleton className="h-3.5 w-2/3"></Skeleton>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-end">
                        <Skeleton className="h-8 w-72"></Skeleton>
                        <Skeleton className="h-8 w-36"></Skeleton>
                      </div>
                      <div className="flex gap-3">
                        <Skeleton className="rounded-full shrink-0 size-8"></Skeleton>
                        <div className="flex flex-1 flex-col gap-2.5 min-w-0 pt-2">
                          <Skeleton className="h-3.5 w-full"></Skeleton>
                          <Skeleton className="h-3.5 w-full"></Skeleton>
                          <Skeleton className="h-3.5 w-5/6"></Skeleton>
                          <Skeleton className="h-3.5 w-1/2"></Skeleton>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-end">
                        <Skeleton className="h-8 w-44"></Skeleton>
                      </div>
                      <div className="flex gap-3">
                        <Skeleton className="rounded-full shrink-0 size-8"></Skeleton>
                        <div className="flex flex-1 flex-col gap-2.5 min-w-0 pt-2">
                          <Skeleton className="h-3.5 w-full"></Skeleton>
                          <Skeleton className="h-3.5 w-10/12"></Skeleton>
                          <Skeleton className="h-3.5 w-3/5"></Skeleton>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-end">
                        <Skeleton className="h-8 w-64"></Skeleton>
                      </div>
                    </div>
                  </div>
                  <div className="pb-4 px-3 shrink-0 sm:px-4" aria-hidden="true">
                    <div className="flex flex-col gap-2 max-w-3xl mx-auto w-full">
                      <Skeleton className="h-28 w-full"></Skeleton>
                      <Skeleton className="h-3 mx-auto w-64"></Skeleton>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
    </SidebarProvider>
  )
}
