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
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { FieldLabel } from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { ItemMedia } from "@/registry/bases/base/ui/item"
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
                            <svg className="size-3" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                              <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                            </svg>
                          </ItemMedia>
                        </Item>
                      </a>
                      <a className="flex-1 font-semibold min-w-0 outline-none text-sm tracking-tight truncate" tabIndex="-1" aria-hidden="true" href="/chat">
                        {"NeUI Chat"}
                      </a>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Search chats" id="base-ui-_R_7mmqcnplb_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m21 21-4.34-4.34"></path>
                          <circle cx="11" cy="11" r="8"></circle>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Collapse sidebar">
                        <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
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
                          <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md shadow-none! text-sm" type="button" data-active="" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_R_b6qcnplb_" compositeItemActive="">
                            {"Chats"}
                          </TabsTrigger>
                          <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md shadow-none! text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_R_j6qcnplb_">
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
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" sidebar="menu-button" size="default" data-active="">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                          <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" sidebar="menu-button" size="default" href="/scheduled">
                          <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
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
                          <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M14 17H5"></path>
                            <path d="M19 7h-9"></path>
                            <circle cx="17" cy="17" r="3"></circle>
                            <circle cx="7" cy="7" r="3"></circle>
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
                            <CollapsibleTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 cursor-pointer duration-200 ease-linear flex focus-visible:ring-2 font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 group/collapsible h-8 hover:text-foreground items-center outline-hidden px-2 ring-sidebar-ring rounded-md shrink-0 text-sidebar-foreground/70 text-xs transition-[margin,opacity] w-full" sidebar="group-label" panelOpen="" role="button" tabIndex="0" aria-controls="base-ui-_R_1n6qcnplb_" aria-expanded="true">
                              {"Pinned"}
                              <span className="ms-auto tabular-nums text-muted-foreground text-xs">
                                {"3"}
                              </span>
                              <svg className="group-data-[panel-open]/collapsible:rotate-180 lucide lucide-chevron-down ms-1 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Stripe webhook 500s on charge.refunded" tabIndex="0" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_6tln6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
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
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Admin guide refresh" tabIndex="0" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_6uln6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
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
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Audit log export limits" tabIndex="0" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_6vln6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
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
                            <CollapsibleTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 cursor-pointer duration-200 ease-linear flex focus-visible:ring-2 font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 group/collapsible h-8 hover:text-foreground items-center outline-hidden px-2 ring-sidebar-ring rounded-md shrink-0 text-sidebar-foreground/70 text-xs transition-[margin,opacity] w-full" sidebar="group-label" panelOpen="" role="button" tabIndex="0" aria-controls="base-ui-_R_6n6qcnplb_" aria-expanded="true">
                              {"Today"}
                              <span className="ms-auto tabular-nums text-muted-foreground text-xs">
                                {"4"}
                              </span>
                              <svg className="group-data-[panel-open]/collapsible:rotate-180 lucide lucide-chevron-down ms-1 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Rate limit the export endpoint" tabIndex="0" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_3ed6n6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
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
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Search returns stale titles after rename" tabIndex="0" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_3el6n6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
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
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Retry budget for the events consumer" tabIndex="0" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_3et6n6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
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
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Churn by plan tier" tabIndex="0" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_3f56n6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
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
                            <CollapsibleTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 cursor-pointer duration-200 ease-linear flex focus-visible:ring-2 font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 group/collapsible h-8 hover:text-foreground items-center outline-hidden px-2 ring-sidebar-ring rounded-md shrink-0 text-sidebar-foreground/70 text-xs transition-[margin,opacity] w-full" sidebar="group-label" panelOpen="" role="button" tabIndex="0" aria-controls="base-ui-_R_an6qcnplb_" aria-expanded="true">
                              {"Yesterday"}
                              <span className="ms-auto tabular-nums text-muted-foreground text-xs">
                                {"5"}
                              </span>
                              <svg className="group-data-[panel-open]/collapsible:rotate-180 lucide lucide-chevron-down ms-1 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Mobile onboarding revamp scope" tabIndex="0" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_3edan6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
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
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Why is p95 latency up on eu-west" tabIndex="0" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_3elan6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
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
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Compacting long transcripts" tabIndex="0" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_3etan6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
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
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Cursor pagination for the audit log" tabIndex="0" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_3f5an6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
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
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Feature flag cleanup after 3.4" tabIndex="0" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_3fdan6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
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
                            <CollapsibleTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 cursor-pointer duration-200 ease-linear flex focus-visible:ring-2 font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 group/collapsible h-8 hover:text-foreground items-center outline-hidden px-2 ring-sidebar-ring rounded-md shrink-0 text-sidebar-foreground/70 text-xs transition-[margin,opacity] w-full" sidebar="group-label" panelOpen="" role="button" tabIndex="0" aria-controls="base-ui-_R_in6qcnplb_" aria-expanded="true">
                              {"Older"}
                              <span className="ms-auto tabular-nums text-muted-foreground text-xs">
                                {"1"}
                              </span>
                              <svg className="group-data-[panel-open]/collapsible:rotate-180 lucide lucide-chevron-down ms-1 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                      <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 17v5"></path>
                                        <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                      </svg>
                                    </SidebarMenuAction>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Debounce on the search input" tabIndex="0" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_rtin6qcnplb_">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
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
                          <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                          <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                          <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
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
                        <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-background border border-border data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button h-auto hover:bg-accent hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden p-2 pe-1.5 peer/menu-button ps-1.5 py-1.5 ring-sidebar-ring rounded-lg text-left text-sm transition-[width,height,padding] w-full" type="button" sidebar="menu-button" size="default" aria-label="Open workspace menu" tabIndex="0" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_3dmqcnplb_">
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
                                    <lineargradient id="sb21-atlas" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                                      <stop offset="0%" stopColor="#6366f1"></stop>
                                      <stop offset="50%" stopColor="#8b5cf6"></stop>
                                      <stop offset="100%" stopColor="#ec4899"></stop>
                                    </lineargradient>
                                  </defs>
                                  <circle cx="14" cy="14" r="14" fill="url(#sb21-atlas)"></circle>
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
                          <svg className="lucide lucide-ellipsis ml-auto mr-1 opacity-50 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
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
                          <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
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
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                          <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m21 21-4.34-4.34"></path>
                            <circle cx="11" cy="11" r="8"></circle>
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
                          <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                        <SidebarMenuButton className="[&>span:last-child]:sr-only active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 hover:bg-foreground/5 hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md size-8 text-left text-sm transition-[width,height,padding]" id="base-ui-_R_v3aqcnplb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/scheduled">
                          <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
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
                          <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M14 17H5"></path>
                            <path d="M19 7h-9"></path>
                            <circle cx="17" cy="17" r="3"></circle>
                            <circle cx="7" cy="7" r="3"></circle>
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
                        <DropdownMenuTrigger className="[&>span:last-child]:sr-only [&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button hover:bg-foreground/5 hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden p-2 peer/menu-button ring-sidebar-ring rounded-md size-8 text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_dfaqcnplb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Pinned chats" tabIndex="0" aria-haspopup="menu" aria-expanded="false">
                          <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                        <DropdownMenuTrigger className="[&>span:last-child]:sr-only [&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none data-active:bg-foreground/10 data-active:font-medium data-active:hover:bg-foreground/12 data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button hover:bg-foreground/5 hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden p-2 peer/menu-button ring-sidebar-ring rounded-md size-8 text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_dnaqcnplb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Recent chats" tabIndex="0" aria-haspopup="menu" aria-expanded="false">
                          <svg className="lucide lucide-message-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                          <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                          <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                          <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
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
                    <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Account and workspace menu" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_3dqqcnplb_">
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
        <ResizableHandle className="[&>div]:transition-colors [&[data-separator=active]>div]:bg-primary [&[data-separator=hover]>div]:bg-primary after:w-3 cursor-col-resize data-[separator=active]:bg-primary data-[separator=hover]:bg-primary hover:[&>div]:bg-primary hover:bg-primary max-md:hidden transition-colors" title="Drag to resize. Click to collapse." aria-orientation="vertical" separator="inactive" testid="_R_1acnplb_" id="_R_1acnplb_" role="separator" style={{flexBasis: "auto", flexGrow: "0", flexShrink: "0", touchAction: "none"}} tabIndex="0" aria-controls="_R_qcnplb_" aria-valuemax="28.147" aria-valuemin="3.753" aria-valuenow="19.39">
          <div className="bg-border flex h-6 rounded-lg shrink-0 w-1 z-10"></div>
        </ResizableHandle>
        <ResizablePanel panel="true" testid="_R_1qcnplb_" id="_R_1qcnplb_" style={{minHeight: "0px", maxHeight: "100%", height: "auto", minWidth: "0px", maxWidth: "100%", width: "auto", border: "0px", padding: "0px", margin: "0px", display: "flex", flex: "80.61 1 0px", overflow: "visible"}}>
          <div className="min-h-0" style={{maxHeight: "100%", maxWidth: "100%", flexGrow: "1", overflow: "auto", touchAction: "pan-y"}}>
            <div className="flex flex-col h-full min-h-0 min-w-0">
              <div className="shrink-0">
                <header className="bg-background flex gap-2 h-12 items-center md:h-14 px-3 relative shrink-0 sm:px-4 z-10">
                  <div className="flex flex-1 gap-2 items-center min-w-0">
                    <h1 className="font-medium min-w-0 text-sm truncate">
                      {"New chat"}
                    </h1>
                  </div>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-secondary aria-expanded:text-secondary-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-secondary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-secondary-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Chat memory" aria-pressed="true" id="base-ui-_R_1tnqcnplb_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-bookmark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_1m7qcnplb_">
                    <span className="max-w-28 sm:max-w-none truncate">
                      {"Claude Sonnet 5"}
                    </span>
                    <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-end" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </header>
              </div>
              <main className="flex flex-1 flex-col min-h-0">
                <ResizablePanelGroup className="flex-1 min-h-0" group="true" testid="_R_bqcnplb_" id="_R_bqcnplb_" style={{height: "100%", width: "100%", overflow: "hidden", display: "flex", flexDirection: "row", flexWrap: "nowrap", touchAction: "pan-y"}}>
                  <ResizablePanel panel="true" testid="workspace-content" id="workspace-content" style={{minHeight: "0px", maxHeight: "100%", height: "auto", minWidth: "0px", maxWidth: "100%", width: "auto", border: "0px", padding: "0px", margin: "0px", display: "flex", flex: "100 1 0px", overflow: "visible"}}>
                    <div className="flex flex-col min-h-0" style={{maxHeight: "100%", maxWidth: "100%", flexGrow: "1", overflow: "auto", touchAction: "pan-y"}}>
                      <div className="flex-1 min-h-0 overflow-y-auto scrollbar">
                        <div className="flex flex-col justify-center max-w-2xl min-h-full mx-auto px-4 py-6 sm:px-6 w-full">
                          <div className="flex flex-col gap-1.5">
                            <h2 className="font-semibold text-2xl tracking-tight">
                              {"How can I help you?"}
                            </h2>
                            <p className="text-muted-foreground text-sm">
                              {"Ask about the codebase, the data, or this week's release."}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-5">
                            <Button className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-foreground/8 border border-foreground/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2.5 rounded-full text-[0.8rem] text-foreground transition-colors" type="button" tabIndex="0" aria-pressed="true">
                              <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                <path d="M20 2v4"></path>
                                <path d="M22 4h-4"></path>
                                <circle cx="4" cy="20" r="2"></circle>
                              </svg>
                              {"Create"}
                            </Button>
                            <Button className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-foreground/5 hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2.5 rounded-full text-[0.8rem] text-muted-foreground transition-colors" type="button" tabIndex="0" aria-pressed="false">
                              <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m21 21-4.34-4.34"></path>
                                <circle cx="11" cy="11" r="8"></circle>
                              </svg>
                              {"Explore"}
                            </Button>
                            <Button className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-foreground/5 hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2.5 rounded-full text-[0.8rem] text-muted-foreground transition-colors" type="button" tabIndex="0" aria-pressed="false">
                              <svg className="lucide lucide-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m16 18 6-6-6-6"></path>
                                <path d="m8 6-6 6 6 6"></path>
                              </svg>
                              {"Code"}
                            </Button>
                            <Button className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-foreground/5 hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2.5 rounded-full text-[0.8rem] text-muted-foreground transition-colors" type="button" tabIndex="0" aria-pressed="false">
                              <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 5v16"></path>
                                <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"></path>
                              </svg>
                              {"Learn"}
                            </Button>
                          </div>
                          <div className="flex flex-col mt-5">
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-b border-border border-t-0 border-x-0 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-3 group/prompt h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-transparent hover:text-foreground justify-start last:border-b-0 px-0 py-2.5 rounded-none text-sm text-start w-full whitespace-normal" type="button" tabIndex="0">
                              <span className="flex-1 min-w-0">
                                {"Draft the 3.4 release notes for admins"}
                              </span>
                              <svg className="group-hover/prompt:opacity-100 lucide lucide-corner-down-left opacity-40 shrink-0 size-4 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                                <path d="m9 10-5 5 5 5"></path>
                              </svg>
                            </Button>
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-b border-border border-t-0 border-x-0 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-3 group/prompt h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-transparent hover:text-foreground justify-start last:border-b-0 px-0 py-2.5 rounded-none text-sm text-start w-full whitespace-normal" type="button" tabIndex="0">
                              <span className="flex-1 min-w-0">
                                {"Write a rollback plan for the webhook fix"}
                              </span>
                              <svg className="group-hover/prompt:opacity-100 lucide lucide-corner-down-left opacity-40 shrink-0 size-4 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                                <path d="m9 10-5 5 5 5"></path>
                              </svg>
                            </Button>
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-b border-border border-t-0 border-x-0 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-3 group/prompt h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-transparent hover:text-foreground justify-start last:border-b-0 px-0 py-2.5 rounded-none text-sm text-start w-full whitespace-normal" type="button" tabIndex="0">
                              <span className="flex-1 min-w-0">
                                {"Rewrite the trial expiry email"}
                              </span>
                              <svg className="group-hover/prompt:opacity-100 lucide lucide-corner-down-left opacity-40 shrink-0 size-4 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                                <path d="m9 10-5 5 5 5"></path>
                              </svg>
                            </Button>
                          </div>
                          <div className="-mx-2 flex flex-col gap-1.5 mt-6">
                            <h3 className="font-medium px-2 text-muted-foreground text-xs">
                              {"Recent chats"}
                            </h3>
                            <div className="flex flex-col">
                              <Button className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:size-3.5 [&_svg]:text-muted-foreground active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start px-2 rounded-lg text-sm w-full" type="button" tabIndex="0">
                                <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M12 17v5"></path>
                                  <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                </svg>
                                <span className="flex-1 min-w-0 text-start truncate">
                                  {"Stripe webhook 500s on charge.refunded"}
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-mono font-normal gap-1 h-4.5 leading-none max-w-32 min-w-0 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-muted-foreground transition-shadow">
                                  <span className="min-w-0 truncate">
                                    {"stripe-webhook.ts"}
                                  </span>
                                </Badge>
                                <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-14">
                                  {"2m"}
                                </span>
                              </Button>
                              <Button className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:size-3.5 [&_svg]:text-muted-foreground active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start px-2 rounded-lg text-sm w-full" type="button" tabIndex="0">
                                <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M12 17v5"></path>
                                  <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                </svg>
                                <span className="flex-1 min-w-0 text-start truncate">
                                  {"Admin guide refresh"}
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-mono font-normal gap-1 h-4.5 leading-none max-w-32 min-w-0 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-muted-foreground transition-shadow">
                                  <span className="min-w-0 truncate">
                                    {"admin-notes-3.4.pdf"}
                                  </span>
                                </Badge>
                                <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-14">
                                  {"1h"}
                                </span>
                              </Button>
                              <Button className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:size-3.5 [&_svg]:text-muted-foreground active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start px-2 rounded-lg text-sm w-full" type="button" tabIndex="0">
                                <svg className="lucide lucide-pin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M12 17v5"></path>
                                  <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                </svg>
                                <span className="flex-1 min-w-0 text-start truncate">
                                  {"Audit log export limits"}
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-mono font-normal gap-1 h-4.5 leading-none max-w-32 min-w-0 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-muted-foreground transition-shadow">
                                  <span className="min-w-0 truncate">
                                    {"audit-export.csv"}
                                  </span>
                                </Badge>
                                <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-14">
                                  {"5h"}
                                </span>
                              </Button>
                              <Button className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:size-3.5 [&_svg]:text-muted-foreground active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start px-2 rounded-lg text-sm w-full" type="button" tabIndex="0">
                                <svg className="lucide lucide-message-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                </svg>
                                <span className="flex-1 min-w-0 text-start truncate">
                                  {"Rate limit the export endpoint"}
                                </span>
                                <span className="shrink-0 tabular-nums text-end text-muted-foreground text-xs w-14">
                                  {"12m"}
                                </span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 max-w-3xl mx-auto pb-2 px-4 sm:px-6 w-full">
                        <Frame className="[--frame-radius:var(--radius-xl)] w-full" spacing="sm">
                          <header className="bg-muted/40 flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py) rounded-t-[calc(var(--frame-radius)-1px)]">
                            <Collapsible data-closed="">
                              <div className="flex gap-2 items-center">
                                <Collapsible>
                                <CollapsibleTrigger className="flex flex-1 gap-1.5 group/notice hover:text-foreground items-center min-w-0 text-muted-foreground text-start text-xs" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                                  <svg className="lucide lucide-activity shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                  </svg>
                                  <span className="truncate">
                                    {"Context"}
                                    {"64"}
                                    {"percent full"}
                                    <span className="align-middle bg-muted-foreground/40 inline-block mx-1.5 rounded-full size-1" aria-hidden="true"></span>
                                    {"Plan limit resets Friday 12:00 PM"}
                                  </span>
                                  <svg className="group-data-[panel-open]/notice:rotate-180 lucide lucide-chevron-down shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="m6 9 6 6 6-6"></path>
                                  </svg>
                                </CollapsibleTrigger>
                                </Collapsible>
                                <Button className="[&_svg:not([class*='size-'])]:size-3 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),10px)] size-6 text-sm" type="button" tabIndex="0" aria-label="Dismiss usage notice">
                                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M18 6 6 18"></path>
                                    <path d="m6 6 12 12"></path>
                                  </svg>
                                </Button>
                              </div>
                            </Collapsible>
                          </header>
                          <FramePanel className="p-0">
                            <form className="relative">
                              <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:has-[:focus-visible]:border-ring has-[>[data-slot=field]]:has-[:focus-visible]:ring-3 has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/50 has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-muted/50 has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none sr-only text-sm" htmlFor="ai-chat-1-composer">
                                {"Message NeUI Chat"}
                              </FieldLabel>
                              <InputGroup className="bg-transparent border-0 border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-8 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 rounded-lg shadow-none transition-colors" role="group">
                                <textarea className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 field-sizing-content flex flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 max-h-48 md:text-sm min-h-16 outline-none placeholder:text-muted-foreground px-2.5 py-2 resize-none ring-0 rounded-none shadow-none text-base transition-colors w-full" id="ai-chat-1-composer" placeholder="Ask anything, or describe what you want changed..."></textarea>
                                <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 [.border-t]:pt-2 font-medium gap-1 group-data-[disabled=true]/input-group:opacity-50 group-has-[>input]/input-group:pb-2 h-auto pb-2 px-2.5 py-1.5 text-muted-foreground text-sm" role="group" data-align="block-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 group/button has-[>svg]:p-0 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-center justify-center outline-none p-0 rounded-lg select-none shadow-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" size="icon-sm" aria-label="Add context" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_6jqclubtrqcnplb_">
                                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="M12 5v14"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-secondary aria-expanded:text-secondary-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-secondary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] px-2.5 rounded-lg shadow-none text-secondary-foreground text-sm" type="button" tabIndex="0" size="sm" aria-pressed="true">
                                    <svg className="lucide lucide-brain" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                                      <path d="M12 18V5"></path>
                                      <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>
                                      <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                                      <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                                      <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                                      <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                                      <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                                      <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                                    </svg>
                                    {"Think"}
                                  </Button>
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg shadow-none text-sm" type="button" tabIndex="0" size="sm" aria-pressed="false">
                                    <svg className="lucide lucide-globe" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                      <path d="M2 12h20"></path>
                                    </svg>
                                    {"Search"}
                                  </Button>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 hidden leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-full sm:inline-flex text-[0.625rem] transition-shadow">
                                    <span className="bg-primary rounded-full size-1.5" aria-hidden="true"></span>
                                    {"1 tool"}
                                  </Badge>
                                  <div className="flex gap-1 items-center ms-auto">
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 group/button has-[>svg]:p-0 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-center justify-center outline-none p-0 rounded-lg select-none shadow-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" size="icon-sm" aria-label="Dictate message" aria-pressed="false" id="base-ui-_R_urqclubtrqcnplb_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-mic" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 19v3"></path>
                                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                        <rect x="9" y="2" width="6" height="13" rx="3"></rect>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 disabled:opacity-50 disabled:pointer-events-none flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 group/button has-[>svg]:p-0 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 items-center justify-center outline-none p-0 rounded-lg select-none shadow-none shrink-0 size-8 text-primary-foreground text-sm transition-all whitespace-nowrap" type="submit" tabIndex="0" size="icon-sm" aria-label="Send message" id="base-ui-_R_vbqclubtrqcnplb_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="m5 12 7-7 7 7"></path>
                                        <path d="M12 19V5"></path>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </div>
                                </InputGroupAddon>
                              </InputGroup>
                            </form>
                          </FramePanel>
                        </Frame>
                        <p className="text-center text-muted-foreground text-xs">
                          {"NeUI Chat can make mistakes. Check important info."}
                        </p>
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
    <section aria-label="Notifications alt+T" tabIndex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false" data-react-aria-top-layer="true"></section>
    <next-route-announcer style={{position: "absolute"}}></next-route-announcer>
  </>
  )
}
