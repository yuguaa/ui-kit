import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/bases/base/ui/resizable"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
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
import { Switch } from "@/registry/bases/base/ui/switch"
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
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"
import {
  SidebarMenuAction,
  SidebarMenuButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
  <>
    <Progress indeterminate="" aria-valuemax="100" aria-valuemin="0" aria-valuetext="indeterminate progress" role="progressbar" id="initial-loader" aria-hidden="true">
      <ProgressTrack className="bg-muted h-1 rounded-full" indeterminate="">
        <ProgressIndicator className="bg-primary" indeterminate=""></ProgressIndicator>
      </ProgressTrack>
      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}}>
        {"x"}
      </span>
    </Progress>
    <Progress className="[&_[data-slot=progress-track]]:bg-transparent [&_[data-slot=progress-track]]:h-0.5 [&_[data-slot=progress-track]]:rounded-none fixed inset-x-0 pointer-events-none top-0 transition-opacity z-100" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" aria-valuetext="0%" role="progressbar" aria-hidden="true" style={{opacity: "0", transitionDuration: "300ms"}}>
      <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
        <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0", height: "inherit", width: "0%"}}></ProgressIndicator>
      </ProgressTrack>
      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}}>
        {"x"}
      </span>
    </Progress>
    <SidebarProvider>
    <div className="bg-background flex group/sidebar-wrapper h-svh has-data-[variant=inset]:bg-sidebar min-h-0 text-foreground w-full" style={{"--sidebar-width": "16rem", "--sidebar-width-icon": "3rem"}}>
      <ResizablePanelGroup className="[&>[data-panel]:first-child]:duration-200 [&>[data-panel]:first-child]:ease-linear [&>[data-panel]:first-child]:transition-[flex] flex-1 group/panels has-[[data-separator=active]]:[&>[data-panel]:first-child]:transition-none max-md:[&>[data-panel]:first-child]:hidden! min-h-0" group="true" testid="_R_2cnplb_" id="_R_2cnplb_" style={{height: "100%", width: "100%", overflow: "hidden", display: "flex", flexDirection: "row", flexWrap: "nowrap", touchAction: "pan-y"}}>
        <ResizablePanel panel="true" testid="_R_qcnplb_" id="_R_qcnplb_" style={{minHeight: "0px", maxHeight: "100%", height: "auto", minWidth: "0px", maxWidth: "100%", width: "auto", border: "0px", padding: "0px", margin: "0px", display: "flex", flex: "19.39 1 0px", overflow: "visible"}}>
          <div className="min-h-0" style={{maxHeight: "100%", maxWidth: "100%", flexGrow: "1", overflow: "auto", touchAction: "pan-y"}}>
            <div className="group/fade h-full overflow-hidden relative" data-state="open">
              <div className="duration-200 group-data-[state=collapsed]/fade:opacity-0 group-data-[state=collapsed]/fade:pointer-events-none h-full transition-opacity" style={{width: "248px"}}>
                <SidebarProvider>
                <Sidebar>
                  <SidebarHeader className="gap-2 p-2" sidebar="header">
                    <div className="flex gap-2 items-center pt-1 px-1">
                      <a className="focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-lg" aria-label="NeUI Chat, go to conversations" href="/chat">
                        <Item className="[a]:hover:bg-muted bg-background border border-border gap-2.5 p-0 rounded-lg size-8 text-foreground text-sm" variant="default" size="default" aria-hidden="true">
                          <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                            <svg className="size-3" width={50} height={50} viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx={70.634} cy={29.8334} r={4.69799} fill="currentColor"></circle>
                              <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                            </svg>
                          </ItemMedia>
                        </Item>
                      </a>
                      <a className="flex-1 font-semibold min-w-0 outline-none text-sm tracking-tight truncate" tabIndex={-1} aria-hidden="true" href="/chat">
                        {"NeUI Chat"}
                      </a>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Search chats" id="base-ui-_R_7mmqcnplb_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m21 21-4.34-4.34"></path>
                          <circle cx={11} cy={11} r={8}></circle>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex={0} aria-label="Collapse sidebar">
                        <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                          <path d="M9 3v18"></path>
                        </svg>
                      </Button>
                    </div>
                  </SidebarHeader>
                  <SidebarProvider>
                  <SidebarContent className="gap-0 no-scrollbar overflow-hidden" sidebar="content">
                    <div className="px-2 py-3 shrink-0">
                      <Tabs className="gap-2" data-orientation="horizontal" activationDirection="none">
                        <TabsList className="bg-foreground/5 data-[variant=line]:rounded-none grid grid-cols-2 group-data-horizontal/tabs:h-8 p-[3px] rounded-lg w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                          <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md shadow-none! text-sm" type="button" data-active="" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_R_b6qcnplb_" compositeItemActive="">
                            {"Chats"}
                          </TabsTrigger>
                          <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md shadow-none! text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_R_j6qcnplb_">
                            {"Artifacts"}
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                    <SidebarProvider>
                    <SidebarMenu className="gap-0.5 px-2 shrink-0" sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" sidebar="menu-button" size="default" href="/projects">
                          <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                          </svg>
                          <span>
                            {"Projects"}
                          </span>
                          <SidebarMenuBadge className="absolute font-medium h-5 min-w-5 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground pointer-events-none px-1 right-1 rounded-md text-sidebar-foreground text-xs" sidebar="menu-badge">
                            {"5"}
                          </SidebarMenuBadge>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" sidebar="menu-button" size="default" href="/scheduled" data-active="">
                          <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="M12 6v6l4 2"></path>
                          </svg>
                          <span>
                            {"Scheduled"}
                          </span>
                          <SidebarMenuBadge className="absolute font-medium h-5 min-w-5 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground pointer-events-none px-1 right-1 rounded-md text-sidebar-foreground text-xs" sidebar="menu-badge">
                            {"3"}
                          </SidebarMenuBadge>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M14 17H5"></path>
                            <path d="M19 7h-9"></path>
                            <circle cx={17} cy={17} r={3}></circle>
                            <circle cx={7} cy={7} r={3}></circle>
                          </svg>
                          <span>
                            {"Settings"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                    </SidebarMenu>
                    </SidebarProvider>
                    <SidebarSeparator className="bg-sidebar-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px mx-0 my-3 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal" sidebar="separator"></SidebarSeparator>
                    <div className="flex-1 min-h-0 no-scrollbar overflow-auto">
                      <nav aria-label="Chat threads">
                        <Collapsible data-open="">
                          <SidebarProvider>
                          <SidebarGroup className="p-2 py-1" sidebar="group">
                            <Collapsible>
                            <CollapsibleTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 cursor-pointer duration-200 ease-linear flex focus-visible:ring-2 font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 group/collapsible h-8 hover:text-foreground items-center outline-hidden px-2 ring-sidebar-ring rounded-md shrink-0 text-sidebar-foreground/70 text-xs transition-[margin,opacity] w-full" sidebar="group-label" panelOpen="" role="button" tabIndex={0} aria-controls="base-ui-_R_1n6qcnplb_" aria-expanded="true">
                              {"Pinned"}
                              <span className="ms-auto tabular-nums text-muted-foreground text-xs">
                                {"3"}
                              </span>
                              <svg className="group-data-[panel-open]/collapsible:rotate-180 lucide lucide-chevron-down ms-1 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                            </CollapsibleTrigger>
                            </Collapsible>
                            <CollapsibleContent data-open="" id="base-ui-_R_1n6qcnplb_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                              <SidebarProvider>
                              <SidebarGroupContent className="text-sm" sidebar="group-content">
                                <SidebarProvider>
                                <SidebarMenu className="gap-0.5" sidebar="menu">
                                  <SidebarProvider>
                                  <SidebarMenuItem className="group/row" sidebar="menu-item">
                                    <SidebarProvider>
                                    <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground duration-200 ease-out focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-focus-within/menu-item:pe-14 group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-hover/menu-item:pe-14 h-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground max-md:pe-9 p-2 pe-2 ring-sidebar-ring rounded-md text-left text-sm transition-[padding]" type="button" sidebar="menu-button" size="default">
                                      <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-hover/row:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" data-overflowing="true">
                                        <span className="duration-150 ease-linear group-hover/row:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/row:duration-[2500ms] inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                          {"Stripe webhook 500s on charge.refunded"}
                                        </span>
                                      </span>
                                    </SidebarMenuButton>
                                    </SidebarProvider>
                                    <SidebarMenuAction className="[&>svg]:size-4 absolute aspect-square end-7 focus-visible:ring-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground max-md:hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 w-5" type="button" sidebar="menu-action" aria-label="Unpin Stripe webhook 500s on charge.refunded" aria-pressed="true">
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Stripe webhook 500s on charge.refunded" tabIndex={0} aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_6tln6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                    <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground duration-200 ease-out focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-focus-within/menu-item:pe-14 group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-hover/menu-item:pe-14 h-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground max-md:pe-9 p-2 pe-2 ring-sidebar-ring rounded-md text-left text-sm transition-[padding]" type="button" sidebar="menu-button" size="default">
                                      <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-hover/row:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden">
                                        <span className="duration-150 ease-linear group-hover/row:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/row:duration-[2500ms] inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                          {"Admin guide refresh"}
                                        </span>
                                      </span>
                                    </SidebarMenuButton>
                                    </SidebarProvider>
                                    <SidebarMenuAction className="[&>svg]:size-4 absolute aspect-square end-7 focus-visible:ring-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground max-md:hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 w-5" type="button" sidebar="menu-action" aria-label="Unpin Admin guide refresh" aria-pressed="true">
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Admin guide refresh" tabIndex={0} aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_6uln6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                    <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground duration-200 ease-out focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-focus-within/menu-item:pe-14 group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-hover/menu-item:pe-14 h-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground max-md:pe-9 p-2 pe-2 ring-sidebar-ring rounded-md text-left text-sm transition-[padding]" type="button" sidebar="menu-button" size="default">
                                      <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-hover/row:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden">
                                        <span className="duration-150 ease-linear group-hover/row:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/row:duration-[2500ms] inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                          {"Audit log export limits"}
                                        </span>
                                      </span>
                                    </SidebarMenuButton>
                                    </SidebarProvider>
                                    <SidebarMenuAction className="[&>svg]:size-4 absolute aspect-square end-7 focus-visible:ring-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground max-md:hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 w-5" type="button" sidebar="menu-action" aria-label="Unpin Audit log export limits" aria-pressed="true">
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Audit log export limits" tabIndex={0} aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_6vln6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                          <SidebarGroup className="p-2 py-1" sidebar="group">
                            <Collapsible>
                            <CollapsibleTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 cursor-pointer duration-200 ease-linear flex focus-visible:ring-2 font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 group/collapsible h-8 hover:text-foreground items-center outline-hidden px-2 ring-sidebar-ring rounded-md shrink-0 text-sidebar-foreground/70 text-xs transition-[margin,opacity] w-full" sidebar="group-label" panelOpen="" role="button" tabIndex={0} aria-controls="base-ui-_R_6n6qcnplb_" aria-expanded="true">
                              {"Today"}
                              <span className="ms-auto tabular-nums text-muted-foreground text-xs">
                                {"4"}
                              </span>
                              <svg className="group-data-[panel-open]/collapsible:rotate-180 lucide lucide-chevron-down ms-1 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                            </CollapsibleTrigger>
                            </Collapsible>
                            <CollapsibleContent data-open="" id="base-ui-_R_6n6qcnplb_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                              <SidebarProvider>
                              <SidebarGroupContent className="text-sm" sidebar="group-content">
                                <SidebarProvider>
                                <SidebarMenu className="gap-0.5" sidebar="menu">
                                  <SidebarProvider>
                                  <SidebarMenuItem className="group/row" sidebar="menu-item">
                                    <SidebarProvider>
                                    <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground duration-200 ease-out focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-focus-within/menu-item:pe-14 group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-hover/menu-item:pe-14 h-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground max-md:pe-9 p-2 pe-2 ring-sidebar-ring rounded-md text-left text-sm transition-[padding]" type="button" sidebar="menu-button" size="default">
                                      <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-hover/row:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" data-overflowing="true">
                                        <span className="duration-150 ease-linear group-hover/row:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/row:duration-[2500ms] inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                          {"Rate limit the export endpoint"}
                                        </span>
                                      </span>
                                    </SidebarMenuButton>
                                    </SidebarProvider>
                                    <SidebarMenuAction className="[&>svg]:size-4 absolute aspect-square end-7 focus-visible:ring-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground max-md:hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 w-5" type="button" sidebar="menu-action" aria-label="Pin Rate limit the export endpoint" aria-pressed="false">
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Rate limit the export endpoint" tabIndex={0} aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_3ed6n6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                    <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground duration-200 ease-out focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-focus-within/menu-item:pe-14 group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-hover/menu-item:pe-14 h-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground max-md:pe-9 p-2 pe-2 ring-sidebar-ring rounded-md text-left text-sm transition-[padding]" type="button" sidebar="menu-button" size="default">
                                      <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-hover/row:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" data-overflowing="true">
                                        <span className="duration-150 ease-linear group-hover/row:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/row:duration-[2500ms] inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                          {"Search returns stale titles after rename"}
                                        </span>
                                      </span>
                                    </SidebarMenuButton>
                                    </SidebarProvider>
                                    <SidebarMenuAction className="[&>svg]:size-4 absolute aspect-square end-7 focus-visible:ring-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground max-md:hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 w-5" type="button" sidebar="menu-action" aria-label="Pin Search returns stale titles after rename" aria-pressed="false">
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Search returns stale titles after rename" tabIndex={0} aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_3el6n6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                    <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground duration-200 ease-out focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-focus-within/menu-item:pe-14 group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-hover/menu-item:pe-14 h-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground max-md:pe-9 p-2 pe-2 ring-sidebar-ring rounded-md text-left text-sm transition-[padding]" type="button" sidebar="menu-button" size="default">
                                      <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-hover/row:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" data-overflowing="true">
                                        <span className="duration-150 ease-linear group-hover/row:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/row:duration-[2500ms] inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                          {"Retry budget for the events consumer"}
                                        </span>
                                      </span>
                                    </SidebarMenuButton>
                                    </SidebarProvider>
                                    <SidebarMenuAction className="[&>svg]:size-4 absolute aspect-square end-7 focus-visible:ring-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground max-md:hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 w-5" type="button" sidebar="menu-action" aria-label="Pin Retry budget for the events consumer" aria-pressed="false">
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Retry budget for the events consumer" tabIndex={0} aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_3et6n6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                    <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground duration-200 ease-out focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-focus-within/menu-item:pe-14 group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-hover/menu-item:pe-14 h-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground max-md:pe-9 p-2 pe-2 ring-sidebar-ring rounded-md text-left text-sm transition-[padding]" type="button" sidebar="menu-button" size="default">
                                      <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-hover/row:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden">
                                        <span className="duration-150 ease-linear group-hover/row:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/row:duration-[2500ms] inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                          {"Churn by plan tier"}
                                        </span>
                                      </span>
                                    </SidebarMenuButton>
                                    </SidebarProvider>
                                    <SidebarMenuAction className="[&>svg]:size-4 absolute aspect-square end-7 focus-visible:ring-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground max-md:hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 w-5" type="button" sidebar="menu-action" aria-label="Pin Churn by plan tier" aria-pressed="false">
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Churn by plan tier" tabIndex={0} aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_3f56n6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                          <SidebarGroup className="p-2 py-1" sidebar="group">
                            <Collapsible>
                            <CollapsibleTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 cursor-pointer duration-200 ease-linear flex focus-visible:ring-2 font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 group/collapsible h-8 hover:text-foreground items-center outline-hidden px-2 ring-sidebar-ring rounded-md shrink-0 text-sidebar-foreground/70 text-xs transition-[margin,opacity] w-full" sidebar="group-label" panelOpen="" role="button" tabIndex={0} aria-controls="base-ui-_R_an6qcnplb_" aria-expanded="true">
                              {"Yesterday"}
                              <span className="ms-auto tabular-nums text-muted-foreground text-xs">
                                {"5"}
                              </span>
                              <svg className="group-data-[panel-open]/collapsible:rotate-180 lucide lucide-chevron-down ms-1 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                            </CollapsibleTrigger>
                            </Collapsible>
                            <CollapsibleContent data-open="" id="base-ui-_R_an6qcnplb_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                              <SidebarProvider>
                              <SidebarGroupContent className="text-sm" sidebar="group-content">
                                <SidebarProvider>
                                <SidebarMenu className="gap-0.5" sidebar="menu">
                                  <SidebarProvider>
                                  <SidebarMenuItem className="group/row" sidebar="menu-item">
                                    <SidebarProvider>
                                    <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground duration-200 ease-out focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-focus-within/menu-item:pe-14 group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-hover/menu-item:pe-14 h-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground max-md:pe-9 p-2 pe-2 ring-sidebar-ring rounded-md text-left text-sm transition-[padding]" type="button" sidebar="menu-button" size="default">
                                      <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-hover/row:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" data-overflowing="true">
                                        <span className="duration-150 ease-linear group-hover/row:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/row:duration-[2500ms] inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                          {"Mobile onboarding revamp scope"}
                                        </span>
                                      </span>
                                    </SidebarMenuButton>
                                    </SidebarProvider>
                                    <SidebarMenuAction className="[&>svg]:size-4 absolute aspect-square end-7 focus-visible:ring-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground max-md:hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 w-5" type="button" sidebar="menu-action" aria-label="Pin Mobile onboarding revamp scope" aria-pressed="false">
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Mobile onboarding revamp scope" tabIndex={0} aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_3edan6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                    <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground duration-200 ease-out focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-focus-within/menu-item:pe-14 group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-hover/menu-item:pe-14 h-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground max-md:pe-9 p-2 pe-2 ring-sidebar-ring rounded-md text-left text-sm transition-[padding]" type="button" sidebar="menu-button" size="default">
                                      <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-hover/row:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" data-overflowing="true">
                                        <span className="duration-150 ease-linear group-hover/row:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/row:duration-[2500ms] inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                          {"Why is p95 latency up on eu-west"}
                                        </span>
                                      </span>
                                    </SidebarMenuButton>
                                    </SidebarProvider>
                                    <SidebarMenuAction className="[&>svg]:size-4 absolute aspect-square end-7 focus-visible:ring-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground max-md:hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 w-5" type="button" sidebar="menu-action" aria-label="Pin Why is p95 latency up on eu-west" aria-pressed="false">
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Why is p95 latency up on eu-west" tabIndex={0} aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_3elan6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                    <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground duration-200 ease-out focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-focus-within/menu-item:pe-14 group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-hover/menu-item:pe-14 h-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground max-md:pe-9 p-2 pe-2 ring-sidebar-ring rounded-md text-left text-sm transition-[padding]" type="button" sidebar="menu-button" size="default">
                                      <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-hover/row:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden">
                                        <span className="duration-150 ease-linear group-hover/row:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/row:duration-[2500ms] inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                          {"Compacting long transcripts"}
                                        </span>
                                      </span>
                                    </SidebarMenuButton>
                                    </SidebarProvider>
                                    <SidebarMenuAction className="[&>svg]:size-4 absolute aspect-square end-7 focus-visible:ring-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground max-md:hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 w-5" type="button" sidebar="menu-action" aria-label="Pin Compacting long transcripts" aria-pressed="false">
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Compacting long transcripts" tabIndex={0} aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_3etan6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                    <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground duration-200 ease-out focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-focus-within/menu-item:pe-14 group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-hover/menu-item:pe-14 h-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground max-md:pe-9 p-2 pe-2 ring-sidebar-ring rounded-md text-left text-sm transition-[padding]" type="button" sidebar="menu-button" size="default">
                                      <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-hover/row:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" data-overflowing="true">
                                        <span className="duration-150 ease-linear group-hover/row:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/row:duration-[2500ms] inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                          {"Cursor pagination for the audit log"}
                                        </span>
                                      </span>
                                    </SidebarMenuButton>
                                    </SidebarProvider>
                                    <SidebarMenuAction className="[&>svg]:size-4 absolute aspect-square end-7 focus-visible:ring-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground max-md:hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 w-5" type="button" sidebar="menu-action" aria-label="Pin Cursor pagination for the audit log" aria-pressed="false">
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Cursor pagination for the audit log" tabIndex={0} aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_3f5an6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                    <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground duration-200 ease-out focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-focus-within/menu-item:pe-14 group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-hover/menu-item:pe-14 h-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground max-md:pe-9 p-2 pe-2 ring-sidebar-ring rounded-md text-left text-sm transition-[padding]" type="button" sidebar="menu-button" size="default">
                                      <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-hover/row:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" data-overflowing="true">
                                        <span className="duration-150 ease-linear group-hover/row:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/row:duration-[2500ms] inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                          {"Feature flag cleanup after 3.4"}
                                        </span>
                                      </span>
                                    </SidebarMenuButton>
                                    </SidebarProvider>
                                    <SidebarMenuAction className="[&>svg]:size-4 absolute aspect-square end-7 focus-visible:ring-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground max-md:hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 w-5" type="button" sidebar="menu-action" aria-label="Pin Feature flag cleanup after 3.4" aria-pressed="false">
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Feature flag cleanup after 3.4" tabIndex={0} aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_3fdan6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                          <SidebarGroup className="p-2 py-1" sidebar="group">
                            <Collapsible>
                            <CollapsibleTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 cursor-pointer duration-200 ease-linear flex focus-visible:ring-2 font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 group/collapsible h-8 hover:text-foreground items-center outline-hidden px-2 ring-sidebar-ring rounded-md shrink-0 text-sidebar-foreground/70 text-xs transition-[margin,opacity] w-full" sidebar="group-label" panelOpen="" role="button" tabIndex={0} aria-controls="base-ui-_R_in6qcnplb_" aria-expanded="true">
                              {"Older"}
                              <span className="ms-auto tabular-nums text-muted-foreground text-xs">
                                {"1"}
                              </span>
                              <svg className="group-data-[panel-open]/collapsible:rotate-180 lucide lucide-chevron-down ms-1 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                            </CollapsibleTrigger>
                            </Collapsible>
                            <CollapsibleContent data-open="" id="base-ui-_R_in6qcnplb_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                              <SidebarProvider>
                              <SidebarGroupContent className="text-sm" sidebar="group-content">
                                <SidebarProvider>
                                <SidebarMenu className="gap-0.5" sidebar="menu">
                                  <SidebarProvider>
                                  <SidebarMenuItem className="group/row" sidebar="menu-item">
                                    <SidebarProvider>
                                    <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground duration-200 ease-out focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-focus-within/menu-item:pe-14 group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-hover/menu-item:pe-14 h-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground max-md:pe-9 p-2 pe-2 ring-sidebar-ring rounded-md text-left text-sm transition-[padding]" type="button" sidebar="menu-button" size="default">
                                      <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-hover/row:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" data-overflowing="true">
                                        <span className="duration-150 ease-linear group-hover/row:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/row:duration-[2500ms] inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                          {"Debounce on the search input"}
                                        </span>
                                      </span>
                                    </SidebarMenuButton>
                                    </SidebarProvider>
                                    <SidebarMenuAction className="[&>svg]:size-4 absolute aspect-square end-7 focus-visible:ring-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground max-md:hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 w-5" type="button" sidebar="menu-action" aria-label="Pin Debounce on the search input" aria-pressed="false">
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Debounce on the search input" tabIndex={0} aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_rtin6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                    </div>
                  </SidebarContent>
                  </SidebarProvider>
                  <SidebarFooter className="gap-2 p-2" sidebar="footer">
                    <SidebarProvider>
                    <SidebarMenu className="gap-0.5" sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-7 hover:bg-foreground/5 hover:text-foreground p-2 ring-sidebar-ring rounded-md text-left text-muted-foreground text-xs transition-[width,height,padding]" href="https://neui.io/docs" target="_blank" rel="noreferrer" sidebar="menu-button" size="sm">
                          <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 5v16"></path>
                            <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"></path>
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
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-7 hover:bg-foreground/5 hover:text-foreground p-2 ring-sidebar-ring rounded-md text-left text-muted-foreground text-xs transition-[width,height,padding]" href="https://neui.io/docs/changelog" target="_blank" rel="noreferrer" sidebar="menu-button" size="sm">
                          <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-7 hover:bg-foreground/5 hover:text-foreground p-2 ring-sidebar-ring rounded-md text-left text-muted-foreground text-xs transition-[width,height,padding]" href="https://neui.io/support" target="_blank" rel="noreferrer" sidebar="menu-button" size="sm">
                          <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                    <SidebarMenu className="gap-0" sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-background border border-border data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button h-auto hover:bg-accent hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden p-2 pe-1.5 peer/menu-button ps-1.5 py-1.5 ring-sidebar-ring rounded-lg text-left text-sm transition-[width,height,padding] w-full" type="button" sidebar="menu-button" size="default" aria-label="Open workspace menu" tabIndex={0} aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_3dmqcnplb_">
                          <div className="flex flex-1 gap-2 items-center min-w-0">
                            <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 in-data-[state=collapsed]:size-6! rounded-full size-8" size="default">
                              <AvatarImage className="rounded-full" alt="shadcn" src="/avatars/shadcn.jpg"></AvatarImage>
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
                          <svg className="lucide lucide-ellipsis ml-auto mr-1 opacity-50 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                  <SidebarHeader className="gap-2 p-2 pb-0 pt-2 px-2" sidebar="header">
                    <SidebarProvider>
                    <SidebarMenu className="gap-0.5" sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="[&>span:last-child]:sr-only active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md size-8 text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_uqqcnplb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Expand sidebar">
                          <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                  <SidebarContent className="gap-0 no-scrollbar overflow-hidden" sidebar="content">
                    <SidebarProvider>
                    <SidebarMenu className="gap-0.5 pt-2 px-2" sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="[&>span:last-child]:sr-only active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md size-8 text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_ubaqcnplb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="New chat">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                        <SidebarMenuButton className="[&>span:last-child]:sr-only active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md size-8 text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_ujaqcnplb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Search chats">
                          <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                        <SidebarMenuButton className="[&>span:last-child]:sr-only active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md size-8 text-left text-sm transition-[width,height,padding]" id="base-ui-_R_uraqcnplb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/projects">
                          <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                        <SidebarMenuButton className="[&>span:last-child]:sr-only active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md size-8 text-left text-sm transition-[width,height,padding]" id="base-ui-_R_v3aqcnplb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/scheduled" data-active="">
                          <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                        <SidebarMenuButton className="[&>span:last-child]:sr-only active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md size-8 text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_vbaqcnplb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M14 17H5"></path>
                            <path d="M19 7h-9"></path>
                            <circle cx={17} cy={17} r={3}></circle>
                            <circle cx={7} cy={7} r={3}></circle>
                          </svg>
                          <span>
                            {"Settings"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                    </SidebarMenu>
                    </SidebarProvider>
                    <SidebarSeparator className="bg-sidebar-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px mx-2 my-1 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal" sidebar="separator"></SidebarSeparator>
                    <SidebarProvider>
                    <SidebarMenu className="gap-0.5 px-2" sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&>span:last-child]:sr-only [&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button hover:bg-foreground/5 hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden p-2 peer/menu-button ring-sidebar-ring rounded-md size-8 text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_dfaqcnplb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Pinned chats" tabIndex={0} aria-haspopup="menu" aria-expanded="false">
                          <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                        <DropdownMenuTrigger className="[&>span:last-child]:sr-only [&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button hover:bg-foreground/5 hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden p-2 peer/menu-button ring-sidebar-ring rounded-md size-8 text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_dnaqcnplb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Recent chats" tabIndex={0} aria-haspopup="menu" aria-expanded="false">
                          <svg className="lucide lucide-message-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                  <SidebarFooter className="gap-1 p-2 pb-3 px-2" sidebar="footer">
                    <SidebarProvider>
                    <SidebarMenu className="gap-0.5" sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="[&>span:last-child]:sr-only active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md size-8 text-left text-sm transition-[width,height,padding]" href="https://neui.io/docs" target="_blank" rel="noreferrer" id="base-ui-_R_fbqqcnplb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 5v16"></path>
                            <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"></path>
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
                        <SidebarMenuButton className="[&>span:last-child]:sr-only active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md size-8 text-left text-sm transition-[width,height,padding]" href="https://neui.io/docs/changelog" target="_blank" rel="noreferrer" id="base-ui-_R_fjqqcnplb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                        <SidebarMenuButton className="[&>span:last-child]:sr-only active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md size-8 text-left text-sm transition-[width,height,padding]" href="https://neui.io/support" target="_blank" rel="noreferrer" id="base-ui-_R_frqqcnplb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                    <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Account and workspace menu" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_3dqqcnplb_">
                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="default">
                        <AvatarImage className="rounded-full" alt="" src="/avatars/shadcn.jpg"></AvatarImage>
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
        <ResizableHandle className="[&>div]:transition-colors [&[data-separator=active]>div]:bg-primary [&[data-separator=hover]>div]:bg-primary after:w-3 cursor-col-resize data-[separator=active]:bg-primary data-[separator=hover]:bg-primary hover:[&>div]:bg-primary hover:bg-primary max-md:hidden transition-colors" title="Drag to resize. Click to collapse." aria-orientation="vertical" separator="inactive" testid="_R_1acnplb_" id="_R_1acnplb_" role="separator" style={{flexBasis: "auto", flexGrow: "0", flexShrink: "0", touchAction: "none"}} tabIndex={0} aria-controls="_R_qcnplb_" aria-valuemax="28.147" aria-valuemin="3.753" aria-valuenow="19.39">
          <div className="bg-border flex h-6 rounded-lg shrink-0 w-1 z-10"></div>
        </ResizableHandle>
        <ResizablePanel panel="true" testid="_R_1qcnplb_" id="_R_1qcnplb_" style={{minHeight: "0px", maxHeight: "100%", height: "auto", minWidth: "0px", maxWidth: "100%", width: "auto", border: "0px", padding: "0px", margin: "0px", display: "flex", flex: "80.61 1 0px", overflow: "visible"}}>
          <div className="min-h-0" style={{maxHeight: "100%", maxWidth: "100%", flexGrow: "1", overflow: "auto", touchAction: "pan-y"}}>
            <div className="flex flex-col h-full min-h-0 min-w-0">
              <div className="hidden shrink-0">
                <header className="bg-background flex gap-2 h-12 items-center md:h-14 px-3 relative shrink-0 sm:px-4 z-10">
                  <div className="flex flex-1 gap-2 items-center min-w-0"></div>
                </header>
              </div>
              <main className="flex flex-1 flex-col min-h-0">
                <ResizablePanelGroup className="flex-1 min-h-0" group="true" testid="_R_bqcnplb_" id="_R_bqcnplb_" style={{height: "100%", width: "100%", overflow: "hidden", display: "flex", flexDirection: "row", flexWrap: "nowrap", touchAction: "pan-y"}}>
                  <ResizablePanel panel="true" testid="workspace-content" id="workspace-content" style={{minHeight: "0px", maxHeight: "100%", height: "auto", minWidth: "0px", maxWidth: "100%", width: "auto", border: "0px", padding: "0px", margin: "0px", display: "flex", flex: "100 1 0px", overflow: "visible"}}>
                    <div className="flex flex-col min-h-0" style={{maxHeight: "100%", maxWidth: "100%", flexGrow: "1", overflow: "auto", touchAction: "pan-y"}}>
                      <div className="[scrollbar-gutter:stable] flex flex-1 items-start justify-center md:px-10 min-h-0 overflow-y-auto px-4 py-5 sm:px-6">
                        <section className="flex flex-col gap-8 max-w-4xl w-full">
                          <header>
                            <h1 className="font-semibold text-xl tracking-tight">
                              {"Scheduled"}
                            </h1>
                            <p className="leading-relaxed max-w-2xl text-muted-foreground text-sm">
                              {"Tasks that run on a schedule and write their results into a chat"}
                            </p>
                          </header>
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-wrap gap-3 items-center justify-between">
                              <Select>
                              <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-44" type="button" tabIndex={0} id="base-ui-_r_11_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Filter tasks by state">
                                <SelectValue className="flex flex-1 text-left">
                                  {"All"}
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-full text-[0.625rem] transition-shadow">
                                    {"5"}
                                  </Badge>
                                </SelectValue>
                                <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m6 9 6 6 6-6"></path>
                                  {"▼"}
                                </svg>
                              </SelectTrigger>
                              </Select>
                              <input id="base-ui-_r_11_-hidden-input" tabIndex={-1} aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" role="button" tabIndex={0} href="/scheduled?new=1">
                                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                                {"New Task"}
                              </Button>
                            </div>
                            <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="default">
                              <CardContent className="p-0">
                                <div>
                                  <Item className="[a]:hover:bg-muted border border-border border-t-0 border-x-0 gap-2.5 last:border-b-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="default">
                                    <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center! translate-y-0!" variant="icon">
                                      <IconTile className="[&_svg]:opacity-70 [--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="elevated" size="default">
                                        <svg className="lucide lucide-gauge" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m12 14 4-4"></path>
                                          <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                                        </svg>
                                      </IconTile>
                                    </ItemMedia>
                                    <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                      <ItemTitle className="font-medium gap-2 leading-snug min-w-0 text-sm underline-offset-4 w-full">
                                        <a className="hover:underline min-w-0 truncate" href="/scheduled/b52a9f13-7d84-4c60-b1e7-3a9d5e2f8c46">
                                          {"Rate limit review"}
                                        </a>
                                        <span className="flex gap-1 items-center shrink-0">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                            {"Active"}
                                          </Badge>
                                        </span>
                                      </ItemTitle>
                                      <ItemDescription className="group-data-[size=xs]/item:text-xs leading-normal min-w-0 text-left text-muted-foreground text-sm">
                                        {"Daily, next run Tomorrow at 3:00 PM"}
                                      </ItemDescription>
                                    </ItemContent>
                                    <ItemActions className="gap-2 self-start sm:self-center">
                                      <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 rounded-full shrink-0" checked="" role="switch" tabIndex={0} id="base-ui-_r_14_" aria-checked="true" size="default" aria-label="Pause Rate limit review">
                                        <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                                      </Switch>
                                      <input id="base-ui-_r_15_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Rate limit review" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_1a_">
                                        <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <circle cx={12} cy={12} r={1}></circle>
                                          <circle cx={12} cy={5} r={1}></circle>
                                          <circle cx={12} cy={19} r={1}></circle>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </ItemActions>
                                  </Item>
                                </div>
                                <div>
                                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                                  <Item className="[a]:hover:bg-muted border border-border border-t-0 border-x-0 gap-2.5 last:border-b-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="default">
                                    <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center! translate-y-0!" variant="icon">
                                      <IconTile className="[&_svg]:opacity-70 [--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="elevated" size="default">
                                        <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 17h6v-6"></path>
                                          <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                        </svg>
                                      </IconTile>
                                    </ItemMedia>
                                    <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                      <ItemTitle className="font-medium gap-2 leading-snug min-w-0 text-sm underline-offset-4 w-full">
                                        <a className="hover:underline min-w-0 truncate" href="/scheduled/e3b0f6a2-9c41-4d7e-8f2b-1a5c7d9e4b30">
                                          {"Churn by plan tier"}
                                        </a>
                                        <span className="flex gap-1 items-center shrink-0">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                            {"Active"}
                                          </Badge>
                                        </span>
                                      </ItemTitle>
                                      <ItemDescription className="group-data-[size=xs]/item:text-xs leading-normal min-w-0 text-left text-muted-foreground text-sm">
                                        {"Weekly, next run October 22 at 9:00 AM"}
                                      </ItemDescription>
                                    </ItemContent>
                                    <ItemActions className="gap-2 self-start sm:self-center">
                                      <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 rounded-full shrink-0" checked="" role="switch" tabIndex={0} id="base-ui-_r_1d_" aria-checked="true" size="default" aria-label="Pause Churn by plan tier">
                                        <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                                      </Switch>
                                      <input id="base-ui-_r_1e_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Churn by plan tier" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_1j_">
                                        <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <circle cx={12} cy={12} r={1}></circle>
                                          <circle cx={12} cy={5} r={1}></circle>
                                          <circle cx={12} cy={19} r={1}></circle>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </ItemActions>
                                  </Item>
                                </div>
                                <div>
                                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                                  <Item className="[a]:hover:bg-muted border border-border border-t-0 border-x-0 gap-2.5 last:border-b-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="default">
                                    <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center! translate-y-0!" variant="icon">
                                      <IconTile className="[&_svg]:opacity-70 [--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="elevated" size="default">
                                        <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <rect width={20} height={12} x={2} y={6} rx={2}></rect>
                                          <circle cx={12} cy={12} r={2}></circle>
                                          <path d="M6 12h.01M18 12h.01"></path>
                                        </svg>
                                      </IconTile>
                                    </ItemMedia>
                                    <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                      <ItemTitle className="font-medium gap-2 leading-snug min-w-0 text-sm underline-offset-4 w-full">
                                        <a className="hover:underline min-w-0 truncate" href="/scheduled/4f8e1c07-a293-4b5d-8c76-2e9b0d3f6a15">
                                          {"Weekly billing digest"}
                                        </a>
                                        <span className="flex gap-1 items-center shrink-0">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                            {"Paused"}
                                          </Badge>
                                        </span>
                                      </ItemTitle>
                                      <ItemDescription className="group-data-[size=xs]/item:text-xs leading-normal min-w-0 text-left text-muted-foreground text-sm">
                                        {"Weekly, paused"}
                                      </ItemDescription>
                                    </ItemContent>
                                    <ItemActions className="gap-2 self-start sm:self-center">
                                      <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 rounded-full shrink-0" unchecked="" role="switch" tabIndex={0} id="base-ui-_r_1m_" aria-checked="false" size="default" aria-label="Resume Weekly billing digest">
                                        <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-unchecked=""></span>
                                      </Switch>
                                      <input id="base-ui-_r_1n_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Weekly billing digest" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_1s_">
                                        <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <circle cx={12} cy={12} r={1}></circle>
                                          <circle cx={12} cy={5} r={1}></circle>
                                          <circle cx={12} cy={19} r={1}></circle>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </ItemActions>
                                  </Item>
                                </div>
                                <div>
                                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                                  <Item className="[a]:hover:bg-muted border border-border border-t-0 border-x-0 gap-2.5 last:border-b-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="default">
                                    <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center! translate-y-0!" variant="icon">
                                      <IconTile className="[&_svg]:opacity-70 [--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="elevated" size="default">
                                        <svg className="lucide lucide-clipboard-list" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <rect width={8} height={4} x={8} y={2} rx={1} ry={1}></rect>
                                          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                          <path d="M12 11h4"></path>
                                          <path d="M12 16h4"></path>
                                          <path d="M8 11h.01"></path>
                                          <path d="M8 16h.01"></path>
                                        </svg>
                                      </IconTile>
                                    </ItemMedia>
                                    <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                      <ItemTitle className="font-medium gap-2 leading-snug min-w-0 text-sm underline-offset-4 w-full">
                                        <a className="hover:underline min-w-0 truncate" href="/scheduled/7c14d8e5-3b62-4a19-9e05-6f8b2c4d7a91">
                                          {"Audit log export limits"}
                                        </a>
                                        <span className="flex gap-1 items-center shrink-0">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                            {"Active"}
                                          </Badge>
                                        </span>
                                      </ItemTitle>
                                      <ItemDescription className="group-data-[size=xs]/item:text-xs leading-normal min-w-0 text-left text-muted-foreground text-sm">
                                        {"Monthly, next run November 14 at 9:00 AM"}
                                      </ItemDescription>
                                    </ItemContent>
                                    <ItemActions className="gap-2 self-start sm:self-center">
                                      <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 rounded-full shrink-0" checked="" role="switch" tabIndex={0} id="base-ui-_r_1v_" aria-checked="true" size="default" aria-label="Pause Audit log export limits">
                                        <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                                      </Switch>
                                      <input id="base-ui-_r_20_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Audit log export limits" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_25_">
                                        <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <circle cx={12} cy={12} r={1}></circle>
                                          <circle cx={12} cy={5} r={1}></circle>
                                          <circle cx={12} cy={19} r={1}></circle>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </ItemActions>
                                  </Item>
                                </div>
                                <div>
                                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                                  <Item className="[a]:hover:bg-muted border border-border border-t-0 border-x-0 gap-2.5 last:border-b-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="default">
                                    <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center! translate-y-0!" variant="icon">
                                      <IconTile className="[&_svg]:opacity-70 [--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="elevated" size="default">
                                        <svg className="lucide lucide-rocket" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                                          <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                                        </svg>
                                      </IconTile>
                                    </ItemMedia>
                                    <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                      <ItemTitle className="font-medium gap-2 leading-snug min-w-0 text-sm underline-offset-4 w-full">
                                        <a className="hover:underline min-w-0 truncate" href="/scheduled/9a6d2b48-5e71-4f03-a8c9-7b4e1d6f2035">
                                          {"Admin 3.4 release watch"}
                                        </a>
                                        <span className="flex gap-1 items-center shrink-0">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-secondary-foreground text-xs transition-shadow">
                                            {"Completed"}
                                          </Badge>
                                        </span>
                                      </ItemTitle>
                                      <ItemDescription className="group-data-[size=xs]/item:text-xs leading-normal min-w-0 text-left text-muted-foreground text-sm">
                                        {"Daily, completed"}
                                      </ItemDescription>
                                    </ItemContent>
                                    <ItemActions className="gap-2 self-start sm:self-center">
                                      <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 rounded-full shrink-0" disabled="" unchecked="" role="switch" tabIndex={-1} aria-disabled="true" id="base-ui-_r_28_" aria-checked="false" size="default" aria-label="Resume Admin 3.4 release watch">
                                        <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-disabled="" data-unchecked=""></span>
                                      </Switch>
                                      <input disabled id="base-ui-_r_29_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Admin 3.4 release watch" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_2e_">
                                        <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <circle cx={12} cy={12} r={1}></circle>
                                          <circle cx={12} cy={5} r={1}></circle>
                                          <circle cx={12} cy={19} r={1}></circle>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </ItemActions>
                                  </Item>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                          <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="default">
                            <CardHeader className="[.border-b]:pb-(--card-spacing) border-b gap-0 px-5 py-3 rounded-t-xl">
                              <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm leading-snug text-base">
                                {"Suggested Tasks"}
                              </CardTitle>
                              <CardDescription className="text-muted-foreground text-sm">
                                {"Ready to schedule"}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                              <div>
                                <Item className="[a]:hover:bg-muted border border-border border-t-0 border-x-0 gap-2.5 last:border-b-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="default">
                                  <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center! translate-y-0!" variant="icon">
                                    <IconTile className="[&_svg]:opacity-70 [--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="elevated" size="default">
                                      <svg className="lucide lucide-triangle-alert" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                        <path d="M12 9v4"></path>
                                        <path d="M12 17h.01"></path>
                                      </svg>
                                    </IconTile>
                                  </ItemMedia>
                                  <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                    <ItemTitle className="font-medium gap-2 leading-snug min-w-0 text-sm underline-offset-4">
                                      <span className="min-w-0 truncate">
                                        {"Incident recap"}
                                      </span>
                                    </ItemTitle>
                                    <ItemDescription className="group-data-[size=xs]/item:text-xs leading-normal min-w-0 text-left text-muted-foreground text-sm">
                                      {"Every Monday morning, summarise last week's incidents and what is still open"}
                                    </ItemDescription>
                                  </ItemContent>
                                  <ItemActions className="gap-2 self-start sm:self-center">
                                    <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem]" type="button" tabIndex={0} aria-label="Add Incident recap">
                                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                      </svg>
                                      {"Add"}
                                    </Button>
                                  </ItemActions>
                                </Item>
                              </div>
                              <div>
                                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                                <Item className="[a]:hover:bg-muted border border-border border-t-0 border-x-0 gap-2.5 last:border-b-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="default">
                                  <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center! translate-y-0!" variant="icon">
                                    <IconTile className="[&_svg]:opacity-70 [--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="elevated" size="default">
                                      <svg className="lucide lucide-tag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                                        <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                                      </svg>
                                    </IconTile>
                                  </ItemMedia>
                                  <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                    <ItemTitle className="font-medium gap-2 leading-snug min-w-0 text-sm underline-offset-4">
                                      <span className="min-w-0 truncate">
                                        {"Competitor pricing watch"}
                                      </span>
                                    </ItemTitle>
                                    <ItemDescription className="group-data-[size=xs]/item:text-xs leading-normal min-w-0 text-left text-muted-foreground text-sm">
                                      {"Monthly, check whether the plans we benchmark against have moved"}
                                    </ItemDescription>
                                  </ItemContent>
                                  <ItemActions className="gap-2 self-start sm:self-center">
                                    <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem]" type="button" tabIndex={0} aria-label="Add Competitor pricing watch">
                                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                      </svg>
                                      {"Add"}
                                    </Button>
                                  </ItemActions>
                                </Item>
                              </div>
                              <div>
                                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                                <Item className="[a]:hover:bg-muted border border-border border-t-0 border-x-0 gap-2.5 last:border-b-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="default">
                                  <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center! translate-y-0!" variant="icon">
                                    <IconTile className="[&_svg]:opacity-70 [--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="elevated" size="default">
                                      <svg className="lucide lucide-inbox" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                                        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                                      </svg>
                                    </IconTile>
                                  </ItemMedia>
                                  <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                    <ItemTitle className="font-medium gap-2 leading-snug min-w-0 text-sm underline-offset-4">
                                      <span className="min-w-0 truncate">
                                        {"Support backlog digest"}
                                      </span>
                                    </ItemTitle>
                                    <ItemDescription className="group-data-[size=xs]/item:text-xs leading-normal min-w-0 text-left text-muted-foreground text-sm">
                                      {"Each evening, the tickets that aged past their first reply target"}
                                    </ItemDescription>
                                  </ItemContent>
                                  <ItemActions className="gap-2 self-start sm:self-center">
                                    <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem]" type="button" tabIndex={0} aria-label="Add Support backlog digest">
                                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                      </svg>
                                      {"Add"}
                                    </Button>
                                  </ItemActions>
                                </Item>
                              </div>
                              <div>
                                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                                <Item className="[a]:hover:bg-muted border border-border border-t-0 border-x-0 gap-2.5 last:border-b-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="default">
                                  <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center! translate-y-0!" variant="icon">
                                    <IconTile className="[&_svg]:opacity-70 [--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="elevated" size="default">
                                      <svg className="lucide lucide-package" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                        <path d="M12 22V12"></path>
                                        <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                        <path d="m7.5 4.27 9 5.15"></path>
                                      </svg>
                                    </IconTile>
                                  </ItemMedia>
                                  <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                    <ItemTitle className="font-medium gap-2 leading-snug min-w-0 text-sm underline-offset-4">
                                      <span className="min-w-0 truncate">
                                        {"Dependency update check"}
                                      </span>
                                    </ItemTitle>
                                    <ItemDescription className="group-data-[size=xs]/item:text-xs leading-normal min-w-0 text-left text-muted-foreground text-sm">
                                      {"Weekly, which dependencies moved and which carry a security note"}
                                    </ItemDescription>
                                  </ItemContent>
                                  <ItemActions className="gap-2 self-start sm:self-center">
                                    <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem]" type="button" tabIndex={0} aria-label="Add Dependency update check">
                                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                      </svg>
                                      {"Add"}
                                    </Button>
                                  </ItemActions>
                                </Item>
                              </div>
                            </CardContent>
                          </Card>
                        </section>
                      </div>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </main>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
    </SidebarProvider>
    <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false" data-react-aria-top-layer="true"></section>
    <next-route-announcer style={{position: "absolute"}}></next-route-announcer>
  </>
  )
}
