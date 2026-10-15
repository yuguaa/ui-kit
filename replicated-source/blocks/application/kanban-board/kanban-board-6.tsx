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
    <main className="bg-background flex justify-center p-4 sm:p-6 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Support escalation kanban board"}
      </h1>
      <section className="flex flex-col gap-4 max-w-[1280px] mx-auto w-full">
        <header className="px-1 py-1" aria-label="Support escalation toolbar">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <h2 className="font-semibold text-base truncate">
                {"Support Escalations"}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 items-center md:justify-end md:w-auto w-full" role="group" aria-label="Board actions">
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                </svg>
                {"Filters"}
              </Button>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                {"Ticket"}
              </Button>
            </div>
          </div>
        </header>
        <Kanban className="max-w-full w-full" dragging="false">
          <ScrollArea className="pb-3 w-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" overflowXEnd="">
            <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-lg transition-[color,box-shadow] w-full" role="presentation" data-id="base-ui-_r_0_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "412px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-x="" data-overflow-x-end="">
              <div className="min-w-max" role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-overflow-x-end="">
                <KanbanBoard className="flex gap-5 items-start p-1 w-max">
                  <KanbanColumn className="self-start shrink-0 w-64" value="new" dragging="false">
                    <Card className="bg-muted/40 gap-0 group/column overflow-hidden p-0 w-full" size="sm" aria-label="New: New intake">
                      <CardHeader className="flex flex-row gap-2 items-center min-h-9 px-2 py-2">
                        <span className="[&>svg]:block [&>svg]:size-4 dark:text-sky-300 flex items-center justify-center leading-none shrink-0 size-4 text-sky-600" aria-hidden="true">
                          <svg className="lucide lucide-circle-dot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDotIcon" tabler="IconCircleDot" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiRecordCircleLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="12" r="1"></circle>
                          </svg>
                        </span>
                        <div className="flex flex-1 gap-2 items-center min-w-0">
                          <span className="font-semibold leading-5 text-sm truncate" title="New">
                            {"New"}
                          </span>
                          <span className="font-medium inline-flex items-center leading-none self-center shrink-0 tabular-nums text-muted-foreground text-xs">
                            {"2"}
                          </span>
                        </div>
                        <div className="flex gap-1 group-focus-within/column:opacity-100 group-hover/column:opacity-100 items-center opacity-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Add new ticket">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move New column">
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
                          <KanbanItem value="ticket-10482" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Item className="bg-card border-amber-300/70 dark:border-amber-400/35 gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch transition-[border-color,box-shadow]" variant="outline" size="sm">
                                <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <ItemDescription className="font-medium leading-none tabular-nums text-[0.6875rem] text-muted-foreground">
                                      {"SUP-10482"}
                                    </ItemDescription>
                                    <ItemActions className="shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"High"}
                                      </Badge>
                                    </ItemActions>
                                  </div>
                                  <ItemContent className="gap-1 min-w-0">
                                    <ItemTitle className="font-semibold leading-5 line-clamp-2 text-sm w-auto" title="Export job stuck after regional data residency switch">
                                      {"Export job stuck after regional data residency switch"}
                                    </ItemTitle>
                                    <ItemDescription className="line-clamp-1 text-xs">
                                      <span className="min-w-0 truncate" title="Alicia Wong at Northstar Bio">
                                        {"Alicia Wong at Northstar Bio"}
                                      </span>
                                    </ItemDescription>
                                  </ItemContent>
                                </ItemHeader>
                                <ItemFooter className="gap-3 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <AvatarImage alt="Maya Ito" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="font-medium min-w-0 text-xs truncate" title="Maya Ito">
                                      {"Maya Ito"}
                                    </div>
                                  </div>
                                  <span className="bg-amber-50 border border-amber-300 dark:bg-amber-400/10 dark:border-amber-400/35 dark:text-amber-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-amber-800" aria-label="Response due in 1h 45m" title="Response due in 1h 45m">
                                    <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="font-semibold shrink-0 tabular-nums">
                                      {"1h 45m"}
                                    </span>
                                  </span>
                                </ItemFooter>
                              </Item>
                            </KanbanItemHandle>
                          </KanbanItem>
                          <KanbanItem value="ticket-10483" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Item className="bg-card gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch transition-[border-color,box-shadow]" variant="outline" size="sm">
                                <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <ItemDescription className="font-medium leading-none tabular-nums text-[0.6875rem] text-muted-foreground">
                                      {"SUP-10483"}
                                    </ItemDescription>
                                    <ItemActions className="shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Normal"}
                                      </Badge>
                                    </ItemActions>
                                  </div>
                                  <ItemContent className="gap-1 min-w-0">
                                    <ItemTitle className="font-semibold leading-5 line-clamp-2 text-sm w-auto" title="SSO group mapping not applying to new finance workspace">
                                      {"SSO group mapping not applying to new finance workspace"}
                                    </ItemTitle>
                                    <ItemDescription className="line-clamp-1 text-xs">
                                      <span className="min-w-0 truncate" title="Jon Bell at Meridian Works">
                                        {"Jon Bell at Meridian Works"}
                                      </span>
                                    </ItemDescription>
                                  </ItemContent>
                                </ItemHeader>
                                <ItemFooter className="gap-3 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <AvatarImage alt="Omar Haddad" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="font-medium min-w-0 text-xs truncate" title="Omar Haddad">
                                      {"Omar Haddad"}
                                    </div>
                                  </div>
                                  <span className="bg-sky-50 border border-sky-200 dark:bg-sky-500/10 dark:border-sky-500/30 dark:text-sky-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-sky-700" aria-label="Response due in 3h 20m" title="Response due in 3h 20m">
                                    <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="font-semibold shrink-0 tabular-nums">
                                      {"3h 20m"}
                                    </span>
                                  </span>
                                </ItemFooter>
                              </Item>
                            </KanbanItemHandle>
                          </KanbanItem>
                        </KanbanColumnContent>
                        <Button className="bg-transparent border border-transparent font-normal h-8 hover:bg-background! hover:border-border! hover:text-foreground px-2 text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add new ticket">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          {"Add ticket"}
                        </Button>
                      </CardContent>
                    </Card>
                  </KanbanColumn>
                  <KanbanColumn className="self-start shrink-0 w-64" value="needsReply" dragging="false">
                    <Card className="bg-muted/40 gap-0 group/column overflow-hidden p-0 w-full" size="sm" aria-label="Needs Reply: Reply due">
                      <CardHeader className="flex flex-row gap-2 items-center min-h-9 px-2 py-2">
                        <span className="[&>svg]:block [&>svg]:size-4 dark:text-indigo-300 flex items-center justify-center leading-none shrink-0 size-4 text-indigo-600" aria-hidden="true">
                          <svg className="lucide lucide-message-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                          </svg>
                        </span>
                        <div className="flex flex-1 gap-2 items-center min-w-0">
                          <span className="font-semibold leading-5 text-sm truncate" title="Needs Reply">
                            {"Needs Reply"}
                          </span>
                          <span className="font-medium inline-flex items-center leading-none self-center shrink-0 tabular-nums text-muted-foreground text-xs">
                            {"3"}
                          </span>
                        </div>
                        <div className="flex gap-1 group-focus-within/column:opacity-100 group-hover/column:opacity-100 items-center opacity-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Add reply ticket">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Needs Reply column">
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
                          <KanbanItem value="ticket-10451" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Item className="bg-card border-amber-300/70 dark:border-amber-400/35 gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch transition-[border-color,box-shadow]" variant="outline" size="sm">
                                <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <ItemDescription className="font-medium leading-none tabular-nums text-[0.6875rem] text-muted-foreground">
                                      {"SUP-10451"}
                                    </ItemDescription>
                                    <ItemActions className="shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"High"}
                                      </Badge>
                                    </ItemActions>
                                  </div>
                                  <ItemContent className="gap-1 min-w-0">
                                    <ItemTitle className="font-semibold leading-5 line-clamp-2 text-sm w-auto" title="Workspace audit stream missing approval events">
                                      {"Workspace audit stream missing approval events"}
                                    </ItemTitle>
                                    <ItemDescription className="line-clamp-1 text-xs">
                                      <span className="min-w-0 truncate" title="Sofia Klein at Aster Capital">
                                        {"Sofia Klein at Aster Capital"}
                                      </span>
                                    </ItemDescription>
                                  </ItemContent>
                                </ItemHeader>
                                <ItemFooter className="gap-3 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <AvatarImage alt="Priya Shah" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="font-medium min-w-0 text-xs truncate" title="Priya Shah">
                                      {"Priya Shah"}
                                    </div>
                                  </div>
                                  <span className="bg-amber-50 border border-amber-300 dark:bg-amber-400/10 dark:border-amber-400/35 dark:text-amber-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-amber-800" aria-label="Response due in 52m" title="Response due in 52m">
                                    <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="font-semibold shrink-0 tabular-nums">
                                      {"52m"}
                                    </span>
                                  </span>
                                </ItemFooter>
                              </Item>
                            </KanbanItemHandle>
                          </KanbanItem>
                          <KanbanItem value="ticket-10459" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Item className="bg-card gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch transition-[border-color,box-shadow]" variant="outline" size="sm">
                                <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <ItemDescription className="font-medium leading-none tabular-nums text-[0.6875rem] text-muted-foreground">
                                      {"SUP-10459"}
                                    </ItemDescription>
                                    <ItemActions className="shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Normal"}
                                      </Badge>
                                    </ItemActions>
                                  </div>
                                  <ItemContent className="gap-1 min-w-0">
                                    <ItemTitle className="font-semibold leading-5 line-clamp-2 text-sm w-auto" title="Billing contact cannot download April invoice bundle">
                                      {"Billing contact cannot download April invoice bundle"}
                                    </ItemTitle>
                                    <ItemDescription className="line-clamp-1 text-xs">
                                      <span className="min-w-0 truncate" title="Theo Martins at Civic Cloud">
                                        {"Theo Martins at Civic Cloud"}
                                      </span>
                                    </ItemDescription>
                                  </ItemContent>
                                </ItemHeader>
                                <ItemFooter className="gap-3 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <AvatarImage alt="Marcus Chen" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="font-medium min-w-0 text-xs truncate" title="Marcus Chen">
                                      {"Marcus Chen"}
                                    </div>
                                  </div>
                                  <span className="bg-sky-50 border border-sky-200 dark:bg-sky-500/10 dark:border-sky-500/30 dark:text-sky-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-sky-700" aria-label="Response due in 4h 05m" title="Response due in 4h 05m">
                                    <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="font-semibold shrink-0 tabular-nums">
                                      {"4h 05m"}
                                    </span>
                                  </span>
                                </ItemFooter>
                              </Item>
                            </KanbanItemHandle>
                          </KanbanItem>
                          <KanbanItem value="ticket-10466" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Item className="bg-card gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch transition-[border-color,box-shadow]" variant="outline" size="sm">
                                <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <ItemDescription className="font-medium leading-none tabular-nums text-[0.6875rem] text-muted-foreground">
                                      {"SUP-10466"}
                                    </ItemDescription>
                                    <ItemActions className="shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Low"}
                                      </Badge>
                                    </ItemActions>
                                  </div>
                                  <ItemContent className="gap-1 min-w-0">
                                    <ItemTitle className="font-semibold leading-5 line-clamp-2 text-sm w-auto" title="Saved view permissions differ between parent and child teams">
                                      {"Saved view permissions differ between parent and child teams"}
                                    </ItemTitle>
                                    <ItemDescription className="line-clamp-1 text-xs">
                                      <span className="min-w-0 truncate" title="Nina Patel at Harbor Grid">
                                        {"Nina Patel at Harbor Grid"}
                                      </span>
                                    </ItemDescription>
                                  </ItemContent>
                                </ItemHeader>
                                <ItemFooter className="gap-3 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <AvatarImage alt="Elena Torres" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="font-medium min-w-0 text-xs truncate" title="Elena Torres">
                                      {"Elena Torres"}
                                    </div>
                                  </div>
                                  <span className="bg-sky-50 border border-sky-200 dark:bg-sky-500/10 dark:border-sky-500/30 dark:text-sky-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-sky-700" aria-label="Response due in 7h 10m" title="Response due in 7h 10m">
                                    <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="font-semibold shrink-0 tabular-nums">
                                      {"7h 10m"}
                                    </span>
                                  </span>
                                </ItemFooter>
                              </Item>
                            </KanbanItemHandle>
                          </KanbanItem>
                        </KanbanColumnContent>
                        <Button className="bg-transparent border border-transparent font-normal h-8 hover:bg-background! hover:border-border! hover:text-foreground px-2 text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add reply ticket">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          {"Add ticket"}
                        </Button>
                      </CardContent>
                    </Card>
                  </KanbanColumn>
                  <KanbanColumn className="self-start shrink-0 w-64" value="engineeringEscalation" dragging="false">
                    <Card className="bg-muted/40 gap-0 group/column overflow-hidden p-0 w-full" size="sm" aria-label="Engineering: Escalated handoff">
                      <CardHeader className="flex flex-row gap-2 items-center min-h-9 px-2 py-2">
                        <span className="[&>svg]:block [&>svg]:size-4 dark:text-violet-300 flex items-center justify-center leading-none shrink-0 size-4 text-violet-600" aria-hidden="true">
                          <svg className="lucide lucide-wrench" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WrenchIcon" tabler="IconTool" hugeicons="Wrench01Icon" phosphor="WrenchIcon" remixicon="RiToolsLine" aria-hidden="true">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                          </svg>
                        </span>
                        <div className="flex flex-1 gap-2 items-center min-w-0">
                          <span className="font-semibold leading-5 text-sm truncate" title="Engineering">
                            {"Engineering"}
                          </span>
                          <span className="font-medium inline-flex items-center leading-none self-center shrink-0 tabular-nums text-muted-foreground text-xs">
                            {"2"}
                          </span>
                        </div>
                        <div className="flex gap-1 group-focus-within/column:opacity-100 group-hover/column:opacity-100 items-center opacity-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Add engineering ticket">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Engineering column">
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
                          <KanbanItem value="ticket-10392" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Item className="bg-red-50/20 border-red-300/90 dark:bg-red-950/10 dark:border-red-400/40 gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch transition-[border-color,box-shadow]" variant="outline" size="sm">
                                <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <ItemDescription className="font-medium leading-none tabular-nums text-[0.6875rem] text-muted-foreground">
                                      {"SUP-10392"}
                                    </ItemDescription>
                                    <ItemActions className="shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        <span className="bg-red-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Urgent"}
                                      </Badge>
                                    </ItemActions>
                                  </div>
                                  <ItemContent className="gap-1 min-w-0">
                                    <ItemTitle className="font-semibold leading-5 line-clamp-2 text-sm w-auto" title="Webhook retries duplicate seat change events">
                                      {"Webhook retries duplicate seat change events"}
                                    </ItemTitle>
                                    <ItemDescription className="line-clamp-1 text-xs">
                                      <span className="min-w-0 truncate" title="Iris Novak at LedgerPoint">
                                        {"Iris Novak at LedgerPoint"}
                                      </span>
                                    </ItemDescription>
                                  </ItemContent>
                                </ItemHeader>
                                <ItemFooter className="gap-3 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <AvatarImage alt="Priya Shah" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="font-medium min-w-0 text-xs truncate" title="Priya Shah">
                                      {"Priya Shah"}
                                    </div>
                                  </div>
                                  <span className="bg-red-50 border border-red-300 dark:bg-red-400/10 dark:border-red-400/35 dark:text-red-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-red-700" aria-label="Breach risk in 36m" title="Breach risk in 36m">
                                    <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="font-semibold shrink-0 tabular-nums">
                                      {"36m"}
                                    </span>
                                  </span>
                                </ItemFooter>
                              </Item>
                            </KanbanItemHandle>
                          </KanbanItem>
                          <KanbanItem value="ticket-10410" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Item className="bg-card border-amber-300/70 dark:border-amber-400/35 gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch transition-[border-color,box-shadow]" variant="outline" size="sm">
                                <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <ItemDescription className="font-medium leading-none tabular-nums text-[0.6875rem] text-muted-foreground">
                                      {"SUP-10410"}
                                    </ItemDescription>
                                    <ItemActions className="shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"High"}
                                      </Badge>
                                    </ItemActions>
                                  </div>
                                  <ItemContent className="gap-1 min-w-0">
                                    <ItemTitle className="font-semibold leading-5 line-clamp-2 text-sm w-auto" title="EU shard search results omit recently migrated projects">
                                      {"EU shard search results omit recently migrated projects"}
                                    </ItemTitle>
                                    <ItemDescription className="line-clamp-1 text-xs">
                                      <span className="min-w-0 truncate" title="Mateo Ruiz at Atlas Legal">
                                        {"Mateo Ruiz at Atlas Legal"}
                                      </span>
                                    </ItemDescription>
                                  </ItemContent>
                                </ItemHeader>
                                <ItemFooter className="gap-3 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <AvatarImage alt="Omar Haddad" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="font-medium min-w-0 text-xs truncate" title="Omar Haddad">
                                      {"Omar Haddad"}
                                    </div>
                                  </div>
                                  <span className="bg-amber-50 border border-amber-300 dark:bg-amber-400/10 dark:border-amber-400/35 dark:text-amber-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-amber-800" aria-label="Response due in 2h 15m" title="Response due in 2h 15m">
                                    <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="font-semibold shrink-0 tabular-nums">
                                      {"2h 15m"}
                                    </span>
                                  </span>
                                </ItemFooter>
                              </Item>
                            </KanbanItemHandle>
                          </KanbanItem>
                        </KanbanColumnContent>
                        <Button className="bg-transparent border border-transparent font-normal h-8 hover:bg-background! hover:border-border! hover:text-foreground px-2 text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add engineering ticket">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          {"Add ticket"}
                        </Button>
                      </CardContent>
                    </Card>
                  </KanbanColumn>
                  <KanbanColumn className="self-start shrink-0 w-64" value="waitingCustomer" dragging="false">
                    <Card className="bg-muted/40 gap-0 group/column overflow-hidden p-0 w-full" size="sm" aria-label="Waiting Customer: Customer wait">
                      <CardHeader className="flex flex-row gap-2 items-center min-h-9 px-2 py-2">
                        <span className="[&>svg]:block [&>svg]:size-4 dark:text-cyan-300 flex items-center justify-center leading-none shrink-0 size-4 text-cyan-600" aria-hidden="true">
                          <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 6v6l4 2"></path>
                          </svg>
                        </span>
                        <div className="flex flex-1 gap-2 items-center min-w-0">
                          <span className="font-semibold leading-5 text-sm truncate" title="Waiting Customer">
                            {"Waiting Customer"}
                          </span>
                          <span className="font-medium inline-flex items-center leading-none self-center shrink-0 tabular-nums text-muted-foreground text-xs">
                            {"2"}
                          </span>
                        </div>
                        <div className="flex gap-1 group-focus-within/column:opacity-100 group-hover/column:opacity-100 items-center opacity-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Add waiting ticket">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Waiting Customer column">
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
                          <KanbanItem value="ticket-10437" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Item className="bg-card gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch transition-[border-color,box-shadow]" variant="outline" size="sm">
                                <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <ItemDescription className="font-medium leading-none tabular-nums text-[0.6875rem] text-muted-foreground">
                                      {"SUP-10437"}
                                    </ItemDescription>
                                    <ItemActions className="shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Normal"}
                                      </Badge>
                                    </ItemActions>
                                  </div>
                                  <ItemContent className="gap-1 min-w-0">
                                    <ItemTitle className="font-semibold leading-5 line-clamp-2 text-sm w-auto" title="Confirm SCIM token rotation window for APAC tenant">
                                      {"Confirm SCIM token rotation window for APAC tenant"}
                                    </ItemTitle>
                                    <ItemDescription className="line-clamp-1 text-xs">
                                      <span className="min-w-0 truncate" title="Grace Liu at Quantix Bank">
                                        {"Grace Liu at Quantix Bank"}
                                      </span>
                                    </ItemDescription>
                                  </ItemContent>
                                </ItemHeader>
                                <ItemFooter className="gap-3 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <AvatarImage alt="Maya Ito" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="font-medium min-w-0 text-xs truncate" title="Maya Ito">
                                      {"Maya Ito"}
                                    </div>
                                  </div>
                                  <span className="bg-zinc-50 border border-zinc-200 dark:bg-zinc-800/70 dark:border-zinc-700 dark:text-zinc-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-zinc-700" aria-label="Paused in Paused" title="Paused in Paused">
                                    <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="font-semibold shrink-0 tabular-nums">
                                      {"Paused"}
                                    </span>
                                  </span>
                                </ItemFooter>
                              </Item>
                            </KanbanItemHandle>
                          </KanbanItem>
                          <KanbanItem value="ticket-10444" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Item className="bg-card gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch transition-[border-color,box-shadow]" variant="outline" size="sm">
                                <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <ItemDescription className="font-medium leading-none tabular-nums text-[0.6875rem] text-muted-foreground">
                                      {"SUP-10444"}
                                    </ItemDescription>
                                    <ItemActions className="shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Low"}
                                      </Badge>
                                    </ItemActions>
                                  </div>
                                  <ItemContent className="gap-1 min-w-0">
                                    <ItemTitle className="font-semibold leading-5 line-clamp-2 text-sm w-auto" title="Approve temporary allowlist for partner sandbox">
                                      {"Approve temporary allowlist for partner sandbox"}
                                    </ItemTitle>
                                    <ItemDescription className="line-clamp-1 text-xs">
                                      <span className="min-w-0 truncate" title="Evan Brooks at Fieldstone Labs">
                                        {"Evan Brooks at Fieldstone Labs"}
                                      </span>
                                    </ItemDescription>
                                  </ItemContent>
                                </ItemHeader>
                                <ItemFooter className="gap-3 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <AvatarImage alt="Elena Torres" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="font-medium min-w-0 text-xs truncate" title="Elena Torres">
                                      {"Elena Torres"}
                                    </div>
                                  </div>
                                  <span className="bg-zinc-50 border border-zinc-200 dark:bg-zinc-800/70 dark:border-zinc-700 dark:text-zinc-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-zinc-700" aria-label="Paused in Paused" title="Paused in Paused">
                                    <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="font-semibold shrink-0 tabular-nums">
                                      {"Paused"}
                                    </span>
                                  </span>
                                </ItemFooter>
                              </Item>
                            </KanbanItemHandle>
                          </KanbanItem>
                        </KanbanColumnContent>
                        <Button className="bg-transparent border border-transparent font-normal h-8 hover:bg-background! hover:border-border! hover:text-foreground px-2 text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add waiting ticket">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          {"Add ticket"}
                        </Button>
                      </CardContent>
                    </Card>
                  </KanbanColumn>
                  <KanbanColumn className="self-start shrink-0 w-64" value="slaRisk" dragging="false">
                    <Card className="bg-muted/40 gap-0 group/column overflow-hidden p-0 w-full" size="sm" aria-label="SLA Risk: Breach risk">
                      <CardHeader className="flex flex-row gap-2 items-center min-h-9 px-2 py-2">
                        <span className="[&>svg]:block [&>svg]:size-4 dark:text-red-300 flex items-center justify-center leading-none shrink-0 size-4 text-red-600" aria-hidden="true">
                          <svg className="lucide lucide-triangle-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                            <path d="M12 9v4"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </span>
                        <div className="flex flex-1 gap-2 items-center min-w-0">
                          <span className="font-semibold leading-5 text-sm truncate" title="SLA Risk">
                            {"SLA Risk"}
                          </span>
                          <span className="font-medium inline-flex items-center leading-none self-center shrink-0 tabular-nums text-muted-foreground text-xs">
                            {"2"}
                          </span>
                        </div>
                        <div className="flex gap-1 group-focus-within/column:opacity-100 group-hover/column:opacity-100 items-center opacity-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Add SLA risk ticket">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move SLA Risk column">
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
                          <KanbanItem value="ticket-10472" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Item className="bg-red-50/20 border-red-300/90 dark:bg-red-950/10 dark:border-red-400/40 gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch transition-[border-color,box-shadow]" variant="outline" size="sm">
                                <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <ItemDescription className="font-medium leading-none tabular-nums text-[0.6875rem] text-muted-foreground">
                                      {"SUP-10472"}
                                    </ItemDescription>
                                    <ItemActions className="shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        <span className="bg-red-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Urgent"}
                                      </Badge>
                                    </ItemActions>
                                  </div>
                                  <ItemContent className="gap-1 min-w-0">
                                    <ItemTitle className="font-semibold leading-5 line-clamp-2 text-sm w-auto" title="Production admins locked out after enforced SAML change">
                                      {"Production admins locked out after enforced SAML change"}
                                    </ItemTitle>
                                    <ItemDescription className="line-clamp-1 text-xs">
                                      <span className="min-w-0 truncate" title="Noah Grant at Summit Health">
                                        {"Noah Grant at Summit Health"}
                                      </span>
                                    </ItemDescription>
                                  </ItemContent>
                                </ItemHeader>
                                <ItemFooter className="gap-3 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <AvatarImage alt="Marcus Chen" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="font-medium min-w-0 text-xs truncate" title="Marcus Chen">
                                      {"Marcus Chen"}
                                    </div>
                                  </div>
                                  <span className="bg-red-50 border border-red-300 dark:bg-red-400/10 dark:border-red-400/35 dark:text-red-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-red-700" aria-label="Breach risk in 18m" title="Breach risk in 18m">
                                    <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="font-semibold shrink-0 tabular-nums">
                                      {"18m"}
                                    </span>
                                  </span>
                                </ItemFooter>
                              </Item>
                            </KanbanItemHandle>
                          </KanbanItem>
                          <KanbanItem value="ticket-10476" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Item className="bg-red-50/20 border-red-300/90 dark:bg-red-950/10 dark:border-red-400/40 gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch transition-[border-color,box-shadow]" variant="outline" size="sm">
                                <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <ItemDescription className="font-medium leading-none tabular-nums text-[0.6875rem] text-muted-foreground">
                                      {"SUP-10476"}
                                    </ItemDescription>
                                    <ItemActions className="shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"High"}
                                      </Badge>
                                    </ItemActions>
                                  </div>
                                  <ItemContent className="gap-1 min-w-0">
                                    <ItemTitle className="font-semibold leading-5 line-clamp-2 text-sm w-auto" title="Regional failover report not visible to compliance team">
                                      {"Regional failover report not visible to compliance team"}
                                    </ItemTitle>
                                    <ItemDescription className="line-clamp-1 text-xs">
                                      <span className="min-w-0 truncate" title="Leah Stern at BluePeak Energy">
                                        {"Leah Stern at BluePeak Energy"}
                                      </span>
                                    </ItemDescription>
                                  </ItemContent>
                                </ItemHeader>
                                <ItemFooter className="gap-3 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <AvatarImage alt="Omar Haddad" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="font-medium min-w-0 text-xs truncate" title="Omar Haddad">
                                      {"Omar Haddad"}
                                    </div>
                                  </div>
                                  <span className="bg-red-50 border border-red-300 dark:bg-red-400/10 dark:border-red-400/35 dark:text-red-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-red-700" aria-label="Breach risk in 41m" title="Breach risk in 41m">
                                    <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="font-semibold shrink-0 tabular-nums">
                                      {"41m"}
                                    </span>
                                  </span>
                                </ItemFooter>
                              </Item>
                            </KanbanItemHandle>
                          </KanbanItem>
                        </KanbanColumnContent>
                        <Button className="bg-transparent border border-transparent font-normal h-8 hover:bg-background! hover:border-border! hover:text-foreground px-2 text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add SLA risk ticket">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          {"Add ticket"}
                        </Button>
                      </CardContent>
                    </Card>
                  </KanbanColumn>
                  <KanbanColumn className="self-start shrink-0 w-64" value="resolved" dragging="false">
                    <Card className="bg-muted/40 gap-0 group/column overflow-hidden p-0 w-full" size="sm" aria-label="Resolved: Verified close">
                      <CardHeader className="flex flex-row gap-2 items-center min-h-9 px-2 py-2">
                        <span className="[&>svg]:block [&>svg]:size-4 dark:text-emerald-300 flex items-center justify-center leading-none shrink-0 size-4 text-emerald-600" aria-hidden="true">
                          <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <div className="flex flex-1 gap-2 items-center min-w-0">
                          <span className="font-semibold leading-5 text-sm truncate" title="Resolved">
                            {"Resolved"}
                          </span>
                          <span className="font-medium inline-flex items-center leading-none self-center shrink-0 tabular-nums text-muted-foreground text-xs">
                            {"2"}
                          </span>
                        </div>
                        <div className="flex gap-1 group-focus-within/column:opacity-100 group-hover/column:opacity-100 items-center opacity-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Add resolved ticket">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Resolved column">
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
                          <KanbanItem value="ticket-10370" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Item className="bg-card gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch transition-[border-color,box-shadow]" variant="outline" size="sm">
                                <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <ItemDescription className="font-medium leading-none tabular-nums text-[0.6875rem] text-muted-foreground">
                                      {"SUP-10370"}
                                    </ItemDescription>
                                    <ItemActions className="shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Normal"}
                                      </Badge>
                                    </ItemActions>
                                  </div>
                                  <ItemContent className="gap-1 min-w-0">
                                    <ItemTitle className="font-semibold leading-5 line-clamp-2 text-sm w-auto" title="Renewal dashboard showing stale workspace counts">
                                      {"Renewal dashboard showing stale workspace counts"}
                                    </ItemTitle>
                                    <ItemDescription className="line-clamp-1 text-xs">
                                      <span className="min-w-0 truncate" title="Mira Stone at Oakline Retail">
                                        {"Mira Stone at Oakline Retail"}
                                      </span>
                                    </ItemDescription>
                                  </ItemContent>
                                </ItemHeader>
                                <ItemFooter className="gap-3 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <AvatarImage alt="Priya Shah" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="font-medium min-w-0 text-xs truncate" title="Priya Shah">
                                      {"Priya Shah"}
                                    </div>
                                  </div>
                                  <span className="bg-emerald-50 border border-emerald-200 dark:bg-emerald-400/10 dark:border-emerald-400/35 dark:text-emerald-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-emerald-700" aria-label="SLA met in Met" title="SLA met in Met">
                                    <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="font-semibold shrink-0 tabular-nums">
                                      {"Met"}
                                    </span>
                                  </span>
                                </ItemFooter>
                              </Item>
                            </KanbanItemHandle>
                          </KanbanItem>
                          <KanbanItem value="ticket-10381" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Item className="bg-card gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch transition-[border-color,box-shadow]" variant="outline" size="sm">
                                <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <ItemDescription className="font-medium leading-none tabular-nums text-[0.6875rem] text-muted-foreground">
                                      {"SUP-10381"}
                                    </ItemDescription>
                                    <ItemActions className="shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Low"}
                                      </Badge>
                                    </ItemActions>
                                  </div>
                                  <ItemContent className="gap-1 min-w-0">
                                    <ItemTitle className="font-semibold leading-5 line-clamp-2 text-sm w-auto" title="Partner API key rotation reminder sent to wrong owner">
                                      {"Partner API key rotation reminder sent to wrong owner"}
                                    </ItemTitle>
                                    <ItemDescription className="line-clamp-1 text-xs">
                                      <span className="min-w-0 truncate" title="Caleb Reed at Orbit Systems">
                                        {"Caleb Reed at Orbit Systems"}
                                      </span>
                                    </ItemDescription>
                                  </ItemContent>
                                </ItemHeader>
                                <ItemFooter className="gap-3 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <Avatar className="size-5" size="default">
                                      <AvatarImage alt="Maya Ito" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="font-medium min-w-0 text-xs truncate" title="Maya Ito">
                                      {"Maya Ito"}
                                    </div>
                                  </div>
                                  <span className="bg-emerald-50 border border-emerald-200 dark:bg-emerald-400/10 dark:border-emerald-400/35 dark:text-emerald-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-emerald-700" aria-label="SLA met in Met" title="SLA met in Met">
                                    <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="font-semibold shrink-0 tabular-nums">
                                      {"Met"}
                                    </span>
                                  </span>
                                </ItemFooter>
                              </Item>
                            </KanbanItemHandle>
                          </KanbanItem>
                        </KanbanColumnContent>
                        <Button className="bg-transparent border border-transparent font-normal h-8 hover:bg-background! hover:border-border! hover:text-foreground px-2 text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add resolved ticket">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          {"Add ticket"}
                        </Button>
                      </CardContent>
                    </Card>
                  </KanbanColumn>
                </KanbanBoard>
              </div>
            </div>
            <div className="data-horizontal:border-t data-horizontal:border-t-transparent data-horizontal:flex-col data-horizontal:h-2.5 flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_r_0_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "921.7518248175182px"}}>
              <div className="bg-foreground/15 flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
            </div>
          </ScrollArea>
        </Kanban>
        <div id="DndDescribedBy-0" style={{display: "none"}}>
          {"To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel."}
        </div>
        <div id="DndLiveRegion-0" role="status" aria-live="assertive" aria-atomic="true" style={{position: "fixed", top: "0px", left: "0px", width: "1px", height: "1px", margin: "-1px", border: "0px", padding: "0px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(100%)", whiteSpace: "nowrap"}}></div>
      </section>
    </main>
  )
}
