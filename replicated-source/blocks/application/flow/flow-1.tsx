import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import {
  ContextMenu,
  ContextMenuTrigger,
} from "@/registry/bases/base/ui/context-menu"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { Separator } from "@/registry/bases/base/ui/separator"
import { ToggleGroup } from "@/registry/bases/base/ui/toggle-group"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col h-svh w-full">
      <header className="border-b flex gap-2 h-12 items-center px-4 shrink-0">
        <Breadcrumb className="max-sm:hidden" aria-label="breadcrumb">
          <BreadcrumbList className="flex-nowrap">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Workflows
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator role="presentation" aria-hidden="true">
              <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </BreadcrumbSeparator>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="font-semibold min-w-0 text-sm truncate">
          Lead Routing
        </h1>
        <Separator className="data-vertical:self-center h-4 max-md:hidden" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
        <p className="flex gap-1.5 items-center max-md:sr-only min-w-0 text-muted-foreground text-xs">
          <span className="shrink-0 tabular-nums">
            5 steps, 4 connections
          </span>
          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
          <span className="flex gap-1.5 items-center shrink-0">
            <span className="sr-only">
              Edited 2h ago by Ines Marchetti
            </span>
            <Avatar className="size-4" size="default" aria-hidden="true">
              <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
            </Avatar>
            <span aria-hidden="true">
              2h ago
            </span>
          </span>
        </p>
        <div className="flex gap-2 items-center ms-auto shrink-0">
          <Popover>
          <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center max-md:hidden outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Keyboard shortcuts" baseUiClickTrigger="" id="base-ui-_r_2_" aria-haspopup="dialog" aria-expanded="false">
            <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <path d="M12 17h.01"></path>
            </svg>
          </PopoverTrigger>
          </Popover>
          <Button type="button" tabIndex="0">
            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            Add step
          </Button>
          <Button type="button" disabled="" tabIndex="0" disabled>
            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
            Update
          </Button>
          <DropdownMenu>
          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Workflow actions" aria-haspopup="menu" id="base-ui-_r_6_" aria-expanded="false">
            <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </DropdownMenuTrigger>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1 min-h-0 overflow-hidden relative">
        <div className="[--xy-attribution-background-color:transparent] [--xy-background-color:transparent] [--xy-background-pattern-color:var(--border)] [--xy-connectionline-stroke-width:1] [--xy-connectionline-stroke:var(--primary)] [--xy-controls-box-shadow:none] [--xy-controls-button-background-color-hover:var(--muted)] [--xy-controls-button-background-color:var(--card)] [--xy-controls-button-border-color:var(--border)] [--xy-controls-button-color-hover:var(--foreground)] [--xy-controls-button-color:var(--foreground)] [--xy-edge-label-background-color:var(--card)] [--xy-edge-label-color:var(--muted-foreground)] [--xy-edge-stroke-selected:var(--primary)] [--xy-edge-stroke-width:1] [--xy-edge-stroke:color-mix(in_oklab,var(--muted-foreground)_45%,var(--background))] [--xy-handle-background-color:var(--primary)] [--xy-handle-border-color:var(--card)] [--xy-minimap-background-color:var(--card)] [--xy-minimap-mask-background-color:color-mix(in_oklab,var(--muted)_70%,transparent)] [--xy-minimap-node-background-color:color-mix(in_oklab,var(--muted-foreground)_35%,transparent)] [--xy-selection-background-color:color-mix(in_oklab,var(--primary)_8%,transparent)] [--xy-selection-border:1px_dashed_var(--primary)] bg-muted/30 flex-1 min-h-0 relative">
          <div className="light react-flow" data-testid="rf__wrapper" role="application" style={{width: "100%", height: "100%", overflow: "hidden", position: "relative", zIndex: "0"}}>
            <div className="react-flow__renderer" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
              <div className="draggable react-flow__pane" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
                <div className="react-flow__container react-flow__viewport xyflow__viewport" style={{transform: "translate(70px, 91px) scale(1)"}}>
                  <div className="react-flow__edges">
                    <svg style={{zIndex: "0"}}>
                      <g className="animated nopan react-flow__edge react-flow__edge-labeled selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="trigger-filter" data-testid="rf__edge-trigger-filter" aria-label="Edge from trigger to filter" aria-describedby="react-flow__edge-desc-1">
                        <path className="motion-reduce:animate-none! react-flow__edge-path" id="trigger-filter" d="M243.5 201.5L263.5 201.5L270.5 201.5L270.5 201.5L277.5 201.5L297.5 201.5" fill="none" style={{strokeWidth: "1"}}></path>
                        <path className="react-flow__edge-interaction" d="M243.5 201.5L263.5 201.5L270.5 201.5L270.5 201.5L277.5 201.5L297.5 201.5" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="animated nopan react-flow__edge react-flow__edge-labeled selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="filter-enrich" data-testid="rf__edge-filter-enrich" aria-label="Edge from filter to enrich" aria-describedby="react-flow__edge-desc-1">
                        <path className="motion-reduce:animate-none! react-flow__edge-path" id="filter-enrich" d="M543.5 201.5L563.5 201.5L 567,201.5Q 570.5,201.5 570.5,198L 570.5,85Q 570.5,81.5 574,81.5L577.5 81.5L597.5 81.5" fill="none" style={{strokeWidth: "1"}}></path>
                        <path className="react-flow__edge-interaction" d="M543.5 201.5L563.5 201.5L 567,201.5Q 570.5,201.5 570.5,198L 570.5,85Q 570.5,81.5 574,81.5L577.5 81.5L597.5 81.5" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-labeled selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="filter-notify" data-testid="rf__edge-filter-notify" aria-label="Edge from filter to notify" aria-describedby="react-flow__edge-desc-1">
                        <path className="motion-reduce:animate-none! react-flow__edge-path" id="filter-notify" d="M543.5 201.5L563.5 201.5L 567,201.5Q 570.5,201.5 570.5,205L 570.5,318Q 570.5,321.5 574,321.5L577.5 321.5L597.5 321.5" fill="none" style={{strokeWidth: "1"}}></path>
                        <path className="react-flow__edge-interaction" d="M543.5 201.5L563.5 201.5L 567,201.5Q 570.5,201.5 570.5,205L 570.5,318Q 570.5,321.5 574,321.5L577.5 321.5L597.5 321.5" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="animated nopan react-flow__edge react-flow__edge-labeled selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="enrich-deal" data-testid="rf__edge-enrich-deal" aria-label="Edge from enrich to deal" aria-describedby="react-flow__edge-desc-1">
                        <path className="motion-reduce:animate-none! react-flow__edge-path" id="enrich-deal" d="M843.5 81.5L863.5 81.5L870.5 81.5L870.5 81.5L877.5 81.5L897.5 81.5" fill="none" style={{strokeWidth: "1"}}></path>
                        <path className="react-flow__edge-interaction" d="M843.5 81.5L863.5 81.5L870.5 81.5L870.5 81.5L877.5 81.5L897.5 81.5" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="react-flow__edgelabel-renderer">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 nodrag nopan outline-none px-1.25 py-0.5 style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow" style={{transform: "translate(-50%, -50%) translate(570.5px, 141.5px)"}}>
                      Yes
                    </Badge>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 nodrag nopan outline-none px-1.25 py-0.5 style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow" style={{transform: "translate(-50%, -50%) translate(570.5px, 261.5px)"}}>
                      No
                    </Badge>
                  </div>
                  <div className="react-flow__nodes" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
                    <div className="group/node react-flow__node react-flow__node-step selectable" data-id="trigger" data-testid="rf__node-trigger" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(0px, 160px)", pointerEvents: "all", visibility: "visible"}}>
                      <ContextMenu>
                      <ContextMenuTrigger className="block">
                        <Item className="bg-card data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring p-2 w-60" variant="outline" size="xs">
                          <IconTile variant="solid" size="sm">
                            <svg className="lucide lucide-webhook" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WebhookIcon" tabler="IconWebhook" hugeicons="WebhookIcon" phosphor="WebhooksLogoIcon" remixicon="RiWebhookLine" aria-hidden="true">
                              <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                              <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                              <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                            </svg>
                          </IconTile>
                          <ItemContent className="gap-0 min-w-0">
                            <ItemTitle className="leading-4 w-full">
                              <span className="truncate">
                                Form submitted
                              </span>
                            </ItemTitle>
                            <ItemDescription className="leading-4 line-clamp-1">
                              Webhook: demo.request
                            </ItemDescription>
                          </ItemContent>
                          <ItemFooter className="-mb-2 -mx-2 border-t gap-2 grow px-2 py-1.5">
                            <div className="flex gap-1.5 items-center min-w-0">
                              <Avatar className="size-4" size="default">
                                <AvatarImage alt="Ines Marchetti" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                0.2s
                              </span>
                            </div>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                              Success
                            </Badge>
                          </ItemFooter>
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-right source" data-nodeid="trigger" data-handlepos="right" data-id="1-trigger-null-source"></div>
                        </Item>
                      </ContextMenuTrigger>
                      </ContextMenu>
                    </div>
                    <div className="group/node react-flow__node react-flow__node-step selectable" data-id="filter" data-testid="rf__node-filter" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(300px, 160px)", pointerEvents: "all", visibility: "visible"}}>
                      <ContextMenu>
                      <ContextMenuTrigger className="block">
                        <Item className="bg-card data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring p-2 w-60" variant="outline" size="xs">
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-left target" data-nodeid="filter" data-handlepos="left" data-id="1-filter-null-target"></div>
                          <IconTile variant="outline" size="sm">
                            <svg className="lucide lucide-git-branch" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GitBranchIcon" tabler="IconGitBranch" hugeicons="GitBranchIcon" phosphor="GitBranchIcon" remixicon="RiGitBranchLine" aria-hidden="true">
                              <path d="M15 6a9 9 0 0 0-9 9V3"></path>
                              <circle cx="18" cy="6" r="3"></circle>
                              <circle cx="6" cy="18" r="3"></circle>
                            </svg>
                          </IconTile>
                          <ItemContent className="gap-0 min-w-0">
                            <ItemTitle className="leading-4 w-full">
                              <span className="truncate">
                                Plan is Enterprise
                              </span>
                            </ItemTitle>
                            <ItemDescription className="leading-4 line-clamp-1">
                              company.size &gt; 200
                            </ItemDescription>
                          </ItemContent>
                          <ItemFooter className="-mb-2 -mx-2 border-t gap-2 grow px-2 py-1.5">
                            <div className="flex gap-1.5 items-center min-w-0">
                              <Avatar className="size-4" size="default">
                                <AvatarImage alt="Ines Marchetti" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                0.1s
                              </span>
                            </div>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                              Success
                            </Badge>
                          </ItemFooter>
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-right source" data-nodeid="filter" data-handlepos="right" data-id="1-filter-null-source"></div>
                        </Item>
                      </ContextMenuTrigger>
                      </ContextMenu>
                    </div>
                    <div className="group/node react-flow__node react-flow__node-step selectable" data-id="enrich" data-testid="rf__node-enrich" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(600px, 40px)", pointerEvents: "all", visibility: "visible"}}>
                      <ContextMenu>
                      <ContextMenuTrigger className="block">
                        <Item className="bg-card data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring p-2 w-60" variant="outline" size="xs">
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-left target" data-nodeid="enrich" data-handlepos="left" data-id="1-enrich-null-target"></div>
                          <IconTile variant="outline" size="sm">
                            <svg className="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                              <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                              <path d="M3 12A9 3 0 0 0 21 12"></path>
                            </svg>
                          </IconTile>
                          <ItemContent className="gap-0 min-w-0">
                            <ItemTitle className="leading-4 w-full">
                              <span className="truncate">
                                Enrich company
                              </span>
                            </ItemTitle>
                            <ItemDescription className="leading-4 line-clamp-1">
                              Clearbit lookup
                            </ItemDescription>
                          </ItemContent>
                          <ItemFooter className="-mb-2 -mx-2 border-t gap-2 grow px-2 py-1.5">
                            <div className="flex gap-1.5 items-center min-w-0">
                              <Avatar className="size-4" size="default">
                                <AvatarImage alt="Tomas Lindqvist" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                8.0s
                              </span>
                            </div>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                              <svg className="lucide lucide-circle-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="m15 9-6 6"></path>
                                <path d="m9 9 6 6"></path>
                              </svg>
                              Failed
                            </Badge>
                          </ItemFooter>
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-right source" data-nodeid="enrich" data-handlepos="right" data-id="1-enrich-null-source"></div>
                        </Item>
                      </ContextMenuTrigger>
                      </ContextMenu>
                    </div>
                    <div className="group/node react-flow__node react-flow__node-step selectable" data-id="notify" data-testid="rf__node-notify" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(600px, 280px)", pointerEvents: "all", visibility: "visible"}}>
                      <ContextMenu>
                      <ContextMenuTrigger className="block">
                        <Item className="bg-card data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring p-2 w-60" variant="outline" size="xs">
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-left target" data-nodeid="notify" data-handlepos="left" data-id="1-notify-null-target"></div>
                          <IconTile variant="outline" size="sm">
                            <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                            </svg>
                          </IconTile>
                          <ItemContent className="gap-0 min-w-0">
                            <ItemTitle className="leading-4 w-full">
                              <span className="truncate">
                                Notify sales
                              </span>
                            </ItemTitle>
                            <ItemDescription className="leading-4 line-clamp-1">
                              Slack #inbound-leads
                            </ItemDescription>
                          </ItemContent>
                          <ItemFooter className="-mb-2 -mx-2 border-t gap-2 grow px-2 py-1.5">
                            <div className="flex gap-1.5 items-center min-w-0">
                              <Avatar className="size-4" size="default">
                                <AvatarImage alt="Hanna Berg" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                Not run
                              </span>
                            </div>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                                <path d="M5 12h14"></path>
                              </svg>
                              Skipped
                            </Badge>
                          </ItemFooter>
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-right source" data-nodeid="notify" data-handlepos="right" data-id="1-notify-null-source"></div>
                        </Item>
                      </ContextMenuTrigger>
                      </ContextMenu>
                    </div>
                    <div className="group/node react-flow__node react-flow__node-step selectable" data-id="deal" data-testid="rf__node-deal" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(900px, 40px)", pointerEvents: "all", visibility: "visible"}}>
                      <ContextMenu>
                      <ContextMenuTrigger className="block">
                        <Item className="bg-card data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring p-2 w-60" variant="outline" size="xs">
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-left target" data-nodeid="deal" data-handlepos="left" data-id="1-deal-null-target"></div>
                          <IconTile variant="outline" size="sm">
                            <svg className="lucide lucide-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                            </svg>
                          </IconTile>
                          <ItemContent className="gap-0 min-w-0">
                            <ItemTitle className="leading-4 w-full">
                              <span className="truncate">
                                Create deal
                              </span>
                            </ItemTitle>
                            <ItemDescription className="leading-4 line-clamp-1">
                              HubSpot pipeline: Inbound
                            </ItemDescription>
                          </ItemContent>
                          <ItemFooter className="-mb-2 -mx-2 border-t gap-2 grow px-2 py-1.5">
                            <div className="flex gap-1.5 items-center min-w-0">
                              <Avatar className="size-4" size="default">
                                <AvatarImage alt="Tomas Lindqvist" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                Not run
                              </span>
                            </div>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <svg className="lucide lucide-circle-dot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDotIcon" tabler="IconCircleDot" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiRecordCircleLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <circle cx="12" cy="12" r="1"></circle>
                              </svg>
                              Idle
                            </Badge>
                          </ItemFooter>
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-right source" data-nodeid="deal" data-handlepos="right" data-id="1-deal-null-source"></div>
                        </Item>
                      </ContextMenuTrigger>
                      </ContextMenu>
                    </div>
                  </div>
                  <div className="react-flow__viewport-portal"></div>
                </div>
              </div>
            </div>
            <svg className="react-flow__background" data-testid="rf__background" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
              <pattern id="pattern-1" x="22" y="19" width="24" height="24" patternUnits="userSpaceOnUse" patterntransform="translate(-12,-12)">
                <circle className="dots react-flow__background-pattern" cx="1" cy="1" r="1"></circle>
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-1)"></rect>
            </svg>
            <div className="bottom max-md:hidden react-flow__minimap react-flow__panel right" data-testid="rf__minimap">
              <svg className="react-flow__minimap-svg" width="200" height="150" viewBox="-102 -310.5 1344 1024" role="img" aria-labelledby="react-flow__minimap-desc-1">
                <title id="react-flow__minimap-desc-1">
                  Mini Map
                </title>
                <rect className="react-flow__minimap-node" x="0" y="160" rx="5" ry="5" width="240" height="83" shape-rendering="crispEdges"></rect>
                <rect className="react-flow__minimap-node" x="300" y="160" rx="5" ry="5" width="240" height="83" shape-rendering="crispEdges"></rect>
                <rect className="react-flow__minimap-node" x="600" y="40" rx="5" ry="5" width="240" height="83" shape-rendering="crispEdges"></rect>
                <rect className="react-flow__minimap-node" x="600" y="280" rx="5" ry="5" width="240" height="83" shape-rendering="crispEdges"></rect>
                <rect className="react-flow__minimap-node" x="900" y="40" rx="5" ry="5" width="240" height="83" shape-rendering="crispEdges"></rect>
                <path className="react-flow__minimap-mask" d={"M-134,-342.5h1408v1088h-1408z\n        M-70,-91h1280v585h-1280z"} fillRule="evenodd" pointer-events="none"></path>
              </svg>
            </div>
            <div className="bottom left m-6! react-flow__panel">
              <Card className="flex-row gap-1 items-center p-1" size="sm" role="group" aria-label="Canvas controls">
                <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" size="sm" spacing="0.5" aria-label="Canvas tool" style={{"--gap": "0.5"}}>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-group-item cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] focus-visible:z-10 focus:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 shrink-0 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="0" aria-pressed="false" variant="default" size="sm" spacing="0.5" aria-label="Select" id="base-ui-_r_9_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-mouse-pointer-2 lucide-mouse-pointer2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MousePointer2Icon" tabler="IconPointer" hugeicons="Cursor01Icon" phosphor="CursorIcon" remixicon="RiCursorLine" aria-hidden="true">
                      <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-group-item cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] focus-visible:z-10 focus:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 shrink-0 whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="-1" aria-pressed="true" variant="default" size="sm" spacing="0.5" aria-label="Pan" id="base-ui-_r_c_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-hand" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HandIcon" tabler="IconHandStop" hugeicons="HandIcon" phosphor="HandIcon" remixicon="RiHand" aria-hidden="true">
                      <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></path>
                      <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></path>
                      <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path>
                      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </ToggleGroup>
                <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                <div className="flex gap-0.5 items-center" role="group" aria-label="Zoom">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Zoom out" id="base-ui-_r_f_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 tabular-nums transition-all w-12 whitespace-nowrap" type="button" tabIndex="0" aria-label="Zoom level 100%" aria-haspopup="menu" id="base-ui-_r_j_" aria-expanded="false">
                    100%
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Zoom in" id="base-ui-_r_m_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </div>
                <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                <div className="flex gap-0.5 items-center" role="group" aria-label="History">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" disabled="" tabIndex="0" disabled aria-label="Undo" id="base-ui-_r_o_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-undo-2 lucide-undo2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Undo2Icon" tabler="IconArrowBackUp" hugeicons="Undo02Icon" phosphor="ArrowUUpLeftIcon" remixicon="RiArrowGoBackLine" aria-hidden="true">
                      <path d="M9 14 4 9l5-5"></path>
                      <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" disabled="" tabIndex="0" disabled aria-label="Redo" id="base-ui-_r_q_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-redo-2 lucide-redo2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Redo2Icon" tabler="IconArrowForwardUp" hugeicons="Redo02Icon" phosphor="ArrowUUpRightIcon" remixicon="RiArrowGoForwardLine" aria-hidden="true">
                      <path d="m15 14 5-5-5-5"></path>
                      <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </div>
                <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:bg-primary aria-pressed:text-primary-foreground cn-toggle cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" tabIndex="0" aria-pressed="false" aria-label="Lock canvas" id="base-ui-_r_s_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-lock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </Card>
            </div>
            <div className="bottom center react-flow__attribution react-flow__panel" data-message="Please only hide this attribution when you are subscribed to React Flow Pro: https://reactflow.dev?utm_source=attribution">
              <a href="https://reactflow.dev?utm_source=attribution" target="_blank" rel="noopener noreferrer" aria-label="React Flow attribution">
                React Flow
              </a>
            </div>
            <div id="react-flow__node-desc-1" style={{display: "none"}}>
              Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.
            </div>
            <div id="react-flow__edge-desc-1" style={{display: "none"}}>
              Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.
            </div>
            <div id="react-flow__aria-live-1" aria-live="assertive" aria-atomic="true" style={{position: "absolute", width: "1px", height: "1px", margin: "-1px", border: "0px", padding: "0px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(100%)"}}></div>
          </div>
        </div>
        <div className="absolute border-s duration-300 ease-in-out end-0 inset-y-0 motion-reduce:transition-none transition-[translate] translate-x-full w-96 z-10" role="complementary" aria-label="Step details" aria-hidden="true" inert="">
          <div className="bg-card flex flex-col h-full">
            <header className="border-b flex gap-3 items-start px-4 py-3 shrink-0">
              <IconTile variant="outline" size="sm">
                <svg className="lucide lucide-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
              </IconTile>
              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                <h2 className="font-semibold text-sm truncate"></h2>
                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                    Action
                  </Badge>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="truncate"></span>
                </div>
              </div>
              <Button className="-me-1.5 -mt-1" type="button" tabIndex="0" aria-label="Close step details">
                <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </Button>
            </header>
            <div className="flex flex-1 flex-col gap-5 min-h-0 overflow-y-auto p-4">
              <section className="flex flex-col gap-3" aria-labelledby="step-facts">
                <h3 className="font-semibold text-sm" id="step-facts">
                  Step
                </h3>
                <dl className="flex flex-col gap-3">
                  <div className="flex gap-4 items-start justify-between text-sm">
                    <dt className="min-w-0 text-muted-foreground">
                      Detail
                    </dt>
                    <dd className="break-words font-medium min-w-0 tabular-nums text-right"></dd>
                  </div>
                  <div className="flex gap-4 items-start justify-between text-sm">
                    <dt className="min-w-0 text-muted-foreground">
                      Category
                    </dt>
                    <dd className="break-words font-medium min-w-0 tabular-nums text-right"></dd>
                  </div>
                  <div className="flex gap-4 items-start justify-between text-sm">
                    <dt className="min-w-0 text-muted-foreground">
                      Owner
                    </dt>
                    <dd className="break-words font-medium min-w-0 tabular-nums text-right"></dd>
                  </div>
                  <div className="flex gap-4 items-start justify-between text-sm">
                    <dt className="min-w-0 text-muted-foreground">
                      Incoming
                    </dt>
                    <dd className="break-words font-medium min-w-0 tabular-nums text-right">
                      0
                    </dd>
                  </div>
                  <div className="flex gap-4 items-start justify-between text-sm">
                    <dt className="min-w-0 text-muted-foreground">
                      Outgoing
                    </dt>
                    <dd className="break-words font-medium min-w-0 tabular-nums text-right">
                      0
                    </dd>
                  </div>
                </dl>
              </section>
              <section className="flex flex-col gap-3" aria-labelledby="run-facts">
                <h3 className="font-semibold text-sm" id="run-facts">
                  Last Run
                </h3>
                <dl className="flex flex-col gap-3">
                  <div className="flex gap-4 items-start justify-between text-sm">
                    <dt className="min-w-0 text-muted-foreground">
                      Status
                    </dt>
                    <dd className="break-words font-medium min-w-0 tabular-nums text-right"></dd>
                  </div>
                  <div className="flex gap-4 items-start justify-between text-sm">
                    <dt className="min-w-0 text-muted-foreground">
                      Duration
                    </dt>
                    <dd className="break-words font-medium min-w-0 tabular-nums text-right"></dd>
                  </div>
                  <div className="flex gap-4 items-start justify-between text-sm">
                    <dt className="min-w-0 text-muted-foreground">
                      Run
                    </dt>
                    <dd className="break-words font-medium min-w-0 tabular-nums text-right">
                      run_3f9a1c
                    </dd>
                  </div>
                </dl>
              </section>
            </div>
            <footer className="border-t p-4 shrink-0">
              <Button className="w-full" type="button" tabIndex="0">
                Edit step
              </Button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}
