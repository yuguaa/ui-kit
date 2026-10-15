import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnContent,
  KanbanColumnHandle,
  KanbanItem,
} from "@/registry-neui/bases/radix/neui/kanban"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/bases/base/ui/card"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="flex justify-center p-6 sm:p-8 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Workflow Board
      </h1>
      <section className="flex flex-col gap-4 max-w-[1180px] mx-auto w-full">
        <header className="px-1 py-1" aria-label="Workflow Board toolbar">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <h2 className="font-semibold text-base truncate">
                Workflow Board
              </h2>
            </div>
            <div className="flex flex-wrap gap-2.5 items-center sm:justify-end sm:w-auto w-full" role="group" aria-label="Board actions">
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                </svg>
                Filters
              </Button>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-columns-3 lucide-columns3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Columns3Icon" tabler="IconColumns3" hugeicons="Layout07Icon" phosphor="ColumnsIcon" remixicon="RiLayoutColumnLine" data-icon="inline-start" aria-hidden="true">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M9 3v18"></path>
                  <path d="M15 3v18"></path>
                </svg>
                Columns
              </Button>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                New task
              </Button>
            </div>
          </div>
        </header>
        <Kanban className="max-w-full w-full" dragging="false">
          <ScrollArea className="pb-3 w-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
            <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-lg transition-[color,box-shadow] w-full" role="presentation" data-id="base-ui-_r_0_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
              <div className="min-w-max" role="presentation" style={{minWidth: "fit-content"}}>
                <KanbanBoard className="flex gap-5 items-start p-1 w-max">
                  <KanbanColumn className="self-start shrink-0 w-64" value="backlog" dragging="false">
                    <Card className="bg-muted/40 gap-0 group/column overflow-hidden p-0 w-full" size="sm" aria-label="Backlog: Queued for later">
                      <CardHeader className="flex flex-row gap-2 items-center min-h-9 px-2 py-2">
                        <span className="[&_svg]:shrink-0 [&_svg]:size-3.5 bg-zinc-100 border border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100 font-semibold gap-1.5 h-6.5 hover:opacity-90 inline-flex items-center justify-center px-2 rounded-sm shrink-0 text-[0.6875rem] text-zinc-800 tracking-normal transition-colors uppercase whitespace-nowrap">
                          <span className="[&>svg]:block [&>svg]:size-4 flex items-center justify-center leading-none shrink-0 size-4" aria-hidden="true">
                            <svg className="lucide lucide-circle-dot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDotIcon" tabler="IconCircleDot" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiRecordCircleLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <circle cx="12" cy="12" r="1"></circle>
                            </svg>
                          </span>
                          <span className="flex h-full items-center leading-none min-h-0">
                            <span className="flex items-center leading-none">
                              Backlog
                            </span>
                          </span>
                        </span>
                        <span className="font-medium h-6.5 inline-flex items-center leading-none self-center shrink-0 tabular-nums text-[0.6875rem] text-muted-foreground">
                          3
                        </span>
                        <div className="flex gap-1 group-focus-within/kanban-column:opacity-100 group-hover/kanban-column:opacity-100 items-center ml-auto opacity-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Collapse Backlog">
                            <svg className="lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                              <path d="m15 18-6-6 6-6"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Backlog column">
                            <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                              <circle cx="9" cy="12" r="1"></circle>
                              <circle cx="9" cy="5" r="1"></circle>
                              <circle cx="9" cy="19" r="1"></circle>
                              <circle cx="15" cy="12" r="1"></circle>
                              <circle cx="15" cy="5" r="1"></circle>
                              <circle cx="15" cy="19" r="1"></circle>
                            </svg>
                          </KanbanColumnHandle>
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-3 pb-2 pt-0 px-2">
                        <KanbanColumnContent className="gap-3">
                          <KanbanItem className="block" value="task-1">
                            <Item className="bg-card gap-3 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-3 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemTitle className="font-normal font-sans leading-[1.125rem] line-clamp-2 text-[0.8125rem] text-foreground w-full" title="Draft renewal checklist for strategic workspace rollouts">
                                    Draft renewal checklist for strategic workspace rollouts
                                  </ItemTitle>
                                  <ItemDescription className="flex flex-wrap gap-1.5 items-center line-clamp-none min-w-0 pt-0.5">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-invert/10 border border-invert/15 dark:bg-invert/35 dark:border-invert/45 dark:text-invert-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow" aria-label="Preparing">
                                      Prep
                                    </Badge>
                                    <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground" aria-label="Confirmed">
                                      <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                      <span className="font-medium text-xs truncate">
                                        Confirmed
                                      </span>
                                    </span>
                                  </ItemDescription>
                                </ItemContent>
                              </ItemHeader>
                              <ItemFooter className="gap-3 min-w-0">
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="Nora Lee" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <div className="font-medium text-foreground text-xs truncate">
                                      Nora Lee
                                    </div>
                                    <div className="text-[0.6875rem] text-muted-foreground truncate">
                                      Ops
                                    </div>
                                  </div>
                                </div>
                                <span className="dark:text-zinc-300 flex items-center justify-center ml-auto relative rounded-full shrink-0 size-7 text-zinc-500" aria-label="61% complete" style={{background: "conic-gradient(currentcolor 219.6deg, color-mix(currentcolor 16%, transparent 84%) 0deg)"}}>
                                  <span className="absolute bg-card inset-0.5 rounded-full"></span>
                                  <span className="font-semibold leading-none relative tabular-nums text-[0.625rem]">
                                    61
                                  </span>
                                </span>
                              </ItemFooter>
                              <ItemFooter className="gap-2 min-w-0">
                                <ItemActions className="gap-1 min-w-0">
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="1 attachments">
                                    <svg className="lucide lucide-file" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      1
                                    </span>
                                  </Button>
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="4 checklist items">
                                    <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                      <path d="M8 2v4"></path>
                                      <path d="M16 2v4"></path>
                                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                      <path d="M3 10h18"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      4
                                    </span>
                                  </Button>
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="2 comments">
                                    <svg className="lucide lucide-flag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlagIcon" tabler="IconFlag" hugeicons="Flag03Icon" phosphor="FlagIcon" remixicon="RiFlagLine" aria-hidden="true">
                                      <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      2
                                    </span>
                                  </Button>
                                </ItemActions>
                                <ItemActions className="ml-auto">
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="Due 22d">
                                    <svg className="lucide lucide-tag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      22d
                                    </span>
                                  </Button>
                                </ItemActions>
                              </ItemFooter>
                            </Item>
                          </KanbanItem>
                          <KanbanItem className="block" value="task-8">
                            <Item className="bg-card gap-3 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-3 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemTitle className="font-normal font-sans leading-[1.125rem] line-clamp-2 text-[0.8125rem] text-foreground w-full" title="Collect admin feedback on workspace handoff notes">
                                    Collect admin feedback on workspace handoff notes
                                  </ItemTitle>
                                  <ItemDescription className="flex flex-wrap gap-1.5 items-center line-clamp-none min-w-0 pt-0.5">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-invert/10 border border-invert/15 dark:bg-invert/35 dark:border-invert/45 dark:text-invert-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow" aria-label="Preparing">
                                      Prep
                                    </Badge>
                                    <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground" aria-label="At risk">
                                      <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                      <span className="font-medium text-xs truncate">
                                        Risk
                                      </span>
                                    </span>
                                  </ItemDescription>
                                </ItemContent>
                              </ItemHeader>
                              <ItemFooter className="gap-3 min-w-0">
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="Elena Torres" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <div className="font-medium text-foreground text-xs truncate">
                                      Elena Torres
                                    </div>
                                    <div className="text-[0.6875rem] text-muted-foreground truncate">
                                      Review
                                    </div>
                                  </div>
                                </div>
                                <span className="dark:text-zinc-300 flex items-center justify-center ml-auto relative rounded-full shrink-0 size-7 text-zinc-500" aria-label="56% complete" style={{background: "conic-gradient(currentcolor 201.6deg, color-mix(currentcolor 16%, transparent 84%) 0deg)"}}>
                                  <span className="absolute bg-card inset-0.5 rounded-full"></span>
                                  <span className="font-semibold leading-none relative tabular-nums text-[0.625rem]">
                                    56
                                  </span>
                                </span>
                              </ItemFooter>
                              <ItemFooter className="gap-2 min-w-0">
                                <ItemActions className="gap-1 min-w-0">
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="2 attachments">
                                    <svg className="lucide lucide-file" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      2
                                    </span>
                                  </Button>
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="3 checklist items">
                                    <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                      <path d="M8 2v4"></path>
                                      <path d="M16 2v4"></path>
                                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                      <path d="M3 10h18"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      3
                                    </span>
                                  </Button>
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="1 comments">
                                    <svg className="lucide lucide-flag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlagIcon" tabler="IconFlag" hugeicons="Flag03Icon" phosphor="FlagIcon" remixicon="RiFlagLine" aria-hidden="true">
                                      <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      1
                                    </span>
                                  </Button>
                                </ItemActions>
                                <ItemActions className="ml-auto">
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="Due 20d">
                                    <svg className="lucide lucide-tag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      20d
                                    </span>
                                  </Button>
                                </ItemActions>
                              </ItemFooter>
                            </Item>
                          </KanbanItem>
                          <KanbanItem className="block" value="task-9">
                            <Item className="bg-card gap-3 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-3 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemTitle className="font-normal font-sans leading-[1.125rem] line-clamp-2 text-[0.8125rem] text-foreground w-full" title="Prepare checklist template for regional launch teams">
                                    Prepare checklist template for regional launch teams
                                  </ItemTitle>
                                  <ItemDescription className="flex flex-wrap gap-1.5 items-center line-clamp-none min-w-0 pt-0.5">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-invert/10 border border-invert/15 dark:bg-invert/35 dark:border-invert/45 dark:text-invert-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow" aria-label="Preparing">
                                      Prep
                                    </Badge>
                                    <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground" aria-label="Ready">
                                      <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                      <span className="font-medium text-xs truncate">
                                        Ready
                                      </span>
                                    </span>
                                  </ItemDescription>
                                </ItemContent>
                              </ItemHeader>
                              <ItemFooter className="gap-3 min-w-0">
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="Marcus Chen" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <div className="font-medium text-foreground text-xs truncate">
                                      Marcus Chen
                                    </div>
                                    <div className="text-[0.6875rem] text-muted-foreground truncate">
                                      Finance
                                    </div>
                                  </div>
                                </div>
                                <span className="dark:text-zinc-300 flex items-center justify-center ml-auto relative rounded-full shrink-0 size-7 text-zinc-500" aria-label="69% complete" style={{background: "conic-gradient(currentcolor 248.4deg, color-mix(currentcolor 16%, transparent 84%) 0deg)"}}>
                                  <span className="absolute bg-card inset-0.5 rounded-full"></span>
                                  <span className="font-semibold leading-none relative tabular-nums text-[0.625rem]">
                                    69
                                  </span>
                                </span>
                              </ItemFooter>
                              <ItemFooter className="gap-2 min-w-0">
                                <ItemActions className="gap-1 min-w-0">
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="1 attachments">
                                    <svg className="lucide lucide-file" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      1
                                    </span>
                                  </Button>
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="5 checklist items">
                                    <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                      <path d="M8 2v4"></path>
                                      <path d="M16 2v4"></path>
                                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                      <path d="M3 10h18"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      5
                                    </span>
                                  </Button>
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="2 comments">
                                    <svg className="lucide lucide-flag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlagIcon" tabler="IconFlag" hugeicons="Flag03Icon" phosphor="FlagIcon" remixicon="RiFlagLine" aria-hidden="true">
                                      <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      2
                                    </span>
                                  </Button>
                                </ItemActions>
                                <ItemActions className="ml-auto">
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="Due 18d">
                                    <svg className="lucide lucide-tag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      18d
                                    </span>
                                  </Button>
                                </ItemActions>
                              </ItemFooter>
                            </Item>
                          </KanbanItem>
                        </KanbanColumnContent>
                        <Button className="bg-transparent border border-transparent font-normal h-8 hover:bg-background! hover:border-border! hover:text-foreground px-2 text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add card to Backlog">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          Add task
                        </Button>
                      </CardContent>
                    </Card>
                  </KanbanColumn>
                  <KanbanColumn className="self-start shrink-0 w-64" value="planned" dragging="false">
                    <Card className="bg-muted/40 gap-0 group/column overflow-hidden p-0 w-full" size="sm" aria-label="Planned: Scoped and scheduled">
                      <CardHeader className="flex flex-row gap-2 items-center min-h-9 px-2 py-2">
                        <span className="[&_svg]:shrink-0 [&_svg]:size-3.5 bg-zinc-200 border border-zinc-300 dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-50 font-semibold gap-1.5 h-6.5 hover:opacity-90 inline-flex items-center justify-center px-2 rounded-sm shrink-0 text-[0.6875rem] text-zinc-950 tracking-normal transition-colors uppercase whitespace-nowrap">
                          <span className="[&>svg]:block [&>svg]:size-4 flex items-center justify-center leading-none shrink-0 size-4" aria-hidden="true">
                            <svg className="lucide lucide-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleIcon" tabler="IconCircle" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiCircleLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                            </svg>
                          </span>
                          <span className="flex h-full items-center leading-none min-h-0">
                            <span className="flex items-center leading-none">
                              Planned
                            </span>
                          </span>
                        </span>
                        <span className="font-medium h-6.5 inline-flex items-center leading-none self-center shrink-0 tabular-nums text-[0.6875rem] text-muted-foreground">
                          2
                        </span>
                        <div className="flex gap-1 group-focus-within/kanban-column:opacity-100 group-hover/kanban-column:opacity-100 items-center ml-auto opacity-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Collapse Planned">
                            <svg className="lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                              <path d="m15 18-6-6 6-6"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Planned column">
                            <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                              <circle cx="9" cy="12" r="1"></circle>
                              <circle cx="9" cy="5" r="1"></circle>
                              <circle cx="9" cy="19" r="1"></circle>
                              <circle cx="15" cy="12" r="1"></circle>
                              <circle cx="15" cy="5" r="1"></circle>
                              <circle cx="15" cy="19" r="1"></circle>
                            </svg>
                          </KanbanColumnHandle>
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-3 pb-2 pt-0 px-2">
                        <KanbanColumnContent className="gap-3">
                          <KanbanItem className="block" value="task-2">
                            <Item className="bg-card gap-3 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-3 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemTitle className="font-normal font-sans leading-[1.125rem] line-clamp-2 text-[0.8125rem] text-foreground w-full" title="Estimate migration scope for enterprise tenant groups">
                                    Estimate migration scope for enterprise tenant groups
                                  </ItemTitle>
                                  <ItemDescription className="flex flex-wrap gap-1.5 items-center line-clamp-none min-w-0 pt-0.5">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow" aria-label="Commercial review">
                                      Commercial
                                    </Badge>
                                    <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground" aria-label="Ready">
                                      <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                      <span className="font-medium text-xs truncate">
                                        Ready
                                      </span>
                                    </span>
                                  </ItemDescription>
                                </ItemContent>
                              </ItemHeader>
                              <ItemFooter className="gap-3 min-w-0">
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="Omar Haddad" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <div className="font-medium text-foreground text-xs truncate">
                                      Omar Haddad
                                    </div>
                                    <div className="text-[0.6875rem] text-muted-foreground truncate">
                                      Planning
                                    </div>
                                  </div>
                                </div>
                                <span className="flex items-center justify-center ml-auto relative rounded-full shrink-0 size-7 text-foreground/70" aria-label="56% complete" style={{background: "conic-gradient(currentcolor 201.6deg, color-mix(currentcolor 16%, transparent 84%) 0deg)"}}>
                                  <span className="absolute bg-card inset-0.5 rounded-full"></span>
                                  <span className="font-semibold leading-none relative tabular-nums text-[0.625rem]">
                                    56
                                  </span>
                                </span>
                              </ItemFooter>
                              <ItemFooter className="gap-2 min-w-0">
                                <ItemActions className="gap-1 min-w-0">
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="2 attachments">
                                    <svg className="lucide lucide-file" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      2
                                    </span>
                                  </Button>
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="3 checklist items">
                                    <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                      <path d="M8 2v4"></path>
                                      <path d="M16 2v4"></path>
                                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                      <path d="M3 10h18"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      3
                                    </span>
                                  </Button>
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="1 comments">
                                    <svg className="lucide lucide-flag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlagIcon" tabler="IconFlag" hugeicons="Flag03Icon" phosphor="FlagIcon" remixicon="RiFlagLine" aria-hidden="true">
                                      <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      1
                                    </span>
                                  </Button>
                                </ItemActions>
                                <ItemActions className="ml-auto">
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="Due 16d">
                                    <svg className="lucide lucide-tag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      16d
                                    </span>
                                  </Button>
                                </ItemActions>
                              </ItemFooter>
                            </Item>
                          </KanbanItem>
                          <KanbanItem className="block" value="task-10">
                            <Item className="bg-card gap-3 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-3 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemTitle className="font-normal font-sans leading-[1.125rem] line-clamp-2 text-[0.8125rem] text-foreground w-full" title="Map reviewer roles for procurement policy updates">
                                    Map reviewer roles for procurement policy updates
                                  </ItemTitle>
                                  <ItemDescription className="flex flex-wrap gap-1.5 items-center line-clamp-none min-w-0 pt-0.5">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow" aria-label="Legal review">
                                      Legal
                                    </Badge>
                                    <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground" aria-label="Confirmed">
                                      <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                      <span className="font-medium text-xs truncate">
                                        Confirmed
                                      </span>
                                    </span>
                                  </ItemDescription>
                                </ItemContent>
                              </ItemHeader>
                              <ItemFooter className="gap-3 min-w-0">
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="Priya Shah" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <div className="font-medium text-foreground text-xs truncate">
                                      Priya Shah
                                    </div>
                                    <div className="text-[0.6875rem] text-muted-foreground truncate">
                                      Product
                                    </div>
                                  </div>
                                </div>
                                <span className="flex items-center justify-center ml-auto relative rounded-full shrink-0 size-7 text-foreground/70" aria-label="61% complete" style={{background: "conic-gradient(currentcolor 219.6deg, color-mix(currentcolor 16%, transparent 84%) 0deg)"}}>
                                  <span className="absolute bg-card inset-0.5 rounded-full"></span>
                                  <span className="font-semibold leading-none relative tabular-nums text-[0.625rem]">
                                    61
                                  </span>
                                </span>
                              </ItemFooter>
                              <ItemFooter className="gap-2 min-w-0">
                                <ItemActions className="gap-1 min-w-0">
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="1 attachments">
                                    <svg className="lucide lucide-file" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      1
                                    </span>
                                  </Button>
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="4 checklist items">
                                    <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                      <path d="M8 2v4"></path>
                                      <path d="M16 2v4"></path>
                                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                      <path d="M3 10h18"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      4
                                    </span>
                                  </Button>
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="3 comments">
                                    <svg className="lucide lucide-flag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlagIcon" tabler="IconFlag" hugeicons="Flag03Icon" phosphor="FlagIcon" remixicon="RiFlagLine" aria-hidden="true">
                                      <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      3
                                    </span>
                                  </Button>
                                </ItemActions>
                                <ItemActions className="ml-auto">
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="Due 13d">
                                    <svg className="lucide lucide-tag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      13d
                                    </span>
                                  </Button>
                                </ItemActions>
                              </ItemFooter>
                            </Item>
                          </KanbanItem>
                        </KanbanColumnContent>
                        <Button className="bg-transparent border border-transparent font-normal h-8 hover:bg-background! hover:border-border! hover:text-foreground px-2 text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add card to Planned">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          Add task
                        </Button>
                      </CardContent>
                    </Card>
                  </KanbanColumn>
                  <KanbanColumn className="self-start shrink-0 w-64" value="inProgress" dragging="false">
                    <Card className="bg-muted/40 gap-0 group/column overflow-hidden p-0 w-full" size="sm" aria-label="In Progress: Active execution">
                      <CardHeader className="flex flex-row gap-2 items-center min-h-9 px-2 py-2">
                        <span className="[&_svg]:shrink-0 [&_svg]:size-3.5 bg-sky-500 border border-sky-500 dark:bg-sky-400 dark:border-sky-400/80 dark:text-sky-950 font-semibold gap-1.5 h-6.5 hover:opacity-90 inline-flex items-center justify-center px-2 rounded-sm shrink-0 text-[0.6875rem] text-sky-50 tracking-normal transition-colors uppercase whitespace-nowrap">
                          <span className="[&>svg]:block [&>svg]:size-4 flex items-center justify-center leading-none shrink-0 size-4" aria-hidden="true">
                            <svg className="lucide lucide-circle-dot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDotIcon" tabler="IconCircleDot" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiRecordCircleLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <circle cx="12" cy="12" r="1"></circle>
                            </svg>
                          </span>
                          <span className="flex h-full items-center leading-none min-h-0">
                            <span className="flex items-center leading-none">
                              In Progress
                            </span>
                          </span>
                        </span>
                        <span className="font-medium h-6.5 inline-flex items-center leading-none self-center shrink-0 tabular-nums text-[0.6875rem] text-muted-foreground">
                          3
                        </span>
                        <div className="flex gap-1 group-focus-within/kanban-column:opacity-100 group-hover/kanban-column:opacity-100 items-center ml-auto opacity-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Collapse In Progress">
                            <svg className="lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                              <path d="m15 18-6-6 6-6"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move In Progress column">
                            <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                              <circle cx="9" cy="12" r="1"></circle>
                              <circle cx="9" cy="5" r="1"></circle>
                              <circle cx="9" cy="19" r="1"></circle>
                              <circle cx="15" cy="12" r="1"></circle>
                              <circle cx="15" cy="5" r="1"></circle>
                              <circle cx="15" cy="19" r="1"></circle>
                            </svg>
                          </KanbanColumnHandle>
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-3 pb-2 pt-0 px-2">
                        <KanbanColumnContent className="gap-3">
                          <KanbanItem className="block" value="task-3">
                            <Item className="bg-card gap-3 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-3 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemTitle className="font-normal font-sans leading-[1.125rem] line-clamp-2 text-[0.8125rem] text-foreground w-full" title="Connect workspace audit stream to the activity timeline">
                                    Connect workspace audit stream to the activity timeline
                                  </ItemTitle>
                                  <ItemDescription className="flex flex-wrap gap-1.5 items-center line-clamp-none min-w-0 pt-0.5">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow" aria-label="Commercial review">
                                      Commercial
                                    </Badge>
                                    <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground" aria-label="Finance review">
                                      <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                      <span className="font-medium text-xs truncate">
                                        Finance
                                      </span>
                                    </span>
                                  </ItemDescription>
                                </ItemContent>
                              </ItemHeader>
                              <ItemFooter className="gap-3 min-w-0">
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="Priya Shah" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <div className="font-medium text-foreground text-xs truncate">
                                      Priya Shah
                                    </div>
                                    <div className="text-[0.6875rem] text-muted-foreground truncate">
                                      Product
                                    </div>
                                  </div>
                                </div>
                                <span className="dark:text-sky-300 flex items-center justify-center ml-auto relative rounded-full shrink-0 size-7 text-sky-500" aria-label="83% complete" style={{background: "conic-gradient(currentcolor 298.8deg, color-mix(currentcolor 16%, transparent 84%) 0deg)"}}>
                                  <span className="absolute bg-card inset-0.5 rounded-full"></span>
                                  <span className="font-semibold leading-none relative tabular-nums text-[0.625rem]">
                                    83
                                  </span>
                                </span>
                              </ItemFooter>
                              <ItemFooter className="gap-2 min-w-0">
                                <ItemActions className="gap-1 min-w-0">
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="3 attachments">
                                    <svg className="lucide lucide-file" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      3
                                    </span>
                                  </Button>
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="6 checklist items">
                                    <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                      <path d="M8 2v4"></path>
                                      <path d="M16 2v4"></path>
                                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                      <path d="M3 10h18"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      6
                                    </span>
                                  </Button>
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="4 comments">
                                    <svg className="lucide lucide-flag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlagIcon" tabler="IconFlag" hugeicons="Flag03Icon" phosphor="FlagIcon" remixicon="RiFlagLine" aria-hidden="true">
                                      <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      4
                                    </span>
                                  </Button>
                                </ItemActions>
                                <ItemActions className="ml-auto">
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="Due 8d">
                                    <svg className="lucide lucide-tag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      8d
                                    </span>
                                  </Button>
                                </ItemActions>
                              </ItemFooter>
                            </Item>
                          </KanbanItem>
                          <KanbanItem className="block" value="task-4">
                            <Item className="bg-card gap-3 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-3 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemTitle className="font-normal font-sans leading-[1.125rem] line-clamp-2 text-[0.8125rem] text-foreground w-full" title="Tune procurement approval rules for finance reviewers">
                                    Tune procurement approval rules for finance reviewers
                                  </ItemTitle>
                                  <ItemDescription className="flex flex-wrap gap-1.5 items-center line-clamp-none min-w-0 pt-0.5">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow" aria-label="Finance review">
                                      Finance
                                    </Badge>
                                    <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground" aria-label="At risk">
                                      <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                      <span className="font-medium text-xs truncate">
                                        Risk
                                      </span>
                                    </span>
                                  </ItemDescription>
                                </ItemContent>
                              </ItemHeader>
                              <ItemFooter className="gap-3 min-w-0">
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="Marcus Chen" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <div className="font-medium text-foreground text-xs truncate">
                                      Marcus Chen
                                    </div>
                                    <div className="text-[0.6875rem] text-muted-foreground truncate">
                                      Finance
                                    </div>
                                  </div>
                                </div>
                                <span className="dark:text-sky-300 flex items-center justify-center ml-auto relative rounded-full shrink-0 size-7 text-sky-500" aria-label="72% complete" style={{background: "conic-gradient(currentcolor 259.2deg, color-mix(currentcolor 16%, transparent 84%) 0deg)"}}>
                                  <span className="absolute bg-card inset-0.5 rounded-full"></span>
                                  <span className="font-semibold leading-none relative tabular-nums text-[0.625rem]">
                                    72
                                  </span>
                                </span>
                              </ItemFooter>
                              <ItemFooter className="gap-2 min-w-0">
                                <ItemActions className="gap-1 min-w-0">
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="2 attachments">
                                    <svg className="lucide lucide-file" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      2
                                    </span>
                                  </Button>
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="5 checklist items">
                                    <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                      <path d="M8 2v4"></path>
                                      <path d="M16 2v4"></path>
                                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                      <path d="M3 10h18"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      5
                                    </span>
                                  </Button>
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="6 comments">
                                    <svg className="lucide lucide-flag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlagIcon" tabler="IconFlag" hugeicons="Flag03Icon" phosphor="FlagIcon" remixicon="RiFlagLine" aria-hidden="true">
                                      <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      6
                                    </span>
                                  </Button>
                                </ItemActions>
                                <ItemActions className="ml-auto">
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="Due 5d">
                                    <svg className="lucide lucide-tag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      5d
                                    </span>
                                  </Button>
                                </ItemActions>
                              </ItemFooter>
                            </Item>
                          </KanbanItem>
                          <KanbanItem className="block" value="task-11">
                            <Item className="bg-card gap-3 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-3 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemTitle className="font-normal font-sans leading-[1.125rem] line-clamp-2 text-[0.8125rem] text-foreground w-full" title="Refine saved view permissions for partner workspaces">
                                    Refine saved view permissions for partner workspaces
                                  </ItemTitle>
                                  <ItemDescription className="flex flex-wrap gap-1.5 items-center line-clamp-none min-w-0 pt-0.5">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow" aria-label="Legal review">
                                      Legal
                                    </Badge>
                                    <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground" aria-label="Ready">
                                      <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                      <span className="font-medium text-xs truncate">
                                        Ready
                                      </span>
                                    </span>
                                  </ItemDescription>
                                </ItemContent>
                              </ItemHeader>
                              <ItemFooter className="gap-3 min-w-0">
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="Liam Carter" src="https://images.unsplash.com/photo-1504593811423-6dd665756598?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <div className="font-medium text-foreground text-xs truncate">
                                      Liam Carter
                                    </div>
                                    <div className="text-[0.6875rem] text-muted-foreground truncate">
                                      Quality
                                    </div>
                                  </div>
                                </div>
                                <span className="dark:text-sky-300 flex items-center justify-center ml-auto relative rounded-full shrink-0 size-7 text-sky-500" aria-label="64% complete" style={{background: "conic-gradient(currentcolor 230.4deg, color-mix(currentcolor 16%, transparent 84%) 0deg)"}}>
                                  <span className="absolute bg-card inset-0.5 rounded-full"></span>
                                  <span className="font-semibold leading-none relative tabular-nums text-[0.625rem]">
                                    64
                                  </span>
                                </span>
                              </ItemFooter>
                              <ItemFooter className="gap-2 min-w-0">
                                <ItemActions className="gap-1 min-w-0">
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="2 attachments">
                                    <svg className="lucide lucide-file" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      2
                                    </span>
                                  </Button>
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="4 checklist items">
                                    <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                      <path d="M8 2v4"></path>
                                      <path d="M16 2v4"></path>
                                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                      <path d="M3 10h18"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      4
                                    </span>
                                  </Button>
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="5 comments">
                                    <svg className="lucide lucide-flag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlagIcon" tabler="IconFlag" hugeicons="Flag03Icon" phosphor="FlagIcon" remixicon="RiFlagLine" aria-hidden="true">
                                      <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      5
                                    </span>
                                  </Button>
                                </ItemActions>
                                <ItemActions className="ml-auto">
                                  <Button className="[&_svg]:size-3.5 font-medium gap-1 h-6 hover:bg-muted/70 hover:text-foreground px-1.5 tabular-nums text-muted-foreground" type="button" tabIndex="0" aria-label="Due 6d">
                                    <svg className="lucide lucide-tag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                    </svg>
                                    <span className="leading-none text-[0.6875rem]">
                                      6d
                                    </span>
                                  </Button>
                                </ItemActions>
                              </ItemFooter>
                            </Item>
                          </KanbanItem>
                        </KanbanColumnContent>
                        <Button className="bg-transparent border border-transparent font-normal h-8 hover:bg-background! hover:border-border! hover:text-foreground px-2 text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add card to In Progress">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          Add task
                        </Button>
                      </CardContent>
                    </Card>
                  </KanbanColumn>
                  <KanbanColumn className="self-start shrink-0" value="paused" dragging="false">
                    <Card className="bg-muted/40 gap-0 items-center overflow-hidden p-0 rounded-lg self-start transition-colors w-10.5" size="sm">
                      <Button className="aria-expanded:bg-transparent bg-transparent border-0 cursor-pointer flex-col gap-2 h-auto hover:bg-muted/70 hover:text-current min-h-0 px-2 py-2 shadow-none text-current w-full" type="button" tabIndex="0" aria-label="Expand Paused: Waiting or blocked" aria-expanded="false">
                        <span className="[&_svg]:shrink-0 [&_svg]:size-3.5 bg-amber-400 border border-amber-300 dark:bg-amber-300 dark:border-amber-400/80 dark:text-amber-950 flex-col font-semibold gap-1.5 inline-flex items-center justify-start px-0 py-2 rounded-sm shrink-0 text-[0.6875rem] text-amber-950 tracking-normal transition-colors uppercase w-6.5">
                          <span className="[&>svg]:block [&>svg]:size-4 flex items-center justify-center leading-none shrink-0 size-4" aria-hidden="true">
                            <svg className="lucide lucide-circle-pause" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PauseCircleIcon" tabler="IconPlayerPauseFilled" hugeicons="PauseCircleIcon" phosphor="PauseCircleIcon" remixicon="RiPauseCircleLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="10" x2="10" y1="15" y2="9"></line>
                              <line x1="14" x2="14" y1="15" y2="9"></line>
                            </svg>
                          </span>
                          <span className="flex items-center justify-center leading-none min-h-0">
                            <span className="[writing-mode:vertical-rl] font-semibold leading-none rotate-180 truncate">
                              Paused
                            </span>
                          </span>
                        </span>
                        <span className="font-semibold leading-none tabular-nums text-[0.625rem] text-muted-foreground">
                          2
                        </span>
                      </Button>
                    </Card>
                  </KanbanColumn>
                  <KanbanColumn className="self-start shrink-0" value="completed" dragging="false">
                    <Card className="bg-muted/40 gap-0 items-center overflow-hidden p-0 rounded-lg self-start transition-colors w-10.5" size="sm">
                      <Button className="aria-expanded:bg-transparent bg-transparent border-0 cursor-pointer flex-col gap-2 h-auto hover:bg-muted/70 hover:text-current min-h-0 px-2 py-2 shadow-none text-current w-full" type="button" tabIndex="0" aria-label="Expand Completed: Finished work" aria-expanded="false">
                        <span className="[&_svg]:shrink-0 [&_svg]:size-3.5 bg-emerald-600 border border-emerald-600 dark:bg-emerald-400 dark:border-emerald-400/80 dark:text-emerald-950 flex-col font-semibold gap-1.5 inline-flex items-center justify-start px-0 py-2 rounded-sm shrink-0 text-[0.6875rem] text-emerald-50 tracking-normal transition-colors uppercase w-6.5">
                          <span className="[&>svg]:block [&>svg]:size-4 flex items-center justify-center leading-none shrink-0 size-4" aria-hidden="true">
                            <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="m9 12 2 2 4-4"></path>
                            </svg>
                          </span>
                          <span className="flex items-center justify-center leading-none min-h-0">
                            <span className="[writing-mode:vertical-rl] font-semibold leading-none rotate-180 truncate">
                              Completed
                            </span>
                          </span>
                        </span>
                        <span className="font-semibold leading-none tabular-nums text-[0.625rem] text-muted-foreground">
                          3
                        </span>
                      </Button>
                    </Card>
                  </KanbanColumn>
                  <KanbanColumn className="self-start shrink-0" value="cancelled" dragging="false">
                    <Card className="bg-muted/40 gap-0 items-center overflow-hidden p-0 rounded-lg self-start transition-colors w-10.5" size="sm">
                      <Button className="aria-expanded:bg-transparent bg-transparent border-0 cursor-pointer flex-col gap-2 h-auto hover:bg-muted/70 hover:text-current min-h-0 px-2 py-2 shadow-none text-current w-full" type="button" tabIndex="0" aria-label="Expand Cancelled: Stopped or removed" aria-expanded="false">
                        <span className="[&_svg]:shrink-0 [&_svg]:size-3.5 bg-zinc-200 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200 flex-col font-semibold gap-1.5 inline-flex items-center justify-start px-0 py-2 rounded-sm shrink-0 text-[0.6875rem] text-zinc-700 tracking-normal transition-colors uppercase w-6.5">
                          <span className="[&>svg]:block [&>svg]:size-4 flex items-center justify-center leading-none shrink-0 size-4" aria-hidden="true">
                            <svg className="lucide lucide-circle-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="m15 9-6 6"></path>
                              <path d="m9 9 6 6"></path>
                            </svg>
                          </span>
                          <span className="flex items-center justify-center leading-none min-h-0">
                            <span className="[writing-mode:vertical-rl] font-semibold leading-none rotate-180 truncate">
                              Cancelled
                            </span>
                          </span>
                        </span>
                        <span className="font-semibold leading-none tabular-nums text-[0.625rem] text-muted-foreground">
                          2
                        </span>
                      </Button>
                    </Card>
                  </KanbanColumn>
                </KanbanBoard>
              </div>
            </div>
          </ScrollArea>
        </Kanban>
        <div id="DndDescribedBy-0" style={{display: "none"}}>
          To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
        </div>
        <div id="DndLiveRegion-0" role="status" aria-live="assertive" aria-atomic="true" style={{position: "fixed", top: "0px", left: "0px", width: "1px", height: "1px", margin: "-1px", border: "0px", padding: "0px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(100%)", whiteSpace: "nowrap"}}></div>
      </section>
    </main>
  )
}
