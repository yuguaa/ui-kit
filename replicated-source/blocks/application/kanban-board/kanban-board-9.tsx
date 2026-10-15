import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
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
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="bg-background flex justify-center p-4 sm:p-6 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Recruiting pipeline kanban board"}
      </h1>
      <section className="flex flex-col gap-4 max-w-[1480px] mx-auto w-full">
        <header className="px-1" aria-label="Recruiting pipeline toolbar">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <h2 className="font-semibold leading-5 text-sm truncate">
                {"Recruiting Pipeline"}
              </h2>
              <p className="leading-4 line-clamp-1 text-muted-foreground text-xs">
                {"Track candidate fit, interviews, scorecards, and offer readiness."}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center lg:justify-end lg:w-auto w-full" role="group" aria-label="Recruiting pipeline actions">
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                </svg>
                {"Filters"}
              </Button>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-user-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserPlusIcon" tabler="IconUserPlus" hugeicons="UserAdd01Icon" phosphor="UserPlusIcon" remixicon="RiUserAddLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <line x1="19" x2="19" y1="8" y2="14"></line>
                  <line x1="22" x2="16" y1="11" y2="11"></line>
                </svg>
                {"Add candidate"}
              </Button>
            </div>
          </div>
        </header>
        <Kanban className="w-full" dragging="false">
          <ScrollArea className="min-w-0 pb-3 w-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" overflowXEnd="">
            <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-lg transition-[color,box-shadow] w-full" role="presentation" data-id="base-ui-_r_0_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "612px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-x="" data-overflow-x-end="">
              <div className="min-w-full w-max" role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-overflow-x-end="">
                <KanbanBoard className="flex gap-3 items-start min-w-full p-1">
                  <KanbanColumn className="max-w-[18.5rem] self-start shrink-0 sm:w-[18.5rem] w-[calc(100vw-3rem)]" value="sourced" dragging="false">
                    <Frame className="group/column" spacing="sm" aria-label="Sourced: New profiles">
                      <header className="flex flex-row gap-2 items-center min-h-9 px-2 py-1.5">
                        <span className="bg-slate-400 dark:bg-slate-500 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <div className="flex-1 min-w-0">
                          <div className="flex gap-1.5 items-center min-w-0">
                            <div className="font-semibold leading-5 text-sm truncate" title="Sourced">
                              {"Sourced"}
                            </div>
                            <span className="font-medium leading-none shrink-0 tabular-nums text-muted-foreground text-xs">
                              {"3"}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-1 group-focus-within/kanban-column:opacity-100 group-hover/kanban-column:opacity-100 items-center ml-auto opacity-0 shrink-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Add sourced candidate">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Sourced column">
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
                      </header>
                      <KanbanColumnContent className="p-0.5">
                        <KanbanItem value="candidate-101" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-2.5 hover:border-foreground/20 hover:shadow-sm min-h-50 p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2.5 items-start min-w-0">
                                <Avatar className="mt-0.5 size-7" size="sm">
                                  <AvatarImage alt="Amina Reed" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold leading-5 text-base truncate" title="Mina Calder">
                                    {"Mina Calder"}
                                  </div>
                                  <div className="leading-5 text-muted-foreground text-sm truncate" title="Staff Product Designer">
                                    {"Staff Product Designer"}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="font-medium leading-none text-muted-foreground text-sm">
                                    {"Match score"}
                                  </span>
                                  <span className="dark:text-sky-400 font-semibold leading-none tabular-nums text-sky-600 text-sm">
                                    {"46%"}
                                  </span>
                                </div>
                                <Progress className="**:data-[slot=progress-indicator]:bg-sky-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="46" aria-valuetext="46%" role="progressbar" aria-labelledby="base-ui-_r_1_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_1_" role="presentation">
                                    {"Mina Calder match score"}
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "46%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-map-pin size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <span className="truncate" title="Toronto, CA">
                                        {"Toronto, CA"}
                                      </span>
                                      <span className="shrink-0 text-muted-foreground">
                                        {"ET"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx="16" cy="16" r="6"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="truncate" title="May 7, 2026">
                                      {"May 7, 2026"}
                                    </span>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                        <path d="M12 18V6"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="tabular-nums truncate" title="$178k-$204k">
                                      {"$178k-$204k"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0 mt-auto">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow truncate" title="Not started">
                                  <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  {"Not started"}
                                </Badge>
                                <span className="leading-5 text-muted-foreground text-sm truncate" title="Scorecard tracked">
                                  {"Scorecard tracked"}
                                </span>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="candidate-102" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-2.5 hover:border-foreground/20 hover:shadow-sm min-h-50 p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2.5 items-start min-w-0">
                                <Avatar className="mt-0.5 size-7" size="sm">
                                  <AvatarImage alt="Beck Moreno" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold leading-5 text-base truncate" title="Jon Bell">
                                    {"Jon Bell"}
                                  </div>
                                  <div className="leading-5 text-muted-foreground text-sm truncate" title="Senior Data Engineer">
                                    {"Senior Data Engineer"}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="font-medium leading-none text-muted-foreground text-sm">
                                    {"Match score"}
                                  </span>
                                  <span className="dark:text-sky-400 font-semibold leading-none tabular-nums text-sky-600 text-sm">
                                    {"38%"}
                                  </span>
                                </div>
                                <Progress className="**:data-[slot=progress-indicator]:bg-sky-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="38" aria-valuetext="38%" role="progressbar" aria-labelledby="base-ui-_r_2_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_2_" role="presentation">
                                    {"Jon Bell match score"}
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "38%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-map-pin size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <span className="truncate" title="Austin, US">
                                        {"Austin, US"}
                                      </span>
                                      <span className="shrink-0 text-muted-foreground">
                                        {"CT"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx="16" cy="16" r="6"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="truncate" title="May 8, 2026">
                                      {"May 8, 2026"}
                                    </span>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                        <path d="M12 18V6"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="tabular-nums truncate" title="$164k-$188k">
                                      {"$164k-$188k"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0 mt-auto">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow truncate" title="Draft">
                                  <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  {"Draft"}
                                </Badge>
                                <span className="leading-5 text-muted-foreground text-sm truncate" title="Scorecard tracked">
                                  {"Scorecard tracked"}
                                </span>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="candidate-103" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-2.5 hover:border-foreground/20 hover:shadow-sm min-h-50 p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2.5 items-start min-w-0">
                                <Avatar className="mt-0.5 size-7" size="sm">
                                  <AvatarImage alt="Celia Hart" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold leading-5 text-base truncate" title="Amara Finch">
                                    {"Amara Finch"}
                                  </div>
                                  <div className="leading-5 text-muted-foreground text-sm truncate" title="Senior UX Researcher">
                                    {"Senior UX Researcher"}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="font-medium leading-none text-muted-foreground text-sm">
                                    {"Match score"}
                                  </span>
                                  <span className="dark:text-violet-400 font-semibold leading-none tabular-nums text-sm text-violet-600">
                                    {"31%"}
                                  </span>
                                </div>
                                <Progress className="**:data-[slot=progress-indicator]:bg-violet-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="31" aria-valuetext="31%" role="progressbar" aria-labelledby="base-ui-_r_3_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_3_" role="presentation">
                                    {"Amara Finch match score"}
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "31%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-map-pin size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <span className="truncate" title="Portland, US">
                                        {"Portland, US"}
                                      </span>
                                      <span className="shrink-0 text-muted-foreground">
                                        {"PT"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx="16" cy="16" r="6"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="truncate" title="May 10, 2026">
                                      {"May 10, 2026"}
                                    </span>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                        <path d="M12 18V6"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="tabular-nums truncate" title="$132k-$150k">
                                      {"$132k-$150k"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0 mt-auto">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow truncate" title="Not started">
                                  <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  {"Not started"}
                                </Badge>
                                <span className="leading-5 text-muted-foreground text-sm truncate" title="Scorecard tracked">
                                  {"Scorecard tracked"}
                                </span>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                      </KanbanColumnContent>
                    </Frame>
                  </KanbanColumn>
                  <KanbanColumn className="max-w-[18.5rem] self-start shrink-0 sm:w-[18.5rem] w-[calc(100vw-3rem)]" value="screen" dragging="false">
                    <Frame className="group/column" spacing="sm" aria-label="Screen: Recruiter review">
                      <header className="flex flex-row gap-2 items-center min-h-9 px-2 py-1.5">
                        <span className="bg-sky-500 dark:bg-sky-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <div className="flex-1 min-w-0">
                          <div className="flex gap-1.5 items-center min-w-0">
                            <div className="font-semibold leading-5 text-sm truncate" title="Screen">
                              {"Screen"}
                            </div>
                            <span className="font-medium leading-none shrink-0 tabular-nums text-muted-foreground text-xs">
                              {"2"}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-1 group-focus-within/kanban-column:opacity-100 group-hover/kanban-column:opacity-100 items-center ml-auto opacity-0 shrink-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Add screen">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Screen column">
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
                      </header>
                      <KanbanColumnContent className="p-0.5">
                        <KanbanItem value="candidate-201" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-2.5 hover:border-foreground/20 hover:shadow-sm min-h-50 p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2.5 items-start min-w-0">
                                <Avatar className="mt-0.5 size-7" size="sm">
                                  <AvatarImage alt="Celia Hart" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold leading-5 text-base truncate" title="Priya Rao">
                                    {"Priya Rao"}
                                  </div>
                                  <div className="leading-5 text-muted-foreground text-sm truncate" title="Principal Frontend Engineer">
                                    {"Principal Frontend Engineer"}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="font-medium leading-none text-muted-foreground text-sm">
                                    {"Match score"}
                                  </span>
                                  <span className="dark:text-emerald-400 font-semibold leading-none tabular-nums text-emerald-600 text-sm">
                                    {"58%"}
                                  </span>
                                </div>
                                <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="58" aria-valuetext="58%" role="progressbar" aria-labelledby="base-ui-_r_4_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_4_" role="presentation">
                                    {"Priya Rao match score"}
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "58%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-map-pin size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <span className="truncate" title="Seattle, US">
                                        {"Seattle, US"}
                                      </span>
                                      <span className="shrink-0 text-muted-foreground">
                                        {"PT"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx="16" cy="16" r="6"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="truncate" title="May 6, 2026">
                                      {"May 6, 2026"}
                                    </span>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                        <path d="M12 18V6"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="tabular-nums truncate" title="$196k-$224k">
                                      {"$196k-$224k"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0 mt-auto">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow truncate" title="Ready">
                                  <span className="bg-violet-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  {"Ready"}
                                </Badge>
                                <span className="leading-5 text-muted-foreground text-sm truncate" title="Scorecard tracked">
                                  {"Scorecard tracked"}
                                </span>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="candidate-202" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-2.5 hover:border-foreground/20 hover:shadow-sm min-h-50 p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2.5 items-start min-w-0">
                                <Avatar className="mt-0.5 size-7" size="sm">
                                  <AvatarImage alt="Amina Reed" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold leading-5 text-base truncate" title="Luca Marin">
                                    {"Luca Marin"}
                                  </div>
                                  <div className="leading-5 text-muted-foreground text-sm truncate" title="Lifecycle Marketing Lead">
                                    {"Lifecycle Marketing Lead"}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="font-medium leading-none text-muted-foreground text-sm">
                                    {"Match score"}
                                  </span>
                                  <span className="dark:text-violet-400 font-semibold leading-none tabular-nums text-sm text-violet-600">
                                    {"34%"}
                                  </span>
                                </div>
                                <Progress className="**:data-[slot=progress-indicator]:bg-violet-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="34" aria-valuetext="34%" role="progressbar" aria-labelledby="base-ui-_r_5_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_5_" role="presentation">
                                    {"Luca Marin match score"}
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "34%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-map-pin size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <span className="truncate" title="Madrid, ES">
                                        {"Madrid, ES"}
                                      </span>
                                      <span className="shrink-0 text-muted-foreground">
                                        {"CET"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx="16" cy="16" r="6"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="truncate" title="May 9, 2026">
                                      {"May 9, 2026"}
                                    </span>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                        <path d="M12 18V6"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="tabular-nums truncate" title="EUR120k-EUR138k">
                                      {"EUR120k-EUR138k"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0 mt-auto">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow truncate" title="Draft">
                                  <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  {"Draft"}
                                </Badge>
                                <span className="leading-5 text-muted-foreground text-sm truncate" title="Scorecard tracked">
                                  {"Scorecard tracked"}
                                </span>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                      </KanbanColumnContent>
                    </Frame>
                  </KanbanColumn>
                  <KanbanColumn className="max-w-[18.5rem] self-start shrink-0 sm:w-[18.5rem] w-[calc(100vw-3rem)]" value="hiring-manager" dragging="false">
                    <Frame className="group/column" spacing="sm" aria-label="Hiring Manager: Manager review">
                      <header className="flex flex-row gap-2 items-center min-h-9 px-2 py-1.5">
                        <span className="bg-blue-500 dark:bg-blue-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <div className="flex-1 min-w-0">
                          <div className="flex gap-1.5 items-center min-w-0">
                            <div className="font-semibold leading-5 text-sm truncate" title="Hiring Manager">
                              {"Hiring Manager"}
                            </div>
                            <span className="font-medium leading-none shrink-0 tabular-nums text-muted-foreground text-xs">
                              {"3"}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-1 group-focus-within/kanban-column:opacity-100 group-hover/kanban-column:opacity-100 items-center ml-auto opacity-0 shrink-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Add manager review">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Hiring Manager column">
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
                      </header>
                      <KanbanColumnContent className="p-0.5">
                        <KanbanItem value="candidate-301" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-2.5 hover:border-foreground/20 hover:shadow-sm min-h-50 p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2.5 items-start min-w-0">
                                <Avatar className="mt-0.5 size-7" size="sm">
                                  <AvatarImage alt="Beck Moreno" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold leading-5 text-base truncate" title="Nadia Ellis">
                                    {"Nadia Ellis"}
                                  </div>
                                  <div className="leading-5 text-muted-foreground text-sm truncate" title="Product Operations Manager">
                                    {"Product Operations Manager"}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="font-medium leading-none text-muted-foreground text-sm">
                                    {"Match score"}
                                  </span>
                                  <span className="dark:text-emerald-400 font-semibold leading-none tabular-nums text-emerald-600 text-sm">
                                    {"54%"}
                                  </span>
                                </div>
                                <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="54" aria-valuetext="54%" role="progressbar" aria-labelledby="base-ui-_r_6_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_6_" role="presentation">
                                    {"Nadia Ellis match score"}
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "54%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-map-pin size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <span className="truncate" title="Brooklyn, US">
                                        {"Brooklyn, US"}
                                      </span>
                                      <span className="shrink-0 text-muted-foreground">
                                        {"ET"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx="16" cy="16" r="6"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="truncate" title="May 10, 2026">
                                      {"May 10, 2026"}
                                    </span>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                        <path d="M12 18V6"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="tabular-nums truncate" title="$142k-$164k">
                                      {"$142k-$164k"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0 mt-auto">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow truncate" title="Ready">
                                  <span className="bg-violet-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  {"Ready"}
                                </Badge>
                                <span className="leading-5 text-muted-foreground text-sm truncate" title="Scorecard tracked">
                                  {"Scorecard tracked"}
                                </span>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="candidate-302" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-2.5 hover:border-foreground/20 hover:shadow-sm min-h-50 p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2.5 items-start min-w-0">
                                <Avatar className="mt-0.5 size-7" size="sm">
                                  <AvatarImage alt="Celia Hart" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold leading-5 text-base truncate" title="Theo Grant">
                                    {"Theo Grant"}
                                  </div>
                                  <div className="leading-5 text-muted-foreground text-sm truncate" title="Security Engineering Manager">
                                    {"Security Engineering Manager"}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="font-medium leading-none text-muted-foreground text-sm">
                                    {"Match score"}
                                  </span>
                                  <span className="dark:text-violet-400 font-semibold leading-none tabular-nums text-sm text-violet-600">
                                    {"41%"}
                                  </span>
                                </div>
                                <Progress className="**:data-[slot=progress-indicator]:bg-violet-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="41" aria-valuetext="41%" role="progressbar" aria-labelledby="base-ui-_r_7_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_7_" role="presentation">
                                    {"Theo Grant match score"}
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "41%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-map-pin size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <span className="truncate" title="Dublin, IE">
                                        {"Dublin, IE"}
                                      </span>
                                      <span className="shrink-0 text-muted-foreground">
                                        {"GMT"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx="16" cy="16" r="6"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="truncate" title="May 11, 2026">
                                      {"May 11, 2026"}
                                    </span>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                        <path d="M12 18V6"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="tabular-nums truncate" title="EUR154k-EUR176k">
                                      {"EUR154k-EUR176k"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0 mt-auto">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow truncate" title="Ready">
                                  <span className="bg-violet-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  {"Ready"}
                                </Badge>
                                <span className="leading-5 text-muted-foreground text-sm truncate" title="Scorecard tracked">
                                  {"Scorecard tracked"}
                                </span>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="candidate-303" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-2.5 hover:border-foreground/20 hover:shadow-sm min-h-50 p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2.5 items-start min-w-0">
                                <Avatar className="mt-0.5 size-7" size="sm">
                                  <AvatarImage alt="Farid Malik" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold leading-5 text-base truncate" title="Keon Wallace">
                                    {"Keon Wallace"}
                                  </div>
                                  <div className="leading-5 text-muted-foreground text-sm truncate" title="GTM Systems Lead">
                                    {"GTM Systems Lead"}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="font-medium leading-none text-muted-foreground text-sm">
                                    {"Match score"}
                                  </span>
                                  <span className="dark:text-violet-400 font-semibold leading-none tabular-nums text-sm text-violet-600">
                                    {"45%"}
                                  </span>
                                </div>
                                <Progress className="**:data-[slot=progress-indicator]:bg-violet-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" aria-valuetext="45%" role="progressbar" aria-labelledby="base-ui-_r_8_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_8_" role="presentation">
                                    {"Keon Wallace match score"}
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "45%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-map-pin size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <span className="truncate" title="Atlanta, US">
                                        {"Atlanta, US"}
                                      </span>
                                      <span className="shrink-0 text-muted-foreground">
                                        {"ET"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx="16" cy="16" r="6"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="truncate" title="May 14, 2026">
                                      {"May 14, 2026"}
                                    </span>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                        <path d="M12 18V6"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="tabular-nums truncate" title="$138k-$158k">
                                      {"$138k-$158k"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0 mt-auto">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow truncate" title="Draft">
                                  <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  {"Draft"}
                                </Badge>
                                <span className="leading-5 text-muted-foreground text-sm truncate" title="Scorecard tracked">
                                  {"Scorecard tracked"}
                                </span>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                      </KanbanColumnContent>
                    </Frame>
                  </KanbanColumn>
                  <KanbanColumn className="max-w-[18.5rem] self-start shrink-0 sm:w-[18.5rem] w-[calc(100vw-3rem)]" value="panel" dragging="false">
                    <Frame className="group/column" spacing="sm" aria-label="Panel: Interview loop">
                      <header className="flex flex-row gap-2 items-center min-h-9 px-2 py-1.5">
                        <span className="bg-violet-500 dark:bg-violet-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <div className="flex-1 min-w-0">
                          <div className="flex gap-1.5 items-center min-w-0">
                            <div className="font-semibold leading-5 text-sm truncate" title="Panel">
                              {"Panel"}
                            </div>
                            <span className="font-medium leading-none shrink-0 tabular-nums text-muted-foreground text-xs">
                              {"2"}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-1 group-focus-within/kanban-column:opacity-100 group-hover/kanban-column:opacity-100 items-center ml-auto opacity-0 shrink-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Add panel interview">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Panel column">
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
                      </header>
                      <KanbanColumnContent className="p-0.5">
                        <KanbanItem value="candidate-401" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-2.5 hover:border-foreground/20 hover:shadow-sm min-h-50 p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2.5 items-start min-w-0">
                                <Avatar className="mt-0.5 size-7" size="sm">
                                  <AvatarImage alt="Amina Reed" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold leading-5 text-base truncate" title="Sara Okafor">
                                    {"Sara Okafor"}
                                  </div>
                                  <div className="leading-5 text-muted-foreground text-sm truncate" title="Design Systems Engineer">
                                    {"Design Systems Engineer"}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="font-medium leading-none text-muted-foreground text-sm">
                                    {"Match score"}
                                  </span>
                                  <span className="dark:text-sky-400 font-semibold leading-none tabular-nums text-sky-600 text-sm">
                                    {"48%"}
                                  </span>
                                </div>
                                <Progress className="**:data-[slot=progress-indicator]:bg-sky-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="48" aria-valuetext="48%" role="progressbar" aria-labelledby="base-ui-_r_9_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_9_" role="presentation">
                                    {"Sara Okafor match score"}
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "48%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-map-pin size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <span className="truncate" title="London, UK">
                                        {"London, UK"}
                                      </span>
                                      <span className="shrink-0 text-muted-foreground">
                                        {"GMT"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx="16" cy="16" r="6"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="truncate" title="May 12, 2026">
                                      {"May 12, 2026"}
                                    </span>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                        <path d="M12 18V6"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="tabular-nums truncate" title="GBP118k-GBP136k">
                                      {"GBP118k-GBP136k"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0 mt-auto">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow truncate" title="Ready">
                                  <span className="bg-violet-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  {"Ready"}
                                </Badge>
                                <span className="leading-5 text-muted-foreground text-sm truncate" title="Scorecard tracked">
                                  {"Scorecard tracked"}
                                </span>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="candidate-402" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-2.5 hover:border-foreground/20 hover:shadow-sm min-h-50 p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2.5 items-start min-w-0">
                                <Avatar className="mt-0.5 size-7" size="sm">
                                  <AvatarImage alt="Beck Moreno" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold leading-5 text-base truncate" title="Arun Mehta">
                                    {"Arun Mehta"}
                                  </div>
                                  <div className="leading-5 text-muted-foreground text-sm truncate" title="Senior Platform Engineer">
                                    {"Senior Platform Engineer"}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="font-medium leading-none text-muted-foreground text-sm">
                                    {"Match score"}
                                  </span>
                                  <span className="dark:text-amber-400 font-semibold leading-none tabular-nums text-amber-600 text-sm">
                                    {"26%"}
                                  </span>
                                </div>
                                <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="26" aria-valuetext="26%" role="progressbar" aria-labelledby="base-ui-_r_a_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_a_" role="presentation">
                                    {"Arun Mehta match score"}
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "26%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-map-pin size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <span className="truncate" title="Vancouver, CA">
                                        {"Vancouver, CA"}
                                      </span>
                                      <span className="shrink-0 text-muted-foreground">
                                        {"PT"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx="16" cy="16" r="6"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="truncate" title="May 13, 2026">
                                      {"May 13, 2026"}
                                    </span>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                        <path d="M12 18V6"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="tabular-nums truncate" title="$170k-$192k">
                                      {"$170k-$192k"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0 mt-auto">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow truncate" title="Needs calibration">
                                  <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  {"Needs calibration"}
                                </Badge>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow truncate" title="Panel reschedule">
                                  {"Panel reschedule"}
                                </Badge>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                      </KanbanColumnContent>
                    </Frame>
                  </KanbanColumn>
                  <KanbanColumn className="max-w-[18.5rem] self-start shrink-0 sm:w-[18.5rem] w-[calc(100vw-3rem)]" value="scorecard" dragging="false">
                    <Frame className="group/column" spacing="sm" aria-label="Scorecard: Feedback pending">
                      <header className="flex flex-row gap-2 items-center min-h-9 px-2 py-1.5">
                        <span className="bg-cyan-500 dark:bg-cyan-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <div className="flex-1 min-w-0">
                          <div className="flex gap-1.5 items-center min-w-0">
                            <div className="font-semibold leading-5 text-sm truncate" title="Scorecard">
                              {"Scorecard"}
                            </div>
                            <span className="font-medium leading-none shrink-0 tabular-nums text-muted-foreground text-xs">
                              {"3"}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-1 group-focus-within/kanban-column:opacity-100 group-hover/kanban-column:opacity-100 items-center ml-auto opacity-0 shrink-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Add scorecard review">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Scorecard column">
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
                      </header>
                      <KanbanColumnContent className="p-0.5">
                        <KanbanItem value="candidate-501" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-2.5 hover:border-foreground/20 hover:shadow-sm min-h-50 p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2.5 items-start min-w-0">
                                <Avatar className="mt-0.5 size-7" size="sm">
                                  <AvatarImage alt="Greta Walsh" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold leading-5 text-base truncate" title="Elena Torres">
                                    {"Elena Torres"}
                                  </div>
                                  <div className="leading-5 text-muted-foreground text-sm truncate" title="Senior Recruiter">
                                    {"Senior Recruiter"}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="font-medium leading-none text-muted-foreground text-sm">
                                    {"Match score"}
                                  </span>
                                  <span className="dark:text-sky-400 font-semibold leading-none tabular-nums text-sky-600 text-sm">
                                    {"44%"}
                                  </span>
                                </div>
                                <Progress className="**:data-[slot=progress-indicator]:bg-sky-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="44" aria-valuetext="44%" role="progressbar" aria-labelledby="base-ui-_r_b_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_b_" role="presentation">
                                    {"Elena Torres match score"}
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "44%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-map-pin size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <span className="truncate" title="Chicago, US">
                                        {"Chicago, US"}
                                      </span>
                                      <span className="shrink-0 text-muted-foreground">
                                        {"CT"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx="16" cy="16" r="6"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="truncate" title="May 5, 2026">
                                      {"May 5, 2026"}
                                    </span>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                        <path d="M12 18V6"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="tabular-nums truncate" title="$126k-$146k">
                                      {"$126k-$146k"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0 mt-auto">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow truncate" title="Needs calibration">
                                  <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  {"Needs calibration"}
                                </Badge>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow truncate" title="Feedback due">
                                  {"Feedback due"}
                                </Badge>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="candidate-502" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-2.5 hover:border-foreground/20 hover:shadow-sm min-h-50 p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2.5 items-start min-w-0">
                                <Avatar className="mt-0.5 size-7" size="sm">
                                  <AvatarImage alt="Amina Reed" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold leading-5 text-base truncate" title="Marco Silva">
                                    {"Marco Silva"}
                                  </div>
                                  <div className="leading-5 text-muted-foreground text-sm truncate" title="Revenue Systems Analyst">
                                    {"Revenue Systems Analyst"}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="font-medium leading-none text-muted-foreground text-sm">
                                    {"Match score"}
                                  </span>
                                  <span className="dark:text-violet-400 font-semibold leading-none tabular-nums text-sm text-violet-600">
                                    {"36%"}
                                  </span>
                                </div>
                                <Progress className="**:data-[slot=progress-indicator]:bg-violet-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="36" aria-valuetext="36%" role="progressbar" aria-labelledby="base-ui-_r_c_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_c_" role="presentation">
                                    {"Marco Silva match score"}
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "36%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-map-pin size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <span className="truncate" title="Lisbon, PT">
                                        {"Lisbon, PT"}
                                      </span>
                                      <span className="shrink-0 text-muted-foreground">
                                        {"WEST"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx="16" cy="16" r="6"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="truncate" title="May 6, 2026">
                                      {"May 6, 2026"}
                                    </span>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                        <path d="M12 18V6"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="tabular-nums truncate" title="EUR88k-EUR102k">
                                      {"EUR88k-EUR102k"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0 mt-auto">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow truncate" title="Draft">
                                  <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  {"Draft"}
                                </Badge>
                                <span className="leading-5 text-muted-foreground text-sm truncate" title="Scorecard tracked">
                                  {"Scorecard tracked"}
                                </span>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="candidate-503" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-2.5 hover:border-foreground/20 hover:shadow-sm min-h-50 p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2.5 items-start min-w-0">
                                <Avatar className="mt-0.5 size-7" size="sm">
                                  <AvatarImage alt="Greta Walsh" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold leading-5 text-base truncate" title="Mei Watanabe">
                                    {"Mei Watanabe"}
                                  </div>
                                  <div className="leading-5 text-muted-foreground text-sm truncate" title="People Analytics Manager">
                                    {"People Analytics Manager"}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="font-medium leading-none text-muted-foreground text-sm">
                                    {"Match score"}
                                  </span>
                                  <span className="dark:text-amber-400 font-semibold leading-none tabular-nums text-amber-600 text-sm">
                                    {"29%"}
                                  </span>
                                </div>
                                <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="29" aria-valuetext="29%" role="progressbar" aria-labelledby="base-ui-_r_d_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_d_" role="presentation">
                                    {"Mei Watanabe match score"}
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "29%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-map-pin size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <span className="truncate" title="Tokyo, JP">
                                        {"Tokyo, JP"}
                                      </span>
                                      <span className="shrink-0 text-muted-foreground">
                                        {"JST"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx="16" cy="16" r="6"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="truncate" title="May 8, 2026">
                                      {"May 8, 2026"}
                                    </span>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                        <path d="M12 18V6"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="tabular-nums truncate" title="JPY16m-JPY19m">
                                      {"JPY16m-JPY19m"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0 mt-auto">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow truncate" title="Needs calibration">
                                  <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  {"Needs calibration"}
                                </Badge>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow truncate" title="Late feedback">
                                  {"Late feedback"}
                                </Badge>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                      </KanbanColumnContent>
                    </Frame>
                  </KanbanColumn>
                  <KanbanColumn className="max-w-[18.5rem] self-start shrink-0 sm:w-[18.5rem] w-[calc(100vw-3rem)]" value="offer" dragging="false">
                    <Frame className="group/column" spacing="sm" aria-label="Offer: Package review">
                      <header className="flex flex-row gap-2 items-center min-h-9 px-2 py-1.5">
                        <span className="bg-teal-500 dark:bg-teal-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <div className="flex-1 min-w-0">
                          <div className="flex gap-1.5 items-center min-w-0">
                            <div className="font-semibold leading-5 text-sm truncate" title="Offer">
                              {"Offer"}
                            </div>
                            <span className="font-medium leading-none shrink-0 tabular-nums text-muted-foreground text-xs">
                              {"2"}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-1 group-focus-within/kanban-column:opacity-100 group-hover/kanban-column:opacity-100 items-center ml-auto opacity-0 shrink-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Add offer">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Offer column">
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
                      </header>
                      <KanbanColumnContent className="p-0.5">
                        <KanbanItem value="candidate-601" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-2.5 hover:border-foreground/20 hover:shadow-sm min-h-50 p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2.5 items-start min-w-0">
                                <Avatar className="mt-0.5 size-7" size="sm">
                                  <AvatarImage alt="Celia Hart" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold leading-5 text-base truncate" title="Iris Chen">
                                    {"Iris Chen"}
                                  </div>
                                  <div className="leading-5 text-muted-foreground text-sm truncate" title="Director of Product Design">
                                    {"Director of Product Design"}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="font-medium leading-none text-muted-foreground text-sm">
                                    {"Match score"}
                                  </span>
                                  <span className="dark:text-emerald-400 font-semibold leading-none tabular-nums text-emerald-600 text-sm">
                                    {"56%"}
                                  </span>
                                </div>
                                <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="56" aria-valuetext="56%" role="progressbar" aria-labelledby="base-ui-_r_e_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_e_" role="presentation">
                                    {"Iris Chen match score"}
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "56%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-map-pin size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <span className="truncate" title="San Francisco, US">
                                        {"San Francisco, US"}
                                      </span>
                                      <span className="shrink-0 text-muted-foreground">
                                        {"PT"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx="16" cy="16" r="6"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="truncate" title="May 14, 2026">
                                      {"May 14, 2026"}
                                    </span>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                        <path d="M12 18V6"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="tabular-nums truncate" title="$242k-$286k">
                                      {"$242k-$286k"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0 mt-auto">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow truncate" title="Complete">
                                  <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  {"Complete"}
                                </Badge>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow truncate" title="Comp gap">
                                  {"Comp gap"}
                                </Badge>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="candidate-701" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-2.5 hover:border-foreground/20 hover:shadow-sm min-h-50 p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2.5 items-start min-w-0">
                                <Avatar className="mt-0.5 size-7" size="sm">
                                  <AvatarImage alt="Beck Moreno" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold leading-5 text-base truncate" title="Owen Price">
                                    {"Owen Price"}
                                  </div>
                                  <div className="leading-5 text-muted-foreground text-sm truncate" title="Staff Infrastructure Engineer">
                                    {"Staff Infrastructure Engineer"}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="flex gap-2 items-center justify-between min-w-0">
                                  <span className="font-medium leading-none text-muted-foreground text-sm">
                                    {"Match score"}
                                  </span>
                                  <span className="dark:text-emerald-400 font-semibold leading-none tabular-nums text-emerald-600 text-sm">
                                    {"62%"}
                                  </span>
                                </div>
                                <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="62" aria-valuetext="62%" role="progressbar" aria-labelledby="base-ui-_r_f_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_f_" role="presentation">
                                    {"Owen Price match score"}
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "62%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    {"x"}
                                  </span>
                                </Progress>
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-map-pin size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-1.5 items-center min-w-0">
                                      <span className="truncate" title="Denver, US">
                                        {"Denver, US"}
                                      </span>
                                      <span className="shrink-0 text-muted-foreground">
                                        {"MT"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx="16" cy="16" r="6"></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="truncate" title="Starts Jun 1">
                                      {"Starts Jun 1"}
                                    </span>
                                  </div>
                                </div>
                                <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center leading-5 min-h-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                        <path d="M12 18V6"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="tabular-nums truncate" title="$214k-$238k">
                                      {"$214k-$238k"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center justify-between min-w-0 mt-auto">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow truncate" title="Complete">
                                  <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  {"Complete"}
                                </Badge>
                                <span className="leading-5 text-muted-foreground text-sm truncate" title="Scorecard tracked">
                                  {"Scorecard tracked"}
                                </span>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                      </KanbanColumnContent>
                    </Frame>
                  </KanbanColumn>
                </KanbanBoard>
              </div>
            </div>
            <div className="data-horizontal:border-t data-horizontal:border-t-transparent data-horizontal:flex-col data-horizontal:h-2.5 flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_r_0_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "821.7787418655098px"}}>
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
