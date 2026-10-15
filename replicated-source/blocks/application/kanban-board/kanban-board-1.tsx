import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnContent,
  KanbanColumnHandle,
  KanbanItem,
  KanbanItemHandle,
} from "@/registry-neui/bases/radix/neui/kanban"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <main className="bg-muted/35 flex items-start justify-center min-h-svh p-4 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Issue tracking kanban board"}
      </h1>
      <section className="flex flex-col gap-7 max-w-[1180px] mx-auto w-full">
        <header className="px-1">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <h2 className="font-semibold text-xl tracking-tight truncate">
                {"Issue Tracking"}
              </h2>
              <p className="line-clamp-1 mt-0.5 text-muted-foreground text-sm">
                {"Track ownership, severity, and release risk."}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center lg:justify-end">
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                </svg>
                {"Filters"}
              </Button>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-share-2 lucide-share2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Share2Icon" tabler="IconShare" hugeicons="Share08Icon" phosphor="ShareNetworkIcon" remixicon="RiShareLine" data-icon="inline-start" aria-hidden="true">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                </svg>
                {"Share"}
              </Button>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                {"New task"}
              </Button>
            </div>
          </div>
        </header>
        <div className="min-w-0">
          <Kanban className="w-full" dragging="false">
            <ScrollArea className="min-w-0 pb-3 w-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" overflowXEnd="">
              <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-lg transition-[color,box-shadow] w-full" role="presentation" data-id="base-ui-_r_0_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "568px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-x="" data-overflow-x-end="">
                <div className="min-w-full w-max" role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-overflow-x-end="">
                  <KanbanBoard className="auto-cols-[17.5rem] gap-3 grid-cols-none grid-flow-col min-w-max pb-2 px-1">
                    <KanbanColumn className="min-w-[17.5rem] w-[17.5rem]" value="open" dragging="false">
                      <section className="bg-muted/25 border border-border dark:bg-muted/10 flex flex-col gap-2 min-h-[16rem] p-2.5 rounded-lg transition-colors" aria-label="1. Open bugs">
                        <div className="flex gap-2 h-8 items-center px-0.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <h3 className="font-semibold text-sm truncate">
                              {"1. Open"}
                            </h3>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"2"}
                            </Badge>
                          </div>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing cn-button cn-button-size-icon-xs cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center ml-auto opacity-100! outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move 1. Open column">
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
                        <KanbanColumnContent className="min-h-28">
                          <KanbanItem value="bug-101" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-card hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardContent className="flex flex-col min-h-[8.75rem] p-3">
                                  <div className="flex gap-2 items-start justify-between min-w-0">
                                    <div className="flex flex-wrap gap-1.5 items-center min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                                        {"Access"}
                                      </Badge>
                                      <span className="tabular-nums text-muted-foreground text-xs truncate">
                                        {"BUG-421"}
                                      </span>
                                      <span className="tabular-nums text-muted-foreground text-xs">
                                        {"P1"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      <span className="bg-zinc-400 dark:bg-zinc-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                      {"Queued"}
                                    </Badge>
                                  </div>
                                  <h3 className="font-medium leading-5 min-h-10 mt-3 text-sm">
                                    <span className="gap-1 group/task-title inline-flex items-start max-w-full min-w-0">
                                      <span className="cursor-pointer hover:text-primary line-clamp-2 py-0.25 transition-colors">
                                        {"User permissions block account switching"}
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right mt-1 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </h3>
                                  <div className="flex gap-2 items-center justify-between mt-auto pt-4">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar size="sm">
                                        <AvatarImage alt="Nora Lee" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium text-muted-foreground text-xs truncate">
                                        {"Nora Lee"}
                                      </span>
                                    </div>
                                    <div className="flex gap-1.5 items-center shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                          <path d="M8 2v4"></path>
                                          <path d="M16 2v4"></path>
                                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                          <path d="M3 10h18"></path>
                                          <path d="M8 14h.01"></path>
                                          <path d="M12 14h.01"></path>
                                          <path d="M16 14h.01"></path>
                                          <path d="M8 18h.01"></path>
                                          <path d="M12 18h.01"></path>
                                          <path d="M16 18h.01"></path>
                                        </svg>
                                        <span className="tabular-nums">
                                          {"Today"}
                                        </span>
                                      </Badge>
                                      <span className="flex gap-1.5 items-center" aria-label="12% complete">
                                        <svg className="shrink-0 size-5 text-rose-500" viewBox="0 0 24 24" aria-hidden="true">
                                          <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                          <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="49.762827632862326" transform="rotate(-90 12 12)"></circle>
                                        </svg>
                                        <span className="tabular-nums text-foreground text-xs">
                                          {"12%"}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                          <KanbanItem value="bug-102" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-card hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardContent className="flex flex-col min-h-[8.75rem] p-3">
                                  <div className="flex gap-2 items-start justify-between min-w-0">
                                    <div className="flex flex-wrap gap-1.5 items-center min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                        {"Forms"}
                                      </Badge>
                                      <span className="tabular-nums text-muted-foreground text-xs truncate">
                                        {"BUG-426"}
                                      </span>
                                      <span className="tabular-nums text-muted-foreground text-xs">
                                        {"P2"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                      {"At risk"}
                                    </Badge>
                                  </div>
                                  <h3 className="font-medium leading-5 min-h-10 mt-3 text-sm">
                                    <span className="gap-1 group/task-title inline-flex items-start max-w-full min-w-0">
                                      <span className="cursor-pointer hover:text-primary line-clamp-2 py-0.25 transition-colors">
                                        {"Forms submit duplicate confirmation emails"}
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right mt-1 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </h3>
                                  <div className="flex gap-2 items-center justify-between mt-auto pt-4">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar size="sm">
                                        <AvatarImage alt="Omar Vale" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium text-muted-foreground text-xs truncate">
                                        {"Omar Vale"}
                                      </span>
                                    </div>
                                    <div className="flex gap-1.5 items-center shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                          <path d="M8 2v4"></path>
                                          <path d="M16 2v4"></path>
                                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                          <path d="M3 10h18"></path>
                                          <path d="M8 14h.01"></path>
                                          <path d="M12 14h.01"></path>
                                          <path d="M16 14h.01"></path>
                                          <path d="M8 18h.01"></path>
                                          <path d="M12 18h.01"></path>
                                          <path d="M16 18h.01"></path>
                                        </svg>
                                        <span className="tabular-nums">
                                          {"Apr 26"}
                                        </span>
                                      </Badge>
                                      <span className="flex gap-1.5 items-center" aria-label="26% complete">
                                        <svg className="shrink-0 size-5 text-rose-500" viewBox="0 0 24 24" aria-hidden="true">
                                          <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                          <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="41.84601414581604" transform="rotate(-90 12 12)"></circle>
                                        </svg>
                                        <span className="tabular-nums text-foreground text-xs">
                                          {"26%"}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                        </KanbanColumnContent>
                      </section>
                    </KanbanColumn>
                    <KanbanColumn className="min-w-[17.5rem] w-[17.5rem]" value="triage" dragging="false">
                      <section className="bg-warning/[0.045] border border-warning/20 dark:bg-warning/10 dark:border-warning/25 flex flex-col gap-2 min-h-[16rem] p-2.5 rounded-lg transition-colors" aria-label="2. Triage bugs">
                        <div className="flex gap-2 h-8 items-center px-0.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <h3 className="font-semibold text-sm truncate">
                              {"2. Triage"}
                            </h3>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"3"}
                            </Badge>
                          </div>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing cn-button cn-button-size-icon-xs cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center ml-auto opacity-100! outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move 2. Triage column">
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
                        <KanbanColumnContent className="min-h-28">
                          <KanbanItem value="bug-201" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-card hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardContent className="flex flex-col min-h-[8.75rem] p-3">
                                  <div className="flex gap-2 items-start justify-between min-w-0">
                                    <div className="flex flex-wrap gap-1.5 items-center min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                        {"Auth"}
                                      </Badge>
                                      <span className="tabular-nums text-muted-foreground text-xs truncate">
                                        {"BUG-438"}
                                      </span>
                                      <span className="tabular-nums text-muted-foreground text-xs">
                                        {"P0"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                      {"Blocked"}
                                    </Badge>
                                  </div>
                                  <h3 className="font-medium leading-5 min-h-10 mt-3 text-sm">
                                    <span className="gap-1 group/task-title inline-flex items-start max-w-full min-w-0">
                                      <span className="cursor-pointer hover:text-primary line-clamp-2 py-0.25 transition-colors">
                                        {"Login button does not redirect from invite links"}
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right mt-1 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </h3>
                                  <div className="flex gap-2 items-center justify-between mt-auto pt-4">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar size="sm">
                                        <AvatarImage alt="Mia Hart" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium text-muted-foreground text-xs truncate">
                                        {"Mia Hart"}
                                      </span>
                                    </div>
                                    <div className="flex gap-1.5 items-center shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                          <path d="M8 2v4"></path>
                                          <path d="M16 2v4"></path>
                                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                          <path d="M3 10h18"></path>
                                          <path d="M8 14h.01"></path>
                                          <path d="M12 14h.01"></path>
                                          <path d="M16 14h.01"></path>
                                          <path d="M8 18h.01"></path>
                                          <path d="M12 18h.01"></path>
                                          <path d="M16 18h.01"></path>
                                        </svg>
                                        <span className="tabular-nums">
                                          {"Today"}
                                        </span>
                                      </Badge>
                                      <span className="flex gap-1.5 items-center" aria-label="8% complete">
                                        <svg className="shrink-0 size-5 text-rose-500" viewBox="0 0 24 24" aria-hidden="true">
                                          <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                          <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="52.02477434344697" transform="rotate(-90 12 12)"></circle>
                                        </svg>
                                        <span className="tabular-nums text-foreground text-xs">
                                          {"8%"}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                          <KanbanItem value="bug-202" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-card hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardContent className="flex flex-col min-h-[8.75rem] p-3">
                                  <div className="flex gap-2 items-start justify-between min-w-0">
                                    <div className="flex flex-wrap gap-1.5 items-center min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                        {"API"}
                                      </Badge>
                                      <span className="tabular-nums text-muted-foreground text-xs truncate">
                                        {"BUG-445"}
                                      </span>
                                      <span className="tabular-nums text-muted-foreground text-xs">
                                        {"P1"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                      {"At risk"}
                                    </Badge>
                                  </div>
                                  <h3 className="font-medium leading-5 min-h-10 mt-3 text-sm">
                                    <span className="gap-1 group/task-title inline-flex items-start max-w-full min-w-0">
                                      <span className="cursor-pointer hover:text-primary line-clamp-2 py-0.25 transition-colors">
                                        {"API integration returns incorrect totals"}
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right mt-1 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </h3>
                                  <div className="flex gap-2 items-center justify-between mt-auto pt-4">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar size="sm">
                                        <AvatarImage alt="Eli Stone" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium text-muted-foreground text-xs truncate">
                                        {"Eli Stone"}
                                      </span>
                                    </div>
                                    <div className="flex gap-1.5 items-center shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                          <path d="M8 2v4"></path>
                                          <path d="M16 2v4"></path>
                                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                          <path d="M3 10h18"></path>
                                          <path d="M8 14h.01"></path>
                                          <path d="M12 14h.01"></path>
                                          <path d="M16 14h.01"></path>
                                          <path d="M8 18h.01"></path>
                                          <path d="M12 18h.01"></path>
                                          <path d="M16 18h.01"></path>
                                        </svg>
                                        <span className="tabular-nums">
                                          {"Apr 25"}
                                        </span>
                                      </Badge>
                                      <span className="flex gap-1.5 items-center" aria-label="42% complete">
                                        <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                          <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                          <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="32.79822730347744" transform="rotate(-90 12 12)"></circle>
                                        </svg>
                                        <span className="tabular-nums text-foreground text-xs">
                                          {"42%"}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                          <KanbanItem value="bug-203" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-card hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardContent className="flex flex-col min-h-[8.75rem] p-3">
                                  <div className="flex gap-2 items-start justify-between min-w-0">
                                    <div className="flex flex-wrap gap-1.5 items-center min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                        {"Import"}
                                      </Badge>
                                      <span className="tabular-nums text-muted-foreground text-xs truncate">
                                        {"BUG-449"}
                                      </span>
                                      <span className="tabular-nums text-muted-foreground text-xs">
                                        {"P1"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                      {"At risk"}
                                    </Badge>
                                  </div>
                                  <h3 className="font-medium leading-5 min-h-10 mt-3 text-sm">
                                    <span className="gap-1 group/task-title inline-flex items-start max-w-full min-w-0">
                                      <span className="cursor-pointer hover:text-primary line-clamp-2 py-0.25 transition-colors">
                                        {"Import wizard skips validation errors"}
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right mt-1 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </h3>
                                  <div className="flex gap-2 items-center justify-between mt-auto pt-4">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar size="sm">
                                        <AvatarImage alt="Ari Blake" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium text-muted-foreground text-xs truncate">
                                        {"Ari Blake"}
                                      </span>
                                    </div>
                                    <div className="flex gap-1.5 items-center shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                          <path d="M8 2v4"></path>
                                          <path d="M16 2v4"></path>
                                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                          <path d="M3 10h18"></path>
                                          <path d="M8 14h.01"></path>
                                          <path d="M12 14h.01"></path>
                                          <path d="M16 14h.01"></path>
                                          <path d="M8 18h.01"></path>
                                          <path d="M12 18h.01"></path>
                                          <path d="M16 18h.01"></path>
                                        </svg>
                                        <span className="tabular-nums">
                                          {"Apr 26"}
                                        </span>
                                      </Badge>
                                      <span className="flex gap-1.5 items-center" aria-label="31% complete">
                                        <svg className="shrink-0 size-5 text-rose-500" viewBox="0 0 24 24" aria-hidden="true">
                                          <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                          <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="39.01858075758523" transform="rotate(-90 12 12)"></circle>
                                        </svg>
                                        <span className="tabular-nums text-foreground text-xs">
                                          {"31%"}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                        </KanbanColumnContent>
                      </section>
                    </KanbanColumn>
                    <KanbanColumn className="min-w-[17.5rem] w-[17.5rem]" value="inProgress" dragging="false">
                      <section className="bg-primary/[0.045] border border-primary/20 dark:bg-primary/10 dark:border-primary/25 flex flex-col gap-2 min-h-[16rem] p-2.5 rounded-lg transition-colors" aria-label="3. In Progress bugs">
                        <div className="flex gap-2 h-8 items-center px-0.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <h3 className="font-semibold text-sm truncate">
                              {"3. In Progress"}
                            </h3>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"2"}
                            </Badge>
                          </div>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing cn-button cn-button-size-icon-xs cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center ml-auto opacity-100! outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move 3. In Progress column">
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
                        <KanbanColumnContent className="min-h-28">
                          <KanbanItem value="bug-301" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-card hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardContent className="flex flex-col min-h-[8.75rem] p-3">
                                  <div className="flex gap-2 items-start justify-between min-w-0">
                                    <div className="flex flex-wrap gap-1.5 items-center min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                                        {"UI"}
                                      </Badge>
                                      <span className="tabular-nums text-muted-foreground text-xs truncate">
                                        {"BUG-452"}
                                      </span>
                                      <span className="tabular-nums text-muted-foreground text-xs">
                                        {"P2"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                      {"On track"}
                                    </Badge>
                                  </div>
                                  <h3 className="font-medium leading-5 min-h-10 mt-3 text-sm">
                                    <span className="gap-1 group/task-title inline-flex items-start max-w-full min-w-0">
                                      <span className="cursor-pointer hover:text-primary line-clamp-2 py-0.25 transition-colors">
                                        {"Button text truncates when zoomed in"}
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right mt-1 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </h3>
                                  <div className="flex gap-2 items-center justify-between mt-auto pt-4">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar size="sm">
                                        <AvatarImage alt="Kai Chen" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium text-muted-foreground text-xs truncate">
                                        {"Kai Chen"}
                                      </span>
                                    </div>
                                    <div className="flex gap-1.5 items-center shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                          <path d="M8 2v4"></path>
                                          <path d="M16 2v4"></path>
                                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                          <path d="M3 10h18"></path>
                                          <path d="M8 14h.01"></path>
                                          <path d="M12 14h.01"></path>
                                          <path d="M16 14h.01"></path>
                                          <path d="M8 18h.01"></path>
                                          <path d="M12 18h.01"></path>
                                          <path d="M16 18h.01"></path>
                                        </svg>
                                        <span className="tabular-nums">
                                          {"Apr 27"}
                                        </span>
                                      </Badge>
                                      <span className="flex gap-1.5 items-center" aria-label="58% complete">
                                        <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                          <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                          <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="23.750440461138837" transform="rotate(-90 12 12)"></circle>
                                        </svg>
                                        <span className="tabular-nums text-foreground text-xs">
                                          {"58%"}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                          <KanbanItem value="bug-302" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-card hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardContent className="flex flex-col min-h-[8.75rem] p-3">
                                  <div className="flex gap-2 items-start justify-between min-w-0">
                                    <div className="flex flex-wrap gap-1.5 items-center min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-focus/10 border border-focus/15 dark:bg-focus/15 dark:border-focus/25 dark:text-focus disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-focus-foreground text-xs transition-shadow">
                                        {"Nav"}
                                      </Badge>
                                      <span className="tabular-nums text-muted-foreground text-xs truncate">
                                        {"BUG-459"}
                                      </span>
                                      <span className="tabular-nums text-muted-foreground text-xs">
                                        {"P2"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                      {"On track"}
                                    </Badge>
                                  </div>
                                  <h3 className="font-medium leading-5 min-h-10 mt-3 text-sm">
                                    <span className="gap-1 group/task-title inline-flex items-start max-w-full min-w-0">
                                      <span className="cursor-pointer hover:text-primary line-clamp-2 py-0.25 transition-colors">
                                        {"Navigation menu renders inconsistent font sizes"}
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right mt-1 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </h3>
                                  <div className="flex gap-2 items-center justify-between mt-auto pt-4">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar size="sm">
                                        <AvatarImage alt="Rae Kim" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium text-muted-foreground text-xs truncate">
                                        {"Rae Kim"}
                                      </span>
                                    </div>
                                    <div className="flex gap-1.5 items-center shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                          <path d="M8 2v4"></path>
                                          <path d="M16 2v4"></path>
                                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                          <path d="M3 10h18"></path>
                                          <path d="M8 14h.01"></path>
                                          <path d="M12 14h.01"></path>
                                          <path d="M16 14h.01"></path>
                                          <path d="M8 18h.01"></path>
                                          <path d="M12 18h.01"></path>
                                          <path d="M16 18h.01"></path>
                                        </svg>
                                        <span className="tabular-nums">
                                          {"Apr 29"}
                                        </span>
                                      </Badge>
                                      <span className="flex gap-1.5 items-center" aria-label="66% complete">
                                        <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                          <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                          <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="19.22654703996953" transform="rotate(-90 12 12)"></circle>
                                        </svg>
                                        <span className="tabular-nums text-foreground text-xs">
                                          {"66%"}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                        </KanbanColumnContent>
                      </section>
                    </KanbanColumn>
                    <KanbanColumn className="min-w-[17.5rem] w-[17.5rem]" value="needsInfo" dragging="false">
                      <section className="bg-destructive/[0.045] border border-destructive/20 dark:bg-destructive/10 dark:border-destructive/25 flex flex-col gap-2 min-h-[16rem] p-2.5 rounded-lg transition-colors" aria-label="4. Need Info bugs">
                        <div className="flex gap-2 h-8 items-center px-0.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <h3 className="font-semibold text-sm truncate">
                              {"4. Need Info"}
                            </h3>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"3"}
                            </Badge>
                          </div>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing cn-button cn-button-size-icon-xs cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center ml-auto opacity-100! outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move 4. Need Info column">
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
                        <KanbanColumnContent className="min-h-28">
                          <KanbanItem value="bug-401" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-card hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardContent className="flex flex-col min-h-[8.75rem] p-3">
                                  <div className="flex gap-2 items-start justify-between min-w-0">
                                    <div className="flex flex-wrap gap-1.5 items-center min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                        {"Mobile"}
                                      </Badge>
                                      <span className="tabular-nums text-muted-foreground text-xs truncate">
                                        {"BUG-467"}
                                      </span>
                                      <span className="tabular-nums text-muted-foreground text-xs">
                                        {"P0"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                      {"Blocked"}
                                    </Badge>
                                  </div>
                                  <h3 className="font-medium leading-5 min-h-10 mt-3 text-sm">
                                    <span className="gap-1 group/task-title inline-flex items-start max-w-full min-w-0">
                                      <span className="cursor-pointer hover:text-primary line-clamp-2 py-0.25 transition-colors">
                                        {"Mobile app crashes when opening report history"}
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right mt-1 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </h3>
                                  <div className="flex gap-2 items-center justify-between mt-auto pt-4">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar size="sm">
                                        <AvatarImage alt="Lina Ford" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium text-muted-foreground text-xs truncate">
                                        {"Lina Ford"}
                                      </span>
                                    </div>
                                    <div className="flex gap-1.5 items-center shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                          <path d="M8 2v4"></path>
                                          <path d="M16 2v4"></path>
                                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                          <path d="M3 10h18"></path>
                                          <path d="M8 14h.01"></path>
                                          <path d="M12 14h.01"></path>
                                          <path d="M16 14h.01"></path>
                                          <path d="M8 18h.01"></path>
                                          <path d="M12 18h.01"></path>
                                          <path d="M16 18h.01"></path>
                                        </svg>
                                        <span className="tabular-nums">
                                          {"Waiting"}
                                        </span>
                                      </Badge>
                                      <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs" aria-label="Completion not available">
                                        <span className="border border-border flex items-center justify-center rounded-full shrink-0 size-5">
                                          {"-"}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                          <KanbanItem value="bug-402" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-card hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardContent className="flex flex-col min-h-[8.75rem] p-3">
                                  <div className="flex gap-2 items-start justify-between min-w-0">
                                    <div className="flex flex-wrap gap-1.5 items-center min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                        {"Export"}
                                      </Badge>
                                      <span className="tabular-nums text-muted-foreground text-xs truncate">
                                        {"BUG-472"}
                                      </span>
                                      <span className="tabular-nums text-muted-foreground text-xs">
                                        {"P1"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                      {"At risk"}
                                    </Badge>
                                  </div>
                                  <h3 className="font-medium leading-5 min-h-10 mt-3 text-sm">
                                    <span className="gap-1 group/task-title inline-flex items-start max-w-full min-w-0">
                                      <span className="cursor-pointer hover:text-primary line-clamp-2 py-0.25 transition-colors">
                                        {"Data export creates broken report links"}
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right mt-1 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </h3>
                                  <div className="flex gap-2 items-center justify-between mt-auto pt-4">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar size="sm">
                                        <AvatarImage alt="Theo West" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium text-muted-foreground text-xs truncate">
                                        {"Theo West"}
                                      </span>
                                    </div>
                                    <div className="flex gap-1.5 items-center shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                          <path d="M8 2v4"></path>
                                          <path d="M16 2v4"></path>
                                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                          <path d="M3 10h18"></path>
                                          <path d="M8 14h.01"></path>
                                          <path d="M12 14h.01"></path>
                                          <path d="M16 14h.01"></path>
                                          <path d="M8 18h.01"></path>
                                          <path d="M12 18h.01"></path>
                                          <path d="M16 18h.01"></path>
                                        </svg>
                                        <span className="tabular-nums">
                                          {"Apr 28"}
                                        </span>
                                      </Badge>
                                      <span className="flex gap-1.5 items-center" aria-label="34% complete">
                                        <svg className="shrink-0 size-5 text-rose-500" viewBox="0 0 24 24" aria-hidden="true">
                                          <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                          <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="37.32212072464674" transform="rotate(-90 12 12)"></circle>
                                        </svg>
                                        <span className="tabular-nums text-foreground text-xs">
                                          {"34%"}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                          <KanbanItem value="bug-403" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-card hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardContent className="flex flex-col min-h-[8.75rem] p-3">
                                  <div className="flex gap-2 items-start justify-between min-w-0">
                                    <div className="flex flex-wrap gap-1.5 items-center min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                        {"CSV"}
                                      </Badge>
                                      <span className="tabular-nums text-muted-foreground text-xs truncate">
                                        {"BUG-475"}
                                      </span>
                                      <span className="tabular-nums text-muted-foreground text-xs">
                                        {"P1"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                      {"Blocked"}
                                    </Badge>
                                  </div>
                                  <h3 className="font-medium leading-5 min-h-10 mt-3 text-sm">
                                    <span className="gap-1 group/task-title inline-flex items-start max-w-full min-w-0">
                                      <span className="cursor-pointer hover:text-primary line-clamp-2 py-0.25 transition-colors">
                                        {"CSV upload fails for localized number formats"}
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right mt-1 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </h3>
                                  <div className="flex gap-2 items-center justify-between mt-auto pt-4">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar size="sm">
                                        <AvatarImage alt="Tara Quinn" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium text-muted-foreground text-xs truncate">
                                        {"Tara Quinn"}
                                      </span>
                                    </div>
                                    <div className="flex gap-1.5 items-center shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                          <path d="M8 2v4"></path>
                                          <path d="M16 2v4"></path>
                                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                          <path d="M3 10h18"></path>
                                          <path d="M8 14h.01"></path>
                                          <path d="M12 14h.01"></path>
                                          <path d="M16 14h.01"></path>
                                          <path d="M8 18h.01"></path>
                                          <path d="M12 18h.01"></path>
                                          <path d="M16 18h.01"></path>
                                        </svg>
                                        <span className="tabular-nums">
                                          {"Waiting"}
                                        </span>
                                      </Badge>
                                      <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs" aria-label="Completion not available">
                                        <span className="border border-border flex items-center justify-center rounded-full shrink-0 size-5">
                                          {"-"}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                        </KanbanColumnContent>
                      </section>
                    </KanbanColumn>
                    <KanbanColumn className="min-w-[17.5rem] w-[17.5rem]" value="testing" dragging="false">
                      <section className="bg-info/[0.045] border border-info/20 dark:bg-info/10 dark:border-info/25 flex flex-col gap-2 min-h-[16rem] p-2.5 rounded-lg transition-colors" aria-label="5. Testing bugs">
                        <div className="flex gap-2 h-8 items-center px-0.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <h3 className="font-semibold text-sm truncate">
                              {"5. Testing"}
                            </h3>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"2"}
                            </Badge>
                          </div>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing cn-button cn-button-size-icon-xs cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center ml-auto opacity-100! outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move 5. Testing column">
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
                        <KanbanColumnContent className="min-h-28">
                          <KanbanItem value="bug-501" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-card hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardContent className="flex flex-col min-h-[8.75rem] p-3">
                                  <div className="flex gap-2 items-start justify-between min-w-0">
                                    <div className="flex flex-wrap gap-1.5 items-center min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                        {"Sync"}
                                      </Badge>
                                      <span className="tabular-nums text-muted-foreground text-xs truncate">
                                        {"BUG-486"}
                                      </span>
                                      <span className="tabular-nums text-muted-foreground text-xs">
                                        {"P1"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                      {"On track"}
                                    </Badge>
                                  </div>
                                  <h3 className="font-medium leading-5 min-h-10 mt-3 text-sm">
                                    <span className="gap-1 group/task-title inline-flex items-start max-w-full min-w-0">
                                      <span className="cursor-pointer hover:text-primary line-clamp-2 py-0.25 transition-colors">
                                        {"Mobile app is not syncing with web app"}
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right mt-1 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </h3>
                                  <div className="flex gap-2 items-center justify-between mt-auto pt-4">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar size="sm">
                                        <AvatarImage alt="Iris Fox" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium text-muted-foreground text-xs truncate">
                                        {"Iris Fox"}
                                      </span>
                                    </div>
                                    <div className="flex gap-1.5 items-center shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                          <path d="M8 2v4"></path>
                                          <path d="M16 2v4"></path>
                                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                          <path d="M3 10h18"></path>
                                          <path d="M8 14h.01"></path>
                                          <path d="M12 14h.01"></path>
                                          <path d="M16 14h.01"></path>
                                          <path d="M8 18h.01"></path>
                                          <path d="M12 18h.01"></path>
                                          <path d="M16 18h.01"></path>
                                        </svg>
                                        <span className="tabular-nums">
                                          {"Today"}
                                        </span>
                                      </Badge>
                                      <span className="flex gap-1.5 items-center" aria-label="82% complete">
                                        <svg className="shrink-0 size-5 text-emerald-500" viewBox="0 0 24 24" aria-hidden="true">
                                          <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                          <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="10.178760197630929" transform="rotate(-90 12 12)"></circle>
                                        </svg>
                                        <span className="tabular-nums text-foreground text-xs">
                                          {"82%"}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                          <KanbanItem value="bug-502" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-card hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardContent className="flex flex-col min-h-[8.75rem] p-3">
                                  <div className="flex gap-2 items-start justify-between min-w-0">
                                    <div className="flex flex-wrap gap-1.5 items-center min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                                        {"Billing"}
                                      </Badge>
                                      <span className="tabular-nums text-muted-foreground text-xs truncate">
                                        {"BUG-488"}
                                      </span>
                                      <span className="tabular-nums text-muted-foreground text-xs">
                                        {"P2"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                      {"On track"}
                                    </Badge>
                                  </div>
                                  <h3 className="font-medium leading-5 min-h-10 mt-3 text-sm">
                                    <span className="gap-1 group/task-title inline-flex items-start max-w-full min-w-0">
                                      <span className="cursor-pointer hover:text-primary line-clamp-2 py-0.25 transition-colors">
                                        {"Regression suite misses billing plan changes"}
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right mt-1 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </h3>
                                  <div className="flex gap-2 items-center justify-between mt-auto pt-4">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar size="sm">
                                        <AvatarImage alt="Sam Reed" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium text-muted-foreground text-xs truncate">
                                        {"Sam Reed"}
                                      </span>
                                    </div>
                                    <div className="flex gap-1.5 items-center shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                          <path d="M8 2v4"></path>
                                          <path d="M16 2v4"></path>
                                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                          <path d="M3 10h18"></path>
                                          <path d="M8 14h.01"></path>
                                          <path d="M12 14h.01"></path>
                                          <path d="M16 14h.01"></path>
                                          <path d="M8 18h.01"></path>
                                          <path d="M12 18h.01"></path>
                                          <path d="M16 18h.01"></path>
                                        </svg>
                                        <span className="tabular-nums">
                                          {"Apr 26"}
                                        </span>
                                      </Badge>
                                      <span className="flex gap-1.5 items-center" aria-label="74% complete">
                                        <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                          <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                          <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="14.702653618800234" transform="rotate(-90 12 12)"></circle>
                                        </svg>
                                        <span className="tabular-nums text-foreground text-xs">
                                          {"74%"}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                        </KanbanColumnContent>
                      </section>
                    </KanbanColumn>
                    <KanbanColumn className="min-w-[17.5rem] w-[17.5rem]" value="cannotReproduce" dragging="false">
                      <section className="bg-success/[0.045] border border-success/20 dark:bg-success/10 dark:border-success/25 flex flex-col gap-2 min-h-[16rem] p-2.5 rounded-lg transition-colors" aria-label="6. Done bugs">
                        <div className="flex gap-2 h-8 items-center px-0.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <h3 className="font-semibold text-sm truncate">
                              {"6. Done"}
                            </h3>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"2"}
                            </Badge>
                          </div>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing cn-button cn-button-size-icon-xs cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center ml-auto opacity-100! outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move 6. Done column">
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
                        <KanbanColumnContent className="min-h-28">
                          <KanbanItem value="bug-601" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-muted/40 hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardContent className="flex flex-col min-h-[8.75rem] p-3">
                                  <div className="flex gap-2 items-start justify-between min-w-0">
                                    <div className="flex flex-wrap gap-1.5 items-center min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                        {"QA"}
                                      </Badge>
                                      <span className="tabular-nums text-muted-foreground text-xs truncate">
                                        {"BUG-490"}
                                      </span>
                                      <span className="tabular-nums text-muted-foreground text-xs">
                                        {"P3"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                      {"On track"}
                                    </Badge>
                                  </div>
                                  <h3 className="font-medium leading-5 min-h-10 mt-3 text-sm">
                                    <span className="gap-1 group/task-title inline-flex items-start max-w-full min-w-0">
                                      <span className="cursor-pointer hover:text-primary line-clamp-2 line-through py-0.25 text-muted-foreground transition-colors">
                                        {"Setup regression checklist before release"}
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right mt-1 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </h3>
                                  <div className="flex gap-2 items-center justify-between mt-auto pt-4">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar size="sm">
                                        <AvatarImage alt="Milo Sage" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium text-muted-foreground text-xs truncate">
                                        {"Milo Sage"}
                                      </span>
                                    </div>
                                    <div className="flex gap-1.5 items-center shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                          <path d="M8 2v4"></path>
                                          <path d="M16 2v4"></path>
                                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                          <path d="M3 10h18"></path>
                                          <path d="M8 14h.01"></path>
                                          <path d="M12 14h.01"></path>
                                          <path d="M16 14h.01"></path>
                                          <path d="M8 18h.01"></path>
                                          <path d="M12 18h.01"></path>
                                          <path d="M16 18h.01"></path>
                                        </svg>
                                        <span className="tabular-nums">
                                          {"Apr 23"}
                                        </span>
                                      </Badge>
                                      <span className="flex gap-1.5 items-center" aria-label="100% complete">
                                        <svg className="shrink-0 size-5 text-emerald-500" viewBox="0 0 24 24" aria-hidden="true">
                                          <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                          <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="0" transform="rotate(-90 12 12)"></circle>
                                        </svg>
                                        <span className="tabular-nums text-foreground text-xs">
                                          {"100%"}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                          <KanbanItem value="bug-602" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-muted/40 hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardContent className="flex flex-col min-h-[8.75rem] p-3">
                                  <div className="flex gap-2 items-start justify-between min-w-0">
                                    <div className="flex flex-wrap gap-1.5 items-center min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                        {"Docs"}
                                      </Badge>
                                      <span className="tabular-nums text-muted-foreground text-xs truncate">
                                        {"BUG-492"}
                                      </span>
                                      <span className="tabular-nums text-muted-foreground text-xs">
                                        {"P3"}
                                      </span>
                                    </div>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                      {"On track"}
                                    </Badge>
                                  </div>
                                  <h3 className="font-medium leading-5 min-h-10 mt-3 text-sm">
                                    <span className="gap-1 group/task-title inline-flex items-start max-w-full min-w-0">
                                      <span className="cursor-pointer hover:text-primary line-clamp-2 line-through py-0.25 text-muted-foreground transition-colors">
                                        {"Archive stale browser compatibility notes"}
                                      </span>
                                      <svg className="-translate-x-1 group-hover/task-title:opacity-100 group-hover/task-title:translate-x-0 lucide lucide-arrow-right mt-1 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </h3>
                                  <div className="flex gap-2 items-center justify-between mt-auto pt-4">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar size="sm">
                                        <AvatarImage alt="Dina Cruz" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium text-muted-foreground text-xs truncate">
                                        {"Dina Cruz"}
                                      </span>
                                    </div>
                                    <div className="flex gap-1.5 items-center shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        <svg className="lucide lucide-calendar-days size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                          <path d="M8 2v4"></path>
                                          <path d="M16 2v4"></path>
                                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                          <path d="M3 10h18"></path>
                                          <path d="M8 14h.01"></path>
                                          <path d="M12 14h.01"></path>
                                          <path d="M16 14h.01"></path>
                                          <path d="M8 18h.01"></path>
                                          <path d="M12 18h.01"></path>
                                          <path d="M16 18h.01"></path>
                                        </svg>
                                        <span className="tabular-nums">
                                          {"Apr 24"}
                                        </span>
                                      </Badge>
                                      <span className="flex gap-1.5 items-center" aria-label="100% complete">
                                        <svg className="shrink-0 size-5 text-emerald-500" viewBox="0 0 24 24" aria-hidden="true">
                                          <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                          <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="0" transform="rotate(-90 12 12)"></circle>
                                        </svg>
                                        <span className="tabular-nums text-foreground text-xs">
                                          {"100%"}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                        </KanbanColumnContent>
                      </section>
                    </KanbanColumn>
                  </KanbanBoard>
                </div>
              </div>
              <div className="data-horizontal:border-t data-horizontal:border-t-transparent data-horizontal:flex-col data-horizontal:h-2.5 data-vertical:border-l data-vertical:border-l-transparent data-vertical:h-full data-vertical:w-2.5 flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_r_0_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "795.2173913043479px"}}>
                <div className="bg-foreground/15 flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
              </div>
            </ScrollArea>
          </Kanban>
          <div id="DndDescribedBy-0" style={{display: "none"}}>
            {"To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel."}
          </div>
          <div id="DndLiveRegion-0" role="status" aria-live="assertive" aria-atomic="true" style={{position: "fixed", top: "0px", left: "0px", width: "1px", height: "1px", margin: "-1px", border: "0px", padding: "0px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(100%)", whiteSpace: "nowrap"}}></div>
        </div>
      </section>
    </main>
  )
}
