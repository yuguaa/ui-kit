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
import { Button } from "@/registry/bases/base/ui/button"
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <main className="bg-background flex h-svh items-stretch justify-center min-h-[44rem] p-3 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Product roadmap kanban board
      </h1>
      <section className="flex flex-col gap-4 max-w-[1240px] mx-auto w-full">
        <header className="px-1 py-1" aria-label="Roadmap toolbar">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <h2 className="font-semibold text-base truncate">
                Feature Roadmap
              </h2>
              <p className="line-clamp-1 mt-0.5 text-muted-foreground text-sm">
                Demand, impact, delivery.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center lg:justify-end lg:w-auto w-full" role="group" aria-label="Roadmap actions">
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                </svg>
                Filters
              </Button>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                New feature
              </Button>
            </div>
          </div>
        </header>
        <Kanban className="w-full" dragging="false">
          <ScrollArea className="min-w-0 pb-3 w-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" overflowXEnd="">
            <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-lg transition-[color,box-shadow] w-full" role="presentation" data-id="base-ui-_r_0_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "604px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-x="" data-overflow-x-end="">
              <div className="flex min-w-full" role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-overflow-x-end="">
                <KanbanBoard className="flex gap-3 items-start min-w-full p-1">
                  <KanbanColumn className="max-w-[18.5rem] shrink-0 sm:w-[18.5rem] w-[calc(100vw-4rem)]" value="triage" dragging="false">
                    <Frame className="group/column" spacing="sm" aria-label="Triage: New customer signals">
                      <header className="flex flex-row gap-2 items-center min-h-10 px-2 py-2">
                        <span className="bg-muted-foreground/70 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <div className="flex-1 min-w-0">
                          <div className="flex gap-1.5 items-center min-w-0">
                            <div className="font-semibold text-sm truncate" title="Triage">
                              Triage
                            </div>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                              3
                            </Badge>
                          </div>
                          <p className="mt-0.5 text-muted-foreground text-xs truncate">
                            New customer signals
                          </p>
                        </div>
                        <Button className="group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto hover:text-foreground opacity-0 pointer-events-none text-muted-foreground transition-opacity" type="button" tabIndex="0" aria-label="Add triage feature">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </Button>
                        <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto group/button hover:text-foreground inline-flex items-center justify-center outline-none pointer-events-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Triage column">
                          <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                            <circle cx="9" cy="12" r="1"></circle>
                            <circle cx="9" cy="5" r="1"></circle>
                            <circle cx="9" cy="19" r="1"></circle>
                            <circle cx="15" cy="12" r="1"></circle>
                            <circle cx="15" cy="5" r="1"></circle>
                            <circle cx="15" cy="19" r="1"></circle>
                          </svg>
                        </KanbanColumnHandle>
                      </header>
                      <KanbanColumnContent className="p-0.5">
                        <KanbanItem value="feature-001" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-3 hover:border-foreground/20 hover:shadow-sm min-h-[10.5rem] p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2 items-start justify-between min-w-0">
                                <div className="min-w-0">
                                  <div className="font-medium leading-5 line-clamp-2 text-sm" title="Smart intake routing">
                                    Smart intake routing
                                  </div>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                  Intake
                                </Badge>
                              </div>
                              <p className="leading-5 line-clamp-2 text-muted-foreground text-xs">
                                Classify incoming requests by segment, account value, and urgency.
                              </p>
                              <div className="flex gap-1.5 items-center leading-5 min-w-0 text-muted-foreground text-xs">
                                <span className="font-medium text-foreground truncate" title="23 accounts">
                                  23 accounts
                                </span>
                                <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="truncate" title="Needs signal">
                                  Needs signal
                                </span>
                              </div>
                              <div className="flex flex-col gap-2 mt-auto">
                                <Progress className="**:data-[slot=progress-indicator]:bg-muted-foreground/35 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="20" aria-valuetext="20%" role="progressbar" aria-labelledby="base-ui-_r_1_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_1_" role="presentation">
                                    Smart intake routing progress
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "20%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                                <div className="flex gap-2 items-center justify-between text-muted-foreground text-xs">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <span className="truncate" title="Scoring">
                                      Scoring
                                    </span>
                                    <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="shrink-0 tabular-nums">
                                      20%
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="tabular-nums truncate">
                                      83 votes
                                    </span>
                                    <span className="dark:text-emerald-400 flex gap-1 items-center tabular-nums text-emerald-600" aria-label="14 more votes this month">
                                      <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                        <path d="m5 12 7-7 7 7"></path>
                                        <path d="M12 19V5"></path>
                                      </svg>
                                      14
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="feature-002" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-3 hover:border-foreground/20 hover:shadow-sm min-h-[10.5rem] p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2 items-start justify-between min-w-0">
                                <div className="min-w-0">
                                  <div className="font-medium leading-5 line-clamp-2 text-sm" title="Slack request capture">
                                    Slack request capture
                                  </div>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                  Workflow
                                </Badge>
                              </div>
                              <p className="leading-5 line-clamp-2 text-muted-foreground text-xs">
                                Turn product feedback threads into deduplicated roadmap signals.
                              </p>
                              <div className="flex gap-1.5 items-center leading-5 min-w-0 text-muted-foreground text-xs">
                                <span className="font-medium text-foreground truncate" title="18 teams">
                                  18 teams
                                </span>
                                <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="truncate" title="Q3 review">
                                  Q3 review
                                </span>
                              </div>
                              <div className="flex flex-col gap-2 mt-auto">
                                <Progress className="**:data-[slot=progress-indicator]:bg-blue-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="24" aria-valuetext="24%" role="progressbar" aria-labelledby="base-ui-_r_2_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_2_" role="presentation">
                                    Slack request capture progress
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "24%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                                <div className="flex gap-2 items-center justify-between text-muted-foreground text-xs">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <span className="truncate" title="Reviewing">
                                      Reviewing
                                    </span>
                                    <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="shrink-0 tabular-nums">
                                      24%
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="tabular-nums truncate">
                                      67 votes
                                    </span>
                                    <span className="dark:text-emerald-400 flex gap-1 items-center tabular-nums text-emerald-600" aria-label="10 more votes this month">
                                      <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                        <path d="m5 12 7-7 7 7"></path>
                                        <path d="M12 19V5"></path>
                                      </svg>
                                      10
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="feature-003" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-3 hover:border-foreground/20 hover:shadow-sm min-h-[10.5rem] p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2 items-start justify-between min-w-0">
                                <div className="min-w-0">
                                  <div className="font-medium leading-5 line-clamp-2 text-sm" title="Customer signal clustering">
                                    Customer signal clustering
                                  </div>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                  Signals
                                </Badge>
                              </div>
                              <p className="leading-5 line-clamp-2 text-muted-foreground text-xs">
                                Group related feedback by account segment and recent revenue motion.
                              </p>
                              <div className="flex gap-1.5 items-center leading-5 min-w-0 text-muted-foreground text-xs">
                                <span className="font-medium text-foreground truncate" title="12 accounts">
                                  12 accounts
                                </span>
                                <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="truncate" title="Signal review">
                                  Signal review
                                </span>
                              </div>
                              <div className="flex flex-col gap-2 mt-auto">
                                <Progress className="**:data-[slot=progress-indicator]:bg-muted-foreground/35 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="18" aria-valuetext="18%" role="progressbar" aria-labelledby="base-ui-_r_3_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_3_" role="presentation">
                                    Customer signal clustering progress
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "18%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                                <div className="flex gap-2 items-center justify-between text-muted-foreground text-xs">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <span className="truncate" title="Clustering">
                                      Clustering
                                    </span>
                                    <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="shrink-0 tabular-nums">
                                      18%
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="tabular-nums truncate">
                                      52 votes
                                    </span>
                                    <span className="dark:text-emerald-400 flex gap-1 items-center tabular-nums text-emerald-600" aria-label="7 more votes this month">
                                      <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                        <path d="m5 12 7-7 7 7"></path>
                                        <path d="M12 19V5"></path>
                                      </svg>
                                      7
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                      </KanbanColumnContent>
                    </Frame>
                  </KanbanColumn>
                  <KanbanColumn className="max-w-[18.5rem] shrink-0 sm:w-[18.5rem] w-[calc(100vw-4rem)]" value="planned" dragging="false">
                    <Frame className="group/column" spacing="sm" aria-label="Planned: Queued for scope">
                      <header className="flex flex-row gap-2 items-center min-h-10 px-2 py-2">
                        <span className="bg-sky-500 dark:bg-sky-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <div className="flex-1 min-w-0">
                          <div className="flex gap-1.5 items-center min-w-0">
                            <div className="font-semibold text-sm truncate" title="Planned">
                              Planned
                            </div>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                              2
                            </Badge>
                          </div>
                          <p className="mt-0.5 text-muted-foreground text-xs truncate">
                            Queued for scope
                          </p>
                        </div>
                        <Button className="group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto hover:text-foreground opacity-0 pointer-events-none text-muted-foreground transition-opacity" type="button" tabIndex="0" aria-label="Add planned feature">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </Button>
                        <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto group/button hover:text-foreground inline-flex items-center justify-center outline-none pointer-events-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Planned column">
                          <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                            <circle cx="9" cy="12" r="1"></circle>
                            <circle cx="9" cy="5" r="1"></circle>
                            <circle cx="9" cy="19" r="1"></circle>
                            <circle cx="15" cy="12" r="1"></circle>
                            <circle cx="15" cy="5" r="1"></circle>
                            <circle cx="15" cy="19" r="1"></circle>
                          </svg>
                        </KanbanColumnHandle>
                      </header>
                      <KanbanColumnContent className="p-0.5">
                        <KanbanItem value="feature-101" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-3 hover:border-foreground/20 hover:shadow-sm min-h-[10.5rem] p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2 items-start justify-between min-w-0">
                                <div className="min-w-0">
                                  <div className="font-medium leading-5 line-clamp-2 text-sm" title="AI account search">
                                    AI account search
                                  </div>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                  Search
                                </Badge>
                              </div>
                              <p className="leading-5 line-clamp-2 text-muted-foreground text-xs">
                                Permission-aware search across tickets, call notes, and docs.
                              </p>
                              <div className="flex gap-1.5 items-center leading-5 min-w-0 text-muted-foreground text-xs">
                                <span className="font-medium text-foreground truncate" title="$72k pipeline">
                                  $72k pipeline
                                </span>
                                <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="truncate" title="Q3 pilot">
                                  Q3 pilot
                                </span>
                              </div>
                              <div className="flex flex-col gap-2 mt-auto">
                                <Progress className="**:data-[slot=progress-indicator]:bg-blue-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="30" aria-valuetext="30%" role="progressbar" aria-labelledby="base-ui-_r_4_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_4_" role="presentation">
                                    AI account search progress
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "30%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                                <div className="flex gap-2 items-center justify-between text-muted-foreground text-xs">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <span className="truncate" title="Discovery">
                                      Discovery
                                    </span>
                                    <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="shrink-0 tabular-nums">
                                      30%
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="tabular-nums truncate">
                                      142 votes
                                    </span>
                                    <span className="dark:text-emerald-400 flex gap-1 items-center tabular-nums text-emerald-600" aria-label="18 more votes this month">
                                      <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                        <path d="m5 12 7-7 7 7"></path>
                                        <path d="M12 19V5"></path>
                                      </svg>
                                      18
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="feature-102" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-3 hover:border-foreground/20 hover:shadow-sm min-h-[10.5rem] p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2 items-start justify-between min-w-0">
                                <div className="min-w-0">
                                  <div className="font-medium leading-5 line-clamp-2 text-sm" title="Outbound webhooks">
                                    Outbound webhooks
                                  </div>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                                  Platform
                                </Badge>
                              </div>
                              <p className="leading-5 line-clamp-2 text-muted-foreground text-xs">
                                Reliable event delivery for billing, seats, and lifecycle changes.
                              </p>
                              <div className="flex gap-1.5 items-center leading-5 min-w-0 text-muted-foreground text-xs">
                                <span className="font-medium text-foreground truncate" title="14 accounts">
                                  14 accounts
                                </span>
                                <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="truncate" title="Q3 scope">
                                  Q3 scope
                                </span>
                              </div>
                              <div className="flex flex-col gap-2 mt-auto">
                                <Progress className="**:data-[slot=progress-indicator]:bg-cyan-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="28" aria-valuetext="28%" role="progressbar" aria-labelledby="base-ui-_r_5_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_5_" role="presentation">
                                    Outbound webhooks progress
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "28%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                                <div className="flex gap-2 items-center justify-between text-muted-foreground text-xs">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <span className="truncate" title="Pending scope">
                                      Pending scope
                                    </span>
                                    <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="shrink-0 tabular-nums">
                                      28%
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="tabular-nums truncate">
                                      98 votes
                                    </span>
                                    <span className="flex gap-1 items-center tabular-nums text-red-500" aria-label="6 fewer votes this month">
                                      <svg className="lucide lucide-arrow-down size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                        <path d="M12 5v14"></path>
                                        <path d="m19 12-7 7-7-7"></path>
                                      </svg>
                                      6
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                      </KanbanColumnContent>
                    </Frame>
                  </KanbanColumn>
                  <KanbanColumn className="max-w-[18.5rem] shrink-0 sm:w-[18.5rem] w-[calc(100vw-4rem)]" value="shaping" dragging="false">
                    <Frame className="group/column" spacing="sm" aria-label="Shaping: Solution design">
                      <header className="flex flex-row gap-2 items-center min-h-10 px-2 py-2">
                        <span className="bg-cyan-500 dark:bg-cyan-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <div className="flex-1 min-w-0">
                          <div className="flex gap-1.5 items-center min-w-0">
                            <div className="font-semibold text-sm truncate" title="Shaping">
                              Shaping
                            </div>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                              3
                            </Badge>
                          </div>
                          <p className="mt-0.5 text-muted-foreground text-xs truncate">
                            Solution design
                          </p>
                        </div>
                        <Button className="group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto hover:text-foreground opacity-0 pointer-events-none text-muted-foreground transition-opacity" type="button" tabIndex="0" aria-label="Add shaping feature">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </Button>
                        <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto group/button hover:text-foreground inline-flex items-center justify-center outline-none pointer-events-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Shaping column">
                          <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                            <circle cx="9" cy="12" r="1"></circle>
                            <circle cx="9" cy="5" r="1"></circle>
                            <circle cx="9" cy="19" r="1"></circle>
                            <circle cx="15" cy="12" r="1"></circle>
                            <circle cx="15" cy="5" r="1"></circle>
                            <circle cx="15" cy="19" r="1"></circle>
                          </svg>
                        </KanbanColumnHandle>
                      </header>
                      <KanbanColumnContent className="p-0.5">
                        <KanbanItem value="feature-151" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-3 hover:border-foreground/20 hover:shadow-sm min-h-[10.5rem] p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2 items-start justify-between min-w-0">
                                <div className="min-w-0">
                                  <div className="font-medium leading-5 line-clamp-2 text-sm" title="Custom report builder">
                                    Custom report builder
                                  </div>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                  Reports
                                </Badge>
                              </div>
                              <p className="leading-5 line-clamp-2 text-muted-foreground text-xs">
                                Saved metrics, scoped filters, and reusable executive views.
                              </p>
                              <div className="flex gap-1.5 items-center leading-5 min-w-0 text-muted-foreground text-xs">
                                <span className="font-medium text-foreground truncate" title="$81k ARR">
                                  $81k ARR
                                </span>
                                <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="truncate" title="Design review">
                                  Design review
                                </span>
                              </div>
                              <div className="flex flex-col gap-2 mt-auto">
                                <Progress className="**:data-[slot=progress-indicator]:bg-cyan-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="34" aria-valuetext="34%" role="progressbar" aria-labelledby="base-ui-_r_6_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_6_" role="presentation">
                                    Custom report builder progress
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "34%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                                <div className="flex gap-2 items-center justify-between text-muted-foreground text-xs">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <span className="truncate" title="Prototype">
                                      Prototype
                                    </span>
                                    <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="shrink-0 tabular-nums">
                                      34%
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="tabular-nums truncate">
                                      156 votes
                                    </span>
                                    <span className="dark:text-emerald-400 flex gap-1 items-center tabular-nums text-emerald-600" aria-label="21 more votes this month">
                                      <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                        <path d="m5 12 7-7 7 7"></path>
                                        <path d="M12 19V5"></path>
                                      </svg>
                                      21
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="feature-152" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-3 hover:border-foreground/20 hover:shadow-sm min-h-[10.5rem] p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2 items-start justify-between min-w-0">
                                <div className="min-w-0">
                                  <div className="font-medium leading-5 line-clamp-2 text-sm" title="Entitlement rules">
                                    Entitlement rules
                                  </div>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                                  Billing
                                </Badge>
                              </div>
                              <p className="leading-5 line-clamp-2 text-muted-foreground text-xs">
                                Plan-aware capability gates with account overrides and audit notes.
                              </p>
                              <div className="flex gap-1.5 items-center leading-5 min-w-0 text-muted-foreground text-xs">
                                <span className="font-medium text-foreground truncate" title="$63k ARR">
                                  $63k ARR
                                </span>
                                <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="truncate" title="Tech plan">
                                  Tech plan
                                </span>
                              </div>
                              <div className="flex flex-col gap-2 mt-auto">
                                <Progress className="**:data-[slot=progress-indicator]:bg-violet-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="38" aria-valuetext="38%" role="progressbar" aria-labelledby="base-ui-_r_7_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_7_" role="presentation">
                                    Entitlement rules progress
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "38%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                                <div className="flex gap-2 items-center justify-between text-muted-foreground text-xs">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <span className="truncate" title="Spec">
                                      Spec
                                    </span>
                                    <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="shrink-0 tabular-nums">
                                      38%
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="tabular-nums truncate">
                                      132 votes
                                    </span>
                                    <span className="flex gap-1 items-center tabular-nums text-muted-foreground" aria-label="3 fewer votes this month">
                                      <svg className="lucide lucide-arrow-down size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                        <path d="M12 5v14"></path>
                                        <path d="m19 12-7 7-7-7"></path>
                                      </svg>
                                      3
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="feature-153" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-3 hover:border-foreground/20 hover:shadow-sm min-h-[10.5rem] p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2 items-start justify-between min-w-0">
                                <div className="min-w-0">
                                  <div className="font-medium leading-5 line-clamp-2 text-sm" title="Renewal timeline view">
                                    Renewal timeline view
                                  </div>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                  Lifecycle
                                </Badge>
                              </div>
                              <p className="leading-5 line-clamp-2 text-muted-foreground text-xs">
                                Unify renewal notes, owner changes, and risk events in one history.
                              </p>
                              <div className="flex gap-1.5 items-center leading-5 min-w-0 text-muted-foreground text-xs">
                                <span className="font-medium text-foreground truncate" title="$49k ARR">
                                  $49k ARR
                                </span>
                                <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="truncate" title="Design review">
                                  Design review
                                </span>
                              </div>
                              <div className="flex flex-col gap-2 mt-auto">
                                <Progress className="**:data-[slot=progress-indicator]:bg-cyan-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="36" aria-valuetext="36%" role="progressbar" aria-labelledby="base-ui-_r_8_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_8_" role="presentation">
                                    Renewal timeline view progress
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "36%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                                <div className="flex gap-2 items-center justify-between text-muted-foreground text-xs">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <span className="truncate" title="Wireframe">
                                      Wireframe
                                    </span>
                                    <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="shrink-0 tabular-nums">
                                      36%
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="tabular-nums truncate">
                                      118 votes
                                    </span>
                                    <span className="dark:text-emerald-400 flex gap-1 items-center tabular-nums text-emerald-600" aria-label="12 more votes this month">
                                      <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                        <path d="m5 12 7-7 7 7"></path>
                                        <path d="M12 19V5"></path>
                                      </svg>
                                      12
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                      </KanbanColumnContent>
                    </Frame>
                  </KanbanColumn>
                  <KanbanColumn className="max-w-[18.5rem] shrink-0 sm:w-[18.5rem] w-[calc(100vw-4rem)]" value="building" dragging="false">
                    <Frame className="group/column" spacing="sm" aria-label="Building: Actively in progress">
                      <header className="flex flex-row gap-2 items-center min-h-10 px-2 py-2">
                        <span className="bg-amber-500 dark:bg-amber-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <div className="flex-1 min-w-0">
                          <div className="flex gap-1.5 items-center min-w-0">
                            <div className="font-semibold text-sm truncate" title="Building">
                              Building
                            </div>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                              2
                            </Badge>
                          </div>
                          <p className="mt-0.5 text-muted-foreground text-xs truncate">
                            Actively in progress
                          </p>
                        </div>
                        <Button className="group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto hover:text-foreground opacity-0 pointer-events-none text-muted-foreground transition-opacity" type="button" tabIndex="0" aria-label="Add building feature">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </Button>
                        <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto group/button hover:text-foreground inline-flex items-center justify-center outline-none pointer-events-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Building column">
                          <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                            <circle cx="9" cy="12" r="1"></circle>
                            <circle cx="9" cy="5" r="1"></circle>
                            <circle cx="9" cy="19" r="1"></circle>
                            <circle cx="15" cy="12" r="1"></circle>
                            <circle cx="15" cy="5" r="1"></circle>
                            <circle cx="15" cy="19" r="1"></circle>
                          </svg>
                        </KanbanColumnHandle>
                      </header>
                      <KanbanColumnContent className="p-0.5">
                        <KanbanItem value="feature-201" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-3 hover:border-foreground/20 hover:shadow-sm min-h-[10.5rem] p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2 items-start justify-between min-w-0">
                                <div className="min-w-0">
                                  <div className="font-medium leading-5 line-clamp-2 text-sm" title="Co-edit workspace">
                                    Co-edit workspace
                                  </div>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                  Teams
                                </Badge>
                              </div>
                              <p className="leading-5 line-clamp-2 text-muted-foreground text-xs">
                                Shared editing with presence, conflict recovery, and audit history.
                              </p>
                              <div className="flex gap-1.5 items-center leading-5 min-w-0 text-muted-foreground text-xs">
                                <span className="font-medium text-foreground truncate" title="$118k ARR">
                                  $118k ARR
                                </span>
                                <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="truncate" title="May beta">
                                  May beta
                                </span>
                              </div>
                              <div className="flex flex-col gap-2 mt-auto">
                                <Progress className="**:data-[slot=progress-indicator]:bg-yellow-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="42" aria-valuetext="42%" role="progressbar" aria-labelledby="base-ui-_r_9_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_9_" role="presentation">
                                    Co-edit workspace progress
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "42%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                                <div className="flex gap-2 items-center justify-between text-muted-foreground text-xs">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <span className="truncate" title="Dependency">
                                      Dependency
                                    </span>
                                    <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="shrink-0 tabular-nums">
                                      42%
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="tabular-nums truncate">
                                      234 votes
                                    </span>
                                    <span className="dark:text-emerald-400 flex gap-1 items-center tabular-nums text-emerald-600" aria-label="24 more votes this month">
                                      <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                        <path d="m5 12 7-7 7 7"></path>
                                        <path d="M12 19V5"></path>
                                      </svg>
                                      24
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="feature-202" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-3 hover:border-foreground/20 hover:shadow-sm min-h-[10.5rem] p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2 items-start justify-between min-w-0">
                                <div className="min-w-0">
                                  <div className="font-medium leading-5 line-clamp-2 text-sm" title="API v2 migration">
                                    API v2 migration
                                  </div>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  API
                                </Badge>
                              </div>
                              <p className="leading-5 line-clamp-2 text-muted-foreground text-xs">
                                Typed REST contract, migration helpers, and staged partner rollout.
                              </p>
                              <div className="flex gap-1.5 items-center leading-5 min-w-0 text-muted-foreground text-xs">
                                <span className="font-medium text-foreground truncate" title="$54k ARR">
                                  $54k ARR
                                </span>
                                <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="truncate" title="Partner beta">
                                  Partner beta
                                </span>
                              </div>
                              <div className="flex flex-col gap-2 mt-auto">
                                <Progress className="**:data-[slot=progress-indicator]:bg-red-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="36" aria-valuetext="36%" role="progressbar" aria-labelledby="base-ui-_r_a_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_a_" role="presentation">
                                    API v2 migration progress
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "36%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                                <div className="flex gap-2 items-center justify-between text-muted-foreground text-xs">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <span className="truncate" title="At risk">
                                      At risk
                                    </span>
                                    <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="shrink-0 tabular-nums">
                                      36%
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="tabular-nums truncate">
                                      176 votes
                                    </span>
                                    <span className="flex gap-1 items-center tabular-nums text-red-500" aria-label="11 fewer votes this month">
                                      <svg className="lucide lucide-arrow-down size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                        <path d="M12 5v14"></path>
                                        <path d="m19 12-7 7-7-7"></path>
                                      </svg>
                                      11
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                      </KanbanColumnContent>
                    </Frame>
                  </KanbanColumn>
                  <KanbanColumn className="max-w-[18.5rem] shrink-0 sm:w-[18.5rem] w-[calc(100vw-4rem)]" value="testing" dragging="false">
                    <Frame className="group/column" spacing="sm" aria-label="Testing: Quality review">
                      <header className="flex flex-row gap-2 items-center min-h-10 px-2 py-2">
                        <span className="bg-violet-500 dark:bg-violet-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <div className="flex-1 min-w-0">
                          <div className="flex gap-1.5 items-center min-w-0">
                            <div className="font-semibold text-sm truncate" title="Testing">
                              Testing
                            </div>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                              3
                            </Badge>
                          </div>
                          <p className="mt-0.5 text-muted-foreground text-xs truncate">
                            Quality review
                          </p>
                        </div>
                        <Button className="group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto hover:text-foreground opacity-0 pointer-events-none text-muted-foreground transition-opacity" type="button" tabIndex="0" aria-label="Add testing feature">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </Button>
                        <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto group/button hover:text-foreground inline-flex items-center justify-center outline-none pointer-events-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Testing column">
                          <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                            <circle cx="9" cy="12" r="1"></circle>
                            <circle cx="9" cy="5" r="1"></circle>
                            <circle cx="9" cy="19" r="1"></circle>
                            <circle cx="15" cy="12" r="1"></circle>
                            <circle cx="15" cy="5" r="1"></circle>
                            <circle cx="15" cy="19" r="1"></circle>
                          </svg>
                        </KanbanColumnHandle>
                      </header>
                      <KanbanColumnContent className="p-0.5">
                        <KanbanItem value="feature-301" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-3 hover:border-foreground/20 hover:shadow-sm min-h-[10.5rem] p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2 items-start justify-between min-w-0">
                                <div className="min-w-0">
                                  <div className="font-medium leading-5 line-clamp-2 text-sm" title="Policy-based permissions">
                                    Policy-based permissions
                                  </div>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  Security
                                </Badge>
                              </div>
                              <p className="leading-5 line-clamp-2 text-muted-foreground text-xs">
                                Role templates, resource-level grants, and audit-ready overrides.
                              </p>
                              <div className="flex gap-1.5 items-center leading-5 min-w-0 text-muted-foreground text-xs">
                                <span className="font-medium text-foreground truncate" title="$96k ARR">
                                  $96k ARR
                                </span>
                                <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="truncate" title="May rollout">
                                  May rollout
                                </span>
                              </div>
                              <div className="flex flex-col gap-2 mt-auto">
                                <Progress className="**:data-[slot=progress-indicator]:bg-violet-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="44" aria-valuetext="44%" role="progressbar" aria-labelledby="base-ui-_r_b_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_b_" role="presentation">
                                    Policy-based permissions progress
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "44%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                                <div className="flex gap-2 items-center justify-between text-muted-foreground text-xs">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <span className="truncate" title="Beta review">
                                      Beta review
                                    </span>
                                    <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="shrink-0 tabular-nums">
                                      44%
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="tabular-nums truncate">
                                      215 votes
                                    </span>
                                    <span className="dark:text-emerald-400 flex gap-1 items-center tabular-nums text-emerald-600" aria-label="9 more votes this month">
                                      <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                        <path d="m5 12 7-7 7 7"></path>
                                        <path d="M12 19V5"></path>
                                      </svg>
                                      9
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="feature-302" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-3 hover:border-foreground/20 hover:shadow-sm min-h-[10.5rem] p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2 items-start justify-between min-w-0">
                                <div className="min-w-0">
                                  <div className="font-medium leading-5 line-clamp-2 text-sm" title="Inline release notes">
                                    Inline release notes
                                  </div>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                  Lifecycle
                                </Badge>
                              </div>
                              <p className="leading-5 line-clamp-2 text-muted-foreground text-xs">
                                Targeted release notes connected to shipped features and segments.
                              </p>
                              <div className="flex gap-1.5 items-center leading-5 min-w-0 text-muted-foreground text-xs">
                                <span className="font-medium text-foreground truncate" title="28 teams">
                                  28 teams
                                </span>
                                <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="truncate" title="Blocked">
                                  Blocked
                                </span>
                              </div>
                              <div className="flex flex-col gap-2 mt-auto">
                                <Progress className="**:data-[slot=progress-indicator]:bg-red-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="32" aria-valuetext="32%" role="progressbar" aria-labelledby="base-ui-_r_c_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_c_" role="presentation">
                                    Inline release notes progress
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "32%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                                <div className="flex gap-2 items-center justify-between text-muted-foreground text-xs">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <span className="truncate" title="Blocked">
                                      Blocked
                                    </span>
                                    <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="shrink-0 tabular-nums">
                                      32%
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="tabular-nums truncate">
                                      121 votes
                                    </span>
                                    <span className="flex gap-1 items-center tabular-nums text-red-500" aria-label="4 fewer votes this month">
                                      <svg className="lucide lucide-arrow-down size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                        <path d="M12 5v14"></path>
                                        <path d="m19 12-7 7-7-7"></path>
                                      </svg>
                                      4
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="feature-303" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-3 hover:border-foreground/20 hover:shadow-sm min-h-[10.5rem] p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2 items-start justify-between min-w-0">
                                <div className="min-w-0">
                                  <div className="font-medium leading-5 line-clamp-2 text-sm" title="Data export guardrails">
                                    Data export guardrails
                                  </div>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                                  Data
                                </Badge>
                              </div>
                              <p className="leading-5 line-clamp-2 text-muted-foreground text-xs">
                                Validate export scopes, redaction rules, and audit messages before GA.
                              </p>
                              <div className="flex gap-1.5 items-center leading-5 min-w-0 text-muted-foreground text-xs">
                                <span className="font-medium text-foreground truncate" title="$58k ARR">
                                  $58k ARR
                                </span>
                                <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="truncate" title="QA pass">
                                  QA pass
                                </span>
                              </div>
                              <div className="flex flex-col gap-2 mt-auto">
                                <Progress className="**:data-[slot=progress-indicator]:bg-violet-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="52" aria-valuetext="52%" role="progressbar" aria-labelledby="base-ui-_r_d_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_d_" role="presentation">
                                    Data export guardrails progress
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "52%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                                <div className="flex gap-2 items-center justify-between text-muted-foreground text-xs">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <span className="truncate" title="Test plan">
                                      Test plan
                                    </span>
                                    <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="shrink-0 tabular-nums">
                                      52%
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="tabular-nums truncate">
                                      167 votes
                                    </span>
                                    <span className="dark:text-emerald-400 flex gap-1 items-center tabular-nums text-emerald-600" aria-label="6 more votes this month">
                                      <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                        <path d="m5 12 7-7 7 7"></path>
                                        <path d="M12 19V5"></path>
                                      </svg>
                                      6
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                      </KanbanColumnContent>
                    </Frame>
                  </KanbanColumn>
                  <KanbanColumn className="max-w-[18.5rem] shrink-0 sm:w-[18.5rem] w-[calc(100vw-4rem)]" value="shipped" dragging="false">
                    <Frame className="group/column" spacing="sm" aria-label="Shipped: Available to users">
                      <header className="flex flex-row gap-2 items-center min-h-10 px-2 py-2">
                        <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <div className="flex-1 min-w-0">
                          <div className="flex gap-1.5 items-center min-w-0">
                            <div className="font-semibold text-sm truncate" title="Shipped">
                              Shipped
                            </div>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                              2
                            </Badge>
                          </div>
                          <p className="mt-0.5 text-muted-foreground text-xs truncate">
                            Available to users
                          </p>
                        </div>
                        <Button className="group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto hover:text-foreground opacity-0 pointer-events-none text-muted-foreground transition-opacity" type="button" tabIndex="0" aria-label="Add shipped feature">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </Button>
                        <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto group/button hover:text-foreground inline-flex items-center justify-center outline-none pointer-events-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Shipped column">
                          <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                            <circle cx="9" cy="12" r="1"></circle>
                            <circle cx="9" cy="5" r="1"></circle>
                            <circle cx="9" cy="19" r="1"></circle>
                            <circle cx="15" cy="12" r="1"></circle>
                            <circle cx="15" cy="5" r="1"></circle>
                            <circle cx="15" cy="19" r="1"></circle>
                          </svg>
                        </KanbanColumnHandle>
                      </header>
                      <KanbanColumnContent className="p-0.5">
                        <KanbanItem value="feature-401" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-3 hover:border-foreground/20 hover:shadow-sm min-h-[10.5rem] p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2 items-start justify-between min-w-0">
                                <div className="min-w-0">
                                  <div className="font-medium leading-5 line-clamp-2 text-sm" title="Dark mode">
                                    Dark mode
                                  </div>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  Live
                                </Badge>
                              </div>
                              <p className="leading-5 line-clamp-2 text-muted-foreground text-xs">
                                System-aware theme with workspace and personal overrides.
                              </p>
                              <div className="flex gap-1.5 items-center leading-5 min-w-0 text-muted-foreground text-xs">
                                <span className="font-medium text-foreground truncate" title="41% adoption">
                                  41% adoption
                                </span>
                                <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="truncate" title="Live">
                                  Live
                                </span>
                              </div>
                              <div className="flex flex-col gap-2 mt-auto">
                                <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" aria-valuetext="40%" role="progressbar" aria-labelledby="base-ui-_r_e_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_e_" role="presentation">
                                    Dark mode progress
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "40%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                                <div className="flex gap-2 items-center justify-between text-muted-foreground text-xs">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <span className="truncate" title="Live">
                                      Live
                                    </span>
                                    <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="shrink-0 tabular-nums">
                                      40%
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="tabular-nums truncate">
                                      456 votes
                                    </span>
                                    <span className="dark:text-emerald-400 flex gap-1 items-center tabular-nums text-emerald-600" aria-label="32 more votes this month">
                                      <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                        <path d="m5 12 7-7 7 7"></path>
                                        <path d="M12 19V5"></path>
                                      </svg>
                                      32
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </FramePanel>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="feature-402" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <FramePanel className="flex flex-col gap-3 hover:border-foreground/20 hover:shadow-sm min-h-[10.5rem] p-3 transition-[border-color,box-shadow]">
                              <div className="flex gap-2 items-start justify-between min-w-0">
                                <div className="min-w-0">
                                  <div className="font-medium leading-5 line-clamp-2 text-sm" title="Export to CSV">
                                    Export to CSV
                                  </div>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  Live
                                </Badge>
                              </div>
                              <p className="leading-5 line-clamp-2 text-muted-foreground text-xs">
                                Bulk exports with saved field sets and scoped permissions.
                              </p>
                              <div className="flex gap-1.5 items-center leading-5 min-w-0 text-muted-foreground text-xs">
                                <span className="font-medium text-foreground truncate" title="31 accounts">
                                  31 accounts
                                </span>
                                <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="truncate" title="Live">
                                  Live
                                </span>
                              </div>
                              <div className="flex flex-col gap-2 mt-auto">
                                <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="30" aria-valuetext="30%" role="progressbar" aria-labelledby="base-ui-_r_f_">
                                  <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_f_" role="presentation">
                                    Export to CSV progress
                                  </ProgressLabel>
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "30%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                                <div className="flex gap-2 items-center justify-between text-muted-foreground text-xs">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <span className="truncate" title="Live">
                                      Live
                                    </span>
                                    <span className="bg-muted-foreground/35 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="shrink-0 tabular-nums">
                                      30%
                                    </span>
                                  </div>
                                  <div className="flex gap-2 items-center min-w-0">
                                    <span className="tabular-nums truncate">
                                      189 votes
                                    </span>
                                    <span className="flex gap-1 items-center tabular-nums text-muted-foreground" aria-label="8 fewer votes this month">
                                      <svg className="lucide lucide-arrow-down size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                        <path d="M12 5v14"></path>
                                        <path d="m19 12-7 7-7-7"></path>
                                      </svg>
                                      8
                                    </span>
                                  </div>
                                </div>
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
            <div className="data-horizontal:border-t data-horizontal:border-t-transparent data-horizontal:flex-col data-horizontal:h-2.5 data-vertical:border-l data-vertical:border-l-transparent data-vertical:h-full data-vertical:w-2.5 flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_r_0_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "832.4945770065076px"}}>
              <div className="bg-foreground/15 flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
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
